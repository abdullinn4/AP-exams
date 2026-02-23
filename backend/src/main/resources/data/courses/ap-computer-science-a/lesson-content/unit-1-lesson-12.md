
### 1.12: Objects: Instances of Classes


### What is an Object?

An **object** is a specific instance of a class. It has its own set of attributes (data) and can perform behaviors (methods) as defined by its class.

**Analogy:** If a class is a blueprint for a house, an object is the actual house built from that blueprint.

| Class (Blueprint) | Object (Instance) |
|-------------------|-------------------|
| Defines what a house should have | An actual house you can live in |
| Specifies rooms, doors, windows | Has specific room dimensions, door colors |
| Written once | Can be created many times |
| Exists in code | Exists in memory at runtime |

Every object you create is a unique instance with its own memory space and its own copy of the instance variables.



### Class: The Blueprint

A **class** is the formal implementation, or blueprint, of the attributes and behaviors of an object. It defines:

- What **attributes** (data) objects of this class will have
- What **behaviors** (methods) objects of this class can perform
- How objects of this class are created (constructors)

```java
public class Student {
    // Attributes (instance variables)
    private String name;
    private int id;
    private double gpa;
    
    // Constructor
    public Student(String studentName, int studentId) {
        name = studentName;
        id = studentId;
        gpa = 0.0;
    }
    
    // Behaviors (methods)
    public void setGPA(double newGPA) {
        gpa = newGPA;
    }
    
    public String getName() {
        return name;
    }
}
```

The class itself is just a description. No memory is allocated for a class until you create an object from it.



### Object: The Instance

An **object** is a specific instance of a class with defined attributes. When you create an object:

1. Memory is allocated to store its attributes
2. The constructor runs to initialize the object
3. You get a reference (memory address) you can use to access the object

```java
Student alice = new Student("Alice", 1001);
Student bob = new Student("Bob", 1002);
```

Now `alice` and `bob` are two distinct objects. Each has its own:
- `name` ("Alice" for alice, "Bob" for bob)
- `id` (1001 for alice, 1002 for bob)
- `gpa` (both start at 0.0)



### Reference Variables

A variable of a reference type holds an **object reference**, which can be thought of as the memory address of that object. It does **not** hold the object itself.

```java
Student alice = new Student("Alice", 1001);
```

What really happens:
1. `new Student("Alice", 1001)` creates a Student object somewhere in memory
2. That object has a memory address, say `0x1A3F`
3. The variable `alice` stores that address: `0x1A3F`
4. We say `alice` **refers to** the Student object

```
Memory:
┌─────────────────┐
│   alice         │
│   ┌─────────┐   │
│   │ 0x1A3F  │   │  ← alice stores the address
│   └─────────┘   │
└─────────────────┘
         ↓
    ┌────────────────────┐
    │ Student object      │
    │ at address 0x1A3F   │
    │ name: "Alice"       │
    │ id: 1001            │
    │ gpa: 0.0            │
    └────────────────────┘
```

This is different from primitive variables, which store the actual value directly.



### Primitive vs Reference Variables

| | Primitive Variable | Reference Variable |
|---|--------------------|--------------------|
| **Stores** | The actual value | A memory address (reference) |
| **Example** | `int x = 5;` | `Student s = new Student();` |
| **Memory** | 4-8 bytes (value) | 4-8 bytes (address) + object memory |
| **Default** | Must be initialized | Can be `null` |

```java
int x = 5;              // x holds 5 directly
Student s = new Student(); // s holds an address, object exists elsewhere
```



### The `Object` Class: The Ultimate Superclass

In Java, every class is a subclass of the `Object` class. This is automatic—you don't need to do anything special.

**Key implication:** All objects inherit certain methods from the `Object` class, including:

- `toString()` – Returns a string representation of the object
- `equals(Object other)` – Compares objects for equality

```java
Student alice = new Student("Alice", 1001);
System.out.println(alice.toString());  // Calls inherited toString method
```

Even classes you write yourself automatically extend `Object`. This is why every object has a `toString` method, even if you didn't write one.



### Class Hierarchy and Inheritance

A **class hierarchy** organizes classes in a tree structure, with more general classes at the top and more specific classes below.

```
        Object (superclass of everything)
           ↑
    ┌──────┴──────┐
    │             │
 Student      Employee
    ↑             ↑
    │             │
GradStudent   Manager
```

#### Superclass and Subclass

- A **superclass** (also called parent class) contains common attributes and behaviors shared by multiple classes
- A **subclass** (also called child class) extends a superclass, inheriting its attributes and behaviors while adding its own

**Example:** A `Vehicle` class might be a superclass with attributes like `speed` and `color`. `Car` and `Motorcycle` could be subclasses that inherit those attributes and add their own specific features.

#### Inheritance Relationship

When a class extends another, it creates an **inheritance relationship**:

```java
public class Vehicle {
    // common vehicle attributes and methods
}

public class Car extends Vehicle {
    // Car-specific attributes and methods
}
```

The subclass can:
- Use inherited methods as if they were its own
- Override inherited methods to provide specific behavior
- Add new methods and attributes

#### Important AP Exam Note

**The College Board explicitly states:** "Designing and implementing inheritance relationships are outside the scope of the AP Computer Science A course and exam."

This means:
- You need to **understand** the concept of inheritance (that subclasses exist and inherit from superclasses)
- You need to **know** that all classes inherit from `Object`
- You will **NOT** be asked to write code that uses `extends` or implements inheritance
- You will **NOT** be tested on overriding methods (except `toString` is mentioned, but writing it is excluded)



### Why This Matters: The `toString` Method

Because every class inherits from `Object`, every object has a `toString` method. When you concatenate an object with a string using `+`, Java automatically calls the object's `toString` method.

```java
Student alice = new Student("Alice", 1001);
System.out.println("Student: " + alice);  // Automatically calls alice.toString()
```

If the class doesn't provide its own `toString` version, the inherited `Object` version runs—which typically prints something like `Student@1a2b3c4` (class name and memory address).

**Note:** While overriding `toString` is mentioned in the CED, actually writing an override is **outside the scope**. You just need to know that `toString` exists and is called automatically in concatenation.



### Key Terminology for Topic 1.12

| Term | Definition |
|------|------------|
| **Object** | A specific instance of a class with defined attributes |
| **Class** | The formal implementation (blueprint) of the attributes and behaviors of an object |
| **Reference** | A memory address that points to an object |
| **Reference variable** | A variable that holds a reference to an object |
| **Class hierarchy** | An organization of classes where more general classes are above more specific ones |
| **Superclass** | A class that is extended by another class (parent class) |
| **Subclass** | A class that extends another class (child class) |
| **Inheritance** | A relationship where a subclass inherits attributes and behaviors from a superclass |
| **`Object` class** | The ultimate superclass of all Java classes |



### AP Exam Tips

**What you need to know for the exam:**

- **Class vs object distinction:** Be able to identify which is the blueprint and which is the instance.

- **Reference variables:** Understand that they store addresses, not the objects themselves. This becomes critical when comparing with `==` vs `equals()`.

- **`Object` class:** Know that every class is a subclass of `Object`. This is why `toString` and `equals` exist for all objects.

- **Inheritance concept:** You need to understand what inheritance means, but you won't be asked to implement it.

- **Exclusion reminder:** "Designing and implementing inheritance relationships are outside the scope." Don't study how to write `extends`.

- **`toString` awareness:** Know that concatenating an object with a string calls its `toString` method.



### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "A class and an object are the same thing." | Class = blueprint. Object = instance built from that blueprint. |
| "A reference variable holds the object." | No, it holds the address where the object is stored. |
| "I need to import the Object class." | No, `Object` is in `java.lang` and automatically available. |
| "Only some classes inherit from Object." | Every class in Java inherits from Object, directly or indirectly. |
| "I need to know how to write inheritance code." | Not for AP CSA—it's explicitly excluded. |
| "Primitive variables and reference variables work the same way." | No, primitives store values; references store addresses. |



### Visual Summary

```
┌─────────────────────────────────────────────────┐
│                    Object                        │
│  (superclass of everything, provides toString,   │
│                 equals, etc.)                    │
└─────────────────────┬───────────────────────────┘
                      ↑
                extends (automatically)
                      ↑
┌─────────────────────────────────────────────────┐
│                  Your Class                       │
│  (blueprint defining attributes and behaviors)    │
└─────────────────────┬───────────────────────────┘
                      ↑
                    new
                      ↑
┌─────────────────────────────────────────────────┐
│                 Your Object                       │
│  (actual instance in memory with its own data)    │
└─────────────────────────────────────────────────┘
```

