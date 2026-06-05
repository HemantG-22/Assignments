function isPrime(n: number): { result: boolean; explanation: string } {
    // Prime numbers must be greater than 1
    if (n <= 1) {
        return {
            result: false,
            explanation: `${n} has only one divisor (or none if less than 1), so it is not a prime number.`
        };
    }

    // Check divisibility from 2 to √n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return {
                result: false,
                explanation: `${n} is divisible by ${i}, so it has more than two divisors and is not a prime number.`
            };
        }
    }

    return {
        result: true,
        explanation: `${n} has exactly two divisors: 1 and ${n}, making it a prime number.`
    };
}

// Example Usage
const input = 25;
const output = isPrime(input);

console.log(output.result);       // true
console.log(output.explanation);  // Explanation