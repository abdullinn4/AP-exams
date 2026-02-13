# Lesson 11: Key Theorems and Extreme Values

### **11.1 The Mean Value Theorem (MVT)**

**Definition:**
If a function $f$ is:

1. Continuous on the closed interval $[a, b]$, and
2. Differentiable on the open interval $(a, b)$,

then there exists at least one number $c$ in $(a, b)$ such that:
$$
f'(c) = \frac{f(b) - f(a)}{b - a}
$$

This means the instantaneous rate of change at $c$ equals the average rate of change over $[a, b]$.

**Comments:**

*   **Geometric Interpretation:** There is at least one point $c$ where the tangent line is parallel to the secant line through $(a, f(a))$ and $(b, f(b))$.
*   **Why it Matters:** The MVT guarantees the existence of a point with a specific derivative value without telling us exactly where it is. It connects local behavior (derivative) to global behavior (average change).
*   **Conditions are Crucial:** If either continuity or differentiability fails on the interval, the conclusion may not hold.

**Examples:**

1.  **Verifying MVT:** For $f(x) = x^2$ on $[1, 3]$, find a $c$ that satisfies the MVT.
    *   Check conditions: $f$ is continuous and differentiable everywhere (polynomial).
    *   Average rate: $\frac{f(3)-f(1)}{3-1} = \frac{9-1}{2} = 4$.
    *   Derivative: $f'(x) = 2x$.
    *   Set $f'(c) = 4$: $2c = 4$ → $c = 2$, which is in $(1, 3)$.
2.  **MVT Application:** Suppose a car travels 100 miles in 2 hours. The MVT guarantees that at some instant, the car's speedometer must have read exactly 50 mph. (Average speed = 50 mph, so there exists a time $c$ with instantaneous speed = 50 mph, assuming position is continuous and differentiable.)
3.  **When MVT Fails:** Consider $f(x) = |x|$ on $[-1, 1]$.
    *   $f$ is continuous on $[-1, 1]$.
    *   But $f$ is not differentiable at $x = 0$ (corner).
    *   Average rate: $\frac{f(1)-f(-1)}{1-(-1)} = \frac{1-1}{2} = 0$.
    *   However, $f'(x) = -1$ for $x < 0$ and $f'(x) = 1$ for $x > 0$, so there is no $c$ where $f'(c) = 0$. The MVT does not apply because the differentiability condition fails.

---

### **11.2 The Extreme Value Theorem (EVT)**

**Definition:**
If a function $f$ is continuous on a **closed interval** $[a, b]$, then $f$ attains both an **absolute maximum** and an **absolute minimum** value on $[a, b]$.

That is, there exist numbers $c$ and $d$ in $[a, b]$ such that:
$$
f(c) \leq f(x) \leq f(d) \quad \text{for all } x \in [a, b]
$$
We call $f(c)$ the absolute minimum and $f(d)$ the absolute maximum on $[a, b]$.

**Comments:**

*   **Key Conditions:** The interval must be **closed** (includes endpoints) and the function must be **continuous**. If either fails, the function might not have absolute extrema on the interval.
*   **Location:** Absolute extrema can occur at **critical points** (where $f'(x) = 0$ or does not exist) or at **endpoints** of the interval.

**Examples:**

1.  **EVT Holds:** $f(x) = x^2$ on $[-1, 2]$.
    *   Continuous on closed interval → EVT applies.
    *   Absolute minimum at $x=0$ (value 0), absolute maximum at $x=2$ (value 4).
2.  **Failure Due to Open Interval:** $f(x) = \frac{1}{x}$ on $(0, 1)$.
    *   Interval is open, function continuous on (0,1) but not closed.
    *   No absolute maximum (values increase without bound as $x \to 0^+$), no absolute minimum (values approach 1 but never reach it as $x \to 1^-$).
3.  **Failure Due to Discontinuity:** $f(x) = \frac{1}{x}$ on $[-1, 1]$.
    *   Interval is closed but function is discontinuous at $x=0$.
    *   No absolute maximum or minimum (unbounded).

---

### **11.3 Critical Points**

**Definition:**
A **critical point** of a function $f$ is a number $c$ in the domain of $f$ such that either:

1. $f'(c) = 0$, or
2. $f'(c)$ does not exist.

**Comments:**

*   **Why Important:** Critical points are *candidates* for local (relative) extrema. However, not every critical point gives an extremum (e.g., inflection points).
*   **Finding Critical Points:**
    1.  Compute $f'(x)$.
    2.  Find where $f'(x) = 0$ or where $f'(x)$ is undefined.
    3.  Check that these $x$-values are in the domain of $f$.
*   **Local vs. Absolute:** Local extrema occur at critical points, but absolute extrema on a closed interval also consider endpoints.

**Examples:**

1.  **Polynomial:** Find critical points of $f(x) = x^3 - 3x^2 + 4$.
    *   $f'(x) = 3x^2 - 6x = 3x(x-2)$.
    *   Set $f'(x)=0$: $3x(x-2)=0$ → $x=0, 2$.
    *   Both are in domain. Critical points: $x=0$ and $x=2$.
2.  **With Undefined Derivative:** Find critical points of $f(x) = x^{2/3}$.
    *   $f'(x) = \frac{2}{3}x^{-1/3} = \frac{2}{3\sqrt[3]{x}}$.
    *   $f'(x) = 0$ has no solution.
    *   $f'(x)$ is undefined at $x=0$, and $0$ is in domain.
    *   Critical point: $x=0$. (Graph has a cusp.)
3.  **Rational Function:** Find critical points of $f(x) = \frac{x}{x^2+1}$.
    *   Use quotient rule: $f'(x) = \frac{(1)(x^2+1) - (x)(2x)}{(x^2+1)^2} = \frac{1-x^2}{(x^2+1)^2}$.
    *   Set numerator = 0: $1-x^2=0$ → $x=\pm1$.
    *   Denominator never 0, derivative always defined.
    *   Critical points: $x=-1, 1$.

---

### **11.4 Increasing/Decreasing Behavior and First Derivative Test**

**Definition:**

*   A function $f$ is **increasing** on an interval if for any $x_1 < x_2$ in the interval, $f(x_1) < f(x_2)$. On the interval, $f'(x) > 0$ (with possible isolated points where $f'(x)=0$).
*   A function $f$ is **decreasing** on an interval if for any $x_1 < x_2$ in the interval, $f(x_1) > f(x_2)$. On the interval, $f'(x) < 0$.

**First Derivative Test (for Local Extrema):**
Suppose $c$ is a critical point of $f$ and $f$ is continuous at $c$.

*   If $f'$ changes from positive to negative at $c$, then $f$ has a **local maximum** at $c$.
*   If $f'$ changes from negative to positive at $c$, then $f$ has a **local minimum** at $c$.
*   If $f'$ does not change sign at $c$, then $f$ has no local extremum at $c$ (likely an inflection point).

**Comments:**

*   To determine intervals of increase/decrease:
    1.  Find critical points (where $f'(x)=0$ or undefined).
    2.  Use these points to partition the number line into intervals.
    3.  Test the sign of $f'(x)$ in each interval.
*   The First Derivative Test uses sign changes of $f'$ around critical points to classify them as local max/min.

**Examples:**

1.  **Finding Intervals of Increase/Decrease:** For $f(x) = x^3 - 3x^2 + 4$, we found critical points at $x=0, 2$. Determine intervals of increase/decrease.
    *   Test intervals: $(-\infty, 0)$, $(0, 2)$, $(2, \infty)$.
    *   Choose test points: e.g., $x=-1$, $x=1$, $x=3$.
    *   $f'(-1) = 3(1)(-3) = 9 > 0$ → increasing on $(-\infty, 0)$.
    *   $f'(1) = 3(1)(-1) = -3 < 0$ → decreasing on $(0, 2)$.
    *   $f'(3) = 3(3)(1) = 9 > 0$ → increasing on $(2, \infty)$.
2.  **First Derivative Test:** Classify the critical points of $f(x) = x^3 - 3x^2 + 4$.
    *   At $x=0$: $f'$ changes from + to – → local maximum.
    *   At $x=2$: $f'$ changes from – to + → local minimum.
    *   Local maximum value: $f(0) = 4$.
    *   Local minimum value: $f(2) = 8 - 12 + 4 = 0$.
3.  **Function with Cusp:** Consider $f(x) = x^{2/3}$. Critical point at $x=0$.
    *   $f'(x) = \frac{2}{3\sqrt[3]{x}}$.
    *   For $x<0$, $f'(x) < 0$ (decreasing).
    *   For $x>0$, $f'(x) > 0$ (increasing).
    *   At $x=0$, $f'$ changes from – to + → local minimum (value 0).

---

### **11.5 Absolute Extrema on a Closed Interval**

**Definition:**
To find the **absolute (global) maximum and minimum** of a continuous function $f$ on a closed interval $[a, b]$:

1.  Find all critical points of $f$ in $(a, b)$.
2.  Evaluate $f$ at each critical point and at the endpoints $a$ and $b$.
3.  The largest value is the absolute maximum; the smallest is the absolute minimum.

**Comments:**

*   This procedure works because of the EVT: absolute extrema exist and must occur at critical points or endpoints.
*   If the interval is not closed, absolute extrema may not exist, or you may need to analyze limits at open boundaries.

**Examples:**

1.  **Closed Interval:** Find absolute extrema of $f(x) = x^3 - 3x^2 + 4$ on $[-1, 3]$.
    *   Critical points: $x=0, 2$ (from earlier).
    *   Evaluate:
        *   $f(-1) = (-1) - 3(1) + 4 = -1 - 3 + 4 = 0$
        *   $f(0) = 4$
        *   $f(2) = 8 - 12 + 4 = 0$
        *   $f(3) = 27 - 27 + 4 = 4$
    *   Absolute maximum: 4 (at $x=0$ and $x=3$).
    *   Absolute minimum: 0 (at $x=-1$ and $x=2$).
2.  **Function with Undefined Derivative:** Find absolute extrema of $f(x) = |x|$ on $[-2, 3]$.
    *   Critical point at $x=0$ (derivative undefined).
    *   Evaluate: $f(-2)=2$, $f(0)=0$, $f(3)=3$.
    *   Absolute maximum: 3 at $x=3$.
    *   Absolute minimum: 0 at $x=0$.
3.  **Rational Function:** Find absolute extrema of $f(x) = \frac{x}{x^2+1}$ on $[0, 2]$.
    *   Critical points: $f'(x) = \frac{1-x^2}{(x^2+1)^2} = 0$ → $x=\pm1$. Only $x=1$ is in $[0, 2]$.
    *   Evaluate: $f(0)=0$, $f(1)=\frac{1}{2}=0.5$, $f(2)=\frac{2}{5}=0.4$.
    *   Absolute maximum: 0.5 at $x=1$.
    *   Absolute minimum: 0 at $x=0$.

---

### **Lesson 11 Summary**

**Key Theorems:**

*   **Mean Value Theorem (MVT):** If $f$ continuous on $[a,b]$, differentiable on $(a,b)$, then there exists $c \in (a,b)$ with $f'(c) = \frac{f(b)-f(a)}{b-a}$.
*   **Extreme Value Theorem (EVT):** If $f$ continuous on $[a,b]$, then $f$ has absolute max and min on $[a,b]$.

**Critical Points:**

*   Where $f'(x)=0$ or $f'(x)$ does not exist (and $x$ is in domain).
*   Candidates for local extrema.

**First Derivative Test:**

*   Increasing: $f'(x) > 0$
*   Decreasing: $f'(x) < 0$
*   Local max: $f'$ changes + → –
*   Local min: $f'$ changes – → +

**Finding Absolute Extrema on Closed Interval $[a,b]$:**

1.  Find critical points in $(a,b)$.
2.  Evaluate $f$ at critical points and endpoints.
3.  Compare values.

---

### **Additional Practice Problems**

1.  Verify the MVT for $f(x) = \sqrt{x}$ on $[1, 4]$. Find $c$.
2.  Determine whether the MVT applies to $f(x) = \frac{1}{x}$ on $[-1, 1]$. Explain.
3.  Find the critical points of $f(x) = x^4 - 8x^2 + 16$.
4.  Use the First Derivative Test to find local extrema of $f(x) = \frac{x^2}{x-1}$.
5.  Find the absolute maximum and minimum of $f(x) = x + \frac{1}{x}$ on $[0.5, 3]$.
6.  Show that the function $f(x) = x^3 + 3x + 1$ has exactly one real root. (Hint: Use MVT and monotonicity.)
7.  For $f(x) = \sin x + \cos x$ on $[0, \frac{\pi}{2}]$, find absolute extrema.
8.  Determine intervals of increase/decrease for $f(x) = \ln(x^2+1)$.
9.  Find critical points of $f(x) = |x^2 - 4|$. Are they local extrema?
10. A continuous function $f$ on $[-2, 3]$ has $f(-2)=5$, $f(3)=1$, and derivative $f'(x) < 0$ for all $x$ in $(-2, 3)$. What are the absolute maximum and minimum?

**Selected Solutions:**

1.  $f$ continuous on $[1,4]$, differentiable on $(1,4)$. Average rate: $\frac{\sqrt{4}-\sqrt{1}}{4-1} = \frac{2-1}{3} = \frac{1}{3}$. $f'(x) = \frac{1}{2\sqrt{x}}$. Set $\frac{1}{2\sqrt{c}} = \frac{1}{3}$ → $2\sqrt{c} = 3$ → $\sqrt{c} = 1.5$ → $c = 2.25 \in (1,4)$.
2.  No, because $f$ is discontinuous at $x=0 \in [-1,1]$. Also, not differentiable at 0.
3.  $f'(x) = 4x^3 - 16x = 4x(x^2-4) = 4x(x-2)(x+2)$. Set $=0$: $x=0, 2, -2$. All are critical points.
4.  Domain: $x \neq 1$. $f'(x) = \frac{2x(x-1) - x^2(1)}{(x-1)^2} = \frac{x^2-2x}{(x-1)^2} = \frac{x(x-2)}{(x-1)^2}$. Critical points: $x=0, 2$ (where $f'=0$), and $x=1$ (where $f'$ undefined, but not in domain, so not a critical point). Test intervals: $(-\infty,0)$, $(0,1)$, $(1,2)$, $(2,\infty)$. Sign of $f'$: + on $(-\infty,0)$, – on $(0,1)$, – on $(1,2)$, + on $(2,\infty)$. At $x=0$: + to – → local max. At $x=2$: – to + → local min.
5.  Domain includes $[0.5,3]$. $f'(x) = 1 - \frac{1}{x^2} = \frac{x^2-1}{x^2}$. Critical point where $x^2-1=0$ → $x=1$ (since $x=-1$ not in interval). Evaluate: $f(0.5)=0.5+2=2.5$, $f(1)=1+1=2$, $f(3)=3+\frac{1}{3}=3.333...$. So absolute min = 2 at $x=1$, absolute max = $\frac{10}{3}$ at $x=3$.
6.  $f'(x)=3x^2+3>0$ for all $x$, so $f$ is strictly increasing everywhere. Thus, it can cross the x-axis at most once. Since $\lim_{x\to-\infty} f(x)=-\infty$ and $\lim_{x\to\infty} f(x)=\infty$, by IVT there is exactly one real root.
7.  $f'(x) = \cos x - \sin x$. Set $=0$: $\cos x = \sin x$ → $x = \frac{\pi}{4}$ in $[0, \frac{\pi}{2}]$. Evaluate: $f(0)=1$, $f(\frac{\pi}{4})=\frac{\sqrt{2}}{2}+\frac{\sqrt{2}}{2}=\sqrt{2} \approx 1.414$, $f(\frac{\pi}{2})=0+1=1$. Absolute max = $\sqrt{2}$ at $x=\frac{\pi}{4}$, absolute min = 1 at endpoints.
8.  $f'(x) = \frac{2x}{x^2+1}$. Critical point at $x=0$. For $x<0$, $f'(x)<0$ → decreasing on $(-\infty,0)$. For $x>0$, $f'(x)>0$ → increasing on $(0,\infty)$.
9.  Write as piecewise: $f(x) = x^2-4$ for $|x|\ge2$, $f(x)=4-x^2$ for $|x|<2$. Derivative: For $x>2$, $f'(x)=2x$; for $-2<x<2$, $f'(x)=-2x$; for $x<-2$, $f'(x)=2x$. At $x=\pm2$, derivative does not exist (corners). Also, $f'(x)=0$ at $x=0$ (since $-2x=0$). Critical points: $x=-2, 0, 2$. At $x=-2$: left derivative = -4, right derivative = 4 → derivative does not exist. Similarly at $x=2$. First derivative test: For $x=-2$, to left $f'<0$ (since for $x<-2$, $2x$ negative), to right $f'>0$ (for $-2<x<0$, $-2x$ positive) → local min. At $x=0$: left $f'>0$ (for $-2<x<0$, $-2x$ positive), right $f'<0$ (for $0<x<2$, $-2x$ negative) → local max. At $x=2$: left $f'<0$ (for $0<x<2$, $-2x$ negative), right $f'>0$ (for $x>2$, $2x$ positive) → local min. So local minima at $x=\pm2$, local maximum at $x=0$.
10. Since $f'(x)<0$, $f$ is strictly decreasing. So maximum at left endpoint: $f(-2)=5$, minimum at right endpoint: $f(3)=1$.