from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from keras.models import load_model, Sequential
from keras.utils import pad_sequences
from keras.preprocessing.text import Tokenizer
from keras.layers import Embedding, Dense, LSTM, Conv1D, MaxPool1D, Dropout
import preprocess_kgptalkie as ps
import tensorflow as tf
import numpy as np
from keras.backend import manual_variable_initialization
import pandas as pd
from sklearn.utils import shuffle
from numpy.lib.shape_base import split
from numpy import dstack
from sklearn.linear_model import LogisticRegression

# def stacked_dataset(members, inputX):
# 	stackX = None
# 	for model in members:

# 		yhat = model.predict(inputX, verbose=0)

# 		if stackX is None:
# 			stackX = yhat #
# 		else:
# 			stackX = dstack((stackX, yhat))

# 	stackX = stackX.reshape((stackX.shape[0], stackX.shape[1]*stackX.shape[2]))
# 	return stackX

# dependencies = {
#     'accuracy': accuracy_score
# }

# def load_all_models(n_models):
# 	all_models = list()
# 	for i in range(n_models):

# 		filename = 'model' + str(i + 1) + '.h5'

# 		model = load_model(filename,custom_objects=dependencies)

# 		all_models.append(model)
# 	return all_models

# def fit_stacked_model(members, inputX, inputy):

# 	stackedX = stacked_dataset(members, inputX)

# 	model = LogisticRegression()
# 	model.fit(stackedX, inputy)
# 	return model

# n_members = 5
# members = load_all_models(n_members)

# model = fit_stacked_model(members, X_test,y_test)

# def stacked_prediction(members, model, inputX):

# 	stackedX = stacked_dataset(members, inputX)

# 	yhat = model.predict(stackedX)
# 	return yhat

@api_view(["POST"])
def predict(request):
    news_text = request.data.get("text")

    tf.keras.utils.set_random_seed(0)

    True_data = pd.read_csv('Dataset - Real.csv')
    True_data = True_data.dropna()

    Fake_data = pd.read_csv('Dataset - Fake.csv')
    Fake_data = Fake_data.dropna()

    True_data_copy = True_data.copy()
    Fake_data_copy = Fake_data.copy()

    True_data_copy['News_Text'] = True_data_copy['News_Title'] + " " + True_data_copy['News_Text']
    Fake_data_copy['News_Text'] = Fake_data_copy['News_Title'] + " " + Fake_data_copy['News_Text']

    True_data_copy['News_Text'] = True_data_copy['News_Text'].apply(lambda x: str(x).lower())

    Fake_data_copy['News_Text'] = Fake_data_copy['News_Text'].apply(lambda x: str(x).lower())

    True_data_copy['class'] = 1
    Fake_data_copy['class'] = 0

    True_data = True_data_copy[['News_Text', 'class']]
    Fake_data = Fake_data_copy[['News_Text', 'class']]

    data = pd.concat([True_data, Fake_data], ignore_index=True)

    data = shuffle(data)

    data['News_Text'] = data['News_Text'].apply(lambda x: ps.remove_special_chars(x))

    X = [d.split() for d in data['News_Text'].tolist()]

    tokenizer = Tokenizer()
    tokenizer.fit_on_texts(X)

    manual_variable_initialization(True)

    print(news_text)

    model1 = load_model("classifier/models/model1.h5")
    model2 = load_model("classifier/models/model2.h5")
    model3 = load_model("classifier/models/model3.h5")
    model4 = load_model("classifier/models/model4.h5")
    model5 = load_model("classifier/models/model5.h5")
   
    tokenized_text = tokenizer.texts_to_sequences([news_text])
    padded_text = pad_sequences(tokenized_text, maxlen=1000)

    pred1 = (model1.predict(padded_text) >= 0.5).astype(int)
    pred2 = (model2.predict(padded_text) >= 0.5).astype(int)
    pred3 = (model3.predict(padded_text) >= 0.5).astype(int)
    pred4 = (model4.predict(padded_text) >= 0.5).astype(int)
    pred5 = (model5.predict(padded_text) >= 0.5).astype(int)
	
    #predictionStacked = (model.predict(padded_text) >= 0.5).astype(int)

    print(pred1)
    print(pred2)
    print(pred3)
    print(pred4)
    print(pred5)

    return JsonResponse(
        {"LSTM": int(pred1[0]), "Bi-LSTM": int(pred2[0]), "RNN": int(pred3[0]), "CNN": int(pred4[0]), "GRU": int(pred5[0])}
    )