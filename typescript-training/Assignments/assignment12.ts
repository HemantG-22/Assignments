function myPow(x: number, n: number): number {
    let base: number = x;
    let exponent: number = n;
    let result: number = 1;

    // Handle negative exponent
    if (exponent < 0) {
        base = 1 / base;
        exponent = -exponent;
    }

    while (exponent > 0) {
        // If exponent is odd
        if (exponent % 2 !== 0) {
            result = result * base;
        }

        base = base * base;

        // Divide exponent by 2 without Math.floor()
        exponent = exponent >> 1;
    }

    return result;
}

// Test Cases
console.log(myPow(2.00000, 10)); // 1024
console.log(myPow(2.10000, 3));  // 9.261
console.log(myPow(2.00000, -2)); // 0.25