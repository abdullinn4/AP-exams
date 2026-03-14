### Assignment Statements and Input

### The Assignment Operator `=`

The **assignment operator** `=` is used to store a value in a variable. It takes the value on the right side and stores it in the variable on the left side.

**Syntax:**
```java
variable = expression;
```

**Examples:**
```java
int score;
score = 95;              // assigns 95 to score

double price;
price = 19.99;           // assigns 19.99 to price

boolean isFinished;
isFinished = true;       // assigns true to isFinished
```

**Important:** The left side must be a variable. You cannot assign a value to a literal or an expression.

```java
95 = score;              // ERROR! Left side must be a variable
score + 5 = 100;         // ERROR! Left side is an expression, not a variable
```


### Variable Initialization

**Initialization** is the first time a variable is assigned a value. A variable must be initialized before it can be used in an expression.

#### Initializing at Declaration

```java
int age = 17;            // declaration and initialization together
double gpa = 3.8;
boolean honorRoll = true;
```

#### Initializing Later

```java
int age;                 // declaration only
age = 17;                // initialization (first assignment)
```

#### Using an Uninitialized Variable Causes an Error

```java
int age;
System.out.println(age); // ERROR! Variable 'age' might not have been initialized
```

**Always initialize variables before using them.** The compiler enforces this rule.


### Compatible Types in Assignment

The value being assigned must be compatible with the variable's data type.

#### Legal Assignments

```java
int x = 10;              // 10 is int → compatible
double y = 10;           // 10 is int, but Java automatically converts int to double
double z = 3.14;         // 3.14 is double → compatible
boolean flag = true;     // true is boolean → compatible
```

#### Illegal Assignments (Compiler Errors)

```java
int x = 3.14;            // ERROR! double cannot be automatically converted to int
double y = "3.14";       // ERROR! String cannot be converted to double
boolean flag = "true";   // ERROR! String cannot be converted to boolean
String name = 123;       // ERROR! int cannot be converted to String
```

**Key Rule:** You can assign an `int` to a `double` (automatic widening), but you cannot assign a `double` to an `int` without casting (Topic 1.5).


### Reference Types and `null`

For reference type variables, you can assign either:
- An object reference (created with `new`)
- The special value `null`, meaning the variable does not refer to any object

```java
String name;             // declares a String reference variable
name = null;             // explicitly set to null (no object)
name = "Alice";          // now refers to a String object
```

**Important:** `null` is not the same as an empty string `""` or zero. It means "no object."

Attempting to use a method or access a field on a `null` reference causes a `NullPointerException` at run time.

```java
String name = null;
int len = name.length(); // Run-time error: NullPointerException
```


### Expression Evaluation

An **expression** is a combination of literals, variables, and operators that evaluates to a single value.

Every expression has two important properties:
- A **value** (the result of the evaluation)
- A **type** (determined by the types of the operands and operators)

#### Examples of Expressions and Their Types

```java
int a = 5;
int b = 2;
double c = 2.5;

Expression          | Value | Type
-------------------|-------|------
a + b              | 7     | int
a / b              | 2     | int (integer division!)
a / c              | 2.0   | double
a > b              | true  | boolean
"Count: " + a      | "Count: 5" | String
```

**Key Point:** The type of an expression is determined at compile time based on the types of its parts, not the actual values.

```java
int x = 3;
int y = 4;
double result = x / y;   // x / y is int division → 0, then converted to 0.0
```

Even though mathematically 3/4 = 0.75, the expression `x / y` is of type `int` because both operands are `int`. The division happens first, yielding `0`, which is then stored as `0.0` in the `double` variable.


### Reading Input with the `Scanner` Class

Programs often need to get input from the user. The `Scanner` class provides methods to read text input from the keyboard.

#### Steps to Use Scanner

**1. Import the Scanner class**
```java
import java.util.Scanner;
```
Place this at the top of your Java file, before the class declaration.

**2. Create a Scanner object connected to the keyboard**
```java
Scanner scanner = new Scanner(System.in);
```
`System.in` represents the standard input stream (keyboard).

**3. Use Scanner methods to read input**

| Method | What It Reads | Example |
|--------|---------------|---------|
| `nextInt()` | Reads an integer | `int age = scanner.nextInt();` |
| `nextDouble()` | Reads a decimal number | `double price = scanner.nextDouble();` |
| `next()` | Reads a single word (up to whitespace) | `String name = scanner.next();` |
| `nextLine()` | Reads an entire line (including spaces) | `String fullName = scanner.nextLine();` |

**4. Close the Scanner (optional but good practice)**
```java
scanner.close();
```

#### Complete Example

```java
import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        
        System.out.print("Enter your age: ");
        int age = keyboard.nextInt();
        
        System.out.print("Enter your GPA: ");
        double gpa = keyboard.nextDouble();
        
        System.out.print("Enter your first name: ");
        String firstName = keyboard.next();
        
        // Consume the leftover newline
        keyboard.nextLine();
        
        System.out.print("Enter your full address: ");
        String address = keyboard.nextLine();
        
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
        System.out.println("First name: " + firstName);
        System.out.println("Address: " + address);
        
        keyboard.close();
    }
}
```


### Important Scanner Behavior Notes

#### Mixing `nextLine()` with Other `next` Methods

When you use `nextInt()` or `nextDouble()`, they read the number but leave the newline character (`\n`) in the input buffer. A subsequent `nextLine()` will immediately read that leftover newline and return an empty string.

**Solution:** Add an extra `nextLine()` after the numeric input to consume the newline.

```java
System.out.print("Enter age: ");
int age = scanner.nextInt();
scanner.nextLine();              // consume leftover newline

System.out.print("Enter name: ");
String name = scanner.nextLine(); // now works correctly
```

#### `hasNext` Methods

You can check if there is more input before reading:

```java
if (scanner.hasNextInt()) {
    int number = scanner.nextInt();
} else {
    System.out.println("That's not an integer!");
}
```

Common `hasNext` methods: `hasNextInt()`, `hasNextDouble()`, `hasNext()` (any token).


### Input Sources

Input can come in many forms: keyboard, mouse, touch, voice, files, etc. For now, we focus on keyboard input using `Scanner`. Later units will cover reading from files.


### Key Terminology for Topic 1.4

| Term | Definition |
|------|------------|
| **Assignment operator `=`** | Stores the value on the right into the variable on the left |
| **Initialization** | The first time a variable is assigned a value |
| **`null`** | Special literal indicating a reference variable does not refer to any object |
| **Expression** | Combination of literals, variables, and operators that evaluates to a single value |
| **`Scanner`** | A class that provides methods for reading input from various sources |
| **`System.in`** | The standard input stream (typically the keyboard) |


### AP Exam Tips

**What you need to know for the exam:**

- **Assignment syntax:** Know that the variable must be on the left, expression on the right.

- **Initialization:** Variables must be initialized before use. Exam questions will test this with compiler error scenarios.

- **Type compatibility:** Be able to identify which assignments are legal. Remember `int` to `double` is automatic; reverse requires casting.

- **`null`:** Know that `null` is for reference types only. Using a `null` reference causes `NullPointerException`.

- **Expression types:** The type of an expression is determined by its operands, not the context where it's used. The classic trap: `double result = 3 / 4;` results in `0.0`.

- **Scanner basics:** You should know how to create a `Scanner` with `System.in` and use basic methods like `nextInt()`, `nextDouble()`, `next()`, and `nextLine()`. Be aware of the newline issue with `nextLine()` after numeric input.

- **Exclusion reminder:** The CED excludes "any specific form of input from the user." This means you won't be tested on GUI input, file dialogs, etc. But keyboard input with `Scanner` is fair game.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Assignment `=` means equality." | No, `=` is assignment. Equality is `==`. |
| "A variable can be used before initialization." | No, the compiler prevents this. |
| "`null` is the same as 0 or empty string." | No, `null` means no object. `0` is an integer, `""` is an empty String object. |
| "The type of an expression depends on what I assign it to." | No, type is determined by the expression itself. |
| "`nextLine()` reads the next word." | No, it reads the entire line until newline. |
| "After `nextInt()`, I can directly use `nextLine()` to get a string." | You'll get an empty string unless you consume the leftover newline first. |
| "Input can only come from the keyboard." | Input can come from many sources, but we focus on keyboard for now. |