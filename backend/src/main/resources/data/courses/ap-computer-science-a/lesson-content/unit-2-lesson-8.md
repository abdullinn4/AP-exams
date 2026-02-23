### 2.8: for Loops

### The for Loop

A **for loop** is a type of iterative statement that provides a compact way to write loops that have a initialization, condition, and update all in one line. It is especially useful when you know exactly how many times you want to repeat an action.

**Real-World Analogy:** Think of a for loop as a numbered checklist:
- Start with item 1 (initialization)
- As long as you haven't reached the last item (condition)
- Complete the task and move to the next item (update)

### for Loop Syntax

```java
for (initialization; condition; update) {
    // loop body - statements to repeat
}
```

The header contains three parts separated by semicolons:

| Part | Description | Example |
|------|-------------|---------|
| **initialization** | Executed once at the beginning | `int i = 0;` |
| **condition** | Boolean expression checked before each iteration | `i < 10;` |
| **update** | Executed after each iteration | `i++` |

#### Flowchart

```
        ┌─────────────────┐
        │  initialization │
        └────────┬────────┘
                 ↓
        ┌────────┴────────┐
        │    condition    │
        │     true?       │
        └────────┬────────┘
                 │
           ┌─────┴─────┐
          true        false
           ↓            ↓
   ┌─────────────┐     ↓
   │  loop body  │     │
   │  executes   │     │
   └──────┬──────┘     │
          ↓            │
   ┌─────────────┐     │
   │   update    │     │
   └──────┬──────┘     │
         ┌┴┐           │
         │↑────────────┘
         ↓
   ┌─────────────┐
   │  continue   │
   │   program   │
   └─────────────┘
```

### How a for Loop Executes

The execution order is precise and important to understand:

1. **Initialization** runs once, before the loop begins
2. **Condition** is evaluated
   - If true, enter the loop body
   - If false, exit the loop entirely
3. **Loop body** executes
4. **Update** runs after the body completes
5. Return to step 2 (check condition again)

#### Step-by-Step Example

```java
for (int i = 1; i <= 3; i++) {
    System.out.println("Iteration: " + i);
}
System.out.println("Loop finished");
```

**Execution trace:**
- **Step 1 (Initialization):** `int i = 1` (runs once)
- **Step 2 (Condition):** `1 <= 3` is true → enter loop
- **Step 3 (Body):** Print "Iteration: 1"
- **Step 4 (Update):** `i++` → `i` becomes 2
- **Step 5 (Condition):** `2 <= 3` is true → enter loop
- **Step 6 (Body):** Print "Iteration: 2"
- **Step 7 (Update):** `i++` → `i` becomes 3
- **Step 8 (Condition):** `3 <= 3` is true → enter loop
- **Step 9 (Body):** Print "Iteration: 3"
- **Step 10 (Update):** `i++` → `i` becomes 4
- **Step 11 (Condition):** `4 <= 3` is false → exit loop
- **Step 12:** Print "Loop finished"

**Output:**
```
Iteration: 1
Iteration: 2
Iteration: 3
Loop finished
```

### Basic for Loop Examples

**Example 1: Counting from 1 to 5**
```java
for (int count = 1; count <= 5; count++) {
    System.out.println("Count: " + count);
}
```

**Example 2: Counting down from 5 to 1**
```java
for (int count = 5; count >= 1; count--) {
    System.out.println("Count: " + count);
}
```

**Example 3: Summing numbers from 1 to 10**
```java
int sum = 0;
for (int num = 1; num <= 10; num++) {
    sum += num;
}
System.out.println("Sum: " + sum);  // 55
```

**Example 4: Even numbers only**
```java
for (int i = 2; i <= 10; i += 2) {
    System.out.println(i);  // 2, 4, 6, 8, 10
}
```

**Example 5: Multiple statements in update**
```java
for (int i = 1, j = 10; i <= 5; i++, j--) {
    System.out.println("i=" + i + ", j=" + j);
}
```

### The Loop Control Variable

The variable declared in the initialization is called the **loop control variable**. Its scope is limited to the for loop—it cannot be used after the loop ends.

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
// System.out.println(i);  // ERROR! i is not defined here
```

If you need the variable after the loop, declare it before the loop:

```java
int i;
for (i = 0; i < 5; i++) {
    System.out.println(i);
}
System.out.println("Final value of i: " + i);  // 5
```

### Converting Between for and while Loops

Every for loop can be rewritten as a while loop, and vice versa. Understanding this equivalence helps you choose the right loop for the situation.

#### for to while Conversion

**for loop version:**
```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

**Equivalent while loop:**
```java
int i = 1;           // initialization
while (i <= 5) {     // condition
    System.out.println(i);
    i++;             // update
}
```

#### while to for Conversion

**while loop version:**
```java
int num = 2;
while (num <= 20) {
    System.out.println(num);
    num += 2;
}
```

**Equivalent for loop:**
```java
for (int num = 2; num <= 20; num += 2) {
    System.out.println(num);
}
```

#### When to Use Each

| Use for loops when... | Use while loops when... |
|----------------------|------------------------|
| You know exactly how many iterations | You don't know how many iterations |
| You have a clear counter variable | The number of iterations depends on user input |
| You want all loop control in one place | You're reading until a sentinel value |
| Counting or iterating through a range | The loop might not execute at all |

### Common for Loop Patterns

#### Pattern 1: Iterating Through an Array
```java
int[] scores = {85, 92, 78, 90, 88};
for (int i = 0; i < scores.length; i++) {
    System.out.println("Score " + i + ": " + scores[i]);
}
```

#### Pattern 2: Finding Maximum Value
```java
int[] numbers = {3, 8, 2, 10, 5, 7};
int max = numbers[0];
for (int i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
System.out.println("Maximum: " + max);
```

#### Pattern 3: Calculating Average
```java
double[] values = {2.5, 3.7, 1.8, 4.2, 3.9};
double sum = 0;
for (int i = 0; i < values.length; i++) {
    sum += values[i];
}
double average = sum / values.length;
System.out.println("Average: " + average);
```

#### Pattern 4: Processing Every Other Element
```java
for (int i = 0; i < array.length; i += 2) {
    // Process elements at even indices
}
```

#### Pattern 5: Reverse Iteration
```java
for (int i = array.length - 1; i >= 0; i--) {
    // Process array from last to first
}
```

#### Pattern 6: Nested for Loops (Preview)
```java
for (int row = 1; row <= 3; row++) {
    for (int col = 1; col <= 4; col++) {
        System.out.print("* ");
    }
    System.out.println();  // new line after each row
}
```

**Output:**
```
* * * *
* * * *
* * * *
```

### Common Errors with for Loops

| Error | Example | Problem | Fix |
|-------|---------|---------|-----|
| Off-by-one (too few) | `for (int i = 0; i < 5; i++)` wanting 1-5 | Starts at 0, ends at 4 | `i = 1; i <= 5; i++` |
| Off-by-one (too many) | `for (int i = 0; i <= 5; i++)` wanting 0-4 | Includes 5 | `i < 5` or `i <= 4` |
| Infinite loop (missing update) | `for (int i = 0; i < 10; )` | No update, i never changes | Add `i++` in update |
| Infinite loop (wrong update) | `for (int i = 10; i > 0; i++)` | i increases, never < 0 | `i--` instead of `i++` |
| Using semicolon after header | `for (int i = 0; i < 5; i++); { body }` | Semicolon creates empty body | Remove semicolon |
| Modifying loop variable inside | `for (int i = 0; i < 10; i++) { i = 5; }` | Skips iterations | Don't modify inside |
| Using `=` instead of `==` | `for (int i = 0; i = 5; i++)` | Assignment, not comparison | Use `==` or `<=` |

### Tracing for Loops

When tracing for loops on the AP exam, follow the execution order carefully:

1. Run initialization (once)
2. Check condition
3. Execute body if condition true
4. Run update
5. Repeat from step 2

**Example to trace:**
```java
int result = 0;
for (int k = 1; k <= 4; k += 2) {
    result += k;
}
System.out.println(result);
```

**Trace table:**

| Iteration | k (before condition) | Condition | k (after update) | result after body |
|-----------|----------------------|-----------|-------------------|-------------------|
| 1 | 1 | 1 <= 4 true | 3 | 0 + 1 = 1 |
| 2 | 3 | 3 <= 4 true | 5 | 1 + 3 = 4 |
| 3 | 5 | 5 <= 4 false | - | - |

**Output:** 4

### for Loop Variations

#### Multiple Initialization or Update Statements
You can have multiple statements separated by commas:

```java
for (int i = 0, j = 10; i <= 5; i++, j--) {
    System.out.println("i=" + i + ", j=" + j);
}
```

#### Declaring Variables Outside the Loop
```java
int i;
for (i = 0; i < 10; i++) {
    System.out.println(i);
}
// i is still accessible here
```

#### Empty Parts (Not Recommended)
All three parts are optional, but this can lead to confusing code:

```java
int i = 0;
for (; i < 10; ) {  // initialization and update outside
    System.out.println(i);
    i++;
}
```

**Best Practice:** Keep all three parts together for clarity.

### Key Terminology for Topic 2.8

| Term | Definition |
|------|------------|
| **for loop** | An iterative statement with initialization, condition, and update in one header |
| **Initialization** | The part of a for loop that runs once at the beginning |
| **Condition** | Boolean expression checked before each iteration |
| **Update** | Statement executed after each iteration |
| **Loop control variable** | Variable that controls the number of iterations |
| **Off-by-one error** | Loop executes one too many or one too few times |

### AP Exam Tips

- **Know the execution order:** Initialization → Condition → Body → Update → (repeat from Condition). This is tested frequently.
- **Scope of loop variable:** The variable declared in initialization is only accessible inside the loop.
- **Converting between for and while:** Be able to rewrite one as the other. This appears on multiple-choice questions.
- **Off-by-one errors:** Pay attention to whether loops start at 0 or 1 and whether conditions use `<` or `<=`.
- **Array traversal:** for loops are commonly used to traverse arrays (i = 0 to length-1).
- **Nested loops:** You'll see nested for loops in later topics, especially with 2D arrays.
- **Update can be anything:** It doesn't have to be `i++`. It can be `i += 2`, `i--`, or any expression.
- **Tracing practice:** Create trace tables for complex loops to avoid mistakes.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "The update runs before the body." | No, update runs after the body, before the next condition check. |
| "The loop variable can be used after the loop." | Only if declared before the loop, not in the initialization. |
| "All three parts are required." | They're optional, but omitting them usually indicates a poor design. |
| "for loops are always better than while loops." | Each has appropriate uses; while loops are better for sentinel-controlled loops. |
| "The condition is checked after the update." | It's checked before each iteration, including the first. |
| "You can't have multiple statements in initialization." | You can, separated by commas. |

### Quick Reference: for Loop Patterns

| Pattern | Example | Use Case |
|---------|---------|----------|
| Forward 0 to n-1 | `for (int i = 0; i < n; i++)` | Array traversal |
| Forward 1 to n | `for (int i = 1; i <= n; i++)` | Counting from 1 |
| Backward | `for (int i = n-1; i >= 0; i--)` | Reverse traversal |
| Step by 2 | `for (int i = 0; i < n; i += 2)` | Every other element |
| Multiple variables | `for (int i = 0, j = n; i < j; i++, j--)` | Two indices |

### for vs while: Quick Comparison

| Aspect | for Loop | while Loop |
|--------|----------|------------|
| Syntax | `for (init; cond; update)` | `while (cond)` |
| Best for | Counted iterations | Condition-controlled loops |
| Loop control | All in one line | Scattered (init before, update inside) |
| Readability | Clear for counting | Clear for sentinel loops |