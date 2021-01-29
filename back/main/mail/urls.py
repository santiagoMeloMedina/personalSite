
from django.urls import path
from .views import home, sendMail

urlpatterns = [
    path('', home),
    path('send', sendMail)
]