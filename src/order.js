function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order)
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1)
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
