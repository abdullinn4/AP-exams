# Lesson 14: Riemann Sums and Accumulation

### **14.1 Accumulation as Area Under a Rate Curve**

**Definition:**
If a function $f(x)$ represents a **rate of change** (e.g., velocity, marginal cost, flow rate), then the **accumulated change** over the interval $[a, b]$ is given by the **area** of the region between the graph of $f$ and the $x$-axis from $x = a$ to $x = b$.

Mathematically, this area is represented by the **definite integral**:
$$
\text{Accumulated change} = \int_a^b f(x) \, dx
$$

**Comments:**

*   **Units:** The unit of the accumulated change is the unit of $f(x)$ multiplied by the unit of $x$. For example, if $f(t)$ is velocity in m/s and $t$ is time in seconds, then the area (integral) gives displacement in meters.
*   **Sign:** If $f(x)$ is positive over an interval, the area contributes positively to the accumulation. If $f(x)$ is negative, the area contributes negatively (the accumulation decreases).
*   **Geometric Interpretation:** The area can sometimes be computed exactly using geometry (rectangles, triangles, circles) when the graph consists of straight lines or simple curves.

**Examples:**

1.  **Velocity to Displacement:** The graph below shows the velocity $v(t)$ of a particle. Find the displacement from $t=0$ to $t=6$.
    
    *Graph: velocity is a straight line from (0,4) to (2,0), then horizontal at 0 from t=2 to t=4, then straight line from (4,0) to (6,-4).*
    
    *   From $t=0$ to $t=2$: area is a triangle: $\frac{1}{2} \times 2 \times 4 = 4$.
    *   From $t=2$ to $t=4$: area is 0.
    *   From $t=4$ to $t=6$: triangle below axis: $\frac{1}{2} \times 2 \times (-4) = -4$.
    *   Total displacement $= 4 + 0 + (-4) = 0$.
2.  **Geometry with Negative Area:** A function $f(x)$ is given by the graph: line from (0,2) to (3,-1). Find $\int_0^3 f(x) \, dx$.
    *   The region is a triangle above x-axis from x=0 to x=2 (where f=0), and a triangle below from x=2 to x=3.
    *   Area above: base=2, height=2, area=2.
    *   Area below: base=1, height=1, area=0.5, but below axis so negative.
    *   Total integral $= 2 - 0.5 = 1.5$.

---

### **14.2 Approximating Definite Integrals: Riemann Sums**

**Definition:**
A **Riemann sum** approximates the area under a curve by dividing the interval into subintervals, constructing shapes (usually rectangles) whose areas are easy to compute, and summing these areas.

Given an interval $[a, b]$ divided into $n$ subintervals of width $\Delta x$, choose a sample point $x_i^*$ in each subinterval. The Riemann sum is:
$$
\sum_{i=1}^n f(x_i^*) \, \Delta x
$$
Common choices for $x_i^*$:

*   **Left Riemann sum:** $x_i^*$ is the left endpoint of each subinterval.
*   **Right Riemann sum:** $x_i^*$ is the right endpoint.
*   **Midpoint Riemann sum:** $x_i^*$ is the midpoint.

**Comments:**

*   **Partitions:** Subintervals can be uniform ($\Delta x$ constant) or nonuniform.
*   **Accuracy:** As $n$ increases ($\Delta x$ decreases), the approximation improves.
*   **Under/Overestimate:**
    *   If $f$ is increasing: Left sum underestimates, Right sum overestimates.
    *   If $f$ is decreasing: Left sum overestimates, Right sum underestimates.
    *   If $f$ is concave up: Midpoint sum underestimates, Trapezoidal sum overestimates.
    *   If $f$ is concave down: Midpoint overestimates, Trapezoidal underestimates.

**Examples:**

1.  **Left and Right Sums:** Approximate $\int_1^3 x^2 \, dx$ with $n=4$ using left and right sums.
    *   $\Delta x = \frac{3-1}{4} = 0.5$.
    *   Left endpoints: $x = 1, 1.5, 2, 2.5$.
        Left sum $= 0.5 [f(1) + f(1.5) + f(2) + f(2.5)] = 0.5[1 + 2.25 + 4 + 6.25] = 0.5 \times 13.5 = 6.75$.
    *   Right endpoints: $x = 1.5, 2, 2.5, 3$.
        Right sum $= 0.5 [f(1.5) + f(2) + f(2.5) + f(3)] = 0.5[2.25 + 4 + 6.25 + 9] = 0.5 \times 21.5 = 10.75$.
    *   Since $f(x)=x^2$ is increasing on [1,3], left sum underestimates, right overestimates. Exact integral is $\frac{26}{3} \approx 8.667$.
2.  **Midpoint Sum:** Approximate $\int_0^2 e^x \, dx$ with $n=4$ using midpoint rule.
    *   $\Delta x = 0.5$. Midpoints: $x = 0.25, 0.75, 1.25, 1.75$.
    *   Midpoint sum $= 0.5 [e^{0.25} + e^{0.75} + e^{1.25} + e^{1.75}] \approx 0.5[1.2840 + 2.1170 + 3.4903 + 5.7546] = 0.5 \times 12.6459 = 6.32295$.
    *   Exact integral $= e^2 - 1 \approx 6.389$.
3.  **Nonuniform Partition:** Given data:
    
    | $x$ | 0 | 1 | 3 | 6 |
    |---|---|---|---|---|
    | $f(x)$ | 2 | 4 | 5 | 1 |
    
    Approximate $\int_0^6 f(x) \, dx$ using left sum.
    *   Subintervals: [0,1] width 1, [1,3] width 2, [3,6] width 3.
    *   Left sum: $1 \cdot f(0) + 2 \cdot f(1) + 3 \cdot f(3) = 1(2) + 2(4) + 3(5) = 2+8+15=25$.

---

### **14.3 The Trapezoidal Rule**

**Definition:**
The **Trapezoidal Rule** approximates the area under $f(x)$ by dividing the interval into subintervals and approximating the area on each subinterval by a trapezoid.

For $n$ subintervals of equal width $\Delta x = \frac{b-a}{n}$, the approximation is:
$$
T_n = \frac{\Delta x}{2} \left[ f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n) \right]
$$
where $x_0 = a, x_n = b$.

**Comments:**

*   The Trapezoidal Rule averages the left and right sums: $T_n = \frac{L_n + R_n}{2}$.
*   It is generally more accurate than left or right sums for the same $n$.
*   Error bound: The approximation error tends to be smaller if the function is relatively smooth.

**Examples:**

1.  **Trapezoidal Rule:** Approximate $\int_1^3 x^2 \, dx$ with $n=4$ using trapezoidal rule.
    *   $\Delta x = 0.5$, $x_0=1, x_1=1.5, x_2=2, x_3=2.5, x_4=3$.
    *   $T_4 = \frac{0.5}{2} [f(1) + 2f(1.5) + 2f(2) + 2f(2.5) + f(3)] = 0.25[1 + 2(2.25) + 2(4) + 2(6.25) + 9] = 0.25[1 + 4.5 + 8 + 12.5 + 9] = 0.25 \times 35 = 8.75$.
    *   Compare with left (6.75) and right (10.75). Exact $\approx 8.667$.
2.  **Given a Table:** Use trapezoidal rule to approximate $\int_0^6 f(x) \, dx$ from the table:
    
    | $x$ | 0 | 2 | 4 | 6 |
    |---|---|---|---|---|
    | $f(x)$ | 3 | 7 | 11 | 5 |
    
    *   $n=3$ subintervals, but widths: 2 each.
    *   $T = \frac{2}{2} [f(0) + 2f(2) + 2f(4) + f(6)] = 1[3 + 2(7) + 2(11) + 5] = 3+14+22+5=44$.

---

### **14.4 The Definite Integral as a Limit of Riemann Sums**

**Definition:**
The **definite integral** of a continuous function $f$ over $[a, b]$ is the limit of Riemann sums as the number of subintervals $n \to \infty$ (or equivalently, as the maximum subinterval width $\Delta x \to 0$):
$$
\int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i^*) \, \Delta x
$$
provided the limit exists and is the same for any choice of sample points $x_i^*$.

**Comments:**

*   This definition connects the geometric idea of area to an analytic limit process.
*   For continuous functions on $[a, b]$, the limit always exists.
*   The integral can be interpreted as **net accumulation** (area above axis minus area below).

**Examples:**

1.  **Express a limit as an integral:** Express $\lim_{n \to \infty} \sum_{i=1}^n \left( 3 + \frac{6i}{n} \right)^2 \cdot \frac{6}{n}$ as a definite integral.
    *   Recognize: $\Delta x = \frac{6}{n}$, and $x_i^* = 3 + \frac{6i}{n}$. As $i$ goes from 1 to $n$, $x_i^*$ goes from $3+\frac{6}{n}$ to $3+6$. In the limit, the interval is from $x=3$ to $x=9$.
    *   So the limit equals $\int_3^9 x^2 \, dx$.
2.  **Write an integral as a limit:** Write $\int_1^5 (2x+1) \, dx$ as a limit of right Riemann sums.
    *   Divide $[1,5]$ into $n$ equal subintervals: $\Delta x = \frac{4}{n}$.
    *   Right endpoint: $x_i = 1 + i \Delta x = 1 + \frac{4i}{n}$.
    *   Right Riemann sum: $\sum_{i=1}^n f\left(1 + \frac{4i}{n}\right) \cdot \frac{4}{n} = \sum_{i=1}^n \left[ 2\left(1 + \frac{4i}{n}\right) + 1 \right] \cdot \frac{4}{n} = \sum_{i=1}^n \left(3 + \frac{8i}{n}\right) \cdot \frac{4}{n}$.
    *   So $\int_1^5 (2x+1) \, dx = \lim_{n \to \infty} \sum_{i=1}^n \left(3 + \frac{8i}{n}\right) \cdot \frac{4}{n}$.

---

### **Lesson 14 Summary**

**Key Ideas:**

1.  **Accumulation = Area under rate curve.** The definite integral $\int_a^b f(x) \, dx$ gives the net accumulation of $f$ over $[a, b]$.
2.  **Riemann Sums:** Approximate integrals using rectangles (left, right, midpoint) or trapezoids.
3.  **Trapezoidal Rule:** Average of left and right sums, often more accurate.
4.  **Definite Integral as a Limit:** The exact integral is the limit of Riemann sums as $n \to \infty$.

**Estimating Behavior:**

*   Increasing function: Left underestimate, Right overestimate.
*   Decreasing function: Left overestimate, Right underestimate.
*   Concave up: Midpoint underestimate, Trapezoidal overestimate.
*   Concave down: Midpoint overestimate, Trapezoidal underestimate.

**Units:** The integral's units are (units of $f$) × (units of $x$).

---

### **Additional Practice Problems**

1.  The graph of $f(x)$ consists of line segments from (0,0) to (2,4) to (4,0). Compute $\int_0^4 f(x) \, dx$ geometrically.
2.  Approximate $\int_0^4 \sqrt{x} \, dx$ using a left Riemann sum with $n=4$. Is it an overestimate or underestimate?
3.  Use the Trapezoidal Rule with $n=4$ to approximate $\int_0^2 \frac{1}{1+x^2} \, dx$.
4.  Given the table of $v(t)$ (velocity in m/s):
    
    | $t$ (s) | 0 | 1 | 2 | 3 | 4 |
    |---|---|---|---|---|---|
    | $v(t)$ | 2 | 5 | 3 | 1 | 0 |
    
    Estimate the distance traveled from $t=0$ to $t=4$ using a right Riemann sum.
5.  Express $\lim_{n \to \infty} \sum_{i=1}^n \frac{2}{n} \sqrt{4 + \frac{6i}{n}}$ as a definite integral.
6.  For $f(x) = \cos x$ on $[0, \frac{\pi}{2}]$, which Riemann sum (left, right, midpoint) gives an overestimate? Why?
7.  Approximate $\int_{-1}^1 e^{-x^2} \, dx$ using the midpoint rule with $n=4$.
8.  The function $g(x)$ is decreasing and concave down on $[1,5]$. For approximating $\int_1^5 g(x) \, dx$ with $n=4$, order the approximations (Left, Right, Midpoint, Trapezoidal) from smallest to largest.
9.  Write $\int_0^3 (x^3 - 2x) \, dx$ as a limit of Riemann sums using left endpoints.
10. A car accelerates from rest. Its velocity at time $t$ is given by $v(t) = 10t - t^2$ for $0 \le t \le 10$. Use a right Riemann sum with $n=5$ to approximate the distance traveled from $t=0$ to $t=10$.

**Selected Solutions:**

1.  Area is a triangle from (0,0) to (2,4) to (4,0): base=4, height=4, area $= \frac{1}{2} \times 4 \times 4 = 8$. So $\int_0^4 f(x) \, dx = 8$.
2.  $\Delta x = 1$. Left endpoints: 0,1,2,3. Left sum $= 1[\sqrt{0} + \sqrt{1} + \sqrt{2} + \sqrt{3}] = 0+1+1.414+1.732=4.146$. Since $\sqrt{x}$ is increasing, left sum underestimates. Exact integral $= \frac{16}{3} \approx 5.333$.
3.  $\Delta x = 0.5$, $x_0=0, x_1=0.5, x_2=1, x_3=1.5, x_4=2$. $T = \frac{0.5}{2}[f(0)+2f(0.5)+2f(1)+2f(1.5)+f(2)] = 0.25[1 + 2(\frac{1}{1.25}) + 2(\frac{1}{2}) + 2(\frac{1}{3.25}) + \frac{1}{5}]$. Compute: $\frac{1}{1.25}=0.8$, $\frac{1}{2}=0.5$, $\frac{1}{3.25}\approx0.3077$, $\frac{1}{5}=0.2$. So $= 0.25[1 + 1.6 + 1 + 0.6154 + 0.2] = 0.25[4.4154] = 1.10385$. Exact $= \arctan(2) \approx 1.10715$.
4.  Right sum: use velocities at t=1,2,3,4. Widths are 1 each. Right sum $= 1[5+3+1+0] = 9$ meters.
5.  Recognize $\Delta x = \frac{2}{n}$, and $x_i^* = 4 + \frac{6i}{n}$. As i from 1 to n, x from $4+\frac{6}{n}$ to 4+6=10. In limit, interval [4,10]. So integral $= \int_4^{10} \sqrt{x} \, dx$.
6.  $\cos x$ is decreasing on $[0, \pi/2]$. For decreasing functions, left sum overestimates, right sum underestimates. Midpoint? Since concave down? Actually cos is concave down on [0, π/2] (second derivative -cos x < 0). So midpoint overestimates? Rule: concave down → midpoint overestimates, trapezoidal underestimates. So left and midpoint overestimate, right underestimates.
7.  $\Delta x = 0.5$. Midpoints: -0.75, -0.25, 0.25, 0.75. Midpoint sum $= 0.5 [e^{-(-0.75)^2} + e^{-(-0.25)^2} + e^{-(0.25)^2} + e^{-(0.75)^2}] = 0.5[e^{-0.5625} + e^{-0.0625} + e^{-0.0625} + e^{-0.5625}] = 0.5[0.5698 + 0.9394 + 0.9394 + 0.5698] = 0.5[3.0184] = 1.5092$.
8.  Decreasing: Left > Right. Concave down: Midpoint > Trapezoidal? Actually for decreasing and concave down: Left overestimates, Right underestimates. For concave down, midpoint overestimates, trapezoidal underestimates. So order from smallest to largest: Right (underestimate both), Trapezoidal (underestimate but better than Right?), then Midpoint, then Left. Typically: Right < Trapezoidal < Exact < Midpoint < Left? Need to think: For decreasing, Left > Exact > Right. For concave down, Midpoint > Exact > Trapezoidal. So combined: Right is smallest, then Trapezoidal, then Exact, then Midpoint, then Left? But note: Trapezoidal is average of Left and Right, so it lies between them. Since Left > Right, Trapezoidal is between. Also, since concave down, Midpoint > Exact. And Exact is between Left and Right? Actually for decreasing, Left > Exact > Right, so Exact is between. So order: Right < Trapezoidal < Exact < Midpoint < Left. So smallest to largest: Right, Trapezoidal, Exact, Midpoint, Left.
9.  $\Delta x = \frac{3}{n}$. Left endpoints: $x_i = 0 + (i-1)\Delta x = \frac{3(i-1)}{n}$. Left sum $= \sum_{i=1}^n f\left( \frac{3(i-1)}{n} \right) \cdot \frac{3}{n} = \sum_{i=1}^n \left[ \left( \frac{3(i-1)}{n} \right)^3 - 2 \cdot \frac{3(i-1)}{n} \right] \cdot \frac{3}{n}$. So integral $= \lim_{n \to \infty} \sum_{i=1}^n \left( \frac{27(i-1)^3}{n^3} - \frac{6(i-1)}{n} \right) \cdot \frac{3}{n}$.
10. $\Delta t = 2$. Right endpoints: t=2,4,6,8,10. Right sum $= 2[v(2)+v(4)+v(6)+v(8)+v(10)] = 2[(20-4)+(40-16)+(60-36)+(80-64)+(100-100)] = 2[16+24+24+16+0] = 2[80] = 160$. Exact distance $= \int_0^{10} (10t-t^2) dt = [5t^2 - t^3/3]_0^{10} = 500 - 1000/3 = 500 - 333.33 = 166.67$. So approximation 160 is an underestimate since v is increasing? Actually v(t)=10t-t^2 is increasing on [0,5] and decreasing on [5,10], so not monotonic. But right sum with n=5 may still underestimate because the function is concave down? Actually v''(t) = -2, so concave down everywhere, so trapezoidal would overestimate? Not sure. But anyway, approximation is 160.