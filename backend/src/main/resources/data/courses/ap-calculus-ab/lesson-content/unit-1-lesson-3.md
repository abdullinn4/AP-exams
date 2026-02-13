# Lesson 3: Continuity and Theorems

I told you we will discuss why we can substitute numbers in limits of continious functions later. So, now is the time.

### **Continuity at a Point**

**Definition:**

A function $f(x)$ is **continuous at a point** $x = c$ if and only if all three of the following conditions are met:

1. $f(c)$ exists (i.e., $c$ is in the domain of $f$)
2. $\lim_{x \to c} f(x)$ exists (i.e., the left-hand and right-hand limits are equal)
3. $\lim_{x \to c} f(x) = f(c)$

If any one of these conditions fails, then $f(x)$ is **discontinuous** at $x = c$.

In simple words, graphically, continuity means you can draw the function at and around $x=c$ **without lifting your pencil**. 

There are three main types of discontinuities:

1. **Removable Discontinuity (Hole).**

Literally hole on the graph. 

![desmos-graph (27).svg](desmos-graph_(27).svg)

![desmos-graph (28).svg](desmos-graph_(28).svg)

The limit $\lim_{x \to c} f(x)$ exists, but either $f(c)$ does not exist or $f(c)$ is not equal to the limit. The "hole" can be "removed" by redefining $f(c)$ to equal the limit.

1. **Jump Discontinuity.** At some point you function “jumps” from one value to another. 

![desmos-graph (29).svg](desmos-graph_(29).svg)

![desmos-graph (30).svg](desmos-graph_(30).svg)

The left-hand and right-hand limits both exist but are not equal. The function "jumps" from one value to another at $x=c$.

1. **Infinite Discontinuity (Vertical Asymptote):** Function flies somewhere far away at a point. 

![desmos-graph (31).svg](desmos-graph_(31).svg)

![desmos-graph (32).svg](desmos-graph_(32).svg)

The limit is infinite as $x$ approaches $c$ from one or both sides ($\lim_{x \to c} f(x) = \infty$ or $-\infty$). The graph has a vertical asymptote at $x=c$.

**Examples:**

1. Check if $f(x) = x^2$ continuous at $x=3$.

![desmos-graph (33).svg](desmos-graph_(33).svg)

- $f(3)=9$ exists.
- $\lim_{x \to 3} x^2 = 9$ exists.
- $\lim_{x \to 3} f(x) = 9 = f(3)$.

**Result:** $f$ is continuous at $x=3$.

1. **Removable Discontinuity:** $f(x) = \frac{x^2-1}{x-1}$ at $x=1$.

![desmos-graph (34).svg](desmos-graph_(34).svg)

- $f(1)$ is undefined (Condition 1 fails).
- $\lim_{x \to 1} \frac{x^2-1}{x-1} = \lim_{x \to 1} (x+1) = 2$ exists.
- Since the limit exists but $f(1)$ doesn't, there's a removable discontinuity (a hole) at $(1, 2)$.

So, that’s the point. It’s called removable, because we can simply remove this discontinuity by redefining our function in a different way.

**Redefining to Remove a Discontinuity:** For $f(x) = \frac{x^2-4}{x-2}$, we found $\lim_{x \to 2} f(x) = 4$. Define a new function:

$g(x) = \begin{cases} \frac{x^2-4}{x-2} & \text{if } x \ne 2 \\ 4 & \text{if } x = 2 \end{cases}$

Now $g(x)$ is continuous at $x=2$ because $g(2)=4$ equals the limit.

1. **Jump Discontinuity:** $f(x) = \begin{cases} x+2 & \text{if } x < 1 \ -x & \text{if } x \ge 1 \end{cases}$ at $x=1$.

![desmos-graph (35).svg](desmos-graph_(35).svg)

- $f(1) = -1$ exists.
- Left-hand limit: $\lim_{x \to 1^-} (x+2) = 3$.
- Right-hand limit: $\lim_{x \to 1^+} (-x) = -1$.
- Since $3 \ne -1$, the two-sided limit does not exist (Condition 2 fails). This is a jump discontinuity.

1. **Infinite Discontinuity:** $f(x) = \frac{1}{x}$ at $x=0$.

![desmos-graph (36).svg](desmos-graph_(36).svg)

- $f(0)$ is undefined.
- $\lim_{x \to 0} \frac{1}{x}$ does not exist (it approaches $\pm\infty$ depending on the side).
- This is an infinite discontinuity; the line $x=0$ is a vertical asymptote.

---

We defined continuity at a point. Let’s extend the definition.

### **Continuity on an Interval**

**Definition:**

- A function $f$ is **continuous on an open interval** $(a, b)$ if it is continuous at every point in $(a, b)$.
- A function $f$ is **continuous on a closed interval** $[a, b]$ if it is continuous on $(a, b)$ and also continuous from the right at $a$ ($\lim_{x \to a^+} f(x) = f(a)$) and from the left at $b$ ($\lim_{x \to b^-} f(x) = f(b)$).

Polynomial, rational, power, exponential, logarithmic, and trigonometric functions are continuous at all points in their **domains**. This means you can find intervals of continuity by determining where the function is defined.

**Examples:**

1. **Polynomial:** $f(x) = 3x^3 - 2x + 5$ is continuous on $(-\infty, \infty)$.
2. **Rational Function:** $f(x) = \frac{x+1}{x-2}$.
    - Domain: all real numbers except $x=2$.
    - **Result:** $f$ is continuous on $(-\infty, 2)$ and $(2, \infty)$.
3. **Square Root Function:** $f(x) = \sqrt{x+4}$.
    - Domain: $x+4 \ge 0 \Rightarrow x \ge -4$, or $[-4, \infty)$.
    - **Result:** $f$ is continuous on its domain, $[-4, \infty)$. (It is continuous from the right at          $x=-4$).

---

So, if function continuous on some interval it doesn’t have any jumps, holes and other weird things. Therefore, we find limits of continuous functions at points in this interval just by substituting number $x$ approaches.

Let’s also introduce some absolutely obvious theorems here.

### **Theorems on Continuous Functions**

**1. Operations with Continuous Functions**

If $f(x)$ and $g(x)$ are both continuous at $x=c$, then the following functions are also continuous at $x=c$:

- **Constant multiples:** $k⋅f(x)$ for any real number $k$
- **Sums and differences:** $f(x)±g(x)$
- **Products:** $f(x)⋅g(x)$
- **Quotients:** $\displaystyle\frac{f(x)}{g(x)}$, provided $g(c)≠0$

**2. Composition of Continuous Functions**

If $g$ is continuous at $x=c$ and $f$ is continuous at $g(c)$, then the composite function $(f∘g)(x)=f(g(x))$ is continuous at $x=c$.

**Examples**

Let $f (x) = \sin x$ and $g(x) = x^2$,
both continuous at $x = π/2$.

![desmos-graph (2).svg](desmos-graph_(2).svg)

![desmos-graph (3).svg](desmos-graph_(3).svg)

Then:
• $5f (x) = 5 \sin x$ is continuous at $x = \frac{\pi}{2}$ .

![desmos-graph (4).svg](desmos-graph_(4).svg)

• $f (x) + g(x) = sin x + x^2$ is continuous at $x = \frac{\pi}{2}$ .

![desmos-graph (6).svg](desmos-graph_(6).svg)

• $f (x) · g(x) = \sin x · x^2$ is continuous at $x = \frac{\pi}{2}$ .

![desmos-graph (7).svg](desmos-graph_(7).svg)

• $f (x)/g(x)$ = $sin x/x^2$ is continuous at $x = \frac{\pi}{2}$ since $g( \frac{\pi}{2} ) = (\frac{\pi}{2} )^2 \neq 0$.

![desmos-graph (8).svg](desmos-graph_(8).svg)

Let  $g(x) = x^2 + 1$ and $f(x) = \sqrt{x}$ .
 $g(x)$ is continuous at $x = 2$ (it's a polynomial).
 $f(x)$ is continuous at $g(2) = 5$ since $\sqrt{x}$ is continuous for all $x > 0$.
Therefore, the composite function $(f \circ g)(x)$ = $\sqrt{x^2 + 1}$  is continuous at $x = 2$.

1. **The Intermediate Value Theorem (IVT)**

If a function $f$ is **continuous on the closed interval** $[a, b]$, and $d$ is any number between $f(a)$ and $f(b)$, then there exists at least one number $c$ in $(a, b)$ such that $f(c) = d$.

The IVT guarantees that a continuous function takes on every intermediate value between its endpoints. It does **not** tell you *how many* such $c$ exist or *exactly where* they are—only that at least one exists. Common applications include proving the existence of roots (zeros) of a function. So it’s actually again a kind of theorem you don’t even need to think about as theorem - it’s intuitive clear.

Let’s see how we can apply this theorem.

**Examples:**

1. Show that $f(x) = x^3 - 4x + 1$ has a root in the interval $[1, 2]$.
    - $f$ is continuous everywhere (it's a polynomial).
    - Evaluate: $f(1) = 1 - 4 + 1 = -2$, and $f(2) = 8 - 8 + 1 = 1$.
    - Since $0$ is between $-2$ and $1$, by IVT there exists at least one $c$ in $(1, 2)$ such that $f(c) = 0$.
2. Let $f$ be continuous on $[0, 5]$ with $f(0) = -1$ and $f(5) = 7$. Can we guarantee that $f$ takes on the value $3$?
    - Yes, because $3$ is between $-1$ and $7$, and $f$ is continuous on $[0, 5]$. So, there exists some $c$ in $(0, 5)$ with $f(c)=3$.

We previously discussed other types of limits. Let’s talk about them a bit more again from a graphical point of view.

---

### **Asymptotes and End Behavior**

**Definition:**

- **Infinite Limits:** We write $\lim_{x \to c} f(x) = \infty$ (or $-\infty$) if $f(x)$ increases (or decreases) without bound as $x$ approaches $c$. The line $x=c$ is a **vertical asymptote**.
- **Limits at Infinity:** We write $\lim_{x \to \infty} f(x) = L$ (or $\lim_{x \to -\infty} f(x) = L$) if $f(x)$ approaches a finite number $L$ as $x$ becomes arbitrarily large (or small). The line $y=L$ is a **horizontal asymptote**.

**Examples:**

1. **Vertical Asymptote:** Find $\displaystyle\lim_{x \to 3^+} \frac{2}{x-3}$.
    - As $x \to 3^+$, $(x-3) \to 0^+$, so $\displaystyle\frac{2}{0^+} \to +\infty$.
    - **Result:** $\displaystyle\lim_{x \to 3^+} \frac{2}{x-3} = \infty$. Vertical asymptote at $x=3$.
2. **Horizontal Asymptote:** Find $\displaystyle\lim_{x \to \infty} \frac{3x^2 - 2x + 1}{5x^2 + 4x - 7}$.
    - Degrees are equal (both 2), so limit = ratio of leading coefficients: $\displaystyle\frac{3}{5}$.
    - **Result:** $\displaystyle\lim_{x \to \infty} \frac{3x^2 - 2x + 1}{5x^2 + 4x - 7} = \frac{3}{5}$. Horizontal asymptote at $\displaystyle y=\frac{3}{5}$.
3. 

---

---

### **Summary**

When analyzing continuity and limits involving infinity, always consider multiple representations:

- **Graphical:** Look for holes, jumps, vertical asymptotes, and horizontal asymptotes on the graph.
- **Numerical:** Use tables of values approaching a point from both sides to estimate limits and detect discontinuities.
- **Algebraic:** Use the definition of continuity, algebraic manipulation, and limit theorems to determine limits and intervals of continuity.

### **Additional Practice Problems**

1. Determine the points of discontinuity for $f(x) = \frac{x+2}{x^2-4}$ and classify each.
2. Find the value of $a$ that makes $g$ continuous: $g(x) = \begin{cases} ax+1 & \text{if } x \le 3 \ 2x - a & \text{if } x > 3 \end{cases}$
3. Evaluate: $\lim_{x \to -\infty} \frac{4x^3 - x}{2x^3 + 5x^2}$.
4. Find all vertical and horizontal asymptotes of $h(x) = \frac{3x^2}{x^2-1}$.
5. Use the IVT to show that $\cos x = x$ has a solution in $(0, \frac{\pi}{2})$. *(Hint: Consider $f(x)=\cos x - x$)*
6. Sketch a graph of a function that has a jump discontinuity at $x=1$, a removable discontinuity at $x=3$, and a vertical asymptote at $x=5$.
7. Let $f(x) = \frac{|x-2|}{x-2}$. Is $f$ continuous at $x=2$? Explain using limits.
8. Determine if $p(x) = \sqrt{x^2-9}$ is continuous on the interval $[-4, 4]$.
9. Evaluate: $\lim_{x \to \infty} (\sqrt{x^2+1} - x)$.
10. A function $f$ is continuous on $[1, 10]$. The table shows some values:
    
    
    | **$x$** | **1** | **4** | **7** | **10** |
    | --- | --- | --- | --- | --- |
    | $f(x)$ | -3 | 1 | 5 | 2 |
    | Explain why $f$ must have a root between $x=1$ and $x=10$. |  |  |  |  |

**Selected Solutions:**

1. Factor: $f(x)=\frac{x+2}{(x-2)(x+2)}$. Discontinuities at $x=2$ (infinite) and $x=-2$ (removable, after canceling).
2. Set left and right limits equal at $x=3$: $3a+1 = 6-a \Rightarrow 4a=5 \Rightarrow a=5/4$.
3. Divide by $x^3$: $\frac{4 - 1/x^2}{2 + 5/x} \to \frac{4}{2}=2$ as $x\to -\infty$.
4. Vertical asymptotes where denominator=0: $x=\pm1$. Horizontal: degrees equal, so $y=3/1=3$.
5. $f(0)=1>0$, $f(\pi/2)=-\pi/2<0$. $f$ is continuous, $0$ is between positive and negative, so IVT guarantees a root in $(0, \pi/2)$.
6. (Graphical exercise; ensure all features are present.)
7. No. $\lim_{x \to 2^-} f(x) = -1$, $\lim_{x \to 2^+} f(x)=1$, so the limit does not exist (jump discontinuity).
8. Domain: $x^2-9 \ge 0 \Rightarrow |x| \ge 3$. On $[-4,4]$, it fails continuity for $|x|<3$. Specifically, it's undefined on $(-3,3)$, so not continuous on the entire closed interval.
9. Multiply by conjugate: $\frac{(\sqrt{x^2+1}-x)(\sqrt{x^2+1}+x)}{\sqrt{x^2+1}+x} = \frac{1}{\sqrt{x^2+1}+x} \to 0$ as $x\to\infty$.
10. Since $f(1)=-3<0$ and $f(10)=2>0$, and $f$ is continuous, by IVT there exists $c$ in $(1,10)$ with $f(c)=0$ (a root).