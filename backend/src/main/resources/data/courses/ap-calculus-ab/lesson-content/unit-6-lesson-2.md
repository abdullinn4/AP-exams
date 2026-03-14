# The Fundamental Theorem of Calculus

Let's be honest—evaluating definite integrals by taking the limit of Riemann sums is kind of a pain. Actually, it's really, really hard. Isn't there a faster way?

Yes. The Fundamental Theorem of Calculus is about to show you how it's done.

First, though, we need to talk about antiderivatives.

## **Antiderivatives**

Imagine someone hands you the function $\displaystyle f(x) = 3x^2$ and says, "Find a function $\displaystyle F$ whose derivative is $\displaystyle f$." Based on what you know about derivatives, you might quickly say $\displaystyle F(x) = x^3$, because

$$\displaystyle \frac{d}{dx}[x^3] = 3x^2.$$

We call $\displaystyle F$ an **antiderivative** of $\displaystyle f$.

#### Definition of an Antiderivative

A function $\displaystyle F$ is an **antiderivative** of a function $\displaystyle f$ on an interval $\displaystyle I$ if

$$\displaystyle F'(x) = f(x)$$

for every $\displaystyle x$ in $\displaystyle I$.

Notice the wording: $\displaystyle F$ is called *an* antiderivative, not *the* antiderivative. Why? Because there isn't just one. For example, all of the following are antiderivatives of $\displaystyle f(x)=3x^2$:

- $\displaystyle F_1(x) = x^3$
- $\displaystyle F_2(x) = x^3 - 4$
- $\displaystyle F_3(x) = x^3 + 91$

In fact, for any constant $\displaystyle C$, the function $\displaystyle F(x) = x^3 + C$ is an antiderivative of $\displaystyle 3x^2$. So once you have one antiderivative, you can get infinitely many by adding different constants.

We can even state a theorem here:

If $\displaystyle F$ is an antiderivative of $\displaystyle f$ on an interval $\displaystyle I$, then a function $\displaystyle G$ is also an antiderivative of $\displaystyle f$ on $\displaystyle I$ **if and only if** it can be written as

$$\displaystyle G(x) = F(x) + C$$

for all $\displaystyle x$ in $\displaystyle I$, where $\displaystyle C$ is some constant.

In other words, any two antiderivatives of the same function differ only by a constant. That's why we talk about the **family** of antiderivatives, and why the most general antiderivative of $\displaystyle f$ is written as $\displaystyle F(x) + C$, where $\displaystyle C$ is called the **constant of integration**.

The process of finding all antiderivatives of a function is called **antidifferentiation** or **indefinite integration**, and it's denoted by the integral symbol $\displaystyle \int$.

If $\displaystyle F$ is an antiderivative of $\displaystyle f$, then the general antiderivative is written as

$$\displaystyle \int f(x) \, dx = F(x) + C.$$

Here:
- $\displaystyle \int$ is the **integral sign**,
- $\displaystyle f(x)$ is the **integrand**,
- $\displaystyle dx$ tells us that $\displaystyle x$ is the **variable of integration**,
- $\displaystyle C$ is the **constant of integration**.

The expression $\displaystyle \int f(x) \, dx$ is read as "the antiderivative of $\displaystyle f$ with respect to $\displaystyle x$." The term **indefinite integral** is just another name for antiderivative.

---

## **The Inverse Relationship Between Integration and Differentiation**

Integration and differentiation are inverse operations. You can see this in two key equations:

1. If $\displaystyle F'(x) = f(x)$, then
   $$\displaystyle \int f(x) \, dx = F(x) + C,$$
   which can also be written as
   $$\displaystyle \int F'(x) \, dx = F(x) + C.$$
   This says integration "undoes" differentiation—up to that constant.

2. Conversely, if $\displaystyle \int f(x) \, dx = F(x) + C$, then differentiating the antiderivative gives back the original function:
   $$\displaystyle \frac{d}{dx} \left[ \int f(x) \, dx \right] = f(x).$$
   This says differentiation "undoes" integration.

Because of this inverse relationship, every differentiation formula can be flipped into an integration formula. Here's a summary of basic integration rules, all derived from derivatives you already know.

---

### Basic Integration Rules

| Differentiation Formula | Integration Formula |
|------------------------|---------------------|
| $\displaystyle \frac{d}{dx}[C] = 0$ | $\displaystyle \int 0 \, dx = C$ |
| $\displaystyle \frac{d}{dx}[kx] = k$ | $\displaystyle \int k \, dx = kx + C$ |
| $\displaystyle \frac{d}{dx}[kf(x)] = kf'(x)$ | $\displaystyle \int k f(x) \, dx = k \int f(x) \, dx$ |
| $\displaystyle \frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$ | $\displaystyle \int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx$ |
| $\displaystyle \frac{d}{dx}[x^n] = nx^{n-1}$ | $\displaystyle \int x^n \, dx = \frac{x^{n+1}}{n+1} + C, \quad n \neq -1$ |
| $\displaystyle \frac{d}{dx}[\sin x] = \cos x$ | $\displaystyle \int \cos x \, dx = \sin x + C$ |
| $\displaystyle \frac{d}{dx}[\cos x] = -\sin x$ | $\displaystyle \int \sin x \, dx = -\cos x + C$ |
| $\displaystyle \frac{d}{dx}[\tan x] = \sec^2 x$ | $\displaystyle \int \sec^2 x \, dx = \tan x + C$ |
| $\displaystyle \frac{d}{dx}[\sec x] = \sec x \tan x$ | $\displaystyle \int \sec x \tan x \, dx = \sec x + C$ |
| $\displaystyle \frac{d}{dx}[\cot x] = -\csc^2 x$ | $\displaystyle \int \csc^2 x \, dx = -\cot x + C$ |
| $\displaystyle \frac{d}{dx}[\csc x] = -\csc x \cot x$ | $\displaystyle \int \csc x \cot x \, dx = -\csc x + C$ |

These rules are the foundation for finding indefinite integrals. Don't forget: every antiderivative comes with that arbitrary constant $\displaystyle C$, because differentiation wipes out constant terms.

We'll look at these formulas more closely in the next lesson—don't worry.

## **The Fundamental Theorem of Calculus:**

If $\displaystyle f$ is continuous on $\displaystyle [a, b]$ and $\displaystyle F$ is **any** antiderivative of $\displaystyle f$ on $\displaystyle [a, b]$, then:

$$
\displaystyle \int_a^b f(x) \, dx = F(b) - F(a)
$$

**Notation:** We often write $\displaystyle F(b) - F(a)$ as $\displaystyle \left. F(x) \right|_a^b$ or $\displaystyle [F(x)]_a^b$.

1.  **It connects the two branches of calculus.** The definite integral (a limit of sums) is computed using the antiderivative (the inverse of differentiation).
2.  **The Constant $\displaystyle C$ Cancels!** Notice: $\displaystyle (F(b)+C) - (F(a)+C) = F(b)-F(a)$. So we can just use the simplest antiderivative (set $\displaystyle C=0$).
3.  **It turns hard limit problems into easy algebra**—find $\displaystyle F$, plug in, subtract.

**Let's prove it.**

The key idea is to rewrite $\displaystyle F(b) - F(a)$ in a clever way, then connect it to Riemann sums.

**Step 1: Set up a partition.**  
Take any partition of $\displaystyle [a, b]$:

$$\displaystyle a = x_0 < x_1 < x_2 < \cdots < x_{n-1} < x_n = b.$$

**Step 2: Write $\displaystyle F(b)-F(a)$ as a telescoping sum.**  
Add and subtract intermediate terms:

$$
\displaystyle \begin{aligned}
F(b) - F(a) &= F(x_n) - F(x_{n-1}) \\
&\quad + F(x_{n-1}) - F(x_{n-2}) \\
&\quad + \cdots \\
&\quad + F(x_1) - F(x_0).
\end{aligned}
$$

This simplifies nicely to

$$\displaystyle F(b)-F(a) = \sum_{i=1}^{n} \bigl[F(x_i) - F(x_{i-1})\bigr].$$

**Step 3: Apply the Mean Value Theorem.**  
On each subinterval $\displaystyle [x_{i-1}, x_i]$, the function $\displaystyle F$ is continuous and differentiable (since $\displaystyle F$ is an antiderivative of $\displaystyle f$, it must be differentiable). By the Mean Value Theorem, there exists some $\displaystyle x^*_i$ in $\displaystyle (x_{i-1}, x_i)$ such that

$$\displaystyle F'(x^*_i) = \frac{F(x_i) - F(x_{i-1})}{x_i - x_{i-1}}.$$

But $\displaystyle F'(x^*_i) = f(x^*_i)$, so we can rewrite the difference as

$$\displaystyle F(x_i) - F(x_{i-1}) = f(x^*_i) \, (x_i - x_{i-1}).$$

**Step 4: Rewrite $\displaystyle F(b)-F(a)$ as a Riemann sum.**  
Let $\displaystyle \Delta x_i = x_i - x_{i-1}$. Then

$$\displaystyle F(b)-F(a) = \sum_{i=1}^{n} f(x^*_i) \, \Delta x_i.$$

This equation is powerful: for **any** partition of $\displaystyle [a, b]$, we can pick the points $\displaystyle x^*_i$ (guaranteed by the Mean Value Theorem) so that $\displaystyle F(b)-F(a)$ equals exactly a Riemann sum of $\displaystyle f$.

**Step 5: Take the limit as the partition refines.**  
As the norm of the partition goes to zero ($\displaystyle \|\Delta\| \to 0$), the Riemann sum approaches the definite integral (provided the limit exists, which Theorem 4.4 guarantees for continuous functions). Therefore,

$$\displaystyle F(b)-F(a) = \lim_{\|\Delta\|\to 0} \sum_{i=1}^{n} f(c_i) \Delta x_i = \int_a^b f(x) \, dx.$$

**Conclusion:** This shows that the definite integral can be evaluated simply by finding an antiderivative $\displaystyle F$ and computing $\displaystyle F(b)-F(a)$.

**Example 1**
Evaluate $\displaystyle \int_1^3 (2x + 1) \, dx$.

*   Find an antiderivative: $\displaystyle F(x) = x^2 + x$. (Check: $\displaystyle F'(x)=2x+1$ ✔)
*   Apply FTC: $\displaystyle F(3) - F(1) = (9+3) - (1+1) = 12 - 2 = \boxed{10}$.
*   *Check with geometry: It's a trapezoid from (1,3) to (3,7). Area = 0.5*(3+7)*2=10.*

**Example 2**
Evaluate $\displaystyle \int_0^{\pi} \cos x \, dx$.

*   An antiderivative is $\displaystyle F(x) = \sin x$. (Could also use $\displaystyle \sin x + 5$.)
*   $\displaystyle \int_0^{\pi} \cos x \, dx = \sin(\pi) - \sin(0) = 0 - 0 = \boxed{0}$.

**Example 3**
Evaluate $\displaystyle \int_{-1}^2 (x^3 - 4x) \, dx$.

*   Antiderivative: $\displaystyle F(x) = \frac{x^4}{4} - 2x^2$.
*   $\displaystyle F(2) = \frac{16}{4} - 2(4) = 4 - 8 = -4$.
*   $\displaystyle F(-1) = \frac{1}{4} - 2(1) = \frac{1}{4} - 2 = -\frac{7}{4}$.
*   $\displaystyle \int_{-1}^2 (x^3 - 4x) \, dx = F(2) - F(-1) = (-4) - \left(-\frac{7}{4}\right) = -4 + \frac{7}{4} = -\frac{16}{4} + \frac{7}{4} = \boxed{-\frac{9}{4}}$.

---

## Two Ways to Think About the Definite Integral

When we write a definite integral, the variable inside is a "dummy variable"—it doesn't matter what letter we use. But the limits of integration can be either constants or variables, and that changes how we interpret the result.

### 1. The Definite Integral as a Number

If both limits are constants, the definite integral gives a single fixed number:

$$\displaystyle \int_a^b f(x) \, dx = \text{a constant}$$

Here, $\displaystyle x$ is just a placeholder. It doesn't matter if we write $\displaystyle f(x)$, $\displaystyle f(t)$, or $\displaystyle f(u)$—the result is the same number.

The most important thing here is that any definite integral is a finite number—an area under the curve. But what if we try to turn that integral into a function?

### 2. The Definite Integral as a Function of $\displaystyle x$

Now suppose we let the upper limit be a variable, like $\displaystyle x$, and to avoid confusion we use a different letter (say $\displaystyle t$) inside the integral:

$$\displaystyle F(x) = \int_a^x f(t) \, dt$$

Now $\displaystyle F$ is a **function** of $\displaystyle x$. As $\displaystyle x$ changes, the area under the curve from $\displaystyle a$ to $\displaystyle x$ accumulates. This is called an **accumulation function**.

So before, when you had a constant $\displaystyle b$ in the upper limit and $\displaystyle f$ represented a rate of change, the integral $\displaystyle \int_a^b f(t) \, dt$ gave you the net accumulated change. But you can always get that same number from the accumulation function: just plug in $\displaystyle x = b$.

---

## Example: Building a Function from an Integral

Let's define

$$\displaystyle F(x) = \int_0^x \cos t \, dt$$

and evaluate $\displaystyle F$ at $\displaystyle x = 0, \frac{\pi}{6}, \frac{\pi}{4}, \frac{\pi}{3}, \frac{\pi}{2}$.

**Step 1: Find a formula for $\displaystyle F(x)$**  
Instead of computing five separate integrals, treat $\displaystyle x$ as a constant temporarily and integrate:

$$\displaystyle \int_0^x \cos t \, dt = \sin t \Big|_0^x = \sin x - \sin 0 = \sin x.$$

So $\displaystyle F(x) = \sin x$.

**Step 2: Plug in the values**  

- $\displaystyle F(0) = \sin 0 = 0$
- $\displaystyle F\left(\frac{\pi}{6}\right) = \sin \frac{\pi}{6} = \frac{1}{2}$
- $\displaystyle F\left(\frac{\pi}{4}\right) = \sin \frac{\pi}{4} = \frac{\sqrt{2}}{2}$
- $\displaystyle F\left(\frac{\pi}{3}\right) = \sin \frac{\pi}{3} = \frac{\sqrt{3}}{2}$
- $\displaystyle F\left(\frac{\pi}{2}\right) = \sin \frac{\pi}{2} = 1$

**What's happening here?**  
Think of $\displaystyle F(x)$ as the **accumulated area** under $\displaystyle f(t) = \cos t$ from $\displaystyle t = 0$ to $\displaystyle t = x$.  
- At $\displaystyle x = 0$, no area has been collected, so $\displaystyle F(0) = 0$.
- At $\displaystyle x = \frac{\pi}{2}$, we've swept out the whole area under one hump of the cosine curve, so $\displaystyle F\left(\frac{\pi}{2}\right) = 1$.

This idea of an integral as an "accumulator" shows up everywhere in applications—think total distance from velocity, or total growth from a rate.

---

Notice what happened in the example: the derivative of $\displaystyle F(x)$ gave us back the original function we integrated:

$$\displaystyle \frac{d}{dx}[F(x)] = \frac{d}{dx}[\sin x] = \cos x = \frac{d}{dx}\left[ \int_0^x \cos t \, dt \right].$$

That's no coincidence. It's the **Second Fundamental Theorem of Calculus**.

## **The Second Fundamental Theorem of Calculus**

If $\displaystyle f$ is continuous on an open interval $\displaystyle I$ containing $\displaystyle a$, then for every $\displaystyle x$ in $\displaystyle I$:

$$\displaystyle \frac{d}{dx} \left[ \int_a^x f(t) \, dt \right] = f(x).$$

**In words:**  
If you first integrate $\displaystyle f$ from a fixed starting point $\displaystyle a$ up to a variable top limit $\displaystyle x$, then take the derivative with respect to $\displaystyle x$, you get back the original function $\displaystyle f$ (evaluated at $\displaystyle x$).

This theorem tells us that integration and differentiation are truly inverse processes—even when the integral defines a function with a variable upper limit.

**Let's See It In Action:**

**Example 1: The Basic FTC Part 1**
Find $\displaystyle F'(x)$ if $\displaystyle F(x) = \int_2^x (t^2 + 1) \, dt$.

*   By FTC Part 1: $\displaystyle F'(x) = \boxed{x^2 + 1}$. Simple as that.

**Example 2: Chain Rule Application**
Find $\displaystyle \frac{d}{dx} \left[ \int_0^{x^2} \sin t \, dt \right]$.

*   Here, the upper limit is $\displaystyle u(x) = x^2$, and $\displaystyle u'(x) = 2x$.
*   Apply the rule: $\displaystyle \sin(x^2) \cdot 2x = \boxed{2x \sin(x^2)}$.

**Example 3: Variable Lower Limit**
Find $\displaystyle \frac{d}{dx} \left[ \int_x^3 \sqrt{t^3 + 1} \, dt \right]$.

*   **Trick:** Swap the limits to make the variable the upper limit. Remember, swapping changes the sign: $\displaystyle \int_x^3 f(t) \, dt = -\int_3^x f(t) \, dt$.
*   Now differentiate: $\displaystyle \frac{d}{dx} \left[ -\int_3^x \sqrt{t^3+1} \, dt \right] = -\sqrt{x^3+1}$.
*   So the answer is $\displaystyle \boxed{-\sqrt{x^3+1}}$.

---

### **Properties of Definite Integrals**

Before we dive deeper, we need some tools to manipulate integrals. These properties are pretty intuitive if you think of integrals as net area.

**The Essential Properties:**
Let $\displaystyle f$ and $\displaystyle g$ be integrable functions, and let $\displaystyle a$, $\displaystyle b$, $\displaystyle c$ be real numbers.

1.  **Constant Multiple:** $\displaystyle \int_a^b k \cdot f(x) \, dx = k \int_a^b f(x) \, dx$
    *   *Stretching the graph vertically stretches the area by the same factor.*
2.  **Sum/Difference:** $\displaystyle \int_a^b [f(x) \pm g(x)] \, dx = \int_a^b f(x) \, dx \pm \int_a^b g(x) \, dx$
    *   *The area under a sum is the sum of the areas.*
3.  **Reversal of Limits:** $\displaystyle \int_a^b f(x) \, dx = -\int_b^a f(x) \, dx$
    *   *Reversing the direction of accumulation gives the opposite net result.*
4.  **Additivity Over Intervals:** $\displaystyle \int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx$ for any $\displaystyle c$.
    *   *You can find the total area by adding the areas of adjacent regions.*
5.  **Integral of a Constant:** $\displaystyle \int_a^b c \, dx = c \cdot (b - a)$
    *   *Area of a rectangle: height × width.*
6.  **Zero-Width Interval:** $\displaystyle \int_a^a f(x) \, dx = 0$
    *   *No accumulation happens over zero distance.*

**Why These Matter:**
*   **They let us compute integrals using geometry.** If you can see triangles, trapezoids, and semicircles, you can get the exact integral without any fancy antiderivatives.
*   **They let us handle piecewise functions** by splitting the integral at the break points.
*   **They simplify complex problems** by breaking them into pieces we already know.

**Example 1: Geometry is Your Friend**
Evaluate $\displaystyle \int_0^4 (2x + 1) \, dx$ by interpreting it as area.

*   The graph is a line from $\displaystyle (0,1)$ to $\displaystyle (4,9)$. The region is a trapezoid.
*   Area of a trapezoid = $\displaystyle \frac{1}{2} \times (\text{base}_1 + \text{base}_2) \times \text{height}$.
*   Bases: $\displaystyle f(0)=1$, $\displaystyle f(4)=9$. Height: $\displaystyle 4-0=4$.
*   Area = $\displaystyle \frac{1}{2} (1 + 9) \times 4 = \frac{1}{2} \times 10 \times 4 = \boxed{20}$.

**Example 2: Handling a Piecewise Function**
Evaluate $\displaystyle \int_{-1}^3 f(x) \, dx$, where

$\displaystyle f(x) = \begin{cases} x+2 & \text{if } x \le 1 \\ 4 - x & \text{if } x > 1 \end{cases}$.

*   **Split the integral** at the break point, $\displaystyle x=1$:
    $\displaystyle \int_{-1}^3 f(x) \, dx = \int_{-1}^1 (x+2) \, dx + \int_1^3 (4-x) \, dx$.
*   **First integral (area under line from -1 to 1):**
    *   Geometry: It's a trapezoid from $\displaystyle x=-1$ to $\displaystyle x=1$. At $\displaystyle x=-1$, $\displaystyle f(-1)=1$. At $\displaystyle x=1$, $\displaystyle f(1)=3$. Height = 2.
    *   Area = $\displaystyle \frac{1}{2}(1+3) \times 2 = 4$.
    *   Or, use antiderivative: $\displaystyle \int (x+2) dx = \frac{x^2}{2} + 2x$. Evaluate: $\displaystyle [0.5+2] - [0.5 - 2] = 2.5 - (-1.5)=4$.
*   **Second integral (area under line from 1 to 3):**
    *   At $\displaystyle x=1$, $\displaystyle f(1)=3$. At $\displaystyle x=3$, $\displaystyle f(3)=1$. Height = 2.
    *   Area = $\displaystyle \frac{1}{2}(3+1) \times 2 = 4$.
    *   Or, antiderivative: $\displaystyle \int (4-x) dx = 4x - \frac{x^2}{2}$. Evaluate: $\displaystyle [12-4.5] - [4-0.5] = 7.5 - 3.5 = 4$.
*   **Total:** $\displaystyle 4 + 4 = \boxed{8}$.

**Example 3: Using Properties to Find Unknowns**
Given $\displaystyle \int_1^5 f(x) \, dx = 8$ and $\displaystyle \int_3^5 f(x) \, dx = 5$, find $\displaystyle \int_1^3 f(x) \, dx$.

*   By additivity: $\displaystyle \int_1^5 f = \int_1^3 f + \int_3^5 f$.
*   So, $\displaystyle 8 = \int_1^3 f + 5$.
*   Therefore, $\displaystyle \int_1^3 f = \boxed{3}$.

---

### **Putting It All Together: Analytical Evaluation Strategies**

Now we combine FTC Part 2 with algebraic tricks to handle more complicated integrals.

**Key Strategies:**
1.  **Simplify the Integrand:** Use algebra to rewrite the function in a form where you can easily find an antiderivative (expand, split fractions, use trig identities).
2.  **Handle Absolute Values:** Split the integral at points where the expression inside the absolute value equals zero.
3.  **Exploit Symmetry:**
    *   **Even Functions** ($\displaystyle f(-x)=f(x)$): $\displaystyle \int_{-a}^a f(x) \, dx = 2\int_0^a f(x) \, dx$.
    *   **Odd Functions** ($\displaystyle f(-x)=-f(x)$): $\displaystyle \int_{-a}^a f(x) \, dx = 0$.
4.  **Watch for Discontinuities:** FTC Part 2 requires continuity on $\displaystyle [a, b]$. If $\displaystyle f$ has a discontinuity (like a vertical asymptote), the integral is "improper" and needs special handling—we'll get to that later.

**Example 1: Integral with Absolute Value**
Evaluate $\displaystyle \int_{-2}^3 |x| \, dx$.

*   $\displaystyle |x|$ changes behavior at $\displaystyle x=0$. Split the integral:
    $\displaystyle \int_{-2}^3 |x| \, dx = \int_{-2}^0 |x| \, dx + \int_{0}^3 |x| \, dx$.
*   On $\displaystyle [-2,0]$, $\displaystyle |x| = -x$. On $\displaystyle [0,3]$, $\displaystyle |x| = x$.
*   $\displaystyle \int_{-2}^0 (-x) dx = \left[ -\frac{x^2}{2} \right]_{-2}^0 = 0 - (-\frac{4}{2}) = 2$.
*   $\displaystyle \int_{0}^3 x dx = \left[ \frac{x^2}{2} \right]_0^3 = \frac{9}{2} - 0 = 4.5$.
*   Total: $\displaystyle 2 + 4.5 = \boxed{6.5}$.

**Example 2: Using Symmetry**
Evaluate $\displaystyle \int_{-\pi/2}^{\pi/2} \sin^3 x \cos x \, dx$.

*   Check if the integrand is odd or even.
    *   Let $\displaystyle f(x) = \sin^3 x \cos x$.
    *   $\displaystyle f(-x) = \sin^3(-x) \cos(-x) = (-\sin x)^3 \cos x = -\sin^3 x \cos x = -f(x)$.
    *   So $\displaystyle f$ is an **odd** function. The interval $\displaystyle [-\pi/2, \pi/2]$ is symmetric about 0.
*   Therefore, by symmetry, $\displaystyle \int_{-\pi/2}^{\pi/2} \sin^3 x \cos x \, dx = \boxed{0}$.
*   *You could also do a u-substitution (u = sin x), but symmetry is way faster!*

**Example 3: Simplify First**
Evaluate $\displaystyle \int_1^2 \frac{x^2 + 1}{x} \, dx$.

*   Simplify the integrand: $\displaystyle \frac{x^2+1}{x} = x + \frac{1}{x}$.
*   Antiderivative: $\displaystyle F(x) = \frac{x^2}{2} + \ln|x|$.
*   Evaluate: $\displaystyle F(2) - F(1) = \left(\frac{4}{2} + \ln 2\right) - \left(\frac{1}{2} + \ln 1\right) = (2 + \ln 2) - (0.5 + 0) = \boxed{1.5 + \ln 2}$.

**Example 4: A Warning About Continuity**
Can we evaluate $\displaystyle \int_0^2 \frac{1}{x-1} \, dx$ using FTC Part 2?

*   The integrand $\displaystyle f(x) = \frac{1}{x-1}$ has a vertical asymptote (infinite discontinuity) at $\displaystyle x=1$, which is inside $\displaystyle [0,2]$.
*   **FTC Part 2 does not apply** because $\displaystyle f$ is not continuous on $\displaystyle [0,2]$.
*   If we blindly applied it with $\displaystyle F(x) = \ln|x-1|$, we'd get $\displaystyle \ln|1| - \ln|1| = 0$, which is wrong. The integral actually diverges (goes to infinity). We'll learn how to handle these "improper integrals" later.