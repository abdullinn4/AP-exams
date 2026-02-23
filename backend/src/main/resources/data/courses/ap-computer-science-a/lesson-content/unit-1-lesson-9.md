
### 1.9: Method Signatures


### What is a Method?

A **method** is a named block of code that only runs when it is called. Methods allow you to organize code into reusable units, making programs easier to write, test, and maintain.

**Analogy:** Think of a method as a recipe. You write the recipe once with a name (like "bakeCookies"). Whenever you want cookies, you just follow that recipe instead of rewriting the instructions each time.

```java
// A simple method
public void sayHello() {
    System.out.println("Hello!");
}
```

Once defined, you can **call** (execute) this method whenever needed:

```java
sayHello();  // Prints: Hello!
sayHello();  // Prints: Hello! again
```


### Procedural Abstraction

**Procedural abstraction** is the idea that you can use a method by knowing **what** it does, without needing to know **how** it does it.

This is one of the most powerful concepts in programming:

- You call `Math.sqrt(16)` without knowing the algorithm for calculating square roots
- You call `System.out.println()` without knowing how text appears on your screen
- You use methods from libraries without seeing their internal code

**Procedural abstraction allows:**
- **Code reuse** – Write once, use many times
- **Modularity** – Break complex problems into smaller pieces
- **Teamwork** – Different programmers can work on different methods
- **Focus** – Concentrate on your problem, not implementation details


### Method Signatures

A **method signature** uniquely identifies a method. It consists of two parts:

1. **Method name**
2. **Ordered list of parameter types**

**Important:** The return type is **not** part of the method signature.

#### Signature Examples

| Method Header | Method Name | Parameter Types | Signature |
|---------------|-------------|-----------------|-----------|
| `public int add(int a, int b)` | `add` | `int, int` | `add(int, int)` |
| `public double calc(double x)` | `calc` | `double` | `calc(double)` |
| `public void display()` | `display` | (none) | `display()` |

The signature is what Java uses to distinguish one method from another.


### Parameters: What Methods Need to Do Their Job

A **parameter** is a variable declared in the method header. Parameters receive values when the method is called and can be used inside the method body.

#### Syntax

```java
public returnType methodName(parameterType parameterName) {
    // method body can use parameterName
}
```

#### Example with Parameters

```java
public void greet(String name) {
    System.out.println("Hello, " + name + "!");
}
```

The parameter `name` (type `String`) will hold whatever value is passed when the method is called.

---

### Arguments: What You Pass When Calling

An **argument** is the actual value passed into a method when it is called. Arguments must match the parameters in:
- **Number** (same count)
- **Type** (compatible types)
- **Order** (first argument matches first parameter, etc.)

```java
public void greet(String name, int age) {
    System.out.println("Hello, " + name + ". You are " + age + " years old.");
}

// Calling the method:
greet("Alice", 17);  // "Alice" matches String name, 17 matches int age
```

#### Parameter vs Argument: The Distinction

| | Parameter | Argument |
|---|-----------|----------|
| **Where** | In method header (definition) | In method call (invocation) |
| **What** | Variable that receives values | Actual value passed |
| **Think of it as** | The placeholder | The actual value |

```java
public void example(int param) {  // param is a PARAMETER
    // ...
}

example(42);  // 42 is an ARGUMENT
```


### Call by Value

Java uses **call by value** for parameter passing. This means:

1. When a method is called, a **copy** of each argument's value is made
2. The method parameters are initialized with these copies
3. The method works with the copies, not the original variables

#### Example with Primitive Types

```java
public void changeValue(int x) {
    x = 100;  // Changes the COPY, not the original
}

public static void main(String[] args) {
    int num = 5;
    changeValue(num);
    System.out.println(num);  // Still prints 5, not 100!
}
```

**What happens:**
1. `num` contains the value `5`
2. `changeValue(num)` is called – a copy of `5` is made
3. Parameter `x` receives the copy (also `5`)
4. Inside the method, `x` is changed to `100` (affects only the copy)
5. Back in `main`, `num` is unchanged

**The original variable is never affected** when passing primitive types.

*(Reference types behave differently—you'll learn about that in Unit 3.)*


### Void vs Non-Void Methods

#### Void Methods

A **void method** does not return a value. It performs an action but doesn't give anything back to the caller.

```java
public void printWelcome() {
    System.out.println("Welcome to the program!");
}
```

Void methods are called as standalone statements:

```java
printWelcome();  // Called, but no value is produced
```

You cannot use a void method in an expression:

```java
String result = printWelcome();  // ERROR! void method doesn't return anything
```

#### Non-Void Methods

A **non-void method** returns a value. The method header specifies the return type (instead of `void`).

```java
public int add(int a, int b) {
    int sum = a + b;
    return sum;  // Returns the value
}
```

Non-void methods must be used where a value is expected:

```java
int result = add(5, 3);        // Store in a variable
System.out.println(add(5, 3));  // Use directly in an expression
int total = add(5, 3) * 2;      // Use as part of a larger expression
```

The returned value must be compatible with the declared return type.

### Method Overloading

**Overloading** occurs when a class has multiple methods with the **same name** but **different signatures**.

#### What Can Be Different?

- Different number of parameters
- Different types of parameters
- Different order of parameters

#### What Cannot Be Different?

- Return type alone is **not enough** for overloading
- Parameter names alone are **not enough**

#### Examples of Valid Overloading

```java
// Same name, different number of parameters
public int add(int a, int b) {
    return a + b;
}

public int add(int a, int b, int c) {
    return a + b + c;
}

// Same name, different parameter types
public double add(double a, double b) {
    return a + b;
}

// Same name, different order
public void display(String name, int age) {
    System.out.println(name + " is " + age);
}

public void display(int age, String name) {
    System.out.println(age + " years old: " + name);
}
```

#### When is Overloading Useful?

- Same operation but different inputs (like `add` for 2 or 3 numbers)
- Constructors (you'll see this in Unit 3)
- Providing convenience methods for users

#### How Java Chooses Which Method to Call

When you call an overloaded method, Java looks at:
1. The method name
2. The number and types of arguments you provide

It then matches your call to the method with the closest matching signature.

```java
add(5, 10);        // Calls add(int, int)
add(5, 10, 15);    // Calls add(int, int, int)
add(5.0, 10.0);    // Calls add(double, double)
```


### Method Call Execution Flow

When a method is called, the normal sequential flow of the program is interrupted:

1. The current statement is paused
2. Program control jumps to the method being called
3. The method's statements execute (in order)
4. When the method ends (or hits a `return` statement), control returns to the point immediately after where the method was called
5. The original program continues

#### Visualizing Method Calls

```
public static void main(String[] args) {
    System.out.println("Start");
    sayHello();              // Call method
    System.out.println("End");
}

public static void sayHello() {
    System.out.println("Hello");
    System.out.println("World");
}
```

**Execution order:**
1. `"Start"` prints
2. Call `sayHello()` – jump to that method
3. `"Hello"` prints
4. `"World"` prints
5. Return to `main` – right after the method call
6. `"End"` prints

Output:
```
Start
Hello
World
End
```


### Key Terminology for Topic 1.9

| Term | Definition |
|------|------------|
| **Method** | A named block of code that only runs when called |
| **Procedural abstraction** | Using a method by knowing what it does, not how it does it |
| **Method signature** | The method name and ordered list of parameter types |
| **Parameter** | A variable declared in the method header that receives values |
| **Argument** | An actual value passed to a method when called |
| **Call by value** | Parameter passing where a copy of the argument is made |
| **Void method** | A method that does not return a value |
| **Non-void method** | A method that returns a value (specified return type) |
| **Overloading** | Multiple methods with same name but different signatures |
| **Return statement** | Statement that ends method execution and returns a value |


### AP Exam Tips

**What you need to know for the exam:**

- **Signature components:** Method name + parameter types (return type is NOT part of the signature)

- **Overloading recognition:** Be able to identify valid overloaded methods and predict which one will be called given specific arguments

- **Parameter vs argument:** Understand the distinction and use correct terminology

- **Call by value with primitives:** Know that changing a parameter inside a method does NOT affect the original argument

- **Void vs non-void:** Know which can be used in expressions and which cannot

- **Method call tracing:** Be able to trace execution flow when methods are called

- **Matching calls to signatures:** Given a method signature and a call, determine if the call is valid or causes an error


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Return type is part of the method signature." | No, only name and parameter types make up the signature. |
| "Overloading means same name, same parameters, different return type." | That's not overloading—it's a compiler error! |
| "Changing a parameter changes the original variable." | Not with primitives—call by value uses copies. |
| "Parameters and arguments are the same thing." | Parameters are placeholders; arguments are actual values passed. |
| "A void method can return a value if I want it to." | No, void means no return value. |
| "Method execution continues after a return statement." | No, return immediately exits the method. |
| "I can overload by changing parameter names." | Parameter names don't matter for overloading—only types. |

### Quick Reference: Method Components

| Component | Example | Part of Signature? |
|-----------|---------|---------------------|
| Access modifier | `public` | No |
| Return type | `int` | No |
| Method name | `calculate` | Yes |
| Parameter types | `(int, double)` | Yes |
| Parameter names | `(int x, double y)` | No |
