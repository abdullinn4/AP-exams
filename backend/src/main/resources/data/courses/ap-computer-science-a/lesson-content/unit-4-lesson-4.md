### 4.4: Array Traversals


### What is Array Traversal?

**Array traversal** is the process of accessing each element in an array, typically to perform some operation on each element. Traversal is one of the most fundamental operations in programming—you'll use it to search, modify, calculate, or analyze data stored in arrays.

**Real-World Analogy:** Think of array traversal like checking each item on a grocery list. You start at the first item, look at it, decide if you need it or cross it off, then move to the next item. You continue until you've processed every item on the list. Similarly, array traversal visits each element in sequence, from first to last (or sometimes in other orders).

### Why Traverse Arrays?

- **Process all elements:** Apply the same operation to every element (e.g., double all values)
- **Search for specific values:** Find if a particular element exists
- **Calculate aggregates:** Compute sum, average, minimum, maximum
- **Filter data:** Select elements that meet certain criteria
- **Transform data:** Create a new array based on the original
- **Count occurrences:** Determine how many elements have a specific property

### Traversing with Indexed for Loops

The most common way to traverse an array is with an **indexed for loop**. You use a loop control variable as an index to access each element in sequence.

#### Basic Forward Traversal

```java
int[] scores = {95, 87, 92, 78, 88};

for (int i = 0; i < scores.length; i++) {
    System.out.println("Element at index " + i + ": " + scores[i]);
}
```

**How it works:**
- Start with `i = 0` (first index)
- Continue while `i < scores.length` (ensures we don't go past the end)
- After each iteration, increment `i` by 1
- Access each element using `scores[i]`

#### Backward Traversal

Sometimes you need to process elements from last to first:

```java
for (int i = scores.length - 1; i >= 0; i--) {
    System.out.println("Element at index " + i + ": " + scores[i]);
}
```

**How it works:**
- Start with `i = scores.length - 1` (last index)
- Continue while `i >= 0` (until we reach the first element)
- After each iteration, decrement `i` by 1

#### Traversing Every Other Element

You can control the step size to process only some elements:

```java
// Process even indices only (0, 2, 4, ...)
for (int i = 0; i < scores.length; i += 2) {
    System.out.println("Element at index " + i + ": " + scores[i]);
}
```

### Traversing with while Loops

You can also use a `while` loop for array traversal. This is useful when the number of iterations isn't known in advance or when you need more complex control.

```java
int[] scores = {95, 87, 92, 78, 88};
int i = 0;

while (i < scores.length) {
    System.out.println(scores[i]);
    i++;
}
```

#### Early Exit with while Loops

`while` loops are particularly useful when you want to stop traversal early, such as when searching for a value:

```java
int[] numbers = {10, 23, 45, 67, 89, 12, 34};
int target = 67;
int i = 0;
boolean found = false;

while (i < numbers.length && !found) {
    if (numbers[i] == target) {
        found = true;
        System.out.println("Found " + target + " at index " + i);
    }
    i++;
}

if (!found) {
    System.out.println(target + " not found");
}
```

### Traversing with Enhanced for Loops

The **enhanced for loop** (also called the "for-each" loop) provides a simpler syntax when you need to access each element but don't need the index.

#### Syntax

```java
for (elementType variableName : arrayName) {
    // process variableName
}
```

#### Example

```java
int[] scores = {95, 87, 92, 78, 88};

for (int score : scores) {
    System.out.println(score);
}
```

For each iteration, the variable `score` is assigned a **copy** of the current element's value. The loop automatically proceeds to the next element until all have been processed.

#### When to Use Enhanced for Loops

Enhanced for loops are ideal when:
- You need to process every element
- You don't need the index
- You don't need to modify the array elements
- You're doing read-only operations

```java
// Calculate sum using enhanced for loop
int sum = 0;
for (int score : scores) {
    sum += score;
}
System.out.println("Sum: " + sum);
```

### Limitations of Enhanced for Loops

#### Limitation 1: No Index Access

You cannot get the index of the current element. If you need the index, you must use an indexed for loop.

```java
// Can't do this with enhanced for:
for (int score : scores) {
    System.out.println("Score at position ??? is " + score); // Don't know index
}
```

#### Limitation 2: Cannot Modify Array Elements

The enhanced for loop variable holds a **copy** of the element value. Modifying this variable does **not** change the array.

```java
int[] numbers = {1, 2, 3, 4, 5};

// This does NOT work
for (int num : numbers) {
    num = num * 2;  // Only modifies the copy, not the array
}

// numbers is still {1, 2, 3, 4, 5}
```

To modify array elements, you must use an indexed for loop:

```java
for (int i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;  // Modifies the actual array
}
// numbers now {2, 4, 6, 8, 10}
```

#### Limitation 3: Cannot Traverse Multiple Arrays Simultaneously

If you need to process two related arrays in parallel (like scores and names), you need the index:

```java
String[] names = {"Alice", "Bob", "Carol"};
int[] scores = {95, 87, 92};

// Need index to access both arrays
for (int i = 0; i < names.length; i++) {
    System.out.println(names[i] + ": " + scores[i]);
}

// Enhanced for can't do this
```

#### Limitation 4: Cannot Traverse in Reverse or Custom Order

Enhanced for loops always go forward from first to last. You cannot traverse backward or skip elements.

```java
// Can't do reverse with enhanced for
// Must use indexed for:
for (int i = scores.length - 1; i >= 0; i--) {
    System.out.println(scores[i]);
}
```

### Modifying Objects in Enhanced for Loops

When an array stores **object references**, there's an important nuance: you cannot change which object the array element refers to, but you **can** modify the object itself if it's mutable.

```java
class Student {
    private String name;
    public Student(String n) { name = n; }
    public void setName(String n) { name = n; }
    public String getName() { return name; }
}

Student[] students = {
    new Student("Alice"),
    new Student("Bob"),
    new Student("Carol")
};

// This does NOT change the array elements
for (Student s : students) {
    s = new Student("New Name");  // Only changes local variable s
}

// But this DOES modify the objects in the array
for (Student s : students) {
    s.setName("Changed");  // Modifies the object that s refers to
}

// Now all students have name "Changed"
```

**Key point:** The enhanced for loop variable holds a copy of the **reference**. Through that reference, you can modify the object's state, but you cannot make the array element refer to a different object.

### Converting Between Loop Types

Any traversal written with an enhanced for loop can be rewritten as an indexed for loop (or while loop). The reverse is not always true.

#### Enhanced for to Indexed for

```java
// Enhanced for
for (int score : scores) {
    System.out.println(score);
}

// Equivalent indexed for
for (int i = 0; i < scores.length; i++) {
    int score = scores[i];
    System.out.println(score);
}
```

#### When You Must Use Indexed for

- Need index value
- Need to modify array elements
- Need to traverse in reverse or custom order
- Need to process multiple arrays in parallel
- Need to skip elements or break out conditionally

### Common Traversal Patterns

#### Pattern 1: Sum or Average

```java
int sum = 0;
for (int num : numbers) {
    sum += num;
}
double average = (double) sum / numbers.length;
```

#### Pattern 2: Find Maximum

```java
int max = numbers[0];
for (int i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
```

#### Pattern 3: Count Occurrences

```java
int target = 42;
int count = 0;
for (int num : numbers) {
    if (num == target) {
        count++;
    }
}
```

#### Pattern 4: Check if All Elements Meet Condition

```java
boolean allPositive = true;
for (int num : numbers) {
    if (num <= 0) {
        allPositive = false;
        break;
    }
}
```

#### Pattern 5: Check if Any Element Meets Condition

```java
boolean hasNegative = false;
for (int num : numbers) {
    if (num < 0) {
        hasNegative = true;
        break;
    }
}
```

#### Pattern 6: Create New Array from Existing

```java
int[] doubled = new int[numbers.length];
for (int i = 0; i < numbers.length; i++) {
    doubled[i] = numbers[i] * 2;
}
```

### Traversal and ArrayIndexOutOfBoundsException

The most common error in array traversal is an **off-by-one error** that leads to `ArrayIndexOutOfBoundsException`.

```java
// WRONG - will cause exception
for (int i = 0; i <= scores.length; i++) {
    System.out.println(scores[i]);  // When i == scores.length, exception!
}

// CORRECT
for (int i = 0; i < scores.length; i++) {
    System.out.println(scores[i]);
}
```

Always remember: valid indices are from `0` to `length - 1`. The loop condition should be `i < length`, not `i <= length`.

### Key Terminology for Topic 4.4

| Term | Definition |
|------|------------|
| **Array traversal** | The process of accessing each element in an array sequentially |
| **Indexed for loop** | A for loop that uses an index variable to access array elements |
| **Enhanced for loop** | A simplified loop syntax for traversing arrays without an index |
| **For-each loop** | Another name for the enhanced for loop |
| **Off-by-one error** | A common error where a loop executes one too many or one too few times |

### AP Exam Tips

- **Indexed for loops are most flexible:** Use them when you need the index, need to modify elements, or need custom traversal order.
- **Enhanced for loops are simpler:** Use them for read-only operations where you don't need the index.
- **Know the limitations:** Enhanced for loops cannot modify array elements, cannot access the index, and cannot traverse in reverse.
- **Object modification in enhanced for:** You can modify the objects themselves (if mutable), but you cannot reassign the array element to a new object.
- **Converting between loop types:** Be able to rewrite enhanced for loops as indexed for loops and vice versa.
- **Bounds checking:** Always ensure your loop conditions use `<` length, not `<=`, to avoid `ArrayIndexOutOfBoundsException`.
- **Common patterns:** Practice the standard traversal patterns—they appear in multiple-choice and free-response questions.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Enhanced for loops can modify array elements." | No, they work with copies of primitive values or copies of references. |
| "Enhanced for loops give you the index." | No, you only get the value, not the position. |
| "You can traverse backwards with enhanced for." | No, enhanced for always goes forward. |
| "Modifying the loop variable changes the array." | For primitives, no; for objects, you can modify the object but not reassign the reference. |
| "All traversals need an index." | Enhanced for loops don't need an index for simple read operations. |
| "`for (int i = 0; i <= arr.length; i++)` is correct." | No, this causes an off-by-one error and exception. |

### Quick Reference: Loop Types for Array Traversal

| Loop Type | Syntax | Use When |
|-----------|--------|----------|
| Indexed for | `for (int i = 0; i < arr.length; i++)` | Need index, need to modify, need custom order |
| Enhanced for | `for (type var : arr)` | Read-only, don't need index |
| while | `int i = 0; while (i < arr.length) { i++; }` | Need complex exit conditions |