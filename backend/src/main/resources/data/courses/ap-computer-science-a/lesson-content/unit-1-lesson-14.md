
### 1.14: Calling Instance Methods

### What Are Instance Methods?

**Instance methods** are methods that belong to individual objects, not to the class itself. They define the behaviors that an object can perform.

**Key Concept:** You must have an object to call an instance method. The method operates on that specific object's data.

#### Real-World Analogy

Think of a car:
- The car (object) has methods like `start()`, `accelerate()`, `brake()`
- You need an actual car to call these methods
- Calling `start()` on one car doesn't affect other cars
- Each car has its own state (fuel level, speed) that the methods work with


### Instance Methods vs Class Methods: The Difference

| | Instance Methods | Class Methods |
|---|-----------------|---------------|
| **Keyword** | No `static` keyword | `static` in header |
| **Belongs to** | Individual objects | The class itself |
| **Called with** | Object reference | Class name |
| **Operates on** | That object's data | No specific object data |
| **Example** | `"hello".length()` | `Math.random()` |

#### Examples You've Already Used

Even without knowing the term "instance method," you've been using them:

```java
String message = "Hello";
int len = message.length();           // length() is an instance method
String first = message.substring(0,1); // substring() is an instance method

Scanner scan = new Scanner(System.in);
int num = scan.nextInt();              // nextInt() is an instance method
```

In each case, the method is called **on an object** (`message`, `scan`), not on the class.


### Calling Instance Methods: The Syntax

Instance methods are called using an **object reference** followed by the **dot operator** (`.`) and then the method name.

**Syntax:**
```java
objectReference.methodName(arguments);
```

#### Examples

```java
String name = "Alice";
int length = name.length();           // Called on String object "Alice"
char firstChar = name.charAt(0);       // Called on the same String object

Scanner keyboard = new Scanner(System.in);
int age = keyboard.nextInt();          // Called on Scanner object
double gpa = keyboard.nextDouble();    // Called on same Scanner object

Student alice = new Student("Alice", 1001);
String studentName = alice.getName();  // Called on Student object
```


### The Dot Operator with Objects

The **dot operator** (`.`) is used to access members of an object. When calling instance methods, it connects the object reference to the method name.

```java
objectReference  .  methodName()
       ↑         ↑       ↑
       |         |       |
    object      dot    method
   reference   operator
```

Think of the dot operator as meaning "go inside this object and find."


### What Happens When You Call an Instance Method

When you call an instance method:

1. The object reference is used to find the object in memory
2. The method executes using that object's data
3. If the method returns a value, it's returned to the caller
4. Control returns to the point after the method call

#### Visualizing Method Calls

```java
Student alice = new Student("Alice", 1001);
String name = alice.getName();  // Call instance method
```

```
Memory:
┌─────────────────┐
│     alice       │
│   ┌─────────┐   │
│   │ 0x1A3F  │   │
│   └─────────┘   │
└─────────────────┘
         ↓
    ┌────────────────────────────┐
    │ Student object at 0x1A3F   │
    │ name: "Alice"              │
    │ id: 1001                   │
    │                            │
    │ getName() method           │
    │   returns this.name        │ ← Method uses this object's data
    └────────────────────────────┘
```

The method `getName()` knows which object it's working on because it was called through the `alice` reference.


### The Critical Danger: Calling on `null`

If you call an instance method on a reference that is `null`, the program will crash with a **`NullPointerException`**.

```java
Student s = null;           // s refers to no object
String name = s.getName();  // NullPointerException! Program crashes
```

**Why this happens:**
- Java needs an actual object to find and execute the method
- `null` means "no object"
- There's no object to call the method on
- The program terminates immediately

#### Common Scenarios That Cause NullPointerException

```java
// Forgetting to initialize
String text;
System.out.println(text.length());  // Compiler error (uninitialized)

// But this compiles:
String text = null;
System.out.println(text.length());  // NullPointerException at runtime

// Methods that might return null
String data = getData();  // Suppose this returns null
int len = data.length();  // NullPointerException if getData() returned null
```

#### Preventing NullPointerException

Always ensure your references refer to actual objects before calling methods:

```java
Student s = getStudent();  // Might return null
if (s != null) {
    String name = s.getName();  // Safe - only called if s is not null
} else {
    System.out.println("No student found");
}
```


### Multiple Objects, Multiple Method Calls

Each object has its own copy of instance variables. When you call the same instance method on different objects, each call works with that specific object's data.

```java
Student alice = new Student("Alice", 1001);
Student bob = new Student("Bob", 1002);

System.out.println(alice.getName());  // Prints "Alice"
System.out.println(bob.getName());    // Prints "Bob"
```

The same `getName()` method is used, but it accesses different data depending on which object it's called on.


### Method Chaining (Brief Introduction)

Some instance methods return the object they were called on, allowing you to chain multiple calls together.

```java
String result = "  Hello  ".trim().toUpperCase().substring(0,3);
// 1. trim() returns "Hello"
// 2. toUpperCase() called on "Hello" returns "HELLO"
// 3. substring(0,3) called on "HELLO" returns "HEL"
```

Each method call returns an object, and the next method is called on that returned object.

**Note:** Method chaining is useful but not required knowledge for the AP exam. It's shown here as an example of how instance method calls can be combined.


### Key Terminology for Topic 1.14

| Term | Definition |
|------|------------|
| **Instance method** | A method that belongs to an object, not to the class |
| **Dot operator (`.`)** | Used to access members of an object |
| **Object reference** | A variable that holds the memory address of an object |
| **`NullPointerException`** | A runtime exception that occurs when calling a method on a `null` reference |


### AP Exam Tips

**What you need to know for the exam:**

- **Instance methods require an object:** You must have a valid object reference to call an instance method. Class methods use the class name.
- **Dot operator syntax:** `object.methodName(args)` is the pattern.
- **`null` is deadly:** Calling any method on `null` causes `NullPointerException`. This is a common runtime error on the exam.
- **Different objects, different results:** The same method called on different objects can return different values because each object has its own data.
- **Recognizing instance methods:** If a method header doesn't have `static`, it's an instance method. (You'll learn to write them in Unit 3.)
- **String methods are instance methods:** `length()`, `substring()`, `indexOf()`, etc., are all called on String objects.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Instance methods can be called using the class name." | No, instance methods require an object. |
| "Calling a method on null just returns nothing." | No, it crashes with NullPointerException. |
| "All methods need an object to call." | Class methods (static) use the class name, not an object. |
| "The dot operator is only for instance methods." | The dot operator is used for both instance and class methods. |
| "If I declare a variable but don't initialize it, it's null." | For local variables, that's a compiler error. For instance variables, yes, they default to null. |
| "NullPointerException is a compile-time error." | No, it's a runtime error—the program compiles but crashes when run. |


### Quick Reference: Calling Methods

| Method Type | How to Call | Example |
|-------------|-------------|---------|
| Instance method | `object.methodName(args)` | `name.length()` |
| Class method (static) | `ClassName.methodName(args)` | `Math.random()` |
| Class method (within same class) | `methodName(args)` (optional class name) | `printWelcome()` |