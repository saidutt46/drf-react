from jimjam.models import *
from rest_framework import viewsets, permissions
from .serializers import *

# Superuser Viewset
class SuperUserViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = SuperUserSerializer

    def get_queryset(self):
        return self.request.user.users.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

# Posts Viewset
class PostsViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PostsSerializer