### Recursion

### What is Recursion?

**Recursion** is a programming technique where a method calls itself to solve a problem by breaking it down into smaller, similar subproblems. A recursive method contains at least one **base case** that stops the recursion and at least one **recursive call** that continues the process with a simpler or smaller input.

**Real-World Analogy:** Imagine you are looking for a book in a large library. You might ask a librarian, who then asks another librarian, and so on, until someone knows where the book is. Each person delegates the task to someone else (recursive call) until reaching the person who has the answer (base case), and then the answer is passed back. This “delegation chain” is like recursion.

### Key Components of Recursive Methods

1. **Base Case:** A condition that stops the recursion. Without a base case, the method would call itself forever (infinite recursion), eventually causing a stack overflow.
2. **Recursive Call:** The method calling itself with a modified argument that moves toward the base case.
3. **Progress toward Base Case:** Each recursive call should bring the problem closer to the base case, ensuring termination.

#### Example: Factorial

The factorial of a non‑negative integer n (written n!) is defined as:
- 0! = 1 (base case)
- n! = n * (n‑1)! for n > 0 (recursive step)

```java
public static int factorial(int n) {
    if (n == 0) {               // base case
        return 1;
    } else {                     // recursive call
        return n * factorial(n - 1);
    }
}
```

**How it works for factorial(4):**
```
factorial(4) = 4 * factorial(3)
            = 4 * (3 * factorial(2))
            = 4 * (3 * (2 * factorial(1)))
            = 4 * (3 * (2 * (1 * factorial(0))))
            = 4 * (3 * (2 * (1 * 1)))
            = 4 * (3 * (2 * 1))
            = 4 * (3 * 2)
            = 4 * 6
            = 24
```

### How Recursion Uses the Call Stack

Each recursive call creates a new **activation record** (stack frame) on the call stack, containing local variables and the point to return to. When the base case is reached, the method returns, and the stack unwinds, passing results back up.

**Tracing factorial(3):**
```
Call stack grows:
factorial(3)
  factorial(2)
    factorial(1)
      factorial(0) → returns 1
    returns 1 * 1 = 1
  returns 2 * 1 = 2
returns 3 * 2 = 6
```

### Recursion vs. Iteration

Any recursive solution can be rewritten using iteration (loops) and vice versa. Recursion is often more natural for problems that have a recursive structure (e.g., tree traversal, mathematical definitions). Iteration is generally more efficient because it avoids the overhead of multiple method calls.

**Example: Factorial iteratively**
```java
public static int factorialIter(int n) {
    int result = 1;
    for (int i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
```

### Common Recursion Examples

#### Example 1: Sum of Natural Numbers

```java
public static int sum(int n) {
    if (n <= 0) {
        return 0;          // base case
    }
    return n + sum(n - 1);  // recursive call
}
```

#### Example 2: Power (xⁿ)

```java
public static int power(int x, int n) {
    if (n == 0) {
        return 1;          // base case
    }
    return x * power(x, n - 1);
}
```

#### Example 3: Fibonacci (naive)

```java
public static int fib(int n) {
    if (n <= 1) {
        return n;          // base cases: fib(0)=0, fib(1)=1
    }
    return fib(n - 1) + fib(n - 2);
}
```

**Note:** The naive Fibonacci is inefficient (exponential) but demonstrates recursion.

### Tracing Recursive Methods on the AP Exam

You will not be asked to write recursive code, but you must be able to **determine the result** of a recursive method call. To do this:
- Identify the base case(s).
- Simulate the recursive calls, perhaps by drawing a **call tree** or tracing step by step.
- Keep track of parameters and return values.

**Example: What does `mystery(5)` return?**
```java
public static int mystery(int n) {
    if (n < 2) {
        return 1;
    } else {
        return mystery(n - 1) + mystery(n - 2);
    }
}
```
This is essentially the Fibonacci function (but with base case 1). You can trace small values manually.

### Infinite Recursion and Stack Overflow

If a recursive method lacks a proper base case or does not make progress toward it, it will call itself indefinitely, eventually filling the call stack and throwing a **`StackOverflowError`**.

```java
public static void badRecursion() {
    badRecursion();   // no base case → infinite recursion
}
```

### Key Terminology for Topic 4.16

| Term | Definition |
|------|------------|
| **Recursion** | A technique where a method calls itself to solve a problem. |
| **Base case** | A condition that stops the recursion. |
| **Recursive call** | A call to the same method with different arguments. |
| **Call stack** | The data structure that stores information about active method calls. |
| **Stack overflow** | An error caused by using too much stack memory, often due to infinite recursion. |
| **Activation record** | A frame on the call stack containing a method's local variables and return address. |

### AP Exam Tips

- **Writing recursive code is NOT required** – The CED explicitly states that writing recursive code is outside the scope. You only need to determine the output or behavior of a given recursive method.
- **Focus on tracing:** Practice tracing simple recursive methods by hand. Draw a tree or use a table to keep track of calls and returns.
- **Identify base cases:** The base case(s) are the key to understanding when recursion stops.
- **Parameter values matter:** Each recursive call has its own set of local variables (including parameters). Changes to a parameter in one call do not affect other calls.
- **Any recursive solution can be iterative:** This relationship is good to know, but you won't be asked to convert.
- **Stack overflow:** Understand what causes infinite recursion and how it manifests.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Recursion is always slower than iteration." | Not necessarily; some problems are naturally recursive, and compilers can optimize tail recursion. But generally, iteration has less overhead. |
| "All recursive methods need a return statement." | Some recursive methods may be void, but they still need a base case to stop. |
| "Recursion uses the same variable for all calls." | Each call has its own copy of parameters and local variables. |
| "You can't have multiple recursive calls." | Many recursive methods (like Fibonacci) have two or more recursive calls. |
| "Recursion is only for mathematical problems." | Recursion is used in many areas: file system traversal, tree processing, backtracking, etc. |

### Quick Reference: Recursion Patterns

| Pattern | Structure | Example |
|---------|-----------|---------|
| Linear recursion | One recursive call per invocation | Factorial, sum |
| Binary recursion | Two recursive calls | Fibonacci |
| Tail recursion | Recursive call is the last operation | Some factorial implementations (not covered) |
