## Think Like a Programmer – Procedures & Libraries

Welcome back, code wranglers! You've come a long way. You can store data, calculate, make decisions, and repeat tasks. Your programs are getting smarter. But as they grow, they can also get messy. Imagine writing a 1000-line program where the same chunk of code appears over and over. Every time you need to change it, you have to find every copy and edit them all. Nightmare, right?

That's where **procedures** come in. They let you bundle code into reusable, named blocks. Think of them as your own custom commands. Want to draw a circle? Just call `drawCircle()`. Want to calculate the average? Call `average()`. You write the code once and use it everywhere.

And you don't have to write everything yourself. Other programmers have already solved countless problems and packaged their solutions into **libraries**. Need to generate a random number? There's a library for that. Need to process an image? Library. Need to connect to the internet? Library.

This module is about thinking like a real programmer: breaking problems into smaller pieces, reusing code, and standing on the shoulders of giants. By the end, you'll understand how to create your own procedures, how they make your code cleaner and more powerful, and how to use libraries to turbocharge your projects.

Here we go!


## What Are Procedures?

### The Problem: Repetition

Imagine you're writing a program that needs to calculate the area of a rectangle in five different places. Without procedures, you'd write:

```
area1 ← length1 * width1
area2 ← length2 * width2
area3 ← length3 * width3
area4 ← length4 * width4
area5 ← length5 * width5
```

Now suppose you realize the formula was wrong (maybe you need to multiply by 2 for some reason). You have to find and change all five lines. If you missed one, your program has a bug.

### The Solution: Procedures

A **procedure** is a named group of programming instructions that may have parameters and return values. You define it once, and then you can **call** it whenever you need that task done.

In AP CSP pseudocode, defining a procedure looks like this:

```
PROCEDURE rectangleArea(length, width)
{
    area ← length * width
    RETURN area
}
```

And calling it looks like this:

```
a ← rectangleArea(5, 3)   // a gets 15
b ← rectangleArea(7, 2)   // b gets 14
```

Now if you need to change the formula, you change it in **one place** – inside the procedure. All calls automatically use the new version.

### Why Procedures Matter

- **Reusability** – Write once, use many times.
- **Modularity** – Break big problems into small, manageable pieces.
- **Abstraction** – Hide complex details behind a simple name.
- **Maintainability** – Fix bugs or improve code in one place.
- **Readability** – Your code becomes self-documenting: `drawHouse()` is clearer than 50 lines of drawing commands.


## Anatomy of a Procedure

Let's dissect a procedure definition.

```
PROCEDURE procedureName(parameter1, parameter2, ...)
{
    <block of statements>
    RETURN(expression)   // optional
}
```

| Part | Explanation |
|------|-------------|
| `PROCEDURE` | Keyword that says "I'm defining a new procedure" |
| `procedureName` | The name you'll use to call it (choose something meaningful) |
| `(parameter1, parameter2, ...)` | Input variables that the procedure expects; they act like placeholders for the actual values you'll pass in |
| `{ ... }` | The body – the statements that do the work |
| `RETURN(expression)` | Optional. Sends a value back to the caller and exits the procedure |

### Example 1: A Simple Procedure with No Parameters

```
PROCEDURE sayHello()
{
    DISPLAY("Hello, world!")
}
```

Calling it: `sayHello()` displays "Hello, world!". No parameters, no return value.

### Example 2: Procedure with Parameters and Return

```
PROCEDURE double(n)
{
    result ← n * 2
    RETURN result
}
```

Calling it: `x ← double(5)` assigns 10 to `x`.

### Example 3: Procedure with Multiple Parameters

```
PROCEDURE power(base, exponent)
{
    result ← 1
    REPEAT exponent TIMES
    {
        result ← result * base
    }
    RETURN result
}
```

Calling it: `y ← power(2, 3)` returns 8.

### Parameters vs. Arguments

These two terms are often used interchangeably, but they have distinct meanings:

- **Parameters** are the variables listed in the procedure definition (the placeholders).
- **Arguments** are the actual values you pass when you call the procedure.

In `double(n)`, `n` is a parameter. In `double(5)`, `5` is an argument.

When you call `double(5)`, the argument 5 is assigned to the parameter `n` inside the procedure.


## Calling Procedures – How It Works

When you call a procedure, here's what happens:

1. The program pauses the current sequence of statements.
2. It copies the argument values into the procedure's parameters.
3. It jumps into the procedure body and executes the statements.
4. If there's a `RETURN`, it sends the value back and resumes where it left off.
5. If there's no `RETURN`, it just resumes after finishing the body.

```
┌─────────────────────────────────────────────────┐
│                PROCEDURE CALL FLOW               │
│                                                   │
│  Main program:                                    │
│   x ← 5                                           │
│   y ← double(x)   ───────────────────────────┐   │
│   DISPLAY(y)                                  │   │
│                                                │   │
│                                                ↓   │
│                                      ┌─────────────────┐
│                                      │ double(n)       │
│                                      │   result ← n*2  │
│                                      │   RETURN result │
│                                      └────────┬────────┘
│                                                │
│   (value 10 returned)  ◄──────────────────────┘   │
│                                                   │
│   DISPLAY(y)  (now y = 10)                        │
└─────────────────────────────────────────────────┘
```

### Built-in Procedures You Already Know

The exam reference sheet provides several built-in procedures:

- `DISPLAY(expression)` – outputs a value
- `INPUT()` – gets input from the user
- `RANDOM(a, b)` – returns a random integer
- `LENGTH(list)` – returns the number of elements
- `INSERT(list, i, value)`, `APPEND(list, value)`, `REMOVE(list, i)`

You've been using these all along – they're just procedures that someone else wrote for you!


## Procedural Abstraction – Managing Complexity

### What Is Procedural Abstraction?

**Procedural abstraction** is the idea of giving a name to a process so you can use it just by knowing **what** it does, not **how** it does it. It's like driving a car: you know that pressing the gas makes it go faster, but you don't need to understand the engine, fuel injection, or transmission. The gas pedal is an abstraction.

In programming, a procedure is an abstraction. When you call `rectangleArea(length, width)`, you don't need to think about multiplication – you just trust it works.

### How It Manages Complexity

1. **Hides Details** – You can focus on the big picture without getting lost in implementation.
2. **Breaks Down Problems** – A large problem can be divided into smaller subproblems, each solved by a procedure.
3. **Enables Reuse** – Once a procedure is written and tested, you can use it anywhere without rethinking the logic.
4. **Makes Code Readable** – Well-named procedures act as documentation.

**Example:** Building a house program.

Without abstraction:
```
DISPLAY("Dig foundation")
DISPLAY("Pour concrete")
DISPLAY("Frame walls")
DISPLAY("Install roof")
DISPLAY("Paint walls")
// ... hundreds of lines
```

With abstraction:
```
PROCEDURE buildFoundation() { ... }
PROCEDURE buildWalls() { ... }
PROCEDURE buildRoof() { ... }
PROCEDURE paintHouse() { ... }

buildFoundation()
buildWalls()
buildRoof()
paintHouse()
```

Which is easier to understand? The second version tells you at a glance what the program does. The details are hidden in the procedures – you can look at them later if you need to.

### Modularity

**Modularity** is the subdivision of a computer program into separate subprograms (modules). Each module has a specific responsibility. This makes programs easier to:
- Develop (multiple people can work on different modules)
- Test (test each module independently)
- Debug (if something breaks, you know which module to check)
- Maintain (change one module without affecting others)


## Parameters – Making Procedures Flexible

Without parameters, a procedure always does exactly the same thing. With parameters, it can work on different data.

### Why Parameters?

Compare:

```
PROCEDURE greetAlex()
{
    DISPLAY("Hello, Alex!")
}
```

This only works for Alex. You'd need a different procedure for every person.

With a parameter:

```
PROCEDURE greet(name)
{
    DISPLAY("Hello, " + name + "!")
}
```

Now you can greet anyone: `greet("Jordan")`, `greet("Taylor")`, `greet("Riley")`.

### Multiple Parameters

You can have as many parameters as you need.

```
PROCEDURE describePerson(name, age, city)
{
    DISPLAY(name + " is " + age + " years old and lives in " + city + ".")
}
```

Call: `describePerson("Alex", 16, "Austin")`  
Output: "Alex is 16 years old and lives in Austin."

### Parameters vs. Arguments – A Clear Analogy

Think of parameters as the blank fields on a form. The form says "Name: ______", "Age: ______". Those blanks are the parameters. When you actually fill out the form, you write "Alex" and "16" – those are the arguments.

### Default Assumptions

Parameters are assigned in order. The first argument goes to the first parameter, the second to the second, etc.

```
PROCEDURE test(a, b, c)
{
    DISPLAY(a)
    DISPLAY(b)
    DISPLAY(c)
}

test(10, 20, 30)   // displays 10, then 20, then 30
```


## Return Values – Getting Answers Back

Some procedures perform an action (like displaying something) and don't need to give back a value. Others compute something and need to send the result back to the caller. That's where `RETURN` comes in.

### RETURN Statement

`RETURN(expression)` does two things:
1. It immediately exits the procedure.
2. It sends the value of `expression` back to the caller.

**Example:**

```
PROCEDURE add(x, y)
{
    sum ← x + y
    RETURN sum
}

result ← add(3, 5)   // result gets 8
```

### Multiple Returns

You can have more than one `RETURN` in a procedure. The first one hit ends the procedure.

```
PROCEDURE absoluteValue(num)
{
    IF (num ≥ 0)
    {
        RETURN num
    }
    ELSE
    {
        RETURN -num
    }
}
```

### No Return

If a procedure doesn't have a `RETURN`, it's just for its side effects (like displaying output). You can still call it, but you can't assign its result to a variable.

```
PROCEDURE showSum(a, b)
{
    DISPLAY(a + b)
}

x ← showSum(3, 4)   // x gets ??? Actually, this would cause an error
                     // because showSum doesn't return a value.
```

### Return Anywhere

`RETURN` can appear anywhere inside the procedure, even in the middle of a loop or conditional.

```
PROCEDURE firstEven(list)
{
    i ← 1
    REPEAT UNTIL (i > LENGTH(list))
    {
        IF (list[i] MOD 2 = 0)
        {
            RETURN list[i]   // found an even, return it immediately
        }
        i ← i + 1
    }
    RETURN -1   // no even found
}
```



## Libraries – Standing on the Shoulders of Giants

### What Is a Library?

A **software library** is a collection of procedures that may be used in creating new programs. Libraries contain pre-written code that solves common problems, so you don't have to reinvent the wheel.

Think of it like a toolbox. Instead of forging your own hammer from raw iron, you grab one from the toolbox. It's already made, tested, and ready to use.

### Why Libraries Are Awesome

- **Save time** – Write less code.
- **Reliability** – Library code has been used and tested by thousands of developers.
- **Efficiency** – Libraries are often optimized for performance.
- **Focus** – You can concentrate on your unique problem instead of basic tasks.

### Examples of Libraries

- **Math library** – contains procedures like `sqrt()`, `sin()`, `log()`
- **Graphics library** – procedures for drawing shapes, images, animations
- **Networking library** – procedures for sending data over the internet
- **Date/time library** – procedures for working with calendars and clocks

In AP CSP, you won't need to use specific libraries, but you should understand the concept.

### APIs: The Library's Interface

**API** stands for Application Programming Interface. It's the specification for how the procedures in a library behave and how to use them. The API tells you:

- What procedures are available
- What parameters they take
- What they return
- Any special rules or limitations

For example, the API for a math library might say:

```
sqrt(x)   // returns the square root of x (x must be non-negative)
```

### Documentation

To use a library, you need its **documentation**. Good documentation includes:

- A list of all procedures
- Descriptions of what each does
- Parameter explanations
- Return values
- Examples

Without documentation, you'd have to guess how to use the library – not fun.

### Using Libraries in Pseudocode

In AP CSP pseudocode, you don't write library imports. But you can imagine calling library procedures like any other procedure. For example, if there were a math library, you might write:

```
root ← math_library_sqrt(25)   // would return 5
```

### Open Source and Creative Commons

Many libraries are **open source** – the code is freely available and can be modified and redistributed. Others may have licenses (like Creative Commons) that allow free use but with certain conditions. Always respect the license!


## Putting It All Together – A Complete Example

Let's build a program that uses procedures and a pretend library to analyze student grades.

```
// Assume we have a library called "stats" with these procedures:
//   stats_average(list)   - returns average
//   stats_max(list)       - returns maximum
//   stats_min(list)       - returns minimum

PROCEDURE analyzeGrades(grades)
{
    DISPLAY("Grade Analysis:")
    DISPLAY("Average: " + stats_average(grades))
    DISPLAY("Highest: " + stats_max(grades))
    DISPLAY("Lowest:  " + stats_min(grades))
    
    // Use our own procedure to assign letter grades
    letterGrades ← convertToLetters(grades)
    DISPLAY("Letter grades: ")
    DISPLAY(letterGrades)
}

PROCEDURE convertToLetters(grades)
{
    letters ← []
    i ← 1
    REPEAT UNTIL (i > LENGTH(grades))
    {
        grade ← grades[i]
        IF (grade ≥ 90)
        {
            APPEND(letters, "A")
        }
        ELSE IF (grade ≥ 80)
        {
            APPEND(letters, "B")
        }
        ELSE IF (grade ≥ 70)
        {
            APPEND(letters, "C")
        }
        ELSE IF (grade ≥ 60)
        {
            APPEND(letters, "D")
        }
        ELSE
        {
            APPEND(letters, "F")
        }
        i ← i + 1
    }
    RETURN letters
}

// Main program
myGrades ← [85, 92, 78, 90, 68]
CALL analyzeGrades(myGrades)
```

This program:
- Uses library procedures (`stats_average`, etc.) – we don't know how they work, just what they do.
- Defines its own procedures (`analyzeGrades`, `convertToLetters`).
- Passes parameters and uses return values.
- Shows procedural abstraction – the main program is short and clear.


## Common Mistakes and Best Practices

### Mistake 1: Forgetting to RETURN

```
PROCEDURE add(a, b)
{
    result ← a + b
    // forgot RETURN!
}

x ← add(3, 4)   // x gets ??? (probably nothing or error)
```

Always include `RETURN` if you expect a value back.

### Mistake 2: Not Using Parameters

```
// Bad: hardcoded values
PROCEDURE greet()
{
    name ← "Alex"   // fixed!
    DISPLAY("Hello, " + name)
}

// Good: parameterized
PROCEDURE greet(name)
{
    DISPLAY("Hello, " + name)
}
```

### Mistake 3: Confusing Parameters and Arguments

Remember: parameters are in the definition, arguments are in the call.

### Mistake 4: Side Effects

A **side effect** is when a procedure changes something outside itself – like modifying a global variable or printing output. Sometimes side effects are intentional (like `DISPLAY`), but they can also cause bugs if unexpected.

```
globalX ← 10

PROCEDURE evil()
{
    globalX ← globalX + 1   // modifies global variable – side effect!
}
```

It's generally better to return values than to modify global variables.

### Best Practice 1: Meaningful Names

Procedure names should be verbs or verb phrases: `calculateAverage`, `drawCircle`, `getUserInput`. Parameter names should describe what they represent: `length`, `width`, `name`, `age`.

### Best Practice 2: Keep Procedures Focused

Each procedure should do one thing and do it well. If a procedure is getting long (more than 20-30 lines), consider splitting it into smaller procedures.

### Best Practice 3: Document Your Procedures

Use comments to explain what the procedure does, what parameters it expects, and what it returns.

```
// Calculates the area of a rectangle
// Parameters: length, width (positive numbers)
// Returns: area as a number
PROCEDURE rectangleArea(length, width)
{
    RETURN length * width
}
```

### Best Practice 4: Test Each Procedure Separately

After writing a procedure, test it with different arguments to make sure it works before integrating it into your larger program.


## Module 8 Summary

Let's recap everything you've learned:

### Procedures
- A **procedure** is a named group of instructions that can take parameters and return a value.
- Define with `PROCEDURE name(parameters) { ... }`.
- Call with `name(arguments)`.
- Parameters are placeholders; arguments are actual values.

### Calling Procedures
- When called, execution jumps to the procedure, runs its body, and returns.
- `RETURN(expression)` exits the procedure and sends a value back.
- Procedures without `RETURN` are used for their side effects (like displaying).

### Procedural Abstraction
- Hides complex details behind a simple name.
- Breaks large problems into smaller, manageable subproblems.
- Makes code reusable, readable, and maintainable.
- Enables **modularity** – separating a program into independent modules.

### Libraries
- A **library** is a collection of pre-written procedures.
- Libraries save time, are reliable, and let you focus on your unique problem.
- **API** (Application Programming Interface) specifies how to use a library's procedures.
- **Documentation** explains what each procedure does and how to use it.
- Many libraries are open source or Creative Commons – respect licenses.

### Best Practices
- Use meaningful names for procedures and parameters.
- Keep procedures focused on a single task.
- Document your procedures with comments.
- Test each procedure independently.
- Avoid unnecessary side effects.


## 📋 Quick Reference Card

| Concept | Syntax / Example |
|---------|------------------|
| Procedure definition | `PROCEDURE name(p1, p2) { statements; RETURN value }` |
| Procedure call | `result ← name(arg1, arg2)` |
| Parameter | Variable in definition: `PROCEDURE double(n)` |
| Argument | Actual value passed: `double(5)` |
| RETURN | `RETURN(expression)` – ends procedure and returns value |
| No return | Procedure does something but gives no value back |
| Library | Collection of reusable procedures |
| API | Specification for using a library |

### Procedure Example

```
PROCEDURE max(a, b)
{
    IF (a > b)
    {
        RETURN a
    }
    ELSE
    {
        RETURN b
    }
}
```

### Library Usage (Conceptual)

```
// Pretend library "mathLib" has a procedure sqrt
root ← mathLib_sqrt(25)   // root = 5
```


You've now learned how to think like a real programmer: breaking problems into pieces, reusing code, and leveraging libraries. This is how professional software is built – not by writing everything from scratch, but by assembling and creating reusable components.