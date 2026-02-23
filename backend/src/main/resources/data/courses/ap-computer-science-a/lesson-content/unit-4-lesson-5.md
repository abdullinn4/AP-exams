### 4.5: Implementing Array Algorithms


### Why Standard Array Algorithms Matter

Arrays are fundamental data structures, and knowing how to implement common algorithms on arrays is essential for solving programming problems efficiently. These algorithms appear repeatedly on the AP exam, both in multiple‑choice questions and as components of free‑response questions. Mastering them will give you a toolkit you can apply to countless problems.

**Real-World Analogy:** Think of these algorithms like basic kitchen skills—chopping, boiling, sautéing. Once you learn them, you can combine them in countless ways to create complex dishes (programs). Each algorithm is a specific technique for processing array data.


### Algorithm 1: Finding the Minimum or Maximum Value

Finding the smallest or largest value in an array is one of the most common operations.

#### Finding the Maximum

```java
public static int findMax(int[] arr) {
    // Assume array is not empty
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
```

**Key points:**
- Initialize `max` to the first element (not 0, in case all values are negative).
- Start the loop at index 1 (since we already examined index 0).
- Update `max` whenever a larger value is found.

#### Finding the Minimum

```java
public static int findMin(int[] arr) {
    int min = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
```

#### Finding Both in One Pass

```java
public static void findMinMax(int[] arr) {
    int min = arr[0];
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    System.out.println("Min: " + min + ", Max: " + max);
}
```

#### Handling Empty Arrays

If the array could be empty, you must handle that case separately (e.g., throw an exception or return a special value).

```java
public static int findMaxSafe(int[] arr) {
    if (arr == null || arr.length == 0) {
        throw new IllegalArgumentException("Array cannot be null or empty");
    }
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
```


### Algorithm 2: Computing Sum and Average

Summing all elements and calculating the average is a fundamental accumulation pattern.

#### Sum of All Elements

```java
public static int sum(int[] arr) {
    int total = 0;
    for (int num : arr) {
        total += num;
    }
    return total;
}
```

#### Average

```java
public static double average(int[] arr) {
    if (arr.length == 0) return 0.0; // or handle appropriately
    int sum = 0;
    for (int num : arr) {
        sum += num;
    }
    return (double) sum / arr.length; // cast to double for decimal result
}
```

**Important:** Cast `sum` to `double` before division to avoid integer truncation. Without the cast, integer division would discard the fractional part.


### Algorithm 3: Determining if At Least One Element Has a Particular Property

This is a search with early exit. As soon as you find an element that satisfies the condition, you can return `true`.

#### Example: Check if array contains a negative number

```java
public static boolean hasNegative(int[] arr) {
    for (int num : arr) {
        if (num < 0) {
            return true;  // found one, no need to continue
        }
    }
    return false;  // none found
}
```

#### General pattern

```java
public static boolean anyMatch(int[] arr, int target) {
    for (int num : arr) {
        if (num == target) {  // condition could be anything
            return true;
        }
    }
    return false;
}
```


### Algorithm 4: Determining if All Elements Have a Particular Property

This requires checking every element; if any element fails the condition, you can return `false` early.

#### Example: Check if all numbers are positive

```java
public static boolean allPositive(int[] arr) {
    for (int num : arr) {
        if (num <= 0) {
            return false;  // found a non-positive, fail
        }
    }
    return true;  // all passed
}
```

#### General pattern

```java
public static boolean allMatch(int[] arr, int threshold) {
    for (int num : arr) {
        if (num <= threshold) {  // condition for failure
            return false;
        }
    }
    return true;
}
```


### Algorithm 5: Counting Elements That Meet a Criterion

Use a counter variable that increments each time an element satisfies the condition.

#### Example: Count how many scores are above 90

```java
public static int countAbove90(int[] scores) {
    int count = 0;
    for (int score : scores) {
        if (score > 90) {
            count++;
        }
    }
    return count;
}
```

#### General pattern

```java
public static int countMatches(int[] arr, int target) {
    int count = 0;
    for (int num : arr) {
        if (num == target) {
            count++;
        }
    }
    return count;
}
```


### Algorithm 6: Accessing All Consecutive Pairs of Elements

Sometimes you need to examine each pair of adjacent elements. This is useful for detecting trends, checking sorted order, or finding differences.

#### Example: Print all adjacent pairs

```java
public static void printAdjacentPairs(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        System.out.println("(" + arr[i] + ", " + arr[i+1] + ")");
    }
}
```

#### Example: Check if array is sorted in ascending order

```java
public static boolean isSorted(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            return false;  // out of order
        }
    }
    return true;
}
```

#### Example: Find the largest difference between consecutive elements

```java
public static int maxDifference(int[] arr) {
    if (arr.length < 2) return 0;
    int maxDiff = Math.abs(arr[1] - arr[0]);
    for (int i = 1; i < arr.length - 1; i++) {
        int diff = Math.abs(arr[i+1] - arr[i]);
        if (diff > maxDiff) {
            maxDiff = diff;
        }
    }
    return maxDiff;
}
```

**Key point:** The loop goes up to `arr.length - 2` to avoid index out of bounds when accessing `arr[i+1]`.


### Algorithm 7: Determining the Presence or Absence of Duplicate Elements

There are several ways to check for duplicates; one simple method uses nested loops.

#### Nested loop approach

```java
public static boolean hasDuplicates(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return true;  // duplicate found
            }
        }
    }
    return false;  // no duplicates
}
```

**Why start `j` at `i+1`?** This avoids comparing an element with itself and also avoids comparing pairs twice (e.g., comparing i=2, j=3 and later i=3, j=2 would be redundant). This pattern ensures each pair is examined exactly once.

#### Alternative approach (if you can modify the array or use extra data structures)

For the AP exam, the nested loop method is sufficient and demonstrates understanding of array traversal.


### Algorithm 8: Shifting or Rotating Elements

Shifting moves elements left or right, possibly wrapping around (rotation).

#### Shift left by one (first element removed, last element becomes 0 or is lost)

```java
public static void shiftLeft(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;  // optional: set last to default
}
```

#### Shift right by one

```java
public static void shiftRight(int[] arr) {
    for (int i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = 0;  // optional
}
```

#### Rotate left (first element moves to the end)

```java
public static void rotateLeft(int[] arr) {
    if (arr.length <= 1) return;
    int first = arr[0];
    for (int i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
}
```

#### Rotate right (last element moves to the front)

```java
public static void rotateRight(int[] arr) {
    if (arr.length <= 1) return;
    int last = arr[arr.length - 1];
    for (int i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = last;
}
```


### Algorithm 9: Reversing the Order of Elements

Reversing an array swaps the first with the last, second with second‑last, etc.

```java
public static void reverse(int[] arr) {
    for (int i = 0; i < arr.length / 2; i++) {
        int j = arr.length - 1 - i;
        // swap arr[i] and arr[j]
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
```

**How it works:**
- Loop only needs to go halfway (`arr.length / 2`).
- For an array of length 5, indices 0↔4, 1↔3. Index 2 stays in the middle.
- Using a temporary variable `temp` is essential for swapping.

#### Alternative using two indices

```java
public static void reverse(int[] arr) {
    int left = 0;
    int right = arr.length - 1;
    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}
```

Both approaches are correct and demonstrate understanding.


### Combining Algorithms

Real problems often require combining multiple algorithms.

#### Example: Find the average of all positive numbers

```java
public static double averagePositive(int[] arr) {
    int sum = 0;
    int count = 0;
    for (int num : arr) {
        if (num > 0) {
            sum += num;
            count++;
        }
    }
    return count == 0 ? 0.0 : (double) sum / count;
}
```

This combines **counting** and **summation** with a **property check**.

#### Example: Check if array has any duplicates and also find the minimum

```java
public static void analyze(int[] arr) {
    boolean hasDup = false;
    int min = arr[0];
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                hasDup = true;
            }
        }
    }
    System.out.println("Min: " + min);
    System.out.println("Has duplicates: " + hasDup);
}
```


### Key Terminology for Topic 4.5

| Term | Definition |
|------|------------|
| **Minimum/maximum algorithm** | Finding the smallest or largest value in an array |
| **Accumulator pattern** | Using a variable to accumulate a result (sum, count) across iterations |
| **Early exit** | Returning from a loop as soon as a condition is met |
| **Flag variable** | A boolean variable that indicates whether a condition has been met |
| **Consecutive pairs** | Adjacent elements in an array, accessed as `arr[i]` and `arr[i+1]` |
| **Swap** | Exchanging the values of two variables using a temporary variable |
| **Shift** | Moving all elements left or right, possibly losing elements at the end |
| **Rotate** | Moving all elements left or right with wraparound |
| **Reverse** | Reordering the array so that the first becomes last, etc. |


### AP Exam Tips

- **Know the patterns:** These nine algorithms appear repeatedly. Practice writing them from memory.
- **Off-by-one errors:** Be especially careful with loops that access `arr[i+1]` or that go up to `arr.length/2`. Test with small arrays.
- **Edge cases:** Consider empty arrays, arrays of length 1, and arrays with all negative numbers when finding max/min.
- **Efficiency:** The duplicate detection nested loop runs in O(n²). For the AP exam, this is acceptable; you won't need more efficient approaches.
- **Combine algorithms:** Free‑response questions often require combining multiple algorithms (e.g., count and average, min and duplicate check).
- **Use enhanced for when possible:** For read‑only algorithms (sum, count, all/any checks), enhanced for loops make code clearer.
- **Use indexed for when needed:** For algorithms that require index (consecutive pairs, shifts, reverse), you must use indexed for.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Initialize max to 0 to find maximum." | If all numbers are negative, max will be incorrectly 0. Initialize to first element. |
| "Sum and average can't be done in one loop." | They can—just accumulate sum and count separately. |
| "Duplicate detection requires sorting." | No, nested loops work fine for small arrays. |
| "Reverse needs a second array." | No, you can reverse in place by swapping. |
| "Shift and rotate are the same." | Shift loses elements; rotate wraps them around. |
| "All algorithms need the array to be non‑empty." | Some do; always handle the empty case appropriately. |

### Quick Reference: Array Algorithms

| Algorithm | Pattern | Key Code |
|-----------|---------|----------|
| Min/Max | Initialize to first, update | `if (arr[i] > max) max = arr[i];` |
| Sum/Average | Accumulator | `sum += arr[i];` then `(double) sum / count` |
| Any match | Early return | `if (condition) return true;` |
| All match | Early exit on failure | `if (!condition) return false;` |
| Count matches | Counter | `if (condition) count++;` |
| Consecutive pairs | Loop to `length-1` | `arr[i]` and `arr[i+1]` |
| Duplicates | Nested loops | `for (int j = i+1; j < n; j++)` |
| Shift left | Loop forward | `arr[i] = arr[i+1];` |
| Shift right | Loop backward | `arr[i] = arr[i-1];` |
| Rotate left | Store first, shift, put first at end | |
| Reverse | Swap first/last | `temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;` |