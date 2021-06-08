from django.shortcuts import render


def electronics(request):
    return render(request, 'departments/electronics.html')
