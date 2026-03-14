# Power Series Part 1 (Approximations and Error Bounds)

Welcome to the first of two lessons on power series—the crown jewel of AP Calculus BC. Power series allow us to represent complicated functions as infinite polynomials, opening the door to approximation, integration, and solving differential equations in ways we never could before.

In this lesson, we'll focus on three interconnected ideas:
- **Alternating Series Error Bound** – how close is a partial sum to the true value of an alternating series?
- **Taylor Polynomials** – approximating functions with polynomials
- **Lagrange Error Bound** – guaranteeing how accurate our Taylor polynomial approximation is

These concepts build on each other. Master them, and you'll be ready for the power series convergence topics in the next lesson.

---

## Alternating Series Error Bound

When we approximate a convergent alternating series by adding up a finite number of terms, we're making an error. The alternating series test gives us a way to bound that error.

### The Error Bound Theorem

If an alternating series $\sum_{n=1}^{\infty} (-1)^{n-1} b_n$ satisfies the conditions of the alternating series test ($b_n$ decreasing to 0), then the error made by using the partial sum $S_n$ to approximate the total sum $S$ is bounded by the first omitted term:

$$|R_n| = |S - S_n| \le b_{n+1}$$

In words: The error is no larger than the absolute value of the first term you didn't include.

### Why This Works

Think about the alternating series: each term overshoots and then undershoots the true sum. The partial sums oscillate around the true value, and the next term is always larger than the remaining error.

### Example 1: Alternating Harmonic Series

The alternating harmonic series $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}$ converges to $\ln 2 \approx 0.693147$. How many terms are needed to approximate $\ln 2$ with an error less than $0.01$?

- We need $b_{n+1} = \frac{1}{n+1} \le 0.01$.
- This means $n+1 \ge 100$, so $n \ge 99$.
- So using 99 terms guarantees an error less than $0.01$. (The actual error will likely be smaller, but this is a safe bound.)

### Example 2: Using the Error Bound

Approximate $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^2}$ using the first 5 terms and give a bound on the error.

- The first 5 terms: $1 - \frac{1}{4} + \frac{1}{9} - \frac{1}{16} + \frac{1}{25} = 1 - 0.25 + 0.111111 - 0.0625 + 0.04 = 0.838611$.
- The next term is $b_6 = \frac{1}{36} \approx 0.027778$.
- By the alternating series error bound, the error $|S - S_5| \le 0.027778$.
- So the true sum is between $0.838611 - 0.027778 = 0.810833$ and $0.838611 + 0.027778 = 0.866389$.

(For reference, the exact sum is $\pi^2/12 \approx 0.822467$, which indeed falls within this interval.)

---

## Taylor Polynomial Approximations

Now we move from approximating series to approximating functions. The idea is brilliant: near a point $x = a$, we can approximate a function $f(x)$ by a polynomial whose derivatives match those of $f$ at $a$.

### Taylor Polynomials: The Formula

The **Taylor polynomial of degree $n$** for a function $f$ centered at $x = a$ is:

$$P_n(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \cdots + \frac{f^{(n)}(a)}{n!}(x-a)^n$$

In sigma notation:

$$P_n(x) = \sum_{k=0}^n \frac{f^{(k)}(a)}{k!} (x-a)^k$$

When $a = 0$, it's called a **Maclaurin polynomial**.

### Why Derivatives at One Point Determine the Polynomial

The coefficients are chosen so that the polynomial and its first $n$ derivatives match $f$ at $x = a$ exactly. For example:
- $P_n(a) = f(a)$
- $P_n'(a) = f'(a)$
- $P_n''(a) = f''(a)$
- and so on up to the nth derivative.

### Common Maclaurin Polynomials to Know

These are worth memorizing—they appear constantly on the BC exam:

1. **$e^x$**:
   $$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots$$

2. **$\sin x$**:
   $$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots$$

3. **$\cos x$**:
   $$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots$$

4. **$\frac{1}{1-x}$**:
   $$\frac{1}{1-x} = 1 + x + x^2 + x^3 + \cdots \quad \text{for } |x| < 1$$

5. **$\ln(1+x)$**:
   $$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots \quad \text{for } -1 < x \le 1$$

### Example 3: Building a Taylor Polynomial

Find the 4th degree Taylor polynomial for $f(x) = \ln x$ centered at $a = 1$.

- Compute derivatives:
  $$f(x) = \ln x, \quad f(1) = 0$$
  $$f'(x) = \frac{1}{x}, \quad f'(1) = 1$$
  $$f''(x) = -\frac{1}{x^2}, \quad f''(1) = -1$$
  $$f'''(x) = \frac{2}{x^3}, \quad f'''(1) = 2$$
  $$f^{(4)}(x) = -\frac{6}{x^4}, \quad f^{(4)}(1) = -6$$

- Apply the formula:
  $$P_4(x) = 0 + 1(x-1) + \frac{-1}{2!}(x-1)^2 + \frac{2}{3!}(x-1)^3 + \frac{-6}{4!}(x-1)^4$$
  $$= (x-1) - \frac{1}{2}(x-1)^2 + \frac{1}{3}(x-1)^3 - \frac{1}{4}(x-1)^4$$

Notice the pattern: it looks like the series for $\ln(1+x)$ but with $x$ replaced by $(x-1)$.

### Example 4: Using a Taylor Polynomial to Approximate

Use the 3rd degree Maclaurin polynomial for $e^x$ to approximate $e^{0.2}$.

- $e^x \approx 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!}$
- At $x = 0.2$: $1 + 0.2 + \frac{0.04}{2} + \frac{0.008}{6} = 1 + 0.2 + 0.02 + 0.001333 = 1.221333$
- Actual $e^{0.2} \approx 1.221403$, so the error is about $0.00007$—incredibly small!

---

## Lagrange Error Bound

When we approximate a function with a Taylor polynomial, we need to know how accurate our approximation is. The **Lagrange error bound** gives us a way to guarantee a maximum error.

### The Formula

If $P_n(x)$ is the nth degree Taylor polynomial for $f$ centered at $a$, then the error $R_n(x) = f(x) - P_n(x)$ satisfies:

$$|R_n(x)| \le \frac{M}{(n+1)!} |x-a|^{n+1}$$

where $M$ is an upper bound for $|f^{(n+1)}(z)|$ for all $z$ between $a$ and $x$.

### Understanding the Bound

- The error is bounded by the next term in the Taylor series, but with the derivative evaluated at some unknown point between $a$ and $x$.
- Since we don't know that point exactly, we use the maximum possible value of the derivative on the interval.
- The bound tells us: the error is no larger than this expression.

### Step-by-Step Process

1. Determine $n$ (the degree of the Taylor polynomial).
2. Find $f^{(n+1)}(z)$, the $(n+1)$st derivative.
3. Find an upper bound $M$ for $|f^{(n+1)}(z)|$ on the interval between $a$ and $x$.
4. Plug into the formula: $|R_n(x)| \le \frac{M}{(n+1)!} |x-a|^{n+1}$.

### Example 5: Lagrange Error Bound for $e^x$

Use the 3rd degree Maclaurin polynomial for $e^x$ to approximate $e^{0.2}$ and find a bound on the error.

- We have $n = 3$, $a = 0$, $x = 0.2$.
- The 4th derivative of $e^x$ is $e^z$. On the interval $[0, 0.2]$, the maximum of $e^z$ is at $z = 0.2$, so $M = e^{0.2} \approx 1.2214$ (but we don't know this exactly yet—we can use a slightly larger bound like $e^{0.2} < e^{0.3} \approx 1.35$, or just use $M = e^{0.2}$ itself for a bound that's still valid but circular? Actually, we need an upper bound we can guarantee. Since $e^z$ is increasing, the maximum on $[0, 0.2]$ is $e^{0.2}$, but that's exactly what we're trying to approximate! So we use a known overestimate: $e^{0.2} < e^{0.5} \approx 1.65$, or simply note that $e^z < 2$ for $z < 0.7$. Let's use $M = 2$ for a safe bound.
- Then $|R_3(0.2)| \le \frac{2}{4!} (0.2)^4 = \frac{2}{24} \cdot 0.0016 = \frac{1}{12} \cdot 0.0016 = 0.0001333$.
- So our approximation $1.221333$ has an error less than $0.000133$, which matches the actual error of about $0.00007$.

### Example 6: Lagrange Error Bound for $\sin x$

How many terms of the Maclaurin series for $\sin x$ are needed to approximate $\sin(0.5)$ with error less than $10^{-5}$?

- The Maclaurin series: $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots$
- For $\sin x$, all derivatives are $\pm \sin x$ or $\pm \cos x$, so $|f^{(k)}(z)| \le 1$ for all $z$.
- We want $|R_n(0.5)| \le \frac{1}{(n+1)!} (0.5)^{n+1} < 10^{-5}$.
- Test values:
  - $n = 3$: $\frac{1}{4!}(0.5)^4 = \frac{1}{24} \cdot 0.0625 = 0.0026$ (too big)
  - $n = 5$: $\frac{1}{6!}(0.5)^6 = \frac{1}{720} \cdot 0.015625 \approx 2.17 \times 10^{-5}$ (still a bit too big)
  - $n = 7$: $\frac{1}{8!}(0.5)^8 = \frac{1}{40320} \cdot 0.00390625 \approx 9.68 \times 10^{-8}$ (small enough)
- So we need up through the $x^7$ term (i.e., degree 7 polynomial) to guarantee that error bound. That means using $n = 7$ (since the last term included is degree 7).

### When to Use Alternating Series Error Bound vs. Lagrange Error Bound

- If the Taylor series is alternating and the terms decrease in magnitude, you can use the simpler alternating series error bound: the error is less than the first omitted term.
- If not, or if you need a more general bound, use Lagrange.

**Example:** For $\sin x$ at $x=0.5$, the series is alternating, so we could also use the alternating series error bound. The first omitted term after the $x^5$ term would be the $x^7$ term: $\frac{(0.5)^7}{7!} \approx 1.55 \times 10^{-5}$, which is slightly larger than our target $10^{-5}$. So we'd need to include the $x^7$ term, which matches the Lagrange result.

---

## Summary

### Alternating Series Error Bound

For an alternating series satisfying the AST conditions:
$$|S - S_n| \le b_{n+1}$$
where $b_{n+1}$ is the first omitted term.

### Taylor Polynomials

$$P_n(x) = \sum_{k=0}^n \frac{f^{(k)}(a)}{k!} (x-a)^k$$

Common Maclaurin series to remember:
- $e^x = \sum_{n=0}^\infty \frac{x^n}{n!}$
- $\sin x = \sum_{n=0}^\infty (-1)^n \frac{x^{2n+1}}{(2n+1)!}$
- $\cos x = \sum_{n=0}^\infty (-1)^n \frac{x^{2n}}{(2n)!}$
- $\frac{1}{1-x} = \sum_{n=0}^\infty x^n$ for $|x| < 1$
- $\ln(1+x) = \sum_{n=1}^\infty (-1)^{n-1} \frac{x^n}{n}$ for $-1 < x \le 1$

### Lagrange Error Bound

$$|R_n(x)| \le \frac{M}{(n+1)!} |x-a|^{n+1}$$
where $M$ is an upper bound for $|f^{(n+1)}(z)|$ on the interval between $a$ and $x$.

### Key Points

- Taylor polynomials match the function and its derivatives at the center point.
- Higher degree polynomials generally give better approximations near the center.
- Error bounds tell us how good our approximation is—essential for practical applications.
- For alternating Taylor series, the alternating series error bound is often easier to apply.

### Common Pitfalls

- Forgetting the factorial in the denominator of Taylor coefficients.
- Using the wrong center $a$—the series is centered at $a$, so powers are $(x-a)^n$.
- In Lagrange error bound, forgetting to find the maximum of the $(n+1)$st derivative on the interval.
- Confusing the alternating series error bound (for series) with Lagrange error bound (for function approximations).

---

### Additional Practice Problems

1. How many terms of the alternating series $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n^3}$ are needed to approximate the sum with error less than $0.001$?
2. Find the 4th degree Taylor polynomial for $f(x) = \sqrt{x}$ centered at $x = 4$.
3. Use a Maclaurin polynomial to approximate $\cos(0.3)$ with error less than $10^{-4}$. How many terms are needed?
4. Write the 3rd degree Taylor polynomial for $f(x) = \frac{1}{x}$ centered at $x = 2$.
5. Use the Lagrange error bound to estimate the maximum error when using the 2nd degree Maclaurin polynomial for $e^x$ to approximate $e^{0.5}$.
6. Find the Maclaurin series for $f(x) = \sin(2x)$ up to the $x^5$ term.
7. Determine the maximum error when approximating $\ln(1.2)$ using the 3rd degree Taylor polynomial for $\ln(1+x)$ centered at $x=0$.
8. How many terms of the Maclaurin series for $\cos x$ are needed to guarantee that the error at $x = 0.4$ is less than $10^{-6}$?
9. For the function $f(x) = e^{-x^2}$, write the first three nonzero terms of its Maclaurin series.
10. The alternating series $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n!}$ converges to $1 - \frac{1}{e}$. Approximate this sum using the first 4 terms and give an error bound.

---

### Selected Solutions

1. **$\sum \frac{(-1)^{n-1}}{n^3}$ error less than 0.001**
   - Need $b_{n+1} = \frac{1}{(n+1)^3} < 0.001$.
   - $(n+1)^3 > 1000$ ⇒ $n+1 > 10$ ⇒ $n \ge 10$.
   - So 10 terms guarantee the error bound.

2. **4th degree Taylor for $f(x)=\sqrt{x}$ at $a=4$**
   - $f(x) = x^{1/2}$, $f(4) = 2$
   - $f'(x) = \frac{1}{2}x^{-1/2}$, $f'(4) = \frac{1}{4}$
   - $f''(x) = -\frac{1}{4}x^{-3/2}$, $f''(4) = -\frac{1}{32}$
   - $f'''(x) = \frac{3}{8}x^{-5/2}$, $f'''(4) = \frac{3}{8} \cdot \frac{1}{32} = \frac{3}{256}$
   - $f^{(4)}(x) = -\frac{15}{16}x^{-7/2}$, $f^{(4)}(4) = -\frac{15}{16} \cdot \frac{1}{128} = -\frac{15}{2048}$
   - $P_4(x) = 2 + \frac{1}{4}(x-4) - \frac{1}{32}\frac{(x-4)^2}{2!} + \frac{3}{256}\frac{(x-4)^3}{3!} - \frac{15}{2048}\frac{(x-4)^4}{4!}$
   - Simplify: $2 + \frac{1}{4}(x-4) - \frac{1}{64}(x-4)^2 + \frac{1}{512}(x-4)^3 - \frac{5}{16384}(x-4)^4$ (after simplifying fractions).

3. **Approximate $\cos 0.3$ with error $<10^{-4}$**
   - Maclaurin: $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots$
   - Alternating series with decreasing terms for $x=0.3$ after a point.
   - Error after $n$ terms ≤ first omitted term.
   - Check terms:
     Term1: $1$
     Term2: $-\frac{(0.3)^2}{2} = -0.045$
     Term3: $\frac{(0.3)^4}{24} = \frac{0.0081}{24} = 0.0003375$
     Term4: $-\frac{(0.3)^6}{720} = -\frac{0.000729}{720} \approx -1.0125 \times 10^{-6}$ (already < $10^{-4}$)
   - If we stop after the $x^4$ term (degree 4), the next term is about $10^{-6}$, so error < $10^{-6}$. So 3 terms (up to $x^4$) suffice.
   - Approximation: $1 - 0.045 + 0.0003375 = 0.9553375$.

4. **3rd degree Taylor for $f(x)=\frac{1}{x}$ at $a=2$**
   - $f(x) = x^{-1}$, $f(2) = 1/2$
   - $f'(x) = -x^{-2}$, $f'(2) = -1/4$
   - $f''(x) = 2x^{-3}$, $f''(2) = 2/8 = 1/4$
   - $f'''(x) = -6x^{-4}$, $f'''(2) = -6/16 = -3/8$
   - $P_3(x) = \frac{1}{2} - \frac{1}{4}(x-2) + \frac{1/4}{2!}(x-2)^2 + \frac{-3/8}{3!}(x-2)^3$
   - Simplify: $\frac{1}{2} - \frac{1}{4}(x-2) + \frac{1}{8}(x-2)^2 - \frac{1}{16}(x-2)^3$

5. **Lagrange error for $e^{0.5}$ using degree 2 Maclaurin**
   - $P_2(x) = 1 + x + \frac{x^2}{2!}$, at $x=0.5$: $1 + 0.5 + 0.125 = 1.625$
   - $n=2$, $a=0$, $x=0.5$, $f^{(3)}(z) = e^z$, max on $[0,0.5]$ is $e^{0.5} \approx 1.6487$, use $M=1.65$.
   - $|R_2(0.5)| \le \frac{1.65}{3!} (0.5)^3 = \frac{1.65}{6} \cdot 0.125 = 0.275 \cdot 0.125 = 0.034375$.
   - Actual error: $e^{0.5} \approx 1.648721$, error ≈ 0.0237, within bound.

6. **Maclaurin for $\sin 2x$ up to $x^5$**
   - $\sin u = u - \frac{u^3}{3!} + \frac{u^5}{5!} - \cdots$, with $u=2x$:
   - $\sin 2x = 2x - \frac{(2x)^3}{6} + \frac{(2x)^5}{120} - \cdots = 2x - \frac{8x^3}{6} + \frac{32x^5}{120} - \cdots = 2x - \frac{4x^3}{3} + \frac{4x^5}{15} - \cdots$

7. **Error for $\ln(1.2)$ using degree 3 Taylor for $\ln(1+x)$ at $x=0$**
   - $P_3(x) = x - \frac{x^2}{2} + \frac{x^3}{3}$, at $x=0.2$: $0.2 - 0.02 + 0.002667 = 0.182667$
   - Actual $\ln 1.2 \approx 0.182322$, error ≈ 0.000345.
   - Alternating series error bound: next term $-\frac{x^4}{4} = -\frac{0.0016}{4} = -0.0004$, so bound = 0.0004.
   - Lagrange: $f^{(4)}(x) = -\frac{6}{(1+x)^4}$, max on $[0,0.2]$ at $x=0$: $|f^{(4)}(0)| = 6$. So bound = $\frac{6}{4!}(0.2)^4 = \frac{6}{24} \cdot 0.0016 = 0.25 \cdot 0.0016 = 0.0004$. Same.

8. **Terms for $\cos 0.4$ with error $<10^{-6}$**
   - $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots$
   - Terms: $1$, $-\frac{0.16}{2} = -0.08$, $\frac{0.0256}{24} \approx 0.0010667$, $-\frac{0.004096}{720} \approx -5.6889\times10^{-6}$, $\frac{0.00065536}{40320} \approx 1.626\times10^{-8}$.
   - After the $x^6$ term (degree 6), the next term is about $1.6\times10^{-8}$, which is less than $10^{-6}$. So including up to $x^6$ (i.e., 4 terms) gives error $<10^{-6}$.

9. **Maclaurin for $e^{-x^2}$ first three nonzero terms**
   - $e^u = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \cdots$, with $u = -x^2$:
   - $e^{-x^2} = 1 - x^2 + \frac{x^4}{2!} - \frac{x^6}{3!} + \cdots$
   - First three nonzero terms: $1 - x^2 + \frac{x^4}{2}$

10. **Alternating series $\sum \frac{(-1)^{n-1}}{n!}$**
    - First 4 terms: $1 - \frac{1}{2!} + \frac{1}{3!} - \frac{1}{4!} = 1 - 0.5 + 0.166667 - 0.041667 = 0.625$
    - Next term: $b_5 = \frac{1}{5!} = \frac{1}{120} \approx 0.008333$
    - Error bound: $|S - S_4| \le 0.008333$
    - True value $1 - 1/e \approx 0.632121$, error ≈ 0.00712, within bound.

---

You've now mastered the art of approximating functions with polynomials and bounding the error. These skills are essential for the next lesson, where we'll explore the convergence of power series themselves—finding the interval where these representations actually equal the function. Get ready for radius and interval of convergence!