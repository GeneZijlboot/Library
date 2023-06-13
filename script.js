const HiddenForm = document.querySelector('.HiddenForm'); //werkt
const Library = document.querySelector('.Library'); //werkt

function LibraryDisappear(){
    console.log("aardappel");
}

function SubmitBookDissapear(){
    console.log("aardappel");
    const Title =  document.getElementById('Title');
    const author = document.getElementById('author');
    const Pages = document.getElementById('Pages');
    const Read = document.getElementById('Read');
    console.log(Title.value + " this the title b");
    console.log(author.value + " this the author b");
    console.log(Pages.value + " this the Pages b");
    console.log(Read.value + " this the Read  b");
}
/*

const AddBook = new Books(Title.value, author.value, Pages.value, Read.value); 

function Books(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        const show = document.querySelector('show');
        const Row1 = document.createElement('tr');

        //push the information here to a new table-row
        //return title + ' by ' + author + ', ' + pages + ', '+ read;
    }
}

console.log(Book1.info()); // logs "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

*/