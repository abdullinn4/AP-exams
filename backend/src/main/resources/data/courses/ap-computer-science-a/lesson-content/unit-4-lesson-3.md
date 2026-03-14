### Array Creation and Access


### What is an Array?

An **array** is a data structure that stores multiple values of the **same type** in a single variable. Instead of creating separate variables for each value (like `score1`, `score2`, `score3`, …), you can use one array to hold all the values. Each value in an array is called an **element**, and each element can be accessed by its **index** (position).

**Real-World Analogy:** Think of an array like a row of mailboxes. The whole row has a single name (the array variable). Each mailbox has a number (the index) starting from 0. You can put a letter in mailbox #0, another in #1, and so on. You can also retrieve a letter by knowing its mailbox number. The entire row is fixed in size—you cannot add or remove mailboxes after they're installed.

**Why Use Arrays?**
- **Efficiency:** Process many values with a single loop instead of writing repetitive code
- **Organization:** Group related data together logically
- **Flexibility:** Pass entire collections of data to methods
- **Foundation:** Arrays are the building blocks for more complex data structures


### Declaring an Array

To declare an array variable, you specify the type of elements it will hold, followed by square brackets `[]`. The brackets can be placed after the type or after the variable name; both are acceptable, but the common style is after the type.

```java
int[] scores;      // declares an array of ints (preferred style)
String names[];    // also valid, but less common
double[] temperatures;
boolean[] flags;
Student[] students;  // array of Student objects
```

At this point, the array variable exists, but **no memory has been allocated** for the elements. It is a reference variable that initially holds `null`. Think of this like having a mailbox row's address, but the actual mailboxes haven't been built yet.


### Creating an Array with `new`

To actually create the array and allocate memory, you use the `new` keyword followed by the type and the size in brackets. The size determines how many elements the array can hold and **cannot be changed** after creation.

```java
int[] scores = new int[5];   // creates an array that can hold 5 ints
```

This single line does three things:
1. Declares a variable `scores` that can refer to an int array
2. Creates a new array object in memory that can hold 5 integers
3. Sets each element to the **default value** for that type (0 for int)
4. Assigns the reference to the array object to the variable `scores`

**Visual memory representation:**
```
scores ──→ [0] [0] [0] [0] [0]
            ↑   ↑   ↑   ↑   ↑
           [0] [1] [2] [3] [4]  ← indices
```

#### Specifying Size

The size can be any non-negative integer expression:

```java
int n = 10;
int[] values = new int[n];           // size determined by variable
int[] squares = new int[n * n];       // size determined by expression
int[] empty = new int[0];             // valid: array with no elements
```

**Important:** Once created, the size is fixed. You cannot add or remove elements. If you need a different size, you must create a new array.


### Array Initialization with Initializer Lists

If you know the values ahead of time, you can create and initialize an array in one step using an **initializer list**—a comma-separated list of values enclosed in braces `{}`. In this case, you do not specify the size; it is determined by the number of values.

```java
int[] scores = {95, 87, 92, 78, 88};   // creates an array of size 5
String[] names = {"Alice", "Bob", "Carol"};  // size 3
double[] temps = {98.6, 72.5, 101.2};   // size 3
```

This syntax is concise and clearly shows both the values and their order.

#### Using `new` with Initializer Lists

You can also use the `new` keyword with an initializer list. The size is still inferred from the number of values.

```java
int[] scores = new int[]{95, 87, 92, 78, 88};
```

This form is required when the declaration and initialization are separate:

```java
int[] scores;
scores = new int[]{95, 87, 92, 78, 88};  // OK

// scores = {95, 87, 92, 78, 88};  // ERROR! Cannot use shorthand here
```

#### Anonymous Arrays

The syntax `new int[]{...}` creates an **anonymous array**—an array without a variable name. This is useful when passing an array directly to a method:

```java
printArray(new int[]{1, 2, 3, 4, 5});
```


### Accessing Array Elements

Each element in an array is accessed using its **index** in square brackets. Indexes start at **0** for the first element and go up to `length - 1` for the last.

```java
int[] scores = {95, 87, 92, 78, 88};

// Reading elements
System.out.println(scores[0]);   // prints 95 (first element)
System.out.println(scores[2]);   // prints 92 (third element)
System.out.println(scores[4]);   // prints 88 (last element)

// Modifying elements
scores[1] = 90;                  // changes the second element to 90
scores[3] = 80;                  // changes the fourth element to 80

// Using elements in expressions
int total = scores[0] + scores[1] + scores[2];
double average = total / 5.0;
```

#### Access Pattern

The pattern `arrayName[index]` can be used anywhere a variable of the element type is expected:
- On the right side of an assignment (reading)
- On the left side of an assignment (writing)
- In expressions
- As method arguments

```java
if (scores[2] > scores[3]) {
    System.out.println("Score at index 2 is higher");
}

scores[4] = scores[4] + 5;  // add 5 to the last element
```


### The `length` Attribute

Arrays have a public instance variable called `length` that tells you how many elements the array can hold. It is **not** a method, so you do not use parentheses.

```java
int[] scores = {95, 87, 92, 78, 88};
int size = scores.length;        // size = 5

String[] names = new String[10];
int numberOfNames = names.length; // 10
```

This is commonly used in loops to traverse the array:

```java
for (int i = 0; i < scores.length; i++) {
    System.out.println("Element at index " + i + ": " + scores[i]);
}
```

#### Important Distinction

| Data Structure | How to Get Size |
|----------------|-----------------|
| Array | `array.length` (attribute, no parentheses) |
| String | `str.length()` (method, with parentheses) |
| ArrayList | `list.size()` (method, with parentheses) |

This distinction is frequently tested on the AP exam.


### Default Values in Arrays

When an array is created with `new`, all elements are automatically initialized to default values:

| Element Type | Default Value |
|--------------|---------------|
| `int` | `0` |
| `double` | `0.0` |
| `boolean` | `false` |
| reference type (e.g., `String`, objects) | `null` |

```java
int[] intArray = new int[3];      // {0, 0, 0}
double[] dblArray = new double[3]; // {0.0, 0.0, 0.0}
boolean[] boolArray = new boolean[3]; // {false, false, false}
String[] strArray = new String[3]; // {null, null, null}
Student[] students = new Student[3]; // {null, null, null}
```

This is useful when you plan to fill the array later or when default values are acceptable.

#### Example: Counting Scores

```java
int[] scoreCounts = new int[101];  // indices 0 to 100, all initialized to 0
// Later: scoreCounts[score]++ works without explicit initialization
```


### Array Index Out of Bounds Exception

If you try to access an index that is less than 0 or greater than or equal to the array's length, Java throws an **`ArrayIndexOutOfBoundsException`** at runtime.

```java
int[] scores = new int[5];  // valid indices: 0, 1, 2, 3, 4

scores[5] = 100;   // ERROR! index 5 is out of bounds
int x = scores[-1]; // ERROR! negative index is invalid
scores[scores.length] = 50; // ERROR! last valid index is length-1
```

This is a common run‑time error. The program compiles successfully because the compiler cannot know what index will be used at runtime. The error only appears when the code executes.

#### Preventing Out of Bounds Errors

Always ensure your loop conditions use `<` length, not `<=`:

```java
// CORRECT
for (int i = 0; i < scores.length; i++) {
    // process scores[i]
}

// INCORRECT - will cause exception on last iteration
for (int i = 0; i <= scores.length; i++) {
    // when i == scores.length, scores[i] is invalid
}
```

When using a computed index, check that it's within bounds:

```java
int index = computeIndex();
if (index >= 0 && index < scores.length) {
    System.out.println(scores[index]);  // safe
} else {
    System.out.println("Index out of bounds");
}
```


### Arrays of Objects

Arrays can hold references to objects. For example, an array of `String` objects:

```java
String[] names = new String[3];
names[0] = "Alice";
names[1] = "Bob";
names[2] = "Carol";
```

If you create an array of a custom class, each element initially holds `null`. You must create objects and assign them to the elements.

```java
Student[] students = new Student[3];

// Before assignment, each element is null
System.out.println(students[0]);  // prints null

students[0] = new Student("Alice", 1001);
students[1] = new Student("Bob", 1002);
students[2] = new Student("Carol", 1003);

// Now we can call methods on the objects
System.out.println(students[0].getName());  // "Alice"
```

#### NullPointerException Risk

Remember that accessing an array element that is `null` and then trying to call a method on it will cause a `NullPointerException`:

```java
Student[] students = new Student[3];
// students[0] is null
String name = students[0].getName();  // NullPointerException!
```

Always ensure array elements are properly initialized before use.


### Common Array Operations

#### Traversing an Array

```java
for (int i = 0; i < scores.length; i++) {
    System.out.println(scores[i]);
}
```

#### Summing All Elements

```java
int sum = 0;
for (int i = 0; i < scores.length; i++) {
    sum += scores[i];
}
```

#### Finding the Maximum

```java
int max = scores[0];
for (int i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
        max = scores[i];
    }
}
```

#### Finding a Specific Value

```java
int target = 92;
boolean found = false;
for (int i = 0; i < scores.length; i++) {
    if (scores[i] == target) {
        found = true;
        break;  // exit loop early
    }
}
```

#### Copying an Array

To create a copy of an array, you must create a new array and copy each element:

```java
int[] original = {1, 2, 3, 4, 5};
int[] copy = new int[original.length];

for (int i = 0; i < original.length; i++) {
    copy[i] = original[i];
}
```

Simply assigning `int[] copy = original;` does **not** create a copy—both variables refer to the same array!

```java
int[] a = {1, 2, 3};
int[] b = a;      // b refers to the SAME array as a
b[0] = 99;        // changes the array that a also refers to
System.out.println(a[0]);  // prints 99
```


### Arrays as Method Parameters and Return Values

Arrays can be passed to methods and returned from methods.

#### Passing an Array to a Method

```java
public static void printArray(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        System.out.println(arr[i]);
    }
}

// Calling the method:
int[] scores = {95, 87, 92};
printArray(scores);
```

When an array is passed to a method, a reference to the array is passed (call by value of the reference). This means the method can modify the array's contents:

```java
public static void doubleAll(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
}

int[] values = {1, 2, 3};
doubleAll(values);
System.out.println(values[0]);  // prints 2 (original modified!)
```

#### Returning an Array from a Method

```java
public static int[] createSquares(int n) {
    int[] squares = new int[n];
    for (int i = 0; i < n; i++) {
        squares[i] = i * i;
    }
    return squares;
}

// Using the returned array:
int[] result = createSquares(5);  // {0, 1, 4, 9, 16}
```


### Visualizing Arrays in Memory

Understanding how arrays are stored helps avoid common mistakes.

```
Stack                    Heap
─────                    ────
scores ─────────────────→ [0] [1] [2] [3] [4]
                           │   │   │   │   │
                           95  87  92  78  88
```

- The variable `scores` is stored on the stack and holds a reference (memory address)
- The actual array elements are stored on the heap
- The array object knows its length and has contiguous memory for elements

When you assign one array variable to another, only the reference is copied:

```
int[] a = new int[3];
int[] b = a;  // b now holds the SAME address as a

Stack:
a ────┐
      ├──→ [same array on heap]
b ────┘
```


### Key Terminology for Topic 4.3

| Term | Definition |
|------|------------|
| **Array** | A data structure that stores multiple values of the same type |
| **Element** | One value stored in an array |
| **Index** | The position of an element in an array (starts at 0) |
| **Initializer list** | A comma‑separated list of values in braces used to initialize an array |
| **`length`** | The attribute that holds the number of elements in an array |
| **`ArrayIndexOutOfBoundsException`** | An exception thrown when an invalid index is used |
| **Anonymous array** | An array created without assigning it to a variable, using `new int[]{...}` |
| **Reference copy** | Copying the reference to an array, not the array itself |


### AP Exam Tips

- **Index starts at 0:** The first element is at index 0, the last at `length‑1`. Off‑by‑one errors are common and frequently tested.
- **`length` is an attribute, not a method:** No parentheses. `scores.length` is correct; `scores.length()` is wrong. This distinction appears often.
- **Bounds checking:** Java checks array indices at runtime. Using an invalid index throws an exception. The exam may ask what happens when an invalid index is used.
- **Default values:** Remember that array elements get default values when created with `new`. This can be useful for initializing counters or flags.
- **Initializer list syntax:** Know both forms: `int[] a = {1,2,3};` and `int[] a = new int[]{1,2,3};`. The second is required when declaration and initialization are separate.
- **Array type:** The type of an array variable is a reference type, even if it holds primitives. This affects parameter passing.
- **Copying arrays:** Know the difference between reference copy and element copy. The exam may test this with questions about modifying arrays in methods.
- **Enhanced for loops:** While not introduced yet (Topic 4.4), be aware that arrays work with enhanced for loops.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Array indexes start at 1." | No, they always start at 0. |
| "`length()` is a method for arrays." | No, `length` is an attribute (no parentheses). |
| "You can change the size of an array after creation." | No, array size is fixed at creation. |
| "All elements of an array must be initialized at declaration." | No, you can create an array with default values and assign later. |
| "Accessing an invalid index gives a compiler error." | No, it causes a runtime exception. |
| "Assigning one array to another copies the elements." | No, it copies the reference; both variables point to the same array. |
| "Arrays can hold different types of data." | No, all elements must be the same type. |
| "An array of objects automatically creates the objects." | No, only the references are created; objects must be created separately. |


### Common Errors and How to Fix Them

| Error | Example | Problem | Fix |
|-------|---------|---------|-----|
| Off‑by‑one in loop | `for (int i = 0; i <= scores.length; i++)` | Accesses index `length` on last iteration | Use `<` not `<=` |
| Using `length()` | `int size = scores.length();` | `length` is not a method | Remove parentheses: `scores.length` |
| Forgetting to create array | `int[] scores; scores[0] = 95;` | Array not created with `new` | `scores = new int[5];` first |
| Reference copy instead of element copy | `int[] copy = original;` | Both variables refer to same array | Create new array and copy elements |
| Using negative index | `scores[-1] = 10;` | Negative indices invalid | Ensure index >= 0 |
| Assuming default values for local array variable | `int[] arr; System.out.println(arr[0]);` | Local variable not initialized | Initialize array before use |
| Mixing up array of primitives and array of objects | `Student[] s = new Student[5]; s[0].getName();` | Elements are `null` initially | Create objects before using them |


### Quick Reference: Array Creation

| Syntax | Description | Example Result |
|--------|-------------|----------------|
| `int[] arr = new int[5];` | Creates array of 5 ints, all 0 | `[0, 0, 0, 0, 0]` |
| `int[] arr = {1, 2, 3};` | Creates and initializes array | `[1, 2, 3]` |
| `int[] arr = new int[]{1, 2, 3};` | Alternate initializer syntax | `[1, 2, 3]` |
| `int size = arr.length;` | Gets the array length | `3` |
| `arr[0] = 99;` | Modifies first element | `[99, 2, 3]` |
| `int x = arr[1];` | Reads second element | `2` |


### Step-by-Step Example: Putting It All Together

**Problem:** Write a program that creates an array of 10 random integers between 1 and 100, then finds the average, minimum, and maximum.

```java
public class ArrayStats {
    public static void main(String[] args) {
        // Create array
        int[] numbers = new int[10];
        
        // Fill with random values
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = (int)(Math.random() * 100) + 1;
        }
        
        // Calculate sum, min, max
        int sum = 0;
        int min = numbers[0];
        int max = numbers[0];
        
        for (int i = 0; i < numbers.length; i++) {
            sum += numbers[i];
            if (numbers[i] < min) {
                min = numbers[i];
            }
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        
        double average = (double) sum / numbers.length;
        
        // Output results
        System.out.print("Numbers: ");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
        System.out.println("Minimum: " + min);
        System.out.println("Maximum: " + max);
    }
}
```