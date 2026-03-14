### Methods: Passing and Returning References of an Object

### Passing Object References as Parameters

When an argument passed to a method is an **object reference** (rather than a primitive value), Java still uses **call by value**—but the value being copied is the **reference** (memory address), not the object itself. This distinction is critical for understanding how methods can modify objects.

**Real-World Analogy:** Think of a reference like a home address. If you give someone a copy of your address (call by value), they now have the same address and can find your house. They don't have a copy of your house—they have a way to locate it. Any changes they make at that address (painting the door, planting flowers) will be visible to you because it's the same physical house.

#### What Gets Passed?

- **Primitive types:** The actual value is copied. The method works with its own copy; changes do not affect the original.
- **Object references:** The reference (memory address) is copied. The method now has its own copy of the address, but it points to the same object. Through that reference, the method can access and modify the object's state.

```java
public class Person {
    private String name;
    
    public Person(String n) { name = n; }
    public void setName(String n) { name = n; }
    public String getName() { return name; }
}

public class Test {
    public static void changeName(Person p) {
        p.setName("New Name");  // Modifies the object that p refers to
    }
    
    public static void main(String[] args) {
        Person alice = new Person("Alice");
        System.out.println(alice.getName());  // Alice
        
        changeName(alice);
        System.out.println(alice.getName());  // New Name (object was modified!)
    }
}
```

**What happened?** The reference to the `Person` object was copied to the parameter `p`. Both `alice` (in main) and `p` (in `changeName`) point to the **same object**. When `p.setName()` is called, it modifies that shared object, and the change is visible through `alice`.

### Reassigning the Reference vs. Modifying the Object

A common point of confusion is the difference between **modifying the object** and **reassigning the reference**.

```java
public static void tryToChangePerson(Person p) {
    p = new Person("Bob");  // Reassigns the LOCAL reference p
    // This does NOT affect the original reference in main
}

public static void main(String[] args) {
    Person alice = new Person("Alice");
    tryToChangePerson(alice);
    System.out.println(alice.getName());  // Still "Alice"!
}
```

**Why?** Inside `tryToChangePerson`, the parameter `p` is a **copy** of the reference from `alice`. Reassigning `p` to point to a new `Person` object changes where that local copy points, but it does not change the original reference `alice`. The original `alice` still points to the original `Person` object.

This is the key distinction:
- **Modifying the object** (calling methods that change its state) affects the original because both references point to the same object.
- **Reassigning the reference** (making the parameter point to a different object) affects only the local copy.

### When to Modify Mutable Objects Passed as Parameters

The AP exam emphasizes **good programming practice**: you should not modify mutable objects that are passed as parameters **unless** the method specification explicitly requires it.

```java
// BAD PRACTICE (unless required)
public void badMethod(int[] arr) {
    arr[0] = 999;  // Modifies the original array!
}

// GOOD PRACTICE - create a copy if you need to modify
public int[] goodMethod(int[] arr) {
    int[] copy = new int[arr.length];
    for (int i = 0; i < arr.length; i++) {
        copy[i] = arr[i] * 2;  // Modify the copy
    }
    return copy;
}
```

Modifying parameters without permission can lead to unexpected side effects and bugs that are hard to trace. If a method needs to return a modified version of an object, it should create and return a new object rather than modifying the original.

### Returning Object References

When a method returns an object reference, it is returning a copy of the reference (the memory address), **not** a new copy of the object. The caller receives a reference that points to the same object that existed inside the method.

```java
public class Person {
    private String name;
    private Person spouse;
    
    public Person(String n) { name = n; }
    
    public Person getSpouse() {
        return spouse;  // Returns reference to the same spouse object
    }
    
    public void setSpouse(Person s) {
        spouse = s;
    }
}

// Usage:
Person alice = new Person("Alice");
Person bob = new Person("Bob");
alice.setSpouse(bob);

Person alicesSpouse = alice.getSpouse();  // Gets reference to Bob
alicesSpouse.setName("Robert");            // Modifies Bob's name!
System.out.println(bob.getName());         // Prints "Robert"
```

Both `bob` and `alicesSpouse` refer to the same `Person` object. Changes through one reference are visible through the other.

#### Returning a Copy Instead

If you need to return a copy of an object to prevent external modification, you must explicitly create that copy (defensive copying).

```java
public class Person {
    private String name;
    private int[] scores;
    
    public int[] getScores() {
        // Return a COPY of the array to preserve encapsulation
        int[] copy = new int[scores.length];
        for (int i = 0; i < scores.length; i++) {
            copy[i] = scores[i];
        }
        return copy;
    }
}
```

Now the caller receives a separate array; modifications to that array do not affect the original.

### Accessing Private Members of Parameter Objects

A method can access the `private` data and methods of a parameter **only if** the parameter is of the **same type** as the method's enclosing class.

```java
public class Person {
    private String name;
    private int age;
    
    public boolean isOlderThan(Person other) {
        // Allowed: 'other' is the same type as this class
        // So we can access other's private instance variables directly
        return this.age > other.age;
    }
    
    public void copyFrom(Person other) {
        // Also allowed - same type
        this.name = other.name;
        this.age = other.age;
    }
}

// In a different class:
public class Test {
    public void compare(Person p1, Person p2) {
        // NOT allowed - Test is not the Person class
        // if (p1.age > p2.age) { }  // Compiler error!
    }
}
```

**Why this rule?** Privacy is at the class level, not the object level. Code inside the `Person` class can access the private members of **any** `Person` object, not just the current instance (`this`). This is essential for implementing methods like `compareTo`, `equals`, and copy operations.

### Summary of Reference Behavior

| Operation | Effect | Example |
|-----------|--------|---------|
| Passing primitive | Copies value; original unaffected | `void m(int x) { x++; }` |
| Passing object reference | Copies reference; object shared | `void m(Person p) { p.setName(...); }` |
| Reassigning parameter | Affects only local copy | `p = new Person(...);` |
| Returning reference | Returns copy of reference; object shared | `return spouse;` |
| Returning copy | Returns new object; original protected | Create and return new object |
| Accessing private members of parameter | Allowed only if same class | `other.age` inside `Person` |

### Key Terminology for Topic 3.6

| Term | Definition |
|------|------------|
| **Call by value** | Parameter passing where a copy of the argument's value is made |
| **Object reference** | A memory address that points to an object |
| **Mutable object** | An object whose state can be changed after creation |
| **Defensive copying** | Creating a copy of an object to protect the original from modification |
| **Side effect** | An unintended modification of state outside a method's scope |

### AP Exam Tips

- **Objects are shared:** When you pass an object reference, the method can modify the object. The changes will be visible to the caller.
- **Reassignment is local:** Changing the parameter to point to a new object does **not** affect the original reference.
- **Same‑class access:** A method can access private members of any parameter that is the same type as its class. This is tested in free‑response questions when you need to compare objects.
- **Defensive copying:** If a method returns a mutable object (like an array), consider returning a copy to preserve encapsulation.
- **No modification without permission:** Unless the specification says otherwise, do not modify objects passed as parameters.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Passing an object makes a copy of the object." | No, only the reference is copied; the object is shared. |
| "Reassigning the parameter changes the original variable." | No, it only changes the local copy. |
| "Private means no other object can access it, even from the same class." | Private means other classes cannot access it; same‑class objects can. |
| "Returning an object returns a copy." | No, it returns a reference to the same object. |
| "Modifying a parameter is always bad." | It's acceptable if the method's purpose is to modify the object, but otherwise it's a side effect. |

### Quick Reference: Parameter Passing

| Argument Type | What's Copied | Can Original Be Modified? |
|---------------|---------------|---------------------------|
| Primitive | Value | No (changes affect only copy) |
| Object reference | Reference | Yes (if object is mutable and methods modify it) |
| Reference reassignment | N/A | No (only local copy changes) |