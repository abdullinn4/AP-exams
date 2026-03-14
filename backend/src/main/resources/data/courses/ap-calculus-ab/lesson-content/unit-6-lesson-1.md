# Riemann Sums and Accumulation

In the tangent line problem, you saw how the limit concept can help us move from the slope of a line to the slope of a general curve.
The second classic problem in calculus is finding the area under a curve.

First, let's make sure you understand sigma notation—it's a compact way to write sums.  
The sum of $\displaystyle n$ terms $\displaystyle a_1$, $\displaystyle a_2$, $\displaystyle a_3$, . . . , $\displaystyle a_n$ is written as 

$$
\displaystyle \sum_{i=1}^{n} a_i = a_1 + a_2 + a_3 + \cdots + a_n
$$

* where $\displaystyle i$ is called the index of summation
* $\displaystyle a_i$ is the $\displaystyle i\text{th}$ term of the sum
* the upper and lower bounds of summation are $\displaystyle n$ and $\displaystyle 1$.

Sigma notation gives a compact way to write long sums.

### Examples

a. $\displaystyle \sum_{i=1}^{6} i = 1 + 2 + 3 + 4 + 5 + 6$

b. $\displaystyle \sum_{i=0}^{5} (i + 1) = 1 + 2 + 3 + 4 + 5 + 6$

c. $\displaystyle \sum_{j=3}^{7} j^2 = 3^2 + 4^2 + 5^2 + 6^2 + 7^2$

d. $\displaystyle \sum_{k=1}^{n} \frac{1}{n}(k^2 + 1) = \frac{1}{n}(1^2+1) + \frac{1}{n}(2^2+1) + \cdots + \frac{1}{n}(n^2+1)$

e. $\displaystyle \sum_{i=1}^{n} f(x_i) \Delta x = f(x_1)\Delta x + f(x_2)\Delta x + \cdots + f(x_n)\Delta x$

The same sum can often be represented in several ways using different indices (parts a and b).

The index letter (often $\displaystyle i$, $\displaystyle j$, $\displaystyle k$) is a dummy variable; it does not appear in the expanded terms.

The pattern of terms must be clear from the expression.

---

## **Properties of Sigma Notation**

Using basic algebra, we can break sums apart and factor out constants:

1. **Constant factor rule:**  
   $$\displaystyle \sum_{i=1}^{n} k a_i = k \sum_{i=1}^{n} a_i$$
   (where $\displaystyle k$ is a constant)

2. **Sum/difference rule:**  
   $$\displaystyle \sum_{i=1}^{n} (a_i \pm b_i) = \sum_{i=1}^{n} a_i \pm \sum_{i=1}^{n} b_i$$

Now, let's also introduce super useful formulas. These formulas are essential for evaluating limits of Riemann sums and for many other calculations.

### Summation Formulas

1. **Sum of a constant:**  
   $$\displaystyle \sum_{i=1}^{n} c = c n$$

2. **Sum of the first $\displaystyle n$ integers:**  
   $$\displaystyle \sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

3. **Sum of the first $\displaystyle n$ squares:**  
   $$\displaystyle \sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$$

4. **Sum of the first $\displaystyle n$ cubes:**  
   $$\displaystyle \sum_{i=1}^{n} i^3 = \frac{n^2(n+1)^2}{4}$$

These formulas are proven by mathematical induction (see Appendix A). They're your best friends when working with Riemann sums and area approximations.

### **Approximating Area**

The idea is to find the area under a graph. Let's start simple—say we have a straight line $\displaystyle f(x)=x+2$.

/ Insert picture of line with area under it /

So how do we find the area under a curve like $\displaystyle f(x) = x^2$ or $\displaystyle e^{-x^2}$?

/picture of curve with area underneath/

Usually we had nice shapes—rectangles, triangles—and formulas like $\displaystyle A = bh$ or $\displaystyle A = \frac{1}{2}bh$ did the job. Unfortunately, that doesn't work here.

Alright, just like with the tangent line problem, we start with an approximation and then use the limit concept to get the exact value.  
We can **approximate** the area using shapes we know, like **rectangles**.

/picture showing rectangles under curve/

As you increase the number of rectangles, the approximation tends to get better because the area we miss gets smaller and smaller.

/picture with more rectangles, better fit/

Let's work through an example.

Use the five rectangles in the figure below to find two approximations of the area between the graph of

$\displaystyle f(x) = -x^2 + 4$

and the $\displaystyle x$-axis from $\displaystyle x = 0$ to $\displaystyle x = 2$.

**Solution**

a. The right endpoints of the five intervals are $\displaystyle \frac{2}{5}i$, where $\displaystyle i = 1, 2, 3, 4, 5$. Each rectangle has width $\displaystyle \frac{2}{5}$, and the height comes from evaluating $\displaystyle f$ at the right endpoint.

$$
\displaystyle \left[0, \frac{2}{5}\right], \left[\frac{2}{5}, \frac{4}{5}\right], \left[\frac{4}{5}, \frac{6}{5}\right], \left[\frac{6}{5}, \frac{8}{5}\right], \left[\frac{8}{5}, 2\right]
$$

Evaluate $\displaystyle f(x) = -x^2 + 4$ at the right endpoints.

The sum of the areas is

$$
\displaystyle \sum_{i=1}^{5} f\left(\frac{2i}{5}\right) \left(\frac{2}{5}\right) = \sum_{i=1}^{5} \left[-\left(\frac{2i}{5}\right)^2 + 4\right] \left(\frac{2}{5}\right) = \frac{56}{25} = 2.24.
$$

Since the function is decreasing on $\displaystyle [0,2]$, the right-endpoint rectangles lie below the curve, so this is an **underestimate**. That means the actual area is greater than 2.24.

b. The left endpoints are $\displaystyle \frac{2}{5}(i - 1)$, where $\displaystyle i = 1, 2, 3, 4, 5$. Same width, $\displaystyle \frac{2}{5}$, height from the left endpoint.

$$
\displaystyle \sum_{i=1}^{5} f\left(\frac{2i - 2}{5}\right) \left(\frac{2}{5}\right) = \sum_{i=1}^{5} \left[-\left(\frac{2i - 2}{5}\right)^2 + 4\right] \left(\frac{2}{5}\right) = \frac{96}{25} = 3.84.
$$

Because the function is decreasing, left-endpoint rectangles stick out above the curve, so this is an **overestimate**. The actual area is less than 3.84.

Putting them together:

$\displaystyle 2.24 < \text{Area of region} < 3.84$.

**Generally**

We want the area under a smooth curve $\displaystyle y = f(x)$ between $\displaystyle x = a$ and $\displaystyle x = b$, with the curve staying above the $\displaystyle x$-axis.

To estimate it, we use rectangles. Here's the game plan:

1. **Split the interval**  
   Divide $\displaystyle [a, b]$ into $\displaystyle n$ equal pieces.  
   Each piece has width:  
   $$\displaystyle \Delta x = \frac{b-a}{n}.$$

2. **Find the smallest and largest heights on each piece**  
   On each small subinterval, the function has a lowest point and a highest point.  
   Let $\displaystyle f(m_i)$ be the lowest height on the $\displaystyle i$-th piece.  
   Let $\displaystyle f(M_i)$ be the highest height on the $\displaystyle i$-th piece.

3. **Draw two kinds of rectangles**  
   - **Inner rectangles** (inscribed): height = lowest height $\displaystyle f(m_i)$ – these stay completely under the curve.  
   - **Outer rectangles** (circumscribed): height = highest height $\displaystyle f(M_i)$ – these stick out above the curve.

4. **Calculate rectangle areas**  
   Area of one inner rectangle: $\displaystyle f(m_i) \cdot \Delta x$.  
   Area of one outer rectangle: $\displaystyle f(M_i) \cdot \Delta x$.

5. **Add them up**  
   - **Lower sum** = total area of all inner rectangles:  
     $$\displaystyle s(n) = \sum_{i=1}^n f(m_i) \Delta x.$$
   - **Upper sum** = total area of all outer rectangles:  
     $$\displaystyle S(n) = \sum_{i=1}^n f(M_i) \Delta x.$$

6. **The true area is trapped in between**  
   The lower sum is too small, the upper sum is too big, so the actual area satisfies:  
   $$\displaystyle s(n) \le \text{Area under the curve} \le S(n).$$

If we use more and more rectangles (make $\displaystyle n$ larger), the lower and upper sums get closer together, squeezing the true area more tightly.

### Theorem: The Lower and Upper Sums Meet in the Middle

Suppose $\displaystyle f$ is continuous and never negative on $\displaystyle [a, b]$.  
If we keep increasing the number of rectangles $\displaystyle n$, the lower sum (using smallest heights) and the upper sum (using largest heights) actually approach the same number. In symbols:

$$
\displaystyle \lim_{n \to \infty} s(n) = \lim_{n \to \infty} S(n).
$$

Since both sums squeeze toward the same value, the exact area is trapped between them and must equal that common limit. This is a direct application of the *Squeeze Theorem*.

### Defining Area Once and For All

Thanks to that theorem, we can define the exact area under a curve in a flexible way. You don't have to pick the smallest or largest height—any height on each subinterval works, and the limit will still be the same.

**Definition (Area under a curve):**  
Let $\displaystyle f$ be continuous and nonnegative on $\displaystyle [a, b]$. The area of the region between the graph of $\displaystyle f$, the $\displaystyle x$-axis, $\displaystyle x = a$, and $\displaystyle x = b$ is:

$$
\displaystyle \text{Area} = \lim_{n \to \infty} \sum_{i=1}^n f(x^*_i) \Delta x,
$$

where:
- $\displaystyle \Delta x = \frac{b-a}{n}$,
- $\displaystyle x^*_i$ is *any* point chosen from the $\displaystyle i$-th subinterval $\displaystyle [x_{i-1}, x_i]$.

So, to find the exact area:  
* split the interval into many tiny pieces,  
* pick any sample point on each piece,  
* build a rectangle using the function's height at that point,  
* sum up all the rectangle areas,  
* let the number of pieces go to infinity.

The result is the area.

**A Partition with Unequal Widths for a Different Function**

Interestingly, although we've been using equal-width subintervals, the example below shows that's not required.

Consider the region bounded by $\displaystyle f(x) = x^2$ and the $\displaystyle x$-axis over $\displaystyle 0 \leq x \leq 1$.  

We'll evaluate the limit

$$
\displaystyle \lim_{n \to \infty} \sum_{i=1}^{n} f(x^*_i) \, \Delta x_i
$$

where the right endpoint of the $\displaystyle i$-th subinterval is $\displaystyle x^*_i = i^2/n^2$ and $\displaystyle \Delta x_i$ is the width of that subinterval.

**Solution**

First, find the width of the $\displaystyle i$-th subinterval:

$$
\displaystyle \Delta x_i = \frac{i^2}{n^2} - \frac{(i-1)^2}{n^2}
          = \frac{i^2 - (i^2 - 2i + 1)}{n^2}
          = \frac{2i - 1}{n^2}.
$$

Now plug into the limit, noting $\displaystyle f(x^*_i) = (i^2/n^2)^2 = i^4/n^4$:

$$
\displaystyle \begin{aligned}
\lim_{n \to \infty} \sum_{i=1}^{n} f(x^*_i) \Delta x_i
&= \lim_{n \to \infty} \sum_{i=1}^{n} \frac{i^4}{n^4} \cdot \frac{2i-1}{n^2} \\
&= \lim_{n \to \infty} \frac{1}{n^6} \sum_{i=1}^{n} \bigl( 2i^5 - i^4 \bigr).
\end{aligned}
$$

To evaluate the sum, we use known formulas for powers of integers:

$$
\displaystyle \sum_{i=1}^{n} i^4 = \frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}, \qquad
\sum_{i=1}^{n} i^5 = \frac{n^2 (n+1)^2 (2n^2+2n-1)}{12}.
$$

Therefore,

$$
\displaystyle \sum_{i=1}^{n} (2i^5 - i^4) = \frac{n^2 (n+1)^2 (2n^2+2n-1)}{6} - \frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}.
$$

Dividing by $\displaystyle n^6$ and simplifying, we get

$$
\displaystyle \frac{1}{n^6} \sum_{i=1}^{n} (2i^5 - i^4) = \frac{1}{3} + \frac{4}{5n} + \frac{1}{3n^2} - \frac{1}{3n^3} - \frac{1}{6n^4} + \frac{1}{30n^5}.
$$

Taking the limit as $\displaystyle n \to \infty$, every term except $\displaystyle \frac{1}{3}$ vanishes. Hence,

$$
\displaystyle \lim_{n \to \infty} \sum_{i=1}^{n} f(x^*_i) \Delta x_i = \frac{1}{3}.
$$

The sum

$$
\displaystyle \sum_{i=1}^{n} f(x^*_i) \Delta x_i
$$

is called a **Riemann sum** of $\displaystyle f$.

We know from earlier work that the area under $\displaystyle y = x^2$ from $\displaystyle 0$ to $\displaystyle 1$ is exactly $\displaystyle \frac{1}{3}$.  

So this example confirms that the limit of a Riemann sum gives the correct area even with unequal subinterval widths—as long as the largest subinterval width shrinks to zero as $\displaystyle n$ increases.

We also call this limit of Riemann sums a **definite integral**. Bet that sounds familiar.

**Definition of Riemann Sum**

Let $\displaystyle f$ be defined on $\displaystyle [a, b]$, and let $\displaystyle \Delta$ be a **partition** of $\displaystyle [a, b]$ given by  

$$\displaystyle a = x_0 < x_1 < x_2 < \cdots < x_{n-1} < x_n = b,$$

where $\displaystyle \Delta x_i$ is the width of the $\displaystyle i$-th subinterval $\displaystyle [x_{i-1}, x_i]$.  
If $\displaystyle c_i$ is any point in the $\displaystyle i$-th subinterval (so $\displaystyle x_{i-1} \leq c_i \leq x_i$), then the sum  

$$\displaystyle \sum_{i=1}^n f(c_i) \Delta x_i$$

is called a **Riemann sum** of $\displaystyle f$ for the partition $\displaystyle \Delta$.

*The sums we used at the beginning (with equal-width subintervals) are special cases of Riemann sums.*

*Alright, so now I just take our brand-new sum (Riemann sum), put it in the limit instead of the previous sum, and that's my final general formula for area under a curve.*

$$
\displaystyle \lim_{n \to \infty} \sum_{i=1}^{n} f(x^*_i) \, \Delta x_i
$$

Unfortunately, not quite. The problem is that with unequal widths, increasing $\displaystyle n$ does **not** guarantee that all the rectangles get smaller.

Let me show you with an example. Say we want to integrate a function over $\displaystyle [0, 1]$.

- **Partition A (The "good" way to increase $\displaystyle n$):** Split $\displaystyle [0, 1]$ into 10 equal pieces. Each width = 0.1.
- **Partition B (the weirdo):** Split $\displaystyle [0, 1]$ into 10 pieces like this:
    - First piece: from 0 to 0.999 (width = 0.999)
    - Next 9 pieces: from 0.999 to 1 (each width = 0.001, 0.001, ...)

What's $\displaystyle n$ in Partition B? It's 10—same as in Partition A. The condition "$\displaystyle n \to \infty$" would treat these two partitions the same.

But are they the same for approximating area? Absolutely not.

- **Partition A** gives a pretty good approximation. All rectangles are thin (width 0.1).
- **Partition B** gives a terrible approximation. One giant rectangle covers almost the whole interval, and then nine tiny rectangles are crammed in at the end near 1.

If I wanted to "cheat" this definition, I could make $\displaystyle n$ huge, like 1 million, by doing:
- First subinterval: $\displaystyle [0, 0.999999]$
- Next 999,999 subintervals: tiny slivers between $\displaystyle 0.999999$ and $\displaystyle 1$.

According to "$\displaystyle n \to \infty$", I'm doing what you asked. $\displaystyle n$ is now 1,000,000—huge! But my Riemann sum would still be a terrible approximation because that one giant rectangle is still huge and doesn't capture the function's shape.

So just increasing $\displaystyle n$ is a **weak condition**. It can be tricked. It allows partitions that are very fine in one part but still coarse in another.

That's why we use the **norm of a partition**.

**Norm of a Partition**

The width of the *largest* subinterval in a partition $\displaystyle \Delta$ is called the **norm**, denoted $\displaystyle \|\Delta\|$.  

- If every subinterval has the same width, the partition is **regular**. Then  

$$\displaystyle \|\Delta\| = \Delta x = \frac{b-a}{n}.$$

- For a general (non‑regular) partition, the norm and the number of subintervals $\displaystyle n$ satisfy  

$$\displaystyle \frac{b-a}{\|\Delta\|} \leq n.$$

As the norm $\displaystyle \|\Delta\|$ approaches zero, the number of subintervals $\displaystyle n$ must go to infinity. Guaranteed. In symbols,  

$$\displaystyle \|\Delta\| \to 0 \quad \text{implies} \quad n \to \infty.$$

But the reverse is **not always true**: letting $\displaystyle n \to \infty$ does **not** guarantee that $\displaystyle \|\Delta\| \to 0$.

So $\displaystyle \|\Delta\| \to 0$ is a stronger condition. It ensures nobody can sneak in weird partitions, because if the largest subinterval shrinks to zero, all the smaller ones do too.

**Definition of the Definite Integral**

Let $\displaystyle f$ be defined on $\displaystyle [a, b]$. If the limit of Riemann sums over partitions $\displaystyle \Delta$ exists (as described),

$$\displaystyle \lim_{\|\Delta\| \to 0} \sum_{i=1}^n f(c_i) \Delta x_i$$

then $\displaystyle f$ is **integrable** on $\displaystyle [a, b]$, and this limit is denoted

$$\displaystyle \int_a^b f(x) \, dx = \lim_{\|\Delta\| \to 0} \sum_{i=1}^n f(c_i) \Delta x_i.$$

This is called the **definite integral** of $\displaystyle f$ from $\displaystyle a$ to $\displaystyle b$. Here:
- $\displaystyle a$ is the **lower limit** of integration,
- $\displaystyle b$ is the **upper limit** of integration.

The definite integral represents the exact net area between the graph of $\displaystyle f$ and the $\displaystyle x$-axis over $\displaystyle [a, b]$.

So instead of writing that huge ugly limit every time, we use the definite integral.

**Example 1: From a Limit to an Integral**
Express $\displaystyle \lim_{n \to \infty} \sum_{i=1}^n \left( 3 + \frac{6i}{n} \right)^2 \cdot \frac{6}{n}$ as a definite integral.

*   **Identify the parts:**
    *   $\displaystyle \Delta x = \frac{6}{n}$. So $\displaystyle b-a = 6$.
    *   The sample point is $\displaystyle x_i^* = 3 + \frac{6i}{n}$.
    *   As $\displaystyle i$ runs from 1 to $\displaystyle n$, $\displaystyle x_i^*$ runs from $\displaystyle 3+\frac{6}{n}$ to $\displaystyle 3+6=9$. In the limit, this covers $\displaystyle x=3$ to $\displaystyle x=9$.
    *   The function is $\displaystyle f(x_i^*) = (x_i^*)^2$, so $\displaystyle f(x) = x^2$.
*   **Assemble:** $\displaystyle \lim_{n \to \infty} \sum_{i=1}^n \left( 3 + \frac{6i}{n} \right)^2 \cdot \frac{6}{n} = \boxed{\int_3^9 x^2 \, dx}$

**Example 2: From an Integral to a Limit**
Write $\displaystyle \int_1^5 (2x+1) \, dx$ as the limit of a right Riemann sum.

1. Interval $\displaystyle [1,5]$, so $\displaystyle \Delta x = \frac{4}{n}$.
2. For a **right** sum, $\displaystyle x_i^* = 1 + i\Delta x = 1 + \frac{4i}{n}$.
3. The Riemann sum is: $\displaystyle \sum_{i=1}^n f(x_i^*) \Delta x = \sum_{i=1}^n \left[ 2\left(1 + \frac{4i}{n}\right) + 1 \right] \cdot \frac{4}{n}$.
4. Simplify: $\displaystyle 2\left(1 + \frac{4i}{n}\right) + 1 = 3 + \frac{8i}{n}$.
5. Therefore:
    $$
    \displaystyle \int_1^5 (2x+1) \, dx = \boxed{\lim_{n \to \infty} \sum_{i=1}^n \left(3 + \frac{8i}{n}\right) \cdot \frac{4}{n}}
    $$

---

You already know the derivative $\displaystyle f'(x)$ gives you an **instantaneous rate of change**. But what if you have the rate and want to know the total *effect* over time? How much water flowed from a pipe? How far did a car travel? What was the total change in cost?

This is the inverse problem: going from a derivative back to the original function.

Here's the cool part: if your function $\displaystyle f(x)$ represents some kind of rate of change, then the area under its graph actually gives you the total accumulation (change).  
So, **total accumulation is the area under the rate curve.**

**Definition:**
If $\displaystyle f(x)$ represents a **rate of change** (like velocity in m/s, marginal cost in \$/item, flow rate in L/min), then the **net accumulated change** over $\displaystyle [a, b]$ is the **net area** between the graph of $\displaystyle f$ and the $\displaystyle x$-axis from $\displaystyle x = a$ to $\displaystyle x = b$.

/picture with area above and below axis labeled/

*Caption: The net accumulation from a to b is the green area (above axis) minus the red area (below axis).*

Mathematically, this net area—as we now know—is the **definite integral**:

$$
\displaystyle \text{Net Accumulated Change} = \int_a^b f(x) \, dx
$$

**Important Nuances:**

*   **Units:** This is crucial. The unit of the integral is (unit of $\displaystyle f$) × (unit of $\displaystyle x$).
    *   If $\displaystyle v(t)$ is velocity in **m/s** and $\displaystyle t$ is time in **s**, then $\displaystyle \int v(t) \, dt$ gives displacement in **meters**.
    *   If $\displaystyle C'(x)$ is marginal cost in **\$/widget** and $\displaystyle x$ is widgets, then $\displaystyle \int C'(x) \, dx$ gives total cost in **dollars**.
* The integral sums area *above* the axis as positive and area *below* as negative. This gives the *net* result. For total distance traveled (ignoring direction), you'd need to integrate *speed*, $\displaystyle |v(t)|$.
* When the graph is made of straight lines (or sometimes simple curves), you can find the *exact* integral using area formulas for triangles, rectangles, and trapezoids.

Let's see it in action:

**Example 1: From Velocity to Displacement**
A particle's velocity is given by the graph below. It's a straight line from (0, 4) to (2, 0), then constant at 0 from t=2 to t=4, then a straight line from (4, 0) to (6, -4). Find the displacement from $\displaystyle t=0$ to $\displaystyle t=6$.

*Step-by-step:*
1.  **Interpret:** Displacement = $\displaystyle \int v(t) \, dt$ = net area under velocity curve.
2.  **Break it into shapes:**
    *   From $\displaystyle t=0$ to $\displaystyle t=2$: A triangle **above** the t-axis. Area = $\displaystyle \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 2 \times 4 = 4$.
    *   From $\displaystyle t=2$ to $\displaystyle t=4$: A horizontal line on the axis. Area = 0.
    *   From $\displaystyle t=4$ to $\displaystyle t=6$: A triangle **below** the t-axis. Area = $\displaystyle \frac{1}{2} \times 2 \times 4 = 4$, but we count it as **-4** because it's below.
3.  **Sum the net areas:** Net Displacement = $\displaystyle 4 + 0 + (-4) = 0$.
The particle ends up back where it started!

**Example 2: Signed Area with Geometry**
A function $\displaystyle f(x)$ is defined by the line from (0, 2) to (3, -1). Find $\displaystyle \int_0^3 f(x) \, dx$.

*Step-by-step:*
1.  Find where the line crosses the x-axis (where $\displaystyle f(x)=0$). The line equation is $\displaystyle f(x) = 2 - x$. It crosses at $\displaystyle x=2$.
2.  **Break at the x-intercept:**
    *   From $\displaystyle x=0$ to $\displaystyle x=2$: Triangle **above** axis. Base = 2, Height = 2. Area = $\displaystyle \frac{1}{2} \times 2 \times 2 = 2$.
    *   From $\displaystyle x=2$ to $\displaystyle x=3$: Triangle **below** axis. Base = 1, Height = | -1 | = 1. Area = $\displaystyle \frac{1}{2} \times 1 \times 1 = 0.5$, counted as **-0.5**.
3.  **Sum:** $\displaystyle \int_0^3 f(x) \, dx = 2 + (-0.5) = 1.5$.

Notice: The integral is a number (1.5), not the total geometric area (which would be 2.5). The integral gives the *net* or *signed* area.

### **The Trapezoidal Rule**

One practical way to approximate a definite integral is to use trapezoids instead of rectangles. This is called the **trapezoidal rule**, and it often gives a better estimate.

**Setting Up the Approximation**

Let $\displaystyle f$ be continuous and positive on $\displaystyle [a, b]$. We want to approximate

$$\displaystyle \int_a^b f(x) \, dx,$$

the exact area under the curve.

1. **Partition the interval**  
   Divide $\displaystyle [a, b]$ into $\displaystyle n$ equal subintervals, each of width
   $$\displaystyle \Delta x = \frac{b-a}{n}.$$
   The endpoints are
   $$\displaystyle a = x_0 < x_1 < x_2 < \cdots < x_n = b.$$

2. **Construct trapezoids**  
   On each subinterval $\displaystyle [x_{i-1}, x_i]$, form a trapezoid by connecting $\displaystyle (x_{i-1}, f(x_{i-1}))$ and $\displaystyle (x_i, f(x_i))$ with a straight line.

The area of the $\displaystyle i$-th trapezoid is the average of the two parallel sides (the function values) times the width:

$$\displaystyle \text{Area of } i\text{th trapezoid} = \left[ \frac{f(x_{i-1}) + f(x_i)}{2} \right] \Delta x.$$

**Total Approximated Area**

Adding up all $\displaystyle n$ trapezoids:

$$
\displaystyle \begin{aligned}
\text{Total area} &\approx \sum_{i=1}^n \left[ \frac{f(x_{i-1}) + f(x_i)}{2} \right] \Delta x \\
&= \frac{\Delta x}{2} \sum_{i=1}^n \bigl[ f(x_{i-1}) + f(x_i) \bigr].
\end{aligned}
$$

Notice each interior endpoint $\displaystyle x_1, x_2, \dots, x_{n-1}$ appears twice (once as right endpoint, once as left). Writing it out:

$$
\displaystyle \sum_{i=1}^n \bigl[ f(x_{i-1}) + f(x_i) \bigr] = f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n).
$$

So the trapezoidal approximation is:

$$\displaystyle \text{Total area} \approx \frac{b-a}{2n} \bigl[ f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n) \bigr].$$

**Taking the Limit as $\displaystyle n \to \infty$**

As we increase the number of trapezoids (let $\displaystyle n \to \infty$), the width $\displaystyle \Delta x$ shrinks to zero, and the approximation becomes exact. It can be shown that:

$$
\displaystyle \lim_{n \to \infty} \frac{b-a}{2n} \bigl[ f(x_0) + 2f(x_1) + \cdots + 2f(x_{n-1}) + f(x_n) \bigr] = \int_a^b f(x) \, dx.
$$

The trapezoidal sum is essentially an average of left-endpoint and right-endpoint Riemann sums, and in the limit it converges to the definite integral.

**Theorem (Trapezoidal Rule Convergence)**

If $\displaystyle f$ is continuous on $\displaystyle [a, b]$, then the trapezoidal approximation converges to the definite integral as $\displaystyle n \to \infty$:

$$\displaystyle \int_a^b f(x) \, dx = \lim_{n \to \infty} \frac{b-a}{2n} \left[ f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n) \right].$$

This guarantees that with enough trapezoids, we can get arbitrarily close to the true area.

**Example 1: Applying the Formula**
Approximate $\displaystyle \int_1^3 x^2 \, dx$ with $\displaystyle n=4$ using the Trapezoidal Rule.

1. We already know $\displaystyle \Delta x = 0.5$, and $\displaystyle x_0=1, x_1=1.5, x_2=2, x_3=2.5, x_4=3$.
2. $\displaystyle T_4 = \frac{0.5}{2} \left[ f(1) + 2f(1.5) + 2f(2) + 2f(2.5) + f(3) \right]$
   $\displaystyle = 0.25 \left[ 1 + 2(2.25) + 2(4) + 2(6.25) + 9 \right]$
   $\displaystyle = 0.25 \left[ 1 + 4.5 + 8 + 12.5 + 9 \right] = 0.25 \times 35 = \boxed{8.75}$
   This is very close to the exact value of 8.667, and it's the average of our left sum $\displaystyle L_4=6.75$ and right sum $\displaystyle R_4=10.75$.

**Example 2: From a Table**
Use the Trapezoidal Rule to approximate $\displaystyle \int_0^6 f(x) \, dx$ from the data:

| $\displaystyle x$ | 0 | 2 | 4 | 6 |
|---|---|---|---|---|
| $\displaystyle f(x)$ | 3 | 7 | 11 | 5 |

1. We have 3 subintervals ($\displaystyle n=3$) of equal width $\displaystyle \Delta x = 2$.
2. $\displaystyle T_3 = \frac{2}{2} \left[ f(0) + 2f(2) + 2f(4) + f(6) \right]$
   $\displaystyle = 1 \cdot \left[ 3 + 2(7) + 2(11) + 5 \right]$
   $\displaystyle = 3 + 14 + 22 + 5 = \boxed{44}$