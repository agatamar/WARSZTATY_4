# Workshop_4

Technical requirements: Python 3.6, Django 1.10.3,Faker 0.7.3, please see requirements.txt

Example screenshot from application: workshop4_screenshot.png

During workshops 4, frontend application for cataloging books using the REST method has been created . 
The project consists of two parts: Server - written in Django, implementing REST functionality, Client - written in HTML and JavaScript, communicating with the server using AJAX. 
The server implements the Book class with its ISBN, title, author, publisher and genre.

1. The customer has to implement only the home page.
2. This page is to show all books created in the system. 
3. The data should be loaded with AJAX from the address / book /. 
4. At the top of this page, user has also a form for creating new books that send data to AJAX (POST method).
5. When the user clicks on the name of the book, a div with information about this page is loaded with AJAX (GET) from the endpoint / book / {book id}. Div contains a form for editing this book ( AJAX, PUT method on endpoint / book / {id-books}). 
6. Next to the name there is a button for deleting the book (AJAX, method DELETE on endpoint / book / {id-books})