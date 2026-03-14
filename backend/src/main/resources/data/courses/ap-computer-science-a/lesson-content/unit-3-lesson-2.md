### Impact of Program Design

### System Reliability

**System reliability** refers to a program's ability to perform its tasks as expected under stated conditions without failure. A reliable program does what it's supposed to do, when it's supposed to do it, consistently.

#### Why Reliability Matters

- **Safety:** In medical devices, airplane control systems, or self-driving cars, unreliable software can cost lives.
- **Trust:** Users will not use software that crashes frequently or produces incorrect results.
- **Cost:** Fixing reliability problems after release is much more expensive than designing for reliability from the start.
- **Reputation:** Companies with unreliable software lose customers and market share.

#### How Programmers Promote Reliability

**Testing with a variety of conditions:**
Programmers should test their programs with many different inputs, including edge cases (boundary values), invalid inputs, and unexpected user behavior.

```java
public int divide(int a, int b) {
    // Without testing for b == 0, this method is unreliable
    if (b == 0) {
        System.out.println("Error: Cannot divide by zero");
        return 0;  // or throw an exception
    }
    return a / b;
}
```

**Handling errors gracefully:**
Reliable programs anticipate that things can go wrong and handle errors without crashing.

**Code reviews and testing:**
Having other programmers review code and writing automated tests helps catch reliability issues before users encounter them.

### Beneficial and Harmful Impacts of Programs

The creation of programs has profound impacts on society, the economy, and culture. These impacts can be both beneficial and harmful. Programs meant to fill a need or solve a problem can have unintended harmful effects beyond their intended use.

#### Beneficial Impacts

**Healthcare:**
- Medical record systems allow doctors to access patient history instantly, improving diagnosis and treatment
- Telemedicine apps bring healthcare to remote areas
- Drug discovery simulations accelerate medical research

**Education:**
- Online learning platforms make education accessible worldwide
- Educational games engage students in new ways
- Accessibility software helps students with disabilities learn effectively

**Economic Growth:**
- E-commerce platforms create new markets and jobs
- Automation increases productivity
- Financial technology (fintech) makes banking accessible to more people

**Social Connection:**
- Social media connects people across the globe
- Communication apps keep families and friends in touch
- Collaboration tools enable remote work

#### Harmful Impacts

**Privacy Concerns:**
Programs that collect user data can expose sensitive information if not properly secured. Data breaches can lead to identity theft, financial loss, and personal embarrassment.

**Job Displacement:**
Automation and artificial intelligence can replace human workers in manufacturing, customer service, and even professional fields. While new jobs are created, the transition can be difficult for displaced workers.

**Addiction and Mental Health:**
Social media platforms and games are designed to be engaging, sometimes to the point of addiction. Excessive use has been linked to anxiety, depression, and sleep deprivation.

**Misinformation and Polarization:**
Algorithms that recommend content based on engagement can spread misinformation and create echo chambers, polarizing society and undermining democratic processes.

**Environmental Impact:**
Data centers consume enormous amounts of electricity. Cryptocurrency mining and AI training have significant carbon footprints.

#### Unintended Consequences

Programs designed with good intentions can have harmful side effects:

- A ride-sharing app designed to help people get around might increase traffic congestion and reduce public transit use
- A social media platform meant to connect friends might facilitate cyberbullying
- An algorithm designed to predict criminal behavior might perpetuate racial bias

### Legal Issues and Intellectual Property

#### Open Source vs. Proprietary Code

**Open source** software is code that is published with a license allowing anyone to view, use, modify, and distribute it. Examples include Linux, Firefox, and many programming libraries.

**Proprietary** software is code that is owned by an individual or company. The source code is kept secret, and users are granted limited rights to use the compiled program.

#### Reusing Code

Programmers often reuse code written by others. This is efficient and can lead to better, more reliable software. However, there are legal considerations:

**Open source code** can be freely used, but different open source licenses have different requirements:
- Some require that you also make your code open source if you use theirs (copyleft licenses like GPL)
- Some only require attribution (BSD, MIT licenses)
- Some prohibit commercial use

**Code that is not open source** requires permission from the copyright holder. This usually involves purchasing a license or obtaining written permission.

#### Intellectual Property Concerns

**Copyright** automatically protects original works of authorship, including code, as soon as they are created. You do not need to register copyright—it exists automatically.

**Plagiarism** is using someone else's work without giving credit. In programming, this means copying code without attribution, even if the code is not copyrighted or is available online.

**Software patents** protect novel inventions implemented in software. Patent law is complex and varies by country.

#### Responsible Programming Practices

- **Give credit:** When you use code from others, include comments acknowledging the source
- **Read licenses:** Understand the terms under which you can use code
- **Create original work:** While learning, it's fine to study and adapt examples, but for production code, strive to create original solutions or properly license existing ones
- **Respect privacy:** Design programs that protect user data and are transparent about data collection
- **Consider impacts:** Think about both intended and unintended consequences of your programs

### Case Studies in Program Impact

#### Case Study 1: Therac-25

In the 1980s, a radiation therapy machine called Therac-25 caused several patient deaths due to software errors. The machine would sometimes deliver massive radiation overdoses. The software had inadequate testing and lacked error handling. This tragedy highlighted the critical importance of reliability in safety-critical systems.

#### Case Study 2: Social Media Algorithms

Algorithms designed to maximize user engagement have been shown to promote extreme content, creating echo chambers and contributing to political polarization. The intended benefit (keeping users engaged) had the unintended consequence of harming social discourse.

#### Case Study 3: Facial Recognition Bias

Facial recognition systems have been found to have higher error rates for people with darker skin tones and for women. This bias, often caused by training data that doesn't represent diverse populations, can lead to false identifications and discrimination.

### Key Terminology for Topic 3.2

| Term | Definition |
|------|------------|
| **System reliability** | The ability of a program to perform its tasks as expected under stated conditions without failure |
| **Open source** | Software published with a license allowing anyone to view, use, modify, and distribute the code |
| **Proprietary software** | Software owned by an individual or company, with source code kept secret |
| **Intellectual property** | Creations of the mind, such as code, that are protected by copyright, patents, or trademarks |
| **Copyright** | Automatic legal protection for original works of authorship |
| **Algorithmic bias** | Systematic and repeatable errors in a computer system that create unfair outcomes |
| **Unintended consequences** | Harmful effects that were not anticipated when a program was designed |

### AP Exam Tips

- **Reliability strategies:** Be able to explain how testing with a variety of conditions improves reliability
- **Impact analysis:** You may be asked to identify both beneficial and harmful impacts of a given technology
- **Open source vs proprietary:** Understand the difference and the implications of using each
- **Intellectual property:** Know that code is automatically copyrighted and that using open source code requires following license terms
- **Case study awareness:** While you don't need to memorize specific cases like Therac-25, understanding the types of harm that can occur is important
- **Ethical considerations:** Be prepared to discuss the ethical responsibilities of programmers

### Common Misconceptions

| Misconception | Truth |
|---------------|-------|
| "If code is online, I can use it freely." | Not necessarily—it may be copyrighted or have license restrictions. |
| "Only large companies need to worry about ethics." | Every programmer has ethical responsibilities. |
| "Reliability means the program doesn't crash." | Reliability includes correctness, not just avoiding crashes. |
| "Open source means no copyright." | Open source is still copyrighted; the license grants permissions. |
| "Unintended consequences are rare." | They are common and must be actively considered during design. |
| "Testing once is enough." | Thorough testing with many inputs and conditions is essential. |