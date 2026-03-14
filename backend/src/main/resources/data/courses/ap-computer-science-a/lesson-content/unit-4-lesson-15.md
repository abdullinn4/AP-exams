### Sorting Algorithms

### What is Sorting?

**Sorting** is the process of arranging elements in a specific order—typically ascending (smallest to largest) or descending (largest to smallest). Sorting is a fundamental operation in computer science because it enables efficient searching (like binary search), data organization, and analysis. The AP Computer Science A exam requires you to understand two specific iterative sorting algorithms: **selection sort** and **insertion sort**.

**Real-World Analogy:** Imagine you have a deck of playing cards in your hand, and you want to arrange them in order from smallest to largest. You might repeatedly pick the smallest card from the unsorted part and move it to the front (selection sort), or you might take one card at a time and insert it into its correct position among the already sorted cards (insertion sort).


### Selection Sort

**Selection sort** works by repeatedly finding the smallest (or largest) element from the unsorted portion of the array and swapping it with the first element of that unsorted portion. The sorted portion grows from the left side of the array.

#### Algorithm Steps

1. Start with the entire array as unsorted.
2. Find the index of the smallest element in the unsorted portion.
3. Swap that smallest element with the first element of the unsorted portion.
4. Move the boundary between sorted and unsorted one step to the right.
5. Repeat until the unsorted portion is empty.

#### Example: Sorting an Array in Ascending Order

Let's sort the array `[40, 30, 50, 60, 10, 20]` using selection sort.

**Pass 1:** Find the smallest element in the entire array (indices 0‑5). The smallest is `10` at index 4. Swap it with the element at index 0 (`40`). Array becomes `[10, 30, 50, 60, 40, 20]`. Sorted portion now includes index 0.

**Pass 2:** Find the smallest in the remaining unsorted portion (indices 1‑5). The smallest is `20` at index 5. Swap with index 1 (`30`). Array becomes `[10, 20, 50, 60, 40, 30]`. Sorted portion now indices 0‑1.

**Pass 3:** Unsorted portion indices 2‑5. Smallest is `30` at index 5. Swap with index 2 (`50`). Array becomes `[10, 20, 30, 60, 40, 50]`. Sorted portion now indices 0‑2.

**Pass 4:** Unsorted portion indices 3‑5. Smallest is `40` at index 4. Swap with index 3 (`60`). Array becomes `[10, 20, 30, 40, 60, 50]`. Sorted portion now indices 0‑3.

**Pass 5:** Unsorted portion indices 4‑5. Smallest is `50` at index 5. Swap with index 4 (`60`). Array becomes `[10, 20, 30, 40, 50, 60]`. Sorted portion now indices 0‑4; last element is automatically sorted.

The array is now fully sorted.

#### Code Implementation

```java
public static void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        // Assume the first unsorted element is the smallest
        int minIndex = i;
        
        // Find the index of the smallest element in the unsorted part
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap the found smallest element with the first unsorted element
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
```

**Key points:**
- The outer loop runs from `0` to `n‑2` (because the last element will be in place after n‑1 passes).
- The inner loop finds the minimum in the unsorted portion.
- After each pass, the smallest element from the unsorted part is placed at the beginning of that part.

#### Time Complexity
- Always does `n(n‑1)/2` comparisons (even if the array is already sorted).
- Best, average, and worst case: **O(n²)**.


### Insertion Sort

**Insertion sort** builds the sorted portion one element at a time by taking each element from the unsorted portion and inserting it into its correct position within the sorted portion, shifting larger elements to the right.

#### Algorithm Steps

1. Consider the first element as already sorted.
2. Take the next element from the unsorted portion.
3. Compare it with elements in the sorted portion (from right to left) and shift larger elements one position to the right.
4. Insert the element into the vacated correct position.
5. Repeat until all elements are processed.

#### Example: Sorting the Same Array

Sort `[40, 30, 50, 60, 10, 20]` using insertion sort.

**Pass 1:** Sorted portion = [40]. Take next element `30`. Compare with `40`; `40 > 30`, so shift `40` right. Insert `30` at index 0. Array: `[30, 40, 50, 60, 10, 20]`.

**Pass 2:** Sorted portion = [30, 40]. Take next element `50`. Compare with `40`; `40 < 50`, so no shift. Insert `50` at index 2 (same place). Array unchanged: `[30, 40, 50, 60, 10, 20]`.

**Pass 3:** Sorted portion = [30, 40, 50]. Take next element `60`. Compare with `50`; `50 < 60`, so no shift. Insert `60` at index 3. Array unchanged: `[30, 40, 50, 60, 10, 20]`.

**Pass 4:** Sorted portion = [30, 40, 50, 60]. Take next element `10`. Compare with `60` → shift `60` right; compare with `50` → shift; with `40` → shift; with `30` → shift. Insert `10` at index 0. Array: `[10, 30, 40, 50, 60, 20]`.

**Pass 5:** Sorted portion = [10, 30, 40, 50, 60]. Take next element `20`. Compare with `60` → shift; with `50` → shift; with `40` → shift; with `30` → shift; compare with `10`; `10 < 20` so stop. Insert `20` at index 1. Array: `[10, 20, 30, 40, 50, 60]`. Sorted.

#### Code Implementation

```java
public static void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int current = arr[i];       // element to be inserted
        int j = i - 1;
        
        // Shift elements of the sorted portion that are greater than current
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert current into its correct position
        arr[j + 1] = current;
    }
}
```

**Key points:**
- The outer loop starts at index 1 (the first element is considered sorted).
- The inner `while` loop shifts elements right to make room.
- Insertion happens after the loop ends.

#### Time Complexity
- **Best case** (array already sorted): O(n) – only one comparison per element.
- **Average and worst case** (array reverse sorted): O(n²).


### Sorting an ArrayList

The same algorithms can be applied to an `ArrayList`. You use `get()`, `set()`, and `size()` instead of array indexing.

**Selection sort for `ArrayList<Integer>`:**

```java
public static void selectionSort(ArrayList<Integer> list) {
    for (int i = 0; i < list.size() - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < list.size(); j++) {
            if (list.get(j) < list.get(minIndex)) {  // careful: use compareTo for objects
                minIndex = j;
            }
        }
        // Swap using temporary variable
        int temp = list.get(i);
        list.set(i, list.get(minIndex));
        list.set(minIndex, temp);
    }
}
```

**Note:** For `ArrayList<Integer>`, using `<` works because of autounboxing, but for other object types you would need `compareTo`. The AP exam typically uses primitive arrays, but you may see ArrayLists in multiple‑choice questions.


### Comparing Selection Sort and Insertion Sort

| Feature | Selection Sort | Insertion Sort |
|---------|----------------|----------------|
| **Approach** | Repeatedly select smallest and swap | Repeatedly insert next element into sorted portion |
| **Best case** | O(n²) – always does full comparisons | O(n) – when already sorted |
| **Worst case** | O(n²) | O(n²) |
| **Space** | In‑place (no extra array) | In‑place |
| **Stable?** | Not stable (equal elements may change relative order) | Stable (preserves order of equal elements) |
| **Performance** | Good for small arrays; simple to implement | Good for nearly sorted data; more efficient in practice |


### Key Terminology for Topic 4.15

| Term | Definition |
|------|------------|
| **Selection sort** | A sorting algorithm that repeatedly finds the smallest element in the unsorted portion and swaps it with the first unsorted element. |
| **Insertion sort** | A sorting algorithm that builds a sorted portion by inserting each new element into its correct position, shifting larger elements right. |
| **Pass** | One iteration of the outer loop in a sorting algorithm. |
| **In‑place sort** | A sort that uses only a constant amount of extra memory (swaps elements within the array). |
| **Stable sort** | A sort that preserves the relative order of equal elements. |


### AP Exam Tips

- **Trace the algorithm:** Be able to show the state of the array after each pass of selection sort or insertion sort. The exam often asks for the array after a certain number of iterations.
- **Know the difference:** Selection sort always does O(n²) comparisons regardless of input; insertion sort can be faster on nearly sorted data.
- **Code patterns:** Memorize the code structure for both algorithms—they appear frequently in multiple‑choice questions.
- **Off‑by‑one:** In selection sort, the outer loop goes to `arr.length‑1`; the inner loop starts at `i+1`. In insertion sort, the outer loop starts at 1, and the inner while shifts using `j >= 0`.
- **Array vs ArrayList:** Be comfortable with both. For ArrayList, use `get()` and `set()`.
- **Stability not tested directly** but understanding it can help in some questions.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Selection sort is faster than insertion sort." | Not always; insertion sort is often faster on nearly sorted data. |
| "Both algorithms have the same best‑case complexity." | Selection sort is always O(n²); insertion sort can be O(n). |
| "You need a temporary array to sort." | Both are in‑place sorts. |
| "The inner loop in insertion sort always runs to the beginning." | It stops when it finds the correct position. |
| "After k passes of selection sort, the first k elements are the smallest k in order." | Yes—that's a key property. |
| "Insertion sort after k passes has the first k+1 elements sorted, but they may not be the smallest." | Correct; they are the first k+1 elements of the original array in sorted order. |


### Quick Reference: Sorting Algorithms

| Algorithm | Outer Loop | Inner Loop | Key Operation |
|-----------|------------|------------|---------------|
| Selection sort | `for (i = 0; i < n-1; i++)` | `for (j = i+1; j < n; j++)` | Find min, swap with i |
| Insertion sort | `for (i = 1; i < n; i++)` | `while (j >= 0 && arr[j] > current)` | Shift, then insert |<｜end▁of▁thinking｜