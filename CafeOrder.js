
// Cafe Order System

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = {
  Latte: 120,
  Cappuccino: 130,
  CaramelMacchiato: 145,
  IcedTea: 80,
  ChocolateCake: 110,
};

let orders = [];

function showMenu() {
  console.log("\n===== CAFE MENU =====");

  for (const item in menu) {
    console.log(`${item} - ₱${menu[item]}`);
  }
}

function addOrder(item, quantity) {
  if (menu[item]) {
    orders.push({
      item: item,
      quantity: quantity,
      price: menu[item],
    });

    console.log(`${item} added to your order.`);
  } else {
    console.log("Sorry, that item is not available.");
  }
}

function calculateSubtotal() {
  let subtotal = 0;

  for (const order of orders) {
    subtotal += order.price * order.quantity;
  }

  return subtotal;
}

function calculateDiscount(subtotal) {
  return subtotal >= 500 ? subtotal * 0.10 : 0;
}

function displayOrderSummary() {
  const subtotal = calculateSubtotal();
  const discount = calculateDiscount(subtotal);
  const total = subtotal - discount;

  console.log("\n===== ORDER SUMMARY =====");

  for (const order of orders) {
    const itemTotal = order.price * order.quantity;
    console.log(`${order.item} x${order.quantity} - ₱${itemTotal}`);
  }

  console.log("-------------------------");
  console.log(`Subtotal: ₱${subtotal}`);
  console.log(`Discount: ₱${discount}`);
  console.log(`Total: ₱${total}`);
  console.log("=========================");
}

function askForOrder() {
  showMenu();

  rl.question("\nEnter the item name: ", (item) => {
    rl.question("Enter quantity: ", (quantityInput) => {
      const quantity = Number(quantityInput);

      if (quantity <= 0 || isNaN(quantity)) {
        console.log("Please enter a valid quantity.");
        rl.close();
        return;
      }

      addOrder(item, quantity);

      rl.question("\nAdd another item? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === "yes") {
          askForOrder();
        } else {
          displayOrderSummary();
          rl.close();
        }
      });
    });
  });
}

console.log("Welcome to the Cafe Order System!");
askForOrder();