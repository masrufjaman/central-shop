from django.shortcuts import render


def cart(request):
    return render(request, 'cart/cart.html')


def checkout(request):
    return render(request, 'cart/checkout.html')
