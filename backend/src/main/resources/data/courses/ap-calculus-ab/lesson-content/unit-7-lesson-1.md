# **Lesson 17: Differential Equation Basics**

### **17.1 Introduction to Differential Equations**

**Definition:**
A **differential equation** is an equation that relates a function with one or more of its derivatives. In AP Calculus AB, we focus on **ordinary differential equations** (ODEs) with one independent variable, typically $x$ or $t$. The **order** of a differential equation is the order of the highest derivative that appears in the equation.

A **first-order differential equation** involves the first derivative and can often be written in the form:
$$\frac{dy}{dx} = f(x, y)$$
where $f(x, y)$ is some expression involving $x$ and $y$.

**Comments:**

- **Why Study Them?** Differential equations model dynamic processes: growth and decay, motion, cooling, population dynamics, and more. They allow us to describe how a quantity changes over time or space.
- **Solution:** A **solution** to a differential equation is a function $y = f(x)$ that satisfies the equation for all $x$ in some interval.
- **General vs. Particular Solution:**
    - The **general solution** includes arbitrary constants (usually denoted $C$) and represents a family of curves.
    - A **particular solution** is obtained by specifying an initial condition (e.g., $y(x_0) = y_0$) to determine the constant(s).
- **Interpretation from Verbal Statements:** When a problem describes a rate of change (e.g., "the rate of change of $P$ with respect to $t$ is proportional to $P$"), translate it into a differential equation.

**Examples:**

1. **Translating a Statement:** "The rate of change of a population $P$ with respect to time $t$ is proportional to the population."
    - This translates to: $\frac{dP}{dt} = kP$, where $k$ is a constant of proportionality.
2. **Identifying Order:** For the equation $\frac{d^2y}{dx^2} + 3\frac{dy}{dx} + 2y = 0$, the highest derivative is the second derivative, so it is a second-order differential equation.
3. **Another Translation:** "The slope of the tangent line to a curve at any point $(x, y)$ is equal to twice the sum of the coordinates."
    - Slope of tangent is $\frac{dy}{dx}$. Sum of coordinates is $x + y$. So: $\frac{dy}{dx} = 2(x + y)$.

---

### **17.2 Verifying Solutions to Differential Equations**

**Definition:**
To **verify** that a function is a solution to a given differential equation, substitute the function and its derivatives into the differential equation and check that the equation holds for all $x$ in an interval.

**Comments:**

- This process uses differentiation to compute the necessary derivatives of the proposed solution.
- A function may satisfy a differential equation identically (for all $x$) or only for specific values of the constant(s).
- Often, differential equations have infinitely many solutions (a family of curves). The general solution includes an arbitrary constant $C$ (for first-order equations).

**Examples:**

1. **Verifying a Solution:** Verify that $y = 3e^{2x}$ is a solution to the differential equation $\frac{dy}{dx} = 2y$.
    - Compute derivative: $\frac{dy}{dx} = 6e^{2x}$.
    - Substitute into right side: $2y = 2 \cdot 3e^{2x} = 6e^{2x}$.
    - Since both sides equal $6e^{2x}$, the function is a solution.
2. **Verifying a Family:** Show that $y = Ce^{-x} + 2$ is a solution to $\frac{dy}{dx} = -y + 2$ for any constant $C$.
    - Compute derivative: $\frac{dy}{dx} = -Ce^{-x}$.
    - Compute right side: $-y + 2 = -(Ce^{-x} + 2) + 2 = -Ce^{-x} - 2 + 2 = -Ce^{-x}$.
    - Since both sides are equal, the family satisfies the equation.
3. **Checking an Initial Condition:** Given the differential equation $\frac{dy}{dx} = 3x^2$ with the initial condition $y(1) = 4$, verify that $y = x^3 + 3$ is a particular solution.
    - Derivative: $\frac{dy}{dx} = 3x^2$, which matches the right side.
    - Check initial condition: $y(1) = 1^3 + 3 = 4$. So it satisfies both the equation and the initial condition.

---

### **17.3 Slope Fields**

**Definition:**
A **slope field** (or **direction field**) is a graphical representation of a first-order differential equation $\frac{dy}{dx} = f(x, y)$. It is constructed by evaluating $f(x, y)$ at a grid of points $(x, y)$ and drawing a short line segment with that slope at each point.

**Comments:**

- **Purpose:** Slope fields give a visual picture of the family of solutions without solving the differential equation analytically. They show the direction in which a solution curve will go at each point.
- **Sketching Solutions:** To sketch a particular solution curve, start at a given point (initial condition) and follow the direction indicated by the slope field, drawing a smooth curve that is tangent to the line segments.
- **Behavior:** Patterns in the slope field can indicate equilibrium solutions (where slopes are zero), asymptotic behavior, or symmetry.
- **Creating a Slope Field:** For a given $f(x, y)$, compute slopes at representative points (e.g., integer coordinates) and draw short segments with those slopes.

**Examples:**

1. **Plotting a Simple Slope Field:** Consider $\frac{dy}{dx} = x$.
    - The slope depends only on $x$. At each $x$, the slope is the same for all $y$. For example:
        - At $x = 0$, slope = 0 (horizontal segments).
        - At $x = 1$, slope = 1 (segments at 45° upward).
        - At $x = -1$, slope = -1 (segments at 45° downward).
    - The slope field suggests solution curves are parabolas $y = \frac{1}{2}x^2 + C$.
2. **Slope Field for $\frac{dy}{dx} = y$:**
    - Slopes depend only on $y$. At $y = 0$, slope = 0 (horizontal). For $y > 0$, slopes are positive and increase as $y$ increases. For $y < 0$, slopes are negative and become more negative as $y$ decreases.
    - This suggests exponential growth for positive $y$, exponential decay for negative $y$, and the constant solution $y = 0$.
3. **Sketching a Solution Curve:** Given the slope field for $\frac{dy}{dx} = x + y$ and the initial condition $y(0) = 1$, sketch the solution.
    - Start at point $(0,1)$. The slope there is $0+1=1$, so curve goes upward with slope 1.
    - As you move to the right, both $x$ and $y$ increase, so slope increases. The curve will become steeper.
    - As you move to the left, $x$ becomes negative, but $y$ might decrease; follow the slopes.
    - Draw a smooth curve that follows the direction of the segments.

---

### **17.4 Estimating Solutions Using Slope Fields**

**Definition:**
Given a slope field and an initial condition, we can **estimate** the graph of the particular solution by starting at the initial point and drawing a curve that is tangent to the slope segments.

**Comments:**

- This is a graphical method to approximate solutions when an analytical solution is difficult to obtain.
- **Equilibrium Solutions:** If $f(x, y) = 0$ for some constant $y = c$, then $y = c$ is an equilibrium solution (horizontal line). On the slope field, these appear as rows of horizontal segments.
- **Isoclines:** An **isocline** is a curve along which the slope is constant. For $\frac{dy}{dx} = f(x, y)$, setting $f(x, y) = m$ gives an equation for the isocline of slope $m$. Isoclines can help in sketching slope fields.

**Examples:**

1. **Identifying Equilibrium:** For $\frac{dy}{dx} = y(2 - y)$, find equilibrium solutions.
    - Set $\frac{dy}{dx} = 0$: $y(2 - y) = 0$ ⇒ $y = 0$ or $y = 2$.
    - These are horizontal lines where the slope is zero. In the slope field, along $y=0$ and $y=2$, all segments are horizontal.
2. **Sketching from Slope Field:** The slope field for $\frac{dy}{dx} = \frac{x}{y}$ has segments with slope $\frac{x}{y}$. Notice:
    - When $y > 0$, slopes are positive for $x > 0$ and negative for $x < 0$.
    - When $y < 0$, signs reverse.
    - At $y=0$, the slope is undefined (vertical segments? Actually, the equation is undefined at $y=0$, so we skip those points).
    - The solution curves appear to be hyperbolas $y^2 - x^2 = C$.
3. **Using Technology:** Graphing calculators or computer software can generate slope fields quickly. On the AP exam, you may be asked to interpret a given slope field or match a differential equation to its slope field.

---

### **Lesson 17 Summary**

**Key Concepts:**

- **Differential Equation:** Relates a function and its derivatives.
- **Order:** Highest derivative in the equation.
- **Solution:** A function that satisfies the equation.
- **General Solution:** Family of solutions with arbitrary constants.
- **Particular Solution:** Obtained by applying an initial condition.
- **Slope Field:** Graphical representation of $\frac{dy}{dx} = f(x, y)$ showing slopes at points.

**Skills:**

1. Translate verbal statements into differential equations.
2. Verify a given function is a solution by substitution.
3. Sketch or interpret slope fields.
4. Estimate solution curves from slope fields and initial conditions.
5. Identify equilibrium solutions from $f(x, y) = 0$.

**Common Models:**

- Exponential growth/decay: $\frac{dy}{dt} = ky$
- Logistic growth: $\frac{dP}{dt} = kP(1 - \frac{P}{M})$ (though logistic is more common in BC, AB may see it)
- Newton's Law of Cooling: $\frac{dT}{dt} = k(T - T_{\text{env}})$

---

### **Additional Practice Problems**

1. Translate: "The rate of change of the volume $V$ of a sphere with respect to its radius $r$ is proportional to its surface area." (Recall: volume $V = \frac{4}{3}\pi r^3$, surface area $S = 4\pi r^2$.) Write a differential equation.
2. Verify that $y = \frac{1}{x} + 3$ is a solution to $\frac{dy}{dx} = -y^2 + 6y - 9$.
3. For the differential equation $\frac{dy}{dx} = 2x - y$, compute the slopes at the points: $(0,0)$, $(1,2)$, $(-1,1)$, $(2,0)$.
4. The slope field for $\frac{dy}{dx} = \frac{y}{x}$ is shown. Sketch the solution curve passing through $(1,2)$.
5. Determine whether $y = \sin x + \cos x$ is a solution to $\frac{d^2y}{dx^2} + y = 0$.
6. Find the equilibrium solutions of $\frac{dy}{dx} = y^2 - 4$.
7. Match the differential equation with its slope field:
a) $\frac{dy}{dx} = x + 1$
b) $\frac{dy}{dx} = y + 1$
c) $\frac{dy}{dx} = xy$
8. Verify that $y = Ce^{2x} + 3e^{-x}$ is a solution to $\frac{dy}{dx} - 2y = -9e^{-x}$ for any constant $C$.
9. Sketch a slope field for $\frac{dy}{dx} = 2y$ at the points $(0,0)$, $(0,1)$, $(0,-1)$, $(1,0)$, $(1,1)$, $(1,-1)$.
10. Given the slope field for $\frac{dy}{dx} = x - y$, describe the behavior of solutions as $x$ increases.

**Selected Solutions:**

1. Rate of change of volume with respect to radius: $\frac{dV}{dr}$. Proportional to surface area: $\frac{dV}{dr} = k \cdot S$. But we know $\frac{dV}{dr} = 4\pi r^2$ from calculus, so the equation is $\frac{dV}{dr} = 4\pi r^2$, which is indeed proportional to $S = 4\pi r^2$ with constant of proportionality 1. So the differential equation is $\frac{dV}{dr} = k \cdot 4\pi r^2$ or simply $\frac{dV}{dr} = 4\pi r^2$ if $k=1$. But the statement says "proportional to", so we include a constant: $\frac{dV}{dr} = k \cdot 4\pi r^2$.
2. Compute $\frac{dy}{dx} = -\frac{1}{x^2}$. Compute right side: $-y^2+6y-9 = -\left(\frac{1}{x}+3\right)^2 + 6\left(\frac{1}{x}+3\right) - 9 = -\left(\frac{1}{x^2}+\frac{6}{x}+9\right) + \frac{6}{x}+18 - 9 = -\frac{1}{x^2} - \frac{6}{x} - 9 + \frac{6}{x} + 9 = -\frac{1}{x^2}$. So both sides equal $-\frac{1}{x^2}$, verified.
3. At $(0,0)$: slope = $2(0)-0=0$. At $(1,2)$: slope = $2(1)-2=0$. At $(-1,1)$: slope = $2(-1)-1=-2-1=-3$. At $(2,0)$: slope = $4-0=4$.
4. For $\frac{dy}{dx} = \frac{y}{x}$, at $(1,2)$ slope = $2/1=2$. The solution curves are lines through the origin? Actually, the equation is separable: $\frac{dy}{y} = \frac{dx}{x}$, so $\ln|y| = \ln|x|+C$ ⇒ $y = Cx$. So the solutions are lines through the origin. Through $(1,2)$, the line is $y=2x$.
5. Compute first derivative: $\frac{dy}{dx} = \cos x - \sin x$. Second derivative: $\frac{d^2y}{dx^2} = -\sin x - \cos x$. Then $\frac{d^2y}{dx^2} + y = (-\sin x - \cos x) + (\sin x + \cos x) = 0$. So yes.
6. Set $\frac{dy}{dx}=0$: $y^2-4=0$ ⇒ $y = \pm 2$. So equilibrium solutions: $y=2$ and $y=-2$.
7. a) $\frac{dy}{dx}=x+1$: slopes depend only on x. At a given x, all slopes are the same regardless of y. So the slope field has columns of identical segments.
   b) $\frac{dy}{dx}=y+1$: slopes depend only on y. Rows of identical segments.
   c) $\frac{dy}{dx}=xy$: slopes are zero along $x=0$ or $y=0$. In quadrants I and III, slopes positive; in II and IV, negative.
8. Compute $\frac{dy}{dx} = 2Ce^{2x} - 3e^{-x}$. Then left side of equation: $\frac{dy}{dx} - 2y = (2Ce^{2x}-3e^{-x}) - 2(Ce^{2x}+3e^{-x}) = 2Ce^{2x}-3e^{-x} -2Ce^{2x} -6e^{-x} = -9e^{-x}$, which matches right side.
9. Slopes: at $(0,0)$: 0; at $(0,1)$: 2; at $(0,-1)$: -2; at $(1,0)$: 0; at $(1,1)$: 2; at $(1,-1)$: -2. So slopes depend only on y.
10. For $\frac{dy}{dx} = x-y$, equilibrium occurs when $y=x$. Above the line $y=x$, slope is negative (since $x-y<0$); below the line, slope is positive. Solutions tend to approach the line $y=x-1$? Actually, the general solution is $y = x-1 + Ce^{-x}$. As $x$ increases, $e^{-x} \to 0$, so solutions approach the line $y=x-1$. So as $x$ increases, solutions get closer to the line $y=x-1$.