### 4.7: Wrapper Classes

### What Are Wrapper Classes?

**Wrapper classes** are Java classes that "wrap" primitive data types into objects. Each primitive type has a corresponding wrapper class in the `java.lang` package. Wrapper classes are essential when an object is required—for example, when working with collections like `ArrayList` that can only store objects, not primitives.

**Real-World Analogy:** Think of wrapper classes like gift boxes. A primitive value (like the number 42) is like a small item you want to give. Sometimes you need to put it in a box (the wrapper class) so it can be handled in situations that require a package (an object). The box contains the item, and you can always take the item out when needed.

#### Primitive Types and Their Wrapper Classes

| Primitive Type | Wrapper Class |
|----------------|---------------|
| `int` | `Integer` |
| `double` | `Double` |
| `boolean` | `Boolean` |
| `char` | `Character` |
| `long` | `Long` |
| `float` | `Float` |
| `byte` | `Byte` |
| `short` | `Short` |

For the AP Computer Science A exam, you only need to know `Integer` and `Double`.


### Why Use Wrapper Classes?

1. **Collections require objects:** `ArrayList` (and other collections) can only store objects, not primitives. You need `ArrayList<Integer>` not `ArrayList<int>`.
2. **Utility methods:** Wrapper classes provide useful static methods for converting strings to numbers (`parseInt`, `parseDouble`).
3. **Constants:** Wrapper classes provide constants like `Integer.MAX_VALUE` and `Integer.MIN_VALUE`.
4. **Null capability:** Objects can be `null`, which can be useful to represent "no value" (though primitives cannot).


### The Integer Class

The `Integer` class wraps an `int` value into an object. It is part of the `java.lang` package, so no import is needed.

#### Creating Integer Objects

```java
// Using constructor (older style, but valid)
Integer num1 = new Integer(42);

// Using autoboxing (preferred, modern style)
Integer num2 = 42;

// Using valueOf method (also common)
Integer num3 = Integer.valueOf(42);
```

#### Integer Immutability

`Integer` objects are **immutable**—once an `Integer` object is created, its value cannot be changed. Any operation that seems to modify an `Integer` actually creates a new `Integer` object.

```java
Integer x = 10;
x = x + 5;  // This creates a NEW Integer object with value 15
// The original Integer object with value 10 is unchanged (and may be garbage collected)
```

#### Integer Constants

```java
int max = Integer.MAX_VALUE;  // 2,147,483,647
int min = Integer.MIN_VALUE;  // -2,147,483,648
```

#### Integer Methods

The most important `Integer` method for the AP exam is `parseInt`:

```java
String numberStr = "123";
int value = Integer.parseInt(numberStr);  // value = 123
```

If the string cannot be parsed as an integer, `parseInt` throws a `NumberFormatException`.


### The Double Class

The `Double` class wraps a `double` value into an object. Like `Integer`, it is in `java.lang`.

#### Creating Double Objects

```java
// Using constructor
Double d1 = new Double(3.14);

// Using autoboxing
Double d2 = 3.14;

// Using valueOf
Double d3 = Double.valueOf(3.14);
```

#### Double Immutability

`Double` objects are also **immutable**—once created, their value cannot be changed.

```java
Double pi = 3.14;
pi = pi * 2;  // Creates a NEW Double object
```

#### Double Methods

The most important `Double` method for the AP exam is `parseDouble`:

```java
String piStr = "3.14159";
double pi = Double.parseDouble(piStr);  // pi = 3.14159
```


### Autoboxing and Unboxing

**Autoboxing** is the automatic conversion that the Java compiler makes between primitive types and their corresponding wrapper classes. When a primitive is used in a context that expects an object, Java automatically "boxes" it into the appropriate wrapper object.

**Unboxing** is the automatic conversion from a wrapper object back to its corresponding primitive type.

#### When Autoboxing Occurs

Autoboxing happens when a primitive value is:
- **Passed as a parameter** to a method that expects an object of the corresponding wrapper class
- **Assigned to a variable** of the corresponding wrapper class

```java
// Autoboxing in assignment
Integer num = 5;  // int 5 is automatically boxed to Integer

// Autoboxing in method calls
ArrayList<Integer> list = new ArrayList<>();
list.add(10);  // int 10 is autoboxed to Integer

// Autoboxing in expressions
Integer result = 3 + 4;  // 3 and 4 are ints, result is Integer
```

#### When Unboxing Occurs

Unboxing happens when a wrapper object is:
- **Passed as a parameter** to a method that expects a primitive of the corresponding type
- **Assigned to a variable** of the corresponding primitive type
- **Used in an arithmetic expression**

```java
// Unboxing in assignment
Integer numObj = 42;
int num = numObj;  // Integer automatically unboxed to int

// Unboxing in arithmetic
Integer x = 10;
Integer y = 20;
int sum = x + y;  // x and y are unboxed, addition performed, result stored in int

// Unboxing in method calls
public void printValue(int val) { System.out.println(val); }
Integer obj = 100;
printValue(obj);  // Integer obj is unboxed to int
```

#### Important Distinction

Autoboxing and unboxing are **compiler features**, not runtime changes. The compiler inserts the necessary code to convert between primitive and wrapper types automatically.

```java
// This code:
Integer num = 5;

// Is compiled as if you wrote:
Integer num = Integer.valueOf(5);

// This code:
int val = num;

// Is compiled as if you wrote:
int val = num.intValue();
```

#### Null Pointer Risk with Unboxing

If a wrapper object is `null`, unboxing it will throw a `NullPointerException`:

```java
Integer obj = null;
int val = obj;  // NullPointerException!
```

Always ensure wrapper objects are not `null` before unboxing.


### The `parseInt` and `parseDouble` Methods

These static methods are essential for converting strings to primitive numbers.

#### Integer.parseInt

```java
String str = "123";
int number = Integer.parseInt(str);  // number = 123

// With different bases (not required for AP, but good to know)
int binary = Integer.parseInt("1010", 2);  // 10 in binary = 10 decimal
```

**What happens if the string is not a valid integer?**
```java
String invalid = "12.34";
int value = Integer.parseInt(invalid);  // Throws NumberFormatException!
```

#### Double.parseDouble

```java
String str = "3.14159";
double pi = Double.parseDouble(str);  // pi = 3.14159

String scientific = "6.02e23";
double big = Double.parseDouble(scientific);  // works with scientific notation
```

#### Common Use: Processing File Input

When reading from a file, data often comes as strings. Use `parseInt` and `parseDouble` to convert to numbers:

```java
Scanner scanner = new Scanner(new File("data.txt"));
while (scanner.hasNextLine()) {
    String line = scanner.nextLine();
    String[] parts = line.split(",");
    String name = parts[0];
    int age = Integer.parseInt(parts[1]);
    double gpa = Double.parseDouble(parts[2]);
    // process data
}
```


### Wrapper Classes and ArrayList

`ArrayList` cannot store primitives directly. You must use the wrapper class as the type parameter.

```java
// Correct: ArrayList of Integer objects
ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(10);      // autoboxing: int to Integer
numbers.add(20);
int first = numbers.get(0);  // unboxing: Integer to int

// Incorrect - this won't compile:
// ArrayList<int> wrong = new ArrayList<int>();
```

When retrieving elements from an `ArrayList` of wrapper objects, unboxing happens automatically:

```java
ArrayList<Integer> list = new ArrayList<>();
list.add(5);
list.add(7);
int sum = 0;
for (Integer num : list) {
    sum += num;  // num is unboxed to int for addition
}
```


### Wrapper Class Comparisons

#### Comparing Wrapper Objects

Using `==` with wrapper objects compares **references**, not values. This can lead to unexpected results:

```java
Integer a = 100;
Integer b = 100;
System.out.println(a == b);  // true? (maybe - depends on caching!)

Integer c = 200;
Integer d = 200;
System.out.println(c == d);  // false? (different objects!)
```

For small values (-128 to 127), Java caches `Integer` objects, so `==` may return `true`. For values outside this range, new objects are created, so `==` returns `false`.

**Always use `.equals()` to compare wrapper objects by value:**

```java
Integer x = 200;
Integer y = 200;
System.out.println(x.equals(y));  // true (correct)
```

#### Comparing with Primitives

When a wrapper object is compared with a primitive using relational operators (`<`, `>`, `<=`, `>=`), unboxing occurs automatically:

```java
Integer score = 95;
if (score > 90) {  // score is unboxed to int for comparison
    System.out.println("A grade");
}
```


### Key Terminology for Topic 4.7

| Term | Definition |
|------|------------|
| **Wrapper class** | A class that wraps a primitive type into an object (e.g., `Integer`, `Double`) |
| **Autoboxing** | Automatic conversion of a primitive to its corresponding wrapper class |
| **Unboxing** | Automatic conversion of a wrapper object to its corresponding primitive type |
| **Immutable** | An object whose state cannot be changed after creation |
| **`parseInt`** | A static method of `Integer` that converts a `String` to an `int` |
| **`parseDouble`** | A static method of `Double` that converts a `String` to a `double` |
| **`NumberFormatException`** | An exception thrown when a string cannot be parsed into a number |


### AP Exam Tips

- **Wrapper classes are required for `ArrayList`:** You cannot create `ArrayList<int>`; you must use `ArrayList<Integer>`.
- **Autoboxing and unboxing are automatic:** The compiler handles conversion between primitives and wrappers. You don't need to write explicit conversion code.
- **Be careful with `==` on wrapper objects:** It compares references, not values. Use `.equals()` for value comparison.
- **Null unboxing causes exceptions:** If a wrapper object is `null`, unboxing it throws `NullPointerException`.
- **`parseInt` and `parseDouble` are static:** Call them using the class name: `Integer.parseInt(str)`.
- **Immutability:** Remember that `Integer` and `Double` objects cannot be changed. Operations create new objects.
- **Constants:** `Integer.MAX_VALUE` and `Integer.MIN_VALUE` are useful for boundary conditions.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Wrapper classes are the same as primitives." | No, they are objects with additional methods and behaviors. |
| "`ArrayList<int>` is valid." | No, `ArrayList` requires an object type; use `ArrayList<Integer>`. |
| "`==` works the same for wrappers as for primitives." | No, `==` compares references for objects; use `.equals()` for value comparison. |
| "Autoboxing creates new objects every time." | For small integers (-128 to 127), Java caches objects; for others, new objects may be created. |
| "Wrapper objects can be modified." | No, they are immutable. Operations create new objects. |
| "`parseInt` can handle any string." | No, it throws `NumberFormatException` if the string is not a valid integer. |
| "Unboxing a null wrapper is safe." | No, it throws `NullPointerException`. |


### Quick Reference: Wrapper Class Operations

| Operation | Syntax | Notes |
|-----------|--------|-------|
| Create Integer | `Integer x = 5;` | Autoboxing |
| Create Double | `Double d = 3.14;` | Autoboxing |
| Convert String to int | `int i = Integer.parseInt(s);` | Throws `NumberFormatException` |
| Convert String to double | `double d = Double.parseDouble(s);` | Throws `NumberFormatException` |
| Compare wrapper values | `x.equals(y)` | Use `equals`, not `==` |
| Unbox to primitive | `int i = x;` | Automatic; null causes exception |
| Use in ArrayList | `ArrayList<Integer> list = new ArrayList<>();` | Cannot use primitive type |