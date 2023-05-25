from django.urls import path
from .views import book_index, book_details, book_delete, book_update, add_book, book_create


# & to make namespace
app_name = "book_store"

urlpatterns = [
    path("", book_index, name="book-index"),
    path("<int:bid>/", book_details, name="book-details"),
    path('book_delete/<int:bid>', book_delete, name="book-delete"),
    path('book_update/<int:bid>', book_update, name="book-update"),
    path('create/', book_create, name="book-create"),
    path('add/', add_book, name="create"),

]
