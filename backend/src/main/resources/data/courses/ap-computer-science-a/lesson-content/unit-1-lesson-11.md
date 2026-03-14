
### Math Class


### The `Math` Class

The `Math` class is part of the `java.lang` package, which means it is **automatically available** in every Java program. You never need to import it.

The `Math` class provides a collection of useful mathematical methods and constants. Every method in the `Math` class is a **class method** (static), meaning you call them using the class name.

```java
// No import needed!
double result = Math.sqrt(16.0);
```


### Math Class Methods You Need to Know

The AP Computer Science A Exam requires knowledge of five specific `Math` class methods. All of these are listed on the Java Quick Reference you'll receive during the exam.

#### 1. `static int abs(int x)`

Returns the absolute value of an `int` value.

| Method Call | Result | Explanation |
|-------------|--------|-------------|
| `Math.abs(5)` | `5` | Positive stays positive |
| `Math.abs(-5)` | `5` | Negative becomes positive |
| `Math.abs(0)` | `0` | Zero stays zero |

```java
int distance = Math.abs(-42);  // distance = 42
```

#### 2. `static double abs(double x)`

Returns the absolute value of a `double` value.

| Method Call | Result |
|-------------|--------|
| `Math.abs(3.14)` | `3.14` |
| `Math.abs(-2.5)` | `2.5` |
| `Math.abs(-0.0)` | `0.0` |

```java
double absolute = Math.abs(-9.99);  // absolute = 9.99
```

#### 3. `static double pow(double base, double exponent)`

Returns the value of the first parameter raised to the power of the second parameter.

| Method Call | Result | Explanation |
|-------------|--------|-------------|
| `Math.pow(2, 3)` | `8.0` | 2³ = 8 |
| `Math.pow(5, 2)` | `25.0` | 5² = 25 |
| `Math.pow(10, 0)` | `1.0` | Any number to power 0 is 1 |
| `Math.pow(4, 0.5)` | `2.0` | 4⁰·⁵ = square root of 4 |
| `Math.pow(2, -1)` | `0.5` | 2⁻¹ = 1/2 |

**Important:** The result is always a `double`, even with whole numbers.

```java
double cubed = Math.pow(3, 3);     // cubed = 27.0
double squared = Math.pow(7, 2);   // squared = 49.0
```

#### 4. `static double sqrt(double x)`

Returns the nonnegative square root of a `double` value.

| Method Call | Result | Explanation |
|-------------|--------|-------------|
| `Math.sqrt(16.0)` | `4.0` | √16 = 4 |
| `Math.sqrt(25)` | `5.0` | `int` automatically promoted to `double` |
| `Math.sqrt(2.0)` | `1.4142135623730951` | Approximate value |
| `Math.sqrt(0.0)` | `0.0` | √0 = 0 |

**Precondition:** The parameter should be nonnegative. `Math.sqrt(-1)` returns `NaN` (Not a Number), which is outside the scope of the AP exam.

```java
double root = Math.sqrt(144);  // root = 12.0
```

#### 5. `static double random()`

Returns a `double` value greater than or equal to `0.0` and **less than** `1.0`.

| Method Call | Possible Results |
|-------------|------------------|
| `Math.random()` | `0.0` up to `0.9999999999999999` (never exactly 1.0) |

```java
double rand = Math.random();  // Example: 0.4738291047
```

The key characteristics:
- **Minimum possible value:** `0.0` (inclusive)
- **Maximum possible value:** just under `1.0` (exclusive)
- Every value in that range is equally likely (uniform distribution)


### Manipulating Random Numbers

`Math.random()` alone gives you a `double` between 0.0 and 1.0. But most programs need random numbers in specific ranges. You can manipulate the result using arithmetic and casting.

#### Formula for Random Integers in a Range

To get a random integer from `min` to `max` **inclusive**:

```java
(int) (Math.random() * (max - min + 1)) + min
```

Let's break this down:

1. `Math.random()` → `0.0` to `0.999...`
2. Multiply by `(max - min + 1)` → `0.0` to just under the range size
3. Cast to `int` → truncates to `0` through `(max - min)`
4. Add `min` → shifts to `min` through `max`

#### Examples

**Random integer from 1 to 10 (inclusive):**
```java
int random1to10 = (int) (Math.random() * 10) + 1;
// Math.random() * 10 → 0.0 to 9.999...
// (int) → 0 to 9
// +1 → 1 to 10
```

**Random integer from 5 to 15 (inclusive):**
```java
int random5to15 = (int) (Math.random() * 11) + 5;
// range size = 15 - 5 + 1 = 11
```

**Random integer from -5 to 5 (inclusive):**
```java
int randomNeg5to5 = (int) (Math.random() * 11) - 5;
// range size = 5 - (-5) + 1 = 11
```

#### Random Doubles in a Range

To get a random `double` from `min` to `max` (not necessarily inclusive of max):

```java
Math.random() * (max - min) + min
```

**Example: Random double from 0.0 to 100.0:**
```java
double random0to100 = Math.random() * 100;
```

**Example: Random double from -10.0 to 10.0:**
```java
double randomNeg10to10 = Math.random() * 20 - 10;
```


### Inclusive vs Exclusive: What It Means

When working with random numbers, you need to understand **inclusive** and **exclusive** boundaries.

| Term | Meaning | Example |
|------|---------|---------|
| **Inclusive** | The value can equal the boundary | `[0, 10]` includes 0 and 10 |
| **Exclusive** | The value cannot equal the boundary | `[0, 10)` includes 0 but not 10 |

#### With `Math.random()`:

- `0.0` is **inclusive** (it can occur)
- `1.0` is **exclusive** (it never occurs)

#### Common Range Patterns

| Desired Range | Formula | Notes |
|---------------|---------|-------|
| Integer 1 to N | `(int)(Math.random() * N) + 1` | N inclusive |
| Integer 0 to N-1 | `(int)(Math.random() * N)` | 0 inclusive, N exclusive |
| Integer A to B inclusive | `(int)(Math.random() * (B-A+1)) + A` | Both ends included |
| Double 0.0 to 1.0 | `Math.random()` | 0.0 inclusive, 1.0 exclusive |
| Double 0.0 to N | `Math.random() * N` | 0.0 inclusive, N exclusive |


### Putting It All Together: Examples

#### Rolling a Six-Sided Die
```java
int dieRoll = (int) (Math.random() * 6) + 1;
// Returns 1, 2, 3, 4, 5, or 6 with equal probability
```

#### Simulating a Coin Flip
```java
double flip = Math.random();
if (flip < 0.5) {
    System.out.println("Heads");
} else {
    System.out.println("Tails");
}
```

#### Generating a Random Temperature
```java
double temp = Math.random() * 40 - 10;  // -10.0 to 30.0
```

#### Random Index for an Array
```java
int[] scores = new int[100];
int randomIndex = (int) (Math.random() * scores.length);
// randomIndex from 0 to 99
```


### Why the Math Class Matters

The `Math` class provides fundamental operations that appear throughout computer science:

- **`abs`** – Used for distances, differences, error calculations
- **`pow`** – Compound interest, physics calculations, exponential growth
- **`sqrt`** – Distance formulas, standard deviation, quadratic formula
- **`random`** – Games, simulations, sampling, testing

Mastering these methods will make you more efficient and allow you to focus on solving problems rather than implementing basic mathematics.


### Key Terminology for Topic 1.11

| Term | Definition |
|------|------------|
| **`java.lang` package** | Core Java package that is automatically imported |
| **`Math.abs()`** | Returns the absolute value of a number |
| **`Math.pow()`** | Returns base raised to exponent (as a double) |
| **`Math.sqrt()`** | Returns the nonnegative square root |
| **`Math.random()`** | Returns random double from 0.0 (inclusive) to 1.0 (exclusive) |
| **Inclusive** | The boundary value is included in the range |
| **Exclusive** | The boundary value is not included in the range |


### AP Exam Tips

**What you need to know for the exam:**

- **All five methods:** `abs(int)`, `abs(double)`, `pow`, `sqrt`, `random` are on the Java Quick Reference. Memorize what they do.

- **`Math.random()` range:** Always returns `[0.0, 1.0)` — 0.0 inclusive, 1.0 exclusive. This is tested frequently.

- **Random integer formula:** Know how to generate random integers in any range. Practice the formula until it's automatic.

- **Casting with random:** Remember that `(int)` truncates. This affects your random ranges.

- **`pow` returns double:** Even `Math.pow(2, 3)` returns `8.0`, not `8`. Be aware of the type.

- **`sqrt` precondition:** Input should be nonnegative. The exam won't test negative square roots.

- **No import needed:** `Math` is in `java.lang`, so it's always available.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "`Math.random()` returns integers." | No, it returns a double between 0.0 and 1.0. |
| "`Math.random()` can return 1.0." | No, it's always less than 1.0. |
| "`(int)(Math.random() * 10)` gives 1-10." | No, it gives 0-9. Need +1 for 1-10. |
| "`Math.pow(2, 3)` returns 8 (an int)." | No, it returns 8.0 (a double). |
| "`Math.sqrt(-4)` returns -2." | No, it returns NaN (outside exam scope). |
| "I need to import the Math class." | No, it's in java.lang, automatically available. |
| "`Math.abs(-5.0)` returns 5 (an int)." | No, it returns 5.0 (a double) because the parameter was double. |


### Quick Reference: Math Class Methods

| Method | Returns | Example Call | Result |
|--------|---------|--------------|--------|
| `int abs(int a)` | `int` | `Math.abs(-7)` | `7` |
| `double abs(double a)` | `double` | `Math.abs(-7.0)` | `7.0` |
| `double pow(double a, double b)` | `double` | `Math.pow(2, 3)` | `8.0` |
| `double sqrt(double a)` | `double` | `Math.sqrt(16)` | `4.0` |
| `double random()` | `double` | `Math.random()` | `0.0` to `0.999...` |


### Random Number Formulas Summary

| Desired Result | Formula |
|----------------|---------|
| Random double, 0 to 1 | `Math.random()` |
| Random double, 0 to N | `Math.random() * N` |
| Random double, A to B | `Math.random() * (B - A) + A` |
| Random int, 0 to N-1 | `(int)(Math.random() * N)` |
| Random int, 1 to N | `(int)(Math.random() * N) + 1` |
| Random int, A to B inclusive | `(int)(Math.random() * (B - A + 1)) + A` |
