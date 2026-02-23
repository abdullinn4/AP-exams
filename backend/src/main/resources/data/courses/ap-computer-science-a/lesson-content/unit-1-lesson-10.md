
### 1.10: Calling Class Methods

### What Are Class Methods?

**Class methods** are methods that belong to the class itself, not to any specific object created from that class. They are also called **static methods** because they use the keyword `static` in their header.

**Key Concept:** You do not need to create an object to use a class method. The method exists independently of any instances.

#### Real-World Analogy

Think of a class method as a public bulletin board:
- The bulletin board belongs to the whole community (the class)
- Anyone can read or post on it without needing to own a specific house (object)
- Information on the bulletin board is shared by everyone


### Identifying Class Methods: The `static` Keyword

Class methods include the keyword `static` in their header, **before** the return type.

```java
public static int max(int a, int b) {
    // method body
}
```

The `static` keyword tells Java that this method belongs to the class, not to instances.

#### Examples of Class Methods You've Already Used

| Method | Class | Header |
|--------|-------|--------|
| `Math.random()` | `Math` | `public static double random()` |
| `Math.sqrt()` | `Math` | `public static double sqrt(double a)` |
| `Math.abs()` | `Math` | `public static int abs(int a)` |
| `Integer.parseInt()` | `Integer` | `public static int parseInt(String s)` |

Notice the `static` keyword in each header—these are all class methods.


### Calling Class Methods

Class methods are typically called using the **class name** followed by the **dot operator** (`.`) and then the method name.

**Syntax:**
```java
ClassName.methodName(arguments);
```

#### Examples

```java
double randomNum = Math.random();           // Calling Math.random()
double squareRoot = Math.sqrt(25.0);        // Calling Math.sqrt()
int absolute = Math.abs(-10);                // Calling Math.abs()
int number = Integer.parseInt("42");         // Calling Integer.parseInt()
```

#### Why Use the Class Name?

Using the class name makes it clear which class the method belongs to. This is especially important when different classes might have methods with the same name.

```java
// Both classes might have a method named "parse"
int x = Integer.parseInt("123");
double y = Double.parseDouble("123.45");
```


### The Dot Operator

The **dot operator** (`.`) is used to access members of a class or object. When calling class methods, it connects the class name to the method name.

```java
ClassName  .  methodName()
    ↑      ↑       ↑
    |      |       |
  Class   dot    method
  name   operator
```

Think of the dot operator as meaning "go inside and find."


### The Special Case: Calling Within the Defining Class

When a class method is called from **within the same class**, the class name is **optional**.

#### Example

```java
public class MathHelper {
    
    public static void printWelcome() {
        System.out.println("Welcome to MathHelper!");
    }
    
    public static void doSomething() {
        // Calling another class method from the same class
        printWelcome();           // Class name optional - works
        MathHelper.printWelcome(); // Also works, but optional
    }
}
```

Both calls to `printWelcome()` are valid. Java knows you're calling a method in the current class.

#### When You Still Need the Class Name

Even within the same class, you might need to use the class name to avoid confusion:

```java
public class Calculator {
    
    public static void printResult(int value) {
        System.out.println("Result: " + value);
    }
    
    public static void calculate() {
        // Clear which method we mean
        printResult(42);  // Calls the method above
    }
}
```

The class name is optional, not required. Most programmers omit it for brevity within the same class.


### Class Methods vs Instance Methods: Preview

This topic focuses on **class methods** (static). Later topics will cover **instance methods** (non-static). Here's the key difference:

| | Class Methods | Instance Methods |
|---|---------------|-------------------|
| **Keyword** | `static` in header | No `static` keyword |
| **Belongs to** | The class itself | Individual objects |
| **Called with** | Class name | Object reference |
| **Can access** | Only static members | Both static and instance members |
| **Example** | `Math.random()` | `"hello".length()` |

**For now, focus on class methods.** You'll learn instance methods starting in Topic 1.14.


### Common Class Methods You'll Use

#### Math Class Methods
```java
Math.abs(-5)      // Returns 5
Math.pow(2, 3)    // Returns 8.0
Math.sqrt(16)     // Returns 4.0
Math.random()     // Returns random double between 0.0 and 1.0
Math.min(5, 10)   // Returns 5
Math.max(5, 10)   // Returns 10
```

#### Integer Class Methods
```java
Integer.parseInt("123")     // Returns int 123
Integer.MAX_VALUE           // Constant, not a method
Integer.MIN_VALUE           // Constant, not a method
```

#### Double Class Methods
```java
Double.parseDouble("3.14")  // Returns double 3.14
```


### Why Class Methods Exist

Class methods are useful when:

1. **The method doesn't depend on object state** – `Math.sqrt()` doesn't need any object; it just computes a square root

2. **You need utility functions** – Methods like `parseInt()` are general tools, not tied to specific objects

3. **You need to access class-level data** – Methods that work with class variables (covered in Unit 3)

4. **You need a method before any objects exist** – The `main` method is static because it runs before any objects are created


### Key Terminology for Topic 1.10

| Term | Definition |
|------|------------|
| **Class method** | A method that belongs to the class itself, not to instances (also called static method) |
| **`static`** | Keyword indicating that a method belongs to the class |
| **Dot operator (`.`)** | Used to access members of a class or object |
| **Class name** | Used to call class methods from outside the defining class |


### AP Exam Tips

**What you need to know for the exam:**

- **Static means class method:** If you see `static` in a method header, it's a class method. Call it with the class name.

- **Calling syntax:** `ClassName.methodName(arguments)` is the standard way.

- **Within the same class:** The class name is optional. You'll see both forms on the exam.

- **Math class familiarity:** Be comfortable calling common Math methods. They appear throughout the exam.

- **Not all methods are class methods:** Later topics will introduce instance methods. Pay attention to whether a method is static or not.

- **The dot operator is consistent:** Whether calling class methods or (later) instance methods, the dot operator is used the same way.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "I need to create an object to call a class method." | No, class methods are called with the class name, no object needed. |
| "All methods in the Math class are instance methods." | No, all Math methods are class methods (static). |
| "Static means the method doesn't change." | Static means it belongs to the class, not that it's constant. |
| "I must always use the class name, even inside the same class." | Inside the same class, the class name is optional. |
| "The dot operator is only for class methods." | The dot operator is used for all member access—class methods, instance methods, and variables. |
| "If a method doesn't have static, I can still call it with the class name." | No, non-static methods require an object. |


### Quick Reference: Calling Class Methods

| Location | Syntax | Example |
|----------|--------|---------|
| Outside the defining class | `ClassName.methodName(args)` | `double r = Math.random();` |
| Inside the defining class | `methodName(args)` or `ClassName.methodName(args)` | `printWelcome();` or `MathHelper.printWelcome();` |
