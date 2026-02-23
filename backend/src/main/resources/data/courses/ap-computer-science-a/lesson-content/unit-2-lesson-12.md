### 2.12: Informal Run-Time Analysis

### What is Informal Run-Time Analysis?

**Informal run-time analysis** is the process of estimating how long a program or algorithm will take to execute by counting how many times key statements are executed. This helps programmers compare different approaches to solving the same problem and choose the more efficient one.

**Real-World Analogy:** Imagine you're choosing between two routes to school. You might count the number of traffic lights (statements) on each route to estimate which will be faster. More traffic lights usually mean more delays, just as more statement executions usually mean longer run-time.

### Statement Execution Counts

A **statement execution count** indicates the number of times a particular statement is executed when a program runs. By counting these executions, you can compare the efficiency of different algorithms without actually timing them.

#### Why Count Statement Executions?

- **Hardware-independent:** Execution counts don't depend on the speed of your computer
- **Input-independent (in a different way):** You can analyze how the count grows as input size increases
- **Algorithm comparison:** You can determine which of two algorithms is more efficient for large inputs
- **Predict performance:** Estimate how an algorithm will scale with larger data sets

### Counting Executions in Simple Loops

#### Example 1: A Single Statement Outside Any Loop

```java
System.out.println("Hello");  // Executes exactly 1 time
```

**Execution count:** 1 (constant, regardless of input)

#### Example 2: A Simple for Loop

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);     // How many times?
}
```

The print statement executes **5 times**. But let's count everything:

| Statement | Times Executed |
|-----------|----------------|
| `int i = 0` | 1 (initialization runs once) |
| `i < 5` | 6 (checked before each iteration, plus one final check when false) |
| `System.out.println(i)` | 5 (once per iteration) |
| `i++` | 5 (after each iteration) |

**Key insight:** Different statements in the same loop execute different numbers of times.

#### Example 3: Loop with Variable Bound

```java
int n = 10;
for (int i = 0; i < n; i++) {
    System.out.println(i);     // Executes n times
}
```

The print statement executes **n times**. As n grows, the execution count grows proportionally.

### Counting Executions Based on Input Size

The most useful way to analyze algorithms is to express execution counts in terms of the **input size**, typically denoted as `n`.

#### Example: Finding the Maximum in an Array

```java
public int findMax(int[] arr) {
    int max = arr[0];                    // 1 execution
    for (int i = 1; i < arr.length; i++) { 
        if (arr[i] > max) {               // n-1 executions
            max = arr[i];                  // 0 to n-1 executions (depends on data)
        }
    }
    return max;                           // 1 execution
}
```

If the array has `n` elements:
- Initialization: 1 execution
- Loop condition check: n executions (n-1 true, 1 false)
- The `if` statement: n-1 executions
- The update `max = arr[i]`: varies based on data (best case 0, worst case n-1)
- Return: 1 execution

**Total (ignoring the variable update):** approximately `2n + 1` executions of key statements.

### Counting Executions in Nested Loops

Nested loops multiply execution counts.

#### Example 1: Nested Loops with Constant Bounds

```java
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        System.out.println(i + "," + j);   // How many times?
    }
}
```

The inner statement executes **3 × 4 = 12 times**. In general, if the outer loop runs `a` times and the inner runs `b` times, the inner body executes `a × b` times.

#### Example 2: Nested Loops with Variable Bounds

```java
int n = 5;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        System.out.println(i + "," + j);   // Executes n × n = n² times
    }
}
```

This is one of the most important patterns: **nested loops where both bounds depend on n execute approximately n² times**.

#### Example 3: Inner Bound Depends on Outer

```java
int n = 5;
for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
        System.out.println(i + "," + j);   // Executes n + (n-1) + ... + 1 = n(n+1)/2 times
    }
}
```

This pattern executes about `n²/2` times—still proportional to n², but with a smaller constant factor.

### Comparing Algorithms with Execution Counts

#### Example: Linear Search vs. Binary Search (Preview)

Imagine searching for a value in a sorted array of 1000 elements:

- **Linear search:** In the worst case, checks all 1000 elements → about 1000 comparisons
- **Binary search:** Each comparison eliminates half the remaining elements → about 10 comparisons (because 2¹⁰ ≈ 1000)

The difference becomes dramatic as n grows:

| n | Linear Search (worst case) | Binary Search (worst case) |
|---|----------------------------|----------------------------|
| 10 | 10 | 4 |
| 100 | 100 | 7 |
| 1,000 | 1,000 | 10 |
| 1,000,000 | 1,000,000 | 20 |

#### Example: Two Algorithms for Finding Duplicates

**Algorithm A: Nested loops comparing all pairs**
```java
for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
        if (arr[i] == arr[j]) {
            System.out.println("Duplicate found");
        }
    }
}
```
Execution count: about `n²/2` comparisons

**Algorithm B: Sort then check adjacent**
```java
// Assume sorting takes about n log n operations
Arrays.sort(arr);                       // n log n operations
for (int i = 0; i < n - 1; i++) {
    if (arr[i] == arr[i + 1]) {         // n-1 comparisons
        System.out.println("Duplicate found");
    }
}
```
Execution count: about `n log n + n` operations

For n = 10,000:
- Algorithm A: about 50,000,000 comparisons
- Algorithm B: about 10,000 × log₂(10,000) ≈ 10,000 × 13.3 ≈ 133,000 + 10,000 ≈ 143,000 operations

Algorithm B is dramatically faster.

### Common Execution Count Patterns

| Pattern | Code Structure | Execution Count (for n iterations) |
|---------|----------------|-----------------------------------|
| Constant | `statement;` | 1 |
| Linear | `for (int i = 0; i < n; i++) { statement; }` | n |
| Quadratic | `for (int i = 0; i < n; i++) { for (int j = 0; j < n; j++) { statement; } }` | n² |
| Quadratic (triangle) | `for (int i = 0; i < n; i++) { for (int j = i; j < n; j++) { statement; } }` | n(n+1)/2 ≈ n²/2 |
| Logarithmic | Binary search pattern (preview) | log₂ n |

### Factors That Affect Execution Counts

#### 1. Input Size
The most significant factor. As input grows, algorithms with higher growth rates become impractical.

#### 2. Input Order (Best Case vs. Worst Case)

```java
// Linear search
for (int i = 0; i < n; i++) {
    if (arr[i] == target) {
        return i;  // Found it
    }
}
```

- **Best case:** target is at index 0 → 1 comparison
- **Worst case:** target not present or at last index → n comparisons
- **Average case:** about n/2 comparisons

#### 3. Constant Factors

The statement inside the loop matters too. Comparing two integers is faster than comparing two long strings. But for large n, the growth rate (n vs n²) matters much more than constant factors.

### Informal Run-Time Analysis on the AP Exam

The AP exam expects you to be able to:

1. **Count statement executions** in simple loops and nested loops
2. **Compare the efficiency** of two code segments
3. **Recognize** that nested loops typically lead to more executions than single loops
4. **Understand** that algorithms with fewer executions for large inputs are generally better

#### What You Won't Need

- Formal Big-O notation (though it's helpful to know conceptually)
- Complex mathematical proofs
- Analysis of recursive algorithms (beyond simple counting)
- Exact execution counts for every possible input

### Common Patterns to Recognize

#### Pattern 1: Single Loop → Linear Growth
```java
for (int i = 0; i < n; i++) {
    // O(1) work here
}
```
As n doubles, execution count roughly doubles.

#### Pattern 2: Independent Nested Loops → Quadratic Growth
```java
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        // O(1) work here
    }
}
```
As n doubles, execution count roughly quadruples.

#### Pattern 3: Dependent Nested Loops → Still Quadratic
```java
for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
        // O(1) work here
    }
}
```
About half of n², but still quadratic growth.

### Key Terminology for Topic 2.12

| Term | Definition |
|------|------------|
| **Statement execution count** | The number of times a particular statement is executed when a program runs |
| **Informal run-time analysis** | Estimating algorithm efficiency by counting key statement executions |
| **Input size (n)** | A measure of the amount of data an algorithm processes (e.g., array length) |
| **Best case** | The input that causes an algorithm to execute the fewest statements |
| **Worst case** | The input that causes an algorithm to execute the most statements |
| **Average case** | The expected number of executions for typical random input |

### AP Exam Tips

- **Count carefully:** When asked "how many times does this statement execute?" trace through with a small example first, then generalize.
- **Focus on the loop body:** Usually the question asks about the statement inside the deepest loop.
- **Recognize patterns:** Single loop → about n times. Nested independent loops → about n² times.
- **Consider the range:** `for (int i = 0; i < n; i++)` runs n times. `for (int i = 0; i <= n; i++)` runs n+1 times.
- **Off-by-one matters:** Pay attention to whether loops use `<` or `<=`.
- **No need for formal notation:** You won't be asked for Big-O, but understanding the concepts helps.
- **Compare, don't calculate exactly:** Often you just need to know which of two algorithms is more efficient.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "All loops run n times." | Loops can run n, n+1, n-1, or other counts depending on bounds. |
| "Nested loops always run n² times." | Only if both bounds are n and independent. Dependent bounds run about n²/2. |
| "Execution counts tell exact run-time." | They tell relative efficiency, not actual seconds. |
| "More statements always means slower." | Not necessarily—some statements are faster than others. |
| "Best case analysis is most important." | Worst case is usually more important for guarantees. |
| "Counting executions is useless for small inputs." | For small n, constant factors may dominate, but for large n, growth rate matters. |

### Quick Reference: Growth Patterns

| Loop Structure | Approximate Executions | Growth Rate |
|----------------|----------------------|-------------|
| Single statement | 1 | Constant |
| Single loop from 0 to n-1 | n | Linear |
| Single loop from 0 to n | n+1 | Linear |
| Nested loops (both n) | n² | Quadratic |
| Nested loops (inner depends on outer) | n(n+1)/2 | Quadratic |
| Binary search (preview) | log₂ n | Logarithmic |