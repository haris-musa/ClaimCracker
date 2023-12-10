from django.urls import path
from . import views

urlpatterns = [
    path('api/deep_learning_papers/', views.fetch_deep_learning_papers, name='fetch_deep_learning_papers'),
]
