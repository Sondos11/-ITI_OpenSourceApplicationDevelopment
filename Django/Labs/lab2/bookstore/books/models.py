from django.db import models

# Create your models here.

class book(models.Model):
        title = models.CharField("Book Title", max_length=3, unique=True)
        description = models.TextField("Book Description")
        rate = models.PositiveIntegerField(default=0)
        views = models.PositiveIntegerField(default=0)
        created_at = models.DateTimeField(auto_now_add=True)
        updated_at = models.DateTimeField(auto_now=True)
        
        def __str__(self):
            return f"Title {self.title}"