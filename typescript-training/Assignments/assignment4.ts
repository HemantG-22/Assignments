// Bank Transactions Program in TypeScript

// Store transactions in array
const transactions: number[] = [50000,-2000,3000,-15000,-200,-300,4000,-3000];

// Variables
let creditCount = 0;
let debitCount = 0;

let totalCredit = 0;
let totalDebit = 0;

let balance = 0;

let suspiciousCount = 0;

// Loop through array
for (let i = 0; i < transactions.length; i++) {

  // Get current transaction amount
  let amount = transactions[i]!;

  // Credit transaction
  if (amount > 0) {

    creditCount++;
    totalCredit += amount;

    if (amount > 10000) {
      console.log("Suspicious credit Transaction with Amount: " + amount);

      suspiciousCount++;
    }
  }

  // Debit transaction
  else {

    debitCount++;
    totalDebit += amount;

    if (amount < -10000) {
      console.log("Suspicious debit Transaction with Amount: " + amount);

      suspiciousCount++;
    }
  }
  // Update balance
  balance += amount;
}

// Print Results
console.log("\n----- Transaction Summary -----");

console.log("Total Credit Transactions: " + creditCount);

console.log("Total Debit Transactions: " + debitCount);

console.log("Total Amount Credited: " + totalCredit);

console.log("Total Amount Debited: " + Math.abs(totalDebit));

console.log("Remaining Balance: " + balance);

console.log( "Total Suspicious Transactions: " + suspiciousCount);