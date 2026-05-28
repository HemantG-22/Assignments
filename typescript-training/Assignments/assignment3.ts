/* Declear 2 array, one with String data type and one with number data type
Declear 1 array with number data type which store updated student marks
Declear veriable total with number data type
Now use for loop to update each and every value of marks array with 10
And push the values in updatedmarks array and add the marks in total
Declear Avg veriable with number data type and store the Avg of total
Print title "Updated Marks"
Use for loop and print the each and every value of Stuednt and Updated marks Array
Print title "Average Marks" with vale of Avg Veriable with fixed lenght
*/


// Create arrays for student names and marks
let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];

// Array to store updated marks
let updatedMarks: number[] = [];
let total: number = 0;

// Add 10 marks to each student
for (let i = 0; i < marks.length; i++) {

    // Using assignment operator
    marks[i]! += 10;

    updatedMarks.push(marks[i]!);

    total += marks[i]!;
}

// Calculate average
let average: number = total / updatedMarks.length;

// Display output
console.log("Updated Marks:");

for (let j = 0; j < studentNames.length; j++) {
    console.log(`${studentNames[j]}: ${updatedMarks[j]}`);
}

console.log(`Average Marks: ${average.toFixed(1)}`);