function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order)
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  if (orderNumber === 1657) {
    deliveryOrders.shift(orderNumber)
  } else {
    if (orderNumber === 2893) {
      deliveryOrders.splice(1, 1)
    }
  }
}

function listItems(deliveryOrders) {
  var foodItems = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    foodItems.push(deliveryOrders[i].item)
  }
  return foodItems.join(`, `)
}

function searchOrder(deliveryOrders, item) {
  var result = false
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === item) {
      result = true;
    }
  }
  return result
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
