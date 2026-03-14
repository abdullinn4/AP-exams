# BC-Only Applications (Arc Length)

Welcome back! You've already used definite integrals to find areas between curves and volumes of solids. Now we're going to use integration to measure something new: **the length of a curve**. Imagine a piece of string laid along a curvy path—how long is it? If the curve is the graph of a function, we can calculate its exact length using an integral.

This is a BC-only topic, so if you're studying for the AB exam, you won't see it. But for BC students, arc length is an important application of integration that appears on the exam.

---

## **Arc Length of a Function y = f(x)**

### The Intuition

How do we find the length of a curve? Think back to how we found areas—we sliced the region into thin rectangles. For arc length, we slice the curve into tiny pieces and approximate each piece as a straight line segment. Then we add up all those tiny lengths.

Consider a small piece of the curve from $x$ to $x + dx$. Over this tiny horizontal distance, the vertical change is $dy$. The actual curve length along this tiny piece is approximately the length of the hypotenuse of a right triangle with legs $dx$ and $dy$:

$$ds \approx \sqrt{(dx)^2 + (dy)^2}$$

Factor out $dx$:

$$ds = \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx$$

Then the total arc length from $x = a$ to $x = b$ is the sum of all these tiny pieces:

$$L = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx$$

### The Formula

If $f$ is a smooth function (continuous derivative) on $[a, b]$, then the length of the curve $y = f(x)$ from $x = a$ to $x = b$ is:

$$L = \int_a^b \sqrt{1 + [f'(x)]^2} \, dx$$

### What Does "Smooth" Mean?

For the arc length formula to work, $f'$ must be continuous on $[a, b]$. This ensures the curve doesn't have any sharp corners or cusps where the length might be problematic.

### Step-by-Step Process

1. Find $f'(x)$.
2. Compute $1 + [f'(x)]^2$.
3. Set up the definite integral $\int_a^b \sqrt{1 + [f'(x)]^2} \, dx$.
4. Evaluate the integral (this often requires special techniques or a calculator).

### Example 1: Basic Arc Length

Find the length of the curve $y = \frac{2}{3}x^{3/2}$ from $x = 0$ to $x = 3$.

- **Step 1:** Find $f'(x)$.
  $$f'(x) = \frac{2}{3} \cdot \frac{3}{2} x^{1/2} = x^{1/2} = \sqrt{x}$$

- **Step 2:** Compute $1 + [f'(x)]^2$.
  $$1 + (\sqrt{x})^2 = 1 + x$$

- **Step 3:** Set up the integral.
  $$L = \int_0^3 \sqrt{1 + x} \, dx$$

- **Step 4:** Evaluate.
  Let $u = 1 + x$, $du = dx$. When $x=0$, $u=1$; when $x=3$, $u=4$.
  $$L = \int_1^4 \sqrt{u} \, du = \int_1^4 u^{1/2} \, du = \left[ \frac{2}{3} u^{3/2} \right]_1^4 = \frac{2}{3} (4^{3/2} - 1^{3/2}) = \frac{2}{3} (8 - 1) = \frac{2}{3} \cdot 7 = \frac{14}{3}$$

So the curve length is $\frac{14}{3}$ units.

### Example 2: Arc Length with a Bit More Algebra

Find the length of the curve $y = \ln(\cos x)$ from $x = 0$ to $x = \frac{\pi}{4}$.

- **Step 1:** Find $f'(x)$.
  $$f'(x) = \frac{-\sin x}{\cos x} = -\tan x$$

- **Step 2:** Compute $1 + [f'(x)]^2$.
  $$1 + (-\tan x)^2 = 1 + \tan^2 x = \sec^2 x$$

- **Step 3:** Set up the integral.
  $$L = \int_0^{\pi/4} \sqrt{\sec^2 x} \, dx = \int_0^{\pi/4} \sec x \, dx$$
  (Note: $\sec x > 0$ on $[0, \pi/4]$, so $\sqrt{\sec^2 x} = \sec x$.)

- **Step 4:** Evaluate.
  $$\int \sec x \, dx = \ln|\sec x + \tan x| + C$$
  So:
  $$L = \left[ \ln|\sec x + \tan x| \right]_0^{\pi/4} = \ln(\sec\frac{\pi}{4} + \tan\frac{\pi}{4}) - \ln(\sec 0 + \tan 0)$$
  $$\sec\frac{\pi}{4} = \sqrt{2}, \quad \tan\frac{\pi}{4} = 1, \quad \sec 0 = 1, \quad \tan 0 = 0$$
  $$L = \ln(\sqrt{2} + 1) - \ln(1 + 0) = \ln(\sqrt{2} + 1)$$

### Example 3: Arc Length Where the Integral Requires a Calculator

Find the length of the curve $y = \sin x$ from $x = 0$ to $x = \pi$.

- $f'(x) = \cos x$
- $1 + [f'(x)]^2 = 1 + \cos^2 x$
- Set up: $L = \int_0^\pi \sqrt{1 + \cos^2 x} \, dx$

This integral doesn't have an elementary antiderivative. On the BC exam, you'd be expected to set it up correctly and then use your calculator to evaluate it.

Using a calculator, $\int_0^\pi \sqrt{1 + \cos^2 x} \, dx \approx 3.820$.

---

## **Arc Length for Curves Defined as x = g(y)**

Sometimes it's easier to express a curve as $x$ in terms of $y$. The formula is analogous:

$$L = \int_c^d \sqrt{1 + \left(\frac{dx}{dy}\right)^2} \, dy$$

Where $y$ runs from $c$ to $d$.

### Example 4: Arc Length with Respect to y

Find the length of the curve $x = \frac{1}{3}y^3 + \frac{1}{4y}$ from $y = 1$ to $y = 3$.

- **Step 1:** Find $\frac{dx}{dy}$.
  $$\frac{dx}{dy} = y^2 - \frac{1}{4y^2}$$

- **Step 2:** Compute $1 + \left(\frac{dx}{dy}\right)^2$.
  This might look messy, but notice:
  $$1 + \left(y^2 - \frac{1}{4y^2}\right)^2 = 1 + y^4 - \frac{1}{2} + \frac{1}{16y^4} = y^4 + \frac{1}{2} + \frac{1}{16y^4}$$
  That's actually $(y^2 + \frac{1}{4y^2})^2$! Check: $(y^2 + \frac{1}{4y^2})^2 = y^4 + 2 \cdot y^2 \cdot \frac{1}{4y^2} + \frac{1}{16y^4} = y^4 + \frac{1}{2} + \frac{1}{16y^4}$. Yes!

- **Step 3:** So $\sqrt{1 + \left(\frac{dx}{dy}\right)^2} = y^2 + \frac{1}{4y^2}$ (positive for $y>0$).

- **Step 4:** Integrate.
  $$L = \int_1^3 \left(y^2 + \frac{1}{4y^2}\right) dy = \int_1^3 \left(y^2 + \frac{1}{4}y^{-2}\right) dy$$
  $$= \left[ \frac{y^3}{3} + \frac{1}{4} \cdot \frac{y^{-1}}{-1} \right]_1^3 = \left[ \frac{y^3}{3} - \frac{1}{4y} \right]_1^3$$
  $$= \left( \frac{27}{3} - \frac{1}{12} \right) - \left( \frac{1}{3} - \frac{1}{4} \right) = \left( 9 - \frac{1}{12} \right) - \left( \frac{4}{12} - \frac{3}{12} \right)$$
  $$= 9 - \frac{1}{12} - \frac{1}{12} = 9 - \frac{2}{12} = 9 - \frac{1}{6} = \frac{54}{6} - \frac{1}{6} = \frac{53}{6}$$

---

## **Distance Traveled vs. Arc Length**

Here's an important connection: If a particle moves along a curve, the **distance it travels** is exactly the arc length of its path. But if the particle's motion is given by parametric equations, we have a slightly different formula (which we'll cover in Lesson 17 on parametric functions).

For now, just remember: arc length is the geometric length of a curve. If a particle follows that curve exactly, the distance it travels equals the arc length.

---

## Common Pitfalls

1. **Forgetting to square $f'(x)$.** The formula is $\sqrt{1 + [f'(x)]^2}$, not $\sqrt{1 + f'(x)}$.
2. **Not simplifying before integrating.** Sometimes $1 + [f'(x)]^2$ simplifies nicely (like to $\sec^2 x$ or a perfect square). Look for these opportunities!
3. **Using the wrong variable.** Make sure your limits of integration match the variable you're integrating with respect to.
4. **Assuming every arc length integral has a nice antiderivative.** Many don't—be prepared to use a calculator.

---

## Summary

### Arc Length Formulas

| Curve form | Arc Length Formula |
|------------|-------------------|
| $y = f(x)$, $a \le x \le b$ | $L = \displaystyle \int_a^b \sqrt{1 + [f'(x)]^2} \, dx$ |
| $x = g(y)$, $c \le y \le d$ | $L = \displaystyle \int_c^d \sqrt{1 + [g'(y)]^2} \, dy$ |

### Key Points

- The integrand $\sqrt{1 + [f'(x)]^2}$ represents a tiny piece of arc length $ds$.
- The function must be smooth (continuous derivative) on the interval.
- Many arc length integrals require numerical approximation (calculator).
- Arc length = distance traveled if a particle follows the curve exactly.

---

### Additional BC-Only Practice Problems

1. Find the length of the curve $y = \frac{1}{3}(x^2 + 2)^{3/2}$ from $x = 0$ to $x = 3$.
2. Find the length of the curve $y = \ln(\sec x)$ from $x = 0$ to $x = \frac{\pi}{3}$.
3. Find the length of the curve $x = \frac{y^4}{4} + \frac{1}{8y^2}$ from $y = 1$ to $y = 2$.
4. Set up (but do not evaluate) the integral for the length of $y = e^x$ from $x = 0$ to $x = 1$.
5. Find the length of $y = \frac{2}{3}(x-1)^{3/2}$ from $x = 1$ to $x = 4$.
6. A curve is defined by $y = \cosh x = \frac{e^x + e^{-x}}{2}$ from $x = -1$ to $x = 1$. Find its length. (Hint: Recall that $\frac{d}{dx}\cosh x = \sinh x$, and $1 + \sinh^2 x = \cosh^2 x$.)
7. Find the length of $y = \frac{x^3}{6} + \frac{1}{2x}$ from $x = 1$ to $x = 2$.

---

### Selected Solutions

1. **$y = \frac{1}{3}(x^2 + 2)^{3/2}$, $x=0$ to $x=3$**
   - $f'(x) = \frac{1}{3} \cdot \frac{3}{2}(x^2 + 2)^{1/2} \cdot 2x = x\sqrt{x^2 + 2}$
   - $1 + [f'(x)]^2 = 1 + x^2(x^2 + 2) = 1 + x^4 + 2x^2 = x^4 + 2x^2 + 1 = (x^2 + 1)^2$
   - $\sqrt{1 + [f'(x)]^2} = x^2 + 1$ (positive)
   - $L = \int_0^3 (x^2 + 1) dx = \left[ \frac{x^3}{3} + x \right]_0^3 = (9 + 3) - 0 = 12$

2. **$y = \ln(\sec x)$, $x=0$ to $x=\pi/3$**
   - $f'(x) = \frac{\sec x \tan x}{\sec x} = \tan x$
   - $1 + \tan^2 x = \sec^2 x$
   - $L = \int_0^{\pi/3} \sec x \, dx = \left[ \ln|\sec x + \tan x| \right]_0^{\pi/3} = \ln(2 + \sqrt{3}) - \ln(1 + 0) = \ln(2 + \sqrt{3})$

3. **$x = \frac{y^4}{4} + \frac{1}{8y^2}$, $y=1$ to $y=2$**
   - $\frac{dx}{dy} = y^3 - \frac{1}{4y^3}$
   - $1 + \left(\frac{dx}{dy}\right)^2 = 1 + y^6 - \frac{1}{2} + \frac{1}{16y^6} = y^6 + \frac{1}{2} + \frac{1}{16y^6} = \left(y^3 + \frac{1}{4y^3}\right)^2$
   - $\sqrt{1 + \left(\frac{dx}{dy}\right)^2} = y^3 + \frac{1}{4y^3}$ (positive for $y>0$)
   - $L = \int_1^2 \left(y^3 + \frac{1}{4}y^{-3}\right) dy = \left[ \frac{y^4}{4} + \frac{1}{4} \cdot \frac{y^{-2}}{-2} \right]_1^2 = \left[ \frac{y^4}{4} - \frac{1}{8y^2} \right]_1^2$
   - $= \left( \frac{16}{4} - \frac{1}{32} \right) - \left( \frac{1}{4} - \frac{1}{8} \right) = \left( 4 - \frac{1}{32} \right) - \left( \frac{2}{8} - \frac{1}{8} \right) = \left( \frac{128}{32} - \frac{1}{32} \right) - \frac{1}{8}$
   - $= \frac{127}{32} - \frac{4}{32} = \frac{123}{32}$

4. **$y = e^x$, $x=0$ to $x=1$**
   - $f'(x) = e^x$
   - $L = \int_0^1 \sqrt{1 + e^{2x}} \, dx$ (set up only—requires calculator or trig substitution)

5. **$y = \frac{2}{3}(x-1)^{3/2}$, $x=1$ to $x=4$**
   - $f'(x) = \frac{2}{3} \cdot \frac{3}{2}(x-1)^{1/2} = \sqrt{x-1}$
   - $1 + [f'(x)]^2 = 1 + (x-1) = x$
   - $L = \int_1^4 \sqrt{x} \, dx = \int_1^4 x^{1/2} dx = \left[ \frac{2}{3} x^{3/2} \right]_1^4 = \frac{2}{3}(8 - 1) = \frac{14}{3}$

6. **$y = \cosh x$, $x=-1$ to $x=1$**
   - $f'(x) = \sinh x$
   - $1 + \sinh^2 x = \cosh^2 x$
   - $L = \int_{-1}^1 \cosh x \, dx = \left[ \sinh x \right]_{-1}^1 = \sinh 1 - \sinh(-1) = \sinh 1 + \sinh 1 = 2\sinh 1$
   - Since $\sinh 1 = \frac{e - e^{-1}}{2}$, $L = 2 \cdot \frac{e - e^{-1}}{2} = e - e^{-1}$

7. **$y = \frac{x^3}{6} + \frac{1}{2x}$, $x=1$ to $x=2$**
   - $f'(x) = \frac{3x^2}{6} - \frac{1}{2x^2} = \frac{x^2}{2} - \frac{1}{2x^2} = \frac{x^4 - 1}{2x^2}$
   - $1 + [f'(x)]^2 = 1 + \frac{x^8 - 2x^4 + 1}{4x^4} = \frac{4x^4 + x^8 - 2x^4 + 1}{4x^4} = \frac{x^8 + 2x^4 + 1}{4x^4} = \frac{(x^4 + 1)^2}{4x^4}$
   - $\sqrt{1 + [f'(x)]^2} = \frac{x^4 + 1}{2x^2} = \frac{x^2}{2} + \frac{1}{2x^2}$
   - $L = \int_1^2 \left( \frac{x^2}{2} + \frac{1}{2}x^{-2} \right) dx = \frac{1}{2} \int_1^2 \left( x^2 + x^{-2} \right) dx = \frac{1}{2} \left[ \frac{x^3}{3} - x^{-1} \right]_1^2$
   - $= \frac{1}{2} \left[ \left( \frac{8}{3} - \frac{1}{2} \right) - \left( \frac{1}{3} - 1 \right) \right] = \frac{1}{2} \left[ \left( \frac{16}{6} - \frac{3}{6} \right) - \left( \frac{2}{6} - \frac{6}{6} \right) \right] = \frac{1}{2} \left[ \frac{13}{6} - \left( -\frac{4}{6} \right) \right] = \frac{1}{2} \cdot \frac{17}{6} = \frac{17}{12}$

---

Arc length is a beautiful application of integration—it's like measuring a curve with an infinite number of tiny rulers. On the BC exam, you'll need to set up these integrals correctly and sometimes evaluate them with a calculator. Practice until the formula feels natural! Next, we'll explore parametric and polar functions, where arc length takes on even more interesting forms.