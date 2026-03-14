## Safe & Responsible Computing – Ethics, Law & Security

You've learned to write code, understand the internet, and see how technology shapes society. But with great power comes great responsibility. Every line of code you write, every app you build, every piece of data you collect has ethical and legal implications. And in a world where hackers, scammers, and data brokers are constantly at work, knowing how to protect yourself and others isn't optional—it's essential.

Think about your own digital life. How many accounts do you have? How many passwords? How many times have you clicked "I agree" without reading a single word of the terms of service? Do you know which apps are tracking your location right now? What happens to your data when you die? Who owns the photos you post? If someone steals your identity, how long would it take you to notice?

This module covers the practical and philosophical sides of computing. You'll learn about privacy—what companies know about you and how they use it. You'll learn about security—how to protect yourself from hackers, scammers, and identity thieves. And you'll learn about ethics and law—your rights and responsibilities as a creator and user of technology.

Let's dive in.



## Privacy – The Data Trail You Leave Behind

### Personally Identifiable Information (PII)

**Personally identifiable information (PII)** is any information that can be used to distinguish or trace an individual's identity. It's the digital fingerprint you leave everywhere you go online.

PII falls into several categories:

| Category | Examples |
|----------|----------|
| **Direct identifiers** | Full name, Social Security number, passport number, driver's license number |
| **Contact information** | Home address, email address, phone number |
| **Demographic data** | Age, date of birth, race, gender, ethnicity, marital status |
| **Biometric data** | Fingerprints, facial recognition data, voice prints, iris scans |
| **Financial information** | Credit card numbers, bank account details, income, credit score |
| **Medical information** | Health records, insurance information, prescriptions, diagnoses |
| **Online identifiers** | IP address, cookies, device IDs, browsing history, search history |
| **Location data** | GPS coordinates, places visited, routes taken, time spent at locations |
| **Behavioral data** | Purchase history, preferences, interests, social media activity |

### How Your Information Is Collected

**Search engines** record and maintain a history of searches made by users. Google knows what you searched for five years ago. It knows what you were curious about at 3 AM. It knows what questions you were too embarrassed to ask anyone else. This data is used to personalize results, target ads, and train AI.

**Websites** record and maintain a history of individuals who have viewed their pages. Every time you visit a site, they know:
- When you arrived
- How long you stayed
- What pages you viewed
- What you clicked on
- What device you used
- Where you came from (the previous site)
- Your approximate location

**Devices, websites, and networks** collect information about a user's location. Your phone tracks where you go, how you get there, and how long you stay. Google Maps shows you a timeline of everywhere you've been—even places you forgot about.

**Apps** collect data constantly. That simple flashlight app you downloaded? It probably asked for permission to access your contacts, location, and camera. Why does a flashlight need your contacts? It doesn't. But it collects the data anyway, and sells it.

**Social media platforms** collect everything you post, like, share, and even what you type but don't post. Facebook has conducted experiments where they manipulated users' news feeds to study emotional responses—without telling anyone.

### How Your Information Is Used

**Technology enables the collection, use, and exploitation of information about, by, and for individuals, groups, and institutions.** This isn't inherently evil—it's just what happens when data has value.

**Search engines** use search history to suggest websites and for targeted marketing. You search for "new running shoes," and suddenly ads for Nike, Adidas, and local running stores follow you around the internet.

**Disparate personal data can be aggregated to create knowledge about an individual.** Alone, your location history might not reveal much. Alone, your purchase history might not reveal much. Alone, your social media likes might not reveal much. But together, they paint a detailed picture:

- You go to the gym three times a week → you're health-conscious
- You buy organic food → you have disposable income
- You like pages about parenting → you probably have young children
- You search for minivans → you might be in the market for a new car
- You visit websites about diabetes → you might have a health condition

Insurance companies would love this data. Employers would love this data. Marketers would love this data. And they all try to get it.

**PII and other information placed online can be used to enhance a user's online experiences.** This is the positive side:
- Websites remember your preferences
- Shopping sites recommend products you might actually want
- Maps remember your home and work addresses
- Streaming services suggest shows you'll probably like

**PII stored online can be used to simplify making online purchases.** One-click ordering is incredibly convenient. It's also incredibly dangerous if someone gains access to your account.

### The Risks

**Commercial and governmental curation of information may be exploited if privacy and other protections are ignored.** Companies sell your data to data brokers, who combine it with other data and sell it again. Governments may access it without your knowledge through warrants, subpoenas, or secret orders. Data brokers exist solely to collect, aggregate, and sell information about people—often without their knowledge or consent.

**Information placed online can be used in ways that were not intended and that may have a harmful impact.** That funny photo you posted in high school? A potential employer might find it years later and decide not to hire you. That angry comment you made during a heated online argument? It could resurface when you're running for student body president—or for public office.

**PII can be used to stalk or steal the identity of a person or to aid in the planning of other criminal acts.** Identity theft is real and devastating:
- Someone with your Social Security number can open credit cards in your name
- They can take out loans, buy cars, and ruin your credit
- They can file tax returns and steal your refund
- They can get medical treatment using your insurance
- It can take years and thousands of dollars to recover

**Once information is placed online, it is difficult to delete.** You can delete a post, but:
- Someone might have already screenshotted it
- The Internet Archive might have saved it
- Google might have cached it
- It might have been shared and re-shared
- Copies exist on servers you can't access

**Programs can collect your location and record where you have been, how you got there, and how long you were at a given location.** This powers features like "timehop" and "memories." It also means your phone knows:
- When you visited a therapist's office
- When you went to a protest
- When you visited an abortion clinic
- When you were at a friend's house
- When you stayed out late

**Information posted to social media services can be used by others. Combining information posted on social media and other sources can be used to deduce private information about you.** Your public posts plus public records plus data breaches equals a surprisingly complete picture of your life.

### Real-World Privacy Failures

**Cambridge Analytica** – In 2016, it was revealed that a political consulting firm had harvested data from millions of Facebook users without their consent. They used this data to build psychological profiles and target political ads, potentially influencing elections around the world.

**Equifax data breach** – In 2017, credit reporting agency Equifax suffered a breach that exposed the personal information of 147 million people—names, Social Security numbers, birth dates, addresses, and driver's license numbers. The company had failed to patch a known security vulnerability.

**Clearview AI** – A company scraped billions of photos from social media sites without permission to build a facial recognition database sold to law enforcement. Facebook, Google, and Twitter sent cease-and-desist letters, but the damage was done.


## Protecting Yourself – Security Measures

### Authentication

**Authentication measures** protect devices and information from unauthorized access. They prove you are who you say you are.

**Strong passwords** are something that is easy for a user to remember but would be difficult for someone else to guess based on knowledge of that user.

Characteristics of strong passwords:
- **Long** – At least 12 characters, preferably more
- **Complex** – Mix of uppercase, lowercase, numbers, and symbols
- **Unpredictable** – Not based on personal information (not your name, birthday, pet's name, or favorite sports team)
- **Not a dictionary word** – Hackers use dictionary attacks
- **Unique** – Different for every account

Password managers are tools that generate and store strong passwords for you. You only need to remember one master password.

**Multifactor authentication (MFA)** is a method of computer access control in which a user is only granted access after successfully presenting several separate pieces of evidence to an authentication mechanism.

The three categories of evidence are:

| Factor | Description | Examples |
|--------|-------------|----------|
| **Knowledge** | Something you know | Password, PIN, security questions |
| **Possession** | Something you have | Phone (for SMS codes), security key, authenticator app, smart card |
| **Inherence** | Something you are | Fingerprint, face scan, voice, retina scan, iris scan |

Multifactor authentication requires at least two factors. Each step adds a new layer of security that must be broken to gain unauthorized access.

Common examples:
- Enter password (knowledge), then enter code sent to your phone (possession)
- Insert security key (possession), then scan fingerprint (inherence)
- Enter password (knowledge), then approve push notification on phone (possession)

**Why MFA matters:** Passwords can be stolen, guessed, or phished. But even if an attacker has your password, they probably don't have your phone or your fingerprint.

### Encryption

**Encryption** is the process of encoding data to prevent unauthorized access. **Decryption** is the process of decoding the data back to its original form.

Two main types of encryption:

**Symmetric key encryption** uses the same key for both encryption and decryption. It's like a lockbox with one key – the same key locks and unlocks it. The challenge is getting the key to the other person securely. If someone intercepts the key during transmission, they can decrypt everything.

**Public key encryption** (asymmetric encryption) uses a pair of keys: a public key and a private key.
- The **public key** can be shared with anyone. They use it to encrypt messages that only you can read.
- The **private key** is kept secret. Only you have it. You use it to decrypt messages encrypted with your public key.

Think of it like a mailbox with a slot. Anyone can put mail in (public key), but only you have the key to open it (private key). The sender doesn't need your private key to send you a message – they only need your public key.

Public key encryption enables:
- **Secure communication** – HTTPS, email encryption
- **Digital signatures** – Proving you wrote something without revealing your private key
- **Cryptocurrency** – Bitcoin and others rely on public key cryptography

**Certificate authorities** issue digital certificates that validate the ownership of encryption keys used in secure communications. They're like digital ID cards. When you see the padlock icon in your browser, it means a certificate authority has verified that the site is legitimate and that your connection is encrypted.

### Software Protection

**Computer virus and malware scanning software** can help protect a computing system against infection. They scan files and programs for known threats, monitor suspicious behavior, and quarantine or remove malicious software.

**A computer virus** is a malicious program that can copy itself and gain access to a computer in an unauthorized way. Viruses often attach themselves to legitimate programs and spread when those programs are shared. When you run the infected program, the virus runs too.

**Malware** is software intended to damage a computing system or to take partial control over its operation. Types of malware include:

| Type | Description |
|------|-------------|
| **Virus** | Self-replicating, attaches to legitimate programs |
| **Worm** | Spreads without human action, often over networks |
| **Trojan horse** | Disguised as legitimate software |
| **Ransomware** | Locks your files and demands payment for decryption |
| **Spyware** | Secretly monitors your activity and sends data to attackers |
| **Adware** | Displays unwanted ads, often bundled with free software |
| **Rootkit** | Hides deep in the system to avoid detection |
| **Keylogger** | Records keystrokes to steal passwords and sensitive data |

### Updates and Permissions

**All real-world systems have errors or design flaws that can be exploited to compromise them.** No software is perfect. Bugs exist. Hackers find them. This is an unavoidable reality of complex systems.

**Regular software updates help fix errors that could compromise a computing system.** Those annoying notifications to restart your computer or update your apps? They're patching security holes. Ignoring them leaves you vulnerable to attacks that have known fixes.

**Zero-day vulnerabilities** are flaws that the software vendor doesn't know about yet. Hackers can exploit them until the vendor releases a patch. This is why defense-in-depth (multiple layers of security) is important.

**Users can control the permissions programs have for collecting user information.** Your phone asks:
- "Allow this app to access your location?"
- "Allow this app to access your contacts?"
- "Allow this app to access your camera?"
- "Allow this app to access your microphone?"

**Users should review the permission settings of programs to protect their privacy.** Ask yourself:
- Does a calculator app really need access to my contacts? No.
- Does a flashlight app really need my location? No.
- Does a photo editing app really need my microphone? Probably not.

If an app asks for permissions it doesn't need, deny them. Better yet, don't install the app.



## Threats – How Attacks Happen

### Phishing

**Phishing** is a technique that attempts to trick a user into providing personal information. That personal information can then be used to access sensitive online resources, such as bank accounts, email, and social media.

Phishing attacks usually work through:
- **Emails that look legitimate** – They mimic real companies, using their logos, colors, and language
- **Urgent language** – "Your account will be closed!" "Suspicious activity detected!" "You've won a prize!" "Immediate action required!"
- **Fake links** – The text might say "Click here to verify your account," but the actual link goes to a fake website
- **Fake websites** – The link takes you to a site that looks exactly like the real thing, but the URL is slightly different (e.g., amaz0n.com instead of amazon.com)

**Real-life example:** You receive an email that looks exactly like it's from your bank. It says there's been suspicious activity on your account and asks you to click a link to verify your identity. The link takes you to a fake site that looks like your bank's login page. When you enter your username and password, the attackers now have them.

**Spear phishing** is targeted phishing aimed at specific individuals or organizations. Attackers research their targets and craft personalized messages. For example, an email that appears to come from your boss asking for sensitive information.

**Smishing** is phishing via SMS/text messages. **Vishing** is phishing via voice calls.

**How to protect yourself:**
- Never click links in unsolicited emails
- Hover over links to see where they really go
- Go directly to the website by typing the address yourself
- Check the sender's email address carefully
- Be suspicious of urgent or threatening language
- Use multifactor authentication – even if your password is stolen, they can't get in

### Keylogging

**Keylogging** is the use of a program to record every keystroke made by a computer user in order to gain fraudulent access to passwords and other confidential information.

Keyloggers can be:
- **Software** – Installed on your computer through malware, often without your knowledge
- **Hardware** – Physical devices plugged into your computer or between your keyboard and computer

Everything you type – passwords, credit card numbers, private messages, personal thoughts – gets recorded and sent to the attacker.

**How keyloggers get installed:**
- Downloading infected software from untrustworthy sites
- Opening malicious email attachments
- Clicking on malicious links
- Physical access to your computer

**How to protect yourself:**
- Use antivirus and anti-malware software
- Keep software updated
- Don't download from untrustworthy sources
- Use on-screen keyboards for sensitive entries (some keyloggers can't capture them)
- Use two-factor authentication – a keylogger might capture your password, but not your phone

### Network Attacks

**Data sent over public networks can be intercepted, analyzed, and modified.** When you use public Wi-Fi at a coffee shop, airport, or hotel, your data is traveling through the air as radio waves. Anyone nearby with the right equipment can capture it.

**One way this can happen is through a rogue access point.** A rogue access point is a wireless access point that gives unauthorized access to secure networks.

How it works:
- Attacker sets up a fake Wi-Fi hotspot with a name like "Free Coffee Shop Wi-Fi" or "Airport Guest"
- You connect, thinking it's legitimate
- All your traffic goes through the attacker's device
- They can see everything you do – websites you visit, passwords you type, messages you send
- They can even modify data – injecting malware into downloads or changing content

**Man-in-the-middle attacks** are when an attacker positions themselves between you and the legitimate server. They intercept your traffic, possibly modify it, and forward it to the real server. You think you're communicating directly with the server, but you're not.

**How to protect yourself on public Wi-Fi:**
- Don't access sensitive accounts (banking, email) on public Wi-Fi
- Use a VPN (Virtual Private Network) – it encrypts all your traffic
- Look for HTTPS – the padlock icon means your connection to that site is encrypted
- Disable auto-connect to Wi-Fi networks
- Verify the network name with staff

### Malicious Links and Downloads

**A malicious link can be disguised on a web page or in an email message.** The text might say "Click here" or "Amazon.com," but the actual HTML link goes to a malicious site. Always hover over links to see where they really go.

**Unsolicited emails, attachments, links, and forms in emails can be used to compromise the security of a computing system.** These can come from unknown senders or from known senders whose security has been compromised. If you get a strange email from a friend, their account might have been hacked.

**Untrustworthy downloads from freeware or shareware sites can contain malware.** "Free" software often comes with hidden extras:
- Adware that displays unwanted ads
- Spyware that tracks your activity
- Browser hijackers that change your homepage and search engine
- Trojan horses disguised as useful programs

Torrent sites are notorious for this. If it seems too good to be true – a paid program for free, a new movie before it's released – it probably contains malware.

**How to stay safe:**
- Only download from official sources (developer websites, app stores)
- Read reviews and check ratings
- Be skeptical of "cracks" or "keygens" – they almost always contain malware
- Use antivirus software and scan downloads before opening


## Legal and Ethical Concerns

### Intellectual Property

**Material created on a computer is the intellectual property of the creator or an organization.** This includes code, documents, images, music, videos, and any other creative work.

**Intellectual property** is protected by laws that recognize the rights of creators to control and benefit from their work.

**Copyright** protects original works of authorship – literature, music, art, software. It gives the creator exclusive rights to reproduce, distribute, perform, display, and create derivative works.

**Ease of access and distribution of digitized information raises intellectual property concerns regarding ownership, value, and use.** When copying a file is as easy as clicking a button, it's tempting to ignore copyright. But just because it's easy doesn't make it legal or ethical.

**Measures should be taken to safeguard intellectual property.** This includes:
- Copyright notices
- Digital rights management (DRM)
- Licensing agreements
- Watermarking
- Legal action against infringers

### Plagiarism

**The use of material created by someone else without permission and presented as one's own is plagiarism and may have legal consequences.**

Plagiarism is:
- Copying text and pasting it into your work without citation
- Using someone else's code without attribution
- Taking credit for someone else's idea
- Submitting work you didn't create

In academic settings, plagiarism can result in failing grades, expulsion, and damage to reputation. In professional settings, it can lead to lawsuits, termination, and career destruction.

**The use of material created by someone other than you should always be cited.** Give credit where credit is due. This isn't just about avoiding punishment – it's about honesty and respect for others' work.

### Legal Ways to Use Others' Work

**Creative Commons** is a public copyright license that enables the free distribution of an otherwise copyrighted work. It's used when the content creator wants to give others the right to share, use, and build upon the work they have created.

Different Creative Commons licenses have different conditions:
- **Attribution (BY)** – You must give credit
- **ShareAlike (SA)** – Derivative works must use the same license
- **NonCommercial (NC)** – Work cannot be used commercially
- **NoDerivatives (ND)** – Work cannot be modified

**Open source** refers to programs that are made freely available and may be redistributed and modified. Open source software comes with licenses that grant users the right to use, study, change, and share the code. Examples include Linux, Firefox, Python, and thousands of other projects.

Common open source licenses:
- **MIT License** – Very permissive, almost anything allowed
- **GNU General Public License (GPL)** – Requires that derivative works also be open source
- **Apache License** – Permissive, includes patent protection

**Open access** refers to online research output free of any and all restrictions on access and free of many restrictions on use, such as copyright or license restrictions. Open access means anyone can read, download, and share research articles without paywalls.

**Creative Commons, open source, and open access have enabled broad access to digital information.** They represent a different philosophy from traditional "all rights reserved" copyright – one that values sharing and collaboration.

### Computing and Harm

**As with any technology or medium, using computing to harm individuals or groups of people raises legal and ethical concerns.** This includes:
- Cyberbullying and online harassment
- Doxxing (publishing private information)
- Creating or spreading malware
- Hacking into systems without authorization
- Online fraud and scams
- Deepfakes used to deceive or defame

**Computing can play a role in social and political issues, which in turn often raises legal and ethical concerns.** Examples:
- Social media's role in spreading misinformation
- Algorithmic bias in hiring, lending, and criminal justice
- Government surveillance and privacy
- Content moderation and free speech
- The digital divide and inequality

**The digital divide raises ethical concerns around computing.** When some people have access to technology and others don't, it creates and perpetuates inequality. Those without access are excluded from education, employment, healthcare, and civic participation.

### Computing Innovations Raise Concerns

**The development of software that allows access to digital media downloads and streaming** raises questions about copyright, artist compensation, and the future of creative industries. Napster, Spotify, Netflix – all disrupted existing models and raised legal battles.

**The development of algorithms that include bias** raises concerns about fairness and discrimination. As we saw in Module 11, biased algorithms can deny loans, recommend longer prison sentences, and misidentify faces.

**The existence of computing devices that collect and analyze data by continuously monitoring activities** raises privacy concerns. Smart speakers, fitness trackers, smart TVs, and even toys can collect data about you and your family.


## Module 13 Summary

### Privacy (IOC-2.A)
- **Personally identifiable information (PII)** includes any data that can identify you: name, SSN, address, biometrics, financial info, medical records, online identifiers, location data
- Search engines, websites, apps, and devices constantly collect data about you
- Data can be aggregated to build detailed profiles
- Information placed online is difficult to delete
- Privacy risks include identity theft, stalking, discrimination, and exploitation

### Security Measures (IOC-2.B)
- **Authentication** verifies identity: passwords, multifactor authentication
- **Strong passwords** are long, complex, unique, and not based on personal info
- **Multifactor authentication** uses two or more factors: knowledge, possession, inherence
- **Encryption** protects data: symmetric (one key) and public key (public/private pair)
- **Certificate authorities** validate encryption keys
- **Antivirus and anti-malware software** protect against malicious programs
- **Software updates** patch security flaws
- **Permission settings** let you control app access to your data

### Threats (IOC-2.C)
- **Phishing** tricks users into revealing information via fake emails and websites
- **Keylogging** records keystrokes to steal passwords
- **Rogue access points** intercept data on public Wi-Fi
- **Man-in-the-middle attacks** intercept and possibly modify communications
- **Malicious links** disguise dangerous URLs
- **Unsolicited emails** may contain malware
- **Untrustworthy downloads** can hide malware

### Legal and Ethical Concerns (IOC-1.F)
- **Intellectual property** includes creations of the mind; protected by copyright
- **Plagiarism** is using others' work without attribution; has legal and academic consequences
- **Creative Commons** licenses allow sharing with conditions
- **Open source** software can be freely used, modified, and shared
- **Open access** makes research freely available
- Computing can be used to harm; ethical considerations matter
- Computing innovations raise legal and ethical questions about privacy, bias, surveillance, and access


## 📋 Quick Reference Card

| Concept | Definition |
|---------|------------|
| **PII (Personally Identifiable Information)** | Information that can identify an individual (name, SSN, address, biometrics, financial data, medical data, location, online identifiers) |
| **Authentication** | Process of verifying identity |
| **Strong password** | Long, complex, unique, not based on personal info |
| **Multifactor authentication (MFA)** | Requires at least two factors: knowledge (password), possession (phone), inherence (fingerprint) |
| **Encryption** | Encoding data to prevent unauthorized access |
| **Symmetric encryption** | Same key encrypts and decrypts |
| **Public key encryption** | Public key encrypts, private key decrypts |
| **Certificate authority** | Issues digital certificates validating encryption keys |
| **Virus** | Malicious self-replicating program |
| **Malware** | Software intended to damage or take control of a system |
| **Phishing** | Tricking users into revealing personal information |
| **Keylogging** | Recording keystrokes to steal information |
| **Rogue access point** | Fake Wi-Fi network that intercepts data |
| **Software updates** | Fix security vulnerabilities |
| **Intellectual property** | Creations of the mind protected by law |
| **Plagiarism** | Using others' work without attribution |
| **Creative Commons** | Licenses that allow sharing with conditions |
| **Open source** | Software that can be freely used, modified, and shared |
| **Open access** | Research available freely without paywalls |


You now understand the risks and responsibilities of living in a digital world. Privacy matters. Security matters. Ethics matter. And as a programmer, you have a duty to build systems that respect users, protect data, and contribute positively to society.
