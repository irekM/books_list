// Referencja do listy książek
const booksList = document.querySelector('.books-list');

// Referencja do szablonu
const template = Handlebars.compile(document.querySelector('#template-book').innerHTML);

// Funkcja renderująca książki
function render() {
  // Przechodzimy przez każdą książkę w dataSource.books
  for (const book of dataSource.books) {
    // Generowanie kodu HTML na podstawie szablonu i danych książki
    const generatedHTML = template(book);

    // Tworzenie elementu DOM na podstawie wygenerowanego HTML
    const bookDOM = utils.createDOMFromHTML(generatedHTML);

    // Dodanie wygenerowanego elementu DOM do listy książek
    booksList.appendChild(bookDOM);
  }
}

// Wywołanie funkcji renderującej
render();