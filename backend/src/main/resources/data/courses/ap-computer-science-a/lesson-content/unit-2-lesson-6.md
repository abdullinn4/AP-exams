### Comparing Boolean Expressions

### Equivalent Boolean Expressions

Two Boolean expressions are **equivalent** if they evaluate to the same value (`true` or `false`) for all possible input combinations. Understanding equivalence allows you to simplify complex conditions or rewrite them in more readable forms.

**Why equivalence matters:**
- Simplifying complex logic
- Making code more readable
- Optimizing performance
- Debugging by checking if two expressions should behave the same way

### Truth Tables for Proving Equivalence

A **truth table** lists all possible combinations of input values and shows the result of a Boolean expression for each combination. To prove two expressions are equivalent, you create truth tables for both and compare the output columns—they must match for every row.

#### Example: Proving Distributive Law

Prove that `a && (b || c)` is equivalent to `(a && b) || (a && c)`.

| a | b | c | b \|\| c | a && (b \|\| c) | a && b | a && c | (a && b) \|\| (a && c) |
|---|---|---|---------|----------------|--------|--------|------------------------|
| T | T | T | T | T | T | T | T |
| T | T | F | T | T | T | F | T |
| T | F | T | T | T | F | T | T |
| T | F | F | F | F | F | F | F |
| F | T | T | T | F | F | F | F |
| F | T | F | T | F | F | F | F |
| F | F | T | T | F | F | F | F |
| F | F | F | F | F | F | F | F |

The last two columns match exactly, proving the expressions are equivalent.

### De Morgan's Laws

**De Morgan's Laws** are formal rules for distributing the NOT operator (`!`) over AND (`&&`) and OR (`||`) expressions. They are essential for simplifying negated compound conditions.

#### The Two Laws

| Law | Original Expression | Equivalent Expression |
|-----|---------------------|----------------------|
| First Law | `!(a && b)` | `!a || !b` |
| Second Law | `!(a || b)` | `!a && !b` |

In words:
- The negation of a conjunction (AND) is the disjunction (OR) of the negations
- The negation of a disjunction (OR) is the conjunction (AND) of the negations

#### Memory Aid: "Break the line, change the sign"

When you move the NOT inside parentheses:
- The `&&` becomes `||`
- The `||` becomes `&&`
- Each term gets negated

#### Examples of De Morgan's Laws

**Example 1: Negating an AND condition**
```java
// Original condition: Not (age >= 18 AND hasID)
if (!(age >= 18 && hasID)) {
    System.out.println("Cannot enter");
}

// Applying De Morgan's: (Not age >= 18) OR (Not hasID)
if (age < 18 || !hasID) {
    System.out.println("Cannot enter");
}
```

**Example 2: Negating an OR condition**
```java
// Original condition: Not (isWeekend OR isHoliday)
if (!(isWeekend || isHoliday)) {
    System.out.println("Go to work");
}

// Applying De Morgan's: (Not isWeekend) AND (Not isHoliday)
if (!isWeekend && !isHoliday) {
    System.out.println("Go to work");
}
```

**Example 3: Complex condition with multiple operators**
```java
// Original: Not (x > 0 && y > 0) || (z == 0)
boolean original = !(x > 0 && y > 0) || (z == 0);

// Apply De Morgan to the negated part:
// !(x > 0 && y > 0) becomes (x <= 0 || y <= 0)
boolean simplified = (x <= 0 || y <= 0) || (z == 0);

// Can simplify further: just (x <= 0 || y <= 0 || z == 0)
```

**Example 4: Real-world validation**
```java
// Condition: Input should NOT be (empty OR null)
if (!(input == null || input.isEmpty())) {
    System.out.println("Valid input: " + input);
}

// Applying De Morgan's: input is NOT null AND input is NOT empty
if (input != null && !input.isEmpty()) {
    System.out.println("Valid input: " + input);
}
```

### Comparing Object References with `==` and `!=`

When comparing object references using `==` and `!=`, you are comparing **memory addresses**, not the contents of the objects. This is a critical distinction that appears frequently on the AP exam.

#### Reference Comparison Rules

- `==` returns `true` if two references point to the **same object** in memory
- `!=` returns `true` if two references point to **different objects**
- The actual content of the objects does **not** matter for reference comparison

#### Examples with String Objects

```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");
String s4 = s1;

// Compare references
boolean test1 = (s1 == s2);  // true (may share same literal in string pool)
boolean test2 = (s1 == s3);  // false (different objects, different addresses)
boolean test3 = (s1 == s4);  // true (same reference - s4 points to same object)
boolean test4 = (s1 != s3);  // true (they are different objects)
```

**Visual memory representation:**
```
s1 ────→ "Hello" (at address 0x100)
s2 ────→ "Hello" (may point to same 0x100 if literal is reused)
s3 ────→ "Hello" (at address 0x200 - a different object!)
s4 ────→ (same as s1, address 0x100)
```

### Comparing with `null`

You can use `==` and `!=` to check whether a reference variable actually refers to an object or is `null`.

```java
String name = null;
String student = new Student("Alice", 1001);

boolean isNull = (name == null);        // true
boolean notNull = (student != null);    // true
boolean hasValue = (name != null);      // false
```

#### Why Check for `null`?

Checking for `null` before calling methods prevents `NullPointerException`:

```java
public void processName(String name) {
    if (name != null) {
        System.out.println(name.length());  // Safe to call
    } else {
        System.out.println("Name is null");
    }
}
```

#### Common Pattern: Null Check Before Method Call

```java
// Safe pattern using short-circuit evaluation
if (name != null && name.length() > 0) {
    System.out.println("Name has " + name.length() + " characters");
}

// Without null check - DANGEROUS
if (name.length() > 0) {  // NullPointerException if name is null!
    System.out.println("Name has " + name.length() + " characters");
}
```

### The `equals` Method for Content Comparison

Since `==` compares references, not content, Java provides the `equals` method to compare the actual data inside objects.

#### String Comparison with `equals`

```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

// equals compares CONTENT
boolean content1 = s1.equals(s2);  // true (same characters)
boolean content2 = s1.equals(s3);  // true (same characters)
boolean content3 = s1.equals("Hello");  // true
boolean content4 = s1.equals("hello");  // false (case matters!)
```

#### The Contract of `equals`

The `equals` method is defined in the `Object` class and inherited by all classes. Classes often override `equals` to provide class-specific content comparison logic.

For the AP exam, you need to know:
- `equals` is used to compare the **content** of objects
- For `String`, `equals` compares the sequence of characters
- `equals` returns a `boolean` value
- You should use `equals` (not `==`) when you care about whether two objects have the same data

#### Important Restriction

**The CED states:** "Using the `equals` method to compare one `String` object with an object of a type other than `String` is outside the scope of the AP Computer Science A course and exam."

This means you won't be tested on code like `str.equals(5)` or comparing a String to an Integer using `equals`.

### Comparing Objects of Other Classes

For classes you create (like `Student`), the default `equals` method from `Object` behaves like `==`—it compares references, not content.

```java
Student s1 = new Student("Alice", 1001);
Student s2 = new Student("Alice", 1001);
Student s3 = s1;

boolean refCompare = (s1 == s2);        // false (different objects)
boolean defaultEquals = s1.equals(s2);   // false (unless overridden)
boolean sameRef = s1.equals(s3);         // true (same object)
```

**Important:** Overriding the `equals` method is **outside the scope** of the AP CSA course. You only need to understand that:
- `equals` exists for all objects
- It can be overridden to provide content comparison
- You will not be asked to write or analyze overridden `equals` methods

### When to Use `==` vs `equals`

| Situation | Use | Reason |
|-----------|-----|--------|
| Comparing primitive values | `==` | Primitives store actual values |
| Checking if two references point to same object | `==` | Reference identity |
| Checking if a reference is `null` | `==` or `!=` | Null check |
| Comparing String content | `equals()` | Content comparison |
| Comparing any object's content (general) | `equals()` | Content comparison (if overridden) |
| You don't know if `equals` is overridden | `==` is safer for identity | But may not give content comparison |

### Common Patterns for Boolean Comparisons

#### Pattern 1: Validating Input with Multiple Checks
```java
String input = getUserInput();
boolean isValid = input != null && 
                  !input.isEmpty() && 
                  input.length() <= 20 &&
                  input.matches("[a-zA-Z]+");
```

#### Pattern 2: Checking if an Object is in a Valid State
```java
Student s = getStudent();
if (s != null && s.getName() != null) {
    System.out.println("Student name: " + s.getName());
}
```

#### Pattern 3: Comparing Strings Ignoring Case (if needed)
```java
String userInput = "YES";
if (userInput.equalsIgnoreCase("yes")) {
    System.out.println("User agreed");
}
```

#### Pattern 4: Using De Morgan's to Simplify
```java
// Complex negated condition
if (!(score < 0 || score > 100)) {
    System.out.println("Score is valid");
}

// Simplified with De Morgan's
if (score >= 0 && score <= 100) {
    System.out.println("Score is valid");
}
```

### Common Errors with Boolean Comparisons

| Error | Example | Problem | Fix |
|-------|---------|---------|-----|
| Using `==` for String content | `if (str == "hello")` | Compares references, not content | Use `str.equals("hello")` |
| Forgetting null check | `if (str.equals("hello"))` | NullPointerException if str is null | Check `str != null` first |
| Confusing `=` and `==` | `if (x = 5)` | Assignment instead of comparison | Use `==` for comparison |
| Incorrect De Morgan application | `!(a && b)` becomes `!a && !b` | Wrong operator change | Should be `!a || !b` |
| Comparing different types with `equals` | `str.equals(5)` | Outside scope, may cause errors | Compare same types only |
| Assuming all objects have content `equals` | Default `equals` behaves like `==` | May not get content comparison | Check class documentation |

### Key Terminology for Topic 2.6

| Term | Definition |
|------|------------|
| **Equivalent Boolean expressions** | Expressions that evaluate to the same value for all possible inputs |
| **Truth table** | A table showing all input combinations and the resulting output for a Boolean expression |
| **De Morgan's Laws** | Rules for distributing NOT over AND and OR: `!(a&&b) = !a||!b`, `!(a||b) = !a&&!b` |
| **Object reference** | A memory address pointing to an object |
| **`null`** | A special literal meaning "no object" |
| **`equals` method** | A method that compares object content (may be overridden by classes) |

### AP Exam Tips

- **De Morgan's Laws are tested:** Be able to apply them to rewrite negated compound conditions. Multiple-choice questions often ask for equivalent expressions.
- **Truth tables may appear:** You might need to determine if two expressions are equivalent or evaluate a complex expression.
- **`==` vs `equals` for Strings:** This distinction appears regularly. Remember that `==` compares references, `equals` compares content.
- **Null checks:** Code that checks `if (obj == null)` or `if (obj != null)` is common. Know why it's necessary.
- **Short-circuit evaluation interacts:** When applying De Morgan's, remember that the resulting expression still follows short-circuit rules.
- **Exclusion reminder:** You won't be tested on overriding `equals` or comparing Strings to non-String objects.
- **Practice transforming conditions:** Given a complex condition, be able to write its negation using De Morgan's.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "`==` compares String content." | No, `==` compares references. Use `equals()` for content. |
| "De Morgan's only applies to simple conditions." | De Morgan's applies to any Boolean expression, no matter how complex. |
| "`!(a && b)` is the same as `!a && !b`." | No, it's `!a || !b`. This is a very common mistake. |
| "All objects have a content-comparing `equals` method." | The default `equals` compares references. Classes may override it. |
| "I don't need to check for null if I'm sure the object exists." | Never assume—always check when there's any possibility of null. |
| "Truth tables are only for beginners." | Truth tables are useful for proving equivalence at any level. |

### Quick Reference: De Morgan's Laws

| Original | Equivalent |
|----------|------------|
| `!(a && b)` | `!a || !b` |
| `!(a || b)` | `!a && !b` |
| `!(x > 0 && y < 10)` | `x <= 0 || y >= 10` |
| `!(isMember || hasPaid)` | `!isMember && !hasPaid` |

### Quick Reference: Comparison Rules

| Comparison Type | Correct Operator | Example |
|-----------------|------------------|---------|
| Primitive values | `==`, `!=`, `<`, `>`, etc. | `if (count > 0)` |
| Object references (same object?) | `==`, `!=` | `if (s1 == s2)` |
| Object content | `equals()` | `if (s1.equals(s2))` |
| Null check | `== null` or `!= null` | `if (name != null)` |