# The Derivative Concept

We already know what the slope of a curve at a point is. And we also talked about how we get it by approximating the slope of the secant line. Let's recap.

## **Average Rate of Change and the Difference Quotient**



So basically, we want the slope of the tangent line to a curve at a point. Let's say we want it at $\displaystyle x = a$.


The problem? 

We're only given one point. All we know so far is how to find the slope of a straight line when we have two points. That slope is the slope of the **secant line** through $\displaystyle (a, f(a))$ and some other point $\displaystyle (b, f(b))$:

![desmos-graph (37).svg](unit-2/lesson-1/desmos-graph_(37).svg)

$$
\displaystyle m_{sec} = \frac{f(b) - f(a)}{b - a}
$$

For a function $\displaystyle f(x)$, the **average rate of change** from $\displaystyle x = a$ to $\displaystyle x = b$ is exactly that:

$$
\displaystyle \frac{f(b) - f(a)}{b - a}
$$

By the way, this fraction has a name—it's called the **difference quotient**.

So we can find the slope of a secant line and use it to approximate the slope of the tangent. We fix the point $\displaystyle x = a$ and let the second point be $\displaystyle (x, f(x))$.

![desmos-graph (38).svg](unit-2/lesson-1/desmos-graph_(38).svg)

As we bring that second point closer to $\displaystyle x = a$, the approximation gets better.

![desmos-graph (39).svg](unit-2/lesson-1/desmos-graph_(39).svg)
![desmos-graph (40).svg](unit-2/lesson-1/desmos-graph_(40).svg)

We want to move it as close as possible—infinitely close, really really really close, actually, because points are infinitely small things. When we do that, the secant slope becomes exactly the tangent slope. So we use the limit concept to write:

$$
\displaystyle \lim_{x \to a} \frac{f(x) - f(a)}{x - a} = m_{\text{tan}}
$$

We can also get the same thing by writing the second point as $\displaystyle (a + h, f(a + h))$.

![desmos-graph (41).svg](unit-2/lesson-1/desmos-graph_(41).svg)

Don't freak out—it's just a different way to write the same difference quotient. Here $\displaystyle h$ is the change in $\displaystyle x$.

So for a point $\displaystyle x = a$ and a tiny change $\displaystyle h$, the difference quotient gives the average rate over $\displaystyle [a, a + h]$:

$$
\displaystyle \frac{f(a + h) - f(a)}{h}
$$

And the slope of the tangent line can then be written as:

$$
\displaystyle \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}
$$

So yeah, the slope of the secant line represents the average rate of change of your function. It tells you how much $\displaystyle f(x)$ changed over the change in $\displaystyle x$.

Now,   if we take those two points super close—making the change super tiny—we go from the average rate of change (slope of the secant) to the **instantaneous rate of change** (slope of the tangent). And now we're gonna give that limit a third name.

---

## **The Derivative: Limit of the Difference Quotient**

### **Definition:**

The **derivative of $\displaystyle f$ at a point $\displaystyle x = a$**, denoted $\displaystyle f'(a)$, is the limit of the difference quotient as the interval shrinks to zero:

$$
\displaystyle f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}
$$

or equivalently

$$
\displaystyle f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}
$$

provided this limit exists. This limit defines the **instantaneous rate of change** of $\displaystyle f$ at $\displaystyle a$ and the slope of the tangent line to $\displaystyle f$ at $\displaystyle a$.

So it's just another name for those two things. From now on, we'll mostly work with the $\displaystyle h$ version:

$$
\displaystyle f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}
$$

And if you look closely, you'll see it's easy to turn this into a function. Just replace $\displaystyle a$ with $\displaystyle x$—meaning the point can be any random $\displaystyle x$—and we get the derivative as a function.

The **derivative function**, $\displaystyle f'(x)$, is defined by:

$$
\displaystyle f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
$$

This gives us a rule for finding the slope of the tangent line at any point $\displaystyle x$ where the limit exists.

You'll see a bunch of different notations for the derivative:

**Notation:** If $\displaystyle y = f(x)$, the derivative can be written as $\displaystyle f'(x)$, $\displaystyle y'$, or $\displaystyle \frac{dy}{dx}$.

Geometrically, $\displaystyle f'(a)$ is the **slope of the tangent line** to the graph of $\displaystyle y = f(x)$ at the point $\displaystyle (a, f(a))$. That connects the analytic limit definition to a nice visual picture.

The process of finding the derivative of a function is called **differentiation**. A function is **differentiable** at $\displaystyle x$ if its derivative exists there, and it's differentiable on an open interval $\displaystyle (a, b)$ if it's differentiable at every point in that interval.

**Examples:**

1. Find $\displaystyle f'(1)$ for $\displaystyle f(x) = x^2 + 3x$ using $\displaystyle f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}$.
   - $\displaystyle f(1) = 1 + 3 = 4$
   - $\displaystyle \lim_{x \to 1} \frac{(x^2 + 3x) - 4}{x - 1} = \lim_{x \to 1} \frac{x^2 + 3x - 4}{x - 1}$

   - Factor: $\displaystyle \frac{(x - 1)(x + 4)}{x - 1} = x + 4$ for $\displaystyle x \neq 1$
   - $\displaystyle \lim_{x \to 1} (x + 4) = 5$
   - **Result:** $\displaystyle f'(1) = 5$.

2. Find $\displaystyle \frac{dy}{dx}$ for $\displaystyle y = \frac{1}{x}$ using $\displaystyle f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$.
   - $\displaystyle \lim_{h \to 0} \frac{\frac{1}{x + h} - \frac{1}{x}}{h} = \lim_{h \to 0} \frac{x - (x + h)}{h x (x + h)}$
   - $\displaystyle = \lim_{h \to 0} \frac{-h}{h x (x + h)} = \lim_{h \to 0} \frac{-1}{x (x + h)}$
   - $\displaystyle = -\frac{1}{x^2}$
   - **Result:** $\displaystyle \frac{dy}{dx} = f'(x) = -\frac{1}{x^2}$.

3. Find the equation of the tangent line to $\displaystyle f(x) = \sqrt{x}$ at $\displaystyle x = 4$.
   - $\displaystyle f(4) = 2$, $\displaystyle f(4 + h) = \sqrt{4 + h}$
   - Slope: need $\displaystyle f'(4)$. Using the difference quotient:
     $\displaystyle f'(4) = \lim_{h \to 0} \frac{\sqrt{4 + h} - 2}{h}$

   - Rationalize:
     $\displaystyle \frac{\sqrt{4 + h} - 2}{h} \cdot \frac{\sqrt{4 + h} + 2}{\sqrt{4 + h} + 2} = \frac{(4 + h) - 4}{h(\sqrt{4 + h} + 2)} = \frac{1}{\sqrt{4 + h} + 2}$
   - So $\displaystyle f'(4) = \lim_{h \to 0} \frac{1}{\sqrt{4 + h} + 2} = \frac{1}{4}$
   - Equation: $\displaystyle y - 2 = \frac{1}{4}(x - 4)$ or $\displaystyle y = \frac{1}{4}x + 1$.

---

## **Estimating Derivatives**

Sometimes it's hard to find the exact derivative at a point—or maybe College Board just wants to see if you can estimate it. Either way, estimating derivatives is a useful skill.

We can **estimate** $\displaystyle f'(a)$ value (slope of the tangent line) just simply using the slope of the secant line, remember the beginning. This is exactly what we did. 

$$m_{sec} = \frac{f(a + h) - f(a)}{h} \approx m_{tan}$$

So in general:

$$f'(x) \approx \frac{f(x + h) - f(x)}{h}$$

Where $h$ is the horizontal distance to the next point you have data for.

or, if we take second point behind the first one, it will be:
$$f'(x) \approx \frac{f(x) - f(x - h)}{h}$$

Let's look at the example.

The table shows the temperature $T(t)$ of a cup of coffee, in degrees Fahrenheit, $t$ minutes after it was poured.

| $t$ (min) | 0 | 3 | 6 | 9 | 12 |
|-----------|---|---|---|---|----|
| $T(t)$ (°F) | 180 | 165 | 153 | 144 | 137 |

**Estimate $T'(6)$, the rate of change at $t = 6$ minutes. Show the setups.**

**Forward Difference** (using $t = 6$ and $t = 9$, so $h = 3$):
$$T'(6) \approx \frac{T(9) - T(6)}{9 - 6} = \frac{144 - 153}{3} = \frac{-9}{3} = -3 \text{ °F per minute.}$$
Again, we take the point 9 and $h=3$, because it's the closest. And as we know, the closer the point, the better approximation.

**Backward Difference** (using $t = 3$ and $t = 6$, so $h = 3$):
$$T'(6) \approx \frac{T(6) - T(3)}{6 - 3} = \frac{153 - 165}{3} = \frac{-12}{3} = -4 \text{ °F per minute.}$$


Honestly, forward and backward differences aren't the best way to estimate derivatives. Graphing calculators and computer algebra systems use something better: the symmetric difference quotient.

$$\frac{f(x + h) - f(x - h)}{2h}$$

And it's easy to see why this works better—it's just the average of the forward and backward differences.

Average them:
$$\frac{ \frac{f(x + h) - f(x)}{h} + \frac{f(x) - f(x - h)}{h} }{2}$$

Combine the numerators over the common denominator $h$:
$$\frac{ f(x + h) - f(x) + f(x) - f(x - h) }{2h}$$

Notice $-f(x) + f(x)$ cancels out? Beautiful. You're left with:
$$\frac{f(x + h) - f(x - h)}{2h}$$

Boom. That's the symmetric quotient.

By averaging the slope from the left and the slope from the right, you cancel out some of the error. You're basically saying, "Whatever the trend is doing on both sides, let's meet in the middle." That's why it gives a better estimate of the **instantaneous** rate than either one-sided look.

For the previous example it will give

**Symmetric Difference** (using $t = 3$ and $t = 9$, with $2h = 6$, so $h = 3$):
$$T'(6) \approx \frac{T(9) - T(3)}{9 - 3} = \frac{144 - 165}{6} = \frac{-21}{6} = -3.5 \text{ °F per minute.}$$

See what happened? The forward said $-3$, backward said $-4$. The symmetric split the difference and gave $-3.5$. That's your best estimate for how fast the coffee was cooling exactly at the 6-minute mark.

One more example:

1. Estimate $\displaystyle g'(2)$ from the table for $\displaystyle g(x)$:

   | $\displaystyle x$ | 1.9 | 1.99 | 2.0 | 2.01 | 2.1 |
   |---|---|---|---|---|---|
   | $\displaystyle g(x)$ | 3.61 | 3.9601 | 4.0 | 4.0401 | 4.41 |

   - Using symmetric difference with $\displaystyle h = 0.1$: $\displaystyle \frac{g(2.1) - g(1.9)}{0.2} = \frac{4.41 - 3.61}{0.2} = \frac{0.8}{0.2} = 4$
   - Using symmetric difference with $\displaystyle h = 0.01$: $\displaystyle \frac{g(2.01) - g(1.99)}{0.02} = \frac{4.0401 - 3.9601}{0.02} = \frac{0.08}{0.02} = 4$
   - **Estimate:** $\displaystyle g'(2) \approx 4$.

---

## **Differentiability and Continuity**

This is super important part. Master this.

### **Theorem:** 
If $\displaystyle f$ is differentiable at $\displaystyle x = a$, then $\displaystyle f$ is continuous at $\displaystyle x = a$.

It's easy to prove.

We show $\displaystyle f$ is continuous at $\displaystyle x = c$ by proving $\displaystyle f(x) \to f(c)$ as $\displaystyle x \to c$. Using differentiability at $\displaystyle x = c$, consider:

$$
\displaystyle \lim_{x \to c} [f(x) - f(c)] = \lim_{x \to c} \left[ (x - c) \left( \frac{f(x) - f(c)}{x - c} \right) \right]
$$

$$
\displaystyle = \left[ \lim_{x \to c} (x - c) \right] \left[ \lim_{x \to c} \frac{f(x) - f(c)}{x - c} \right]
$$

$$
\displaystyle = (0)[f'(c)] = 0
$$

Since $\displaystyle f(x) - f(c) \to 0$ as $\displaystyle x \to c$, we get

$$
\displaystyle \lim_{x \to c} f(x) = f(c).
$$

So $\displaystyle f$ is continuous at $\displaystyle x = c$. $\square$

### **What Does "Not Differentiable" Actually Mean?**

Let's get real for a second. The derivative at a point is just a limit:

$$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$$

Like any limit, this only exists if the left-hand limit and right-hand limit are equal. So analytically speaking, **a function is not differentiable at $x = a$ simply because this limit doesn't exist.** The left and right-hand limits of the difference quotient aren't the same, or maybe one of them goes to infinity.

That's it. The definition fails. No limit, no derivative.


### **Graphical Scenarios: When Differentiability Goes Wrong**

Here's where it gets visual. On the AP exam, they'll show you a graph and ask, "Where is this function not differentiable?" Here's your checklist:

1. **Discontinuities (Any Kind)**

If the function isn't continuous at $x = a$, it's automatically not differentiable there. The theorem's contrapositive: no continuity = no derivative. This includes:

- **Holes** (removable discontinuities)
- **Jumps** (step discontinuities)
- **Vertical asymptotes** (infinite discontinuities)

*Why?* If there's a break, the difference quotient blows up or doesn't settle on a single value as $h \to 0$.

2. **Corners**

The graph makes a sharp turn. Left and right derivatives are finite but different numbers.

![desmos-graph (42).svg](unit-2/lesson-1/desmos-graph_(42).svg)

*Example:* $f(x) = |x-2|$ at $x = 2$. From the left, slope is $-1$. From the right, slope is $+1$. The limit of the difference quotient doesn't exist because left and right don't match.

3. **Cusps**

Like a corner, but the slopes approach infinity from one or both sides. The graph comes to a sharp point, often looking like a "V" but pointier, with one side going vertical.

![desmos-graph (43).svg](unit-2/lesson-1/desmos-graph_(43).svg)

*Example:* $f(x) = x^{2/3}$ at $x = 0$. The left-hand derivative approaches $-\infty$ and the right-hand approaches $+\infty$. Not a finite number, so no derivative.

4. **Vertical Tangents**

The function is continuous, and the graph is smooth, but it's so steep that the slope is infinite. The limit of the difference quotient is $\pm\infty$, which means the derivative doesn't exist as a real number.

![desmos-graph (44).svg](unit-2/lesson-1/desmos-graph_(44).svg)

*Example:* $f(x) = \sqrt[3]{x}$ at $x = 0$. The tangent line is vertical.

So, basically, we can wrap this all up

**1.** If $\displaystyle f$ is differentiable at $\displaystyle x = a$, then $\displaystyle f$ is continuous at $\displaystyle x = a$.

**2.** The reverse is **not** true. A function can be continuous at a point but **not** differentiable there. 

**3.** If $\displaystyle f$ is **not** continuous at $\displaystyle x = a$, then $\displaystyle f$ is **not** differentiable at $\displaystyle x = a$.


**Examples:**

1. Let $f(x) = |x|$. Determine if $f$ is continuous and differentiable at $x = 0$.

**Solution:**

**Step 1 — Check Continuity at $x = 0$**

- $f(0) = |0| = 0$
- Left-hand limit: $\displaystyle \lim_{x \to 0^-} |x| = \lim_{x \to 0^-} (-x) = 0$
- Right-hand limit: $\displaystyle \lim_{x \to 0^+} |x| = \lim_{x \to 0^+} (x) = 0$

Since $\displaystyle \lim_{x \to 0} f(x) = 0 = f(0)$, the function is **continuous** at $x = 0$.

**Step 2 — Check Differentiability at $x = 0$**

Use the limit definition: $f'(0) = \displaystyle \lim_{h \to 0} \frac{f(0 + h) - f(0)}{h} = \lim_{h \to 0} \frac{|h| - 0}{h} = \lim_{h \to 0} \frac{|h|}{h}$

- Left-hand limit: $\displaystyle \lim_{h \to 0^-} \frac{|h|}{h} = \lim_{h \to 0^-} \frac{-h}{h} = \lim_{h \to 0^-} (-1) = -1$
- Right-hand limit: $\displaystyle \lim_{h \to 0^+} \frac{|h|}{h} = \lim_{h \to 0^+} \frac{h}{h} = \lim_{h \to 0^+} (1) = 1$

Since the left and right limits are **not equal** ($-1 \neq 1$), the limit $\displaystyle \lim_{h \to 0} \frac{|h|}{h}$ does not exist.

**Conclusion:** $f$ is continuous at $x = 0$ but **not differentiable** at $x = 0$. This is a classic **corner**.

---

2. Let $f(x) = \begin{cases} x^2, & x < 1 \\ x + 1, & x \geq 1 \end{cases}$. Determine if $f$ is continuous and differentiable at $x = 1$.

**Solution:**

**Step 1 — Check Continuity at $x = 1$**

- $f(1) = 1 + 1 = 2$
- Left-hand limit: $\displaystyle \lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} x^2 = 1$
- Right-hand limit: $\displaystyle \lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} (x + 1) = 2$

Since $\displaystyle \lim_{x \to 1^-} f(x) = 1 \neq 2 = \lim_{x \to 1^+} f(x)$, the overall limit $\displaystyle \lim_{x \to 1} f(x)$ does not exist.

Therefore, $f$ is **not continuous** at $x = 1$.

**Step 2 — Check Differentiability at $x = 1$**

Here's the shortcut: differentiability **requires** continuity. If a function isn't continuous at a point, it can't be differentiable there. We don't even need to compute the difference quotient.

**Conclusion:** $f$ is **not differentiable** at $x = 1$ because it fails continuity first. This is a **jump discontinuity**.

---

3.  Let $f(x) = \sqrt[3]{x}$. Determine if $f$ is continuous and differentiable at $x = 0$.

**Solution:**

**Step 1 — Check Continuity at $x = 0$**

- $f(0) = \sqrt[3]{0} = 0$
- $\displaystyle \lim_{x \to 0} \sqrt[3]{x} = 0$ (cube root function is continuous everywhere)

Since $\displaystyle \lim_{x \to 0} f(x) = 0 = f(0)$, the function is **continuous** at $x = 0$.

**Step 2 — Check Differentiability at $x = 0$**

Use the limit definition: $f'(0) = \displaystyle \lim_{h \to 0} \frac{f(0 + h) - f(0)}{h} = \lim_{h \to 0} \frac{\sqrt[3]{h} - 0}{h} = \lim_{h \to 0} \frac{\sqrt[3]{h}}{h}$

Simplify: $\frac{\sqrt[3]{h}}{h} = \frac{h^{1/3}}{h^1} = h^{1/3 - 1} = h^{-2/3} = \frac{1}{h^{2/3}}$

So $f'(0) = \displaystyle \lim_{h \to 0} \frac{1}{h^{2/3}}$

As $h \to 0$, $h^{2/3} \to 0$, so $\frac{1}{h^{2/3}} \to \infty$. The limit is infinite.

Since the derivative must be a finite real number to exist, we say the derivative **does not exist** (infinite limit).

**Conclusion:** $f$ is continuous at $x = 0$ but **not differentiable** at $x = 0$. This is a **vertical tangent**.

---

4. Let $f(x) = x^2 - 3x + 2$. 
Determine if $f$ is continuous and differentiable at $x = 2$.

**Solution:**

**Step 1 — Check Continuity at $x = 2$**

Polynomials are continuous everywhere, so $f$ is continuous at $x = 2$. Let's verify anyway:

- $f(2) = (2)^2 - 3(2) + 2 = 4 - 6 + 2 = 0$
- $\displaystyle \lim_{x \to 2} (x^2 - 3x + 2) = 0$

Matches. Continuous.

**Step 2 — Check Differentiability at $x = 2$**

Use the limit definition: $f'(2) = \displaystyle \lim_{h \to 0} \frac{f(2 + h) - f(2)}{h}$

First, $f(2 + h) = (2 + h)^2 - 3(2 + h) + 2$
$= (4 + 4h + h^2) - 6 - 3h + 2$
$= (4 - 6 + 2) + (4h - 3h) + h^2$
$= 0 + h + h^2 = h + h^2$

And $f(2) = 0$.

So: $f'(2) = \displaystyle \lim_{h \to 0} \frac{(h + h^2) - 0}{h} = \lim_{h \to 0} \frac{h + h^2}{h} = \lim_{h \to 0} (1 + h) = 1$

The limit exists and equals $1$.

**Conclusion:** $f$ is both continuous **and** differentiable at $x = 2$. The derivative is $f'(2) = 1$.