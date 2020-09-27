from rest_framework import serializers
from jimjam.models import *

# Superuser Serializer
class SuperUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SuperUser
        fields = '__all__'

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = '__all__'