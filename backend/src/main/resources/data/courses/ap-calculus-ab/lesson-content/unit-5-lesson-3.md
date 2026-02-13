# Lesson 13: Optimization Problems

### **13.1 Solving Optimization Problems**

**Definition:**
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

*   The hardest step is often setting up the objective function. Read carefully.
*   The domain is crucial: endpoints often give extreme values.
*   Verify that your critical point indeed gives a max or min (use First or Second Derivative Test if needed).
*   Always check if the answer makes sense in the context.

**Examples:**

1.  **Classic Fence Problem:** A farmer has 2400 ft of fencing and wants to fence off a rectangular field that borders a straight river. He needs no fence along the river. What are the dimensions of the field that has the largest area?
    *   **Step 1:** Maximize area $A$. Constraints: total fencing = 2400 ft, three sides (two widths and one length, or two lengths and one width? Actually, river along one side, so fence three sides: two perpendicular to river and one parallel).
    *   **Step 2:** Let $x$ = length parallel to river, $y$ = width perpendicular to river.
    *   **Step 3:** Constraint: $x + 2y = 2400$ (since two widths and one length). Objective: $A = xy$.
    *   **Step 4:** Express $A$ in one variable: from constraint, $x = 2400 - 2y$. Then $A(y) = (2400 - 2y)y = 2400y - 2y^2$.
    *   **Domain:** $y > 0$, and $x > 0 \Rightarrow 2400 - 2y > 0 \Rightarrow y < 1200$. So $0 < y < 1200$.
    *   **Step 5:** $A'(y) = 2400 - 4y$. Set $= 0$: $2400 - 4y = 0 \Rightarrow y = 600$.
    *   **Step 6:** Check endpoints: as $y \to 0^+$, $A \to 0$; as $y \to 1200^-$, $A \to 0$. Critical point $y=600$ gives $A(600) = 2400(600) - 2(600)^2 = 1,440,000 - 720,000 = 720,000$ ft².
    *   Second derivative: $A''(y) = -4 < 0$, so concave down, confirming maximum.
    *   **Step 7:** Dimensions: $y = 600$ ft, $x = 2400 - 2(600) = 1200$ ft. The field should be 1200 ft by 600 ft.
2.  **Minimizing Cost:** A cylindrical can must contain 1000 cm³ of liquid. Find the dimensions (radius and height) that minimize the cost of metal to make the can (minimize surface area).
    *   **Step 1:** Minimize surface area $S$. Constraint: volume $V = 1000$.
    *   **Step 2:** For a cylinder: $V = \pi r^2 h$, $S = 2\pi r^2 + 2\pi rh$ (top, bottom, and side).
    *   **Step 3:** From constraint: $h = \frac{1000}{\pi r^2}$. Substitute into $S$: $S(r) = 2\pi r^2 + 2\pi r \left( \frac{1000}{\pi r^2} \right) = 2\pi r^2 + \frac{2000}{r}$.
    *   **Domain:** $r > 0$.
    *   **Step 5:** $S'(r) = 4\pi r - \frac{2000}{r^2}$. Set $= 0$: $4\pi r = \frac{2000}{r^2} \Rightarrow 4\pi r^3 = 2000 \Rightarrow r^3 = \frac{500}{\pi} \Rightarrow r = \sqrt[3]{\frac{500}{\pi}} \approx 5.419$ cm.
    *   **Step 6:** Check endpoints: as $r \to 0^+$, $S \to \infty$; as $r \to \infty$, $S \to \infty$. So critical point gives minimum.
    *   **Step 7:** Then $h = \frac{1000}{\pi r^2} = \frac{1000}{\pi (500/\pi)^{2/3}} = \frac{1000}{\pi} \left( \frac{\pi}{500} \right)^{2/3} = \frac{1000}{\pi^{1/3} 500^{2/3}} = \frac{1000}{500^{2/3} \pi^{1/3}} = \frac{2 \cdot 500}{500^{2/3} \pi^{1/3}} = 2 \cdot 500^{1/3} \pi^{-1/3} = 2 \sqrt[3]{\frac{500}{\pi}} = 2r$. So $h = 2r$. The can should have height equal to its diameter.

---

### **13.2 Interpreting Maximum and Minimum Values in Context**

**Definition:**
The maximum or minimum value of an objective function represents the best (or worst) possible outcome in a given situation, such as maximum profit, minimum cost, maximum area, minimum distance, etc.

**Comments:**

*   Always state your answer with units and in the context of the problem.
*   Consider whether the critical point actually makes sense (e.g., negative lengths usually don't).
*   Sometimes the objective function is not directly given; you may need to construct it from geometric formulas, economic relationships, etc.

**Examples:**

1.  **Profit Maximization:** A company sells $x$ items at price $p(x) = 100 - 0.02x$ dollars per item. The cost to produce $x$ items is $C(x) = 2000 + 40x$. Find the production level that maximizes profit, and the maximum profit.
    *   Revenue: $R(x) = x \cdot p(x) = 100x - 0.02x^2$.
    *   Profit: $P(x) = R(x) - C(x) = (100x - 0.02x^2) - (2000 + 40x) = 60x - 0.02x^2 - 2000$.
    *   Domain: $x \geq 0$.
    *   $P'(x) = 60 - 0.04x$. Set $= 0$: $60 = 0.04x \Rightarrow x = 1500$.
    *   Second derivative: $P''(x) = -0.04 < 0$, so maximum.
    *   Maximum profit: $P(1500) = 60(1500) - 0.02(1500)^2 - 2000 = 90,000 - 45,000 - 2000 = 43,000$ dollars.
    *   **Interpretation:** Producing and selling 1500 items yields a maximum profit of $43,000.
2.  **Minimizing Distance:** Find the point on the parabola $y = x^2$ that is closest to the point $(0, 2)$.
    *   **Step 1:** Minimize distance $d$ from $(x, y) = (x, x^2)$ to $(0, 2)$.
    *   **Step 2:** Distance squared (easier to differentiate): $D(x) = (x-0)^2 + (x^2 - 2)^2 = x^2 + (x^2 - 2)^2$.
    *   **Step 3:** $D'(x) = 2x + 2(x^2 - 2)(2x) = 2x + 4x(x^2 - 2) = 2x + 4x^3 - 8x = 4x^3 - 6x = 2x(2x^2 - 3)$.
    *   Critical points: $2x(2x^2 - 3) = 0 \Rightarrow x = 0$ or $x = \pm\sqrt{\frac{3}{2}}$.
    *   **Step 4:** Check endpoints? Domain all reals, but as $x \to \pm\infty$, $D \to \infty$, so critical points are candidates.
    *   Second derivative: $D''(x) = 12x^2 - 6$. At $x=0$: $D''(0) = -6 < 0$ (local max for distance? Actually we want min distance, so this is a local max of D, so not closest). At $x=\pm\sqrt{1.5}$: $D'' = 12(1.5) - 6 = 18 - 6 = 12 > 0$, so local minima.
    *   **Step 5:** Compute distances: For $x=\pm\sqrt{1.5}$, $y = 1.5$. Distance squared: $D = 1.5 + (1.5-2)^2 = 1.5 + 0.25 = 1.75$. So distance $= \sqrt{1.75} = \frac{\sqrt{7}}{2} \approx 1.323$.
    *   **Interpretation:** The points $(\sqrt{1.5}, 1.5)$ and $(-\sqrt{1.5}, 1.5)$ are closest to $(0,2)$, with distance approximately 1.323 units.

---

### **13.3 Critical Points of Implicit Relations**

**Definition:**
For an implicitly defined relation $F(x, y) = 0$, a **critical point** is a point $(x, y)$ on the curve where $\frac{dy}{dx} = 0$ or $\frac{dy}{dx}$ does not exist.

To find critical points:

1. Differentiate implicitly with respect to $x$ to find $\frac{dy}{dx}$.
2. Set $\frac{dy}{dx} = 0$ and solve for $x$ and $y$ that also satisfy the original equation.
3. Also consider points where $\frac{dy}{dx}$ is undefined (denominator zero) that lie on the curve.

**Comments:**

*   At a critical point where $\frac{dy}{dx} = 0$, the tangent line is horizontal.
*   Where $\frac{dy}{dx}$ is undefined, the tangent line may be vertical or the curve may have a cusp.
*   These points are candidates for local extrema of $y$ as a function of $x$ (if the curve defines $y$ as a function of $x$ locally).

**Examples:**

1.  **Find critical points of the circle:** $x^2 + y^2 = 25$.
    *   Differentiate: $2x + 2y \frac{dy}{dx} = 0 \Rightarrow \frac{dy}{dx} = -\frac{x}{y}$.
    *   Set $\frac{dy}{dx} = 0$: $-\frac{x}{y} = 0 \Rightarrow x = 0$. Then from original equation: $0 + y^2 = 25 \Rightarrow y = \pm 5$.
    *   So points $(0, 5)$ and $(0, -5)$ have horizontal tangents.
    *   Also, $\frac{dy}{dx}$ is undefined when $y = 0$, then $x^2 = 25 \Rightarrow x = \pm 5$. Points $(5, 0)$ and $(-5, 0)$ have vertical tangents.
    *   Critical points: all four points.
2.  **Implicit relation with product:** Find critical points of $x^2 + xy + y^2 = 3$.
    *   Differentiate: $2x + y + x \frac{dy}{dx} + 2y \frac{dy}{dx} = 0 \Rightarrow (x + 2y) \frac{dy}{dx} = -2x - y \Rightarrow \frac{dy}{dx} = \frac{-2x - y}{x + 2y}$.
    *   Horizontal tangents: $\frac{dy}{dx} = 0 \Rightarrow -2x - y = 0 \Rightarrow y = -2x$. Substitute into original: $x^2 + x(-2x) + (-2x)^2 = 3 \Rightarrow x^2 - 2x^2 + 4x^2 = 3 \Rightarrow 3x^2 = 3 \Rightarrow x^2 = 1 \Rightarrow x = \pm 1$. Then $y = -2x$: for $x=1$, $y=-2$; for $x=-1$, $y=2$. Points: $(1, -2)$ and $(-1, 2)$.
    *   Vertical tangents: where denominator of $\frac{dy}{dx} = 0$: $x + 2y = 0 \Rightarrow x = -2y$. Substitute: $(-2y)^2 + (-2y)y + y^2 = 3 \Rightarrow 4y^2 - 2y^2 + y^2 = 3 \Rightarrow 3y^2 = 3 \Rightarrow y^2 = 1 \Rightarrow y = \pm 1$. Then $x = -2y$: for $y=1$, $x=-2$; for $y=-1$, $x=2$. Points: $(-2, 1)$ and $(2, -1)$.
    *   So critical points: $(1,-2)$, $(-1,2)$, $(-2,1)$, $(2,-1)$.

---

### **13.4 Analyzing Implicit Functions Using Derivatives**

**Definition:**
We can use the first and second derivatives obtained via implicit differentiation to analyze the behavior of implicitly defined functions: determine intervals of increase/decrease, concavity, and classify critical points.

**Finding the second derivative implicitly:**

*   Differentiate the expression for $\frac{dy}{dx}$ again with respect to $x$, treating $y$ as a function of $x$. The result will involve $\frac{dy}{dx}$, which you can substitute with the previously found expression.

**Comments:**

*   This is algebraically more complex but follows the same principles.
*   The second derivative can be used to determine concavity and to apply the Second Derivative Test for critical points where $\frac{dy}{dx} = 0$.

**Examples:**

1.  **Second derivative implicitly:** For the circle $x^2 + y^2 = 25$, find $\frac{d^2y}{dx^2}$.
    *   We have $\frac{dy}{dx} = -\frac{x}{y}$.
    *   Differentiate both sides with respect to $x$:
        $$
        \frac{d}{dx}\left( \frac{dy}{dx} \right) = \frac{d}{dx}\left( -\frac{x}{y} \right)
        $$
        Left side is $\frac{d^2y}{dx^2}$. Right side: use quotient rule or product rule: $-\frac{1 \cdot y - x \cdot \frac{dy}{dx}}{y^2} = -\frac{y - x(-\frac{x}{y})}{y^2} = -\frac{y + \frac{x^2}{y}}{y^2} = -\frac{\frac{y^2 + x^2}{y}}{y^2} = -\frac{y^2 + x^2}{y^3}$.
    *   But $x^2 + y^2 = 25$, so $\frac{d^2y}{dx^2} = -\frac{25}{y^3}$.
2.  **Classifying critical points on an implicit curve:** For the curve $x^2 + xy + y^2 = 3$, classify the critical point $(1, -2)$ (where horizontal tangent).
    *   We have $\frac{dy}{dx} = \frac{-2x - y}{x + 2y}$. At $(1,-2)$, denominator: $1 + 2(-2) = -3 \neq 0$, so derivative is defined (and zero).
    *   To classify, find second derivative implicitly. Differentiate the equation for $\frac{dy}{dx}$ or differentiate the original equation twice.
    *   Starting from $2x + y + x \frac{dy}{dx} + 2y \frac{dy}{dx} = 0$. Differentiate again:
        $$
        2 + \frac{dy}{dx} + \frac{dy}{dx} + x \frac{d^2y}{dx^2} + 2 \frac{dy}{dx} \cdot \frac{dy}{dx} + 2y \frac{d^2y}{dx^2} = 0
        $$
        Simplify: $2 + 2\frac{dy}{dx} + \left( \frac{dy}{dx} \right)^2 + (x + 2y) \frac{d^2y}{dx^2} = 0$.
    *   At $(1,-2)$, $\frac{dy}{dx} = 0$. Also $x+2y = 1 + 2(-2) = -3$. Plug in:
        $$
        2 + 0 + 0 + (-3) \frac{d^2y}{dx^2} = 0 \Rightarrow 2 - 3 \frac{d^2y}{dx^2} = 0 \Rightarrow \frac{d^2y}{dx^2} = \frac{2}{3}.
        $$
    *   Since $\frac{d^2y}{dx^2} > 0$, the curve is concave up at this point, so $(1,-2)$ is a local minimum (for $y$ as a function of $x$ locally).

---

### **Lesson 13 Summary**

**Optimization Problems:**

1.  Identify objective function and constraints.
2.  Express objective as function of one variable.
3.  Find domain.
4.  Find critical points (derivative $= 0$ or undefined).
5.  Evaluate at critical points and endpoints.
6.  Interpret.

**Critical Points for Implicit Relations:**

*   Find $\frac{dy}{dx}$ implicitly.
*   Set $\frac{dy}{dx} = 0$ to find points with horizontal tangents.
*   Also consider where $\frac{dy}{dx}$ is undefined (vertical tangents or cusps).
*   These are candidates for extrema.

**Second Derivative for Implicit Functions:**

*   Differentiate implicitly twice to find $\frac{d^2y}{dx^2}$.
*   Use to determine concavity and classify critical points.

---

### **Additional Practice Problems**

1.  A rectangular storage container with an open top is to have a volume of 10 m³. The length of its base is twice the width. Material for the base costs $10 per m²; material for the sides costs $6 per m². Find the cost of materials for the cheapest such container.
2.  Find the point on the line $y = 4x + 7$ that is closest to the origin.
3.  A poster is to have an area of 180 in² with 1-inch margins at the bottom and sides and a 2-inch margin at the top. Find the dimensions that give the largest printed area.
4.  For the curve defined by $x^2 + 2xy + 3y^2 = 6$, find the points with horizontal tangents.
5.  For the same curve, find the points with vertical tangents.
6.  Use implicit differentiation to find $\frac{d^2y}{dx^2}$ for the curve $x^3 + y^3 = 1$.
7.  A farmer wants to fence an area of 1.5 million square feet in a rectangular field and then divide it in half with a fence parallel to one of the sides. How can he do this so as to minimize the cost of the fence?
8.  Find the dimensions of the rectangle of largest area that can be inscribed in a semicircle of radius $r$.
9.  For the curve $y^2 = x^3 - 3x^2$, find the critical points and determine their nature (max/min) using the second derivative.
10. A company estimates that if $x$ thousand dollars are spent on marketing a product, then the sales will be $S(x) = 200 - 40e^{-0.01x}$ thousand units. How much should be spent on marketing to maximize sales? Is there a maximum?

**Selected Solutions:**

1.  Let width $= w$ m, length $= 2w$ m, height $= h$ m. Volume: $V = 2w \cdot w \cdot h = 2w^2 h = 10 \Rightarrow h = \frac{5}{w^2}$. Cost: base area $= 2w^2$, cost $10 \cdot 2w^2 = 20w^2$. Sides: two of area $2w \cdot h$ and two of area $w \cdot h$. Total side area $= 2(2wh) + 2(wh) = 4wh + 2wh = 6wh$. Cost for sides: $6 \cdot 6wh = 36wh = 36w \cdot \frac{5}{w^2} = \frac{180}{w}$. Total cost $C(w) = 20w^2 + \frac{180}{w}$, domain $w > 0$. $C'(w) = 40w - \frac{180}{w^2} = 0 \Rightarrow 40w = \frac{180}{w^2} \Rightarrow 40w^3 = 180 \Rightarrow w^3 = 4.5 \Rightarrow w = \sqrt[3]{4.5} \approx 1.651$. Check second derivative or endpoints: as $w \to 0^+$, $C \to \infty$; as $w \to \infty$, $C \to \infty$, so critical point gives min. Then $h = 5 / (4.5^{2/3}) \approx 1.834$. Cost: $C \approx 20(4.5^{2/3}) + 180/4.5^{1/3}$. Exact: $w = (9/2)^{1/3}$. Cost $= 20(9/2)^{2/3} + 180/(9/2)^{1/3}$. Simplify: $20 \cdot (9^{2/3}/2^{2/3}) + 180 \cdot (2^{1/3}/9^{1/3}) = (20 \cdot 9^{2/3} \cdot 9^{1/3} + 180 \cdot 2^{1/3} \cdot 2^{2/3}) / (2^{2/3} \cdot 9^{1/3})?$ Better compute numerically: $w \approx 1.651$, cost $\approx 20(2.724) + 180/1.651 \approx 54.48 + 109.03 = 163.51$. So cheapest cost about $163.51.
2.  Distance squared from $(x, y)$ to origin: $D = x^2 + y^2$. Constraint: $y = 4x+7$. So $D(x) = x^2 + (4x+7)^2 = x^2 + 16x^2 + 56x + 49 = 17x^2 + 56x + 49$. $D'(x) = 34x + 56 = 0 \Rightarrow x = -56/34 = -28/17 \approx -1.647$. Then $y = 4(-28/17)+7 = -112/17 + 119/17 = 7/17 \approx 0.412$. Distance $= \sqrt{D(-28/17)} = \sqrt{17(784/289) + 56(-28/17) + 49} = \sqrt{ (13328/289) - (1568/17) + 49 }$. Simplify: $1568/17 = 1568*17/289 = 26656/289$, and 49 $= 14161/289$. So D $= (13328 - 26656 + 14161)/289 = (13328+14161-26656)/289 = (27489-26656)/289 = 833/289$. So distance $= \sqrt{833/289} = \sqrt{833}/17$. So point: $(-28/17, 7/17)$.
3.  Let poster width $= w$, height $= h$. Area: $wh = 180$. Printed area: width $= w-2$ (1-inch margins on both sides), height $= h-3$ (1-inch bottom + 2-inch top). Printed area $A = (w-2)(h-3)$. Express in one variable: $h = 180/w$, so $A(w) = (w-2)(180/w - 3) = 180 - 3w - 360/w + 6 = 186 - 3w - 360/w$. Domain: $w > 2$ and $h > 3 \Rightarrow 180/w > 3 \Rightarrow w < 60$. So $2 < w < 60$. $A'(w) = -3 + 360/w^2 = 0 \Rightarrow 360/w^2 = 3 \Rightarrow w^2 = 120 \Rightarrow w = \sqrt{120} = 2\sqrt{30} \approx 10.954$. Then $h = 180/(2\sqrt{30}) = 90/\sqrt{30} = 3\sqrt{30} \approx 16.432$. Check endpoints: as $w \to 2^+$, $A \to 0$; as $w \to 60^-$, $A \to (60-2)(3-3)=0$. So max at critical point. Dimensions: width $2\sqrt{30}$ in, height $3\sqrt{30}$ in.
4.  $x^2 + 2xy + 3y^2 = 6$. Differentiate: $2x + 2y + 2x \frac{dy}{dx} + 6y \frac{dy}{dx} = 0 \Rightarrow (2x+6y) \frac{dy}{dx} = -2x-2y \Rightarrow \frac{dy}{dx} = \frac{-2x-2y}{2x+6y} = \frac{-x-y}{x+3y}$. Horizontal when numerator $= 0$: $-x-y = 0 \Rightarrow y = -x$. Substitute: $x^2 + 2x(-x) + 3(-x)^2 = 6 \Rightarrow x^2 -2x^2+3x^2=6 \Rightarrow 2x^2=6 \Rightarrow x^2=3 \Rightarrow x=\pm\sqrt{3}$. Points: $(\sqrt{3}, -\sqrt{3})$ and $(-\sqrt{3}, \sqrt{3})$.
5.  Vertical when denominator $= 0$: $x+3y=0 \Rightarrow x = -3y$. Substitute: $(-3y)^2 + 2(-3y)y + 3y^2 = 6 \Rightarrow 9y^2 -6y^2+3y^2=6 \Rightarrow 6y^2=6 \Rightarrow y^2=1 \Rightarrow y=\pm1$. Then $x = -3y$: for $y=1$, $x=-3$; for $y=-1$, $x=3$. Points: $(-3,1)$ and $(3,-1)$.
6.  $x^3+y^3=1$. Differentiate: $3x^2+3y^2 \frac{dy}{dx}=0 \Rightarrow \frac{dy}{dx} = -\frac{x^2}{y^2}$. Differentiate again: $\frac{d^2y}{dx^2} = -\frac{2x y^2 - x^2 \cdot 2y \frac{dy}{dx}}{y^4} = -\frac{2x y^2 - 2x^2 y (-\frac{x^2}{y^2})}{y^4} = -\frac{2x y^2 + \frac{2x^4}{y}}{y^4} = -\frac{2x y^3 + 2x^4}{y^5} = -\frac{2x(y^3+x^3)}{y^5}$. But $x^3+y^3=1$, so $\frac{d^2y}{dx^2} = -\frac{2x}{y^5}$.
7.  Let the field have dimensions $x$ (length of side parallel to dividing fence) and $y$ (other side). Area: $xy = 1.5 \times 10^6$. Fencing: two lengths of $x$ and three lengths of $y$ (since divider is parallel to side of length $x$). Total fence length $L = 2x + 3y$. Express: $y = 1.5\times10^6 / x$. So $L(x) = 2x + 4.5\times10^6 / x$. Domain: $x>0$. $L'(x) = 2 - 4.5\times10^6 / x^2 = 0 \Rightarrow 2x^2 = 4.5\times10^6 \Rightarrow x^2 = 2.25\times10^6 \Rightarrow x = 1500$ (positive). Then $y = 1.5\times10^6 / 1500 = 1000$. So dimensions: 1500 ft by 1000 ft, with divider parallel to the 1500 ft side.
8.  Place semicircle of radius $r$ with center at origin, equation $y = \sqrt{r^2 - x^2}$. Inscribe rectangle with vertices at $(\pm x, 0)$ and $(\pm x, y)$ where $y = \sqrt{r^2 - x^2}$, $0 < x < r$. Area $A = 2x \cdot y = 2x \sqrt{r^2 - x^2}$. Maximize: $A'(x) = 2\sqrt{r^2 - x^2} + 2x \cdot \frac{1}{2}(r^2 - x^2)^{-1/2}(-2x) = 2\sqrt{r^2 - x^2} - \frac{2x^2}{\sqrt{r^2 - x^2}} = \frac{2(r^2 - x^2) - 2x^2}{\sqrt{r^2 - x^2}} = \frac{2r^2 - 4x^2}{\sqrt{r^2 - x^2}}$. Set $=0$: $2r^2 - 4x^2 = 0 \Rightarrow x^2 = r^2/2 \Rightarrow x = r/\sqrt{2}$. Then $y = \sqrt{r^2 - r^2/2} = r/\sqrt{2}$. So rectangle is actually a square? No, width $= 2x = \sqrt{2}r$, height $= r/\sqrt{2}$, so width $= 2 \times$ height. Dimensions: width $\sqrt{2}r$, height $r/\sqrt{2}$.
9.  $y^2 = x^3 - 3x^2$. Differentiate implicitly: $2y \frac{dy}{dx} = 3x^2 - 6x \Rightarrow \frac{dy}{dx} = \frac{3x^2 - 6x}{2y}$. Critical points where numerator$=0$ (horizontal tangent) and $y\neq0$: $3x^2-6x=0 \Rightarrow 3x(x-2)=0 \Rightarrow x=0,2$. For $x=0$: from original, $y^2 = 0 \Rightarrow y=0$. But then derivative is undefined (denominator 0). Actually at $(0,0)$, derivative is indeterminate (0/0). So need to check separately. For $x=2$: $y^2 = 8-12 = -4$, no real $y$. So only critical point at $(0,0)$. But also where denominator$=0$ (vertical tangent): $y=0$. From original, $y=0$ gives $0 = x^3-3x^2 = x^2(x-3) \Rightarrow x=0 \text{ or } x=3$. So points $(0,0)$ and $(3,0)$. At $(3,0)$, derivative is undefined (vertical tangent). So critical points: $(0,0)$ and $(3,0)$. To classify, analyze sign of derivative around them. For $(0,0)$: near $(0,0)$, the curve has a self-intersection? Actually, solving for $y$: $y = \pm \sqrt{x^3-3x^2} = \pm x\sqrt{x-3}$. Domain: $x \ge 3$ or $x=0$. So only $x=0$ and $x\geq3$. So $(0,0)$ is isolated? Actually for $x=0$, only $y=0$. For $x>3$, two branches. So $(0,0)$ is a separate point? The curve consists of a loop? Actually, the equation factors as $y^2 = x^2(x-3)$. So for $x<3$, inside square root negative, so no real $y$ except $x=0$. So the curve is defined for $x=0$ and $x\geq3$. So $(0,0)$ is an isolated point (a single point). The other part is for $x\geq3$, with $y = \pm x\sqrt{x-3}$. At $x=3$, $y=0$, so $(3,0)$. Derivative: for $x>3$, $y\neq0$. At $(3,0)$, derivative undefined, vertical tangent. So $(3,0)$ is like a cusp? Check: as $x\to3^+$, $y \approx \pm x\sqrt{x-3} \approx \pm3\sqrt{x-3}$. So derivative near $(3,0)$: $\frac{dy}{dx} = \frac{3x^2-6x}{2y}$. For the upper branch, $y$ positive, as $x\to3^+$, numerator $\to 9$, denominator $\to 0^+$, so derivative $\to +\infty$. For lower branch, derivative $\to -\infty$. So vertical tangent at $(3,0)$. So $(3,0)$ is not an extremum but a cusp-like point.
10. Sales function: $S(x) = 200 - 40e^{-0.01x}$, $x$ in thousand dollars. $S'(x) = -40 \cdot (-0.01) e^{-0.01x} = 0.4 e^{-0.01x} > 0$ for all $x$. So $S(x)$ is always increasing. No critical points. As $x\to\infty$, $S(x)\to200$. So the more spent on marketing, the higher sales, approaching 200,000 units. There is no maximum in a finite sense, but there is an upper bound of 200.