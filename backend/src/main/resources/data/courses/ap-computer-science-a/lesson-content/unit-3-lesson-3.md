### Anatomy of a Class

### The Structure of a Class

A class is the blueprint for creating objects. Every class has a specific structure that defines its data (attributes) and behaviors (methods). Understanding this anatomy is essential for designing and implementing your own classes.

**Real-World Analogy:** Think of a class like a blueprint for a house. The blueprint specifies:
- What materials will be used (attributes)
- Where the doors and windows go (structure)
- How the house will function (behaviors)

Different houses built from the same blueprint are different objects, but they all share the same basic structure.

### Class Header

Every class begins with a **class header** that defines its name and access level.

```java
public class ClassName {
    // class body
}
```

- `public` – This access modifier means the class can be used by any other class. For the AP exam, **classes are always designated public**.
- `class` – The keyword that declares you are defining a class.
- `ClassName` – The name of the class (should start with a capital letter by convention).

### Instance Variables

**Instance variables** (also called fields or attributes) store the data for each object. They are defined **outside any method or constructor** but inside the class.

```java
public class Student {
    private String name;      // instance variable
    private int id;           // instance variable
    private double gpa;       // instance variable
}
```

#### Key Characteristics of Instance Variables

- Each object has its **own copy** of instance variables
- They define the **state** of an object
- They exist as long as the object exists
- They are typically declared as `private` to achieve encapsulation

### Class Variables (Static Variables)

**Class variables** (also called static variables) are shared by all instances of a class. They are declared with the `static` keyword.

```java
public class Student {
    private static int studentCount;  // class variable
    private String name;
    private int id;
}
```

- Only **one copy** exists, regardless of how many objects are created
- All objects share the same class variable
- If one object changes it, all objects see the change
- Useful for counting instances, constants, or shared data

### Constructors

**Constructors** are special methods used to initialize new objects. They have the same name as the class and **no return type** (not even `void`).

```java
public class Student {
    private String name;
    private int id;
    
    public Student(String studentName, int studentId) {  // constructor
        name = studentName;
        id = studentId;
    }
}
```

- Constructors are called automatically when you use the `new` keyword
- They set the initial state of an object
- For the AP exam, **constructors are always designated public**

### Methods

**Methods** define the behaviors of a class—what objects can do. They can be `public` (accessible by other classes) or `private` (only accessible within this class).

```java
public class Student {
    private String name;
    private int id;
    private double gpa;
    
    // public method - can be called from outside the class
    public String getName() {
        return name;
    }
    
    // private method - only usable within this class
    private void calculateGPA() {
        // implementation
    }
}
```

### Data Encapsulation

**Data encapsulation** is a technique in which the implementation details of a class are kept hidden from external classes. This is one of the fundamental principles of object-oriented programming.

#### Why Encapsulation Matters

- **Protects data integrity:** External code cannot directly modify an object's internal data in ways that would leave it in an inconsistent state
- **Reduces complexity:** Users of the class don't need to understand its internal workings
- **Increases flexibility:** You can change the internal implementation without affecting code that uses the class
- **Promotes modularity:** Each class is a self-contained unit

#### Achieving Encapsulation with Access Modifiers

Java provides access modifiers to control what parts of a class are visible to other classes:

| Modifier | Access Level | Effect |
|----------|--------------|--------|
| `public` | Accessible from any class | The member is part of the class's interface |
| `private` | Accessible only within the same class | The member is hidden from external classes |

#### The Principle of Encapsulation

**Instance variables should be private.** This is a key rule for the AP exam. By making instance variables `private`, you prevent external code from directly accessing them. Instead, you provide `public` methods (getters and setters) to access or modify the data in a controlled way.

```java
public class BankAccount {
    private double balance;  // private instance variable
    
    public double getBalance() {     // public getter
        return balance;
    }
    
    public void deposit(double amount) {  // public method to modify
        if (amount > 0) {
            balance += amount;
        }
    }
}
```

#### Access for Methods

- **Public methods** can be accessed from anywhere—they form the class's interface
- **Private methods** can only be called from within the class—they are helper methods for internal use

### Putting It All Together: A Complete Class

```java
public class BankAccount {           // public class
    
    // private instance variables (encapsulation)
    private String accountHolder;
    private double balance;
    private static int accountCount;  // class variable
    
    // public constructor
    public BankAccount(String holder, double initialBalance) {
        accountHolder = holder;
        balance = initialBalance;
        accountCount++;               // increment class variable
    }
    
    // public methods - the interface
    public double getBalance() {
        return balance;
    }
    
    public String getAccountHolder() {
        return accountHolder;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
    
    // private helper method
    private void logTransaction(String type, double amount) {
        System.out.println(type + ": $" + amount);
    }
    
    // public class method
    public static int getAccountCount() {
        return accountCount;
    }
}
```

### Visualizing Class Structure

```
+----------------------------------+
|           BankAccount            |  ← Class name (public)
+----------------------------------+
| - accountHolder: String          |  ← Private instance variables
| - balance: double                |
| - accountCount: int (static)     |  ← Private class variable
+----------------------------------+
| + BankAccount(holder, initial)   |  ← Public constructor
| + getBalance(): double            |  ← Public instance methods
| + getAccountHolder(): String      |
| + deposit(amount): void           |
| + withdraw(amount): void          |
| - logTransaction(type, amount): void | ← Private helper method
| + getAccountCount(): int (static) |  ← Public class method
+----------------------------------+
```

### Key Terminology for Topic 3.3

| Term | Definition |
|------|------------|
| **Class header** | The first line of a class definition, including access modifier and class name |
| **Instance variable** | A variable defined in a class, outside any method, with a separate copy for each object |
| **Class variable** | A variable declared with `static`, shared by all instances of a class |
| **Constructor** | A special method with the same name as the class, used to initialize objects |
| **Method** | A block of code that defines a behavior of a class |
| **Data encapsulation** | Hiding implementation details by making instance variables private |
| **Access modifier** | Keywords (`public`, `private`) that control visibility of class members |
| **`public`** | Access modifier allowing access from any class |
| **`private`** | Access modifier restricting access to the declaring class only |

### AP Exam Tips

- **Class header format:** For the AP exam, classes are always `public`. You won't see (or need) other access modifiers for classes.
- **Instance variables should be `private`:** This is a fundamental rule of encapsulation. Exam questions will test whether you know to make instance variables private.
- **Constructors are `public`:** You'll never see a private constructor on the AP exam.
- **Accessor methods:** To provide controlled access to private data, you write public methods (getters and setters).
- **Static vs instance:** Know the difference. Static members belong to the class; instance members belong to objects.
- **Encapsulation benefits:** Be prepared to explain why encapsulation is a good practice.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "All variables in a class should be public." | No, instance variables should be private for encapsulation. |
| "Static variables are the same as instance variables." | No, static variables are shared; instance variables are per object. |
| "Constructors have a return type of void." | No, constructors have no return type at all. |
| "Private methods are useless." | Private methods are essential for internal helper functions. |
| "Encapsulation just means using private." | Encapsulation is the principle; private is how we achieve it. |
| "A class without any methods is useless." | Even a class with only data can be useful as a data holder. |