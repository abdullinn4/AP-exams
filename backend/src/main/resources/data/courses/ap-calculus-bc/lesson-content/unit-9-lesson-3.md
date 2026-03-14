# Polar Coordinates

So far, we've described curves using Cartesian coordinates $(x, y)$ and parametric equations $(x(t), y(t))$. But some curves—circles, spirals, roses—are much more naturally described using a different system: **polar coordinates**. Instead of using horizontal and vertical distances, we use a distance from the origin and an angle.

In this lesson, we'll learn how to work with polar equations, how to find slopes of tangent lines in polar form, and how to compute areas enclosed by polar curves. These are BC-only topics, so if you're preparing for the BC exam, this is essential material.

---

## Polar Coordinates Basics

### What Are Polar Coordinates?

In polar coordinates, a point $P$ in the plane is represented by an ordered pair $(r, \theta)$, where:

- $r$ = distance from the origin (called the **pole**) to $P$.
- $\theta$ = angle measured counterclockwise from the positive $x$-axis to the line segment $OP$.

Unlike Cartesian coordinates, the representation is not unique: $(r, \theta)$ and $(r, \theta + 2\pi)$ represent the same point. Also, $r$ can be negative, which means the point is in the opposite direction of $\theta$: $(-r, \theta) = (r, \theta + \pi)$.

### Converting Between Polar and Cartesian

From polar to Cartesian:
$$x = r\cos\theta,\quad y = r\sin\theta$$

From Cartesian to polar:
$$r^2 = x^2 + y^2,\quad \tan\theta = \frac{y}{x} \text{ (with appropriate quadrant)}$$

### Example 1: Converting a Point

Convert the polar point $(4, \pi/3)$ to Cartesian coordinates.

- $x = 4\cos(\pi/3) = 4 \cdot \frac{1}{2} = 2$.
- $y = 4\sin(\pi/3) = 4 \cdot \frac{\sqrt{3}}{2} = 2\sqrt{3}$.
- So $(x, y) = (2, 2\sqrt{3})$.

### Example 2: Converting an Equation

Convert the Cartesian equation $x^2 + y^2 = 4x$ to polar form.

- Substitute $x^2 + y^2 = r^2$ and $x = r\cos\theta$:
  $$r^2 = 4r\cos\theta$$
- For $r \neq 0$, divide by $r$: $r = 4\cos\theta$.
- This is a circle (passing through the origin) in polar form.

---

## Differentiation in Polar Form

Given a polar curve $r = f(\theta)$, we can express $x$ and $y$ in terms of $\theta$ as parametric equations:
$$x = r\cos\theta = f(\theta)\cos\theta,\quad y = r\sin\theta = f(\theta)\sin\theta$$

Then we can find derivatives with respect to $\theta$ and, more importantly, the slope of the tangent line $\frac{dy}{dx}$ using the parametric formula:

$$\frac{dy}{dx} = \frac{dy/d\theta}{dx/d\theta}$$

### Computing $dx/d\theta$ and $dy/d\theta$

Using the product rule:
$$\frac{dx}{d\theta} = \frac{dr}{d\theta}\cos\theta - r\sin\theta$$
$$\frac{dy}{d\theta} = \frac{dr}{d\theta}\sin\theta + r\cos\theta$$

Therefore,
$$\frac{dy}{dx} = \frac{\frac{dr}{d\theta}\sin\theta + r\cos\theta}{\frac{dr}{d\theta}\cos\theta - r\sin\theta}$$

### Horizontal and Vertical Tangents

- **Horizontal tangent** occurs when $\frac{dy}{d\theta} = 0$ and $\frac{dx}{d\theta} \neq 0$.
- **Vertical tangent** occurs when $\frac{dx}{d\theta} = 0$ and $\frac{dy}{d\theta} \neq 0$.

### Example 3: Slope of a Polar Curve

Find the slope of the tangent line to the cardioid $r = 1 + \cos\theta$ at $\theta = \pi/2$.

- $r = 1 + \cos\theta$, so $\frac{dr}{d\theta} = -\sin\theta$.
- At $\theta = \pi/2$: $r = 1 + 0 = 1$, $\frac{dr}{d\theta} = -1$.
- Compute $dx/d\theta$ and $dy/d\theta$:
  $$\frac{dx}{d\theta} = (-1)\cos(\pi/2) - (1)\sin(\pi/2) = 0 - 1 = -1$$
  $$\frac{dy}{d\theta} = (-1)\sin(\pi/2) + (1)\cos(\pi/2) = -1 + 0 = -1$$
- Slope: $\frac{dy}{dx} = \frac{-1}{-1} = 1$.

So the tangent line has slope 1 at that point.

### Example 4: Finding Horizontal Tangents

Find the points on the curve $r = 1 + \cos\theta$ where the tangent is horizontal.

- Set $\frac{dy}{d\theta} = 0$:
  $$\frac{dr}{d\theta}\sin\theta + r\cos\theta = 0$$
  Here $r = 1+\cos\theta$, $\frac{dr}{d\theta} = -\sin\theta$.
  So $(-\sin\theta)\sin\theta + (1+\cos\theta)\cos\theta = 0$ ⇒ $-\sin^2\theta + \cos\theta + \cos^2\theta = 0$.
  But $\cos^2\theta - \sin^2\theta = \cos 2\theta$, so $\cos 2\theta + \cos\theta = 0$.
  Use identity $\cos 2\theta = 2\cos^2\theta - 1$: $2\cos^2\theta - 1 + \cos\theta = 0$ ⇒ $2\cos^2\theta + \cos\theta - 1 = 0$.
  Let $u = \cos\theta$: $2u^2 + u - 1 = 0$ ⇒ $(2u-1)(u+1)=0$ ⇒ $u = \frac{1}{2}$ or $u = -1$.
  - $\cos\theta = \frac{1}{2}$ ⇒ $\theta = \frac{\pi}{3}, \frac{5\pi}{3}$ (in $[0,2\pi)$).
  - $\cos\theta = -1$ ⇒ $\theta = \pi$.

  Check that $\frac{dx}{d\theta} \neq 0$ at these points to ensure we have a genuine horizontal tangent (not a cusp or vertical tangent). For $\theta = \pi$, $r = 0$, the curve goes through the origin; we might need to handle that separately (the tangent there is not well-defined in the usual sense). So horizontal tangents at $\theta = \pi/3$ and $5\pi/3$, giving points in polar coordinates $(1+\cos\theta, \theta)$. At $\theta = \pi/3$, $r = 1 + 1/2 = 1.5$; at $\theta = 5\pi/3$, $r = 1 + 1/2 = 1.5$ as well.

---

## Area Bounded by a Single Polar Curve

### The Area Formula

In Cartesian coordinates, area is found by integrating rectangles of width $dx$ and height $y$. In polar coordinates, we use sectors of a circle. Imagine a tiny wedge of angle $d\theta$ at a distance $r$ from the origin. Its area is approximately that of a circular sector: $\frac{1}{2}r^2\,d\theta$.

Therefore, the area enclosed by a polar curve $r = f(\theta)$ from $\theta = \alpha$ to $\theta = \beta$ is:
$$A = \frac{1}{2}\int_\alpha^\beta [f(\theta)]^2\,d\theta = \frac{1}{2}\int_\alpha^\beta r^2\,d\theta$$

**Important:** The curve must be traced exactly once over the interval $[\alpha, \beta]$. For closed curves, you often integrate over a full period (e.g., $0$ to $2\pi$ for a cardioid, or $0$ to $\pi$ for a four‑leaf rose depending on symmetry).

### Example 5: Area of a Circle

Find the area enclosed by the circle $r = 2$ (a circle of radius 2).

- $r = 2$, so $r^2 = 4$.
- For a full circle, $\theta$ goes from $0$ to $2\pi$:
  $$A = \frac{1}{2}\int_0^{2\pi} 4\,d\theta = \frac{1}{2} \cdot 4 \cdot 2\pi = 4\pi.$$
  That's correct: area = $\pi(2)^2 = 4\pi$.

### Example 6: Area of a Cardioid

Find the area enclosed by the cardioid $r = 1 + \cos\theta$.

- The curve is traced once for $\theta \in [0, 2\pi]$. So
  $$A = \frac{1}{2}\int_0^{2\pi} (1 + \cos\theta)^2\,d\theta = \frac{1}{2}\int_0^{2\pi} (1 + 2\cos\theta + \cos^2\theta)\,d\theta.$$
- Use identity $\cos^2\theta = \frac{1+\cos 2\theta}{2}$:
  $$A = \frac{1}{2}\int_0^{2\pi} \left(1 + 2\cos\theta + \frac{1+\cos 2\theta}{2}\right)d\theta$$
  $$= \frac{1}{2}\int_0^{2\pi} \left(1 + \frac{1}{2} + 2\cos\theta + \frac{1}{2}\cos 2\theta\right)d\theta$$
  $$= \frac{1}{2}\int_0^{2\pi} \left(\frac{3}{2} + 2\cos\theta + \frac{1}{2}\cos 2\theta\right)d\theta.$$
- Integrate over $0$ to $2\pi$: $\int_0^{2\pi} \cos\theta\,d\theta = 0$, $\int_0^{2\pi} \cos 2\theta\,d\theta = 0$, $\int_0^{2\pi} \frac{3}{2}\,d\theta = \frac{3}{2} \cdot 2\pi = 3\pi$.
- So $A = \frac{1}{2} \cdot 3\pi = \frac{3\pi}{2}$? Wait, we forgot the $\frac{1}{2}$ factor outside? Let's recompute carefully:

  $$A = \frac{1}{2}\int_0^{2\pi} (1 + 2\cos\theta + \cos^2\theta)\,d\theta$$
  $$= \frac{1}{2}\int_0^{2\pi} \left(1 + 2\cos\theta + \frac{1+\cos2\theta}{2}\right)d\theta$$
  $$= \frac{1}{2}\int_0^{2\pi} \left(1 + 2\cos\theta + \frac{1}{2} + \frac{1}{2}\cos2\theta\right)d\theta$$
  $$= \frac{1}{2}\int_0^{2\pi} \left(\frac{3}{2} + 2\cos\theta + \frac{1}{2}\cos2\theta\right)d\theta$$
  Now integrate:
  $$\int_0^{2\pi} \frac{3}{2}\,d\theta = \frac{3}{2} \cdot 2\pi = 3\pi$$
  $$\int_0^{2\pi} 2\cos\theta\,d\theta = 0$$
  $$\int_0^{2\pi} \frac{1}{2}\cos2\theta\,d\theta = 0$$
  So the integral = $3\pi$. Then multiply by the outer $\frac{1}{2}$ gives $A = \frac{1}{2} \cdot 3\pi = \frac{3\pi}{2}$.

Thus the area of the cardioid $r = 1 + \cos\theta$ is $\frac{3\pi}{2}$. (Note: Some cardioids have area $\frac{3}{2}\pi a^2$; here $a=1$ so it's correct.)

### Example 7: Area of a Region Inside a Single Curve (One Loop of a Rose)

Find the area inside one loop of the four‑leaf rose $r = \cos 2\theta$.

- The curve $r = \cos 2\theta$ has petals where $\cos 2\theta$ is positive. One petal occurs when $-\pi/4 \le \theta \le \pi/4$ (since $\cos 2\theta \ge 0$ there). By symmetry, we can integrate from $-\pi/4$ to $\pi/4$ and double if needed, but that interval already covers one full petal? Actually, as $\theta$ goes from $-\pi/4$ to $\pi/4$, the curve traces the petal in the right half‑plane. So area of that petal:
  $$A = \frac{1}{2}\int_{-\pi/4}^{\pi/4} \cos^2 2\theta\,d\theta.$$
- Use identity $\cos^2 2\theta = \frac{1+\cos 4\theta}{2}$:
  $$A = \frac{1}{2}\int_{-\pi/4}^{\pi/4} \frac{1+\cos 4\theta}{2}\,d\theta = \frac{1}{4}\int_{-\pi/4}^{\pi/4} (1+\cos 4\theta)\,d\theta.$$
- The integrand is even, so $\int_{-\pi/4}^{\pi/4} = 2\int_0^{\pi/4}$:
  $$A = \frac{1}{4} \cdot 2 \int_0^{\pi/4} (1+\cos 4\theta)\,d\theta = \frac{1}{2} \left[ \theta + \frac{\sin 4\theta}{4} \right]_0^{\pi/4}.$$
- At $\theta = \pi/4$: $\frac{\pi}{4} + \frac{\sin\pi}{4} = \frac{\pi}{4} + 0 = \frac{\pi}{4}$.
  At $\theta = 0$: $0 + 0 = 0$.
  So $A = \frac{1}{2} \cdot \frac{\pi}{4} = \frac{\pi}{8}$.

Thus one petal has area $\pi/8$, and the total area of all four petals would be $4 \times \pi/8 = \pi/2$.

---

## Area Between Two Polar Curves

Just as with Cartesian coordinates, we can find the area of a region bounded by two polar curves $r = f(\theta)$ (outer) and $r = g(\theta)$ (inner) over an interval $[\alpha, \beta]$ where $f(\theta) \ge g(\theta) \ge 0$. The area is:
$$A = \frac{1}{2}\int_\alpha^\beta \left( [f(\theta)]^2 - [g(\theta)]^2 \right) d\theta$$

**Important:** Identify where the curves intersect to determine the limits of integration $\alpha$ and $\beta$.

### Example 8: Area Between a Circle and a Cardioid

Find the area inside the circle $r = 3\sin\theta$ and outside the cardioid $r = 1 + \sin\theta$.

- First, find intersection points by setting $3\sin\theta = 1 + \sin\theta$:
  $$2\sin\theta = 1 \Rightarrow \sin\theta = \frac{1}{2} \Rightarrow \theta = \frac{\pi}{6}, \frac{5\pi}{6}.$$
- Over the interval $[\pi/6, 5\pi/6]$, check which is larger: at $\theta = \pi/2$, $3\sin\theta = 3$, $1+\sin\theta = 2$, so circle is outside, cardioid inside. So outer $f(\theta) = 3\sin\theta$, inner $g(\theta) = 1+\sin\theta$.
- Area:
  $$A = \frac{1}{2}\int_{\pi/6}^{5\pi/6} \left( (3\sin\theta)^2 - (1+\sin\theta)^2 \right) d\theta$$
  $$= \frac{1}{2}\int_{\pi/6}^{5\pi/6} \left( 9\sin^2\theta - (1 + 2\sin\theta + \sin^2\theta) \right) d\theta$$
  $$= \frac{1}{2}\int_{\pi/6}^{5\pi/6} \left( 8\sin^2\theta - 2\sin\theta - 1 \right) d\theta.$$
- Use $\sin^2\theta = \frac{1-\cos 2\theta}{2}$:
  $$8\sin^2\theta = 8\cdot \frac{1-\cos2\theta}{2} = 4(1-\cos2\theta) = 4 - 4\cos2\theta.$$
- So integrand becomes $(4 - 4\cos2\theta - 2\sin\theta - 1) = 3 - 4\cos2\theta - 2\sin\theta$.
- Now integrate from $\pi/6$ to $5\pi/6$:
  $$\int_{\pi/6}^{5\pi/6} 3\,d\theta = 3\left(\frac{5\pi}{6} - \frac{\pi}{6}\right) = 3\cdot \frac{4\pi}{6} = 2\pi.$$
  $$\int_{\pi/6}^{5\pi/6} \cos2\theta\,d\theta = \left[ \frac{\sin2\theta}{2} \right]_{\pi/6}^{5\pi/6} = \frac{1}{2}\left( \sin\frac{5\pi}{3} - \sin\frac{\pi}{3} \right) = \frac{1}{2}\left( -\frac{\sqrt{3}}{2} - \frac{\sqrt{3}}{2} \right) = -\frac{\sqrt{3}}{2}.$$
  So $\int -4\cos2\theta = -4 \cdot (-\frac{\sqrt{3}}{2}) = 2\sqrt{3}$.
  $$\int_{\pi/6}^{5\pi/6} \sin\theta\,d\theta = \left[ -\cos\theta \right]_{\pi/6}^{5\pi/6} = \left( -\cos\frac{5\pi}{6} + \cos\frac{\pi}{6} \right) = \left( -\left(-\frac{\sqrt{3}}{2}\right) + \frac{\sqrt{3}}{2} \right) = \frac{\sqrt{3}}{2} + \frac{\sqrt{3}}{2} = \sqrt{3}.$$
  So $\int -2\sin\theta = -2\sqrt{3}$.
- Total integral = $2\pi + 2\sqrt{3} - 2\sqrt{3} = 2\pi$.
- Then multiply by $1/2$: $A = \pi$.

Thus the area is $\pi$ square units.

### Example 9: Area Between Two Curves with Multiple Intersections

Sometimes the region might consist of two separate parts, or the outer/inner roles might switch. In such cases, you need to split the integral at intersection points.

Find the area inside both $r = \cos\theta$ and $r = \sin\theta$ (the overlapping region of two circles).

- Find intersections: $\cos\theta = \sin\theta$ ⇒ $\tan\theta = 1$ ⇒ $\theta = \pi/4, 5\pi/4$, but in $[0, 2\pi]$ we have $\pi/4$ and $5\pi/4$. However, we want the region common to both curves. Let's analyze.
- The curve $r = \cos\theta$ is a circle with diameter on the x‑axis, traced for $\theta \in [-\pi/2, \pi/2]$ to get the whole circle. $r = \sin\theta$ is a circle with diameter on the y‑axis, traced for $\theta \in [0, \pi]$.
- The overlapping region is symmetric about $\theta = \pi/4$. One way: integrate from $\theta = 0$ to $\pi/4$ with the outer curve being the one with larger $r$. For $\theta$ in $[0, \pi/4]$, compare $r = \cos\theta$ and $r = \sin\theta$: $\cos\theta \ge \sin\theta$? At $\theta=0$, $\cos0=1$, $\sin0=0$, so $\cos\theta$ is larger. At $\theta=\pi/4$, they're equal. So on $[0,\pi/4]$, $\cos\theta \ge \sin\theta$, so outer = $\cos\theta$, inner = $\sin\theta$.
- By symmetry, the region from $\theta = \pi/4$ to $\pi/2$ has $\sin\theta \ge \cos\theta$, so outer = $\sin\theta$, inner = $\cos\theta$. But careful: if we just integrate from $0$ to $\pi/2$, we might double‑count? Actually, the region common to both circles is symmetric and can be found by integrating from $\theta = 0$ to $\pi/4$ with the appropriate difference and doubling, or integrating from $0$ to $\pi/2$ but with absolute difference? Let's do the symmetric approach.

  Area = $2 \times \frac{1}{2}\int_0^{\pi/4} (\cos^2\theta - \sin^2\theta)\,d\theta = \int_0^{\pi/4} \cos 2\theta\,d\theta$ (since $\cos^2-\sin^2 = \cos2\theta$).
- Then $A = \left[ \frac{\sin 2\theta}{2} \right]_0^{\pi/4} = \frac{1}{2}(\sin\frac{\pi}{2} - \sin 0) = \frac{1}{2}(1 - 0) = \frac{1}{2}$.

Thus the area common to both circles is $1/2$.

---

## Summary

### Key Formulas

| Concept | Formula |
|---------|---------|
| Polar to Cartesian | $x = r\cos\theta$, $y = r\sin\theta$ |
| Slope in polar | $\displaystyle \frac{dy}{dx} = \frac{\frac{dr}{d\theta}\sin\theta + r\cos\theta}{\frac{dr}{d\theta}\cos\theta - r\sin\theta}$ |
| Horizontal tangent | $\frac{dy}{d\theta}=0$, $\frac{dx}{d\theta}\neq0$ |
| Vertical tangent | $\frac{dx}{d\theta}=0$, $\frac{dy}{d\theta}\neq0$ |
| Area inside a polar curve | $\displaystyle A = \frac{1}{2}\int_\alpha^\beta r^2\,d\theta$ |
| Area between two polar curves | $\displaystyle A = \frac{1}{2}\int_\alpha^\beta (r_{\text{outer}}^2 - r_{\text{inner}}^2)\,d\theta$ |

### Important Points

- When finding slope, $dy/dx$ is expressed in terms of $\theta$.
- For area, make sure the curve is traced exactly once on the interval.
- For area between curves, determine which curve is outer and which is inner on the interval.
- Intersection points of polar curves are found by solving $f(\theta) = g(\theta)$, but note that the origin (pole) can also be an intersection point if $r=0$ occurs at different $\theta$ values.
- Some curves require splitting the integral if the outer/inner roles switch.

### Common Pitfalls

- Forgetting that $r$ can be negative, which might cause the curve to be traced in a different way.
- Using the wrong interval for area—always check that you cover the full region without double‑counting.
- Not checking that $f(\theta) \ge g(\theta)$ on the interval for area between curves.
- Misinterpreting horizontal/vertical tangent conditions—ensure the other derivative is nonzero.

---

### Additional Practice Problems

1. Convert the polar equation $r = 2\sec\theta$ to Cartesian form.
2. Find the slope of the tangent line to $r = 2\sin\theta$ at $\theta = \pi/3$.
3. Find the points on $r = 3\cos\theta$ where the tangent is horizontal.
4. Find the area enclosed by one loop of the rose $r = \sin 2\theta$.
5. Find the area inside the circle $r = 2$ and outside the cardioid $r = 2(1 - \cos\theta)$.

---

### Selected Solutions

1. **$r = 2\sec\theta$** ⇒ $r = \frac{2}{\cos\theta}$ ⇒ $r\cos\theta = 2$ ⇒ $x = 2$. So it's the vertical line $x=2$.

2. **$r = 2\sin\theta$, at $\theta = \pi/3$**
   - $r = 2\sin\theta$, $\frac{dr}{d\theta} = 2\cos\theta$.
   - At $\theta=\pi/3$: $r = 2(\sqrt{3}/2) = \sqrt{3}$, $\frac{dr}{d\theta} = 2(1/2)=1$.
   - $\frac{dx}{d\theta} = (1)\cos(\pi/3) - \sqrt{3}\sin(\pi/3) = \frac{1}{2} - \sqrt{3}\cdot\frac{\sqrt{3}}{2} = \frac{1}{2} - \frac{3}{2} = -1$.
   - $\frac{dy}{d\theta} = (1)\sin(\pi/3) + \sqrt{3}\cos(\pi/3) = \frac{\sqrt{3}}{2} + \sqrt{3}\cdot\frac{1}{2} = \frac{\sqrt{3}}{2} + \frac{\sqrt{3}}{2} = \sqrt{3}$.
   - Slope = $\frac{\sqrt{3}}{-1} = -\sqrt{3}$.

3. **$r = 3\cos\theta$** ⇒ $\frac{dr}{d\theta} = -3\sin\theta$.
   - Horizontal when $\frac{dy}{d\theta}=0$: $(-3\sin\theta)\sin\theta + (3\cos\theta)\cos\theta = 0$ ⇒ $-3\sin^2\theta + 3\cos^2\theta = 0$ ⇒ $\cos^2\theta - \sin^2\theta = 0$ ⇒ $\cos2\theta = 0$ ⇒ $2\theta = \frac{\pi}{2}, \frac{3\pi}{2}$ ⇒ $\theta = \frac{\pi}{4}, \frac{3\pi}{4}, \frac{5\pi}{4}, \frac{7\pi}{4}$? But $r = 3\cos\theta$ is a circle; we need to check which are valid (where $r$ is defined). At $\theta = \pi/4$, $r = 3/\sqrt{2}$, $\frac{dx}{d\theta} = (-3\sin\theta)\cos\theta - r\sin\theta$? Actually check $\frac{dx}{d\theta}$ to ensure it's nonzero. At $\theta = \pi/4$, $\frac{dx}{d\theta} = (-3\sin\theta)\cos\theta - (3\cos\theta)\sin\theta = -3\sin\theta\cos\theta - 3\cos\theta\sin\theta = -6\sin\theta\cos\theta = -3\sin 2\theta = -3 \neq 0$, so fine. Similarly for others. So horizontal tangents at $\theta = \pi/4, 3\pi/4, 5\pi/4, 7\pi/4$.

4. **Area of one loop of $r = \sin 2\theta$**
   - One loop occurs where $\sin 2\theta \ge 0$, e.g., $0 \le 2\theta \le \pi$ ⇒ $0 \le \theta \le \pi/2$.
   - $A = \frac{1}{2}\int_0^{\pi/2} \sin^2 2\theta\,d\theta = \frac{1}{2}\int_0^{\pi/2} \frac{1-\cos 4\theta}{2}\,d\theta = \frac{1}{4}\int_0^{\pi/2} (1-\cos 4\theta)\,d\theta$.
   - $= \frac{1}{4}\left[ \theta - \frac{\sin 4\theta}{4} \right]_0^{\pi/2} = \frac{1}{4}\left( \frac{\pi}{2} - 0 - 0 \right) = \frac{\pi}{8}$.

5. **Area inside circle $r=2$ and outside cardioid $r=2(1-\cos\theta)$**
   - Intersection: $2 = 2(1-\cos\theta)$ ⇒ $1 = 1-\cos\theta$ ⇒ $\cos\theta = 0$ ⇒ $\theta = \pi/2, 3\pi/2$.
   - On $[\pi/2, 3\pi/2]$, which is larger? At $\theta = \pi$, $r_{\text{circle}}=2$, $r_{\text{cardioid}}=2(1-(-1))=4$, so cardioid is larger! That means for $\theta$ in $[\pi/2, 3\pi/2]$, the cardioid is outside, circle inside. But we want area inside circle and outside cardioid—that means the region where circle is outside and cardioid inside? Wait, re-read: "inside the circle and outside the cardioid" means points that satisfy $r \le 2$ (inside circle) and $r \ge 2(1-\cos\theta)$ (outside cardioid). So we need $2(1-\cos\theta) \le r \le 2$. That requires $2(1-\cos\theta) \le 2$ ⇒ $1-\cos\theta \le 1$ ⇒ $-\cos\theta \le 0$ ⇒ $\cos\theta \ge 0$. So the relevant $\theta$ interval is where $\cos\theta \ge 0$, i.e., $\theta \in [-\pi/2, \pi/2]$. But for $\theta$ in $[-\pi/2, \pi/2]$, check: at $\theta=0$, $2(1-1)=0$, so cardioid is inside. At $\theta=\pi/2$, $2(1-0)=2$, equal. So on $[-\pi/2, \pi/2]$, the cardioid is inside, circle outside. So we can integrate from $-\pi/2$ to $\pi/2$, and by symmetry double from $0$ to $\pi/2$? Actually integrate from $-\pi/2$ to $\pi/2$ directly, using symmetry.
   - Area $= \frac{1}{2}\int_{-\pi/2}^{\pi/2} \left( 2^2 - [2(1-\cos\theta)]^2 \right) d\theta$.
   - Simplify: $4 - 4(1-\cos\theta)^2 = 4 - 4(1 - 2\cos\theta + \cos^2\theta) = 4 - 4 + 8\cos\theta - 4\cos^2\theta = 8\cos\theta - 4\cos^2\theta$.
   - $\int_{-\pi/2}^{\pi/2} \cos\theta\,d\theta = 2\int_0^{\pi/2} \cos\theta = 2(1) = 2$, so $\int 8\cos\theta = 8\cdot 2 = 16$.
   - $\int_{-\pi/2}^{\pi/2} \cos^2\theta\,d\theta = 2\int_0^{\pi/2} \frac{1+\cos2\theta}{2} d\theta = \int_0^{\pi/2} (1+\cos2\theta) d\theta = [\theta + \frac{\sin2\theta}{2}]_0^{\pi/2} = \frac{\pi}{2}$.
     So $\int 4\cos^2\theta = 4 \cdot \frac{\pi}{2} = 2\pi$.
   - Total integral = $16 - 2\pi$.
   - Then multiply by $1/2$: $A = 8 - \pi$.

---

Polar coordinates give us a beautiful way to describe and compute areas of curves that would be messy in Cartesian. Master the slope formula and the area formulas, and you'll be ready for any polar question on the BC exam. Next, we'll dive into the final unit: infinite sequences and series!