class Book  {
    constructor(title, category, author) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = null;
    }

    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = Date.now();
    }
}


class BookList  {
    constructor() {
        this.bookArr = [];
        this.index = 0;
    }

    addBook(arr = []) {
        this.bookArr =  this.bookArr.concat(arr);
        return this.book;
    }

    getCurrentBook() {

        return this.bookArr[this.index];
    }

    getPrevBook() {
        this.index -= 1;
        return this.bookArr[this.index];
    }

    getNextBook() {
        this.index += 1;
        return this.bookArr[this.index];
    }

    changeCurrentBook(currentIndex) {
        this.index = currentIndex;
    }
}

let book1 = new Book("Harry Potter", "Fantasy", "J K Rowling");
let book2 = new Book("Lord of the rings", "Fantasy", "Tolkins");
let book3 = new Book("Wings of fire", "Autobiography", "A P J");
let book4 = new Book("Lost", "Fiction", "Martin");
let book5 = new Book("Trapped", "Fantasy", "Peter");

let list1 = new BookList();

list1.addBook([book1, book2, book3, book4, book5]);
