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

    model1.load_weights('classifier/models/model1_weights.h5')
    model2.load_weights('classifier/models/model2_weights.h5')
    model3.load_weights('classifier/models/model3_weights.h5')
   
    tokenized_text = tokenizer.texts_to_sequences([news_text])
    padded_text = pad_sequences(tokenized_text, maxlen=1000)

    pred1 = (model1.predict(padded_text) >= 0.5).astype(int)
    pred2 = (model2.predict(padded_text) >= 0.5).astype(int)
    pred3 = (model3.predict(padded_text) >= 0.5).astype(int)

    print(pred1)
    print(pred2)
    print(pred3)

    return JsonResponse(
        {"LSTM": int(pred1[0]), "Bi-LSTM": int(pred2[0]), "RNN": int(pred3[0])}
    )