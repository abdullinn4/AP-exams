### 4.11: 2D Array Creation and Access

### What is a 2D Array?

A **two‑dimensional (2D) array** is an array of arrays. It can be thought of as a table with rows and columns, where each element is accessed by its row and column indices. 2D arrays are ideal for representing grid‑like data—game boards, spreadsheets, pixel images, seating charts, or any data that naturally fits a tabular format.

**Real‑World Analogy:** Imagine a bingo card or a chessboard. You have rows (numbered from top to bottom) and columns (from left to right). To locate a specific cell, you need both the row number and the column number. In a 2D array, each element is identified by a pair of indices: `array[row][col]`.

### Declaring and Creating a 2D Array

Like a 1D array, a 2D array is a reference type. You declare it with two pairs of square brackets.

```java
int[][] matrix;           // declares a 2D array of ints
String[][] seatingChart;  // declares a 2D array of Strings
```

To actually create the array and allocate memory, you use the `new` keyword with the sizes for rows and columns.

```java
int[][] matrix = new int[3][4];   // 3 rows, 4 columns
```

This creates a 2D array with 3 rows and 4 columns. All elements are initialized to the default value for the type (0 for `int`, 0.0 for `double`, `false` for `boolean`, `null` for reference types).

#### Important: Rectangular Only

For the AP exam, 2D arrays are always **rectangular**—every row has the same number of columns. Non‑rectangular (ragged) arrays are outside the scope.

### Accessing Elements

Elements are accessed using two indices: the first for the row, the second for the column. Indices start at 0.

```java
int[][] matrix = new int[3][4];
matrix[0][0] = 5;           // first row, first column
matrix[1][2] = 10;          // second row, third column
int value = matrix[2][3];    // last row, last column
```

The pattern is always `arrayName[row][col]`. When reading an element, you can use it in expressions; when writing, you assign a value.

### Initializer Lists for 2D Arrays

You can create and initialize a 2D array in one step using nested initializer lists. The outer braces enclose the rows; each row is itself an initializer list.

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

This creates a 3×3 array with the given values. The number of rows is the number of inner lists; the number of columns is the length of each inner list (they must all be the same for a rectangular array).

You can also use the `new` keyword with an initializer list, but it's less common:

```java
int[][] matrix = new int[][] {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

### The `length` Attribute for 2D Arrays

Because a 2D array is an array of arrays, it has a `length` attribute that tells you the number of **rows**. To get the number of columns, you must look at the `length` of any row (usually the first row).

```java
int[][] matrix = new int[3][4];
int rows = matrix.length;        // 3
int cols = matrix[0].length;     // 4 (number of columns in first row)
```

**Important:** This works only if the array is rectangular (all rows have the same length). For the AP exam, that's guaranteed.

In nested loops, you typically use these lengths to control the loops:

```java
for (int r = 0; r < matrix.length; r++) {
    for (int c = 0; c < matrix[r].length; c++) {
        System.out.print(matrix[r][c] + " ");
    }
    System.out.println();
}
```

### Accessing an Entire Row

You can treat a single row as a 1D array. For example, to pass a row to a method that expects a 1D array:

```java
int[] firstRow = matrix[0];   // firstRow refers to the first row of matrix
```

This is a reference to the actual row; modifying `firstRow` will modify the original 2D array.

### Default Values

When a 2D array is created with `new`, all elements are automatically initialized to default values:

| Element Type | Default Value |
|--------------|---------------|
| `int` | `0` |
| `double` | `0.0` |
| `boolean` | `false` |
| reference type | `null` |

```java
int[][] intArr = new int[2][3];       // all 0
double[][] dblArr = new double[2][3];  // all 0.0
boolean[][] boolArr = new boolean[2][3]; // all false
String[][] strArr = new String[2][3];   // all null
```

### Index Bounds and Exceptions

Just like 1D arrays, valid row indices are from `0` to `rows - 1`, and valid column indices from `0` to `cols - 1`. Using an index outside these ranges throws an `ArrayIndexOutOfBoundsException`.

```java
int[][] grid = new int[5][5];
grid[5][0] = 10;   // Exception! row index 5 is out of bounds
grid[0][5] = 20;   // Exception! column index 5 is out of bounds
```

Always ensure your loops stay within bounds.

### Memory Representation (Conceptual)

A 2D array is stored as an array of references to 1D arrays. The variable holds a reference to the outer array; each element of the outer array is a reference to a 1D array (a row).

```
int[][] matrix = new int[3][4];

Memory (simplified):
matrix ──→ [ ][ ][ ]   (each [] is a reference to a row)
             │  │  │
             ↓  ↓  ↓
            [ ][ ][ ] ...  (actual row arrays of length 4)
```

This representation explains why `matrix[0]` is a valid 1D array and why `matrix.length` gives the number of rows.

### Common Pitfalls

| Pitfall | Example | Explanation |
|---------|---------|-------------|
| Confusing rows and columns | `int x = matrix[col][row];` | Always `[row][col]`. |
| Off‑by‑one in loops | `for (int r = 0; r <= matrix.length; r++)` | Should be `< matrix.length`. |
| Assuming `matrix[0].length` works for empty array | `int cols = matrix[0].length;` if `matrix.length == 0` | Accessing `matrix[0]` would throw exception. |
| Modifying a row reference | `int[] row = matrix[0]; row = new int[5];` | This does not change the 2D array; `row` just points elsewhere. |
| Using `matrix.length` for columns | `for (int c = 0; c < matrix.length; c++)` inside column loop | Should use `matrix[r].length`. |

### Key Terminology for Topic 4.11

| Term | Definition |
|------|------------|
| **2D array** | An array of arrays, used to represent tabular data. |
| **Row** | The first dimension; accessed with the first index. |
| **Column** | The second dimension; accessed with the second index. |
| **Rectangular array** | A 2D array where all rows have the same number of columns. |
| **Row‑major order** | Storing elements row by row (the default in Java). |
| **Nested initializer list** | A list of lists used to initialize a 2D array. |

### AP Exam Tips

- **Declaration syntax:** `int[][] arr = new int[rows][cols];` or `int[][] arr = {{...}};`.
- **Access always `[row][col]`:** The first index is the row, the second is the column.
- **Lengths:** `arr.length` gives number of rows; `arr[0].length` gives number of columns (assuming rectangular).
- **Bounds checking:** Indices go from 0 to `length-1`. Invalid indices throw `ArrayIndexOutOfBoundsException`.
- **Initializer lists:** Know how to create a 2D array with literal values.
- **No ragged arrays:** On the AP exam, all rows have the same length.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "2D arrays are stored as a grid in memory." | They are stored as an array of references to row arrays. |
| "`arr.length` gives the number of columns." | No, it gives the number of rows. |
| "All rows must have the same length." | For the AP exam, yes—they are rectangular. |
| "You can access a 2D element with `arr[i,j]`." | No, use `arr[i][j]`. |
| "The default value for an `int` 2D array is `null`." | No, it's 0; `null` is only for reference types. |

### Quick Reference: 2D Array Creation

| Syntax | Description |
|--------|-------------|
| `int[][] a = new int[3][4];` | 3 rows, 4 columns, all 0. |
| `int[][] a = {{1,2},{3,4}};` | 2×2 array with given values. |
| `int rows = a.length;` | Number of rows. |
| `int cols = a[0].length;` | Number of columns (if at least one row). |
| `a[r][c] = value;` | Assign to row r, column c. |
| `int val = a[r][c];` | Read from row r, column c. |