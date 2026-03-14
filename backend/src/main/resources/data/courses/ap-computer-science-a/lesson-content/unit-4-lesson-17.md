### Recursive Searching and Sorting


### Recursive String and Collection Traversal

Recursion can be used to traverse and process strings, arrays, and `ArrayLists`. While iterative loops are more common, recursive approaches can sometimes express algorithms more elegantly. For the AP exam, you only need to **determine the result** of such recursive methods, not write them.

#### Example: Recursive String Length

```java
public static int recursiveLength(String str) {
    if (str.equals("")) {
        return 0;
    }
    return 1 + recursiveLength(str.substring(1));
}
```

This method works by removing the first character and counting 1 for each recursive call until the string becomes empty.

#### Example: Recursive String Reversal

```java
public static String reverse(String str) {
    if (str.length() <= 1) {
        return str;
    }
    return reverse(str.substring(1)) + str.charAt(0);
}
```

The reversal builds the result by taking the first character and appending it after the reverse of the rest.

#### Example: Sum of Array Elements (Recursive)

```java
public static int sumArray(int[] arr, int n) {
    if (n <= 0) {
        return 0;
    }
    return arr[n-1] + sumArray(arr, n-1);
}
```

Here `n` is the number of elements to consider; the recursion processes from the end toward the front.

#### Example: Linear Search (Recursive)

```java
public static boolean recSearch(int[] arr, int target, int index) {
    if (index >= arr.length) {
        return false;
    }
    if (arr[index] == target) {
        return true;
    }
    return recSearch(arr, target, index + 1);
}
```

This is a recursive version of linear search; it checks each element in turn until found or end is reached.

**Key Point:** For the exam, you must be able to trace such recursive calls and determine what value they return.


### Binary Search

**Binary search** is an efficient algorithm for finding a target value in a **sorted** array or `ArrayList`. It works by repeatedly dividing the search interval in half. If the target is less than the middle element, search the left half; if greater, search the right half. This process continues until the target is found or the interval becomes empty.

Binary search can be implemented either **iteratively** or **recursively**. On the AP exam, you need to understand both forms and be able to determine the result of each step.

#### Recursive Binary Search

```java
public static int binarySearch(int[] arr, int target, int low, int high) {
    if (low > high) {
        return -1;                     // base case: not found
    }
    int mid = (low + high) / 2;
    if (arr[mid] == target) {
        return mid;                    // found
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);   // search left half
    } else {
        return binarySearch(arr, target, mid + 1, high);  // search right half
    }
}
```

**Key features:**
- Requires the array to be **sorted**.
- Each recursive call eliminates half of the remaining elements.
- Base case: `low > high` means the target is not present.

#### Iterative Binary Search

```java
public static int binarySearchIterative(int[] arr, int target) {
    int low = 0;
    int high = arr.length - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}
```

Both versions have the same logic and efficiency.

#### Tracing Binary Search

**Example:** Search for target 23 in the sorted array `[2, 5, 8, 12, 16, 23, 38, 45, 56, 72]`.

- **Initial:** low = 0, high = 9 → mid = 4 (value 16). 16 < 23 → search right: low = 5, high = 9.
- **Step 2:** low = 5, high = 9 → mid = 7 (value 45). 45 > 23 → search left: low = 5, high = 6.
- **Step 3:** low = 5, high = 6 → mid = 5 (value 23). Found at index 5.

If the target were not present, the search would continue until low > high.

#### Efficiency

Binary search runs in **O(log n)** time because each step halves the search space. For example, searching 1,000 elements takes at most about 10 comparisons (since 2¹⁰ ≈ 1000).

#### Requirements

- The data must be **sorted**.
- Random access (array or `ArrayList`) is required to find the middle element in constant time.


### Merge Sort

**Merge sort** is a recursive sorting algorithm that follows the **divide and conquer** approach:
1. **Divide** the array into two halves.
2. **Conquer** (sort) each half recursively.
3. **Combine** (merge) the two sorted halves into a single sorted array.

#### How Merge Sort Works

Consider the array `[38, 27, 43, 3, 9, 82, 10]`.

**Divide phase:**
- Split into left `[38, 27, 43, 3]` and right `[9, 82, 10]`.
- Recursively split each half until subarrays have one element (trivially sorted).

**Merge phase:**
- Merge two single‑element arrays into a sorted two‑element array.
- Merge sorted two‑element arrays into sorted four‑element arrays, etc.
- Finally merge the two sorted halves into the fully sorted array.

#### Merge Sort Code (Conceptual)

```java
public static void mergeSort(int[] arr) {
    if (arr.length <= 1) return;          // base case
    int mid = arr.length / 2;
    int[] left = Arrays.copyOfRange(arr, 0, mid);
    int[] right = Arrays.copyOfRange(arr, mid, arr.length);
    mergeSort(left);
    mergeSort(right);
    merge(arr, left, right);               // merge the sorted halves
}

private static void merge(int[] result, int[] left, int[] right) {
    int i = 0, j = 0, k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result[k++] = left[i++];
        } else {
            result[k++] = right[j++];
        }
    }
    while (i < left.length) result[k++] = left[i++];
    while (j < right.length) result[k++] = right[j++];
}
```

#### Tracing Merge Sort

You may be asked to show the state of the array at various stages. The key is understanding the recursive splitting and merging.

**Example:** Sort `[12, 11, 13, 5, 6, 7]`.

**Splitting:**
```
[12, 11, 13, 5, 6, 7]
    /            \
[12, 11, 13]   [5, 6, 7]
   /     \       /    \
[12]  [11,13]  [5]   [6,7]
      /    \          /   \
    [11]   [13]     [6]   [7]
```

**Merging:**
- Merge `[11]` and `[13]` → `[11, 13]`
- Merge `[12]` and `[11, 13]` → `[11, 12, 13]` (left half sorted)
- Merge `[6]` and `[7]` → `[6, 7]`
- Merge `[5]` and `[6, 7]` → `[5, 6, 7]` (right half sorted)
- Merge `[11, 12, 13]` and `[5, 6, 7]` → `[5, 6, 7, 11, 12, 13]`

#### Efficiency

- **Time:** O(n log n) in all cases (best, average, worst).
- **Space:** O(n) extra space for temporary arrays during merging.


### Key Terminology for Topic 4.17

| Term | Definition |
|------|------------|
| **Binary search** | An efficient search algorithm for sorted data that repeatedly divides the search interval in half. |
| **Merge sort** | A recursive divide‑and‑conquer sorting algorithm that splits the array, sorts each half, and merges them. |
| **Divide and conquer** | An algorithm design paradigm that breaks a problem into smaller subproblems, solves them, and combines the results. |
| **Sorted** | Data arranged in a specific order (usually ascending). |
| **Recursive traversal** | Using recursion to process each element of a string or collection. |


### AP Exam Tips

- **Binary search requires sorted data.** If the array is not sorted, binary search will not work correctly.
- **Tracing binary search:** Be able to determine the sequence of `low`, `high`, and `mid` values for a given target.
- **Merge sort tracing:** You may be asked to show the array after each merge step or to identify the state after a certain number of recursive calls.
- **Recursive string/collection methods:** Practice tracing simple recursive methods on strings and arrays; they appear in multiple‑choice questions.
- **Efficiency:** Know that binary search is O(log n) and merge sort is O(n log n).
- **Exclusion reminder:** Only linear search, binary search, selection sort, insertion sort, and merge sort are in scope. Other sorts (quick, heap, etc.) are not tested.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Binary search works on unsorted data." | No, the data must be sorted. |
| "Merge sort uses O(1) extra space." | No, it typically uses O(n) extra space for merging. |
| "Binary search and merge sort are both O(n log n)." | Binary search is O(log n); merge sort is O(n log n). |
| "Recursive string methods always return strings." | They can return any type; e.g., `recursiveLength` returns an int. |
| "Binary search can only be written recursively." | It can be written both recursively and iteratively. |


### Quick Reference: Recursive Searching and Sorting

| Algorithm | Type | Key Idea | Complexity |
|-----------|------|----------|------------|
| Recursive linear search | Searching | Check element, recurse on rest | O(n) |
| Binary search | Searching | Divide interval in half | O(log n) |
| Merge sort | Sorting | Split, sort recursively, merge | O(n log n) |