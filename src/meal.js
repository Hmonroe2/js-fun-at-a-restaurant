function nameMenuItem(item) {
  return `Delicious ${item}`
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  }
}

function addIngredients(toppings, array) {
  if (!array.includes(toppings)) {
    return array.push(toppings)
  }
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  var sale = price - price * .10
  return sale
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
