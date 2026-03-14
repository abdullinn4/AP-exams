### Constructors

### What is a Constructor?

A **constructor** is a special method that is automatically called when an object is created using the `new` keyword. Its primary purpose is to initialize the newly created object—to set its initial state by assigning values to its instance variables.

**Real-World Analogy:** Think of a constructor like the process of building a house from a blueprint. When you start building, you pour the foundation, frame the walls, and install the basic systems. That initial setup is the constructor's job. Different blueprints (constructors) might create houses with different initial features.

#### Key Characteristics of Constructors

- The constructor's name **must exactly match** the class name
- Constructors **have no return type**—not even `void`
- They are called automatically when you use `new`
- They can take parameters to initialize the object with specific values
- A class can have multiple constructors (overloading)

```java
public class Student {
    private String name;
    private int id;
    
    // Constructor - same name as class, no return type
    public Student(String studentName, int studentId) {
        name = studentName;
        id = studentId;
    }
}
```

### Object State and Instance Variables

An object's **state** refers to its attributes and their values at a given time. This state is defined by the instance variables belonging to the object. This creates a **has-a relationship** between the object and its instance variables—the object *has* a name, *has* an ID, etc.

```java
public class Student {
    private String name;   // Student HAS-A name
    private int id;        // Student HAS-AN id
    private double gpa;    // Student HAS-A gpa
}
```

When a constructor is called, three things happen:
1. **Memory is allocated** for the new object
2. The constructor executes, initializing the instance variables
3. The **object reference** (memory address) is returned

### Constructor Signatures

Like methods, constructors have **signatures** that consist of the constructor name (which is the class name) and the ordered list of parameter types. The signature uniquely identifies which constructor is being called.

```java
public class Rectangle {
    private double width;
    private double height;
    
    // Signature: Rectangle(double, double)
    public Rectangle(double w, double h) {
        width = w;
        height = h;
    }
    
    // Signature: Rectangle(double) 
    public Rectangle(double side) {
        width = side;
        height = side;
    }
    
    // Signature: Rectangle()
    public Rectangle() {
        width = 1.0;
        height = 1.0;
    }
}
```

### Constructor Overloading

**Constructor overloading** means a class has multiple constructors with different signatures. This provides flexibility in how objects are created—you can create an object with all attributes specified, with default values, or by copying another object.

#### Why Overload Constructors?

- **Convenience:** Users can create objects in the way that best suits their needs
- **Default values:** Provide sensible defaults when not all information is available
- **Copy construction:** Create a new object that is a copy of an existing one (though not required for AP)

#### Example: Overloaded Constructors

```java
public class Book {
    private String title;
    private String author;
    private int pages;
    
    // Constructor with all fields
    public Book(String t, String a, int p) {
        title = t;
        author = a;
        pages = p;
    }
    
    // Constructor with only title and author (pages default to 0)
    public Book(String t, String a) {
        title = t;
        author = a;
        pages = 0;  // or could omit, default value would be 0
    }
    
    // Default constructor (no parameters)
    public Book() {
        title = "Unknown";
        author = "Unknown";
        pages = 0;
    }
}
```

Java determines which constructor to call based on the **number and types of arguments** provided when `new` is used.

### The Default Constructor

If you do not write **any** constructor in a class, Java automatically provides a **no-parameter constructor** called the **default constructor**. This constructor:
- Takes no parameters
- Sets instance variables to their **default values** (0, 0.0, false, null)
- Does not execute any custom initialization code

```java
public class Student {
    private String name;
    private int id;
    private double gpa;
    
    // No constructor written - Java provides: public Student() { }
}

// Usage:
Student s = new Student();  // Calls the default constructor
// s.name is null, s.id is 0, s.gpa is 0.0
```

#### Default Values for Instance Variables

| Data Type | Default Value |
|-----------|---------------|
| `int` | `0` |
| `double` | `0.0` |
| `boolean` | `false` |
| Reference type (e.g., `String`, arrays, objects) | `null` |

**Important:** Local variables (declared inside methods) do **not** get default values. They must be explicitly initialized before use. Instance variables, however, are automatically set to default values if not initialized in the constructor or declaration.

### If You Write Any Constructor, the Default Disappears

Once you provide **any** constructor (with or without parameters), Java no longer supplies the default no-parameter constructor. If you still want a no-parameter constructor, you must write it explicitly.

```java
public class Student {
    private String name;
    private int id;
    
    // Only this constructor exists
    public Student(String n, int i) {
        name = n;
        id = i;
    }
}

// This will NOT compile:
Student s = new Student();  // ERROR: no default constructor
```

### Using Parameters to Initialize Instance Variables

Constructor parameters allow you to pass values from outside to set the initial state of an object.

```java
public class BankAccount {
    private String accountHolder;
    private double balance;
    
    public BankAccount(String holder, double initialDeposit) {
        accountHolder = holder;
        balance = initialDeposit;
    }
}
```

When you call `new BankAccount("Alice", 500.0)`, the parameter `holder` receives the value `"Alice"`, and `initialDeposit` receives `500.0`. These values are then assigned to the instance variables.

### Call by Value in Constructors

Just like with methods, arguments passed to constructors use **call by value**. This means a **copy** of each argument's value is made and stored in the constructor's parameters. Changes to the parameters inside the constructor do **not** affect the original arguments.

```java
public class Test {
    private int value;
    
    public Test(int x) {
        x = x * 2;    // changes the COPY (x), not the original
        value = x;    // value gets the doubled copy
    }
}

// Usage:
int num = 10;
Test t = new Test(num);
System.out.println(num);  // Still prints 10 (original unchanged)
```

For primitive types, this is straightforward—the original variable is safe from modification.

### Mutable Objects as Constructor Parameters

When a parameter is a **mutable object** (an object whose state can be changed, like arrays or most custom objects), special care is needed. If you simply assign the parameter to an instance variable, the object becomes shared, and changes made outside the class can affect the object's state unexpectedly.

#### The Problem: Shared References

```java
public class Person {
    private int[] scores;
    
    public Person(int[] initialScores) {
        scores = initialScores;  // Now scores and initialScores refer to the SAME array
    }
    
    public void displayScores() {
        for (int s : scores) System.out.print(s + " ");
    }
}

// Usage:
int[] myScores = {85, 90, 78};
Person p = new Person(myScores);
myScores[0] = 100;  // Changing the original array ALSO changes p's scores!
p.displayScores();  // Output: 100 90 78  (unexpected!)
```

This violates encapsulation—external code can modify the object's internal data.

#### The Solution: Defensive Copying

To preserve encapsulation, you should create a **copy** of the mutable object and store the copy, not the original reference. This ensures that changes to the original do not affect the object's state.

```java
public class Person {
    private int[] scores;
    
    public Person(int[] initialScores) {
        // Create a new array and copy elements
        scores = new int[initialScores.length];
        for (int i = 0; i < initialScores.length; i++) {
            scores[i] = initialScores[i];
        }
        // Alternatively: Arrays.copyOf(initialScores, initialScores.length);
    }
    
    public void displayScores() {
        for (int s : scores) System.out.print(s + " ");
    }
}

// Usage:
int[] myScores = {85, 90, 78};
Person p = new Person(myScores);
myScores[0] = 100;          // Changes the original only
p.displayScores();          // Still prints 85 90 78 (safe!)
```

**Rule:** When a mutable object is passed to a constructor, initialize the instance variable with a **copy** of the referenced object to prevent external modification.

### Constructor Execution Flow

When a constructor is called, the normal sequential execution is interrupted:

1. The statement creating the object (with `new`) is paused
2. Memory is allocated for the new object
3. The constructor's code executes, initializing instance variables
4. After the constructor finishes, control returns to the point after the `new` keyword
5. The object reference is returned and can be assigned to a variable

```java
public class Demo {
    public static void main(String[] args) {
        System.out.println("Before");
        Student s = new Student("Alice", 1001);  // constructor called
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

### Key Terminology for Topic 3.4

| Term | Definition |
|------|------------|
| **Constructor** | A special method that initializes a new object; has the same name as the class and no return type |
| **Object state** | The values of an object's instance variables at a given time |
| **Instance variable** | A variable defined in a class, outside any method, that holds the state of an object |
| **Has-a relationship** | The relationship between an object and its instance variables (e.g., a Student has a name) |
| **Constructor signature** | The constructor name (class name) and ordered list of parameter types |
| **Constructor overloading** | Providing multiple constructors with different signatures in the same class |
| **Default constructor** | The no-parameter constructor automatically provided by Java if no constructors are defined |
| **Default value** | The initial value given to an instance variable if not explicitly set (0, 0.0, false, null) |
| **Call by value** | Parameter passing where a copy of the argument's value is made |
| **Defensive copying** | Creating a copy of a mutable object parameter to preserve encapsulation |

### AP Exam Tips

- **Constructor recognition:** A constructor has the same name as the class and no return type. This distinguishes it from regular methods.
- **Default constructor:** If you write any constructor, the default no-parameter constructor is **not** provided. Be careful when calling `new ClassName()`.
- **Default values:** Instance variables have default values (0, 0.0, false, null). Local variables do not—they must be initialized.
- **Overloading:** Know how to determine which constructor is called based on the arguments passed.
- **Defensive copying:** For mutable objects (arrays, ArrayList, etc.), you should make a copy to prevent external modification. This is a common free‑response point.
- **Call by value:** Changes to primitive parameters inside a constructor do not affect the original arguments.
- **Constructor chaining:** Not required for AP, but you may see `this()` used to call another constructor—this is allowed but not tested.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Constructors have a return type of void." | No, constructors have no return type at all. |
| "If I don't write a constructor, the class has no constructor." | Java provides a default no-parameter constructor. |
| "Default values apply to all variables." | No, only instance variables (and class variables) get default values. Local variables do not. |
| "Assigning a mutable object parameter directly is safe." | No, it creates shared references; defensive copying is needed. |
| "Constructor overloading is just like method overloading." | Yes, the same concept applies. |
| "The default constructor sets instance variables to null or zero even if I write a constructor." | No, the default constructor only exists if you write none. |

### Quick Reference: Constructor Rules

| Rule | Explanation |
|------|-------------|
| Name | Must exactly match the class name |
| Return type | None (not even void) |
| Invocation | Called automatically with `new` |
| Default constructor | Provided only if no constructors are written |
| Default values | Instance variables get 0, 0.0, false, null |
| Overloading | Multiple constructors with different signatures |
| Mutable parameters | Should be copied to preserve encapsulation |