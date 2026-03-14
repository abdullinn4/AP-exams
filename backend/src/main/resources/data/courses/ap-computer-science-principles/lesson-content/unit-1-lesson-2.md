## Making It Work - Program Purpose, Input/Output & Debugging

So you've got a team, you've got a design, and you're ready to build something awesome. But before you start cranking out code, you need to understand the fundamental question: **what is your program actually supposed to DO?** And when things inevitably go wrong (because they always do), how do you find and fix the problems?

This module is all about the guts of a program: what it takes in, what it spits out, how it behaves, and—most importantly—how to debug it when it misbehaves. By the end, you'll be able to look at any program and answer: what's its purpose? What are its inputs and outputs? And if it breaks, where do you even start looking?


## Program Function & Purpose – What Does This Thing Actually Do?

### Why Does This Program Exist?

Every program has a **purpose**. That purpose is either to **solve a problem** or to **pursue interests through creative expression**. Think about the apps on your phone:

- Google Maps solves the problem of getting lost.
- TikTok pursues creative expression (and endless scrolling).
- A calculator app solves math problems.
- A drawing app lets you express yourself artistically.

Understanding the purpose is crucial because it guides every decision you make while building it. If you don't know *why* you're building something, how will you know if you've succeeded?

### Programs and Code Segments

A **program** is a collection of program statements that performs a specific task when run by a computer. You can think of it as a recipe: a list of instructions that, when followed in order, produce a dish. A **code segment** is just a chunk of that recipe—a few lines that do one small thing, like "chop the onions" or "preheat the oven."

Here's a simple example in AP CSP pseudocode:

```
DISPLAY("What's your name?")
name ← INPUT()
DISPLAY("Hello, ")
DISPLAY(name)
```

This tiny program has a purpose: greet the user by name. It's made up of three statements (two DISPLAY and one INPUT). Each statement is a code segment.

### Program Behavior

The **behavior** of a program is how it acts during execution—what the user experiences. It's often described by how a user interacts with it. For the program above, the behavior is: it asks for a name, waits for you to type something, then says hello.

Programs need to work for a **variety of inputs and situations**. What if the user types nothing? What if they type a number? A good program handles all of that gracefully.

You can describe a program at two levels:
- **Broadly**: "It's a greeting program."
- **In detail**: "It prompts the user for their name, reads the input, and then displays a personalized greeting. If the user enters an empty name, it displays 'Hello, stranger!' instead."

### Inputs: Where Data Comes From

**Inputs** are data sent to a computer for processing. They can come in many forms:

```
┌─────────────────────────────────────────────┐
│              TYPES OF INPUT                  │
├───────────────┬─────────────────────────────┤
│   Tactile     │ Touchscreen taps, button presses │
│   Audio       │ Voice commands, microphone   │
│   Visual      │ Camera, barcode scanner      │
│   Text        │ Keyboard typing, files       │
└───────────────┴─────────────────────────────┘
```

Inputs usually affect the output. In our greeting program, the name you type (input) determines what "Hello, ..." says (output).

**Events** are a special kind of input. An event is associated with an action—like clicking a button, pressing a key, moving a mouse, or even the program starting. When an event occurs, it can trigger code to run. This is called **event-driven programming**.

Imagine a mobile app with a "Submit" button. When the user taps it, a `buttonClick` event happens, and the program runs the code attached to that event. The flow isn't sequential from top to bottom; it's driven by what the user does.

Here's a visual of event-driven flow:

```
        ┌─────────────────┐
        │  Program starts │───(start event)───► Run setup code
        └─────────────────┘
                 │
                 ▼
        ┌─────────────────┐
        │   User taps     │───(click event)────► Run click handler
        │   "Submit"      │
        └─────────────────┘
                 │
                 ▼
        ┌─────────────────┐
        │   Key pressed   │───(key event)──────► Run key handler
        └─────────────────┘
```

Inputs can come from users or from other programs. For example, a weather app might get input from an online data stream (another program) rather than the user typing.

### Outputs: What Comes Out

**Outputs** are any data sent from a program to a device. Like inputs, they come in many forms:

```
┌─────────────────────────────────────────────┐
│              TYPES OF OUTPUT                 │
├───────────────┬─────────────────────────────┤
│   Tactile     │ Vibration (phone buzz)       │
│   Audio       │ Sound, music, speech         │
│   Visual      │ Screen display, images       │
│   Text        │ Printed text, messages       │
│   Movement    │ Robot moving, motors         │
└───────────────┴─────────────────────────────┘
```

Output is usually based on the program's input or its **prior state**—values stored in variables from earlier calculations. In our greeting program, the output ("Hello, Alex") depends on the input ("Alex").


## When Things Go Wrong – Identifying and Correcting Errors

No matter how careful you are, bugs happen. The best programmers aren't the ones who write perfect code the first time—they're the ones who are really good at **finding and fixing mistakes**.

### The Four Types of Errors

The AP CSP exam expects you to know four categories of errors:

| Error Type | What It Is | Example |
|------------|------------|---------|
| **Syntax error** | Breaking the grammar rules of the programming language | Forgetting a closing parenthesis: `DISPLAY("Hello` |
| **Logic error** | The program runs but does the wrong thing | Writing `average = total / count` but count is zero, so you get an error—actually that's runtime. Better: `IF count > 0 THEN average = total / count ELSE average = 0` – but if you forget the check, it's logic? Wait, division by zero is runtime. Let's define clearly: |
| **Run-time error** | An error that occurs during execution, like dividing by zero or trying to access an invalid list index | `aList[10]` when the list has only 5 items |
| **Overflow error** | A number is too large for the computer to represent | Trying to store a number bigger than 2,147,483,647 in a 32-bit integer |

Let's clarify with a diagram:

```
                    ┌────────────────────┐
                    │   YOUR CODE        │
                    └────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────┐
│              COMPILER / INTERPRETER              │
│  Checks if code follows language rules          │
│  ┌─────────────────────────────────────────┐    │
│  │  SYNTAX ERRORS caught here              │    │
│  │  Example: missing semicolon, unmatched  │    │
│  │  parentheses, misspelled keyword        │    │
│  └─────────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────┐
│                 PROGRAM RUNS                      │
│  ┌─────────────────────────────────────────┐    │
│  │  RUN-TIME ERRORS happen here            │    │
│  │  Example: division by zero, index out   │    │
│  │  of bounds, trying to open a file that  │    │
│  │  doesn't exist                          │    │
│  └─────────────────────────────────────────┘    │
│                                                   │
│  ┌─────────────────────────────────────────┐    │
│  │  LOGIC ERRORS: program runs but gives   │    │
│  │  wrong answer. No error message—just   │    │
│  │  incorrect behavior.                    │    │
│  │  Example: using `>` instead of `<` in a  │    │
│  │  comparison, off-by-one loop            │    │
│  └─────────────────────────────────────────┘    │
│                                                   │
│  ┌─────────────────────────────────────────┐    │
│  │  OVERFLOW ERRORS: number too big/small  │    │
│  │  for storage. Can be run-time or        │    │
│  │  logic depending on language.           │    │
│  │  Example: adding 1 to the largest       │    │
│  │  possible integer wraps to negative     │    │
│  └─────────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
```

**Real-life example: The Ariane 5 rocket disaster** – In 1996, the Ariane 5 rocket exploded 40 seconds after launch. The cause? An **overflow error**. A sensor was measuring horizontal velocity, and the number was too big for the 16-bit space allocated. The computer crashed, and the rocket self-destructed. Cost: $370 million. That's why overflow matters.

### How to Find and Fix Errors

The CED lists five effective ways to track down bugs:

1. **Test cases** – Run your program with specific inputs and check if the outputs match what you expect.
2. **Hand tracing** – Pretend you're the computer. Walk through your code line by line, keeping track of variable values on paper.
3. **Visualizations** – Use tools that show you what's happening, like a debugger that highlights the current line or a diagram of data structures.
4. **Debuggers** – Special tools that let you pause your program, inspect variables, and step through code one line at a time.
5. **Adding extra output statements** – Temporarily add `DISPLAY` statements to print out variable values at key points. This is like putting a tracer on your data.

Let's see hand tracing in action with a simple algorithm that's supposed to find the largest number in a list:

```
PROCEDURE findMax(numbers)
{
    maxSoFar ← 0
    FOR EACH num IN numbers
    {
        IF (num > maxSoFar)
        {
            maxSoFar ← num
        }
    }
    RETURN maxSoFar
}
```

Suppose we call `findMax([-5, -2, -10])`. Let's hand trace:

```
┌──────────┬───────────┬────────────┬──────────────┐
│ Step     │ num       │ maxSoFar   │ Condition    │
├──────────┼───────────┼────────────┼──────────────┤
│ Start    │           │ 0          │              │
│ Iter 1   │ -5        │ 0          │ -5 > 0? false│
│ Iter 2   │ -2        │ 0          │ -2 > 0? false│
│ Iter 3   │ -10       │ 0          │ -10 > 0? false│
│ End      │           │ 0          │              │
└──────────┴───────────┴────────────┴──────────────┘
```

The function returns 0, but the correct maximum is -2! Aha! The problem is initializing `maxSoFar` to 0—if all numbers are negative, 0 is never replaced. We should initialize to the first element instead. That's a **logic error** uncovered by hand tracing.

### Testing: Proving It Works (or Finding Where It Doesn't)

Testing is the process of running your program with **defined inputs** to see if it produces the expected outputs. Programmers use the results to revise their code.

The key to good testing is choosing inputs that cover different scenarios:

- **Normal cases** – Typical inputs you expect users to provide.
- **Edge cases** – Inputs at the boundaries of what's allowed. For a function that takes a positive integer, test 1, 0, and maybe a huge number.
- **Invalid cases** – Inputs that should be rejected or handled gracefully.

Here's a testing strategy table for a function that divides two numbers:

```
┌─────────────────────────────────────────────────────────┐
│              TEST CASES FOR DIVIDE(a, b)                │
├──────────────┬──────────────┬──────────────┬────────────┤
│ Test type    │ Input (a, b) │ Expected out │ Why?       │
├──────────────┼──────────────┼──────────────┼────────────┤
│ Normal       │ (10, 2)      │ 5            │ Basic case │
│ Normal       │ (7, 3)       │ 2.333...     │ Non-int    │
│ Edge         │ (5, 1)       │ 5            │ Divide by 1│
│ Edge         │ (0, 5)       │ 0            │ Zero       │
│ Edge         │ (5, 0)       │ Error        │ Division   │
│              │              │              │ by zero    │
│ Edge         │ (-10, 2)     │ -5           │ Negative   │
└──────────────┴──────────────┴──────────────┴────────────┘
```

The **program requirements** tell you what the expected outputs should be. Without requirements, you don't know what "correct" means.

**Boundary values** are especially important. If a program asks for a number between 1 and 10, test 1, 10, 0, and 11. Bugs often lurk at the edges.


## Putting It All Together: A Complete Example

Let's imagine you're building a simple program that asks the user for their age and tells them if they're old enough to drive (16 in most US states). We'll walk through the purpose, inputs, outputs, and testing.

**Purpose:** Solve the problem of determining driving eligibility.

**Program code (with comments):**

```
// Purpose: Check if user is old enough to drive
DISPLAY("Enter your age:")
age ← INPUT()
IF (age >= 16)
{
    DISPLAY("You are old enough to drive.")
}
ELSE
{
    DISPLAY("Sorry, you are not old enough to drive.")
}
```

**Input:** A number typed by the user (text input, converted to number).

**Output:** A message displayed on screen.

**Behavior:** If age is 16 or more, show the first message; otherwise, show the second.

**Testing:**

| Test case | Input | Expected output |
|-----------|-------|-----------------|
| Normal (just old enough) | 16 | "You are old enough to drive." |
| Normal (above) | 18 | same |
| Normal (below) | 15 | "Sorry, you are not old enough to drive." |
| Edge | 0 | second message |
| Edge | 200 | first message (maybe unrealistic but valid) |
| Invalid | -5 | should handle gracefully—maybe treat as invalid? Our current code would say "Sorry" which is true but odd. Better to validate input first. |

We could improve the program by checking for negative numbers or non-numeric input—that's where **error handling** comes in, which we'll cover more in later modules.


## Module 2 Summary

Let's recap what you've learned:

- Every program has a **purpose**: solve a problem or express creativity.
- Programs are made of **statements**; **code segments** are chunks of those statements.
- **Behavior** describes how the program acts during execution.
- **Inputs** come in many forms (tactile, audio, visual, text) and can be user actions (**events**) or data from other programs.
- **Outputs** also come in many forms and depend on inputs and program state.
- Errors come in four flavors: **syntax**, **logic**, **run-time**, and **overflow**.
- To find errors, use **test cases**, **hand tracing**, **visualizations**, **debuggers**, and **extra output statements**.
- Good testing covers **normal**, **edge**, and **invalid** cases, guided by the program's **requirements**.

Understanding these fundamentals will make you a better programmer and prepare you for the AP exam questions that ask you to predict output, identify errors, or explain program behavior.