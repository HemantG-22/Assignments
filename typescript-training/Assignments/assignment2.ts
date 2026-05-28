/* Decleared one function with return type as (string) to check 
the loan eligibility, Inside the function, Checked user eligibility 
with nested ifelse conditional statments And then pass 
the input values which are decleared in function,
Stored function return value in result veriable by calling the function
And Print the result veriable. */

function checkLoanEligibility (
  customerName : string,
  creditScore : number,
  income : number,
  isEmployed : boolean,
  debtToIncomeRatio : number
)
: string {
  
  // Rule 1: Credit Score Check
  if (creditScore > 750) {
    return `${customerName} is eligible for the loan (Auto Approved).`;
  } 
  else if (creditScore >= 650 && creditScore <= 750) {

    // Rule 2: Income Check
    if (income >= 50000) {

      // Rule 3: Employment Check
      if (isEmployed) {

        // Rule 4: Debt-to-Income Ratio Check
        if (debtToIncomeRatio < 40) {
          return `${customerName} is eligible for the loan.`;
        } else {
          return `${customerName} is not eligible for the loan due to high DTI ratio.`;
        }

      } else {
        return `${customerName} is not eligible for the loan because the customer is unemployed.`;
      }

    } else {
      return `${customerName} is not eligible for the loan due to insufficient income.`;
    }

  } 
  else {
    return `${customerName} is not eligible for the loan due to low credit score.`;
  }
}

// Customer Details
let customerName = "John Doe";
let creditScore = 720;
let income = 55000.0;
let isEmployed = true;
let debtToIncomeRatio = 35.0;

// Function Call
const result = checkLoanEligibility(
  customerName,
  creditScore,
  income,
  isEmployed,
  debtToIncomeRatio
);

// Print Result
console.log(result);