### Boolean Expressions
### What is a Boolean Expression?

A **Boolean expression** is an expression that evaluates to either `true` or `false`. It is named after George Boole, a mathematician who developed Boolean algebra.

Boolean expressions are the foundation of decision-making in programming. They are used in:
- `if` statements to determine which path to take
- Loops to determine when to stop repeating
- Assignments to `boolean` variables

```java
boolean isRaining = true;           // literal boolean value
boolean isWarm = temperature > 70;  // Boolean expression
```

### Relational Operators

**Relational operators** compare two values and produce a Boolean result. Java provides six relational operators:

| Operator | Meaning | Example | Result (if x=5, y=10) |
|----------|---------|---------|----------------------|
| `==` | Equal to | `x == y` | `false` |
| `!=` | Not equal to | `x != y` | `true` |
| `<` | Less than | `x < y` | `true` |
| `>` | Greater than | `x > y` | `false` |
| `<=` | Less than or equal to | `x <= y` | `true` |
| `>=` | Greater than or equal to | `x >= y` | `false` |

#### Examples with Numeric Values

```java
int age = 17;
boolean canVote = age >= 18;        // false
boolean isTeen = age > 12 && age < 20;  // true
boolean isChild = age <= 12;        // false

double temperature = 98.6;
boolean hasFever = temperature > 99.5;  // false
boolean normalTemp = temperature == 98.6; // true (but careful with doubles!)
```

### Comparing Primitive Values

When relational operators are used with primitive types, they compare the **actual values** stored in the variables.

```java
int a = 5;
int b = 5;
int c = 10;

boolean result1 = a == b;  // true (both store the value 5)
boolean result2 = a == c;  // false (5 vs 10)
boolean result3 = a < c;   // true (5 < 10)
```

This is straightforward because primitive variables directly hold the values.

### Comparing Object References

When relational operators are used with reference types, they compare the **object references** (memory addresses), not the contents of the objects.

```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

boolean ref1 = s1 == s2;  // true (may refer to same literal in memory)
boolean ref2 = s1 == s3;  // false (different objects, different addresses)
boolean ref3 = s1 != s3;  // true (they are different objects)
```

**Critical:** `==` with objects checks if two references point to the **same object**, not if the objects have the same content.

To compare the actual content of objects, you use the `equals()` method (covered in Topic 1.15).

```java
boolean content = s1.equals(s3);  // true (same characters "Hello")
```

### Comparing with `null`

You can use `==` and `!=` to check whether a reference variable actually refers to an object or is `null`.

```java
String name = null;
Student student = new Student("Alice", 1001);

boolean isNull = name == null;        // true
boolean notNull = student != null;    // true
boolean isNameNull = name != null;    // false
```

#### Why Check for `null`?

Checking for `null` before calling methods prevents `NullPointerException`:

```java
if (student != null) {
    String name = student.getName();  // Safe to call
} else {
    System.out.println("No student object");
}
```

### Boolean Expressions in Context

Boolean expressions are most commonly used as conditions in selection and repetition statements.

#### In `if` Statements

```java
if (score >= 90) {
    grade = "A";
}
```

The expression `score >= 90` is evaluated. If it's `true`, the code inside executes.

#### In Loops

```java
while (count < 10) {
    System.out.println(count);
    count++;
}
```

The expression `count < 10` is checked before each iteration. The loop continues as long as it's `true`.

#### Assigning to Boolean Variables

You can store the result of a Boolean expression in a `boolean` variable:

```java
int age = 17;
boolean isAdult = age >= 18;
boolean canDrive = age >= 16;
boolean canVote = isAdult;  // using another boolean variable
```

### Common Patterns

#### Checking Within a Range

```java
int x = 25;
boolean inRange = x > 10 && x < 50;  // true
boolean outside = x <= 10 || x >= 50; // false
```

#### Checking Equality with Multiple Values

```java
String day = "Monday";
boolean isWeekend = day.equals("Saturday") || day.equals("Sunday");
boolean isWeekday = !isWeekend;
```

#### Checking for Valid Input

```java
int value = getUserInput();
boolean valid = value >= 0 && value <= 100;
if (!valid) {
    System.out.println("Invalid input!");
}
```

### Key Terminology for Topic 2.2

| Term | Definition |
|------|------------|
| **Boolean expression** | An expression that evaluates to `true` or `false` |
| **Relational operator** | An operator that compares two values (`==`, `!=`, `<`, `>`, `<=`, `>=`) |
| **Object reference** | A memory address pointing to an object |
| **`null`** | A special literal meaning "no object" |

### AP Exam Tips

**What you need to know for the exam:**

- **Six relational operators:** Know all six: `==`, `!=`, `<`, `>`, `<=`, `>=`. Be careful with `==` for equality—it's two equals signs, not one.
- **Primitives vs references:** Remember that `==` compares values for primitives but references (addresses) for objects.
- **`null` checks:** You'll see code that checks `if (obj == null)` or `if (obj != null)` to avoid `NullPointerException`.
- **Boolean expressions evaluate to `true` or `false`:** This seems obvious, but remember that you can't use a Boolean expression where another type is expected.
- **No automatic conversion:** Unlike some languages, Java does not treat non-boolean values as true/false. You cannot write `if (x)` where `x` is an int—you must write `if (x != 0)`.
- **String comparison:** Use `equals()`, not `==`, to compare String content. The exam will test this distinction.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "`=` and `==` are the same." | `=` is assignment; `==` is comparison. Mixing them is a common error. |
| "`==` compares String content." | No, `==` compares references. Use `equals()` for content. |
| "`<` and `>` work with any types." | They work with numeric types only, not with `String` or other objects. |
| "`if (x)` works if x is an int." | No, Java requires a boolean expression. You need `if (x != 0)`. |
| "Comparing with `null` is rare." | Actually, it's very common to prevent `NullPointerException`. |
| "`<=` means less than or less than or equal." | It's just "less than or equal to"—simpler than that! |

### Quick Reference: Relational Operators

| Operator | Meaning | True Example | False Example |
|----------|---------|--------------|---------------|
| `==` | equal to | `5 == 5` | `5 == 3` |
| `!=` | not equal to | `5 != 3` | `5 != 5` |
| `<` | less than | `3 < 5` | `5 < 3` |
| `>` | greater than | `5 > 3` | `3 > 5` |
| `<=` | less than or equal | `3 <= 5`, `5 <= 5` | `6 <= 5` |
| `>=` | greater than or equal | `5 >= 3`, `5 >= 5` | `3 >= 5` |