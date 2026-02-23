### 2.11: Nested Iteration

### What Are Nested Iteration Statements?

**Nested iteration** occurs when one loop (the **outer loop**) contains another loop (the **inner loop**) inside its body. The inner loop executes completely for each iteration of the outer loop.

**Real-World Analogy:** Think of a clock. The minute hand (outer loop) advances once per hour, but for each hour, the second hand (inner loop) completes a full cycle of 60 seconds. The inner loop runs to completion for every single tick of the outer loop.

### Why Use Nested Loops?

Nested loops are essential when you need to:
- Process rows and columns in a grid (2D arrays, coming in Unit 4)
- Generate patterns like multiplication tables
- Compare each element of a collection with every other element
- Perform repetitive tasks that depend on multiple counters

### Execution Order of Nested Loops

The key principle: **The inner loop runs to completion for each iteration of the outer loop.**

```java
for (int outer = 1; outer <= 3; outer++) {
    System.out.println("Outer iteration: " + outer);
    
    for (int inner = 1; inner <= 2; inner++) {
        System.out.println("  Inner iteration: " + inner);
    }
}
```

**Output:**
```
Outer iteration: 1
  Inner iteration: 1
  Inner iteration: 2
Outer iteration: 2
  Inner iteration: 1
  Inner iteration: 2
Outer iteration: 3
  Inner iteration: 1
  Inner iteration: 2
```

**Trace:**
- Outer `outer = 1`: prints, then inner runs `inner = 1` and `inner = 2`
- Outer `outer = 2`: prints, then inner runs again from 1 to 2
- Outer `outer = 3`: prints, then inner runs again from 1 to 2

The inner loop is **re‑initialized** each time the outer loop executes. Its variables are independent of the outer iteration (unless they share the same variable name, which is not recommended).

### Visualizing Nested Loops

```
Outer loop (i = 1 to 3)
│
├─ Inner loop (j = 1 to 2) runs fully
│  │
│  ├─ j = 1
│  └─ j = 2
│
├─ Next outer iteration (i = 2)
│  ├─ j = 1
│  └─ j = 2
│
└─ ...
```

### Types of Nested Loops

Any combination of loop types can be nested: `for` inside `for`, `while` inside `for`, `for` inside `while`, etc. The behavior remains the same: the inner loop completes all its repetitions for each outer repetition.

#### Nested for Loops (Most Common)
```java
for (int row = 1; row <= 3; row++) {
    for (int col = 1; col <= 4; col++) {
        System.out.print("* ");
    }
    System.out.println(); // new line after each row
}
```
Output:
```
* * * *
* * * *
* * * *
```

#### while Loop Inside for Loop
```java
for (int i = 1; i <= 3; i++) {
    int j = 1;
    while (j <= i) {
        System.out.print(j + " ");
        j++;
    }
    System.out.println();
}
```
Output:
```
1 
1 2 
1 2 3 
```

#### for Loop Inside while Loop
```java
int i = 1;
while (i <= 3) {
    for (int j = 1; j <= 2; j++) {
        System.out.print("(" + i + "," + j + ") ");
    }
    System.out.println();
    i++;
}
```
Output:
```
(1,1) (1,2) 
(2,1) (2,2) 
(3,1) (3,2) 
```

#### Nested while Loops
```java
int i = 1;
while (i <= 3) {
    int j = 1;
    while (j <= 2) {
        System.out.print(i * j + " ");
        j++;
    }
    System.out.println();
    i++;
}
```
Output:
```
1 2 
2 4 
3 6 
```

### Common Nested Loop Patterns

#### Pattern 1: Multiplication Table
```java
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
        System.out.printf("%4d", i * j);
    }
    System.out.println();
}
```

#### Pattern 2: Right‑Angle Triangle of Stars
```java
for (int row = 1; row <= 5; row++) {
    for (int star = 1; star <= row; star++) {
        System.out.print("*");
    }
    System.out.println();
}
```
Output:
```
*
**
***
****
*****
```

#### Pattern 3: Pyramid
```java
int rows = 5;
for (int i = 1; i <= rows; i++) {
    // print spaces
    for (int j = i; j < rows; j++) {
        System.out.print(" ");
    }
    // print stars
    for (int k = 1; k <= (2 * i - 1); k++) {
        System.out.print("*");
    }
    System.out.println();
}
```

#### Pattern 4: Comparing Elements (Pseudo‑code)
```java
int[] arr = {3, 1, 4, 1, 5};
for (int i = 0; i < arr.length; i++) {
    for (int j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            System.out.println("Duplicate: " + arr[i]);
        }
    }
}
```

### Counting Iterations in Nested Loops

The total number of times the inner loop body executes is the product of the number of outer iterations and the number of inner iterations per outer iteration—but only if the inner loop's bounds are constant.

**Example 1: Constant inner bound**
```java
for (int i = 0; i < 5; i++) {          // outer: 5 times
    for (int j = 0; j < 3; j++) {      // inner: 3 times each outer
        // body executes 5 * 3 = 15 times
    }
}
```

**Example 2: Inner bound depends on outer**
```java
for (int i = 1; i <= 5; i++) {          // outer: 5 times
    for (int j = 1; j <= i; j++) {      // inner runs i times
        // total executions = 1 + 2 + 3 + 4 + 5 = 15
    }
}
```

This sum can be calculated as `n(n+1)/2` when `i` runs from 1 to `n`.

### Tracing Nested Loops

When you need to determine the output of a nested loop, create a trace table or step through mentally.

**Example:**
```java
int x = 0;
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= i; j++) {
        x += i;
    }
}
System.out.println(x);
```

**Trace:**
| i | j loop runs | x before | x after |
|---|-------------|----------|---------|
| 1 | j = 1       | 0        | 0+1 = 1 |
| 2 | j = 1,2     | 1        | 1+2=3, then 3+2=5 |
| 3 | j = 1,2,3   | 5        | 5+3=8, 8+3=11, 11+3=14 |

**Output:** 14

### Common Errors with Nested Loops

| Error | Example | Problem | Fix |
|-------|---------|---------|-----|
| Reusing the same loop variable | `for (int i=0; i<5; i++) { for (i=0; i<3; i++) { } }` | Inner loop modifies outer counter, causing unexpected behavior | Use distinct variable names (`i` for outer, `j` for inner) |
| Wrong inner loop bounds | `for (int i=0; i<5; i++) { for (int j=0; j<i; j++) { } }` when you intended j < 5 | Inner loop runs fewer times than expected | Check the condition carefully |
| Off‑by‑one in patterns | Using `<=` instead of `<` or vice versa | Too many or too few stars/spaces | Test with small numbers first |
| Missing braces | `for (...) for (...) statement;` | Only one statement belongs to inner loop, rest after | Always use braces for clarity |
| Infinite inner loop | `while (true) { for (...) { } }` or `for (;;)` | Inner loop never terminates | Ensure inner loop has a proper update and exit condition |
| Forgetting to reset inner variable | Using a while loop without re‑initializing inside outer | Inner loop runs only once | Initialize inner variable inside outer loop |

### Performance Considerations

Nested loops can become computationally expensive. If the outer loop runs `n` times and the inner loop runs `m` times, the body executes `n * m` times. This is acceptable for small values, but for large data sets (e.g., thousands of elements), nested loops can cause performance issues. In this course, you will only be asked to trace or write simple nested loops, not analyze their efficiency formally.

### Key Terminology for Topic 2.11

| Term | Definition |
|------|------------|
| **Nested iteration** | One loop (the outer loop) containing another loop (the inner loop) inside its body |
| **Outer loop** | The loop that encloses another loop; its iterations control how many times the inner loop starts over |
| **Inner loop** | The loop contained inside another loop; it runs fully for each iteration of the outer loop |
| **Iteration count** | The total number of times the inner loop body executes, often the product of the number of outer and inner repetitions (if constant) |

### AP Exam Tips

- **Execution order is key:** The inner loop always completes all its iterations before the outer loop moves to its next iteration.
- **Tracing:** Create a small trace table when the loops are short. For longer loops, look for patterns (e.g., triangle numbers).
- **Common patterns:** Recognizing patterns like printing triangles or rectangles helps you write code quickly.
- **Variable scope:** The loop variable of the outer loop is accessible inside the inner loop, but avoid modifying it there.
- **Nested loops appear in free‑response:** They are often used with 2D arrays (Unit 4), so understanding them now is essential.
- **Combining loops and conditionals:** Nested loops often contain `if` statements to filter or process only certain elements.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "The inner loop runs only once per outer loop." | It runs as many times as its condition allows—every time. |
| "Nested loops are only for arrays." | They are also used for patterns, comparisons, and many other tasks. |
| "You can't nest different types of loops." | Any loop can be nested inside any other loop type. |
| "The outer loop variable can't be used in the inner loop." | It can be used, but changing it inside the inner loop will disrupt the outer loop's behavior. |
| "Nested loops always have constant iteration counts." | The inner loop's bounds can depend on the outer loop variable, leading to variable iteration counts. |

### Quick Reference: Nested Loop Patterns

| Pattern | Structure | Use Case |
|---------|-----------|----------|
| Rectangle (constant bounds) | `for (row=0; row<R; row++) for (col=0; col<C; col++)` | Grids, tables |
| Triangle (increasing bound) | `for (row=1; row<=n; row++) for (col=1; col<=row; col++)` | Star patterns, half matrices |
| Triangle (decreasing bound) | `for (row=n; row>=1; row--) for (col=1; col<=row; col++)` | Inverted patterns |
| Compare all pairs | `for (i=0; i<len; i++) for (j=i+1; j<len; j++)` | Duplicate detection, pair analysis |