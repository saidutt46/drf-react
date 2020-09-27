from rest_framework import routers
from .api import *
from django.conf.urls import url, include

router = routers.DefaultRouter()
router.register(r'users', SuperUserViewSet, 'users')
router.register(r'posts', PostsViewSet, 'posts')

urlpatterns = [
    url(r'^api/', include((router.urls, 'jimjam'), namespace='api'))
]