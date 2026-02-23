
### 1.13: Object Creation and Storage (Instantiation)


### Creating Objects: The `new` Keyword

Objects in Java are created using the `new` keyword followed by a call to a constructor. This process is called **instantiation**.

**Syntax:**
```java
ClassName variableName = new ClassName(arguments);
```

**Example:**
```java
Scanner scanner = new Scanner(System.in);
String message = new String("Hello");
Student alice = new Student("Alice", 1001);
```

#### What Happens During Instantiation

When you create an object with `new`:

1. **Memory allocation** – Java allocates memory for the new object
2. **Constructor call** – The specified constructor runs to initialize the object
3. **Reference returned** – The memory address of the new object is returned
4. **Assignment** – The reference is stored in the variable (if provided)

```java
Student alice = new Student("Alice", 1001);
// 1. Memory allocated for a Student object
// 2. Student constructor runs with "Alice" and 1001
// 3. Reference (memory address) returned
// 4. Reference stored in alice variable
```


### What is a Constructor?

A **constructor** is a special method that is called when an object is created. Constructors:

- Have the **same name** as the class
- Have **no return type** (not even `void`)
- Are used to **initialize** the object's attributes
- Are called automatically when you use `new`

```java
public class Student {
    private String name;
    private int id;
    
    // Constructor
    public Student(String studentName, int studentId) {
        name = studentName;    // Initialize name attribute
        id = studentId;        // Initialize id attribute
    }
}
```


### Constructor Signatures

A **constructor signature** consists of:

1. The constructor's name (which is the same as the class name)
2. The ordered list of parameter types

Just like with methods, the signature uniquely identifies which constructor is being called.

#### Examples of Constructor Signatures

| Class | Constructor Header | Signature |
|-------|-------------------|-----------|
| `Student` | `public Student(String name, int id)` | `Student(String, int)` |
| `Student` | `public Student()` | `Student()` |
| `Scanner` | `public Scanner(InputStream source)` | `Scanner(InputStream)` |
| `String` | `public String(String original)` | `String(String)` |


### Constructor Overloading

Just like methods, constructors can be **overloaded**. This means a class can have multiple constructors with different signatures.

#### Why Overload Constructors?

Overloading constructors provides flexibility in how objects are created:

- Create an object with all attributes specified
- Create an object with default values
- Create an object by copying another object

#### Example of Overloaded Constructors

```java
public class Rectangle {
    private double width;
    private double height;
    
    // Constructor with both dimensions
    public Rectangle(double w, double h) {
        width = w;
        height = h;
    }
    
    // Constructor for a square (same width and height)
    public Rectangle(double side) {
        width = side;
        height = side;
    }
    
    // Default constructor (no parameters)
    public Rectangle() {
        width = 1.0;
        height = 1.0;
    }
}
```

#### Which Constructor Gets Called?

Java determines which constructor to call based on the **number and types of arguments** you provide.

```java
Rectangle r1 = new Rectangle(5.0, 3.0);  // Calls Rectangle(double, double)
Rectangle r2 = new Rectangle(4.0);        // Calls Rectangle(double)
Rectangle r3 = new Rectangle();            // Calls Rectangle()
```


### Constructor Parameters

Parameters in constructors work the same way as parameters in methods:

- They are declared in the constructor header
- They receive values when the constructor is called
- They can be used inside the constructor body to initialize the object

#### Using Parameters to Initialize Attributes

```java
public class Book {
    private String title;
    private String author;
    private int pages;
    
    public Book(String bookTitle, String bookAuthor, int pageCount) {
        title = bookTitle;      // Initialize with parameter value
        author = bookAuthor;    // Initialize with parameter value
        pages = pageCount;      // Initialize with parameter value
    }
}
```


### Call by Value in Constructors

Just like with methods, arguments passed to constructors use **call by value**. This means:

1. A **copy** of each argument's value is made
2. The constructor parameters are initialized with these copies
3. Changes to parameters inside the constructor do **not** affect the original arguments

#### Example with Primitive Parameters

```java
public class Test {
    private int value;
    
    public Test(int val) {
        val = val * 2;    // Changes the COPY, not the original
        value = val;      // value gets the doubled copy
    }
}

// Calling code:
int x = 10;
Test t = new Test(x);    // x is still 10
```

The original variable `x` remains unchanged because the constructor works with a copy.

*(Reference parameters behave differently—you'll learn about that in Unit 3.)*


### Constructor Execution Flow

When a constructor is called, the normal sequential execution is interrupted:

1. The statement creating the object is paused
2. Program control jumps to the constructor
3. The constructor's statements execute (in order)
4. When the constructor finishes, control returns to the point immediately after the `new` keyword
5. The object reference is returned and can be assigned to a variable

#### Visualizing Constructor Execution

```java
public class Demo {
    public static void main(String[] args) {
        System.out.println("Before");
        Student s = new Student("Alice", 1001);  // Constructor called
        System.out.println("After");
    }
}

public class Student {
    public Student(String name, int id) {
        System.out.println("In constructor");
        this.name = name;
        this.id = id;
        System.out.println("Constructor done");
    }
}
```

**Output:**
```
Before
In constructor
Constructor done
After
```

The constructor executes completely before the next line in `main` runs.


### Reference Variables and `null`

A variable of a reference type can hold either:

- An **object reference** (the memory address of an actual object)
- The special value **`null`** (meaning it refers to no object)

```java
Student s1 = new Student("Alice", 1001);  // s1 refers to a Student object
Student s2 = null;                         // s2 refers to nothing
```

#### Default Value for Reference Types

If you declare a reference variable without initializing it (as an instance variable), it gets the default value `null`. (Local variables must be initialized explicitly.)

```java
public class School {
    private Student president;  // Default value: null
    private String name;        // Default value: null
}
```

#### Why `null` Matters

Using a `null` reference to call a method or access a field causes a `NullPointerException` at runtime:

```java
Student s = null;
String name = s.getName();  // NullPointerException! Program crashes
```

Always ensure your reference variables refer to actual objects before using them.


### The Complete Object Creation Pattern

The standard pattern for creating and storing an object:

```java
ClassName variableName = new ClassName(arguments);
```

| Part | Purpose | Example |
|------|---------|---------|
| `ClassName` | Declares the type of the variable | `Student` |
| `variableName` | Name of the reference variable | `alice` |
| `=` | Assignment operator | `=` |
| `new` | Keyword to create a new object | `new` |
| `ClassName(arguments)` | Constructor call | `Student("Alice", 1001)` |

This single line does **three things**:
1. Declares a reference variable
2. Creates a new object
3. Assigns the object's reference to the variable


### Key Terminology for Topic 1.13

| Term | Definition |
|------|------------|
| **Instantiation** | The process of creating an object from a class |
| **`new` keyword** | Used to create a new object and call its constructor |
| **Constructor** | A special method that initializes a new object |
| **Constructor signature** | The constructor name (class name) and ordered list of parameter types |
| **Overloaded constructors** | Multiple constructors in the same class with different signatures |
| **Call by value** | Parameter passing where a copy of the argument is made |
| **`null`** | Special literal meaning "no object" |


### AP Exam Tips

**What you need to know for the exam:**

- **`new` keyword:** Always required to create objects (except strings with literals, which are a special case).

- **Constructor syntax:** Know how to identify a constructor (same name as class, no return type).

- **Constructor signatures:** Be able to match a constructor call to the correct constructor based on arguments.

- **Overloading recognition:** Given multiple constructors, determine which one is called for a given set of arguments.

- **Call by value:** Changes to primitive parameters inside constructors don't affect the original arguments.

- **`null` awareness:** Know that uninitialized reference variables (instance variables) default to `null`. Using `null` causes `NullPointerException`.

- **Default values:** Instance variables get default values (0, 0.0, false, null) if not explicitly initialized. Local variables do not.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Constructors have a return type of void." | No, constructors have no return type at all—not even void. |
| "I can call a constructor like any other method." | No, constructors are only called with `new`. |
| "If I don't write a constructor, the class has no constructor." | Java provides a default no-parameter constructor. |
| "`null` means the same as 0 or an empty string." | No, `null` means no object exists. 0 is an int, "" is a String object. |
| "Using `null` is safe—it just returns nothing." | No, using `null` to call a method crashes the program. |
| "Constructor overloading is just like method overloading." | Yes, same concept! (This one is actually correct.) |
| "Parameters and arguments are the same thing." | Parameters are placeholders; arguments are actual values passed. |


### Quick Reference: Object Creation Patterns

| Pattern | Example | When to Use |
|---------|---------|-------------|
| Default constructor | `Student s = new Student();` | When default values are acceptable |
| Parameterized constructor | `Student s = new Student("Alice", 1001);` | When providing specific initial values |
| Multiple overloads | Multiple constructor options | When different creation scenarios exist |
