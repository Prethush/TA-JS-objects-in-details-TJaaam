class Book  {
    constructor(title, category, author, isRead = false, finishedDate) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }

    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = Date.now();
    }
}


class BookList  {
    constructor(bookArr, index) {
        this.bookArr = bookArr;
        this.index = index;
    }

    addBook(arr) {
        for(let i = 0; i < arr.length; i++) {
            this.bookArr.push(arr[i]);
        }
        return this.bookArr;
    }

    getCurrentBook() {
        return this.bookArr[this.index];
    }

    getPrevBook() {
        return this.bookArr[this.index - 1];
    }

    getNextBook() {
        return this.bookArr[this.index + 1];
    }

    changeCurrentBook(index) {
        this.index = index;
    }
}

let book1 = new Book("Harry Potter", "Fantasy", "J K Rowling", false, 02/03/21);
let book2 = new Book("Lord of the rings", "Fantasy", "Tolkins", true, 05/03/20);
let book3 = new Book("Wings of fire", "Autobiography", "A P J", true, 02/03/21);
let book4 = new Book("Lost", "Fiction", "Martin", false, 02/05/19);
let book5 = new Book("Trapped", "Fantasy", "Peter", true, 01/03/21);

let list1 = new BookList(["Absalom", "A Time to Kill", "The House of Mirth"],  1);
let list2 = new BookList(["East of Eden", "The Sun Also Rises", "Vile Bodies "],  0);
let list3 = new BookList([" A Scanner Darkly", "Play It as It Lays ", "The House of Mirth"],  1);
let list4 = new BookList(["The Particular Sadness of Lemon Cake", "A Time to Kill", "Harry Potter"],  0);
let list5 = new BookList(["Absalom", "A Time to Kill", "The House of Mirth"],  1);
