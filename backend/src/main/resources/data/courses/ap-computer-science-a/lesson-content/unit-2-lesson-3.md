### if Statements

### What is an if Statement?

An **if statement** is a selection statement that changes the flow of control by executing different segments of code based on the value of a Boolean expression. Without selection, programs execute sequentially—every statement runs in order. With if statements, you can make decisions: some code runs, other code doesn't, depending on conditions.

**Real-World Analogy:** Think of an if statement as a fork in the road:
- If the condition is true, you take one path.
- If the condition is false, you either take a different path or stay where you are.
- You don't travel both paths simultaneously.

In programming, this allows your program to react to different inputs, states, or situations.

### The Anatomy of an if Statement

Every if statement has the same basic structure:

```
if (condition) {
    // statements to execute when condition is true
}
```

- The keyword `if` must be lowercase.
- The **condition** must be enclosed in parentheses `( )`. This condition must evaluate to a `boolean` value (`true` or `false`).
- The **body** of the if statement is a block of code enclosed in braces `{ }`. The body can contain zero, one, or multiple statements.
- There is **no semicolon** after the parentheses. A semicolon would end the if statement, leaving an empty body.

### One-Way if Statements (if without else)

A **one-way if statement** executes its body only when the Boolean expression is `true`. If the expression is `false`, the body is skipped entirely, and execution continues with the next statement after the if block.

**Syntax:**
```java
if (booleanExpression) {
    // statements to execute when true
}
// execution continues here
```

**Example 1: Basic one-way if**
```java
int temperature = 30;

if (temperature > 25) {
    System.out.println("It's hot outside!");
    System.out.println("Remember to stay hydrated.");
}
// This line always executes
System.out.println("Done checking temperature.");
```

If `temperature` is 30, both print statements inside the if execute, then "Done checking temperature." If `temperature` is 20, the if block is skipped entirely, and only "Done checking temperature." prints.

**Example 2: One-way if with a single statement (braces optional but recommended)**
```java
if (score >= 90)
    System.out.println("Excellent!"); // Only this line is conditional
System.out.println("Always prints.");
```

Here, only the first `println` is inside the if. The second always runs. Without braces, only the immediately following statement is conditional.

**Best Practice:** Always use braces `{}` even for single statements to avoid errors and improve readability.

### Two-Way if-else Statements

A **two-way if-else statement** provides two mutually exclusive paths: one block executes when the condition is `true`, a different block executes when the condition is `false`. Exactly one of the blocks will execute.

**Syntax:**
```java
if (booleanExpression) {
    // statements for true case
} else {
    // statements for false case
}
```

**Example 1: Basic if-else**
```java
int number = 7;

if (number % 2 == 0) {
    System.out.println(number + " is even.");
} else {
    System.out.println(number + " is odd.");
}
```

**Example 2: if-else with multiple statements**
```java
double balance = 100.0;
double withdrawal = 150.0;

if (withdrawal <= balance) {
    balance -= withdrawal;
    System.out.println("Withdrawal successful. New balance: " + balance);
} else {
    System.out.println("Insufficient funds. Current balance: " + balance);
}
```

**Flow of Control:**
- The condition is evaluated.
- If `true`, the `if` block runs, then control jumps to the statement after the entire if-else construct.
- If `false`, the `else` block runs, then control continues after the construct.

### Multi-Way if-else-if Statements

When you need to choose among multiple options, you can chain `if-else` statements together to form an **if-else-if ladder**.

**Syntax:**
```java
if (condition1) {
    // executes if condition1 is true
} else if (condition2) {
    // executes if condition1 is false and condition2 is true
} else if (condition3) {
    // executes if condition1 and condition2 are false and condition3 is true
} else {
    // executes if all conditions are false (optional)
}
```

**How It Works:**
1. Conditions are evaluated from top to bottom.
2. The **first** condition that evaluates to `true` has its block executed.
3. After that block finishes, the entire chain is exited—no further conditions are checked.
4. If none of the conditions are `true` and there is an `else` block, that block executes.
5. If there is no `else` and no condition is `true`, nothing in the chain executes.

**Example: Letter Grade Assignment**
```java
int score = 87;
String grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

System.out.println("Grade: " + grade); // Grade: B
```

**Why this works:** For `score = 87`, the first condition (`score >= 90`) is false, so it moves to the next. The second condition (`score >= 80`) is true, so `grade = "B"` executes, and the rest are skipped.

**Common Mistake: Using Separate if Statements Instead of if-else-if**
```java
// WRONG - multiple separate ifs
if (score >= 90) grade = "A";
if (score >= 80) grade = "B";  // This will ALSO execute when score >= 90!
if (score >= 70) grade = "C";
if (score >= 60) grade = "D";
```
With `score = 95`, all four conditions are true, and `grade` would end up as "D"! The if-else-if chain ensures only the first matching condition executes.

### The Importance of Braces

Braces `{}` define a **block** of code. In if statements, they group multiple statements together so they all belong to the same branch.

**Without braces, only the first statement is part of the if/else.**
```java
int x = 5;
if (x > 0)
    System.out.println("Positive"); // conditional
    System.out.println("Always prints"); // NOT conditional!
```

**With braces, the entire block is conditional.**
```java
if (x > 0) {
    System.out.println("Positive");
    System.out.println("Also conditional");
}
```

**Why always use braces?**
- **Clarity:** It's immediately clear which statements belong to the if.
- **Maintainability:** If you later add a statement, you won't accidentally leave it outside the if.
- **Safety:** Avoids subtle bugs caused by misleading indentation.

### Nested if Statements

An if statement can contain another if statement inside its body. This is called **nesting**. Nesting allows for more complex decision-making.

**Example: Determining admission with multiple criteria**
```java
int age = 20;
boolean hasID = true;

if (age >= 18) {
    if (hasID) {
        System.out.println("You may enter.");
    } else {
        System.out.println("You need an ID.");
    }
} else {
    System.out.println("You are too young.");
}
```

**How it works:** The outer if checks age. Only if age >= 18 does the inner if-else execute.

**Nested if-else-if:** You can nest any form inside any other.

**Important:** Each `else` attaches to the nearest preceding `if` that hasn't already been paired. This is known as the **dangling else** problem.

#### The Dangling Else Problem

Consider this code:
```java
if (a > 0)
    if (b > 0)
        System.out.println("Both positive");
else
    System.out.println("a is not positive");
```

Indentation suggests the `else` belongs to the outer `if`, but Java actually attaches it to the inner `if`. So the message "a is not positive" prints when `a > 0` is true but `b > 0` is false—not what the indentation implies.

**Solution:** Always use braces to clarify your intent.
```java
if (a > 0) {
    if (b > 0) {
        System.out.println("Both positive");
    }
} else {
    System.out.println("a is not positive");
}
```

### Boolean Expressions as Conditions

The condition in an if statement must be a **boolean expression**—something that evaluates to `true` or `false`.

**Valid conditions:**
```java
if (count > 0)                 // relational expression
if (isRaining)                 // boolean variable
if (name.equals("Alice"))      // method that returns boolean
if (found && !processed)       // compound Boolean expression (Topic 2.5)
```

**Invalid conditions:**
```java
if (count)                     // ERROR: count is int, not boolean
if (name = "Alice")            // ERROR: assignment, not comparison
if (50)                        // ERROR: not a boolean
```

Java does **not** treat non-zero numbers as `true` like some languages. You must write explicit comparisons.

### Common Patterns and Best Practices

#### 1. Checking for Valid Input
```java
int value = getUserInput();
if (value >= 0 && value <= 100) {
    System.out.println("Valid input");
} else {
    System.out.println("Invalid input");
}
```

#### 2. Guard Clauses (Early Exit)
Use an if statement at the beginning of a method to handle exceptional cases and return early, avoiding deeply nested code.
```java
public void process(Student s) {
    if (s == null) {
        System.out.println("No student provided");
        return; // exit method immediately
    }
    // rest of method assumes s is not null
    System.out.println(s.getName());
}
```

#### 3. Using Boolean Flags
```java
boolean found = false;
for (int num : numbers) {
    if (num == target) {
        found = true;
        break;
    }
}
if (found) {
    System.out.println("Target found");
} else {
    System.out.println("Target not found");
}
```

#### 4. Avoiding Empty if Blocks
An if block with no statements is legal but usually indicates a logic error.
```java
if (condition) {
    // nothing here
} else {
    // do something
}
```
This is confusing—consider reversing the condition.

#### 5. Comparing Objects
Always use `.equals()` for String content comparison, not `==`.
```java
String userInput = "yes";
if (userInput.equals("yes")) {  // correct
    // ...
}
```

### Common Errors and How to Fix Them

| Error | Example | Fix |
|-------|---------|-----|
| Using `=` instead of `==` | `if (x = 5)` | Use `==` for comparison. |
| Missing parentheses | `if x > 5` | `if (x > 5)` |
| Semicolon after condition | `if (x > 5);` | Remove semicolon. |
| Forgetting braces for multiple statements | `if (x>5) y=10; z=20;` | Use braces: `if (x>5) { y=10; z=20; }` |
| Confusing `if-else-if` with separate `if`s | Multiple `if`s that overlap | Use `else if` chain. |
| Dangling else | Improper indentation without braces | Always use braces. |

### Tracing if Statements on the AP Exam

You will be asked to determine the output of code segments containing if statements. Follow these steps:

1. Identify all variables and their initial values.
2. Evaluate the condition in the if statement.
3. If true, execute the if block; if false, skip it (or execute else block).
4. Continue with the next statement after the if construct.
5. For if-else-if, stop at the first true condition.

**Example:**
```java
int a = 5, b = 3;
if (a > b) {
    System.out.println("A");
} else if (a == b) {
    System.out.println("B");
} else {
    System.out.println("C");
}
System.out.println("D");
```
- Condition `a > b` is true → prints "A", then skips the rest.
- Then prints "D".
Output:
```
A
D
```

### Key Terminology for Topic 2.3

| Term | Definition |
|------|------------|
| **if statement** | A selection statement that executes code based on a Boolean condition. |
| **One-way selection** | An if statement with no else part—code executes only if condition is true. |
| **Two-way selection** | An if-else statement—one block for true, another for false. |
| **Multi-way selection** | An if-else-if chain that selects among multiple options. |
| **Nested if** | An if statement inside another if statement. |
| **Block** | A group of statements enclosed in braces `{}`. |
| **Dangling else** | Ambiguity in nested ifs where an else could attach to multiple ifs. |

### AP Exam Tips

- **Syntax is critical:** Know that the condition must be in parentheses, no semicolon, and braces are optional but recommended.
- **if-else-if chains:** Only the first true condition executes. This is a frequent multiple-choice topic.
- **Braces vs no braces:** Be able to identify which statements are inside the if when braces are omitted.
- **Boolean expressions:** Conditions must be boolean; know common mistakes like using `=` instead of `==`.
- **Tracing:** Practice tracing through nested ifs and if-else-if ladders.
- **Dangling else:** Understand that an `else` attaches to the nearest `if`. Braces prevent ambiguity.

### Quick Reference: if Statement Forms

| Form | Syntax | Use Case |
|------|--------|----------|
| One-way | `if (cond) { }` | Execute or skip |
| Two-way | `if (cond) { } else { }` | Choose between two paths |
| Multi-way | `if (c1) { } else if (c2) { } else { }` | Choose among multiple paths |
| Nested | `if (c1) { if (c2) { } }` | Complex conditions |