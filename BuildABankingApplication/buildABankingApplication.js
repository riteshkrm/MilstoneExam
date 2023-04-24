const customer = {
  name: "Ritesh Sharma",
  balance: 5000,
};

function deposit(customerObj, amount) {
  customerObj.balance += amount;
  console.log(`Deposit successful. New balance is ${customerObj.balance}`);
}

function withdraw(customerObj, amount) {
  if (customerObj.balance < amount) {
    console.log(
      `Insufficient funds. Available balance is ${customerObj.balance}`
    );
  } else {
    customerObj.balance -= amount;
    console.log(`Withdrawal successful. New balance is ${customerObj.balance}`);
  }
}

deposit(customer, parseInt(prompt("Enter deposit amount:- ", "0")));
withdraw(customer, parseInt(prompt("Enter a withdraw amount:- ", "0")));
