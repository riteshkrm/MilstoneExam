function calculateBillPerPerson(costPerDish, numPeople) {
  const totalBill = costPerDish * numPeople;
  const billPerPerson = totalBill / numPeople;
  return { totalBill, billPerPerson };
}

const costPerDish = prompt('Enter cost per dish:- ');
const numPeople = prompt('Number of people:- ');
const bill = calculateBillPerPerson(costPerDish, numPeople);
console.log(`Total bill: Rs. ${bill.totalBill}/-`);
console.log(`Bill per person: Rs. ${bill.billPerPerson}/-`);
