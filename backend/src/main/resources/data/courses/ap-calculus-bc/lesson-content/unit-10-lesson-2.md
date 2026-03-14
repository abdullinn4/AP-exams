# Convergence Tests

Welcome back! In the previous lesson, we laid the foundation—learning what it means for a series to converge or diverge, and meeting our first few tests (geometric series, nth term test, integral test, and p-series). But those tests don't cover every series we might encounter. What about series with alternating signs? What about series where terms involve factorials or powers? What if we want to compare a complicated series to a simpler one?

In this lesson, we'll build a complete toolkit of convergence tests:
- **Comparison Test** and **Limit Comparison Test** – comparing to known series
- **Alternating Series Test** – for series with alternating signs
- **Ratio Test** – powerful for factorials and exponentials
- **Absolute vs. Conditional Convergence** – understanding the difference

By the end, you'll be able to handle almost any series the BC exam throws at you.

---

## Comparison Test

### The Idea

If we have a series with positive terms, we can sometimes compare it to another series whose convergence we already know. If the terms of our series are smaller than the terms of a convergent series, then our series must also converge. Conversely, if the terms are larger than the terms of a divergent series, our series must diverge.

### The Test

Let $\sum a_n$ and $\sum b_n$ be series with **positive terms**.

- If $0 < a_n \le b_n$ for all $n$ (or at least for all $n$ beyond some index) and $\sum b_n$ converges, then $\sum a_n$ converges.
- If $0 < b_n \le a_n$ for all $n$ and $\sum b_n$ diverges, then $\sum a_n$ diverges.

In words:
- If a smaller series fits under a convergent larger series, the smaller converges.
- If a larger series towers over a divergent smaller series, the larger diverges.

### Example 1: Using Comparison Test

Determine whether $\sum_{n=1}^{\infty} \frac{1}{n^2 + 5}$ converges or diverges.

- Notice that $\frac{1}{n^2 + 5} < \frac{1}{n^2}$ for all $n$.
- We know $\sum \frac{1}{n^2}$ is a convergent p-series ($p=2 > 1$).
- Since our series has smaller terms than a convergent series, it must converge.

### Example 2: Comparison Test for Divergence

Determine whether $\sum_{n=1}^{\infty} \frac{1}{2\sqrt{n} - 1}$ converges or diverges.

- For large $n$, $2\sqrt{n} - 1 \approx 2\sqrt{n}$, so the terms behave like $\frac{1}{2\sqrt{n}}$.
- More precisely, for $n \ge 1$, $2\sqrt{n} - 1 \le 2\sqrt{n}$, so $\frac{1}{2\sqrt{n} - 1} \ge \frac{1}{2\sqrt{n}} = \frac{1}{2} \cdot \frac{1}{\sqrt{n}}$.
- The series $\sum \frac{1}{\sqrt{n}}$ is a divergent p-series ($p = 1/2 < 1$), so $\sum \frac{1}{2} \cdot \frac{1}{\sqrt{n}}$ also diverges (constant factor doesn't affect convergence).
- Since our series has larger terms than a divergent series, it must diverge.

---

## Limit Comparison Test

Sometimes it's hard to establish a direct inequality like $a_n \le b_n$ or $a_n \ge b_n$. The limit comparison test gives us a more flexible way to compare the growth rates of terms.

### The Test

Let $\sum a_n$ and $\sum b_n$ be series with **positive terms**. Compute
$$L = \lim_{n \to \infty} \frac{a_n}{b_n}$$
- If $0 < L < \infty$ (a finite positive number), then both series either converge or diverge together.
- If $L = 0$ and $\sum b_n$ converges, then $\sum a_n$ converges.
- If $L = \infty$ and $\sum b_n$ diverges, then $\sum a_n$ diverges.

In practice, we usually choose $b_n$ to be a simpler series whose behavior we know (often a p-series or geometric series), and then compute the limit.

### Example 3: Using Limit Comparison Test

Determine whether $\sum_{n=1}^{\infty} \frac{1}{2n^2 + 3n + 1}$ converges or diverges.

- For large $n$, the term behaves like $\frac{1}{2n^2}$. So choose $b_n = \frac{1}{n^2}$.
- Compute the limit:
  $$\lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \frac{\frac{1}{2n^2+3n+1}}{\frac{1}{n^2}} = \lim_{n \to \infty} \frac{n^2}{2n^2+3n+1} = \frac{1}{2}.$$
- Since $L = 1/2$ is a finite positive number, and $\sum \frac{1}{n^2}$ converges, our series also converges.

### Example 4: Another Limit Comparison

Determine whether $\sum_{n=1}^{\infty} \frac{n}{\sqrt{n^5 + n^2}}$ converges or diverges.

- Simplify: $\frac{n}{\sqrt{n^5 + n^2}} = \frac{n}{\sqrt{n^2(n^3 + 1)}} = \frac{n}{n\sqrt{n^3+1}} = \frac{1}{\sqrt{n^3+1}}$.
- For large $n$, $\sqrt{n^3+1} \approx n^{3/2}$, so $a_n \approx \frac{1}{n^{3/2}}$. Choose $b_n = \frac{1}{n^{3/2}}$.
- Compute limit:
  $$\lim_{n \to \infty} \frac{1/\sqrt{n^3+1}}{1/n^{3/2}} = \lim_{n \to \infty} \frac{n^{3/2}}{\sqrt{n^3+1}} = \lim_{n \to \infty} \frac{n^{3/2}}{\sqrt{n^3(1 + 1/n^3)}} = \lim_{n \to \infty} \frac{n^{3/2}}{n^{3/2}\sqrt{1+1/n^3}} = 1.$$
- Since $L=1$ and $\sum \frac{1}{n^{3/2}}$ converges ($p=1.5 > 1$), our series converges.

---

## Alternating Series Test

So far, all our series had positive terms. But what about series where signs alternate, like $1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots$? These are called **alternating series**.

### The Test (Leibniz's Test)

An alternating series of the form
$$\sum_{n=1}^{\infty} (-1)^{n-1} b_n = b_1 - b_2 + b_3 - b_4 + \cdots$$
or
$$\sum_{n=1}^{\infty} (-1)^n b_n = -b_1 + b_2 - b_3 + b_4 - \cdots$$
where $b_n > 0$, converges if both of the following conditions hold:

1. The terms decrease: $b_{n+1} \le b_n$ for all $n$ (or at least eventually).
2. $\lim_{n \to \infty} b_n = 0$.

If these conditions are met, the series converges. Moreover, the error in approximating the sum by the first $n$ terms is less than or equal to the first omitted term: $|R_n| \le b_{n+1}$.

### Example 5: Alternating Harmonic Series

Show that the alternating harmonic series $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots$ converges.

- Here $b_n = \frac{1}{n}$.
- Check: $b_{n+1} = \frac{1}{n+1} \le \frac{1}{n} = b_n$, so terms decrease.
- $\lim_{n \to \infty} \frac{1}{n} = 0$.
- Both conditions are satisfied, so the series converges.

(Recall: the ordinary harmonic series diverges, but the alternating version converges!)

### Example 6: Another Alternating Series

Test $\sum_{n=1}^{\infty} \frac{(-1)^n n}{n^2 + 1}$ for convergence.

- Here $b_n = \frac{n}{n^2+1}$.
- Check if $b_n$ is decreasing. Consider $f(x) = \frac{x}{x^2+1}$. Derivative $f'(x) = \frac{(x^2+1) - x(2x)}{(x^2+1)^2} = \frac{1-x^2}{(x^2+1)^2}$. This is negative for $x > 1$, so the sequence decreases for $n \ge 2$. That's fine—eventually decreasing is enough.
- $\lim_{n \to \infty} \frac{n}{n^2+1} = 0$.
- Both conditions hold, so the series converges.

---

## Ratio Test

The ratio test is especially useful for series involving factorials, exponentials, or powers. It looks at the ratio of successive terms.

### The Test

For a series $\sum a_n$, compute
$$L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|$$

- If $L < 1$, the series **converges absolutely** (hence converges).
- If $L > 1$, the series **diverges**.
- If $L = 1$, the test is **inconclusive**—the series may converge or diverge.

### Why It Works

The ratio test compares the series to a geometric series. If the ratio of successive terms approaches a number less than 1, eventually the terms behave like a convergent geometric series.

### Example 7: Ratio Test with Factorial

Test $\sum_{n=0}^{\infty} \frac{2^n}{n!}$ for convergence.

- Compute ratio:
  $$\left| \frac{a_{n+1}}{a_n} \right| = \frac{2^{n+1}}{(n+1)!} \cdot \frac{n!}{2^n} = \frac{2}{n+1}.$$
- Take limit: $\lim_{n \to \infty} \frac{2}{n+1} = 0$.
- Since $L = 0 < 1$, the series converges absolutely.

(You might recognize this series as $e^2$.)

### Example 8: Ratio Test with Exponential

Test $\sum_{n=1}^{\infty} \frac{n}{2^n}$ for convergence.

- Ratio:
  $$\left| \frac{a_{n+1}}{a_n} \right| = \frac{n+1}{2^{n+1}} \cdot \frac{2^n}{n} = \frac{n+1}{2n} = \frac{1}{2} \left(1 + \frac{1}{n}\right).$$
- Limit: $\lim_{n \to \infty} \frac{1}{2} \left(1 + \frac{1}{n}\right) = \frac{1}{2} < 1$.
- So the series converges.

### Example 9: Inconclusive Ratio Test

Test $\sum_{n=1}^{\infty} \frac{1}{n}$ using the ratio test.

- Ratio: $\frac{1/(n+1)}{1/n} = \frac{n}{n+1} \to 1$ as $n \to \infty$.
- $L = 1$, so the test is inconclusive. (We already know the harmonic series diverges, but the ratio test doesn't tell us that.)

---

## Absolute vs. Conditional Convergence

When a series has both positive and negative terms, we can consider two different types of convergence.

### Definitions

- A series $\sum a_n$ **converges absolutely** if $\sum |a_n|$ converges.
- A series $\sum a_n$ **converges conditionally** if $\sum a_n$ converges but $\sum |a_n|$ diverges.

### Important Facts

- If a series converges absolutely, then it converges. (Absolute convergence implies convergence.)
- If a series converges conditionally, it converges only because of the cancellation from alternating signs.
- Absolutely convergent series can be rearranged without changing the sum. Conditionally convergent series cannot—rearranging terms can change the sum (or even make it diverge!).

### Example 10: Classifying Convergence

Classify each series as absolutely convergent, conditionally convergent, or divergent.

**(a)** $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^2}$

- Consider $\sum |a_n| = \sum \frac{1}{n^2}$, which converges (p-series, $p=2$).
- So the original series converges absolutely.

**(b)** $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}$

- $\sum |a_n| = \sum \frac{1}{n}$ diverges (harmonic series).
- But the alternating series converges (we saw earlier).
- So this series converges conditionally.

**(c)** $\sum_{n=1}^{\infty} \frac{(-1)^n n}{n+1}$

- Check nth term: $\lim_{n \to \infty} \frac{n}{n+1} = 1 \neq 0$, so by nth term test, the series diverges. (No need to check absolute convergence.)

### Example 11: Testing for Absolute Convergence

Determine if $\sum_{n=1}^{\infty} \frac{\sin n}{n^2}$ converges absolutely, conditionally, or diverges.

- Consider $|a_n| = \frac{|\sin n|}{n^2} \le \frac{1}{n^2}$.
- Since $\sum \frac{1}{n^2}$ converges, by the comparison test, $\sum |a_n|$ converges.
- Therefore, the original series converges absolutely.

---

## Summary

### Convergence Tests at a Glance

| Test | Form | When to Use | Conclusion |
|------|------|-------------|------------|
| **Comparison Test** | $0 < a_n \le b_n$ | Terms are positive and you have a known comparison series | If $\sum b_n$ converges, $\sum a_n$ converges; if $\sum b_n$ diverges and $a_n \ge b_n$, $\sum a_n$ diverges |
| **Limit Comparison** | $\lim a_n/b_n = L$ | Positive terms, comparing to a known series; more flexible than direct comparison | If $0 < L < \infty$, same behavior; if $L=0$ and $\sum b_n$ converges, $\sum a_n$ converges; if $L=\infty$ and $\sum b_n$ diverges, $\sum a_n$ diverges |
| **Alternating Series Test** | $(-1)^{n-1}b_n$ with $b_n > 0$ | Alternating signs | Converges if $b_n$ decreases to 0 |
| **Ratio Test** | $\lim |a_{n+1}/a_n| = L$ | Factorials, exponentials, powers | Converges if $L < 1$, diverges if $L > 1$, inconclusive if $L = 1$ |

### Absolute vs. Conditional Convergence

- **Absolutely convergent**: $\sum |a_n|$ converges → $\sum a_n$ converges.
- **Conditionally convergent**: $\sum a_n$ converges but $\sum |a_n|$ diverges.
- **Divergent**: $\sum a_n$ does not converge.

### Important Notes

- The nth term test is still the first check: if $\lim a_n \neq 0$, the series diverges immediately.
- The ratio test is powerful but inconclusive for many common series (like p-series).
- For alternating series, always check that the terms decrease to zero—both conditions are necessary.

### Common Pitfalls

- Using the comparison test in the wrong direction (e.g., saying a series converges because its terms are less than a divergent series—that tells you nothing).
- Forgetting to check that terms are positive before using comparison tests.
- Applying the alternating series test to non-alternating series.
- Misinterpreting $L=1$ in the ratio test—it does **not** mean convergence; it means you need another test.

---

### Additional Practice Problems

1. Use the comparison test to determine convergence of $\sum_{n=1}^{\infty} \frac{1}{3^n + 2}$.
2. Use the limit comparison test to determine convergence of $\sum_{n=1}^{\infty} \frac{n^2 + 1}{n^4 + 2n + 3}$.
3. Test $\sum_{n=1}^{\infty} \frac{(-1)^n}{\sqrt{n}}$ for convergence.
4. Use the ratio test on $\sum_{n=1}^{\infty} \frac{n!}{10^n}$.
5. Determine whether $\sum_{n=1}^{\infty} \frac{(-1)^{n-1} n}{n^3 + 1}$ converges absolutely, conditionally, or diverges.
6. Apply the ratio test to $\sum_{n=1}^{\infty} \frac{3^n}{n^2}$.
7. Test $\sum_{n=1}^{\infty} \frac{(-1)^n \ln n}{n}$ for convergence.
8. Use the limit comparison test with $b_n = \frac{1}{n}$ to determine convergence of $\sum_{n=1}^{\infty} \frac{1}{\sqrt{n^2 + n}}$.
9. Classify $\sum_{n=1}^{\infty} \frac{\cos(n\pi)}{n^2}$ as absolutely convergent, conditionally convergent, or divergent. (Hint: $\cos(n\pi) = (-1)^n$.)
10. For which values of $p$ does $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^p}$ converge absolutely? Conditionally?

---

### Selected Solutions

1. **$\sum \frac{1}{3^n + 2}$**
   - $\frac{1}{3^n + 2} < \frac{1}{3^n}$ for all $n$.
   - $\sum \frac{1}{3^n}$ is a convergent geometric series ($r=1/3$).
   - By comparison test, the series converges.

2. **$\sum \frac{n^2+1}{n^4+2n+3}$**
   - For large $n$, behaves like $\frac{n^2}{n^4} = \frac{1}{n^2}$. Choose $b_n = \frac{1}{n^2}$.
   - Compute limit:
     $$\lim_{n \to \infty} \frac{(n^2+1)/(n^4+2n+3)}{1/n^2} = \lim_{n \to \infty} \frac{n^2(n^2+1)}{n^4+2n+3} = \lim_{n \to \infty} \frac{n^4 + n^2}{n^4+2n+3} = 1.$$
   - Since $L=1$ and $\sum 1/n^2$ converges, the series converges.

3. **$\sum \frac{(-1)^n}{\sqrt{n}}$**
   - Alternating series with $b_n = \frac{1}{\sqrt{n}}$.
   - $b_n$ decreases to 0, so by AST, the series converges.
   - (It converges conditionally, since $\sum 1/\sqrt{n}$ diverges.)

4. **$\sum \frac{n!}{10^n}$**
   - Ratio test:
     $$\left| \frac{a_{n+1}}{a_n} \right| = \frac{(n+1)!}{10^{n+1}} \cdot \frac{10^n}{n!} = \frac{n+1}{10} \to \infty \text{ as } n \to \infty.$$
   - $L = \infty > 1$, so the series diverges.

5. **$\sum \frac{(-1)^{n-1} n}{n^3+1}$**
   - First, check absolute convergence: $\sum \frac{n}{n^3+1}$. For large $n$, behaves like $1/n^2$, so compare:
     $$\lim_{n \to \infty} \frac{n/(n^3+1)}{1/n^2} = \lim_{n \to \infty} \frac{n^3}{n^3+1} = 1.$$
     Since $\sum 1/n^2$ converges, $\sum |a_n|$ converges.
   - Therefore, the original series converges absolutely.

6. **$\sum \frac{3^n}{n^2}$**
   - Ratio test:
     $$\left| \frac{a_{n+1}}{a_n} \right| = \frac{3^{n+1}}{(n+1)^2} \cdot \frac{n^2}{3^n} = 3 \cdot \frac{n^2}{(n+1)^2} \to 3 \text{ as } n \to \infty.$$
   - $L = 3 > 1$, so the series diverges.

7. **$\sum \frac{(-1)^n \ln n}{n}$**
   - Check alternating series conditions:
     - $b_n = \frac{\ln n}{n}$. For $n \ge 3$, $\ln n$ grows slower than $n$, so $b_n$ eventually decreases? Check derivative of $f(x) = \frac{\ln x}{x}$: $f'(x) = \frac{1 - \ln x}{x^2}$, which is negative for $x > e$, so yes, decreasing for $n \ge 3$.
     - $\lim_{n \to \infty} \frac{\ln n}{n} = 0$ (by growth rates).
   - So by AST, the series converges.
   - For absolute convergence: $\sum \frac{\ln n}{n}$ diverges by comparison to $\sum 1/n$ (since $\ln n > 1$ for $n \ge 3$). So it converges conditionally.

8. **$\sum \frac{1}{\sqrt{n^2 + n}}$**
   - Compare to $b_n = 1/n$ using limit comparison:
     $$\lim_{n \to \infty} \frac{1/\sqrt{n^2+n}}{1/n} = \lim_{n \to \infty} \frac{n}{\sqrt{n^2+n}} = \lim_{n \to \infty} \frac{n}{n\sqrt{1+1/n}} = 1.$$
   - Since $L=1$ and $\sum 1/n$ diverges, the series diverges.

9. **$\sum \frac{\cos(n\pi)}{n^2} = \sum \frac{(-1)^n}{n^2}$**
   - $\sum |a_n| = \sum \frac{1}{n^2}$ converges, so the series converges absolutely.

10. **$\sum \frac{(-1)^{n-1}}{n^p}$**
    - For absolute convergence, we need $\sum \frac{1}{n^p}$ to converge → $p > 1$.
    - For $0 < p \le 1$, the alternating series converges by AST (since $1/n^p$ decreases to 0), but the absolute series diverges. So conditionally convergent for $0 < p \le 1$.
    - For $p \le 0$, terms don't go to zero, so series diverges.

---

You now have a full arsenal of convergence tests. The key is knowing which test to apply based on the form of the series. Practice recognizing patterns: factorials suggest ratio test, rational functions suggest comparison or limit comparison, alternating signs suggest alternating series test. Next, we'll apply these ideas to power series—series where each term is a power of $x$.