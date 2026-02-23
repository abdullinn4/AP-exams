### 2.7: while Loops

### What is Iteration?

**Iteration** is a form of repetition in programming. Iteration statements (loops) change the flow of control by repeating a segment of code zero or more times, as long as a Boolean expression controlling the loop evaluates to `true`.

**Real-World Analogy:** Think of iteration as repeating a task until a condition is met:
- Keep stirring the sauce until it thickens
- Continue practicing until you master the skill
- Keep asking for input until the user provides valid data

Without iteration, you would have to write the same code repeatedly. With loops, you write it once and let the computer repeat it.

### The while Loop

A **while loop** is a type of iterative statement that repeatedly executes a block of code as long as a given Boolean condition remains `true`.

#### Syntax

```java
while (booleanExpression) {
    // loop body - statements to repeat
}
```

- The `booleanExpression` is evaluated before each iteration
- If it evaluates to `true`, the loop body executes
- After the body executes, control returns to the top and the condition is checked again
- This continues until the condition evaluates to `false`
- If the condition is `false` initially, the loop body is skipped entirely (executes zero times)

#### Flowchart

```
        ┌─────────────┐
        │   while     │
        │  condition  │
        └──────┬──────┘
               │
         ┌─────┴─────┐
        true        false
         ↓            ↓
   ┌─────────────┐   ↓
   │ loop body   │   │
   │ executes    │   │
   └──────┬──────┘   │
         ┌┴┐         │
         │↑──────────┘
         ↓
   ┌─────────────┐
   │  continue   │
   │   program   │
   └─────────────┘
```

### Basic while Loop Examples

**Example 1: Counting from 1 to 5**
```java
int count = 1;

while (count <= 5) {
    System.out.println("Count: " + count);
    count++;  // Don't forget to update the counter!
}

System.out.println("Loop finished");
```

**Output:**
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
Loop finished
```

**Step-by-step execution:**
1. `count = 1`, condition `1 <= 5` is true → print, increment to 2
2. `count = 2`, condition `2 <= 5` is true → print, increment to 3
3. `count = 3`, condition `3 <= 5` is true → print, increment to 4
4. `count = 4`, condition `4 <= 5` is true → print, increment to 5
5. `count = 5`, condition `5 <= 5` is true → print, increment to 6
6. `count = 6`, condition `6 <= 5` is false → exit loop
7. Print "Loop finished"

**Example 2: Summing numbers from 1 to 10**
```java
int sum = 0;
int number = 1;

while (number <= 10) {
    sum += number;  // Add current number to sum
    number++;       // Move to next number
}

System.out.println("Sum of 1 to 10: " + sum);  // 55
```

### When the Loop Body Executes Zero Times

If the condition is `false` when first evaluated, the loop body is skipped entirely. This is useful when you want to handle cases where no iteration is needed.

```java
int value = 100;

while (value < 0) {
    System.out.println("This will never print");
    value++;  // Never executed
}

System.out.println("Loop skipped");  // This prints
```

Since `100 < 0` is false, the loop body never executes.

### Infinite Loops

An **infinite loop** occurs when the Boolean expression in a loop always evaluates to `true`. The loop never terminates, causing the program to run forever (or until interrupted).

#### Common Causes of Infinite Loops

**Cause 1: Forgetting to update the loop variable**
```java
int count = 1;

while (count <= 5) {
    System.out.println("Count: " + count);
    // Missing count++ - count stays 1 forever!
}
```

**Cause 2: Updating the wrong variable**
```java
int i = 1;
int j = 1;

while (i <= 5) {
    System.out.println(i);
    j++;  // Updating j instead of i - i never changes!
}
```

**Cause 3: Condition that never becomes false**
```java
int x = 10;

while (x > 0) {
    System.out.println(x);
    x++;  // x increases, so x > 0 remains true forever!
}
```

**Cause 4: Using `=` instead of `==` in condition**
```java
boolean done = false;

while (done = false) {  // Assignment, not comparison!
    System.out.println("This will never run");
    done = true;
}
```

Here, `done = false` is an assignment that evaluates to `false`, so the loop never executes. But if the assignment were `done = true`, the loop would run forever because the condition always evaluates to `true`.

#### How to Avoid Infinite Loops

1. Always ensure the loop variable is updated inside the loop
2. Verify that the condition will eventually become false
3. Use a counter for loops that should run a specific number of times
4. Test your loops with boundary conditions

### Off-by-One Errors

An **off-by-one error** occurs when a loop iterates one time too many or one time too few. These are common logic errors that produce incorrect results.

#### Example 1: Too Few Iterations
```java
// Want to print 1 through 5
int count = 1;

while (count < 5) {  // Using < instead of <=
    System.out.println(count);
    count++;
}
```

**Output:** 1, 2, 3, 4 (missing 5)

**Fix:** Use `<=` when you want to include the upper bound.

#### Example 2: Too Many Iterations
```java
// Want to print 1 through 5
int count = 1;

while (count <= 5) {
    System.out.println(count);
    count++;  // This is correct
}

// But if initialization was wrong:
int count = 0;

while (count <= 5) {
    System.out.println(count);
    count++;
}
```

**Output:** 0, 1, 2, 3, 4, 5 (includes 0, which wasn't wanted)

**Fix:** Ensure initialization matches the desired starting point.

#### Common Off-by-One Patterns

| Desired Range | Correct Condition | Common Mistake |
|---------------|-------------------|----------------|
| 1 to 5 | `count <= 5` or `count < 6` | `count < 5` (misses 5) |
| 0 to 4 | `count < 5` or `count <= 4` | `count <= 5` (includes 5) |
| 1 to n | `count <= n` | `count < n` (misses n) |

### Loop Control Variables

A **loop control variable** is a variable whose value determines whether the loop continues. It is typically:
- Initialized before the loop
- Tested in the condition
- Updated inside the loop

```java
int i = 1;           // 1. Initialize
while (i <= 10) {    // 2. Test
    System.out.println(i);
    i++;             // 3. Update
}
```

### Common while Loop Patterns

#### Pattern 1: Counting Loop
```java
int counter = 1;
while (counter <= 10) {
    System.out.println(counter);
    counter++;
}
```

#### Pattern 2: Accumulator Loop (Sum)
```java
int sum = 0;
int num = 1;
while (num <= 100) {
    sum += num;
    num++;
}
System.out.println("Sum: " + sum);
```

#### Pattern 3: Input Validation
```java
Scanner scanner = new Scanner(System.in);
int value;

System.out.print("Enter a positive number: ");
value = scanner.nextInt();

while (value <= 0) {
    System.out.println("Invalid input. Please enter a positive number.");
    System.out.print("Enter a positive number: ");
    value = scanner.nextInt();
}

System.out.println("You entered: " + value);
```

#### Pattern 4: Reading Until Sentinel Value
```java
Scanner scanner = new Scanner(System.in);
int sum = 0;
int value;

System.out.println("Enter numbers to sum (enter -1 to stop):");
value = scanner.nextInt();

while (value != -1) {
    sum += value;
    value = scanner.nextInt();
}

System.out.println("Total sum: " + sum);
```

The sentinel value (-1) is not included in the sum.

#### Pattern 5: Searching for a Value
```java
int[] numbers = {3, 8, 2, 10, 5, 7};
int target = 10;
int index = 0;
boolean found = false;

while (index < numbers.length && !found) {
    if (numbers[index] == target) {
        found = true;
    } else {
        index++;
    }
}

if (found) {
    System.out.println("Found " + target + " at index " + index);
} else {
    System.out.println(target + " not found");
}
```

#### Pattern 6: Processing Until Condition Met
```java
Random rand = new Random();
int target = 25;
int guess;
int attempts = 0;

// Keep generating random numbers until we get the target
do {
    guess = rand.nextInt(50) + 1;  // 1 to 50
    attempts++;
    System.out.println("Attempt " + attempts + ": " + guess);
} while (guess != target);

System.out.println("Found " + target + " in " + attempts + " attempts!");
```

### Tracing while Loops

When tracing while loops on the AP exam, follow this process:

1. Identify the loop control variable and its initial value
2. Check the condition before each iteration
3. Execute the loop body if condition is true
4. Update the loop control variable (if applicable)
5. Repeat until condition becomes false
6. Continue with code after the loop

**Example to trace:**
```java
int x = 3;
int y = 1;

while (x > 0) {
    y = y * x;
    x--;
}

System.out.println(y);
```

**Trace table:**

| Iteration | x (before) | Condition | y (before) | y (after) | x (after) |
|-----------|------------|-----------|------------|-----------|-----------|
| 1 | 3 | true | 1 | 1*3 = 3 | 2 |
| 2 | 2 | true | 3 | 3*2 = 6 | 1 |
| 3 | 1 | true | 6 | 6*1 = 6 | 0 |
| 4 | 0 | false | - | - | - |

**Output:** 6

### Common Errors with while Loops

| Error | Example | Problem | Fix |
|-------|---------|---------|-----|
| Infinite loop (missing update) | `while (x < 10) { sum += x; }` | x never changes | Add `x++` or appropriate update |
| Infinite loop (wrong update direction) | `x = 1; while (x > 0) { x++; }` | x increases, never becomes ≤ 0 | Decrease x instead |
| Off-by-one error | `while (x < 10)` when need 1-10 | Misses last value | Use `<=` or adjust bounds |
| Semicolon after while | `while (x < 10); { body }` | Loop body is empty, infinite loop | Remove semicolon |
| Using `=` instead of `==` | `while (done = false)` | Assignment, not comparison | Use `==` or `!=` |
| Condition never true | `while (x > 10)` when x starts at 1 | Loop never executes | Check initialization |

### Key Terminology for Topic 2.7

| Term | Definition |
|------|------------|
| **Iteration** | A form of repetition where a block of code is executed multiple times |
| **while loop** | An iterative statement that executes a block of code as long as a Boolean condition is true |
| **Loop body** | The block of code inside the loop that repeats |
| **Infinite loop** | A loop whose condition never becomes false, causing it to run forever |
| **Off-by-one error** | An error where a loop executes one time too many or one time too few |
| **Loop control variable** | A variable whose value determines whether the loop continues |
| **Sentinel value** | A special value that signals the end of input or loop termination |

### AP Exam Tips

- **Know when to use while loops:** When you don't know in advance how many iterations you need (e.g., input validation, reading until sentinel).
- **Trace carefully:** Create a trace table for complex loops. The AP exam often asks for output or final values.
- **Infinite loop recognition:** Be able to identify code that will cause an infinite loop.
- **Off-by-one errors:** These are common on the exam. Check boundary conditions.
- **Loop body execution:** Remember that if the condition is false initially, the body executes zero times.
- **Sentinel patterns:** Know how to read input until a sentinel value is encountered.
- **Combined conditions:** While loops often use compound Boolean expressions. Remember short-circuit evaluation.
- **No enhanced for loops here:** Those are for arrays and ArrayLists (Unit 4). while loops are more flexible.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "A while loop always executes at least once." | No, if the condition is false initially, the body is skipped entirely. |
| "The condition is checked after the body executes." | No, it's checked before each iteration (pretest loop). |
| "Infinite loops always crash the program." | They just run forever; the program may appear frozen but doesn't crash. |
| "Loop variables must be integers." | They can be any type that can be compared in a Boolean expression. |
| "A semicolon after while is optional." | A semicolon creates an empty body, which is usually a bug. |
| "The loop condition can only use the loop variable." | It can use any variables, but the loop variable is most common. |

### Quick Reference: while Loop Patterns

| Pattern | Structure | Use Case |
|---------|-----------|----------|
| Counter loop | `int i = 1; while (i <= n) { i++; }` | Known number of iterations |
| Sentinel loop | `while (input != sentinel) { }` | Read until special value |
| Validation loop | `while (invalid) { get input; }` | Repeat until valid input |
| Search loop | `while (!found && more) { }` | Search with early exit |