from django.http import HttpResponse
from django.conf import settings
import os

def index_view(request):
    with open(os.path.join(settings.REACT_APP_DIR, 'index.html'), 'r') as file:
        return HttpResponse(file.read())