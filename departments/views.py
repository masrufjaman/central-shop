from django.shortcuts import render
from .models import *


def electronics(request):
    products = Product.objects.all()
    context = {'products': products}
    return render(request, 'departments/electronics.html', context)
