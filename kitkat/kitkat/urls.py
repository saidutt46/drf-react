from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('clientside.urls')),
    path('', include('jimjam.urls')),
    path('', include('accounts.urls'))
]
