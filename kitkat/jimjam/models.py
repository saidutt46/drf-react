from django.db import models

# Create your models here.
class SuperUser(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    username = models.CharField(max_length=50, unique=True)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Posts(models.Model):
    user_id = models.ForeignKey(SuperUser, on_delete=models.CASCADE)
    description = models.CharField(max_length=500, null=False, default='Test Post')
    created_at = models.DateTimeField(auto_now_add=True)
    
