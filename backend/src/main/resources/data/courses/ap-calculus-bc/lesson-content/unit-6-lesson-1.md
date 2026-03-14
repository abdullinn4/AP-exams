# Lesson 14: Riemann Sums and Accumulation

In the tangent line problem, you saw how the limit concept can help us to move from the slope of a line to the slope of a general curve.
A second classic problem in calculus is finding the area under a curve.

First of all, let's make sure you understand the sigma notation - that's a consice notation for sums. 
The sum of n terms $a_1$, $a_2$, $a_3$, . . . , $a_n$ is written as 
$$
\sum_{i=1}^{n} a_i = a_1 + a_2 + a_3 + ... +a_n
$$
* where $i$ is called index of summation
* $a_i$ is the $i\text{th}$  term of the sum
* the upper and lower bounds of summation are $n$ and 1.

### **Approximating Area**

So how do we find the area under a curve like $f(x) = x^2$ or $e^{-x^2}$?

/picture/

Usually we had some kind of rectangle and used the formula $A = bh$ or $A=\frac{1}{2}bh$ for triangle - everything was great. Unforntunately, here it sucks. 

Alight, as in the tangent line problem, we should start with approximation and then using limit concept move to the exact value. 
We can **approximate** the area using shapes we know how to measure, for instance **rectangles.**

/picture/

As you increase the number of rectangles, the approximation tends
to become better and better because the amount of area missed by the rectangles decreases.

/picture/

Let's work it out on some example. 

Use the five rectangles in Figure 4.8(a) and (b) to find two approximations of the area of the region lying between the graph of

$
f(x) = -x^2 + 4
$

and the $x$-axis between $x = 0$ and $x = 2$.

**Solution**

a. The right endpoints of the five intervals are $\frac{2}{5}i$, where $i = 1, 2, 3, 4, 5$. The width of each rectangle is $\frac{2}{5}$, and the height of each rectangle can be obtained by evaluating $f$ at the right endpoint of each interval.

$$
\left[0, \frac{2}{5}\right], \left[\frac{2}{5}, \frac{4}{5}\right], \left[\frac{4}{5}, \frac{6}{5}\right], \left[\frac{6}{5}, \frac{8}{5}\right], \left[\frac{8}{5}, 2\right]
$$

Evaluate $f(x) = -x^2 + 4$ at the right endpoints of these intervals.

The sum of the areas of the five rectangles is

$$
\sum_{i=1}^{5} f\left(\frac{2i}{5}\right) \left(\frac{2}{5}\right) = \sum_{i=1}^{5} \left[-\left(\frac{2i}{5}\right)^2 + 4\right] \left(\frac{2}{5}\right) = \frac{56}{25} = 2.24.
$$

Because the function is decreasing on $[0,2]$, the rectangles using right endpoints lie below the curve, so this approximation is an underestimate. You can conclude that the area of the region is greater than 2.24.

b. The left endpoints of the five intervals are $\frac{2}{5}(i - 1)$, where $i = 1, 2, 3, 4, 5$. The width of each rectangle is $\frac{2}{5}$, and the height of each rectangle can be obtained by evaluating $f$ at the left endpoint of each interval. So, the sum is

$$
\sum_{i=1}^{5} f\left(\frac{2i - 2}{5}\right) \left(\frac{2}{5}\right) = \sum_{i=1}^{5} \left[-\left(\frac{2i - 2}{5}\right)^2 + 4\right] \left(\frac{2}{5}\right) = \frac{96}{25} = 3.84.
$$

Because the function is decreasing on $[0,2]$, the rectangles using left endpoints extend above the curve, so this approximation is an overestimate. You can conclude that the area of the region is less than 3.84.

By combining the results in parts (a) and (b), you can conclude that  

 $2.24 < (\text{Area of region}) < 3.84$.

**Generally**

We want to find the area under a smooth curve $y = f(x)$ between two points $x = a$ and $x = b$. The curve never goes below the x‑axis.

To estimate this area, we can use rectangles. Here's how:

1. **Split the interval**  
   Divide $[a, b]$ into $n$ equal pieces.  
   Each piece has the same width:  
   $$\Delta x = \frac{b-a}{n}.$$

2. **Find the smallest and largest heights on each piece**  
   Because the curve is smooth, on each small piece the function has a lowest point and a highest point.  
   Let $f(m_i)$ be the lowest height on the $i$-th piece.  
   Let $f(M_i)$ be the highest height on the $i$-th piece.

3. **Draw two kinds of rectangles**  
   - **Inner rectangles** (inscribed): height = lowest height $f(m_i)$ – these stay completely under the curve.  
   - **Outer rectangles** (circumscribed): height = highest height $f(M_i)$ – these stick out above the curve.

4. **Calculate rectangle areas**  
   Area of one inner rectangle: $f(m_i) \cdot \Delta x$.  
   Area of one outer rectangle: $f(M_i) \cdot \Delta x$.

5. **Add up all the rectangle areas**  
   - **Lower sum** = total area of all inner rectangles:  
     $$s(n) = \sum_{i=1}^n f(m_i) \Delta x.$$
   - **Upper sum** = total area of all outer rectangles:  
     $$S(n) = \sum_{i=1}^n f(M_i) \Delta x.$$

6. **The true area is caught in between**  
   The lower sum is too small, the upper sum is too big, so the actual area must satisfy:  
   $$s(n) \le \text{Area under the curve} \le S(n).$$

If we use more and more rectangles (make $n$ larger), the lower and upper sums get closer together, trapping the true area more tightly.

### Theorem: The Lower and Upper Sums Meet in the Middle

Suppose a function $ f $ is continious and never drops below zero on the interval $[a, b]$.  
If we keep increasing the number of rectangles $ n $ used in our approximations, the lower sum (using the smallest heights) and the upper sum (using the largest heights) actually approach the same number. In symbols:

$$
\lim_{n \to \infty} s(n) = \lim_{n \to \infty} S(n).
$$

Because both sums squeeze toward the same value, the exact area is trapped between them and must equal that common limit. This is a direct application of the *Squeeze Theorem*.


### Defining Area Once and For All

Thanks to the theorem above, we can define the exact area under a curve in a very flexible way. You don’t have to use the smallest or largest height—you can pick *any* height on each subinterval, and the limit will still be the same.

**Definition (Area under a curve):**  
Let $ f $ be continious and nonnegative on $[a, b]$. The area of the region between the graph of $f$, the $x$‑axis, $x = a$, and $x = b$ is:

$$
\text{Area} = \lim_{n \to \infty} \sum_{i=1}^n f(c_i) \Delta x,
$$

where:
- $\Delta x = \frac{b-a}{n}$,
- $c_i$ is *any* point chosen from the $i$-th subinterval $[x_{i-1}, x_i]$.


So, to find the exact area: 
* split the interval into many tiny pieces
* pick any sample point on each piece,
* build a rectangle using the function’s height at that point,
* sum up all the rectangle areas,
* let the number of pieces go to infinity

The result is the area.

**A Partition with Unequal Widths for a Different Function**
What's interesting, although previously  we had subintervals of equal width, the example below shows that it's not necessary.

Consider the region bounded by the graph of $f(x) = x^2$ and the $x$-axis over the interval $ 0 \leq x \leq 1 $. We will evaluate the limit

$$
\lim_{n \to \infty} \sum_{i=1}^{n} f(x^*_i) \, \Delta x_i
$$

where the right endpoint of the $ i $-th subinterval is given by $ x^*_i = i^2/n^2 $ and $ \Delta x_i $ is the width of that subinterval.

**Solution**

First, determine the width of the $i$-th subinterval:

$$
\Delta x_i = \frac{i^2}{n^2} - \frac{(i-1)^2}{n^2}
          = \frac{i^2 - (i^2 - 2i + 1)}{n^2}
          = \frac{2i - 1}{n^2}.
$$

Now substitute into the limit expression, noting that $f(x^*_i) = (i^2/n^2)^2 = i^4/n^4$:

$$
\begin{aligned}
\lim_{n \to \infty} \sum_{i=1}^{n} f(c_i) \Delta x_i
&= \lim_{n \to \infty} \sum_{i=1}^{n} \frac{i^4}{n^4} \cdot \frac{2i-1}{n^2} \\
&= \lim_{n \to \infty} \frac{1}{n^6} \sum_{i=1}^{n} \bigl( 2i^5 - i^4 \bigr).
\end{aligned}
$$

To evaluate the sum, we use known formulas for powers of integers:

$$
\sum_{i=1}^{n} i^4 = \frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}, \qquad
\sum_{i=1}^{n} i^5 = \frac{n^2 (n+1)^2 (2n^2+2n-1)}{12}.
$$

Therefore,

$$
\sum_{i=1}^{n} (2i^5 - i^4) = \frac{n^2 (n+1)^2 (2n^2+2n-1)}{6} - \frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}.
$$

Dividing by $ n^6 $ and simplifying, we find

$$
\frac{1}{n^6} \sum_{i=1}^{n} (2i^5 - i^4) = \frac{1}{3} + \frac{4}{5n} + \frac{1}{3n^2} - \frac{1}{3n^3} - \frac{1}{6n^4} + \frac{1}{30n^5}.
$$

Taking the limit as $ n \to \infty $, every term except $ \frac{1}{3} $ vanishes. Hence,

$$
\lim_{n \to \infty} \sum_{i=1}^{n} f(x^*_i) \Delta x_i = \frac{1}{3}.
$$

The sum:
$$
 \sum_{i=1}^{n} f(x^*_i) \Delta x_i
$$
is called the Riemann sum of $f$.

It is known from earlier work that the area under the curve $y = x^2$ from $x = 0$ to $x = 1$ is exactly $\frac{1}{3}$. 

Therefore, this example confirms that the limit of the Riemann sum gives the correct area even when the subintervals have unequal widths, provided the width of the largest subinterval shrinks to zero as $n$ increases.

We also call this limit of Riemann Sums a definite integral. I guess that sound familiar.

### **The Definite Integral as a Limit**

**The Formal Definition:**
The **definite integral** of a continuous function $f$ over $[a, b]$ is the limit of its Riemann sums:
$$
\int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x_i
$$
This limit must be the same for **any** choice of sample points $x_i^*$ in each subinterval (that can even have uneqial widths as we showed before).


**Example 1: From a Limit to an Integral**
Express $\lim_{n \to \infty} \sum_{i=1}^n \left( 3 + \frac{6i}{n} \right)^2 \cdot \frac{6}{n}$ as a definite integral.
*   **Identify the parts:**
    *   $\Delta x = \frac{6}{n}$. So $b-a = 6$.
    *   The sample point is $x_i^* = 3 + \frac{6i}{n}$.
    *   As $i$ runs from 1 to $n$, $x_i^*$ runs from $3+\frac{6}{n}$ to $3+6=9$. In the limit, this covers the interval from $x=3$ to $x=9$.
    *   The function is $f(x_i^*) = (x_i^*)^2$, so $f(x) = x^2$.
*   **Assemble:** $\lim_{n \to \infty} \sum_{i=1}^n \left( 3 + \frac{6i}{n} \right)^2 \cdot \frac{6}{n} = \boxed{\int_3^9 x^2 \, dx}$

**Example 2: From an Integral to a Limit**
Write $\int_1^5 (2x+1) \, dx$ as the limit of a right Riemann sum.
1.  Interval $[1,5]$, so $\Delta x = \frac{4}{n}$.
2.  For a **right** sum, the sample point is $x_i^* = 1 + i\Delta x = 1 + \frac{4i}{n}$.
3.  The Riemann sum is: $\sum_{i=1}^n f(x_i^*) \Delta x = \sum_{i=1}^n \left[ 2\left(1 + \frac{4i}{n}\right) + 1 \right] \cdot \frac{4}{n}$.
4.  Simplify inside: $2\left(1 + \frac{4i}{n}\right) + 1 = 3 + \frac{8i}{n}$.
5.  Therefore:
    $$
    \int_1^5 (2x+1) \, dx = \boxed{\lim_{n \to \infty} \sum_{i=1}^n \left(3 + \frac{8i}{n}\right) \cdot \frac{4}{n}}
    $$


You already know that the derivative, $f'(x)$, gives you an **instantaneous rate of change**. But what if you have the rate and you want to know the total *effect* over time? How much water flowed from a pipe? How far did a car travel? What was the total change in cost?

This is the inverse problem: going from a rate back to a total quantity. Visually, the answer is staring us in the face: **Total accumulation is the area under the rate curve.**

**Definition:**
If a function $f(x)$ represents a **rate of change** (e.g., velocity in m/s, marginal cost in \$/item, flow rate in L/min), then the **net accumulated change** over the interval $[a, b]$ is given by the **net area** of the region between the graph of $f$ and the $x$-axis from $x = a$ to $x = b$.

![A graph showing a curve above and below the x-axis, with shaded areas representing positive and negative accumulation.](https://i.imgur.com/YKJbLQf.png)

*Caption: The net accumulation from a to b is the green area (above axis) minus the red area (below axis).*

Mathematically, this net area is the **definite integral**:
$$
\text{Net Accumulated Change} = \int_a^b f(x) \, dx
$$

**Important Nuances:**

*   **Units:** This is crucial. The unit of the integral is (unit of $f$) × (unit of $x$).
    *   If $v(t)$ is velocity in **m/s** and $t$ is time in **s**, then $\int v(t) \, dt$ gives displacement in **meters**.
    *   If $C'(x)$ is marginal cost in **\$/widget** and $x$ is widgets, then $\int C'(x) \, dx$ gives total cost in **dollars**.
*   **"Net" is the Key Word:** The integral sums area *above* the axis as positive and area *below* as negative. This gives the *net* result. For total distance traveled (ignoring direction), you would need to integrate the *speed*, $|v(t)|$.
*   **Geometry is Your Friend:** When the graph is made of straight lines (or sometimes simple curves), you can find the *exact* integral using area formulas for triangles, rectangles, and trapezoids.

**Let's See It In Action:**

**Example 1: From Velocity to Displacement**
The velocity of a particle is given by the graph below. It's a straight line from (0, 4) to (2, 0), then constant at 0 from t=2 to t=4, then a straight line from (4, 0) to (6, -4). Find the particle's displacement from $t=0$ to $t=6$.

*Step-by-step:*
1.  **Interpret:** Displacement = $\int v(t) \, dt$ = Net area under velocity curve.
2.  **Break it into shapes:**
    *   From $t=0$ to $t=2$: A triangle **above** the t-axis. Area = $\frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 2 \times 4 = 4$.
    *   From $t=2$ to $t=4$: A horizontal line on the axis. Area = 0.
    *   From $t=4$ to $t=6$: A triangle **below** the t-axis. Area = $\frac{1}{2} \times 2 \times 4 = 4$, but we count it as **-4** because it's below.
3.  **Sum the net areas:** Net Displacement = $4 + 0 + (-4) = 0$.
The particle ends up back where it started!

**Example 2: Signed Area with Geometry**
A function $f(x)$ is defined by the line from (0, 2) to (3, -1). Find $\int_0^3 f(x) \, dx$.

*Step-by-step:*
1.  Find where the line crosses the x-axis (where $f(x)=0$). The equation of the line is $f(x) = 2 - x$. It crosses at $x=2$.
2.  **Break at the x-intercept:**
    *   From $x=0$ to $x=2$: Triangle **above** axis. Base = 2, Height = 2. Area = $\frac{1}{2} \times 2 \times 2 = 2$.
    *   From $x=2$ to $x=3$: Triangle **below** axis. Base = 1, Height = | -1 | = 1. Area = $\frac{1}{2} \times 1 \times 1 = 0.5$, counted as **-0.5**.
3.  **Sum:** $\int_0^3 f(x) \, dx = 2 + (-0.5) = 1.5$.

Notice: The integral is a number (1.5), not an area (which would be 2.5 total geometric area). The integral is the *net* or *signed* area.


**Example 1: Left and Right Sums**
Approximate $\int_1^3 x^2 \, dx$ using $n=4$ subintervals with left and right sums.
1.  **Setup:** $\Delta x = \frac{3-1}{4} = 0.5$.
    *   Subintervals: $[1, 1.5], [1.5, 2], [2, 2.5], [2.5, 3]$.
2.  **Left Sum ($L_4$):** Use left endpoints: $x = 1, 1.5, 2, 2.5$.
    $L_4 = 0.5 \cdot [f(1) + f(1.5) + f(2) + f(2.5)]$
    $= 0.5 \cdot [1 + 2.25 + 4 + 6.25] = 0.5 \cdot 13.5 = \boxed{6.75}$
3.  **Right Sum ($R_4$):** Use right endpoints: $x = 1.5, 2, 2.5, 3$.
    $R_4 = 0.5 \cdot [f(1.5) + f(2) + f(2.5) + f(3)]$
    $= 0.5 \cdot [2.25 + 4 + 6.25 + 9] = 0.5 \cdot 21.5 = \boxed{10.75}$
4.  **Analysis:** Since $f(x)=x^2$ is **increasing** on $[1,3]$, the left sum (6.75) is an **underestimate** and the right sum (10.75) is an **overestimate**. The exact value is $\frac{26}{3} \approx 8.667$.

**Example 2: Midpoint Sum**
Approximate $\int_0^2 e^x \, dx$ with $n=4$ using the midpoint rule.
1.  $\Delta x = 0.5$. Subintervals: $[0, 0.5], [0.5, 1], [1, 1.5], [1.5, 2]$.
2.  Midpoints: $x = 0.25, 0.75, 1.25, 1.75$.
3.  $M_4 = 0.5 \cdot [e^{0.25} + e^{0.75} + e^{1.25} + e^{1.75}]$
    $\approx 0.5 \cdot [1.2840 + 2.1170 + 3.4903 + 5.7546]$
    $= 0.5 \cdot 12.6459 = \boxed{6.32295}$
    The exact integral is $e^2 - 1 \approx 6.389$, so this is quite close.

**Example 3: Non-Uniform Partitions (Data from a Table)**
You're given data for $f(x)$. Estimate $\int_0^6 f(x) \, dx$ using a left sum.
| $x$ | 0 | 1 | 3 | 6 |
|-----|---|---|---|---|
|$f(x)$| 2 | 4 | 5 | 1 |

*Step-by-step:*
1.  The data points define the subintervals: $[0,1]$, $[1,3]$, $[3,6]$.
2.  Note the widths are **not equal**: $\Delta x_1 = 1$, $\Delta x_2 = 2$, $\Delta x_3 = 3$.
3.  **Left Sum:** Use the value at the left endpoint of each subinterval.
    $L = f(0)\cdot 1 + f(1)\cdot 2 + f(3)\cdot 3$
    $= (2)(1) + (4)(2) + (5)(3) = 2 + 8 + 15 = \boxed{25}$

---

### **14.3 A Better Approximation: The Trapezoidal Rule**

Rectangles feel a bit clunky. What if, on each subinterval, we connected the function values at the endpoints with a straight line? That forms a trapezoid, which usually fits the curve better than a flat-topped rectangle.

![A single subinterval showing the area under the curve approximated by a trapezoid.](https://i.imgur.com/vg04Pz0.png)

*Caption: The area of one trapezoid is $\frac{\Delta x}{2}(f(x_{i-1}) + f(x_i))$.*

**The Formula (For Equal Widths $\Delta x$):**
For $n$ subintervals over $[a, b]$:
$$
T_n = \frac{\Delta x}{2} \left[ f(x_0) + 2f(x_1) + 2f(x_2) + \dots + 2f(x_{n-1}) + f(x_n) \right]
$$
Where $x_0 = a$, $x_n = b$, and $x_i = a + i\Delta x$.

**Why It's Cool:**
*   **It's an Average:** The Trapezoidal Rule is exactly the average of the Left and Right Riemann sums: $T_n = \frac{L_n + R_n}{2}$.
*   **More Accurate:** For the same number of subintervals $n$, $T_n$ is typically much more accurate than $L_n$ or $R_n$.

**Example 1: Applying the Formula**
Approximate $\int_1^3 x^2 \, dx$ with $n=4$ using the Trapezoidal Rule.
1.  We already know $\Delta x = 0.5$, and $x_0=1, x_1=1.5, x_2=2, x_3=2.5, x_4=3$.
2.  $T_4 = \frac{0.5}{2} \left[ f(1) + 2f(1.5) + 2f(2) + 2f(2.5) + f(3) \right]$
    $= 0.25 \left[ 1 + 2(2.25) + 2(4) + 2(6.25) + 9 \right]$
    $= 0.25 \left[ 1 + 4.5 + 8 + 12.5 + 9 \right] = 0.25 \times 35 = \boxed{8.75}$
    This is very close to the exact value of 8.667, and indeed it's the average of our $L_4=6.75$ and $R_4=10.75$.

**Example 2: From a Table**
Use the Trapezoidal Rule to approximate $\int_0^6 f(x) \, dx$ from the data:
| $x$ | 0 | 2 | 4 | 6 |
|-----|---|---|---|---|
|$f(x)$| 3 | 7 | 11 | 5 |

1.  We have 3 subintervals ($n=3$) of equal width $\Delta x = 2$.
2.  $T_3 = \frac{2}{2} \left[ f(0) + 2f(2) + 2f(4) + f(6) \right]$
    $= 1 \cdot \left[ 3 + 2(7) + 2(11) + 5 \right]$
    $= 3 + 14 + 22 + 5 = \boxed{44}$

---

### **The Definite Integral as a Limit**

Our approximations get better as we use more, thinner rectangles (or trapezoids). The **exact** area is what these approximations approach as $n$ goes to infinity.

**The Formal Definition:**
The **definite integral** of a continuous function $f$ over $[a, b]$ is the limit of its Riemann sums:
$$
\int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x
$$
This limit must be the same for **any** choice of sample points $x_i^*$ in each subinterval.

**Why This Matters:**
1.  **It Connects Ideas:** This definition bridges the intuitive geometric concept of "area under a curve" with a precise algebraic limit process.
2.  **It's How We *Define* the Integral:** For weird functions or theoretical work, this is the foundational definition.
3.  **It Shows Up on the AP Exam:** You need to go back and forth between a limit of a sum and integral notation.

**Example 1: From a Limit to an Integral**
Express $\lim_{n \to \infty} \sum_{i=1}^n \left( 3 + \frac{6i}{n} \right)^2 \cdot \frac{6}{n}$ as a definite integral.
*   **Identify the parts:**
    *   $\Delta x = \frac{6}{n}$. So $b-a = 6$.
    *   The sample point is $x_i^* = 3 + \frac{6i}{n}$.
    *   As $i$ runs from 1 to $n$, $x_i^*$ runs from $3+\frac{6}{n}$ to $3+6=9$. In the limit, this covers the interval from $x=3$ to $x=9$.
    *   The function is $f(x_i^*) = (x_i^*)^2$, so $f(x) = x^2$.
*   **Assemble:** $\lim_{n \to \infty} \sum_{i=1}^n \left( 3 + \frac{6i}{n} \right)^2 \cdot \frac{6}{n} = \boxed{\int_3^9 x^2 \, dx}$

**Example 2: From an Integral to a Limit**
Write $\int_1^5 (2x+1) \, dx$ as the limit of a right Riemann sum.
1.  Interval $[1,5]$, so $\Delta x = \frac{4}{n}$.
2.  For a **right** sum, the sample point is $x_i^* = 1 + i\Delta x = 1 + \frac{4i}{n}$.
3.  The Riemann sum is: $\sum_{i=1}^n f(x_i^*) \Delta x = \sum_{i=1}^n \left[ 2\left(1 + \frac{4i}{n}\right) + 1 \right] \cdot \frac{4}{n}$.
4.  Simplify inside: $2\left(1 + \frac{4i}{n}\right) + 1 = 3 + \frac{8i}{n}$.
5.  Therefore:
    $$
    \int_1^5 (2x+1) \, dx = \boxed{\lim_{n \to \infty} \sum_{i=1}^n \left(3 + \frac{8i}{n}\right) \cdot \frac{4}{n}}
    $$


You already know that the derivative, $f'(x)$, gives you an **instantaneous rate of change**. But what if you have the rate and you want to know the total *effect* over time? How much water flowed from a pipe? How far did a car travel? What was the total change in cost?

This is the inverse problem: going from a rate back to a total quantity. Visually, the answer is staring us in the face: **Total accumulation is the area under the rate curve.**

**Definition:**
If a function $f(x)$ represents a **rate of change** (e.g., velocity in m/s, marginal cost in \$/item, flow rate in L/min), then the **net accumulated change** over the interval $[a, b]$ is given by the **net area** of the region between the graph of $f$ and the $x$-axis from $x = a$ to $x = b$.

![A graph showing a curve above and below the x-axis, with shaded areas representing positive and negative accumulation.](https://i.imgur.com/YKJbLQf.png)

*Caption: The net accumulation from a to b is the green area (above axis) minus the red area (below axis).*

Mathematically, this net area is the **definite integral**:
$$
\text{Net Accumulated Change} = \int_a^b f(x) \, dx
$$

**Important Nuances:**

*   **Units:** This is crucial. The unit of the integral is (unit of $f$) × (unit of $x$).
    *   If $v(t)$ is velocity in **m/s** and $t$ is time in **s**, then $\int v(t) \, dt$ gives displacement in **meters**.
    *   If $C'(x)$ is marginal cost in **\$/widget** and $x$ is widgets, then $\int C'(x) \, dx$ gives total cost in **dollars**.
*   **"Net" is the Key Word:** The integral sums area *above* the axis as positive and area *below* as negative. This gives the *net* result. For total distance traveled (ignoring direction), you would need to integrate the *speed*, $|v(t)|$.
*   **Geometry is Your Friend:** When the graph is made of straight lines (or sometimes simple curves), you can find the *exact* integral using area formulas for triangles, rectangles, and trapezoids.

**Let's See It In Action:**

**Example 1: From Velocity to Displacement**
The velocity of a particle is given by the graph below. It's a straight line from (0, 4) to (2, 0), then constant at 0 from t=2 to t=4, then a straight line from (4, 0) to (6, -4). Find the particle's displacement from $t=0$ to $t=6$.

*Step-by-step:*
1.  **Interpret:** Displacement = $\int v(t) \, dt$ = Net area under velocity curve.
2.  **Break it into shapes:**
    *   From $t=0$ to $t=2$: A triangle **above** the t-axis. Area = $\frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 2 \times 4 = 4$.
    *   From $t=2$ to $t=4$: A horizontal line on the axis. Area = 0.
    *   From $t=4$ to $t=6$: A triangle **below** the t-axis. Area = $\frac{1}{2} \times 2 \times 4 = 4$, but we count it as **-4** because it's below.
3.  **Sum the net areas:** Net Displacement = $4 + 0 + (-4) = 0$.
The particle ends up back where it started!

**Example 2: Signed Area with Geometry**
A function $f(x)$ is defined by the line from (0, 2) to (3, -1). Find $\int_0^3 f(x) \, dx$.

*Step-by-step:*
1.  Find where the line crosses the x-axis (where $f(x)=0$). The equation of the line is $f(x) = 2 - x$. It crosses at $x=2$.
2.  **Break at the x-intercept:**
    *   From $x=0$ to $x=2$: Triangle **above** axis. Base = 2, Height = 2. Area = $\frac{1}{2} \times 2 \times 2 = 2$.
    *   From $x=2$ to $x=3$: Triangle **below** axis. Base = 1, Height = | -1 | = 1. Area = $\frac{1}{2} \times 1 \times 1 = 0.5$, counted as **-0.5**.
3.  **Sum:** $\int_0^3 f(x) \, dx = 2 + (-0.5) = 1.5$.

Notice: The integral is a number (1.5), not an area (which would be 2.5 total geometric area). The integral is the *net* or *signed* area.

---

### **14.2 Approximating Area: Riemann Sums**

Most functions aren't nice straight lines. So how do we find the area under a curve like $f(x) = x^2$ or $e^{-x^2}$? We **approximate** using shapes we know how to measure: **rectangles.**

**The Big Idea:** Chop the interval $[a, b]$ into $n$ slices (subintervals). Over each tiny slice, build a rectangle whose height is given by the function value at some point in the slice. The sum of the areas of these rectangles approximates the total area.

![A graph showing a curve approximated by left-endpoint, right-endpoint, and midpoint rectangles.](https://i.imgur.com/V5GQqnp.png)

*Caption: Different choices for the rectangle height lead to different approximations: Left, Right, and Midpoint sums.*

**The Formal Setup:**
Divide $[a, b]$ into $n$ subintervals of width $\Delta x = \frac{b-a}{n}$. Let $x_i^*$ be a **sample point** in the $i$-th subinterval. The **Riemann Sum** is:
$$
R_n = \sum_{i=1}^{n} f(x_i^*) \cdot \Delta x
$$

**The Three Most Common Choices:**
*   **Left Riemann Sum ($L_n$):** $x_i^*$ is the **left** endpoint of each subinterval.
*   **Right Riemann Sum ($R_n$):** $x_i^*$ is the **right** endpoint.
*   **Midpoint Riemann Sum ($M_n$):** $x_i^*$ is the **midpoint** of each subinterval.

**Will My Approximation Be Too High or Too Low?**
This is a key AP skill: reasoning about the error.

| Function Behavior | Left Sum ($L_n$) | Right Sum ($R_n$) | Midpoint Sum ($M_n$) |
| :--- | :--- | :--- | :--- |
| **Increasing** on $[a,b]$ | **Underestimates** | **Overestimates** | (Closer to exact) |
| **Decreasing** on $[a,b]$ | **Overestimates** | **Underestimates** | (Closer to exact) |

For concavity (which we'll study more later):
*   If $f$ is **concave up** on $[a,b]$, $M_n$ **underestimates** and the **Trapezoidal Rule** (see 14.3) **overestimates**.
*   If $f$ is **concave down**, $M_n$ **overestimates** and the Trapezoidal Rule **underestimates**.

**Example 1: Left and Right Sums**
Approximate $\int_1^3 x^2 \, dx$ using $n=4$ subintervals with left and right sums.
1.  **Setup:** $\Delta x = \frac{3-1}{4} = 0.5$.
    *   Subintervals: $[1, 1.5], [1.5, 2], [2, 2.5], [2.5, 3]$.
2.  **Left Sum ($L_4$):** Use left endpoints: $x = 1, 1.5, 2, 2.5$.
    $L_4 = 0.5 \cdot [f(1) + f(1.5) + f(2) + f(2.5)]$
    $= 0.5 \cdot [1 + 2.25 + 4 + 6.25] = 0.5 \cdot 13.5 = \boxed{6.75}$
3.  **Right Sum ($R_4$):** Use right endpoints: $x = 1.5, 2, 2.5, 3$.
    $R_4 = 0.5 \cdot [f(1.5) + f(2) + f(2.5) + f(3)]$
    $= 0.5 \cdot [2.25 + 4 + 6.25 + 9] = 0.5 \cdot 21.5 = \boxed{10.75}$
4.  **Analysis:** Since $f(x)=x^2$ is **increasing** on $[1,3]$, the left sum (6.75) is an **underestimate** and the right sum (10.75) is an **overestimate**. The exact value is $\frac{26}{3} \approx 8.667$.

**Example 2: Midpoint Sum**
Approximate $\int_0^2 e^x \, dx$ with $n=4$ using the midpoint rule.
1.  $\Delta x = 0.5$. Subintervals: $[0, 0.5], [0.5, 1], [1, 1.5], [1.5, 2]$.
2.  Midpoints: $x = 0.25, 0.75, 1.25, 1.75$.
3.  $M_4 = 0.5 \cdot [e^{0.25} + e^{0.75} + e^{1.25} + e^{1.75}]$
    $\approx 0.5 \cdot [1.2840 + 2.1170 + 3.4903 + 5.7546]$
    $= 0.5 \cdot 12.6459 = \boxed{6.32295}$
    The exact integral is $e^2 - 1 \approx 6.389$, so this is quite close.

**Example 3: Non-Uniform Partitions (Data from a Table)**
You're given data for $f(x)$. Estimate $\int_0^6 f(x) \, dx$ using a left sum.
| $x$ | 0 | 1 | 3 | 6 |
|-----|---|---|---|---|
|$f(x)$| 2 | 4 | 5 | 1 |

*Step-by-step:*
1.  The data points define the subintervals: $[0,1]$, $[1,3]$, $[3,6]$.
2.  Note the widths are **not equal**: $\Delta x_1 = 1$, $\Delta x_2 = 2$, $\Delta x_3 = 3$.
3.  **Left Sum:** Use the value at the left endpoint of each subinterval.
    $L = f(0)\cdot 1 + f(1)\cdot 2 + f(3)\cdot 3$
    $= (2)(1) + (4)(2) + (5)(3) = 2 + 8 + 15 = \boxed{25}$

---

### **14.3 A Better Approximation: The Trapezoidal Rule**

Rectangles feel a bit clunky. What if, on each subinterval, we connected the function values at the endpoints with a straight line? That forms a trapezoid, which usually fits the curve better than a flat-topped rectangle.

![A single subinterval showing the area under the curve approximated by a trapezoid.](https://i.imgur.com/vg04Pz0.png)

*Caption: The area of one trapezoid is $\frac{\Delta x}{2}(f(x_{i-1}) + f(x_i))$.*

**The Formula (For Equal Widths $\Delta x$):**
For $n$ subintervals over $[a, b]$:
$$
T_n = \frac{\Delta x}{2} \left[ f(x_0) + 2f(x_1) + 2f(x_2) + \dots + 2f(x_{n-1}) + f(x_n) \right]
$$
Where $x_0 = a$, $x_n = b$, and $x_i = a + i\Delta x$.

**Why It's Cool:**
*   **It's an Average:** The Trapezoidal Rule is exactly the average of the Left and Right Riemann sums: $T_n = \frac{L_n + R_n}{2}$.
*   **More Accurate:** For the same number of subintervals $n$, $T_n$ is typically much more accurate than $L_n$ or $R_n$.

**Example 1: Applying the Formula**
Approximate $\int_1^3 x^2 \, dx$ with $n=4$ using the Trapezoidal Rule.
1.  We already know $\Delta x = 0.5$, and $x_0=1, x_1=1.5, x_2=2, x_3=2.5, x_4=3$.
2.  $T_4 = \frac{0.5}{2} \left[ f(1) + 2f(1.5) + 2f(2) + 2f(2.5) + f(3) \right]$
    $= 0.25 \left[ 1 + 2(2.25) + 2(4) + 2(6.25) + 9 \right]$
    $= 0.25 \left[ 1 + 4.5 + 8 + 12.5 + 9 \right] = 0.25 \times 35 = \boxed{8.75}$
    This is very close to the exact value of 8.667, and indeed it's the average of our $L_4=6.75$ and $R_4=10.75$.

**Example 2: From a Table**
Use the Trapezoidal Rule to approximate $\int_0^6 f(x) \, dx$ from the data:
| $x$ | 0 | 2 | 4 | 6 |
|-----|---|---|---|---|
|$f(x)$| 3 | 7 | 11 | 5 |

1.  We have 3 subintervals ($n=3$) of equal width $\Delta x = 2$.
2.  $T_3 = \frac{2}{2} \left[ f(0) + 2f(2) + 2f(4) + f(6) \right]$
    $= 1 \cdot \left[ 3 + 2(7) + 2(11) + 5 \right]$
    $= 3 + 14 + 22 + 5 = \boxed{44}$

---

### **14.4 The Exact Answer: The Definite Integral as a Limit**

Our approximations get better as we use more, thinner rectangles (or trapezoids). The **exact** area is what these approximations approach as $n$ goes to infinity.

**The Formal Definition:**
The **definite integral** of a continuous function $f$ over $[a, b]$ is the limit of its Riemann sums:
$$
\int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x
$$
This limit must be the same for **any** choice of sample points $x_i^*$ in each subinterval.

**Why This Matters:**
1.  **It Connects Ideas:** This definition bridges the intuitive geometric concept of "area under a curve" with a precise algebraic limit process.
2.  **It's How We *Define* the Integral:** For weird functions or theoretical work, this is the foundational definition.
3.  **It Shows Up on the AP Exam:** You need to go back and forth between a limit of a sum and integral notation.

**Example 1: From a Limit to an Integral**
Express $\lim_{n \to \infty} \sum_{i=1}^n \left( 3 + \frac{6i}{n} \right)^2 \cdot \frac{6}{n}$ as a definite integral.
*   **Identify the parts:**
    *   $\Delta x = \frac{6}{n}$. So $b-a = 6$.
    *   The sample point is $x_i^* = 3 + \frac{6i}{n}$.
    *   As $i$ runs from 1 to $n$, $x_i^*$ runs from $3+\frac{6}{n}$ to $3+6=9$. In the limit, this covers the interval from $x=3$ to $x=9$.
    *   The function is $f(x_i^*) = (x_i^*)^2$, so $f(x) = x^2$.
*   **Assemble:** $\lim_{n \to \infty} \sum_{i=1}^n \left( 3 + \frac{6i}{n} \right)^2 \cdot \frac{6}{n} = \boxed{\int_3^9 x^2 \, dx}$

**Example 2: From an Integral to a Limit**
Write $\int_1^5 (2x+1) \, dx$ as the limit of a right Riemann sum.
1.  Interval $[1,5]$, so $\Delta x = \frac{4}{n}$.
2.  For a **right** sum, the sample point is $x_i^* = 1 + i\Delta x = 1 + \frac{4i}{n}$.
3.  The Riemann sum is: $\sum_{i=1}^n f(x_i^*) \Delta x = \sum_{i=1}^n \left[ 2\left(1 + \frac{4i}{n}\right) + 1 \right] \cdot \frac{4}{n}$.
4.  Simplify inside: $2\left(1 + \frac{4i}{n}\right) + 1 = 3 + \frac{8i}{n}$.
5.  Therefore:
    $$
    \int_1^5 (2x+1) \, dx = \boxed{\lim_{n \to \infty} \sum_{i=1}^n \left(3 + \frac{8i}{n}\right) \cdot \frac{4}{n}}
    $$