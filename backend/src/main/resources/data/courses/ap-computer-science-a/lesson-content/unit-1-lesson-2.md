### Variables and Data Types


### What is a Data Type?

A **data type** is a set of values and a corresponding set of operations on those values.

Think of data types as categories of information that a computer can work with. Just as you wouldn't try to multiply a word by a number in real life, computers need to know what kind of data they're handling so they know what operations are allowed.

**Real-world analogy:**
- If you have apples, you can count them, eat them, or bake a pie
- If you have dollar bills, you can count them, spend them, or save them
- But you cannot bake a pie with dollar bills—the type of thing determines what you can do with it

In Java, every piece of data has a type, and that type determines what values it can hold and what operations you can perform on it.


### Two Categories of Data Types

Java divides data types into two major categories:

| Category | Description | Examples |
|----------|-------------|----------|
| **Primitive Types** | Store simple, single values directly | `int`, `double`, `boolean` |
| **Reference Types** | Store memory addresses that point to objects | `String`, `Scanner`, arrays, custom classes |

#### Primitive Types

Primitive types are the most basic building blocks. When you create a primitive variable, the variable **holds the actual value**.

Think of a primitive variable as a labeled box. If the box says `int`, you can only put whole numbers inside it. If the box says `double`, you can put decimal numbers inside it.

#### Reference Types

Reference types store the **memory address** of an object, not the object itself. The variable "refers to" the object somewhere else in memory.

Think of a reference variable as a piece of paper with an address written on it. The paper doesn't contain the house—it tells you where to find the house.

**We'll explore reference types in depth starting with Topic 1.12. For now, focus on primitives.**


### The Three Primitive Data Types You Need to Know

The AP Computer Science A course focuses on exactly three primitive types:

| Type | What It Stores | Example Values | Memory |
|------|----------------|----------------|--------|
| **`int`** | Integers (whole numbers) | `42`, `-17`, `0`, `1000` | 4 bytes |
| **`double`** | Real numbers (with decimals) | `3.14`, `-0.5`, `100.0` | 8 bytes |
| **`boolean`** | Truth values | `true`, `false` | 1 bit (conceptually) |

#### The `int` Type

The `int` type stores whole numbers—positive, negative, or zero. No decimal points allowed.

**Valid `int` values:**
- `int score = 95;`
- `int temperature = -5;`
- `int count = 0;`

**Invalid `int` values:**
- `int price = 19.99;` (contains a decimal—this is a `double`)
- `int zipCode = "12345";` (quotes make it a String, not a number)

#### The `double` Type

The `double` type stores real numbers—numbers that can have a fractional part after a decimal point.

**Valid `double` values:**
- `double price = 19.99;`
- `double temperature = -2.5;`
- `double pi = 3.14159;`
- `double whole = 100.0;` (decimal point makes it a `double`, even though the value is a whole number)

**Why "double"?** The name comes from "double-precision floating point." You don't need to remember that—just know it's for decimal numbers.

#### The `boolean` Type

The `boolean` type stores only two possible values: `true` or `false`. It's named after George Boole, a mathematician who invented Boolean logic.

**Valid `boolean` values:**
- `boolean isRaining = true;`
- `boolean completed = false;`
- `boolean passed = true;`

**What booleans are used for:**
- Making decisions (if statements)
- Controlling loops (while loops)
- Representing yes/no, on/off, true/false conditions

**Key point:** `true` and `false` are Java keywords—they are not strings. No quotes!


### What You DON'T Need to Know (Exclusion Statement)

The College Board explicitly excludes these five primitive types from the AP exam:

| Excluded Type | What It Is | Why You Don't Need It |
|---------------|------------|------------------------|
| `long` | Larger integers | `int` covers what you need |
| `short` | Smaller integers | `int` covers what you need |
| `byte` | Very small integers | `int` covers what you need |
| `float` | Decimal numbers (less precision) | `double` is the standard |
| `char` | Single characters | You'll use `String` for text |

**Never use these on the AP exam.** Stick to `int`, `double`, and `boolean`.


### Variables: Named Storage Locations

A **variable** is a storage location that holds a value. Think of it as a labeled box in the computer's memory.

**Key characteristics of variables:**
- Every variable has a **name** (identifier)
- Every variable has a **data type** (what kind of value it can hold)
- The value stored in a variable **can change** while the program runs
- A variable of primitive type holds the actual primitive value

#### Declaring Variables

To create a variable, you must **declare** it—tell Java its type and name.

**Syntax:**
```
type variableName;
```

**Examples:**
```java
int age;           // declares an integer variable named age
double price;      // declares a double variable named price
boolean finished;  // declares a boolean variable named finished
```

You can declare multiple variables of the same type on one line:

```java
int x, y, z;           // three integer variables
double a, b, c;        // three double variables
```

#### Variable Naming Rules (Must Follow)

Java has strict rules for what names you can use:

| Rule | Example | Explanation |
|------|---------|-------------|
| Must start with a letter, underscore (_), or dollar sign ($) | `score`, `_temp`, `$value` | Numbers cannot be the first character |
| After the first character, can include letters, digits, underscores, or dollar signs | `score2`, `final_score` | Spaces are not allowed |
| Cannot be a Java keyword | `int`, `double`, `class`, `public` | These words have special meaning in Java |
| Case-sensitive | `score` and `Score` are different | Upper and lower case matter |

**Valid names:**
- `studentAge`
- `_count`
- `totalScore2`
- `firstName`

**Invalid names:**
- `2ndPlace` (starts with a number)
- `my-name` (hyphen not allowed)
- `class` (reserved keyword)
- `total score` (space not allowed)

#### Naming Conventions (Strongly Recommended)

Beyond the rules, Java programmers follow conventions:

| Convention | Example | When to Use |
|------------|---------|-------------|
| camelCase | `studentAge`, `firstName` | Variable names |
| Start with lowercase | `score`, `total` | Variable names |
| Meaningful names | `temperature` not `x` | Always—code should be self-documenting |

**camelCase** means the first word starts lowercase, each subsequent word starts uppercase. No spaces or underscores (except in constants, which you'll learn later).


### Variable Initialization

**Initialization** is the first time a variable is assigned a value. A variable must be assigned a value before it can be used in an expression.

#### Declaring and Initializing Separately

```java
int age;           // declaration
age = 17;          // initialization (first assignment)
```

#### Declaring and Initializing Together

```java
int age = 17;              // declaration + initialization
double price = 19.99;      // declaration + initialization
boolean isRaining = false; // declaration + initialization
```

#### What Happens If You Don't Initialize?

Java will give you a compiler error:

```java
int age;
System.out.println(age);  // ERROR! Variable might not have been initialized
```

**Always initialize variables before using them.**


### Compatible Data Types

When assigning a value to a variable, the value must come from a **compatible data type**.

#### Compatible Assignments

```java
int score = 95;           // ✓ 95 is an int
double price = 19.99;     // ✓ 19.99 is a double
boolean flag = true;      // ✓ true is a boolean
```

#### Incompatible Assignments (Compiler Errors)

```java
int score = 95.5;         // ✗ 95.5 is double, not int
double price = "19.99";   // ✗ "19.99" is String, not double
boolean flag = "true";    // ✗ "true" is String, not boolean
```

#### A Special Case: int to double

Java will automatically convert an `int` to a `double` when needed:

```java
double price = 10;        // ✓ 10 is int, automatically becomes 10.0
```

This is called **widening conversion**—going from a smaller type (`int`) to a larger type (`double`) is safe and automatic.

The reverse (double to int) is **not** automatic and requires casting (Topic 1.5).


### Reference Types and `null`

For now, you only need a basic understanding of reference types.

A variable of a reference type holds either:
- An **object reference** (memory address of an object)
- The special value **`null`** (meaning it doesn't reference any object)

```java
String name;              // declares a String reference variable
name = null;              // explicitly set to null (no object)
```

The literal `null` is a special value that means "points to nothing."

**We'll explore this deeply in Topics 1.12-1.15.**


### Visualizing Primitive vs Reference Variables

```
Primitive Variable:
┌─────────────────┐
│    int age      │
│   ┌─────────┐   │
│   │   17    │   │  ← The variable holds the actual value
│   └─────────┘   │
└─────────────────┘

Reference Variable:
┌─────────────────┐
│  String name    │
│   ┌─────────┐   │
│   │ 0x1A3F  │   │  ← The variable holds a memory address
│   └─────────┘   │
└─────────────────┘
         ↓
    ┌────────────┐
    │  "Alice"   │  ← The actual object lives elsewhere in memory
    └────────────┘
```


### Key Terminology for Topic 1.2

| Term | Definition |
|------|------------|
| **Data type** | A set of values and corresponding operations on those values |
| **Primitive type** | A data type that stores simple values directly (`int`, `double`, `boolean`) |
| **Reference type** | A data type that stores memory addresses pointing to objects |
| **`int`** | Primitive type for integers (whole numbers) |
| **`double`** | Primitive type for real numbers (with decimals) |
| **`boolean`** | Primitive type for truth values (`true` or `false`) |
| **Variable** | A named storage location that holds a value |
| **Declaration** | Statement that creates a variable (specifies type and name) |
| **Initialization** | The first time a variable is assigned a value |
| **`null`** | Special literal meaning "no object" for reference types |


### AP Exam Tips

**What you need to know for the exam:**

- **Only three primitives matter:** `int`, `double`, `boolean`. Never use `long`, `short`, `byte`, `float`, or `char` in your answers.

- **Variable declaration syntax:** Be able to identify correct and incorrect declarations.

- **Type compatibility:** Know which assignments are legal and which cause compiler errors.

- **`int` to `double` is automatic:** `double x = 5;` is fine. The reverse is not.

- **`boolean` is not a string:** `boolean flag = "true";` is wrong. No quotes!

- **`null` is for reference types only:** You cannot assign `null` to an `int` or `double`.

- **Initialization matters:** Variables must be initialized before use. Exam questions will test this.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "There are many primitive types I need to memorize." | Only three matter for AP CSA: `int`, `double`, `boolean`. |
| "`double` is for numbers with two decimal places." | `double` is for any real number—any number of decimal places. |
| "`boolean` can hold `"true"` as a string." | No quotes! `true` and `false` are keywords, not strings. |
| "I can use any name I want for variables." | Names must follow rules: start with letter, no spaces, no keywords. |
| "Variables start with a default value." | Local variables (what you're learning) have NO default—you must initialize. |
| "`null` means zero." | `null` means "no object," not the number zero. |
