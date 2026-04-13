let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function orderReceipt(order) {
  const lineItem = [];
  let total = 0;

  for (const {itemName, quantity, unitPricePence} of order) {
    const lineTotal = ((unitPricePence * quantity) / 100);
    total += lineTotal;
    
    lineItem.push(
      `${String(quantity).padEnd(8)} ${String(itemName).padEnd(20)} ${lineTotal.toFixed(2)}`
    );    
  }
  return [
    "QTY      ITEM                 TOTAL",
    ...lineItem,
    `\nTotal: ${total.toFixed(2)}`
  ].join("\n");
}

console.log(orderReceipt(order));