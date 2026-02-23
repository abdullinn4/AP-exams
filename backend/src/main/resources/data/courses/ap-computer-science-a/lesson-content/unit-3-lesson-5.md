### 3.5: Methods: How to Write Them

### What is a Method?

A **method** is a named block of code that defines a behavior of an object (or of a class). Methods allow you to encapsulate a specific task, making your code modular, reusable, and easier to understand. In a class, methods operate on the object's instance variables and can return results or simply perform an action.

**Real-World Analogy:** Think of a method like a function on a smartphone. You tap an icon (call the method), and the phone performs a series of actions—maybe it opens an app, makes a calculation, or displays information. You don't need to know how it works internally; you just know what it does.

### Method Header Components

Every method has a **header** that defines its signature and accessibility. The general syntax is:

```java
accessModifier returnType methodName(parameterList) {
    // method body
}
```

- **accessModifier** – Usually `public` or `private`. Determines which other classes can call this method.
- **returnType** – The data type of the value the method returns. Use `void` if the method does not return anything.
- **methodName** – The name of the method (should be a verb, camelCase).
- **parameterList** – A comma-separated list of input parameters (type and name). Can be empty.

#### Example Headers

```java
public void printWelcome()           // no parameters, no return
public int getAge()                  // no parameters, returns int
public void setName(String newName)  // one parameter, no return
public double average(double a, double b) // two parameters, returns double
```

### Void Methods

A **void method** performs an action but does **not** return a value. Its header contains the keyword `void` in place of a return type. Void methods are called as standalone statements.

```java
public class Student {
    private String name;
    
    public void printName() {
        System.out.println("Student name: " + name);
    }
}

// Calling a void method:
Student s = new Student("Alice");
s.printName();   // called as a statement, no value produced
```

Void methods cannot be used in expressions because they don't produce a value.

```java
String result = s.printName();  // ERROR! void method doesn't return anything.
```

### Non‑Void Methods (Value‑Returning Methods)

A **non‑void method** returns a single value. Its header specifies the return type (e.g., `int`, `double`, `String`, etc.). The method must contain a `return` statement that provides a value compatible with the declared return type.

```java
public class Student {
    private String name;
    private int age;
    
    public String getName() {
        return name;   // returns a String
    }
    
    public int getAge() {
        return age;    // returns an int
    }
}
```

When calling a non‑void method, you can:
- Store the returned value in a variable
- Use it directly in an expression
- Pass it as an argument to another method

```java
Student s = new Student("Alice", 17);
String studentName = s.getName();               // store in variable
int nextYearAge = s.getAge() + 1;               // use in expression
System.out.println(s.getName().toUpperCase());   // chain method calls
```

### The `return` Statement

The `return` keyword serves two purposes:
1. It exits the method immediately, returning control to the caller.
2. In a non‑void method, it also provides the value to be returned.

#### Return by Value

When a primitive value is returned, a **copy** of that value is sent back to the caller. The original variable inside the method is gone, but its value lives on.

```java
public int doubleIt(int x) {
    int result = x * 2;
    return result;   // returns a copy of the value in result
}
```

#### Unreachable Code

Any statement placed **after** a `return` will never be executed and causes a compiler error.

```java
public int test() {
    return 5;
    System.out.println("This line never runs");  // ERROR: unreachable statement
}
```

#### Using `return` in Void Methods

Even in a void method, you can use `return;` (without a value) to exit early. This is useful for guard clauses.

```java
public void process(int value) {
    if (value < 0) {
        return;           // exit early if invalid
    }
    // continue processing...
}
```

### Accessor Methods (Getters)

An **accessor method** (commonly called a **getter**) allows other classes to obtain the value of a private instance variable without directly accessing it. Accessor methods are **non‑void** and typically return a copy of the variable's value.

```java
public class BankAccount {
    private double balance;
    
    public double getBalance() {    // accessor method
        return balance;
    }
}
```

**Why use accessors?** They preserve encapsulation by keeping the instance variable private while still providing controlled read access.

### Mutator Methods (Modifiers / Setters)

A **mutator method** (often called a **setter**) changes the value of one or more instance variables. Mutators are typically `void` methods that take parameters containing the new values. They can include validation logic to ensure the object remains in a consistent state.

```java
public class BankAccount {
    private double balance;
    
    public void deposit(double amount) {    // mutator
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public void withdraw(double amount) {   // mutator
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}
```

Setters can also be simple:

```java
public void setName(String newName) {
    name = newName;
}
```

### Methods with Parameters

Parameters allow you to pass information into a method. The method can then use that data to perform its task.

#### Parameter Rules

- The number, type, and order of arguments must match the method's parameter list.
- Parameters are **local variables** inside the method; they cease to exist when the method ends.
- Parameter names can be the same as instance variable names, but then the local variable **shadows** the instance variable (you need `this` to distinguish them—covered later).

#### Call by Value with Primitive Parameters

When a primitive value is passed as an argument, Java makes a **copy** of that value and assigns it to the parameter. Any changes made to the parameter inside the method do **not** affect the original argument.

```java
public void increment(int x) {
    x++;   // changes the copy, not the original
}

public static void main(String[] args) {
    int num = 5;
    increment(num);
    System.out.println(num);   // still 5
}
```

This behavior is essential for understanding why primitive arguments are safe from modification.

### Putting It All Together: A Complete Class

```java
public class Rectangle {
    private double width;
    private double height;
    
    // Constructor
    public Rectangle(double w, double h) {
        width = w;
        height = h;
    }
    
    // Accessor methods
    public double getWidth() {
        return width;
    }
    
    public double getHeight() {
        return height;
    }
    
    // Mutator methods
    public void setWidth(double w) {
        if (w > 0) {
            width = w;
        }
    }
    
    public void setHeight(double h) {
        if (h > 0) {
            height = h;
        }
    }
    
    // Other methods (non‑void)
    public double area() {
        return width * height;
    }
    
    public double perimeter() {
        return 2 * (width + height);
    }
    
    // Void method
    public void scale(double factor) {
        if (factor > 0) {
            width *= factor;
            height *= factor;
        }
    }
}
```

### Common Patterns in Method Writing

#### Pattern 1: Validation in Mutators

```java
public void setAge(int age) {
    if (age >= 0 && age <= 150) {
        this.age = age;
    }
}
```

#### Pattern 2: Computed Properties (no corresponding instance variable)

```java
public String getFullName() {
    return firstName + " " + lastName;
}
```

#### Pattern 3: Boolean Methods (Predicates)

```java
public boolean isAdult() {
    return age >= 18;
}
```

#### Pattern 4: Methods that Call Other Methods

```java
public void processOrder() {
    if (validateOrder()) {
        calculateTotal();
        applyDiscount();
        saveOrder();
    }
}
```

### Common Errors with Methods

| Error | Example | Problem | Fix |
|-------|---------|---------|-----|
| Missing return statement | `public int getValue() { }` | Non‑void method must return a value | Add `return` with appropriate value |
| Return type mismatch | `return "hello";` in an `int` method | Return value type incompatible | Change return type or return correct type |
| Unreachable code | Code after `return` | Will never execute | Remove or restructure |
| Forgetting to declare method void | `public int display()` but returns nothing | Confusing | Use `void` if no return |
| Modifying primitive parameter and expecting original to change | `x++` inside method | Call by value creates a copy | Understand that original is unaffected |
| Calling void method in expression | `int x = obj.voidMethod();` | void methods produce no value | Call as standalone statement |
| Shadowing without using `this` | Parameter `name` used to assign `name = name;` | Assigns parameter to itself | Use `this.name = name;` |

### Key Terminology for Topic 3.5

| Term | Definition |
|------|------------|
| **Method** | A named block of code that defines a behavior of an object or class |
| **Void method** | A method that does not return a value (return type `void`) |
| **Non‑void method** | A method that returns a value of a specified type |
| **Return statement** | A statement that exits a method and optionally returns a value |
| **Return by value** | Returning a copy of a value (primitives) or a reference (objects) |
| **Accessor method** | A non‑void method that returns the value of an instance variable (getter) |
| **Mutator method** | A method, often void, that changes the value of instance variables (setter) |
| **Parameter** | A variable declared in the method header that receives an argument value |
| **Argument** | The actual value passed to a method when it is called |
| **Call by value** | Parameter passing where a copy of the argument's value is made |
| **Shadowing** | When a local variable or parameter has the same name as an instance variable, hiding it |

### AP Exam Tips

- **Method headers:** Be able to identify the return type, name, and parameters. Know the difference between `void` and non‑void.
- **Return statements:** Every non‑void method must have a `return` that matches the declared return type. Missing return is a common error.
- **Accessors vs mutators:** Accessors return values; mutators change state (often void). Both are essential for encapsulation.
- **Call by value with primitives:** Changing a primitive parameter inside a method does **not** affect the original argument. This is tested frequently.
- **Void method calls:** They are statements, not expressions. You cannot assign their result.
- **Method decomposition:** Breaking complex tasks into smaller methods is good design. FRQs often expect you to call helper methods.
- **Common patterns:** Be comfortable writing simple accessors, mutators, and methods that perform calculations.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "A method must always return a value." | No, `void` methods do not return a value. |
| "The `return` statement is optional." | In a non‑void method, it is required. |
| "Changing a parameter changes the original variable." | For primitives, no—call by value uses copies. |
| "Accessor methods should be `void`." | No, accessors return values, so they are non‑void. |
| "Mutator methods must be called `setX`." | Naming convention is common but not required. |
| "You can't have multiple `return` statements." | You can, as long as exactly one is reached per call. |
| "The method name must be unique." | Overloading allows same name with different parameters. |

### Quick Reference: Method Categories

| Category | Return Type | Purpose | Example |
|----------|-------------|---------|---------|
| Accessor (getter) | Non‑void | Retrieve a value | `getName()` |
| Mutator (setter) | Usually void | Change a value | `setName(String)` |
| Helper / utility | Any | Perform a task | `calculateArea()` |
| Predicate | `boolean` | Test a condition | `isAdult()` |