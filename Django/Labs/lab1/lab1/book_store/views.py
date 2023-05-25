from django.shortcuts import redirect, render


books_list = [
    {
        'index': 0,
        'id': 1,
        'name': 'Hay',
        'author': "Mariam",
        'description': "talking about Life Story ",
    },
    {
        'index': 1,
        'id': 2,
        'name': 'book2',
        'author': "Zina",
        'description': "Learning ML & PYTHON",
    },
    {
        'index': 2,
        'id': 3,
        'name': 'book3',
        'author': "Gehad",
        'description': "football & volleyball",
    },
    {
        'index': 3,
        'id': 4,
        'name': 'book4',
        'author': "mohamed",
        'description': "Travelling & experience",
    },
]


def get_book(book_id):
    for book in books_list:
        if book["id"] == book_id:
            return book
    return None


def book_index(request):
    return render(request, "books.html", context={"books": books_list})


def book_details(request, **kwargs):
    book_id = kwargs.get("bid")
    book = get_book(book_id)
    print(book_id)
    return render(request, "books_details.html", context=book)


def book_delete(request, **kwargs):
    book_id = kwargs.get("bid")
    book = get_book(book_id)
    if books_list:
        books_list.remove(book)
    return redirect('book_store:book-index')


def book_update(request, **kwargs):
    book_id = kwargs.get("bid")
    book = get_book(book_id)
    for b in books_list:
        if b == book:
            b['name'] = f"Update {book['name']}"

    return redirect('book_store:book-index')


def book_create(request):
    return render(request, "create.html")


def add_book(request):
    if request.method == "POST":
        size = len(books_list)+1
        print(request.POST)
        new_book = {
            "id": size,
            "name": request.POST['name'],
            "author": request.POST['author'],
            "description": request.POST['description']
        }
        books_list.append(new_book)
        size += 1
    return redirect('book_store:book-index')
