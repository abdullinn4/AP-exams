### 4.9: ArrayList Traversals


### What is ArrayList Traversal?

**ArrayList traversal** is the process of accessing each element in an `ArrayList` sequentially, typically to perform some operation on each element. Just like with arrays, traversal is fundamental to processing data stored in an `ArrayList`. Because `ArrayList` is dynamic and has methods like `get()` and `size()`, traversal patterns are similar to arrays but with some important differences and pitfalls.

**Real-World Analogy:** Imagine you have a playlist (the `ArrayList`) and you want to review each song. You might go through them one by one from first to last (forward traversal), or maybe from last to first (backward traversal). While you're going through them, you might decide to remove a song you don't like. But if you remove a song while in the middle of your review, the remaining songs shift position—you have to be careful not to skip one or lose your place. That's exactly the challenge of modifying an `ArrayList` while traversing it.


### Traversing with an Indexed for Loop

The most flexible way to traverse an `ArrayList` is with an indexed `for` loop, using the `size()` method to determine the number of iterations and the `get(index)` method to access each element.

#### Basic Forward Traversal

```java
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Carol");

for (int i = 0; i < names.size(); i++) {
    String name = names.get(i);
    System.out.println(name);
}
```

**How it works:**
- Initialize `i = 0` (first index).
- Continue while `i < names.size()` (ensures we don't go past the last element).
- After each iteration, increment `i`.
- Access each element using `names.get(i)`.

#### Backward Traversal

```java
for (int i = names.size() - 1; i >= 0; i--) {
    System.out.println(names.get(i));
}
```

**Use cases:** Sometimes you need to process elements in reverse order, or when removing elements (explained later).

#### Traversing Every Other Element

```java
for (int i = 0; i < names.size(); i += 2) {
    System.out.println(names.get(i));
}
```


### Traversing with an Enhanced for Loop

The enhanced `for` loop (also called "for-each") provides a simpler syntax when you don't need the index and are only reading elements.

```java
for (String name : names) {
    System.out.println(name);
}
```

**Advantages:**
- Cleaner, less error-prone syntax.
- No need to manage an index variable.
- Ideal for read-only operations.

**Limitations:**
- Cannot access the index of the current element.
- Cannot modify the structure of the `ArrayList` (add or remove elements) during traversal—doing so will cause a `ConcurrentModificationException`.
- Cannot traverse in reverse or skip elements.


### Deleting Elements During Traversal

Removing elements while traversing an `ArrayList` requires special care because when you remove an element at index `i`, all subsequent elements shift left, changing their indices. This can cause you to skip elements or go out of bounds.

#### The Problem: Forward Traversal with Removal

```java
ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(1);
numbers.add(2);
numbers.add(2);
numbers.add(3);

// Attempt to remove all 2's (WRONG WAY)
for (int i = 0; i < numbers.size(); i++) {
    if (numbers.get(i) == 2) {
        numbers.remove(i);  // Element removed, elements shift left
        // i still increments, so we skip the next element!
    }
}
System.out.println(numbers);  // Might be [1, 2, 3] – the second 2 was skipped
```

**What happened?** When we remove the first `2` at index 1, the second `2` shifts to index 1. Then `i` increments to 2, so we never check the element that is now at index 1. This results in skipping an element.

#### Solution 1: Traverse Backward

If you traverse from the last index to the first, removing an element does not affect the indices of elements you haven't yet processed.

```java
for (int i = numbers.size() - 1; i >= 0; i--) {
    if (numbers.get(i) == 2) {
        numbers.remove(i);  // Safe: elements before i are unchanged
    }
}
```

#### Solution 2: Adjust the Index After Removal

If you must traverse forward, you can decrement the loop variable after each removal to compensate for the shift.

```java
for (int i = 0; i < numbers.size(); i++) {
    if (numbers.get(i) == 2) {
        numbers.remove(i);
        i--;  // Decrement so we check the new element at this index
    }
}
```

#### Solution 3: Use a while Loop with Manual Index Control

```java
int i = 0;
while (i < numbers.size()) {
    if (numbers.get(i) == 2) {
        numbers.remove(i);
        // Do not increment i – the next element is now at the same index
    } else {
        i++;
    }
}
```


### ConcurrentModificationException

When you use an enhanced `for` loop, the `ArrayList` keeps an internal counter of modifications. If you add or remove elements while iterating, the counter changes, and the iterator detects this, throwing a **`ConcurrentModificationException`**.

```java
ArrayList<String> words = new ArrayList<>();
words.add("apple");
words.add("banana");
words.add("cherry");

for (String w : words) {
    if (w.equals("banana")) {
        words.remove(w);  // Throws ConcurrentModificationException!
    }
}
```

**Why?** The enhanced `for` loop uses an iterator behind the scenes. The iterator expects the list to remain unchanged during iteration. Modifying the list directly breaks that expectation.

**Rule:** Do **not** add or remove elements from an `ArrayList` while using an enhanced `for` loop. Use an indexed loop or an explicit iterator (not required for AP) if you need to modify during traversal.


### IndexOutOfBoundsException

Just like with arrays, accessing an invalid index in an `ArrayList` throws an **`IndexOutOfBoundsException`**. This can happen if you use a loop condition that allows the index to become equal to `size()` when calling `get()` or `set()`, or if you remove elements and don't adjust your loop variable correctly.

```java
for (int i = 0; i <= names.size(); i++) {  // WRONG: should be <
    System.out.println(names.get(i));       // Exception when i == size()
}
```

Always ensure your loop condition is `i < list.size()` for indexed loops.


### Common Traversal Patterns

#### Pattern 1: Sum or Average (with wrapper classes)

```java
ArrayList<Integer> scores = new ArrayList<>();
// ... add scores
int sum = 0;
for (int score : scores) {
    sum += score;  // unboxing
}
double average = (double) sum / scores.size();
```

#### Pattern 2: Find Maximum

```java
int max = scores.get(0);
for (int i = 1; i < scores.size(); i++) {
    if (scores.get(i) > max) {
        max = scores.get(i);
    }
}
```

#### Pattern 3: Count Occurrences

```java
int target = 42;
int count = 0;
for (int num : scores) {
    if (num == target) {
        count++;
    }
}
```

#### Pattern 4: Check if All Elements Meet a Condition

```java
boolean allPositive = true;
for (int num : scores) {
    if (num <= 0) {
        allPositive = false;
        break;
    }
}
```

#### Pattern 5: Check if Any Element Meets a Condition

```java
boolean hasNegative = false;
for (int num : scores) {
    if (num < 0) {
        hasNegative = true;
        break;
    }
}
```

#### Pattern 6: Create a New ArrayList from Existing

```java
ArrayList<Integer> doubled = new ArrayList<>();
for (int num : scores) {
    doubled.add(num * 2);
}
```

#### Pattern 7: Removing Elements That Meet a Condition (using backward loop)

```java
for (int i = scores.size() - 1; i >= 0; i--) {
    if (scores.get(i) < 0) {
        scores.remove(i);
    }
}
```


### Key Terminology for Topic 4.9

| Term | Definition |
|------|------------|
| **ArrayList traversal** | The process of accessing each element in an `ArrayList` in sequence. |
| **Indexed for loop** | A loop that uses an index variable to access elements via `get(index)`. |
| **Enhanced for loop** | A simplified loop syntax for traversing collections without an explicit index. |
| **ConcurrentModificationException** | An exception thrown when a collection is modified while being iterated using an iterator (including enhanced for loop). |
| **IndexOutOfBoundsException** | An exception thrown when an invalid index is used to access an `ArrayList`. |


### AP Exam Tips

- **Choose the right loop:** Use enhanced `for` for read-only traversal where you don't need the index. Use indexed `for` when you need the index or need to modify the list during traversal.
- **Removing elements:** If you need to remove elements while traversing, traverse backward or adjust the index after removal. The exam may test your ability to identify correct removal code.
- **ConcurrentModificationException:** Know that enhanced `for` loops cannot modify the list. If you see code that adds or removes inside an enhanced loop, it will throw an exception.
- **Bounds checking:** Always ensure loop conditions use `< list.size()` for indexed loops.
- **Wrapper classes:** Remember that `ArrayList<Integer>` works with autoboxing/unboxing; you can treat elements as `int` in loops.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Enhanced for loop can be used to remove elements." | No, it will throw `ConcurrentModificationException`. |
| "Removing elements in a forward loop always works." | No, it can cause skipping elements unless you adjust the index. |
| "`size()` changes during traversal automatically." | It does, but you must account for it in your loop logic. |
| "Indexed loops are always slower than enhanced loops." | Performance difference is negligible; choose based on need. |
| "`IndexOutOfBoundsException` only happens with arrays." | No, `ArrayList` also throws it for invalid indices. |


### Quick Reference: Traversal Methods

| Traversal Type | Loop Structure | Use When |
|----------------|----------------|----------|
| Forward, read-only | `for (Type var : list)` | Simple read, no index needed |
| Forward, need index | `for (int i = 0; i < list.size(); i++)` | Need index, need to modify |
| Backward | `for (int i = list.size()-1; i >= 0; i--)` | Removing elements, reverse order |
| With removal (forward) | Adjust index after removal | Must modify during forward traversal |
| With removal (safe) | Backward loop | Simplest safe removal |