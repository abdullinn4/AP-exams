### 2.10: Implementing String Algorithms

### Why String Algorithms Matter

Strings are everywhere in programming—user input, data processing, text analysis, and more. Mastering standard string algorithms allows you to manipulate and extract information from text efficiently. These algorithms appear frequently on the AP exam, both in multiple-choice questions and as components of free-response questions (especially FRQ #1).

**Real-World Analogy:** Think of string algorithms like tools in a Swiss Army knife. Each tool (algorithm) serves a specific purpose: finding a pattern, counting occurrences, transforming text. Once you know which tool to use and how to use it, you can handle almost any text-processing task.

### Standard String Algorithms

The AP Computer Science A course focuses on three categories of string algorithms:

1. **Finding substrings with particular properties** – Does a string contain a specific pattern? Does it start or end with certain characters?
2. **Counting substrings that meet specific criteria** – How many times does a pattern appear? How many words have a certain length?
3. **Creating a new string with characters reversed** – Reversing a string is a classic problem that tests your understanding of string manipulation and loops.

### Algorithm 1: Finding Substrings with Particular Properties

#### Checking if a String Contains a Substring

The simplest way to check if a string contains a specific substring is using the `indexOf` method. If the substring exists, `indexOf` returns the starting index; otherwise, it returns `-1`.

```java
String text = "The quick brown fox jumps over the lazy dog";
String target = "fox";

if (text.indexOf(target) >= 0) {
    System.out.println("Found '" + target + "' at index " + text.indexOf(target));
} else {
    System.out.println("Not found");
}
```

**Important:** `indexOf` returns the first occurrence. To find all occurrences, you need a loop (covered in counting algorithms).

#### Checking if a String Starts or Ends with a Specific Substring

Java provides dedicated methods for these common tasks:

```java
String filename = "document.pdf";

if (filename.startsWith("doc")) {
    System.out.println("Filename starts with 'doc'");
}

if (filename.endsWith(".pdf")) {
    System.out.println("This is a PDF file");
}
```

While `startsWith` and `endsWith` are convenient, you can also use `substring` for the same purpose:

```java
// Check first 3 characters
if (filename.substring(0, 3).equals("doc")) {
    System.out.println("Starts with 'doc'");
}

// Check last 4 characters
if (filename.substring(filename.length() - 4).equals(".pdf")) {
    System.out.println("Ends with '.pdf'");
}
```

#### Checking if a Character is a Letter, Digit, or Whitespace

Sometimes you need to examine individual characters. The `Character` class provides useful methods:

```java
char ch = 'A';
if (Character.isLetter(ch)) {
    System.out.println(ch + " is a letter");
}

if (Character.isDigit(ch)) {
    System.out.println(ch + " is a digit");
}

if (Character.isWhitespace(ch)) {
    System.out.println("It's whitespace");
}

if (Character.isUpperCase(ch)) {
    System.out.println(ch + " is uppercase");
}
```

These methods are helpful when implementing custom property checks, such as finding words that start with a capital letter or extracting numbers from a string.

#### Example: Find the First Word that Starts with a Vowel

```java
String sentence = "The elephant ate an apple";
String[] words = sentence.split(" ");
String result = null;

for (String word : words) {
    char firstChar = word.charAt(0);
    if ("AEIOUaeiou".indexOf(firstChar) >= 0) {
        result = word;
        break;
    }
}

if (result != null) {
    System.out.println("First word starting with vowel: " + result);
} else {
    System.out.println("No word starts with a vowel");
}
```

### Algorithm 2: Counting Substrings Meeting Specific Criteria

Counting how many times a pattern appears or how many elements satisfy a condition is a fundamental operation.

#### Counting Occurrences of a Substring

To count all occurrences of a substring within a string, you can use `indexOf` in a loop, starting each search after the previous match.

```java
String text = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?";
String target = "wood";
int count = 0;
int index = text.indexOf(target);

while (index >= 0) {
    count++;
    index = text.indexOf(target, index + 1);  // Search after the current match
}

System.out.println("'" + target + "' appears " + count + " times.");
```

**How it works:**
- `indexOf(target)` finds the first occurrence.
- Each time we find one, we increment the count and search again starting from `index + 1` (to avoid finding the same occurrence repeatedly).
- When `indexOf` returns `-1`, no more occurrences exist.

#### Counting Words with a Specific Property

Suppose you have a sentence and want to count how many words have more than 5 letters.

```java
String sentence = "This is an example sentence with several words of varying lengths";
String[] words = sentence.split(" ");
int longWordCount = 0;

for (String word : words) {
    if (word.length() > 5) {
        longWordCount++;
    }
}

System.out.println("Words longer than 5 letters: " + longWordCount);
```

#### Counting Characters that Meet a Condition

To count, for example, the number of uppercase letters in a string:

```java
String text = "Hello World! Java Programming.";
int upperCount = 0;

for (int i = 0; i < text.length(); i++) {
    if (Character.isUpperCase(text.charAt(i))) {
        upperCount++;
    }
}

System.out.println("Uppercase letters: " + upperCount);
```

#### Counting with Multiple Criteria

You can combine conditions using logical operators.

```java
String password = "Abc123!@#";
int digitCount = 0;
int letterCount = 0;
int specialCount = 0;

for (int i = 0; i < password.length(); i++) {
    char ch = password.charAt(i);
    if (Character.isDigit(ch)) {
        digitCount++;
    } else if (Character.isLetter(ch)) {
        letterCount++;
    } else {
        specialCount++;
    }
}

System.out.println("Digits: " + digitCount);
System.out.println("Letters: " + letterCount);
System.out.println("Special characters: " + specialCount);
```

### Algorithm 3: Creating a New String with Characters Reversed

Reversing a string is a classic algorithm that tests your ability to build a new string by iterating through the original in reverse order.

#### Approach 1: Loop from End to Beginning

```java
String original = "Hello, World!";
String reversed = "";

for (int i = original.length() - 1; i >= 0; i--) {
    reversed += original.charAt(i);
}

System.out.println("Original: " + original);
System.out.println("Reversed: " + reversed);
```

**Output:**
```
Original: Hello, World!
Reversed: !dlroW ,olleH
```

**How it works:**
- Start at the last index (`length() - 1`) and move backwards to index 0.
- Append each character to the `reversed` string.
- Because strings are immutable, each concatenation creates a new string. For very long strings, this can be inefficient, but for the AP exam, this approach is perfectly acceptable.

#### Approach 2: Using `substring` (Alternative)

```java
String original = "Hello, World!";
String reversed = "";

for (int i = original.length() - 1; i >= 0; i--) {
    reversed += original.substring(i, i + 1);
}
```

This produces the same result, but using `charAt` is simpler and more direct.

#### Approach 3: Using `StringBuilder` (Not Required but Efficient)

The AP exam does not require knowledge of `StringBuilder`, but you might encounter it in textbooks. It's more efficient for repeated concatenation:

```java
StringBuilder sb = new StringBuilder(original);
String reversed = sb.reverse().toString();
```

However, for the exam, stick to the loop-based approach.

#### Example: Palindrome Checker

A palindrome is a word or phrase that reads the same forwards and backwards (ignoring spaces and punctuation). Reversing a string is a key step in checking for palindromes.

```java
public static boolean isPalindrome(String str) {
    String cleaned = str.replaceAll("[^a-zA-Z]", "").toLowerCase();
    String reversed = "";
    
    for (int i = cleaned.length() - 1; i >= 0; i--) {
        reversed += cleaned.charAt(i);
    }
    
    return cleaned.equals(reversed);
}

// Test
System.out.println(isPalindrome("racecar"));          // true
System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // true
```

### Combining String Algorithms

Real-world problems often require combining multiple string algorithms.

#### Example: Analyze a Sentence

Write a program that takes a sentence and reports:
- Number of words
- Longest word
- Shortest word
- Average word length
- Words that start and end with the same letter

```java
String sentence = "The radar detected the level of civic responsibility";
String[] words = sentence.split(" ");

int wordCount = words.length;
String longest = words[0];
String shortest = words[0];
int totalLength = 0;
int sameStartEndCount = 0;

for (String word : words) {
    // Update longest/shortest
    if (word.length() > longest.length()) {
        longest = word;
    }
    if (word.length() < shortest.length()) {
        shortest = word;
    }
    
    // Accumulate total length for average
    totalLength += word.length();
    
    // Check if starts and ends with same letter
    if (word.length() > 0 && 
        word.charAt(0) == word.charAt(word.length() - 1)) {
        sameStartEndCount++;
    }
}

double avgLength = (double) totalLength / wordCount;

System.out.println("Word count: " + wordCount);
System.out.println("Longest word: " + longest);
System.out.println("Shortest word: " + shortest);
System.out.println("Average word length: " + avgLength);
System.out.println("Words with same start/end: " + sameStartEndCount);
```

#### Example: Censor Bad Words

```java
String message = "This is a bad example with terrible words.";
String[] badWords = {"bad", "terrible", "awful"};

for (String bad : badWords) {
    int index = message.indexOf(bad);
    while (index >= 0) {
        // Replace with asterisks
        String replacement = "*".repeat(bad.length());
        message = message.substring(0, index) + replacement + 
                  message.substring(index + bad.length());
        index = message.indexOf(bad, index + 1);
    }
}

System.out.println(message);
// Output: This is a *** example with ******** words.
```

### Common Errors with String Algorithms

| Error | Example | Problem | Fix |
|-------|---------|---------|-----|
| Off-by-one in loop | `for (int i = 0; i <= str.length(); i++)` | Accesses index out of bounds | Use `i < str.length()` |
| Forgetting that `indexOf` returns -1 | Using result without checking -1 | May cause errors if substring not found | Always check `if (index >= 0)` |
| Modifying string while iterating | Changing `str` inside loop | Unexpected behavior or infinite loop | Store result in new variable |
| Case sensitivity | `"Hello".indexOf("hello")` returns -1 | Case matters | Use `toLowerCase()` or `equalsIgnoreCase()` |
| Using `==` for string comparison | `if (str == "hello")` | Compares references, not content | Use `str.equals("hello")` |
| Not handling empty strings | Loops that assume non-empty | May cause exceptions | Check `if (str.length() > 0)` |

### Key Terminology for Topic 2.10

| Term | Definition |
|------|------------|
| **Substring** | A contiguous sequence of characters within a string |
| **String traversal** | Iterating through each character of a string |
| **Pattern matching** | Finding occurrences of a specific substring |
| **Frequency count** | Counting how many times a substring appears or how many characters meet a condition |
| **String reversal** | Creating a new string with characters in opposite order |
| **Palindrome** | A string that reads the same forwards and backwards |

### AP Exam Tips

- **String methods are your friends:** Know `length()`, `substring()`, `indexOf()`, `equals()`, and `charAt()` (even though `charAt` isn't on the quick reference, it's commonly used).
- **Traversal patterns:** You'll often loop through strings using `for (int i = 0; i < str.length(); i++)` and access characters with `charAt(i)`.
- **Building strings:** When building a new string (like reversed), start with an empty string `""` and concatenate.
- **Counting occurrences:** The `indexOf` loop pattern is essential. Remember to start the next search at `index + 1`.
- **Edge cases:** Always consider empty strings, strings with one character, and strings where the target doesn't appear.
- **Case sensitivity:** Many problems are case-sensitive unless specified otherwise. Use `toLowerCase()` or `toUpperCase()` when needed.
- **Free-response connection:** FRQ #1 often involves string manipulation, such as extracting initials, abbreviating phrases, or processing user input.

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "`indexOf` returns 0 if not found." | No, it returns -1. |
| "Strings can be modified directly." | No, strings are immutable. Methods return new strings. |
| "Reversing a string requires a special method." | You can reverse with a simple loop. |
| "`charAt(i)` returns a String." | No, it returns a `char`. |
| "All string algorithms need regular expressions." | Most can be done with basic methods. |
| "Counting occurrences is the same as finding the first occurrence." | Counting requires a loop to find all. |

### Quick Reference: String Algorithm Patterns

| Algorithm | Pattern | Key Code |
|-----------|---------|----------|
| Find first occurrence | Single `indexOf` | `int pos = str.indexOf(target);` |
| Find all occurrences | Loop with `indexOf` | `while ((pos = str.indexOf(target, pos)) >= 0) { count++; pos++; }` |
| Count characters meeting condition | Loop with condition | `if (condition) count++;` |
| Reverse string | Loop backwards | `for (int i = len-1; i >= 0; i--) rev += str.charAt(i);` |
| Check start/end | `startsWith` / `endsWith` | `if (str.startsWith(prefix))` |
| Check character properties | `Character` methods | `Character.isDigit(ch)` |