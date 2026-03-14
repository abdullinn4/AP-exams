### Expressions and Output

### Displaying Output: `System.out.print` and `System.out.println`

The most basic way to get information from your program to the user is by displaying text on the screen. Java provides two methods for this:

| Method | Behavior |
|--------|----------|
| `System.out.print` | Displays text and leaves the cursor on the same line |
| `System.out.println` | Displays text and moves the cursor to a new line |

The "ln" in `println` stands for "line."

#### Example: Understanding the Difference

```java
System.out.print("Hello");
System.out.print("World");
```

Output:
```
HelloWorld
```

The two words are stuck together because the cursor never moved to a new line.

```java
System.out.println("Hello");
System.out.println("World");
```

Output:
```
Hello
World
```

Each `println` starts on a new line.

```java
System.out.print("Hello ");
System.out.println("World");
System.out.print("Goodbye");
```

Output:
```
Hello World
Goodbye
```

#### Empty println

Calling `System.out.println()` with nothing inside prints a blank line:

```java
System.out.println("First line");
System.out.println();
System.out.println("Third line");
```

Output:
```
First line

Third line
```


### String Literals

A **literal** is the code representation of a fixed value. When you write a value directly in your code, that's a literal.

A **string literal** is a sequence of characters enclosed in double quotes.

```java
"Hello, World!"     // a string literal
"Java Programming"  // another string literal
""                  // empty string literal
"123"               // this is a string, NOT a number
"true"              // this is a string, NOT a boolean
```

**Key points about string literals:**
- They begin and end with double quotes `"`
- They can contain letters, numbers, spaces, punctuation—any characters
- They are not the same as numeric or boolean literals, even if they contain digits

#### String Literals vs Other Literals

```java
int count = 5;           // 5 is an integer literal
double price = 5.0;      // 5.0 is a double literal
boolean flag = true;     // true is a boolean literal
String text = "5";       // "5" is a string literal (different!)
```

**The quotes make all the difference.** `5` and `"5"` are completely different things to Java.

### Escape Sequences

What if you want to include a double quote character inside a string literal? You can't just type `"` because Java would think the string ends there.

**Escape sequences** solve this problem. They are special sequences that start with a backslash `\` and have special meaning in Java.

| Escape Sequence | Meaning | Example | Output |
|-----------------|---------|---------|--------|
| `\"` | Double quote | `System.out.println("She said \"Hello\"");` | She said "Hello" |
| `\\` | Backslash | `System.out.println("C:\\Users\\Name");` | C:\Users\Name |
| `\n` | Newline | `System.out.println("Line1\nLine2");` | Line1<br>Line2 |

#### More Examples

```java
System.out.println("The file is at C:\\Documents\\file.txt");
// Output: The file is at C:\Documents\file.txt

System.out.println("First\nSecond\nThird");
// Output:
// First
// Second
// Third

System.out.println("She whispered, \"Be careful!\"");
// Output: She whispered, "Be careful!"
```

**Important:** The backslash is not printed. It's an instruction to Java to treat the next character specially.


### Arithmetic Expressions

An **arithmetic expression** consists of numeric values, variables, and operators that combine them. When evaluated, an arithmetic expression produces a single numeric value.

#### The Arithmetic Operators

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `10 - 4` | `6` |
| `*` | Multiplication | `6 * 7` | `42` |
| `/` | Division | `15 / 3` | `5` |
| `%` | Remainder (modulo) | `17 % 5` | `2` |

#### Type Rules for Arithmetic

The type of the result depends on the types of the operands:

| Operation | Result Type | Example | Result |
|-----------|-------------|---------|--------|
| `int` operator `int` | `int` | `9 / 2` | `4` (not 4.5!) |
| `double` operator `double` | `double` | `9.0 / 2.0` | `4.5` |
| `int` operator `double` | `double` | `9 / 2.0` | `4.5` |
| `double` operator `int` | `double` | `9.0 / 2` | `4.5` |

**Key Rule:** If at least one operand is a `double`, the result is a `double`. If both are `int`, the result is an `int`.


### Integer Division: A Common Pitfall

When you divide two integers, Java performs **integer division**—the result is the integer portion of the quotient only. The fractional part is truncated (chopped off), not rounded.

```java
int result = 9 / 2;      // result is 4, not 4.5
int result2 = 17 / 5;    // result2 is 3, not 3.4
int result3 = 3 / 4;     // result3 is 0, not 0.75
```

This is a common source of **logic errors** for beginners.

#### Getting a Decimal Result from Integers

To get a decimal result, make at least one operand a `double`:

```java
double result1 = 9.0 / 2;     // 4.5
double result2 = 9 / 2.0;     // 4.5
double result3 = (double) 9 / 2;  // 4.5 (casting, covered in Topic 1.5)
```

But careful—this doesn't work:

```java
double result = 9 / 2;         // 9/2 is integer division → 4, then stored as 4.0
```

The integer division happens **before** the result is stored in the double variable.


### The Remainder Operator `%`

The remainder operator (also called modulo) returns the remainder after division.

```java
17 % 5 = 2   because 5 * 3 = 15, remainder 2
20 % 6 = 2   because 6 * 3 = 18, remainder 2
10 % 2 = 0   because 2 * 5 = 10, remainder 0
4 % 7 = 4    because 7 * 0 = 0, remainder 4
```

#### Common Uses of `%`

**Checking if a number is even or odd:**
```java
if (number % 2 == 0) {
    System.out.println("Even");
} else {
    System.out.println("Odd");
}
```

**Extracting digits from a number:**
```java
int lastDigit = number % 10;  // Gets the last digit
```

**Determining if one number is divisible by another:**
```java
if (a % b == 0) {
    System.out.println(a + " is divisible by " + b);
}
```

#### Important Restriction

For the AP exam, when using `%`:
- The first operand `a` must be greater than or equal to 0
- The second operand `b` must be greater than 0

### Operator Precedence

When multiple operators appear in an expression, Java follows rules of **operator precedence** to determine the order of evaluation.

| Precedence | Operators | Associativity |
|------------|-----------|---------------|
| Highest | `*` `/` `%` | Left to right |
| Lowest | `+` `-` | Left to right |

#### Precedence Rules

1. Multiplication, division, and remainder are evaluated **before** addition and subtraction
2. Operators with the same precedence are evaluated from **left to right**
3. Parentheses `()` can be used to override the default precedence

#### Examples

```java
int result = 5 + 3 * 4;        // 5 + 12 = 17 (multiplication first)
int result2 = (5 + 3) * 4;      // 8 * 4 = 32 (parentheses override)
int result3 = 10 - 4 + 2;       // (10 - 4) + 2 = 6 + 2 = 8 (left to right)
int result4 = 20 / 4 * 2;       // (20 / 4) * 2 = 5 * 2 = 10 (left to right)
int result5 = 20 / (4 * 2);      // 20 / 8 = 2 (parentheses change everything)
```

#### Complex Example

```java
int x = 5 + 2 * 3 - 8 / 4;
// Step 1: 2 * 3 = 6
// Step 2: 8 / 4 = 2
// Step 3: 5 + 6 = 11
// Step 4: 11 - 2 = 9
// Result: 9
```

**When in doubt, use parentheses.** They make your intentions clear to both Java and anyone reading your code.

```java
int x = 5 + (2 * 3) - (8 / 4);  // Clearer, same result
```

### Division by Zero

Attempting to divide an integer by zero causes a run-time error called an `ArithmeticException`.

```java
int x = 10 / 0;  // Throws ArithmeticException, program crashes
```

**Important:** This applies only to integer division. For the AP exam, division by zero when one value is a `double` is outside the scope.

### Putting It All Together: Expressions with Variables

Variables can be used anywhere in expressions:

```java
int a = 10;
int b = 3;
int sum = a + b;           // 13
int product = a * b;       // 30
int quotient = a / b;      // 3 (integer division!)
int remainder = a % b;     // 1

double c = 10.0;
double result = c / b;     // 3.3333... (c is double, so result is double)
```

### Visualizing Expression Evaluation

```
Expression: 5 + 2 * 3 - 8 / 4

Step 1: Identify highest precedence operators (*, /, %)
        5 + (2 * 3) - (8 / 4)

Step 2: Evaluate them left to right
        5 + 6 - (8 / 4)
        5 + 6 - 2

Step 3: Remaining operators (+ and -) evaluated left to right
        (5 + 6) - 2
        11 - 2
        9
```


### Key Terminology for Topic 1.3

| Term | Definition |
|------|------------|
| **`System.out.print`** | Displays output and leaves cursor on the same line |
| **`System.out.println`** | Displays output and moves cursor to a new line |
| **Literal** | Code representation of a fixed value |
| **String literal** | Sequence of characters enclosed in double quotes |
| **Escape sequence** | Special sequence starting with `\` with special meaning (`\"`, `\\`, `\n`) |
| **Arithmetic expression** | Combination of numeric values, variables, and operators |
| **Integer division** | Division where both operands are ints—result is truncated quotient |
| **Remainder operator `%`** | Returns remainder after division |
| **Operator precedence** | Rules determining order of operator evaluation |
| **`ArithmeticException`** | Run-time error when dividing an integer by zero |


### AP Exam Tips

**What you need to know for the exam:**

- **`print` vs `println`:** Questions will test whether you know which one moves to a new line.

- **Escape sequences:** Recognize `\"`, `\\`, and `\n` and what they produce.

- **Integer division trap:** The most common mistake. `7 / 2` is `3`, not `3.5`. Always check operand types.

- **`%` operator:** Know how to calculate remainders. Practice with negative numbers? No – AP exam restricts to non-negative `a` and positive `b`.

- **Operator precedence:** Be able to evaluate expressions with multiple operators. Parentheses change everything.

- **Division by zero:** Know that `int / 0` causes `ArithmeticException`. This is a run-time error.

- **Type promotion:** When an `int` and `double` are combined, the result is `double`.

- **Tracing output:** You'll be given code segments and asked what prints. Practice step-by-step evaluation.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "`println` and `print` do the same thing." | `println` adds a newline; `print` does not. |
| "Backslash prints as a backslash." | Backslash is escape character. Use `\\` to print one. |
| "9 / 2 is 4.5." | Only if at least one operand is `double`. As integers, it's `4`. |
| "`%` gives the percentage." | No, it gives the remainder after division. |
| "Multiplication always happens before division." | They have same precedence, evaluated left to right. |
| "Parentheses are optional." | They're optional but make code clearer and can change results. |
| "Dividing by zero gives zero." | It crashes the program with an exception. |

### Quick Reference Table: Operator Precedence

| Operator | Description | Precedence |
|----------|-------------|------------|
| `*` `/` `%` | Multiplication, division, remainder | Highest (evaluated first) |
| `+` `-` | Addition, subtraction | Lowest (evaluated last) |

Same precedence operators evaluate left to right.