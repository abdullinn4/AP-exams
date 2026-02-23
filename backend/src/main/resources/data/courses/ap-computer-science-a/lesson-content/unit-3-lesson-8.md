### 3.8: Scope and Access

### What is Scope?

**Scope** refers to the region of a program where a particular variable can be accessed. In Java, scope is determined by where a variable is declared. Understanding scope is essential for writing correct code and avoiding naming conflicts.

**Real-World Analogy:** Think of scope like rooms in a house. A variable declared in the kitchen (like a coffee maker) can only be accessed in the kitchen. You can't use the coffee maker from the bedroom. Similarly, variables are only accessible within the block where they are declared.

### Local Variables

**Local variables** are variables declared inside a block of code—typically inside a method, constructor, or even inside a loop or if statement. They are called "local" because they are local to that block and cannot be accessed outside it.

#### Characteristics of Local Variables

- They are declared **inside** a method, constructor, or block
- They **must be initialized** before use (no default values)
- They exist only while the block is executing
- They cannot have access modifiers (`public`, `private`)
- Their scope is limited to the block in which they are declared

```java
public void exampleMethod() {
    int x = 10;  // x is a local variable, scope is the entire method
    
    if (x > 5) {
        int y = 20;  // y is a local variable, scope is only this if block
        System.out.println(x + y);  // OK - both in scope
    }
    
    // System.out.println(y);  // ERROR! y is out of scope here
}
```

#### Parameters as Local Variables

Method and constructor **parameters** are also considered local variables. Their scope is the entire method or constructor.

```java
public void printSum(int a, int b) {  // a and b are parameters (local variables)
    int sum = a + b;                  // sum is also a local variable
    System.out.println(sum);
    // a, b, and sum are all in scope here
}
// a, b, and sum are out of scope here
```

#### Loop Variables

Variables declared in a `for` loop header are local to that loop.

```java
public void loopExample() {
    for (int i = 0; i < 10; i++) {  // i is local to this loop
        System.out.println(i);
    }
    // System.out.println(i);  // ERROR! i is out of scope
    
    int j;
    for (j = 0; j < 10; j++) {      // j was declared before the loop
        System.out.println(j);
    }
    System.out.println(j);  // OK - j was declared in wider scope
}
```

### Block Scope

Java uses **block scope**, meaning a variable is accessible from its declaration point to the end of the enclosing block `{}`.

```java
public void demonstrateScope() {
    int a = 5;  // a accessible from here to end of method
    
    {
        int b = 10;  // b accessible only inside this inner block
        System.out.println(a + b);  // OK - a is in outer scope
    }
    
    // System.out.println(b);  // ERROR! b is out of scope
    
    for (int i = 0; i < 3; i++) {
        int c = i * 2;  // c is recreated each loop iteration
        System.out.println(c);
    }
    // c is out of scope here
}
```

### Shadowing

**Shadowing** occurs when a local variable or parameter has the **same name** as an instance variable (or class variable). Within the scope of the local variable, the local name "shadows" (hides) the instance variable.

```java
public class Person {
    private String name;  // instance variable
    
    public Person(String name) {  // parameter shadows instance variable
        name = name;  // This assigns the parameter to itself! (Bug)
        // The instance variable 'name' is still null
    }
}
```

In the example above, the parameter `name` shadows the instance variable `name`. The assignment `name = name` does nothing useful—it assigns the parameter to itself, leaving the instance variable unchanged.

#### Fixing Shadowing with `this`

To access the shadowed instance variable, you use the `this` keyword (covered in detail in Topic 3.9).

```java
public class Person {
    private String name;
    
    public Person(String name) {
        this.name = name;  // this.name refers to instance variable
        // name (without this) refers to the parameter
    }
}
```

#### Shadowing with Local Variables

Local variables can also shadow instance variables in any block.

```java
public class Example {
    private int value = 100;
    
    public void test() {
        int value = 50;  // local variable shadows instance variable
        System.out.println(value);  // prints 50 (local)
        System.out.println(this.value);  // prints 100 (instance)
    }
}
```

### Rules for Scope

1. **Declare before use:** A variable must be declared before it can be used.
2. **Block scope:** A variable is accessible from its declaration to the end of the enclosing block.
3. **Nested blocks:** An inner block can access variables declared in outer blocks, but not vice versa.
4. **No duplicate names in same scope:** You cannot declare two variables with the same name in the same scope.
5. **Shadowing allowed:** You can reuse a name in an inner scope (it shadows the outer variable).

### Common Scope Errors

| Error | Example | Problem | Fix |
|-------|---------|---------|-----|
| Using variable before declaration | `System.out.println(x); int x = 5;` | Variable not yet declared | Move declaration before use |
| Variable out of scope | `if (cond) { int x = 5; } System.out.println(x);` | x declared in inner block | Declare x in outer scope |
| Duplicate local variable | `int x = 5; int x = 10;` | Two variables same name in same scope | Use different names |
| Forgetting to initialize | `int x; System.out.println(x);` | Local variable not initialized | Initialize before use |
| Shadowing without `this` | Constructor parameter shadows instance variable | Instance variable not set | Use `this` to distinguish |

### Scope and Access Modifiers

Scope is about **where** a variable can be accessed. Access modifiers (`public`, `private`) are about **which classes** can access a variable. They are different concepts:

- **Scope:** Determined by block structure (where the variable is declared)
- **Access control:** Determined by access modifiers (who can access)

```java
public class MyClass {
    private int x;  // x has class scope (entire class) but private access
    
    public void method() {
        int y;  // y has method scope (only within this method)
    }
}
```

### Key Terminology for Topic 3.8

| Term | Definition |
|------|------------|
| **Scope** | The region of a program where a variable can be accessed |
| **Local variable** | A variable declared inside a method, constructor, or block |
| **Block** | A section of code enclosed in braces `{}` |
| **Block scope** | Scope limited to the block where a variable is declared |
| **Parameter** | A variable declared in a method or constructor header (local to that method) |
| **Shadowing** | When a local variable has the same name as an instance variable, hiding it |
| **Declaration** | The statement that creates a variable and specifies its type |

### AP Exam Tips

- **Local variables must be initialized:** Instance variables get default values, but local variables do not. The compiler enforces this.
- **Parameters are local:** They behave like local variables and cannot have access modifiers.
- **Shadowing questions:** The exam may test whether you know that a local variable with the same name hides the instance variable. Look for `this` to disambiguate.
- **Scope in loops:** Variables declared in a `for` loop header are only accessible within the loop.
- **Nested blocks:** Remember that inner blocks can see outer variables, but not vice versa.
- **No access modifiers on locals:** You cannot write `public int x;` inside a method—that's a syntax error.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Local variables have default values like instance variables." | No, local variables must be explicitly initialized. |
| "Parameters can be declared `public` or `private`." | No, parameters are always local to the method. |
| "A variable declared in a `for` loop can be used after the loop." | Only if declared before the loop; loop-header variables are local to the loop. |
| "Shadowing is always a mistake." | Sometimes intentional, but often a bug if `this` is forgotten. |
| "Scope and access control are the same thing." | Scope is about where; access control is about who. |

### Quick Reference: Scope Rules

| Declaration Location | Scope | Notes |
|---------------------|-------|-------|
| Inside a method | From declaration to end of method | Local variable |
| Inside a block `{}` | From declaration to end of block | Local variable |
| Method parameter | Entire method | Local variable |
| `for` loop header | The loop only | Local to loop |
| Inside class (not in method) | Entire class | Instance or class variable |