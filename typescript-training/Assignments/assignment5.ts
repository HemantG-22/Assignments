/* Create one Array with employee details and another with show updated details
In for loop with declear bonus, veriablepay & rewards veriables and inside 
use if conditional statments  to check the conditions to get rewards
Also declear 2 verivale hike & hikepercentage to save the vales
Push Employee Name and hikepercentage in results array
print all the values of results array in table format
*/
// Employee data
const employees = [
    { name: "Alice Johnson", baseSalary: 75000, experience: 5.1, rating: 4.2 },
    { name: "Bob Smith", baseSalary: 68000, experience: 3.2, rating: 3.8 },
    { name: "Carol Davis", baseSalary: 82000, experience: 7.1, rating: 4.5 },
    { name: "David Brown", baseSalary: 90000, experience: 10.2, rating: 2.5 },
    { name: "Eva Green", baseSalary: 60000, experience: 2.4, rating: 3.5 }
];

// Array to store Employee Name and Hike Percentage
const results: any[] = [];

// Loop through employee records
for (let i = 0; i < employees.length; i++) {

    let variablePayPercentage = 0;
    let bonus = 0;
    let reward = 0;

    // Determine variable pay and bonus based on rating
    if (employees[i]!.rating >= 4.0) {
        variablePayPercentage = 15;
        bonus = 1500;
    } else if (employees[i]!.rating >= 3.0 && employees[i]!.rating < 4.0) {
        variablePayPercentage = 10;
        bonus = 1200;
    } else {
        variablePayPercentage = 3;
        bonus = 300;
    }

    // Check for extra reward
    if (employees[i]!.experience >= 5) {
        reward = 5000;
    }

    // Calculate hike
    const hike = (employees[i]!.baseSalary * variablePayPercentage / 100) +
        bonus +
        reward;

    // Calculate hike percentage
    const hikePercentage = hike / employees[i]!.baseSalary;

    // Store result
    results.push({
        employeeName: employees[i]!.name,
        hikePercentage: hikePercentage.toFixed(2)
    });
}

// Print results
console.log("Employee Name\t\tHike Percentage");

for (let j = 0; j < results.length; j++) {
    console.log(
        results[j].employeeName +
        "\t\t" +
        results[j].hikePercentage
    );
}