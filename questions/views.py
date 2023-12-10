from django.http import JsonResponse
from rest_framework.decorators import api_view
import os
import json
import openai

openai_api_key = os.getenv("OPENAI_API_KEY")

if not openai_api_key:
    raise ValueError("No OpenAI API key found. Please set the OPENAI_API_KEY environment variable.")

client = openai.Client(api_key=openai_api_key)

system_message = {
    "role": "system", 
    "content": "You are a knowledgeable assistant programmed to provide concise (40 words max), direct, and assertive responses. Use your extensive training data to make educated guesses about future events or predictions, grounding your responses in current data, known trends, and logical extrapolation. Avoid phrases that indicate uncertainty or the limitations of AI. Instead, focus on delivering clear and confident answers that reflect a well-reasoned analysis based on the most recent and relevant information available."
}

def predict_answer(question):
    try:
        response = client.chat.completions.create(
            model="gpt-4-1106-preview",
            messages=[
                system_message,
                {"role": "user", "content": question}
            ]
        )
        answer = response.choices[0].message.content
        return answer
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

@api_view(["POST"])
def openai_endpoint(request):
    try:
        data = request.data  # Using DRF's request.data for JSON parsing
        question = data.get('question')
        if not question:
            return JsonResponse({'error': 'No question provided'}, status=400)

        answer = predict_answer(question)
        print(answer)
        if answer is not None:
            return JsonResponse({'answer': answer})
        else:
            return JsonResponse({'error': 'Failed to get an answer from OpenAI'}, status=500)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)