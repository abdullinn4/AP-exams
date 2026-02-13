# Lesson 15: The Fundamental Theorem of Calculus

### **15.1 Accumulation Functions and the First Fundamental Theorem of Calculus**

**Definition:**
An **accumulation function** is a function defined by a definite integral with a variable upper limit. For a continuous function $f$ on an interval containing $a$, define:
$$
F(x) = \int_a^x f(t) \, dt
$$
This function accumulates the net area under the curve of $f$ from $a$ to $x$.

**The First Fundamental Theorem of Calculus (FTC Part 1):**
If $f$ is continuous on an interval containing $a$, then the accumulation function $F(x) = \int_a^x f(t) \, dt$ is differentiable for every $x$ in that interval, and
$$
F'(x) = \frac{d}{dx} \left[ \int_a^x f(t) \, dt \right] = f(x)
$$
That is, the derivative of an integral with respect to its upper limit is the integrand evaluated at that upper limit.

**Comments:**

*   **Key Insight:** The process of integration (accumulation) and differentiation (rate of change) are inverse operations. FTC Part 1 tells us that every continuous function has an antiderivative, specifically its accumulation function.
*   **Interpretation:** If $f$ represents a rate of change, then $F(x)$ gives the total accumulated change from a starting point $a$ to $x$. The rate at which this accumulation changes at $x$ is exactly $f(x)$.
*   **Graphical Behavior:** Given the graph of $f$, we can deduce properties of $F$:
    *   Where $f > 0$, $F$ is increasing.
    *   Where $f < 0$, $F$ is decreasing.
    *   Local extrema of $F$ occur where $f(x) = 0$ (critical points).
    *   Concavity of $F$ is determined by the sign of $f'$; equivalently, since $F''(x) = f'(x)$, $F$ is concave up where $f$ is increasing.
*   **Variable Limits:** If the upper limit is a function of $x$, say $g(x)$, then by the chain rule:
    $$
    \frac{d}{dx} \left[ \int_a^{g(x)} f(t) \, dt \right] = f(g(x)) \cdot g'(x)
    $$
    Similarly, if the lower limit is variable, use the fact that swapping limits introduces a negative sign.

**Examples:**

1.  **Basic FTC Part 1:** Find $F'(x)$ if $F(x) = \int_2^x (t^2 + 1) \, dt$.
    *   By FTC Part 1, $F'(x) = x^2 + 1$.
2.  **Chain Rule Application:** Find $\frac{d}{dx} \left[ \int_0^{x^2} \sin t \, dt \right]$.
    *   Let $u = x^2$. Then $\frac{d}{dx} \int_0^{u} \sin t \, dt = \sin(u) \cdot \frac{du}{dx} = \sin(x^2) \cdot 2x$.
3.  **Variable Lower Limit:** Find $\frac{d}{dx} \left[ \int_x^3 \sqrt{t^3 + 1} \, dt \right]$.
    *   First, swap limits: $\int_x^3 f(t) \, dt = -\int_3^x f(t) \, dt$.
    *   Then derivative: $-\frac{d}{dx} \int_3^x \sqrt{t^3+1} \, dt = -\sqrt{x^3+1}$.
4.  **Analyzing an Accumulation Function:** Let $F(x) = \int_{-2}^x f(t) \, dt$, where the graph of $f$ is given.
    *   Identify where $F$ has local maxima/minima (where $f(x) = 0$ and changes sign).
    *   Determine intervals where $F$ is increasing/decreasing (sign of $f$).

---

### **15.2 Properties of Definite Integrals**

**Definition:**
Let $f$ and $g$ be integrable functions on an interval containing $a$, $b$, and $c$. The definite integral satisfies the following properties:

1.  **Constant Multiple:** $\int_a^b k f(x) \, dx = k \int_a^b f(x) \, dx$, for any constant $k$.
2.  **Sum/Difference:** $\int_a^b [f(x) \pm g(x)] \, dx = \int_a^b f(x) \, dx \pm \int_a^b g(x) \, dx$.
3.  **Reversal of Limits:** $\int_a^b f(x) \, dx = -\int_b^a f(x) \, dx$.
4.  **Additivity Over Intervals:** $\int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx$, for any $c$ between $a$ and $b$.
5.  **Integral of Constant:** $\int_a^b c \, dx = c(b-a)$.
6.  **Zero Width Interval:** $\int_a^a f(x) \, dx = 0$.

**Comments:**

*   These properties allow us to simplify and compute integrals using geometry or known values.
*   The additivity property is especially useful for piecewise functions or functions with discontinuities.
*   If $f$ has a removable or jump discontinuity at a point inside $[a, b]$, the definite integral can still be evaluated by splitting at that point (the integral is defined as the limit of Riemann sums, which exist for bounded functions with finitely many discontinuities).
*   **Geometric Evaluation:** When $f$ is given graphically or by a formula that corresponds to simple geometric shapes (lines, semicircles, etc.), we can compute the integral as the net area.

**Examples:**

1.  **Using Geometry:** Evaluate $\int_0^4 (2x + 1) \, dx$ by interpreting it as area.
    *   The graph is a line from (0,1) to (4,9). The region is a trapezoid.
    *   Area = average height × width = $\frac{1+9}{2} \times 4 = 5 \times 4 = 20$.
2.  **Piecewise Function:** Evaluate $\int_{-1}^3 f(x) \, dx$, where $f(x) = \begin{cases} x+2 & \text{if } x \le 1 \\ 4 - x & \text{if } x > 1 \end{cases}$.
    *   Split at $x=1$: $\int_{-1}^3 f(x) \, dx = \int_{-1}^1 (x+2) \, dx + \int_1^3 (4-x) \, dx$.
    *   First integral: area under line from (-1,1) to (1,3) (trapezoid or compute): $\left[ \frac{1}{2}x^2 + 2x \right]_{-1}^1 = (0.5+2) - (0.5-2) = 2.5 - (-1.5) = 4$.
    *   Second integral: area under line from (1,3) to (3,1): $\left[ 4x - \frac{1}{2}x^2 \right]_1^3 = (12 - 4.5) - (4 - 0.5) = 7.5 - 3.5 = 4$.
    *   Total = $4 + 4 = 8$.
3.  **Using Properties:** Given $\int_1^5 f(x) \, dx = 8$ and $\int_3^5 f(x) \, dx = 5$, find $\int_1^3 f(x) \, dx$.
    *   By additivity: $\int_1^5 = \int_1^3 + \int_3^5 \Rightarrow 8 = \int_1^3 + 5 \Rightarrow \int_1^3 = 3$.

---

### **15.3 Antiderivatives and the Second Fundamental Theorem of Calculus**

**Definition:**
An **antiderivative** of a function $f$ is a function $F$ such that $F'(x) = f(x)$ for all $x$ in the domain of $f$. The process of finding an antiderivative is called **indefinite integration**, denoted by $\int f(x) \, dx = F(x) + C$, where $C$ is an arbitrary constant.

**The Second Fundamental Theorem of Calculus (FTC Part 2):**
If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$ (i.e., $F'(x) = f(x)$), then:
$$
\int_a^b f(x) \, dx = F(b) - F(a) = \left. F(x) \right|_a^b
$$

**Comments:**

*   **Power of FTC Part 2:** It allows us to compute definite integrals exactly by finding an antiderivative and evaluating at the endpoints, rather than taking limits of Riemann sums.
*   **Choosing the Antiderivative:** Any antiderivative works because the constant $C$ cancels when subtracting $F(b) - F(a)$.
*   **Connection to FTC Part 1:** The accumulation function $F(x) = \int_a^x f(t) \, dt$ is *one* antiderivative of $f$. All others differ by a constant.
*   **Notation:** The evaluation bar $\big|_a^b$ means substitute $b$ and $a$ into the expression and subtract.

**Examples:**

1.  **Basic FTC Part 2:** Evaluate $\int_1^3 (2x + 1) \, dx$.
    *   Find an antiderivative: $F(x) = x^2 + x$.
    *   Then $\int_1^3 (2x+1) \, dx = F(3) - F(1) = (9+3) - (1+1) = 12 - 2 = 10$.
2.  **Using Different Antiderivatives:** Evaluate $\int_0^{\pi} \cos x \, dx$.
    *   Antiderivative: $F(x) = \sin x$. (Could also use $\sin x + 5$, etc.)
    *   $\int_0^{\pi} \cos x \, dx = \sin(\pi) - \sin(0) = 0 - 0 = 0$.
3.  **Integral of a Polynomial:** Evaluate $\int_{-1}^2 (x^3 - 4x) \, dx$.
    *   Antiderivative: $F(x) = \frac{x^4}{4} - 2x^2$.
    *   $F(2) = \frac{16}{4} - 2(4) = 4 - 8 = -4$.
    *   $F(-1) = \frac{1}{4} - 2(1) = 0.25 - 2 = -1.75$.
    *   So integral $= (-4) - (-1.75) = -2.25$.

---

### **15.4 Evaluating Definite Integrals Analytically**

**Definition:**
Using FTC Part 2, we can evaluate definite integrals by:

1.  Finding an antiderivative of the integrand.
2.  Evaluating it at the upper and lower limits.
3.  Subtracting.

For more complicated integrands, we may need to use algebraic simplification, substitution (u-substitution), or other integration techniques (covered in Lesson 16).

**Comments:**

*   **Check Continuity:** FTC requires the integrand to be continuous on the interval of integration. If there is a discontinuity, we may need to split the integral.
*   **Absolute Value:** For integrals involving absolute value, split the interval where the expression inside changes sign.
*   **Symmetry:** For even and odd functions on symmetric intervals, we can simplify:
    *   If $f$ is even ($f(-x)=f(x)$), then $\int_{-a}^a f(x) \, dx = 2 \int_0^a f(x) \, dx$.
    *   If $f$ is odd ($f(-x)=-f(x)$), then $\int_{-a}^a f(x) \, dx = 0$.

**Examples:**

1.  **Integral with Absolute Value:** Evaluate $\int_{-2}^3 |x| \, dx$.
    *   Split at $x=0$: $\int_{-2}^3 |x| \, dx = \int_{-2}^0 (-x) \, dx + \int_0^3 x \, dx$.
    *   Antiderivative for $-x$ is $-\frac{x^2}{2}$, for $x$ is $\frac{x^2}{2}$.
    *   First part: $\left. -\frac{x^2}{2} \right|_{-2}^0 = 0 - (-\frac{4}{2}) = 0 - (-2) = 2$.
    *   Second part: $\left. \frac{x^2}{2} \right|_0^3 = \frac{9}{2} - 0 = 4.5$.
    *   Total $= 2 + 4.5 = 6.5$.
2.  **Using Symmetry:** Evaluate $\int_{-\pi/2}^{\pi/2} \sin^3 x \cos x \, dx$.
    *   Check parity: $\sin^3(-x) = -\sin^3 x$, $\cos(-x) = \cos x$, so the integrand is odd (odd × even = odd). The interval is symmetric about 0.
    *   Therefore, the integral is 0.
3.  **Rational Function:** Evaluate $\int_1^2 \frac{x^2 + 1}{x} \, dx$.
    *   Simplify: $\frac{x^2+1}{x} = x + \frac{1}{x}$.
    *   Antiderivative: $\frac{x^2}{2} + \ln|x|$.
    *   Evaluate: $\left( \frac{4}{2} + \ln 2 \right) - \left( \frac{1}{2} + \ln 1 \right) = (2 + \ln 2) - (0.5 + 0) = 1.5 + \ln 2$.
4.  **Discontinuity Consideration:** Evaluate $\int_0^2 \frac{1}{x-1} \, dx$.
    *   The integrand has a vertical asymptote at $x=1$, so the integral is improper (not covered until later). However, if we try to apply FTC directly, we get $\ln|x-1| \big|_0^2 = \ln 1 - \ln 1 = 0$, but this is incorrect because the function is not continuous on [0,2]. The integral actually diverges. So we must be cautious.

---

### **Lesson 15 Summary**

**First Fundamental Theorem of Calculus:**

*   If $F(x) = \int_a^x f(t) \, dt$ and $f$ is continuous, then $F'(x) = f(x)$.
*   Derivatives and integrals are inverse operations.

**Properties of Definite Integrals:**

*   Linearity: integral of sum = sum of integrals; constant multiple.
*   Reversing limits changes sign.
*   Additivity over intervals.
*   Useful for geometric evaluation and manipulating integrals.

**Second Fundamental Theorem of Calculus:**

*   If $f$ is continuous on $[a,b]$ and $F$ is any antiderivative of $f$, then $\int_a^b f(x) \, dx = F(b) - F(a)$.
*   This provides a method to compute definite integrals exactly.

**Key Skills:**

*   Given an accumulation function, differentiate it using FTC Part 1 (with chain rule if limits are functions).
*   Evaluate definite integrals using geometry (areas of triangles, circles, trapezoids).
*   Evaluate definite integrals analytically by finding an antiderivative and applying FTC Part 2.
*   Use properties of integrals to simplify calculations.

---

### **Additional Practice Problems**

1.  Let $F(x) = \int_0^x \sqrt{t^2+1} \, dt$. Find $F'(2)$.
2.  Find $\frac{d}{dx} \int_{x^2}^{x^3} \cos(t^2) \, dt$. (Hint: Split the integral at a constant, e.g., 0.)
3.  Evaluate $\int_{-3}^3 (9 - x^2) \, dx$ using geometry.
4.  Given $\int_0^2 f(x) \, dx = 6$ and $\int_1^3 f(x) \, dx = 4$, find $\int_0^3 f(x) \, dx$ and $\int_2^1 f(x) \, dx$.
5.  Evaluate $\int_1^4 \left( 3\sqrt{x} - \frac{2}{x^2} \right) \, dx$.
6.  Evaluate $\int_0^{\pi} (2\sin x - 3\cos x) \, dx$.
7.  The graph of $f$ consists of line segments from (0,0) to (2,2) to (3,0). Let $g(x) = \int_0^x f(t) \, dt$. Find $g(3)$, and determine where $g$ has a local maximum.
8.  Evaluate $\int_{-1}^2 |2x-1| \, dx$.
9.  Use symmetry to evaluate $\int_{-\pi}^{\pi} x^2 \sin x \, dx$.
10. Find the value of $c$ such that $\int_0^c (2x - 4) \, dx = 0$.

**Selected Solutions:**

1.  By FTC Part 1, $F'(x) = \sqrt{x^2+1}$. So $F'(2) = \sqrt{4+1} = \sqrt{5}$.
2.  Let $G(u) = \int_0^u \cos(t^2) \, dt$. Then $\int_{x^2}^{x^3} \cos(t^2) \, dt = G(x^3) - G(x^2)$. Derivative: $G'(x^3) \cdot 3x^2 - G'(x^2) \cdot 2x = \cos((x^3)^2) \cdot 3x^2 - \cos((x^2)^2) \cdot 2x = 3x^2 \cos(x^6) - 2x \cos(x^4)$.
3.  The integrand is a parabola opening downward with vertex at (0,9), x-intercepts at ±3. The area is a semicircle? Actually it's a parabola, but we can compute area as area under curve from -3 to 3. Since it's even, $2 \int_0^3 (9-x^2) dx = 2 [9x - x^3/3]_0^3 = 2[(27-9) - 0] = 2[18] = 36$. So integral = 36.
4.  We need more information to find $\int_0^3 f(x) dx$. Possibly use additivity: $\int_0^3 = \int_0^1 + \int_1^3$. We know $\int_1^3 = 4$, but we don't know $\int_0^1$. However, we know $\int_0^2 = 6$ and $\int_1^3 = 4$. From additivity: $\int_0^2 = \int_0^1 + \int_1^2 = 6$. Also $\int_1^3 = \int_1^2 + \int_2^3 = 4$. So we have two equations: Let A = $\int_0^1$, B = $\int_1^2$, C = $\int_2^3$. Then A+B=6, B+C=4. We want $\int_0^3 = A+B+C = (A+B)+C = 6+C$, but C is unknown. Actually from B+C=4, we have C=4-B. And A=6-B. So we need B to determine. Not enough info. For $\int_2^1 f(x) dx = -\int_1^2 f(x) dx = -B$. So cannot find numerical values without additional information. Possibly the problem expects us to use given data to find specific values? Maybe assume something like f is linear? Without additional info, we can't find unique answers. Perhaps there's a typo? Alternatively, if we assume the function is such that the integrals over [0,2] and [1,3] are given, we can't determine the integral over [0,3] uniquely. So maybe the problem is to express in terms of known integrals? For example, $\int_0^3 = \int_0^2 + \int_2^3$, and $\int_2^3 = \int_1^3 - \int_1^2$. Still need $\int_1^2$. But we can find $\int_1^2$ if we also know that the function is, say, constant? Not given. So perhaps the intended answer is not numerical? I'll check: Given $\int_0^2 f = 6$ and $\int_1^3 f = 4$. We can find $\int_0^3 f$ if we know $\int_2^3 f$. But we don't. So maybe the problem is incomplete. However, sometimes they ask: find $\int_0^3 f(x) dx$ if $\int_0^2 f = 6$, $\int_2^3 f = 5$, etc. Here, not given. So I'll skip numerical answer.
5.  Antiderivative: $3 \cdot \frac{2}{3} x^{3/2} - 2 \cdot (-1) x^{-1} = 2x^{3/2} + \frac{2}{x}$. Evaluate: $[2(4^{3/2}) + 2/4] - [2(1^{3/2}) + 2/1] = [2(8) + 0.5] - [2 + 2] = (16+0.5) - 4 = 12.5$.
6.  Antiderivative: $-2\cos x - 3\sin x$. Evaluate: at π: $-2(-1) - 3(0) = 2$; at 0: $-2(1) - 0 = -2$. So integral = 2 - (-2) = 4.
7.  Graph: f is a line from (0,0) to (2,2): slope 1, so f(t)=t on [0,2]. Then line from (2,2) to (3,0): slope -2, equation: y = -2(t-2)+2 = -2t+6. So f(t) = { t for 0≤t≤2; -2t+6 for 2≤t≤3 }. g(3) = ∫_0^3 f(t) dt = area from 0 to 2 (triangle: 0.5*2*2=2) + area from 2 to 3 (triangle: 0.5*1*2=1) = 3. g has local max where g'(x)=f(x)=0. f(x)=0 at x=3? Actually f(x)=0 at x=0 and x=3. But g' changes from positive to negative at x=2? Actually f is positive on (0,2) and negative on (2,3). So g increases on (0,2) and decreases on (2,3). So local maximum at x=2.
8.  |2x-1| changes sign at x=0.5. Split: ∫_{-1}^{0.5} -(2x-1) dx + ∫_{0.5}^2 (2x-1) dx. First: ∫ (1-2x) dx = x - x^2 |_{-1}^{0.5} = (0.5 - 0.25) - (-1 - 1) = 0.25 - (-2) = 2.25. Second: ∫ (2x-1) dx = x^2 - x |_{0.5}^2 = (4-2) - (0.25-0.5) = 2 - (-0.25) = 2.25. Total = 4.5.
9.  The function $x^2 \sin x$ is odd (even × odd = odd). Symmetric interval, so integral = 0.
10. ∫_0^c (2x-4) dx = [x^2 - 4x]_0^c = c^2 - 4c. Set =0: c(c-4)=0 ⇒ c=0 or c=4. c=0 is trivial, so c=4.