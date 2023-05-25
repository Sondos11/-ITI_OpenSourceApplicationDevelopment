from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from .models import book
from django.views.decorators.csrf import csrf_exempt
from .forms import bookForm

def books_index(request):
    books = book.objects.all()
    return render(request, 'book/book_index.html', context={"books": books})
    
def book_details(request, pk):
    singlebook = book.objects.get(pk=pk)
    return render(request, 'book/book_details.html', context={"book": singlebook})

def book_delete(request, pk):
    book.objects.get(pk=pk).delete()
    return redirect("books:book-index")

def book_create(request):
    form = bookForm()
    if request.method == "POST":
        form = bookForm(data=request.POST)
        if form.is_valid():
            form.save()
            return redirect("books:book-index")
    return render(request, 'book/book_create.html', context={
        'form': form
    })

def book_update(request, pk):
    singlebook = book.objects.get(pk=pk)
    form = bookForm(instance=singlebook)
    if request.method == "POST":
        form = bookForm(data=request.POST, instance=singlebook)
        if form.is_valid():
            form.save()
            return redirect("books:book-index")
    print("moshkela")    
    return render(request, 'book/book_update.html', context={
        'form': form, 
        'book': singlebook
    }) 