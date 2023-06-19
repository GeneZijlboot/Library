const form = document.querySelector('form');
const Title = document.getElementById('Title');
const author = document.getElementById('author');
const Pages = document.getElementById('Pages');
const Library = document.getElementById('Library');
const SubmitBook = document.getElementById('SubmitBook');

const theHobbit = new Books('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
console.log(theHobbit.info()); // logs "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

//constructor object
function Books(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return title + ' by ' + author + ', ' + pages + ', '+ read;
    }
}

//adding a book to the object
function AddBook(){
    SubmitBook.addEventListener('click', () => {
        document.getElementById('HiddenForm').style.visibility = 'visible';
        document.getElementById('Library').style.visibility = 'hidden';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const myFormData =  new FormData(e.target);

        const myLibrary = Object.fromEntries(myFormData.entries());
        console.log(myLibrary.Title);

        document.getElementById('HiddenForm').style.visibility = 'hidden';
        document.getElementById('Library').style.visibility = 'visible';
    });
}

AddBook();