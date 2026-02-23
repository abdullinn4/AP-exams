
### 2.1 Algorithms with Selection and Repetition

### The Three Building Blocks of Algorithms

Every algorithm, no matter how complex, is built from three fundamental structures:

| Building Block | Description | Real-World Example |
|----------------|-------------|---------------------|
| **Sequencing** | Steps executed in order, one after another | Following a recipe step by step |
| **Selection** | Choosing between different paths based on a condition | If it's raining, take an umbrella |
| **Repetition** | Repeating steps multiple times | Stir the mixture until smooth |

You learned about sequencing in Unit 1. Now we focus on selection and repetition.

### Selection: Making Decisions

**Selection** occurs when the algorithm must choose how to proceed based on a true/false decision. The path taken depends on whether a condition is met.

#### Everyday Examples of Selection

- **Weather decision:** If it's raining, take an umbrella. Otherwise, wear sunglasses.
- **Shopping:** If the item is on sale, buy it. Otherwise, wait for a discount.
- **Gaming:** If the player's score reaches 100, level up. Otherwise, continue playing.

#### In Programming

Selection is implemented using **conditional statements** like `if`, `if-else`, and `if-else-if`. These allow the program to execute different code based on Boolean conditions.

```java
// Pseudocode example
if (temperature < 32) {
    wearCoat();
} else {
    wearTshirt();
}
```

The algorithm checks the condition `temperature < 32` and selects the appropriate path.

### Repetition: Doing Things Over and Over

**Repetition** (also called iteration or looping) is when a process repeats itself until a desired outcome is reached. The same steps are executed multiple times.

#### Everyday Examples of Repetition

- **Brushing teeth:** Apply toothpaste, brush each tooth, rinse. Repeat for 2 minutes.
- **Learning:** Review flashcards until you know all the terms.
- **Exercise:** Do 10 pushups, rest, repeat 3 times.

#### In Programming

Repetition is implemented using **loops** like `while` loops and `for` loops. These allow a block of code to execute multiple times.

```java
// Pseudocode example
while (hungry) {
    eatBite();
}
```

The algorithm repeats the `eatBite()` action as long as the condition `hungry` remains true.

### Combining Selection and Repetition

The real power comes from combining these building blocks. Most interesting algorithms use both selection and repetition together.

#### Example: Finding the Largest Number in a List

```
1. Start with the first number as the current maximum
2. For each remaining number in the list:
3.    If this number is greater than the current maximum:
4.        Set current maximum to this number
5. Output the final maximum
```

This algorithm uses:
- **Repetition** (step 2) to examine each number
- **Selection** (step 3) to decide whether to update the maximum

#### Example: Guessing Game

```
1. Generate a random secret number
2. Repeat until guessed correctly:
3.    Ask the player for a guess
4.    If guess equals secret number:
5.        Congratulate player and end game
6.    Else if guess is too high:
7.        Tell player "too high"
8.    Else:
9.        Tell player "too low"
```

This algorithm uses:
- **Repetition** (step 2) to keep playing until correct
- **Selection** (steps 4-9) to provide appropriate feedback

### The Importance of Order

The order in which sequencing, selection, and repetition are used dramatically affects the outcome of an algorithm.

#### Example: Different Order, Different Result

Consider a simple algorithm to process a list of numbers:

**Version A:**
```
1. Initialize sum = 0
2. For each number in list:
3.    Add number to sum
4. Output sum
```

**Version B:**
```
1. Output sum
2. Initialize sum = 0
3. For each number in list:
4.    Add number to sum
```

Version A works correctly. Version B outputs before calculating—completely wrong!

#### Why Order Matters

- **Selection** decisions depend on conditions evaluated at specific moments
- **Repetition** loops must have proper initialization and update steps
- **Sequencing** ensures that variables are defined before they're used
- The combination of all three must be carefully arranged

### Visualizing Algorithm Flow

Algorithms can be represented visually using **flowcharts**. Different shapes represent different building blocks:

```
┌─────────────┐
│   Start     │
└──────┬──────┘
       ↓
┌─────────────┐
│  Statement  │  ← Sequencing (rectangle)
└──────┬──────┘
       ↓
    ┌──┴──┐
    │     │
┌───▼───┐ │
│Condition│ │  ← Selection (diamond)
└───┬───┘ │
    │     │
   Yes    No
    │     │
┌───▼───┐ │
│ Block │ │
│   A   │ │
└───┬───┘ │
    │     │
    └──┬──┘
       ↓
┌─────────────┐
│   Loop      │  ← Repetition (loop symbol)
│ Condition   │
└──────┬──────┘
       ↓
┌─────────────┐
│    End      │
└─────────────┘
```

### Key Terminology for Topic 2.1

| Term | Definition |
|------|------------|
| **Selection** | A decision point in an algorithm where execution follows different paths based on a true/false condition |
| **Repetition** | A process that repeats itself until a desired outcome is reached (also called iteration or looping) |
| **Sequencing** | Steps executed in order, one after another |
| **Building blocks** | The three fundamental structures of algorithms: sequencing, selection, and repetition |
| **Flowchart** | A visual diagram representing the steps of an algorithm |

### AP Exam Tips

**What you need to know for the exam:**

- **Identify the building blocks:** Given a description or pseudocode, be able to identify where selection and repetition occur.
- **Recognize selection:** Look for words like "if," "otherwise," "when," "depending on"—these indicate decision points.
- **Recognize repetition:** Look for words like "repeat," "for each," "while," "until"—these indicate loops.
- **Understand order matters:** Changing the order of steps changes the algorithm's behavior. The exam tests this with code segments.
- **Real-world algorithms:** You may be asked to represent everyday processes using these building blocks.
- **No Java syntax required yet:** Topic 2.1 is conceptual. You'll learn the actual Java syntax for selection and repetition in the following topics.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Selection and repetition are the same thing." | No, selection is making a choice; repetition is doing something multiple times. |
| "All algorithms need all three building blocks." | Some simple algorithms use only sequencing. Others use only sequencing and selection. |
| "The order of steps doesn't really matter." | Order is critical! Changing the order changes the result. |
| "Repetition always means a fixed number of times." | Repetition can continue until a condition is met, not necessarily a fixed count. |
| "Selection can only have two paths." | Selection can have multiple paths (if-else-if) or nested choices. |

### Quick Reference: Building Blocks

| Building Block | Purpose | Keywords | Java Implementation |
|----------------|---------|----------|---------------------|
| Sequencing | Execute steps in order | First, then, next | Statements in order |
| Selection | Make decisions | If, otherwise, when | `if`, `if-else`, `if-else-if` |
| Repetition | Repeat steps | Repeat, while, for each | `while`, `for` loops |