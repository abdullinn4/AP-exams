# Sequences and Series Fundamentals

Welcome to Unit 10—the final unit of AP Calculus BC, and arguably the most conceptually challenging. We're moving from the continuous world of functions and integrals to the discrete world of **sequences** and **series**. The big question: Can we add up infinitely many numbers and get a finite result? The answer is yes—sometimes. Understanding when and why is what this unit is all about.

In this lesson, we'll cover the foundational ideas:
- What are sequences and series?
- What does it mean for a series to converge or diverge?
- How do we work with geometric series?
- The nth term test for divergence (a quick check)
- The integral test for convergence
- Harmonic series and p-series

Let's begin our journey into the infinite.

---

## Sequences and Series: Basic Definitions

### Sequences

A **sequence** is an ordered list of numbers:
$$a_1, a_2, a_3, \dots, a_n, \dots$$
We often write the nth term as $a_n$. A sequence can be defined by a formula, like $a_n = \frac{1}{n}$, or recursively, like $a_1 = 1$, $a_{n+1} = \frac{a_n}{2}$.

A sequence **converges** if its terms approach a finite limit as $n \to \infty$:
$$\lim_{n \to \infty} a_n = L$$
If the limit doesn't exist or is infinite, the sequence **diverges**.

**Example:** $a_n = \frac{1}{n}$ converges to 0. $a_n = n$ diverges to infinity. $a_n = (-1)^n$ diverges (oscillates).

### Series

A **series** is the sum of the terms of a sequence:
$$S = a_1 + a_2 + a_3 + \cdots + a_n + \cdots = \sum_{n=1}^{\infty} a_n$$

We can't just add up infinitely many terms directly. Instead, we look at the **sequence of partial sums**:
$$S_1 = a_1$$
$$S_2 = a_1 + a_2$$
$$S_3 = a_1 + a_2 + a_3$$
$$\vdots$$
$$S_n = a_1 + a_2 + \cdots + a_n$$

If the sequence of partial sums $\{S_n\}$ converges to a finite limit $S$, then we say the series **converges** and its sum is $S$. If the partial sums diverge (to infinity or by oscillation), the series **diverges**.

**Definition:**
An infinite series $\sum_{n=1}^{\infty} a_n$ converges to $S$ if and only if $\lim_{n \to \infty} S_n = S$, where $S_n$ is the nth partial sum.

### Example 1: A Convergent Series

Consider the series $\sum_{n=1}^{\infty} \frac{1}{2^n} = \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots$.

- Partial sums:
  $S_1 = \frac{1}{2} = 0.5$
  $S_2 = \frac{1}{2} + \frac{1}{4} = 0.75$
  $S_3 = 0.875$
  $S_4 = 0.9375$
  $S_5 = 0.96875$
- The partial sums seem to approach 1. In fact, $\lim_{n \to \infty} S_n = 1$. So the series converges to 1.

### Example 2: A Divergent Series

Consider the harmonic series $\sum_{n=1}^{\infty} \frac{1}{n} = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \cdots$.

- Partial sums grow slowly but without bound:
  $S_1 = 1$
  $S_2 = 1.5$
  $S_3 \approx 1.833$
  $S_4 \approx 2.083$
  $S_{10} \approx 2.929$
  $S_{100} \approx 5.187$
  $S_{1000} \approx 7.485$
- As $n \to \infty$, $S_n \to \infty$. So the harmonic series diverges.

---

## Geometric Series

The most important series for understanding convergence is the **geometric series**. It has a simple form and a simple convergence rule.

### Definition

A geometric series is a series where each term is a constant multiple of the previous term:
$$\sum_{n=0}^{\infty} ar^n = a + ar + ar^2 + ar^3 + \cdots$$
where $a$ is the first term and $r$ is the common ratio.

### Convergence of Geometric Series

- If $|r| < 1$, the geometric series **converges** to $\frac{a}{1-r}$.
- If $|r| \ge 1$, the geometric series **diverges** (unless $a = 0$, in which case it's trivially convergent to 0).

**Why?** The nth partial sum is $S_n = a + ar + ar^2 + \cdots + ar^{n-1} = a\frac{1-r^n}{1-r}$ (for $r \neq 1$). As $n \to \infty$, if $|r| < 1$, $r^n \to 0$, so $S_n \to \frac{a}{1-r}$. If $|r| > 1$, $|r^n| \to \infty$, so $S_n$ diverges. If $r = 1$, $S_n = na \to \infty$ (unless $a=0$). If $r = -1$, $S_n$ oscillates between $a$ and $0$, so diverges.

### Example 3: Convergent Geometric Series

Find the sum of $\sum_{n=0}^{\infty} 3\left(\frac{1}{2}\right)^n$.

- Here $a = 3$, $r = \frac{1}{2}$. Since $|r| = 0.5 < 1$, the series converges.
- Sum = $\frac{a}{1-r} = \frac{3}{1 - 1/2} = \frac{3}{1/2} = 6$.

### Example 4: Divergent Geometric Series

Does $\sum_{n=1}^{\infty} \frac{2^n}{3^{n-1}}$ converge or diverge?

- Rewrite: $\frac{2^n}{3^{n-1}} = \frac{2^n}{3^n/3} = 3 \cdot \left(\frac{2}{3}\right)^n$.
- So it's a geometric series with $a = 3 \cdot (2/3)^1$? Wait careful: The first term when $n=1$ is $3 \cdot (2/3)^1 = 2$. Actually, it's easier to write in standard form:
  $$\sum_{n=1}^{\infty} \frac{2^n}{3^{n-1}} = \sum_{n=1}^{\infty} 3 \cdot \left(\frac{2}{3}\right)^n = \sum_{n=1}^{\infty} 3\left(\frac{2}{3}\right)^n$$
  This is a geometric series starting at $n=1$ with first term $a = 3\cdot (2/3)^1 = 2$ and ratio $r = 2/3$.
- Since $|r| = 2/3 < 1$, the series converges.
- Its sum = $\frac{\text{first term}}{1-r} = \frac{2}{1 - 2/3} = \frac{2}{1/3} = 6$.

### Example 5: Writing a Repeating Decimal as a Fraction

Use a geometric series to write $0.\overline{72} = 0.727272\ldots$ as a fraction.

- $0.727272\ldots = 0.72 + 0.0072 + 0.000072 + \cdots$
- This is a geometric series with first term $a = 0.72 = \frac{72}{100}$ and ratio $r = \frac{1}{100}$.
- Sum = $\frac{a}{1-r} = \frac{72/100}{1 - 1/100} = \frac{72/100}{99/100} = \frac{72}{99} = \frac{8}{11}$.

---

## The nth Term Test for Divergence

This is the simplest test, but it only tells you when a series definitely diverges. It cannot prove convergence.

### The Test

If $\lim_{n \to \infty} a_n \neq 0$ (or the limit does not exist), then the series $\sum a_n$ **diverges**.

**Important:** The converse is **not** true. If $\lim_{n \to \infty} a_n = 0$, the series may converge or diverge. The harmonic series is a classic example: $\lim_{n \to \infty} \frac{1}{n} = 0$, but the harmonic series diverges.

### Example 6: Applying the nth Term Test

Determine whether $\sum_{n=1}^{\infty} \frac{n}{2n+1}$ converges or diverges.

- Compute $\lim_{n \to \infty} \frac{n}{2n+1} = \frac{1}{2} \neq 0$.
- By the nth term test, the series diverges.

### Example 7: When the Test Is Inconclusive

For $\sum_{n=1}^{\infty} \frac{1}{n^2}$, $\lim_{n \to \infty} \frac{1}{n^2} = 0$, so the test tells us nothing. (Spoiler: this series converges—it's a p-series with $p=2 > 1$.)

---

## The Integral Test

The integral test connects the convergence of a series to the convergence of an improper integral. It's useful for series where the terms are positive and decreasing.

### The Test

Let $f(x)$ be a continuous, positive, decreasing function on $[1, \infty)$ such that $f(n) = a_n$ for all integers $n \ge 1$. Then the series $\sum_{n=1}^{\infty} a_n$ converges if and only if the improper integral $\int_1^\infty f(x)\,dx$ converges.

In other words:
- If $\int_1^\infty f(x)\,dx$ converges, then $\sum a_n$ converges.
- If $\int_1^\infty f(x)\,dx$ diverges, then $\sum a_n$ diverges.

### Conditions

- $f$ must be continuous, positive, and **decreasing** for $x \ge 1$ (or at least eventually decreasing).
- The test compares the series to the integral; the actual value of the integral is not the sum of the series, but they share convergence/divergence behavior.

### Example 8: Using the Integral Test

Determine whether $\sum_{n=1}^{\infty} \frac{1}{n^2}$ converges or diverges.

- Let $f(x) = \frac{1}{x^2}$. For $x \ge 1$, $f$ is continuous, positive, and decreasing.
- Compute $\int_1^\infty \frac{1}{x^2}\,dx = \lim_{b \to \infty} \left[ -\frac{1}{x} \right]_1^b = \lim_{b \to \infty} \left( -\frac{1}{b} + 1 \right) = 1$.
- The integral converges, so the series converges.

### Example 9: Another Integral Test

Test $\sum_{n=1}^{\infty} \frac{1}{n}$ (the harmonic series) for convergence.

- Let $f(x) = \frac{1}{x}$. For $x \ge 1$, $f$ is continuous, positive, and decreasing.
- $\int_1^\infty \frac{1}{x}\,dx = \lim_{b \to \infty} [\ln x]_1^b = \lim_{b \to \infty} (\ln b - 0) = \infty$.
- The integral diverges, so the harmonic series diverges.

### Example 10: When the Function Isn't Decreasing from the Start

Sometimes the function decreases only after a certain point. That's okay—we can start the integral from that point. Convergence/divergence is determined by the tail of the series.

Test $\sum_{n=2}^{\infty} \frac{1}{n \ln n}$.

- Let $f(x) = \frac{1}{x \ln x}$ for $x \ge 2$. It's positive, continuous, and decreasing for $x \ge 2$ (since denominator increases).
- Compute $\int_2^\infty \frac{1}{x \ln x}\,dx$. Let $u = \ln x$, $du = \frac{dx}{x}$, so $\int \frac{1}{u} du = \ln|u| = \ln(\ln x)$.
- $\int_2^\infty \frac{1}{x \ln x} dx = \lim_{b \to \infty} [\ln(\ln x)]_2^b = \lim_{b \to \infty} (\ln(\ln b) - \ln(\ln 2)) = \infty$.
- The integral diverges, so the series diverges.

---

## Harmonic Series and p-Series

Two important families of series are the harmonic series and the more general p-series.

### The Harmonic Series

The harmonic series is
$$\sum_{n=1}^{\infty} \frac{1}{n} = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \cdots$$
We've seen that it diverges (by the integral test). Despite its terms going to zero, the sum grows without bound—slowly, but without bound.

### p-Series

A p-series has the form
$$\sum_{n=1}^{\infty} \frac{1}{n^p} = 1 + \frac{1}{2^p} + \frac{1}{3^p} + \frac{1}{4^p} + \cdots$$
where $p$ is a positive constant.

**Convergence Rule for p-Series:**
- If $p > 1$, the p-series **converges**.
- If $p \le 1$, the p-series **diverges**.

This comes directly from the integral test: $\int_1^\infty \frac{1}{x^p} dx$ converges for $p > 1$ and diverges for $p \le 1$.

### Example 11: Classifying p-Series

- $\sum \frac{1}{n^{1.5}}$: $p = 1.5 > 1$ → converges.
- $\sum \frac{1}{\sqrt{n}} = \sum \frac{1}{n^{1/2}}$: $p = 1/2 < 1$ → diverges.
- $\sum \frac{1}{n}$: $p = 1$ → diverges (harmonic series).
- $\sum \frac{1}{n^2}$: $p = 2 > 1$ → converges.

### The Alternating Harmonic Series

We'll cover alternating series in detail later, but for reference, the alternating harmonic series is
$$\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots$$
Unlike the ordinary harmonic series, this one **converges** (to $\ln 2$). The alternating signs cause enough cancellation to make the sum finite.

---

## Summary

### Key Concepts

| Concept | Definition / Rule |
|---------|-------------------|
| **Sequence** | Ordered list $a_1, a_2, a_3, \dots$ |
| **Series** | Sum of a sequence: $\sum a_n$ |
| **Partial sum** | $S_n = a_1 + a_2 + \cdots + a_n$ |
| **Convergence of series** | $\lim_{n \to \infty} S_n$ exists and is finite |
| **Geometric series** | $\sum ar^{n-1}$ converges if $|r| < 1$ to $\frac{a}{1-r}$; diverges if $|r| \ge 1$ |
| **nth term test** | If $\lim a_n \neq 0$, series diverges. If limit = 0, test is inconclusive. |
| **Integral test** | For $f$ continuous, positive, decreasing with $f(n)=a_n$, series converges iff $\int_1^\infty f(x) dx$ converges. |
| **p-series** | $\sum \frac{1}{n^p}$ converges if $p > 1$, diverges if $p \le 1$. |
| **Harmonic series** | $p=1$ case; diverges. |

### Important Notes

- The nth term test is a **one-way test**: it can only prove divergence, never convergence.
- The integral test requires the function to be **decreasing** eventually. If it's not, you can't use it.
- Geometric series are the only series for which we have a simple closed-form sum. For most others, we only know whether they converge or diverge, not their exact sum.
- p-series are a benchmark: many other series are compared to them.

### Common Pitfalls

- Thinking $\lim a_n = 0$ implies convergence—false! (Harmonic series counterexample.)
- Forgetting to check $|r| < 1$ for geometric series—if $r=1$ or $r=-1$, the series diverges (unless $a=0$).
- Applying the integral test without checking that $f$ is decreasing.
- Confusing sequences and series—a sequence is a list, a series is a sum.

---

### Additional Practice Problems

1. Find the sum of the geometric series $\sum_{n=0}^{\infty} 4\left(-\frac{1}{3}\right)^n$.
2. Determine whether $\sum_{n=1}^{\infty} \frac{2^n}{5^{n+1}}$ converges, and if so, find its sum.
3. Use the nth term test to show that $\sum_{n=1}^{\infty} \frac{n^2}{3n^2+1}$ diverges.
4. Apply the integral test to determine the convergence of $\sum_{n=1}^{\infty} \frac{1}{n^2+1}$.
5. Classify each p-series as convergent or divergent:
   a) $\sum \frac{1}{n^{0.7}}$
   b) $\sum \frac{1}{n^{3/2}}$
   c) $\sum \frac{1}{\sqrt[3]{n}}$
6. Write $0.\overline{45}$ as a fraction using a geometric series.
7. Does $\sum_{n=1}^{\infty} \frac{1}{n^{1.001}}$ converge or diverge? Explain.
8. Use the integral test to determine the convergence of $\sum_{n=2}^{\infty} \frac{1}{n(\ln n)^2}$.
9. Find the values of $x$ for which the geometric series $\sum_{n=0}^{\infty} (x-2)^n$ converges, and find its sum when it does.
10. True or False: If $\lim_{n \to \infty} a_n = 0$, then $\sum a_n$ converges.

---

### Selected Solutions

1. **$\sum_{n=0}^{\infty} 4(-\frac{1}{3})^n$**
   - $a = 4$, $r = -1/3$, $|r| = 1/3 < 1$, so converges.
   - Sum = $\frac{4}{1 - (-1/3)} = \frac{4}{1 + 1/3} = \frac{4}{4/3} = 3$.

2. **$\sum_{n=1}^{\infty} \frac{2^n}{5^{n+1}}$**
   - Rewrite: $\frac{2^n}{5^{n+1}} = \frac{1}{5} \left(\frac{2}{5}\right)^n$.
   - First term when $n=1$: $\frac{1}{5} \cdot \frac{2}{5} = \frac{2}{25}$. Ratio $r = 2/5$.
   - $|r| = 2/5 < 1$, so converges. Sum = $\frac{2/25}{1 - 2/5} = \frac{2/25}{3/5} = \frac{2}{25} \cdot \frac{5}{3} = \frac{2}{15}$.

3. **$\sum \frac{n^2}{3n^2+1}$**
   - $\lim_{n \to \infty} \frac{n^2}{3n^2+1} = \frac{1}{3} \neq 0$, so by nth term test, diverges.

4. **$\sum_{n=1}^{\infty} \frac{1}{n^2+1}$**
   - Let $f(x) = \frac{1}{x^2+1}$, positive, continuous, decreasing for $x \ge 1$ (since denominator increases).
   - $\int_1^\infty \frac{1}{x^2+1} dx = \lim_{b \to \infty} [\arctan x]_1^b = \lim_{b \to \infty} (\arctan b - \arctan 1) = \frac{\pi}{2} - \frac{\pi}{4} = \frac{\pi}{4}$.
   - Integral converges, so series converges.

5. **p-series classification**
   a) $p = 0.7 < 1$ → diverges.
   b) $p = 1.5 > 1$ → converges.
   c) $p = 1/3 < 1$ → diverges.

6. **$0.\overline{45}$**
   - $0.454545\ldots = 0.45 + 0.0045 + 0.000045 + \cdots$
   - Geometric series: $a = 0.45 = 45/100$, $r = 1/100$.
   - Sum = $\frac{45/100}{1 - 1/100} = \frac{45/100}{99/100} = \frac{45}{99} = \frac{5}{11}$.

7. **$\sum \frac{1}{n^{1.001}}$**
   - p-series with $p = 1.001 > 1$, so converges. (Just barely!)

8. **$\sum_{n=2}^{\infty} \frac{1}{n(\ln n)^2}$**
   - Let $f(x) = \frac{1}{x(\ln x)^2}$ for $x \ge 2$, positive, decreasing (since denominator increases).
   - $\int_2^\infty \frac{1}{x(\ln x)^2} dx$: let $u = \ln x$, $du = dx/x$.
     When $x=2$, $u=\ln 2$; as $x \to \infty$, $u \to \infty$.
     $\int \frac{1}{u^2} du = -1/u$, so $\int_2^\infty = \lim_{b \to \infty} [-1/u]_{\ln 2}^b = \lim_{b \to \infty} (-\frac{1}{b} + \frac{1}{\ln 2}) = \frac{1}{\ln 2}$.
   - Integral converges, so series converges.

9. **$\sum_{n=0}^{\infty} (x-2)^n$**
   - Geometric series with $r = x-2$. Converges when $|x-2| < 1$, i.e., $1 < x < 3$.
   - Sum = $\frac{1}{1 - (x-2)} = \frac{1}{3-x}$ for $x$ in $(1,3)$.

10. **False.** Counterexample: harmonic series $\sum 1/n$ has terms $\to 0$ but diverges.

---

You've now laid the foundation for understanding infinite series. The key idea is that convergence is about the behavior of partial sums, and we have several tools to determine whether a series converges or diverges. In the next lesson, we'll add more tests to our toolkit: comparison tests, alternating series test, and ratio test. These will allow us to handle a wider variety of series.