function mincost(arr) {
    if (arr.length === 1) return 0;

    // Convert array into a min-heap-like structure by sorting
    arr.sort((a, b) => a - b);

    let cost = 0;

    while (arr.length > 1) {
        // Take two smallest elements
        let first = arr.shift();
        let second = arr.shift();

        let sum = first + second;
        cost += sum;

        // Insert the sum back in the array and sort again
        arr.push(sum);
        arr.sort((a, b) => a - b);
    }

    return cost;
}

// Example usage:
console.log(mincost([4, 3, 2, 6]));  // Output: 29
console.log(mincost([1, 2, 3, 4, 5]));  // Output: 33

