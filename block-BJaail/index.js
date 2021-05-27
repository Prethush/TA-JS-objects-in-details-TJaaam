let form = document.querySelector(".form");
let bookList = document.querySelector(".bookList");

const nameElm = document.getElementById("author");
const titleElm = document.getElementById("title");
const isbnElm = document.getElementById("isbn");
const bookImgElm = document.getElementById("book-img");

class BookList {
    constructor(list = []) {
        this.books = list;
       
    }

    add(title, author, bookImg, isbn) {
        let book = new Book(title, author, bookImg, isbn);
        this.books.push(book);
        this.createUI();
        return this.books.length;
    }


    createUI() {
        bookList.innerHTML = "";
        this.books.forEach((book) => {
            let li = document.createElement("li");
            let img = document.createElement("img");
            img.src = book.bookImg;
            let title = document.createElement("h1");
            title.innerText = book.title;
            let author = document.createElement("p");
            author.innerText = book.author;
            let isbn = document.createElement("p");
            isbn.innerText = book.isbn;
            let button = document.createElement("button");
            button.innerText = book.isRead  ? "Completed" : "Not Completed";
            button.style.background = book.isRead ? "green" : "red";
            button.addEventListener("click", () => {
                book.toggleIsRead();
                this.createUI();
            });
            li.append(img, title, author, isbn, button);
            bookList.append(li);
            console.log(bookList);
        })
        
    }
}


class Book {
    constructor(title, author, bookImg, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.bookImg = bookImg;     
        this.isRead = false;
        
    }

    toggleIsRead() {
        this.isRead = !this.isRead;
    }
    
   
}


let library = new BookList();

function handleSubmit(event) {
    event.preventDefault();
    const name = nameElm.value;
    const title = titleElm.value;
    const bookImg = bookImgElm.value;
    const isbn = isbnElm.value;
    library.add(name, title, bookImg, isbn);
    console.log(name, title, bookImg, isbn);

    nameElm.value = "";
    titleElm.value = "";
    bookImgElm.value = "";
    isbnElm.value = "";
}
form.addEventListener("submit", handleSubmit);