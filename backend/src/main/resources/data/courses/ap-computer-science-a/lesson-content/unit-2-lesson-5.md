### Compound Boolean Expressions

### What Are Compound Boolean Expressions?

A **compound Boolean expression** combines two or more Boolean expressions using logical operators. These expressions allow you to test multiple conditions in a single if statement or loop condition.

**Real-World Analogy:** Think of compound conditions like multi-factor decisions:
- "If it's raining AND I have an umbrella, I'll go outside"
- "If I have cash OR a credit card, I can make a purchase"
- "If it's NOT raining, I'll walk to school"

Compound Boolean expressions make your code more concise and readable by combining conditions instead of writing nested if statements.

### The Logical Operators

Java provides three logical operators for creating compound Boolean expressions:

| Operator | Meaning | Name | Example | Result |
|----------|---------|------|---------|--------|
| `&&` | AND | Logical AND | `(5 > 3) && (2 < 4)` | `true` |
| `||` | OR | Logical OR | `(5 > 3) || (2 > 4)` | `true` |
| `!` | NOT | Logical NOT | `!(5 > 3)` | `false` |

#### The AND Operator `&&`

The AND operator `&&` returns `true` only if **both** operands are `true`. If either operand is `false`, the result is `false`.

**Truth table for `&&`:**

| a | b | a && b |
|---|---|--------|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

**Examples:**
```java
int age = 17;
boolean hasLicense = true;
boolean canDrive = (age >= 16) && hasLicense;  // true (both true)

int score = 85;
boolean hasBonus = false;
boolean getsA = (score >= 90) && hasBonus;     // false (second operand false)

boolean bothTrue = (5 > 3) && (10 > 2);        // true && true = true
boolean oneFalse = (5 > 3) && (10 < 2);        // true && false = false
```

#### The OR Operator `||`

The OR operator `||` returns `true` if **at least one** operand is `true`. It returns `false` only when both operands are `false`.

**Truth table for `||`:**

| a | b | a \|\| b |
|---|---|----------|
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

**Examples:**
```java
boolean isWeekend = true;
boolean isHoliday = false;
boolean canSleepIn = isWeekend || isHoliday;    // true (first operand true)

boolean hasCash = false;
boolean hasCredit = false;
boolean canBuy = hasCash || hasCredit;          // false (both false)

boolean oneTrue = (5 > 3) || (10 < 2);          // true || false = true
boolean bothFalse = (5 < 3) || (10 < 2);        // false || false = false
```

#### The NOT Operator `!`

The NOT operator `!` is a **unary** operator (works on a single operand). It returns the opposite Boolean value: `true` becomes `false`, `false` becomes `true`.

**Truth table for `!`:**

| a | !a |
|---|---|
| true | false |
| false | true |

**Examples:**
```java
boolean isRaining = true;
boolean stayInside = !isRaining;                 // false (opposite)

boolean passed = false;
boolean needsRetake = !passed;                   // true

boolean result = !(5 > 3);                       // !true = false
```

### Combining Multiple Operators

You can create complex conditions by combining multiple logical operators. Parentheses help make the order of evaluation clear.

**Examples:**
```java
int age = 25;
boolean hasID = true;
boolean isMember = false;

// Complex condition
boolean canEnter = (age >= 18) && hasID && (isMember || (age >= 21));

// Check if within range OR outside range with exceptions
int x = 15;
boolean valid = (x >= 10 && x <= 20) || (x == 5) || (x == 25);
```

### Operator Precedence with Logical Operators

Logical operators have a specific order of precedence, just like arithmetic operators. From highest to lowest:

| Precedence | Operator | Description |
|------------|----------|-------------|
| 1 (highest) | `!` | Logical NOT |
| 2 | `&&` | Logical AND |
| 3 (lowest) | `||` | Logical OR |

**Important:** `&&` has higher precedence than `||`, which means `&&` operations are evaluated before `||` operations, unless parentheses change the order.

#### Examples of Precedence

```java
// Without parentheses
boolean result = true || false && false;

// Step 1: && has higher precedence, so evaluate false && false first
// false && false = false
// Now expression is: true || false

// Step 2: Evaluate ||
// true || false = true

// Final result: true
```

**With parentheses to change order:**
```java
boolean result = (true || false) && false;

// Step 1: parentheses first: true || false = true
// Now expression is: true && false

// Step 2: evaluate && : true && false = false

// Final result: false
```

**More examples:**
```java
// Without parentheses - && happens first
boolean a = true || false && false;      // true

// With parentheses - || happens first  
boolean b = (true || false) && false;    // false

// NOT has highest precedence
boolean c = !true && false;               // !true is false, then false && false = false
boolean d = !(true && false);             // true && false = false, then !false = true
```

**Best Practice:** Use parentheses to make your intent clear, even when not strictly required. It improves readability and prevents mistakes.

```java
// Clear vs unclear
boolean unclear = a && b || c && d;
boolean clear = (a && b) || (c && d);  // Better!
```

### Short-Circuit Evaluation

Java uses **short-circuit evaluation** for the `&&` and `||` operators. This means the second operand is evaluated only if necessary to determine the result.

#### How Short-Circuit Works with `&&`

For `&&`, if the left operand is `false`, the entire expression must be `false`. Java **skips evaluating** the right operand.

```java
int x = 5;
int y = 0;

// Short-circuit prevents division by zero!
if (y != 0 && x / y > 2) {
    System.out.println("This won't execute");
}
```

If `y != 0` is false, Java never evaluates `x / y > 2`, avoiding an `ArithmeticException`.

#### How Short-Circuit Works with `||`

For `||`, if the left operand is `true`, the entire expression must be `true`. Java **skips evaluating** the right operand.

```java
boolean isMember = true;
boolean hasPaid = false;

// Short-circuit: isMember is true, so hasPaid is never checked
if (isMember || hasPaid) {
    System.out.println("Access granted");  // This runs
}
```

#### Why Short-Circuit Matters

1. **Efficiency:** Avoids unnecessary computations
2. **Safety:** Prevents errors like division by zero or null pointer exceptions
3. **Logic:** Enables patterns where the right operand depends on the left being true

**Common pattern: Null check before method call**
```java
String name = null;

// Safe: if name is null, name != null is false, so name.length() never called
if (name != null && name.length() > 0) {
    System.out.println("Name has " + name.length() + " characters");
} else {
    System.out.println("Name is null or empty");
}
```

### De Morgan's Laws

De Morgan's Laws describe how to distribute NOT (`!`) over AND (`&&`) and OR (`||`) expressions. They are useful for simplifying or rewriting Boolean expressions.

**De Morgan's Laws:**

| Original | Equivalent |
|----------|------------|
| `!(a && b)` | `!a || !b` |
| `!(a || b)` | `!a && !b` |

In words:
- NOT (A AND B) is the same as (NOT A) OR (NOT B)
- NOT (A OR B) is the same as (NOT A) AND (NOT B)

#### Examples of De Morgan's Laws

**Example 1: Simplifying a negated AND**
```java
// Instead of:
if (!(age >= 18 && hasID)) {
    System.out.println("Cannot enter");
}

// Can write as:
if (age < 18 || !hasID) {
    System.out.println("Cannot enter");
}
```

**Example 2: Simplifying a negated OR**
```java
// Instead of:
if (!(isWeekend || isHoliday)) {
    System.out.println("Go to work");
}

// Can write as:
if (!isWeekend && !isHoliday) {
    System.out.println("Go to work");
}
```

**Example 3: Applying to complex conditions**
```java
// Original condition: Not (within range OR special case)
if (!((x >= 10 && x <= 20) || x == 5)) {
    System.out.println("Outside range and not special");
}

// Apply De Morgan: Distribute NOT over OR
if (!(x >= 10 && x <= 20) && !(x == 5)) {
    // Then apply De Morgan to the first part
    if ((x < 10 || x > 20) && x != 5) {
        System.out.println("Outside range and not special");
    }
}
```

### Common Patterns with Compound Boolean Expressions

#### Pattern 1: Range Checking
```java
int score = 85;
boolean isInRange = score >= 0 && score <= 100;
boolean isOutOfRange = score < 0 || score > 100;
```

#### Pattern 2: Valid Input with Multiple Criteria
```java
String input = getUserInput();
boolean isValid = input != null && input.length() > 0 && input.length() <= 20;
```

#### Pattern 3: Access Control
```java
boolean isAdmin = false;
boolean isLoggedIn = true;
boolean hasPermission = true;

boolean canAccess = isLoggedIn && (isAdmin || hasPermission);
```

#### Pattern 4: Opposite Conditions
```java
boolean isWeekend = false;
boolean isWeekday = !isWeekend;  // Using NOT
```

#### Pattern 5: Combining with Short-Circuit for Safety
```java
// Safe array access
int[] arr = getArray();
if (arr != null && arr.length > 0 && arr[0] > 0) {
    System.out.println("First element positive");
}
```

### Truth Tables for Verification

Truth tables are useful for verifying that two Boolean expressions are equivalent or for understanding complex logic.

**Truth table for `a && (b || c)`:**

| a | b | c | b \|\| c | a && (b \|\| c) |
|---|---|---|---------|----------------|
| T | T | T | T | T |
| T | T | F | T | T |
| T | F | T | T | T |
| T | F | F | F | F |
| F | T | T | T | F |
| F | T | F | T | F |
| F | F | T | T | F |
| F | F | F | F | F |

**Truth table for De Morgan's: `!(a && b)` vs `!a || !b`:**

| a | b | a && b | !(a && b) | !a | !b | !a \|\| !b |
|---|---|--------|-----------|----|----|------------|
| T | T | T | F | F | F | F |
| T | F | F | T | F | T | T |
| F | T | F | T | T | F | T |
| F | F | F | T | T | T | T |

Both columns match, proving the equivalence.

### Common Errors with Compound Boolean Expressions

| Error | Example | Problem | Fix |
|-------|---------|---------|-----|
| Using `&` or `|` instead of `&&` or `||` | `if (x > 5 & y < 10)` | `&` and `|` are bitwise operators, not logical | Use `&&` and `||` |
| Forgetting parentheses | `if (a && b || c && d)` | Unclear precedence | Add parentheses: `(a && b) || (c && d)` |
| Incorrect negation | `if (!a && b)` | Misunderstanding what's negated | Only `a` is negated, not `a && b` |
| Not using short-circuit for safety | `if (arr.length > 0 && arr != null)` | Null check happens after length check | Check null first: `arr != null && arr.length > 0` |
| Redundant comparisons | `if (x == true)` | `x` is already boolean | Just use `if (x)` |
| Confusing AND with OR | Using `&&` when you need `||` | Logic error | Review truth tables |

### Key Terminology for Topic 2.5

| Term | Definition |
|------|------------|
| **Compound Boolean expression** | An expression that combines multiple Boolean expressions using logical operators |
| **Logical operator** | An operator that works with Boolean operands: `&&` (AND), `||` (OR), `!` (NOT) |
| **Short-circuit evaluation** | Evaluation where the second operand is evaluated only if necessary to determine the result |
| **Truth table** | A table showing all possible input combinations and the corresponding output for a Boolean expression |
| **De Morgan's Laws** | Rules for distributing NOT over AND and OR: `!(a && b)` = `!a || !b`, `!(a || b)` = `!a && !b` |

### AP Exam Tips

- **Know operator precedence:** `!` highest, then `&&`, then `||`. Parentheses can override.
- **Short-circuit evaluation is tested:** Questions often ask what code will or won't execute, or whether an error occurs.
- **De Morgan's Laws appear frequently:** Be able to apply them to simplify or rewrite expressions.
- **Truth tables may be required:** You might need to determine if two expressions are equivalent.
- **Null checks with short-circuit:** The pattern `if (obj != null && obj.method())` is common and important.
- **Complex conditions in free-response:** FRQs often require compound conditions in loop termination or if statements.
- **Avoid common mistakes:** Don't confuse `&` with `&&`, and always use parentheses for clarity.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "`&` and `&&` are the same." | `&` is bitwise AND (evaluates both sides); `&&` is logical AND with short-circuit. |
| "`||` always evaluates both sides." | No, `||` short-circuits: if left is true, right is skipped. |
| "`!a && b` means `!(a && b)`." | No, `!a && b` applies NOT only to `a`. `!(a && b)` applies NOT to the whole AND. |
| "De Morgan's is too advanced for the exam." | De Morgan's is explicitly listed in Topic 2.6 and appears on the exam. |
| "Parentheses are optional and don't matter." | Parentheses clarify intent and prevent precedence errors. |
| "Boolean expressions can only be used in if statements." | They're used in loops, assignments, and anywhere a boolean is expected. |

### Quick Reference: Logical Operators

| Operator | Name | True when... | Short-circuit? |
|----------|------|--------------|----------------|
| `&&` | AND | both operands true | Yes (if left false, right skipped) |
| `||` | OR | at least one operand true | Yes (if left true, right skipped) |
| `!` | NOT | operand is false | N/A (unary) |

### Quick Reference: De Morgan's Laws

| Original | Equivalent |
|----------|------------|
| `!(a && b)` | `!a || !b` |
| `!(a || b)` | `!a && !b` |