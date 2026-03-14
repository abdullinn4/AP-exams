### Nested if Statements

### What Are Nested if Statements?

**Nested if statements** occur when an if statement (or if-else, or if-else-if) appears inside another if statement (or if-else, or if-else-if). Nesting allows for more complex decision-making where one condition must be true before additional conditions are even considered.

**Real-World Analogy:** Think of a multi-level approval process:
- First, you must be a member (outer if)
- Then, if you're a member, you might qualify for different discounts based on your membership tier (inner if-else)
- Non-members never get to the inner conditions

In programming, nesting lets you create hierarchical decisions: the outer condition acts as a gatekeeper—if it's false, the inner conditions are never evaluated.

### Why Use Nested if Statements?

Nested ifs are useful when:
- One condition must be true before other conditions are relevant
- You need to check multiple related conditions in a hierarchy
- You want to avoid evaluating unnecessary conditions

### Syntax of Nested if Statements

**Basic nested if structure:**
```java
if (outerCondition) {
    // code executed only when outerCondition is true
    
    if (innerCondition) {
        // code executed when both outer and inner are true
    }
    
    // more code that executes when outerCondition is true
}
```

**Nested if-else inside if:**
```java
if (outerCondition) {
    if (innerCondition) {
        // both true
    } else {
        // outer true, inner false
    }
} else {
    // outer false - inner never checked
}
```

**Nested if-else-if inside else:**
```java
if (outerCondition) {
    // outer true case
} else {
    if (innerCondition1) {
        // outer false, inner1 true
    } else if (innerCondition2) {
        // outer false, inner1 false, inner2 true
    } else {
        // outer false, all inner false
    }
}
```

### How Nested if Statements Execute

The key principle: **The inner if statement is only evaluated if the outer if statement's condition is true.**

**Execution flow:**
1. Evaluate the outer condition
2. If outer condition is false, skip the entire outer block (including all nested statements)
3. If outer condition is true, enter the outer block and execute its statements in order
4. When reaching a nested if, evaluate its condition and proceed accordingly
5. After the nested if completes, continue with any remaining statements in the outer block

### Example 1: Simple Nested if

```java
int age = 20;
boolean hasLicense = true;

if (age >= 18) {
    System.out.println("You are old enough to drive.");
    
    if (hasLicense) {
        System.out.println("You can rent a car.");
    } else {
        System.out.println("Get your license first.");
    }
} else {
    System.out.println("You are too young to drive.");
}
```

**Tracing with age = 20, hasLicense = true:**
- Outer condition `age >= 18` is true → enter outer block
- Print "You are old enough to drive."
- Inner condition `hasLicense` is true → print "You can rent a car."
- Exit outer block

**Tracing with age = 20, hasLicense = false:**
- Outer condition true → enter outer block
- Print "You are old enough to drive."
- Inner condition false → print "Get your license first."
- Exit outer block

**Tracing with age = 16, hasLicense = true:**
- Outer condition false → skip entire outer block
- Go directly to else: print "You are too young to drive."
- Inner condition never checked

### Example 2: Nested if-else-if for Grading with Extra Credit

```java
int score = 92;
boolean extraCredit = true;

if (score >= 60) {
    System.out.println("You passed!");
    
    if (extraCredit) {
        System.out.println("You earned extra credit.");
        score += 5;
    }
    
    if (score >= 90) {
        System.out.println("Grade: A");
    } else if (score >= 80) {
        System.out.println("Grade: B");
    } else if (score >= 70) {
        System.out.println("Grade: C");
    } else {
        System.out.println("Grade: D");
    }
} else {
    System.out.println("You failed.");
}
```

### Example 3: Nested if in a Banking Application

```java
double balance = 5000;
double withdrawal = 2000;
boolean isPremium = true;

if (withdrawal <= balance) {
    System.out.println("Processing withdrawal...");
    
    if (isPremium) {
        System.out.println("Premium member: No fee charged.");
        balance -= withdrawal;
    } else {
        double fee = 2.50;
        System.out.println("Standard member: $" + fee + " fee applies.");
        balance -= (withdrawal + fee);
    }
    
    System.out.println("New balance: $" + balance);
} else {
    System.out.println("Insufficient funds.");
    System.out.println("Current balance: $" + balance);
}
```

### The Dangling Else Problem Revisited

The **dangling else** problem occurs when nested if statements create ambiguity about which if an else belongs to. Java resolves this by attaching each else to the nearest preceding if that hasn't already been paired.

**Ambiguous code:**
```java
if (a > 0)
    if (b > 0)
        System.out.println("Both positive");
else
    System.out.println("a is not positive");
```

Indentation suggests the else belongs to the outer if, but Java attaches it to the inner if. So "a is not positive" prints when a > 0 is true AND b > 0 is false—not when a <= 0.

**Clear code with braces:**
```java
if (a > 0) {
    if (b > 0) {
        System.out.println("Both positive");
    }
} else {
    System.out.println("a is not positive");
}
```

**Rule:** Always use braces to make your intent clear and avoid dangling else ambiguity.

### Common Patterns with Nested ifs

#### Pattern 1: Validation Gatekeeper
```java
if (input != null) {
    if (input.length() > 0) {
        System.out.println("Valid input: " + input);
    } else {
        System.out.println("Input is empty");
    }
} else {
    System.out.println("No input provided");
}
```

#### Pattern 2: Tiered Pricing
```java
int quantity = 15;
boolean isMember = true;
double price = 10.0;

if (quantity > 0) {
    double total = quantity * price;
    
    if (isMember) {
        total *= 0.9; // 10% member discount
        System.out.println("Member discount applied");
    }
    
    if (quantity >= 10) {
        total *= 0.95; // additional 5% bulk discount
        System.out.println("Bulk discount applied");
    }
    
    System.out.println("Total: $" + total);
} else {
    System.out.println("Invalid quantity");
}
```

#### Pattern 3: Multi-Level Authentication
```java
boolean hasAccount = true;
boolean isAdmin = false;
boolean hasPermission = true;

if (hasAccount) {
    System.out.println("Account verified");
    
    if (isAdmin) {
        System.out.println("Admin access granted");
    } else {
        System.out.println("Standard user");
        
        if (hasPermission) {
            System.out.println("Access granted to basic features");
        } else {
            System.out.println("Insufficient permissions");
        }
    }
} else {
    System.out.println("Please create an account");
}
```

### Nested ifs vs Logical Operators

Sometimes nested ifs can be replaced with compound Boolean expressions using `&&` (logical AND). Which you choose depends on readability and whether you need different actions for different combinations.

**Nested if version:**
```java
if (age >= 18) {
    if (hasID) {
        System.out.println("Welcome");
    } else {
        System.out.println("ID required");
    }
} else {
    System.out.println("Too young");
}
```

**Equivalent with logical operators:**
```java
if (age >= 18 && hasID) {
    System.out.println("Welcome");
} else if (age >= 18 && !hasID) {
    System.out.println("ID required");
} else {
    System.out.println("Too young");
}
```

The nested version is often clearer when the conditions form a natural hierarchy.

### Common Errors with Nested ifs

| Error | Example | Problem | Fix |
|-------|---------|---------|-----|
| Forgetting braces | `if (x>0) if (y>0) System.out.println("ok"); else System.out.println("error");` | Else attaches to inner if | Add braces to clarify |
| Misaligned logic | Testing inner condition when outer is false | Inner if placed outside outer block | Ensure inner ifs are inside correct braces |
| Deep nesting | 4+ levels of nesting | Code becomes hard to read | Consider refactoring into methods |
| Redundant checks | `if (x>0) { if (x>0 && y>0) { } }` | Outer condition rechecked | Simplify logic |

### Performance Considerations

Nested ifs can be more efficient than separate ifs because conditions are only evaluated when necessary. In this example:

```java
if (expensiveOperation1()) {
    if (expensiveOperation2()) {
        // do something
    }
}
```

If `expensiveOperation1()` returns false, `expensiveOperation2()` is never called, saving processing time. This is called **short-circuiting** at the statement level.

### Tracing Nested if Statements

When tracing nested ifs on the AP exam, follow this process:

1. Evaluate the outermost condition first
2. If false, skip the entire outer block
3. If true, enter the block and execute line by line
4. When you encounter a nested if, evaluate its condition
5. Continue until you exit all nested structures

**Example to trace:**
```java
int x = 5, y = 10, z = 15;

if (x < y) {
    System.out.println("A");
    
    if (y < z) {
        System.out.println("B");
    } else {
        System.out.println("C");
    }
    
    System.out.println("D");
} else {
    System.out.println("E");
}

System.out.println("F");
```

**Trace:**
- `x < y` is 5 < 10 → true → enter outer block, print "A"
- `y < z` is 10 < 15 → true → print "B"
- Exit inner if, continue outer block, print "D"
- Exit outer block, print "F"

**Output:**
```
A
B
D
F
```

### Key Terminology for Topic 2.4

| Term | Definition |
|------|------------|
| **Nested if statements** | if statements (or if-else, if-else-if) that appear inside other if statements |
| **Dangling else** | Ambiguity in nested ifs where an else could attach to multiple ifs; Java attaches else to nearest if |
| **Hierarchical conditions** | Conditions that must be checked in a specific order, where some depend on others being true |

### AP Exam Tips

- **Execution order:** Remember that inner ifs are only evaluated if the outer condition is true. This affects both output and performance.
- **Dangling else:** On the exam, code without braces may appear. Know that an else attaches to the nearest if. Use mental braces if needed.
- **Tracing:** Practice tracing nested ifs with different input values. Create a table of variable values as you go.
- **Braces matter:** Code with misleading indentation but no braces will execute based on actual structure, not indentation.
- **Logical equivalence:** Sometimes nested ifs can be rewritten with `&&`. Be able to recognize equivalent logic.
- **Common patterns:** Validation, tiered pricing, and multi-level checks appear frequently in free-response questions.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Indentation determines which if an else belongs to." | No, Java ignores indentation. Else attaches to nearest if without braces. |
| "All nested conditions are always evaluated." | No, outer condition must be true before inner conditions are even considered. |
| "Nested ifs are always worse than logical operators." | Not true—nested ifs can be clearer for hierarchical logic. |
| "You can't have an if inside an else." | You can have any statement inside an else, including another if. |
| "Deep nesting is always bad." | Deep nesting can be hard to read, but sometimes it's the clearest way to express hierarchical logic. |

### Quick Reference: Nested if Patterns

| Pattern | Structure | Use Case |
|---------|-----------|----------|
| Gatekeeper | `if (outer) { if (inner) { } }` | Inner check only relevant if outer passes |
| Tiered | `if (outer) { } else { if (inner) { } }` | Different inner logic based on outer result |
| Multi-level | Multiple nested levels | Complex hierarchical decisions |