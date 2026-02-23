### 4.12: 2D Array Traversals


### What is 2D Array Traversal?

**2D array traversal** is the process of accessing each element in a two-dimensional array, typically in a specific order. Because a 2D array has both rows and columns, traversal usually requires **nested iteration statements**—one loop for rows and another loop for columns. The order in which you visit elements depends on the problem you're solving.

**Real-World Analogy:** Imagine you're a teacher taking attendance in a classroom with rows of desks. You might go row by row, checking each student from left to right (row-major order). Or you might go column by column, checking each student from front to back (column-major order). Sometimes you might even zigzag or start from the back. The pattern you choose depends on your goal.


### Why Nested Loops?

To visit every element in a 2D array, you need one loop to iterate over rows and another, inner loop to iterate over columns for each row. The outer loop runs once per row; for each row, the inner loop runs once per column in that row.

```java
for (int row = 0; row < matrix.length; row++) {
    for (int col = 0; col < matrix[row].length; col++) {
        // process matrix[row][col]
    }
}
```

**Key principle:** The inner loop must complete all its iterations for each iteration of the outer loop.


### Row-Major Order

**Row-major order** means traversing the array row by row—that is, visiting all columns of the first row, then all columns of the second row, and so on. This is the most common traversal pattern and the default when you use nested loops with the row loop on the outside.

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

for (int row = 0; row < matrix.length; row++) {
    for (int col = 0; col < matrix[row].length; col++) {
        System.out.print(matrix[row][col] + " ");
    }
    System.out.println();  // new line after each row
}
```

**Output:**
```
1 2 3
4 5 6
7 8 9
```

**Visit order:** (0,0), (0,1), (0,2), (1,0), (1,1), (1,2), (2,0), (2,1), (2,2)

#### When to Use Row-Major Order

- Printing or displaying the array in its natural tabular form
- Performing operations that need data from the same row together (e.g., row averages)
- Most standard algorithms when no specific order is required


### Column-Major Order

**Column-major order** means traversing the array column by column—visiting all rows of the first column, then all rows of the second column, etc. To achieve this, you put the column loop on the outside and the row loop on the inside.

```java
for (int col = 0; col < matrix[0].length; col++) {
    for (int row = 0; row < matrix.length; row++) {
        System.out.print(matrix[row][col] + " ");
    }
    System.out.println();  // new line after each column
}
```

**Output:**
```
1 4 7
2 5 8
3 6 9
```

**Visit order:** (0,0), (1,0), (2,0), (0,1), (1,1), (2,1), (0,2), (1,2), (2,2)

#### When to Use Column-Major Order

- Performing operations that need data from the same column together (e.g., column averages)
- Processing data where columns have special meaning (e.g., weeks in a month)
- Transforming data between row and column orientation


### Other Traversal Patterns

#### Backwards Row-Major (Row by Row, but Each Row Reversed)

```java
for (int row = 0; row < matrix.length; row++) {
    for (int col = matrix[row].length - 1; col >= 0; col--) {
        System.out.print(matrix[row][col] + " ");
    }
    System.out.println();
}
```

**Output:**
```
3 2 1
6 5 4
9 8 7
```

#### Snaking (Zigzag) Traversal

First row left to right, second row right to left, third row left to right, etc.

```java
for (int row = 0; row < matrix.length; row++) {
    if (row % 2 == 0) {
        // left to right
        for (int col = 0; col < matrix[row].length; col++) {
            System.out.print(matrix[row][col] + " ");
        }
    } else {
        // right to left
        for (int col = matrix[row].length - 1; col >= 0; col--) {
            System.out.print(matrix[row][col] + " ");
        }
    }
    System.out.println();
}
```

**Output:**
```
1 2 3
6 5 4
7 8 9
```

#### Column-Major Backwards

Traversing columns from last to first, and within each column from last row to first.

```java
for (int col = matrix[0].length - 1; col >= 0; col--) {
    for (int row = matrix.length - 1; row >= 0; row--) {
        System.out.print(matrix[row][col] + " ");
    }
    System.out.println();
}
```

**Output:**
```
9 6 3
8 5 2
7 4 1
```


### Traversing with Enhanced for Loops

Just like with 1D arrays, you can use enhanced `for` loops to traverse 2D arrays. However, because a 2D array is an array of arrays, the outer enhanced loop variable is a 1D array (a row).

```java
for (int[] row : matrix) {        // row is a 1D array
    for (int value : row) {        // value is an element
        System.out.print(value + " ");
    }
    System.out.println();
}
```

This is equivalent to row-major order and is very readable. However, you cannot use enhanced loops for column-major order or any traversal that needs the column index, because you don't have access to the column index.

#### Limitations of Enhanced for Loops with 2D Arrays

- **Cannot do column-major traversal:** You always get rows first.
- **Cannot modify elements:** The enhanced loop variable holds a copy of the value (for primitives) or a copy of the reference (for objects). Assigning to it does not change the array.
- **Cannot access indices:** You don't know which row or column you're on.

```java
// This does NOT modify the original 2D array
for (int[] row : matrix) {
    for (int val : row) {
        val = val * 2;  // only changes local copy
    }
}

// This DOES modify the original 2D array (objects)
for (int[] row : matrix) {
    for (int i = 0; i < row.length; i++) {
        row[i] = row[i] * 2;  // modifies through row reference
    }
}
```

When using enhanced loops, the row variable is a reference to the actual row array, so you can modify elements by indexing into that row.


### Common Traversal Patterns

#### Pattern 1: Sum of All Elements

```java
int sum = 0;
for (int[] row : matrix) {
    for (int val : row) {
        sum += val;
    }
}
```

#### Pattern 2: Row Averages

```java
for (int r = 0; r < matrix.length; r++) {
    int rowSum = 0;
    for (int c = 0; c < matrix[r].length; c++) {
        rowSum += matrix[r][c];
    }
    double avg = (double) rowSum / matrix[r].length;
    System.out.println("Row " + r + " average: " + avg);
}
```

#### Pattern 3: Column Averages (requires column-major)

```java
for (int c = 0; c < matrix[0].length; c++) {
    int colSum = 0;
    for (int r = 0; r < matrix.length; r++) {
        colSum += matrix[r][c];
    }
    double avg = (double) colSum / matrix.length;
    System.out.println("Column " + c + " average: " + avg);
}
```

#### Pattern 4: Find Maximum Value

```java
int max = matrix[0][0];
for (int[] row : matrix) {
    for (int val : row) {
        if (val > max) {
            max = val;
        }
    }
}
```

#### Pattern 5: Count Elements Meeting a Condition

```java
int count = 0;
for (int[] row : matrix) {
    for (int val : row) {
        if (val % 2 == 0) {
            count++;
        }
    }
}
```

#### Pattern 6: Checkerboard Pattern (accessing only certain cells)

```java
for (int r = 0; r < matrix.length; r++) {
    for (int c = 0; c < matrix[r].length; c++) {
        if ((r + c) % 2 == 0) {  // like a checkerboard
            System.out.print(matrix[r][c] + " ");
        }
    }
}
```


### Index Bounds and Common Errors

#### Off-by-One Errors

```java
// WRONG - will cause ArrayIndexOutOfBoundsException
for (int r = 0; r <= matrix.length; r++) {
    for (int c = 0; c <= matrix[r].length; c++) {
        // when r == matrix.length, matrix[r] doesn't exist
        // when c == matrix[r].length, index out of bounds
    }
}

// CORRECT
for (int r = 0; r < matrix.length; r++) {
    for (int c = 0; c < matrix[r].length; c++) {
        // safe
    }
}
```

#### Assuming All Rows Have Same Length

For the AP exam, you can assume rectangular arrays, but it's still good practice to use `matrix[r].length` for each row rather than a fixed value.

#### Confusing Row and Column in Access

```java
// WRONG - should be matrix[row][col]
int val = matrix[col][row];
```

#### Using matrix.length for Columns

```java
// WRONG - matrix.length gives number of rows
for (int c = 0; c < matrix.length; c++) { ... }

// CORRECT
for (int c = 0; c < matrix[0].length; c++) { ... }
```


### Key Terminology for Topic 4.12

| Term | Definition |
|------|------------|
| **Row-major order** | Traversal that proceeds row by row, visiting all columns of each row before moving to the next row. |
| **Column-major order** | Traversal that proceeds column by column, visiting all rows of each column before moving to the next column. |
| **Nested iteration** | Using one loop inside another; essential for 2D array traversal. |
| **Enhanced for loop (2D)** | An outer enhanced loop over rows (each row is a 1D array) and an inner enhanced loop over elements of that row. |


### AP Exam Tips

- **Know both row-major and column-major:** The exam may ask you to trace code using either pattern. Be able to predict the output.
- **Nested loop order matters:** Outer loop = rows for row-major; outer loop = columns for column-major.
- **Enhanced for limitations:** You cannot do column-major with enhanced for; you also cannot get indices.
- **Bounds checking:** Always use `< length`, not `<=`, to avoid `ArrayIndexOutOfBoundsException`.
- **Processing subsets:** You may be asked to process only certain rows, columns, or a sub-rectangle. Adjust loop bounds accordingly.
- **Common patterns:** Sum, average, min/max, counting, and searching are frequently tested with 2D arrays in FRQ #4.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Row-major and column-major produce the same output." | No, the order of elements visited is different. |
| "Enhanced for loops can do any traversal." | No, they are limited to row-major and cannot provide indices. |
| "You can use `matrix.length` for columns." | No, `matrix.length` gives number of rows. |
| "All 2D arrays must be traversed with nested loops." | You could use a single loop with math, but nested loops are standard. |
| "The inner loop always uses the same bound." | Each row might have its own length (though rectangular for AP). |


### Quick Reference: Traversal Patterns

| Pattern | Loop Structure | Use Case |
|---------|----------------|----------|
| Row-major (indexed) | `for (int r=0; r<rows; r++) for (int c=0; c<cols; c++)` | Most operations |
| Row-major (enhanced) | `for (int[] row : arr) for (int val : row)` | Read-only, no indices needed |
| Column-major | `for (int c=0; c<cols; c++) for (int r=0; r<rows; r++)` | Column-based operations |
| Backwards row-major | `for (int r=0; r<rows; r++) for (int c=cols-1; c>=0; c--)` | Reverse each row |
| Snaking | Alternate direction each row | Special patterns |
| Sub-rectangle | Adjust start/end indices | Processing part of array |