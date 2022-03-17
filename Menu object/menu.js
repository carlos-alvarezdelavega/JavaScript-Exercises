// End Menu Object
const menu = {
  _courses: {
    //Appetizers
    appetizers: [],
    // Mains
    mains: [],
    // Desserts
    desserts: [],
  }, //End _courses object

  /* Getters Methods for each element in _courses */
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  /* ===== End of Getter Methods ==== */

  /* Setter Methods for each element in _courses */
  set appetizers(appetizersIn) {
    this._courses.appetizers = appetizersIn;
  },
  set mains(mainsIn) {
    this._courses.mains = mainsIn;
  },
  set desserts(dessertsIn) {
    this._courses.desserts = dessertsIn;
  },
  /* ===== End of Setter Methods ====== */

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  }, // End courses getter method
  //addDishToCourse Method for adding dishes to the _courses object
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    }; // End dish object
    return this._courses[courseName].push(dish);
  }, // End addDishToCourse() method

  // getRandomDishFromCourse() method allos to get a random dish from a course on the menu. This can generate a random meal.
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  }, // End .getRandomDishFromCourse() method

  // The .generateRandomMeal() method generates a three-course meal for us.
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");

    let totalPrice = appetizer.price + main.price + dessert.price;
    totalPrice = totalPrice.toFixed(2);

    return `Your meal includes ${appetizer.name}, ${main.name}, and ${dessert.name} for a total of ${totalPrice} dollars.`;
  }, // End .generateRandomMeal() function
}; //End Menu Object

/*Adding Appetizers to Menu*/
menu.addDishToCourse("appetizers", "Patatas Bravas", 3.8);
menu.addDishToCourse("appetizers", "Consomé", 3.5);
menu.addDishToCourse("appetizers", "Ensalada Verde", 2.8);

/*Adding Mains to Menu*/
menu.addDishToCourse("mains", "3 Tacos de Pastor", 7.8);
menu.addDishToCourse("mains", "Torta de Hongos", 6.0);
menu.addDishToCourse("mains", "Quesadillas", 5.8);

/*Adding Desserts to Menu*/
menu.addDishToCourse("desserts", "Arroz con Leche", 2.8);
menu.addDishToCourse("desserts", "Flan", 3.8);
menu.addDishToCourse("desserts", "Brownie de Chocolate", 5.8);

const meal = menu.generateRandomMeal();

console.log(meal);
