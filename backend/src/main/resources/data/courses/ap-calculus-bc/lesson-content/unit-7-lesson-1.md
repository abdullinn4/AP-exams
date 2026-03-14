# Lesson 17: Differential Equation Basics

### **17.1 Introduction: What Are Differential Equations and Why Should You Care?**

You've spent weeks learning how to find derivatives of functions. Now we're going to flip the script. What if I give you information about the *derivative* of a function and ask you to find the original function? That's exactly what differential equations are about!

**Real-World Motivation:**
Think about these scenarios:
- A doctor needs to know how a drug concentration in your blood changes over time
- An engineer wants to predict how a bridge will vibrate in the wind
- An ecologist studies how a wolf population grows or declines

All these situations have one thing in common: we know something about *how things change*, and we want to figure out *what they are*.

**Definition:**
A **differential equation** is an equation that relates a function with one or more of its derivatives. In AP Calculus AB, we focus on **ordinary differential equations** (ODEs) with one independent variable, typically $x$ or $t$.

The **order** of a differential equation is the order of the highest derivative that appears in the equation.

**First-Order Differential Equations (Our Main Focus):**
These involve the first derivative and can often be written as:
$$
\frac{dy}{dx} = f(x, y)
$$
where $f(x, y)$ is some expression involving $x$ and $y$.

**Key Terminology:**
- **General Solution:** The family of all possible solutions, usually containing one or more arbitrary constants (like $C$).
- **Particular Solution:** A specific solution obtained by applying an **initial condition** (like $y(1) = 3$).
- **Initial Value Problem (IVP):** A differential equation together with an initial condition.

**Translating Words into Math:**
This is a crucial skill. Look for phrases like "rate of change," "is proportional to," "increases at a rate of."

**Example 1: From Words to Equation**
"The population $P$ of bacteria grows at a rate proportional to the current population."

*Step-by-step:*
1. Identify the rate: "grows at a rate" = $\frac{dP}{dt}$
2. "Proportional to the current population" means = $kP$, where $k$ is a constant
3. Put it together: $\frac{dP}{dt} = kP$

**Example 2: Another Translation**
"The rate at which water leaks from a tank is proportional to the square root of the volume remaining."

*Step-by-step:*
1. Let $V$ = volume of water
2. "Rate at which water leaks" = $\frac{dV}{dt}$ (negative because it's leaking)
3. "Proportional to the square root of the volume" = $k\sqrt{V}$
4. Since the tank is leaking, the rate is negative: $\frac{dV}{dt} = -k\sqrt{V}$

**Example 3: Geometric Interpretation**
"At each point $(x, y)$ on a curve, the slope of the tangent line is twice the x-coordinate."

*Step-by-step:*
1. Slope of tangent line = $\frac{dy}{dx}$
2. "Is twice the x-coordinate" = $2x$
3. So: $\frac{dy}{dx} = 2x$

---

### **17.2 Verifying Solutions: The "Guess and Check" Method**

Before we learn how to *solve* differential equations, let's make sure we can recognize a solution when we see one. This is like checking your work in algebra by plugging your answer back into the original equation.

**The Process:**
To verify that a function is a solution to a differential equation:
1. Compute the necessary derivatives of the proposed solution
2. Substitute both the function and its derivatives into the differential equation
3. Simplify to see if you get a true statement (like $0=0$ or an identity)

**Why This Matters:**
- It's a common AP exam question
- It helps build intuition about what solutions look like
- It's a way to check your work when you do solve differential equations

**Example 1: Simple Verification**
Verify that $y = 3e^{2x}$ is a solution to $\frac{dy}{dx} = 2y$.

*Step-by-step:*
1. Compute the derivative: $\frac{dy}{dx} = 3 \cdot 2e^{2x} = 6e^{2x}$
2. Substitute into the right side: $2y = 2 \cdot 3e^{2x} = 6e^{2x}$
3. Compare: Left side = $6e^{2x}$, Right side = $6e^{2x}$
4. They match! So $y = 3e^{2x}$ **is** a solution.

**Example 2: Verifying a Family of Solutions**
Show that $y = Ce^{-x} + 2$ is a solution to $\frac{dy}{dx} = -y + 2$ for any constant $C$.

*Step-by-step:*
1. Compute the derivative: $\frac{dy}{dx} = -Ce^{-x}$
2. Compute the right side: $-y + 2 = -(Ce^{-x} + 2) + 2 = -Ce^{-x} - 2 + 2 = -Ce^{-x}$
3. Both sides equal $-Ce^{-x}$, so it works for **any** $C$.

**Example 3: Checking an Initial Condition**
Given the differential equation $\frac{dy}{dx} = 3x^2$ with initial condition $y(1) = 4$, verify that $y = x^3 + 3$ is a particular solution.

*Step-by-step:*
1. Check the differential equation:
   - Derivative: $\frac{dy}{dx} = 3x^2$ ✓ matches
2. Check the initial condition:
   - $y(1) = 1^3 + 3 = 4$ ✓ matches
3. Therefore, $y = x^3 + 3$ is the particular solution.

**Example 4: A Tricky One**
Verify that $y = \frac{1}{x} + 3$ is a solution to $\frac{dy}{dx} = -y^2 + 6y - 9$.

*Step-by-step:*
1. Compute the derivative: $\frac{dy}{dx} = -\frac{1}{x^2}$
2. Compute the right side carefully:
   - First, $y^2 = \left(\frac{1}{x} + 3\right)^2 = \frac{1}{x^2} + \frac{6}{x} + 9$
   - So $-y^2 = -\frac{1}{x^2} - \frac{6}{x} - 9$
   - $6y = 6\left(\frac{1}{x} + 3\right) = \frac{6}{x} + 18$
   - Put it all together: $-\frac{1}{x^2} - \frac{6}{x} - 9 + \frac{6}{x} + 18 - 9 = -\frac{1}{x^2}$
3. Both sides equal $-\frac{1}{x^2}$, so it's a solution!

---

### **17.3 Slope Fields: A Picture is Worth a Thousand Equations**

Sometimes we can't find an exact formula for the solution to a differential equation. But we can still understand what the solutions look like using **slope fields** (also called direction fields).

**The Big Idea:**
At each point $(x, y)$ in the plane, the differential equation $\frac{dy}{dx} = f(x, y)$ tells us the *slope* of the solution curve passing through that point. A slope field is a visual representation of these slopes.

**How to Read (and Draw) a Slope Field:**
1. Pick a grid of points $(x, y)$
2. At each point, compute $f(x, y)$ - this is the slope
3. Draw a short line segment with that slope at the point
4. The collection of all these segments is the slope field

**Example 1: The Simplest Case - $\frac{dy}{dx} = x$**
Let's build this slope field step by step:

| Point $(x, y)$ | Slope = $x$ | What to draw |
| :--- | :--- | :--- |
| $(0, 0)$ | $0$ | Horizontal line segment |
| $(0, 1)$ | $0$ | Horizontal line segment |
| $(0, -1)$ | $0$ | Horizontal line segment |
| $(1, 0)$ | $1$ | Line with slope 1 (45° upward) |
| $(1, 1)$ | $1$ | Line with slope 1 |
| $(-1, 0)$ | $-1$ | Line with slope -1 (45° downward) |

Notice: The slope depends ONLY on $x$, so in each vertical column, all segments have the same slope.

**Example 2: $\frac{dy}{dx} = y$**
Now the slope depends only on $y$:

| Point $(x, y)$ | Slope = $y$ | What to draw |
| :--- | :--- | :--- |
| $(0, 0)$ | $0$ | Horizontal |
| $(1, 0)$ | $0$ | Horizontal |
| $(0, 1)$ | $1$ | Slope 1 |
| $(2, 1)$ | $1$ | Slope 1 |
| $(0, -1)$ | $-1$ | Slope -1 |
| $(0, 2)$ | $2$ | Steeper (slope 2) |

Here, in each horizontal row, all segments have the same slope.

**Example 3: $\frac{dy}{dx} = x + y$**
This one depends on both:

| Point $(x, y)$ | Slope = $x + y$ | What to draw |
| :--- | :--- | :--- |
| $(0, 0)$ | $0$ | Horizontal |
| $(1, 0)$ | $1$ | Slope 1 |
| $(0, 1)$ | $1$ | Slope 1 |
| $(1, 1)$ | $2$ | Slope 2 (steeper) |
| $(-1, -1)$ | $-2$ | Slope -2 |
| $(1, -1)$ | $0$ | Horizontal |

**Sketching Solution Curves:**
Once you have a slope field, you can sketch approximate solution curves:
1. Start at a given point (initial condition)
2. Follow the "flow" of the slope field
3. Draw a smooth curve that is tangent to the line segments

![A slope field with several solution curves sketched through it](https://i.imgur.com/5JQkL9r.png)
*Caption: Solution curves follow the direction indicated by the slope field.*

---

### **17.4 Special Features of Slope Fields**

**Equilibrium Solutions:**
These are horizontal lines (constant functions) that are solutions to the differential equation. They occur where $\frac{dy}{dx} = 0$ for all $x$.

**Finding Equilibrium Solutions:**
Set $f(x, y) = 0$ and solve for $y$ (if possible). The solutions are of the form $y = c$ (constant).

**Example: Find equilibrium solutions for $\frac{dy}{dx} = y(2 - y)$**
1. Set $y(2 - y) = 0$
2. Solve: $y = 0$ or $y = 2$
3. These are horizontal lines where the slope is zero everywhere

**Isoclines (Optional but Helpful):**
An **isocline** is a curve along which all slopes are equal. For $\frac{dy}{dx} = f(x, y)$, the isocline for slope $m$ is the curve $f(x, y) = m$.

**Example: Find isoclines for $\frac{dy}{dx} = x + y$**
- For slope 0: $x + y = 0$ or $y = -x$ (all points on this line have slope 0)
- For slope 1: $x + y = 1$ or $y = 1 - x$ (all points on this line have slope 1)
- For slope -1: $x + y = -1$ or $y = -1 - x$

**Matching Differential Equations to Slope Fields:**
This is a common AP question. Look for these clues:
- If slopes depend only on $x$: vertical columns of identical segments
- If slopes depend only on $y$: horizontal rows of identical segments
- Zero slopes: where segments are horizontal
- Undefined slopes: where segments might be vertical (though we usually avoid these points)

**Example: Match the equation to the slope field**
Which differential equation matches a slope field where:
- All segments on the line $y = x$ are horizontal?
- Above $y = x$, segments slope downward?
- Below $y = x$, segments slope upward?

*Analysis:*
- Horizontal on $y = x$ means $\frac{dy}{dx} = 0$ when $y = x$
- This suggests $\frac{dy}{dx} = x - y$ or $\frac{dy}{dx} = y - x$
- Test $\frac{dy}{dx} = x - y$: When $y = x$, slope = 0 ✓
  - Above $y = x$: $y > x$, so $x - y < 0$ (downward slope) ✓
  - Below $y = x$: $y < x$, so $x - y > 0$ (upward slope) ✓
So $\frac{dy}{dx} = x - y$ is the correct match.

---

### **17.5 Estimating Solutions Numerically and Graphically**

When we can't find an exact formula for a solution, we can still approximate it using the slope field.

**Euler's Method (Preview):**
While not always required in AB, the idea is simple: start at an initial point, use the slope to take a small step, find the new slope at that point, take another step, and so on.

**Example: Estimate $y(2)$ if $\frac{dy}{dx} = x + y$ and $y(0) = 1$, using step size $\Delta x = 1$**
1. Start at $(0, 1)$: slope = $0 + 1 = 1$
2. Step to $x = 1$: New $y = 1 + 1 \cdot 1 = 2$ (so point is $(1, 2)$)
3. At $(1, 2)$: slope = $1 + 2 = 3$
4. Step to $x = 2$: New $y = 2 + 3 \cdot 1 = 5$
5. So $y(2) \approx 5$

**Using Technology:**
On the AP exam, you might be asked to interpret slope fields generated by a graphing calculator. Common calculator commands:
- TI-84: `DIRFIELD` (if you have the program) or use `STAT PLOT` to create your own
- You should be able to match a differential equation to its slope field and vice versa

---

### **Lesson 17 Summary: The Big Picture**

**Differential Equations** are equations involving derivatives. They model how things change in the real world.

**Key Skills:**
1. **Translate words** into differential equations
2. **Verify solutions** by substitution
3. **Interpret and sketch slope fields**
4. **Estimate solutions** from slope fields
5. **Identify equilibrium solutions**

**Common Models to Recognize:**
- **Exponential Growth/Decay:** $\frac{dy}{dt} = ky$ (solution: $y = Ce^{kt}$)
- **Newton's Law of Cooling:** $\frac{dT}{dt} = k(T - T_{\text{room}})$
- **Simple Rate Equations:** $\frac{dy}{dx} = f(x)$ (just integrate!)

**Remember:**
- The general solution has a $+C$
- A particular solution satisfies an initial condition
- Slope fields show the "flow" of solutions
- Equilibrium solutions are horizontal lines where the slope is zero

---

### **Additional Practice Problems**

1. Translate: "The rate of change of the volume $V$ of a sphere with respect to its radius $r$ is proportional to its surface area." Write a differential equation.
2. Verify that $y = \sin x + \cos x$ is a solution to $\frac{d^2y}{dx^2} + y = 0$.
3. For $\frac{dy}{dx} = 2x - y$, compute slopes at: (0,0), (1,2), (-1,1), (2,0).
4. The slope field for $\frac{dy}{dx} = \frac{y}{x}$ is shown. Sketch the solution curve through (1,2).
5. Find equilibrium solutions of $\frac{dy}{dx} = y^2 - 4$.
6. Match the differential equation with its description:
   a) $\frac{dy}{dx} = x + 1$  
   b) $\frac{dy}{dx} = y + 1$  
   c) $\frac{dy}{dx} = xy$
   
   i. Slopes depend only on $x$  
   ii. Slopes depend only on $y$  
   iii. Slopes are zero when $x=0$ or $y=0$
7. Verify that $y = Ce^{2x} + 3e^{-x}$ is a solution to $\frac{dy}{dx} - 2y = -9e^{-x}$ for any $C$.
8. Sketch a slope field for $\frac{dy}{dx} = 2y$ at integer points from (-1,-1) to (1,1).
9. Given $\frac{dy}{dx} = x - y$, describe what happens to solutions as $x$ increases.
10. A tank initially contains 100 gallons of brine. Brine containing 2 lb of salt per gallon enters at 3 gal/min, and the mixture leaves at 3 gal/min. Write a differential equation for the amount of salt $A(t)$ in the tank at time $t$.

**Selected Solutions:**

1. $\frac{dV}{dr} = k \cdot 4\pi r^2$ (or $\frac{dV}{dr} = 4\pi r^2$ if $k=1$)
2. $\frac{dy}{dx} = \cos x - \sin x$, $\frac{d^2y}{dx^2} = -\sin x - \cos x$. Then $\frac{d^2y}{dx^2} + y = (-\sin x - \cos x) + (\sin x + \cos x) = 0$ ✓
3. (0,0): 0; (1,2): 0; (-1,1): -3; (2,0): 4
4. Solutions are lines through origin: $y = 2x$ through (1,2)
5. Set $y^2 - 4 = 0$: $y = \pm 2$
6. a-i, b-ii, c-iii
7. $\frac{dy}{dx} = 2Ce^{2x} - 3e^{-x}$. LHS: $(2Ce^{2x} - 3e^{-x}) - 2(Ce^{2x} + 3e^{-x}) = -9e^{-x}$ ✓
8. At any $(x,y)$, slope = $2y$. So: (0,0): 0; (0,±1): ±2; (1,0): 0; (1,±1): ±2
9. General solution: $y = x - 1 + Ce^{-x}$. As $x \to \infty$, $e^{-x} \to 0$, so $y \to x - 1$.
10. Rate in: $2 \text{ lb/gal} \times 3 \text{ gal/min} = 6 \text{ lb/min}$. Rate out: $\frac{A(t)}{100} \text{ lb/gal} \times 3 \text{ gal/min} = \frac{3A(t)}{100} \text{ lb/min}$. So $\frac{dA}{dt} = 6 - \frac{3A}{100}$.