# Introduction to Limits

## **The Idea of a Limit**

You already know how to find a **slope of a straight line**. It’s easy, right?  

$$
\displaystyle m = \frac{rise}{run}=\frac{\Delta y}{\Delta x}=\frac{y_2-y_1}{x_2-x_1}
$$

We just take **two points** and the job is done. Easy.

Let’s also remember that slope shows you the average rate of change of the function $\displaystyle \frac{\Delta y}{\Delta x}$.

![desmos-graph (7).svg](unit-1/lesson-1/desmos-graph_(7).svg)

Now imagine we've got a curve. Let's say it's the parabola $\displaystyle y=\frac{1}{2}x^2 + 1$.

How would you find the **slope of that curve**? Another way to ask it: how do you find the **instantaneous rate of change**—the rate at a single instant? I don't want the average anymore. I want something special.

![desmos-graph (9).svg](unit-1/lesson-1/desmos-graph_(9).svg)

That’s actually one of the classic problems in calculus - **the tangent line problem**. In the tangent line problem, you are given a function $\displaystyle f$  and a point $\displaystyle P$ on its graph and are asked to find an equation of the tangent line to the graph at point $\displaystyle P$. 

![desmos-graph (11).svg](unit-1/lesson-1/desmos-graph_(11).svg)

Here's the catch: from algebra, we know we need two points to define a line. But here we've only got one. So what now?

Let's at least try something. Pick a second point $\displaystyle Q$ and draw a **secant line**—a line through $\displaystyle P$ and another point on the curve.

![desmos-graph (12).svg](unit-1/lesson-1/desmos-graph_(12).svg)

We actually know how to find the slope of the secant line. No problem, it’s again

$$
\displaystyle m_{sec} = \frac{\Delta y}{\Delta x}=\frac{y_Q-y_P}{x_Q-x_P}
$$

Sure, it's an **approximation** of the tangent line. Not a great one yet, but it's a start. But here's the key: if we move point $\displaystyle Q$ closer and closer to $\displaystyle P$, the secant line starts to look more and more like the tangent line.

![desmos-graph (14).svg](unit-1/lesson-1/desmos-graph_(14).svg)

![desmos-graph (15).svg](unit-1/lesson-1/desmos-graph_(15).svg)

![desmos-graph (16).svg](unit-1/lesson-1/desmos-graph_(16).svg)

Therefore, if we move point $\displaystyle Q$ really, really, really close to point $\displaystyle P$ - but not exactly $\displaystyle P$, right, because we need 2 points, don’t forget about that - the secant line approximates the tangent line on a very high level. We say that $\displaystyle Q$ approaches $\displaystyle P$ here. It means it gets really, really, really close to $\displaystyle P$, as close as possible without actually being $\displaystyle P$. 

Let’s say $\displaystyle P$ is at $(1, 1.5)$. Let's find the slope of the tangent line. 

$$
\displaystyle m_{sec} = \frac{\Delta y}{\Delta x}=\frac{y-1.5}{x-1}
$$

Let’s plug in $\displaystyle y=\frac{1}{2}x^2 + 1$. We get

$$
\displaystyle m_{sec} =\frac{\frac{1}{2}x^2+1-1.5}{x-1}=\frac{\frac{1}{2}x^2-0.5}{x-1}
$$

![desmos-graph (13).svg](unit-1/lesson-1/desmos-graph_(13).svg)

To get $\displaystyle m_{tan}$, we need $\displaystyle Q$ to approach $\displaystyle P$, which here means $\displaystyle x$ approaches $\displaystyle 1$. So the slope of the tangent line is the *limit* of $\displaystyle \frac{\frac{1}{2}x^2-0.5}{x-1}$ as $\displaystyle x$ gets close to $1$.

In calc, we write it like this:

$$
\displaystyle \lim_{x \to 1} \frac{\frac{1}{2}x^2-0.5}{x-1} = m_{tan}
$$
Let's simplify
$$
\displaystyle \lim_{x \to 1} \frac{\frac{1}{2}x^2-0.5}{x-1} = \lim_{x \to 1} \frac{\frac{1}{2}(x^2-1)}{x-1} =\lim_{x \to 1} \frac{\frac{1}{2}(x-1)(x+1)}{x-1}
$$

And here's the magic: we can cancel $\displaystyle (x-1)$ because $\displaystyle x$ is really, really close to $1$, but **not exactly** $1$. So it's safe.

That leaves us with:

$$
\displaystyle \lim_{x \to 1} \frac{1}{2}(x+1) = 1
$$

Boom. The slope is $1$.

### **Definition:**

Generally, we say that **the limit of $\displaystyle f(x)$ as $\displaystyle x$ approaches $\displaystyle c$ is $\displaystyle L$**, written as:

$$
\displaystyle \lim_{x \to c} f(x) = L
$$

This means that as $\displaystyle x$ gets arbitrarily close to $\displaystyle c$ from **both sides** (but $\displaystyle x \neq c$), the values of $\displaystyle f(x)$ get arbitrarily close to the real number $\displaystyle L$.

- The limit describes the **behavior of a function near a point**, not necessarily at the point itself.
- The function does **not** need to be defined at $\displaystyle x = c$ for the limit to exist.
- You're basically asking: what $\displaystyle y$-value is the function heading toward as $\displaystyle x$ closes in on $\displaystyle c$?
- The most important rule: **The limit does not care what happens exactly at $\displaystyle x = c$.** It only cares about the values as $\displaystyle x$ gets infinitely close to $\displaystyle c$.

*EXCLUSION STATEMENT*

*The epsilon-delta definition of a limit is not assessed on the AP Calculus AB or BC Exam.*

*We're skipping it due to time constraints.*

**Examples**

1. Find $\displaystyle \lim_{x \to 2} (x^2 + 1)$ .

The expression $\displaystyle \lim_{x \to 2} (x^2 + 1)$ asks: "As $x$ gets arbitrarily close to $2$ (but not necessarily equal to $2$), what single value does $x^2 + 1$ approach?"

Let's watch what happens to $f(x) = x^2 + 1$ when $x$ is near $2$.

| $x$ approaches $2$ from the left | $f(x) = x^2 + 1$ | | $x$ approaches $2$ from the right | $f(x) = x^2 + 1$ |
| :--- | :--- | :--- | :--- | :--- |
| 1.9 | $1.9^2 + 1 = 4.61$ | | 2.1 | $2.1^2 + 1 = 5.41$ |
| 1.99 | $1.99^2 + 1 = 4.9601$ | | 2.01 | $2.01^2 + 1 = 5.0401$ |
| 1.999 | $1.999^2 + 1 \approx 4.996001$ | | 2.001 | $2.001^2 + 1 \approx 5.004001$ |
| $\downarrow$ | $\downarrow$ | | $\downarrow$ | $\downarrow$ |
| **$x \to 2$** | **$f(x) \to 5$** | | **$x \to 2$** | **$f(x) \to 5$** |

From both sides, as $x$ gets closer to $2$, $f(x)$ gets closer to $5$.


 
Since the values of $f(x)$ approach $5$ as $x$ approaches $2$ from both the left and the right, we conclude:
    $$\lim_{x \to 2} (x^2 + 1) = 5.$$

**A Helpful Shortcut**

You might notice that for this function, we simply plugged $x = 2$ into $x^2 + 1$ and got $5$. This works for functions that are **continuous**. A continuous function is one you could draw without lifting your pencil—no holes, jumps, or breaks. Most functions you'll see early on (like polynomials) have this property. For these "nice" functions, finding the limit is as easy as substituting the $x$-value into the function.

*Don't worry too much about the term "continuous" right now—we'll cover it in detail later. For now, just remember that if a function is "nice and connected" at the point you're approaching, you can find the limit by direct substitution.*

2. Find $\displaystyle \lim_{x \to 1} \frac{x^2 - 1}{x - 1}$.

Let's try plugging $x = 1$ directly into the function:
$$\displaystyle \frac{1^2 - 1}{1 - 1} = \frac{0}{0}.$$
We get $\displaystyle \frac{0}{0}$, which is an **indeterminate form**. This tells us the function is undefined at $x = 1$ (there's a hole in the graph), but it doesn't tell us anything about the limit. The limit asks what value the function *approaches*, not what it equals at that point.

Since we only care about values *near* $x = 1$, not at $x = 1$ itself, we can simplify the algebraic expression. Notice the numerator is a difference of squares:
$$x^2 - 1 = (x - 1)(x + 1).$$
Therefore, for all $x \neq 1$,
$$\frac{x^2 - 1}{x - 1} = \frac{(x - 1)(x + 1)}{x - 1} = x + 1.$$
This simplified function, $g(x) = x + 1$, is identical to our original function everywhere except at the single point $x = 1$.

Now, let's see what $f(x) = \frac{x^2 - 1}{x - 1}$ approaches as $x$ gets close to $1$. We can use the simplified version $x+1$ because it's the same for all the $x$-values we're checking.

| $x$ approaches $1$ from the left | $f(x) = x + 1$ | | $x$ approaches $1$ from the right | $f(x) = x + 1$ |
| :--- | :--- | :--- | :--- | :--- |
| 0.9 | $0.9 + 1 = 1.9$ | | 1.1 | $1.1 + 1 = 2.1$ |
| 0.99 | $0.99 + 1 = 1.99$ | | 1.01 | $1.01 + 1 = 2.01$ |
| 0.999 | $0.999 + 1 = 1.999$ | | 1.001 | $1.001 + 1 = 2.001$ |
| $\downarrow$ | $\downarrow$ | | $\downarrow$ | $\downarrow$ |
| **$x \to 1$** | **$f(x) \to 2$** | | **$x \to 1$** | **$f(x) \to 2$** |

From both sides, as $x$ gets closer to $1$, $f(x)$ gets closer to $2$.

Even though the original function is undefined at $x = 1$, the values it approaches from both sides get closer and closer to $2$. Therefore, the limit exists and is $2$:
$$\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = 2.$$

A limit describes the *intended* height of a function as $x$ approaches a point, not necessarily the actual height at that point. The function may be undefined (like a hole), but the limit can still exist.

## **Estimating a Limit**

Assume that you are asked to sketch the graph of the function given by 

$$
\displaystyle f(x)=\frac{x^3-1}{x-1}, \textbf{ }x\neq1
$$

You can graph most of it normally. But at $\displaystyle x = 1$, it's undefined $\displaystyle \frac{0}{0}$. So what do we do there?

To see what's happening near that point, let's check values as $\displaystyle x$ gets closer to $1$ from the left and right.

![desmos-graph (17).svg](unit-1/lesson-1/desmos-graph_(17).svg)

Here's the table of values:

| **$\displaystyle x$** | **0.75** | **0.9** | **0.99** | **0.999** | **1** | **1.001** | **1.01** | **1.1** | **1.25** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **$\displaystyle f(x)$** | 2.313 | 2.710 | 2.970 | 2.997 | **?** | 3.003 | 3.030 | 3.310 | 3.813 |

As $\displaystyle x$ approaches 1 **from the left** (using values like 0.75, 0.9, and 0.999), $\displaystyle f(x)$ increases toward 3. Similarly, as $\displaystyle x$ approaches 1 **from the right** (using values like 1.25, 1.1, and 1.001), it drops toward 3.

The graph looks like a parabola, but with a hole at $\displaystyle (1, 3)$. Even though $\displaystyle x$ can never actually be $\displaystyle 1$, we can pick values infinitely close to it, which forces $\displaystyle f(x)$ to get infinitely close to $\displaystyle 3$. 


$\displaystyle \lim_{x \to 1} f(x) = 3$

This shows two ways to estimate a limit:

- **numerically**—building a table
- **graphically**—spotting the trend on the graph

**Example**

Evaluate the function $\displaystyle f(x) = \frac{x}{\sqrt{x+4}-2}$  at several points near $\displaystyle x=0$ and use

the results to estimate the limit

$$
\displaystyle \lim_{x \to 0}f(x) = \frac{x}{\sqrt{x+4}-2}
$$

*Notice: the function is undefined at $\displaystyle x = 0$, but it still looks like it's approaching something.*

Like we said:

The function does **not** need to be defined at $\displaystyle x = c$ for the limit to exist.

![desmos-graph (18).svg](unit-1/lesson-1/desmos-graph_(18).svg)

| **$\displaystyle x$** | **−0.01** | **−0.001** | **−0.0001** | **0** | **0.0001** | **0.001** | **0.01** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **$\displaystyle f(x)$** | 3.99750 | 3.99975 | 3.99998 | **?** | 4.00002 | 4.00025 | 4.00250 |

From the table, the limit looks like 4.

I love tables because they give you a feel for one-sided limits.

By picking $\displaystyle x$-values that are just under 4, you see what happens as you get closer from the left.

Pick values just over 4, and you see what happens as you get closer from the right.

That leads us to **left-hand and right-hand limits**.

### **Definition:**

**Left-Hand Limit:** $\displaystyle\lim_{x \to c^-} f(x) = L$ means as $\displaystyle x$ approaches $\displaystyle c$ from values **less than $\displaystyle c$**, $\displaystyle f(x)$ approaches $\displaystyle L$.

**Right-Hand Limit:** $\displaystyle\lim_{x \to c^+} f(x) = L$ means as $\displaystyle x$ approaches $\displaystyle c$ from values **greater than $\displaystyle c$**, $\displaystyle f(x)$ approaches $\displaystyle L$.

The **two-sided limit** $\displaystyle\lim_{x \to c} f(x)$ exists **if and only if** both one-sided limits exist and are equal:

$$
\displaystyle \lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L
$$

If the left-hand and right-hand limits are different, the two-sided limit **does not exist (DNE)**.

*Tables above show exactly that.*

**Examples**

1. One-Sided Limits from a Piecewise Function

$$
\displaystyle f(x) =    \begin{cases}    x + 2 & \text{if } x < 1 \\    3x & \text{if } x \geq 1    \end{cases}
$$

![desmos-graph (19).svg](unit-1/lesson-1/desmos-graph_(19).svg)

Left-hand limit: $\displaystyle\lim_{x \to 1^-} f(x) = 1 + 2 = 3$.

Right-hand limit: $\displaystyle\lim_{x \to 1^+} f(x) = 3(1) = 3$.

Since both are equal, $\displaystyle\lim_{x \to 1} f(x) = 3$.

2. One-Sided Limits That Differ

Consider the **absolute value function** $\displaystyle f(x) = \frac{|x|}{x}$ for $\displaystyle x \neq 0$.

![desmos-graph (20).svg](unit-1/lesson-1/desmos-graph_(20).svg)

Left-hand limit: As $\displaystyle x \to 0^-$, $\displaystyle |x| = -x$, so $\displaystyle f(x) = -1$. 

Thus, $\displaystyle\lim_{x \to 0^-} f(x) = -1$.
Right-hand limit: As $\displaystyle x \to 0^+$, $\displaystyle |x| = x$, so $\displaystyle f(x) = 1$.

Thus, $\displaystyle\lim_{x \to 0^+} f(x) = 1$.

Since $\displaystyle -1 \neq 1$,    $\displaystyle\lim_{x \to 0} f(x)$ **does not exist**.

Everything so far has been about finite limits:

$$
\displaystyle \lim_{x \to c} f(x) = L
$$

In this case:

- $\displaystyle f(x)$ gets arbitrarily close to $\displaystyle L$
- as $\displaystyle x$ gets arbitrarily close to c (but $\displaystyle x \neq c$).

The key is: $\displaystyle L$ is a **finite real number** we can name.

Now, take $\displaystyle f(x) = \frac{1}{x^2}$.

As $\displaystyle x\to0$, $\displaystyle f(x)$ grows without bound.

![desmos-graph.svg](unit-1/lesson-1/desmos-graph.svg)

We write:

$$
\displaystyle \lim_{x \to 0} \frac{1}{x^2} = \infty
$$

But here's the thing: we're **not** saying $\displaystyle \infty$ is a number that $\displaystyle f(x)$ reaches. We're saying it grows without limit.

Same idea for $\displaystyle -\infty$.

So if you're wondering: "Wait, how can an infinite limit 'exist' if we said limits should be finite?"

**Answer**: It’s a different *type* of limit statement.

We have:

- **Finite limit at a point**: function approaches a real number $\displaystyle L$.
- **Infinite limit at a point**: function grows without bound (still from both sides unless one-sided limit).

The word “limit” is used for both, but the **meaning is extended**. Let's define it properly.

### **Definition**

The function $\displaystyle f(x)$ is said to become infinite (positively or negatively) as $\displaystyle x$ approaches $\displaystyle c$ if $\displaystyle f(x)$ can be made arbitrarily large (positively or negatively) by taking $\displaystyle x$ sufficiently close to $\displaystyle c$. We note it as:

$$
\displaystyle\lim_{x \to c} f(x) = +\infty \textbf{ } or \textbf{ } \displaystyle\lim_{x \to c} f(x) = -\infty 
$$

This concept extends naturally to one-sided limits. 

$$
\displaystyle\lim_{x \to c^+} f(x) = +\infty \textbf{ } or \textbf{ } \displaystyle\lim_{x \to c^-} f(x) = +\infty 
$$

$$
\displaystyle\lim_{x \to c^+} f(x) = -\infty \textbf{ } or \textbf{ } \displaystyle\lim_{x \to c^-} f(x) = -\infty 
$$

Let’s look at an example.

**Example**

1. Prove that   $\displaystyle\lim_{x \to 0} \frac{1}{x}$   does not exist.

![desmos-graph (21).svg](unit-1/lesson-1/desmos-graph_(21).svg)

Left-hand limit: $\displaystyle\lim_{x \to 0^-} f(x) = -\infty$.
Right-hand limit:  $\displaystyle\lim_{x \to 0^+} f(x) = +\infty$.

Thus,  $\displaystyle\lim_{x \to 0} f(x)$ **does not exist**.

You might ask: 

"Wait, prof. G, is it DNE because the one-sided limits aren't equal, or because it's infinite?"

Good question. Here's the deal:

- **The two one-sided limits aren't equal**—one is $\displaystyle +\infty$, the other $\displaystyle -\infty$. So:

$\displaystyle \lim_{x \to 0} \frac{1}{x}$ does not exist (as a finite or infinite two-sided limit).

- **Does it DNE because it's infinite?**

— Not exactly.

If both sides went to $\displaystyle +\infty$ (like $\displaystyle \frac{1}{x^2}$ at $\displaystyle 0$), we **would** say $\displaystyle \lim_{x \to 0} f(x) = \infty$
an infinite limit, and in calculus we treat that as a kind of "exists" (in the sense of describing behavior).

But here, because the left and right go to **different infinities**, there's no single "∞" value it approaches from both sides. So it's DNE.