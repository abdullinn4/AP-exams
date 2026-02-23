
### 1.6: Compound Assignment Operators


### What Are Compound Assignment Operators?

**Compound assignment operators** provide a shorthand way to perform an arithmetic operation and an assignment in one step. They combine an arithmetic operator with the assignment operator `=`.

These operators are used when you want to modify a variable's value based on its current value.



### The Five Compound Assignment Operators

| Operator | Meaning | Long Form Equivalent |
|----------|---------|---------------------|
| `+=` | Add and assign | `x = x + y;` |
| `-=` | Subtract and assign | `x = x - y;` |
| `*=` | Multiply and assign | `x = x * y;` |
| `/=` | Divide and assign | `x = x / y;` |
| `%=` | Remainder and assign | `x = x % y;` |

#### Examples

```java
int score = 10;
score += 5;      // score becomes 15 (same as score = score + 5)

int health = 100;
health -= 20;    // health becomes 80 (same as health = health - 20)

int quantity = 4;
quantity *= 3;   // quantity becomes 12 (same as quantity = quantity * 3)

int cookies = 10;
cookies /= 3;    // cookies becomes 3 (integer division!) (same as cookies = cookies / 3)

int number = 17;
number %= 5;     // number becomes 2 (same as number = number % 5)
```



### How Compound Assignment Works

A compound assignment operator performs two operations in this order:

1. **Calculate** the result using the current value of the variable and the right-hand side expression
2. **Assign** that result back to the same variable

**Important:** The variable on the left is used in the calculation and then updated.

```java
int x = 5;
x += 3;          // 1. Calculate: 5 + 3 = 8
                 // 2. Assign: x = 8
```



### Compound Assignment with Expressions

The right-hand side can be any expression—not just a simple value.

```java
int x = 10;
x += 2 * 3;      // x += 6  → x becomes 16
                 // Equivalent to: x = x + (2 * 3)

int y = 20;
y -= 5 + 2;      // y -= 7  → y becomes 13
                 // Equivalent to: y = y - (5 + 2)
```

**Key Point:** The entire right-hand expression is evaluated first, then the compound operation is performed.



### Increment and Decrement Operators

Java provides special operators for the most common arithmetic operation: adding or subtracting 1.

| Operator | Name | Meaning |
|----------|------|---------|
| `++` | Post-increment | Adds 1 to the variable |
| `--` | Post-decrement | Subtracts 1 from the variable |

#### Examples

```java
int count = 0;
count++;          // count becomes 1 (same as count = count + 1)

int lives = 3;
lives--;          // lives becomes 2 (same as lives = lives - 1)
```

These operators are called **post-increment** and **post-decrement** because the operator comes **after** the variable name.



### The Important Restriction: Post-Increment/Decrement Only

**Critical AP Exam Note:** The College Board explicitly states that only the **post-increment** (`x++`) and **post-decrement** (`x--`) forms are within the scope of the course and exam.

#### What IS Allowed

```java
x++;    // post-increment (adds 1)
y--;    // post-decrement (subtracts 1)
```

#### What IS NOT Allowed 

```java
++x;    // prefix form - NOT tested
--y;    // prefix form - NOT tested
```

#### Also NOT Allowed: Using Increment Inside Other Expressions 

```java
arr[x++];        // NOT tested - increment inside array access
int y = x++ + 5; // NOT tested - increment inside larger expression
```

**On the AP exam, `++` and `--` will only appear as standalone statements:**

```java
x++;    // This is fine
y--;    // This is fine
```

You will **not** see them embedded inside other expressions where their value is used before the increment.



### Why This Matters for the Exam

The restriction means that for AP CSA purposes, you can think of:

```java
x++;
```

as exactly equivalent to:

```java
x = x + 1;
```

And:

```java
x--;
```

as exactly equivalent to:

```java
x = x - 1;
```

You don't need to worry about the difference between prefix and postfix, or about using the value of the expression. Just know they add or subtract 1.



### Common Use Cases

#### Counters in Loops
```java
int count = 0;
while (count < 10) {
    System.out.println(count);
    count++;           // increment counter
}
```

#### Tracking Running Totals
```java
int total = 0;
total += 15;    // add 15 to total
total += 22;    // add 22 to total
total += 8;     // add 8 to total
// total is now 45
```

#### Updating Game State
```java
int score = 0;
score += 100;   // earned 100 points
score += 50;    // earned 50 more points

int lives = 3;
lives--;        // lost a life
```



### Compound Assignment vs. Regular Assignment: Which to Use?

Both forms are correct. Compound assignment is:
- **More concise** (less typing)
- **Often clearer** (emphasizes that you're modifying the variable)
- **Less error-prone** (you only write the variable name once)

```java
// These do the same thing:
total = total + amount;
total += amount;        // Preferred by many programmers
```



### Key Terminology for Topic 1.6

| Term | Definition |
|------|------------|
| **Compound assignment operator** | An operator that performs an arithmetic operation and assignment in one step (`+=`, `-=`, `*=`, `/=`, `%=`) |
| **Post-increment operator `++`** | Adds 1 to a variable (operator comes after the variable) |
| **Post-decrement operator `--`** | Subtracts 1 from a variable (operator comes after the variable) |



### AP Exam Tips

**What you need to know for the exam:**

- **Five compound operators:** Know `+=`, `-=`, `*=`, `/=`, `%=` and what they do.

- **Equivalence:** Be able to rewrite compound assignments as regular assignments and vice versa.

- **Post-increment/decrement only:** `x++` and `x--` are the only forms used. Never `++x` or `--x`.

- **Standalone statements only:** Increment/decrement operators will only appear as their own statement, not inside other expressions.

- **Evaluation order:** The right side is fully evaluated before the operation. `x += 3 * 4` adds 12, not 3 then multiply.

- **Integer division reminder:** `x /= 2` with integers still does integer division. If `x` is 5, `x /= 2` results in 2, not 2.5.



### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "`x += 5` means add 5 to x." | ✅ Correct. But also understand it's exactly `x = x + 5`. |
| "`x++` and `++x` are the same." | For AP purposes, they want you to ignore the difference because `++x` isn't tested. Just know `x++` adds 1. |
| "I can use `x++` inside an array index like `arr[x++]`." | Not on the AP exam—this is explicitly excluded. |
| "`x *= y + z` multiplies x by y then adds z." | No, it's `x = x * (y + z)`. The right side is evaluated first. |
| "Compound operators are just shortcuts." | ✅ Correct, but they're also clearer and less error-prone. |
| "`x /= 2` always gives a decimal." | No, if `x` is an `int`, integer division applies. |



### Quick Reference: Compound Assignment Equivalents

| Compound | Equivalent To |
|----------|---------------|
| `x += y` | `x = x + y` |
| `x -= y` | `x = x - y` |
| `x *= y` | `x = x * y` |
| `x /= y` | `x = x / y` |
| `x %= y` | `x = x % y` |
| `x++` | `x = x + 1` |
| `x--` | `x = x - 1` |
