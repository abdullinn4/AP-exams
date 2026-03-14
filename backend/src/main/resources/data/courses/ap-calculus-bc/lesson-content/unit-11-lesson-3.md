# Final Review

We're going to connect all the disparate units into a single, beautiful framework. The AP Exam isn't just about memorizing formulas; it's about understanding the relationship between concepts. Let's lock that in.

---

## Part 1: The Foundation – Limits & Continuity (Unit 1)

Before we can talk about change (derivatives) or accumulation (integrals), we need the language of "approaching." That's limits.

**1. What is a Limit?**
- **Intuitively:** The value a function *intends* to reach as $x$ gets closer and closer to a value $c$ (from both sides).
- **Graphically:** Where the graph is *headed* as you trace along it towards a specific $x$-value. Holes don't matter for the limit's existence.
- **Algebraically:** $\lim_{x\to c} f(x) = L$

**2. When Does a Limit Not Exist (DNE)?**
1.  Left-hand limit $\neq$ Right-hand limit (e.g., piecewise functions at a jump, or $\lim_{x\to 0} |x|/x$).
2.  Unbounded behavior (e.g., $\lim_{x\to 0} 1/x^2$). We often say it's $\infty$, but technically the limit DNE because it's not a finite number.
3.  Oscillating behavior (e.g., $\lim_{x\to 0} \sin(1/x)$).

**3. The All-Important Connection: Continuity**
A function $f(x)$ is continuous at $x = c$ if and only if **ALL THREE** are true:
1.  $f(c)$ is defined.
2.  $\lim_{x\to c} f(x)$ exists.
3.  $\lim_{x\to c} f(x) = f(c)$.

- **Key Theorem: Intermediate Value Theorem (IVT)**
    - If $f$ is **continuous** on $[a, b]$ and $k$ is any number between $f(a)$ and $f(b)$, then there exists at least one $c$ in $(a, b)$ such that $f(c) = k$.
    - **What it's good for:** Proving a root exists. If $f(a)$ and $f(b)$ have opposite signs, there must be a zero in between.

---

## Part 2: The Derivative – The Heart of Change (Units 2, 3, 4, 5)

A derivative is the mathematical embodiment of **rate of change**.

**1. The Definition (You MUST know this!)**
$$f'(x) = \lim_{h\to 0} \frac{f(x+h) - f(x)}{h}$$
- **Graphically:** The slope of the tangent line to the curve at a point.
- **Physically:** Instantaneous rate of change (e.g., velocity = derivative of position).

**2. Differentiability implies Continuity**
- If $f$ is differentiable at $x = c$ (the derivative exists), then $f$ is continuous at $x = c$.
- The converse is **not** true. A function can be continuous but have a sharp corner (cusp) or a vertical tangent, making it not differentiable.

**3. The Derivative Rules Cheat Sheet**
- **Power Rule:** $\frac{d}{dx}[x^n] = n x^{n-1}$
- **Product Rule:** $\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$
- **Quotient Rule:** $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$ (Remember: "low d-high minus high d-low, square the bottom and away we go.")
- **Chain Rule:** $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$ (The "outside-inside" rule. This is everywhere!)
- **Derivatives of Key Functions:**
    - $\frac{d}{dx}[\sin x] = \cos x$
    - $\frac{d}{dx}[\cos x] = -\sin x$
    - $\frac{d}{dx}[\tan x] = \sec^2 x$
    - $\frac{d}{dx}[e^x] = e^x$
    - $\frac{d}{dx}[\ln x] = \frac{1}{x}$

**4. Implicit Differentiation**
- **When to use it:** When you can't (or don't want to) solve for $y$ in terms of $x$.
- **How to do it:** Differentiate every term with respect to $x$. Whenever you differentiate a $y$, multiply by $\frac{dy}{dx}$ (that's the chain rule!). Then, solve for $\frac{dy}{dx}$.

**5. Applying the Derivative – The "What" and "Why" (Unit 5)**

This is where we use $f'$ and $f''$ to understand the behavior of $f$.

| Concept | Calculus Condition | Graphical Interpretation |
| :--- | :--- | :--- |
| **Function Increasing** | $f'(x) > 0$ | Graph is going up as $x$ increases. |
| **Function Decreasing** | $f'(x) < 0$ | Graph is going down as $x$ increases. |
| **Local (Relative) Max/Min** | $f'(x) = 0$ or DNE (critical point) AND $f'$ changes sign. | Peak or valley. |
| **Absolute (Global) Extrema** | Candidates: critical points inside $(a,b)$ + endpoints $a$ and $b$. | Highest/lowest point on the entire interval. |
| **Concave Up** | $f''(x) > 0$ | "Holds water"; slope is increasing. |
| **Concave Down** | $f''(x) < 0$ | "Spills water"; slope is decreasing. |
| **Point of Inflection** | $f''(x) = 0$ or DNE AND $f''$ changes sign. | Point where concavity changes. |

**Key Theorems**
- **Mean Value Theorem (MVT):** If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists a $c$ in $(a, b)$ such that $$f'(c) = \frac{f(b) - f(a)}{b - a}.$$
    - **What it means:** There is a point where the instantaneous rate of change equals the *average* rate of change over the interval. The slope of the tangent line equals the slope of the secant line.

**6. BC Only: Euler's Method (Unit 7)**
- A numerical technique to approximate values of a solution to a differential equation $y' = F(x, y)$.
- **The Formula:** $$y_{n+1} = y_n + h \cdot F(x_n, y_n)$$ where $h$ is the step size.
- Think of it as following the slope lines step-by-step to build an approximate particular solution.

**7. BC Only: L'Hospital's Rule (Unit 4)**
- When you have a limit that yields indeterminate forms like $\frac{0}{0}$ or $\frac{\infty}{\infty}$:
    - $$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$
- **Important:** Check that the conditions for L'Hospital's Rule apply before using it! Also be aware of other indeterminate forms like $0 \cdot \infty$, $\infty - \infty$, $1^\infty$, etc., which can be manipulated into $\frac{0}{0}$ or $\frac{\infty}{\infty}$.

---

## Part 3: The Integral – The Accumulator (Units 6 & 8)

If the derivative is a rate of change, the integral is the accumulation of that change.

**1. The Definite Integral**
- $$\int_a^b f(x) \, dx$$
- **Geometrically:** The net signed area between the curve $y = f(x)$ and the $x$-axis, from $x=a$ to $x=b$.
- **Physically:** If $v(t)$ is velocity, $\int_a^b v(t) \, dt$ is the **net change** in position (displacement). $\int_a^b |v(t)| \, dt$ is total distance traveled.
- If $f(x)$ is the rate of change, the integral gives the total accumulation.

**2. The Fundamental Theorem of Calculus (FTC) – The Superglue**
This theorem connects derivatives and integrals. It's the most important idea in the course.
- **FTC Part 1:** $$\frac{d}{dx}\left[ \int_a^x f(t) \, dt \right] = f(x)$$
    - *Translation:* Taking the derivative of an integral "undoes" the integral and returns the original function. The derivative of an accumulator is the rate.
- **FTC Part 2:** $$\int_a^b f(x) \, dx = F(b) - F(a), \quad \text{where } F'(x) = f(x).$$
    - *Translation:* To evaluate a definite integral, find an **antiderivative** $F$ of the integrand $f$, and subtract its value at the bottom from its value at the top.

**3. The Indefinite Integral ($\int f(x) \, dx = F(x) + C$)**
This is the general antiderivative. The $+C$ represents the family of all functions whose derivative is $f(x)$. **Don't forget the $+C$!**

**4. Basic Antiderivative Rules (Reverse of Derivatives)**
- $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C,\; n\neq -1$
- $\int \frac{1}{x} \, dx = \ln|x| + C$
- $\int \cos x \, dx = \sin x + C$
- $\int \sin x \, dx = -\cos x + C$
- $\int e^x \, dx = e^x + C$

**5. BC Only: Advanced Integration Techniques (Unit 6)**
- **Integration by Parts:** The reverse of the Product Rule.
    - $$\int u \, dv = uv - \int v \, du$$
    - Choose $u$ using LIATE (Logarithms, Inverse trig, Algebraic, Trig, Exponential).
- **Partial Fractions:** Used for integrating rational functions. After performing long division if necessary, decompose the fraction into simpler parts.
    - **Important BC Connection:** Partial fractions are also used in **Series** (Unit 10) for expressing rational functions as power series, especially for finding the interval of convergence.
- **Improper Integrals:** Integrals with infinite limits of integration or infinite discontinuities on the interval.
    - Replace the improper bound with a limit, e.g., $$\int_a^\infty f(x) \, dx = \lim_{b \to \infty} \int_a^b f(x) \, dx$$
    - If the limit exists and is finite, the integral **converges**. If not, it **diverges**.

**6. BC Only: Arc Length (Unit 8)**
- The length of a curve $y = f(x)$ from $x = a$ to $x = b$:
    - $$L = \int_a^b \sqrt{1 + [f'(x)]^2} \, dx$$
- For a curve defined parametrically by $(x(t), y(t))$ from $t = \alpha$ to $t = \beta$:
    - $$L = \int_\alpha^\beta \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2} \, dt$$

**7. Area and Volume (Unit 8 Applications)**
- **Area between two curves:** $$\int_a^b [\text{Top Function} - \text{Bottom Function}] \, dx$$ (or $\int_c^d [\text{Right} - \text{Left}] \, dy$ for horizontal slices).
- **Volume of Revolution:**
    - **Disk Method:** No hole. $$V = \pi \int_a^b [R(x)]^2 \, dx$$
    - **Washer Method:** Has a hole. $$V = \pi \int_a^b [R(x)^2 - r(x)^2] \, dx$$
- **Cross-Sections:** Volume is the integral of the area of the slices. $$V = \int_a^b A(x) \, dx$$ (where $A(x)$ is the area of the cross-section).

---

## Part 4: Differential Equations (Unit 7)

Equations involving derivatives. We solve them to find the original function.

**1. Slope Fields**
- A graphical way to visualize a differential equation $\frac{dy}{dx} = \dots$.
- At each grid point $(x, y)$, draw a tiny slope line with slope equal to the value of the right-hand side.
- A solution to the DE is a curve that follows these slope lines.

**2. Solving by Separation of Variables**
1.  Get all the $y$'s and $dy$'s on one side, all the $x$'s and $dx$'s on the other. (Multiply/divide, treating $\frac{dy}{dx}$ as a fraction).
2.  Put an integral sign on both sides: $$\int [y\text{-stuff}] \, dy = \int [x\text{-stuff}] \, dx.$$
3.  Integrate both sides. (Don't forget $+C$ on the $x$-side!).
4.  If you have an initial condition $y(x_0) = y_0$, use it to solve for $C$. This gives the **particular solution**.

**3. Exponential Models (Growth & Decay)**
- The model: $\frac{dy}{dt} = ky$ (Rate of change is proportional to the amount present).
- The solution: $$y(t) = y_0 e^{kt}.$$
    - $k > 0$ => Growth (population, compound interest)
    - $k < 0$ => Decay (radioactive decay, Newton's Law of Cooling)

**4. BC Only: Logistic Growth (Unit 7)**
- A more realistic growth model where the population approaches a carrying capacity $L$.
- **Differential Equation:** $$\frac{dy}{dt} = ky\left(1 - \frac{y}{L}\right)$$
- The solution has an inflection point at $y = L/2$ (where growth rate is maximum) and a horizontal asymptote at $y = L$.

---

## Part 5: BC Only – Parametric, Polar, and Vector-Valued Functions (Unit 9)

This unit extends calculus to new types of functions [citation:4].

**1. Parametric Equations**
- $x = f(t)$, $y = g(t)$, where $t$ is the parameter (often time).
- **Derivative (Slope):** $$\frac{dy}{dx} = \frac{dy/dt}{dx/dt}, \quad \text{provided } dx/dt \neq 0$$
- **Second Derivative:** $$\frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{dx/dt}$$
- **Arc Length (repeated from Unit 8):** $$L = \int_\alpha^\beta \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2} \, dt$$

**2. Polar Equations**
- $r = f(\theta)$, where $r$ is the distance from the origin and $\theta$ is the angle.
- **Derivative (Slope in Cartesian coordinates):** Use $x = r\cos\theta$, $y = r\sin\theta$. Then:
    - $$\frac{dy}{dx} = \frac{dy/d\theta}{dx/d\theta} = \frac{f'(\theta)\sin\theta + f(\theta)\cos\theta}{f'(\theta)\cos\theta - f(\theta)\sin\theta}$$
- **Area Enclosed by a Polar Curve:**
    - $$A = \frac{1}{2} \int_\alpha^\beta [f(\theta)]^2 \, d\theta$$
    - Remember the factor of $\frac{1}{2}$ and that you're sweeping out area like sectors of a circle.

**3. Vector-Valued Functions**
- Position vector: $\mathbf{r}(t) = \langle x(t), y(t) \rangle$
- **Velocity:** $\mathbf{v}(t) = \mathbf{r}'(t) = \langle x'(t), y'(t) \rangle$
- **Acceleration:** $\mathbf{a}(t) = \mathbf{v}'(t) = \mathbf{r}''(t) = \langle x''(t), y''(t) \rangle$
- **Speed:** $$|\mathbf{v}(t)| = \sqrt{[x'(t)]^2 + [y'(t)]^2}$$ (Notice this is the integrand for arc length!)
- **Direction of Motion:** The velocity vector points in the direction of motion. If the velocity and acceleration vectors are...
    - ...in the same direction, speed is increasing.
    - ...in opposite directions, speed is decreasing.
    - ...orthogonal (perpendicular), speed is instantaneously not changing.

---

## Part 6: BC Only – Infinite Sequences and Series (Unit 10)

This is the crown jewel of BC calculus, comprising nearly one-fifth of the exam [citation:4]. It's all about representing functions as infinite polynomials [citation:3].

**1. Definitions**
- **Sequence:** An ordered list of numbers $\{a_n\}$. Does it converge to a limit as $n \to \infty$?
- **Series:** The sum of a sequence $\sum_{n=1}^\infty a_n$. Does the sum approach a finite number (converge) or not (diverge)?

**2. The $n$th Term Test for Divergence**
- If $\lim_{n \to \infty} a_n \neq 0$, then the series $\sum a_n$ **diverges**.
- **Warning:** If the limit is zero, the test is inconclusive – the series may converge or diverge.

**3. Types of Series & Their Convergence Tests**
- **Geometric Series:** $\sum_{n=0}^\infty ar^{n-1}$.
    - **Converges** to $\frac{a}{1-r}$ if $|r| < 1$.
    - **Diverges** if $|r| \geq 1$.
- **$p$-Series:** $\sum_{n=1}^\infty \frac{1}{n^p}$.
    - **Converges** if $p > 1$.
    - **Diverges** if $p \leq 1$. (The harmonic series $\sum 1/n$ diverges).
- **Alternating Series Test:** For $\sum (-1)^n b_n$ (with $b_n > 0$), the series converges if:
    1.  $\lim_{n \to \infty} b_n = 0$, and
    2.  $b_n$ is decreasing.
- **Ratio Test (Very Important for Power Series!):**
    - Let $\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = L$.
        - If $L < 1$, the series converges absolutely.
        - If $L > 1$, the series diverges.
        - If $L = 1$, the test is inconclusive.
- **Direct & Limit Comparison Tests:** Compare your series to a known $p$-series or geometric series to determine convergence/divergence.
- **Integral Test:** If $f(x)$ is positive, continuous, and decreasing, then $\sum_{n=k}^\infty a_n$ converges if and only if $\int_k^\infty f(x) \, dx$ converges.

**4. Power Series**
- A series of the form $\sum_{n=0}^\infty c_n (x - a)^n$, where $a$ is the center.
- **Radius and Interval of Convergence:** Use the Ratio Test to find the values of $x$ for which the series converges. Check the endpoints separately using other tests.
- **Differentiation and Integration of Power Series:**
    - You can differentiate and integrate power series term-by-term within their radius of convergence.
    - The new series have the same radius of convergence (but endpoints may change).

**5. Taylor and Maclaurin Series**
- Representing a function as a power series [citation:3][citation:9].
- **Maclaurin Series ($a=0$):** $$f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(0)}{n!} x^n$$
- **Taylor Series (center $a$):** $$f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(a)}{n!} (x - a)^n$$
- **Memorize These Common Maclaurin Series:**
    - $e^x = \sum_{n=0}^\infty \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$
    - $\sin x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$
    - $\cos x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$
    - $\frac{1}{1-x} = \sum_{n=0}^\infty x^n = 1 + x + x^2 + x^3 + \dots$ (This is the geometric series, valid for $|x| < 1$)
    - $\ln(1+x) = \sum_{n=1}^\infty \frac{(-1)^{n-1} x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \dots$

**6. Lagrange Error Bound**
- When you approximate $f(x)$ with its $n$th-degree Taylor polynomial $P_n(x)$, the error $R_n(x)$ is bounded by:
    - $$|R_n(x)| \leq \frac{M |x-a|^{n+1}}{(n+1)!}$$
    - where $M$ is the maximum value of $|f^{(n+1)}(z)|$ between $a$ and $x$.

---

## Part 7: Exam Strategy & Common Pitfalls

**The Calculator Section (Part B)**
- **Know your calculator!** Practice finding intersections, numerical derivatives (`nDeriv`), and definite integrals (`fnInt`) quickly.
- You can use it to check analytical work, but the AP graders want to see the calculus setup first. Show the integral, *then* state the calculator value.

**The No-Calculator Section (Part A)**
- Simplify answers (e.g., $\pi/4$ not a decimal).
- Know your unit circle values for trig.
- Practice algebraic manipulation quickly and accurately.

**Common Mistakes to Avoid**
1.  **Forgetting the $+C$ on indefinite integrals.**
2.  **Confusing average value** $\displaystyle \frac{1}{b-a}\int_a^b f(x)\,dx$ with the **average rate of change** $\displaystyle \frac{f(b)-f(a)}{b-a}$.
3.  **Misinterpreting the problem:** Is it asking for $f'(x)$ (derivative) or $f(x)$ (original function)?
4.  **Incorrect Chain Rule:** Especially with trig and exponential functions.
5.  **Not justifying answers on free response.** "Because $f'$ changes from positive to negative at $x=2$, $f$ has a relative max." That sentence is worth a point.
6.  **Algebra errors:** Dropping negative signs, distributing exponents incorrectly.
7.  **BC-Specific Mistakes:**
    - Forgetting the $1/2$ in polar area formulas.
    - Misapplying the Ratio Test (don't forget absolute values).
    - Not checking endpoints for interval of convergence.
    - Confusing sequences and series.

---

You are ready. You have the tools. Now, go and practice tackling full exams on our website. You've got this. 

