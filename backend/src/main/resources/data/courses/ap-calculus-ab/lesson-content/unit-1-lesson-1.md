# Lesson 1: Introduction to Limits

### **The Idea of a Limit**

You already know how to find a **slope of a straight line**. It’s easy, right?  

$$
m = \frac{rise}{run}=\frac{\Delta y}{\Delta x}=\frac{y_2-y_1}{x_2-x_1}
$$

We just take **two points** and job is done. Easy.

Let’s also remember that slope shows you the average rate of change of function $\frac{\Delta y}{\Delta x}$.

![desmos-graph (7).svg](desmos-graph_(7).svg)

Imagine now we have a curve. Let it be parabola $y=\frac{1}{2}x^2 + 1$.

How are you going to find the **slope of that curve**? Or we can also rephrase it as: how are you going to find the **instanteneous rate of change of that curve (**rate of change at some instant of time**)**? I’ve just decided I want more than average. Something unique.

![desmos-graph (9).svg](desmos-graph_(9).svg)

That’s actually one of the classic problems in calculus - **the tangent line problem**. In the tangent line problem, you are given a function $f$  and a point $P$ on its graph and are asked to find an equation of the tangent line to the graph at point $P$. 

![desmos-graph (11).svg](desmos-graph_(11).svg)

The problem is that as we know from algebra we need two points to build an equation. Here we have only one. What shall we do?

Let’s do at least something. Let’s take 2nd point $Q$ and draw a **secant line (**line through the point of tangency and a second point on the curve**)**. 

![desmos-graph (12).svg](desmos-graph_(12).svg)

So, we actually know how to find the slope of the secant line. No problem, it’s again

$$
m_{sec} = \frac{\Delta y}{\Delta x}=\frac{y_Q-y_P}{x_Q-x_P}
$$

Notice that it’s **an approximation of the tangent line**. It’s certainly not a good aproximation yet but fact remains the same. However if we move point Q closer to the point P we will see that as it gets closer to P the secant line becomes more and more similar with the tangent line.

![desmos-graph (14).svg](desmos-graph_(14).svg)

![desmos-graph (15).svg](desmos-graph_(15).svg)

![desmos-graph (16).svg](desmos-graph_(16).svg)

Therefore, if we move point Q really really really close to the point P (but not exactly P right, because we need 2 points, don’t forget about that) the secant line approximates tangent line on the very high level. We say that Q approaches P here. It means gets really really really close to P, as close as it can to not be a P exactly. 

Let’s say now that coordinates of the point P are (1, 1.5) and try to find the slope of the tangent line. 

$$
m_{sec} = \frac{\Delta y}{\Delta x}=\frac{y-1.5}{x-1}
$$

Let’s plug in $y=\frac{1}{2}x^2 + 1$. We get

$$
m_{sec} =\frac{\frac{1}{2}x^2+1-1.5}{x-1}=\frac{\frac{1}{2}x^2-0.5}{x-1}
$$

![desmos-graph (13).svg](desmos-graph_(13).svg)

Now, in order to find $m_{tan}$ we need Q to approach P. In our case It means $x$ approaches $1$. The slope of the tangent line then will be the limit of  $\frac{\frac{1}{2}x^2}{x-1.5}$ as $x$ approaches $1$.

We write it in calc as 

$$
\lim_{x \to 1} \frac{\frac{1}{2}x^2-0.5}{x-1} = m_{tan}
$$

$$
\lim_{x \to 1} \frac{\frac{1}{2}x^2-0.5}{x-1} = \lim_{x \to 1} \frac{\frac{1}{2}(x^2-1)}{x-1} =\lim_{x \to 1} \frac{\frac{1}{2}(x-1)(x+1)}{x-1}
$$

And here’s the beauty: We can simplify it and cancel out $(x-1)$ because we are absolutely sure that $x \neq 1$ (we get really really really close, but not exactly $1$). So, we get final answer by substituting $1$ into the equation

$$
\lim_{x \to 1} \frac{1}{2}(x+1) = 1
$$

### **Definition:**

We say that **the limit of $f(x)$ as $x$ approaches $c$ is $L$**, written as:

$$
\lim_{x \to c} f(x) = L
$$

This means that as $x$ gets arbitrarily close to $c$ from **both sides** (but $x \neq c$), the values of $f(x)$ get arbitrarily close to the real number $L$.

- The limit describes the **behavior of a function near a point**, not necessarily at the point itself.
- The function does **not** need to be defined at $x = c$ for the limit to exist.
- To find a limit, you are looking for the $y$-value the function is "heading toward" as $x$ approaches $c$.
- The most important rule: **The limit does not care what happens exactly at $x = c$.** It only cares about the values as $x$ gets infinitely close to $c$.

**EXCLUSION STATEMENT**

*The epsilon-delta definition of a limit is not assessed on the AP Calculus AB or BC Exam.*

*We do not include this topic in the course due to time constraints.*

---

**Examples**

1. Direct Substitution (When the Function is Continuous): 

Consider $f(x) = x^2 + 1$. As $x$ gets closer to $2$, 

$x^2 + 1$ gets closer to $2^2 + 1 = 5$. 

So,  $\displaystyle\lim_{x \to 2} (x^2 + 1) = 5$.

1. Function with a Hole (Limit Exists Despite Undefined Point): 

Let $f(x) = \frac{x^2 - 1}{x - 1}$.

At $x = 1$, the function is undefined ($\frac{0}{0}$).

However, for $x \neq 1$, we can simplify: $f(x) = x + 1$.

As $x$ approaches $1$ from either side, $f(x)$ approaches $2$.

So,  $\displaystyle\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = 2$.

1. Unbounded Behavior (Infinite Limit): 

Let $f(x) = \frac{1}{x^2}$.

As $x$ gets closer to $0$, 

$1/x^2$ grows without bound.

In AP Calc, we write $\displaystyle\lim_{x \to 0} \frac{1}{x^2} = \infty$.

***Note: The limit does not exist as a finite number, but we use this notation to describe the behavior.***

### Estimating a Limit

Assume that you asked to sketch the graph of the function given by 

$$
f(x)=\frac{x^3-1}{x-1}, \textbf{ }x\neq1
$$

Standard graphing methods apply to nearly every point in its domain. However, at $x = 1$, the function is undefined $\frac{0}{0}$. What are we gonna do?

To investigate how the graph acts near this point, we can examine the function's values as $x$ gets closer to $1$ from both the left and the right.

![desmos-graph (17).svg](desmos-graph_(17).svg)

Let’s build a table of values

| **$x$** | **0.75** | **0.9** | **0.99** | **0.999** | **1** | **1.001** | **1.01** | **1.1** | **1.25** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **$f(x)$** | 2.313 | 2.710 | 2.970 | 2.997 | **?** | 3.003 | 3.030 | 3.310 | 3.813 |

As $x$ approaches 1 **from the left** (using values like 0.75, 0.9, and 0.999), $f(x)$ increases toward 3. Similarly, as $x$ approaches 1 **from the right** (using values like 1.25, 1.1, and 1.001), the outputs decrease toward 3.

Visually, the graph follows the path of a parabola but contains a specific gap at the coordinate $(1, 3)$. Even though $x$ can never actually be $1$, we can choose values infinitely close to it, which forces $f(x)$ to get infinitely close to $3$. 

$\lim_{x \to 1} f(x) = 3$

This process demonstrates how to estimate a limit through two primary lenses:

- **numerically**, by building a table of data
- **graphically**, by identifying the trend on a coordinate plane

**Example**

Evaluate the function $f(x) = \frac{x}{\sqrt{x+4}-2}$  at several points near $x=0$ and use

the results to estimate the limit

$$
\lim_{x \to 0}f(x) = \frac{x}{\sqrt{x+4}-2}
$$

*Note that the function is undefined at $x = 0$ and yet appears to be approaching a limit as approaches 0.*

We said it earlier:

The function does **not** need to be defined at $x = c$ for the limit to exist.

![desmos-graph (18).svg](desmos-graph_(18).svg)

| **$x$** | **−0.01** | **−0.001** | **−0.0001** | **0** | **0.0001** | **0.001** | **0.01** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **$f(x)$** | 3.99750 | 3.99975 | 3.99998 | **?** | 4.00002 | 4.00025 | 4.00250 |

From the table we can estimate the limit to be 4 

I love tables because here you get an intuitive feeling of one-sided limits whatsoever. 

By picking $x$-values that are just a little bit smaller than 4, you can see what the function is doing as it gets closer from the left.

In the same way, picking values just a bit larger than 4 shows you what’s happening as it comes in from the right.

Therefore, we can introduce **left-hand and right-hand limits**.

### **Definition:**

**Left-Hand Limit:** $\displaystyle\lim_{x \to c^-} f(x) = L$ means as $x$ approaches $c$ from values **less than $c$**, $f(x)$ approaches $L$.

**Right-Hand Limit:** $\displaystyle\lim_{x \to c^+} f(x) = L$ means as $x$ approaches $c$ from values **greater than $c$**, $f(x)$ approaches $L$.

The **two-sided limit** $\displaystyle\lim_{x \to c} f(x)$ exists **if and only if** both one-sided limits exist and are equal:

$$
\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L
$$

If the left-hand and right-hand limits are different, the two-sided limit **does not exist (DNE)**.

*Notice that the table from previous example agrees on that.*

**Examples:**

1. One-Sided Limits from a Piecewise Function

$$
f(x) =    \begin{cases}    x + 2 & \text{if } x < 1 \\    3x & \text{if } x \geq 1    \end{cases}
$$

![desmos-graph (19).svg](desmos-graph_(19).svg)

Left-hand limit: $\displaystyle\lim_{x \to 1^-} f(x) = 1 + 2 = 3$.

Right-hand limit: $\displaystyle\lim_{x \to 1^+} f(x) = 3(1) = 3$.

Since both are equal, $\displaystyle\lim_{x \to 1} f(x) = 3$.

1. One-Sided Limits That Differ

Consider the **absolute value function** $f(x) = \frac{|x|}{x}$ for $x \neq 0$.

![desmos-graph (20).svg](desmos-graph_(20).svg)

Left-hand limit: As $x \to 0^-$, $|x| = -x$, so $f(x) = -1$. 

Thus, $\displaystyle\lim_{x \to 0^-} f(x) = -1$.
Right-hand limit: As $x \to 0^+$, $|x| = x$, so $f(x) = 1$.

Thus, $\displaystyle\lim_{x \to 0^+} f(x) = 1$.

Since $-1 \neq 1$,    $\displaystyle\lim_{x \to 0} f(x)$ **does not exist**.

Everything before was about finite limits:

$$
\lim_{x \to c} f(x) = L
$$

In this case:

- $f(x)$ gets arbitrarily close to $L$
- as $x$ gets arbitrarily close to a (but $x≠a$).

The key is: $L$ is a **finite real number** we can name.

Now, take $f(x) = \frac{1}{x^2}$

As $x\to0$, $f(x)$ grows without bound

![desmos-graph.svg](desmos-graph.svg)

We write:

$$
\lim_{x \to 0} \frac{1}{x^2} = \infin
$$

But here’s the **crucial distinction**:

We are **not** saying $\infin$ is a number that $f(x$) approaches.

We are saying: as $x$ gets close to 0, 

$f(x)$ increases without any upper bound.

Similarly for $-\infin$.

So, if you ask:

How can this infinite limit exist if we said it should be a finite number?

**Answer**: It’s a different *type* of limit statement.

We have:

- **Finite limit at a point**: function approaches a real number $L$.
- **Infinite limit at a point**: function grows without bound (still from both sides unless one-sided limit).

The word “limit” is used for both, but the **meaning is extended**. Let’s give a definiton here.

### Definiton

The function $f(x)$ is said to become infinite (positively or negatively) as $x$ approaches $c$ if $f(x)$ can be made arbitrarily large (positively or negatively) by taking $x$ sufficiently close to $c$. We note it as:

$$
\displaystyle\lim_{x \to c} f(x) = +∞ \textbf{ } or \textbf{ } \displaystyle\lim_{x \to c} f(x) = -∞ 
$$

This concept extends naturally to one-sided limits. 

$$
\displaystyle\lim_{x \to c^+} f(x) = +∞ \textbf{ } or \textbf{ } \displaystyle\lim_{x \to c^-} f(x) = +∞ 
$$

$$
\displaystyle\lim_{x \to c^+} f(x) = -∞ \textbf{ } or \textbf{ } \displaystyle\lim_{x \to c^-} f(x) = -∞ 
$$

Let’s look at the example.

**Example**

Prove that   $\displaystyle\lim_{x \to 0} \frac{1}{x}$   does not exist.

![desmos-graph (21).svg](desmos-graph_(21).svg)

Left-hand limit: $\displaystyle\lim_{x \to 0^-} f(x) = -∞$.
Right-hand limit:  $\displaystyle\lim_{x \to 0^+} f(x) = +∞$.

Thus,  $\displaystyle\lim_{x \to 0} f(x)$ **does not exist**.

You might ask: 

Okay, prof. G,  limit does not exist because left-side and right-side limits are not equal? Or it DNE because it's infinite?

What’s correct to say:

1. **The two one-sided limits are not equal** (one is  $+\infin$, the other $-\infin$, so:

$\lim_{x \to 0} \frac{1}{x} \text{ does not exist (in the sense of a finite or an infinite two-sided limit).}$
2. **Does it DNE because it’s infinite?**
    
    — Not exactly.
    
    If both sides were $+\infin$ (like $\frac{1}{x^2}$ at $0$) , we **would** say  $\lim_{x \to 0} f(x) = \infty$  (infinite limit), and in calculus we accept this as a kind of “limit exists and is infinite”.
    
    But here, since left and right are **different infinities**, we don’t have a single “∞” value it approaches from both sides.