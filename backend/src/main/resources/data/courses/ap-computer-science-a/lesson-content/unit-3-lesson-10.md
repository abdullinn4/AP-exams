## Big Idea 3 Smash Time – Algorithms and Programming

Welcome to the Algorithms & Programming Unit Review! This is the big one. The heart of computer science. The part where you actually get to *make* things. You've learned how to store data, do math, make decisions, repeat stuff, organize code, and even think about what computers *can't* do. Now it's time to tie it all together.

Think of this review as your **programming mixtape** – we're going to sample the best bits from each module and create a banger of understanding. By the end, you'll see how variables, loops, procedures, and algorithms all work together to create the apps, games, and tools you use every day.

Let's get coding!


## Variables and Lists – Your Program's Memory

### Variables – The Sticky Notes of Programming

A **variable** is like a labeled sticky note where you jot down a value. You can look at it, change it, or use it in calculations.

```
score ← 95
name ← "Alex"
isPassing ← true
```

**Pro tip:** Name your variables like you're naming pets, not like you're naming variables in a math class. `x` is a terrible name. `studentFinalScore` tells you exactly what it is.

### Assignment = Copy, Not Connect

When you do `b ← a`, you're copying the value, not creating a link.

```
a ← 1
b ← a
a ← 2
DISPLAY(b)  // still 1!
```

Changing `a` doesn't change `b`. They're independent sticky notes now.

### Lists – The Shelves of Programming

A **list** is like a shelf with labeled compartments. Instead of having 100 separate sticky notes for 100 scores, you have one shelf called `scores` with 100 slots.

```
scores ← [85, 92, 78, 90]
```

Access items by **index** (starting at 1, because AP CSP pseudocode is fancy like that):

```
firstScore ← scores[1]    // 85
thirdScore ← scores[3]     // 78
```

### List Operations – Your Shelf Management Toolkit

```
┌─────────────────────────────────────────────────────┐
│               LIST OPERATIONS                        │
├───────────────┬─────────────────────────────────────┤
│ APPEND(list, value)  │ Adds to the end               │
│ INSERT(list, i, val) │ Inserts at position i         │
│ REMOVE(list, i)      │ Removes item at i             │
│ LENGTH(list)         │ Returns number of items       │
│ list[i] ← value      │ Changes an element            │
└─────────────────────────────────────────────────────┘
```

**Example:**

```
groceries ← ["milk", "eggs", "bread"]
APPEND(groceries, "butter")           // ["milk", "eggs", "bread", "butter"]
INSERT(groceries, 2, "cheese")        // ["milk", "cheese", "eggs", "bread", "butter"]
REMOVE(groceries, 3)                   // removes "eggs"
```

### Strings – Lists but for Text

A **string** is just a list of characters. You can access characters by index, and you can **concatenate** with `+`.

```
greeting ← "Hello"
name ← "Alex"
message ← greeting + " " + name   // "Hello Alex"
firstChar ← message[1]            // "H"
```


## Expressions – Doing the Math (and Logic)

### Arithmetic – The Basics

AP CSP pseudocode gives you the usual suspects: `+`, `-`, `*`, `/`, and the weird cousin `MOD`.

**MOD** gives you the remainder after division:

```
17 MOD 5 = 2   (because 5×3=15, remainder 2)
```

**Why MOD is your friend:**
- Check if even: `num MOD 2 = 0`
- Get last digit: `num MOD 10`
- Wrap around: `(counter MOD max) + 1`

### Order of Operations – PEMDAS Lives!

Multiplication and division (and MOD) happen before addition and subtraction. Parentheses beat everything.

```
5 + 3 * 2 = 11  (not 16!)
(5 + 3) * 2 = 16
```

**MOD** has the same precedence as `*` and `/`, so evaluate left to right.

```
8 MOD 3 + 2 = 2 + 2 = 4
```

### Relational Operators – Asking Questions

These compare values and give you `true` or `false`:

```
=   ≠   >   <   ≥   ≤
```

**Example:**

```
age ← 17
canDrive ← (age ≥ 16)    // true
```

### Boolean Logic – Combining Questions

- **AND** – both must be true
- **OR** – at least one true
- **NOT** – flips true/false

**Truth tables (because memes aren't enough):**

| A | B | A AND B | A OR B | NOT A |
|---|---|---------|--------|-------|
| T | T | T | T | F |
| T | F | F | T | F |
| F | T | F | T | T |
| F | F | F | F | T |

**Real-life example:** You can go to the movies if `(you have money) AND (you have time)`. You can get dessert if `(it's your birthday) OR (you aced the test)`.

### Randomness – Adding Spice

`RANDOM(a, b)` gives you a random integer from a to b, inclusive.

```
dice ← RANDOM(1, 6)      // 1,2,3,4,5,6
coin ← RANDOM(1, 2)      // 1 = heads, 2 = tails
```

Each run of your program might give different results. That's not a bug – it's a feature!

## Conditionals and Loops – Controlling the Flow

### IF Statements – The Fork in the Road

```
IF (condition)
{
    // do this if true
}
ELSE
{
    // do this if false
}
```

**Example:**

```
IF (score ≥ 60)
{
    DISPLAY("You passed!")
}
ELSE
{
    DISPLAY("Better luck next time.")
}
```

### ELSE IF – The Choose Your Own Adventure Ladder

```
IF (score ≥ 90)
{
    DISPLAY("A")
}
ELSE IF (score ≥ 80)
{
    DISPLAY("B")
}
ELSE IF (score ≥ 70)
{
    DISPLAY("C")
}
ELSE
{
    DISPLAY("F")
}
```

**Order matters!** Put the most specific conditions first. If you put `score ≥ 60` first, everyone would get a D.

### Loops – Doing Things Over and Over (Without Going Crazy)

#### REPEAT n TIMES – The Stubborn Robot

```
REPEAT 5 TIMES
{
    DISPLAY("I will not write on the walls")
}
```

#### REPEAT UNTIL – The Persistent Parent

```
secret ← 7
guess ← 0
REPEAT UNTIL (guess = secret)
{
    DISPLAY("Guess the number:")
    guess ← INPUT()
}
```

**Important:** The condition is checked *before* each iteration. If it's already true, the loop never runs. And if you forget to update the condition, you'll get an **infinite loop** – your program will run forever, like that one friend who won't stop talking.

### Traversing Lists – The Grand Tour

```
FOR EACH item IN list
{
    DISPLAY(item)
}
```

Or with an index:

```
i ← 1
REPEAT UNTIL (i > LENGTH(list))
{
    DISPLAY(list[i])
    i ← i + 1
}
```

### Common Patterns

**Find max:**

```
max ← list[1]
FOR EACH num IN list
{
    IF (num > max)
    {
        max ← num
    }
}
```

**Sum:**

```
total ← 0
FOR EACH num IN list
{
    total ← total + num
}
```

**Linear search:**

```
found ← false
FOR EACH item IN list
{
    IF (item = target)
    {
        found ← true
    }
}
```


## Procedures and Libraries – Think Like a Programmer

### Procedures – Your Custom Superpowers

A **procedure** is a named block of code that you can reuse. Define it once, call it whenever you need.

```
PROCEDURE greet(name)
{
    DISPLAY("Hello, " + name + "!")
}
```

Call it:

```
greet("Alex")   // displays "Hello, Alex!"
greet("Jordan") // displays "Hello, Jordan!"
```

### Parameters vs. Arguments

- **Parameters** – the placeholders in the definition (`name`)
- **Arguments** – the actual values you pass (`"Alex"`)

### Return Values – Getting Answers Back

Some procedures give you a result:

```
PROCEDURE add(a, b)
{
    RETURN a + b
}

sum ← add(5, 3)   // sum = 8
```

**No return?** Then it's just for side effects (like displaying stuff).

### Procedural Abstraction – Hiding the Messy Details

You don't need to know *how* a procedure works, just *what* it does. That's abstraction. It's like driving a car – you know the gas pedal makes it go, but you don't need to understand the engine.

### Libraries – Standing on the Shoulders of Giants

A **library** is a collection of pre-written procedures. Math library? Has `sqrt`, `sin`, `log`. Graphics library? Has `drawCircle`, `drawLine`. Why reinvent the wheel when you can just import it?

**API** (Application Programming Interface) is the instruction manual for using a library – it tells you what procedures exist, what parameters they take, and what they return.


## Limits of Computing – Not Everything Is Possible

### Algorithmic Efficiency – Why Speed Matters

Some algorithms are fast, some are slow. We measure efficiency by how the number of steps grows as the input size grows.

| Efficiency | Growth | Example | Feasibility |
|------------|--------|---------|-------------|
| Constant | O(1) | Access list[1] | Awesome |
| Logarithmic | O(log n) | Binary search | Great |
| Linear | O(n) | Find max | Good |
| Quadratic | O(n²) | Check all pairs | OK for small n |
| Exponential | O(2ⁿ) | Try all subsets | Useless for n>30 |
| Factorial | O(n!) | Try all permutations | Useless for n>10 |

**Reasonable time** = polynomial (n, n², n³).  
**Unreasonable time** = exponential or factorial.

### Binary Search – The Ninja Search

On a **sorted** list, binary search eliminates half the remaining items each step.

```
Sorted list of 1000 names: binary search needs ~10 steps.
Linear search needs up to 1000 steps.
```

**Requirement:** The list must be sorted. If it's not, binary search is useless.

### Simulations – Playing God (Safely)

A **simulation** is a model of a real-world system. Why simulate?
- Too expensive (crash-testing cars)
- Too dangerous (nuclear meltdown)
- Too slow (climate change)
- Too fast (particle collisions)

**Example:** Traffic simulation to optimize light timing without causing actual gridlock.

**Bias alert:** Simulations are only as good as what you include. Ignore pedestrian crossings, and your traffic model will be wrong.

### Undecidable Problems – The Hard Stop

Some problems have no algorithmic solution. None. Zero. Zilch.

The **Halting Problem** – can you write a program that determines if any other program will halt or run forever? Alan Turing proved it's impossible. No matter how smart you are, there's no algorithm that works for all programs.

**Real implication:** You can't write a perfect virus scanner that catches every virus. Some will always slip through.

### Heuristics – Good Enough

When you can't find the perfect solution in reasonable time, you settle for a **heuristic** – a "good enough" solution. GPS doesn't try every possible route (impossible); it uses a heuristic to find a very good route quickly.


## 🧩 Putting It All Together – A Complete Example

**Problem:** Write a program that simulates rolling two dice and counts how many rolls until you get snake eyes (both 1).

```
PROCEDURE rollDie()
{
    RETURN RANDOM(1, 6)
}

PROCEDURE rollUntilSnakeEyes()
{
    rolls ← 0
    die1 ← 0
    die2 ← 0
    REPEAT UNTIL (die1 = 1 AND die2 = 1)
    {
        die1 ← rollDie()
        die2 ← rollDie()
        rolls ← rolls + 1
    }
    RETURN rolls
}

// Main program
DISPLAY("How many times to get snake eyes?")
result ← rollUntilSnakeEyes()
DISPLAY("It took " + result + " rolls.")
```

This uses:
- Procedures (`rollDie`, `rollUntilSnakeEyes`)
- Random values
- Variables
- REPEAT UNTIL loop
- Boolean condition (`die1 = 1 AND die2 = 1`)
- Return values


## Unit Summary Cheat Sheet

| Concept | Key Takeaway |
|---------|--------------|
| **Variables** | Sticky notes for values; assignment copies, doesn't link |
| **Lists** | Shelves of items; indices start at 1 |
| **Strings** | Lists of characters; concatenate with + |
| **Arithmetic** | + - * / MOD; MOD gives remainder |
| **Boolean** | AND, OR, NOT; truth tables |
| **Random** | RANDOM(a,b) inclusive; each run may differ |
| **Conditionals** | IF, ELSE IF, ELSE; order matters |
| **Loops** | REPEAT n TIMES, REPEAT UNTIL; avoid infinite loops |
| **Procedures** | Reusable code; parameters, return values |
| **Libraries** | Pre-written code; APIs tell you how to use them |
| **Efficiency** | Reasonable (polynomial) vs. unreasonable (exponential) |
| **Binary search** | Requires sorted list; O(log n) steps |
| **Simulations** | Model real world; can have bias |
| **Undecidable** | No algorithm exists (Halting Problem) |
| **Heuristics** | Good enough when perfect is too slow |


## Final Challenge

You're building a "Guess the Number" game. The computer picks a random number between 1 and 100, and the user guesses. After each guess, the program says "too high" or "too low". The game ends when the user guesses correctly.

1. What variables do you need?
2. What kind of loop would you use?
3. How would you implement the hints?
4. How could you add a feature to count the number of guesses?

Think about it. (Answer: secret, guess, attempts; REPEAT UNTIL (guess = secret); IF guess < secret THEN "too low" ELSE "too high"; increment attempts each loop.)
