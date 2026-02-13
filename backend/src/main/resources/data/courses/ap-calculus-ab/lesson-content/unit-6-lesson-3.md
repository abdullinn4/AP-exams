# **Lesson 16: Antiderivatives and Basic Integration**

### **16.1 Indefinite Integrals and Basic Rules**

**Definition:**
An **antiderivative** of a function $f(x)$ is a function $F(x)$ such that $F'(x) = f(x)$. The **indefinite integral** of $f$ with respect to $x$ is the family of all antiderivatives of $f$, denoted by:
$$\int f(x) \, dx = F(x) + C$$
where $C$ is an arbitrary constant called the **constant of integration**.

**Comments:**

- **Why +C?** Because the derivative of a constant is zero, if $F(x)$ is an antiderivative, then $F(x) + C$ is also an antiderivative for any constant $C$. The constant represents an unknown vertical shift.
- **Basic Rules:** These are obtained by reversing derivative rules:
    1. **Power Rule (for $n \neq -1$):** $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$
    2. **Constant Multiple:** $\int k f(x) \, dx = k \int f(x) \, dx$
    3. **Sum/Difference:** $\int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx$
    4. **Integral of Zero:** $\int 0 \, dx = C$
    5. **Integral of Constant:** $\int k \, dx = kx + C$
- **Common Antiderivatives:**
    - $\int e^x \, dx = e^x + C$
    - $\int \sin x \, dx = -\cos x + C$
    - $\int \cos x \, dx = \sin x + C$
    - $\int \sec^2 x \, dx = \tan x + C$
    - $\int \frac{1}{x} \, dx = \ln|x| + C$ (for $x \neq 0$)
    - $\int \frac{1}{1+x^2} \, dx = \arctan x + C$
    - $\int \frac{1}{\sqrt{1-x^2}} \, dx = \arcsin x + C$
- **Limitation:** Not all functions have elementary antiderivatives (e.g., $e^{-x^2}$, $\frac{\sin x}{x}$). In such cases, we may approximate definite integrals numerically.

**Examples:**

1. **Basic Power Rule:** $\int x^4 \, dx = \frac{x^5}{5} + C$.
2. **Fractional Exponent:** $\int \sqrt{x} \, dx = \int x^{1/2} \, dx = \frac{x^{3/2}}{3/2} + C = \frac{2}{3} x^{3/2} + C$.
3. **Sum Rule:** $\int (3x^2 - 2x + 5) \, dx = 3 \cdot \frac{x^3}{3} - 2 \cdot \frac{x^2}{2} + 5x + C = x^3 - x^2 + 5x + C$.
4. **Trigonometric:** $\int (2\sin x + 3\sec^2 x) \, dx = -2\cos x + 3\tan x + C$.

---

### **16.2 Algebraic Manipulation Before Integration**

**Definition:**
Some integrands require algebraic manipulation—such as expanding, factoring, long division, or completing the square—to rewrite them in a form where basic integration rules apply.

**Comments:**

- **Long Division:** For rational functions where the degree of the numerator is greater than or equal to the degree of the denominator, perform polynomial long division to express it as a polynomial plus a proper rational function.
- **Completing the Square:** Useful for integrals involving quadratic expressions, especially when they match forms for inverse trigonometric or logarithmic integrals.
- **Splitting Fractions:** A single fraction with multiple terms in the numerator can often be split into separate fractions.
- **Multiplying/Dividing:** Sometimes multiplying numerator and denominator by a conjugate or dividing through by a common factor simplifies the integrand.

**Examples:**

1. **Long Division:** Evaluate $\int \frac{x^2 + 3x - 5}{x-1} \, dx$.
    - Perform long division: $\frac{x^2+3x-5}{x-1} = x + 4 + \frac{-1}{x-1}$.
    - Then $\int \left( x + 4 + \frac{-1}{x-1} \right) dx = \frac{x^2}{2} + 4x - \ln|x-1| + C$.
2. **Splitting Fractions:** Evaluate $\int \frac{x^3 + 2x + 1}{x} \, dx$.
    - Split: $\frac{x^3}{x} + \frac{2x}{x} + \frac{1}{x} = x^2 + 2 + \frac{1}{x}$.
    - Integral: $\frac{x^3}{3} + 2x + \ln|x| + C$.
3. **Completing the Square:** Evaluate $\int \frac{1}{x^2 + 4x + 13} \, dx$.
    - Complete the square: $x^2+4x+13 = (x^2+4x+4) + 9 = (x+2)^2 + 3^2$.
    - Then $\int \frac{1}{(x+2)^2 + 9} \, dx$. Recognize form $\int \frac{du}{u^2+a^2} = \frac{1}{a} \arctan\left( \frac{u}{a} \right) + C$.
    - Here $u = x+2, a=3$. So integral = $\frac{1}{3} \arctan\left( \frac{x+2}{3} \right) + C$.
4. **Multiplying by Conjugate:** Evaluate $\int \frac{1}{\sqrt{x+1} - \sqrt{x}} \, dx$.
    - Multiply numerator and denominator by the conjugate $\sqrt{x+1} + \sqrt{x}$:
    $$\frac{1}{\sqrt{x+1} - \sqrt{x}} \cdot \frac{\sqrt{x+1} + \sqrt{x}}{\sqrt{x+1} + \sqrt{x}} = \frac{\sqrt{x+1} + \sqrt{x}}{(x+1)-x} = \sqrt{x+1} + \sqrt{x}$$
    - Then integrate: $\int (\sqrt{x+1} + \sqrt{x}) \, dx = \frac{2}{3}(x+1)^{3/2} + \frac{2}{3}x^{3/2} + C$.

---

### **16.3 Substitution Method (u-Substitution)**

**Definition:**
The **substitution method** (or **u-substitution**) is the reverse of the chain rule. It is used when the integrand contains a composite function and its derivative (up to a constant factor).

**Procedure for Indefinite Integrals:**

1. Choose a substitution $u = g(x)$ such that the integrand contains $g(x)$ and its derivative $g'(x)$ (or a constant multiple thereof).
2. Compute $du = g'(x) dx$, and solve for $dx$.
3. Rewrite the integral entirely in terms of $u$ and $du$. If any $x$ terms remain, express them in terms of $u$.
4. Integrate with respect to $u$.
5. Substitute back to express the result in terms of $x$.

**For Definite Integrals:** There are two approaches:

- **Method 1:** Change the limits of integration according to $u = g(x)$. Then evaluate the integral in terms of $u$ without returning to $x$.
- **Method 2:** Integrate in terms of $u$ and then convert back to $x$ before evaluating using the original limits.

**Comments:**

- **Choosing $u$:** Look for an "inside function" whose derivative appears. Common choices: the argument of a trigonometric, exponential, or logarithmic function; the inner function of a power; etc.
- **Missing Constant Factors:** Sometimes the derivative is off by a constant factor. You can multiply and divide by that constant to adjust, provided it's not zero.
- **Verification:** Differentiate your result to check.

**Examples:**

1. **Basic Substitution:** Find $\int 2x (x^2+1)^4 \, dx$.
    - Let $u = x^2+1$, then $du = 2x \, dx$. The integral becomes $\int u^4 \, du = \frac{u^5}{5} + C = \frac{(x^2+1)^5}{5} + C$.
2. **Trigonometric Substitution:** Find $\int \sin(3x) \, dx$.
    - Let $u = 3x$, then $du = 3 dx$, so $dx = \frac{1}{3} du$.
    - $\int \sin u \cdot \frac{1}{3} du = \frac{1}{3} (-\cos u) + C = -\frac{1}{3} \cos(3x) + C$.
3. **Definite Integral with Change of Limits:** Evaluate $\int_0^1 x e^{x^2} \, dx$.
    - Let $u = x^2$, then $du = 2x dx \Rightarrow x dx = \frac{1}{2} du$.
    - Change limits: when $x=0$, $u=0$; when $x=1$, $u=1$.
    - Integral becomes $\int_0^1 e^u \cdot \frac{1}{2} du = \frac{1}{2} \left. e^u \right|_0^1 = \frac{1}{2}(e - 1)$.
4. **Substitution with Extra Algebra:** Find $\int \frac{x}{\sqrt{1-4x^2}} \, dx$.
    - Let $u = 1-4x^2$, then $du = -8x dx \Rightarrow x dx = -\frac{1}{8} du$.
    - Integral: $\int \frac{1}{\sqrt{u}} \cdot \left( -\frac{1}{8} \right) du = -\frac{1}{8} \int u^{-1/2} du = -\frac{1}{8} \cdot 2u^{1/2} + C = -\frac{1}{4} \sqrt{1-4x^2} + C$.
5. **Integral of Tangent:** Find $\int \tan x \, dx$.
    - Write $\tan x = \frac{\sin x}{\cos x}$. Let $u = \cos x$, then $du = -\sin x dx$.
    - $\int \frac{\sin x}{\cos x} dx = -\int \frac{1}{u} du = -\ln|u| + C = -\ln|\cos x| + C = \ln|\sec x| + C$.

---

### **16.4 Integration Strategy Selection**

**Definition:**
Choosing the right technique is crucial for finding antiderivatives. A systematic approach involves recognizing the form of the integrand and applying appropriate rules or manipulations.

**Step-by-Step Strategy:**

1. **Simplify:** Expand, factor, or algebraically manipulate the integrand to a simpler form.
2. **Look for Basic Antiderivative:** Check if the integrand matches a known derivative formula.
3. **Consider Substitution:** Look for a composite function and its derivative (or a constant multiple).
4. **Algebraic Rearrangement:** For rational functions, use long division or partial fractions (partial fractions are covered in Calculus BC, but simple cases may be handled by splitting).
5. **Complete the Square:** For quadratics inside square roots or denominators.
6. **Try Trigonometric Identities:** For trigonometric integrals, use identities to simplify.
7. **If Stuck:** Consider if the integral is non-elementary or requires advanced techniques (beyond AP Calculus AB).

**Comments:**

- **Practice is Key:** The more integrals you solve, the better you become at recognizing patterns.
- **Multiple Methods:** Sometimes more than one method works; choose the most efficient.
- **Check Your Answer:** Differentiate your antiderivative to verify it matches the integrand.

**Examples:**

1. **Rational Function:** $\int \frac{x^2+2x-1}{x} \, dx$.
    - Split: $\int \left( x + 2 - \frac{1}{x} \right) dx = \frac{x^2}{2} + 2x - \ln|x| + C$.
2. **Substitution with Trig:** $\int \sec^2(5x) \, dx$.
    - Let $u = 5x$, $du = 5 dx$, so $dx = \frac{1}{5} du$.
    - $\int \sec^2 u \cdot \frac{1}{5} du = \frac{1}{5} \tan u + C = \frac{1}{5} \tan(5x) + C$.
3. **Combining Techniques:** $\int \frac{e^{2x}}{1+e^x} \, dx$.
    - Note $e^{2x} = (e^x)^2$. Let $u = e^x$, then $du = e^x dx$. But we have $e^{2x} dx = e^x \cdot e^x dx = u \, du$.
    - Then integral becomes $\int \frac{u}{1+u} du$. Perform long division: $\frac{u}{1+u} = 1 - \frac{1}{1+u}$.
    - So $\int \left( 1 - \frac{1}{1+u} \right) du = u - \ln|1+u| + C = e^x - \ln(1+e^x) + C$.
4. **Completing the Square:** $\int \frac{1}{\sqrt{-x^2+6x-5}} \, dx$.
    - Complete the square: $-x^2+6x-5 = -(x^2-6x+5) = -(x^2-6x+9-4) = -[(x-3)^2-4] = 4 - (x-3)^2$.
    - Integral: $\int \frac{1}{\sqrt{4-(x-3)^2}} dx$. Let $u = x-3$, then $du = dx$.
    - This matches $\int \frac{1}{\sqrt{a^2-u^2}} du = \arcsin\left( \frac{u}{a} \right) + C$ with $a=2$.
    - So result: $\arcsin\left( \frac{x-3}{2} \right) + C$.

---

### **Lesson 16 Summary**

**Key Antiderivative Rules:**

- Power rule (for $n \neq -1$), exponential, trigonometric, inverse trigonometric, and logarithmic integrals.

**Algebraic Manipulations:**

- Long division, splitting fractions, completing the square, multiplying by conjugates.

**Substitution Method:**

- Choose $u$ to simplify the integrand. For definite integrals, change limits or substitute back.

**Strategy:**

1. Simplify the integrand.
2. Look for a known antiderivative.
3. If composite function present, try substitution.
4. Use algebraic techniques to rewrite into a familiar form.

**Important Notes:**

- Always include $+C$ for indefinite integrals.
- Check your work by differentiating.
- Some integrals require techniques beyond AB (like integration by parts, partial fractions), but simple cases may be handled by algebra.

---

### **Additional Practice Problems**

Find each indefinite integral or evaluate the definite integral.

1. $\int (3x^4 - 2x^2 + 7) \, dx$
2. $\int \frac{5}{x} \, dx$
3. $\int (2\sin x - 3\cos x + \sec^2 x) \, dx$
4. $\int \frac{x^3 - 2x + 1}{x} \, dx$
5. $\int \frac{x}{\sqrt{x^2+4}} \, dx$
6. $\int_0^{\pi/4} \sec^2 x \, dx$
7. $\int e^{-3x} \, dx$
8. $\int \frac{\ln x}{x} \, dx$
9. $\int \frac{1}{x^2+2x+2} \, dx$
10. $\int_0^1 x(1-x^2)^5 \, dx$
11. $\int \frac{x^2}{x^2+1} \, dx$
12. $\int \frac{1}{x^2-6x+13} \, dx$
13. $\int \cos(2x) e^{\sin(2x)} \, dx$
14. $\int \frac{e^x}{e^{2x}+1} \, dx$
15. $\int_0^{\pi/2} \sin(2x) \, dx$

**Selected Solutions:**

1. $\frac{3x^5}{5} - \frac{2x^3}{3} + 7x + C$
2. $5\ln|x| + C$
3. $-2\cos x - 3\sin x + \tan x + C$
4. Split: $\int (x^2 - 2 + \frac{1}{x}) dx = \frac{x^3}{3} - 2x + \ln|x| + C$
5. Let $u = x^2+4$, $du=2x dx$, so $x dx = \frac{1}{2} du$. Integral = $\int u^{-1/2} \cdot \frac{1}{2} du = \frac{1}{2} \cdot 2u^{1/2} + C = \sqrt{x^2+4} + C$.
6. Antiderivative is $\tan x$. Evaluate: $\tan(\pi/4) - \tan(0) = 1 - 0 = 1$.
7. Let $u = -3x$, $du = -3 dx$, so $dx = -\frac{1}{3} du$. Then $\int e^u \cdot (-\frac{1}{3}) du = -\frac{1}{3} e^u + C = -\frac{1}{3} e^{-3x} + C$.
8. Let $u = \ln x$, then $du = \frac{1}{x} dx$. Integral = $\int u \, du = \frac{u^2}{2} + C = \frac{(\ln x)^2}{2} + C$.
9. Complete square: $x^2+2x+2 = (x+1)^2+1$. Let $u = x+1$, $du=dx$. Then $\int \frac{1}{u^2+1} du = \arctan u + C = \arctan(x+1) + C$.
10. Let $u = 1-x^2$, $du = -2x dx$, so $x dx = -\frac{1}{2} du$. Change limits: when $x=0$, $u=1$; when $x=1$, $u=0$. Integral = $\int_1^0 u^5 \cdot (-\frac{1}{2}) du = -\frac{1}{2} \int_1^0 u^5 du = \frac{1}{2} \int_0^1 u^5 du = \frac{1}{2} \cdot \left. \frac{u^6}{6} \right|_0^1 = \frac{1}{12}$.
11. Long division: $\frac{x^2}{x^2+1} = 1 - \frac{1}{x^2+1}$. So integral = $\int 1 dx - \int \frac{1}{x^2+1} dx = x - \arctan x + C$.
12. Complete square: $x^2-6x+13 = (x-3)^2+4$. Let $u = x-3$, $du=dx$. Then $\int \frac{1}{u^2+4} du = \frac{1}{2} \arctan\left( \frac{u}{2} \right) + C = \frac{1}{2} \arctan\left( \frac{x-3}{2} \right) + C$.
13. Let $u = \sin(2x)$, then $du = 2\cos(2x) dx$, so $\cos(2x) dx = \frac{1}{2} du$. Integral = $\int e^u \cdot \frac{1}{2} du = \frac{1}{2} e^u + C = \frac{1}{2} e^{\sin(2x)} + C$.
14. Let $u = e^x$, then $du = e^x dx$. Integral becomes $\int \frac{1}{u^2+1} du = \arctan u + C = \arctan(e^x) + C$.
15. Let $u = 2x$, $du=2 dx$, so $dx = \frac{1}{2} du$. Limits: when $x=0$, $u=0$; when $x=\pi/2$, $u=\pi$. Integral = $\int_0^{\pi} \sin u \cdot \frac{1}{2} du = \frac{1}{2} [-\cos u]_0^{\pi} = \frac{1}{2} (-\cos\pi + \cos 0) = \frac{1}{2} (-(-1)+1) = \frac{1}{2}(1+1)=1$. Alternatively, antiderivative of $\sin(2x)$ is $-\frac{1}{2}\cos(2x)$, evaluate at $\pi/2$ and $0$: $-\frac{1}{2}\cos\pi - (-\frac{1}{2}\cos 0) = -\frac{1}{2}(-1) + \frac{1}{2}(1) = \frac{1}{2}+\frac{1}{2}=1$.