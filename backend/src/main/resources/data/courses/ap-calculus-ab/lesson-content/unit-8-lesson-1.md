# Area Between Curves

Welcome to Unit 8! We've spent a lot of time learning how to differentiate—finding rates of change, slopes, and optimizing functions. Now we're flipping the script. Integration is all about accumulation: adding up tiny pieces to find a total. And one of the most visual applications is finding the area between curves.

Think about it this way: if you can find the area under one curve, why not find the area sandwiched between two curves? It's just the area under the top curve minus the area under the bottom curve. Simple idea, but it opens up a whole new world of problems.

Let's dive in.

---

## **Area with Respect to x (Vertical Slices)**

### **Definition:**

If a region is bounded above by a curve $y = f(x)$ and below by a curve $y = g(x)$, and on the sides by the vertical lines $x = a$ and $x = b$, where $f(x) \ge g(x)$ on the interval $[a, b]$, then the area of the region is given by the definite integral:

$$A = \int_{a}^{b} \left[f(x) - g(x)\right] \, dx$$

This sums the areas of infinitesimally thin vertical rectangles of width $dx$ and height $f(x) - g(x)$.

**Why It Works:**

Imagine slicing the region into very thin vertical strips. Each strip is roughly a rectangle with width $dx$ and height equal to the distance between the top curve and the bottom curve at that $x$-value. The area of that strip is approximately $(f(x) - g(x)) \, dx$. Add up all these strips from $x=a$ to $x=b$, and as the strips get infinitely thin, the sum becomes the definite integral.

**Step-by-Step Instructions:**

1. **Sketch the region.** Always start with a picture. It helps you see which curve is on top and where they intersect.
2. **Find the limits of integration ($x = a$ and $x = b$).** These are usually the $x$-coordinates of the intersection points of the curves, found by solving $f(x) = g(x)$. If the region is bounded by vertical lines, those $x$-values are your limits.
3. **Identify "Top" and "Bottom".** On the entire interval from $a$ to $b$, determine which function is greater (graphically higher). The integrand is **(Top) - (Bottom)**.
4. **Integrate.** Set up and evaluate the definite integral.

**Example 1: Basic Region**

Find the area of the region bounded by $y = x + 2$ and $y = x^2$.

- **Step 1: Sketch.** The line $y = x+2$ and the parabola $y = x^2$ intersect in two places. The line is above the parabola between those intersections.
- **Step 2: Find intersections.** Set $x^2 = x + 2$:
  $$x^2 - x - 2 = 0 \Rightarrow (x-2)(x+1) = 0$$
  So $x = -1$ and $x = 2$. These are our limits: $a = -1$, $b = 2$.
- **Step 3: Identify Top/Bottom.** On the interval $[-1, 2]$, test a point like $x=0$: line gives $2$, parabola gives $0$. So $y = x+2$ is the top, $y = x^2$ is the bottom.
- **Step 4: Integrate.**
  $$A = \int_{-1}^{2} \left[(x+2) - (x^2)\right] \, dx = \int_{-1}^{2} (-x^2 + x + 2) \, dx$$
  $$= \left[ -\frac{x^3}{3} + \frac{x^2}{2} + 2x \right]_{-1}^{2}$$
  Now evaluate:
  At $x=2$: $-\frac{8}{3} + \frac{4}{2} + 4 = -\frac{8}{3} + 2 + 4 = -\frac{8}{3} + 6 = -\frac{8}{3} + \frac{18}{3} = \frac{10}{3}$
  At $x=-1$: $-\frac{(-1)^3}{3} + \frac{1}{2} + 2(-1) = -\frac{-1}{3} + \frac{1}{2} - 2 = \frac{1}{3} + \frac{1}{2} - 2 = \frac{2}{6} + \frac{3}{6} - \frac{12}{6} = -\frac{7}{6}$
  So:
  $$A = \frac{10}{3} - \left(-\frac{7}{6}\right) = \frac{10}{3} + \frac{7}{6} = \frac{20}{6} + \frac{7}{6} = \frac{27}{6} = \frac{9}{2}$$

**Example 2: Region Bounded by the x-axis**

Find the area between the curve $y = e^x - 1$, the x-axis, and the lines $x = 0$ and $x = \ln 3$.

- **Step 1: Sketch.** The x-axis is the line $y = 0$. We need to check if $e^x - 1$ is above or below the axis on $[0, \ln 3]$.
- **Step 2: Limits.** Given directly: $x=0$ and $x=\ln 3$.
- **Step 3: Identify Top/Bottom.** At $x=0$, $e^0 - 1 = 0$. At $x=\ln 3$, $e^{\ln 3} - 1 = 2 > 0$. On the interval, $e^x - 1 \ge 0$, so it's the top function, and the x-axis ($y=0$) is the bottom.
- **Step 4: Integrate.**
  $$A = \int_{0}^{\ln 3} \left[(e^x - 1) - 0\right] \, dx = \int_{0}^{\ln 3} (e^x - 1) \, dx = \left[ e^x - x \right]_{0}^{\ln 3}$$
  $$= (e^{\ln 3} - \ln 3) - (e^0 - 0) = (3 - \ln 3) - (1) = 2 - \ln 3$$

---

## **Area with Respect to y (Horizontal Slices)**

Sometimes slicing vertically is a pain. Maybe the curves are given as functions of $y$, or maybe the top and bottom functions switch so many times that you'd need a dozen integrals. That's when we switch to horizontal slices—integrating with respect to $y$.

### **Definition:**

If a region is bounded on the right by a curve $x = f(y)$ and on the left by a curve $x = g(y)$, and above and below by the horizontal lines $y = c$ and $y = d$, where $f(y) \ge g(y)$ on $[c, d]$, then the area of the region is given by:

$$A = \int_{c}^{d} \left[f(y) - g(y)\right] \, dy$$

This sums the areas of infinitesimally thin horizontal rectangles of height $dy$ and length $f(y) - g(y)$.

**When to Use dy:**

- The bounding curves are more naturally expressed as functions of $y$ (e.g., $x = y^2$ vs. $y = \pm\sqrt{x}$).
- Using vertical slices would require splitting the region into two or more subregions because the "top" and "bottom" functions switch.
- The region is bounded by curves that are clearly functions of $y$.

**Step-by-Step Instructions:**

1. **Sketch the region.** Still important! You need to see left from right.
2. **Find the limits of integration ($y = c$ and $y = d$).** These are the $y$-coordinates of the intersection points, found by solving the equations in terms of $y$.
3. **Identify "Right" and "Left".** For a given $y$ in $[c, d]$, determine which $x$-value is greater (farther to the right). The integrand is **(Right) - (Left)**.
4. **Integrate with respect to $y$.** Set up and evaluate.

**Example 3: Region where dy is simpler**

Find the area of the region bounded by $x = y^2 - 2$ and $x = y$.

- **Step 1: Sketch.** The parabola $x = y^2 - 2$ opens to the right, vertex at $(-2, 0)$. The line $x = y$ is a diagonal line. They intersect in two places.
- **Step 2: Find intersections in terms of $y$.** Set $y^2 - 2 = y$:
  $$y^2 - y - 2 = 0 \Rightarrow (y-2)(y+1) = 0$$
  So $y = -1$ and $y = 2$. These are our limits: $c = -1$, $d = 2$.
- **Step 3: Identify Right/Left.** On the interval $[-1, 2]$, test $y=0$: line gives $x=0$, parabola gives $x = -2$. So $x = y$ is to the right, $x = y^2 - 2$ is to the left.
- **Step 4: Integrate.**
  $$A = \int_{-1}^{2} \left[y - (y^2 - 2)\right] \, dy = \int_{-1}^{2} (-y^2 + y + 2) \, dy$$
  This is the same integrand as in Example 1, just with $y$ instead of $x$. So:
  $$A = \left[ -\frac{y^3}{3} + \frac{y^2}{2} + 2y \right]_{-1}^{2} = \frac{9}{2}$$
  (Same calculation as before—nice when that happens!)

---

## **Regions Requiring Multiple Integrals or Absolute Value**

Sometimes curves cross each other within the region. The "top" and "bottom" switch places. If you just set up one integral, you'd get the *net signed area*—which might be less than the total geometric area if parts cancel out. To get the total area, you need to split the region at the intersection points.

### **Definition:**

When two curves intersect within the interval defining the region, the "upper" and "lower" (or "right" and "left") functions exchange roles. The total area must be calculated as the **sum of two or more definite integrals**, or as a single integral of the **absolute value of the difference** of the functions. For the AP exam, the sum of integrals approach is standard and clearer.

**Step-by-Step Instructions:**

1. **Find all intersections** of the curves within the region of interest.
2. **Split the region** at each intersection point, creating subregions where one curve is consistently above the other.
3. **Set up separate integrals** for each subregion, using the appropriate top/bottom functions.
4. **Add the results** to get the total area.

$$A = \int_{a}^{p} [f_1(x) - g_1(x)] \, dx + \int_{p}^{b} [f_2(x) - g_2(x)] \, dx$$

where $x=p$ is the intersection point where the top/bottom switch.

**Important:** The definite integral $\int_{a}^{b} (f(x)-g(x)) \, dx$ gives the *net signed area*. If the curves cross, this net value will be less than the total geometric area. To find total area, we ensure each integrand is positive (Top - Bottom).

**Example 4: Curves that Cross**

Find the area of the region between $y = \sin x$ and $y = \cos x$ from $x = 0$ to $x = \pi$.

- **Step 1: Find intersections in the interval.** Set $\sin x = \cos x$:
  $$\tan x = 1 \Rightarrow x = \frac{\pi}{4} \text{ (also } x = \frac{5\pi}{4} \text{, but that's outside } [0, \pi])$$
  So the only intersection in $[0, \pi]$ is at $x = \frac{\pi}{4}$.
- **Step 2: Determine which is top on each subinterval.**
  - On $[0, \frac{\pi}{4}]$: Test $x = \frac{\pi}{6}$. $\cos(\frac{\pi}{6}) \approx 0.866$, $\sin(\frac{\pi}{6}) = 0.5$. So $\cos x$ is above $\sin x$.
  - On $[\frac{\pi}{4}, \pi]$: Test $x = \frac{\pi}{2}$. $\sin(\frac{\pi}{2}) = 1$, $\cos(\frac{\pi}{2}) = 0$. So $\sin x$ is above $\cos x$.
- **Step 3: Set up sum of integrals.**
  $$A = \int_{0}^{\pi/4} (\cos x - \sin x) \, dx + \int_{\pi/4}^{\pi} (\sin x - \cos x) \, dx$$
- **Step 4: Evaluate.**
  First integral: $\int (\cos x - \sin x) \, dx = \sin x + \cos x$.
  So from $0$ to $\pi/4$: $(\sin\frac{\pi}{4} + \cos\frac{\pi}{4}) - (\sin 0 + \cos 0) = \left(\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}\right) - (0 + 1) = \sqrt{2} - 1$.

  Second integral: $\int (\sin x - \cos x) \, dx = -\cos x - \sin x$.
  So from $\pi/4$ to $\pi$:
  $$\left[-\cos\pi - \sin\pi\right] - \left[-\cos\frac{\pi}{4} - \sin\frac{\pi}{4}\right] = \left[-(-1) - 0\right] - \left[-\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}\right]$$
  $$= (1) - (-\sqrt{2}) = 1 + \sqrt{2}$$

  Total area: $(\sqrt{2} - 1) + (1 + \sqrt{2}) = 2\sqrt{2}$.

---

### **Summary**

**Key Concepts:**

| Method | Formula | When to Use |
|--------|---------|-------------|
| Vertical slices (dx) | $A = \int_a^b (\text{Top} - \text{Bottom}) \, dx$ | Curves are functions of $x$, top/bottom consistent |
| Horizontal slices (dy) | $A = \int_c^d (\text{Right} - \text{Left}) \, dy$ | Curves are functions of $y$, or to avoid splitting region |
| Multiple integrals | Sum of integrals over subintervals | Curves intersect within the region |

**Choosing dx or dy:**

- Use **dx** when the region is bounded by functions of $x$ and the top/bottom are easy to identify.
- Use **dy** when the region is bounded by functions of $y$ (like $x = y^2$) or when vertical slices would require splitting the region.

**Common Pitfalls:**

- Forgetting to find **all** points of intersection—this can lead to missing where curves cross.
- Using a single integral when curves cross—that gives net signed area, not total area.
- Incorrectly identifying top/bottom or right/left—always test a point in each interval.
- Forgetting to sketch—a picture saves you from these mistakes.

**Calculator Use (Topic 8.6):**

On the AP exam, you can use your calculator to:
- Graph functions to visualize the region.
- Find points of intersection (use the `calc:intersect` feature).
- **Evaluate** the definite integrals you set up. (But remember: you must show the integral setup on the exam to receive credit—the calculator just does the arithmetic.)

---

### **Additional Practice Problems**

Find the area of each region described.

1. Bounded by $y = x^3$ and $y = x$. (Hint: They intersect at three points.)
2. Bounded by $y = 2 - x^2$ and $y = x$.
3. Bounded by $x = y^2$ and $x = 2 - y^2$. (Hint: Use dy)
4. Bounded by $y = e^x$, $y = e^{-x}$, and $x = \ln 2$.
5. Bounded by $y = \cos x$, $y = \sin(2x)$, $x = 0$, $x = \frac{\pi}{2}$. (Hint: Find intersection on the interval)

---

### **Selected Solutions**

1. **Intersections:** $x^3 = x \Rightarrow x^3 - x = 0 \Rightarrow x(x-1)(x+1) = 0$, so $x = -1, 0, 1$.

   On $[-1, 0]$, test $x = -0.5$: $x^3 = -0.125$, $x = -0.5$, so $x^3 \ge x$ (since -0.125 > -0.5).
   On $[0, 1]$, test $x = 0.5$: $x^3 = 0.125$, $x = 0.5$, so $x \ge x^3$.

   $$A = \int_{-1}^{0} (x^3 - x) \, dx + \int_{0}^{1} (x - x^3) \, dx$$
   $$= \left[ \frac{x^4}{4} - \frac{x^2}{2} \right]_{-1}^{0} + \left[ \frac{x^2}{2} - \frac{x^4}{4} \right]_{0}^{1}$$
   $$= (0 - (\frac{1}{4} - \frac{1}{2})) + ((\frac{1}{2} - \frac{1}{4}) - 0) = (0 - (-\frac{1}{4})) + (\frac{1}{4}) = \frac{1}{4} + \frac{1}{4} = \frac{1}{2}$$

2. **Intersections:** $2 - x^2 = x \Rightarrow x^2 + x - 2 = 0 \Rightarrow (x+2)(x-1) = 0$, so $x = -2, 1$.

   On $[-2, 1]$, test $x=0$: parabola $2$, line $0$, so parabola above line.

   $$A = \int_{-2}^{1} ((2-x^2) - x) \, dx = \int_{-2}^{1} (-x^2 - x + 2) \, dx$$
   $$= \left[ -\frac{x^3}{3} - \frac{x^2}{2} + 2x \right]_{-2}^{1}$$
   At $x=1$: $-\frac{1}{3} - \frac{1}{2} + 2 = -\frac{2}{6} - \frac{3}{6} + \frac{12}{6} = \frac{7}{6}$
   At $x=-2$: $-\frac{-8}{3} - \frac{4}{2} + 2(-2) = \frac{8}{3} - 2 - 4 = \frac{8}{3} - 6 = \frac{8}{3} - \frac{18}{3} = -\frac{10}{3}$
   $$A = \frac{7}{6} - \left(-\frac{10}{3}\right) = \frac{7}{6} + \frac{20}{6} = \frac{27}{6} = \frac{9}{2}$$

3. **Use dy. Intersections:** $y^2 = 2 - y^2 \Rightarrow 2y^2 = 2 \Rightarrow y^2 = 1 \Rightarrow y = -1, 1$. Limits: $c = -1$, $d = 1$.

   The right curve is $x = 2 - y^2$, the left is $x = y^2$.

   $$A = \int_{-1}^{1} ((2-y^2) - y^2) \, dy = \int_{-1}^{1} (2 - 2y^2) \, dy = \left[ 2y - \frac{2y^3}{3} \right]_{-1}^{1}$$
   $$= \left( 2 - \frac{2}{3} \right) - \left( -2 + \frac{2}{3} \right) = \left( \frac{4}{3} \right) - \left( -\frac{4}{3} \right) = \frac{8}{3}$$

4. **Intersection:** $e^x = e^{-x} \Rightarrow e^{2x} = 1 \Rightarrow 2x = 0 \Rightarrow x = 0$. From $x=0$ to $x=\ln 2$, $e^x \ge e^{-x}$.

   $$A = \int_{0}^{\ln 2} (e^x - e^{-x}) \, dx = \left[ e^x + e^{-x} \right]_{0}^{\ln 2}$$
   $$= (e^{\ln 2} + e^{-\ln 2}) - (e^0 + e^0) = \left(2 + \frac{1}{2}\right) - (1 + 1) = \frac{5}{2} - 2 = \frac{1}{2}$$

5. **Intersection on $[0, \pi/2]$:** $\cos x = \sin(2x)$. Use identity $\sin(2x) = 2\sin x \cos x$, so $\cos x = 2\sin x \cos x \Rightarrow \cos x (1 - 2\sin x) = 0$.
   So either $\cos x = 0$ (gives $x = \pi/2$, but at the endpoint) or $1 - 2\sin x = 0 \Rightarrow \sin x = \frac{1}{2} \Rightarrow x = \frac{\pi}{6}$.
   So intersection at $x = \frac{\pi}{6}$.

   On $[0, \frac{\pi}{6}]$, test $x=0$: $\cos 0 = 1$, $\sin 0 = 0$, so $\cos x$ above.
   On $[\frac{\pi}{6}, \frac{\pi}{2}]$, test $x=\frac{\pi}{4}$: $\cos\frac{\pi}{4} \approx 0.707$, $\sin\frac{\pi}{2} = 1$, so $\sin(2x)$ above.

   $$A = \int_{0}^{\pi/6} (\cos x - \sin 2x) \, dx + \int_{\pi/6}^{\pi/2} (\sin 2x - \cos x) \, dx$$
   Compute: $\int \cos x \, dx = \sin x$, $\int \sin 2x \, dx = -\frac{1}{2}\cos 2x$.

   First integral: $\left[ \sin x + \frac{1}{2}\cos 2x \right]_{0}^{\pi/6} = \left( \frac{1}{2} + \frac{1}{2}\cos\frac{\pi}{3} \right) - \left( 0 + \frac{1}{2}(1) \right) = \left( \frac{1}{2} + \frac{1}{2}\cdot\frac{1}{2} \right) - \frac{1}{2} = \frac{1}{2} + \frac{1}{4} - \frac{1}{2} = \frac{1}{4}$.

   Second integral: $\left[ -\frac{1}{2}\cos 2x - \sin x \right]_{\pi/6}^{\pi/2} = \left( -\frac{1}{2}\cos\pi - \sin\frac{\pi}{2} \right) - \left( -\frac{1}{2}\cos\frac{\pi}{3} - \sin\frac{\pi}{6} \right)$
   $$= \left( -\frac{1}{2}(-1) - 1 \right) - \left( -\frac{1}{2}\cdot\frac{1}{2} - \frac{1}{2} \right) = \left( \frac{1}{2} - 1 \right) - \left( -\frac{1}{4} - \frac{1}{2} \right)$$
   $$= \left( -\frac{1}{2} \right) - \left( -\frac{3}{4} \right) = -\frac{1}{2} + \frac{3}{4} = \frac{1}{4}$$

   Total area: $\frac{1}{4} + \frac{1}{4} = \frac{1}{2}$.



Area between curves is all about setting up the right integral—choosing the right variable and the right limits. Sketching is your best friend. Once you have the setup, the integration is (usually) straightforward. Practice these until the process feels automatic. Next, we'll look at volumes of revolution, where we spin these areas around axes!