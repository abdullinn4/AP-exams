# Continuity and Theorems

I told you we'd come back to why we can just plug numbers in for limits of continuous functions. Well, now's the time.

## **Continuity at a Point**

### **Definition:**

A function $\displaystyle f(x)$ is **continuous at a point** $\displaystyle x = c$ if and only if all three of these conditions are met:

1. $\displaystyle f(c)$ exists (meaning $\displaystyle c$ is in the domain of $\displaystyle f$)
2. $\displaystyle \lim_{x \to c} f(x)$ exists (the left-hand and right-hand limits are equal)
3. $\displaystyle \lim_{x \to c} f(x) = f(c)$

If any one of these fails, then $\displaystyle f(x)$ is **discontinuous** at $\displaystyle x = c$.

In plain English, graphically, continuity means you can draw the function at and around $\displaystyle x=c$ **without lifting your pencil**.

There are three main types of discontinuities:

1. **Removable Discontinuity (Hole).**

Literally a hole in the graph.

![desmos-graph (27).svg](unit-1/lesson-3/desmos-graph_(27).svg)

![desmos-graph (28).svg](unit-1/lesson-3/desmos-graph_(28).svg)

The limit $\displaystyle \lim_{x \to c} f(x)$ exists, but either $\displaystyle f(c)$ doesn't exist or $\displaystyle f(c)$ isn't equal to the limit. The "hole" can be "removed" by redefining $\displaystyle f(c)$ to match the limit.

2. **Jump Discontinuity.** At some point, your function "jumps" from one value to another.

![desmos-graph (29).svg](unit-1/lesson-3/desmos-graph_(29).svg)

![desmos-graph (30).svg](unit-1/lesson-3/desmos-graph_(30).svg)

The left-hand and right-hand limits both exist but aren't equal. The function "jumps" from one value to another at $\displaystyle x=c$.

3. **Infinite Discontinuity (Vertical Asymptote).** The function shoots off to infinity at a point.

![desmos-graph (31).svg](unit-1/lesson-3/desmos-graph_(31).svg)

![desmos-graph (32).svg](unit-1/lesson-3/desmos-graph_(32).svg)

The limit is infinite as $\displaystyle x$ approaches $\displaystyle c$ from one or both sides ($\displaystyle \lim_{x \to c} f(x) = \infty$ or $\displaystyle -\infty$). The graph has a vertical asymptote at $\displaystyle x=c$.

**Examples:**

1. Check if $\displaystyle f(x) = x^2$ is continuous at $\displaystyle x=3$.

![desmos-graph (33).svg](unit-1/lesson-3/desmos-graph_(33).svg)

- $\displaystyle f(3)=9$ exists.
- $\displaystyle \lim_{x \to 3} x^2 = 9$ exists.
- $\displaystyle \lim_{x \to 3} f(x) = 9 = f(3)$.

**Result:** $\displaystyle f$ is continuous at $\displaystyle x=3$.

2. **Removable Discontinuity:** $\displaystyle f(x) = \frac{x^2-1}{x-1}$ at $\displaystyle x=1$.

![desmos-graph (34).svg](unit-1/lesson-3/desmos-graph_(34).svg)

- $\displaystyle f(1)$ is undefined (Condition 1 fails).
- $\displaystyle \lim_{x \to 1} \frac{x^2-1}{x-1} = \lim_{x \to 1} (x+1) = 2$ exists.
- Since the limit exists but $\displaystyle f(1)$ doesn't, there's a removable discontinuity (a hole) at $\displaystyle (1, 2)$.

So that's the deal. It's called *removable* because we can actually remove it by redefining the function.

**Fixing a Removable Discontinuity:** For $\displaystyle f(x) = \frac{x^2-4}{x-2}$, we found $\displaystyle \lim_{x \to 2} f(x) = 4$. Define a new function:

$\displaystyle g(x) = \begin{cases} \dfrac{x^2-4}{x-2} & \text{if } x \ne 2 \\[1em] 4 & \text{if } x = 2 \end{cases}$

Now $\displaystyle g(x)$ is continuous at $\displaystyle x=2$ because $\displaystyle g(2)=4$ equals the limit.

3. **Jump Discontinuity:** $\displaystyle f(x) = \begin{cases} x+2 & \text{if } x < 1 \\ -x & \text{if } x \ge 1 \end{cases}$ at $\displaystyle x=1$.

![desmos-graph (35).svg](unit-1/lesson-3/desmos-graph_(35).svg)

- $\displaystyle f(1) = -1$ exists.
- Left-hand limit: $\displaystyle \lim_{x \to 1^-} (x+2) = 3$.
- Right-hand limit: $\displaystyle \lim_{x \to 1^+} (-x) = -1$.
- Since $\displaystyle 3 \ne -1$, the two-sided limit does not exist (Condition 2 fails). This is a jump discontinuity.

4. **Infinite Discontinuity:** $\displaystyle f(x) = \frac{1}{x}$ at $\displaystyle x=0$.

![desmos-graph (36).svg](unit-1/lesson-3/desmos-graph_(36).svg)

- $\displaystyle f(0)$ is undefined.
- $\displaystyle \lim_{x \to 0} \frac{1}{x}$ does not exist (it goes to $\displaystyle \pm\infty$ depending on the side).
- This is an infinite discontinuity; the line $\displaystyle x=0$ is a vertical asymptote.

---

We've covered continuity at a point. Now let's zoom out.

## **Continuity on an Interval**

### **Definition:**

- A function $\displaystyle f$ is **continuous on an open interval** $\displaystyle (a, b)$ if it's continuous at every point in $\displaystyle (a, b)$.
- A function $\displaystyle f$ is **continuous on a closed interval** $\displaystyle [a, b]$ if it's continuous on $\displaystyle (a, b)$ and also continuous from the right at $\displaystyle a$ ($\displaystyle \lim_{x \to a^+} f(x) = f(a)$) and from the left at $\displaystyle b$ ($\displaystyle \lim_{x \to b^-} f(x) = f(b)$).

Polynomials, rational functions, power functions, exponentials, logs, and trig functions are all continuous at every point in their **domains**. So to find where a function is continuous, just figure out where it's defined.

**Examples:**

1. **Polynomial:** $\displaystyle f(x) = 3x^3 - 2x + 5$ is continuous on $\displaystyle (-\infty, \infty)$.
2. **Rational Function:** $\displaystyle f(x) = \frac{x+1}{x-2}$.
    - Domain: all real numbers except $\displaystyle x=2$.
    - **Result:** $\displaystyle f$ is continuous on $\displaystyle (-\infty, 2)$ and $\displaystyle (2, \infty)$.
3. **Square Root Function:** $\displaystyle f(x) = \sqrt{x+4}$.
    - Domain: $\displaystyle x+4 \ge 0 \Rightarrow x \ge -4$, or $\displaystyle [-4, \infty)$.
    - **Result:** $\displaystyle f$ is continuous on its domain, $\displaystyle [-4, \infty)$. (It's continuous from the right at $\displaystyle x=-4$.)

---

So if a function is continuous on some interval, no jumps, no holes, no weirdness. That means we can find limits of continuous functions at points in that interval just by plugging in the number $\displaystyle x$ approaches.

Now let's lay down some theorems that are pretty much common sense.

## **Theorems on Continuous Functions**

### **Operations with Continuous Functions**

If $\displaystyle f(x)$ and $\displaystyle g(x)$ are both continuous at $\displaystyle x=c$, then so are:

- **Constant multiples:** $\displaystyle k \cdot f(x)$ for any real $\displaystyle k$
- **Sums and differences:** $\displaystyle f(x) \pm g(x)$
- **Products:** $\displaystyle f(x) \cdot g(x)$
- **Quotients:** $\displaystyle \frac{f(x)}{g(x)}$, as long as $\displaystyle g(c) \neq 0$

### **Composition of Continuous Functions**

If $\displaystyle g$ is continuous at $\displaystyle x=c$ and $\displaystyle f$ is continuous at $\displaystyle g(c)$, then the composite $\displaystyle (f \circ g)(x) = f(g(x))$ is continuous at $\displaystyle x=c$.

**Examples**

Let $\displaystyle f(x) = \sin x$ and $\displaystyle g(x) = x^2$, both continuous at $\displaystyle x = \pi/2$.

![desmos-graph (2).svg](unit-1/lesson-3/desmos-graph_(2).svg)

![desmos-graph (3).svg](unit-1/lesson-3/desmos-graph_(3).svg)

Then:

• $\displaystyle 5f(x) = 5 \sin x$ is continuous at $\displaystyle x = \frac{\pi}{2}$.

![desmos-graph (4).svg](unit-1/lesson-3/desmos-graph_(4).svg)

• $\displaystyle f(x) + g(x) = \sin x + x^2$ is continuous at $\displaystyle x = \frac{\pi}{2}$.

![desmos-graph (6).svg](unit-1/lesson-3/desmos-graph_(6).svg)

• $\displaystyle f(x) \cdot g(x) = \sin x \cdot x^2$ is continuous at $\displaystyle x = \frac{\pi}{2}$.

![desmos-graph (7).svg](unit-1/lesson-3/desmos-graph_(7).svg)

• $\displaystyle \frac{f(x)}{g(x)} = \frac{\sin x}{x^2}$ is continuous at $\displaystyle x = \frac{\pi}{2}$ since $\displaystyle g\left(\frac{\pi}{2}\right) = \left(\frac{\pi}{2}\right)^2 \neq 0$.

![desmos-graph (8).svg](unit-1/lesson-3/desmos-graph_(8).svg)

Let $\displaystyle g(x) = x^2 + 1$ and $\displaystyle f(x) = \sqrt{x}$.
 $\displaystyle g(x)$ is continuous at $\displaystyle x = 2$ (it's a polynomial).
 $\displaystyle f(x)$ is continuous at $\displaystyle g(2) = 5$ since $\displaystyle \sqrt{x}$ is continuous for all $\displaystyle x > 0$.
Therefore, $\displaystyle (f \circ g)(x) = \sqrt{x^2 + 1}$ is continuous at $\displaystyle x = 2$.

### **The Intermediate Value Theorem (IVT)**

If a function $\displaystyle f$ is **continuous on the closed interval** $\displaystyle [a, b]$, and $\displaystyle d$ is any number between $\displaystyle f(a)$ and $\displaystyle f(b)$, then there exists at least one number $\displaystyle c$ in $\displaystyle (a, b)$ such that $\displaystyle f(c) = d$.

The IVT just says a continuous function hits every value in between its endpoints. It doesn't tell you **how many** times or **exactly where**—just that at least one exists. It's super useful for proving roots exist. Honestly, it's one of those theorems that's so intuitive you barely think of it as a theorem.

Let's see it in action.

**Examples:**

1. Show that $\displaystyle f(x) = x^3 - 4x + 1$ has a root in $\displaystyle [1, 2]$.
    - $\displaystyle f$ is continuous everywhere (polynomial).
    - Check: $\displaystyle f(1) = 1 - 4 + 1 = -2$, and $\displaystyle f(2) = 8 - 8 + 1 = 1$.
    - Since $0$ is between $-2$ and $1$, by IVT there's some $\displaystyle c$ in $\displaystyle (1, 2)$ with $\displaystyle f(c) = 0$.
2. Suppose $\displaystyle f$ is continuous on $\displaystyle [0, 5]$, with $\displaystyle f(0) = -1$ and $\displaystyle f(5) = 7$. Can we guarantee $\displaystyle f$ hits $3$?
    - Yep. $3$ is between $-1$ and $7$, and $\displaystyle f$ is continuous on $\displaystyle [0, 5]$. So there's some $\displaystyle c$ in $\displaystyle (0, 5)$ with $\displaystyle f(c)=3$.



---

## **Asymptotes and End Behavior**

We've talked about other kinds of limits before. Let's revisit them from a graphical angle.

Two important features of graphs are **vertical asymptotes** and **horizontal asymptotes**. They describe where a function "blows up" and where it "settles down" as $x$ moves far to the left or right.

### **Definition:**

- **Infinite Limits:** We write $\displaystyle \lim_{x \to c} f(x) = \infty$ (or $\displaystyle -\infty$) if $\displaystyle f(x)$ grows without bound as $\displaystyle x$ approaches $\displaystyle c$. The line $\displaystyle x=c$ is a **vertical asymptote**.
- **Limits at Infinity:** We write $\displaystyle \lim_{x \to \infty} f(x) = L$ (or $\displaystyle \lim_{x \to -\infty} f(x) = L$) if $\displaystyle f(x)$ approaches a finite number $\displaystyle L$ as $\displaystyle x$ gets huge (or hugely negative). The line $\displaystyle y=L$ is a **horizontal asymptote**.

**Examples:**

1. Find $\displaystyle \lim_{x \to 3^+} \frac{2}{x-3}$ and determine the vertical asymptote.

We're asked what happens to $\displaystyle f(x) = \frac{2}{x-3}$ as $x$ approaches $3$ from the right (values slightly greater than $3$, like $3.1$, $3.01$, $3.001$). This is a one-sided limit.

The key is the denominator $(x-3)$. As $x$ gets closer to $3$ from the right:
- $x = 3.1$: $x - 3 = 0.1$
- $x = 3.01$: $x - 3 = 0.01$
- $x = 3.001$: $x - 3 = 0.001$
The denominator becomes a very small *positive* number. We denote this as $(x-3) \to 0^+$ (approaches zero from the positive side).

| $x$ (approaching $3$ from the right) | $x - 3$ | $f(x) = \frac{2}{x-3}$ |
| :--- | :--- | :--- |
| 3.1 | 0.1 | $\frac{2}{0.1} = 20$ |
| 3.01 | 0.01 | $\frac{2}{0.01} = 200$ |
| 3.001 | 0.001 | $\frac{2}{0.001} = 2000$ |
| 3.0001 | 0.0001 | $\frac{2}{0.0001} = 20000$ |
| $\downarrow$ | $\downarrow$ | $\downarrow$ |
| **$x \to 3^+$** | **$(x-3) \to 0^+$** | **$f(x) \to \infty$** |

As the denominator gets smaller and smaller (but positive), the fraction $\displaystyle \frac{2}{\text{tiny}}$ becomes larger and larger without bound. There is no finite number it approaches—it just keeps growing.

Since $f(x)$ increases without limit as $x$ approaches $3$ from the right, we write:
$$\lim_{x \to 3^+} \frac{2}{x-3} = \infty.$$

Whenever a limit (one-sided or two-sided) becomes infinite at a specific $x$-value, that $x$-value is a vertical asymptote. Here, as $x$ approaches $3$, the function "blows up." Therefore, the line $x = 3$ is a **vertical asymptote**.

*Note:* We should also check the left-hand limit $\displaystyle \lim_{x \to 3^-} \frac{2}{x-3}$. For $x$ approaching $3$ from the left (like $2.9$, $2.99$, $2.999$), the denominator $(x-3)$ is negative and very small, so $\frac{2}{\text{negative tiny}} \to -\infty$. So the function goes to $-\infty$ on the left side of the asymptote.

2. Find $\displaystyle \lim_{x \to \infty} \frac{3x^2 - 2x + 1}{5x^2 + 4x - 7}$ and determine the horizontal asymptote.

We're asked what happens to $\displaystyle f(x) = \frac{3x^2 - 2x + 1}{5x^2 + 4x - 7}$ as $x$ becomes extremely large (heading toward infinity). Does it approach a specific finite value, or does it also become infinite?

Let's plug in some large values of $x$ and see what $f(x)$ does.

| $x$ | $f(x) = \frac{3x^2 - 2x + 1}{5x^2 + 4x - 7}$ |
| :--- | :--- |
| 10 | $\frac{300 - 20 + 1}{500 + 40 - 7} = \frac{281}{533} \approx 0.5272$ |
| 100 | $\frac{30000 - 200 + 1}{50000 + 400 - 7} = \frac{29801}{50393} \approx 0.5914$ |
| 1000 | $\frac{3,\!000,\!000 - 2,\!000 + 1}{5,\!000,\!000 + 4,\!000 - 7} = \frac{2,\!998,\!001}{5,\!003,\!993} \approx 0.5991$ |
| 10000 | $\frac{300,\!000,\!000 - 20,\!000 + 1}{500,\!000,\!000 + 40,\!000 - 7} = \frac{299,\!980,\!001}{500,\!040,\!-7?}$ (Let's compute carefully) Actually: numerator $= 3(10^8) - 2(10^4) + 1 = 300,\!000,\!000 - 20,\!000 + 1 = 299,\!980,\!001$; denominator $= 5(10^8) + 4(10^4) - 7 = 500,\!000,\!000 + 40,\!000 - 7 = 500,\!039,\!993$. Ratio $\approx 0.59992$ |
| $\downarrow$ | $\downarrow$ |
| **$x \to \infty$** | **$f(x) \to 0.6$** |

It appears the values are getting closer and closer to $0.6$, which is $\displaystyle \frac{3}{5}$.

For rational functions (ratios of polynomials) as $x \to \infty$, the highest power of $x$ dominates. A standard method is to divide every term in the numerator and denominator by the highest power of $x$ that appears (here $x^2$):

$$\displaystyle \frac{3x^2 - 2x + 1}{5x^2 + 4x - 7} = \frac{\frac{3x^2}{x^2} - \frac{2x}{x^2} + \frac{1}{x^2}}{\frac{5x^2}{x^2} + \frac{4x}{x^2} - \frac{7}{x^2}} = \frac{3 - \frac{2}{x} + \frac{1}{x^2}}{5 + \frac{4}{x} - \frac{7}{x^2}}.$$
 
As $x$ becomes huge, terms like $\displaystyle \frac{2}{x}$, $\displaystyle \frac{1}{x^2}$, $\displaystyle \frac{4}{x}$, and $\displaystyle \frac{7}{x^2}$ all approach $0$. So:

$$\lim_{x \to \infty} \frac{3 - \frac{2}{x} + \frac{1}{x^2}}{5 + \frac{4}{x} - \frac{7}{x^2}} = \frac{3 - 0 + 0}{5 + 0 - 0} = \frac{3}{5}.$$

Therefore,
$$\lim_{x \to \infty} \frac{3x^2 - 2x + 1}{5x^2 + 4x - 7} = \frac{3}{5}.$$

Since the function approaches a finite number ($\displaystyle \frac{3}{5}$) as $x$ goes to infinity, the line $\displaystyle y = \frac{3}{5}$ is a **horizontal asymptote** (on the right side of the graph). We could also check $\displaystyle \lim_{x \to -\infty} f(x)$—for this function, it will also be $\displaystyle \frac{3}{5}$, so the same horizontal asymptote applies on both ends.