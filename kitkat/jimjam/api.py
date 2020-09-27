from jimjam.models import *
from rest_framework import viewsets, permissions
from .serializers import *

# Superuser Viewset
class SuperUserViewSet(viewsets.ModelViewSet):
    queryset = SuperUser.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SuperUserSerializer

# Posts Viewset
class PostsViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PostsSerializer