### 2.9: Implementing Selection and Iteration Algorithms

### What Are Standard Algorithms?

**Standard algorithms** are well-known, reusable solutions to common programming problems. Learning these patterns saves you from reinventing the wheel and helps you recognize solutions to new problems more quickly.

**Real-World Analogy:** Think of standard algorithms like cooking techniques. Once you learn how to sauté, you can apply that technique to countless recipes—vegetables, meat, tofu. Similarly, once you learn these algorithm patterns, you can apply them to countless programming problems.

### Why Learn Standard Algorithms?

- **Efficiency:** You don't need to design solutions from scratch
- **Reliability:** These patterns have been tested and proven
- **Communication:** Other programmers recognize these patterns
- **Foundation:** More complex algorithms build on these basics
- **Exam success:** The AP exam directly tests these algorithms

### Algorithm 1: Divisibility Testing

Determining whether one integer is evenly divisible by another is a fundamental operation.

#### Checking Divisibility

```java
int number = 15;
int divisor = 3;

if (number % divisor == 0) {
    System.out.println(number + " is divisible by " + divisor);
} else {
    System.out.println(number + " is not divisible by " + divisor);
}
```

The key is the remainder operator `%`. If the remainder is zero, the numbers are divisible.

#### Common Applications

**Checking if a number is even or odd:**
```java
if (number % 2 == 0) {
    System.out.println(number + " is even");
} else {
    System.out.println(number + " is odd");
}
```

**Checking if a year is a leap year:**
```java
boolean isLeapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
```

**Finding all divisors of a number:**
```java
int n = 12;
System.out.print("Divisors of " + n + ": ");
for (int i = 1; i <= n; i++) {
    if (n % i == 0) {
        System.out.print(i + " ");
    }
}
// Output: Divisors of 12: 1 2 3 4 6 12
```

### Algorithm 2: Identifying Individual Digits

Extracting individual digits from an integer is useful in many problems, from digital root calculations to digit-based puzzles.

#### Extracting Digits from Right to Left

```java
int number = 12345;

while (number > 0) {
    int digit = number % 10;     // Get last digit
    System.out.println(digit);
    number = number / 10;        // Remove last digit
}
```

**Output:**
```
5
4
3
2
1
```

**How it works:**
- `number % 10` gives the remainder when divided by 10—which is the last digit
- `number / 10` performs integer division, removing the last digit
- The loop continues until all digits are extracted

#### Extracting Digits from Left to Right

To get digits in original order, you need to know the number of digits first:

```java
int number = 12345;
int temp = number;
int digitCount = 0;

// Count digits first
while (temp > 0) {
    digitCount++;
    temp /= 10;
}

// Extract from left to right
int divisor = (int) Math.pow(10, digitCount - 1);
temp = number;

while (divisor > 0) {
    int digit = temp / divisor;        // Get first digit
    System.out.println(digit);
    temp = temp % divisor;             // Remove first digit
    divisor /= 10;
}
```

**Output:**
```
1
2
3
4
5
```

#### Sum of Digits

```java
int number = 12345;
int sum = 0;
int original = number;

while (number > 0) {
    sum += number % 10;
    number /= 10;
}

System.out.println("Sum of digits in " + original + " = " + sum);
// Output: Sum of digits in 12345 = 15
```

#### Reversing Digits

```java
int number = 12345;
int reversed = 0;
int original = number;

while (number > 0) {
    int digit = number % 10;
    reversed = reversed * 10 + digit;
    number /= 10;
}

System.out.println(original + " reversed is " + reversed);
// Output: 12345 reversed is 54321
```

### Algorithm 3: Frequency Counting

Counting how many elements meet a specific criterion is one of the most common operations in programming.

#### Counting Even Numbers in an Array

```java
int[] numbers = {3, 8, 2, 10, 5, 7, 4, 6, 9};
int evenCount = 0;

for (int i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenCount++;
    }
}

System.out.println("Number of even values: " + evenCount);
// Output: Number of even values: 5
```

#### Counting Characters in a String

```java
String text = "Hello World";
int vowelCount = 0;

for (int i = 0; i < text.length(); i++) {
    char ch = text.charAt(i);
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
        ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
        vowelCount++;
    }
}

System.out.println("Number of vowels: " + vowelCount);
// Output: Number of vowels: 3
```

#### Counting with Multiple Criteria

```java
int[] scores = {85, 92, 78, 90, 88, 76, 95, 82};
int aCount = 0;      // 90 and above
int bCount = 0;      // 80-89
int cCount = 0;      // 70-79
int fCount = 0;      // below 70

for (int score : scores) {
    if (score >= 90) {
        aCount++;
    } else if (score >= 80) {
        bCount++;
    } else if (score >= 70) {
        cCount++;
    } else {
        fCount++;
    }
}

System.out.println("A's: " + aCount);
System.out.println("B's: " + bCount);
System.out.println("C's: " + cCount);
System.out.println("F's: " + fCount);
```

### Algorithm 4: Finding Minimum and Maximum Values

Finding the smallest or largest value in a collection is a fundamental operation.

#### Finding Maximum Value

```java
int[] numbers = {3, 8, 2, 10, 5, 7};
int max = numbers[0];  // Initialize with first element

for (int i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

System.out.println("Maximum value: " + max);  // 10
```

**Key points:**
- Initialize `max` to the first element (not 0, in case all numbers are negative)
- Start loop from index 1 (since we already checked index 0)
- Update `max` whenever a larger value is found

#### Finding Minimum Value

```java
int[] numbers = {3, 8, 2, 10, 5, 7};
int min = numbers[0];  // Initialize with first element

for (int i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

System.out.println("Minimum value: " + min);  // 2
```

#### Finding Both Min and Max in One Pass

```java
int[] numbers = {3, 8, 2, 10, 5, 7};
int min = numbers[0];
int max = numbers[0];

for (int i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

System.out.println("Min: " + min + ", Max: " + max);  // Min: 2, Max: 10
```

#### Finding Maximum with Index

Sometimes you need the position of the maximum value, not just the value itself.

```java
int[] numbers = {3, 8, 2, 10, 5, 7};
int maxIndex = 0;

for (int i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[maxIndex]) {
        maxIndex = i;
    }
}

System.out.println("Maximum value " + numbers[maxIndex] + " at index " + maxIndex);
// Output: Maximum value 10 at index 3
```

#### Handling Empty Collections

Always consider edge cases. If the array could be empty, you need special handling.

```java
public int findMax(int[] arr) {
    if (arr == null || arr.length == 0) {
        throw new IllegalArgumentException("Array cannot be null or empty");
    }
    
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
```

### Algorithm 5: Computing Sum and Average

Summing values and calculating averages are essential for data analysis.

#### Computing Sum

```java
int[] numbers = {3, 8, 2, 10, 5, 7};
int sum = 0;

for (int i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

System.out.println("Sum: " + sum);  // 35
```

Using enhanced for loop (when index not needed):
```java
int sum = 0;
for (int num : numbers) {
    sum += num;
}
```

#### Computing Average

```java
int[] numbers = {3, 8, 2, 10, 5, 7};
int sum = 0;

for (int num : numbers) {
    sum += num;
}

double average = (double) sum / numbers.length;
System.out.println("Average: " + average);  // 5.83333...
```

**Important:** Cast `sum` to `double` to get decimal division. Without the cast, integer division would truncate the result.

#### Weighted Average

```java
int[] scores = {85, 92, 78, 90};
double[] weights = {0.2, 0.3, 0.2, 0.3};  // Must sum to 1.0

double weightedSum = 0;
for (int i = 0; i < scores.length; i++) {
    weightedSum += scores[i] * weights[i];
}

System.out.println("Weighted average: " + weightedSum);
```

#### Running Total (Accumulator Pattern)

```java
// Calculate running total of user input
Scanner scanner = new Scanner(System.in);
int sum = 0;
int count = 0;

System.out.println("Enter numbers to sum (negative to stop):");
int value = scanner.nextInt();

while (value >= 0) {
    sum += value;
    count++;
    value = scanner.nextInt();
}

System.out.println("Sum: " + sum);
System.out.println("Count: " + count);
System.out.println("Average: " + (double) sum / count);
```

### Combining Algorithms

Real problems often combine multiple standard algorithms.

#### Example: Analyze Student Scores

```java
int[] scores = {85, 92, 78, 90, 88, 76, 95, 82};

// Find highest and lowest
int highest = scores[0];
int lowest = scores[0];
int sum = 0;

for (int score : scores) {
    if (score > highest) highest = score;
    if (score < lowest) lowest = score;
    sum += score;
}

double average = (double) sum / scores.length;

// Count how many are above average
int aboveAverage = 0;
for (int score : scores) {
    if (score > average) {
        aboveAverage++;
    }
}

System.out.println("Highest: " + highest);
System.out.println("Lowest: " + lowest);
System.out.println("Average: " + average);
System.out.println("Above average: " + aboveAverage);
```

#### Example: Digit Analysis

```java
int number = 12345;
int evenDigits = 0;
int oddDigits = 0;
int sum = 0;
int maxDigit = 0;
int minDigit = 9;
int original = number;

while (number > 0) {
    int digit = number % 10;
    
    // Count even/odd
    if (digit % 2 == 0) {
        evenDigits++;
    } else {
        oddDigits++;
    }
    
    // Update sum
    sum += digit;
    
    // Update min/max
    if (digit > maxDigit) maxDigit = digit;
    if (digit < minDigit) minDigit = digit;
    
    number /= 10;
}

System.out.println("Number: " + original);
System.out.println("Even digits: " + evenDigits);
System.out.println("Odd digits: " + oddDigits);
System.out.println("Sum of digits: " + sum);
System.out.println("Largest digit: " + maxDigit);
System.out.println("Smallest digit: " + minDigit);
```

### Algorithm Design Patterns

#### Pattern: Initialize Before Loop

For algorithms like sum, min, max, you must initialize variables **before** the loop.

```java
int sum = 0;           // Initialize before loop
int max = arr[0];      // Initialize with first element

for (int i = 0; i < arr.length; i++) {
    sum += arr[i];     // Accumulate
    if (arr[i] > max) {
        max = arr[i];  // Update conditionally
    }
}
```

#### Pattern: Update Inside Loop

Some variables are updated on **every** iteration (like sum), others only when a **condition** is met (like max).

```java
// Updated every iteration
sum += arr[i];

// Updated conditionally
if (arr[i] > max) {
    max = arr[i];
}
```

#### Pattern: Loop and a Half

Sometimes you need to break out of a loop in the middle. This is useful for sentinel-controlled loops.

```java
Scanner scanner = new Scanner(System.in);
int sum = 0;

while (true) {
    System.out.print("Enter a number (negative to quit): ");
    int value = scanner.nextInt();
    
    if (value < 0) {
        break;  // Exit loop
    }
    
    sum += value;
}

System.out.println("Sum: " + sum);
```

### Key Terminology for Topic 2.9

| Term | Definition |
|------|------------|
| **Standard algorithm** | A well-known, reusable solution to a common programming problem |
| **Divisibility** | Whether one integer can be divided by another with no remainder |
| **Digit extraction** | The process of isolating individual digits from an integer |
| **Frequency count** | Counting how many elements meet a specific criterion |
| **Min/max algorithm** | Finding the smallest or largest value in a collection |
| **Accumulator pattern** | A variable that accumulates results across loop iterations |
| **Running total** | A sum that grows as more values are processed |

### AP Exam Tips

- **Recognize the patterns:** On the AP exam, you'll need to identify which standard algorithm is being used and sometimes complete partial code.
- **Initialize correctly:** Sums start at 0; min/max start with the first element (or `Integer.MAX_VALUE`/`Integer.MIN_VALUE`).
- **Loop bounds:** For arrays, loops typically run from 0 to `length - 1`. Off-by-one errors are common.
- **Type casting:** When computing averages, remember to cast to `double` to avoid integer division.
- **Edge cases:** Consider what happens with empty arrays, negative numbers, or zero. The exam often tests these.
- **Combining algorithms:** Free-response questions often require combining multiple standard algorithms.
- **Efficiency:** Sometimes you can combine multiple tasks in one loop (like finding min and max simultaneously).
- **Trace tables:** Practice tracing these algorithms with small inputs to understand how they work.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Initialize max to 0 to find the maximum." | If all numbers are negative, max will incorrectly be 0. Initialize to first element. |
| "Sum and average can be computed in separate loops." | They can, but one loop is more efficient. |
| "Digit extraction always gives digits left to right." | The simple `% 10` method gives digits right to left. |
| "The average of integers is always an integer." | Average is usually a double. Cast before division. |
| "Min and max require two separate loops." | They can be found in a single pass. |
| "All algorithms need arrays." | Many work with single values or user input too. |

### Quick Reference: Standard Algorithms

| Algorithm | Pattern | Key Code |
|-----------|---------|----------|
| Divisibility | Check remainder | `if (n % d == 0)` |
| Digit extraction (right to left) | Loop with % and / | `digit = n % 10; n /= 10;` |
| Counting | Initialize counter, increment when condition true | `count++` inside if |
| Maximum | Initialize to first, update when larger | `if (arr[i] > max) max = arr[i];` |
| Minimum | Initialize to first, update when smaller | `if (arr[i] < min) min = arr[i];` |
| Sum | Initialize to 0, add each element | `sum += arr[i];` |
| Average | Compute sum, then divide by count | `(double) sum / count` |