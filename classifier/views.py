from django.http import JsonResponse
from rest_framework.decorators import api_view
from keras.models import load_model
from keras.preprocessing.sequence import pad_sequences
import pickle
import numpy as np
from sklearn.linear_model import LogisticRegression

model1 = load_model("classifier/models/model1.h5")
model2 = load_model("classifier/models/model2.h5")
model3 = load_model("classifier/models/model3.h5")
model4 = load_model("classifier/models/model4.h5")
model5 = load_model("classifier/models/model5.h5")

with open('tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)

@api_view(["POST"])
def predict(request):
    news_text = request.data.get("text")
    tokenized_text = tokenizer.texts_to_sequences([news_text])
    padded_text = pad_sequences(tokenized_text, maxlen=1000)

    members = [model1, model2, model3, model4, model5]

    pred1 = (model1.predict(padded_text) >= 0.5).astype(int)
    pred2 = (model2.predict(padded_text) >= 0.5).astype(int)
    pred3 = (model3.predict(padded_text) >= 0.5).astype(int)
    pred4 = (model4.predict(padded_text) >= 0.5).astype(int)
    pred5 = (model5.predict(padded_text) >= 0.5).astype(int)

    stacked_predictions = np.hstack((pred1, pred2, pred3, pred4, pred5))

    final_prediction = np.mean(stacked_predictions, axis=1) >= 0.5

    return JsonResponse({
        "LSTM": int(pred1[0] >= 0.5),
        "Bi-LSTM": int(pred2[0] >= 0.5),
        "RNN": int(pred3[0] >= 0.5),
        "CNN": int(pred4[0] >= 0.5),
        "GRU": int(pred5[0] >= 0.5),
        "Ensemble": int(final_prediction[0])
    })