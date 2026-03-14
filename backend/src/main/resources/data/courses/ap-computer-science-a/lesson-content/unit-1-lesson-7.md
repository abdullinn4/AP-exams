
### Application Program Interface (API) and Libraries


### What is a Library?

A **library** is a collection of pre-written code that programmers can use to avoid "reinventing the wheel." Instead of writing everything from scratch, you can leverage code that others have already written, tested, and debugged.

**Real-world analogy:** Think of a library as a toolbox. You don't need to build a hammer from scratch every time you want to drive a nail—you just take one from the toolbox.

In Java, libraries are organized into **packages**—groups of related classes.



### What is an API?

**API** stands for **Application Program Interface**. An API is the documentation that tells programmers how to use a library.

The API specification tells you:
- What classes are available
- What methods those classes have
- What parameters each method expects
- What each method returns
- What the method does

**Think of it this way:**
- The **library** is the actual code (the tools in the toolbox)
- The **API** is the instruction manual (how to use the tools)

You don't need to know how the code inside a library was written. You just need to know what it does and how to call it. This is the essence of **abstraction**.



### Why APIs Matter

APIs are essential because they allow programmers to work at a higher level of abstraction. You can focus on solving your specific problem rather than implementing basic functionality.

**Example:** When you use `System.out.println()`, you're using Java's API. You don't need to know how `println` actually displays text on the screen. You just need to know that it works and how to call it correctly.



### Reading API Documentation

API documentation typically includes:

| Section | What It Tells You |
|---------|-------------------|
| **Class Name** | What the class is called |
| **Package** | Where to find the class (needed for `import` statements) |
| **Constructors** | How to create objects of this class |
| **Methods** | What the class can do (behaviors) |
| **Return Type** | What type of value a method returns |
| **Parameters** | What information a method needs to do its job |
| **Description** | What the method actually does |

#### Example: Scanner Class API

Here's what you might see in the API documentation for the Scanner class:

```
Class: Scanner
Package: java.util

Constructor:
    Scanner(InputStream source)
        Creates a Scanner that reads from the specified input stream.

Methods:
    int nextInt()
        Scans the next token as an int.
    
    double nextDouble()
        Scans the next token as a double.
    
    String nextLine()
        Advances this scanner past the current line and returns the input that was skipped.
    
    boolean hasNextInt()
        Returns true if the next token can be interpreted as an int.
```

This tells you everything you need to know to use the Scanner class correctly.



### Classes: Blueprints for Objects

A **class** defines a specific reference type. It serves as a blueprint for creating objects.

Every class has two fundamental components:

| Component | What It Is | Also Called |
|-----------|------------|-------------|
| **Attributes** | The data related to the class | Fields, instance variables |
| **Behaviors** | What instances of the class can do | Methods |

#### Attributes (Data)

Attributes are the characteristics or properties that objects of the class will have. They are stored in variables.

**Example:** A `Student` class might have attributes:
- `name` (String)
- `id` (int)
- `gpa` (double)

#### Behaviors (Methods)

Behaviors are the actions that objects of the class can perform. They are defined by methods.

**Example:** A `Student` class might have behaviors:
- `calculateGPA()` – computes and returns the student's GPA
- `enrollInCourse(String course)` – enrolls the student in a course
- `getStudentInfo()` – returns a string with student details



### The Relationship: Class vs Object

| Class | Object |
|-------|--------|
| Blueprint | Actual thing built from the blueprint |
| Defines what attributes and behaviors exist | Has specific values for those attributes |
| Exists in code | Exists in memory at runtime |
| Written once | Can be created many times |

**Analogy:** A cookie cutter is a **class**. It defines the shape. The actual cookies you cut out are **objects**. Each cookie has the same shape (attributes) but might have different decorations (specific attribute values).



### Packages: Organizing Classes

Classes in Java APIs and libraries are grouped into **packages**. A package is like a folder on your computer—it keeps related classes together.

| Package | Contains |
|---------|----------|
| `java.lang` | Core Java classes (automatically available—no import needed) |
| `java.util` | Utility classes like `Scanner`, `ArrayList` |
| `java.io` | Input/output classes for reading/writing files |

#### The `java.lang` Package

The `java.lang` package is special. It contains fundamental classes like `String`, `Math`, `Integer`, and `Double`. These classes are so fundamental that Java makes them automatically available—you don't need to write an `import` statement.

```java
// No import needed for these:
String name = "Alice";
double random = Math.random();
```

#### Other Packages Require `import`

For classes in other packages, you must import them:

```java
import java.util.Scanner;    // Must import Scanner
import java.util.ArrayList;  // Must import ArrayList
```



### Using Existing Classes

One of the most powerful aspects of programming is **code reuse**. Instead of writing everything yourself, you can use existing classes from the Java API.

#### Steps to Use a Class from the API:

1. **Know what class you need** (from the problem or research)
2. **Import the class** (unless it's in `java.lang`)
3. **Create an object** (using `new` and a constructor)
4. **Call methods** on that object

**Example: Using the Scanner class**

```java
import java.util.Scanner;           // Step 2: Import

public class Example {
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);  // Step 3: Create object
        int age = keyboard.nextInt();                // Step 4: Call method
        System.out.println("Age: " + age);
        keyboard.close();
    }
}
```



### Why This Matters: Procedural Abstraction

When you use a method from an API, you're benefiting from **procedural abstraction**. You can use the method by knowing **what** it does without knowing **how** it does it.

**Example:** The `Math.sqrt()` method calculates square roots. You don't need to understand the algorithm used to compute square roots. You just need to know:
- It's in the `Math` class
- It takes a `double` parameter
- It returns a `double`
- It returns the nonnegative square root

```java
double result = Math.sqrt(16.0);   // result = 4.0
```

This abstraction lets you build complex programs without getting bogged down in implementation details.



### Key Terminology for Topic 1.7

| Term | Definition |
|------|------------|
| **Library** | A collection of pre-written classes that programmers can use |
| **API (Application Program Interface)** | Documentation that specifies how to use a library |
| **Package** | A group of related classes in a library |
| **Class** | A blueprint that defines a reference type (attributes and behaviors) |
| **Attribute** | Data related to a class, stored in variables |
| **Behavior** | What instances of a class can do, defined by methods |
| **`java.lang`** | Core Java package that is automatically imported |
| **Code reuse** | Using existing code instead of writing everything from scratch |
| **Procedural abstraction** | Using a method by knowing what it does, not how it does it |



### AP Exam Tips

**What you need to know for the exam:**

- **API documentation interpretation:** You may be shown a partial API and asked what a method does, what parameters it takes, or what it returns.

- **Classes define types:** A class defines a reference type. This concept will be used throughout the course.

- **Attributes vs behaviors:** Be able to identify which are attributes (data) and which are behaviors (methods) from a description.

- **`java.lang` is special:** Classes in `java.lang` (like `String` and `Math`) are available without import. All others need an explicit `import`.

- **Packages matter:** You'll need to know which package a class belongs to for proper import statements.

- **No implementation required:** You never need to know how API methods are implemented—only what they do and how to call them.



### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "API and library are the same thing." | Library = the code. API = the documentation for using it. |
| "I need to know how API methods work internally." | No, abstraction means you only need to know what they do. |
| "All classes need an import statement." | Classes in `java.lang` are automatically available. |
| "A class is the same as an object." | Class = blueprint. Object = actual instance built from that blueprint. |
| "Attributes and behaviors are unrelated." | They work together—behaviors often use or modify attributes. |
| "I can't use a class unless I wrote it myself." | That's exactly why APIs exist—so you can use classes others wrote. |



### Quick Reference: Common Java Packages

| Package | Purpose | Examples |
|---------|---------|----------|
| `java.lang` | Core language features (auto-imported) | `String`, `Math`, `Integer`, `Double` |
| `java.util` | Utility classes | `Scanner`, `ArrayList`, `Random` |
| `java.io` | Input/output | `File`, `PrintWriter` |
