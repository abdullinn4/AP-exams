# Lesson 16: Antiderivatives and Advanced Integration Techniques (BC Extended)

## **16.1 The Big Idea: Reversing Differentiation**

You've mastered taking derivatives. Now we ask the inverse question: Given a rate of change $f(x)$, what function $F(x)$ has $f(x)$ as its derivative? This is the search for the **antiderivative**. Just as subtraction undoes addition and division undoes multiplication, **integration undoes differentiation**.

**Definition:**
An **antiderivative** of a function $f(x)$ is a function $F(x)$ such that $F'(x) = f(x)$ for all $x$ in the domain of $f$.

The **indefinite integral** represents the *family* of all antiderivatives:
$$\int f(x) \, dx = F(x) + C$$
Here, $C$ is the **constant of integration**. Since the derivative of a constant is zero, any constant added to $F(x)$ will still have the same derivative $f(x)$.

**Why the $+C$ is Non-Negotiable:**
Forgetting $+C$ is like saying the only solution to $x + 3 = 5$ is $x=2$, when in reality there could be other equations. The $+C$ accounts for every possible vertical shift of the antiderivative. On the AP exam, omitting $+C$ for an indefinite integral means losing a point.

**The Basic Rules (Reverse Power Rule and More):**
These rules come directly from reversing the differentiation rules you already know.

1.  **Power Rule ($n \neq -1$):** $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$
2.  **Constant Multiple:** $\int k f(x) \, dx = k \int f(x) \, dx$
3.  **Sum/Difference:** $\int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx$
4.  **Integral of a Constant:** $\int k \, dx = kx + C$

**Common Antiderivatives You Must Know:**

| Function | Antiderivative |
| :--- | :--- |
| $e^x$ | $e^x + C$ |
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |
| $\sec^2 x$ | $\tan x + C$ |
| $\frac{1}{x}$ (for $x \neq 0$) | $\ln\|x\| + C$ |
| $\frac{1}{1+x^2}$ | $\arctan x + C$ |
| $\frac{1}{\sqrt{1-x^2}}$ | $\arcsin x + C$ |

**Let's See It In Action:**

**Example 1: Basic Power Rule**
Find $\int x^4 \, dx$.
*   Reverse the power rule: Add 1 to the exponent (4+1=5) and divide by the new exponent.
*   $\int x^4 \, dx = \boxed{\frac{x^5}{5} + C}$.

**Example 2: Fractional Exponent**
Find $\int \sqrt{x} \, dx$.
*   First, rewrite: $\sqrt{x} = x^{1/2}$.
*   Apply the power rule: $\int x^{1/2} \, dx = \frac{x^{3/2}}{3/2} + C = \boxed{\frac{2}{3} x^{3/2} + C}$.

**Example 3: Combining Rules**
Find $\int (3x^2 - 2x + 5) \, dx$.
*   Integrate term-by-term:
    $\int 3x^2 \, dx = 3 \cdot \frac{x^3}{3} = x^3$
    $\int -2x \, dx = -2 \cdot \frac{x^2}{2} = -x^2$
    $\int 5 \, dx = 5x$
*   Combine and add $C$: $\boxed{x^3 - x^2 + 5x + C}$.

**Example 4: Trigonometric Integral**
Find $\int (2\sin x + 3\sec^2 x) \, dx$.
*   $\int 2\sin x \, dx = -2\cos x$
*   $\int 3\sec^2 x \, dx = 3\tan x$
*   Answer: $\boxed{-2\cos x + 3\tan x + C}$.

---

## **16.2 Algebra First: Simplifying the Integrand**

You wouldn't try to eat a whole apple without biting into it first. Similarly, don't try to integrate a complex expression without first simplifying it algebraically. Often, the hardest part of integration is the algebra that comes *before* you apply an integration rule.

**Key Algebraic Techniques:**

1.  **Expanding/Factoring:** Multiply out products or factor to cancel common terms.
2.  **Splitting Fractions:** If the numerator is a sum, you can split a single fraction into multiple, simpler fractions: $\frac{a+b}{c} = \frac{a}{c} + \frac{b}{c}$.
3.  **Long Division:** For rational functions (polynomial divided by polynomial) where the degree of the numerator is greater than or equal to the degree of the denominator.
4.  **Completing the Square:** Essential for integrals that lead to inverse trigonometric functions (like $\arctan$) or certain logarithmic forms.
5.  **Multiplying by a Conjugate:** Useful for integrals with radicals in the denominator.

**Example 1: Long Division**
Evaluate $\int \frac{x^2 + 3x - 5}{x-1} \, dx$.
*   **Step 1: Perform long division.**
    $\frac{x^2 + 3x - 5}{x-1} = x + 4 + \frac{-1}{x-1}$.
*   **Step 2: Integrate the simplified result.**
    $\int \left( x + 4 - \frac{1}{x-1} \right) dx = \frac{x^2}{2} + 4x - \ln|x-1| + C$.
*   Final answer: $\boxed{\frac{x^2}{2} + 4x - \ln|x-1| + C}$.

**Example 2: Splitting a Fraction**
Evaluate $\int \frac{x^3 + 2x + 1}{x} \, dx$.
*   **Step 1: Split the fraction for each term in the numerator.**
    $\frac{x^3 + 2x + 1}{x} = \frac{x^3}{x} + \frac{2x}{x} + \frac{1}{x} = x^2 + 2 + \frac{1}{x}$.
*   **Step 2: Integrate.**
    $\int \left( x^2 + 2 + \frac{1}{x} \right) dx = \boxed{\frac{x^3}{3} + 2x + \ln\|x\| + C}$.

**Example 3: Completing the Square**
Evaluate $\int \frac{1}{x^2 + 4x + 13} \, dx$.
*   **Step 1: Complete the square in the denominator.**
    $x^2 + 4x + 13 = (x^2 + 4x + 4) + 9 = (x+2)^2 + 3^2$.
*   **Step 2: Recognize the arctangent form.**
    The integral is now $\int \frac{1}{(x+2)^2 + 3^2} \, dx$. This matches the formula: $\int \frac{du}{u^2 + a^2} = \frac{1}{a} \arctan\left( \frac{u}{a} \right) + C$.
*   **Step 3: Identify $u$ and $a$ and integrate.**
    Here, $u = x+2$ and $a=3$. So the integral equals $\boxed{\frac{1}{3} \arctan\left( \frac{x+2}{3} \right) + C}$.

**Example 4: Multiplying by a Conjugate**
Evaluate $\int \frac{1}{\sqrt{x+1} - \sqrt{x}} \, dx$.
*   **Step 1: Multiply numerator and denominator by the conjugate.** The conjugate of $\sqrt{x+1} - \sqrt{x}$ is $\sqrt{x+1} + \sqrt{x}$.
    $\frac{1}{\sqrt{x+1} - \sqrt{x}} \cdot \frac{\sqrt{x+1} + \sqrt{x}}{\sqrt{x+1} + \sqrt{x}} = \frac{\sqrt{x+1} + \sqrt{x}}{(x+1) - x} = \sqrt{x+1} + \sqrt{x}$.
*   **Step 2: Integrate the simplified expression.**
    $\int (\sqrt{x+1} + \sqrt{x}) \, dx = \int ( (x+1)^{1/2} + x^{1/2} ) \, dx = \boxed{\frac{2}{3}(x+1)^{3/2} + \frac{2}{3}x^{3/2} + C}$.

---

## **16.3 The Reverse Chain Rule: u-Substitution**

The Chain Rule for differentiation says: $\frac{d}{dx}[F(g(x))] = F'(g(x)) \cdot g'(x)$.  
**u-Substitution** is this process in reverse. It's our primary tool for integrating composite functions.

**The Core Idea:** Look for an integral in the form $\int f(g(x)) \cdot g'(x) \, dx$. Let $u = g(x)$. Then $du = g'(x) dx$, and the integral simplifies beautifully to $\int f(u) \, du$.

**Step-by-Step Process:**

1.  **Choose $u$:** Pick part of the integrand to be $u$, usually the "inner function" of a composition.
2.  **Compute $du$:** Find $du = u' dx$.
3.  **Substitute:** Rewrite the entire integral in terms of $u$ and $du$. If $dx$ doesn't perfectly match, solve for $dx$ and substitute.
4.  **Integrate:** Perform the (now simpler) integration with respect to $u$.
5.  **Back-Substitute:** Replace $u$ with your original expression in $x$.

**For Definite Integrals:** You have a choice:
*   **Change the limits:** When you substitute $u = g(x)$, also change the $x$-limits to $u$-limits. Then evaluate the $u$-integral directly.
*   **Don't change the limits:** Integrate in terms of $u$, then convert your antiderivative back to $x$ before evaluating with the original $x$-limits.

**Example 1: Basic Substitution**
Find $\int 2x (x^2+1)^4 \, dx$.
*   **Step 1:** Let $u = x^2+1$. (The inner function of the power)
*   **Step 2:** Then $du = 2x \, dx$. Perfect! The $2x \, dx$ is already present.
*   **Step 3:** Substitute: $\int (x^2+1)^4 \cdot (2x dx) = \int u^4 \, du$.
*   **Step 4:** Integrate: $\frac{u^5}{5} + C$.
*   **Step 5:** Back-substitute: $\boxed{\frac{(x^2+1)^5}{5} + C}$.

**Example 2: Trig Substitution with a Constant Factor**
Find $\int \sin(3x) \, dx$.
*   **Step 1:** Let $u = 3x$.
*   **Step 2:** Then $du = 3 dx$. We have $dx$, not $3 dx$. Solve for $dx$: $dx = \frac{1}{3} du$.
*   **Step 3:** Substitute: $\int \sin(u) \cdot \frac{1}{3} du = \frac{1}{3} \int \sin u \, du$.
*   **Step 4:** Integrate: $\frac{1}{3} (-\cos u) + C = -\frac{1}{3} \cos u + C$.
*   **Step 5:** Back-substitute: $\boxed{-\frac{1}{3} \cos(3x) + C}$.

**Example 3: Definite Integral with Changed Limits**
Evaluate $\int_0^1 x e^{x^2} \, dx$.
*   **Step 1:** Let $u = x^2$.
*   **Step 2:** $du = 2x dx \Rightarrow x dx = \frac{1}{2} du$.
*   **Step 3:** **Change the limits.** When $x=0$, $u=0^2=0$. When $x=1$, $u=1^2=1$.
*   **Step 4:** Substitute everything: $\int_{x=0}^{x=1} e^{x^2} (x dx) = \int_{u=0}^{u=1} e^u \cdot \frac{1}{2} du$.
*   **Step 5:** Evaluate: $\frac{1}{2} \int_0^1 e^u \, du = \frac{1}{2} \left[ e^u \right]_0^1 = \frac{1}{2}(e - 1)$.
*   Final answer: $\boxed{\frac{1}{2}(e - 1)}$.

**Example 4: Integral of Tangent (A Classic Result)**
Find $\int \tan x \, dx$.
*   **Step 1:** Rewrite using sine and cosine: $\int \frac{\sin x}{\cos x} dx$.
*   **Step 2:** Let $u = \cos x$. Then $du = -\sin x \, dx$, so $\sin x \, dx = -du$.
*   **Step 3:** Substitute: $\int \frac{1}{u} \cdot (-du) = -\int \frac{1}{u} du = -\ln|u| + C$.
*   **Step 4:** Back-substitute: $-\ln|\cos x| + C = \ln|\cos x|^{-1} + C = \boxed{\ln|\sec x| + C}$.
    *This is a very important antiderivative to memorize.*

---

## **16.4 Integration by Parts: The Product Rule in Reverse (BC)**

### **The Big Idea: When u-Substitution Fails**
What do you do when faced with an integral of a product that isn't a clear chain rule reversal, like $\int x e^x \, dx$ or $\int x \cos x \, dx$? These integrals involve products of functions where neither is the derivative of the other. Enter **integration by parts** - the integration counterpart to the product rule.

**Derivation from the Product Rule:**
Start with the product rule for differentiation:
$$
\frac{d}{dx}[u \cdot v] = u'v + uv'
$$
Rearrange:
$$
uv' = \frac{d}{dx}[uv] - u'v
$$
Integrate both sides with respect to $x$:
$$
\int uv' \, dx = uv - \int u'v \, dx
$$
This is the **integration by parts formula**.

**The Working Formula:**
More commonly, we write it with differentials. If we let $u = f(x)$ and $dv = g'(x)dx$, then $du = f'(x)dx$ and $v = g(x)$, and the formula becomes:
$$
\int u \, dv = uv - \int v \, du
$$

### **How to Choose $u$ and $dv$**
The art of integration by parts lies in choosing $u$ and $dv$ wisely. A helpful mnemonic is **LIATE**, which suggests the order of preference for choosing $u$:

1. **L**ogarithmic functions ($\ln x$, $\log_a x$)
2. **I**nverse trigonometric functions ($\arcsin x$, $\arctan x$)
3. **A**lgebraic functions ($x^n$, polynomials)
4. **T**rigonometric functions ($\sin x$, $\cos x$)
5. **E**xponential functions ($e^x$, $a^x$)

The function that comes first in LIATE is usually the best choice for $u$.

**Example 1: Basic Integration by Parts**
Find $\int x e^x \, dx$.

*Step-by-step:*
1. **Choose $u$ and $dv$:**
   - According to LIATE: Algebraic ($x$) comes before Exponential ($e^x$).
   - Let $u = x$ and $dv = e^x dx$
2. **Compute $du$ and $v$:**
   - $du = dx$
   - $v = \int e^x dx = e^x$
3. **Apply the formula:**
   $\int x e^x dx = uv - \int v du = x e^x - \int e^x dx$
4. **Complete the integration:**
   $= x e^x - e^x + C = \boxed{e^x(x - 1) + C}$

**Example 2: Integration by Parts Twice**
Find $\int x^2 \sin x \, dx$.

*Step-by-step:*
1. **First application:**
   - Let $u = x^2$ (Algebraic) and $dv = \sin x dx$
   - $du = 2x dx$, $v = -\cos x$
   - $\int x^2 \sin x dx = -x^2 \cos x - \int (-\cos x)(2x dx) = -x^2 \cos x + 2\int x \cos x dx$
2. **Second application on $\int x \cos x dx$:**
   - Let $u = x$, $dv = \cos x dx$
   - $du = dx$, $v = \sin x$
   - $\int x \cos x dx = x \sin x - \int \sin x dx = x \sin x + \cos x$
3. **Combine results:**
   $\int x^2 \sin x dx = -x^2 \cos x + 2(x \sin x + \cos x) + C$
   $= \boxed{-x^2 \cos x + 2x \sin x + 2\cos x + C}$

**Example 3: The "Cycling" Case**
Find $\int e^x \sin x \, dx$.

*Step-by-step:*
1. **First application:**
   - Let $u = e^x$, $dv = \sin x dx$
   - $du = e^x dx$, $v = -\cos x$
   - $\int e^x \sin x dx = -e^x \cos x - \int (-\cos x)(e^x dx) = -e^x \cos x + \int e^x \cos x dx$
2. **Second application on $\int e^x \cos x dx$:**
   - Let $u = e^x$, $dv = \cos x dx$
   - $du = e^x dx$, $v = \sin x$
   - $\int e^x \cos x dx = e^x \sin x - \int e^x \sin x dx$
3. **Substitute back and solve:**
   Let $I = \int e^x \sin x dx$. Then:
   $I = -e^x \cos x + [e^x \sin x - I]$
   $2I = e^x \sin x - e^x \cos x$
   $I = \boxed{\frac{1}{2}e^x(\sin x - \cos x) + C}$

**Example 4: Definite Integral with Integration by Parts**
Evaluate $\int_1^e \ln x \, dx$.

*Step-by-step:*
1. **Choose $u$ and $dv$:**
   - $\ln x$ is logarithmic, so let $u = \ln x$, $dv = dx$
   - $du = \frac{1}{x} dx$, $v = x$
2. **Apply the formula:**
   $\int_1^e \ln x dx = [x \ln x]_1^e - \int_1^e x \cdot \frac{1}{x} dx$
   $= [x \ln x]_1^e - \int_1^e 1 dx$
3. **Evaluate:**
   $= (e \ln e - 1 \ln 1) - [x]_1^e$
   $= (e \cdot 1 - 0) - (e - 1)$
   $= e - (e - 1) = \boxed{1}$

---

## **16.5 Partial Fractions: Decomposing Rational Functions (BC)**

### **The Big Idea: Breaking Down Complex Fractions**
When integrating rational functions (polynomial divided by polynomial), sometimes the denominator can be factored into linear or irreducible quadratic factors. **Partial fraction decomposition** allows us to rewrite such fractions as a sum of simpler fractions that we can integrate using basic techniques.

### **Case 1: Distinct Linear Factors**
If the denominator factors into distinct linear factors, we can write:
$$
\frac{P(x)}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}
$$
where $A$ and $B$ are constants to be determined.

**Example 1: Distinct Linear Factors**
Find $\int \frac{x+3}{x^2-3x+2} dx$.

*Step-by-step:*
1. **Factor the denominator:**
   $x^2-3x+2 = (x-1)(x-2)$
2. **Set up the decomposition:**
   $\frac{x+3}{(x-1)(x-2)} = \frac{A}{x-1} + \frac{B}{x-2}$
3. **Solve for A and B:**
   Multiply both sides by $(x-1)(x-2)$:
   $x+3 = A(x-2) + B(x-1)$
   - Let $x=1$: $1+3 = A(1-2) \Rightarrow 4 = -A \Rightarrow A = -4$
   - Let $x=2$: $2+3 = B(2-1) \Rightarrow 5 = B \Rightarrow B = 5$
4. **Rewrite and integrate:**
   $\int \frac{x+3}{x^2-3x+2} dx = \int \left( \frac{-4}{x-1} + \frac{5}{x-2} \right) dx$
   $= \boxed{-4\ln|x-1| + 5\ln|x-2| + C}$

### **Case 2: Repeated Linear Factors**
For repeated factors $(x-a)^n$, we need terms with all powers up to $n$:
$$
\frac{P(x)}{(x-a)^n} = \frac{A_1}{x-a} + \frac{A_2}{(x-a)^2} + \cdots + \frac{A_n}{(x-a)^n}
$$

**Example 2: Repeated Linear Factor**
Find $\int \frac{x^2+1}{x(x-1)^2} dx$.

*Step-by-step:*
1. **Set up the decomposition:**
   $\frac{x^2+1}{x(x-1)^2} = \frac{A}{x} + \frac{B}{x-1} + \frac{C}{(x-1)^2}$
2. **Solve for A, B, and C:**
   Multiply by $x(x-1)^2$:
   $x^2+1 = A(x-1)^2 + Bx(x-1) + Cx$
   - Let $x=0$: $1 = A(1) \Rightarrow A = 1$
   - Let $x=1$: $2 = C(1) \Rightarrow C = 2$
   - Choose $x=2$: $5 = 1(1) + B(2)(1) + 2(2) \Rightarrow 5 = 1 + 2B + 4 \Rightarrow 2B = 0 \Rightarrow B = 0$
3. **Rewrite and integrate:**
   $\int \frac{x^2+1}{x(x-1)^2} dx = \int \left( \frac{1}{x} + \frac{2}{(x-1)^2} \right) dx$
   $= \boxed{\ln|x| - \frac{2}{x-1} + C}$

### **Case 3: Irreducible Quadratic Factors**
For irreducible quadratics $ax^2+bx+c$ (cannot be factored with real numbers), we use:
$$
\frac{P(x)}{(ax^2+bx+c)(\text{other factors})} = \frac{Ax+B}{ax^2+bx+c} + \cdots
$$

**Example 3: Irreducible Quadratic Factor**
Find $\int \frac{2x^2-x+4}{x^3+4x} dx$.

*Step-by-step:*
1. **Factor the denominator:**
   $x^3+4x = x(x^2+4)$
2. **Set up the decomposition:**
   $\frac{2x^2-x+4}{x(x^2+4)} = \frac{A}{x} + \frac{Bx+C}{x^2+4}$
3. **Solve for A, B, and C:**
   Multiply by $x(x^2+4)$:
   $2x^2-x+4 = A(x^2+4) + (Bx+C)x$
   $= (A+B)x^2 + Cx + 4A$
   Compare coefficients:
   - $x^2$: $2 = A+B$
   - $x^1$: $-1 = C$
   - Constant: $4 = 4A \Rightarrow A = 1$
   Then $B = 2-1 = 1$
4. **Rewrite and integrate:**
   $\int \frac{2x^2-x+4}{x(x^2+4)} dx = \int \left( \frac{1}{x} + \frac{x-1}{x^2+4} \right) dx$
   $= \int \frac{1}{x} dx + \int \frac{x}{x^2+4} dx - \int \frac{1}{x^2+4} dx$
   $= \ln|x| + \frac{1}{2}\ln(x^2+4) - \frac{1}{2}\arctan\left(\frac{x}{2}\right) + C$
   $= \boxed{\ln|x| + \frac{1}{2}\ln(x^2+4) - \frac{1}{2}\arctan\left(\frac{x}{2}\right) + C}$

---

## **16.6 Improper Integrals: When Infinity is Involved (BC)**

### **The Big Idea: Extending Integration to Unbounded Regions**
An **improper integral** is an integral where either:
1. The interval of integration is infinite (e.g., $\int_1^\infty f(x) dx$), OR
2. The integrand has an infinite discontinuity within the interval (e.g., $\int_0^1 \frac{1}{\sqrt{x}} dx$ at $x=0$)

We evaluate improper integrals using limits.

### **Type 1: Infinite Intervals**
For integrals with infinite limits, we replace the infinity with a variable and take a limit:
1. $\int_a^\infty f(x) dx = \lim_{t \to \infty} \int_a^t f(x) dx$
2. $\int_{-\infty}^b f(x) dx = \lim_{t \to -\infty} \int_t^b f(x) dx$
3. $\int_{-\infty}^\infty f(x) dx = \int_{-\infty}^c f(x) dx + \int_c^\infty f(x) dx$ (for any $c$)

If the limit exists and is finite, we say the improper integral **converges**. If the limit is infinite or doesn't exist, it **diverges**.

**Example 1: Convergent Improper Integral**
Evaluate $\int_1^\infty \frac{1}{x^2} dx$.

*Step-by-step:*
1. **Set up with a limit:**
   $\int_1^\infty \frac{1}{x^2} dx = \lim_{t \to \infty} \int_1^t \frac{1}{x^2} dx$
2. **Evaluate the finite integral:**
   $\int_1^t x^{-2} dx = [-x^{-1}]_1^t = -\frac{1}{t} + 1$
3. **Take the limit:**
   $\lim_{t \to \infty} \left(1 - \frac{1}{t}\right) = 1 - 0 = 1$
   So $\int_1^\infty \frac{1}{x^2} dx = \boxed{1}$ (converges)

**Example 2: Divergent Improper Integral**
Evaluate $\int_1^\infty \frac{1}{x} dx$.

*Step-by-step:*
1. **Set up with a limit:**
   $\int_1^\infty \frac{1}{x} dx = \lim_{t \to \infty} \int_1^t \frac{1}{x} dx$
2. **Evaluate the finite integral:**
   $\int_1^t \frac{1}{x} dx = [\ln x]_1^t = \ln t - \ln 1 = \ln t$
3. **Take the limit:**
   $\lim_{t \to \infty} \ln t = \infty$
   So $\int_1^\infty \frac{1}{x} dx$ **diverges**

### **Type 2: Infinite Discontinuities**
When $f(x)$ has a vertical asymptote at $x=a$ within $[a,b]$, we use:
1. If $f$ is discontinuous at $a$: $\int_a^b f(x) dx = \lim_{t \to a^+} \int_t^b f(x) dx$
2. If $f$ is discontinuous at $b$: $\int_a^b f(x) dx = \lim_{t \to b^-} \int_a^t f(x) dx$
3. If $f$ is discontinuous at $c$ in $(a,b)$: $\int_a^b f(x) dx = \int_a^c f(x) dx + \int_c^b f(x) dx$

**Example 3: Integral with Discontinuity at an Endpoint**
Evaluate $\int_0^1 \frac{1}{\sqrt{x}} dx$.

*Step-by-step:*
1. **Identify the discontinuity:** At $x=0$, $\frac{1}{\sqrt{x}} \to \infty$
2. **Set up with a limit:**
   $\int_0^1 \frac{1}{\sqrt{x}} dx = \lim_{t \to 0^+} \int_t^1 x^{-1/2} dx$
3. **Evaluate the finite integral:**
   $\int_t^1 x^{-1/2} dx = [2x^{1/2}]_t^1 = 2(1) - 2t^{1/2} = 2 - 2\sqrt{t}$
4. **Take the limit:**
   $\lim_{t \to 0^+} (2 - 2\sqrt{t}) = 2 - 0 = 2$
   So $\int_0^1 \frac{1}{\sqrt{x}} dx = \boxed{2}$ (converges)

**Example 4: Integral with Discontinuity in the Middle**
Determine if $\int_{-1}^2 \frac{1}{x^2} dx$ converges.

*Step-by-step:*
1. **Identify the discontinuity:** At $x=0$, $\frac{1}{x^2} \to \infty$
2. **Split at the discontinuity:**
   $\int_{-1}^2 \frac{1}{x^2} dx = \int_{-1}^0 \frac{1}{x^2} dx + \int_0^2 \frac{1}{x^2} dx$
3. **Check each part:**
   $\int_{-1}^0 \frac{1}{x^2} dx = \lim_{t \to 0^-} \int_{-1}^t x^{-2} dx = \lim_{t \to 0^-} [-x^{-1}]_{-1}^t$
   $= \lim_{t \to 0^-} \left(-\frac{1}{t} + \frac{1}{-1}\right) = \lim_{t \to 0^-} \left(-\frac{1}{t} - 1\right) = \infty$ (diverges)
   Since one part diverges, the entire integral **diverges**.

### **The p-Integral Tests (Helpful for Comparison)**
For quick convergence/divergence analysis, remember these important results:
- $\int_1^\infty \frac{1}{x^p} dx$ converges if $p > 1$, diverges if $p \le 1$
- $\int_0^1 \frac{1}{x^p} dx$ converges if $p < 1$, diverges if $p \ge 1$

---

## **BC Integration Strategy Flowchart**

```mermaid
graph TD
    A[Start with ∫ f x dx] --> B{Can simplify algebraically?};
    B -->|Yes| C[Simplify];
    C --> D;
    B -->|No| D{Match basic form? e^x, sin x, etc};
    D -->|Yes| E[Integrate directly];
    D -->|No| F{Try u-substitution?};
    F -->|Yes| G[Apply u-substitution];
    G --> E;
    F -->|No| H{Product of functions?};
    H -->|Yes| I[Try Integration by Parts];
    I --> J{Success?};
    J -->|Yes| E;
    J -->|No| K{Try LIATE differently};
    K --> I;
    H -->|No| L{Rational function?};
    L -->|Yes| M[Try Partial Fractions];
    M --> E;
    L -->|No| N{Improper integral? Infinite or discontinuity};
    N -->|Yes| O[Use limits to evaluate];
    O --> E;
    N -->|No| P[Consider advanced techniques or numerical methods];
    E --> Q[Don't forget +C for indefinite!];