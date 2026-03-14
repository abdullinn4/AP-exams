# Differential Equation Basics

## **Introduction**

Alright, differential equations. Sounds scary, right?

Maybe, but that's just a name. A differential equation is really just an equation that also has some derivatives in it. For example:

$$y' + y = 0$$

is a differential equation.

Believe it or not, differential equations are actually pretty cool. They show that calculus can be used to predict the future.

Imagine you have a population of rabbits. The rate at which the population grows is proportional to the current population. More rabbits means more baby rabbits.

$$ \frac{dP}{dt} = rP$$

Again, a differential equation. So here's the big question: if I only know the rate of change, can I figure out the original function? Can I find $\displaystyle P(t)$? That's what we're learning today.

**Definition:**
A **differential equation** is an equation that relates a function with one or more of its derivatives. In AP Calculus AB, we focus on **ordinary differential equations** (ODEs) with one independent variable, typically $\displaystyle x$ or $\displaystyle t$.

The **order** of a differential equation is the order of the highest derivative that appears in the equation.
- $\displaystyle y' = 4y$ is **first-order** (only first derivative)
- $\displaystyle s''(t) = -32$ is **second-order** (second derivative)

**First-Order Differential Equations (Our Main Focus):**
These involve the first derivative and can often be written as:

$$
\frac{dy}{dx} = f(x, y)
$$

where $\displaystyle f(x, y)$ is some expression involving $\displaystyle x$ and $\displaystyle y$.

The function $\displaystyle y = f(x)$ is called a **solution** if plugging it into the equation (along with its derivatives) makes the equation true.

**Example:** Check if $\displaystyle y = e^{-2x}$ solves $\displaystyle y' + 2y = 0$.

- $\displaystyle y' = -2e^{-2x}$
- Substitute: $\displaystyle (-2e^{-2x}) + 2(e^{-2x}) = 0$ ✅

It works! And it turns out *every* solution of this equation looks like

$$y = Ce^{-2x}$$

where $\displaystyle C$ is any real number. This is called the **general solution** – it's a whole family of functions, one for each value of $\displaystyle C$.

A differential equation of order $\displaystyle n$ typically has a general solution with $\displaystyle n$ arbitrary constants. For $\displaystyle s''(t) = -32$, the general solution is:

$$s(t) = -16t^2 + C_1 t + C_2$$

(two constants: $\displaystyle C_1$ and $\displaystyle C_2$).

---

## **Verifying Solutions**

Before we learn how to *solve* differential equations, let's make sure we can recognize a solution when we see one. This is like checking your work in algebra by plugging your answer back into the original equation.

Determine whether each function solves $\displaystyle y'' - y = 0$.

| Function | Derivatives | Check $\displaystyle y'' - y = 0$? | Verdict |
|----------|-------------|----------------------|---------|
| $\displaystyle y = \sin x$ | $\displaystyle y' = \cos x$, $\displaystyle y'' = -\sin x$ | $\displaystyle -\sin x - \sin x = -2\sin x \neq 0$ | ❌ Not a solution |
| $\displaystyle y = 4e^{-x}$ | $\displaystyle y' = -4e^{-x}$, $\displaystyle y'' = 4e^{-x}$ | $\displaystyle 4e^{-x} - 4e^{-x} = 0$ | ✅ Solution |
| $\displaystyle y = Ce^x$ | $\displaystyle y' = Ce^x$, $\displaystyle y'' = Ce^x$ | $\displaystyle Ce^x - Ce^x = 0$ | ✅ Solution for *any* $\displaystyle C$ |

Notice: $\displaystyle y = Ce^x$ is actually the *general solution* of $\displaystyle y'' - y = 0$.

**Example 1: Simple Verification**
Verify that $\displaystyle y = 3e^{2x}$ is a solution to $\displaystyle \frac{dy}{dx} = 2y$.

*Step-by-step:*
1. Compute the derivative: $\displaystyle \frac{dy}{dx} = 3 \cdot 2e^{2x} = 6e^{2x}$
2. Substitute into the right side: $\displaystyle 2y = 2 \cdot 3e^{2x} = 6e^{2x}$
3. Compare: Left side = $\displaystyle 6e^{2x}$, Right side = $\displaystyle 6e^{2x}$
4. They match! So $\displaystyle y = 3e^{2x}$ **is** a solution.

**Example 2: Verifying a Family of Solutions**
Show that $\displaystyle y = Ce^{-x} + 2$ is a solution to $\displaystyle \frac{dy}{dx} = -y + 2$ for any constant $\displaystyle C$.

*Step-by-step:*
1. Compute the derivative: $\displaystyle \frac{dy}{dx} = -Ce^{-x}$
2. Compute the right side: $\displaystyle -y + 2 = -(Ce^{-x} + 2) + 2 = -Ce^{-x} - 2 + 2 = -Ce^{-x}$
3. Both sides equal $\displaystyle -Ce^{-x}$, so it works for **any** $\displaystyle C$.

**Example 3: Checking an Initial Condition**
Given the differential equation $\displaystyle \frac{dy}{dx} = 3x^2$ with initial condition $\displaystyle y(1) = 4$, verify that $\displaystyle y = x^3 + 3$ is a particular solution.

*Step-by-step:*
1. Check the differential equation:
   - Derivative: $\displaystyle \frac{dy}{dx} = 3x^2$ ✓ matches
2. Check the initial condition:
   - $\displaystyle y(1) = 1^3 + 3 = 4$ ✓ matches
3. Therefore, $\displaystyle y = x^3 + 3$ is the particular solution.

**Example 4: A Tricky One**
Verify that $\displaystyle y = \frac{1}{x} + 3$ is a solution to $\displaystyle \frac{dy}{dx} = -y^2 + 6y - 9$.

*Step-by-step:*
1. Compute the derivative: $\displaystyle \frac{dy}{dx} = -\frac{1}{x^2}$
2. Compute the right side carefully:
   - First, $\displaystyle y^2 = \left(\frac{1}{x} + 3\right)^2 = \frac{1}{x^2} + \frac{6}{x} + 9$
   - So $\displaystyle -y^2 = -\frac{1}{x^2} - \frac{6}{x} - 9$
   - $\displaystyle 6y = 6\left(\frac{1}{x} + 3\right) = \frac{6}{x} + 18$
   - Put it all together: $\displaystyle -\frac{1}{x^2} - \frac{6}{x} - 9 + \frac{6}{x} + 18 - 9 = -\frac{1}{x^2}$
3. Both sides equal $\displaystyle -\frac{1}{x^2}$, so it's a solution!

---

## **General Solution vs. Particular Solution**

- **General solution:** The family of all solutions, with arbitrary constants.
- **Particular solution:** One specific member of the family, found by using **initial conditions** (extra info that pins down the constants).

**Example:** The equation $\displaystyle xy' + y = 0$ has general solution

$$y = \frac{C}{x}$$

(you can verify: $\displaystyle y' = -C/x^2$, so $\displaystyle xy' + y = x(-C/x^2) + C/x = -C/x + C/x = 0$).

Geometrically, each $\displaystyle C$ gives a different curve – these are called **solution curves** (Figure 6.1 shows a few of them).

---

### Example 2: Finding a Particular Solution

For $\displaystyle xy' - 3y = 0$, verify that $\displaystyle y = Cx^3$ is a solution, then find the particular solution satisfying $\displaystyle y = 2$ when $\displaystyle x = -3$.

**Step 1: Verify the general solution**  
$\displaystyle y = Cx^3$ ⇒ $\displaystyle y' = 3Cx^2$  
Plug in: $\displaystyle xy' - 3y = x(3Cx^2) - 3(Cx^3) = 3Cx^3 - 3Cx^3 = 0$ ✅

**Step 2: Use the initial condition**  
When $\displaystyle x = -3$, $\displaystyle y = 2$:  
$\displaystyle 2 = C(-3)^3 = C(-27)$

$$C = -\frac{2}{27}$$

**Step 3: Write the particular solution**  

$$y = -\frac{2}{27}x^3$$

You can check: at $\displaystyle x = -3$, $\displaystyle y = -\frac{2}{27}(-27) = 2$, works perfectly.

---

## **Slope Fields – A Picture of Solutions**

Sometimes solving a differential equation algebraically is hard or even impossible. But we can still get a good idea of what solutions look like using a **slope field** (also called a **direction field**).

For an equation of the form

$$y' = F(x, y)$$

at each point $\displaystyle (x, y)$, the slope of the solution curve is given by $\displaystyle F(x, y)$. If you draw tiny line segments with that slope at many points, you get a picture of how solutions behave.

**Why it's useful:** Even without solving, you can trace the curves following the slopes and see the overall shape of solutions. It's like having a map of where solutions go.

At each point $\displaystyle (x, y)$ in the plane, the differential equation $\displaystyle \frac{dy}{dx} = f(x, y)$ tells us the *slope* of the solution curve passing through that point. A slope field is a visual representation of these slopes.

**How to Read (and Draw) a Slope Field:**
1. Pick a grid of points $\displaystyle (x, y)$
2. At each point, compute $\displaystyle f(x, y)$ – this is the slope
3. Draw a short line segment with that slope at the point
4. The collection of all these segments is the slope field

**Example 1: The Simplest Case – $\displaystyle \frac{dy}{dx} = x$**
Let's build this slope field step by step:

| Point $\displaystyle (x, y)$ | Slope = $\displaystyle x$ | What to draw |
| :--- | :--- | :--- |
| $\displaystyle (0, 0)$ | $\displaystyle 0$ | Horizontal line segment |
| $\displaystyle (0, 1)$ | $\displaystyle 0$ | Horizontal line segment |
| $\displaystyle (0, -1)$ | $\displaystyle 0$ | Horizontal line segment |
| $\displaystyle (1, 0)$ | $\displaystyle 1$ | Line with slope 1 (45° upward) |
| $\displaystyle (1, 1)$ | $\displaystyle 1$ | Line with slope 1 |
| $\displaystyle (-1, 0)$ | $\displaystyle -1$ | Line with slope -1 (45° downward) |

Notice: The slope depends ONLY on $\displaystyle x$, so in each vertical column, all segments have the same slope.

**Example 2: $\displaystyle \frac{dy}{dx} = y$**
Now the slope depends only on $\displaystyle y$:

| Point $\displaystyle (x, y)$ | Slope = $\displaystyle y$ | What to draw |
| :--- | :--- | :--- |
| $\displaystyle (0, 0)$ | $\displaystyle 0$ | Horizontal |
| $\displaystyle (1, 0)$ | $\displaystyle 0$ | Horizontal |
| $\displaystyle (0, 1)$ | $\displaystyle 1$ | Slope 1 |
| $\displaystyle (2, 1)$ | $\displaystyle 1$ | Slope 1 |
| $\displaystyle (0, -1)$ | $\displaystyle -1$ | Slope -1 |
| $\displaystyle (0, 2)$ | $\displaystyle 2$ | Steeper (slope 2) |

Here, in each horizontal row, all segments have the same slope.

**Example 3: $\displaystyle \frac{dy}{dx} = x + y$**
This one depends on both:

| Point $\displaystyle (x, y)$ | Slope = $\displaystyle x + y$ | What to draw |
| :--- | :--- | :--- |
| $\displaystyle (0, 0)$ | $\displaystyle 0$ | Horizontal |
| $\displaystyle (1, 0)$ | $\displaystyle 1$ | Slope 1 |
| $\displaystyle (0, 1)$ | $\displaystyle 1$ | Slope 1 |
| $\displaystyle (1, 1)$ | $\displaystyle 2$ | Slope 2 (steeper) |
| $\displaystyle (-1, -1)$ | $\displaystyle -2$ | Slope -2 |
| $\displaystyle (1, -1)$ | $\displaystyle 0$ | Horizontal |

**Sketching Solution Curves:**
Once you have a slope field, you can sketch approximate solution curves:
1. Start at a given point (initial condition)
2. Follow the "flow" of the slope field
3. Draw a smooth curve that is tangent to the line segments

![A slope field with several solution curves sketched through it](https://i.imgur.com/5JQkL9r.png)
*Caption: Solution curves follow the direction indicated by the slope field.*

---

### **Special Features of Slope Fields**

**Equilibrium Solutions:**
These are horizontal lines (constant functions) that are solutions to the differential equation. They occur where $\displaystyle \frac{dy}{dx} = 0$ for all $\displaystyle x$.

**Finding Equilibrium Solutions:**
Set $\displaystyle f(x, y) = 0$ and solve for $\displaystyle y$ (if possible). The solutions are of the form $\displaystyle y = c$ (constant).

**Example: Find equilibrium solutions for $\displaystyle \frac{dy}{dx} = y(2 - y)$**
1. Set $\displaystyle y(2 - y) = 0$
2. Solve: $\displaystyle y = 0$ or $\displaystyle y = 2$
3. These are horizontal lines where the slope is zero everywhere

**Isoclines (Optional but Helpful):**
An **isocline** is a curve along which all slopes are equal. For $\displaystyle \frac{dy}{dx} = f(x, y)$, the isocline for slope $\displaystyle m$ is the curve $\displaystyle f(x, y) = m$.

**Example: Find isoclines for $\displaystyle \frac{dy}{dx} = x + y$**
- For slope 0: $\displaystyle x + y = 0$ or $\displaystyle y = -x$ (all points on this line have slope 0)
- For slope 1: $\displaystyle x + y = 1$ or $\displaystyle y = 1 - x$ (all points on this line have slope 1)
- For slope -1: $\displaystyle x + y = -1$ or $\displaystyle y = -1 - x$

**Matching Differential Equations to Slope Fields:**
This is a common AP question. Look for these clues:
- If slopes depend only on $\displaystyle x$: vertical columns of identical segments
- If slopes depend only on $\displaystyle y$: horizontal rows of identical segments
- Zero slopes: where segments are horizontal
- Undefined slopes: where segments might be vertical (though we usually avoid these points)

**Example: Match the equation to the slope field**
Which differential equation matches a slope field where:
- All segments on the line $\displaystyle y = x$ are horizontal?
- Above $\displaystyle y = x$, segments slope downward?
- Below $\displaystyle y = x$, segments slope upward?

*Analysis:*
- Horizontal on $\displaystyle y = x$ means $\displaystyle \frac{dy}{dx} = 0$ when $\displaystyle y = x$
- This suggests $\displaystyle \frac{dy}{dx} = x - y$ or $\displaystyle \frac{dy}{dx} = y - x$
- Test $\displaystyle \frac{dy}{dx} = x - y$: When $\displaystyle y = x$, slope = 0 ✓
  - Above $\displaystyle y = x$: $\displaystyle y > x$, so $\displaystyle x - y < 0$ (downward slope) ✓
  - Below $\displaystyle y = x$: $\displaystyle y < x$, so $\displaystyle x - y > 0$ (upward slope) ✓
So $\displaystyle \frac{dy}{dx} = x - y$ is the correct match.

---

### **Estimating Solutions Numerically and Graphically**

When we can't find an exact formula for a solution, we can still approximate it using the slope field.

**Euler's Method (Preview):**
While not always required in AB, the idea is simple: start at an initial point, use the slope to take a small step, find the new slope at that point, take another step, and so on.

**Example: Estimate $\displaystyle y(2)$ if $\displaystyle \frac{dy}{dx} = x + y$ and $\displaystyle y(0) = 1$, using step size $\displaystyle \Delta x = 1$**
1. Start at $\displaystyle (0, 1)$: slope = $\displaystyle 0 + 1 = 1$
2. Step to $\displaystyle x = 1$: New $\displaystyle y = 1 + 1 \cdot 1 = 2$ (so point is $\displaystyle (1, 2)$)
3. At $\displaystyle (1, 2)$: slope = $\displaystyle 1 + 2 = 3$
4. Step to $\displaystyle x = 2$: New $\displaystyle y = 2 + 3 \cdot 1 = 5$
5. So $\displaystyle y(2) \approx 5$

**Using Technology:**
On the AP exam, you might be asked to interpret slope fields generated by a graphing calculator. Common calculator commands:
- TI-84: `DIRFIELD` (if you have the program) or use `STAT PLOT` to create your own
- You should be able to match a differential equation to its slope field and vice versa

---

### **Translating Words into Differential Equations**

This is a crucial skill. Look for phrases like "rate of change," "is proportional to," "increases at a rate of."

**Example 1: From Words to Equation**
"The population $\displaystyle P$ of bacteria grows at a rate proportional to the current population."

*Step-by-step:*
1. Identify the rate: "grows at a rate" = $\displaystyle \frac{dP}{dt}$
2. "Proportional to the current population" means = $\displaystyle kP$, where $\displaystyle k$ is a constant
3. Put it together: $\displaystyle \frac{dP}{dt} = kP$

**Example 2: Another Translation**
"The rate at which water leaks from a tank is proportional to the square root of the volume remaining."

*Step-by-step:*
1. Let $\displaystyle V$ = volume of water
2. "Rate at which water leaks" = $\displaystyle \frac{dV}{dt}$ (negative because it's leaking)
3. "Proportional to the square root of the volume" = $\displaystyle k\sqrt{V}$
4. Since the tank is leaking, the rate is negative: $\displaystyle \frac{dV}{dt} = -k\sqrt{V}$

**Example 3: Geometric Interpretation**
"At each point $\displaystyle (x, y)$ on a curve, the slope of the tangent line is twice the x-coordinate."

*Step-by-step:*
1. Slope of tangent line = $\displaystyle \frac{dy}{dx}$
2. "Is twice the x-coordinate" = $\displaystyle 2x$
3. So: $\displaystyle \frac{dy}{dx} = 2x$