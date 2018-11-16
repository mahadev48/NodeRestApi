
module.exports = function(app) {
 
    var books = require('../../controllers/books.controller.js');
 
    // Create a new book
    app.post('/api/books', books.create);
 
    // Retrieve all books
    app.get('/api/books', books.findAll);
 
    // Retrieve a single books by Id
    app.get('/api/books/:id', books.findOne);
 
    // Update a books with Id
    app.put('/api/books/:id', books.update);
 
    // Delete a books with Id
    app.delete('/api/books/:id', books.delete);
}