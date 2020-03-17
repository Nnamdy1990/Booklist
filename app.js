// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add book to list

UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");

  const row = document.createElement("tr");

  row.innerHTML = `<td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a href="#" class="delete">X</a></td>
`;

  list.appendChild(row);
};
//delete book
UI.prototype.deleteBook = function(target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};
//clear fields
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};
//event listeners

document.getElementById("book-form").addEventListener("submit", function(e) {
  // Get form values

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // instantiate book
  const book = new Book(title, author, isbn);

  // instantiate UI
  const ui = new UI();

  //Add book to list
  ui.addBookToList(book);

  //clear filed
  ui.clearFields();

  e.preventDefault();
});

// Event Listener for delete
document.getElementById("book-list").addEventListener("click", function(e) {
  const ui = new UI();
  ui.deleteBook(e.target);

  e.preventDefault();
});
