let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}
function toggleRead(index){
    myLibrary[index].toggleRead();
    render();
}

function render(){
    const AddingRowWithDom = document.getElementById('AddingRowWithDom');
    AddingRowWithDom.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `
        <div class="NewBooks">
            <div class="A">
                <p class="info">${book.title}</p><p class="info">${book.author}</p><p class="info">${book.pages}</p><p class="info">${book.read}</p>
            </div>
            <div class="B">
                <button id="btn" onclick="removeBook(${i})">Remove</button><button id="btn" onclick="toggleRead(${i})">Toggle Read</button>
            </div>
        </div>
        `;
        AddingRowWithDom.appendChild(bookEl);
    }
}

function removeBook(index){
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary() {
    let title = document.getElementById('Title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('Pages').value;
    let read = document.getElementById('read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
} 

const AddBookButton = document.getElementById('AddBookButton');
const Library = document.getElementById('Library');
const HiddenForm = document.getElementById('HiddenForm');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    Library.style.visibility = "visible";
    HiddenForm.style.visibility = "hidden";
    e.preventDefault();
    addBookToLibrary();
});

AddBookButton.addEventListener('click', () => {
    Library.style.visibility = "hidden";
    HiddenForm.style.visibility = "visible";
});