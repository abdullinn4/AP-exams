## Inside the Machine – Binary & Data Compression

You've been using computers your whole life. You stream music, watch videos, send selfies, and type essays. But have you ever wondered what's actually going on inside that silicon brain? How does a selfie become a bunch of 1s and 0s, travel through the internet, and magically appear on your friend's phone as a perfect picture?

Welcome to the hidden world of **data representation**. This module pulls back the curtain and shows you how computers see the world. Spoiler: they're incredibly dumb. They only understand two things: **0** and **1**. Everything else—words, pictures, sounds, videos—is built on top of those two tiny digits. By the end of this module, you'll understand how that works, why it matters, and how we squeeze data into smaller packages to save space and time.


## Bits, Bytes, and the Language of Computers

### The Humble Bit

A **bit** is the most basic unit of information in computing. Its name comes from **binary digit**, and it can only be one of two values: **0** or **1**. That's it. That's all a computer fundamentally knows.

Why only 0 and 1? Because computers are built from millions of tiny switches that can be either ON or OFF. ON = 1, OFF = 0. It's that simple. So every piece of data—every photo, every song, every TikTok video—is just a giant collection of these ON/OFF switches arranged in some pattern.

Eight bits together make a **byte**. A byte can represent 256 different values (2⁸ = 256). Why 256? Because with 8 switches, there are 256 possible ON/OFF combinations. Bytes are the building blocks of everything.

```
┌─────────────────────────────────────────────────┐
│                    A BYTE (8 bits)               │
│  ┌───┬───┬───┬───┬───┬───┬───┬───┐             │
│  │ 1 │ 0 │ 1 │ 1 │ 0 │ 0 │ 0 │ 1 │             │
│  └───┴───┴───┴───┴───┴───┴───┴───┘             │
│  This pattern of 8 bits = 1 byte                │
│  Can represent numbers 0–255, or a character,   │
│  or part of a color, depending on context.      │
└─────────────────────────────────────────────────┘
```

### Abstraction: The Magic Trick

Here's the mind-bending part: the **same sequence of bits** can represent completely different things depending on context. The bits `01000001` could be:

- The number 65
- The letter 'A' (in ASCII encoding)
- A shade of blue in a pixel
- Part of a sound wave

How is that possible? Through **abstraction**. Abstraction is the process of reducing complexity by focusing on the main idea and hiding irrelevant details. When you see the letter 'A' on screen, you don't think about the bits that represent it. You just think "A". The computer handles the messy details.

Think of it like this: a red light at an intersection is an abstraction. It means "stop". But physically, it's just a colored light bulb with electricity flowing through it. The meaning is layered on top.

Bits are grouped to represent higher-level concepts:

- **Numbers** – groups of bits interpreted as binary numbers
- **Characters** – each letter or symbol has a standard numeric code (ASCII or Unicode)
- **Color** – each pixel's color is represented by three numbers (red, green, blue), each stored as a byte

These bits are stored in **variables** and **lists** in your programs—we'll dive deep into that in Module 5. For now, just know that every value you work with in code eventually becomes bits.

### Analog vs. Digital

The real world is **analog** – it's continuous and smooth. A vinyl record stores music as a continuous groove. A thermometer shows temperature as a continuous column of mercury. A photograph captures continuous shades of light.

But computers are **digital** – they deal in discrete chunks. They can't store infinite smoothness; they take **samples** at regular intervals.

Think of it like this: imagine drawing a smooth curve on a piece of paper. That's analog. Now imagine tracing that curve by connecting dots with straight lines. The more dots you use, the closer you get to the original curve. Those dots are samples.

```
Analog signal:   ~~~~~~~~~~~~~~  (smooth wave)
                     ↓ sampling
Digital:          ●   ●   ●   ●   (dots at regular intervals)
```

This sampling process is how we convert real-world analog data into digital form:

- **Music** – a microphone measures air pressure thousands of times per second (44,100 times per second for CD-quality audio)
- **Images** – a camera sensor measures light intensity at millions of tiny points (pixels)
- **Video** – a series of images (frames) captured many times per second

The more samples you take, the better the digital approximation. But more samples also mean more bits, which means larger files. There's always a trade-off.


## Binary Numbers – Counting Like a Computer

You've been using **decimal** (base 10) your whole life. Ten digits: 0–9. When you run out of digits, you add a new place value. The number 342 means:

3 × 10² + 4 × 10¹ + 2 × 10⁰ = 300 + 40 + 2

**Binary** (base 2) works exactly the same way, but with only two digits: 0 and 1. Place values are powers of 2 instead of powers of 10.

### Place Values in Binary

Positions are numbered starting from the **rightmost** as position 0, then increasing to the left.

```
Binary number:     1    0    1    1
Position:          3    2    1    0
Place value:      2³   2²   2¹   2⁰ = 8, 4, 2, 1
```

To find the decimal value, multiply each digit by its place value and add them up:

1011₂ = 1×8 + 0×4 + 1×2 + 1×1 = 8 + 0 + 2 + 1 = 11₁₀

### Converting Decimal to Binary

To convert a decimal number to binary, repeatedly divide by 2 and read the remainders backwards.

Let's convert 13 to binary:

```
13 ÷ 2 = 6 remainder 1 ↑
 6 ÷ 2 = 3 remainder 0 ↑
 3 ÷ 2 = 1 remainder 1 ↑
 1 ÷ 2 = 0 remainder 1 ↑
                   Read upwards: 1101₂
```

Check: 1×8 + 1×4 + 0×2 + 1×1 = 8 + 4 + 0 + 1 = 13 ✓

Here's a visual of the process:

```
┌─────────────────────────────────────────────┐
│        DECIMAL TO BINARY CONVERSION          │
│                                              │
│  Start: 13                                   │
│                                              │
│  13 ÷ 2 = 6  remainder 1  ──┐                │
│   6 ÷ 2 = 3  remainder 0  ──┤                │
│   3 ÷ 2 = 1  remainder 1  ──┤                │
│   1 ÷ 2 = 0  remainder 1  ──┤                │
│                              ▼                │
│                   Read up: 1 1 0 1            │
│                                              │
│  Binary: 1101₂ = 13₁₀                        │
└─────────────────────────────────────────────┘
```

### Practice Table

| Binary | Decimal | Calculation |
|--------|---------|-------------|
| 0000   | 0       | 0+0+0+0 |
| 0001   | 1       | 0+0+0+1 |
| 0010   | 2       | 0+0+2+0 |
| 0011   | 3       | 0+0+2+1 |
| 0100   | 4       | 0+4+0+0 |
| 0101   | 5       | 0+4+0+1 |
| 0110   | 6       | 0+4+2+0 |
| 0111   | 7       | 0+4+2+1 |
| 1000   | 8       | 8+0+0+0 |
| 1001   | 9       | 8+0+0+1 |
| 1010   | 10      | 8+0+2+0 |
| 1011   | 11      | 8+0+2+1 |
| 1100   | 12      | 8+4+0+0 |
| 1101   | 13      | 8+4+0+1 |
| 1110   | 14      | 8+4+2+0 |
| 1111   | 15      | 8+4+2+1 |

### Comparing Binary Numbers

To compare binary numbers, just compare them digit by digit from left to right, just like decimal. The leftmost digit (most significant bit) has the biggest place value, so a 1 there makes the number larger than any number with a 0 there.

Example: 1010₂ (10) vs 1001₂ (9) – compare leftmost: both 1, next digit: 0 vs 0 (equal), next: 1 vs 0 → 1 > 0, so 1010₂ > 1001₂.


## The Price of Being Digital – Limitations and Errors

Because computers use a fixed number of bits to represent numbers, there are limits. This leads to some annoying (and sometimes catastrophic) errors.

### Integer Overflow

Most programming languages store integers in a fixed number of bits – typically 32 bits for a standard integer. That means the largest possible value is 2³¹ − 1 = 2,147,483,647 (one bit is used for sign). What happens if you try to store 2,147,483,648?

```
┌─────────────────────────────────────────────────┐
│                 INTEGER OVERFLOW                 │
│                                                  │
│  Imagine a car odometer that only has 6 digits.  │
│  It goes from 000000 to 999999.                  │
│  What happens when you hit 1,000,000 miles?      │
│  It rolls over to 000000.                         │
│                                                  │
│  Computers do the same thing:                    │
│                                                  │
│   最大値: 01111111 11111111 11111111 11111111    │
│            (2,147,483,647 in 32-bit signed)      │
│   加1後: 10000000 00000000 00000000 00000000    │
│            (-2,147,483,648 – overflow!)          │
│                                                  │
│  This is an **overflow error**.                   │
└─────────────────────────────────────────────────┘
```

Some programming languages (like Python) avoid this by using arbitrary-precision integers – they use as much memory as needed. But many languages (Java, C++) have fixed sizes, and overflow can happen silently.

### Round-off Errors with Real Numbers

Real numbers (like 1/3 or π) are even trickier. Computers use **floating-point representation**, which is like scientific notation in binary. But because they have a fixed number of bits, many numbers can only be approximated.

For example, 0.1 in decimal is a simple fraction. But in binary, 0.1 is a repeating fraction – like 1/3 in decimal. The computer stores an approximation. That's why in many programming languages:

```
0.1 + 0.2 == 0.3  // often returns FALSE!
```

Because 0.1 + 0.2 might be 0.30000000000000004 due to round-off.

This is a **round-off error**. It's usually small, but in scientific calculations or financial software, it can add up and cause problems.

**Real-life example: The Patriot Missile Failure** – In 1991, a Patriot missile battery failed to intercept an incoming Scud missile because of a round-off error. The system's internal clock measured time in tenths of a second but stored it in 24 bits. After 100 hours of operation, the accumulated error was large enough to miss the target. 28 soldiers died.


## Data Compression – Squeezing Bits

Have you ever wondered how you can store thousands of songs on your phone, or stream 4K video over WiFi? The answer is **data compression** – making files smaller by removing redundancy.

### Why Compress?

- **Save storage space** – more photos, songs, videos on your device
- **Save transmission time** – faster downloads, smoother streaming
- **Save bandwidth** – more people can use the network at once

Compression works by finding patterns and representing them more efficiently. The amount of size reduction depends on two things:

1. How much **redundancy** is in the original data
2. The **compression algorithm** you choose

### Lossless vs. Lossy Compression

There are two main flavors of compression:

| Type | What it does | Guarantee | File size reduction | Examples |
|------|--------------|-----------|---------------------|----------|
| **Lossless** | Eliminates redundancy without losing any information | Original can be perfectly reconstructed | Moderate | ZIP files, PNG images, FLAC audio |
| **Lossy** | Throws away some "unimportant" data | Only an approximation of original | Significant | JPEG images, MP3 audio, MP4 video |

Think of it like this:

- **Lossless** is like taking a photo of a painting – every brushstroke is preserved.
- **Lossy** is like painting a copy from memory – you capture the general idea but lose fine details.

### Lossless Compression – How It Works

Lossless compression finds patterns and replaces them with shorter codes. A classic example is run-length encoding:

Original:  `AAAAABBBBCCC`  
Compressed: `5A4B3C`

That's 12 characters down to 6 – half the size! Decompression is trivial: expand each code back.

More sophisticated methods like LZW (used in GIF) build dictionaries of repeated patterns.

### Lossy Compression – Throwing Things Away

Lossy compression asks: "What can we remove that humans won't notice?"

- **JPEG** – Our eyes are less sensitive to color changes than brightness changes. JPEG throws away subtle color variations. It also reduces detail in high-frequency areas (where we don't notice as much).
- **MP3** – Our ears can't hear certain frequencies, especially when masked by louder sounds. MP3 removes those.
- **MP4 video** – Often only stores the differences between frames, not each whole frame. "If frame 1 is a blue sky, and frame 2 is the same sky with a bird, just store the bird."

### Choosing the Right Compression

The choice between lossless and lossy depends on what's most important:

| Situation | Choose | Why |
|-----------|--------|-----|
| Archiving important documents | Lossless | Can't afford to lose any detail |
| Medical images (X-rays, MRI) | Lossless | A missed detail could be life-threatening |
| Editing photos professionally | Lossless | Each edit needs original quality |
| Sharing photos on social media | Lossy | Smaller files, faster uploads – quality loss is acceptable |
| Streaming music on a phone | Lossy | Saves data, sounds fine to most ears |
| Text files | Lossless | Must preserve every character |

Here's a visual comparison:

```
Original image (1 MB)
    │
    ├─── Lossless compression (PNG) ───> 0.6 MB, identical pixels
    │
    └─── Lossy compression (JPEG, 80% quality) ───> 0.2 MB, slightly blurrier, but you'd barely notice
         └─── JPEG at 20% quality ───> 0.05 MB, blocky artifacts, obvious quality loss
```

**Real-life example:** Netflix uses lossy compression to stream movies. They adjust the compression level based on your internet speed. If your connection is slow, they make the video more compressed (lower quality) so it doesn't buffer. You might see blocky artifacts, but at least you can keep watching.


## Module 3 Summary

Let's recap what you've learned:

- A **bit** is a 0 or 1; 8 bits make a **byte**.
- **Abstraction** lets the same bits represent numbers, letters, colors, or sounds. These bits are stored in **variables** and **lists** in your programs (more in Module 5).
- **Analog** data is continuous; **digital** data is discrete. We convert analog to digital by **sampling**.
- **Binary numbers** use base 2, with place values as powers of 2.
- Convert decimal to binary by repeated division by 2; convert binary to decimal by adding place values.
- Fixed-bit representations cause **overflow** (numbers too large) and **round-off** (real numbers approximated).
- **Data compression** reduces file size – **lossless** preserves everything, **lossy** trades quality for smaller size.
- Choose compression based on context: lossless for text/archives, lossy for media where perfect quality isn't critical.

You now understand the secret language of computers. Next up: Module 4 – From Data to Insight: Processing & Information. We'll explore how we take raw data and turn it into knowledge. See you there!