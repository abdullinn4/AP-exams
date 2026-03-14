

## Doing the Math – Expressions & Randomness

Welcome back! In Module 5, you learned how to store information using variables and lists. You've got boxes to put stuff in. Now it's time to learn how to **do things** with that stuff – how to calculate, compare, and make decisions.

Think of it this way: variables are the nouns of programming. Expressions are the verbs. They're what make your program actually *do* something interesting instead of just sitting there holding values.

By the end of this module, you'll be able to:
- Perform calculations using arithmetic operators (including the mysterious MOD)
- Write expressions that evaluate to true or false using relational operators
- Combine conditions using Boolean logic (AND, OR, NOT)
- Add randomness to your programs so they don't do the same thing every time

Let's get mathematical!


## Arithmetic Expressions – Crunching Numbers

### What's an Expression?

An **expression** is a combination of values, variables, operators, and procedure calls that evaluates to a single value. Think of it as a mathematical question that the computer answers for you.

```
3 + 4                 // evaluates to 7
score * 2             // evaluates to twice whatever score holds
(10 - 3) * 5          // evaluates to 35
```

Every expression produces exactly one result. That result can be stored in a variable, displayed, or used in another expression.

### Arithmetic Operators

AP CSP pseudocode provides these arithmetic operators:

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `10 - 4` | `6` |
| `*` | Multiplication | `6 * 7` | `42` |
| `/` | Division | `15 / 4` | `3.75` |
| `MOD` | Modulo (remainder) | `17 MOD 5` | `2` |

The first four probably feel familiar from math class. But `MOD` might be new. Let's dive deep into that one.

### The Magic of MOD

`MOD` gives you the **remainder** after division. It's incredibly useful in programming.

```
17 MOD 5 = 2   because 5 goes into 17 three times (15) with 2 left over
20 MOD 6 = 2   because 6×3=18, remainder 2
8 MOD 3 = 2    because 3×2=6, remainder 2
9 MOD 3 = 0    because 3×3=9 exactly, no remainder
```

Think back to elementary school when you first learned division and wrote answers like "7 remainder 2." MOD is that remainder.

Here's a visual way to think about it:

```
17 ÷ 5 = 3 remainder 2
          ↓           ↓
        17 / 5     17 MOD 5
        = 3.4       = 2
```

The `/` operator gives you the decimal result. `MOD` gives you just the remainder.

**Important rule from the exam reference sheet:** For `a MOD b`, assume `a` is an integer greater than or equal to 0, and `b` is an integer greater than 0. So no negative numbers, no division by zero.

### Why MOD Is Incredibly Useful

MOD shows up everywhere once you know to look for it:

**1. Checking if a number is even or odd:**
```
IF (num MOD 2 = 0)
{
    DISPLAY("Even")
}
ELSE
{
    DISPLAY("Odd")
}
```
If the remainder when dividing by 2 is 0, it's even. This is probably the most common use of MOD.

**2. Wrapping around (like a clock):**
```
hour ← (currentHour + hoursToAdd) MOD 12
```
This keeps the hour between 0 and 11. After 11, it wraps back to 0.

**3. Getting digits of a number:**
```
lastDigit ← number MOD 10      // gets the ones digit
remaining ← number / 10         // drops the last digit
```

**4. Taking turns in games:**
```
currentPlayer ← (currentPlayer MOD numberOfPlayers) + 1
```
This cycles through players: 1,2,3,4,1,2,3,4,...

**5. Distributing items evenly:**
```
itemsLeftOver ← totalItems MOD groupSize
```
Tells you how many items are left after giving each group the same amount.

**6. Determining if a year is a leap year:**
```
isLeapYear ← (year MOD 4 = 0) AND ((year MOD 100 ≠ 0) OR (year MOD 400 = 0))
```

**Real-life example:** Every time you see "Your cart has 3 items" and they show little icons in rows of 4, they're using MOD to figure out how many icons go in the last row.

### Order of Operations (Remember PEMDAS?)

Just like in math class, expressions follow a specific order. The exam reference sheet says: **"The order of operations used in mathematics applies when evaluating expressions."**

That means:
- Parentheses first
- Exponents (not in AP CSP pseudocode, but good to know)
- Multiplication and division (left to right)
- Addition and subtraction (left to right)

**And here's the key:** `MOD` has the **same precedence** as multiplication and division. So it's evaluated at the same time as `*` and `/`, from left to right.

Let's practice:

```
5 + 3 * 4          // 3*4 first = 12, then +5 = 17
(5 + 3) * 4        // parentheses first: 8*4 = 32
10 - 2 * 3 + 4     // 2*3=6, then 10-6=4, then +4 = 8
17 MOD 5 + 2       // 17 MOD 5 = 2, then +2 = 4
17 MOD (5 + 2)     // parentheses: 5+2=7, then 17 MOD 7 = 3
```

Here's a visual breakdown of a complex expression:

```
┌─────────────────────────────────────────────────┐
│              ORDER OF OPERATIONS                 │
│                                                   │
│  7 + 3 * 4 - 6 / 2 + 8 MOD 3                     │
│                                                   │
│  Step 1: 3 * 4 = 12                               │
│  Step 2: 6 / 2 = 3                                │
│  Step 3: 8 MOD 3 = 2                              │
│                                                   │
│  Now we have: 7 + 12 - 3 + 2                      │
│                                                   │
│  Step 4: 7 + 12 = 19                              │
│  Step 5: 19 - 3 = 16                              │
│  Step 6: 16 + 2 = 18                              │
│                                                   │
│  Result: 18                                       │
└─────────────────────────────────────────────────┘
```

### Putting Arithmetic to Work

Here's a procedure that uses multiple arithmetic operations:

```
PROCEDURE calculatePayment(hoursWorked, hourlyRate)
{
    regularPay ← hoursWorked * hourlyRate
    
    // Assume overtime for hours over 40 at 1.5x rate
    IF (hoursWorked > 40)
    {
        overtimeHours ← hoursWorked - 40
        overtimePay ← overtimeHours * (hourlyRate * 1.5)
        RETURN regularPay + overtimePay
    }
    ELSE
    {
        RETURN regularPay
    }
}
```

The expressions here combine variables and arithmetic operators to do something useful.


## Relational Operators – Making Comparisons

### What's a Relational Operator?

**Relational operators** compare two values and produce a **Boolean result** – either `true` or `false`. They're the basis for decision-making in programs.

Here are the relational operators from the exam reference sheet:

| Operator | Meaning | Example | Result (if a=5, b=3) |
|----------|---------|---------|---------------------|
| `=` | Equal to | `a = b` | `false` |
| `≠` | Not equal to | `a ≠ b` | `true` |
| `>` | Greater than | `a > b` | `true` |
| `<` | Less than | `a < b` | `false` |
| `≥` | Greater than or equal to | `a ≥ b` | `true` |
| `≤` | Less than or equal to | `a ≤ b` | `false` |

**Important:** Notice that equality is `=` (a single equals sign), not `==` like in some languages. AP CSP pseudocode uses `=` for comparison.

### Using Relational Operators

These operators let you ask questions about your data:

```
age ← 16
IF (age ≥ 16)
{
    DISPLAY("You can drive!")
}

score ← 85
IF (score > 90)
{
    DISPLAY("A grade!")
}

name ← "Alex"
IF (name = "Alex")
{
    DISPLAY("Welcome back, Alex!")
}
```

The result of a relational expression is always `true` or `false`. You can store that result in a variable:

```
isAdult ← (age ≥ 18)
isPassing ← (score ≥ 60)
hasA ← (score ≥ 90)
```

### Comparing Different Types

You can compare numbers with numbers, strings with strings. But comparing different types (like a number and a string) usually doesn't make sense and might cause errors.

**String comparison** is usually alphabetical:

```
"apple" < "banana"      // true (a comes before b)
"Apple" < "apple"       // true? Depends on capitalization rules
                        // Usually uppercase comes before lowercase
```

### Common Pitfalls

**Mistake 1:** Confusing assignment (`←`) with equality (`=`)

```
// Wrong - this changes x to 5, not compares it
IF (x ← 5)

// Correct - this checks if x equals 5
IF (x = 5)
```

This is probably the single most common beginner mistake. Assignment uses left arrow, equality uses equals sign.

**Mistake 2:** Forgetting that strings are compared exactly

```
name1 ← "Alex"
name2 ← "alex"
IF (name1 = name2)   // false! Capitalization matters
```

**Mistake 3:** Using `=` when you mean `←` in assignment

```
x = 5    // This is a comparison, not assignment!
x ← 5    // This is correct assignment
```


## Boolean Expressions – Combining Conditions

### What Are Boolean Values?

A **Boolean value** is either `true` or `false`. That's it. They're named after George Boole, a mathematician who figured out how to do algebra with true/false values.

Boolean values come from:
- Relational comparisons (`x > 5`)
- Logical operators combining other Boolean values
- Procedures that return true/false

Think of Boolean values as answers to yes/no questions:
- "Is it raining?" → `true` or `false`
- "Is the user logged in?" → `true` or `false`
- "Is the score high enough?" → `true` or `false`

### Logical Operators

The exam reference sheet provides three **logical operators**:

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `NOT` | Reverses true/false | `NOT (5 > 3)` | `false` (because 5>3 is true, NOT makes it false) |
| `AND` | True only if BOTH are true | `(5 > 3) AND (2 < 4)` | `true` |
| `OR` | True if AT LEAST ONE is true | `(5 > 3) OR (2 > 4)` | `true` (first part true) |

### Truth Tables

Here's exactly how these operators work. Memorize these – they'll be on the exam.

**NOT** – The simplest: just flips the value.

| Condition | NOT Condition |
|-----------|---------------|
| `true` | `false` |
| `false` | `true` |

**AND** – Only true when everything is true.

| A | B | A AND B |
|---|---|---------|
| `true` | `true` | `true` |
| `true` | `false` | `false` |
| `false` | `true` | `false` |
| `false` | `false` | `false` |

AND is like a strict parent: everything has to be perfect. One wrong move and it's all false.

**OR** – True if anything is true.

| A | B | A OR B |
|---|---|--------|
| `true` | `true` | `true` |
| `true` | `false` | `true` |
| `false` | `true` | `true` |
| `false` | `false` | `false` |

OR is like a relaxed friend: as long as something good is happening, they're happy.

### Building Complex Conditions

You can combine these to create sophisticated logic that matches real-world rules:

**Example 1: Voting eligibility (US)**
```
// Must be citizen AND at least 18 years old
IF (isCitizen AND age ≥ 18)
{
    DISPLAY("You can vote!")
}
```

**Example 2: Discount eligibility**
```
// Get discount if you're a student OR a senior
IF (isStudent OR age ≥ 65)
{
    DISPLAY("Discount applied!")
}
```

**Example 3: Valid input checking**
```
// Input is valid if it's not empty AND not too long
IF (NOT (input = "") AND LENGTH(input) ≤ 20)
{
    DISPLAY("Valid input")
}
```

**Example 4: Movie night decision**
```
// Watch movie if it's weekend OR (no homework AND not tired)
IF (day = "Saturday" OR day = "Sunday") OR (NOT hasHomework AND NOT isTired)
{
    DISPLAY("Movie night!")
}
```

### Order of Operations with Logical Operators

Just like arithmetic has order of operations, Boolean expressions do too. From highest precedence to lowest:

1. **Relational operators** (`=`, `≠`, `>`, `<`, `≥`, `≤`) – evaluated first
2. **`NOT`** – next
3. **`AND`** – next
4. **`OR`** – last

Parentheses can override this order, just like in math.

Let's see how this works:

```
age ← 20
hasLicense ← true

// Without parentheses – careful!
IF (age ≥ 16 AND hasLicense OR age ≥ 18)
```

How is this interpreted? Following the order:
1. Relational first: `age ≥ 16` = true, `age ≥ 18` = true
2. `AND` next: `true AND hasLicense` = `true AND true` = true
3. `OR` last: `true OR true` = true

So this condition is always true for anyone over 16 with a license OR anyone over 18. That might not be what you intended.

**With parentheses – much clearer!**
```
IF (age ≥ 16 AND (hasLicense OR age ≥ 18))
```

Now it means: age must be at least 16, AND (they have a license OR they're at least 18). Different meaning entirely.

**Pro tip:** Use parentheses even when not strictly necessary. They make your code clearer to humans and prevent bugs. There's no penalty for extra parentheses.

### De Morgan's Laws (Useful Shortcuts)

There are two rules that help simplify complex Boolean expressions. They're not required for the exam, but they'll make your life easier:

1. `NOT (A AND B)` is the same as `(NOT A) OR (NOT B)`
2. `NOT (A OR B)` is the same as `(NOT A) AND (NOT B)`

Example:
```
// Instead of this:
IF (NOT (age ≥ 16 AND hasLicense))

// You can write this:
IF (age < 16 OR NOT hasLicense)
```

These are equivalent. Use whichever is clearer for your situation.

### Boolean Variables

You can store Boolean results in variables, which makes complex conditions more readable:

```
isEligibleToDrive ← (age ≥ 16 AND hasLicense)
hasGoodAttendance ← (absences < 3)
isHonorRoll ← (gpa ≥ 3.5)

IF (isEligibleToDrive AND hasGoodAttendance AND isHonorRoll)
{
    DISPLAY("You qualify for the parking spot lottery!")
}
```

Much cleaner than putting all those conditions directly in the IF statement, right?


## Random Values – Adding Unpredictability

### Why Randomness?

Imagine if every video game played exactly the same way every time. Boring, right? Randomness makes programs interesting and unpredictable. It's used for:

- **Games** – random dice rolls, card draws, enemy spawns, loot drops
- **Simulations** – random variations in weather, traffic, particle movements
- **Security** – generating passwords, encryption keys, session tokens
- **Art** – random colors, patterns, music generation
- **Testing** – random test data to find bugs
- **Machine learning** – random initialization of models

Without randomness, computers would be completely deterministic – same input always gives same output. Randomness adds the spice of life.

### The RANDOM Function

The exam reference sheet provides:

```
RANDOM(a, b)
```

This generates and returns a **random integer** from `a` to `b`, **inclusive**. That means both `a` and `b` are possible results. Each result is **equally likely** (uniform distribution).

Examples:
```
diceRoll ← RANDOM(1, 6)      // could be 1,2,3,4,5,6
coinFlip ← RANDOM(1, 2)      // 1 = heads, 2 = tails
randomPercent ← RANDOM(0, 100)  // 0 to 100 inclusive
randomIndex ← RANDOM(1, LENGTH(list))  // random list position
```

Here's what RANDOM does visually:

```
┌─────────────────────────────────────────────────┐
│                 RANDOM(1, 6)                     │
│                                                   │
│  Possible outcomes:                               │
│                                                   │
│   ┌───┬───┬───┬───┬───┬───┐                     │
│   │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │                     │
│   └───┴───┴───┴───┴───┴───┘                     │
│                                                   │
│  Each equally likely: 1/6 chance (about 16.7%)   │
└─────────────────────────────────────────────────┘
```

### Using Randomness in Programs

Here's a simple guessing game:

```
secretNumber ← RANDOM(1, 10)
DISPLAY("I'm thinking of a number between 1 and 10.")
DISPLAY("Can you guess it?")
guess ← INPUT()

IF (guess = secretNumber)
{
    DISPLAY("Correct! Amazing!")
}
ELSE
{
    DISPLAY("Nope. I was thinking of ")
    DISPLAY(secretNumber)
}
```

Each time you run this, the secret number is different. That's the magic of randomness.

### Randomness Means Different Results Every Time

Key point: **Using random number generation in a program means each execution may produce a different result.**

Your program with RANDOM will behave differently each time it runs. That's the whole point!

```
PROCEDURE rollDice()
{
    die1 ← RANDOM(1, 6)
    die2 ← RANDOM(1, 6)
    total ← die1 + die2
    DISPLAY("You rolled ")
    DISPLAY(die1)
    DISPLAY(" and ")
    DISPLAY(die2)
    DISPLAY(" for a total of ")
    DISPLAY(total)
}

// Run once: might show 3 and 5
// Run again: might show 6 and 2
// Run again: might show 1 and 1
```

### Common Random Patterns

**Random item from a list:**
```
fruits ← ["apple", "banana", "cherry", "date"]
index ← RANDOM(1, LENGTH(fruits))
randomFruit ← fruits[index]
```

This is how games randomly select items, how music players shuffle songs, how apps show you random content.

**Random true/false (like a coin flip):**
```
IF (RANDOM(1, 2) = 1)
{
    DISPLAY("Heads")
}
ELSE
{
    DISPLAY("Tails")
}
```

**Random percentage chance:**
```
// 30% chance of something happening
IF (RANDOM(1, 100) ≤ 30)
{
    DISPLAY("Lucky you!")
}
```

This is how games calculate critical hits, random encounters, or loot drop rates.

**Random number in a range (not starting at 1):**
```
// Random between 5 and 15 inclusive
value ← RANDOM(5, 15)
```

**Random even number:**
```
// Random even between 2 and 10
value ← RANDOM(1, 5) * 2   // gives 2,4,6,8,10
```

### Important Note About Randomness

In AP CSP pseudocode, `RANDOM(a, b)` always gives you **integers**. If you need decimals, you'd have to do division:

```
// Random decimal between 0 and 1
randomDecimal ← RANDOM(0, 100) / 100
```

But for the exam, just know it returns integers.


## Putting It All Together – A Complete Example

Let's build a program that uses everything from this module:

**Rock, Paper, Scissors Game**

```
// Rock, Paper, Scissors
DISPLAY("Let's play Rock, Paper, Scissors!")
DISPLAY("Enter 1 for Rock, 2 for Paper, 3 for Scissors")
player ← INPUT()

// Computer randomly chooses
computer ← RANDOM(1, 3)

// Display choices
DISPLAY("You chose: ")
IF (player = 1) { DISPLAY("Rock") }
ELSE IF (player = 2) { DISPLAY("Paper") }
ELSE { DISPLAY("Scissors") }

DISPLAY("Computer chose: ")
IF (computer = 1) { DISPLAY("Rock") }
ELSE IF (computer = 2) { DISPLAY("Paper") }
ELSE { DISPLAY("Scissors") }

// Determine winner using Boolean logic
IF (player = computer)
{
    DISPLAY("It's a tie!")
}
ELSE IF ((player = 1 AND computer = 3) OR    // Rock beats Scissors
         (player = 2 AND computer = 1) OR    // Paper beats Rock
         (player = 3 AND computer = 2))      // Scissors beats Paper
{
    DISPLAY("You win!")
}
ELSE
{
    DISPLAY("Computer wins!")
}
```

This program uses:
- **Arithmetic** (comparing numbers 1-3)
- **Relational operators** (`=`, comparing choices)
- **Boolean logic** (`AND` and `OR` to combine winning conditions)
- **Random numbers** (computer's choice)
- Input and output
- Conditional statements (IF/ELSE IF/ELSE)


## Module 6 Summary

Let's recap everything you've learned:

### Arithmetic Expressions
- **Expressions** combine values and operators to produce a single result
- **Arithmetic operators**: `+`, `-`, `*`, `/`, `MOD`
- `MOD` gives remainder after division – super useful for:
  - Checking even/odd: `num MOD 2 = 0`
  - Wrapping around values: `value MOD limit`
  - Getting digits: `num MOD 10`
  - Cycling through options: `counter MOD max`
- **Order of operations**: parentheses first, then `*` `/` `MOD` (left to right), then `+` `-` (left to right)

### Relational Operators
- Compare values and produce Boolean (`true`/`false`) results
- Operators: `=`, `≠`, `>`, `<`, `≥`, `≤`
- Used to make decisions in programs
- **Warning**: Don't confuse assignment (`←`) with equality (`=`)

### Boolean Expressions
- **Boolean values** are `true` or `false`
- **Logical operators**: 
  - `NOT` – flips true to false, false to true
  - `AND` – true only when BOTH are true
  - `OR` – true when AT LEAST ONE is true
- Order of operations: relational first, then `NOT`, then `AND`, then `OR`
- Use parentheses to make complex conditions clear
- Store Boolean results in variables for cleaner code

### Random Values
- `RANDOM(a, b)` generates random integer from `a` to `b` inclusive
- Each result equally likely (uniform distribution)
- Makes programs behave differently each time
- Useful for games, simulations, security, testing
- Common patterns: random list item, coin flip, percentage chance

### Key Takeaways
- Expressions are how we calculate and compare
- Boolean logic lets us combine conditions to model real-world rules
- Randomness adds variety and unpredictability
- These building blocks combine to create sophisticated program behavior


## 📋 Quick Reference Card

| Operator Type | Operators | Example | Result |
|---------------|-----------|---------|--------|
| Arithmetic | `+ - * / MOD` | `17 MOD 5` | `2` |
| Relational | `= ≠ > < ≥ ≤` | `5 > 3` | `true` |
| Logical | `NOT AND OR` | `(5>3) AND (2<4)` | `true` |
| Random | `RANDOM(a,b)` | `RANDOM(1,6)` | 1-6 equally likely |

### Truth Table Summary

| A | B | A AND B | A OR B | NOT A |
|---|---|---------|--------|-------|
| T | T | T | T | F |
| T | F | F | T | F |
| F | T | F | T | T |
| F | F | F | F | T |


You now have the power to make your programs calculate, decide, and surprise. In the next module, we'll learn how to control the flow of your programs with conditionals and loops – making them truly intelligent. See you in **Module 7: Controlling the Flow – Conditionals & Loops!**