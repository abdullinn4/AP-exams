# Lesson 15: The Fundamental Theorem of Calculus

### **15.1 The Bridge Between Two Worlds: FTC Part 1**

In the last lesson, we saw that the definite integral $\int_a^b f(t) \, dt$ gives us the **net accumulation** of a quantity from rate $f$ over time. But what if the upper limit isn't fixed? What if it's a variable, like $x$? That's where things get powerful.

**The Accumulation Function:**
For a continuous function $f$ on an interval containing $a$, we can define a new function:
$$
F(x) = \int_a^x f(t) \, dt
$$
This is called an **accumulation function**. It tells us the net accumulation (the net area under $f$) starting at $a$ and ending at our variable endpoint $x$.

![A graph showing a curve f(t) and the area under it from a to x, with x sliding along the axis.](https://i.imgur.com/rVQn0XK.png)
*Caption: As $x$ moves, the area $F(x)$ changes. The rate at which it changes is the key insight.*

**The First Fundamental Theorem of Calculus (FTC Part 1):**
If $f$ is continuous on an interval containing $a$, then the accumulation function $F(x) = \int_a^x f(t) \, dt$ is differentiable for every $x$ in that interval, and its derivative is:
$$
F'(x) = \frac{d}{dx} \left[ \int_a^x f(t) \, dt \right] = f(x)
$$

**What This Means - The Big Idea:**
Differentiation and Integration are **inverse operations**. If you:
1.  Start with a rate function $f$,
2.  Integrate it (accumulate it) to get $F(x)$,
3.  Then differentiate $F(x)$,

you get back your original rate function $f(x)$. Integration "undoes" differentiation, and vice versa.

**Key Insights and Applications:**

*   **Every continuous function has an antiderivative:** FTC Part 1 guarantees it. The accumulation function $F(x) = \int_a^x f(t) \, dt$ **is** an antiderivative of $f$.
*   **Graphical Analysis is Powerful:** Given the graph of $f$, we can describe $F$ without a single calculation.
    *   **Increasing/Decreasing:** Since $F'(x) = f(x)$, $F$ is increasing where $f(x) > 0$ and decreasing where $f(x) < 0$.
    *   **Local Extrema:** $F$ has a local max/min where $f(x)$ changes from positive to negative (or vice versa)—i.e., where $f(x) = 0$ (critical point).
    *   **Concavity:** Since $F''(x) = f'(x)$, $F$ is concave up where $f$ is increasing, and concave down where $f$ is decreasing.
*   **Handling Variable Limits (The Chain Rule's Time to Shine):**
    *   If the upper limit is a function $u(x)$: $\frac{d}{dx} \left[ \int_a^{u(x)} f(t) \, dt \right] = f(u(x)) \cdot u'(x)$.
    *   If the lower limit is a function $v(x)$: $\frac{d}{dx} \left[ \int_{v(x)}^b f(t) \, dt \right] = -f(v(x)) \cdot v'(x)$.
    *   If both limits are functions: Split the integral at a constant first, then differentiate.

**Let's See It In Action:**

**Example 1: The Basic FTC Part 1**
Find $F'(x)$ if $F(x) = \int_2^x (t^2 + 1) \, dt$.
*   By FTC Part 1: $F'(x) = \boxed{x^2 + 1}$. Simple as that.

**Example 2: Chain Rule Application**
Find $\frac{d}{dx} \left[ \int_0^{x^2} \sin t \, dt \right]$.
*   Here, the upper limit is $u(x) = x^2$, and $u'(x) = 2x$.
*   Apply the rule: $\sin(x^2) \cdot 2x = \boxed{2x \sin(x^2)}$.

**Example 3: Variable Lower Limit**
Find $\frac{d}{dx} \left[ \int_x^3 \sqrt{t^3 + 1} \, dt \right]$.
*   **Trick:** Swap the limits to make the variable the upper limit. Remember, swapping gives a negative: $\int_x^3 f(t) \, dt = -\int_3^x f(t) \, dt$.
*   Now differentiate: $\frac{d}{dx} \left[ -\int_3^x \sqrt{t^3+1} \, dt \right] = -\sqrt{x^3+1}$.
*   So the answer is $\boxed{-\sqrt{x^3+1}}$.

**Example 4: Analyzing an Accumulation Function**
Let $F(x) = \int_{-2}^x f(t) \, dt$, where the graph of $f$ (a piecewise linear function) is given. On what intervals is $F$ increasing? Where does $F$ have a local maximum?
*   **Increasing:** $F$ is increasing where $F'(x)=f(x) > 0$. From the graph, this is where $f$ is above the t-axis (e.g., from -2 to 0 and from 4 to 6).
*   **Local Maximum:** $F$ has a local max where $F'(x)=f(x)$ changes from positive to negative. From the graph, this happens at $x=0$ (f goes from + to -) and possibly at $x=6$ (f goes from + to 0? Need to check behavior). Typically, the max occurs at the last point where the accumulated area stops increasing and starts to decrease.

---

### **15.2 The Rules of the Game: Properties of Definite Integrals**

Before we get to the second part of the FTC, we need some tools to manipulate integrals. These properties are intuitive if you think of integrals as net area.

**The Essential Properties:**
Let $f$ and $g$ be integrable functions, and let $a$, $b$, $c$ be real numbers.

1.  **Constant Multiple:** $\int_a^b k \cdot f(x) \, dx = k \int_a^b f(x) \, dx$
    *   *Stretching the graph vertically stretches the area by the same factor.*
2.  **Sum/Difference:** $\int_a^b [f(x) \pm g(x)] \, dx = \int_a^b f(x) \, dx \pm \int_a^b g(x) \, dx$
    *   *The area under a sum is the sum of the areas.*
3.  **Reversal of Limits:** $\int_a^b f(x) \, dx = -\int_b^a f(x) \, dx$
    *   *Reversing the direction of accumulation gives the opposite net result.*
4.  **Additivity Over Intervals:** $\int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx$ for any $c$.
    *   *You can find the total area by adding the areas of adjacent regions.*
5.  **Integral of a Constant:** $\int_a^b c \, dx = c \cdot (b - a)$
    *   *Area of a rectangle: height × width.*
6.  **Zero-Width Interval:** $\int_a^a f(x) \, dx = 0$
    *   *No accumulation happens over zero time/distance.*

**Why These Matter:**
*   **They let us compute integrals using geometry.** If you can see triangles, trapezoids, and semicircles, you can compute the integral exactly without any fancy antiderivatives.
*   **They let us handle piecewise functions** by splitting the integral at the break points.
*   **They simplify complex problems** by breaking them into pieces we already know.

**Example 1: Geometry is Your Friend**
Evaluate $\int_0^4 (2x + 1) \, dx$ by interpreting it as area.
*   The graph is a line from $(0,1)$ to $(4,9)$. The region is a trapezoid.
*   Area of a trapezoid = $\frac{1}{2} \times (\text{base}_1 + \text{base}_2) \times \text{height}$.
*   Bases: $f(0)=1$, $f(4)=9$. Height: $4-0=4$.
*   Area = $\frac{1}{2} (1 + 9) \times 4 = \frac{1}{2} \times 10 \times 4 = \boxed{20}$.

**Example 2: Handling a Piecewise Function**
Evaluate $\int_{-1}^3 f(x) \, dx$, where
$f(x) = \begin{cases} x+2 & \text{if } x \le 1 \\ 4 - x & \text{if } x > 1 \end{cases}$.
*   **Split the integral** at the breaking point, $x=1$:
    $\int_{-1}^3 f(x) \, dx = \int_{-1}^1 (x+2) \, dx + \int_1^3 (4-x) \, dx$.
*   **First integral (area under line from -1 to 1):**
    *   Geometry: It's a trapezoid from x=-1 to x=1. At x=-1, f(-1)=1. At x=1, f(1)=3. Height = 2.
    *   Area = $\frac{1}{2}(1+3) \times 2 = 4$.
    *   Or, use antiderivative: $\int (x+2) dx = \frac{x^2}{2} + 2x$. Evaluate: $[0.5+2] - [0.5 - 2] = 2.5 - (-1.5)=4$.
*   **Second integral (area under line from 1 to 3):**
    *   At x=1, f(1)=3. At x=3, f(3)=1. Height = 2.
    *   Area = $\frac{1}{2}(3+1) \times 2 = 4$.
    *   Or, antiderivative: $\int (4-x) dx = 4x - \frac{x^2}{2}$. Evaluate: $[12-4.5] - [4-0.5] = 7.5 - 3.5 = 4$.
*   **Total:** $4 + 4 = \boxed{8}$.

**Example 3: Using Properties to Find Unknowns**
Given $\int_1^5 f(x) \, dx = 8$ and $\int_3^5 f(x) \, dx = 5$, find $\int_1^3 f(x) \, dx$.
*   By additivity: $\int_1^5 f = \int_1^3 f + \int_3^5 f$.
*   So, $8 = \int_1^3 f + 5$.
*   Therefore, $\int_1^3 f = \boxed{3}$.

---

### **15.3 The Grand Finale: FTC Part 2 (The Computational Powerhouse)**

FTC Part 1 gave us a deep theoretical link. FTC Part 2 gives us the practical tool we've been waiting for: a way to compute definite integrals **exactly** without Riemann sums or geometry.

**Antiderivatives (A Quick Refresher):**
An **antiderivative** of $f$ is a function $F$ such that $F'(x) = f(x)$. We denote the family of all antiderivatives (the **indefinite integral**) by $\int f(x) \, dx = F(x) + C$, where $C$ is any constant.

**The Second Fundamental Theorem of Calculus (FTC Part 2):**
If $f$ is continuous on $[a, b]$ and $F$ is **any** antiderivative of $f$ on $[a, b]$, then:
$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$
Notation: We often write $F(b) - F(a)$ as $\left. F(x) \right|_a^b$ or $[F(x)]_a^b$.

**Why This Is Revolutionary:**
1.  **It connects the two branches of calculus.** The definite integral (a limit of sums) is computed using the antiderivative (an inverse of differentiation).
2.  **The Constant $C$ Cancels!** Notice: $(F(b)+C) - (F(a)+C) = F(b)-F(a)$. So we can use the simplest antiderivative (setting $C=0$).
3.  **It turns hard limit problems into easier algebra problems** (find $F$, plug in, subtract).

**Example 1: The Basic FTC Part 2**
Evaluate $\int_1^3 (2x + 1) \, dx$.
*   Find an antiderivative: $F(x) = x^2 + x$. (Check: $F'(x)=2x+1$ ✔)
*   Apply FTC Part 2: $F(3) - F(1) = (9+3) - (1+1) = 12 - 2 = \boxed{10}$.
*   *Check with geometry: It's a trapezoid from (1,3) to (3,7). Area = 0.5*(3+7)*2=10.*

**Example 2: Using Different Antiderivatives**
Evaluate $\int_0^{\pi} \cos x \, dx$.
*   An antiderivative is $F(x) = \sin x$. (Could also use $\sin x + 5$).
*   $\int_0^{\pi} \cos x \, dx = \sin(\pi) - \sin(0) = 0 - 0 = \boxed{0}$.

**Example 3: A Polynomial**
Evaluate $\int_{-1}^2 (x^3 - 4x) \, dx$.
*   Antiderivative: $F(x) = \frac{x^4}{4} - 2x^2$.
*   $F(2) = \frac{16}{4} - 2(4) = 4 - 8 = -4$.
*   $F(-1) = \frac{1}{4} - 2(1) = \frac{1}{4} - 2 = -\frac{7}{4}$.
*   $\int_{-1}^2 (x^3 - 4x) \, dx = F(2) - F(-1) = (-4) - (-\frac{7}{4}) = -4 + \frac{7}{4} = -\frac{16}{4} + \frac{7}{4} = \boxed{-\frac{9}{4}}$.

---

### **15.4 Putting It All Together: Analytical Evaluation Strategies**

Now we combine FTC Part 2 with algebraic manipulation to tackle more complex integrals.

**Key Strategies:**
1.  **Simplify the Integrand:** Use algebra to rewrite the function into a form where you can easily find an antiderivative (e.g., expand, separate fractions, use trigonometric identities).
2.  **Handle Absolute Values:** Split the integral at points where the expression inside the absolute value equals zero.
3.  **Exploit Symmetry:**
    *   **Even Functions** ($f(-x)=f(x)$): $\int_{-a}^a f(x) \, dx = 2\int_0^a f(x) \, dx$.
    *   **Odd Functions** ($f(-x)=-f(x)$): $\int_{-a}^a f(x) \, dx = 0$.
4.  **Watch for Discontinuities:** FTC Part 2 requires continuity on $[a, b]$. If $f$ has a discontinuity (e.g., a vertical asymptote), the integral is "improper" and needs special handling (later topic).

**Example 1: Integral with Absolute Value**
Evaluate $\int_{-2}^3 |x| \, dx$.
*   $|x|$ changes behavior at $x=0$. Split the integral:
    $\int_{-2}^3 |x| \, dx = \int_{-2}^0 |x| \, dx + \int_{0}^3 |x| \, dx$.
*   On $[-2,0]$, $|x| = -x$. On $[0,3]$, $|x| = x$.
*   $\int_{-2}^0 (-x) dx = \left[ -\frac{x^2}{2} \right]_{-2}^0 = 0 - (-\frac{4}{2}) = 2$.
*   $\int_{0}^3 x dx = \left[ \frac{x^2}{2} \right]_0^3 = \frac{9}{2} - 0 = 4.5$.
*   Total: $2 + 4.5 = \boxed{6.5}$.

**Example 2: Using Symmetry**
Evaluate $\int_{-\pi/2}^{\pi/2} \sin^3 x \cos x \, dx$.
*   Check if the integrand is odd or even.
    *   Let $f(x) = \sin^3 x \cos x$.
    *   $f(-x) = \sin^3(-x) \cos(-x) = (-\sin x)^3 \cos x = -\sin^3 x \cos x = -f(x)$.
    *   So, $f$ is an **odd** function. The interval $[-\pi/2, \pi/2]$ is symmetric about 0.
*   Therefore, by symmetry, $\int_{-\pi/2}^{\pi/2} \sin^3 x \cos x \, dx = \boxed{0}$.
*   *You could also do a u-substitution (u = sin x), but symmetry is faster!*

**Example 3: Simplify First**
Evaluate $\int_1^2 \frac{x^2 + 1}{x} \, dx$.
*   Simplify the integrand: $\frac{x^2+1}{x} = x + \frac{1}{x}$.
*   Antiderivative: $F(x) = \frac{x^2}{2} + \ln|x|$.
*   Evaluate: $F(2) - F(1) = \left(\frac{4}{2} + \ln 2\right) - \left(\frac{1}{2} + \ln 1\right) = (2 + \ln 2) - (0.5 + 0) = \boxed{1.5 + \ln 2}$.

**Example 4: A Warning About Continuity**
Can we evaluate $\int_0^2 \frac{1}{x-1} \, dx$ using FTC Part 2?
*   The integrand $f(x) = \frac{1}{x-1}$ has a vertical asymptote (infinite discontinuity) at $x=1$, which is inside the interval $[0,2]$.
*   **FTC Part 2 does not apply** because $f$ is not continuous on $[0,2]$.
*   If we blindly applied it with $F(x) = \ln|x-1|$, we'd get $\ln|1| - \ln|1| = 0$, which is incorrect. The integral actually diverges (is infinite). We'll learn how to handle these "improper integrals" later.

---

### **Lesson 15 Summary: The Two Pillars of Calculus**

**FTC Part 1: The Theoretical Pillar**
*   **What it says:** $\frac{d}{dx} \int_a^x f(t) \, dt = f(x)$.
*   **What it means:** Differentiation and integration are inverse processes. The accumulation function is an antiderivative.

**FTC Part 2: The Computational Pillar**
*   **What it says:** $\int_a^b f(x) \, dx = F(b) - F(a)$, where $F$ is any antiderivative of $f$.
*   **What it means:** We can compute exact areas (definite integrals) by finding antiderivatives and doing simple arithmetic.

**Key Skills You Now Have:**
1.  **Differentiate an integral** with variable limits (using chain rule if needed).
2.  **Use properties of integrals** to simplify, split, and evaluate geometrically.
3.  **Evaluate definite integrals exactly** by finding an antiderivative and applying FTC Part 2.
4.  **Apply strategies** like splitting for absolute values and using symmetry.

---

### **Additional Practice Problems**

1.  Let $F(x) = \int_0^x \sqrt{t^2+1} \, dt$. Find $F'(2)$.
2.  Find $\frac{d}{dx} \int_{x^2}^{x^3} \cos(t^2) \, dt$. *(Hint: Split the integral at a constant, e.g., 0.)*
3.  Evaluate $\int_{-3}^3 (9 - x^2) \, dx$ using geometry.
4.  Given $\int_0^2 f(x) \, dx = 6$ and $\int_1^3 f(x) \, dx = 4$, find $\int_0^3 f(x) \, dx$ and $\int_2^1 f(x) \, dx$. *(Note: You may need to assume/add information to get numerical answers. Often, such problems require using additivity to find pieces.)*
5.  Evaluate $\int_1^4 \left( 3\sqrt{x} - \frac{2}{x^2} \right) \, dx$.
6.  Evaluate $\int_0^{\pi} (2\sin x - 3\cos x) \, dx$.
7.  The graph of $f$ consists of line segments from (0,0) to (2,2) to (3,0). Let $g(x) = \int_0^x f(t) \, dt$. Find $g(3)$, and determine where $g$ has a local maximum.
8.  Evaluate $\int_{-1}^2 |2x-1| \, dx$.
9.  Use symmetry to evaluate $\int_{-\pi}^{\pi} x^2 \sin x \, dx$.
10. Find the value of $c$ such that $\int_0^c (2x - 4) \, dx = 0$.

**Selected Solutions (Check Your Work):**

1.  By FTC Part 1, $F'(x) = \sqrt{x^2+1}$. So $F'(2) = \sqrt{4+1} = \boxed{\sqrt{5}}$.
2.  Let $G(u) = \int_0^u \cos(t^2) dt$. Then $\int_{x^2}^{x^3} \cos(t^2) dt = G(x^3) - G(x^2)$. The derivative is $G'(x^3)\cdot3x^2 - G'(x^2)\cdot2x = \cos((x^3)^2)\cdot3x^2 - \cos((x^2)^2)\cdot2x = \boxed{3x^2 \cos(x^6) - 2x \cos(x^4)}$.
3.  The graph is a parabola opening downward with vertex at (0,9) and x-intercepts at ±3. By symmetry, area = $2 \int_0^3 (9-x^2) dx$. $\int_0^3 (9-x^2) dx = [9x - x^3/3]_0^3 = (27-9) - 0 = 18$. So total = $\boxed{36}$.
4.  **For $\int_0^3 f(x) dx$:** We have $\int_0^2 f = 6$ and $\int_1^3 f = 4$. We need $\int_2^3 f$ or $\int_0^1 f$. Without additional info (like $\int_1^2 f$), we cannot find a unique numerical answer. If we assume the problem also gave $\int_2^3 f = 2$, then $\int_0^3 = \int_0^2 + \int_2^3 = 6+2=8$. Typically, problems give enough info to find all pieces. **For $\int_2^1 f(x) dx$:** This is $-\int_1^2 f(x) dx$. We don't have $\int_1^2$ directly, but from additivity: $\int_0^2 = \int_0^1 + \int_1^2$ and $\int_1^3 = \int_1^2 + \int_2^3$. We have two equations but three unknowns ($\int_0^1, \int_1^2, \int_2^3$). So it's indeterminate. *(Assuming a well-posed problem, it might have provided more data.)*
5.  Simplify: $3\sqrt{x} = 3x^{1/2}$ and $\frac{2}{x^2} = 2x^{-2}$. Antiderivative: $3 \cdot \frac{2}{3} x^{3/2} - 2 \cdot \frac{x^{-1}}{-1} = 2x^{3/2} + \frac{2}{x}$. Evaluate from 1 to 4: $[2(8) + \frac{2}{4}] - [2(1) + 2] = [16 + 0.5] - [4] = 16.5 - 4 = \boxed{12.5}$.
6.  Antiderivative: $-2\cos x - 3\sin x$. Evaluate: $[-2\cos\pi - 3\sin\pi] - [-2\cos 0 - 3\sin 0] = [-2(-1) - 0] - [-2(1) - 0] = [2] - [-2] = \boxed{4}$.
7.  **Find $g(3)$:** $g(3) = \int_0^3 f(t) dt$. Area from 0 to 2 is a triangle: $\frac{1}{2} \times 2 \times 2 = 2$. Area from 2 to 3 is a triangle: $\frac{1}{2} \times 1 \times 2 = 1$. Total = $\boxed{3}$. **Local max of $g$:** $g'(x)=f(x)$. $g'$ changes from positive (on 0<x<2) to negative (on 2<x<3). So $g$ has a local maximum at $\boxed{x=2}$.
8.  $|2x-1|$ changes at $x=0.5$. Split: $\int_{-1}^{0.5} -(2x-1) dx + \int_{0.5}^2 (2x-1) dx$.
    *   First: $\int (-2x+1) dx = -x^2 + x \big|_{-1}^{0.5} = (-0.25+0.5) - (-1-1) = 0.25 - (-2)=2.25$.
    *   Second: $\int (2x-1) dx = x^2 - x \big|_{0.5}^2 = (4-2) - (0.25-0.5) = 2 - (-0.25)=2.25$.
    *   Total = $\boxed{4.5}$.
9.  $x^2$ is even, $\sin x$ is odd. Their product $x^2 \sin x$ is odd. Integral of an odd function over a symmetric interval $[-\pi, \pi]$ is $\boxed{0}$.
10. $\int_0^c (2x-4) dx = [x^2 - 4x]_0^c = c^2 - 4c$. Set =0: $c(c-4)=0 \Rightarrow c=0 \text{ or } c=4$. The non-trivial solution is $\boxed{c=4}$.