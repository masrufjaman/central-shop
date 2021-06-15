from django.shortcuts import render
from django.http import JsonResponse
from .models import *


def electronics(request):
    products = Product.objects.all()
    context = {'products': products}
    return render(request, 'departments/electronics.html', context)


def updateItem(request):
    return JsonResponse('Item was added', safe=False)
