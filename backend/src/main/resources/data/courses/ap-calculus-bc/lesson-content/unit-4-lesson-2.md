# Related Rates

Alright, here we are—Related Rates. 

This is where calculus starts to feel like solving a puzzle. You're given a real-world situation where things are changing—a balloon inflating, a ladder sliding, a rocket launching—and you need to figure out how fast one thing is changing based on how fast something else is changing.

The key idea? 

Everything is connected. The radius of a balloon and its volume. The position of a ladder's base and its height. These quantities are related by an equation. And since they're all changing with time, their rates of change are related too—hence the name "related rates."

This is one of the most practical applications of derivatives, and honestly, it's pretty cool. Let's break it down.

---

## **Understanding Related Rates Problems**

### **Definition:**

A **related rates problem** involves finding the rate at which one quantity changes by relating it to other quantities whose rates of change are known. These problems use the chain rule to differentiate with respect to time (or another common variable).

The core mathematical relationship is:

- Given an equation relating variables $x$ and $y$: $F(x, y) = 0$
- When both $x$ and $y$ are functions of time $t$, we differentiate both sides with respect to $t$:
  $$
  \frac{d}{dt}[F(x, y)] = 0
  $$
- This yields a relationship between $\frac{dx}{dt}$ and $\frac{dy}{dt}$.

**The Key Concept:**

Think of it this way: you have a bunch of quantities that are all connected by some geometric or physical relationship. They're all changing over time. If you know how fast some of them are changing, you can figure out how fast the others are changing—provided you have the right equation linking them.

**The Chain Rule is Your Best Friend:**

Remember: when you differentiate a variable with respect to time, you're using the chain rule. For example:

- $\frac{d}{dt}[x^2] = 2x \cdot \frac{dx}{dt}$
- $\frac{d}{dt}[\sin \theta] = \cos \theta \cdot \frac{d\theta}{dt}$
- $\frac{d}{dt}[xy] = \frac{dx}{dt} \cdot y + x \cdot \frac{dy}{dt}$ (product rule!)

**Common Pitfalls to Avoid:**

1. **Forgetting the chain rule:** This is the #1 mistake. When you differentiate $x^2$, you don't just get $2x$—you get $2x \frac{dx}{dt}$. Why? Because $x$ is a function of $t$, so you need the derivative of the inside function $x$ with respect to $t$, which is $\frac{dx}{dt}$.

2. **Substituting values before differentiating:** This is the #2 mistake. You have to differentiate *first*, then plug in the specific numbers at the moment of interest. Why? Because the relationship between the rates holds for all time, but the specific values of the variables (like $r = 5$) are only true at that instant. If you substitute them too early, you'll lose the general relationship.

3. **Mixing up constants and variables:** Some quantities might be constant in the problem (like the length of a ladder or the radius of a cylindrical tank). Make sure you know which are fixed and which are changing.

**The 7-Step Strategy:**

This is your roadmap. Follow it every time.

1. **READ:** Identify what's given and what you need to find. What rates are known? What rate is unknown? At what specific moment are you evaluating?

2. **DRAW:** If possible, sketch a diagram. Label changing quantities with variables (like $x$, $y$, $r$, $h$, $\theta$). Label constants with numbers.

3. **RELATE:** Write an equation that connects the variables. This is usually a geometric formula (Pythagorean theorem, volume of a cone, similar triangles, etc.).

4. **DIFFERENTIATE:** Differentiate both sides of the equation implicitly with respect to time $t$. Remember the chain rule—every variable gets a $\frac{d}{dt}$ factor.

5. **SUBSTITUTE:** Plug in all known values—the rates you know and the specific values of the variables at the moment of interest.

6. **SOLVE:** Solve algebraically for the unknown rate.

7. **INTERPRET:** State your answer with proper units and explain what it means (especially the sign: positive = increasing, negative = decreasing).

---

## **Geometric Related Rates Problems**

Let's start with some classic examples. These all involve basic geometric shapes and relationships.

**Example 1: Expanding Circle**

The radius of a circle is increasing at 3 cm/s. How fast is the area increasing when the radius is 10 cm?

*Let's walk through the steps:*

- **Step 1 (READ):** Given: $\frac{dr}{dt} = 3$ cm/s (positive because radius is increasing). Need: $\frac{dA}{dt}$ when $r = 10$ cm.
- **Step 2 (DRAW):** Picture a circle with radius $r$ getting larger.
- **Step 3 (RELATE):** Area of a circle: $A = \pi r^2$.
- **Step 4 (DIFFERENTIATE):** $\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$.
- **Step 5 (SUBSTITUTE):** At the moment $r = 10$, $\frac{dr}{dt} = 3$, so $\frac{dA}{dt} = 2\pi (10)(3) = 60\pi$.
- **Step 6 (SOLVE):** Already done—$\frac{dA}{dt} = 60\pi$ cm²/s.
- **Step 7 (INTERPRET):** When the radius is 10 cm, the area is increasing at $60\pi \approx 188.5$ square centimeters per second.

**Example 2: Melting Ice Cube**

An ice cube melts so that its side length decreases at 2 mm/min. How fast is the volume decreasing when the side length is 5 mm?

- **Step 1 (READ):** Given: $\frac{ds}{dt} = -2$ mm/min (negative because decreasing). Need: $\frac{dV}{dt}$ when $s = 5$ mm.
- **Step 2 (DRAW):** A cube with side $s$.
- **Step 3 (RELATE):** Volume of a cube: $V = s^3$.
- **Step 4 (DIFFERENTIATE):** $\frac{dV}{dt} = 3s^2 \frac{ds}{dt}$.
- **Step 5 (SUBSTITUTE):** At $s = 5$, $\frac{dV}{dt} = 3(5)^2(-2) = 3(25)(-2) = -150$.
- **Step 6 (SOLVE):** $\frac{dV}{dt} = -150$ mm³/min.
- **Step 7 (INTERPRET):** The volume is decreasing at 150 cubic millimeters per minute. The negative sign tells us it's shrinking.

**Example 3: Sliding Ladder**

A 10-foot ladder leans against a wall. The base slides away from the wall at 1 ft/s. How fast is the top sliding down when the base is 6 ft from the wall?

This is the classic related rates problem. Let's work it through carefully.

- **Step 1 (READ):** Ladder length = 10 ft (constant). Given: $\frac{dx}{dt} = 1$ ft/s (base moving away from wall). Need: $\frac{dy}{dt}$ when $x = 6$ ft, where $x$ = distance from wall to base, $y$ = height of top on wall.

- **Step 2 (DRAW):** Draw a right triangle. The ladder is the hypotenuse (10 ft). The base is $x$ along the ground. The height is $y$ along the wall.

- **Step 3 (RELATE):** Pythagorean theorem: $x^2 + y^2 = 10^2 = 100$.

- **Step 4 (DIFFERENTIATE):** Differentiate both sides with respect to $t$:
  $$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$
  We can simplify by dividing by 2:
  $$x\frac{dx}{dt} + y\frac{dy}{dt} = 0$$

- **Step 5 (SUBSTITUTE):** We know $x = 6$, $\frac{dx}{dt} = 1$. But we also need $y$ at that moment. From $x^2 + y^2 = 100$, when $x = 6$:
  $36 + y^2 = 100 \Rightarrow y^2 = 64 \Rightarrow y = 8 $ (positive, since height is above ground).

  Now substitute:
  $$6(1) + 8\frac{dy}{dt} = 0$$

- **Step 6 (SOLVE):**
  $$6 + 8\frac{dy}{dt} = 0 \Rightarrow 8\frac{dy}{dt} = -6 \Rightarrow \frac{dy}{dt} = -\frac{6}{8} = -0.75$$

- **Step 7 (INTERPRET):** The top is sliding down at 0.75 ft/s. The negative sign indicates downward motion.

---

## **Related Rates with Multiple Variables and Relationships**

Sometimes problems get more interesting—you might have more than two variables, or you might need to use similar triangles, or involve trigonometric relationships.

**Example 4: Conical Tank (Water Filling)**

Water pours into a conical tank (vertex down) with height 10 m and radius 4 m at 2 m³/min. How fast is the water level rising when the water is 5 m deep?

This one has a twist: the radius of the water's surface changes as the water level rises. We need to relate $r$ and $h$ using similar triangles.

- **Step 1 (READ):** Tank dimensions: total height $H = 10$ m, total radius $R = 4$ m. Given: $\frac{dV}{dt} = 2$ m³/min (rate water pours in). Need: $\frac{dh}{dt}$ when $h = 5$ m, where $h$ = depth of water, $r$ = radius of water surface at that depth.

- **Step 2 (DRAW):** Draw an inverted cone. Label the full cone dimensions (10 m tall, 4 m radius). Draw the water as a smaller cone inside, with height $h$ and radius $r$.

- **Step 3 (RELATE):** Volume of a cone: $V = \frac{1}{3}\pi r^2 h$.

  But $r$ and $h$ are related. By similar triangles, the ratio $r/h$ is constant and equal to the ratio of the full tank: $r/h = 4/10 = 2/5$. So $r = \frac{2}{5}h$.

  Substitute into the volume formula:
  $$V = \frac{1}{3}\pi \left(\frac{2}{5}h\right)^2 h = \frac{1}{3}\pi \cdot \frac{4}{25}h^3 = \frac{4}{75}\pi h^3$$

- **Step 4 (DIFFERENTIATE):**
  $$\frac{dV}{dt} = \frac{4}{75}\pi \cdot 3h^2 \frac{dh}{dt} = \frac{4}{25}\pi h^2 \frac{dh}{dt}$$

- **Step 5 (SUBSTITUTE):** At the moment $h = 5$, and $\frac{dV}{dt} = 2$:
  $$2 = \frac{4}{25}\pi (5)^2 \frac{dh}{dt} = \frac{4}{25}\pi (25) \frac{dh}{dt} = 4\pi \frac{dh}{dt}$$

- **Step 6 (SOLVE):**
  $$4\pi \frac{dh}{dt} = 2 \Rightarrow \frac{dh}{dt} = \frac{2}{4\pi} = \frac{1}{2\pi}$$

- **Step 7 (INTERPRET):** The water level is rising at $\frac{1}{2\pi} \approx 0.159$ m/min.

**Example 5: Moving Objects (Pythagorean)**

Car A travels north at 60 mph, Car B travels east at 30 mph. Both start from the same point at noon. How fast is the distance between them changing at 2 PM?

- **Step 1 (READ):** Given: $\frac{dy}{dt} = 60$ mph (north), $\frac{dx}{dt} = 30$ mph (east). Need: $\frac{dz}{dt}$ at $t = 2$ hours, where $x$ = east distance, $y$ = north distance, $z$ = straight-line distance between them.

- **Step 2 (DRAW):** Draw a coordinate system. Car B goes east along the x-axis, Car A goes north along the y-axis. The distance $z$ is the hypotenuse.

- **Step 3 (RELATE):** Pythagorean theorem: $z^2 = x^2 + y^2$.

- **Step 4 (DIFFERENTIATE):**
  $$2z\frac{dz}{dt} = 2x\frac{dx}{dt} + 2y\frac{dy}{dt}$$
  Simplify: $z\frac{dz}{dt} = x\frac{dx}{dt} + y\frac{dy}{dt}$

- **Step 5 (SUBSTITUTE):** At $t = 2$ hours:
  - $x = 30 \cdot 2 = 60$ miles
  - $y = 60 \cdot 2 = 120$ miles
  - $z = \sqrt{60^2 + 120^2} = \sqrt{3600 + 14400} = \sqrt{18000} = 60\sqrt{5}$ miles
  - $\frac{dx}{dt} = 30$, $\frac{dy}{dt} = 60$

  Plug in:
  $$(60\sqrt{5})\frac{dz}{dt} = (60)(30) + (120)(60) = 1800 + 7200 = 9000$$

- **Step 6 (SOLVE):**
  $$\frac{dz}{dt} = \frac{9000}{60\sqrt{5}} = \frac{150}{\sqrt{5}} = 30\sqrt{5} \approx 67.1 \text{ mph}$$

- **Step 7 (INTERPRET):** The distance between the cars is increasing at approximately 67.1 mph.

**Example 6: Angle of Elevation**

A camera tracks a rocket launch. The rocket rises vertically at 200 m/s. The camera is 500 m from the launch pad. How fast is the camera's angle of elevation changing when the rocket is 500 m high?

- **Step 1 (READ):** Given: $\frac{dy}{dt} = 200$ m/s (rocket height increasing). Constant: distance from camera to pad = 500 m. Need: $\frac{d\theta}{dt}$ when $y = 500$ m, where $\theta$ = angle of elevation from camera to rocket.

- **Step 2 (DRAW):** Right triangle: adjacent side = 500 m (constant), opposite side = $y$, angle $\theta$ at camera.

- **Step 3 (RELATE):** Trigonometric relationship: $\tan \theta = \frac{y}{500}$, or equivalently $y = 500 \tan \theta$.

- **Step 4 (DIFFERENTIATE):**
  $$\frac{dy}{dt} = 500 \sec^2 \theta \frac{d\theta}{dt}$$

- **Step 5 (SUBSTITUTE):** When $y = 500$:
  - $\tan \theta = \frac{500}{500} = 1$, so $\theta = \frac{\pi}{4}$
  - $\sec^2 \theta = 1 + \tan^2 \theta = 1 + 1 = 2$
  - $\frac{dy}{dt} = 200$

  So:
  $$200 = 500(2) \frac{d\theta}{dt} = 1000 \frac{d\theta}{dt}$$

- **Step 6 (SOLVE):**
  $$\frac{d\theta}{dt} = \frac{200}{1000} = 0.2 \text{ rad/s}$$

- **Step 7 (INTERPRET):** The camera's angle is increasing at 0.2 radians per second.

---

### **Related Rates Strategy**

Here's your cheat sheet for any related rates problem:

**The 7-Step Method:**

1. **READ** – Identify given rates and what you need to find.
2. **DRAW** – Sketch and label variables and constants.
3. **RELATE** – Write an equation connecting the variables.
4. **DIFFERENTIATE** – Differentiate implicitly with respect to time $t$.
5. **SUBSTITUTE** – Plug in known values at the specific instant.
6. **SOLVE** – Solve for the unknown rate.
7. **INTERPRET** – State answer with units and sign meaning.

**Common Geometric Formulas to Memorize:**

| Shape | Formula |
|-------|---------|
| Circle area | $A = \pi r^2$ |
| Circle circumference | $C = 2\pi r$ |
| Sphere volume | $V = \frac{4}{3}\pi r^3$ |
| Sphere surface area | $S = 4\pi r^2$ |
| Cylinder volume | $V = \pi r^2 h$ |
| Cone volume | $V = \frac{1}{3}\pi r^2 h$ |
| Pythagorean theorem | $a^2 + b^2 = c^2$ |
| Similar triangles | $\frac{r_1}{h_1} = \frac{r_2}{h_2}$ |
| Right triangle trig | $\sin \theta = \frac{\text{opp}}{\text{hyp}}$, $\cos \theta = \frac{\text{adj}}{\text{hyp}}$, $\tan \theta = \frac{\text{opp}}{\text{adj}}$ |

**Important Reminders:**

- **Chain rule everywhere:** $\frac{d}{dt}[f(x)] = f'(x) \frac{dx}{dt}$
- **Sign matters:** Positive rate = increasing, negative rate = decreasing
- **Substitute after differentiating:** Never plug in changing values too early
- **Check your units:** Make sure your answer has the correct units

---

Related rates problems are all about connecting the dots—literally. The equation connects the variables, and the chain rule connects their rates. Follow the steps, be careful with the chain rule, and you'll be fine. Next up, we'll use these ideas to find maxima and minima—optimization problems. But for now, practice these until the process feels automatic.