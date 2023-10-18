from django.urls import path
from . import views

urlpatterns = [
    path('electronics/', views.electronics, name='department-electronics'),
    path('update_item/', views.updateItem, name='department-update_item'),
]
