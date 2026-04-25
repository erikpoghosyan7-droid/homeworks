class Book {
  #title;
  #author;
  #year;
  #isAvailable;

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.#isAvailable = true;
  }

  get title(){
  return this.#title;
}
  set title(value){
    if(!value){
        throw new Error("title cannot be empty")
    }
    this.#title = value;
  }

  get author (){
    return this.#author;
  }

  set author(value){
    if(!value || value === ""){
        throw new Error("field can`t be empty")
    }
        this.#author = value;
  }

   set year (value){
    if(typeof value !== "number" || value < 1){
        throw new Error("year should contain number");
        
    }
    this.#year = value;
   }

   get year(){
    return this.#year;
   }

   get isAvailable(){
    return this.#isAvailable;
   }
    
   borrowBook(){
    if(!this.#isAvailable){
        return "book is not available";
    }
      this.#isAvailable  = false;
   }

   returnBook(){
    if(this.#isAvailable){
        return "book is already returned";
    }
    this.#isAvailable = true;
   }

   matchesTitle(name){
       return this.title.includes(name);
   }

   getInfo() {
    return `${this.title} by ${this.author} (${this.year}) - ${
    this.isAvailable ? "Available" : "Not available"}`;
   }
 }

class Library{

  #name;
  #books;
  #readers;
    
   constructor(name){
    this.name = name;
    this.#books = [];
    this.#readers = [];
   }

   
  get name() {
    return this.#name;
  }

  set name(value) {
    if (!value || value.trim() === "") {
      throw new Error("Library name cannot be empty");
    }
    this.#name = value;
  }

  get books() {
    return this.#books;
  }

  get readers() {
    return this.#readers;
  }

  addBook(book){
    if(this.#books.includes(book)){
      return "book already added";
    }
      this.#books.push(book);
  }

  registerReader(reader){
    if(this.#readers.includes(reader)){
        return "reader already registered";
    }
    this.#readers.push(reader);
  }

  findBookByTitle(title) {
    return this.#books.find(book => book.title === title) || null;
  }

  findBooksByAuthor(author1){
    return this.#books.filter(book => book.author === author1);
  }

  giveBookToReader(title,reader){
    const book = this.findBookByTitle(title);

    if(!book){
        return "book not found";
    }
        return reader.takeBook(book);
  }

  acceptBookFromReader(title, reader) {
  const book = this.findBookByTitle(title);

  if (!book) {
    return "Book not found";
  }

    return reader.giveBackBook(book);
}

  showAvailableBooks(){
    return this.#books.filter(b => b.isAvailable );
  }

  showAllBooks() {
    return this.#books.map(book => book.getInfo());
}
  
  getLibraryInfo() {
    return `${this.name}: ${this.#books.length} books, ${this.#readers.length} readers`;
}
  
}

class Reader{
    #name;
    #borrowedBooks;
    constructor(name){
        this.name = name;
        this.#borrowedBooks = [];
    }

    set name(value){
        if(!value || value === ""){
            throw new Error("name should have at least 1 symbol");
        }

        this.#name = value;
                
    }

    get name(){
        return this.#name;
    }

    get borrowedBooks(){
         return this.#borrowedBooks;    
    }

    get borrowedBooksCount(){
        return this.#borrowedBooks.length;
    }

    takeBook(book){
      if(book.isAvailable){
        this.#borrowedBooks.push(book);
        book.borrowBook();

      }else{
        return "book is not available";
      }
    }

    giveBackBook(book){
        if(!this.#borrowedBooks.includes(book)){
            return "this book is not available";
        }

        this.#borrowedBooks = this.#borrowedBooks.filter( b => b !== book);

    
    book.returnBook();
    }

    hasBook(book){
        return this.#borrowedBooks.includes(book);
    }

    showBorrowedBooks(){
        return this.#borrowedBooks.map(book => book.title);
    }

    getInfo(){
        return `${this.name} has ${this.#borrowedBooks.length} borrowed books`;
    }
}


const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);

library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);

console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");

console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
library.giveBookToReader("The Hobbit", reader2);

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());
