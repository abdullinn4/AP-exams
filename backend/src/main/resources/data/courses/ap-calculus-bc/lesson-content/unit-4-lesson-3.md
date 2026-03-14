# Linearization and L'Hôpital's Rule

We've covered a lot of ground with derivatives—rates of change, motion, related rates. Now we're going to look at two powerful applications that might seem unrelated at first, but they both rely on the same fundamental idea: using derivatives to understand behavior near a point.

First, **linearization**—using the tangent line to approximate function values. Sometimes you don't need an exact value; a really good approximation is good enough. And the tangent line gives you exactly that.

Second, **L'Hôpital's Rule**—a slick trick for evaluating limits that would otherwise leave you scratching your head. Remember all those indeterminate forms like 0/0 that we ran into back in Unit 1? L'Hôpital's Rule is the shortcut you wished you had then.

Let's dive in.

---

## **Tangent Line Approximations (Linearization)**

Remember back in Lesson 1 when we first started talking about limits? We had this idea that as you zoom in close enough to a point on a curve, the curve starts to look like its tangent line. Well, that's not just a cool visual—it's actually useful.

If you need to estimate a function value near a point where you know everything about the function, why not just use the tangent line? It's linear, it's simple, and it's a really good approximation close to that point.

### **Definition:**

Given a function $f$ differentiable at $x = a$, the **tangent line approximation** (or **linearization**) of $f$ at $x = a$ is given by:

$$
L(x) = f(a) + f'(a)(x - a)
$$

This is the equation of the tangent line to $f$ at $(a, f(a))$. For values of $x$ near $a$, $L(x)$ provides a good approximation to $f(x)$. This is also called the **local linear approximation** of $f$ at $a$.

**Why Use It?**

Sometimes functions are complicated. Square roots, logs, trig functions—they're not always easy to compute in your head. But if you need a quick estimate near a point where you know the value and the slope, the tangent line gives you a simple linear formula that's easy to evaluate.

**How Good Is It?**

The approximation is most accurate near $x = a$. The further $x$ is from $a$, the worse the approximation typically becomes. Think of it this way: the tangent line is perfect right at the point of tangency, and then it gradually drifts away from the curve as you move farther.

**Overestimate or Underestimate?**

Here's where the second derivative comes in handy:

- If $f$ is **concave up** near $a$ ($f''(a) > 0$), the tangent line lies *below* the curve. So $L(x)$ is an **underestimate** of $f(x)$ for $x$ near $a$ (except at $x=a$ where they're equal).
- If $f$ is **concave down** near $a$ ($f''(a) < 0$), the tangent line lies *above* the curve. So $L(x)$ is an **overestimate** of $f(x)$ for $x$ near $a$.

Makes sense, right? If the curve is bending upward, the tangent line underneath will give values that are a little too low. If it's bending downward, the tangent line above gives values that are a little too high.

**Notation:**

Sometimes you'll see this written with $\Delta x = x - a$. Then:

$$
\Delta y \approx f'(a) \Delta x
$$

and

$$
f(a + \Delta x) \approx f(a) + f'(a) \Delta x
$$

It's the same idea—just emphasizing the change.

**Example 1: Basic Linearization**

Find the linearization of $f(x) = \sqrt{x}$ at $a = 4$, and use it to approximate $\sqrt{4.1}$.

- $f(4) = \sqrt{4} = 2$
- $f'(x) = \frac{1}{2\sqrt{x}}$, so $f'(4) = \frac{1}{2\sqrt{4}} = \frac{1}{4}$
- Therefore: $L(x) = 2 + \frac{1}{4}(x - 4)$

Now to approximate $\sqrt{4.1}$, we use $x = 4.1$:

$$L(4.1) = 2 + \frac{1}{4}(0.1) = 2 + 0.025 = 2.025$$

How close is that? The actual value $\sqrt{4.1} \approx 2.02485$. Our approximation is off by about 0.00015—pretty amazing for such a simple calculation!

**Example 2: Estimate and Determine Over/Underestimate**

Use a tangent line approximation at $a = 0$ to estimate $e^{0.02}$. Determine if the estimate is an overestimate or underestimate.

- $f(x) = e^x$, $a = 0$
- $f(0) = 1$, $f'(x) = e^x$, so $f'(0) = 1$
- $L(x) = 1 + 1(x - 0) = 1 + x$

Estimate: $e^{0.02} \approx 1 + 0.02 = 1.02$

Now, is this an overestimate or underestimate? Check the second derivative: $f''(x) = e^x > 0$ for all $x$. That means $f$ is concave up everywhere. So the tangent line lies *below* the curve. Therefore, our estimate of 1.02 is an **underestimate**—the actual value is slightly more.

(Indeed, $e^{0.02} \approx 1.020201$, so our underestimate is off by about 0.000201.)

**Example 3: Approximating Change**

The radius of a sphere is measured as 10 cm with a possible error of ±0.1 cm. Use linear approximation to estimate the maximum possible error in the volume.

- Volume: $V(r) = \frac{4}{3}\pi r^3$
- $dV = V'(r) \, dr = 4\pi r^2 \, dr$

At $r = 10$, with $dr = 0.1$ (the possible error in radius):

$$dV \approx 4\pi (10)^2 (0.1) = 4\pi (100)(0.1) = 40\pi \text{ cm}^3$$

So the maximum possible error in volume is approximately $40\pi \approx 125.66$ cm³.

Notice: we didn't need to compute the full volume with the error and subtract—the linear approximation gave us a quick estimate of the error directly.

---

## **L'Hôpital's Rule**

Remember back in Unit 1 when we had limits like $\displaystyle \lim_{x \to 0} \frac{\sin x}{x}$? We had to do some clever algebraic manipulation or rely on the squeeze theorem. Well, there's a faster way—a really elegant tool that connects limits to derivatives.

**Definition:**

L'Hôpital's Rule provides a method to evaluate limits that result in **indeterminate forms** of type $\frac{0}{0}$ or $\frac{\infty}{\infty}$.

If $\displaystyle \lim_{x \to c} f(x) = 0$ and $\displaystyle \lim_{x \to c} g(x) = 0$ (or both approach ±∞), and $\displaystyle \lim_{x \to c} \frac{f'(x)}{g'(x)}$ exists or is ±∞, then:

$$
\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}
$$

The rule also applies for one-sided limits and limits at infinity.

**Important: Check First!**

L'Hôpital's Rule *only* applies to limits that are in the form $\frac{0}{0}$ or $\frac{\infty}{\infty}$. If you try to use it on a limit that isn't indeterminate, you'll get nonsense. So always check the form before applying.

**How to Apply:**

1. Verify the limit is indeterminate ($\frac{0}{0}$ or $\frac{\infty}{\infty}$).
2. Differentiate the numerator and denominator *separately*—do NOT use the quotient rule.
3. Take the limit of this new fraction.
4. If the result is still indeterminate, apply L'Hôpital's Rule again. Repeat as needed.

**Example 1: Indeterminate Form $\frac{0}{0}$**

Evaluate $\displaystyle \lim_{x \to 0} \frac{\sin(3x)}{x}$.

- Check: as $x \to 0$, numerator $\sin(3x) \to 0$, denominator $x \to 0$ → indeterminate $\frac{0}{0}$.
- Apply L'Hôpital's Rule: differentiate numerator → $3\cos(3x)$, differentiate denominator → $1$.
- New limit: $\displaystyle \lim_{x \to 0} \frac{3\cos(3x)}{1} = 3\cos(0) = 3$.

Done! Much faster than the old squeeze theorem approach.

**Example 2: Indeterminate Form $\frac{\infty}{\infty}$**

Evaluate $\displaystyle \lim_{x \to \infty} \frac{e^x}{x^2}$.

- As $x \to \infty$, numerator $e^x \to \infty$, denominator $x^2 \to \infty$ → indeterminate $\frac{\infty}{\infty}$.
- Apply L'Hôpital's Rule: differentiate top → $e^x$, bottom → $2x$.
- New limit: $\displaystyle \lim_{x \to \infty} \frac{e^x}{2x}$. Still $\frac{\infty}{\infty}$.
- Apply again: differentiate top → $e^x$, bottom → $2$.
- Now $\displaystyle \lim_{x \to \infty} \frac{e^x}{2} = \infty$.

So the limit is $\infty$—the exponential function eventually outgrows any polynomial.

**Example 3: Multiple Applications**

Evaluate $\displaystyle \lim_{x \to 0} \frac{1 - \cos x}{x^2}$.

- Check: as $x \to 0$, numerator → $1 - 1 = 0$, denominator → $0$ → $\frac{0}{0}$.
- First application: differentiate top → $\sin x$, bottom → $2x$.
- New limit: $\displaystyle \lim_{x \to 0} \frac{\sin x}{2x}$. Still $\frac{0}{0}$.
- Second application: differentiate top → $\cos x$, bottom → $2$.
- Now $\displaystyle \lim_{x \to 0} \frac{\cos x}{2} = \frac{1}{2}$.

So the limit is $\frac{1}{2}$.

**Example 4: Indeterminate Form $0 \cdot \infty$**

Sometimes limits don't start as fractions. You might have something like $0 \cdot \infty$. The trick is to rewrite it as a fraction so you can apply L'Hôpital's Rule.

Evaluate $\displaystyle \lim_{x \to 0^+} x \ln x$.

- As $x \to 0^+$, $x \to 0$ and $\ln x \to -\infty$. So we have $0 \cdot (-\infty)$—indeterminate.
- Rewrite as a fraction: $\displaystyle \lim_{x \to 0^+} \frac{\ln x}{1/x}$.
- Now as $x \to 0^+$, numerator $\ln x \to -\infty$, denominator $1/x \to \infty$. So we have $\frac{-\infty}{\infty}$—still indeterminate, but now in a form where we can apply L'Hôpital.
- Apply L'Hôpital: differentiate numerator → $\frac{1}{x}$, differentiate denominator → $-\frac{1}{x^2}$.
- New limit: $\displaystyle \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} \left( -x \right) = 0$.

So $\displaystyle \lim_{x \to 0^+} x \ln x = 0$.

**Example 5: Indeterminate Form $\infty - \infty$**

Another common form. The trick is to combine into a single fraction.

Evaluate $\displaystyle \lim_{x \to 0} \left( \frac{1}{x} - \frac{1}{\sin x} \right)$.

- As $x \to 0$, both terms blow up, so we have $\infty - \infty$—indeterminate.
- Combine into one fraction: $\displaystyle \frac{\sin x - x}{x \sin x}$.
- Now as $x \to 0$, numerator $\sin x - x \to 0$, denominator $x \sin x \to 0$. So we have $\frac{0}{0}$.
- Apply L'Hôpital: differentiate numerator → $\cos x - 1$, differentiate denominator → $\sin x + x \cos x$ (using product rule on $x \sin x$).
- New limit: $\displaystyle \lim_{x \to 0} \frac{\cos x - 1}{\sin x + x \cos x}$. Still $\frac{0}{0}$ (check: $\cos0-1=0$, $\sin0+0=0$).
- Apply L'Hôpital again: differentiate numerator → $-\sin x$, differentiate denominator → $\cos x + \cos x - x \sin x = 2\cos x - x \sin x$.
- Now at $x=0$: numerator → $0$, denominator → $2$. So the limit is $0$.

Therefore, $\displaystyle \lim_{x \to 0} \left( \frac{1}{x} - \frac{1}{\sin x} \right) = 0$.

---


Linearization and L'Hôpital's Rule might seem like different topics, but they're both about using derivatives to understand function behavior near a point. Linearization gives us a simple linear model; L'Hôpital's Rule gives us a way to compare rates of growth. Together, they're powerful tools in your calculus toolkit.

Next up, we'll use these ideas to tackle optimization problems—finding maxima and minima. But for now, practice these techniques until they feel natural.