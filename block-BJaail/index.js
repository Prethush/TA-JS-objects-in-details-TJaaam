class BookList {
    constructor(root, list = []) {
        this.books = list;
        this.root = root;
    }

    add(title, author, isbn) {
        let book = new Book(title, author, isbn);
        this.books.push(book);
        this.createUI();
        return this.books.length;
    }

    handleDelete(id) {
        let index = this.books.findIndex(book => book.id === id);
        this.books.splice(index, 1);
        this.createUI();
        return this.books.length;
    }

    createUI() {
        this.root.innerHTML = "";
        this.books.forEach((book) => {

            let li = book.createUI();
            li.querySelector("span").addEventListener("click", this.handleDelete.bind(this, book.id));

            this.root.append(li);
        });
    }
}


class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isRead = false;
        this.state = "Not read";
        
        
    }

    handleClick() {
        this.isRead = !this.isRead; 
         if(this.isRead) {
             this.state = "Completed";
         }
        this.createUI();
    }

    createUI() {
        let li = document.createElement("li");
        
        let input = document.createElement("input");
        
        let title = document.createElement("p");
        title.innerText = this.title;
        let author = document.createElement("p");
        author.innerText = this.author;
        let isbn = document.createElement("p");
        isbn.innerText = this.isbn;
        input.type = "checkbox";
        input.checked = this.isRead;
        input.addEventListener("click", this.handleClick.bind(this));
        
        let span = document.createElement("span");
        span.innerText = "❌";
        li.append(title, author, isbn, input, span);

        return li;
        

    }
}


let container = document.querySelector(".book-list");

let myBook = new BookList(container, []);
let title = document.getElementById("title");
let author = document.getElementById("author");
let isbn = document.getElementById("isbn");

let submit = document.querySelector("button");
submit.addEventListener("click", (event) => {

    myBook.add(title.value, author.value, isbn.value);
    title.value = "";
    author.value = "";
    isbn.value = "";
  
}) 

