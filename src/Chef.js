class Chef {
  constructor(name) {
    this.name = name
  }
  greetCustomer(name, morning){
    if(morning === true){
      return `Good morning, ${name}!`
    }
    return `Hello, ${name}!`
  }
  checkForFood(foodItem){
    if(foodItem.name === `Quiche` ){
      return `Sorry, we aren't serving Quiche today.`
    }
    return `Yes, we\'re serving ${foodItem.name} today!`
  }
}

module.exports = Chef;
