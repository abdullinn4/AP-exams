### 4.10: Implementing ArrayList Algorithms


### Why ArrayList Algorithms Matter

`ArrayList` is one of the most versatile data structures in Java, and knowing how to implement common algorithms on an `ArrayList` is essential for solving many programming problems. These algorithms appear frequently on the AP exam, especially in free‑response questions (FRQ #3). While many algorithms are similar to those for arrays, `ArrayList` provides additional flexibility—especially the ability to insert and delete elements—which requires new techniques and careful index management.

**Real-World Analogy:** Think of an `ArrayList` like a dynamic to‑do list. You can add tasks, mark them as done (remove), insert new tasks in the middle, and reorder them. The algorithms you learn here are the mental steps for managing that list efficiently.


### Standard ArrayList Algorithms

The AP CS A course identifies several standard algorithms that utilize `ArrayList` traversals. Many are adaptations of array algorithms, but with the added power of dynamic resizing.

| Algorithm | Description |
|-----------|-------------|
| Minimum/Maximum | Find the smallest or largest value |
| Sum/Average | Compute total or mean of elements |
| Property check (any/all) | Determine if any/all elements meet a condition |
| Count | Count elements that satisfy a condition |
| Consecutive pairs | Access each adjacent pair of elements |
| Duplicate detection | Determine if duplicates exist |
| Shift/Rotate | Move elements left or right (with possible wrap) |
| Reverse | Reverse the order of elements |
| Insert | Add elements at specific positions |
| Delete | Remove elements at specific positions |
| Simultaneous traversal | Process two or more lists together |


### Algorithm 1: Minimum and Maximum

Finding the minimum or maximum value in an `ArrayList` is similar to arrays, but you use `size()` and `get()`.

#### Finding the Maximum

```java
public static Integer findMax(ArrayList<Integer> list) {
    if (list == null || list.isEmpty()) {
        return null; // or throw exception
    }
    Integer max = list.get(0);
    for (int i = 1; i < list.size(); i++) {
        if (list.get(i) > max) {
            max = list.get(i);
        }
    }
    return max;
}
```

**Key points:**
- Check for empty list.
- Initialize `max` to the first element.
- Loop from index 1 to `size()-1`.
- Use `>` for comparison (autounboxing works).

#### Finding the Minimum

```java
public static Integer findMin(ArrayList<Integer> list) {
    if (list.isEmpty()) return null;
    Integer min = list.get(0);
    for (int i = 1; i < list.size(); i++) {
        if (list.get(i) < min) {
            min = list.get(i);
        }
    }
    return min;
}
```

#### Finding Both in One Pass

```java
public static void findMinMax(ArrayList<Integer> list) {
    if (list.isEmpty()) return;
    Integer min = list.get(0);
    Integer max = list.get(0);
    for (int i = 1; i < list.size(); i++) {
        Integer val = list.get(i);
        if (val < min) min = val;
        if (val > max) max = val;
    }
    System.out.println("Min: " + min + ", Max: " + max);
}
```


### Algorithm 2: Sum and Average

#### Sum of All Elements

```java
public static int sum(ArrayList<Integer> list) {
    int total = 0;
    for (Integer num : list) {
        total += num; // unboxing
    }
    return total;
}
```

#### Average

```java
public static double average(ArrayList<Integer> list) {
    if (list.isEmpty()) return 0.0;
    int sum = 0;
    for (Integer num : list) {
        sum += num;
    }
    return (double) sum / list.size();
}
```

**Note:** Cast to `double` before division to avoid integer truncation.


### Algorithm 3: Determine if At Least One Element Has a Property

This is a search with early exit. As soon as you find an element that satisfies the condition, return `true`.

```java
public static boolean containsNegative(ArrayList<Integer> list) {
    for (Integer num : list) {
        if (num < 0) {
            return true;
        }
    }
    return false;
}
```

#### General Pattern

```java
public static boolean anyMatch(ArrayList<Integer> list, int target) {
    for (Integer num : list) {
        if (num.equals(target)) { // use equals for Integer objects
            return true;
        }
    }
    return false;
}
```

**Caution:** When comparing `Integer` objects, use `.equals()` rather than `==` unless you are sure about caching.


### Algorithm 4: Determine if All Elements Have a Property

This requires checking every element; if any fails the condition, return `false` early.

```java
public static boolean allPositive(ArrayList<Integer> list) {
    for (Integer num : list) {
        if (num <= 0) {
            return false;
        }
    }
    return true;
}
```

#### General Pattern

```java
public static boolean allMatch(ArrayList<Integer> list, int threshold) {
    for (Integer num : list) {
        if (num <= threshold) {
            return false;
        }
    }
    return true;
}
```


### Algorithm 5: Count Elements That Meet a Criterion

```java
public static int countAboveThreshold(ArrayList<Integer> list, int threshold) {
    int count = 0;
    for (Integer num : list) {
        if (num > threshold) {
            count++;
        }
    }
    return count;
}
```


### Algorithm 6: Access All Consecutive Pairs

Processing adjacent elements is useful for detecting trends, checking sorted order, or finding differences.

```java
public static void printAdjacentPairs(ArrayList<Integer> list) {
    for (int i = 0; i < list.size() - 1; i++) {
        System.out.println("(" + list.get(i) + ", " + list.get(i+1) + ")");
    }
}
```

#### Check if List is Sorted

```java
public static boolean isSorted(ArrayList<Integer> list) {
    for (int i = 0; i < list.size() - 1; i++) {
        if (list.get(i) > list.get(i+1)) {
            return false;
        }
    }
    return true;
}
```

#### Maximum Difference Between Consecutive Elements

```java
public static int maxDifference(ArrayList<Integer> list) {
    if (list.size() < 2) return 0;
    int maxDiff = Math.abs(list.get(1) - list.get(0));
    for (int i = 1; i < list.size() - 1; i++) {
        int diff = Math.abs(list.get(i+1) - list.get(i));
        if (diff > maxDiff) maxDiff = diff;
    }
    return maxDiff;
}
```


### Algorithm 7: Determine Presence or Absence of Duplicates

#### Nested Loop Approach

```java
public static boolean hasDuplicates(ArrayList<Integer> list) {
    for (int i = 0; i < list.size(); i++) {
        for (int j = i + 1; j < list.size(); j++) {
            if (list.get(i).equals(list.get(j))) {
                return true;
            }
        }
    }
    return false;
}
```

**Why nested loops?** This compares every pair exactly once. For small lists, it's fine; for the AP exam, it's acceptable.

#### Using a Set (Not Required for AP)

While not required, you might see this in practice. For the exam, the nested loop is sufficient.


### Algorithm 8: Shift or Rotate Elements

Shifting moves elements left or right, possibly losing elements at the end (shift) or wrapping them around (rotate).

#### Shift Left by One (loss of first element)

```java
public static void shiftLeft(ArrayList<Integer> list) {
    if (list.isEmpty()) return;
    for (int i = 0; i < list.size() - 1; i++) {
        list.set(i, list.get(i + 1));
    }
    list.remove(list.size() - 1); // remove last (now duplicate)
}
```

#### Shift Right by One (loss of last element)

```java
public static void shiftRight(ArrayList<Integer> list) {
    if (list.isEmpty()) return;
    for (int i = list.size() - 1; i > 0; i--) {
        list.set(i, list.get(i - 1));
    }
    list.remove(0); // remove first (now duplicate)
}
```

#### Rotate Left (first element moves to end)

```java
public static void rotateLeft(ArrayList<Integer> list) {
    if (list.size() <= 1) return;
    Integer first = list.remove(0);   // remove and capture
    list.add(first);                  // append at end
}
```

#### Rotate Right (last element moves to front)

```java
public static void rotateRight(ArrayList<Integer> list) {
    if (list.size() <= 1) return;
    Integer last = list.remove(list.size() - 1);
    list.add(0, last);
}
```

**Note:** `ArrayList` provides convenient methods (`remove` and `add(index)`) that make rotation much simpler than with arrays.


### Algorithm 9: Reverse the Order of Elements

Reversing an `ArrayList` can be done by swapping elements from both ends, just like with arrays.

```java
public static void reverse(ArrayList<Integer> list) {
    for (int i = 0; i < list.size() / 2; i++) {
        int j = list.size() - 1 - i;
        Integer temp = list.get(i);
        list.set(i, list.get(j));
        list.set(j, temp);
    }
}
```

**Alternative:** You could also create a new list and add elements in reverse order, but the in‑place swap is more efficient.


### Algorithm 10: Insert and Delete Elements

`ArrayList` has built‑in methods for insertion and deletion, but you may need to implement these operations manually in algorithms that require conditions.

#### Insert an Element at a Specific Position (if index valid)

```java
public static void insertAt(ArrayList<Integer> list, int index, Integer value) {
    if (index < 0 || index > list.size()) {
        throw new IndexOutOfBoundsException();
    }
    list.add(index, value);
}
```

Actually, `ArrayList` already provides this. But you might need to insert only if a condition holds, e.g., insert a new element after every occurrence of a target.

```java
public static void insertAfter(ArrayList<Integer> list, int target, int newValue) {
    for (int i = 0; i < list.size(); i++) {
        if (list.get(i).equals(target)) {
            list.add(i + 1, newValue);
            i++; // skip the newly added element
        }
    }
}
```

#### Delete All Elements That Meet a Condition

This is the removal‑during‑traversal problem from Topic 4.9. The safest way is to traverse backward.

```java
public static void removeIfNegative(ArrayList<Integer> list) {
    for (int i = list.size() - 1; i >= 0; i--) {
        if (list.get(i) < 0) {
            list.remove(i);
        }
    }
}
```


### Algorithm 11: Simultaneous Traversal of Multiple Structures

Sometimes you need to process two or more `ArrayLists` at the same time—for example, combining corresponding elements from two lists.

#### Zip Two Lists (alternating elements)

```java
public static ArrayList<String> zip(ArrayList<String> list1, ArrayList<String> list2) {
    ArrayList<String> result = new ArrayList<>();
    int minSize = Math.min(list1.size(), list2.size());
    for (int i = 0; i < minSize; i++) {
        result.add(list1.get(i));
        result.add(list2.get(i));
    }
    // add remaining elements from longer list if desired
    return result;
}
```

#### Pairwise Operation

```java
public static ArrayList<Integer> addPairs(ArrayList<Integer> a, ArrayList<Integer> b) {
    int minSize = Math.min(a.size(), b.size());
    ArrayList<Integer> sum = new ArrayList<>();
    for (int i = 0; i < minSize; i++) {
        sum.add(a.get(i) + b.get(i));
    }
    return sum;
}
```

#### Comparing Two Lists for Equality

```java
public static boolean areEqual(ArrayList<Integer> a, ArrayList<Integer> b) {
    if (a.size() != b.size()) return false;
    for (int i = 0; i < a.size(); i++) {
        if (!a.get(i).equals(b.get(i))) {
            return false;
        }
    }
    return true;
}
```


### Key Terminology for Topic 4.10

| Term | Definition |
|------|------------|
| **Standard ArrayList algorithms** | Common operations like min/max, sum, count, search, etc., adapted for `ArrayList`. |
| **Simultaneous traversal** | Processing two or more lists in parallel, often using the same index. |
| **Rotation** | Moving all elements left or right with wraparound. |
| **Shift** | Moving elements left or right, losing elements at the end. |
| **Insertion** | Adding an element at a specific position, shifting subsequent elements right. |
| **Deletion** | Removing an element at a specific position, shifting subsequent elements left. |


### AP Exam Tips

- **Adapt array algorithms:** Most array algorithms work similarly; replace `arr.length` with `list.size()` and `arr[i]` with `list.get(i)`. For modification, use `list.set(i, value)`.
- **Removal during traversal:** Use backward loops or adjust indices. The exam often tests this.
- **Insertion shifts indices:** When you insert an element, remember that indices after the insertion point increase. If you're traversing forward, you may need to skip the new element.
- **Wrapper classes and unboxing:** `ArrayList<Integer>` works with `int` in loops and comparisons, but be careful with `==` vs `.equals()` for `Integer` objects.
- **Edge cases:** Always consider empty lists, single‑element lists, and lists with all negative numbers for min/max.
- **Simultaneous traversal:** Free‑response questions may ask you to combine data from two lists, e.g., matching names and scores.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "You can use array algorithms unchanged for `ArrayList`." | Almost, but you must replace `length` with `size()` and use `get()`/`set()`. |
| "Removing elements in a forward loop always works if you adjust correctly." | It can work if you decrement the index, but backward is simpler and less error‑prone. |
| "`ArrayList` rotation requires manual shifting like arrays." | No, you can use `remove` and `add` for simple rotations. |
| "Simultaneous traversal requires both lists to be the same size." | Not necessarily; you often use the minimum size. |
| "`Integer` comparison with `==` is safe." | Only for small values due to caching; use `.equals()`. |

 
### Quick Reference: ArrayList Algorithms

| Algorithm | Key Pattern |
|-----------|-------------|
| Min/Max | Initialize to `list.get(0)`, loop `i=1..size-1`, compare |
| Sum/Average | Accumulate with enhanced for, cast for average |
| Any match | Early return `true` when condition met |
| All match | Early return `false` when condition fails |
| Count | Counter in loop |
| Consecutive pairs | Loop `i=0..size-2`, access `i` and `i+1` |
| Duplicates | Nested loops `i` and `j=i+1` |
| Shift left | Loop forward, set, then remove last |
| Shift right | Loop backward, set, then remove first |
| Rotate left | `remove(0)` then `add(value)` |
| Rotate right | `remove(size-1)` then `add(0, value)` |
| Reverse | Swap first/last moving inward |
| Insert after | Loop, after insert, increment index |
| Remove condition | Backward loop with `remove(i)` |
| Simultaneous traversal | Loop with common index, using `Math.min` |