# Lesson 9: Related Rates

### **9.1 Understanding Related Rates Problems**

**Definition:**
A **related rates problem** involves finding the rate at which one quantity changes by relating it to other quantities whose rates of change are known. These problems use the chain rule to differentiate with respect to time (or another common variable).

The core mathematical relationship is:

*   Given an equation relating variables $x$ and $y$: $F(x, y) = 0$
*   When both $x$ and $y$ are functions of time $t$, we differentiate both sides with respect to $t$:
    $$
    \frac{d}{dt}[F(x, y)] = 0
    $$
*   This yields a relationship between $\frac{dx}{dt}$ and $\frac{dy}{dt}$.

**Comments:**

*   **Key Concept:** Variables are changing with respect to time (or another parameter). We use implicit differentiation with respect to time.
*   **Common Pitfalls:**
    1.  Forgetting to use the chain rule when differentiating (e.g., $\frac{d}{dt}[x^2] = 2x \frac{dx}{dt}$, not just $2x$).
    2.  Substituting values *before* differentiating (you must differentiate first, then substitute).
    3.  Mixing up which quantities are constant and which vary with time.
*   **Strategy:**
    1.  **Draw a diagram** if possible. Label changing quantities with variables, constants with numbers.
    2.  **Write an equation** relating the variables.
    3.  **Differentiate both sides** with respect to time $t$.
    4.  **Substitute known values** (rates and quantities) at the specific moment of interest.
    5.  **Solve** for the unknown rate.
    6.  **Interpret** the result with proper units and sign.

---

### **9.2 Geometric Related Rates Problems**

**Examples:**

1.  **Expanding Circle:** The radius of a circle is increasing at 3 cm/s. How fast is the area increasing when the radius is 10 cm?
    *   **Step 1:** Known: $\frac{dr}{dt} = 3$ cm/s, find $\frac{dA}{dt}$ when $r = 10$.
    *   **Step 2:** Equation: $A = \pi r^2$.
    *   **Step 3:** Differentiate: $\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$.
    *   **Step 4:** Substitute: $\frac{dA}{dt} = 2\pi (10)(3) = 60\pi$.
    *   **Step 5:** Interpret: The area is increasing at $60\pi$ cm²/s when the radius is 10 cm.
2.  **Melting Ice Cube:** An ice cube melts so that its side length decreases at 2 mm/min. How fast is the volume decreasing when the side length is 5 mm?
    *   **Step 1:** Known: $\frac{ds}{dt} = -2$ mm/min (negative because decreasing), find $\frac{dV}{dt}$ when $s = 5$.
    *   **Step 2:** Equation: $V = s^3$.
    *   **Step 3:** Differentiate: $\frac{dV}{dt} = 3s^2 \frac{ds}{dt}$.
    *   **Step 4:** Substitute: $\frac{dV}{dt} = 3(5)^2(-2) = 3(25)(-2) = -150$.
    *   **Step 5:** Interpret: The volume is decreasing at 150 mm³/min.
3.  **Sliding Ladder:** A 10-foot ladder leans against a wall. The base slides away from the wall at 1 ft/s. How fast is the top sliding down when the base is 6 ft from the wall?
    *   **Step 1:** Diagram: right triangle with hypotenuse 10, base $x$, height $y$.
    *   **Step 2:** Known: $\frac{dx}{dt} = 1$ ft/s, find $\frac{dy}{dt}$ when $x = 6$.
    *   **Step 3:** Equation: $x^2 + y^2 = 100$.
    *   **Step 4:** Differentiate: $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$, or $x\frac{dx}{dt} + y\frac{dy}{dt} = 0$.
    *   **Step 5:** Find $y$ when $x = 6$: $y = \sqrt{100 - 36} = 8$.
    *   **Step 6:** Substitute: $6(1) + 8\frac{dy}{dt} = 0 \Rightarrow 8\frac{dy}{dt} = -6 \Rightarrow \frac{dy}{dt} = -0.75$ ft/s.
    *   **Step 7:** Interpret: The top is sliding *down* at 0.75 ft/s (negative indicates downward).

---

### **9.3 Related Rates with Multiple Rates and Relationships**

Sometimes problems involve:

*   More than two variables (use additional relationships to reduce variables)
*   Product or quotient rules in differentiation
*   Angles or trigonometric relationships

**Examples:**

1.  **Conical Tank (Water Filling):** Water pours into a conical tank (vertex down) with height 10 m and radius 4 m at 2 m³/min. How fast is the water level rising when the water is 5 m deep?
    *   **Step 1:** Known: $\frac{dV}{dt} = 2$ m³/min, tank dimensions: height 10, radius 4. Find $\frac{dh}{dt}$ when $h = 5$.
    *   **Step 2:** Volume of cone: $V = \frac{1}{3}\pi r^2 h$.
    *   **Step 3:** But $r$ and $h$ are related by similar triangles: $\frac{r}{h} = \frac{4}{10} = \frac{2}{5} \Rightarrow r = \frac{2}{5}h$.
    *   **Step 4:** Substitute $r$: $V = \frac{1}{3}\pi \left(\frac{2}{5}h\right)^2 h = \frac{1}{3}\pi \cdot \frac{4}{25}h^3 = \frac{4}{75}\pi h^3$.
    *   **Step 5:** Differentiate: $\frac{dV}{dt} = \frac{4}{75}\pi \cdot 3h^2 \frac{dh}{dt} = \frac{4}{25}\pi h^2 \frac{dh}{dt}$.
    *   **Step 6:** Substitute: $2 = \frac{4}{25}\pi (5)^2 \frac{dh}{dt} = \frac{4}{25}\pi (25) \frac{dh}{dt} = 4\pi \frac{dh}{dt}$.
    *   **Step 7:** Solve: $\frac{dh}{dt} = \frac{2}{4\pi} = \frac{1}{2\pi}$ m/min.
    *   **Step 8:** Interpret: The water level rises at $\frac{1}{2\pi} \approx 0.159$ m/min.
2.  **Moving Objects (Pythagorean):** Car A travels north at 60 mph, Car B travels east at 30 mph. Both start from the same point at noon. How fast is the distance between them changing at 2 PM?
    *   **Step 1:** Let $x$ = east distance of Car B, $y$ = north distance of Car A, $z$ = distance between them.
    *   **Step 2:** Known: $\frac{dx}{dt} = 30$, $\frac{dy}{dt} = 60$. At $t = 2$: $x = 30 \cdot 2 = 60$ mi, $y = 60 \cdot 2 = 120$ mi.
    *   **Step 3:** Equation: $z^2 = x^2 + y^2$.
    *   **Step 4:** Differentiate: $2z\frac{dz}{dt} = 2x\frac{dx}{dt} + 2y\frac{dy}{dt} \Rightarrow z\frac{dz}{dt} = x\frac{dx}{dt} + y\frac{dy}{dt}$.
    *   **Step 5:** Find $z$ at 2 PM: $z = \sqrt{60^2 + 120^2} = \sqrt{3600 + 14400} = \sqrt{18000} = 60\sqrt{5}$.
    *   **Step 6:** Substitute: $(60\sqrt{5})\frac{dz}{dt} = (60)(30) + (120)(60) = 1800 + 7200 = 9000$.
    *   **Step 7:** Solve: $\frac{dz}{dt} = \frac{9000}{60\sqrt{5}} = \frac{150}{\sqrt{5}} = 30\sqrt{5} \approx 67.1$ mph.
    *   **Step 8:** Interpret: The distance is increasing at about 67.1 mph.
3.  **Angle of Elevation:** A camera tracks a rocket launch. The rocket rises vertically at 200 m/s. The camera is 500 m from the launch pad. How fast is the camera's angle of elevation changing when the rocket is 500 m high?
    *   **Step 1:** Let $y$ = rocket height, $x = 500$ (constant distance), $\theta$ = angle.
    *   **Step 2:** Known: $\frac{dy}{dt} = 200$, find $\frac{d\theta}{dt}$ when $y = 500$.
    *   **Step 3:** Equation: $\tan \theta = \frac{y}{500}$, or $y = 500\tan\theta$.
    *   **Step 4:** Differentiate: $\frac{dy}{dt} = 500\sec^2\theta \frac{d\theta}{dt}$.
    *   **Step 5:** When $y = 500$, $\tan\theta = 1 \Rightarrow \theta = \frac{\pi}{4}$, and $\sec^2\theta = 1 + \tan^2\theta = 2$.
    *   **Step 6:** Substitute: $200 = 500(2)\frac{d\theta}{dt} = 1000\frac{d\theta}{dt}$.
    *   **Step 7:** Solve: $\frac{d\theta}{dt} = 0.2$ rad/s.
    *   **Step 8:** Interpret: The camera's angle increases at 0.2 rad/s.

---

### **Lesson 9 Summary: Related Rates Strategy**

**Step-by-Step Approach:**

1.  **READ:** Identify given rates and what you need to find.
2.  **DRAW:** Sketch a diagram if applicable.
3.  **RELATE:** Write an equation connecting variables.
4.  **DIFFERENTIATE:** Differentiate implicitly with respect to time $t$.
5.  **SUBSTITUTE:** Plug in known values *at the specific instant*.
6.  **SOLVE:** Find the unknown rate.
7.  **INTERPRET:** State the answer with units and sign meaning.

**Common Geometric Formulas:**

*   Pythagorean theorem: $a^2 + b^2 = c^2$
*   Circle area: $A = \pi r^2$
*   Sphere volume: $V = \frac{4}{3}\pi r^3$
*   Cone volume: $V = \frac{1}{3}\pi r^2 h$
*   Similar triangles: ratios of sides remain constant

**Important Notes:**

*   The chain rule is essential: $\frac{d}{dt}[f(x)] = f'(x)\frac{dx}{dt}$.
*   Be careful with signs: a rate is negative if the quantity is decreasing.
*   Never substitute values that change with time until *after* differentiating.

---

### **Additional Practice Problems**

Solve each related rates problem:

1.  The radius of a sphere increases at 4 cm/s. How fast is the volume increasing when the radius is 10 cm?
2.  A 15-foot ladder slides down a wall. The base moves away at 0.5 ft/s. How fast is the top sliding down when the base is 9 ft from the wall?
3.  A cylindrical tank with radius 5 m is being filled with water at 3 m³/min. How fast is the water level rising?
4.  Two cars start from the same point. One travels south at 40 mph, the other west at 30 mph. How fast is the distance between them increasing 2 hours later?
5.  A street light is 20 ft high. A 6-ft tall person walks away at 4 ft/s. How fast does the shadow lengthen?
6.  A circular oil slick spreads so that its radius increases at 0.1 m/s. How fast is the area increasing when the radius is 50 m?
7.  Sand pours onto a conical pile at 10 ft³/min. The height always equals the radius. How fast is the height increasing when the pile is 6 ft high?
8.  A balloon rises vertically at 5 m/s. An observer 100 m away watches. How fast is the angle of elevation increasing when the balloon is 100 m high?
9.  A trough is 10 ft long with triangular cross-section (base 2 ft, height 3 ft). Water fills it at 5 ft³/min. How fast is the water level rising when it is 1 ft deep?
10. Two sides of a triangle are 4 m and 5 m. The angle between them increases at 0.06 rad/s. How fast is the area changing when the angle is $\frac{\pi}{3}$?

**Selected Solutions:**

1.  $V = \frac{4}{3}\pi r^3$, $\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$. $\frac{dV}{dt} = 4\pi (100)(4) = 1600\pi$ cm³/s.
2.  $x^2 + y^2 = 225$, differentiate: $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$. When $x = 9$, $y = 12$, $\frac{dx}{dt} = 0.5$. Then $9(0.5) + 12\frac{dy}{dt} = 0$ → $4.5 + 12\frac{dy}{dt} = 0$ → $\frac{dy}{dt} = -0.375$ ft/s.
3.  Cylinder: $V = \pi r^2 h = 25\pi h$ (since $r=5$ constant). $\frac{dV}{dt} = 25\pi \frac{dh}{dt}$. Given $\frac{dV}{dt} = 3$, so $3 = 25\pi \frac{dh}{dt}$ → $\frac{dh}{dt} = \frac{3}{25\pi}$ m/min.
4.  After 2 hours: south = 80 mi, west = 60 mi. Distance: $z^2 = x^2 + y^2$, differentiate: $z\frac{dz}{dt} = x\frac{dx}{dt} + y\frac{dy}{dt}$. $z = \sqrt{80^2+60^2} = 100$. So $100\frac{dz}{dt} = 60(30) + 80(40) = 1800 + 3200 = 5000$ → $\frac{dz}{dt} = 50$ mph.
5.  Use similar triangles: Let $x$ = person's distance from pole, $s$ = shadow length. Then $\frac{20}{x+s} = \frac{6}{s}$ → $20s = 6x + 6s$ → $14s = 6x$ → $s = \frac{3}{7}x$. Differentiate: $\frac{ds}{dt} = \frac{3}{7}\frac{dx}{dt} = \frac{3}{7}(4) = \frac{12}{7}$ ft/s.
6.  $A = \pi r^2$, $\frac{dA}{dt} = 2\pi r \frac{dr}{dt} = 2\pi (50)(0.1) = 10\pi$ m²/s.
7.  Cone with $h = r$: $V = \frac{1}{3}\pi h^3$. $\frac{dV}{dt} = \pi h^2 \frac{dh}{dt}$. Given $\frac{dV}{dt} = 10$, $h = 6$: $10 = \pi (36) \frac{dh}{dt}$ → $\frac{dh}{dt} = \frac{10}{36\pi} = \frac{5}{18\pi}$ ft/min.
8.  $\tan\theta = \frac{y}{100}$, differentiate: $\sec^2\theta \frac{d\theta}{dt} = \frac{1}{100}\frac{dy}{dt}$. When $y = 100$, $\tan\theta = 1$, so $\sec^2\theta = 1 + \tan^2\theta = 2$. Given $\frac{dy}{dt} = 5$: $2\frac{d\theta}{dt} = \frac{5}{100} = 0.05$ → $\frac{d\theta}{dt} = 0.025$ rad/s.
9.  Cross-section: similar triangles. Width at depth $h$: $\frac{w}{h} = \frac{2}{3} \Rightarrow w = \frac{2}{3}h$. Area of cross-section: $A = \frac{1}{2} \cdot w \cdot h = \frac{1}{2} \cdot \frac{2}{3}h \cdot h = \frac{1}{3}h^2$. Volume: $V = 10A = \frac{10}{3}h^2$. Differentiate: $\frac{dV}{dt} = \frac{20}{3}h \frac{dh}{dt}$. Given $\frac{dV}{dt} = 5$, $h = 1$: $5 = \frac{20}{3}(1)\frac{dh}{dt}$ → $\frac{dh}{dt} = \frac{15}{20} = 0.75$ ft/min.
10. Area: $A = \frac{1}{2}(4)(5)\sin\theta = 10\sin\theta$. Differentiate: $\frac{dA}{dt} = 10\cos\theta \frac{d\theta}{dt}$. When $\theta = \frac{\pi}{3}$, $\cos\frac{\pi}{3} = \frac{1}{2}$, $\frac{d\theta}{dt} = 0.06$: $\frac{dA}{dt} = 10 \cdot \frac{1}{2} \cdot 0.06 = 0.3$ m²/s.