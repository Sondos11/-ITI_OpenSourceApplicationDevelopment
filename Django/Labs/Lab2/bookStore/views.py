from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from .models import Book
from .form import BookForm

def index(request):
    return render(request, 'main/base_layout.html')
  
def bookstore_list(request):
    my_context = {'books_list': Book.objects.all()}
    return render(request, 'bookstore_list.html',context=my_context)

def book_add(request):
    form = BookForm()
    if request.method == "POST":
        form = BookForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('books-list')
    return render(request,'book_create.html', context={'form' : form})

def book_details(request, **kwargs):
    book_id = kwargs.get('book_id')
    book = Book.objects.get(id = book_id)
    my_context = {'book': book}
    return render(request, 'book_details.html', context=my_context)

def book_update(request, book_id):
    book = Book.objects.get(id=book_id)
    form = BookForm(instance=book)
    if request.method == "POST":
        form = BookForm(data=request.POST, instance=book)
        if form.is_valid():
            form.save()
            return redirect('books-list')
    return render(request, 'book_edit.html', context={'form': form, 'book': book})

def book_delete(request, **kwargs):
    book_id = kwargs.get('book_id')
    Book.objects.get(id=book_id).delete()
    return redirect('books-list') 


