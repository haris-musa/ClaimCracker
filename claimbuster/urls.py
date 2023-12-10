from django.urls import path
from . import views

urlpatterns = [
    path('check_claim/', views.check_claim, name='check_claim'),
]
