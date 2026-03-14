### ArrayList Methods

### What is an ArrayList?

An **ArrayList** is a class in the `java.util` package that provides a resizable array implementation. Unlike regular arrays, which have a fixed size, an `ArrayList` can grow and shrink as needed. It stores **object references**, not primitive values.

**Real-World Analogy:** Think of an `ArrayList` like a dynamic playlist. You can add songs, insert them at specific positions, remove songs you don't like, and get any song by its position number. The playlist automatically adjusts its size as you make changes.

#### Key Characteristics

- **Mutable size:** Can grow or shrink dynamically
- **Stores objects only:** Cannot store primitives directly (use wrapper classes)
- **Indexed:** Elements are accessed by position (0-based)
- **Part of java.util:** Requires import statement

### Import Statement

Since `ArrayList` is in the `java.util` package, you must import it before use:

```java
import java.util.ArrayList;
```

### Creating an ArrayList

#### Basic Syntax

```java
ArrayList<Type> listName = new ArrayList<Type>();
```

Starting in Java 7, you can use the diamond operator `<>` to simplify:

```java
ArrayList<String> names = new ArrayList<>();
ArrayList<Integer> scores = new ArrayList<>();
```

#### Examples

```java
// ArrayList of Strings
ArrayList<String> students = new ArrayList<>();

// ArrayList of Integers (wrapper class)
ArrayList<Integer> grades = new ArrayList<>();

// ArrayList of custom objects
ArrayList<Student> roster = new ArrayList<>();
```

### Generic Types

The notation `ArrayList<E>` uses a **type parameter** `E` to specify what type of objects the list will hold. This is called a **generic type**. Using generics provides type safety—the compiler can catch errors if you try to add the wrong type of object.

```java
ArrayList<String> names = new ArrayList<>();
names.add("Alice");     // OK
names.add(42);          // Compiler error! Can't add int to ArrayList<String>
```

Without generics (raw type), you could add any object, but you'd lose type safety and need casting when retrieving.

```java
// Raw ArrayList (not recommended)
ArrayList list = new ArrayList();
list.add("Alice");
list.add(42);           // No compiler error, but dangerous!

String name = (String) list.get(0);  // Need cast
```

**For the AP exam, always use `ArrayList<E>` with the appropriate type parameter.**

### Essential ArrayList Methods

The AP Computer Science A exam requires knowledge of the following `ArrayList` methods:

| Method | Description | Return Type |
|--------|-------------|-------------|
| `int size()` | Returns the number of elements in the list | `int` |
| `boolean add(E obj)` | Appends `obj` to the end of the list | `boolean` |
| `void add(int index, E obj)` | Inserts `obj` at position `index`, shifting elements right | `void` |
| `E get(int index)` | Returns the element at position `index` | `E` |
| `E set(int index, E obj)` | Replaces the element at `index` with `obj`; returns the old element | `E` |
| `E remove(int index)` | Removes element at `index`, shifting elements left; returns the removed element | `E` |


### Method Details and Examples

#### 1. `size()`

Returns the current number of elements in the `ArrayList`. This is analogous to the `length` attribute for arrays, but note that `size()` is a method, so it requires parentheses.

```java
ArrayList<String> names = new ArrayList<>();
System.out.println(names.size());  // 0

names.add("Alice");
names.add("Bob");
System.out.println(names.size());  // 2
```

#### 2. `add(E obj)`

Appends the specified element to the end of the list. The list's size increases by 1. The return value is always `true` (for the `ArrayList` class), so it's typically ignored.

```java
ArrayList<String> names = new ArrayList<>();
names.add("Alice");     // ["Alice"]
names.add("Bob");       // ["Alice", "Bob"]
names.add("Carol");     // ["Alice", "Bob", "Carol"]
```

#### 3. `add(int index, E obj)`

Inserts an element at a specific position. Elements at and after that position are shifted to the right (their indices increase by 1). The index must be between `0` and `size()` inclusive.

```java
ArrayList<String> names = new ArrayList<>();
names.add("Alice");     // ["Alice"]
names.add("Bob");       // ["Alice", "Bob"]
names.add(1, "Carol");  // ["Alice", "Carol", "Bob"]
```

**Valid indices for insertion:** `0` through `size()`. Inserting at `size()` is the same as appending at the end.

```java
names.add(names.size(), "David");  // Same as names.add("David")
```

**Invalid index:** If you try to insert at an index less than 0 or greater than `size()`, Java throws an `IndexOutOfBoundsException`.

#### 4. `get(int index)`

Returns the element at the specified position. The index must be between `0` and `size() - 1`.

```java
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Carol");

String first = names.get(0);   // "Alice"
String last = names.get(2);    // "Carol"
```

#### 5. `set(int index, E obj)`

Replaces the element at the specified position with the new object. Returns the **old** element that was replaced. The index must be valid (0 to `size() - 1`).

```java
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Carol");

String replaced = names.set(1, "Benjamin");
System.out.println(replaced);  // "Bob"
System.out.println(names);     // ["Alice", "Benjamin", "Carol"]
```

#### 6. `remove(int index)`

Removes the element at the specified position. Elements to the right are shifted left (their indices decrease by 1). The list's size decreases by 1. Returns the element that was removed.

```java
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Carol");
names.add("David");

String removed = names.remove(2);  // removes "Carol"
System.out.println(removed);       // "Carol"
System.out.println(names);         // ["Alice", "Bob", "David"]
// Indices after removal: "Alice" (0), "Bob" (1), "David" (2)
```

### Index Validity

For all methods that take an index parameter (`add(index, obj)`, `get`, `set`, `remove`), the index must be within a specific range:

| Method | Valid Index Range |
|--------|-------------------|
| `add(int index, E obj)` | `0` ≤ index ≤ `size()` |
| `get(int index)` | `0` ≤ index ≤ `size() - 1` |
| `set(int index, E obj)` | `0` ≤ index ≤ `size() - 1` |
| `remove(int index)` | `0` ≤ index ≤ `size() - 1` |

Using an index outside these ranges throws an **`IndexOutOfBoundsException`**.

### ArrayList of Wrapper Classes

Since `ArrayList` cannot store primitives directly, you must use wrapper classes for numeric types.

```java
ArrayList<Integer> scores = new ArrayList<>();
scores.add(95);          // autoboxing: int to Integer
scores.add(87);
scores.add(92);

int first = scores.get(0);  // unboxing: Integer to int
int sum = 0;
for (int score : scores) {  // enhanced for loop works with autounboxing
    sum += score;
}
```

### Common ArrayList Patterns

#### Traversing with Indexed For Loop

```java
for (int i = 0; i < list.size(); i++) {
    E element = list.get(i);
    // process element
}
```

#### Traversing with Enhanced For Loop

```java
for (E element : list) {
    // process element
}
```

#### Searching for an Element

```java
boolean found = false;
for (String name : names) {
    if (name.equals(target)) {
        found = true;
        break;
    }
}
```

#### Removing Elements While Traversing

Removing elements during traversal requires care. A common pattern is to traverse backward:

```java
for (int i = list.size() - 1; i >= 0; i--) {
    if (condition(list.get(i))) {
        list.remove(i);
    }
}
```

This avoids index shifting issues. (More details in Topic 4.9)

### Key Terminology for Topic 4.8

| Term | Definition |
|------|------------|
| **ArrayList** | A resizable array implementation in the `java.util` package |
| **Generic type** | A type with a type parameter, e.g., `ArrayList<E>` |
| **Type parameter** | The `E` in `ArrayList<E>` that specifies the element type |
| **Size** | The number of elements currently in the list (returned by `size()`) |
| **Index** | The position of an element (0‑based) |
| **Autoboxing** | Automatic conversion of primitive to wrapper class |
| **Unboxing** | Automatic conversion of wrapper class to primitive |
| **`IndexOutOfBoundsException`** | Exception thrown when an invalid index is used |

### AP Exam Tips

- **Always use generic type:** Write `ArrayList<String>` not just `ArrayList`.
- **`size()` is a method:** Don't forget the parentheses. Array `length` is an attribute; `ArrayList size()` is a method.
- **Index bounds:** For `get`, `set`, `remove`, valid indices are 0 to `size()-1`. For `add(index, obj)`, valid indices are 0 to `size()`.
- **Return values:** `set` and `remove` return the element being replaced or removed. This can be useful.
- **Autoboxing:** Remember that `ArrayList<Integer>` works with `int` values because of autoboxing.
- **Import required:** `ArrayList` is in `java.util`, so you need an import statement.
- **No primitives:** You cannot create `ArrayList<int>`; use `ArrayList<Integer>`.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "`ArrayList` size is fixed like an array." | No, `ArrayList` grows and shrinks dynamically. |
| "`size()` is an attribute like array `length`." | No, `size()` is a method; you need parentheses. |
| "You can create `ArrayList<int>`." | No, must use wrapper class: `ArrayList<Integer>`. |
| "`add(index, obj)` replaces the element at that index." | No, it inserts, shifting existing elements right. |
| "`set` and `add` do the same thing." | No, `set` replaces, `add` inserts. |
| "The valid index range is the same for all methods." | No, `add` allows index = size(); others do not. |

### Quick Reference: ArrayList Methods

| Method | Description | Valid Index Range |
|--------|-------------|-------------------|
| `int size()` | Returns number of elements | N/A |
| `boolean add(E obj)` | Appends to end | N/A |
| `void add(int i, E obj)` | Inserts at position i | 0 ≤ i ≤ size() |
| `E get(int i)` | Returns element at i | 0 ≤ i < size() |
| `E set(int i, E obj)` | Replaces element at i | 0 ≤ i < size() |
| `E remove(int i)` | Removes element at i | 0 ≤ i < size() |