# Parametric Equations

So far, we've dealt with functions expressed as $y = f(x)$. But not all curves can be described that way—think of a circle, a looping curve, or the path of a particle moving in the plane. Sometimes it's easier to describe both $x$ and $y$ in terms of a third variable, usually $t$ (time or a parameter). These are **parametric equations**, and they open up a whole new world of curves.

In this lesson, we'll learn how to work with parametric equations: how to find slopes, how to compute second derivatives, and how to find the length of a parametrically defined curve. These are BC-only topics, so if you're aiming for the BC exam, pay close attention!

---

## Defining and Differentiating Parametric Equations

### What Are Parametric Equations?

A **parametric curve** is defined by a pair of equations:
$$x = f(t), \quad y = g(t)$$
where $t$ is the **parameter** (often time). As $t$ varies over an interval $I$, the point $(x, y)$ traces out a curve in the plane.

**Example:** The unit circle can be written as:
$$x = \cos t, \quad y = \sin t, \quad 0 \le t \le 2\pi$$

### Derivatives of Parametric Equations

We want to find the slope of the tangent line $\frac{dy}{dx}$ at a point on the curve. Since $x$ and $y$ are both functions of $t$, we use the chain rule:
$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{y'(t)}{x'(t)}, \quad \text{provided } x'(t) \neq 0$$

This makes sense: a small change in $t$ causes changes in both $x$ and $y$, and the slope is the ratio of those changes.

**Important:** The derivative is expressed in terms of $t$, not $x$. That's fine—we can evaluate it at any $t$ to get the slope at the corresponding point.

### Example 1: Basic Slope Calculation

Find $\frac{dy}{dx}$ for the curve defined by $x = t^2 + 1$, $y = t^3 - t$.

- Compute derivatives: $x'(t) = 2t$, $y'(t) = 3t^2 - 1$.
- Then $\frac{dy}{dx} = \frac{3t^2 - 1}{2t}$.

At $t = 2$, the slope is $\frac{3(4)-1}{4} = \frac{12-1}{4} = \frac{11}{4}$.

### Example 2: Tangent Line

Find the equation of the tangent line to the curve $x = \cos t$, $y = \sin t$ at $t = \frac{\pi}{4}$.

- $x'(t) = -\sin t$, $y'(t) = \cos t$.
- $\frac{dy}{dx} = \frac{\cos t}{-\sin t} = -\cot t$.
- At $t = \frac{\pi}{4}$, slope $= -\cot\frac{\pi}{4} = -1$.
- Point: $(x, y) = (\cos\frac{\pi}{4}, \sin\frac{\pi}{4}) = \left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$.
- Tangent line: $y - \frac{\sqrt{2}}{2} = -1\left(x - \frac{\sqrt{2}}{2}\right)$.

### Example 3: Horizontal and Vertical Tangents

For the curve $x = t^2 - 4$, $y = t^3 - 3t$, find where the tangent is horizontal or vertical.

- $x'(t) = 2t$, $y'(t) = 3t^2 - 3 = 3(t^2 - 1)$.
- **Horizontal tangent** occurs when $\frac{dy}{dx} = 0$ → $y'(t) = 0$ and $x'(t) \neq 0$.
  $3(t^2 - 1) = 0$ → $t = \pm 1$.
  Check $x'(t)$: at $t=1$, $x'=2 \neq 0$; at $t=-1$, $x'=-2 \neq 0$.
  Points: $t=1$ → $( -3, -2)$; $t=-1$ → $(-3, 2)$.
- **Vertical tangent** occurs when $\frac{dy}{dx}$ is undefined → $x'(t) = 0$ and $y'(t) \neq 0$.
  $2t = 0$ → $t = 0$. Then $y'(0) = -3 \neq 0$.
  Point: $t=0$ → $(-4, 0)$.

---

## Second Derivatives of Parametric Equations

Sometimes we need the second derivative $\frac{d^2y}{dx^2}$ to analyze concavity. We can't just differentiate $\frac{dy}{dx}$ with respect to $x$ directly because $\frac{dy}{dx}$ is expressed in terms of $t$. But we can use the chain rule again:

$$\frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}$$

In words: differentiate $\frac{dy}{dx}$ with respect to $t$, then divide by $x'(t)$.

### Example 4: Second Derivative

Find $\frac{d^2y}{dx^2}$ for the curve $x = t^2$, $y = t^3$.

- $x'(t) = 2t$, $y'(t) = 3t^2$, so $\frac{dy}{dx} = \frac{3t^2}{2t} = \frac{3t}{2}$ (for $t \neq 0$).
- Differentiate $\frac{dy}{dx}$ with respect to $t$: $\frac{d}{dt}\left(\frac{3t}{2}\right) = \frac{3}{2}$.
- Then $\frac{d^2y}{dx^2} = \frac{3/2}{2t} = \frac{3}{4t}$.

We can evaluate this at any $t$ (except $t=0$) to find concavity. For example, at $t=2$, $\frac{d^2y}{dx^2} = \frac{3}{8} > 0$, so the curve is concave up at the corresponding point $(4, 8)$.

### Example 5: Using Second Derivative to Determine Concavity

For the curve $x = e^t$, $y = te^t$, find $\frac{d^2y}{dx^2}$ and determine concavity at $t=0$.

- $x'(t) = e^t$, $y'(t) = e^t + te^t = e^t(1+t)$.
- $\frac{dy}{dx} = \frac{e^t(1+t)}{e^t} = 1+t$.
- Differentiate $\frac{dy}{dx}$ with respect to $t$: $\frac{d}{dt}(1+t) = 1$.
- $\frac{d^2y}{dx^2} = \frac{1}{e^t} = e^{-t}$.
- At $t=0$, $\frac{d^2y}{dx^2} = 1 > 0$, so concave up.

---

## Arc Length for Parametric Curves

Just as we found the length of a curve $y = f(x)$ using $ds = \sqrt{1 + (dy/dx)^2}\,dx$, for a parametric curve we have a similar idea. A tiny piece of the curve corresponds to a change $dt$, and the horizontal and vertical changes are $dx$ and $dy$. The length of that tiny piece is:
$$ds = \sqrt{(dx)^2 + (dy)^2} = \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\, dt$$

Therefore, the total arc length from $t = a$ to $t = b$ is:
$$L = \int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\, dt$$

### Important Conditions

- The curve must be **smooth** on $[a, b]$, meaning $x'(t)$ and $y'(t)$ are continuous and not simultaneously zero (except possibly at endpoints).
- The formula gives the length of the curve traced exactly once as $t$ goes from $a$ to $b$. If the curve is traced multiple times, the integral will give total distance traveled, not necessarily the geometric length.

### Example 6: Arc Length of a Circle

Find the length of the circle $x = \cos t$, $y = \sin t$ for $0 \le t \le 2\pi$.

- $x'(t) = -\sin t$, $y'(t) = \cos t$.
- $(x')^2 + (y')^2 = \sin^2 t + \cos^2 t = 1$.
- $L = \int_0^{2\pi} \sqrt{1}\, dt = \int_0^{2\pi} 1\, dt = 2\pi$.

That's the circumference—perfect!

### Example 7: Arc Length Requiring Simplification

Find the length of the curve $x = e^t \cos t$, $y = e^t \sin t$ for $0 \le t \le \pi$.

- $x'(t) = e^t \cos t - e^t \sin t = e^t(\cos t - \sin t)$.
- $y'(t) = e^t \sin t + e^t \cos t = e^t(\sin t + \cos t)$.
- Compute $(x')^2 + (y')^2$:
  $$(x')^2 = e^{2t}(\cos^2 t - 2\cos t \sin t + \sin^2 t)$$
  $$(y')^2 = e^{2t}(\sin^2 t + 2\sin t \cos t + \cos^2 t)$$
  Adding: $(x')^2 + (y')^2 = e^{2t}[(\cos^2 t + \sin^2 t) + (\cos^2 t + \sin^2 t) + (-2\sin t\cos t + 2\sin t\cos t)] = e^{2t}[1 + 1 + 0] = 2e^{2t}$.
- So $\sqrt{(x')^2 + (y')^2} = \sqrt{2}\, e^t$.
- $L = \int_0^\pi \sqrt{2}\, e^t\, dt = \sqrt{2}\, (e^\pi - 1)$.

### Example 8: Arc Length Needing Calculator

Find the length of the curve $x = t^2$, $y = t^3$ from $t=0$ to $t=2$.

- $x'(t) = 2t$, $y'(t) = 3t^2$.
- $(x')^2 + (y')^2 = 4t^2 + 9t^4 = t^2(4 + 9t^2)$.
- $L = \int_0^2 \sqrt{t^2(4 + 9t^2)}\, dt = \int_0^2 t\sqrt{4 + 9t^2}\, dt$ (since $t \ge 0$).
- This integral is doable by substitution: let $u = 4 + 9t^2$, $du = 18t\, dt$, so $t\, dt = \frac{du}{18}$.
  When $t=0$, $u=4$; when $t=2$, $u=4 + 36 = 40$.
  $$L = \int_4^{40} \sqrt{u} \cdot \frac{du}{18} = \frac{1}{18} \int_4^{40} u^{1/2} du = \frac{1}{18} \left[ \frac{2}{3} u^{3/2} \right]_4^{40} = \frac{1}{27} \left( 40^{3/2} - 4^{3/2} \right)$$
  $40^{3/2} = (40\sqrt{40}) = 40 \cdot 2\sqrt{10} = 80\sqrt{10}$, $4^{3/2} = 8$.
  So $L = \frac{1}{27} (80\sqrt{10} - 8) = \frac{8}{27}(10\sqrt{10} - 1)$.

---

## Summary

### Key Formulas

| Concept | Formula |
|---------|---------|
| First derivative (slope) | $\displaystyle \frac{dy}{dx} = \frac{dy/dt}{dx/dt}$, provided $dx/dt \neq 0$ |
| Second derivative | $\displaystyle \frac{d^2y}{dx^2} = \frac{d}{dt}\left(\frac{dy}{dx}\right) \bigg/ \frac{dx}{dt}$ |
| Arc length | $\displaystyle L = \int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\, dt$ |

### Important Points

- Parametric equations allow us to describe curves that are not functions of $x$.
- The derivative $\frac{dy}{dx}$ gives the slope of the tangent line at a point parameterized by $t$.
- Horizontal tangents occur when $dy/dt = 0$ (and $dx/dt \neq 0$). Vertical tangents occur when $dx/dt = 0$ (and $dy/dt \neq 0$).
- The second derivative tells us concavity. It requires differentiating $\frac{dy}{dx}$ with respect to $t$ first.
- Arc length formula sums infinitesimal distances along the curve. The integrand is the speed of a particle moving along the curve.

### Common Pitfalls

- Forgetting that $\frac{dy}{dx}$ is a function of $t$, not $x$.
- Using the wrong derivative for second derivative—don't just differentiate $\frac{dy}{dx}$ with respect to $x$; you must use the parametric formula.
- In arc length, forgetting to square the derivatives before adding.
- Assuming the curve is traced once—if the parameter interval traces the curve multiple times, the integral gives total distance traveled, not the geometric length.

---

### Additional Practice Problems

1. For the curve $x = 2t$, $y = t^2 - 1$, find $\frac{dy}{dx}$ at $t = 3$.
2. Find the points on the curve $x = t^3 - 3t$, $y = t^2 - 2$ where the tangent is horizontal or vertical.
3. Find $\frac{d^2y}{dx^2}$ for $x = \ln t$, $y = t^2$ at $t = e$.
4. Set up (but do not evaluate) the integral for the arc length of $x = \cos^3 t$, $y = \sin^3 t$ from $t = 0$ to $t = \pi/2$.
5. Find the length of the curve $x = e^t$, $y = e^{-t}$ from $t = 0$ to $t = 2$.
6. A curve is given by $x = 3t - t^3$, $y = 3t^2$. Find the equation of the tangent line at $t = 1$.
7. Determine the concavity of the curve $x = \sin t$, $y = \cos 2t$ at $t = \pi/4$.
8. Find the arc length of one arch of the cycloid $x = t - \sin t$, $y = 1 - \cos t$ from $t = 0$ to $t = 2\pi$.

---

### Selected Solutions

1. **$x = 2t$, $y = t^2 - 1$**
   - $dx/dt = 2$, $dy/dt = 2t$, so $\frac{dy}{dx} = \frac{2t}{2} = t$.
   - At $t=3$, $\frac{dy}{dx} = 3$.

2. **$x = t^3 - 3t$, $y = t^2 - 2$**
   - $dx/dt = 3t^2 - 3 = 3(t^2 - 1)$, $dy/dt = 2t$.
   - Horizontal: $dy/dt = 0$ → $t = 0$, then $dx/dt = -3 \neq 0$, point $(0, -2)$.
   - Vertical: $dx/dt = 0$ → $t^2 - 1 = 0$ → $t = \pm 1$.
     - $t = 1$: $dy/dt = 2 \neq 0$, point $(1 - 3, 1 - 2) = (-2, -1)$.
     - $t = -1$: $dy/dt = -2 \neq 0$, point $(-1 + 3, 1 - 2) = (2, -1)$.

3. **$x = \ln t$, $y = t^2$**
   - $dx/dt = 1/t$, $dy/dt = 2t$, so $\frac{dy}{dx} = \frac{2t}{1/t} = 2t^2$.
   - $\frac{d}{dt}\left(\frac{dy}{dx}\right) = 4t$.
   - $\frac{d^2y}{dx^2} = \frac{4t}{1/t} = 4t^2$.
   - At $t = e$, $\frac{d^2y}{dx^2} = 4e^2$.

4. **$x = \cos^3 t$, $y = \sin^3 t$, $0 \le t \le \pi/2$**
   - $dx/dt = 3\cos^2 t (-\sin t) = -3\cos^2 t \sin t$.
   - $dy/dt = 3\sin^2 t \cos t$.
   - $(dx/dt)^2 + (dy/dt)^2 = 9\cos^4 t \sin^2 t + 9\sin^4 t \cos^2 t = 9\cos^2 t \sin^2 t(\cos^2 t + \sin^2 t) = 9\cos^2 t \sin^2 t$.
   - Arc length: $L = \int_0^{\pi/2} 3|\cos t \sin t|\, dt = 3\int_0^{\pi/2} \cos t \sin t\, dt$ (positive on this interval).

5. **$x = e^t$, $y = e^{-t}$, $t=0$ to $t=2$**
   - $dx/dt = e^t$, $dy/dt = -e^{-t}$.
   - $(dx/dt)^2 + (dy/dt)^2 = e^{2t} + e^{-2t}$.
   - $L = \int_0^2 \sqrt{e^{2t} + e^{-2t}}\, dt = \int_0^2 \sqrt{e^{2t}(1 + e^{-4t})}\, dt = \int_0^2 e^t \sqrt{1 + e^{-4t}}\, dt$.
   - This integral is doable but messy. Alternatively, note that $\sqrt{e^{2t} + e^{-2t}} = \sqrt{2\cosh(2t)}$? Actually $e^{2t}+e^{-2t} = 2\cosh(2t)$, so $\sqrt{2\cosh(2t)}$. The integral is not elementary in simple form; it would require a calculator or hyperbolic functions. But we can leave it set up.

6. **$x = 3t - t^3$, $y = 3t^2$, at $t=1$**
   - $dx/dt = 3 - 3t^2$, $dy/dt = 6t$.
   - At $t=1$, $dx/dt = 0$, $dy/dt = 6$, so $\frac{dy}{dx}$ is undefined → vertical tangent.
   - Point: $x = 3(1) - 1 = 2$, $y = 3$.
   - Equation of vertical line: $x = 2$.

7. **$x = \sin t$, $y = \cos 2t$, at $t = \pi/4$**
   - $dx/dt = \cos t$, $dy/dt = -2\sin 2t$.
   - $\frac{dy}{dx} = \frac{-2\sin 2t}{\cos t}$.
   - At $t=\pi/4$, $\sin 2t = \sin(\pi/2)=1$, $\cos t = \sqrt{2}/2$, so $\frac{dy}{dx} = \frac{-2}{\sqrt{2}/2} = -4/\sqrt{2} = -2\sqrt{2}$.
   - Differentiate $\frac{dy}{dx}$ with respect to $t$: use quotient rule or simplify first? Better to use the formula for second derivative directly. Let's compute $\frac{d}{dt}\left(\frac{dy}{dx}\right)$:
     $$\frac{dy}{dx} = -\frac{2\sin 2t}{\cos t} = -2 \cdot \frac{\sin 2t}{\cos t}$$
     Differentiate: $\frac{d}{dt}\left(\frac{dy}{dx}\right) = -2 \cdot \frac{(2\cos 2t)(\cos t) - \sin 2t (-\sin t)}{\cos^2 t} = -2 \cdot \frac{2\cos 2t \cos t + \sin 2t \sin t}{\cos^2 t}$.
     At $t=\pi/4$, $\cos 2t = \cos(\pi/2)=0$, $\sin 2t = 1$, $\cos t = \sqrt{2}/2$, $\sin t = \sqrt{2}/2$.
     Numerator: $2(0)(\sqrt{2}/2) + 1(\sqrt{2}/2) = \sqrt{2}/2$.
     Denominator: $\cos^2 t = 1/2$.
     So $\frac{d}{dt}\left(\frac{dy}{dx}\right) = -2 \cdot \frac{\sqrt{2}/2}{1/2} = -2 \cdot \frac{\sqrt{2}/2 \cdot 2}{1} = -2 \cdot \sqrt{2} = -2\sqrt{2}$.
   - Then $\frac{d^2y}{dx^2} = \frac{-2\sqrt{2}}{dx/dt} = \frac{-2\sqrt{2}}{\cos(\pi/4)} = \frac{-2\sqrt{2}}{\sqrt{2}/2} = -2\sqrt{2} \cdot \frac{2}{\sqrt{2}} = -4$.
   - Since $d^2y/dx^2 < 0$, the curve is concave down at that point.

8. **Cycloid $x = t - \sin t$, $y = 1 - \cos t$, $t=0$ to $2\pi$**
   - $dx/dt = 1 - \cos t$, $dy/dt = \sin t$.
   - $(dx/dt)^2 + (dy/dt)^2 = (1 - \cos t)^2 + \sin^2 t = 1 - 2\cos t + \cos^2 t + \sin^2 t = 2 - 2\cos t = 2(1 - \cos t)$.
   - Use identity $1 - \cos t = 2\sin^2(t/2)$, so $(dx/dt)^2 + (dy/dt)^2 = 4\sin^2(t/2)$.
   - For $t \in [0, 2\pi]$, $\sin(t/2) \ge 0$, so $\sqrt{4\sin^2(t/2)} = 2\sin(t/2)$.
   - Arc length: $L = \int_0^{2\pi} 2\sin(t/2)\, dt = 2 \left[ -2\cos(t/2) \right]_0^{2\pi} = 2 \left( -2\cos\pi + 2\cos 0 \right) = 2 \left( -2(-1) + 2(1) \right) = 2(2+2) = 8$.

---

Parametric equations are a powerful way to describe motion and curves. Mastering derivatives and arc length in this context will serve you well on the BC exam and in future calculus courses. Next, we'll extend these ideas to vector-valued functions, where we can track both position and velocity in the plane.