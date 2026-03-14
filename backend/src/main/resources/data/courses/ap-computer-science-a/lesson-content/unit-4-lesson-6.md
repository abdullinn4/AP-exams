### Reading Data from Files


### Why Read from Files?

Programs often need to work with data that persists beyond a single run. A file provides permanent storage for data—it remains available even after the program ends. By reading data from files, programs can process large data sets, load saved information, and share data between different applications.

**Real-World Analogy:** Think of a file like a notebook. You can write information in it, close it, and come back later to read what you wrote. Your program can do the same: write data to a file to save it, and later read that file to restore the data.


### The File Class

Java provides the `File` class (in the `java.io` package) to represent a file or directory path. To read from a file, you create a `File` object with the file's name or path.

```java
import java.io.File;

File inputFile = new File("data.txt");
```

The string argument can be:
- A simple filename (if the file is in the same directory as the program)
- A relative path (e.g., `"data/input.txt"`)
- An absolute path (e.g., `"C:/Users/name/documents/data.txt"`)

Creating a `File` object does **not** actually open the file; it just creates a representation of the file's location.


### Connecting a Scanner to a File

The `Scanner` class, which you've used to read from the keyboard, can also read from a file. You pass a `File` object to the `Scanner` constructor.

```java
import java.util.Scanner;
import java.io.File;

File inputFile = new File("scores.txt");
Scanner fileScanner = new Scanner(inputFile);
```

Now you can use the same `Scanner` methods (`nextInt`, `nextDouble`, `nextLine`, etc.) to read data from the file.


### Handling Exceptions: throws IOException

When you work with files, things can go wrong—the file might not exist, the program might not have permission to read it, etc. Java requires you to handle these potential errors. One simple way is to declare that your method `throws IOException`.

```java
import java.io.IOException;

public static void readFile() throws IOException {
    File f = new File("data.txt");
    Scanner sc = new Scanner(f);
    // ... read data
    sc.close();
}
```

The `throws IOException` clause tells the compiler that this method might throw an `IOException`, and any code that calls this method must handle it (or also declare `throws`). For the AP exam, you only need to know how to add this clause; you won't be required to write `try-catch` blocks.

#### Import Statements

Because `File` and `IOException` are in the `java.io` package, you must import them:

```java
import java.io.File;
import java.io.IOException;
```

The `Scanner` class is in `java.util`, so you also need:

```java
import java.util.Scanner;
```


### Scanner Methods for File Input

The same `Scanner` methods you use for keyboard input work for files:

| Method | Description |
|--------|-------------|
| `int nextInt()` | Reads the next token as an `int`. Throws `InputMismatchException` if the token is not an integer. |
| `double nextDouble()` | Reads the next token as a `double`. |
| `boolean nextBoolean()` | Reads the next token as a `boolean` (expects "true" or "false"). |
| `String next()` | Reads the next token (a word separated by whitespace) as a `String`. |
| `String nextLine()` | Reads the remainder of the current line (including spaces) as a `String`. |
| `boolean hasNext()` | Returns `true` if there is another token in the file. |
| `void close()` | Closes the scanner and releases the file resource. |

#### Example: Reading Integers from a File

Suppose `numbers.txt` contains:

```
10 20 30
40 50
```

```java
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class ReadNumbers {
    public static void main(String[] args) throws IOException {
        File file = new File("numbers.txt");
        Scanner scanner = new Scanner(file);
        
        int sum = 0;
        while (scanner.hasNextInt()) {
            int num = scanner.nextInt();
            sum += num;
        }
        scanner.close();
        System.out.println("Sum = " + sum);
    }
}
```

Output:
```
Sum = 150
```

#### Example: Reading Lines of Text

Suppose `names.txt` contains:

```
Alice
Bob
Carol
```

```java
Scanner scanner = new Scanner(new File("names.txt"));
while (scanner.hasNextLine()) {
    String line = scanner.nextLine();
    System.out.println(line);
}
scanner.close();
```

#### Example: Mixing nextInt and nextLine (Caution)

If you mix `nextInt()` and `nextLine()`, you must be aware that `nextInt()` leaves the newline character in the input buffer. A subsequent `nextLine()` will read that newline and return an empty string. The CED **excludes** writing or analyzing code that uses both `nextLine` and other `Scanner` methods on the same input source. So for the exam, you won't be tested on this nuance. However, it's good to know for real programming.


### The `hasNext` Method

The `hasNext()` method returns `true` if there is another token in the file. You can use it in a `while` loop to read until the end of the file without knowing the exact number of items.

```java
while (scanner.hasNext()) {
    String token = scanner.next();
    // process token
}
```

There are also type‑specific versions: `hasNextInt()`, `hasNextDouble()`, `hasNextLine()`. These check whether the next token can be interpreted as that type.

```java
if (scanner.hasNextInt()) {
    int value = scanner.nextInt();
} else {
    // handle non-integer input
}
```


### The `split` Method

Often a file contains lines with multiple pieces of data separated by a delimiter (like commas or spaces). The `String` class provides a `split` method that divides a string into an array of substrings based on a delimiter.

```java
String line = "Alice,85,90,88";
String[] parts = line.split(",");
// parts = ["Alice", "85", "90", "88"]
```

**Important:** The `split` method takes a **regular expression** as its argument. For the AP exam, you only need to use simple delimiters like commas, spaces, or hyphens. You will **not** be tested on the special properties of regular expressions.

#### Example: Reading a CSV‑like File

Suppose `students.txt` contains:

```
Alice,95,87,92
Bob,78,88,85
Carol,92,91,89
```

```java
Scanner scanner = new Scanner(new File("students.txt"));
while (scanner.hasNextLine()) {
    String line = scanner.nextLine();
    String[] parts = line.split(",");
    String name = parts[0];
    int score1 = Integer.parseInt(parts[1]);
    int score2 = Integer.parseInt(parts[2]);
    int score3 = Integer.parseInt(parts[3]);
    int average = (score1 + score2 + score3) / 3;
    System.out.println(name + " average: " + average);
}
scanner.close();
```


### Closing the File

It is important to close a file when you are done reading it. This frees up system resources and ensures that all data is properly flushed. Use the `close()` method of the `Scanner`.

```java
scanner.close();
```

In more advanced programming, you would use a `try`-with-resources statement to automatically close the file, but for the AP exam, simply calling `close()` is sufficient.

---

### Common Errors with File Input

| Error | Example | Problem | Fix |
|-------|---------|---------|-----|
| File not found | `Scanner sc = new Scanner(new File("missing.txt"));` | Program throws `FileNotFoundException` | Ensure file exists in the correct location, or handle exception |
| Forgetting to import | `File f = new File("data.txt");` without import | Compiler error | Add `import java.io.File;` |
| Not declaring `throws IOException` | Method uses `Scanner` with `File` but no `throws` | Compiler error | Add `throws IOException` to method header |
| Using `nextLine()` after `nextInt()` | Mixing without consuming newline | Unexpected empty line (excluded from AP) | Avoid mixing, or consume newline with extra `nextLine()` |
| Using `split` with complex regex | `line.split("\\s+");` | May not be needed for AP | Use simple delimiters like `","` or `" "` |
| Forgetting to close the file | No `close()` | Resource leak (may not cause immediate error) | Call `close()` when done |


### Key Terminology for Topic 4.6

| Term | Definition |
|------|------------|
| **File** | A named location on disk that stores persistent data. |
| **`File` class** | A class in `java.io` that represents a file or directory path. |
| **`Scanner`** | A class that can parse primitive types and strings from an input source (including files). |
| **`IOException`** | An exception thrown when an input/output operation fails (e.g., file not found). |
| **`throws`** | A keyword used in a method header to indicate that the method may throw an exception. |
| **Token** | A piece of input separated by whitespace (or other delimiters). |
| **`hasNext()`** | A `Scanner` method that checks if another token exists. |
| **`split()`** | A `String` method that divides a string into an array based on a delimiter. |
| **Delimiter** | A character or sequence that separates pieces of data (e.g., comma, space). |


### AP Exam Tips

- **`throws IOException` is required:** Any method that creates a `Scanner` with a `File` must either handle the exception or declare `throws IOException`. The exam expects you to add this clause.
- **Import statements matter:** You need `import java.io.File;` and `import java.io.IOException;` (and `import java.util.Scanner;`). The exam may test whether you know which imports are necessary.
- **Scanner methods:** Know `nextInt()`, `nextDouble()`, `nextLine()`, `next()`, `hasNext()`, and `close()`. You won't be tested on `nextBoolean()` but it's good to know.
- **`split` for parsing lines:** When a line contains multiple values, use `split` with a simple delimiter like `","`. Remember that `split` returns an array of `String`s; you may need to parse numbers with `Integer.parseInt()`.
- **No mixing `nextLine` with other `next` methods:** The CED explicitly excludes writing or analyzing code that uses both `nextLine` and other `Scanner` methods on the same input source. So exam questions will avoid that complexity.
- **`hasNext` loop pattern:** Use `while (scanner.hasNext())` to read an unknown number of tokens. Use `while (scanner.hasNextLine())` to read line by line.
- **Close the scanner:** Always call `close()` when finished to release resources.


### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "Creating a `File` object opens the file." | No, it just creates a path representation. The file is opened when you create a `Scanner` with it. |
| "You don't need to handle exceptions if you're sure the file exists." | The compiler doesn't know that; you must still declare `throws IOException` or use a `try-catch`. |
| "`nextLine()` reads the next word." | No, it reads the entire line up to the newline character. |
| "`split()` can only use commas." | It can use any delimiter (space, hyphen, etc.), but you only need simple ones for the exam. |
| "After reading a file, the program automatically closes it." | No, you must explicitly call `close()`. |


### Quick Reference: File Input Steps

1. **Import** the necessary classes:
   ```java
   import java.io.File;
   import java.io.IOException;
   import java.util.Scanner;
   ```
2. **Declare** that the method `throws IOException`:
   ```java
   public static void readFile() throws IOException {
   ```
3. **Create a `File` object** with the filename:
   ```java
   File file = new File("filename.txt");
   ```
4. **Create a `Scanner`** connected to the file:
   ```java
   Scanner sc = new Scanner(file);
   ```
5. **Read data** using `next()`, `nextInt()`, `nextLine()`, etc., often in a loop with `hasNext()`.
6. **Close** the scanner:
   ```java
   sc.close();
   ```