from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from rest_framework.decorators import api_view
import requests
import json


@api_view(["POST"])
def check_claim(request):
    claim = request.data.get("claim", "")
    if not claim:
        return JsonResponse({"error": "No claim found in request data"}, status=400)

    api_key = "75167b5235864e74b8b10a3dd25458f0"
    api_endpoint = "https://idir.uta.edu/claimbuster/api/v2/score/text/"
    request_headers = {"x-api-key": api_key}
    payload = {"input_text": claim}

    try:
        api_response = requests.post(url=api_endpoint, json=payload, headers=request_headers)
        api_response.raise_for_status()
    except requests.exceptions.RequestException as e:
        return JsonResponse({"error": f"Error calling ClaimBuster API: {e}"}, status=500)

    data = api_response.json()
    results = data.get("results", [])
    if results:
        score = results[0].get("score")
        if score is not None:
            if score < 0.35:
                return JsonResponse({"error": "Claim score too low", "score": score}, status=400)
            return JsonResponse({"score": score})
    
    return JsonResponse({"error": "No score found in ClaimBuster API response data"}, status=500)
