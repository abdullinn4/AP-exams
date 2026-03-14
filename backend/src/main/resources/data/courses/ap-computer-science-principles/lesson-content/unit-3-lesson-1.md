## Storing Information – Variables & Lists

You've made it to the good stuff. Modules 1 through 4 were all about understanding what programs do, how computers think, and how data works. But now? Now we actually start **programming**. This is where you stop being a passenger and start being the driver.

Every program you'll ever write—whether it's a simple calculator, a social media app, or the next viral game—needs to store and manage information. That's where **variables** and **lists** come in. They're the most basic tools in a programmer's toolbox, and once you understand them, you can build almost anything.

Think of variables as labeled boxes where you stash values. Think of lists as shelves with multiple compartments, each holding something different. Together, they let you organize data so your program can actually do something useful.

Let's dive in.


## Variables – Your Program's Memory

### What Is a Variable?

A **variable** is an abstraction inside a program that can hold a value. It's like a labeled box where you store information. The box has a name (the variable name) and contents (the value). You can look inside the box, change what's inside, or use the value in calculations.

Here's the key idea: **Each variable has associated data storage that represents one value at a time.** But that one value could be a single number, a piece of text, or even a whole list (which itself contains multiple values). So variables can hold simple things or complex collections.

In AP CSP pseudocode, we create variables and assign values using the `←` operator (left arrow):

```
score ← 95
name ← "Alex"
isPassing ← true
```

After these statements:
- The variable `score` holds the number 95
- `name` holds the text "Alex"
- `isPassing` holds the Boolean value `true`

### Why Variable Names Matter

You can name variables almost anything, but **meaningful names** are crucial. Compare these two code snippets:

**Bad:**
```
x ← 95
y ← "Alex"
z ← true
```

**Good:**
```
finalExamScore ← 95
studentName ← "Alex"
passedCourse ← true
```

Which one is easier to understand? The second one, obviously. When you come back to your code six months later (or when another programmer reads it), meaningful names tell you what each variable represents without needing comments.

**Pro tip:** Variable names should describe what they hold. `total`, `average`, `userAge`, `isLoggedIn` – these instantly communicate their purpose.

### Data Types: What Kind of Value Lives Here?

Some programming languages (like Java) are strict about what kind of value a variable can hold. Others (like Python) are more flexible. AP CSP pseudocode doesn't enforce strict types, but you'll work with these common kinds of data:

| Type | What it holds | Examples |
|------|---------------|----------|
| **Number** | Numeric values, can be integers or decimals | 42, 3.14, -7, 0.5 |
| **Boolean** | True or false values | `true`, `false` |
| **String** | Text, sequences of characters | "Hello", "Alex", "123 Main St" |
| **List** | Ordered collection of elements | [95, 87, 92], ["apple", "banana", "cherry"] |

Different data are suited to different representations. You wouldn't store someone's age as a string like "eighteen" if you need to calculate with it. And you wouldn't store a password as a number (what if it starts with 0?). Choose the right type for the job.

### Assignment: Changing a Variable's Value

The **assignment operator** (`←`) lets you change what a variable holds. It evaluates the expression on the right and stores a copy of the result in the variable on the left.

```
score ← 95                 // score now holds 95
score ← score + 5          // score now holds 100
```

Wait, what happened there? The right side `score + 5` uses the *current* value of `score` (95), adds 5 to get 100, then assigns that new value back to `score`. The old value is gone.

This is super important: **The value stored in a variable will always be the most recent value assigned.** Previous values are overwritten.

Here's a sequence to watch:

```
a ← 1
b ← a
a ← 2
DISPLAY(b)
```

What does this display? If you guessed 1, you're right! Let's trace it:

```
Step 1: a ← 1      // a = 1
Step 2: b ← a      // b gets a COPY of a's value → b = 1
Step 3: a ← 2      // a changes to 2, but b is still 1 (it has its own copy)
Step 4: DISPLAY(b) // shows 1
```

Variables hold **copies** of values, not connections. Changing `a` doesn't change `b` because they're separate boxes.

Here's a visual of what's happening:

```
┌─────────────────────────────────────────────────┐
│                 VARIABLE ASSIGNMENT              │
│                                                   │
│  Step 1:  a ← 1                                  │
│           ┌─────┐                                │
│           │  a  │ │  1  │                        │
│           └─────┘                                │
│                                                   │
│  Step 2:  b ← a                                  │
│           ┌─────┐    ┌─────┐                    │
│           │  a  │ │  1  │    │  b  │ │  1  │    │
│           └─────┘    └─────┘                    │
│                                                   │
│  Step 3:  a ← 2                                  │
│           ┌─────┐    ┌─────┐                    │
│           │  a  │ │  2  │    │  b  │ │  1  │    │
│           └─────┘    └─────┘                    │
│                                                   │
│  b still holds its own copy of 1.                 │
└─────────────────────────────────────────────────┘
```


## Strings – Working with Text

A **string** is an ordered sequence of characters. That's fancy talk for "text." Strings can contain letters, numbers, spaces, punctuation – anything you can type.

In AP CSP pseudocode, we write strings inside quotes:

```
firstName ← "Taylor"
lastName ← "Swift"
greeting ← "Hello, " + firstName + " " + lastName
```

### String Operations

The two main things you do with strings are:

1. **Concatenation** – Joining strings together end-to-end using the `+` operator
2. **Substrings** – Extracting part of a string

**Concatenation example:**

```
firstName ← "Alex"
lastName ← "Chen"
fullName ← firstName + " " + lastName   // "Alex Chen"
message ← "Welcome, " + fullName + "!"   // "Welcome, Alex Chen!"
```

**Substring concept:** Every character in a string has a position (index), starting at 1 for the first character. So in the string "Hello", position 1 is 'H', position 2 is 'e', position 3 is 'l', etc.

The exam reference sheet provides operations for working with strings, but the basic idea is you can access individual characters or ranges.

```
word ← "Hello"
firstChar ← word[1]      // "H"
```

Strings are a lot like lists of characters – you can access individual characters by index, but you can't modify them directly in AP CSP pseudocode (strings are immutable, meaning once created they can't be changed – you'd create a new string instead).


## Lists – Storing Multiple Values

### What Is a List?

A **list** is an ordered sequence of elements. It's like a row of numbered boxes, each holding a value. Lists let you store multiple related items under a single variable name.

Think of a grocery list: instead of separate variables for `item1`, `item2`, `item3`, you have one list `groceries` containing all the items.

In AP CSP pseudocode, we create lists like this:

```
scores ← [95, 87, 92, 78, 88]
names ← ["Alex", "Jordan", "Taylor", "Casey"]
mixed ← [42, "hello", true, 3.14]     // lists can hold different types
emptyList ← []
```

### List Terminology

- **Element** – An individual value in the list
- **Index** – The position number of an element (starting at 1)
- **Length** – The number of elements in the list

For `scores ← [95, 87, 92, 78, 88]`:

| Index | Element |
|-------|---------|
| 1 | 95 |
| 2 | 87 |
| 3 | 92 |
| 4 | 78 |
| 5 | 88 |

Length = 5

### Why Lists Are Powerful

Lists let you treat a collection of related items as a single unit. This is a form of **data abstraction** – you're hiding the complexity of multiple values behind one name.

Without lists, you'd need separate variables for every single score:

```
score1 ← 95
score2 ← 87
score3 ← 92
score4 ← 78
score5 ← 88
```

That's tedious and doesn't scale. What if you have 100 scores? What if you don't know in advance how many there will be? Lists solve this problem elegantly.

### List Operations (EK AAP-2.N.1)

The AP CSP Exam Reference Sheet provides these essential list operations:

| Operation | Syntax | What it does |
|-----------|--------|--------------|
| **Create a list** | `list ← [value1, value2, value3]` | Creates a new list with those values |
| **Create empty list** | `list ← []` | Creates a list with no elements |
| **Copy a list** | `listA ← listB` | Assigns a copy of listB to listA |
| **Access element** | `list[i]` | Returns the element at index i |
| **Assign to element** | `list[i] ← value` | Changes the element at index i |
| **Insert** | `INSERT(list, i, value)` | Inserts value at index i, shifting others right |
| **Append** | `APPEND(list, value)` | Adds value to the end of the list |
| **Remove** | `REMOVE(list, i)` | Removes element at index i, shifting others left |
| **Length** | `LENGTH(list)` | Returns the number of elements |

Let's see each one in action with detailed examples.

#### Creating Lists

```
fruits ← ["apple", "banana", "cherry"]
numbers ← [1, 2, 3, 4, 5]
empty ← []
```

#### Copying Lists

```
original ← [10, 20, 30]
copy ← original                // copy gets [10, 20, 30]
original[1] ← 99               // original becomes [99, 20, 30]
// copy is still [10, 20, 30] – it's an independent copy
```

#### Accessing Elements

```
scores ← [95, 87, 92, 78, 88]
firstScore ← scores[1]      // firstScore = 95
thirdScore ← scores[3]       // thirdScore = 92
lastScore ← scores[5]        // lastScore = 88
```

**Important:** List indices start at 1, not 0! This is different from many programming languages (Python, Java, JavaScript all start at 0). AP CSP pseudocode uses 1-based indexing. Memorize this – it'll be on the exam.

#### Assigning to Elements

You can change the value at a specific index using assignment.

```
scores ← [95, 87, 92, 78, 88]
scores[2] ← 91               // now [95, 91, 92, 78, 88]
scores[4] ← scores[4] + 5    // now [95, 91, 92, 83, 88]
```

You can also assign between elements:

```
scores[1] ← scores[5]        // now [88, 91, 92, 83, 88]
```

#### Inserting Elements

`INSERT(list, i, value)` puts a new value at position i, shifting everything from i onward to the right. The list length increases by 1.

```
names ← ["Alex", "Jordan", "Taylor"]
INSERT(names, 2, "Casey")
// names is now ["Alex", "Casey", "Jordan", "Taylor"]
```

Visual:

```
Before: [Alex, Jordan, Taylor]
          1      2       3

Insert at position 2:
          1      2       3       4
After:  [Alex, Casey, Jordan, Taylor]
```

If you insert at position 1, the new element becomes the first and everything shifts right:

```
numbers ← [10, 20, 30]
INSERT(numbers, 1, 5)
// numbers becomes [5, 10, 20, 30]
```

If you insert at position `LENGTH(list)+1`, it's like appending (but APPEND is clearer):

```
names ← ["Alex", "Jordan"]
INSERT(names, 3, "Taylor")   // same as APPEND(names, "Taylor")
```

#### Appending Elements

`APPEND(list, value)` adds a new value to the end of the list. It's simpler than INSERT when you just want to add to the end.

```
names ← ["Alex", "Jordan", "Taylor"]
APPEND(names, "Riley")
// names is now ["Alex", "Jordan", "Taylor", "Riley"]
```

APPEND is equivalent to `INSERT(list, LENGTH(list)+1, value)` but easier to read and write.

#### Removing Elements

`REMOVE(list, i)` removes the element at position i, shifting everything after it left. The list length decreases by 1.

```
names ← ["Alex", "Jordan", "Taylor", "Riley"]
REMOVE(names, 2)
// names is now ["Alex", "Taylor", "Riley"]
```

Visual:

```
Before: [Alex, Jordan, Taylor, Riley]
          1      2       3       4

Remove position 2:
After:  [Alex, Taylor, Riley]
          1      2       3
```

If you remove the last element, no shifting happens – it's just gone.

#### Getting the Length

`LENGTH(list)` returns the number of elements.

```
names ← ["Alex", "Jordan", "Taylor"]
count ← LENGTH(names)        // count = 3
```

This is super useful for loops and checking if a list is empty.

### Important Rule About List Indices

The exam reference sheet has a crucial rule: **If a list index is less than 1 or greater than the length of the list, an error message is produced and the program will terminate.**

So if you try:

```
scores ← [95, 87, 92]
value ← scores[4]      // ERROR! Index 4 > length 3
```

Your program crashes. Always make sure your indices are valid.


## Data Abstraction – Why Lists Make Your Life Easier

### What Is Data Abstraction?

**Data abstraction** is a fancy term for hiding complexity. It provides a separation between the abstract properties of a data type and the concrete details of its representation.

In plain English: You don't need to know *how* the list works internally – just *what* it does. You trust that `APPEND` adds something to the end, without worrying about the underlying memory management.

When you use a list, you're practicing data abstraction. You're taking multiple values and giving them a single name, ignoring the messy details of how they're stored.

### How Lists Manage Complexity

Lists manage complexity in programs by giving a collection of data a name without referencing the specific details of the representation. Let me show you why this matters with a concrete example.

**Scenario:** You're writing a program to track test scores for a class. You need to calculate the average, find the highest score, and maybe add new scores as they come in.

**Without a list:**
```
score1 ← 95
score2 ← 87
score3 ← 92
score4 ← 78
score5 ← 88

total ← score1 + score2 + score3 + score4 + score5
average ← total / 5

// To find the max, you'd have to compare each variable:
max ← score1
IF (score2 > max) { max ← score2 }
IF (score3 > max) { max ← score3 }
IF (score4 > max) { max ← score4 }
IF (score5 > max) { max ← score5 }

// To add a new score, you'd need to create score6 and update everything
```

This works, but it's a nightmare:
- What if you have 100 scores? You'd need 100 variables and 100 lines of comparisons.
- What if you don't know in advance how many scores? Impossible.
- What if you need to add a score? You'd have to create a new variable and update all calculations manually.

**With a list:**
```
scores ← [95, 87, 92, 78, 88]

// Calculate average
total ← 0
FOR EACH score IN scores
{
    total ← total + score
}
average ← total / LENGTH(scores)

// Find maximum
max ← scores[1]
FOR EACH score IN scores
{
    IF (score > max)
    {
        max ← score
    }
}

// Add a new score
APPEND(scores, 91)   // scores now has 6 elements
```

Now:
- Works with any number of scores – 5, 100, or 1000.
- Adding a new score? Just `APPEND` – no need to change any other code.
- The loops automatically handle whatever size the list is.

This is what the College Board means when they say data abstractions manage complexity. **The program becomes easier to develop and maintain** because changes to the data don't require rewriting large chunks of code.

### Real-World Analogy

Imagine you're organizing a party and you need to keep track of who's coming. Without abstraction, you'd have a separate sticky note for each person:

- Note1: "Alex"
- Note2: "Jordan"
- Note3: "Taylor"

If someone new RSVPs, you have to create a new sticky note. If someone cancels, you have to find their note and throw it away. To count guests, you have to count all the notes manually.

With abstraction, you have a **guest list** – a single piece of paper with all the names written in a list. To add someone, you just write their name at the bottom. To remove someone, you cross them out. To count, you just count the names. The guest list is your data abstraction.

Lists work the same way in programming.


## Common Algorithms with Lists

Now that you understand lists, let's look at some classic algorithms that use them. These patterns appear over and over in real programs.

### Finding the Maximum Value

Here's a procedure to find the largest number in a list:

```
PROCEDURE findMax(numbers)
{
    maxSoFar ← numbers[1]           // start with first element
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

How it works:
1. Assume the first element is the largest.
2. Look at each remaining element. If you find one bigger than your current max, update max.
3. After checking all, return the max.

Test it: `findMax([3, 7, 2, 9, 5])` → returns 9

### Finding the Minimum Value

Almost identical, just flip the comparison:

```
PROCEDURE findMin(numbers)
{
    minSoFar ← numbers[1]
    FOR EACH num IN numbers
    {
        IF (num < minSoFar)
        {
            minSoFar ← num
        }
    }
    RETURN minSoFar
}
```

### Computing the Sum

```
PROCEDURE sumList(numbers)
{
    total ← 0
    FOR EACH num IN numbers
    {
        total ← total + num
    }
    RETURN total
}
```

### Computing the Average

```
PROCEDURE averageList(numbers)
{
    IF (LENGTH(numbers) = 0)
    {
        RETURN 0   // avoid division by zero
    }
    total ← sumList(numbers)   // you can reuse the sum procedure
    RETURN total / LENGTH(numbers)
}
```

### Linear Search (Sequential Search)

Linear search checks each element in order until it finds what it's looking for:

```
PROCEDURE findValue(list, target)
{
    position ← 1
    FOR EACH item IN list
    {
        IF (item = target)
        {
            RETURN position   // return the index where found
        }
        position ← position + 1
    }
    RETURN -1          // not found (using -1 since indices are positive)
}
```

This algorithm checks every element – if the list has n items, it might need up to n checks. If the item isn't there, it checks all n. That's okay for small lists, but for huge lists we might want something faster (like binary search, which we'll cover later).


## Common Mistakes and How to Avoid Them

### Off-by-One Errors

Because AP CSP uses 1-based indexing, it's easy to accidentally use 0 (like in many other languages). Remember: **first element is at index 1.**

```
scores ← [95, 87, 92]
first ← scores[1]   // correct
first ← scores[0]   // ERROR! Index 0 is invalid
```

### Forgetting That Assignment Copies

When you do `listA ← listB`, you get a **copy** of the list, not a connection. Changing one doesn't change the other:

```
list1 ← [1, 2, 3]
list2 ← list1        // list2 gets a copy [1, 2, 3]
list1[1] ← 99        // list1 is now [99, 2, 3], but list2 is still [1, 2, 3]
```

This is different from some languages where lists are reference types – in AP CSP pseudocode, assignment always makes a copy.

### Modifying a List While Iterating

Be careful when you remove elements while looping through a list – it can skip items or cause errors. For example, suppose you want to remove all negative numbers:

```
numbers ← [5, -3, 2, -1, 4]
FOR EACH num IN numbers
{
    IF (num < 0)
    {
        REMOVE(numbers, ?)   // but which index? This is tricky
    }
}
```

You can't easily remove while using `FOR EACH` because the list changes under your feet. The safe approach is often to build a new list of items you want to keep:

```
PROCEDURE removeNegatives(numbers)
{
    positives ← []
    FOR EACH num IN numbers
    {
        IF (num >= 0)
        {
            APPEND(positives, num)
        }
    }
    RETURN positives
}
```

### Index Out of Bounds

Always ensure your index is between 1 and `LENGTH(list)` inclusive. Before accessing `list[i]`, you might check:

```
IF (i >= 1 AND i <= LENGTH(list))
{
    value ← list[i]
}
ELSE
{
    DISPLAY("Invalid index")
}
```

### Confusing Index and Value

A common beginner mistake: thinking that `list[i]` gives you the index i. No, it gives you the value *at* index i.

```
fruits ← ["apple", "banana", "cherry"]
x ← fruits[2]        // x = "banana", not 2
```


## Putting It All Together – A Complete Example

Let's build a simple program that manages a student's grades. It will:
- Store scores in a list
- Allow adding new scores
- Calculate average
- Find the highest score
- Display all scores

```
// Main program
scores ← [85, 92, 78, 90]

// Add a new score
APPEND(scores, 88)

// Calculate average
total ← 0
FOR EACH score IN scores
{
    total ← total + score
}
average ← total / LENGTH(scores)
DISPLAY("Average: ")
DISPLAY(average)

// Find highest
highest ← scores[1]
FOR EACH score IN scores
{
    IF (score > highest)
    {
        highest ← score
    }
}
DISPLAY("Highest: ")
DISPLAY(highest)

// Display all scores
DISPLAY("All scores: ")
FOR EACH score IN scores
{
    DISPLAY(score)
}
```

This program works no matter how many scores are in the list. Add 100 more scores – the code doesn't change. That's the power of data abstraction.


## Module 5 Summary

Let's recap everything you've learned in this module:

### Variables
- A **variable** is a named container holding a value.
- Use **meaningful names** to make code readable (e.g., `studentName` not `x`).
- **Assignment** (`←`) stores a new value, overwriting the old one.
- Variables hold **copies** of values, not connections – changing one doesn't affect another.

### Data Types
- **Numbers** – integers and decimals for calculations.
- **Booleans** – `true` or `false` for decisions.
- **Strings** – text, can be concatenated with `+`.
- **Lists** – ordered collections of elements.

### Strings
- Strings are ordered sequences of characters.
- Access characters by index: `str[1]` gives the first character.
- Concatenate with `+`: `"Hello, " + name`.

### Lists
- A **list** is an ordered collection of elements.
- **Index** starts at 1; invalid indices crash the program.
- Key operations:
  - `list[i]` – access element
  - `list[i] ← value` – assign to element
  - `INSERT(list, i, value)` – insert at position i
  - `APPEND(list, value)` – add to end
  - `REMOVE(list, i)` – remove at position i
  - `LENGTH(list)` – get number of elements
- Lists can hold different types of elements.

### Data Abstraction
- Lists enable **data abstraction** – grouping related data under one name.
- This **manages complexity** because code works for any list size.
- Programs become **easier to develop and maintain** – changes to data don't require rewriting code.

### Common Algorithms
- **Find max/min** – loop through, track the best so far.
- **Sum and average** – accumulate total, divide by length.
- **Linear search** – check each element until found.

### Common Mistakes
- Off-by-one (using index 0)
- Forgetting assignment copies lists
- Modifying lists while iterating
- Index out of bounds
- Confusing index and value


You now have the fundamental building blocks for storing and organizing data in your programs. In the next module, we'll learn how to manipulate that data with expressions and operators – doing math, making comparisons, and using Boolean logic. Get ready for Module 6: Doing the Math – Expressions & Randomness!