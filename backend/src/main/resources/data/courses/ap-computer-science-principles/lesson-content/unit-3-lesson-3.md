## Controlling the Flow – Conditionals & Loops

Welcome back, programmers! In Module 5, you learned how to store data using variables and lists. In Module 6, you learned how to calculate and compare using expressions. Now it's time to put those skills to work and make your programs **think** and **repeat**.

Think about the apps you use every day. They don't just run straight line by line from start to finish. They make decisions: "If the user is logged in, show their profile. Otherwise, show the login screen." They repeat things: "Check every item in the shopping cart and calculate the total." They handle complex situations: "If the user is a premium member and their subscription hasn't expired, give them access to exclusive content; otherwise, show them an upgrade offer."

This module is all about **control flow** – the ability to control which parts of your program run and how many times they run. By the end, you'll be able to write programs that can make decisions, handle complex conditions, and repeat tasks efficiently. You'll also learn how to develop your own algorithms by combining these building blocks.

Let's dive in!


## Conditionals – Making Decisions

### What Is Selection?

**Selection** is the programming concept of choosing which parts of an algorithm to execute based on whether a condition is true or false. In plain English: making decisions.

Every decision in programming comes down to asking a yes/no question and doing different things based on the answer. These decisions are what make programs interactive and responsive.

### The IF Statement

The simplest decision structure is the **IF statement**. It says: "If something is true, do this thing. If not, just skip it and continue."

In AP CSP pseudocode:

```
IF (condition)
{
    <block of statements>
}
```

Here's how it works visually:

```
                    ┌─────────────────┐
                    │   condition?    │
                    └────────┬────────┘
                             │
                ┌────────────┴────────────┐
           True │                         │ False
                ↓                          │
        ┌───────────────┐                   │
        │  execute block│                   │
        └───────┬───────┘                   │
                │                           │
                └───────────┬───────────────┘
                            ↓
                    ┌───────────────┐
                    │  continue...  │
                    └───────────────┘
```

**Example 1: Basic age check**
```
age ← 16
IF (age ≥ 16)
{
    DISPLAY("You can drive!")
}
// Program continues here, whether or not the block executed
```

If `age` were 14, the condition would be false, so the DISPLAY statement would be skipped entirely.

**Example 2: Weather advice**
```
temperature ← 28
IF (temperature > 30)
{
    DISPLAY("It's hot! Go swimming!")
}
// If temperature is 28, nothing happens
```

**Example 3: Checking for empty input**
```
name ← INPUT()
IF (name = "")
{
    DISPLAY("You didn't enter a name. I'll call you 'Guest'.")
    name ← "Guest"
}
```

### The IF-ELSE Statement

Sometimes you want to do one thing if true, and a different thing if false. That's where **IF-ELSE** comes in.

```
IF (condition)
{
    <first block of statements>
}
ELSE
{
    <second block of statements>
}
```

Visual:

```
                    ┌─────────────────┐
                    │   condition?    │
                    └────────┬────────┘
                             │
                ┌────────────┴────────────┐
           True │                         │ False
                ↓                          ↓
        ┌───────────────┐          ┌───────────────┐
        │  execute      │          │  execute      │
        │  first block  │          │  second block │
        └───────┬───────┘          └───────┬───────┘
                │                           │
                └───────────┬───────────────┘
                            ↓
                    ┌───────────────┐
                    │  continue...  │
                    └───────────────┘
```

**Example 1: Even or odd**
```
num ← 7
IF (num MOD 2 = 0)
{
    DISPLAY(num + " is even")
}
ELSE
{
    DISPLAY(num + " is odd")
}
```

**Example 2: Login success/failure**
```
username ← INPUT()
password ← INPUT()

IF (username = "admin" AND password = "secret123")
{
    DISPLAY("Access granted. Welcome, admin!")
}
ELSE
{
    DISPLAY("Invalid username or password. Access denied.")
}
```

**Example 3: Pass/fail checker**
```
score ← 85
IF (score ≥ 60)
{
    DISPLAY("You passed!")
}
ELSE
{
    DISPLAY("Better luck next time.")
}
```

### Real-World Analogy

Think of IF-ELSE like a fork in the road. You come to a sign that says "If you're hungry, turn left to the restaurant; otherwise, turn right to the park." You check your condition (am I hungry?) and take exactly one path. After that, you continue your journey.


## Nested Conditionals – Decisions Within Decisions

Sometimes one decision isn't enough. You need to make a decision, and then based on that, make another decision. That's called **nesting** – putting conditionals inside conditionals.

### What Are Nested Conditionals?

**Nested conditional statements** consist of conditional statements within conditional statements. It's like those "choose your own adventure" books: if you go left, then you face another choice; if you go right, you face a different set of choices.

```
IF (condition1)
{
    // do something
    IF (condition2)
    {
        // do something else
    }
}
ELSE
{
    // do something different
}
```

### Example 1: Grade Calculator (Detailed)

Let's build a program that converts a numeric score to a letter grade with plus/minus distinctions:

```
score ← 85

IF (score ≥ 90)
{
    IF (score ≥ 97)
    {
        DISPLAY("A+")
    }
    ELSE IF (score ≥ 93)
    {
        DISPLAY("A")
    }
    ELSE
    {
        DISPLAY("A-")
    }
}
ELSE IF (score ≥ 80)
{
    IF (score ≥ 87)
    {
        DISPLAY("B+")
    }
    ELSE IF (score ≥ 83)
    {
        DISPLAY("B")
    }
    ELSE
    {
        DISPLAY("B-")
    }
}
ELSE IF (score ≥ 70)
{
    // similar for C range
    DISPLAY("C")
}
ELSE
{
    DISPLAY("F")
}
```

This is a real-world example – many grading systems use nested logic to assign plus/minus grades.

### Example 2: Admission Decision with Multiple Criteria

```
age ← 17
hasPermission ← true
hasID ← false
isVIP ← false

IF (age ≥ 18)
{
    DISPLAY("Welcome! You're old enough.")
}
ELSE
{
    // Person is under 18
    IF (isVIP)
    {
        DISPLAY("VIPs under 18 are allowed. Come in!")
    }
    ELSE
    {
        IF (hasPermission)
        {
            // They have parental permission
            IF (hasID)
            {
                DISPLAY("You have permission and ID. Come in!")
            }
            ELSE
            {
                DISPLAY("You need ID to enter.")
            }
        }
        ELSE
        {
            DISPLAY("Sorry, you need parental permission.")
        }
    }
}
```

This nested structure reflects a real policy: VIPs get special treatment; otherwise, minors need permission AND ID.

### Visualizing Nested Conditionals

Here's a flowchart for the grade calculator (simplified):

```
                    ┌─────────────────┐
                    │   score ≥ 90?   │
                    └────────┬────────┘
                             │
                ┌────────────┴────────────┐
           True │                         │ False
                ↓                          ↓
        ┌───────────────┐          ┌─────────────────┐
        │ score ≥ 97?   │          │   score ≥ 80?   │
        └───────┬───────┘          └────────┬────────┘
                │                           │
        ┌───────┴───────┐          ┌────────┴────────┐
    True ↓               ↓ False    ↓                 ↓
┌───────────┐     ┌───────────┐ ┌───────────┐   ┌───────────┐
│  "A+"     │     │ score≥93? │ │   B range │   │ score≥70? │
└───────────┘     └─────┬─────┘ └───────────┘   └─────┬─────┘
                        │                              │
                ┌───────┴───────┐              ┌───────┴───────┐
            True ↓               ↓ False   True ↓               ↓ False
        ┌───────────┐     ┌───────────┐ ┌───────────┐     ┌───────────┐
        │   "A"     │     │   "A-"    │ │   "C"     │     │   "F"     │
        └───────────┘     └───────────┘ └───────────┘     └───────────┘
```

### A Cleaner Way: ELSE IF Chains

While nested conditionals are powerful, deeply nested code can become hard to read. Most programming languages (including AP CSP pseudocode) let you write multi-way decisions using **ELSE IF**:

```
score ← 85

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
ELSE IF (score ≥ 60)
{
    DISPLAY("D")
}
ELSE
{
    DISPLAY("F")
}
```

This is **not** nested – it's a chain of alternatives. The conditions are checked in order, and the first true condition's block executes; the rest are skipped. This is much easier to read than nested IFs for simple ranges.

**Important:** The order matters! If you put `score ≥ 60` first, then almost everyone would get a D. Always put the most specific (highest) conditions first.


## Iteration – Doing Things Over and Over

### What Is Iteration?

**Iteration** is a repeating portion of an algorithm. In plain English: loops. They let you repeat a block of code multiple times, either a specific number of times or until a condition is met.

Imagine you needed to add up 100 numbers. Writing 100 addition statements would be insane. Loops let you write the addition once and repeat it 100 times. Loops are what make computers powerful – they can do millions of repetitions without getting bored or making mistakes.

### REPEAT n TIMES – Count-Controlled Loops

When you know exactly how many times you want to repeat something, use **REPEAT n TIMES**.

```
REPEAT n TIMES
{
    <block of statements>
}
```

**How it works:** The block of statements is executed `n` times. After the last repetition, the program continues with whatever comes after the loop.

**Example 1: Count to 5**
```
counter ← 1
REPEAT 5 TIMES
{
    DISPLAY(counter)
    counter ← counter + 1
}
// Output: 1 2 3 4 5
```

**Example 2: Sum of first 10 numbers**
```
sum ← 0
counter ← 1
REPEAT 10 TIMES
{
    sum ← sum + counter
    counter ← counter + 1
}
DISPLAY(sum)    // 55
```

**Example 3: Print a pattern**
```
REPEAT 4 TIMES
{
    DISPLAY("****")
}
// Output:
// ****
// ****
// ****
// ****
```

**Visualizing REPEAT n TIMES:**

```
┌─────────────────────────────────────────────────┐
│                 REPEAT 5 TIMES                   │
│                                                   │
│   Start: counter = 1                              │
│                                                   │
│   ┌─────────────────────────────────────────┐   │
│   │ Iteration 1: display 1, counter = 2     │   │
│   │ Iteration 2: display 2, counter = 3     │   │
│   │ Iteration 3: display 3, counter = 4     │   │
│   │ Iteration 4: display 4, counter = 5     │   │
│   │ Iteration 5: display 5, counter = 6     │   │
│   └─────────────────────────────────────────┘   │
│                                                   │
│   After loop: counter = 6                         │
└─────────────────────────────────────────────────┘
```

### REPEAT UNTIL – Condition-Controlled Loops

Sometimes you don't know in advance how many times to repeat. You want to keep going **until** something happens. That's **REPEAT UNTIL**.

```
REPEAT UNTIL (condition)
{
    <block of statements>
}
```

**Important:** The condition is checked **before** each iteration. If it's true at the start, the loop body never runs. This is called a **pretest loop**.

Visual:

```
                    ┌─────────────────┐
                    │   condition?    │
                    └────────┬────────┘
                             │
                ┌────────────┴────────────┐
           True │                         │ False
                │                          ↓
                │                  ┌───────────────┐
                │                  │ execute block │
                │                  └───────┬───────┘
                │                          │
                │                          └──────┐
                │                                 │
                └───────────────────┬─────────────┘
                                    ↓
                            ┌───────────────┐
                            │    exit loop  │
                            └───────────────┘
```

**Example 1: Keep guessing until correct**
```
secret ← 7
guess ← 0

REPEAT UNTIL (guess = secret)
{
    DISPLAY("Guess a number between 1 and 10:")
    guess ← INPUT()
    
    IF (guess < secret)
    {
        DISPLAY("Too low!")
    }
    ELSE IF (guess > secret)
    {
        DISPLAY("Too high!")
    }
}

DISPLAY("You got it!")
```

The loop keeps running until the user guesses correctly. We don't know how many tries it will take – that's why we use `REPEAT UNTIL` instead of `REPEAT n TIMES`.

**Example 2: Input validation – ensure positive number**
```
num ← 0
REPEAT UNTIL (num > 0)
{
    DISPLAY("Enter a positive number:")
    num ← INPUT()
    IF (num ≤ 0)
    {
        DISPLAY("That's not positive. Try again.")
    }
}
DISPLAY("Thanks! You entered " + num)
```

**Example 3: Password length check**
```
password ← ""
REPEAT UNTIL (LENGTH(password) ≥ 8)
{
    DISPLAY("Enter a password (at least 8 characters):")
    password ← INPUT()
    IF (LENGTH(password) < 8)
    {
        DISPLAY("Too short! Try again.")
    }
}
DISPLAY("Password accepted!")
```

### Infinite Loops – The Danger Zone

An **infinite loop** happens when the ending condition never becomes true. The loop runs forever (or until you force the program to stop). This is one of the most common bugs.

```
// DANGER! This never ends
x ← 1
REPEAT UNTIL (x = 0)
{
    DISPLAY(x)
    x ← x + 1   // x keeps getting bigger, never reaches 0
}
```

**How to avoid infinite loops:**
- Make sure the condition will eventually become true
- Update variables inside the loop that affect the condition
- Double-check your logic, especially with complex conditions
- Test with small values first

**Real-life example:** Remember that friend who keeps talking and never stops? That's an infinite loop. Don't be that friend. Don't write that code.

### Common Loop Patterns

**Counting from 1 to n:**
```
i ← 1
REPEAT UNTIL (i > n)
{
    DISPLAY(i)
    i ← i + 1
}
```

**Counting down:**
```
i ← 10
REPEAT UNTIL (i < 1)
{
    DISPLAY(i)
    i ← i - 1
}
// 10 9 8 7 6 5 4 3 2 1
```

**Processing all elements of a list:**
```
i ← 1
REPEAT UNTIL (i > LENGTH(myList))
{
    current ← myList[i]
    // do something with current
    i ← i + 1
}
```

**Accumulating a total:**
```
total ← 0
i ← 1
REPEAT 10 TIMES
{
    total ← total + i
    i ← i + 1
}
```

**Sentinel-controlled loop (stop when user enters -1):**
```
sum ← 0
num ← 0
REPEAT UNTIL (num = -1)
{
    DISPLAY("Enter a number to add (-1 to stop):")
    num ← INPUT()
    IF (num ≠ -1)
    {
        sum ← sum + num
    }
}
DISPLAY("Total: " + sum)
```


## Developing Algorithms – Putting It All Together

Now that you have selection (IF) and iteration (loops), you can build real algorithms. An **algorithm** is a finite set of instructions that accomplish a specific task. It's a recipe for solving a problem.

### The Three Building Blocks

Every algorithm can be built from just three fundamental structures:

1. **Sequencing** – doing steps in order (what you've been doing all along)
2. **Selection** – making decisions (IF/ELSE)
3. **Iteration** – repeating steps (loops)

That's it. Every program you'll ever write is just combinations of these three things. This is called **structured programming**, and it's a powerful idea.

### Example 1: Find the Largest Number in a List

Let's develop an algorithm step by step.

**Problem:** Given a list of numbers, find the largest one.

**Thought process:**
- If the list is empty, there's no largest – maybe return an error or 0.
- Otherwise, assume the first element is the largest.
- Then look at each remaining element: if it's bigger than our current largest, update our largest.
- After checking all, return the largest.

**Pseudocode:**
```
PROCEDURE findMax(numbers)
{
    IF (LENGTH(numbers) = 0)
    {
        RETURN 0   // or some error value
    }
    
    maxSoFar ← numbers[1]           // start with first element
    i ← 2                            // start checking from second
    
    REPEAT UNTIL (i > LENGTH(numbers))
    {
        IF (numbers[i] > maxSoFar)
        {
            maxSoFar ← numbers[i]    // found a new max
        }
        i ← i + 1
    }
    
    RETURN maxSoFar
}
```

This algorithm uses:
- Sequencing (steps in order)
- Selection (IF statement)
- Iteration (REPEAT UNTIL loop)

**Example 2: Count How Many Times a Value Appears**

```
PROCEDURE countOccurrences(list, target)
{
    count ← 0
    i ← 1
    
    REPEAT UNTIL (i > LENGTH(list))
    {
        IF (list[i] = target)
        {
            count ← count + 1
        }
        i ← i + 1
    }
    
    RETURN count
}
```

**Example 3: Check if a Number Is Prime**

A prime number is only divisible by 1 and itself.

```
PROCEDURE isPrime(n)
{
    IF (n < 2)
    {
        RETURN false
    }
    
    i ← 2
    REPEAT UNTIL (i > n/2)   // only need to check up to n/2
    {
        IF (n MOD i = 0)
        {
            RETURN false    // found a divisor, not prime
        }
        i ← i + 1
    }
    
    RETURN true    // no divisors found
}
```

**Example 4: Compute Average of List**

```
PROCEDURE averageList(numbers)
{
    IF (LENGTH(numbers) = 0)
    {
        RETURN 0
    }
    
    sum ← 0
    i ← 1
    REPEAT UNTIL (i > LENGTH(numbers))
    {
        sum ← sum + numbers[i]
        i ← i + 1
    }
    
    RETURN sum / LENGTH(numbers)
}
```

### Different Algorithms, Same Result

Here's an important concept: **Algorithms can be written in different ways and still accomplish the same tasks.** There's rarely one "right" way to solve a problem.

For example, here are two ways to sum numbers from 1 to n:

**Way 1: Using a loop**
```
PROCEDURE sum1(n)
{
    total ← 0
    i ← 1
    REPEAT UNTIL (i > n)
    {
        total ← total + i
        i ← i + 1
    }
    RETURN total
}
```

**Way 2: Using a formula**
```
PROCEDURE sum2(n)
{
    RETURN (n * (n + 1)) / 2
}
```

Both produce the same result for any n. The second is faster (constant time), but the first shows the step-by-step process and works even if you didn't know the formula.

**Algorithms that appear similar can yield different side effects or results.** For example, one sorting algorithm might be stable (preserves order of equal elements) while another isn't. Always test!

### Combining and Modifying Existing Algorithms

One of the best ways to build new algorithms is to start with existing ones and modify them. This is how real programmers work – they don't reinvent the wheel every time.

**Example:** You have an algorithm that finds the largest number. How would you modify it to find the smallest?
- Change the initial `maxSoFar` to the first element (same)
- Change the comparison from `>` to `<`
- Rename variables appropriately

**Example:** You have an algorithm that sums numbers. How would you modify it to average them?
- Sum the numbers (same)
- Then divide by the count (add a step)

**Example:** You have an algorithm that counts occurrences of a value. How would you modify it to find the first position of a value?
- Instead of counting, return the index when found
- If not found, return -1

**Pro tip:** Building a library of common algorithms in your head (max, min, sum, average, search) saves huge amounts of time. You can combine them like LEGO bricks to solve more complex problems.

### Knowledge of Existing Algorithms Helps

The CED explicitly mentions some existing algorithms you should know:

- Determining maximum or minimum value of two or more numbers
- Computing the sum or average of two or more numbers
- Identifying if an integer is evenly divisible by another integer
- Determining a robot's path through a maze

These are building blocks for more complex algorithms.


## Common Patterns and Pitfalls

### Pattern: Input Validation Loop

Always validate user input before using it. This prevents crashes and unexpected behavior.

```
DISPLAY("Enter a positive number:")
num ← INPUT()

REPEAT UNTIL (num > 0)
{
    DISPLAY("Invalid. Enter a positive number:")
    num ← INPUT()
}
```

### Pattern: Menu System

```
choice ← 0
REPEAT UNTIL (choice = 3)
{
    DISPLAY("1. Play game")
    DISPLAY("2. View scores")
    DISPLAY("3. Quit")
    DISPLAY("Choose an option:")
    choice ← INPUT()
    
    IF (choice = 1)
    {
        CALL playGame()
    }
    ELSE IF (choice = 2)
    {
        CALL viewScores()
    }
    ELSE IF (choice = 3)
    {
        DISPLAY("Goodbye!")
    }
    ELSE
    {
        DISPLAY("Invalid choice. Try again.")
    }
}
```

### Pattern: Finding Something in a List

```
PROCEDURE findItem(list, target)
{
    i ← 1
    REPEAT UNTIL (i > LENGTH(list))
    {
        IF (list[i] = target)
        {
            RETURN i    // found it, return position
        }
        i ← i + 1
    }
    RETURN -1    // not found
}
```

### Pattern: Processing All Elements

```
PROCEDURE processAll(list)
{
    i ← 1
    REPEAT UNTIL (i > LENGTH(list))
    {
        // Do something with list[i]
        i ← i + 1
    }
}
```

### Common Pitfall 1: Off-by-One Errors

This is the most common loop bug. Make sure your loop runs the correct number of times.

```
// Want to display 1-5
i ← 1
REPEAT UNTIL (i > 5)   // correct: stops when i=6
{
    DISPLAY(i)
    i ← i + 1
}

// WRONG - displays 1-4
i ← 1
REPEAT UNTIL (i = 5)   // stops when i=5, so last display is i=4
{
    DISPLAY(i)
    i ← i + 1
}

// WRONG - infinite loop
i ← 1
REPEAT UNTIL (i < 5)   // i is always >=1, so condition never true
{
    DISPLAY(i)
    i ← i + 1
}
```

### Common Pitfall 2: Forgetting to Update Loop Variable

```
// INFINITE LOOP!
i ← 1
REPEAT UNTIL (i > 10)
{
    DISPLAY("Hello")
    // forgot to increment i!
}
```

Always make sure something changes inside the loop that will eventually make the condition true.

### Common Pitfall 3: Incorrect Condition Order in ELSE IF Chains

In nested IFs and ELSE IFs, order matters. Put the most specific conditions first.

```
// WRONG - A will never print for scores ≥ 95
IF (score ≥ 80)
{
    DISPLAY("B or higher")
}
ELSE IF (score ≥ 90)
{
    DISPLAY("A")   // never reached because any score≥90 also ≥80
}

// CORRECT
IF (score ≥ 90)
{
    DISPLAY("A")
}
ELSE IF (score ≥ 80)
{
    DISPLAY("B")
}
```

### Common Pitfall 4: Using = Instead of ← (or Vice Versa)

Remember:
- `←` is for assignment (putting a value into a variable)
- `=` is for comparison (checking if two things are equal)

```
// WRONG
IF (x ← 5)   // This assigns 5 to x, not compares!

// CORRECT
IF (x = 5)   // This checks if x equals 5
```

### Common Pitfall 5: Not Handling Edge Cases

Always consider what happens with empty lists, zero, negative numbers, etc.

```
PROCEDURE averageList(numbers)
{
    // Without this check, division by zero would occur
    IF (LENGTH(numbers) = 0)
    {
        RETURN 0
    }
    // rest of code
}
```



## Comparing Algorithms

Sometimes you have multiple algorithms that solve the same problem. How do you choose? You compare them.

### Same Result, Different Approaches

Consider finding the maximum in a list:

**Algorithm A:** Loop through all elements, keep track of max.
**Algorithm B:** Sort the list and take the last element.

Both give the same result, but Algorithm A is usually faster (linear time) than sorting (which is slower). But if you need the sorted list anyway, Algorithm B might be better.

### Algorithms That Seem Similar But Differ

Sometimes algorithms look similar but behave differently in subtle ways.

Example: Two different ways to check if a number is even:

```
// Method 1
IF (num MOD 2 = 0)

// Method 2
IF (num / 2 = num // 2)   // integer division
```

Both work, but Method 1 is clearer.

Example: Two search algorithms:
- **Linear search:** checks each element in order
- **Binary search:** repeatedly divides the list in half (requires sorted list)

Both find a value, but binary search is much faster on large sorted lists.

### Side Effects

Some algorithms have **side effects** – they change something besides just returning a result. For example, a sorting algorithm might modify the original list. When comparing algorithms, consider whether side effects matter.


## Putting It All Together – A Complete Example

Let's build a complete program that uses everything from this module:

**Number Guessing Game with Statistics and Replay**

```
// Main program
DISPLAY("Welcome to the Number Guessing Game!")
playAgain ← true

REPEAT UNTIL (NOT playAgain)
{
    CALL playGame()
    
    DISPLAY("Do you want to play again? (yes/no)")
    response ← INPUT()
    playAgain ← (response = "yes" OR response = "y")
}

DISPLAY("Thanks for playing! Goodbye.")

// Procedure to play one game
PROCEDURE playGame()
{
    secret ← RANDOM(1, 100)
    guess ← 0
    attempts ← 0
    
    DISPLAY("I'm thinking of a number between 1 and 100.")
    
    REPEAT UNTIL (guess = secret)
    {
        DISPLAY("Enter your guess:")
        guess ← INPUT()
        attempts ← attempts + 1
        
        IF (guess < secret)
        {
            DISPLAY("Too low! Try again.")
        }
        ELSE IF (guess > secret)
        {
            DISPLAY("Too high! Try again.")
        }
        // If equal, loop will end
    }
    
    DISPLAY("Congratulations! You got it in " + attempts + " tries.")
    
    // Give feedback based on attempts
    IF (attempts ≤ 5)
    {
        DISPLAY("Amazing! You're a mind reader!")
    }
    ELSE IF (attempts ≤ 10)
    {
        DISPLAY("Pretty good! You got it.")
    }
    ELSE
    {
        DISPLAY("Well, at least you got it eventually.")
    }
}
```

This program uses:
- Random numbers
- Variables
- REPEAT UNTIL loops (for game and for replay)
- Nested IF-ELSE IF
- Procedures (we'll cover these more in Module 8)
- Input/output
- String concatenation
- Boolean logic in the replay condition


## Module 7 Summary

Let's recap everything you've learned:

### Selection (Making Decisions)
- **IF statement** – runs code only if condition is true; otherwise skips
- **IF-ELSE statement** – runs one block if true, another if false
- **Nested conditionals** – IF statements inside IF statements for complex logic
- **ELSE IF** – clean way to check multiple conditions in order; first true condition runs its block, rest are skipped
- Conditions are checked in order; order matters (put most specific first)

### Iteration (Repeating)
- **REPEAT n TIMES** – loops a specific number of times; use when you know the count
- **REPEAT UNTIL (condition)** – loops until condition becomes true; condition checked BEFORE each iteration
  - May never run if condition starts true
  - Must update loop variables to eventually meet condition
- **Infinite loops** – happen when condition never becomes true; always update variables that affect the condition

### Algorithm Development
- Every algorithm uses **sequencing**, **selection**, and **iteration**
- Different algorithms can solve the same problem; compare them by efficiency, clarity, side effects
- You can combine and modify existing algorithms to create new ones
- Common patterns: finding max/min, summing, counting, searching, validating input
- Knowledge of existing algorithms (max, min, sum, average, search, divisibility) helps in constructing new ones

### Common Pitfalls
- Off-by-one errors (loop runs too many or too few times)
- Forgetting to update loop variables (infinite loops)
- Wrong condition order in nested IFs and ELSE IF chains
- Using `=` instead of `←` (or vice versa)
- Not handling edge cases (empty lists, zero, negative numbers)

---

## 📋 Quick Reference Card

| Structure | Syntax | When to Use |
|-----------|--------|-------------|
| IF | `IF (condition) { }` | Do something only if condition is true |
| IF-ELSE | `IF (condition) { } ELSE { }` | Do one thing if true, another if false |
| ELSE IF | `IF (c1) { } ELSE IF (c2) { }` | Check multiple conditions in order |
| REPEAT n TIMES | `REPEAT n TIMES { }` | Known number of repetitions |
| REPEAT UNTIL | `REPEAT UNTIL (cond) { }` | Repeat until condition becomes true |

### Loop Comparison

| Loop Type | When it runs | Example use |
|-----------|--------------|-------------|
| `REPEAT n TIMES` | Exactly n times | Process all items in a list of known size |
| `REPEAT UNTIL` | Until condition is true | Get valid input, play until game ends |

### Algorithm Patterns

| Pattern | Description |
|---------|-------------|
| Find max/min | Loop through, track best so far |
| Sum/average | Accumulate total, divide by count |
| Count occurrences | Loop through, increment counter when match |
| Linear search | Loop through, return index when found |
| Input validation | Loop until valid input received |
| Menu system | Loop until user chooses exit |


You now have the power to make your programs **think** and **repeat**. These are the building blocks of every algorithm you'll ever write. In the next module, we'll learn how to organize your code into reusable procedures – making your programs cleaner, more efficient, and easier to debug.
