# Lesson 10: Linearization and L'Hôpital's Rule

### **10.1 Tangent Line Approximations (Linearization)**

**Definition:**
Given a function $f$ differentiable at $x = a$, the **tangent line approximation** (or **linearization**) of $f$ at $x = a$ is given by:
$$
L(x) = f(a) + f'(a)(x - a)
$$
This is the equation of the tangent line to $f$ at $(a, f(a))$. For values of $x$ near $a$, $L(x)$ provides a good approximation to $f(x)$. This is also called the **local linear approximation** of $f$ at $a$.

**Comments:**

*   **Why Use It?** When a function is difficult to compute directly, or we want a simple approximation near a point, the tangent line provides an easy linear formula.
*   **Accuracy:** The approximation is most accurate near $x = a$. The further $x$ is from $a$, the worse the approximation typically becomes.
*   **Overestimate vs. Underestimate:**
    *   If $f$ is **concave up** near $a$ ($f''(a) > 0$), the tangent line lies below the curve, so $L(x)$ is an **underestimate** of $f(x)$ for $x$ near $a$.
    *   If $f$ is **concave down** near $a$ ($f''(a) < 0$), the tangent line lies above the curve, so $L(x)$ is an **overestimate** of $f(x)$ for $x$ near $a$.
*   **Notation:** Sometimes we write $\Delta x = x - a$ and $\Delta y \approx f'(a) \Delta x$, so $f(a + \Delta x) \approx f(a) + f'(a) \Delta x$.

**Examples:**

1.  **Basic Linearization:** Find the linearization of $f(x) = \sqrt{x}$ at $a = 4$, and use it to approximate $\sqrt{4.1}$.
    *   $f(4) = 2$
    *   $f'(x) = \frac{1}{2\sqrt{x}}$, so $f'(4) = \frac{1}{4}$
    *   $L(x) = 2 + \frac{1}{4}(x - 4)$
    *   To approximate $\sqrt{4.1}$, use $x = 4.1$: $L(4.1) = 2 + \frac{1}{4}(0.1) = 2 + 0.025 = 2.025$
    *   Compare with actual: $\sqrt{4.1} \approx 2.02485$, so the approximation is very close.
2.  **Estimate and Determine Over/Underestimate:** Use a tangent line approximation at $a = 0$ to estimate $e^{0.02}$. Determine if the estimate is an overestimate or underestimate.
    *   $f(x) = e^x$, $a = 0$
    *   $f(0) = 1$, $f'(x) = e^x$, so $f'(0) = 1$
    *   $L(x) = 1 + 1(x - 0) = 1 + x$
    *   Estimate: $e^{0.02} \approx 1 + 0.02 = 1.02$
    *   Since $f''(x) = e^x > 0$, $f$ is concave up everywhere, so the tangent line lies below the curve. Therefore, our estimate is an **underestimate** (the actual value is slightly more than 1.02).
3.  **Approximating Change:** The radius of a sphere is measured as 10 cm with a possible error of ±0.1 cm. Use linear approximation to estimate the maximum possible error in the volume.
    *   Volume: $V(r) = \frac{4}{3}\pi r^3$
    *   $dV = V'(r) \, dr = 4\pi r^2 \, dr$
    *   At $r = 10$, $dr = 0.1$: $dV \approx 4\pi (100)(0.1) = 40\pi$ cm³
    *   So the maximum error in volume is approximately $40\pi$ cm³.

---

### **10.2 L'Hôpital's Rule**

**Definition:**
L'Hôpital's Rule provides a method to evaluate limits that result in **indeterminate forms** of type $\frac{0}{0}$ or $\frac{\infty}{\infty}$.

If $\lim_{x \to c} f(x) = 0$ and $\lim_{x \to c} g(x) = 0$ (or both approach ±∞), and $\lim_{x \to c} \frac{f'(x)}{g'(x)}$ exists or is ±∞, then:
$$
\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}
$$
The rule also applies for one-sided limits and limits at infinity.

**Comments:**

*   **When to Use:** *Only* for indeterminate forms $\frac{0}{0}$ or $\frac{\infty}{\infty}$. Check this first.
*   **How to Apply:** Differentiate the numerator and denominator separately (do not use the quotient rule). Then retake the limit.
*   **Multiple Applications:** Sometimes applying L'Hôpital's Rule once still yields an indeterminate form. If so, you can apply it repeatedly until you get a determinate form.
*   **Other Indeterminate Forms:** Forms like $0 \cdot \infty$, $\infty - \infty$, $0^0$, $\infty^0$, $1^\infty$ can often be rewritten algebraically to become $\frac{0}{0}$ or $\frac{\infty}{\infty}$, then L'Hôpital's Rule can be used.
*   **Caution:** Ensure the conditions are met. The rule does not apply if the limit is not indeterminate. Also, differentiate numerator and denominator separately, not as a quotient.

**Examples:**

1.  **Indeterminate Form $\frac{0}{0}$:** Evaluate $\lim_{x \to 0} \frac{\sin(3x)}{x}$.
    *   Check: as $x \to 0$, numerator → 0, denominator → 0 → indeterminate $\frac{0}{0}$.
    *   Apply L'Hôpital's Rule: differentiate numerator → $3\cos(3x)$, denominator → 1.
    *   New limit: $\lim_{x \to 0} \frac{3\cos(3x)}{1} = 3\cos(0) = 3$.
2.  **Indeterminate Form $\frac{\infty}{\infty}$:** Evaluate $\lim_{x \to \infty} \frac{e^x}{x^2}$.
    *   As $x \to \infty$, numerator → ∞, denominator → ∞ → indeterminate $\frac{\infty}{\infty}$.
    *   Apply L'Hôpital's Rule: differentiate top and bottom → $\frac{e^x}{2x}$.
    *   Still $\frac{\infty}{\infty}$ as $x \to \infty$. Apply again: differentiate → $\frac{e^x}{2}$.
    *   Now $\lim_{x \to \infty} \frac{e^x}{2} = \infty$.
3.  **Multiple Applications:** Evaluate $\lim_{x \to 0} \frac{1 - \cos x}{x^2}$.
    *   Check: $\frac{0}{0}$.
    *   First application: $\lim_{x \to 0} \frac{\sin x}{2x}$. Still $\frac{0}{0}$.
    *   Second application: $\lim_{x \to 0} \frac{\cos x}{2} = \frac{1}{2}$.
4.  **Indeterminate Form $0 \cdot \infty$:** Evaluate $\lim_{x \to 0^+} x \ln x$.
    *   Rewrite as $\lim_{x \to 0^+} \frac{\ln x}{1/x}$. Now as $x \to 0^+$, numerator → -∞, denominator → ∞? Actually $1/x \to \infty$, so we have $\frac{-\infty}{\infty}$, which is still an indeterminate form suitable for L'Hôpital.
    *   Apply L'Hôpital: differentiate numerator → $\frac{1}{x}$, denominator → $-\frac{1}{x^2}$.
    *   New limit: $\lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} (-x) = 0$.
5.  **Indeterminate Form $\infty - \infty$:** Evaluate $\lim_{x \to 0} \left( \frac{1}{x} - \frac{1}{\sin x} \right)$.
    *   Combine into a single fraction: $\frac{\sin x - x}{x \sin x}$. As $x \to 0$, this is $\frac{0}{0}$.
    *   Apply L'Hôpital: $\lim_{x \to 0} \frac{\cos x - 1}{\sin x + x \cos x}$. Still $\frac{0}{0}$ (check: cos0-1=0, sin0+0=0).
    *   Apply again: differentiate numerator → $-\sin x$, denominator → $\cos x + \cos x - x \sin x = 2\cos x - x \sin x$.
    *   Now at $x=0$: numerator → 0, denominator → 2. So limit = 0.

---

### **Lesson 10 Summary**

**Linearization:**

*   Formula: $L(x) = f(a) + f'(a)(x - a)$
*   Use to approximate function values near $a$.
*   Concavity determines if approximation is overestimate or underestimate:
    *   $f''(a) > 0$: concave up → tangent line below curve → underestimate.
    *   $f''(a) < 0$: concave down → tangent line above curve → overestimate.

**L'Hôpital's Rule:**

*   Applies only to limits of the form $\frac{0}{0}$ or $\frac{\infty}{\infty}$.
*   Differentiate numerator and denominator separately, then retake the limit.
*   Can be applied multiple times if necessary.
*   For other indeterminate forms ($0 \cdot \infty$, $\infty - \infty$, etc.), rewrite to get $\frac{0}{0}$ or $\frac{\infty}{\infty}$.

**Common Pitfalls:**

*   Applying L'Hôpital's Rule when the limit is not indeterminate.
*   Forgetting to check conditions before applying.
*   Using the quotient rule instead of differentiating numerator and denominator separately.
*   In linearization, using the approximation too far from $a$.

---

### **Additional Practice Problems**

**Part A: Linearization**

1.  Find the linearization of $f(x) = \ln x$ at $a = 1$. Use it to approximate $\ln(1.1)$.
2.  Use linear approximation to estimate $\sqrt[3]{8.1}$. (Hint: $f(x) = \sqrt[3]{x}$, $a = 8$)
3.  The side length of a cube is measured as 5 cm with an error of ±0.02 cm. Use linear approximation to estimate the maximum error in the volume.
4.  For $f(x) = \cos x$ at $a = \frac{\pi}{2}$, find $L(x)$ and use it to approximate $\cos(1.6)$. Is it an overestimate or underestimate?
5.  Given $f(2) = 5$ and $f'(2) = -3$, approximate $f(2.1)$ using linearization.

**Part B: L'Hôpital's Rule**  
Evaluate each limit using L'Hôpital's Rule where appropriate.

6.  $\lim_{x \to 0} \frac{e^x - 1}{x}$
7.  $\lim_{x \to \infty} \frac{\ln x}{x}$
8.  $\lim_{x \to 0} \frac{\tan x - x}{x^3}$
9.  $\lim_{x \to 1} \frac{x^2 - 1}{\ln x}$
10. $\lim_{x \to 0^+} x^x$ (Hint: Let $y = x^x$, take ln, find limit of ln y, then exponentiate.)
11. $\lim_{x \to 0} \frac{\sin(5x)}{\sin(3x)}$
12. $\lim_{x \to \infty} \frac{x^3}{e^{2x}}$
13. $\lim_{x \to 0} \left( \csc x - \cot x \right)$
14. $\lim_{x \to 0} \frac{5^x - 3^x}{x}$
15. $\lim_{x \to \pi/2} \frac{\cos x}{x - \pi/2}$

**Selected Solutions:**

1.  $f(1)=0$, $f'(x)=\frac{1}{x} \Rightarrow f'(1)=1$, so $L(x)=0+1(x-1)=x-1$. $\ln(1.1)\approx 1.1-1=0.1$. (Actual: ~0.0953)
2.  $f(8)=2$, $f'(x)=\frac{1}{3}x^{-2/3} \Rightarrow f'(8)=\frac{1}{3}(4)^{-1}=\frac{1}{12}$. $L(x)=2+\frac{1}{12}(x-8)$. For $x=8.1$: $2+\frac{1}{12}(0.1)=2+0.00833=2.00833$.
3.  Volume $V=s^3$, $dV=3s^2\,ds$. At $s=5$, $ds=0.02$: $dV\approx 3(25)(0.02)=1.5$ cm³.
4.  $f(\pi/2)=0$, $f'(x)=-\sin x \Rightarrow f'(\pi/2)=-1$. $L(x)=0-1(x-\pi/2)=\frac{\pi}{2}-x$. For $x=1.6$: $L(1.6)=\frac{\pi}{2}-1.6\approx1.5708-1.6=-0.0292$. Since $f''(x)=-\cos x$, at $\pi/2$, $f''(\pi/2)=0$, so we can't determine over/under from second derivative test alone. Actually, near $\pi/2$, cosine is concave down? Check: For $x<\pi/2$, cos is positive? Actually, cos is decreasing and concave up? Let's check: $f''(x)=-\cos x$, for $x$ just less than $\pi/2$, cos is positive, so $f''(x)$ is negative, so concave down. Then tangent line lies above curve? Wait: If concave down, tangent line is above curve. Our approximation is negative, but actual cos(1.6) is about 0.0292? Actually cos(1.6) ≈ -0.0292? No, cos(1.6) is about -0.0292? Actually cos(1.6) = cos(1.6 rad) ≈ -0.0292. So our approximation is exactly the same? Actually cos(1.6) ≈ -0.0291995, so our approximation is quite accurate. Since it's concave down, tangent line is above curve, but here both are negative, so "above" means greater? Actually above means larger y-value. At x=1.6, actual cos is -0.0292, our approximation is -0.0292 (same to 4 decimals), so it's very close. Possibly the second derivative is zero at the point, so we need to look at higher derivatives.
5.  $L(x)=5-3(x-2)$, so $f(2.1)\approx 5-3(0.1)=4.7$.
6.  $\frac{0}{0}$. Differentiate: $\frac{e^x}{1} \to 1$.
7.  $\frac{\infty}{\infty}$. Differentiate: $\frac{1/x}{1} = \frac{1}{x} \to 0$.
8.  $\frac{0}{0}$. First: $\frac{\sec^2 x - 1}{3x^2}$. Use identity: $\sec^2 x - 1 = \tan^2 x$. So limit = $\lim_{x\to0} \frac{\tan^2 x}{3x^2} = \frac{1}{3} \lim_{x\to0} \left(\frac{\tan x}{x}\right)^2 = \frac{1}{3}(1)^2 = \frac{1}{3}$.
9.  $\frac{0}{0}$. Differentiate: $\frac{2x}{1/x} = 2x^2 \to 2$ as $x\to1$.
10. Let $y=x^x$, then $\ln y = x \ln x$. Limit as $x\to0^+$ of $x\ln x = 0$ (from example 4). So $\lim \ln y = 0$, thus $\lim y = e^0 = 1$.
11. $\frac{0}{0}$. L'Hôpital: $\frac{5\cos(5x)}{3\cos(3x)} \to \frac{5}{3}$.
12. $\frac{\infty}{\infty}$. Apply three times: first → $\frac{3x^2}{2e^{2x}}$, second → $\frac{6x}{4e^{2x}}$, third → $\frac{6}{8e^{2x}} \to 0$.
13. Rewrite: $\csc x - \cot x = \frac{1-\cos x}{\sin x}$. This is $\frac{0}{0}$. L'Hôpital: $\frac{\sin x}{\cos x} = \tan x \to 0$ as $x\to0$.
14. $\frac{0}{0}$. L'Hôpital: $\frac{5^x \ln 5 - 3^x \ln 3}{1} \to \ln 5 - \ln 3 = \ln(5/3)$.
15. $\frac{0}{0}$. L'Hôpital: $\frac{-\sin x}{1} \to -1$ as $x\to\pi/2$.