# Optimization Problems

We've learned how to find where functions reach their highest and lowest values—their maxima and minima. Now it's time to put that knowledge to work. Optimization problems are all about applying calculus to real-world situations: finding the dimensions that maximize area, the production level that maximizes profit, the route that minimizes travel time, and so on.

These problems can be tricky because the hardest part isn't the calculus—it's setting up the problem correctly. Once you have the right function, the rest is just following the steps. So let's develop a systematic approach.

---

## **Solving Optimization Problems**

### **Definition:**

An **optimization problem** involves finding the maximum or minimum value of a function that models a real-world situation. The function to be optimized is called the **objective function**. Often there are constraints that limit the possible values of the variables.

**Strategy for Solving Optimization Problems:**

1. **Understand the problem:** Identify what quantity is to be maximized or minimized and what the constraints are.
2. **Draw a diagram** if appropriate. Label variables.
3. **Write the objective function:** Express the quantity to be optimized as a function of one variable. Use the constraints to eliminate extra variables.
4. **Determine the domain:** Consider physical or contextual restrictions on the variable.
5. **Find critical points:** Differentiate the objective function and find where $f'(x) = 0$ or $f'(x)$ does not exist.
6. **Evaluate the function** at critical points and endpoints of the domain (if domain is closed).
7. **Interpret the results:** Choose the value that gives the desired maximum or minimum, and answer the question in context.

**Comments:**

- The hardest step is often setting up the objective function. Read carefully.
- The domain is crucial: endpoints often give extreme values.
- Verify that your critical point indeed gives a max or min (use First or Second Derivative Test if needed).
- Always check if the answer makes sense in the context.

**Example 1: Classic Fence Problem**

A farmer has 2400 ft of fencing and wants to fence off a rectangular field that borders a straight river. He needs no fence along the river. What are the dimensions of the field that has the largest area?

- **Step 1:** Maximize area $A$. Constraints: total fencing = 2400 ft, three sides (two widths and one length, because the river replaces one long side).
- **Step 2:** Let $x$ = length parallel to river, $y$ = width perpendicular to river.
- **Step 3:** Constraint: $x + 2y = 2400$ (since two widths and one length). Objective: $A = xy$.
- **Step 4:** Express $A$ in one variable: from constraint, $x = 2400 - 2y$. Then $A(y) = (2400 - 2y)y = 2400y - 2y^2$.
- **Domain:** $y > 0$, and $x > 0 \Rightarrow 2400 - 2y > 0 \Rightarrow y < 1200$. So $0 < y < 1200$.
- **Step 5:** $A'(y) = 2400 - 4y$. Set $= 0$: $2400 - 4y = 0 \Rightarrow y = 600$.
- **Step 6:** Check endpoints: as $y \to 0^+$, $A \to 0$; as $y \to 1200^-$, $A \to 0$. Critical point $y=600$ gives $A(600) = 2400(600) - 2(600)^2 = 1,440,000 - 720,000 = 720,000$ ft².
  Second derivative: $A''(y) = -4 < 0$, so concave down, confirming maximum.
- **Step 7:** Dimensions: $y = 600$ ft, $x = 2400 - 2(600) = 1200$ ft. The field should be 1200 ft by 600 ft.

**Example 2: Minimizing Cost**

A cylindrical can must contain 1000 cm³ of liquid. Find the dimensions (radius and height) that minimize the cost of metal to make the can (minimize surface area).

- **Step 1:** Minimize surface area $S$. Constraint: volume $V = 1000$.
- **Step 2:** For a cylinder: $V = \pi r^2 h$, $S = 2\pi r^2 + 2\pi rh$ (top, bottom, and side).
- **Step 3:** From constraint: $h = \frac{1000}{\pi r^2}$. Substitute into $S$:
  $$S(r) = 2\pi r^2 + 2\pi r \left( \frac{1000}{\pi r^2} \right) = 2\pi r^2 + \frac{2000}{r}.$$
- **Domain:** $r > 0$.
- **Step 5:** $S'(r) = 4\pi r - \frac{2000}{r^2}$. Set $= 0$:
  $$4\pi r = \frac{2000}{r^2} \Rightarrow 4\pi r^3 = 2000 \Rightarrow r^3 = \frac{500}{\pi} \Rightarrow r = \sqrt[3]{\frac{500}{\pi}} \approx 5.419 \text{ cm}.$$
- **Step 6:** Check endpoints: as $r \to 0^+$, $S \to \infty$; as $r \to \infty$, $S \to \infty$. So critical point gives minimum.
- **Step 7:** Then $h = \frac{1000}{\pi r^2} = \frac{1000}{\pi (500/\pi)^{2/3}} = \frac{1000}{\pi} \left( \frac{\pi}{500} \right)^{2/3} = \frac{1000}{\pi^{1/3} 500^{2/3}} = \frac{1000}{500^{2/3} \pi^{1/3}} = \frac{2 \cdot 500}{500^{2/3} \pi^{1/3}} = 2 \cdot 500^{1/3} \pi^{-1/3} = 2 \sqrt[3]{\frac{500}{\pi}} = 2r$.
  So $h = 2r$. The can should have height equal to its diameter.

---

## **Interpreting Maximum and Minimum Values in Context**

### **Definition:**

The maximum or minimum value of an objective function represents the best (or worst) possible outcome in a given situation, such as maximum profit, minimum cost, maximum area, minimum distance, etc.

**Comments:**

- Always state your answer with units and in the context of the problem.
- Consider whether the critical point actually makes sense (e.g., negative lengths usually don't).
- Sometimes the objective function is not directly given; you may need to construct it from geometric formulas, economic relationships, etc.

**Example 3: Profit Maximization**

A company sells $x$ items at price $p(x) = 100 - 0.02x$ dollars per item. The cost to produce $x$ items is $C(x) = 2000 + 40x$. Find the production level that maximizes profit, and the maximum profit.

- Revenue: $R(x) = x \cdot p(x) = 100x - 0.02x^2$.
- Profit: $P(x) = R(x) - C(x) = (100x - 0.02x^2) - (2000 + 40x) = 60x - 0.02x^2 - 2000$.
- Domain: $x \geq 0$.
- $P'(x) = 60 - 0.04x$. Set $= 0$: $60 = 0.04x \Rightarrow x = 1500$.
- Second derivative: $P''(x) = -0.04 < 0$, so maximum.
- Maximum profit: $P(1500) = 60(1500) - 0.02(1500)^2 - 2000 = 90,000 - 45,000 - 2000 = 43,000$ dollars.
- **Interpretation:** Producing and selling 1500 items yields a maximum profit of $43,000.

**Example 4: Minimizing Distance**

Find the point on the parabola $y = x^2$ that is closest to the point $(0, 2)$.

- **Step 1:** Minimize distance $d$ from $(x, y) = (x, x^2)$ to $(0, 2)$.
- **Step 2:** Distance squared (easier to differentiate): $D(x) = (x-0)^2 + (x^2 - 2)^2 = x^2 + (x^2 - 2)^2$.
- **Step 3:** $D'(x) = 2x + 2(x^2 - 2)(2x) = 2x + 4x(x^2 - 2) = 2x + 4x^3 - 8x = 4x^3 - 6x = 2x(2x^2 - 3)$.
- Critical points: $2x(2x^2 - 3) = 0 \Rightarrow x = 0$ or $x = \pm\sqrt{\frac{3}{2}}$.
- **Step 4:** Domain all reals, but as $x \to \pm\infty$, $D \to \infty$, so critical points are candidates.
- Second derivative: $D''(x) = 12x^2 - 6$. At $x=0$: $D''(0) = -6 < 0$ (local max for distance, not min). At $x=\pm\sqrt{1.5}$: $D'' = 12(1.5) - 6 = 18 - 6 = 12 > 0$, so local minima.
- **Step 5:** Compute distances: For $x=\pm\sqrt{1.5}$, $y = 1.5$. Distance squared: $D = 1.5 + (1.5-2)^2 = 1.5 + 0.25 = 1.75$. So distance $= \sqrt{1.75} = \frac{\sqrt{7}}{2} \approx 1.323$.
- **Interpretation:** The points $(\sqrt{1.5}, 1.5)$ and $(-\sqrt{1.5}, 1.5)$ are closest to $(0,2)$, with distance approximately 1.323 units.

---

## **Critical Points of Implicit Relations**

### **Definition:**

For an implicitly defined relation $F(x, y) = 0$, a **critical point** is a point $(x, y)$ on the curve where $\frac{dy}{dx} = 0$ or $\frac{dy}{dx}$ does not exist.

To find critical points:

1. Differentiate implicitly with respect to $x$ to find $\frac{dy}{dx}$.
2. Set $\frac{dy}{dx} = 0$ and solve for $x$ and $y$ that also satisfy the original equation.
3. Also consider points where $\frac{dy}{dx}$ is undefined (denominator zero) that lie on the curve.

**Comments:**

- At a critical point where $\frac{dy}{dx} = 0$, the tangent line is horizontal.
- Where $\frac{dy}{dx}$ is undefined, the tangent line may be vertical or the curve may have a cusp.
- These points are candidates for local extrema of $y$ as a function of $x$ (if the curve defines $y$ as a function of $x$ locally).

**Example 5: Critical Points of a Circle**

Find critical points of the circle $x^2 + y^2 = 25$.

- Differentiate: $2x + 2y \frac{dy}{dx} = 0 \Rightarrow \frac{dy}{dx} = -\frac{x}{y}$.
- Set $\frac{dy}{dx} = 0$: $-\frac{x}{y} = 0 \Rightarrow x = 0$. Then from original: $0 + y^2 = 25 \Rightarrow y = \pm 5$.
  So points $(0, 5)$ and $(0, -5)$ have horizontal tangents.
- Also, $\frac{dy}{dx}$ is undefined when $y = 0$, then $x^2 = 25 \Rightarrow x = \pm 5$. Points $(5, 0)$ and $(-5, 0)$ have vertical tangents.
- Critical points: all four points.

**Example 6: Implicit Relation with Product**

Find critical points of $x^2 + xy + y^2 = 3$.

- Differentiate: $2x + y + x \frac{dy}{dx} + 2y \frac{dy}{dx} = 0 \Rightarrow (x + 2y) \frac{dy}{dx} = -2x - y \Rightarrow \frac{dy}{dx} = \frac{-2x - y}{x + 2y}$.
- Horizontal tangents: $\frac{dy}{dx} = 0 \Rightarrow -2x - y = 0 \Rightarrow y = -2x$. Substitute into original:
  $x^2 + x(-2x) + (-2x)^2 = 3 \Rightarrow x^2 - 2x^2 + 4x^2 = 3 \Rightarrow 3x^2 = 3 \Rightarrow x^2 = 1 \Rightarrow x = \pm 1$.
  Then $y = -2x$: for $x=1$, $y=-2$; for $x=-1$, $y=2$. Points: $(1, -2)$ and $(-1, 2)$.
- Vertical tangents: where denominator $x + 2y = 0 \Rightarrow x = -2y$. Substitute:
  $(-2y)^2 + (-2y)y + y^2 = 3 \Rightarrow 4y^2 - 2y^2 + y^2 = 3 \Rightarrow 3y^2 = 3 \Rightarrow y^2 = 1 \Rightarrow y = \pm 1$.
  Then $x = -2y$: for $y=1$, $x=-2$; for $y=-1$, $x=2$. Points: $(-2, 1)$ and $(2, -1)$.
- So critical points: $(1,-2)$, $(-1,2)$, $(-2,1)$, $(2,-1)$.

---

## **Analyzing Implicit Functions Using Derivatives**

### **Definition:**

We can use the first and second derivatives obtained via implicit differentiation to analyze the behavior of implicitly defined functions: determine intervals of increase/decrease, concavity, and classify critical points.

**Finding the second derivative implicitly:**

- Differentiate the expression for $\frac{dy}{dx}$ again with respect to $x$, treating $y$ as a function of $x$. The result will involve $\frac{dy}{dx}$, which you can substitute with the previously found expression.

**Comments:**

- This is algebraically more complex but follows the same principles.
- The second derivative can be used to determine concavity and to apply the Second Derivative Test for critical points where $\frac{dy}{dx} = 0$.

**Example 7: Second Derivative Implicitly**

For the circle $x^2 + y^2 = 25$, find $\frac{d^2y}{dx^2}$.

- We have $\frac{dy}{dx} = -\frac{x}{y}$.
- Differentiate both sides with respect to $x$:
  $$
  \frac{d}{dx}\left( \frac{dy}{dx} \right) = \frac{d}{dx}\left( -\frac{x}{y} \right)
  $$
  Left side is $\frac{d^2y}{dx^2}$. Right side: use quotient rule:
  $$
  -\frac{1 \cdot y - x \cdot \frac{dy}{dx}}{y^2} = -\frac{y - x(-\frac{x}{y})}{y^2} = -\frac{y + \frac{x^2}{y}}{y^2} = -\frac{\frac{y^2 + x^2}{y}}{y^2} = -\frac{y^2 + x^2}{y^3}.
  $$
- But $x^2 + y^2 = 25$, so $\frac{d^2y}{dx^2} = -\frac{25}{y^3}$.

**Example 8: Classifying Critical Points on an Implicit Curve**

For the curve $x^2 + xy + y^2 = 3$, classify the critical point $(1, -2)$ (where horizontal tangent).

- We have $\frac{dy}{dx} = \frac{-2x - y}{x + 2y}$. At $(1,-2)$, denominator: $1 + 2(-2) = -3 \neq 0$, so derivative is defined (and zero).
- To classify, find second derivative implicitly. Start from the differentiated equation: $2x + y + x \frac{dy}{dx} + 2y \frac{dy}{dx} = 0$.
  Differentiate again with respect to $x$:
  $$
  2 + \frac{dy}{dx} + \frac{dy}{dx} + x \frac{d^2y}{dx^2} + 2 \left( \frac{dy}{dx} \right)^2 + 2y \frac{d^2y}{dx^2} = 0.
  $$
  Simplify: $2 + 2\frac{dy}{dx} + \left( \frac{dy}{dx} \right)^2 + (x + 2y) \frac{d^2y}{dx^2} = 0$.
- At $(1,-2)$, $\frac{dy}{dx} = 0$. Also $x+2y = 1 + 2(-2) = -3$. Plug in:
  $$
  2 + 0 + 0 + (-3) \frac{d^2y}{dx^2} = 0 \Rightarrow 2 - 3 \frac{d^2y}{dx^2} = 0 \Rightarrow \frac{d^2y}{dx^2} = \frac{2}{3}.
  $$
- Since $\frac{d^2y}{dx^2} > 0$, the curve is concave up at this point, so $(1,-2)$ is a local minimum (for $y$ as a function of $x$ locally).

---

### **Summary**

**Optimization Problems – Step-by-Step:**

1. **Understand** – What are we maximizing/minimizing? What are the constraints?
2. **Diagram** – Sketch and label variables.
3. **Objective function** – Express target quantity in terms of one variable, using constraints to eliminate others.
4. **Domain** – Identify realistic bounds for the variable.
5. **Critical points** – Find where derivative is zero or undefined.
6. **Evaluate** – Compute objective at critical points and endpoints. Use derivative tests if needed.
7. **Interpret** – State answer in context with units.

**Critical Points for Implicit Relations:**

- Horizontal tangents: $\frac{dy}{dx} = 0$.
- Vertical tangents: $\frac{dy}{dx}$ undefined.
- These are candidates for extrema.

**Second Derivative for Implicit Functions:**

- Differentiate implicitly twice to find $\frac{d^2y}{dx^2}$.
- Use concavity to classify critical points (Second Derivative Test).

**Common Pitfalls:**

- Forgetting the domain – endpoints can be extrema.
- Not checking if critical point actually yields a max/min.
- Misinterpreting constraints – e.g., using wrong number of sides in fencing problems.
- In implicit differentiation, forgetting to substitute back the original equation to simplify.

---

**Looking Ahead:**

Optimization problems are the payoff for all our derivative work. They show up on the AP exam in both multiple-choice and free-response sections. Practice setting them up—the calculus is usually straightforward once you have the right function. Next, we'll explore related rates in more depth and then move to integration. But for now, master these steps and you'll be ready for anything.