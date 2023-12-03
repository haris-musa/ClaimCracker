from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from keras.models import load_model
from keras.preprocessing.sequence import pad_sequences
from keras.preprocessing.text import Tokenizer
import preprocess_kgptalkie as ps

model1 = load_model("classifier/models/model1.h5")
model2 = load_model("classifier/models/model2.h5")
model3 = load_model("classifier/models/model3.h5")

tokenizer = Tokenizer()


@api_view(["POST"])
def predict(request):
    news_text = request.data.get("text")

    cleaned_text = ps.remove_special_chars(news_text)
    tokenized_text = tokenizer.texts_to_sequences([cleaned_text])
    padded_text = pad_sequences(tokenized_text, maxlen=1000)

    pred1 = (model1.predict(padded_text) >= 0.5).astype(int)
    pred2 = (model2.predict(padded_text) >= 0.5).astype(int)
    pred3 = (model3.predict(padded_text) >= 0.5).astype(int)

    return JsonResponse(
        {"LSTM": int(pred1[0]), "Bi-LSTM": int(pred2[0]), "RNN": int(pred3[0])}
    )
