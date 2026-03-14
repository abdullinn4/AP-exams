# Final Review

We're going to connect all the disparate units into a single, beautiful framework. The AP Exam isn't just about memorizing formulas; it's about understanding the relationship between concepts. Let's lock that in.

---

## Part 1: The Foundation – Limits & Continuity (Units 1 & 2)

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

## Part 2: The Derivative – The Heart of Change (Units 2, 3, 4)

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

---

## Part 3: Applying the Derivative – The "What" and "Why" (Unit 5)

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

**Optimization (The Big Kahuna)**
1.  Draw a picture and define variables.
2.  Write the equation you want to **maximize/minimize** (primary equation).
3.  Write the **constraint** equation (the thing that is fixed).
4.  Use the constraint to solve for one variable and substitute into the primary equation (now one variable).
5.  Take the derivative, find critical points.
6.  Justify it's a max or min (e.g., first or second derivative test) and state the answer in a sentence.

---

## Part 4: The Integral – The Accumulator (Units 6 & 8)

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

**5. Techniques of Integration (AB Only)**
- **Substitution (u-sub):** The reverse of the Chain Rule. Look for a function and its derivative (up to a constant) inside the integral. Let $u$ = the "inside" function.
    - *Don't forget* to change the limits of integration when doing a definite integral with u-sub.

**6. Area and Volume (Unit 8 Applications)**
- **Area between two curves:** $$\int_a^b [\text{Top Function} - \text{Bottom Function}] \, dx$$ (or $\int_c^d [\text{Right} - \text{Left}] \, dy$ for horizontal slices).
- **Volume of Revolution:**
    - **Disk Method:** No hole. $$V = \pi \int_a^b [R(x)]^2 \, dx$$
    - **Washer Method:** Has a hole. $$V = \pi \int_a^b [R(x)^2 - r(x)^2] \, dx$$
    - **Cross-Sections:** Volume is the integral of the area of the slices. $$V = \int_a^b A(x) \, dx$$ (where $A(x)$ is the area of the cross-section).

---

## Part 5: Differential Equations (Unit 7)

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

---

## Part 6: Exam Strategy & Common Pitfalls

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

---

You are ready. You have the tools. Now, go and practice tackling full exams on our website. You've got this. 
