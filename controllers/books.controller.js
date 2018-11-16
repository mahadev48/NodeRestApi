var books = {
    book1: {
        bookName: "Amar Chitra Katha",
        author: "Davis",
        id: 1
    },
    book2: {
        bookName: "Chanda Mama",
        author: "Taylor",
        id: 2
    },
    book3: {
        bookName: "Tinkle",
        author: "Thomas",
        id: 3
    },
    book4: {
        bookName: "Harry",
        author: "Thomas",
        id: 4
    }
}

exports.create = function(req, res) {
var newBook = req.body;
books["book" + newBook.id] = newBook;
console.log("--->After Post, book:\n" + JSON.stringify(books, null, 4));
res.end("Post Successfully: \n" + JSON.stringify(newBook, null, 4));
};

exports.findAll = function(req, res) {
console.log("--->Find All: \n" + JSON.stringify(books, null, 4));
res.end("All books: \n" + JSON.stringify(books, null, 4));  
};

exports.findOne = function(req, res) {
var book = books["book" + req.params.id];
console.log("--->Find book: \n" + JSON.stringify(book, null, 4));
res.end( "Find a Book:\n" + JSON.stringify(book, null, 4));
};

exports.update = function(req, res) {
var id = parseInt(req.params.id);
var updateBook = req.body; 
if(books["book" + id] != null){
// update data
books["book" + id] = updateBook;

console.log("--->Update Successfully, books: \n" + JSON.stringify(books, null, 4))

// return
res.end("Update Successfully! \n" + JSON.stringify(updateBook, null, 4));
}else{
res.end(" Item doesn't exist:\n:" + JSON.stringify(updateBook, null, 4));
}
};

exports.delete = function(req, res) {
var deleteBook = books["book" + req.params.id];
delete books["book" + req.params.id];
console.log("--->After deletion, book list:\n" + JSON.stringify(books, null, 4) );
res.end( "Deleted book: \n" + JSON.stringify(deleteBook, null, 4));
};