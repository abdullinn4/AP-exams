## Big Idea 5 Smash Time – Impact of Computing

Welcome to the Impact of Computing Unit Review! This is where we step back from the code and ask the really important questions: **What happens when technology meets real people?** 

You've learned how to build apps, store data, and create algorithms. But with great power comes great responsibility. Every line of code you write affects someone's life – sometimes in ways you never intended.

Think of this review as your **ethical compass**. We're going to explore the good, the bad, and the ugly of computing. By the end, you'll understand why your future users will either thank you or curse your name. Let's make sure it's the first one!


## Beneficial and Harmful Effects – Two Sides of the Same Coin

### The Innovator's Dilemma

Every computing innovation starts with good intentions. Someone says, "Wouldn't it be cool if..." and builds something awesome. But once it's out in the world, it takes on a life of its own.

**Real-life example:** GPS was developed for military navigation. Now it powers:
- Uber and Lyft (awesome!)
- Pokemon Go (fun!)
- Stalkers tracking victims (terrifying!)
- Location-based advertising (annoying!)

The creators didn't imagine any of these. Well, maybe they imagined Uber, but definitely not the creepy stuff.

### One Innovation, Two Views

The same feature can be both a blessing and a curse:

| Innovation | Beneficial | Harmful |
|------------|------------|---------|
| **Facial recognition** | Find missing children, unlock your phone | Government surveillance, false arrests |
| **Targeted ads** | See products you actually want | Your data sold without consent, manipulation |
| **Social media algorithms** | Discover new interests | Echo chambers, addiction, anxiety |

**Real-life example:** When Instagram added the "Like" button, they probably thought it was harmless. They didn't predict it would become a social currency that makes teens feel worthless if they don't get enough. Same feature, completely different impacts.

### Unintended Uses – The Wild West of Tech

The World Wide Web was created for scientists to share research papers. Now it's where you watch cat videos, argue with strangers, and order pizza. Tim Berners-Lee probably never imagined someone would use his invention to post a video of a squirrel waterskiing. But here we are.

**Machine learning** was designed to find patterns. Now it's used to:
- Recommend movies (cool!)
- Deny loans based on biased data (not cool!)
- Predict crime in over-policed neighborhoods (problematic!)
- Generate deepfakes (dangerous!)

### The Programmer's Dilemma

**Responsible programmers try to anticipate misuse.** Before launching a product, ask:
- How could this be weaponized?
- Who might be harmed?
- What safeguards can we build?

But here's the truth: **you cannot predict everything.** Human creativity (and maliciousness) is infinite. You can try, but you'll never catch it all. That's not an excuse to be careless – it's a reason to be humble.


## The Digital Divide – Who Gets Left Behind?

### What Is It?

The **digital divide** is the gap between those who have access to technology and those who don't. It's not just about having a computer – it's about having reliable Internet, digital skills, and the ability to participate in our increasingly online world.

```
┌─────────────────────────────────────────────────────┐
│              THE DIGITAL DIVIDE LENS                 │
├──────────────┬──────────────────────────────────────┤
│  Factor      │  Example                              │
├──────────────┼──────────────────────────────────────┤
│  Socioeconomic │ Rich kid with laptop vs. poor kid   │
│               │ with only a phone (maybe)            │
├──────────────┼──────────────────────────────────────┤
│  Geographic   │ City with fiber vs. rural with DSL   │
├──────────────┼──────────────────────────────────────┤
│  Demographic  │ Young digital native vs. senior      │
│               │ who can't use video chat             │
├──────────────┼──────────────────────────────────────┤
│  Global      │ US/Europe vs. parts of Africa where   │
│               │ 80% lack Internet                    │
└──────────────┴──────────────────────────────────────┘
```

### Why It Matters

**Real-life example:** During COVID-19, millions of students couldn't do remote learning because they had no Internet at home. School districts parked Wi-Fi buses in parking lots. Kids did homework in McDonald's parking lots. This isn't just inconvenient – it's an equity crisis.

The digital divide raises three big issues:

| Issue | What It Means |
|-------|---------------|
| **Equity** | Is it fair that some kids can't do homework because of where they live? |
| **Access** | How do you apply for jobs, healthcare, or government services if you're offline? |
| **Influence** | If you're not online, your voice isn't heard. Democracy suffers. |

### Who Can Fix It?

- **Individuals:** Donate old computers, teach digital skills
- **Organizations:** Provide low-cost Internet, build community networks
- **Governments:** Fund broadband infrastructure, subsidize access

**Real-life example:** Libraries are unsung heroes of the digital divide. They provide free Internet, computers, and training. Next time you're in one, thank a librarian!


## Computing Bias – When Algorithms Discriminate

### Where Bias Comes From

Computers aren't inherently biased. They're mirrors. They reflect the biases of their creators and their data.

**Two sources of bias:**

1. **Biased algorithms** – Programmers make choices that embed bias (e.g., using zip code as a proxy for race)
2. **Biased data** – Training data reflects historical inequalities

### Real-Life Horror Stories

**Facial recognition:** Studies show many systems have higher error rates for people with darker skin, especially women. Why? Because the training data was mostly white male faces. The algorithm learned from biased data and became a digital racist.

**Hiring algorithms:** Amazon built an AI to screen resumes. It learned to penalize resumes that included the word "women's" (like "women's chess club captain") because past hiring data favored men. Amazon scrapped it, but the damage was done.

**Healthcare algorithms:** A widely used algorithm predicted patient risk using healthcare costs as a proxy for health needs. But less money is spent on Black patients even when they're equally sick. Result? The algorithm systematically underestimated how sick Black patients were and denied them care.

**Criminal justice:** Algorithms like COMPAS predict recidivism. ProPublica found it falsely predicted Black defendants would re-offend at twice the rate of white defendants. The algorithm didn't use race – it used zip code and employment history, which are proxies for race.

### Bias Creeps In Everywhere

```
┌─────────────────────────────────────────────────────┐
│           STAGES WHERE BIAS CAN ENTER               │
├─────────────────────────────────────────────────────┤
│  Problem definition: What are we even trying to     │
│                     solve? (crime vs. policing)      │
├─────────────────────────────────────────────────────┤
│  Data collection: What data is included? Left out?  │
├─────────────────────────────────────────────────────┤
│  Data labeling: How do we define categories?        │
├─────────────────────────────────────────────────────┤
│  Feature selection: Which variables do we use?      │
├─────────────────────────────────────────────────────┤
│  Model design: What algorithm do we choose?         │
├─────────────────────────────────────────────────────┤
│  Testing: Who is in the test set?                   │
├─────────────────────────────────────────────────────┤
│  Deployment: How are results used?                  │
└─────────────────────────────────────────────────────┘
```

### Fighting Bias

- **Diverse teams** – Different perspectives catch different blind spots
- **Audit algorithms** – Test on different groups
- **Diverse data** – Make sure training data represents everyone
- **Transparency** – Be open about limitations
- **Fairness constraints** – Build equity into the algorithm

**Real-life example:** Joy Buolamwini, a researcher at MIT, discovered facial recognition bias and created the Algorithmic Justice League to fight it. One person can make a difference!


## Crowdsourcing – Power in Numbers

### What Is Crowdsourcing?

Getting input or information from a large number of people via the Internet. Instead of one expert, you get millions of regular people.

### Types of Crowdsourcing

| Type | Description | Example |
|------|-------------|---------|
| **Citizen science** | Public participates in research | Birdwatchers logging sightings for eBird |
| **Crowdfunding** | Many people fund a project | Kickstarter, GoFundMe |
| **Crowdsourced data** | Users contribute information | Waze traffic reports |
| **Crowdsourced knowledge** | Users create content | Wikipedia |

### Citizen Science – Real People, Real Science

**Foldit:** Gamers fold proteins. Scientists couldn't figure out an AIDS-related protein for 15 years. Gamers solved it in 10 days. They were listed as co-authors in a scientific paper. In *Nature*. The most prestigious journal in the world.

**Galaxy Zoo:** Astronomers had millions of galaxy images. They asked the public to classify them. Volunteers not only did the work, they discovered entirely new types of galaxies that computers missed.

**Why it works:**
- **Scale** – Millions of people can contribute
- **Diversity** – Different eyes spot different things
- **Human pattern recognition** – Computers are good, but humans are better at some tasks

### Crowdfunding – Bypassing the Gatekeepers

Instead of convincing one rich investor, you convince thousands of regular people to give $20 each.

**Kickstarter success stories:**
- Pebble smartwatch raised $10 million (they asked for $100,000)
- Exploding Kittens card game raised $8.7 million
- Countless indie films, albums, and inventions

**Kiva:** Microloans to entrepreneurs in developing countries. You lend $25, they pay it back, you lend again. Over $1.5 billion lent with 95% repayment.


## Safe Computing – Protecting Yourself and Others

### PII – Personally Identifiable Information

Any data that can identify you:

| Category | Examples |
|----------|----------|
| **Direct IDs** | Name, SSN, passport number |
| **Contact** | Address, email, phone |
| **Biometric** | Fingerprints, face scan |
| **Financial** | Credit card numbers, bank accounts |
| **Medical** | Health records, insurance |
| **Digital** | IP address, cookies, device IDs |
| **Location** | GPS coordinates, places visited |

**Once it's online, it's never truly gone.** You can delete a post, but someone might have screenshotted it. The Internet Archive might have saved it. Copies exist everywhere.

### Authentication – Proving You're You

**Single factor:** Password only (weak)

**Multifactor:** Two or more of:
- Something you **know** (password)
- Something you **have** (phone, security key)
- Something you **are** (fingerprint, face)

**Real-life example:** When you log into your bank, they ask for password AND a code sent to your phone. That's MFA. Even if someone steals your password, they can't get in without your phone.

### Encryption – Secret Codes for Grown-Ups

**Encryption** scrambles data so only authorized people can read it.

- **Symmetric key:** Same key locks and unlocks (like a house key)
- **Public key:** Public key locks, private key unlocks (like a mailbox with a slot – anyone can put mail in, only you can open it)

### Threats – The Bad Guys

| Threat | What It Is | Example |
|--------|------------|---------|
| **Phishing** | Fake emails/websites to steal info | "Your bank needs you to verify your account" (it's a scam) |
| **Keylogging** | Recording keystrokes | Hidden software captures your passwords |
| **Rogue access point** | Fake Wi-Fi | "Free CoffeeShop Wi-Fi" run by a hacker |
| **Malware** | Malicious software | Viruses, ransomware, spyware |
| **Social engineering** | Tricking people | "Hi, I'm from IT, I need your password" |

### Protecting Yourself

1. **Strong passwords** – Long, random, unique for each account
2. **MFA** – Turn it on everywhere
3. **Software updates** – Those annoying notifications? They patch security holes
4. **Check permissions** – Why does a flashlight app need your contacts?
5. **Think before clicking** – If it seems too good to be true, it probably is


## Legal and Ethical Concerns

### Intellectual Property – Who Owns What?

When you create something, it's yours. That's **intellectual property**.

- **Copyright** – Protects creative works (code, art, music, writing)
- **Plagiarism** – Using someone's work without credit (academic death sentence)

### Legal Ways to Share

| License | What It Allows |
|---------|----------------|
| **All rights reserved** | Nothing without permission |
| **Creative Commons** | Others can share with conditions (attribution, non-commercial, etc.) |
| **Open source** | Code freely available, can modify and redistribute |
| **Open access** | Research free for everyone to read |

**Real-life example:** Linux is open source. Thousands of developers have contributed. It runs most of the Internet, Android phones, and even the International Space Station. All because people shared their code.

### Ethical Responsibilities

- **Don't harm people** – Cyberbullying, doxxing, and harassment aren't just mean – they're wrong
- **Consider consequences** – Your app could be used in ways you never imagined
- **Be transparent** – Tell users what data you're collecting and why
- **Give credit** – Cite your sources, acknowledge contributions


## Putting It All Together – A Complete Example

**Scenario:** A student creates a study app that uses facial recognition to track whether users are actually studying or just scrolling social media.

**Beneficial effects:** Helps students focus, provides data on study habits, gamifies learning.

**Harmful effects:** Privacy concerns, potential for data misuse, facial recognition bias against darker skin tones.

**Digital divide:** Only works on newer phones with good cameras, excluding students with older devices.

**Bias:** If trained mostly on light-skinned faces, may not work well for all users.

**Crowdsourcing:** Could add a feature where users share study tips (citizen science for learning).

**Safe computing:** Needs strong encryption for user data, clear privacy policy, MFA for accounts.

**Ethical concerns:** Should the app sell study habit data? Should it share data with parents? Schools?

**Responsible programming:** The student must consider all these factors before launching. One person's project could affect thousands.


## Unit Summary Cheat Sheet

| Concept | Key Takeaway |
|---------|--------------|
| **Beneficial effects** | What the innovation was designed to do |
| **Harmful effects** | Negative consequences, often unintended |
| **Dual effects** | Same feature can be both good and bad |
| **Unintended uses** | People will use your creation in ways you never imagined |
| **Digital divide** | Unequal access to technology based on socioeconomic, geographic, demographic factors |
| **Computing bias** | Algorithms reflect biases in data or design |
| **Bias sources** | Data collection, problem definition, feature selection, testing |
| **Mitigating bias** | Diverse teams, auditing, diverse data, transparency |
| **Crowdsourcing** | Getting input from many people via Internet |
| **Citizen science** | Public participates in scientific research |
| **Crowdfunding** | Many people fund a project |
| **PII** | Personally identifiable information – protect it! |
| **Authentication** | Proving identity (passwords, MFA, biometrics) |
| **Encryption** | Encoding data to prevent unauthorized access |
| **Threats** | Phishing, keylogging, rogue access points, malware |
| **Intellectual property** | Your creations are yours; respect others' |
| **Open source** | Code freely available to use, modify, share |
| **Responsible programming** | Consider consequences, protect users, give credit |


## Final Challenge

You're building a new social media app for teens. It allows sharing photos, messaging, and location check-ins.

1. List three potential beneficial effects.
2. List three potential harmful effects.
3. What digital divide issues might arise?
4. How could bias creep into your app?
5. What security measures would you implement?
6. How would you handle intellectual property (user photos, code libraries)?

Think about it. (There's no single right answer – that's the point! Real-world ethics are messy.)