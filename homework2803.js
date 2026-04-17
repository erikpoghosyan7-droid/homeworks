class Book{
   constructor(title,author,year){
      this.title = title;
      this.author = author;
      this.year = year;
      this.isAvailable = true; 
   }

   getInfo() {
    return this.title + " /n " + this.author + "/n " + this.year + "/n";
}
   
   borrowBook(){
      
     if(this.isAvailable === false){
        console.log("the book is already borrowed");
        return;
     }
      this.isAvailable = false;

   }

   returnBook(){

       if(this.isAvailable === true){
        console.log("the book is already returned");
        return;       
    }

        this.isAvailable = true;
   }

   matchesAuthor(authorName){

      return this.author.toLowerCase() === authorName.toLowerCase();
   }
    matchesTitle(word){
        
        return this.title.includes(word);
    }
}

class Library{
    constructor(){
        this.books = [];
    }

    addBook(book){
        
        if(!book.title || typeof book.year !== "number" || !book.author){
            console.log("fill the all info about book");
            return;
        }
        if(this.books.some(b => b.title === book.title)){
            console.log("the book is already added");
            return;
        }

        this.books.push(book);
    }

    removeBook(title){
        
        for(let i = 0; i < this.books.length; ++i){
            if(this.books[i].title === title){
                this.books.splice(i,1);
                return;
            }
        }
    }

    findBookByTitle(title){
        
        return this.books.find(b => b.title === title) || null;

    }

    findBooksByAuthor(author){
        return this.books.filter(b => b.author === author);
    }

    getAvailableBooks(){
        return this.books.filter(b => b.isAvailable);
    }

    borrowBook(title){

        const book1 = this.books.find(b => b.title === title);

        if(!book1){
            console.log("book not found");
            return;
        }

        if(!book1.isAvailable){
            console.log("book  already borrowed");
            return;
        }

            book1.borrowBook();
    }

    returnBook(title){

        const book2 = this.books.find(b => b.title === title);

        if(!book2){
            console.log("not found");
            return;

        }

        if(book2.isAvailable){
            console.log("book is already returned");
            return;
        }

        book2.returnBook();
            
    }

    showAllBooks(){
          
        for(let i = 0; i < this.books.length; ++i){
            
            console.log(`${this.books[i].title}\n${this.books[i].author}`);
        }
    }
    
    countBooks(){

        return this.books.length;
    }

    countAvailableBooks() {
    return this.getAvailableBooks().length;
   }

    searchBook(word){
        return this.books.filter(b => b.title.toLowerCase().includes(word.toLowerCase()));
    } 

    getOldestBook(){

        if(this.books.length > 0){
            let oldest = this.books[0];
          for(let i = 0; i < this.books.length; ++i ){

              if(this.books[i].year < oldest.year){
                oldest = this.books[i];
              }

          }

          return oldest;
        }
          console.log("the library is empty");
          return ;
    }
        
}


const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log("=== All books ===");
library.showAllBooks();

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBook("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
library.showAllBooks();

