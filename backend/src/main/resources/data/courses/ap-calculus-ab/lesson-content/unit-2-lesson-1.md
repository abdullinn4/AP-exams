# Lesson 4: The Derivative Concept

### **4.1 Average Rate of Change and the Difference Quotient**

**Definition:**

For a function $f(x)$, the **average rate of change** from $x = a$ to $x = b$ is:

$$
\frac{f(b)−f(a)}{b−a}
$$

This is the slope of the **secant line** through $(a, f(a))$ and $(b, f(b))$.

Equivalently, for a point $x = a$ and a small change $h$, the **difference quotient** expresses the same average rate over the interval $[a, a+h]$:

$$
\frac{f(a+h)−f(a)}{h}
$$

The difference quotient measures how the function output changes, on average, per unit change in input over a specific interval. It is the fundamental building block for defining instantaneous rate of change.

**Examples:**

1. **Average Rate Over an Interval:** Find the average rate of change of $f(x) = x^3$ from $x = 1$ to $x = 3$.
    - $\frac{f(3) - f(1)}{3 - 1} = \frac{27 - 1}{2} = \frac{26}{2} = 13$.
2. **Difference Quotient Form:** For $f(x) = \sqrt{x}$, write and simplify the difference quotient $\frac{f(4+h) - f(4)}{h}$.
    - $f(4) = 2$, $f(4+h) = \sqrt{4+h}$
    - $\frac{\sqrt{4+h} - 2}{h}$ (This form is ready for limit analysis in the next section).

---

### **4.2 The Derivative: Limit of the Difference Quotient**

**Definition:**

The **derivative of $f$ at a point $x=a$**, denoted $f'(a)$, is the limit of the difference quotient as the interval shrinks to zero:

f′(a)=lim⁡h→0f(a+h)−f(a)horf′(a)=lim⁡x→af(x)−f(a)x−a*f*′(*a*)=lim*h*→0*hf*(*a*+*h*)−*f*(*a*)or*f*′(*a*)=lim*x*→*ax*−*af*(*x*)−*f*(*a*)

provided this limit exists. This limit defines the **instantaneous rate of change** of $f$ at $a$.

The **derivative function**, $f'(x)$, is defined by:

f′(x)=lim⁡h→0f(x+h)−f(x)h*f*′(*x*)=lim*h*→0*hf*(*x*+*h*)−*f*(*x*)

This gives a rule for finding the slope of the tangent line at any point $x$ where the limit exists.

**Notation:** If $y = f(x)$, the derivative can be written as $f'(x)$, $y'$, or $\frac{dy}{dx}$.

Geometrically, $f'(a)$ is the **slope of the tangent line** to the graph of $y=f(x)$ at the point $(a, f(a))$. This connects the analytic limit definition to a visual, graphical interpretation.

**Examples:**

1. **Using the Limit Definition:** Find $f'(1)$ for $f(x) = x^2 + 3x$ using $f'(a) = \lim_{x \to a} \frac{f(x)-f(a)}{x-a}$.
    - $f(1) = 1 + 3 = 4$
    - $\lim_{x \to 1} \frac{(x^2+3x) - 4}{x-1} = \lim_{x \to 1} \frac{x^2+3x-4}{x-1}$
    - Factor: $\frac{(x-1)(x+4)}{x-1} = x+4$ for $x \neq 1$
    - $\lim_{x \to 1} (x+4) = 5$
    - **Result:** $f'(1) = 5$.
2. **Finding the Derivative Function:** Find $\frac{dy}{dx}$ for $y = \frac{1}{x}$ using $f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h}$.
    - $\lim_{h \to 0} \frac{\frac{1}{x+h} - \frac{1}{x}}{h} = \lim_{h \to 0} \frac{x - (x+h)}{hx(x+h)}$
    - $= \lim_{h \to 0} \frac{-h}{hx(x+h)} = \lim_{h \to 0} \frac{-1}{x(x+h)}$
    - $= -\frac{1}{x^2}$
    - **Result:** $\frac{dy}{dx} = f'(x) = -\frac{1}{x^2}$.

---

### **4.3 The Tangent Line**

**Definition:**

Given a function $f$ differentiable at $x=a$, the **equation of the tangent line** to the graph at the point $(a, f(a))$ is:

y−f(a)=f′(a)(x−a)*y*−*f*(*a*)=*f*′(*a*)(*x*−*a*)

or equivalently,

y=f(a)+f′(a)(x−a)*y*=*f*(*a*)+*f*′(*a*)(*x*−*a*)

This line has the same slope as the curve at the point of tangency and provides the best linear approximation to the function near $x=a$.

**Examples:**

1. **Finding a Tangent Line:** Find the equation of the tangent line to $f(x) = \sqrt{x}$ at $x=4$.
    - Point: $(4, f(4)) = (4, 2)$
    - Slope: Need $f'(4)$. From our earlier difference quotient, $f'(4) = \lim_{h \to 0} \frac{\sqrt{4+h}-2}{h}$. We can rationalize:
        
        $\frac{\sqrt{4+h}-2}{h} \cdot \frac{\sqrt{4+h}+2}{\sqrt{4+h}+2} = \frac{(4+h)-4}{h(\sqrt{4+h}+2)} = \frac{1}{\sqrt{4+h}+2}$
        
        So $f'(4) = \lim_{h \to 0} \frac{1}{\sqrt{4+h}+2} = \frac{1}{4}$.
        
    - Equation: $y - 2 = \frac{1}{4}(x - 4)$ or $y = \frac{1}{4}x + 1$.

---

### **4.4 Estimating Derivatives**

**Definition:**

When an analytical formula for $f'(a)$ is unavailable or impractical, we can **estimate** its value using:

- **Numerical Data (Tables):** Calculate the average rate of change over a very small interval containing $a$. The symmetric difference quotient, $\frac{f(a+h)-f(a-h)}{2h}$, often provides a better estimate than a one-sided quotient.
- **Graphical Information:** Visually approximate the slope of the tangent line by drawing it and calculating "rise over run" using points on the line.

Technology (graphing calculators, computer algebra systems) can compute derivatives exactly for many functions or provide highly accurate numerical approximations.

**Examples:**

1. **Estimate from a Table:** Estimate $g'(2)$ from the table of values for $g(x)$:
    
    
    | **$x$** | **1.9** | **1.99** | **2.0** | **2.01** | **2.1** |
    | --- | --- | --- | --- | --- | --- |
    | $g(x)$ | 3.61 | 3.9601 | 4.0 | 4.0401 | 4.41 |
    - Using a symmetric difference with $h=0.1$: $\frac{g(2.1)-g(1.9)}{0.2} = \frac{4.41-3.61}{0.2} = \frac{0.8}{0.2} = 4$
    - Using a symmetric difference with $h=0.01$: $\frac{g(2.01)-g(1.99)}{0.02} = \frac{4.0401-3.9601}{0.02} = \frac{0.08}{0.02} = 4$
    - **Estimate:** $g'(2) \approx 4$. (If $g(x)=x^2$, the exact value is 4.)
2. **Estimate from a Graph:** Given the graph of $f(x)$, estimate $f'(1)$ by sketching the tangent line at $x=1$.
    - Suppose the tangent line appears to pass through $(1,2)$ and $(2,4)$.
    - Slope = $\frac{4-2}{2-1} = 2$.
    - **Estimate:** $f'(1) \approx 2$.

---

### **4.5 Differentiability and Continuity**

**Definition:**

A function $f$ is **differentiable at $x=a$** if $f'(a)$ exists. It is **differentiable on an interval** if it is differentiable at every point in that interval.

**Relationship Theorem:** If $f$ is differentiable at $x=a$, then $f$ is continuous at $x=a$.

**Contrapositive:** If $f$ is NOT continuous at $x=a$, then $f$ is NOT differentiable at $x=a$.

**Important:** The converse is **not** true. A function can be continuous at a point but **not** differentiable there. The classic examples occur when the graph has:

1. A **corner** or **cusp** (left and right derivatives are finite but not equal, or one is infinite).
2. A **vertical tangent** (the derivative limit is $\pm\infty$).

**Examples:**

1. **Differentiable ⇒ Continuous:** $f(x)=x^2$ is differentiable everywhere, so it is continuous everywhere.
2. **Not Continuous ⇒ Not Differentiable:** $f(x)=\frac{1}{x}$ at $x=0$.
    - $f$ is not continuous at 0 (not even defined).
    - Therefore, $f$ cannot be differentiable at 0.
3. **Continuous but Not Differentiable (Corner):** $f(x)=|x-1|$ at $x=1$.
    - $f$ is continuous at 1.
    - Left derivative: $\lim_{h\to0^-}\frac{|(1+h)-1|-0}{h}=\lim_{h\to0^-}\frac{|h|}{h}=\lim_{h\to0^-}\frac{-h}{h}=-1$
    - Right derivative: $\lim_{h\to0^+}\frac{|(1+h)-1|-0}{h}=\lim_{h\to0^+}\frac{|h|}{h}=\lim_{h\to0^+}\frac{h}{h}=1$
    - Since the left and right derivatives are not equal, $f'(1)$ does not exist. The graph has a sharp corner at $(1,0)$.
4. **Continuous but Not Differentiable (Vertical Tangent):** $f(x)=x^{1/3}$ at $x=0$.
    - $f$ is continuous at 0.
    - $f'(x)=\frac{1}{3}x^{-2/3}$ for $x \ne 0$. As $x \to 0$, $f'(x) \to \infty$.
    - The tangent line at $x=0$ is vertical, so the derivative (slope) is undefined.

### **Additional Practice Problems**

1. For $f(x)=x^2-5x$, find the average rate of change from $x=1$ to $x=4$.
2. Using the limit definition, find $f'(x)$ for $f(x)=3x-7$.
3. Using the limit definition, find $g'(9)$ for $g(x)=\sqrt{x}$.
4. Find the equation of the tangent line to $y=x^3$ at $x=-1$.
5. Estimate $h'(0)$ from the table:
    
    
    | **$x$** | **-0.1** | **-0.01** | **0.0** | **0.01** | **0.1** |
    | --- | --- | --- | --- | --- | --- |
    | $h(x)$ | 0.995 | 0.99995 | 1.0 | 0.99995 | 0.995 |
6. Sketch a function that is continuous at $x=2$ but not differentiable at $x=2$.
7. Explain why $f(x)=\sqrt[3]{x-2}$ has a point of non-differentiability. What type is it?
8. True or False: If $f$ is continuous on $[1,5]$, then $f$ is differentiable somewhere on $(1,5)$.
9. Given the graph of $f(x)=|x+2|$, determine if $f'(-2)$ exists.
10. For $f(x)=\begin{cases} x^2 & x \le 1 \ mx+b & x > 1 \end{cases}$, find $m$ and $b$ so that $f$ is differentiable at $x=1$.

**Selected Solutions:**

1. $\frac{(16-20)-(1-5)}{3} = \frac{(-4)-(-4)}{3}=0$.
2. $f'(x)=\lim_{h\to0}\frac{[3(x+h)-7]-[3x-7]}{h}=\lim_{h\to0}\frac{3h}{h}=3$.
3. $g'(9)=\lim_{h\to0}\frac{\sqrt{9+h}-3}{h}$. Rationalize: $\frac{(\sqrt{9+h}-3)(\sqrt{9+h}+3)}{h(\sqrt{9+h}+3)}=\frac{h}{h(\sqrt{9+h}+3)}\to\frac{1}{6}$.
4. Point: $(-1, -1)$. $f'(x)=3x^2$, so slope $f'(-1)=3$. Equation: $y+1=3(x+1)$.
5. Use symmetric difference: $\frac{h(0.1)-h(-0.1)}{0.2}=\frac{0.995-0.995}{0.2}=0$. Estimate: $h'(0)\approx0$.
6. Sketch a graph with a sharp corner or cusp at $x=2$ (e.g., $|x-2|$).
7. $f'(x)=\frac{1}{3}(x-2)^{-2/3}$ is undefined at $x=2$ (vertical tangent). Continuous but not differentiable at $x=2$.
8. **True.** The statement is weak but correct. If $f$ is continuous on a closed interval, it must be differentiable at *some* points inside (except for pathological examples not encountered in AP Calculus).
9. No. $f(x)=|x+2|$ has a sharp corner at $x=-2$. Left derivative = -1, right derivative = 1.
10. For continuity: $1^2 = m(1)+b \Rightarrow 1 = m+b$. For differentiability, derivatives from left and right must match at $x=1$: left derivative $2(1)=2$, right derivative $m$. So $m=2$, then $b=1-2=-1$.

#