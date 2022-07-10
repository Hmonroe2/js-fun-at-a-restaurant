class Chef {
  constructor(names, restaurant) {
    this.name = names
    this.restaurant = restaurant
  }
  greetCustomer(name, morning) {
    if (morning === true) {
      return `Good morning, ${name}!`
    }
    return `Hello, ${name}!`
  }
  checkForFood(foodItem) {
    if (this.restaurant.menus.breakfast.includes(foodItem) || this.restaurant.menus.lunch.includes(foodItem) || this.restaurant.menus.dinner.includes(foodItem)) {
      return `Yes, we're serving ${foodItem.name} today!`
    } else {
      return `Sorry, we aren't serving ${foodItem.name} today.`

    }
  }
}


module.exports = Chef;
