# **Lesson 19: Area Between Curves**

### **19.1 Area with Respect to x (Vertical Slices)**

**Definition:**
If a region is bounded above by a curve $y = f(x)$ and below by a curve $y = g(x)$, and on the sides by the vertical lines $x = a$ and $x = b$, where $f(x) \ge g(x)$ on the interval $[a, b]$, then the area of the region is given by the definite integral:
$$A = \int_{a}^{b} \left[f(x) - g(x)\right] \, dx$$
This sums the areas of infinitesimally thin vertical rectangles of width $dx$ and height $f(x) - g(x)$.

**Comments & Instructions:**

1. **Sketch:** Always sketch the region, if possible. Identify all bounding curves.
2. **Find Limits of Integration ($x = a$, $x = b$):** The limits are the x-coordinates of the intersection points of the curves, found by solving $f(x) = g(x)$. If the region is bounded by vertical lines, those x-values are your limits.
3. **Identify "Top" and "Bottom":** On the entire interval from $a$ to $b$, determine which function is greater (graphically higher). The integrand is **(Top) - (Bottom)**.
4. **Integrate:** Set up and evaluate the definite integral.
5. **Why it works:** The integral accumulates the linear (one-dimensional) height $f(x)-g(x)$ across the horizontal width $dx$, which yields an area (two-dimensional measure).

**Examples:**

1. **Basic Region:** Find the area of the region bounded by $y = x + 2$ and $y = x^2$.
    - **Step 1: Sketch.** The line and parabola intersect in two places.
    - **Step 2: Find intersections.** $x^2 = x + 2 \Rightarrow x^2 - x - 2 = 0 \Rightarrow (x-2)(x+1)=0$. So, $a = -1$ and $b = 2$.
    - **Step 3: Identify Top/Bottom.** On the interval $[-1, 2]$, the line $y = x+2$ is above the parabola $y = x^2$. (Test at $x=0$: $2 > 0$).
    - **Step 4: Integrate.**
    $$A = \int_{-1}^{2} \left[(x+2) - (x^2)\right] \, dx = \int_{-1}^{2} (-x^2 + x + 2) \, dx$$
    $$= \left[ -\frac{x^3}{3} + \frac{x^2}{2} + 2x \right]_{-1}^{2}$$
    $$= \left( -\frac{8}{3} + 2 + 4 \right) - \left( \frac{1}{3} + \frac{1}{2} - 2 \right) = \left( \frac{10}{3} \right) - \left( -\frac{7}{6} \right) = \frac{20}{6} + \frac{7}{6} = \frac{27}{6} = \frac{9}{2}$$
2. **Region Bounded by the x-axis:** Find the area between the curve $y = e^x - 1$, the x-axis, and the lines $x = 0$ and $x = \ln 3$.
    - **Comment:** The x-axis is the line $y = 0$. Here, $f(x) = e^x - 1$ and $g(x) = 0$. We must check if $f(x)$ is above or below $g(x)$ on $[0, \ln 3]$.
    - At $x=0$, $e^0 - 1 = 0$. At $x=\ln 3$, $e^{\ln 3} - 1 = 2 > 0$. On the interval, $e^x - 1 \ge 0$. So it's the "top" function.
    - **Integrate:**
    $$A = \int_{0}^{\ln 3} \left[(e^x - 1) - 0\right] \, dx = \int_{0}^{\ln 3} (e^x - 1) \, dx = \left[ e^x - x \right]_{0}^{\ln 3}$$
    $$= (e^{\ln 3} - \ln 3) - (e^0 - 0) = (3 - \ln 3) - (1) = 2 - \ln 3$$

---

### **19.2 Area with Respect to y (Horizontal Slices)**

**Definition:**
If a region is bounded on the right by a curve $x = f(y)$ and on the left by a curve $x = g(y)$, and above and below by the horizontal lines $y = c$ and $y = d$, where $f(y) \ge g(y)$ on $[c, d]$, then the area of the region is given by:
$$A = \int_{c}^{d} \left[f(y) - g(y)\right] \, dy$$
This sums the areas of infinitesimally thin horizontal rectangles of height $dy$ and length $f(y) - g(y)$.

**Comments & Instructions:**

1. **When to use dy:** This method is often preferable when:
    - The bounding curves are more naturally expressed as functions of $y$ (e.g., $x = y^2$ vs. $y = \pm\sqrt{x}$).
    - Using vertical slices would require splitting the region into two or more subregions because the "top" and "bottom" functions switch.
2. **Process:**
    - Sketch the region.
    - Find the y-coordinates of the intersection points or boundaries ($y = c$, $y = d$).
    - For a given $y$ in $[c, d]$, identify which x-value is greater (farther to the right). The integrand is **(Right) - (Left)**.
3. **Limits are in y:** The limits of integration $c$ and $d$ are y-values, and you integrate with respect to $y$.

**Examples:**

1. **Region where dy is simpler:** Find the area of the region bounded by $x = y^2 - 2$ and $x = y$.
    - **Comment:** If we tried vertical slices, the "bottom" is the parabola, but the "top" switches from the left branch of the parabola to the line. Requires two integrals. Use horizontal slices.
    - **Step 1: Find intersections in terms of y.** $y^2 - 2 = y \Rightarrow y^2 - y - 2 = 0 \Rightarrow (y-2)(y+1)=0$. So, $c = -1$ and $d = 2$.
    - **Step 2: Identify Right/Left.** On the interval $[-1, 2]$, the line $x = y$ is to the **right** of the parabola $x = y^2 - 2$. (Test $y=0$: $0 > -2$).
    - **Step 3: Integrate.**
    $$A = \int_{-1}^{2} \left[y - (y^2 - 2)\right] \, dy = \int_{-1}^{2} (-y^2 + y + 2) \, dy$$
    $$= \left[ -\frac{y^3}{3} + \frac{y^2}{2} + 2y \right]_{-1}^{2} = \frac{9}{2}$$

---

### **19.3 Regions Requiring Multiple Integrals or Absolute Value**

**Definition:**
When two curves intersect within the interval defining the region, the "upper" and "lower" (or "right" and "left") functions exchange roles. The total area must be calculated as the **sum of two or more definite integrals**, or as a single integral of the **absolute value of the difference** of the functions. For the AP exam, the sum of integrals approach is standard and clearer.

**Comments & Instructions:**

1. **Identify Intersections:** Find **all** points where the curves intersect within the region of interest.
2. **Split the Region:** Use the intersection points to split the total region into subregions where one curve is consistently above the other.
3. **Area is Additive:** The total area is the sum of the areas of the subregions.
$$A = \int_{a}^{p} [f_1(x) - g_1(x)] \, dx + \int_{p}^{b} [f_2(x) - g_2(x)] \, dx$$
where $x=p$ is the intersection point where the top/bottom switch.
4. **Area vs. Net Signed Area:** The definite integral $\int_{a}^{b} (f(x)-g(x)) \, dx$ gives the *net signed area*. If the curves cross, this net value will be less than the total geometric area. To find total area, we ensure each integrand is positive (Top - Bottom).

**Examples:**

1. **Curves that Cross:** Find the area of the region between $y = \sin x$ and $y = \cos x$ from $x = 0$ to $x = \pi$.
    - **Step 1: Find intersection in the interval.** $\sin x = \cos x \Rightarrow \tan x = 1 \Rightarrow x = \frac{\pi}{4}$ in $[0, \pi]$.
    - **Step 2: Determine which is top on each subinterval.**
    On $[0, \frac{\pi}{4}]$: Test $x=\frac{\pi}{6}$, $\cos(\frac{\pi}{6}) \approx 0.866 > \sin(\frac{\pi}{6})=0.5$. So $\cos x$ is above $\sin x$.
    On $[\frac{\pi}{4}, \pi]$: Test $x=\frac{\pi}{2}$, $\sin(\frac{\pi}{2})=1 > \cos(\frac{\pi}{2})=0$. So $\sin x$ is above $\cos x$.
    - **Step 3: Set up sum of integrals.**
    $$A = \int_{0}^{\pi/4} (\cos x - \sin x) \, dx + \int_{\pi/4}^{\pi} (\sin x - \cos x) \, dx$$
    - **Step 4: Evaluate.**
    $$\left[ \sin x + \cos x \right]_{0}^{\pi/4} + \left[ -\cos x - \sin x \right]_{\pi/4}^{\pi}$$
    $$= \left[ \left( \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} \right) - (0 + 1) \right] + \left[ \left( -(-1) - 0 \right) - \left( -\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2} \right) \right]$$
    $$= \left[ \sqrt{2} - 1 \right] + \left[ (1) - (-\sqrt{2}) \right] = (\sqrt{2} - 1) + (1 + \sqrt{2}) = 2\sqrt{2}$$

---

### **Lesson 19 Summary**

**Key Concepts:**

- **Area Between Curves:** $A = \int_{a}^{b} (\text{Top} - \text{Bottom}) \, dx$ or $A = \int_{c}^{d} (\text{Right} - \text{Left}) \, dy$.
- **Choosing dx or dy:** Use `dx` (vertical slices) when curves are functions of `x` and the top/bottom is consistent. Use `dy` (horizontal slices) when curves are functions of `y` or to avoid splitting the region.
- **Multiple Regions:** If curves intersect within the region, split the integral at each intersection point. The total area is the sum of the absolute areas of each subregion.
- **Calculator Use (Topic 8.6):** Use your calculator to:
    - Graph functions to visualize the region.
    - Find points of intersection (`calc:intersect`).
    - **Evaluate** the definite integrals you set up. (Remember: You must show the integral setup on the exam to receive credit.)

**Common Pitfalls:**

- Forgetting to find **all** points of intersection.
- Using a single integral when curves cross, which yields *net signed area*, not total geometric area.
- Incorrectly identifying the "top" and "bottom" (or "right" and "left") functions over the entire interval.

---

### **Additional Practice Problems**

Find the area of the region described.

1. Bounded by $y = x^3$, $y = x$. (Hint: They intersect at three points.)
2. Bounded by $y = 2 - x^2$, $y = x$.
3. Bounded by $x = y^2$, $x = 2 - y^2$. (Hint: Use dy)
4. Bounded by $y = e^x$, $y = e^{-x}$, and $x = \ln 2$.
5. Bounded by $y = \cos x$, $y = \sin(2x)$, $x = 0$, $x = \frac{\pi}{2}$. (Hint: Find intersection on the interval)
6. Bounded by $y = \frac{1}{x}$, $y = x$, and $y = \frac{x}{4}$. (Hint: Region is in the first quadrant; two curves form the top/bottom? Consider sketching carefully.)

**Selected Solutions:**

1. **Intersections:** $x^3 = x \Rightarrow x^3 - x = 0 \Rightarrow x(x-1)(x+1)=0$, so $x = -1, 0, 1$.
    
    On $[-1, 0]$, $x^3 \ge x$ (test $x=-0.5$: -0.125 > -0.5).
    
    On $[0, 1]$, $x \ge x^3$ (test $x=0.5$: 0.5 > 0.125).
    
    $$A = \int_{-1}^{0} (x^3 - x) \, dx + \int_{0}^{1} (x - x^3) \, dx = \left[ \frac{x^4}{4} - \frac{x^2}{2} \right]_{-1}^{0} + \left[ \frac{x^2}{2} - \frac{x^4}{4} \right]_{0}^{1}$$
    $$= (0 - (\frac{1}{4} - \frac{1}{2})) + ((\frac{1}{2} - \frac{1}{4}) - 0) = (0 - (-\frac{1}{4})) + (\frac{1}{4}) = \frac{1}{4} + \frac{1}{4} = \frac{1}{2}$$
    
2. **Intersections:** $2 - x^2 = x \Rightarrow x^2 + x - 2 = 0 \Rightarrow (x+2)(x-1)=0$, so $x = -2, 1$.
    
    On $[-2, 1]$, parabola $y=2-x^2$ is above the line $y=x$.
    $$A = \int_{-2}^{1} ((2-x^2) - x) \, dx = \int_{-2}^{1} (-x^2 - x + 2) \, dx = \left[ -\frac{x^3}{3} - \frac{x^2}{2} + 2x \right]_{-2}^{1}$$
    $$= \left( -\frac{1}{3} - \frac{1}{2} + 2 \right) - \left( \frac{8}{3} - 2 - 4 \right) = \left( \frac{7}{6} \right) - \left( -\frac{10}{3} \right) = \frac{7}{6} + \frac{20}{6} = \frac{27}{6} = \frac{9}{2}$$
    
3. **Use dy. Intersections:** $y^2 = 2 - y^2 \Rightarrow 2y^2 = 2 \Rightarrow y^2 = 1 \Rightarrow y = -1, 1$. Limits: $c = -1$, $d = 1$.
    
    The right curve is $x = 2 - y^2$, the left is $x = y^2$.
    $$A = \int_{-1}^{1} ((2-y^2) - y^2) \, dy = \int_{-1}^{1} (2 - 2y^2) \, dy = \left[ 2y - \frac{2y^3}{3} \right]_{-1}^{1}$$
    $$= \left( 2 - \frac{2}{3} \right) - \left( -2 + \frac{2}{3} \right) = \left( \frac{4}{3} \right) - \left( -\frac{4}{3} \right) = \frac{8}{3}$$
    
4. **Intersection:** $e^x = e^{-x} \Rightarrow e^{2x} = 1 \Rightarrow 2x = 0 \Rightarrow x=0$. From $x=0$ to $x=\ln 2$, $e^x \ge e^{-x}$.
$$A = \int_{0}^{\ln 2} (e^x - e^{-x}) \, dx = \left[ e^x + e^{-x} \right]_{0}^{\ln 2} = (e^{\ln 2} + e^{-\ln 2}) - (e^0 + e^0) = (2 + \frac{1}{2}) - (1+1) = \frac{5}{2} - 2 = \frac{1}{2}$$