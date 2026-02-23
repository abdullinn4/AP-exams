### 3.7: Class Variables and Methods

### What Are Class Variables?

**Class variables** (also called **static variables**) are variables that belong to the class itself, not to any individual instance (object) of the class. There is only **one copy** of a class variable, shared by all objects of that class.

**Real-World Analogy:** Think of a class variable like a bulletin board in a school. Every student (object) can see the same bulletin board and read its messages. If one student posts a new message, all students see it. The bulletin board belongs to the school (the class), not to any individual student.

#### Declaring Class Variables

Class variables are declared using the keyword `static` before the variable type.

```java
public class Student {
    private static int studentCount;  // class variable
    private String name;
    private int id;
    
    public Student(String n, int i) {
        name = n;
        id = i;
        studentCount++;  // Increment the shared count
    }
}
```

In this example, `studentCount` keeps track of how many `Student` objects have been created. Every time a new `Student` is constructed, `studentCount` increases by one. Because it's `static`, all instances share the same count.

#### Accessing Class Variables

- **Within the class:** You can access a class variable directly by its name (just like an instance variable).
- **Outside the class:** If the class variable is `public`, you access it using the class name and the dot operator.

```java
public class Student {
    public static int studentCount;  // public class variable
    
    public Student() {
        studentCount++;
    }
}

// In another class:
System.out.println(Student.studentCount);  // Access with class name
```

**Important:** You do **not** use an object reference to access a class variable (though Java allows it, it's confusing and considered poor style). Always use the class name.

### Class Variables vs. Instance Variables

| Feature | Instance Variable | Class Variable |
|---------|-------------------|----------------|
| **Declared with** | No `static` keyword | `static` keyword |
| **Number of copies** | One per object | One per class (shared) |
| **Belongs to** | Individual objects | The class itself |
| **Access within class** | Directly by name | Directly by name |
| **Access from outside** | `objectName.variableName` | `ClassName.variableName` |
| **Lifetime** | As long as the object exists | As long as the program runs |

### Common Uses for Class Variables

#### 1. Counting Instances

```java
public class BankAccount {
    private static int accountCount = 0;
    private String accountHolder;
    private double balance;
    
    public BankAccount(String holder, double initial) {
        accountHolder = holder;
        balance = initial;
        accountCount++;  // Each new account increments the count
    }
    
    public static int getAccountCount() {
        return accountCount;
    }
}
```

#### 2. Constants

The `final` keyword can be combined with `static` to create class constants—values that cannot be changed and are shared by all instances.

```java
public class MathConstants {
    public static final double PI = 3.14159;
    public static final double E = 2.71828;
}

// Usage anywhere:
double circumference = 2 * MathConstants.PI * radius;
```

The `final` keyword means the variable cannot be reassigned. By convention, constant names are written in ALL_CAPS with underscores.

#### 3. Shared Configuration

```java
public class Game {
    private static int difficultyLevel = 1;  // shared setting
    
    public static void setDifficulty(int level) {
        if (level >= 1 && level <= 5) {
            difficultyLevel = level;
        }
    }
    
    public static int getDifficulty() {
        return difficultyLevel;
    }
}
```

All game objects see the same difficulty level.

### What Are Class Methods?

**Class methods** (also called **static methods**) are methods that belong to the class itself, not to any individual instance. They are declared with the `static` keyword.

```java
public class MathHelper {
    public static int add(int a, int b) {
        return a + b;
    }
}

// Calling a class method:
int sum = MathHelper.add(5, 3);  // Use class name, not an object
```

#### Examples of Class Methods You Already Know

- `Math.random()`
- `Math.sqrt()`
- `Integer.parseInt()`
- `Double.parseDouble()`

All of these are called using the class name, not an object reference.

### Restrictions on Class Methods

Because class methods belong to the class and not to any specific object, they have important restrictions:

#### Restriction 1: Cannot Access Instance Variables

A class method **cannot access or change the values of instance variables** directly. Why? Because instance variables exist only in objects, and a class method can be called without any object existing.

```java
public class Student {
    private String name;           // instance variable
    private static int count;       // class variable
    
    public static void doSomething() {
        name = "Alice";  // ERROR! Cannot access instance variable
        count = 10;      // OK - can access class variable
    }
}
```

#### Restriction 2: Cannot Call Instance Methods Directly

Similarly, a class method cannot call an instance method directly, because instance methods operate on a specific object's data.

```java
public class Student {
    private String name;
    
    public void instanceMethod() {
        System.out.println(name);
    }
    
    public static void staticMethod() {
        instanceMethod();  // ERROR! Cannot call instance method directly
    }
}
```

#### Restriction 3: No `this` Reference

Class methods do not have a `this` reference. The `this` keyword refers to the current object, but a class method is not associated with any object.

### What Class Methods CAN Do

Class methods **can**:

1. **Access and change class variables** (static variables)
2. **Call other class methods** (static methods)
3. **Be passed an object reference** and then use that object to access instance variables or call instance methods

```java
public class Student {
    private String name;
    private static int count;
    
    public static void printStudentInfo(Student s) {
        // We can access s's instance variables because we have a reference
        System.out.println(s.name);  // OK - we have a specific Student object
        System.out.println("Total students: " + count);  // OK - class variable
    }
}
```

### When to Use Class Methods

Class methods are appropriate when:

- The method does not depend on any object's state (utility methods like `Math.sqrt`)
- The method needs to access only class variables
- You need a method that can be called before any objects are created (like `main`)
- You are providing utility functions that operate on parameters but don't need object state

### Putting It All Together: A Complete Example

```java
public class Employee {
    // Instance variables (each object has its own)
    private String name;
    private int id;
    private double salary;
    
    // Class variables (shared by all objects)
    private static int employeeCount = 0;
    private static double totalPayroll = 0.0;
    
    // Constants (class variables that cannot change)
    public static final double MINIMUM_WAGE = 15.50;
    
    // Constructor
    public Employee(String n, double startingSalary) {
        name = n;
        id = ++employeeCount;  // Assign unique ID and increment count
        salary = startingSalary;
        totalPayroll += startingSalary;
    }
    
    // Instance methods
    public String getName() {
        return name;
    }
    
    public void giveRaise(double amount) {
        salary += amount;
        totalPayroll += amount;  // Update shared payroll total
    }
    
    // Class methods
    public static int getEmployeeCount() {
        return employeeCount;  // OK - accessing class variable
    }
    
    public static double getAverageSalary() {
        if (employeeCount == 0) return 0.0;
        return totalPayroll / employeeCount;
    }
    
    public static void printEmployeeInfo(Employee e) {
        // Can access e's instance variables because we have a reference
        System.out.println("Name: " + e.name);
        System.out.println("ID: " + e.id);
        System.out.println("Salary: $" + e.salary);
    }
}

// Usage:
Employee e1 = new Employee("Alice", 50000);
Employee e2 = new Employee("Bob", 60000);

System.out.println(Employee.getEmployeeCount());      // 2
System.out.println(Employee.getAverageSalary());      // 55000.0
Employee.printEmployeeInfo(e1);                        // Prints Alice's info
System.out.println(Employee.MINIMUM_WAGE);             // 15.5
```

### Key Terminology for Topic 3.7

| Term | Definition |
|------|------------|
| **Class variable** | A variable declared with `static`, shared by all instances of a class |
| **Class method** | A method declared with `static`, belonging to the class, not to instances |
| **`static`** | Keyword indicating that a member belongs to the class, not to instances |
| **`final`** | Keyword indicating that a variable cannot be changed after initialization |
| **Constant** | A `static final` variable whose value never changes |
| **Instance variable** | A variable that belongs to each individual object (non‑static) |

### AP Exam Tips

- **Static context restrictions:** Remember that static methods cannot access instance variables or call instance methods directly. They can only access static members.
- **Access through objects:** While Java allows you to call static methods through object references (`obj.method()`), it's confusing and considered poor style. Always use the class name.
- **Constants:** `public static final` variables are common for defining constants. Know that `final` means the value cannot be changed.
- **Counting instances:** A common pattern is to use a static variable to count how many objects have been created.
- **Main method:** `public static void main(String[] args)` is a static method—this is why it runs before any objects are created.
- **Utility classes:** Classes like `Math` contain only static methods and are never instantiated.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Static methods can access instance variables." | No, static methods have no `this` reference and cannot access instance variables directly. |
| "Each object has its own copy of static variables." | No, there is only one copy shared by all objects. |
| "I can call static methods using an object." | Technically yes, but it's confusing and should be avoided. |
| "Static means the value cannot change." | No, `static` means shared; `final` means unchangeable. |
| "Class methods are useless because they can't access instance data." | They are essential for utility functions, factories, and operations that don't need object state. |
| "The `main` method is special because it's static." | It's static so it can be called without creating an object first. |

### Quick Reference: Static vs Instance

| | Static Member | Instance Member |
|---------------|---------------|-----------------|
| **Belongs to** | The class | Each object |
| **Declared with** | `static` | No `static` |
| **Access from static context** | Directly | Need object reference |
| **Access from instance context** | Directly or with class name | Directly or with `this` |
| **Common use** | Constants, counters, utilities | Object state and behavior 