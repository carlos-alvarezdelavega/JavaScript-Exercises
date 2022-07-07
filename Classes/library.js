/*  
From: https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-22-javascript-syntax-part-iii/modules/wdcp-22-learn-javascript-syntax-classes/projects/build-a-library
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

*/

/* === Parent Media Class === */

class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  /* Getter Methods */
    get title() {
      return this._title;
    }
    //
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    //
    get ratings() {
      return this._ratings;
    }
    /* Setter Methods */
    set isCheckedOut(status) {
      this._isCheckedOut = status;
    }
  /* Methods */
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
    //
    getAverageRating() {
      let ratingLength = this._ratings.length
      let sumRatings = this._ratings.reduce((previousValue, currentValue) => previousValue + currentValue);
      return (sumRatings / ratingLength).toFixed(2);
    }
    //
    addRating(rating) {
      if(rating >= 1 && rating <= 5){
        this._ratings.push(rating);
      } else {
        console.log('Input a rating between 1 and 5.')
      }
    }
  } // End Media Class
  /* ====> Test Media Class
  const mockMedia = new Media('Mock');
  
  mockMedia.addRating(55);
  mockMedia.addRating(40);
  mockMedia.addRating(80);
  
  mockMedia.toggleCheckOutStatus();
  console.log(mockMedia.isCheckedOut);
  */
  /* === Book subclass === */
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    /* Getters */
    get author() {
      return this._author;
    }
  //
    get pages() {
      return this._pages;
    }
  } // End Book subclass
  
  /* Test Book subclass
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  */
  /* === Movie subclass === */
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    /* Getters */
    get director() {
      return this._director;
    }
    //
    get runTime() {
      return this._runTime;
    }
  } // End Movie subclass
  
  /* Test Movie subclass
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  */
  /* === CD subclass === */
  
  class CD extends Media {
    constructor(title, artist, songs){
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    // Getters
    get artist() {
      return this._artist;
    }
    // 
    get songs() {
      return this._songs;
    }
    //
    shuffle() {
      let currentIndex = this._songs.length;
      let randomIndex
      // While there remain elements to shuffle.
      while(currentIndex != 0) {
        // Select a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        // Swap with the current element.
        [this._songs[currentIndex], this._songs[randomIndex]] = [
          this._songs[randomIndex], this._songs[currentIndex]
        ];
      }
      return this._songs;
    }
  }// End CD subclass
  
  // Test CD
  const nevermind = new CD('Nevermind', 'Nirvana', ['Smells Like Teen Spirit', 'In Bloom', 'Come as You Are', 'Breed', 'Lithium', 'Polly', 'Territorial Pissings', 'Drain You'])
  
  //console.log(nevermind.songs);
  console.log(nevermind.shuffle())
  