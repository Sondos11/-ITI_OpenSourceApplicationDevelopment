from django.urls import path
from .views import books_index, book_details, book_delete, book_update, book_create

app_name = 'books'


urlpatterns = [
    path('index', books_index, name='book-index'),
    path('details/<int:pk>', book_details, name="book-detail"),
    path('delete/<int:pk>', book_delete, name="book-delete"),
    path('update/<int:pk>', book_update, name="book-update"),
    path('create/', book_create, name="book-create"),
]

