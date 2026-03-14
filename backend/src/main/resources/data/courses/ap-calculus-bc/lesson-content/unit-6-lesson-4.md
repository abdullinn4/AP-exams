# BC-Only Integration Techniques

Welcome to the BC-only material! You've mastered the basic integration techniques—power rule, u-substitution, and integrating common functions. But sometimes those methods aren't enough. When you have products of functions, rational functions with factorable denominators, or integrals with infinite limits, you need more advanced tools.

In this lesson, we'll cover three essential BC techniques:
- **Integration by Parts** – for products of functions (like $x e^x$ or $x \sin x$)
- **Method of Partial Fractions** – for rational functions where the denominator factors into linear terms
- **Improper Integrals** – for integrals with infinite limits or unbounded integrands

These techniques will expand your integration toolkit significantly. Let's dive in.

---

## **Integration by Parts**

### The Formula

Integration by parts is the reverse of the product rule for derivatives. Remember the product rule:
$$\frac{d}{dx}[u v] = u \frac{dv}{dx} + v \frac{du}{dx}$$

If we integrate both sides and rearrange, we get the integration by parts formula:

$$\int u \, dv = uv - \int v \, du$$

**How to use it:** You'll have an integral that looks like $\int f(x) g(x) \, dx$. You'll choose one part to be $u$ (which you'll differentiate) and the other part to be $dv$ (which you'll integrate). The goal is to make the new integral $\int v \, du$ simpler than the original.

### Choosing u and dv: LIATE

A helpful guideline for choosing $u$ is the **LIATE** rule. Rank functions in this order, and let $u$ be the highest-ranking type:

1. **L**ogarithmic functions: $\ln x$, $\log_a x$
2. **I**nverse trigonometric functions: $\arcsin x$, $\arctan x$, etc.
3. **A**lgebraic functions: $x^n$, polynomials
4. **T**rigonometric functions: $\sin x$, $\cos x$, $\tan x$
5. **E**xponential functions: $e^x$, $a^x$

So if your integrand is $x \ln x$, $u = \ln x$ (logarithmic) and $dv = x \, dx$ (algebraic). If it's $x e^x$, $u = x$ (algebraic) and $dv = e^x \, dx$ (exponential). This rule works most of the time!

### Step-by-Step Process

1. Identify $u$ and $dv$ from the integrand.
2. Compute $du$ by differentiating $u$.
3. Compute $v$ by integrating $dv$.
4. Apply the formula: $\int u \, dv = uv - \int v \, du$.
5. Evaluate the new integral (hopefully simpler than the original).
6. Add $+C$ for indefinite integrals.

### Example 1: Basic Integration by Parts

Find $\int x e^x \, dx$.

- **Step 1:** Choose $u$ and $dv$. Following LIATE, algebraic ($x$) comes before exponential ($e^x$). So let $u = x$, $dv = e^x \, dx$.
- **Step 2:** Differentiate $u$: $du = dx$.
- **Step 3:** Integrate $dv$: $v = \int e^x \, dx = e^x$.
- **Step 4:** Apply the formula:
  $$\int x e^x \, dx = u v - \int v \, du = x e^x - \int e^x \, dx$$
- **Step 5:** Evaluate $\int e^x \, dx = e^x$.
- **Step 6:** Add $+C$: $\int x e^x \, dx = x e^x - e^x + C = e^x(x - 1) + C$.

### Example 2: Logarithmic Function

Find $\int \ln x \, dx$.

Wait—this is just $\ln x$ by itself. What do we choose as $dv$? We can think of it as $\int \ln x \cdot 1 \, dx$. So let $u = \ln x$, $dv = 1 \, dx$.

- $u = \ln x$, $du = \frac{1}{x} dx$
- $dv = 1 \, dx$, $v = x$
- Apply the formula:
  $$\int \ln x \, dx = x \ln x - \int x \cdot \frac{1}{x} dx = x \ln x - \int 1 \, dx = x \ln x - x + C$$

### Example 3: Repeated Integration by Parts

Find $\int x^2 \sin x \, dx$.

- Let $u = x^2$, $dv = \sin x \, dx$. Then $du = 2x \, dx$, $v = -\cos x$.
  $$\int x^2 \sin x \, dx = -x^2 \cos x - \int (-\cos x)(2x) \, dx = -x^2 \cos x + 2 \int x \cos x \, dx$$

Now we need $\int x \cos x \, dx$. Apply integration by parts again:

- Let $u = x$, $dv = \cos x \, dx$. Then $du = dx$, $v = \sin x$.
  $$\int x \cos x \, dx = x \sin x - \int \sin x \, dx = x \sin x + \cos x$$

Substitute back:
$$\int x^2 \sin x \, dx = -x^2 \cos x + 2(x \sin x + \cos x) + C = -x^2 \cos x + 2x \sin x + 2 \cos x + C$$

### Example 4: Definite Integral with Integration by Parts

Evaluate $\int_0^1 x e^{2x} \, dx$.

- First, find the antiderivative using integration by parts. Let $u = x$, $dv = e^{2x} dx$.
  Then $du = dx$, $v = \frac{1}{2} e^{2x}$.
  $$\int x e^{2x} \, dx = \frac{x}{2} e^{2x} - \int \frac{1}{2} e^{2x} \, dx = \frac{x}{2} e^{2x} - \frac{1}{4} e^{2x} + C = \frac{e^{2x}}{4}(2x - 1) + C$$

- Now evaluate from 0 to 1:
  $$\left[ \frac{e^{2x}}{4}(2x - 1) \right]_0^1 = \frac{e^2}{4}(2(1)-1) - \frac{e^0}{4}(2(0)-1) = \frac{e^2}{4}(1) - \frac{1}{4}(-1) = \frac{e^2}{4} + \frac{1}{4} = \frac{e^2 + 1}{4}$$

---

## **Method of Partial Fractions (Linear, Nonrepeating Factors**)

### The Idea

Sometimes you need to integrate a rational function—a fraction where the numerator and denominator are polynomials. If the denominator factors into distinct linear factors, you can break the fraction into simpler pieces that are easy to integrate.

For example, $\frac{5x-7}{x^2 - 3x + 2}$ can be written as $\frac{A}{x-1} + \frac{B}{x-2}$. Once you find $A$ and $B$, you integrate each term separately using $\int \frac{1}{x-a} dx = \ln|x-a| + C$.

### Step-by-Step Process

1. **Factor the denominator** completely into linear factors (for now, we'll stick to distinct linear factors).
2. **Set up the partial fraction decomposition**: For each factor $(x - r)$, write a term $\frac{A}{x - r}$.
3. **Clear denominators** by multiplying both sides by the original denominator.
4. **Solve for the constants** $A$, $B$, etc. You can use:
   - Substituting convenient $x$ values (like the roots) to get equations.
   - Equating coefficients of like powers of $x$.
5. **Integrate** each term separately.

### Example 5: Basic Partial Fractions

Evaluate $\int \frac{5x - 7}{x^2 - 3x + 2} \, dx$.

- **Step 1:** Factor denominator: $x^2 - 3x + 2 = (x-1)(x-2)$.
- **Step 2:** Decomposition:
  $$\frac{5x - 7}{(x-1)(x-2)} = \frac{A}{x-1} + \frac{B}{x-2}$$
- **Step 3:** Clear denominators: multiply both sides by $(x-1)(x-2)$:
  $$5x - 7 = A(x-2) + B(x-1)$$
- **Step 4:** Solve for $A$ and $B$.
  - Substitute $x = 1$: $5(1) - 7 = A(1-2) + B(0)$ → $-2 = A(-1)$ → $A = 2$.
  - Substitute $x = 2$: $5(2) - 7 = A(0) + B(2-1)$ → $3 = B(1)$ → $B = 3$.
- **Step 5:** Integrate:
  $$\int \frac{5x-7}{x^2-3x+2} dx = \int \left( \frac{2}{x-1} + \frac{3}{x-2} \right) dx = 2\ln|x-1| + 3\ln|x-2| + C$$

### Example 6: Partial Fractions with a Little Algebra First

Evaluate $\int \frac{x+4}{x^2 + 5x + 6} \, dx$.

- Factor denominator: $x^2 + 5x + 6 = (x+2)(x+3)$.
- Decomposition:
  $$\frac{x+4}{(x+2)(x+3)} = \frac{A}{x+2} + \frac{B}{x+3}$$
- Clear denominators: $x+4 = A(x+3) + B(x+2)$.
- Solve:
  - $x = -2$: $(-2)+4 = A(-2+3) + B(0)$ → $2 = A(1)$ → $A = 2$.
  - $x = -3$: $(-3)+4 = A(0) + B(-3+2)$ → $1 = B(-1)$ → $B = -1$.
- Integrate:
  $$\int \left( \frac{2}{x+2} - \frac{1}{x+3} \right) dx = 2\ln|x+2| - \ln|x+3| + C = \ln\left| \frac{(x+2)^2}{x+3} \right| + C$$

### Example 7: Definite Integral with Partial Fractions

Evaluate $\int_2^3 \frac{3x-1}{x^2 - x - 2} \, dx$.

- Factor denominator: $x^2 - x - 2 = (x-2)(x+1)$.
- Decomposition:
  $$\frac{3x-1}{(x-2)(x+1)} = \frac{A}{x-2} + \frac{B}{x+1}$$
- Clear denominators: $3x-1 = A(x+1) + B(x-2)$.
- Solve:
  - $x = 2$: $3(2)-1 = A(2+1) + B(0)$ → $5 = 3A$ → $A = \frac{5}{3}$.
  - $x = -1$: $3(-1)-1 = A(0) + B(-1-2)$ → $-4 = -3B$ → $B = \frac{4}{3}$.
- Integrate:
  $$\int \left( \frac{5/3}{x-2} + \frac{4/3}{x+1} \right) dx = \frac{5}{3}\ln|x-2| + \frac{4}{3}\ln|x+1| + C$$
- Evaluate from 2 to 3:
  $$\left[ \frac{5}{3}\ln|x-2| + \frac{4}{3}\ln|x+1| \right]_2^3$$
  At $x=3$: $\frac{5}{3}\ln|1| + \frac{4}{3}\ln|4| = 0 + \frac{4}{3}\ln 4$.
  At $x=2$: $\frac{5}{3}\ln|0| + \frac{4}{3}\ln|3|$—wait, $\ln|0|$ is undefined! The integral is improper at $x=2$ because the integrand blows up. So this definite integral is actually an **improper integral** (which we'll cover next). We need to take a limit.

So the answer is $\lim_{t \to 2^+} \int_t^3 \frac{3x-1}{x^2-x-2} dx$. But that's for the next section. For now, just note: if your denominator has a factor that makes it zero inside the interval, the integral is improper.

---

## **Improper Integrals**

### What Makes an Integral "Improper"?

An integral is **improper** if either:
1. **Infinite limits of integration:** One or both limits are infinite (e.g., $\int_1^\infty \frac{1}{x^2} dx$).
2. **Unbounded integrand:** The function becomes infinite somewhere in the interval of integration (e.g., $\int_0^1 \frac{1}{\sqrt{x}} dx$, where the integrand blows up at $x=0$).

We can't just plug infinity into the Fundamental Theorem—we need to use limits.

### Type 1: Infinite Limits

**Definition:** For an integral with an infinite upper limit,
$$\int_a^\infty f(x) \, dx = \lim_{b \to \infty} \int_a^b f(x) \, dx$$
provided the limit exists. If the limit exists and is finite, the integral **converges**. If the limit is infinite or doesn't exist, the integral **diverges**.

Similarly,
$$\int_{-\infty}^b f(x) \, dx = \lim_{a \to -\infty} \int_a^b f(x) \, dx$$

For integrals with both limits infinite,
$$\int_{-\infty}^\infty f(x) \, dx = \int_{-\infty}^c f(x) \, dx + \int_c^\infty f(x) \, dx$$
where $c$ is any convenient point. Both pieces must converge for the whole integral to converge.

### Example 8: Improper Integral with Infinite Limit

Evaluate $\int_1^\infty \frac{1}{x^2} \, dx$ or show it diverges.

- Set up the limit: $\int_1^\infty \frac{1}{x^2} dx = \lim_{b \to \infty} \int_1^b x^{-2} dx$.
- Compute the definite integral: $\int_1^b x^{-2} dx = \left[ -x^{-1} \right]_1^b = -\frac{1}{b} + 1$.
- Take the limit: $\lim_{b \to \infty} \left( 1 - \frac{1}{b} \right) = 1$.
- Since the limit exists and is finite, the integral converges to 1.

### Example 9: Divergent Improper Integral

Evaluate $\int_1^\infty \frac{1}{x} \, dx$.

- $\lim_{b \to \infty} \int_1^b \frac{1}{x} dx = \lim_{b \to \infty} \left[ \ln x \right]_1^b = \lim_{b \to \infty} (\ln b - 0) = \infty$.
- The limit is infinite, so the integral diverges.

### Example 10: Both Limits Infinite

Evaluate $\int_{-\infty}^\infty \frac{1}{1+x^2} \, dx$.

- Split at a convenient point, say $x=0$:
  $$\int_{-\infty}^\infty \frac{1}{1+x^2} dx = \int_{-\infty}^0 \frac{1}{1+x^2} dx + \int_0^\infty \frac{1}{1+x^2} dx$$
- Compute each piece:
  - $\int_0^\infty \frac{1}{1+x^2} dx = \lim_{b \to \infty} \int_0^b \frac{1}{1+x^2} dx = \lim_{b \to \infty} \left[ \arctan x \right]_0^b = \lim_{b \to \infty} (\arctan b - 0) = \frac{\pi}{2}$.
  - $\int_{-\infty}^0 \frac{1}{1+x^2} dx = \lim_{a \to -\infty} \int_a^0 \frac{1}{1+x^2} dx = \lim_{a \to -\infty} \left[ \arctan x \right]_a^0 = \lim_{a \to -\infty} (0 - \arctan a) = 0 - \left(-\frac{\pi}{2}\right) = \frac{\pi}{2}$.
- Both converge, so the total is $\frac{\pi}{2} + \frac{\pi}{2} = \pi$.

### Type 2: Unbounded Integrands

**Definition:** If $f(x)$ is continuous on $[a, b)$ but becomes infinite as $x \to b^-$, then
$$\int_a^b f(x) \, dx = \lim_{t \to b^-} \int_a^t f(x) \, dx$$
provided the limit exists.

Similarly, if the integrand blows up at the lower limit $a$,
$$\int_a^b f(x) \, dx = \lim_{t \to a^+} \int_t^b f(x) \, dx$$

If the integrand has a discontinuity at an interior point $c$ in $[a, b]$, split the integral at $c$:
$$\int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx$$
and evaluate each piece as a limit.

### Example 11: Unbounded at Lower Limit

Evaluate $\int_0^1 \frac{1}{\sqrt{x}} \, dx$.

- The integrand $1/\sqrt{x}$ is undefined at $x=0$ (blows up). So we use a limit:
  $$\int_0^1 \frac{1}{\sqrt{x}} dx = \lim_{t \to 0^+} \int_t^1 x^{-1/2} dx = \lim_{t \to 0^+} \left[ 2\sqrt{x} \right]_t^1 = \lim_{t \to 0^+} (2 - 2\sqrt{t}) = 2$$
- The integral converges to 2.

### Example 12: Unbounded at Upper Limit

Evaluate $\int_0^1 \frac{1}{x} \, dx$.

- Blows up at $x=0$, so:
  $$\int_0^1 \frac{1}{x} dx = \lim_{t \to 0^+} \int_t^1 \frac{1}{x} dx = \lim_{t \to 0^+} \left[ \ln x \right]_t^1 = \lim_{t \to 0^+} (0 - \ln t) = \infty$$
- Diverges (to infinity).

### Example 13: Unbounded at Interior Point

Evaluate $\int_0^3 \frac{1}{(x-1)^2} \, dx$.

- The integrand blows up at $x=1$, which is inside $[0,3]$. Split at $x=1$:
  $$\int_0^3 \frac{1}{(x-1)^2} dx = \int_0^1 \frac{1}{(x-1)^2} dx + \int_1^3 \frac{1}{(x-1)^2} dx$$
- Left piece: $\int_0^1 \frac{1}{(x-1)^2} dx = \lim_{t \to 1^-} \int_0^t (x-1)^{-2} dx = \lim_{t \to 1^-} \left[ -(x-1)^{-1} \right]_0^t = \lim_{t \to 1^-} \left( -\frac{1}{t-1} + \frac{1}{-1} \right) = \lim_{t \to 1^-} \left( -\frac{1}{t-1} - 1 \right)$.
  As $t \to 1^-$, $t-1 \to 0^-$, so $-\frac{1}{t-1} \to +\infty$. This piece diverges.
- Since one piece diverges, the whole integral diverges. (No need to compute the other piece.)

---

## **Selecting Techniques for Antidifferentiation**

Now that you have a full toolkit, how do you choose the right method? Here's a decision tree:

1. **Is the integral a standard form?**  
   - $\int x^n dx$, $\int e^x dx$, $\int \frac{1}{x} dx$, $\int \sin x dx$, etc. → just use basic formulas.

2. **Is it a composition that suggests u-substitution?**  
   - Look for a function and its derivative. If you see something like $x \cdot \cos(x^2)$, let $u = x^2$.

3. **Is it a product of functions?**  
   - Consider **integration by parts** (LIATE).

4. **Is it a rational function?**  
   - If the denominator factors into linear factors → **partial fractions**.
   - If not (quadratic factors), you might need more advanced methods (not in AB/BC).

5. **Does it have infinite limits or an unbounded integrand?**  
   - That's an **improper integral**—use limits.

6. **Can you rewrite the integrand?**  
   - Sometimes algebra (long division, trig identities) simplifies things first.

### Example 14: Mixed Practice

Choose a method for each integral:

(a) $\int x \ln x \, dx$ → Product of algebraic and logarithmic → Integration by parts ($u = \ln x$, $dv = x dx$).

(b) $\int \frac{3x+1}{x^2 - 4} dx$ → Rational function, denominator factors $(x-2)(x+2)$ → Partial fractions.

(c) $\int_0^\infty e^{-x} dx$ → Infinite limit → Improper integral.

(d) $\int x^2 e^{x^3} dx$ → Contains $x^2$ and $e^{x^3}$ with $x^3$ as inner function → u-substitution: let $u = x^3$, $du = 3x^2 dx$.

(e) $\int \frac{\ln x}{x} dx$ → Contains $\ln x$ and $\frac{1}{x}$ (derivative of $\ln x$) → u-substitution: let $u = \ln x$, $du = \frac{1}{x} dx$.

---

## Summary

### Integration by Parts
$$\int u \, dv = uv - \int v \, du$$
- Choose $u$ using **LIATE**: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential.
- For definite integrals, apply the formula and then evaluate at the limits.

### Partial Fractions (Linear, Nonrepeating Factors)
For $\frac{P(x)}{(x-r_1)(x-r_2)\cdots}$:
1. Factor denominator.
2. Write $\frac{A_1}{x-r_1} + \frac{A_2}{x-r_2} + \cdots$.
3. Clear denominators and solve for constants.
4. Integrate term by term: $\int \frac{A}{x-r} dx = A \ln|x-r| + C$.

### Improper Integrals
- **Type 1 (Infinite limits):** $\int_a^\infty f(x) dx = \lim_{b \to \infty} \int_a^b f(x) dx$, similarly for $-\infty$.
- **Type 2 (Unbounded integrand):** $\int_a^b f(x) dx = \lim_{t \to b^-} \int_a^t f(x) dx$ if blow-up at $b$, similarly for blow-up at $a$.
- If the limit exists and is finite, the integral **converges**. Otherwise, it **diverges**.
- For discontinuities inside the interval, split and take limits on each piece.

### Choosing a Technique
1. Basic forms → direct integration.
2. Composition with derivative → u-substitution.
3. Product of functions → integration by parts.
4. Rational function with factorable denominator → partial fractions.
5. Infinite limits or unbounded integrand → improper integral (use limits).

---

### Additional BC-Only Practice Problems

1. Evaluate $\int x \cos(3x) \, dx$.
2. Evaluate $\int \arctan x \, dx$.
3. Evaluate $\int_0^{\pi/2} x \sin x \, dx$.
4. Evaluate $\int \frac{2x+3}{x^2 - 5x + 6} \, dx$.
5. Evaluate $\int \frac{dx}{x^2 + x}$.
6. Determine whether $\int_1^\infty \frac{1}{x^{1.1}} dx$ converges or diverges. If it converges, find its value.
7. Evaluate $\int_0^2 \frac{1}{\sqrt{4-x^2}} dx$ (be careful—this one's actually a standard form, but check the domain!).
8. Evaluate $\int_0^1 \frac{1}{x} dx$—converges or diverges?
9. Evaluate $\int_{-\infty}^\infty \frac{x}{x^2+1} dx$ (careful—this one might surprise you).
10. Choose a method (don't integrate fully) for each:
    - $\int x^2 e^x dx$
    - $\int \frac{\ln x}{x^2} dx$
    - $\int \frac{dx}{x^2 - 9}$
    - $\int_0^\infty xe^{-x} dx$

---

### Selected Solutions

1. **$\int x \cos(3x) dx$**  
   Integration by parts: $u = x$, $dv = \cos(3x) dx$. Then $du = dx$, $v = \frac{1}{3}\sin(3x)$.  
   $$\int x \cos(3x) dx = \frac{x}{3}\sin(3x) - \int \frac{1}{3}\sin(3x) dx = \frac{x}{3}\sin(3x) + \frac{1}{9}\cos(3x) + C$$

2. **$\int \arctan x dx$**  
   Write as $\int \arctan x \cdot 1 dx$. Let $u = \arctan x$, $dv = 1 dx$. Then $du = \frac{1}{1+x^2} dx$, $v = x$.  

   $$\int \arctan x dx = x \arctan x - \int \frac{x}{1+x^2} dx$$
   
   For the remaining integral, let $w = 1+x^2$, $dw = 2x dx$, so $\int \frac{x}{1+x^2} dx = \frac{1}{2} \int \frac{dw}{w} = \frac{1}{2} \ln|1+x^2| + C$.  
   Thus: $\int \arctan x dx = x \arctan x - \frac{1}{2}\ln(1+x^2) + C$.

3. **$\int_0^{\pi/2} x \sin x dx$**  
   Integration by parts: $u = x$, $dv = \sin x dx$, $du = dx$, $v = -\cos x$.  
   $$\int x \sin x dx = -x \cos x + \int \cos x dx = -x \cos x + \sin x + C$$
   Evaluate: $\left[ -x \cos x + \sin x \right]_0^{\pi/2} = \left( -\frac{\pi}{2} \cdot 0 + 1 \right) - (0 + 0) = 1$.

4. **$\int \frac{2x+3}{x^2 - 5x + 6} dx$**  
   Factor denominator: $(x-2)(x-3)$.  
   $$\frac{2x+3}{(x-2)(x-3)} = \frac{A}{x-2} + \frac{B}{x-3}$$
   Clear: $2x+3 = A(x-3) + B(x-2)$.  
   $x=2$: $7 = A(-1) \Rightarrow A = -7$.  
   $x=3$: $9 = B(1) \Rightarrow B = 9$.  
   Integrate: $\int \left( -\frac{7}{x-2} + \frac{9}{x-3} \right) dx = -7\ln|x-2| + 9\ln|x-3| + C$.

5. **$\int \frac{dx}{x^2 + x}$**  
   Factor denominator: $x(x+1)$.  
   $$\frac{1}{x(x+1)} = \frac{A}{x} + \frac{B}{x+1}$$
   Clear: $1 = A(x+1) + Bx$.  
   $x=0$: $1 = A(1) \Rightarrow A = 1$.  
   $x=-1$: $1 = B(-1) \Rightarrow B = -1$.  
   Integrate: $\int \left( \frac{1}{x} - \frac{1}{x+1} \right) dx = \ln|x| - \ln|x+1| + C = \ln\left|\frac{x}{x+1}\right| + C$.

6. **$\int_1^\infty \frac{1}{x^{1.1}} dx$**  
   $\int_1^\infty x^{-1.1} dx = \lim_{b \to \infty} \left[ \frac{x^{-0.1}}{-0.1} \right]_1^b = \lim_{b \to \infty} \left( -10b^{-0.1} + 10 \right) = 0 + 10 = 10$.  
   Converges to 10.

7. **$\int_0^2 \frac{1}{\sqrt{4-x^2}} dx$**  
   This is a standard form: $\int \frac{dx}{\sqrt{a^2-x^2}} = \arcsin\frac{x}{a} + C$. Here $a=2$.  
   $$\int_0^2 \frac{1}{\sqrt{4-x^2}} dx = \left[ \arcsin\frac{x}{2} \right]_0^2 = \arcsin(1) - \arcsin(0) = \frac{\pi}{2} - 0 = \frac{\pi}{2}$$
   (Not improper—the integrand is defined at $x=2$, so no limit needed.)

8. **$\int_0^1 \frac{1}{x} dx$**  
   $\lim_{t \to 0^+} \int_t^1 \frac{1}{x} dx = \lim_{t \to 0^+} \left[ \ln x \right]_t^1 = \lim_{t \to 0^+} (0 - \ln t) = \infty$.  
   Diverges.

9. **$\int_{-\infty}^\infty \frac{x}{x^2+1} dx$**  
   Split at $0$: $\int_{-\infty}^0 \frac{x}{x^2+1} dx + \int_0^\infty \frac{x}{x^2+1} dx$.  
   Compute one: $\int_0^\infty \frac{x}{x^2+1} dx = \lim_{b \to \infty} \left[ \frac{1}{2}\ln(x^2+1) \right]_0^b = \lim_{b \to \infty} \frac{1}{2}(\ln(b^2+1) - 0) = \infty$.  
   Since one piece diverges, the whole integral diverges. (This function is odd, but because the limits are infinite, the cancellation doesn't happen in the improper sense—both tails must converge separately.)

10. **Choosing methods:**  
    - $\int x^2 e^x dx$: product → integration by parts (possibly twice).  
    - $\int \frac{\ln x}{x^2} dx$: product of $\ln x$ and $x^{-2}$ → integration by parts ($u = \ln x$, $dv = x^{-2} dx$).  
    - $\int \frac{dx}{x^2 - 9}$: rational function, denominator factors → partial fractions.  
    - $\int_0^\infty xe^{-x} dx$: infinite limit → improper integral; also a product (integration by parts inside the limit).

---

You've now expanded your integration toolkit to include the essential BC-only techniques. These methods will appear throughout the rest of the BC course, especially in the context of differential equations, series, and applications. Practice them until they become second nature!