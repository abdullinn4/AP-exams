# 1.15: String Manipulation


### The String Class

The `String` class is one of the most commonly used classes in Java. It represents a sequence of characters—words, sentences, or any text.

The `String` class is part of the `java.lang` package, which means it is **automatically available** in every Java program. You never need to import it.

```java
// No import needed!
String message = "Hello, World!";
```


### Creating String Objects

There are two ways to create a `String` object in Java:

#### 1. Using a String Literal

The most common way—just put text in double quotes.

```java
String name = "Alice";
String greeting = "Hello";
String empty = "";           // empty string (zero characters)
```

#### 2. Using the String Constructor

You can also use the `new` keyword with the `String` constructor.

```java
String name = new String("Alice");
String empty = new String();  // creates empty string
```

**Is there a difference?** Yes, there are technical differences related to memory and interning, but for the AP exam, you can treat both as creating valid `String` objects. String literals are more common and efficient.


### String Immutability

A `String` object is **immutable**, which means once a `String` object is created, its value cannot be changed.

**Key Point:** Any method that appears to modify a string actually creates and returns a **new** `String` object. The original string remains unchanged.

```java
String word = "hello";
String upper = word.toUpperCase();  // Creates a NEW string "HELLO"

System.out.println(word);  // Still prints "hello" (unchanged)
System.out.println(upper); // Prints "HELLO" (new string)
```

Think of strings as sealed envelopes. You can't change what's written inside. If you need a different message, you write it on a new envelope.

#### Why Immutability Matters

- **Security:** Strings used in sensitive contexts (like passwords) can't be altered
- **Thread safety:** Multiple threads can safely share strings
- **Performance:** String literals can be reused without copying


### String Concatenation

**Concatenation** means joining strings together. Java provides two ways to combine strings.

#### Using the `+` Operator

The `+` operator joins strings together.

```java
String firstName = "John";
String lastName = "Smith";
String fullName = firstName + " " + lastName;  // "John Smith"
```

When `+` is used with strings, it performs concatenation, not addition.

#### Using the `+=` Operator

You can also use the compound assignment operator with strings.

```java
String message = "Hello";
message += " World";    // message becomes "Hello World"
// Equivalent to: message = message + " World";
```

**Important:** Remember that strings are immutable. The `+=` operator creates a **new** string and reassigns the reference.


### Concatenation with Other Types

You can concatenate strings with other data types. Java automatically converts non-string values to strings.

#### Concatenating with Primitive Types

```java
int age = 17;
double gpa = 3.8;
String text = "Age: " + age + ", GPA: " + gpa;
// Result: "Age: 17, GPA: 3.8"
```

The `int` `17` becomes the string `"17"`, and the `double` `3.8` becomes the string `"3.8"`.

#### Concatenating with Objects

When you concatenate an object with a string, Java automatically calls the object's `toString()` method.

```java
Student alice = new Student("Alice", 1001);
String info = "Student: " + alice;  // Automatically calls alice.toString()
```

Every class inherits a `toString()` method from the `Object` class. If the class doesn't override it, you'll get a default string like `Student@1a2b3c4`.


### Important String Methods

The AP Computer Science A Exam requires knowledge of several `String` methods. All of these are listed on the Java Quick Reference.

#### 1. `int length()`

Returns the number of characters in the string.

```java
String str = "Hello";
int len = str.length();        // len = 5

String empty = "";
int emptyLen = empty.length();  // emptyLen = 0
```

**Note:** This is a method, so you need parentheses. `length()` for strings, but `length` (no parentheses) for arrays. This distinction is important for the exam.

#### 2. `String substring(int from, int to)`

Returns a new string containing the characters from index `from` up to, but **not including**, index `to`.

```java
String str = "abcdef";
String sub1 = str.substring(2, 5);  // "cde" (indices 2, 3, 4)
String sub2 = str.substring(0, 3);  // "abc" (indices 0, 1, 2)
```

**Key Rules:**
- First index is **inclusive**
- Second index is **exclusive**
- Length of substring = `to - from`

#### 3. `String substring(int from)`

Returns a substring starting at index `from` and continuing to the end of the string. This is equivalent to `substring(from, length())`.

```java
String str = "abcdef";
String sub = str.substring(3);     // "def" (indices 3, 4, 5)
```

#### 4. `int indexOf(String str)`

Returns the index of the **first occurrence** of the specified substring. Returns `-1` if the substring is not found.

```java
String sentence = "Hello world";
int idx1 = sentence.indexOf("world");    // 6
int idx2 = sentence.indexOf("o");         // 4 (first 'o')
int idx3 = sentence.indexOf("z");         // -1 (not found)
```

#### 5. `boolean equals(Object other)`

Compares the **content** of two strings. Returns `true` if they contain the same sequence of characters.

```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = "hello";

boolean b1 = s1.equals(s2);      // true (same characters)
boolean b2 = s1.equals(s3);      // false (different case)
```

**Critical:** Use `equals()` to compare string content. The `==` operator compares **references** (memory addresses), not content.

```java
String a = "Hello";
String b = "Hello";
String c = new String("Hello");

System.out.println(a == b);       // true (may share same literal)
System.out.println(a == c);       // false (different objects)
System.out.println(a.equals(c));  // true (same content)
```

#### 6. `int compareTo(String other)`

Compares strings alphabetically (lexicographically). Returns:
- A value **less than 0** if this string comes before the other
- **0** if the strings are equal
- A value **greater than 0** if this string comes after the other

```java
String a = "apple";
String b = "banana";
String c = "apple";

int result1 = a.compareTo(b);  // negative (apple < banana)
int result2 = b.compareTo(a);  // positive (banana > apple)
int result3 = a.compareTo(c);  // 0 (equal)
```

This is useful for sorting strings alphabetically.


### String Indices and the charAt Method

String characters are indexed starting at **0**. The first character is at index 0, the last character is at `length() - 1`.

```
String:  H  e  l  l  o
Index:   0  1  2  3  4
```

#### Accessing Individual Characters

While not on the AP Java Quick Reference, the `charAt(int index)` method returns the character at a specific index.

```java
String str = "Hello";
char ch = str.charAt(0);   // 'H'
char last = str.charAt(4); // 'o'
```

**Note:** `charAt` returns a `char` primitive type, not a `String`.

#### Single-Character Substrings

To get a single character as a `String` (not a `char`), use:

```java
String str = "Hello";
String firstLetter = str.substring(0, 1);  // "H"
String secondLetter = str.substring(1, 2); // "e"
```

This creates a substring of length 1.


### StringIndexOutOfBoundsException

If you attempt to access an index that is outside the valid range (0 to `length()-1`), Java throws a **`StringIndexOutOfBoundsException`**.

```java
String str = "Hello";
char ch = str.charAt(10);   // StringIndexOutOfBoundsException!
String sub = str.substring(2, 10); // Exception! to index too large
```

**Valid index range:** 0 through `length() - 1` inclusive for `charAt`. For `substring(from, to)`, both indices must be within 0 to `length()`, with `from <= to`.


### Common String Algorithms

#### Counting Occurrences

```java
String text = "banana";
int count = 0;
for (int i = 0; i < text.length(); i++) {
    if (text.substring(i, i+1).equals("a")) {
        count++;
    }
}
// count = 3
```

#### Finding if a Substring Exists

```java
String text = "The quick brown fox";
if (text.indexOf("quick") >= 0) {
    System.out.println("Found it!");
}
```

#### Creating a New String with Characters Reversed

```java
String original = "Hello";
String reversed = "";
for (int i = original.length() - 1; i >= 0; i--) {
    reversed += original.substring(i, i+1);
}
// reversed = "olleH"
```


### Key Terminology for Topic 1.15

| Term | Definition |
|------|------------|
| **Immutable** | Cannot be changed after creation |
| **String literal** | A string value written directly in code with double quotes |
| **Concatenation** | Joining strings together using `+` or `+=` |
| **Index** | The position of a character in a string (starting at 0) |
| **`length()`** | Method that returns the number of characters in a string |
| **`substring()`** | Method that extracts a portion of a string |
| **`indexOf()`** | Method that finds the position of a substring |
| **`equals()`** | Method that compares string content |
| **`compareTo()`** | Method that compares strings alphabetically |
| **`StringIndexOutOfBoundsException`** | Exception thrown when accessing an invalid index |


### AP Exam Tips

**What you need to know for the exam:**

- **Immutability:** Remember that String methods don't change the original string—they return new strings.

- **`equals()` vs `==`:** Always use `equals()` to compare string content. `==` compares references.

- **`length()` is a method:** Don't forget the parentheses. Array length is `arr.length` (no parentheses); string length is `str.length()` (with parentheses).

- **`substring` end index is exclusive:** `str.substring(0, 5)` includes indices 0-4, not 5. This is a common source of off-by-one errors.

- **`indexOf` returns -1 when not found:** Always check for -1 before using the result as an index.

- **String concatenation with `+`:** Java automatically converts other types to strings. This is tested frequently.

- **Single-character substrings:** `str.substring(i, i+1)` gives a one-character string. This is useful in algorithms.

- **Exceptions:** Be aware that invalid indices cause `StringIndexOutOfBoundsException`.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Strings can be changed after creation." | No, strings are immutable. Methods return new strings. |
| "`==` compares string content." | No, `==` compares references. Use `equals()` for content. |
| "`length()` and `length` are the same." | No, `length()` is for strings, `length` is for arrays. |
| "`substring(0,5)` includes index 5." | No, the end index is exclusive. It includes 0-4. |
| "`indexOf` returns 0 if not found." | No, it returns -1. |
| "`" + 5` gives an error." | No, Java converts the number to a string automatically. |
| "`charAt(0)` returns a String." | No, it returns a `char` primitive. |


### Quick Reference: String Methods

| Method | Description | Example | Result |
|--------|-------------|---------|--------|
| `int length()` | Number of characters | `"Hello".length()` | `5` |
| `String substring(int from, int to)` | Substring from `from` to `to-1` | `"Hello".substring(1,4)` | `"ell"` |
| `String substring(int from)` | Substring from `from` to end | `"Hello".substring(2)` | `"llo"` |
| `int indexOf(String s)` | First index of `s` (or -1) | `"Hello".indexOf("l")` | `2` |
| `boolean equals(Object other)` | Content comparison | `"Hi".equals("Hi")` | `true` |
| `int compareTo(String other)` | Alphabetical comparison | `"a".compareTo("b")` | negative |


### Summary of String Behavior

- Strings are **immutable** – once created, they never change
- All "modifying" methods create and return **new strings**
- Use **`equals()`** to compare content, not `==`
- Indices start at **0**
- Invalid indices throw **`StringIndexOutOfBoundsException`**
- Concatenation with `+` automatically converts other types