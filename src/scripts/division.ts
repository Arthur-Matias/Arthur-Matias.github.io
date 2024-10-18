function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

export function maximumCommonDivisor(numbers: number[]): number  {
    if (numbers.length < 2) return 1; // Need at least two numbers

    return numbers.reduce((acc, num) => gcd(acc, num));
}

export function largestDivisor(n: number): number {
    for (let i = Math.floor(n / 2); i > 1; i--) {
        if (n % i === 0) {
            return i;
        }
    }
    return 1; // Fallback if no divisor found (shouldn't happen for n > 1)
}
