const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

// let bank_balance = 343.91;
// let bank_purchase_limit = 250.0;
let bank_balance = randomRange(100, 999);
let bank_purchase_limit = randomRange(100, bank_balance);
let amount = 0;
let items_count = 0;

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

randomRange(100, 999);

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}

// keep buying phones while you still have money
while (amount < bank_purchase_limit) {
  // buy a new phone!
  amount = amount + PHONE_PRICE;
  items_count++;
  // can we afford the accessory?
  if (amount + ACCESSORY_PRICE < bank_purchase_limit) {
    amount = amount + ACCESSORY_PRICE;
  }
  amount = amount + calculateTax(amount);
}
// don't forget to pay the government, too

console.log(`Original balance bank: ${formatAmount(bank_balance)}`);
console.log("Your purchase: " + formatAmount(amount));
console.log("Purchase LIMIT: " + formatAmount(bank_purchase_limit));
console.log(`Total Phones: ${items_count} purchased`);
// Your purchase: $334.76
console.log(`New balance bank: ${formatAmount(bank_balance - amount)}`);

// can you actually afford this purchase?
if (amount > bank_balance) {
  console.log("You can't afford this purchase. :(");
}
// You can't afford this purchase. :(
