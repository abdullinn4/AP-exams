## Ace the Create Task – From Code to Submission


This is it. The moment you've been waiting for. The Create Performance Task is **30% of your AP score** – that's bigger than some entire exams in other subjects. But here's the good news: unlike the multiple-choice questions, you have **time**. You get to plan, build, refine, and perfect your submission.

Think of this module as your **secret weapon**. We're going to walk through every single requirement, every hidden pitfall, and every strategy that'll help you maximize your score. By the end, you'll have a crystal-clear roadmap from blank screen to final submission.

Let's make some magic! 🪄


## Understanding the Beast

### What Is the Create Task?

The Create Performance Task is a **through-course assessment** where you develop a computer program of your choice. You'll have **at least 9 hours of class time** to complete it.

**Your submission has three parts:**

```
┌─────────────────────────────────────────────────────────────┐
│                    CREATE TASK SUBMISSION                    │
├───────────────┬─────────────────────────────┬───────────────┤
│  PROGRAM CODE │           VIDEO             │      PPR      │
│  (PDF)        │        (≤1 minute)          │   (PDF)       │
├───────────────┼─────────────────────────────┼───────────────┤
│ • Full code   │ • Shows program running     │ • Procedure   │
│ • Comments    │ • Demonstrates input        │   segments    │
│ • Attribution │ • Shows functionality       │ • List        │
│               │ • Shows output              │   segments    │
│               │ • No narration              │ • No comments │
│               │ • ≤30 MB                     │ • ≥10pt font  │
└───────────────┴─────────────────────────────┴───────────────┘
```

**Weight:** 30% of your AP score. That's the difference between a 3 and a 4, or a 4 and a 5. Take it seriously!

### Collaboration Rules – Who Can You Work With?

| Component | Can You Collaborate? |
|-----------|---------------------|
| **Program code** | ✅ Yes, with partner(s) |
| **Video** | ❌ No – must be individual |
| **PPR** | ❌ No – must be individual |

**Important:** Collaboration means actually working together, not just splitting up work and meeting later. Think pair programming, not "you do half, I'll do half."


## Choosing Your Project

### The Golden Rule

Pick something that:
1. **Interests you** – You'll spend hours on this. Make it fun!
2. **Can realistically include all requirements** – List, procedure with parameters, algorithm with selection and iteration
3. **Is not too complex** – A simple project done perfectly > an ambitious project that's buggy

### Brainstorming Questions

- What problem do I want to solve? (Study tracker, budget calculator, recipe organizer)
- What creative interest do I want to express? (Random art generator, simple game, interactive story)
- Can I naturally use a list? (Scores, names, tasks, positions, colors)
- Can I write a procedure that does something useful with parameters? (Calculate something, filter data, transform input)
- Does my procedure need to include a loop and a conditional? (Almost always yes – searching, counting, finding max/min, filtering)

### Good Project Ideas

| Project | List | Procedure | Algorithm |
|---------|------|-----------|-----------|
| **Flashcard quizzer** | List of questions | `checkAnswer(userAns, correctAns)` | Loop through questions, IF to compare |
| **Weather analyzer** | List of temperatures | `averageTemp(temps)` | Loop sum, divide by length |
| **Number guessing game** | List of high scores | `updateScores(newScore, scores)` | Loop to insert in order, IF to compare |
| **Art generator** | List of colors | `drawPattern(colors, size)` | Loop to draw shapes, IF for alternating |
| **Text analyzer** | List of words | `countLongWords(words, minLength)` | Loop through, IF to count |

### Project Ideas to Avoid

❌ **"Hello, world"** – Can't include all requirements  
❌ **3D physics engine** – Too complex to debug in time  
❌ **List that exists but isn't used** – Must be meaningful  
❌ **Procedure with no parameters** – Harder to show abstraction  
❌ **Algorithm missing selection or iteration** – Both required inside procedure

**Real talk:** The AP readers aren't impressed by complexity. They're impressed by code that meets all requirements cleanly and works perfectly. A simple grade calculator that works > a half-broken multiplayer game.


## Meeting the Rubric Requirements

Your program code must include these elements. The scoring guidelines check for each one.

### 1. Input

Your program must get input from one of:
- The user (including events like button clicks)
- A device (sensor, camera, microphone)
- An online data stream
- A file

**In pseudocode:** `name ← INPUT()` or event handlers.

### 2. List (or Other Collection Type)

Use at least one list to store and manage data. The list must be **meaningful** – it should make the program easier to develop or maintain.

```
scores ← [85, 92, 78, 90]  // Much better than score1, score2, score3...
```

### 3. Student-Developed Procedure

You must define your own procedure with:
- A **name**
- A **return type** (if applicable)
- **One or more parameters**

```
PROCEDURE calculateAverage(grades)
{
    total ← 0
    FOR EACH grade IN grades
    {
        total ← total + grade
    }
    RETURN total / LENGTH(grades)
}
```

### 4. Algorithm Inside the Procedure

Inside that procedure, you must include an algorithm with:
- **Sequencing** – steps in order
- **Selection** – an IF statement or similar
- **Iteration** – a loop (REPEAT, FOR EACH, etc.)

```
PROCEDURE findMax(numbers)
{
    max ← numbers[1]          // sequencing
    FOR EACH num IN numbers   // iteration
    {
        IF (num > max)         // selection
        {
            max ← num
        }
    }
    RETURN max
}
```

### 5. Calls to Your Procedure

Your program must call the procedure at least once.

```
avg ← calculateAverage(scores)
```

### 6. Output

Your program must produce output based on input and functionality.

```
DISPLAY("The average is: " + avg)
```

### Rubric Checklist

```
□ Input from user/device/file
□ List used meaningfully
□ Student-developed procedure with parameters
□ Algorithm inside procedure (sequencing + selection + iteration)
□ At least one call to the procedure
□ Output based on input
```


## Building the Personalized Project Reference (PPR)

The PPR is your lifeline during the written response portion of the exam. You create it **individually** (no collaboration), and you'll have access to it when answering the prompts.

### PPR Requirements

| Requirement | Details |
|-------------|---------|
| **File format** | PDF |
| **Font size** | At least 10 pt (readable!) |
| **Comments** | Remove ALL comments from captured code |
| **Course content** | No explanations, labels, or extra text – just code |
| **Clarity** | Screen captures must be clear, not blurry |

### What Goes in the PPR

#### Section 1: Procedure

You need **two code segments**:

1. **The procedure definition** – The code that defines your procedure (name, parameters, body). This must include sequencing, selection, and iteration.
2. **A call to that procedure** – Where you use it in your program.

```
// First segment (procedure definition)
PROCEDURE countOccurrences(list, target)
{
    count ← 0
    FOR EACH item IN list      // iteration
    {
        IF (item = target)      // selection
        {
            count ← count + 1
        }
    }
    RETURN count
}

// Second segment (procedure call)
numFives ← countOccurrences(scores, 5)
```

#### Section 2: List

You need **two code segments** showing your list:

1. **Where data is stored** – How the list is created or populated
2. **Where the list is used** – Accessing or processing the data

```
// First segment – storing data
scores ← [85, 92, 78, 90]

// Second segment – using the data
total ← 0
FOR EACH score IN scores
{
    total ← total + score
}
average ← total / LENGTH(scores)
```

### How to Capture Code

- **Text-based languages:** Copy-paste into a document, save as PDF. Or use your IDE's print-to-PDF feature.
- **Block-based languages:** Take clear screenshots of your blocks. Paste into a document, save as PDF.

**Critical:** Remove all comments from the PPR. Your full program code file can have comments, but the PPR must be clean.

### Why the PPR Matters

If you don't submit your PPR by the deadline, **you won't have it on exam day** for the written responses. That's like showing up to a battle without a weapon. Don't do that.


## Creating the Video

Your video is your chance to show your program in action. It's a 60-second commercial for your code.

### Video Requirements

| Requirement | Details |
|-------------|---------|
| **Length** | No more than 1 minute |
| **File size** | No more than 30 MB |
| **Format** | .webm, .mp4, .wmv, .avi, or .mov |
| **Narration** | NOT allowed (text captions are okay) |
| **Identifying info** | None – no names, schools, locations |

### What the Video Must Show

- **Input** – Demonstrate user interaction (typing, clicking, etc.)
- **Program functionality** – Show at least one thing your program does
- **Output** – Show the result

### Video Checklist

```
□ Input clearly shown (cursor visible, text entered)
□ Program functionality demonstrated
□ Output displayed
□ No narration
□ No identifying information
□ Under 60 seconds
□ Under 30 MB
□ Correct format
```

### Sample 60-Second Outline

| Time | Content |
|------|---------|
| 0:00-0:05 | Launch program, show title screen |
| 0:05-0:20 | User enters input (e.g., types a number, clicks button) |
| 0:20-0:45 | Program processes, shows intermediate steps (if relevant) |
| 0:45-0:55 | Program displays final output |
| 0:55-0:60 | End |

### Pro Tips

- **Use screen recording software** – QuickTime (Mac), OBS (free), or built-in tools
- **Test file size** – If too big, compress or reduce resolution
- **No background music** – Only system sounds are fine
- **Text captions are your friend** – If you need to explain, add text

**Real talk:** You don't need fancy editing. Clear demonstration > flashy effects.


## Written Responses – What to Expect

On exam day, you'll have **60 minutes** to answer **two questions** containing **four prompts**. You'll have access to your PPR.

### Prompt 1: Program Design, Function, and Purpose

**What they ask:** Identify an expected user of your program. Describe one way your program's design meets the needs of this user.

**Strategy:**
- Think about who would actually use your program (students, teachers, gamers, etc.)
- Connect a specific feature to their needs
- Be specific – "The large buttons help elderly users" not "It's user-friendly"

### Prompt 2(a): Algorithm Development

**What they ask:** Consider the first iteration statement in your PPR's Procedure section. Identify how many times it executes. Describe a condition or error that would cause an infinite loop. If none exists, explain how to modify it to cause an infinite loop.

**Strategy:**
- Look at your loop – is it `REPEAT n TIMES` or `REPEAT UNTIL`?
- Count the iterations carefully
- For infinite loops: condition never becomes true, or loop variable never updates

### Prompt 2(b): Errors and Testing

**What they ask:** Consider the first procedure in your PPR. Describe a change that would cause a run-time error. Explain why.

**Strategy:**
- Think about common errors: division by zero, invalid list index, wrong data type
- Describe the change clearly
- Explain why it causes an error (e.g., "Changing this to 0 would cause division by zero")

### Prompt 2(c): Data and Procedural Abstraction

**What they ask:** You're given a procedure `isEqual(value1, value2)` that returns true if equal. Using your list from the PPR, explain in detailed steps an algorithm that uses `isEqual` to count how many times a certain value appears.

**Strategy:**
- Walk through step by step
- Include: loop through list, call `isEqual` for each element, maintain counter, output result
- Be detailed enough for someone else to write the code

### Written Response Tips

- **Be specific to your program** – Don't give generic answers
- **Use your PPR** – Reference your actual code
- **Explain step by step** – Assume the reader knows nothing
- **Don't leave blanks** – Even if unsure, write something plausible


## Academic Integrity and Citations

### Plagiarism = Score of 0

The College Board takes plagiarism seriously. If you use code, media, data, or ideas from others without attribution, you can receive a **score of 0** on the entire Create task. That's 30% of your exam score. Poof. Gone.

### What Needs Attribution

- Code from a classmate (if you collaborated, note that)
- Code from online sources (Stack Overflow, GitHub, tutorials)
- Code generated by AI tools (ChatGPT, Copilot, etc.)
- Images, sounds, or data not created by you

### How to Attribute

Add **comments** in your program code:

```
// This sorting algorithm was adapted from a Stack Overflow post by user "codeMaster99"
// Background image from Unsplash, used under free license
// AI assistance: generated the initial structure using ChatGPT
```

If your programming environment doesn't support comments, include attributions in a separate document when you capture your code.

### AI Use – Allowed but Risky

You **may** use generative AI tools as supplementary resources for understanding concepts, assisting in code development, and debugging. BUT:

- You are responsible for understanding any AI-generated code
- You must be able to explain it on the exam
- AI can produce biased, inefficient, or buggy code
- You still need to cite it!

**AI is like asking a friend for help – it's fine, but you still need to do the work.**


## Submission Process and Deadlines

### AP Digital Portfolio

You'll submit all three components through the AP Digital Portfolio. Your teacher will give you access.

### Final Submission Checklist

```
□ Program code PDF – includes all code, with attribution comments
□ Video – meets length, size, format, shows input/functionality/output
□ PPR – PDF with two procedure segments and two list segments
□ No comments in PPR
□ Font size ≥10 pt in PPR
□ Clear screenshots (not blurry)
□ No identifying information anywhere
□ All three components marked as "final"
```

### Deadlines

The final submission deadline is posted on AP Central (usually late April/early May). **All three components must be submitted as final by that date.** Only files marked "final" are sent for scoring.

**Warning:** If you don't submit your PPR by the deadline, you won't have it on exam day. That's a disaster. Set reminders. Pester your teacher. Do whatever it takes.


### Key Takeaways

| Component | Requirements | Collaboration? |
|-----------|--------------|----------------|
| **Program code** | Input, list, procedure (with params), algorithm (seq+sel+iter), calls, output | ✅ Yes |
| **Video** | ≤1 min, ≤30 MB, shows input/functionality/output, no narration | ❌ No |
| **PPR** | Procedure def + call, list storage + use, ≥10pt, no comments | ❌ No |
| **Written responses** | Answer four prompts using PPR | N/A |

### Common Mistakes to Avoid

- **List not used meaningfully** – If you never access or process the list, it's just decoration
- **Procedure without parameters** – Makes abstraction harder to demonstrate
- **Algorithm missing selection OR iteration** – Both are required
- **PPR with comments** – Remove them!
- **Video with narration** – Not allowed
- **Missing deadline** – The ultimate tragedy

### Success Checklist

```
□ Chose a project that interests me
□ Program includes all required elements
□ List is used meaningfully
□ Procedure has parameters and contains selection + iteration
□ Code is well-commented with attributions
□ PPR is clean, readable, and submitted
□ Video is clear and meets all specs
□ I understand my code well enough to explain it
□ I've practiced written responses
□ All components submitted as final before deadline
```


## 🎮 Final Challenge

Before you submit, ask yourself:

1. Can I explain every line of my code to a stranger?
2. Does my list actually make the program simpler?
3. Does my procedure have a clear purpose and useful parameters?
4. Does the algorithm inside my procedure include both selection AND iteration?
5. Is my video under 60 seconds and free of narration?
6. Is my PPR readable (≥10pt font, no comments, clear screenshots)?
7. Have I cited all sources?
8. Did I submit everything as final?

If you answered "yes" to all, you're ready to crush this task.


**You've got this!** The Create Task is your chance to show what you've learned. It's not just an assessment – it's your portfolio piece. Now go crush that AP CSP exam – you've got all the tools, and I'm rooting for you!