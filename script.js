const theHobbit = new Books('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
//so! use 'new' to put in the values in the object of you're choise! 

function Books(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return title + ' by ' + author + ', ' + pages + ', '+ read;
    }
}

console.log(theHobbit.info()); // logs "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"