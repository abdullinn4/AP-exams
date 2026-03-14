# Key Theorems and Extreme Values

Welcome to Unit 5! 

This is where we start putting everything together—derivatives, rates of change, and now we're going to use them to answer some fundamental questions: Where does a function reach its highest and lowest points? How can we guarantee that such points exist? And what's the connection between average rate of change and instantaneous rate of change?

These questions lead us to three big ideas: the Mean Value Theorem, the Extreme Value Theorem, and the concept of critical points. These are the theoretical foundations that justify everything we do when we optimize functions—which is exactly what's coming up in the next lesson.

Let's dive in.

---

## **The Mean Value Theorem (MVT)**

Ever wondered if there's a moment when your instantaneous speed exactly matches your average speed for a trip? The Mean Value Theorem says yes—provided your motion is smooth enough.

### **Definition:**

If a function $f$ is:

1. Continuous on the closed interval $[a, b]$, and
2. Differentiable on the open interval $(a, b)$,

then there exists at least one number $c$ in $(a, b)$ such that:

$$
f'(c) = \frac{f(b) - f(a)}{b - a}
$$

This means the instantaneous rate of change at $c$ equals the average rate of change over $[a, b]$.

**Geometric Interpretation:**

Draw the secant line through $(a, f(a))$ and $(b, f(b))$. Its slope is the average rate. The MVT guarantees there's at least one point $c$ where the tangent line is parallel to that secant line. In other words, somewhere between $a$ and $b$, the function's slope matches the average slope.

**Why It Matters:**

The MVT is a *guarantee theorem*. It tells us that under the right conditions, a point with a specific property *must* exist. We don't always know exactly where it is, but we know it's out there. This is incredibly useful for proving other results and for making guarantees in real-world contexts.

**Conditions are Crucial:**

If either continuity or differentiability fails on the interval, the conclusion may not hold. The function needs to be smooth—no jumps, no sharp corners—for the theorem to apply.

**Example 1: Verifying MVT**

For $f(x) = x^2$ on $[1, 3]$, find a $c$ that satisfies the MVT.

- Check conditions: $f$ is a polynomial, so it's continuous and differentiable everywhere.
- Average rate: $\frac{f(3)-f(1)}{3-1} = \frac{9-1}{2} = 4$.
- Derivative: $f'(x) = 2x$.
- Set $f'(c) = 4$: $2c = 4$ → $c = 2$, which is in $(1, 3)$.

So at $x = 2$, the instantaneous rate of change equals the average rate over the interval.

**Example 2: Real-World Application**

Suppose a car travels 100 miles in 2 hours. The MVT guarantees that at some instant, the car's speedometer must have read exactly 50 mph.

Why? Average speed = 50 mph. Assuming the position function is continuous (no teleportation) and differentiable (no instantaneous changes in direction), the MVT says there's some time $c$ where instantaneous speed equals that average.

**Example 3: When MVT Fails**

Consider $f(x) = |x|$ on $[-1, 1]$.

- $f$ is continuous on $[-1, 1]$.
- But $f$ is not differentiable at $x = 0$ (there's a sharp corner).
- Average rate: $\frac{f(1)-f(-1)}{1-(-1)} = \frac{1-1}{2} = 0$.
- However, $f'(x) = -1$ for $x < 0$ and $f'(x) = 1$ for $x > 0$, so there is no $c$ where $f'(c) = 0$.

The MVT does not apply because the differentiability condition fails. The sharp corner breaks the guarantee.

---

## **The Extreme Value Theorem (EVT)**

Here's another guarantee: if you have a continuous function on a closed interval, it must have a highest point and a lowest point. No ifs, ands, or buts.

### **Definition:**

If a function $f$ is continuous on a **closed interval** $[a, b]$, then $f$ attains both an **absolute maximum** and an **absolute minimum** value on $[a, b]$.

That is, there exist numbers $c$ and $d$ in $[a, b]$ such that:

$$
f(c) \leq f(x) \leq f(d) \quad \text{for all } x \in [a, b]
$$

We call $f(c)$ the absolute minimum and $f(d)$ the absolute maximum on $[a, b]$.

**Key Conditions:**

- The interval must be **closed** (includes endpoints).
- The function must be **continuous** on that interval.

If either condition fails, the function might not have absolute extrema on the interval.

**Where Do Extrema Occur?**

Absolute extrema can occur at:
- **Critical points** (where $f'(x) = 0$ or does not exist)
- **Endpoints** of the interval

**Example 1: EVT Holds**

$f(x) = x^2$ on $[-1, 2]$.

- Continuous on closed interval → EVT applies.
- Absolute minimum at $x=0$ (value 0).
- Absolute maximum at $x=2$ (value 4).

**Example 2: Failure Due to Open Interval**

$f(x) = \frac{1}{x}$ on $(0, 1)$.

- Interval is open, function is continuous on $(0,1)$ but the interval isn't closed.
- No absolute maximum: values increase without bound as $x \to 0^+$.
- No absolute minimum: values approach 1 but never reach it as $x \to 1^-$.

**Example 3: Failure Due to Discontinuity**

$f(x) = \frac{1}{x}$ on $[-1, 1]$.

- Interval is closed but function is discontinuous at $x=0$.
- No absolute maximum or minimum—the function blows up near zero.

---

## **Critical Points**

If we're going to find extrema, we need to know where to look. Critical points are the prime candidates.

### **Definition:**

A **critical point** of a function $f$ is a number $c$ in the domain of $f$ such that either:

1. $f'(c) = 0$, or
2. $f'(c)$ does not exist.

**Why Important:**

Critical points are *candidates* for local (relative) extrema. However—and this is important—not every critical point gives an extremum. Some critical points are inflection points where the function just keeps increasing or decreasing but momentarily flattens out.

**Finding Critical Points:**

1. Compute $f'(x)$.
2. Find where $f'(x) = 0$.
3. Find where $f'(x)$ is undefined.
4. Check that these $x$-values are in the domain of $f$.

**Example 1: Polynomial**

Find critical points of $f(x) = x^3 - 3x^2 + 4$.

- $f'(x) = 3x^2 - 6x = 3x(x-2)$.
- Set $f'(x)=0$: $3x(x-2)=0$ → $x=0, 2$.
- Both are in the domain.
- Critical points: $x=0$ and $x=2$.

**Example 2: With Undefined Derivative**

Find critical points of $f(x) = x^{2/3}$.

- $f'(x) = \frac{2}{3}x^{-1/3} = \frac{2}{3\sqrt[3]{x}}$.
- $f'(x) = 0$ has no solution (numerator is constant 2, never zero).
- $f'(x)$ is undefined at $x=0$, and $0$ is in the domain.
- Critical point: $x=0$. (The graph has a cusp here.)

**Example 3: Rational Function**

Find critical points of $f(x) = \frac{x}{x^2+1}$.

- Use quotient rule: 
  $$f'(x) = \frac{(1)(x^2+1) - (x)(2x)}{(x^2+1)^2} = \frac{x^2+1 - 2x^2}{(x^2+1)^2} = \frac{1-x^2}{(x^2+1)^2}$$
- Set numerator = 0: $1-x^2=0$ → $x=\pm1$.
- Denominator never zero, derivative always defined.
- Critical points: $x=-1$ and $x=1$.

---

## **Increasing/Decreasing Behavior and First Derivative Test**

Once we have critical points, we need to figure out what's happening around them. Is the function going up or down? That's where the sign of the derivative tells the story.

### **Definition:**

- A function $f$ is **increasing** on an interval if for any $x_1 < x_2$ in the interval, $f(x_1) < f(x_2)$. Typically, $f'(x) > 0$ on the interval (with possible isolated points where $f'(x)=0$).
- A function $f$ is **decreasing** on an interval if for any $x_1 < x_2$ in the interval, $f(x_1) > f(x_2)$. Typically, $f'(x) < 0$ on the interval.

**How to Determine Intervals of Increase/Decrease:**

1. Find all critical points of $f$.
2. Use these points to partition the number line into intervals.
3. Choose a test point in each interval.
4. Evaluate the sign of $f'$ at each test point.
5. If $f' > 0$, $f$ is increasing on that interval. If $f' < 0$, $f$ is decreasing.

**First Derivative Test (for Local Extrema):**

Suppose $c$ is a critical point of $f$ and $f$ is continuous at $c$.

- If $f'$ changes from **positive to negative** at $c$, then $f$ has a **local maximum** at $c$.
- If $f'$ changes from **negative to positive** at $c$, then $f$ has a **local minimum** at $c$.
- If $f'$ does **not change sign** at $c$, then $f$ has **no local extremum** at $c$ (it might be an inflection point).

**Example 1: Finding Intervals of Increase/Decrease**

For $f(x) = x^3 - 3x^2 + 4$, we found critical points at $x=0$ and $x=2$.

- Test intervals: $(-\infty, 0)$, $(0, 2)$, $(2, \infty)$.
- Choose test points: $x=-1$, $x=1$, $x=3$.
- $f'(-1) = 3(-1)(-3) = 9 > 0$ → increasing on $(-\infty, 0)$.
- $f'(1) = 3(1)(-1) = -3 < 0$ → decreasing on $(0, 2)$.
- $f'(3) = 3(3)(1) = 9 > 0$ → increasing on $(2, \infty)$.

**Example 2: First Derivative Test**

Classify the critical points of $f(x) = x^3 - 3x^2 + 4$.

- At $x=0$: $f'$ changes from positive to negative → **local maximum**.
- At $x=2$: $f'$ changes from negative to positive → **local minimum**.

Local maximum value: $f(0) = 4$.
Local minimum value: $f(2) = 8 - 12 + 4 = 0$.

**Example 3: Function with a Cusp**

Consider $f(x) = x^{2/3}$. Critical point at $x=0$.

- $f'(x) = \frac{2}{3\sqrt[3]{x}}$.
- For $x<0$, $f'(x) < 0$ (decreasing).
- For $x>0$, $f'(x) > 0$ (increasing).
- At $x=0$, $f'$ changes from negative to positive → **local minimum** (value 0).

---

## **Absolute Extrema on a Closed Interval**

Now we combine everything. The Extreme Value Theorem guarantees that absolute extrema exist on a closed interval. The First Derivative Test helps us find candidates. Here's the procedure.

### **REMEMBER**

To find the **absolute (global) maximum and minimum** of a continuous function $f$ on a closed interval $[a, b]$:

1. Find all critical points of $f$ in $(a, b)$.
2. Evaluate $f$ at each critical point and at the endpoints $a$ and $b$.
3. The largest value is the absolute maximum; the smallest is the absolute minimum.

**Why This Works:**

Because of the EVT, the absolute extrema must exist. And they must occur either at critical points (where the derivative is zero or undefined) or at the endpoints of the interval. So by checking all these candidates, we're guaranteed to find the absolute max and min.

**Example 1: Closed Interval**

Find absolute extrema of $f(x) = x^3 - 3x^2 + 4$ on $[-1, 3]$.

- Critical points from earlier: $x=0$ and $x=2$ (both in the interval).
- Evaluate:
  - $f(-1) = (-1) - 3(1) + 4 = -1 - 3 + 4 = 0$
  - $f(0) = 4$
  - $f(2) = 8 - 12 + 4 = 0$
  - $f(3) = 27 - 27 + 4 = 4$
- Absolute maximum: 4 (occurs at $x=0$ and $x=3$).
- Absolute minimum: 0 (occurs at $x=-1$ and $x=2$).

**Example 2: Function with Undefined Derivative**

Find absolute extrema of $f(x) = |x|$ on $[-2, 3]$.

- Critical point: $x=0$ (derivative undefined).
- Evaluate:
  - $f(-2) = 2$
  - $f(0) = 0$
  - $f(3) = 3$
- Absolute maximum: 3 at $x=3$.
- Absolute minimum: 0 at $x=0$.

**Example 3: Rational Function**

Find absolute extrema of $f(x) = \frac{x}{x^2+1}$ on $[0, 2]$.

- Critical points: $f'(x) = \frac{1-x^2}{(x^2+1)^2} = 0$ → $x = \pm1$. Only $x=1$ is in $[0, 2]$.
- Evaluate:
  - $f(0) = 0$
  - $f(1) = \frac{1}{2} = 0.5$
  - $f(2) = \frac{2}{5} = 0.4$
- Absolute maximum: 0.5 at $x=1$.
- Absolute minimum: 0 at $x=0$.

---

### **Summary**

**Key Theorems:**

| Theorem | Conditions | Conclusion |
|---------|------------|------------|
| **Mean Value Theorem (MVT)** | $f$ continuous on $[a,b]$, differentiable on $(a,b)$ | There exists $c \in (a,b)$ such that $f'(c) = \frac{f(b)-f(a)}{b-a}$ |
| **Extreme Value Theorem (EVT)** | $f$ continuous on $[a,b]$ | $f$ has absolute max and min on $[a,b]$ |

**Critical Points:**

- Where $f'(x) = 0$ OR $f'(x)$ does not exist, and $x$ is in the domain of $f$.
- Candidates for local extrema.

**First Derivative Test:**

- If $f'$ changes from + to – at $c$ → local maximum at $c$.
- If $f'$ changes from – to + at $c$ → local minimum at $c$.
- If $f'$ doesn't change sign → no local extremum at $c$.

**Finding Absolute Extrema on a Closed Interval $[a,b]$:**

1. Find all critical points in $(a,b)$.
2. Evaluate $f$ at these critical points and at the endpoints $a$ and $b$.
3. The largest value is the absolute maximum; the smallest is the absolute minimum.

**Important Reminders:**

- The MVT requires *differentiability* on the open interval and *continuity* on the closed interval. If there's a sharp corner or discontinuity, the theorem may not apply.
- The EVT requires *continuity* on a *closed* interval. Open intervals or discontinuities break the guarantee.
- Not every critical point is an extremum—always check the sign change of the derivative.
- Absolute extrema on a closed interval are found by comparing values at critical points AND endpoints.

---

These theorems and techniques are the foundation for optimization problems—where we actually use calculus to find the best possible outcome in real-world situations. In the next lesson, we'll apply everything we've learned to solve problems like "What dimensions maximize the volume of a box?" or "When is profit maximized?"

But for now, make sure you're comfortable with the Mean Value Theorem, finding critical points, determining intervals of increase and decrease, and finding absolute extrema on closed intervals. These are essential skills for the AP exam and for everything that follows.