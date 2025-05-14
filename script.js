function mincost(arr) {
    // If only one rope is left, no cost to connect, return 0
    if (arr.length <= 1) return 0;

    let cost = 0;

    // Create a min-heap-like structure using a priority queue
    const heap = [];

    // Insert all ropes into the heap
    for (let length of arr) {
        heap.push(length);
    }

    // Sort to simulate a priority queue (min-heap)
    heap.sort((a, b) => a - b);

    // Combine ropes until we are left with one rope
    while (heap.length > 1) {
        // Pop two smallest ropes (min-heap behavior)
        let first = heap.shift();
        let second = heap.shift();

        // The cost to connect them
        let sum = first + second;
        cost += sum;

        // Insert the combined rope back into the heap
        heap.push(sum);

        // Re-sort the heap to maintain the min-heap property
        heap.sort((a, b) => a - b);
    }

    return cost;
}

// Example usage:
console.log(mincost([4, 3, 2, 6]));  // Output: 29
console.log(mincost([1, 2, 3, 4, 5]));  // Output: 33


