// Referencja do listy książek
const booksList = document.querySelector('.books-list');

// Referencja do szablonu
const template = Handlebars.compile(document.querySelector('#template-book').innerHTML);
//pusta tablica na ulubione ksiazki
const favoriteBooks = [];

// Funkcja renderująca książki
function render() {
  //czyszczenie listy przed ponownym dodaniem ksiazek
  booksList.innerHTML = '';
  // Przechodzimy przez każdą książkę w dataSource.books
  for (const book of dataSource.books) {
    // Generowanie kodu HTML na podstawie szablonu i danych książki
    const generatedHTML = template(book);

    // Tworzenie elementu DOM na podstawie wygenerowanego HTML
    const bookDOM = utils.createDOMFromHTML(generatedHTML);

    // Dodanie wygenerowanego elementu DOM do listy książek
    booksList.appendChild(bookDOM);
  }
  //po wyrenderowaniu uruchamiamy initActions
  initActions();
}

//funkcja dodajaca nasluchiwacze
function initActions(){
  //referencja do wszystkich elementów book_image
  const bookImages = document.querySelectorAll('.book__image');
  //petla iterujaca po kazdym elemencie book__image
  for(let i =0; i<bookImages.length; i++){
    const bookImage = bookImages[i];

    //dodanie nasluchiwaczy
    bookImage.addEventListener('dbclick', function(event){
      event.preventDefault();

      //pobiera id ksiazki z atr data-id
      const bookId = this.getAttribute('data-id');
      //sprawdzania czy ksiazka jest juz w ulubionych
      if (favoriteBooks.includes(bookId)) {
        //jesli juz jest w uliubionych, usuwamy ja z listy i usuwamy klase favorite
        favoriteBooks.splice(favoriteBooks.indexOf(bookId), 1);
        this.classList.remove('favorite');
      }else{
        //jesli nie ma w ulubionych to ja dodajemy
        favoriteBooks.push(bookId);
        this.classList.add('favorite');
      }
      console.log('ulubione ksiazki:', favoriteBooks);
    });
  }
}

// Wywołanie funkcji renderującej
render();
