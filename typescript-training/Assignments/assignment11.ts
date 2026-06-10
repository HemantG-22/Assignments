const n: number = 5; // Maximum number in the middle row

// Upper half including middle row
for (let i = 1; i <= n; i++) {
    let row = "";

    // Leading spaces
    for (let j = 1; j <= n - i; j++) {
        row += "  ";
    }

    // Numbers
    for (let j = 1; j <= i; j++) {
        row += " " + j + "  ";
    }

    console.log(row);
}

// Lower half
for (let k = n - 1; k >= 1; k--) {
    let row = "";

    // Leading spaces
    for (let l = 1; l <= n - k; l++) {
        row += "  ";
    }

    // Numbers
    for (let l = 1; l <= k; l++) {
        row += " " + l + "  ";
    }

    console.log(row);
}