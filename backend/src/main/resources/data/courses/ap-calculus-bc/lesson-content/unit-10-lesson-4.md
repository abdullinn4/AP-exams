# Power Series Part 2 (Convergence and Representation)

Welcome to the final lesson of AP Calculus BC! We've come a long way—from limits and derivatives to integrals, differential equations, and now to the beautiful world of power series. In the previous lesson, we learned how to approximate functions using Taylor polynomials and how to bound the error. Now we're going to explore the full infinite series—the **power series** itself.

In this lesson, we'll cover:
- **Radius and Interval of Convergence** – where does a power series actually equal the function?
- **Finding Taylor and Maclaurin Series** – building series from scratch
- **Representing Functions as Power Series** – using known series to create new ones through substitution, differentiation, and integration

These topics tie everything together. By the end, you'll understand how functions like $e^x$, $\sin x$, and $\frac{1}{1-x}$ are really just infinite polynomials in disguise.

---

## **Radius and Interval of Convergence**

### What Is a Power Series?

A **power series** centered at $x = a$ is an infinite series of the form:
$$\sum_{n=0}^{\infty} c_n (x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \cdots$$

The numbers $c_n$ are called the **coefficients**. For a given $x$, this is just an infinite series of numbers—it may converge or diverge. The set of $x$ for which the series converges is called the **interval of convergence**.

### Three Possibilities for Convergence

For any power series $\sum c_n (x-a)^n$, exactly one of the following is true:

1. The series converges only at $x = a$ (radius of convergence $R = 0$).
2. The series converges for all $x$ (radius of convergence $R = \infty$).
3. There exists a positive number $R$ such that the series converges for $|x-a| < R$ and diverges for $|x-a| > R$. At the endpoints $x = a \pm R$, the series may converge or diverge—we must check separately.

This $R$ is called the **radius of convergence**.

### Finding the Radius of Convergence: The Ratio Test

The ratio test is our primary tool for finding $R$. For a power series $\sum c_n (x-a)^n$, compute:

$$L = \lim_{n \to \infty} \left| \frac{c_{n+1}(x-a)^{n+1}}{c_n (x-a)^n} \right| = \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| \cdot |x-a|$$

Let $L = |x-a| \cdot \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right|$. By the ratio test:

- If $L < 1$, the series converges absolutely.
- If $L > 1$, the series diverges.
- If $L = 1$, the test is inconclusive.

Setting $L < 1$ gives $|x-a| < \frac{1}{\lim |c_{n+1}/c_n|}$, provided the limit exists. That number is the radius of convergence $R$.

### Example 1: Basic Power Series

Find the radius and interval of convergence for $\sum_{n=0}^{\infty} \frac{x^n}{n!}$.

- Here $c_n = \frac{1}{n!}$, $a = 0$.
- Compute $\lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| = \lim_{n \to \infty} \frac{1/(n+1)!}{1/n!} = \lim_{n \to \infty} \frac{1}{n+1} = 0$.
- Then $L = |x| \cdot 0 = 0$ for all $x$, which is always $< 1$.
- So the series converges for all $x$. Radius $R = \infty$, interval $(-\infty, \infty)$.

(This is the Maclaurin series for $e^x$.)

### Example 2: Geometric Series

Find the radius and interval of convergence for $\sum_{n=0}^{\infty} (2x)^n$.

- Rewrite as $\sum (2^n) x^n$, so $c_n = 2^n$, $a = 0$.
- $\lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| = \lim_{n \to \infty} \frac{2^{n+1}}{2^n} = 2$.
- Then $L = |x| \cdot 2$. Set $L < 1$: $2|x| < 1$ ⇒ $|x| < \frac{1}{2}$.
- So radius $R = \frac{1}{2}$.
- Now check endpoints:
  - At $x = \frac{1}{2}$: $\sum (2 \cdot \frac{1}{2})^n = \sum 1^n$ diverges.
  - At $x = -\frac{1}{2}$: $\sum (2 \cdot (-\frac{1}{2}))^n = \sum (-1)^n$ diverges.
- Interval of convergence: $(-\frac{1}{2}, \frac{1}{2})$.

### Example 3: Series with Factorials

Find the radius and interval of convergence for $\sum_{n=0}^{\infty} \frac{x^n}{n^2 + 1}$.

- $c_n = \frac{1}{n^2+1}$, $a=0$.
- $\lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| = \lim_{n \to \infty} \frac{1/((n+1)^2+1)}{1/(n^2+1)} = \lim_{n \to \infty} \frac{n^2+1}{(n+1)^2+1} = 1$.
- So $L = |x| \cdot 1$. Set $|x| < 1$ for convergence. Radius $R = 1$.
- Check endpoints:
  - At $x = 1$: $\sum \frac{1}{n^2+1}$ converges (compare to $1/n^2$).
  - At $x = -1$: $\sum \frac{(-1)^n}{n^2+1}$ converges absolutely (since absolute values converge).
- Interval of convergence: $[-1, 1]$.

### Example 4: Series Centered Away from Zero

Find the interval of convergence for $\sum_{n=0}^{\infty} \frac{(x-2)^n}{3^n}$.

- This is a geometric series with ratio $r = \frac{x-2}{3}$.
- It converges when $|r| < 1$: $\left| \frac{x-2}{3} \right| < 1$ ⇒ $|x-2| < 3$ ⇒ $-1 < x < 5$.
- Check endpoints:
  - At $x = -1$: $\sum \frac{(-3)^n}{3^n} = \sum (-1)^n$ diverges.
  - At $x = 5$: $\sum \frac{3^n}{3^n} = \sum 1^n$ diverges.
- Interval: $(-1, 5)$, radius $R = 3$.

---

## **Finding Taylor and Maclaurin Series**

Now we know how to find where a power series converges. But how do we find the series for a given function? The Taylor series formula gives us a direct method.

### The Taylor Series Formula

If $f$ has derivatives of all orders at $x = a$, then the **Taylor series** for $f$ centered at $a$ is:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n$$

When $a = 0$, it's called a **Maclaurin series**:
$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n$$

### The Five Essential Maclaurin Series

These five series are the foundation for almost every power series problem on the BC exam. Memorize them!

1. **$e^x$**:
   $$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$$
   Interval: $(-\infty, \infty)$

2. **$\sin x$**:
   $$\sin x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots$$
   Interval: $(-\infty, \infty)$

3. **$\cos x$**:
   $$\cos x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots$$
   Interval: $(-\infty, \infty)$

4. **$\frac{1}{1-x}$**:
   $$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \cdots$$
   Interval: $(-1, 1)$

5. **$\ln(1+x)$**:
   $$\ln(1+x) = \sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots$$
   Interval: $(-1, 1]$ (converges at $x=1$)

### Example 5: Finding a Maclaurin Series from Scratch

Find the Maclaurin series for $f(x) = \sin(2x)$.

- Using the series for $\sin u$ with $u = 2x$:
  $$\sin(2x) = \sum_{n=0}^{\infty} (-1)^n \frac{(2x)^{2n+1}}{(2n+1)!} = \sum_{n=0}^{\infty} (-1)^n \frac{2^{2n+1} x^{2n+1}}{(2n+1)!}$$
- Simplify: $\sin 2x = \sum_{n=0}^{\infty} (-1)^n \frac{2^{2n+1}}{(2n+1)!} x^{2n+1}$
- First few terms: $2x - \frac{8x^3}{6} + \frac{32x^5}{120} - \cdots = 2x - \frac{4x^3}{3} + \frac{4x^5}{15} - \cdots$

### Example 6: Taylor Series Centered at $a=2$

Find the Taylor series for $f(x) = \ln x$ centered at $x=2$.

- We need derivatives at $x=2$:
  $$f(x) = \ln x, \quad f(2) = \ln 2$$
  $$f'(x) = \frac{1}{x}, \quad f'(2) = \frac{1}{2}$$
  $$f''(x) = -\frac{1}{x^2}, \quad f''(2) = -\frac{1}{4}$$
  $$f'''(x) = \frac{2}{x^3}, \quad f'''(2) = \frac{2}{8} = \frac{1}{4}$$
  $$f^{(4)}(x) = -\frac{6}{x^4}, \quad f^{(4)}(2) = -\frac{6}{16} = -\frac{3}{8}$$
- The series is:
  $$\ln x = \ln 2 + \frac{1}{2}(x-2) - \frac{1}{4}\frac{(x-2)^2}{2!} + \frac{1}{4}\frac{(x-2)^3}{3!} - \frac{3}{8}\frac{(x-2)^4}{4!} + \cdots$$
- Simplify:
  $$\ln x = \ln 2 + \frac{1}{2}(x-2) - \frac{1}{8}(x-2)^2 + \frac{1}{24}(x-2)^3 - \frac{1}{64}(x-2)^4 + \cdots$$

---

## **Representing Functions as Power Series**

Often we can build new power series from known ones without computing derivatives from scratch. The key operations are:

- **Substitution** – replace $x$ with something like $x^2$, $-x$, etc.
- **Differentiation** – differentiate term-by-term within the interval of convergence
- **Integration** – integrate term-by-term within the interval of convergence

### Important Properties

If a power series $\sum c_n (x-a)^n$ converges to $f(x)$ for $|x-a| < R$, then:

1. The differentiated series $\sum n c_n (x-a)^{n-1}$ converges to $f'(x)$ for $|x-a| < R$.
2. The integrated series $\sum \frac{c_n}{n+1} (x-a)^{n+1}$ converges to $\int f(x) dx$ for $|x-a| < R$.

The radius of convergence remains the same, though endpoint behavior may change.

### Example 7: Substitution

Find a power series for $f(x) = \frac{1}{1 + x^2}$.

- Start with $\frac{1}{1-u} = \sum_{n=0}^{\infty} u^n$ for $|u| < 1$.
- Let $u = -x^2$:
  $$\frac{1}{1 + x^2} = \frac{1}{1 - (-x^2)} = \sum_{n=0}^{\infty} (-x^2)^n = \sum_{n=0}^{\infty} (-1)^n x^{2n}$$
- This converges when $| -x^2 | < 1$ ⇒ $|x| < 1$.
- So $f(x) = 1 - x^2 + x^4 - x^6 + \cdots$ for $|x| < 1$.

### Example 8: Differentiation

Find a power series for $f(x) = \frac{1}{(1-x)^2}$.

- Start with $\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n$ for $|x| < 1$.
- Differentiate both sides:
  $$\frac{d}{dx} \left( \frac{1}{1-x} \right) = \frac{1}{(1-x)^2} = \sum_{n=1}^{\infty} n x^{n-1} = \sum_{n=0}^{\infty} (n+1) x^n$$
- So $\frac{1}{(1-x)^2} = 1 + 2x + 3x^2 + 4x^3 + \cdots$ for $|x| < 1$.

### Example 9: Integration

Find a power series for $f(x) = \ln(1+x)$.

- Start with $\frac{1}{1+t} = \sum_{n=0}^{\infty} (-1)^n t^n$ for $|t| < 1$.
- Integrate from $0$ to $x$:
  $$\int_0^x \frac{1}{1+t} dt = \ln(1+x) = \sum_{n=0}^{\infty} (-1)^n \int_0^x t^n dt = \sum_{n=0}^{\infty} (-1)^n \frac{x^{n+1}}{n+1}$$
- Re-index with $k = n+1$:
  $$\ln(1+x) = \sum_{k=1}^{\infty} (-1)^{k-1} \frac{x^k}{k} = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots$$
- This converges for $|x| < 1$, and at $x=1$ it converges to $\ln 2$ (alternating harmonic series).

### Example 10: Combining Operations

Find a power series for $f(x) = x e^{x^2}$.

- Start with $e^u = \sum_{n=0}^{\infty} \frac{u^n}{n!}$.
- Let $u = x^2$:
  $$e^{x^2} = \sum_{n=0}^{\infty} \frac{x^{2n}}{n!} = 1 + x^2 + \frac{x^4}{2!} + \frac{x^6}{3!} + \cdots$$
- Multiply by $x$:
  $$x e^{x^2} = \sum_{n=0}^{\infty} \frac{x^{2n+1}}{n!} = x + x^3 + \frac{x^5}{2!} + \frac{x^7}{3!} + \cdots$$
- Radius of convergence: same as for $e^{x^2}$, which is $\infty$.

---

## Summary

### Key Concepts

| Concept | Formula / Method |
|---------|------------------|
| **Power series** | $\sum c_n (x-a)^n$ |
| **Radius of convergence $R$** | Use ratio test: $R = \frac{1}{\lim |c_{n+1}/c_n|}$ (if limit exists) |
| **Interval of convergence** | Find open interval $|x-a| < R$, test endpoints separately |
| **Taylor series** | $f(x) = \sum \frac{f^{(n)}(a)}{n!} (x-a)^n$ |
| **Maclaurin series** | $f(x) = \sum \frac{f^{(n)}(0)}{n!} x^n$ |
| **Known series** | $e^x$, $\sin x$, $\cos x$, $\frac{1}{1-x}$, $\ln(1+x)$ |
| **Operations** | Substitution, differentiation, integration preserve radius of convergence |

### The Five Essential Series

1. $e^x = \sum_{n=0}^\infty \frac{x^n}{n!}$ ($R=\infty$)
2. $\sin x = \sum_{n=0}^\infty (-1)^n \frac{x^{2n+1}}{(2n+1)!}$ ($R=\infty$)
3. $\cos x = \sum_{n=0}^\infty (-1)^n \frac{x^{2n}}{(2n)!}$ ($R=\infty$)
4. $\frac{1}{1-x} = \sum_{n=0}^\infty x^n$ ($R=1$)
5. $\ln(1+x) = \sum_{n=1}^\infty (-1)^{n-1} \frac{x^n}{n}$ ($R=1$, converges at $x=1$)

### Important Notes

- The radius of convergence is found from the coefficients, independent of $x$.
- Endpoints must be checked separately—they may converge or diverge.
- Term-by-term differentiation and integration are valid inside the interval of convergence (not necessarily at endpoints).
- A power series defines a function on its interval of convergence, and that function has derivatives and integrals given by the differentiated/integrated series.

### Common Pitfalls

- Forgetting to test endpoints—just because $|x-a| < R$ converges doesn't mean the endpoints do.
- Using the ratio test incorrectly—remember it's $\lim |c_{n+1}/c_n|$, not $|c_n/c_{n+1}|$.
- Assuming that if a series converges at an endpoint, the interval is closed on that side—you must verify.
- Differentiating or integrating a series outside its interval of convergence—not allowed!
- Confusing the radius $R$ with the interval—$R$ is half the length of the open interval.

---

### Additional Practice Problems

1. Find the radius and interval of convergence for $\sum_{n=1}^\infty \frac{(x-3)^n}{n \cdot 2^n}$.
2. Find the Maclaurin series for $f(x) = \cos(3x)$.
3. Use the known series for $\frac{1}{1-x}$ to find a power series for $\frac{x}{1+x^2}$.
4. Find the Taylor series for $f(x) = e^{2x}$ centered at $x = 1$.
5. Determine the interval of convergence for $\sum_{n=0}^\infty \frac{n! x^n}{10^n}$.
6. Find a power series for $f(x) = \arctan x$ by integrating the series for $\frac{1}{1+x^2}$.
7. For the series $\sum_{n=0}^\infty \frac{x^n}{n+1}$, find its interval of convergence and find a closed-form expression for the function it represents.
8. Find the radius of convergence for $\sum_{n=0}^\infty \frac{(2n)!}{(n!)^2} x^n$.
9. Use differentiation to find a power series for $f(x) = \frac{1}{(1-x)^3}$.
10. Find the Maclaurin series for $f(x) = \sin^2 x$ (hint: use the identity $\sin^2 x = \frac{1-\cos 2x}{2}$).

---

### Selected Solutions

1. **$\sum_{n=1}^\infty \frac{(x-3)^n}{n \cdot 2^n}$**
   - $c_n = \frac{1}{n 2^n}$, $a=3$.
   - $\lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| = \lim_{n \to \infty} \frac{1}{(n+1)2^{n+1}} \cdot \frac{n 2^n}{1} = \lim_{n \to \infty} \frac{n}{2(n+1)} = \frac{1}{2}$.
   - So $R = \frac{1}{1/2} = 2$.
   - Interval: $|x-3| < 2$ ⇒ $1 < x < 5$.
   - Check endpoints:
     - $x=5$: $\sum \frac{2^n}{n 2^n} = \sum \frac{1}{n}$ diverges (harmonic).
     - $x=1$: $\sum \frac{(-2)^n}{n 2^n} = \sum \frac{(-1)^n}{n}$ converges conditionally (alternating harmonic).
   - Interval: $[1, 5)$.

2. **Maclaurin for $\cos 3x$**
   - $\cos u = \sum_{n=0}^\infty (-1)^n \frac{u^{2n}}{(2n)!}$, with $u=3x$:
   - $\cos 3x = \sum_{n=0}^\infty (-1)^n \frac{(3x)^{2n}}{(2n)!} = \sum_{n=0}^\infty (-1)^n \frac{3^{2n} x^{2n}}{(2n)!} = \sum_{n=0}^\infty (-1)^n \frac{9^n x^{2n}}{(2n)!}$

3. **Power series for $\frac{x}{1+x^2}$**
   - Start with $\frac{1}{1+u} = \sum_{n=0}^\infty (-u)^n = \sum (-1)^n u^n$ for $|u|<1$.
   - Let $u = x^2$: $\frac{1}{1+x^2} = \sum (-1)^n x^{2n}$.
   - Multiply by $x$: $\frac{x}{1+x^2} = \sum (-1)^n x^{2n+1} = x - x^3 + x^5 - x^7 + \cdots$, converges for $|x|<1$.

4. **Taylor series for $e^{2x}$ at $x=1$**
   - Let $u = x-1$, then $x = u+1$, $e^{2x} = e^{2(u+1)} = e^2 e^{2u}$.
   - $e^{2u} = \sum_{n=0}^\infty \frac{(2u)^n}{n!} = \sum_{n=0}^\infty \frac{2^n u^n}{n!}$.
   - So $e^{2x} = e^2 \sum_{n=0}^\infty \frac{2^n (x-1)^n}{n!}$.

5. **$\sum \frac{n! x^n}{10^n}$**
   - $c_n = \frac{n!}{10^n}$.
   - $\lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| = \lim_{n \to \infty} \frac{(n+1)!}{10^{n+1}} \cdot \frac{10^n}{n!} = \lim_{n \to \infty} \frac{n+1}{10} = \infty$.
   - So $R = 0$ (converges only at $x=0$).

6. **Power series for $\arctan x$**
   - $\frac{1}{1+x^2} = \sum_{n=0}^\infty (-1)^n x^{2n}$ for $|x|<1$.
   - Integrate term-by-term from 0 to $x$:
     $$\arctan x = \int_0^x \frac{1}{1+t^2} dt = \sum_{n=0}^\infty (-1)^n \int_0^x t^{2n} dt = \sum_{n=0}^\infty (-1)^n \frac{x^{2n+1}}{2n+1}$$
   - So $\arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots$ for $|x|<1$. (It also converges at $x=\pm1$.)

7. **$\sum \frac{x^n}{n+1}$**
   - $c_n = \frac{1}{n+1}$, $\lim |c_{n+1}/c_n| = \lim (n+1)/(n+2) = 1$, so $R=1$.
   - Interval: $|x|<1$, check endpoints:
     - $x=1$: $\sum \frac{1}{n+1}$ diverges (harmonic shift).
     - $x=-1$: $\sum \frac{(-1)^n}{n+1}$ converges by AST.
   - So interval $[-1,1)$.
   - To find closed form: note $\sum x^{n} = \frac{1}{1-x}$, integrate:
     $$\int \sum x^n dx = \sum \frac{x^{n+1}}{n+1} = \int \frac{1}{1-x} dx = -\ln|1-x| + C$$
     At $x=0$, sum = 0, so $C = \ln 1 = 0$? Actually careful: $\sum \frac{x^{n+1}}{n+1} = x \sum \frac{x^n}{n+1}$, so maybe better: Let $S(x) = \sum_{n=0}^\infty \frac{x^{n+1}}{n+1} = \int_0^x \frac{1}{1-t} dt = -\ln(1-x)$. Then $\sum \frac{x^n}{n+1} = \frac{S(x)}{x} = -\frac{\ln(1-x)}{x}$ for $x \neq 0$, and at $x=0$, the series equals 1.

8. **$\sum \frac{(2n)!}{(n!)^2} x^n$**
   - $c_n = \frac{(2n)!}{(n!)^2}$.
   - $\lim_{n \to \infty} \frac{c_{n+1}}{c_n} = \lim_{n \to \infty} \frac{(2n+2)!}{[(n+1)!]^2} \cdot \frac{(n!)^2}{(2n)!} = \lim_{n \to \infty} \frac{(2n+2)(2n+1)}{(n+1)^2} = \lim_{n \to \infty} \frac{4n^2+6n+2}{n^2+2n+1} = 4$.
   - So $R = 1/4$.

9. **Power series for $\frac{1}{(1-x)^3}$**
   - Start with $\frac{1}{(1-x)^2} = \sum_{n=0}^\infty (n+1)x^n$ (from Example 8).
   - Differentiate:
     $$\frac{d}{dx} \frac{1}{(1-x)^2} = \frac{2}{(1-x)^3} = \sum_{n=1}^\infty n(n+1) x^{n-1} = \sum_{n=0}^\infty (n+1)(n+2) x^n$$
   - So $\frac{1}{(1-x)^3} = \frac{1}{2} \sum_{n=0}^\infty (n+1)(n+2) x^n$ for $|x|<1$.

10. **Maclaurin for $\sin^2 x$**
    - $\sin^2 x = \frac{1 - \cos 2x}{2}$.
    - $\cos 2x = \sum_{n=0}^\infty (-1)^n \frac{(2x)^{2n}}{(2n)!} = \sum_{n=0}^\infty (-1)^n \frac{2^{2n} x^{2n}}{(2n)!}$.
    - So $\sin^2 x = \frac{1}{2} \left[ 1 - \sum_{n=0}^\infty (-1)^n \frac{4^n x^{2n}}{(2n)!} \right] = \frac{1}{2} \left[ 1 - 1 + \sum_{n=1}^\infty (-1)^{n+1} \frac{4^n x^{2n}}{(2n)!} \right]$ (pulling out the $n=0$ term $1$ from the sum).
    - Simplify: $\sin^2 x = \sum_{n=1}^\infty (-1)^{n+1} \frac{4^{n-1} x^{2n}}{(2n)!}$? Wait careful:
      $$\sin^2 x = \frac{1}{2} - \frac{1}{2} \sum_{n=0}^\infty (-1)^n \frac{4^n x^{2n}}{(2n)!}$$
      The $n=0$ term of the sum is $1$, so $\frac{1}{2} - \frac{1}{2}(1 + \sum_{n=1}^\infty (-1)^n \frac{4^n x^{2n}}{(2n)!}) = -\frac{1}{2} \sum_{n=1}^\infty (-1)^n \frac{4^n x^{2n}}{(2n)!} = \sum_{n=1}^\infty (-1)^{n+1} \frac{4^{n-1} x^{2n}}{(2n)!}$? Let's check first term $n=1$: $(-1)^{2} \frac{4^{0} x^2}{2!} = \frac{x^2}{2}$, which matches $\sin^2 x \approx x^2$ for small $x$. Yes.
    - So $\sin^2 x = \sum_{n=1}^\infty (-1)^{n+1} \frac{2^{2n-2} x^{2n}}{(2n)!}$.

---

Congratulations! You've now covered all the topics for AP Calculus BC. From limits and derivatives to integrals, differential equations, and finally power series—you've built a complete calculus toolkit. The key to success on the exam is practice: work through problems, memorize the common series, and understand when to apply each convergence test. You're ready!