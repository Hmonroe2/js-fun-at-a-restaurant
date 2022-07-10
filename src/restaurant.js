function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurant, food) {
  var lunchMenu = restaurant.menus.lunch
  if (food.type === `lunch` && !restaurant.menus.lunch.includes(food)) {
    lunchMenu.push(food)
  } else
  if (food.type === `breakfast` && !restaurant.menus.breakfast.includes(food)) {
    restaurant.menus.breakfast.push(food)
  } else
  if (food.type === `dinner` && !restaurant.menus.dinner.includes(food))
    restaurant.menus.dinner.push(food)
}

function removeMenuItem(restaurant, food, type) {
    for (var i = 0; i < restaurant.menus[type].length; i++) {
      restaurant.menus[type].splice(i, 1)
      return `No one is eating our ${food} - it has been removed from the ${type} menu!`
    }

  if (!restaurant.menus[type].includes(food)) {
    return `Sorry, we don't sell ${food}, try adding a new recipe!`
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,

}
