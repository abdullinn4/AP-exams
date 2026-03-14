## Building Together - Collaboration & Design

So you're ready to build something awesome with code. But before you start typing away, there's something you need to know: the best programs aren't written by someone sitting alone in a dark room, chugging energy drinks and typing furiously at 3 a.m. (Okay, sometimes that happens, but it's not the norm.) Real-world software—the apps you use every day, the websites you visit, the games you play—is built by teams of people working together, following a process, and actually thinking about the humans who will use their stuff.

This module is all about that process. We're going to look at what a "computing innovation" really is, why collaboration is way more than just "group work," and how ideas transform into real programs that solve problems and bring joy. By the time you finish this, you'll have a solid foundation for not only the AP exam but also for any coding project you tackle in the future.


## What Even Are We Building?

Before we talk about *how* to build things, we need to understand what counts as a "computing innovation." The College Board defines it as anything that includes a program as an integral part of its function. That program is the set of instructions telling the hardware what to do. So a computing innovation could be:

- **Physical devices** like a self-driving car, a smart thermostat, a **Roomba**, an Apple Watch, or even a fitness tracker. These are tangible things you can hold, but they're powered by code.
- **Non‑physical software** like Instagram, Photoshop, Spotify, TikTok, or your favorite video game. You can't touch them, but they run on computers and do amazing things.
- **Non‑physical concepts** like e‑commerce, social media, cloud computing, or streaming services. Wait, a concept? Yep! E‑commerce isn't one app—it's the whole idea of buying and selling stuff online, made possible by millions of programs working together. Deep, right?

So when you hear "computing innovation" on the exam, think broadly. It's not just apps—it's the whole ecosystem.


## Collaboration: It's Not Just "Group Work"

Here's a truth bomb: the best tech in the world isn't built by a lone genius in a basement. It's built by teams of people with different backgrounds, skills, and perspectives. Why does that matter? Imagine a team of five people who all grew up in the same town, went to the same schools, and have the same hobbies. They build an app to help people find local events. Chances are, their app will reflect their own experiences—maybe it works great for people like them, but it might totally miss the mark for someone from a different culture, age group, or economic background. If they'd included a diverse team—people of different ages, races, genders, life experiences—they would have caught those blind spots before the app ever launched. Diverse perspectives = fewer blind spots = better products.

**Real-life example: Apple's Health app** – When Apple first released its Health app in 2014, it had a feature for tracking blood alcohol content but **no period tracker** for menstrual cycles. Critics pointed out that a team with more women would likely have noticed that glaring omission. Apple eventually added period tracking, but it took years. This is a classic case of how lack of diversity leads to biased innovations.

This isn't just about being nice; it's about building stuff that actually works for everyone. The College Board emphasizes that collaboration helps avoid bias in the development of computing innovations. Bias can sneak in through the data you use, the algorithms you write, or even the assumptions you make about your users. Having a team that reflects a variety of viewpoints is your best defense.

Now, collaborating isn't as simple as just splitting up work and meeting back later. That's just "group work." True collaboration means constantly sharing ideas, giving feedback, and building on each other's strengths. And to do that, you need the right tools. Online tools like GitHub (think Google Docs for code) let programmers share code, track changes, and review each other's work. Google Docs or Notion are great for planning documents and design notes. Slack or Discord keep the conversation going, even when you're not in the same room. And tools like Trello help you see who's doing what, so nothing falls through the cracks.

One of the most powerful collaboration techniques is **pair programming**. Two people, one computer. Let me show you how it works:

```
┌─────────────────────────────────────────────────────────────┐
│                      ONE COMPUTER                            │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │   function calculateAverage(grades) {                 │  │
│  │     if (grades.length === 0) return 0;                │  │
│  │     let total = 0;                                     │  │
│  │     for (let i = 0; i < grades.length; i++) {         │  │
│  │       total = total + grades[i];                       │  │
│  │     }                                                   │  │
│  │     return total / grades.length;                      │  │
│  │   }                                                     │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│    ▲                        ▲                               │
│    │                        │                               │
│    │                        │                               │
│    │                        │                               │
│  ┌─┴──────────┐          ┌─┴──────────┐                    │
│  │  DRIVER    │          │ NAVIGATOR  │                    │
│  │            │          │            │                    │
│  │ • Types    │          │ • Reviews  │                    │
│  │ • Focuses  │◄────────►│ • Spots    │                    │
│  │   on now   │  "What   │   errors   │                    │
│  │            │   if we  │ • Big      │                    │
│  │            │   try    │   picture  │                    │
│  │            │   this?" │            │                    │
│  └────────────┘          └────────────┘                    │
└─────────────────────────────────────────────────────────────┘
```

The Driver types the code, focusing on the immediate task. The Navigator watches like a hawk—spotting typos, thinking about the big picture, and asking "what if we did it this way instead?" Then you switch roles. It sounds a little awkward at first, but it actually catches mistakes instantly, keeps both people focused, and spreads knowledge around the team. You'll be surprised how much faster you learn when you're explaining your thinking out loud.

But let's be real: working with people can be harder than working with computers. Computers do exactly what you tell them (for better or worse). Humans? They have feelings, opinions, and bad days. That's why the College Board lists four interpersonal skills that effective teams practice:

- **Communication** – Saying what you mean clearly, asking questions when you're confused, and not assuming people can read your mind.
- **Consensus building** – Getting everyone to agree on a path forward, even when you have different opinions. Sometimes that means compromising.
- **Conflict resolution** – When things get tense (and they will), fixing it without making it worse. Focus on the problem, not the person.
- **Negotiation** – "I really want feature X, but we only have time for feature Y. What if we do a simpler version of X now and add the fancy stuff later?"

These skills will help you way beyond this class—college group projects, future jobs, even just dealing with roommates. Pay attention to this stuff.


## How Stuff Actually Gets Built

There's no single "right" way to build software. Different projects call for different approaches. But most processes include four common phases. Here's how they flow:

```
                     ┌─────────────────┐
                     │  INVESTIGATE    │
                     │  • Who are users?│
                     │  • What problem? │
                     │  • Should we build?│
                     └────────┬────────┘
                              ↓
                     ┌─────────────────┐
                     │    DESIGN       │
                     │  • Sketch screens│
                     │  • Plan features │
                     │  • Structure code│
                     └────────┬────────┘
                              ↓
                     ┌─────────────────┐
                     │   PROTOTYPE     │
                     │  • Quick version │
                     │  • Test ideas    │
                     │  • Get feedback  │
                     └────────┬────────┘
                              ↓
                     ┌─────────────────┐
                     │     TEST        │
                     │  • Find bugs    │
                     │  • Watch users  │
                     │  • Note problems│
                     └────────┬────────┘
                              ↓
                     ┌─────────────────┐
                     │    REFLECT      │
                     │  • What worked? │
                     │  • What didn't? │
                     │  • Plan changes │
                     └────────┬────────┘
                              ↓
                     ┌─────────────────┐
                     │  BACK TO DESIGN │
                     │  (if needed)    │
                     └─────────────────┘
                         🔄 ITERATE
```

You might go through these phases in order, but often you'll loop back. That's where two important concepts come in: **iterative** and **incremental** development.

**Iterative** means you go in circles (in a good way). You build a little, get feedback, improve, and repeat. You might revisit earlier phases multiple times as you learn new things. For example, you might start with a rough prototype, show it to users, realize they're confused, go back to the design phase, sketch a better interface, build a new prototype, and test again. Each cycle (iteration) makes the product better.

**Incremental** means you build in pieces. You get one small feature working perfectly, then add the next, then the next. Each piece adds value on its own. Think of it like building a car:

```
         ┌─────────────────────────────────────────┐
         │         INCREMENTAL BUILDING            │
         ├─────────────────────────────────────────┤
         │  Step 1:     🚗  Chassis + wheels       │
         │              (rolls, but no engine)     │
         │                                          │
         │  Step 2:     🚙  + Engine                │
         │              (moves, but no seats)       │
         │                                          │
         │  Step 3:     🚘  + Seats                 │
         │              (driveable, but no doors)   │
         │                                          │
         │  Step 4:     🚗  + Doors, paint          │
         │              (finished car!)             │
         └─────────────────────────────────────────┘
```

Real-world example: building a "Homework Helper" app. Incrementally, you'd first get the part that just lists assignments working. Then you'd add due dates. Then notifications. Then a study timer. Iteratively, you'd build a super simple version, show it to friends, realize they're confused, redesign the whole layout, build a better version, show them again, tweak some more. Most real projects use both approaches—build pieces incrementally, but iterate on each piece based on feedback.

**Another real‑life example: Instagram's development** – When Kevin Systrom and Mike Krieger built the first version of Instagram, they started with a very simple app called "Burbn" that let people check in, post plans, and share photos. But after testing with users, they realized the photo‑sharing feature was the only thing people really used. So they **iterated**: stripped out almost everything and focused entirely on photos, filters, and social sharing. The result? Instagram exploded to millions of users in just a few months. They didn't build the full vision at once; they iterated based on feedback.


## Designing Stuff Humans Will Actually Use

Before you write a single line of code, you need to understand what you're building and for whom. This is called **investigation**. You need to figure out:

- What are the constraints? (Time? Money? Platform? Your own skill limits?)
- What do users actually care about?
- What would make them love your program?

How do you gather that information? Here are the main methods and how they compare:

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER RESEARCH METHODS                         │
├─────────────┬───────────────────┬──────────────┬────────────────┤
│   METHOD    │    WHAT YOU DO    │    PROS      │     CONS       │
├─────────────┼───────────────────┼──────────────┼────────────────┤
│             │                   │ Quick        │ Can miss       │
│  SURVEYS    │ Ask many people   │ Cheap        │ deep insights  │
│             │ online questions  │ Lots of data │                │
├─────────────┼───────────────────┼──────────────┼────────────────┤
│             │ Watch people try  │ Finds real   │ Takes time     │
│  USER       │ to use a sketch   │ problems     │ Need users     │
│  TESTING    │ or prototype      │ you missed   │ to watch       │
├─────────────┼───────────────────┼──────────────┼────────────────┤
│             │ One-on-one deep   │ Rich details │ Time-          │
│ INTERVIEWS  │ conversations     │ Understand   │ consuming      │
│             │ about needs       │ the "why"    │ Small sample   │
├─────────────┼───────────────────┼──────────────┼────────────────┤
│   DIRECT    │ Watch people in   │ See what     │ People may     │
│ OBSERVATION │ their natural     │ they ACTUALLY│ act differently│
│             │ environment       │ do, not say  │ when watched   │
└─────────────┴───────────────────┴──────────────┴────────────────┘
```

Here's what a typical user testing session might look like:

```
┌─────────────────────────────────────────────────────────────┐
│                    USER TESTING SESSION                      │
│                                                              │
│  ┌─────────────────────────────────────┐                    │
│  │                                     │                    │
│  │   [Paper prototype sketch]          │                    │
│  │   ┌──────────────────┐              │                    │
│  │   │   LOGIN          │              │  ┌──────────────┐  │
│  │   │                  │              │  │  RESEARCHER  │  │
│  │   │  [_______]       │  ───taps───►│  │              │  │
│  │   │  [_______]       │              │  │  • Takes notes│  │
│  │   │                  │              │  │  • Asks "What │  │
│  │   │  [LOG IN]        │              │  │    are you    │  │
│  │   │                  │              │  │    thinking?" │  │
│  │   └──────────────────┘              │  │  • Records    │  │
│  │                                     │  │    hesitation │  │
│  │       USER                           │  └──────────────┘  │
│  │   "Hmm... where do I                  │                    │
│  │    click to sign up?"                 │                    │
│  └─────────────────────────────────────┘                    │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  OBSERVATIONS:                                        │   │
│  │  • User hesitated for 5 seconds on login screen       │   │
│  │  • Tried clicking on logo thinking it was a button    │   │
│  │  • Said "I expected 'Sign Up' to be at the top"       │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

Once you've gathered all that information, you write down what your program must do. These are your **requirements**. For example: "Users must be able to create an account with email and password." Or "The app must show a countdown to the next assignment deadline."

A **specification** (or spec) is a more detailed document that says exactly how the program will meet those requirements. For the account creation requirement, the spec might say: "The sign-up screen will have fields for email, password, and password confirmation. When the user clicks 'Sign Up,' the system will validate the email format, check that passwords match, and create a new user record in the database. If successful, the user is logged in and taken to the home screen. If not, an error message appears." See the difference? Requirements say *what*. Specs say *how*.

Now you're ready for the **design phase**. This is where you figure out the structure and look of your program. Typical design activities include:

- **Brainstorming** – Throw out ideas—crazy ones, practical ones, "what if we..." ideas. No judgment yet. You never know what might spark a great solution.
- **Planning and storyboarding** – Sketch out the user's journey through your app. What screens do they see? In what order? What do they click? Think of it like a comic strip of your app.
- **Modular organization** – Break the program into pieces. "The login module handles authentication. The data module handles saving and loading. The UI module handles what the user sees." This makes the code easier to write, test, and maintain.
- **Interface diagrams** – Rough sketches of what the screens will look like. Where do buttons go? What information is most important? What does the user see first?
- **Developing a testing strategy** – How will you know your program works? What test cases will you run? What inputs will you try? What should the outputs be?

Pro tip: fixing problems on paper is WAY cheaper than fixing them after you've written 1000 lines of code. Design first, code second.


## Write It Down! (Documentation)

**Documentation** is written explanation of what your code does and how it works. It's for humans, not computers. **Comments** are notes you put right in your code. The computer ignores them, but other programmers—including Future You—will thank you.

Here's a quick example in **AP CSP pseudocode** (the language used on the exam):

```
PROCEDURE calculateAverage(grades)
{
    // This procedure calculates the average of a list of numbers
    // It returns 0 if the list is empty to avoid division by zero
    IF (LENGTH(grades) = 0)
    {
        RETURN 0
    }
    total ← 0
    FOR EACH value IN grades
    {
        total ← total + value
    }
    RETURN total / LENGTH(grades)
}
```

Why bother with comments? Because in six months, you will absolutely forget why you wrote something a certain way. Teammates need to understand your code to work with it. Finding bugs is way easier when you've explained what should happen. And when you need to change something later, documentation tells you what it originally did.

Some programming environments (especially block-based ones like Scratch or early App Inventor) don't let you write comments directly in the code. In that case, keep a separate document explaining your code. Use clear names for variables and blocks so the code explains itself. Draw diagrams showing how things connect. The goal is the same: make your thinking visible to others (and to yourself).


## Don't Be a Code Thief

Here's a reality check: everyone uses code they didn't write. That's totally normal! That's why libraries and open source exist. You don't need to reinvent the wheel every time you program. But you absolutely must give credit where credit is due.

**Bad:** Copy-pasting code from Stack Overflow and pretending you wrote it.  
**Good:** Adding a comment: "The sorting algorithm below was adapted from a Stack Overflow post by user CoolCoder42."

How to do it right:

- In your code comments, say where the code came from.
- Include the original author's name if you know it.
- If you adapted it (changed it), say that.

Why this matters:

- It's literally the law—copyright is real.
- It's honest. The original author deserves recognition.
- Your teacher will check for plagiarism. Seriously, they have tools.

And on the AP Create task, if you use uncredited code, you can get a zero on the whole project. Like, 0% of 30% of your exam score. That's a guaranteed 3.5 on the 1–5 scale—just kidding, it's terrible. Don't risk it.

**Real-life example: The Minecraft incident** – When Microsoft acquired Minecraft, they discovered that some code in the game had been copied from open‑source projects without proper attribution. They had to go back, rewrite those parts, and give credit—costing time and money. Proper attribution from the start would have avoided the whole mess.


## Module 1 Summary

Let's wrap up what we've covered:

- **Computing innovations** come in three flavors: physical devices, non‑physical software, and non‑physical concepts.
- **Collaboration** with diverse teammates makes products better and helps avoid bias. (Remember the Apple Health app story!)
- **Talk to users** before building—they'll tell you what actually matters. Methods like surveys, interviews, and user testing are your friends.
- The **development process** includes investigating, designing, prototyping, and testing—and you can go through these phases iteratively and incrementally. (Instagram's pivot is a perfect example.)
- **Design before coding**—sketch, plan, organize.
- **Write comments** and documentation in AP CSP pseudocode because Future You will be grateful.
- **Credit your sources**—plagiarizing code is both wrong and stupid when it could cost you 30% of your exam score. (Think of the Minecraft mess!)

You now have a solid foundation for understanding how real software gets made. These fundamentals will help you become a more thoughtful creator and critical thinker. You'll be ready for AP exam questions that ask you to explain design choices, describe the benefits of collaboration, or identify effective development strategies.