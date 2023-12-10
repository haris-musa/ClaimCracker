from django.urls import path
from . import views

urlpatterns = [
    path('', views.openai_endpoint, name='openai_endpoint'),
]
