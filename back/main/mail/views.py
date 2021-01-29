from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .services import sendEmail

@csrf_exempt
def home(self, request):
    return JsonResponse({ "reponse": "mail view" })

@csrf_exempt
def sendMail(request):
    result = { "response": 400 }
    if request.method == 'POST':
        sent = sendEmail(**eval(request.body.decode('utf-8')))
        result = { "response": 200 } if sent else result
        print(JsonResponse(result))
    return JsonResponse(result)