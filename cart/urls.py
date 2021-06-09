from django.urls import path
from . import views

urlpatterns = [
    path('', views.cart, name='cart-cart'),
    path('checkout/', views.checkout, name='cart-checkout'),
]
