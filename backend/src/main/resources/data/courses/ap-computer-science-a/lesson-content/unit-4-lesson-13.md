### 4.13: Implementing 2D Array Algorithms


### Why 2D Array Algorithms Matter

Two-dimensional arrays are essential for representing grid‑based data—game boards, pixel images, seating charts, matrices, and more. The algorithms you learn here build on the traversal patterns from Topic 4.12 and apply them to solve real problems. These algorithms appear frequently on the AP exam, especially in free‑response question #4, where you'll need to process, analyze, and modify data stored in a 2D array.

**Real-World Analogy:** Think of a 2D array like a spreadsheet. You might need to find the highest value in a column, compute the average of a row, check if any cell meets a condition, or shift an entire row left when you delete an entry. Each of these tasks requires a specific algorithm—and knowing the pattern lets you solve them quickly.


### Standard 2D Array Algorithms

The AP CS A course identifies several standard algorithms that utilize 2D array traversals. Many are extensions of 1D array algorithms, but with the added complexity of two dimensions.

| Algorithm | Description |
|-----------|-------------|
| Minimum/Maximum | Find smallest or largest value in entire array or in a specific row/column |
| Sum/Average | Compute total or mean for entire array or a specific row/column |
| Property check (any/all) | Determine if any/all elements meet a condition (whole array or subsection) |
| Count | Count elements satisfying a condition (whole array or subsection) |
| Consecutive pairs | Access adjacent elements (horizontally or vertically) |
| Duplicate detection | Determine if duplicates exist in the array or a subsection |
| Shift/Rotate | Move elements in a row left/right or in a column up/down |
| Reverse | Reverse the order of elements in a row or column |


### Algorithm 1: Minimum and Maximum

#### Maximum Value in the Entire 2D Array

```java
public static int findMax(int[][] arr) {
    int max = arr[0][0];
    for (int[] row : arr) {
        for (int val : row) {
            if (val > max) {
                max = val;
            }
        }
    }
    return max;
}
```

#### Minimum Value in the Entire 2D Array

```java
public static int findMin(int[][] arr) {
    int min = arr[0][0];
    for (int[] row : arr) {
        for (int val : row) {
            if (val < min) {
                min = val;
            }
        }
    }
    return min;
}
```

#### Maximum in a Specific Row

```java
public static int maxInRow(int[][] arr, int row) {
    int max = arr[row][0];
    for (int col = 1; col < arr[row].length; col++) {
        if (arr[row][col] > max) {
            max = arr[row][col];
        }
    }
    return max;
}
```

#### Maximum in a Specific Column

```java
public static int maxInColumn(int[][] arr, int col) {
    int max = arr[0][col];
    for (int row = 1; row < arr.length; row++) {
        if (arr[row][col] > max) {
            max = arr[row][col];
        }
    }
    return max;
}
```


### Algorithm 2: Sum and Average

#### Sum of All Elements

```java
public static int sumAll(int[][] arr) {
    int total = 0;
    for (int[] row : arr) {
        for (int val : row) {
            total += val;
        }
    }
    return total;
}
```

#### Average of All Elements

```java
public static double averageAll(int[][] arr) {
    int total = sumAll(arr);
    int count = arr.length * arr[0].length;  // assumes rectangular
    return (double) total / count;
}
```

#### Sum of a Specific Row

```java
public static int sumRow(int[][] arr, int row) {
    int total = 0;
    for (int col = 0; col < arr[row].length; col++) {
        total += arr[row][col];
    }
    return total;
}
```

#### Sum of a Specific Column

```java
public static int sumColumn(int[][] arr, int col) {
    int total = 0;
    for (int row = 0; row < arr.length; row++) {
        total += arr[row][col];
    }
    return total;
}
```

#### Average of a Subsection (e.g., a 2x2 block)

```java
public static double averageBlock(int[][] arr, int startRow, int startCol, int rows, int cols) {
    int sum = 0;
    for (int r = startRow; r < startRow + rows; r++) {
        for (int c = startCol; c < startCol + cols; c++) {
            sum += arr[r][c];
        }
    }
    return (double) sum / (rows * cols);
}
```


### Algorithm 3: Determine if At Least One Element Has a Property

#### Check if Any Element is Negative

```java
public static boolean anyNegative(int[][] arr) {
    for (int[] row : arr) {
        for (int val : row) {
            if (val < 0) {
                return true;
            }
        }
    }
    return false;
}
```

#### Check if Any Element in a Specific Row Meets a Condition

```java
public static boolean anyInRow(int[][] arr, int row, int target) {
    for (int col = 0; col < arr[row].length; col++) {
        if (arr[row][col] == target) {
            return true;
        }
    }
    return false;
}
```

#### Check if Any Element in a Specific Column Meets a Condition

```java
public static boolean anyInColumn(int[][] arr, int col, int target) {
    for (int row = 0; row < arr.length; row++) {
        if (arr[row][col] == target) {
            return true;
        }
    }
    return false;
}
```


### Algorithm 4: Determine if All Elements Have a Property

#### Check if All Elements are Positive

```java
public static boolean allPositive(int[][] arr) {
    for (int[] row : arr) {
        for (int val : row) {
            if (val <= 0) {
                return false;
            }
        }
    }
    return true;
}
```

#### Check if All Elements in a Specific Row are Positive

```java
public static boolean allPositiveInRow(int[][] arr, int row) {
    for (int col = 0; col < arr[row].length; col++) {
        if (arr[row][col] <= 0) {
            return false;
        }
    }
    return true;
}
```

#### Check if All Elements in a Specific Column are Positive

```java
public static boolean allPositiveInColumn(int[][] arr, int col) {
    for (int row = 0; row < arr.length; row++) {
        if (arr[row][col] <= 0) {
            return false;
        }
    }
    return true;
}
```


### Algorithm 5: Count Elements That Meet a Criterion

#### Count Even Numbers in the Entire Array

```java
public static int countEvens(int[][] arr) {
    int count = 0;
    for (int[] row : arr) {
        for (int val : row) {
            if (val % 2 == 0) {
                count++;
            }
        }
    }
    return count;
}
```

#### Count in a Specific Row

```java
public static int countInRow(int[][] arr, int row, int target) {
    int count = 0;
    for (int col = 0; col < arr[row].length; col++) {
        if (arr[row][col] == target) {
            count++;
        }
    }
    return count;
}
```

#### Count in a Specific Column

```java
public static int countInColumn(int[][] arr, int col, int target) {
    int count = 0;
    for (int row = 0; row < arr.length; row++) {
        if (arr[row][col] == target) {
            count++;
        }
    }
    return count;
}
```

#### Count in a Subsection (e.g., border cells)

```java
public static int countBorderZeros(int[][] arr) {
    int count = 0;
    // top row
    for (int c = 0; c < arr[0].length; c++) {
        if (arr[0][c] == 0) count++;
    }
    // bottom row
    for (int c = 0; c < arr[arr.length-1].length; c++) {
        if (arr[arr.length-1][c] == 0) count++;
    }
    // left column (excluding corners already counted)
    for (int r = 1; r < arr.length - 1; r++) {
        if (arr[r][0] == 0) count++;
    }
    // right column (excluding corners)
    for (int r = 1; r < arr.length - 1; r++) {
        if (arr[r][arr[r].length-1] == 0) count++;
    }
    return count;
}
```

### Algorithm 6: Access All Consecutive Pairs of Elements

#### Horizontal Consecutive Pairs (within each row)

```java
public static void printHorizontalPairs(int[][] arr) {
    for (int r = 0; r < arr.length; r++) {
        for (int c = 0; c < arr[r].length - 1; c++) {
            System.out.println("(" + arr[r][c] + ", " + arr[r][c+1] + ")");
        }
    }
}
```

#### Vertical Consecutive Pairs (within each column)

```java
public static void printVerticalPairs(int[][] arr) {
    for (int c = 0; c < arr[0].length; c++) {
        for (int r = 0; r < arr.length - 1; r++) {
            System.out.println("(" + arr[r][c] + ", " + arr[r+1][c] + ")");
        }
    }
}
```

#### Check if Any Row is Sorted (ascending)

```java
public static boolean hasSortedRow(int[][] arr) {
    for (int r = 0; r < arr.length; r++) {
        boolean sorted = true;
        for (int c = 0; c < arr[r].length - 1; c++) {
            if (arr[r][c] > arr[r][c+1]) {
                sorted = false;
                break;
            }
        }
        if (sorted) return true;
    }
    return false;
}
```


### Algorithm 7: Determine Presence or Absence of Duplicate Elements

#### Duplicates in Entire Array (nested loops)

```java
public static boolean hasDuplicates(int[][] arr) {
    for (int r1 = 0; r1 < arr.length; r1++) {
        for (int c1 = 0; c1 < arr[r1].length; c1++) {
            int val = arr[r1][c1];
            for (int r2 = r1; r2 < arr.length; r2++) {
                int startCol = (r2 == r1) ? c1 + 1 : 0;
                for (int c2 = startCol; c2 < arr[r2].length; c2++) {
                    if (arr[r2][c2] == val) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
```

This quadruple‑nested loop is O(n⁴) but demonstrates the concept. For the AP exam, you might only need to detect duplicates within a row or column.

#### Duplicates in a Specific Row

```java
public static boolean hasDuplicatesInRow(int[][] arr, int row) {
    for (int i = 0; i < arr[row].length; i++) {
        for (int j = i + 1; j < arr[row].length; j++) {
            if (arr[row][i] == arr[row][j]) {
                return true;
            }
        }
    }
    return false;
}
```

#### Duplicates in a Specific Column

```java
public static boolean hasDuplicatesInColumn(int[][] arr, int col) {
    for (int i = 0; i < arr.length; i++) {
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[i][col] == arr[j][col]) {
                return true;
            }
        }
    }
    return false;
}
```


### Algorithm 8: Shift or Rotate Elements

#### Shift a Row Left by One (first element lost)

```java
public static void shiftRowLeft(int[][] arr, int row) {
    for (int col = 0; col < arr[row].length - 1; col++) {
        arr[row][col] = arr[row][col + 1];
    }
    arr[row][arr[row].length - 1] = 0;  // optional: set last to default
}
```

#### Shift a Row Right by One (last element lost)

```java
public static void shiftRowRight(int[][] arr, int row) {
    for (int col = arr[row].length - 1; col > 0; col--) {
        arr[row][col] = arr[row][col - 1];
    }
    arr[row][0] = 0;  // optional
}
```

#### Rotate a Row Left (first element moves to end)

```java
public static void rotateRowLeft(int[][] arr, int row) {
    if (arr[row].length <= 1) return;
    int first = arr[row][0];
    for (int col = 0; col < arr[row].length - 1; col++) {
        arr[row][col] = arr[row][col + 1];
    }
    arr[row][arr[row].length - 1] = first;
}
```

#### Rotate a Row Right (last element moves to front)

```java
public static void rotateRowRight(int[][] arr, int row) {
    if (arr[row].length <= 1) return;
    int last = arr[row][arr[row].length - 1];
    for (int col = arr[row].length - 1; col > 0; col--) {
        arr[row][col] = arr[row][col - 1];
    }
    arr[row][0] = last;
}
```

#### Shift a Column Up by One (top element lost)

```java
public static void shiftColumnUp(int[][] arr, int col) {
    for (int row = 0; row < arr.length - 1; row++) {
        arr[row][col] = arr[row + 1][col];
    }
    arr[arr.length - 1][col] = 0;
}
```

#### Shift a Column Down by One (bottom element lost)

```java
public static void shiftColumnDown(int[][] arr, int col) {
    for (int row = arr.length - 1; row > 0; row--) {
        arr[row][col] = arr[row - 1][col];
    }
    arr[0][col] = 0;
}
```


### Algorithm 9: Reverse the Order of Elements

#### Reverse a Row

```java
public static void reverseRow(int[][] arr, int row) {
    int left = 0;
    int right = arr[row].length - 1;
    while (left < right) {
        int temp = arr[row][left];
        arr[row][left] = arr[row][right];
        arr[row][right] = temp;
        left++;
        right--;
    }
}
```

#### Reverse a Column

```java
public static void reverseColumn(int[][] arr, int col) {
    int top = 0;
    int bottom = arr.length - 1;
    while (top < bottom) {
        int temp = arr[top][col];
        arr[top][col] = arr[bottom][col];
        arr[bottom][col] = temp;
        top++;
        bottom--;
    }
}
```

#### Reverse All Rows (mirror horizontally)

```java
public static void reverseAllRows(int[][] arr) {
    for (int row = 0; row < arr.length; row++) {
        reverseRow(arr, row);
    }
}
```


### Combining Algorithms

Real problems often require combining multiple algorithms.

#### Example: Find the Row with the Highest Average

```java
public static int rowWithHighestAverage(int[][] arr) {
    int bestRow = 0;
    double bestAvg = averageRow(arr, 0);
    
    for (int r = 1; r < arr.length; r++) {
        double avg = averageRow(arr, r);
        if (avg > bestAvg) {
            bestAvg = avg;
            bestRow = r;
        }
    }
    return bestRow;
}

public static double averageRow(int[][] arr, int row) {
    int sum = 0;
    for (int c = 0; c < arr[row].length; c++) {
        sum += arr[row][c];
    }
    return (double) sum / arr[row].length;
}
```

#### Example: Check if the Array is a Magic Square (all rows, columns, diagonals sum to same value)

```java
public static boolean isMagicSquare(int[][] arr) {
    int target = sumRow(arr, 0);
    
    // Check all rows
    for (int r = 1; r < arr.length; r++) {
        if (sumRow(arr, r) != target) return false;
    }
    
    // Check all columns
    for (int c = 0; c < arr[0].length; c++) {
        if (sumColumn(arr, c) != target) return false;
    }
    
    // Check main diagonal
    int diagSum = 0;
    for (int i = 0; i < arr.length; i++) {
        diagSum += arr[i][i];
    }
    if (diagSum != target) return false;
    
    // Check other diagonal
    diagSum = 0;
    for (int i = 0; i < arr.length; i++) {
        diagSum += arr[i][arr.length - 1 - i];
    }
    return diagSum == target;
}
```


### Key Terminology for Topic 4.13

| Term | Definition |
|------|------------|
| **2D array algorithm** | A standard operation performed on a two‑dimensional array (min, max, sum, search, etc.) |
| **Row‑wise processing** | Algorithms that operate on each row independently |
| **Column‑wise processing** | Algorithms that operate on each column independently |
| **Subsection** | A contiguous rectangular portion of a 2D array |
| **Shift** | Moving elements left/right in a row or up/down in a column, losing elements at the boundary |
| **Rotate** | Moving elements with wraparound, preserving all elements |
| **Reverse** | Reordering elements in a row or column so the first becomes last |


### AP Exam Tips

- **Know how to process rows and columns separately:** FRQ #4 often asks you to work with specific rows, columns, or both.
- **Bounds checking:** Always ensure your loops stay within the array bounds, especially when accessing `row+1` or `col+1`.
- **Subsection processing:** Be comfortable with loops that start and end at specific indices, not always 0 and `length-1`.
- **Combining traversals:** Many problems require multiple passes (e.g., first find the max, then count how many times it appears).
- **Edge cases:** Consider empty arrays, arrays with one row/column, and boundary conditions (first/last row, first/last column).
- **Use helper methods:** Breaking complex algorithms into smaller methods (like `sumRow`) makes code clearer and less error‑prone.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "All 2D array algorithms require traversing the entire array." | Many work on specific rows, columns, or subsections. |
| "Shifting and rotating are the same." | Shifting loses elements; rotating preserves them. |
| "You can't reverse a column without a temporary array." | You can reverse in place using two‑pointer swap. |
| "Row and column indices are interchangeable." | No, they refer to different dimensions. |
| "The maximum in a 2D array is always in the first row." | No, you must search all elements. |


### Quick Reference: 2D Array Algorithms

| Algorithm | Key Pattern |
|-----------|-------------|
| Min/Max (whole) | Initialize to `arr[0][0]`, nested loops, compare |
| Min/Max (row) | Loop within that row only |
| Min/Max (column) | Loop within that column only |
| Sum (whole) | Nested loops accumulating |
| Sum (row) | Single loop over columns of that row |
| Sum (column) | Single loop over rows of that column |
| Any match | Early return `true` when condition met |
| All match | Early return `false` when condition fails |
| Count | Counter in nested loops |
| Horizontal pairs | Loop to `row.length-1`, access `[c]` and `[c+1]` |
| Vertical pairs | Loop to `arr.length-1`, access `[r]` and `[r+1]` |
| Duplicates (row) | Nested loops within row, `j = i+1` |
| Shift row left | Forward loop setting to next element |
| Shift row right | Backward loop setting to previous element |
| Rotate row left | Store first, shift, put first at end |
| Reverse row | Two‑pointer swap |
| Reverse column | Two‑pointer swap |