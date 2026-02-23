### 1.1: Introduction to Algorithms, Programming, and Compilers

### What is an Algorithm?

An **algorithm** is a step-by-step process to follow when completing a task or solving a problem.

Every day, you follow algorithms without realizing it:
- A recipe for baking a cake
- Directions to get to a friend's house
- Instructions for assembling furniture
- The process of logging into your email

**Key Point:** Algorithms exist independently of computers. You can describe an algorithm using written language, diagrams, or even pictures—no programming required.

#### Example: Algorithm for Making a Peanut Butter Sandwich

- Get two slices of bread
- Open the peanut butter jar
- Use a knife to scoop peanut butter
- Spread peanut butter on one slice
- Place the other slice on top
- Close the jar

### The Building Blocks: Sequencing

**Sequencing** defines the order in which steps of an algorithm are completed. Steps happen **one at a time**, in a specific sequence.

In the sandwich algorithm above, you cannot "place the other slice on top" before you have "spread peanut butter on one slice." The order matters.

**Why sequencing matters in programming:**
- Statements execute one after another, from top to bottom
- Changing the order changes the result
- Some statements depend on previous statements having run first

### From Algorithm to Program

An algorithm becomes a **program** when you write it in a language a computer can understand—in our case, Java.

The journey from idea to running program:

| Step | What Happens |
|------|--------------|
| **Think** | Design the algorithm (using words or diagrams) |
| **Write** | Type the code in an editor |
| **Compile** | The compiler translates your code into something the computer can execute |
| **Run** | The computer executes your program |

### Writing Code: Tools of the Trade

You can write Java code in any text editor (like Notepad), but most programmers use an **Integrated Development Environment (IDE)**.

**What an IDE provides:**
- Syntax highlighting (colors different parts of your code)
- Auto-completion (suggests what to type next)
- One-click compiling and running
- Debugging tools to find errors
- Project organization

**Examples of free IDEs:** Eclipse, IntelliJ IDEA Community Edition, BlueJ, jGRASP, Apache NetBeans

### The Compiler: Your First Line of Defense

A **compiler** is a special program that:
1. Reads your Java code
2. Checks it for certain types of errors
3. Translates it into bytecode that the Java Virtual Machine (JVM) can run

**Important:** If the compiler finds errors, it stops. You **must** fix these errors before you can run your program.

Think of the compiler as a strict grammar teacher. If you write a sentence with bad grammar, the teacher won't understand you until you fix it.

### Types of Programming Errors

Understanding errors is crucial. The AP exam will ask you to identify different error types.

#### Error Type 1: Syntax Error

A **syntax error** occurs when you don't follow the rules (syntax) of the Java language.

**Analogy:** In English, "I am go store" is a syntax error—the grammar is wrong even though we might guess the meaning.

**Examples in Java:**
- Forgetting a semicolon at the end of a statement: `System.out.println("Hello")` (missing `;`)
- Misspelling a keyword: `publlic class MyClass`
- Mismatched braces: `{ ... ` (missing closing brace)
- Using a variable before declaring it

**Key Fact:** Syntax errors are detected by the **compiler**. The program won't even compile until you fix them.

#### Error Type 2: Logic Error

A **logic error** occurs when your program runs but produces the wrong result. The code is syntactically correct, but your algorithm has a mistake.

**Analogy:** You follow a recipe exactly, but the recipe itself is wrong—the cake comes out burnt because the temperature should have been 350°F, not 500°F.

**Examples in Java:**
- Using `+` when you meant `*` in a calculation
- Checking `if (score = 100)` instead of `if (score == 100)`
- A loop that runs one too many times (off-by-one error)

**Key Fact:** Logic errors are **not** detected by the compiler. You find them by **testing** your program with different inputs and comparing the output to what you expected.

#### Error Type 3: Run-Time Error

A **run-time error** occurs during program execution and causes the program to terminate abnormally (crash).

**Analogy:** You're driving and suddenly hit a wall—the journey was going fine until that moment.

**Examples in Java:**
- Dividing by zero: `int x = 10 / 0;`
- Accessing an array element that doesn't exist: `arr[10]` when the array only has 5 elements
- Trying to use an object that hasn't been created: calling a method on `null`

#### Special Case: Exceptions

An **exception** is a specific type of run-time error. It's Java's way of saying "something unexpected happened, and I don't know how to continue."

When an exception occurs:
- The normal flow of the program is interrupted
- Java creates an exception object describing what went wrong
- Unless your code "catches" the exception, the program crashes

**Examples of exceptions you'll see:**
- `ArithmeticException` (dividing by zero)
- `NullPointerException` (calling a method on `null`)
- `ArrayIndexOutOfBoundsException` (accessing an invalid index)


### Error Type Comparison Table

| Error Type | Detected By | When It Happens | Program Runs? |
|------------|-------------|-----------------|---------------|
| **Syntax Error** | Compiler | During compilation | No |
| **Logic Error** | Testing | During execution (but produces wrong output) | Yes (but wrong) |
| **Run-Time Error** | JVM | During execution | Crashes |


### Visualizing the Process

```
┌─────────────────┐
│  You write code │
│  in an IDE      │
└────────┬────────┘
         ↓
┌─────────────────┐
│  Compiler       │
│  checks syntax  │
└────────┬────────┘
         ↓
    ┌────┴────┐
    ↓         ↓
 Has      Has
Errors?  No Errors?
    ↓         ↓
┌────────┐ ┌──────────────┐
│ Fix    │ │ Program runs │
│ errors │ └──────┬───────┘
└────────┘        ↓
              ┌────┴────┐
              ↓         ↓
          Logic     Run-Time
          Error?    Error?
              ↓         ↓
          ┌────────┐ ┌────────┐
          │ Wrong  │ │ Crash  │
          │ output │ │        │
          └────────┘ └────────┘
```


### Key Terminology for Topic 1.1

| Term | Definition |
|------|------------|
| **Algorithm** | A step-by-step process to complete a task or solve a problem |
| **Sequencing** | The order in which steps are completed (one at a time) |
| **Program** | An algorithm written in a programming language |
| **IDE** | Integrated Development Environment—software that helps you write, compile, and run code |
| **Compiler** | A program that translates your code and checks for syntax errors |
| **Syntax Error** | A mistake where the rules of the programming language are not followed |
| **Logic Error** | A mistake in the algorithm that causes incorrect behavior or output |
| **Run-Time Error** | An error that occurs during program execution, causing abnormal termination |
| **Exception** | A type of run-time error that interrupts normal program flow |

### AP Exam Tips

**What you need to know for the exam:**

- **Algorithm recognition:** Be able to identify whether a description is an algorithm and recognize sequencing.

- **Error identification:** Given a description of a problem, identify which type of error occurred.
  - *"The program won't compile"* → **Syntax error**
  - *"The program runs but gives wrong answers"* → **Logic error**
  - *"The program crashes when I enter 0"* → **Run-time error**

- **Compiler role:** Remember that the compiler only catches syntax errors. It cannot find logic errors.

- **IDE knowledge:** You don't need to know specific IDEs, but understand what an IDE provides.

- **Exception awareness:** Know that exceptions are run-time errors and that common ones have specific names (`ArithmeticException`, `NullPointerException`).


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "The compiler finds all my errors." | The compiler only finds syntax errors. Logic errors and run-time errors slip through. |
| "If my program runs, it's correct." | Running doesn't mean correct. It could have logic errors producing wrong output. |
| "Syntax errors mean I'm bad at programming." | Everyone makes syntax errors. Even experienced programmers forget semicolons. |
| "An exception is different from a run-time error." | An exception *is* a type of run-time error. |
| "Algorithms are the same as code." | Algorithms are the *idea*; code is the *implementation*. The same algorithm can be written in many programming languages. |