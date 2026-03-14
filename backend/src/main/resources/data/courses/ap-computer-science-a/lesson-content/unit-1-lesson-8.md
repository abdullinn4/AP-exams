
### Documentation with Comments


### What Are Comments?

**Comments** are notes written in the source code that are ignored by the compiler. They are meant for humans—the original programmer and anyone else who needs to read, understand, or modify the code.

**Key Point:** Comments have no effect on how the program runs. They are completely ignored during compilation and execution.

#### Why Use Comments?

- **Explain what code does** – Make your intentions clear
- **Document complex logic** – Help others (and your future self) understand tricky parts
- **Provide usage instructions** – Tell other programmers how to use your methods
- **Temporarily disable code** – "Comment out" code during debugging


### Three Types of Comments in Java

Java provides three different comment styles, each with its own purpose.

#### 1. Single-Line Comments `//`

Everything after `//` on the same line is ignored by the compiler.

```java
// This is a single-line comment
int age = 17;  // This comment explains the line

// You can also use them to temporarily disable code
// System.out.println("This won't print");
```

**Best for:** Brief explanations, clarifying individual lines, temporarily disabling code.

#### 2. Multi-Line Comments `/* */`

Everything between `/*` and `*/` is ignored, even across multiple lines.

```java
/* This is a multi-line comment.
   It can span several lines.
   Everything between the symbols is ignored. */

int x = 5; /* Comments can also appear in the middle of a line */ int y = 10;
```

**Best for:** Longer explanations, describing a block of code, temporarily disabling multiple lines.

#### 3. Javadoc Comments `/** */`

Javadoc comments are a special type of multi-line comment used to generate official API documentation. They begin with `/**` and end with `*/`.

```java
/**
 * Calculates the average of three numbers.
 * 
 * @param a the first number
 * @param b the second number
 * @param c the third number
 * @return the average of a, b, and c
 */
public double average(double a, double b, double c) {
    return (a + b + c) / 3.0;
}
```

Special tags like `@param` and `@return` are used to document specific parts of the code. Tools can extract these comments to create professional-looking API documentation automatically.

**Best for:** Public APIs, classes, and methods that other programmers will use.



### When to Comment: Finding the Balance

Good comments explain **why**, not **what**. The code itself shows what is happening. Comments should explain the reasoning behind the code.

#### Bad Comment (States the Obvious)
```java
// Increment i by 1
i++;  // The code already shows this!
```

#### Good Comment (Explains Why)
```java
// Skip the header row in the data file
i++;  // Now we understand the purpose
```

#### Guidelines for Effective Comments

| Do | Don't |
|----|-------|
| Explain complex logic | State the obvious |
| Document assumptions | Repeat what the code clearly shows |
| Provide context | Leave comments that can become outdated |
| Describe purpose of methods and parameters | Comment every single line |



### Preconditions

A **precondition** is a condition that must be true **before** a method is called in order for the method to behave as expected.

**Think of it as a requirement:** The method assumes these conditions are met. It is the caller's responsibility to ensure they are true.

#### Examples of Preconditions

```java
/**
 * Calculates the square root of a number.
 * 
 * @param x a non-negative number
 * @return the square root of x
 * 
 * Precondition: x >= 0
 */
public double squareRoot(double x) {
    return Math.sqrt(x);
}
```

If someone calls `squareRoot(-5)`, the precondition is violated. The method may not work correctly (in this case, `Math.sqrt(-5)` returns NaN, not a real number).

```java
/**
 * Returns the element at the specified position in an array.
 * 
 * @param arr the array (not null)
 * @param index the position (0 <= index < arr.length)
 * @return the element at the given index
 * 
 * Preconditions:
 * - arr is not null
 * - index is between 0 and arr.length - 1, inclusive
 */
public int getElement(int[] arr, int index) {
    return arr[index];
}
```

**Important:** The method typically does **not** check that preconditions are satisfied. It assumes they are true. Checking preconditions would add overhead and is not required by the specification.



### Postconditions

A **postcondition** is a condition that must always be true **after** a method executes. Postconditions describe the outcome of the method in terms of:
- What value is returned (if any)
- How the state of the object has changed

#### Examples of Postconditions

```java
/**
 * Deposits money into a bank account.
 * 
 * @param amount the amount to deposit (must be positive)
 * @return the new balance after deposit
 * 
 * Postcondition: The account balance has increased by amount
 */
public double deposit(double amount) {
    balance += amount;
    return balance;
}
```

```java
/**
 * Sets the student's grade.
 * 
 * @param newGrade the new grade (0-100)
 * 
 * Postcondition: The student's grade is set to newGrade
 */
public void setGrade(int newGrade) {
    this.grade = newGrade;
}
```

#### Postconditions vs Return Values

A postcondition is broader than just the return value. It describes the overall effect of the method:

| Method Type | Postcondition Includes |
|-------------|------------------------|
| Non-void method | Return value + any state changes |
| void method | State changes only |
| Constructor | Initialized object state |



### Preconditions and Postconditions Together

These two concepts work together to define a method's contract:

| Before Method Call | After Method Call |
|--------------------|-------------------|
| **Preconditions** must be true | **Postconditions** will be true |
| Caller's responsibility | Method's responsibility |
| Assumptions the method makes | Guarantees the method provides |

#### Complete Example

```java
/**
 * Withdraws money from a bank account.
 * 
 * @param amount the amount to withdraw (must be positive)
 * @return the new balance after withdrawal
 * 
 * Precondition: amount > 0 AND balance >= amount
 * 
 * Postcondition: balance has decreased by amount
 *                The returned value equals the new balance
 */
public double withdraw(double amount) {
    balance -= amount;
    return balance;
}
```

**What this tells us:**
- Before calling: amount must be positive, and there must be enough money in the account
- After calling: balance is reduced, and the return value reflects the new balance



### Why Comments Matter for the AP Exam

On the AP exam, you will encounter code with comments that:
- Describe what a method does
- Specify preconditions and postconditions
- Provide documentation for classes and methods

You need to be able to:
- Read and understand these comments
- Write code that satisfies given preconditions
- Ensure your methods meet their postconditions
- Add appropriate comments to your own code

---

### Key Terminology for Topic 1.8

| Term | Definition |
|------|------------|
| **Comment** | Text in code that is ignored by the compiler; written for humans |
| **Single-line comment `//`** | Comment that begins with `//` and continues to the end of the line |
| **Multi-line comment `/* */`** | Comment that spans multiple lines between `/*` and `*/` |
| **Javadoc comment `/** */`** | Special comment used to generate API documentation |
| **Precondition** | Condition that must be true before a method is called for it to work correctly |
| **Postcondition** | Condition that must be true after a method executes |
| **Method contract** | The combination of preconditions and postconditions that define a method's behavior |

---

### AP Exam Tips

**What you need to know for the exam:**

- **Comment syntax:** Recognize all three comment types and know their purposes.

- **Preconditions:** Given a method description, identify what must be true before calling it. These are often tested in multiple-choice questions.

- **Postconditions:** Given a method, determine what will be true after it executes. This includes return values and changes to object state.

- **Reading documentation:** Exam questions will include comments that describe methods. You must use that information to write correct code.

- **No execution impact:** Remember that comments don't affect program behavior. A program with or without comments runs exactly the same way.

- **Javadoc recognition:** You don't need to write Javadoc, but you should recognize it and understand its purpose.



### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Comments make my program run faster/slower." | Comments have zero effect on execution. |
| "More comments are always better." | Too many obvious comments can clutter code. Comment why, not what. |
| "Preconditions are checked by the method." | No, the caller is responsible for ensuring preconditions are met. |
| "Postconditions only describe return values." | Postconditions describe all outcomes, including state changes. |
| "Comments are just for beginners." | Professional codebases rely heavily on good documentation. |
| "Javadoc is just a fancy comment." | Javadoc can be extracted to create official API documentation. |



### Quick Reference: When to Use Each Comment Type

| Comment Type | Syntax | Best Used For |
|--------------|--------|---------------|
| Single-line | `// text` | Brief explanations, line-specific notes |
| Multi-line | `/* text */` | Longer descriptions, temporarily disabling blocks |
| Javadoc | `/** text */` | Documenting classes and methods for API generation |
