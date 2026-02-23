### 4.14: Searching Algorithms


### What is Searching?

**Searching** is the process of finding a specific element or value within a collection of data. In computer science, searching algorithms are fundamental—they allow programs to locate information, verify existence, and retrieve data. For the AP exam, you need to understand **linear search** and its application to both 1D and 2D arrays.

**Real-World Analogy:** Imagine you have a stack of index cards, each with a name. To find a particular name, you might start at the top and look at each card one by one until you find it (or reach the end). That's linear search. It's simple, reliable, and works even if the cards are not in any order.


### Linear Search

**Linear search** (also called sequential search) is the simplest searching algorithm. It checks each element in the collection in order until the desired value is found or all elements have been examined.

#### Characteristics

- **Works on any collection:** The data does not need to be sorted.
- **Simple to implement:** Uses a loop and a condition.
- **Time efficiency:** In the worst case, it examines every element (O(n)).
- **Early exit:** As soon as the target is found, the search can stop.

#### Linear Search in a 1D Array

```java
public static int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;  // found at index i
        }
    }
    return -1;  // not found
}
```

**How it works:**
- Loop through each index from 0 to `arr.length - 1`.
- If the current element equals the target, return the current index.
- If the loop finishes without finding the target, return `-1` (a common sentinel for "not found").

#### Returning a Boolean Instead

Sometimes you only need to know whether the value exists, not its position.

```java
public static boolean contains(int[] arr, int target) {
    for (int num : arr) {
        if (num == target) {
            return true;
        }
    }
    return false;
}
```

#### Searching from Either End

Linear search can begin at either end. The algorithm is symmetric—starting from the last element works just as well.

```java
public static int linearSearchFromEnd(int[] arr, int target) {
    for (int i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
```

#### Searching an ArrayList

The same logic applies to an `ArrayList`, using `get()` and `size()`.

```java
public static int linearSearch(ArrayList<Integer> list, int target) {
    for (int i = 0; i < list.size(); i++) {
        if (list.get(i).equals(target)) {  // use equals for Integer objects
            return i;
        }
    }
    return -1;
}
```

**Note:** When the list holds `Integer` objects, use `.equals()` rather than `==` to compare values (unless you are certain about caching). Autounboxing can make `==` work for small integers, but `.equals()` is safer.


### Linear Search in a 2D Array

Searching a 2D array requires nested loops—one for rows and one for columns. You must decide whether to return the position as a single index, a pair of coordinates, or just a boolean.

#### Returning a boolean

```java
public static boolean contains(int[][] matrix, int target) {
    for (int[] row : matrix) {
        for (int val : row) {
            if (val == target) {
                return true;
            }
        }
    }
    return false;
}
```

#### Returning Row and Column Indices

If you need the exact location, you can return an array of two ints, or use a custom class. A common approach is to return `-1, -1` if not found.

```java
public static int[] findPosition(int[][] matrix, int target) {
    for (int r = 0; r < matrix.length; r++) {
        for (int c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] == target) {
                return new int[]{r, c};
            }
        }
    }
    return new int[]{-1, -1};  // not found
}
```

#### Searching Only a Specific Row or Column

You can restrict the search to a single row (like a 1D search) or a single column.

**Search a specific row:**
```java
public static boolean containsInRow(int[][] matrix, int row, int target) {
    for (int c = 0; c < matrix[row].length; c++) {
        if (matrix[row][c] == target) {
            return true;
        }
    }
    return false;
}
```

**Search a specific column:**
```java
public static boolean containsInColumn(int[][] matrix, int col, int target) {
    for (int r = 0; r < matrix.length; r++) {
        if (matrix[r][col] == target) {
            return true;
        }
    }
    return false;
}
```


### When to Use Linear Search

Linear search is appropriate when:

- The data is **unsorted** (binary search requires sorted data).
- The collection is **small** (the simplicity outweighs any performance concerns).
- You are searching **only once** (the overhead of sorting just to search is not worthwhile).
- You need to search in a **2D array** where other algorithms are not applicable.


### Common Errors with Linear Search

| Error | Example | Problem | Fix |
|-------|---------|---------|-----|
| Forgetting to return -1 | No return after loop | Method may not return a value | Add `return -1;` at end |
| Using `==` with objects | `if (list.get(i) == target)` where target is Integer | Compares references, not values | Use `.equals()` |
| Off‑by‑one in loop | `for (int i = 0; i <= arr.length; i++)` | Accesses index out of bounds | Use `< arr.length` |
| Not using early exit | Always traversing entire array even after finding target | Inefficient, but still works | Add `return` or `break` |
| Confusing row and column indices in 2D search | `matrix[c][r]` instead of `matrix[r][c]` | Accesses wrong element | Keep `[row][col]` order |


### Key Terminology for Topic 4.14

| Term | Definition |
|------|------------|
| **Linear search** | A search algorithm that checks each element in order until the target is found or the end is reached. |
| **Sequential search** | Another name for linear search. |
| **Target** | The value being searched for. |
| **Sentinel value** | A special value (like `-1`) used to indicate "not found". |
| **Early exit** | Stopping the search as soon as the target is found. |


### AP Exam Tips

- **Linear search is the only required search algorithm** (binary search is covered in Topic 4.17).
- **Know both array and ArrayList versions:** Practice writing linear search for both data structures.
- **Return values:** Be clear about what the method should return—index, position, or boolean.
- **2D search:** Remember that nested loops are required; you can return a boolean or an array of coordinates.
- **Early exit:** The exam often tests whether you know to stop searching once the target is found.
- **Not found handling:** Always have a way to indicate "not found" (return `-1` or `false`).
- **`equals` for objects:** When searching `ArrayList<String>` or `ArrayList<Integer>`, use `.equals()` not `==`.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Linear search only works on sorted data." | No, it works on any data—sorted or unsorted. |
| "Linear search always examines every element." | No, it stops as soon as the target is found (early exit). |
| "You can't search a 2D array with linear search." | You can, using nested loops. |
| "The only way to return a position from a 2D search is with two separate variables." | You can return an array or a custom object. |
| "Using `==` with `Integer` is safe." | Not always—use `.equals()` for reliability. |


### Quick Reference: Linear Search Patterns

| Data Structure | Search Type | Key Code |
|----------------|-------------|----------|
| 1D array (primitive) | Return index | `if (arr[i] == target) return i;` |
| 1D array (primitive) | Return boolean | `if (num == target) return true;` |
| ArrayList<Integer> | Return index | `if (list.get(i).equals(target)) return i;` |
| ArrayList<Integer> | Return boolean | `if (num.equals(target)) return true;` |
| 2D array | Return boolean | `if (matrix[r][c] == target) return true;` |
| 2D array | Return coordinates | `return new int[]{r, c};` |
| 2D array – specific row | Return boolean | `if (matrix[row][c] == target) return true;` |
| 2D array – specific column | Return boolean | `if (matrix[r][col] == target) return true;` |