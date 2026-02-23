### 1.5: Casting and Range of Variables

### What is Casting?

**Casting** is the process of converting a value from one primitive data type to another. In Java, you can explicitly convert between `int` and `double` using casting operators.

**Why cast?**
- Sometimes you have a `double` but need an `int` (for array indices, counters, etc.)
- Sometimes you need a decimal result from integer division
- Sometimes you need to round a number


### The Casting Operators

Java provides two casting operators for primitive types:

| Cast Operator | Purpose |
|---------------|---------|
| `(int)` | Converts a value to an `int` |
| `(double)` | Converts a value to a `double` |

**Syntax:**
```java
(type) expression
```

The cast operator goes **before** the expression you want to convert.

#### Casting Examples

```java
double price = 19.99;
int dollars = (int) price;           // dollars = 19

int quantity = 5;
double total = (double) quantity;    // total = 5.0

int numerator = 9;
int denominator = 2;
double result = (double) numerator / denominator;  // result = 4.5
```


### Casting `double` to `int`: Truncation

When you cast a `double` to an `int`, the digits to the right of the decimal point are **truncated** (chopped off). This is **not** rounding—it simply discards the fractional part.

```java
double x = 9.99;
int y = (int) x;        // y = 9 (fractional part .99 is dropped)

double a = -3.7;
int b = (int) a;        // b = -3 (fractional part .7 is dropped)
```

**Important:** Truncation always moves toward zero. Positive numbers get smaller; negative numbers get larger (closer to zero).

| Original `double` | After `(int)` Cast |
|-------------------|---------------------|
| `7.99` | `7` |
| `7.01` | `7` |
| `7.0` | `7` |
| `-3.2` | `-3` |
| `-3.9` | `-3` |



### Automatic Widening Conversion

Java can automatically convert an `int` to a `double` without any explicit cast. This is called **widening conversion** because you're going from a smaller type (`int`, 4 bytes) to a larger type (`double`, 8 bytes) with no risk of losing information.

```java
int count = 42;
double d = count;        // Automatic conversion: d = 42.0
```

This works in expressions too:

```java
int x = 5;
double y = 2.5;
double result = x + y;    // x is automatically converted to 5.0 before addition
                           // result = 7.5
```

**The reverse (double to int) is NOT automatic** because information could be lost. You must explicitly cast.



### Casting in Expressions: Precedence Matters

The cast operator has high precedence—higher than arithmetic operators. This can lead to unexpected results if you're not careful.

#### Example 1: Casting the Wrong Part

```java
double result = (double) (9 / 2);    // What is result?
```

Let's trace it:
1. Inside parentheses: `9 / 2` is integer division → `4`
2. Then cast: `(double) 4` → `4.0`
3. Result: `4.0`

**Not what we wanted!**

#### Example 2: Casting the First Operand

```java
double result = (double) 9 / 2;      // What is result?
```

Trace it:
1. Cast applies to `9` only: `(double) 9` → `9.0`
2. Then division: `9.0 / 2` → `4.5` (double / int = double)
3. Result: `4.5`

**That's correct!**

#### Example 3: Casting the Divisor

```java
double result = 9 / (double) 2;      // 9 / 2.0 = 4.5
```

Also works.

**Key Rule:** To get a decimal result from integer division, cast **one** of the operands to `double` before the division happens.



### Rounding with Casting

You can use casting to round a `double` to the nearest integer. The technique depends on whether the number is positive or negative.

#### Rounding Positive Numbers

Add `0.5` before casting to `int`:

```java
double x = 7.3;
int rounded = (int) (x + 0.5);    // (int) 7.8 = 7

double y = 7.8;
int rounded2 = (int) (y + 0.5);   // (int) 8.3 = 8
```

**Why this works:**
- Numbers < 7.5: adding 0.5 keeps them below 8.0, truncation gives 7
- Numbers ≥ 7.5: adding 0.5 pushes them to 8.0 or above, truncation gives 8

#### Rounding Negative Numbers

For negative numbers, subtract `0.5` before casting:

```java
double a = -7.3;
int rounded = (int) (a - 0.5);    // (int) -7.8 = -7

double b = -7.8;
int rounded2 = (int) (b - 0.5);   // (int) -8.3 = -8
```



### Integer Range and Overflow

#### The Limits of `int`

Integers in Java are stored using a fixed amount of memory: **4 bytes** (32 bits). This means there's a limit to how large or small an integer can be.

Java provides constants that tell you these limits:

| Constant | Value | Meaning |
|----------|-------|---------|
| `Integer.MAX_VALUE` | `2,147,483,647` | Largest possible `int` value |
| `Integer.MIN_VALUE` | `-2,147,483,648` | Smallest possible `int` value |

```java
System.out.println(Integer.MAX_VALUE);  // 2147483647
System.out.println(Integer.MIN_VALUE);  // -2147483648
```

#### What Happens When You Exceed the Limits?

If an expression would evaluate to an `int` value outside the allowed range, **integer overflow** occurs. The result "wraps around" to the other end of the range.

```java
int max = Integer.MAX_VALUE;
int result = max + 1;        // Overflow!
System.out.println(result);  // Prints -2147483648 (Integer.MIN_VALUE)
```

```java
int min = Integer.MIN_VALUE;
int result = min - 1;        // Overflow!
System.out.println(result);  // Prints 2147483647 (Integer.MAX_VALUE)
```

**Important:** The program doesn't crash. It produces a mathematically incorrect value that is still within the `int` range, but not the value you expected.

This is a **logic error**—the program runs but gives wrong results.

#### Visualizing Overflow

Imagine a circular odometer:
- Going past the maximum (forward) brings you to the minimum
- Going past the minimum (backward) brings you to the maximum

```
    -2,147,483,648
         ↑     ↓
    ←──────────────→
         ↓     ↑
     2,147,483,647
```



### Round-Off Error with `double`

The `double` type stores decimal numbers using a finite amount of memory (8 bytes). Some numbers cannot be represented exactly in binary, just as 1/3 cannot be represented exactly as a decimal (0.33333...).

This leads to **round-off errors**—tiny discrepancies between the mathematical value and the actual stored value.

#### Examples of Round-Off Error

```java
double a = 0.1 + 0.2;
System.out.println(a);        // Prints 0.30000000000000004, not 0.3

double b = 1.0 - 0.9;
System.out.println(b);        // Prints 0.09999999999999998
```

These small errors can accumulate and cause problems, especially when comparing values:

```java
double x = 0.1 + 0.2;
if (x == 0.3) {
    System.out.println("Equal");    // This will NOT print!
} else {
    System.out.println("Not equal"); // This prints
}
```

#### Avoiding Round-Off Errors

When exact decimal arithmetic is needed, use integers instead:

```java
// Instead of working with dollars as doubles:
double price = 19.99;           // Potential round-off

// Work with cents as integers:
int priceInCents = 1999;        // Exact!
```

**The CED states:** "To avoid rounding errors that naturally occur, use int values."

#### Understanding the Trade-off

- `int` is exact but has a limited range
- `double` can represent a huge range of values (very large and very small) but with potential round-off error

Programmers choose the appropriate type based on the needs of their program.



### Key Terminology for Topic 1.5

| Term | Definition |
|------|------------|
| **Casting** | Explicitly converting a value from one primitive type to another |
| **`(int)`** | Cast operator that converts a value to an `int` (truncates decimals) |
| **`(double)`** | Cast operator that converts a value to a `double` |
| **Truncation** | Discarding the fractional part of a number (not rounding) |
| **Widening conversion** | Automatic conversion from a smaller type to a larger type (e.g., `int` to `double`) |
| **`Integer.MAX_VALUE`** | Constant representing the largest possible `int` (2,147,483,647) |
| **`Integer.MIN_VALUE`** | Constant representing the smallest possible `int` (-2,147,483,648) |
| **Integer overflow** | When an expression evaluates outside the `int` range, causing wrap-around |
| **Round-off error** | Tiny inaccuracies when storing certain decimal numbers as `double` |



### AP Exam Tips

**What you need to know for the exam:**

- **Casting syntax:** `(int) x` and `(double) x`. The parentheses are required.

- **Truncation, not rounding:** `(int) 7.99` is `7`, not `8`. No rounding occurs.

- **Casting precedence:** The cast applies to the immediate operand. `(double) 9 / 2` is different from `(double) (9 / 2)`.

- **Getting decimal division:** Cast one operand to `double` before division: `(double) 9 / 2` or `9 / (double) 2`.

- **Rounding trick:** `(int) (x + 0.5)` for positive numbers. Know it, but remember it's not the same as casting alone.

- **Integer.MAX_VALUE/MIN_VALUE:** Know that these constants exist and what they represent. Be able to recognize overflow scenarios.

- **Overflow behavior:** Overflow doesn't crash—it wraps around. This is a logic error.

- **Round-off error:** Be aware that `double` arithmetic can have tiny inaccuracies. Avoid comparing `double` values directly with `==`.

- **Exclusion reminder:** "Other special decimal data types" (like `BigDecimal`) are outside scope. Stick to the rules given.



### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Casting a double to int rounds to the nearest integer." | No, it truncates (chops off the decimal part). |
| "(int) 7.99 is 8." | No, it's 7. Truncation, not rounding. |
| "You can automatically convert double to int." | No, you must explicitly cast. |
| "Casting (double) (9 / 2) gives 4.5." | No, integer division happens first, giving 4, then cast to 4.0. |
| "Integer overflow crashes the program." | No, it wraps around silently—a logic error. |
| "double arithmetic is always exact." | No, round-off errors are common with decimal fractions. |
| "MAX_VALUE + 1 gives a really big number." | No, it wraps to MIN_VALUE. |
| "Comparing doubles with == is safe." | Often not safe due to round-off errors. |



### Quick Reference: Casting Rules

| Conversion | Required? | Example | Result |
|------------|-----------|---------|--------|
| `int` → `double` | Automatic | `double d = 5;` | `5.0` |
| `double` → `int` | Explicit cast | `int i = (int) 5.7;` | `5` |
| Integer division → decimal | Cast one operand | `(double) 5 / 2` | `2.5` |



### Visualizing Truncation vs Rounding

```
Number: 7.49

Truncation: (int) 7.49 → 7
                     ↓
                (just chop)
                    
Rounding: (int)(7.49 + 0.5) → (int) 7.99 → 7
        7.49 is still below 7.5, so still 7

Number: 7.51

Truncation: (int) 7.51 → 7
                     ↓
                (just chop)

Rounding: (int)(7.51 + 0.5) → (int) 8.01 → 8
        7.51 + 0.5 crosses 8.0, so rounds up
```