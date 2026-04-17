
function Book(id,title,author,year){

    this.id = id;
    this.title = title;
    this.year = year;
    this.author = author;
    this.isAvailable = true;
}

function Library(name){
  this.name = name;
  this.books = [];
}

Library.prototype.addBook = function(book){

    if (!book.id || !book.title || !book.author || typeof book.year !== "number") {
    console.log("YOU should add all information about book ");
    return;
}
   if(this.books.some(function(b) {
    return b.id === book.id;
})){ 
    console.log("Book ID must be unique");
    return;
}
    this.books.push(book);
}

Library.prototype.removeBook = function(id){

    const indx = this.books.findIndex(function(b){
        
        return b.id === id;
    });

    if(indx === -1){
        console.log("book not found");
        return;
    }
         
    this.books.splice(indx,1);
};

Library.prototype.borrowBook = function(id){
    
    const book = this.books.find(function(b){      
    return b.id === id;
});

    if(!book){
        console.log("book not found");
        return;
    }
    if(!book.isAvailable){
        console.log("book already borrowed");
        return;
    }
  
        book.isAvailable = false;

}

Library.prototype.returnBook = function(id){

    const book = this.books.find(function(b){

        return b.id === id;
    });

    if(!book){
        console.log("book not found");
        return;
    }

    if(book.isAvailable){
        console.log("book is here");
        return;
    }
    
    book.isAvailable = true;
}

Library.prototype.findBookByTitle = function(title){

      const bookTitle = this.books.find(function(b){

         return b.title === title;
      })
         
         return bookTitle;
}

Library.prototype.findBookByAuthor = function(author){

      const bookauthor = this.books.filter(function(b){

         return b.author === author;
      })
         
         return bookauthor;
}

Library.prototype.listAvailableBooks = function(){

      const availablebook = this.books.filter(function(b){

         return b.isAvailable === true;
      })
      
         return availablebook;
}

Library.prototype.listBorrowedBooks = function(){

      const borrowedBooks = this.books.filter(function(b){

         return b.isAvailable === false;
      })

      return borrowedBooks;
         
}

Library.prototype.showLibraryInfo = function(){

    const total = this.books.length;
    const available = this.listAvailableBooks().length;
    const borrowed = this.listBorrowedBooks().length;

    console.log("Library name:", this.name);
    console.log("Total books:", total);
    console.log("Available books:", available);
    console.log("Borrowed books:", borrowed);
};


const lib = new Library("MY_FIRST_LIBRARY");

const book1 = new Book (1,"PATGAM","PARUYR SEVAK",1960);
const book2 = new Book (2,"TMBKABERDI ARUM","HOVHANNES TUMANYAN",1902);
const book3 = new Book (3,"VERQ HAYASTANI","XACHATUR ABOVYAN",1841);
const book4 = new Book (4,"HAYOCH PATMUTYUN","MOVSES XORENACI",479);

lib.addBook(book2);
lib.addBook(book3);
lib.addBook(book4);
lib.addBook(book1);

console.log(lib.findBookByAuthor("MOVSES XORENACI"));

lib.borrowBook(2);

console.log(lib.findBookByAuthor("HOVHANNES TUMANYAN"));

lib.borrowBook(2);

lib.removeBook(3);

lib .removeBook(3);

lib.showLibraryInfo();




