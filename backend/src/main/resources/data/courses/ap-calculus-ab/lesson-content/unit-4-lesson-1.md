# Lesson 8: Interpreting Derivatives in Context

### **8.1 The Meaning of the Derivative in Applied Contexts**

**Definition:**
In any applied context, the derivative $f'(x)$ represents the **instantaneous rate of change** of the quantity $f$ with respect to the independent variable $x$.

If $f(t)$ represents a quantity that changes over time $t$, then $f'(t)$ tells us how fast $f$ is changing at the exact instant $t$.

**Comments:**

*   **Units:** The units of the derivative are the units of the dependent variable divided by the units of the independent variable. For example, if $C(x)$ is cost in dollars and $x$ is number of items, then $C'(x)$ is in dollars per item.
*   **Interpretation:** When interpreting a derivative in context, always include: (1) the rate (numerical value with units), (2) the direction (increasing or decreasing), and (3) the specific moment or point.
*   **Language:** Common phrases indicating a derivative include: "rate of change," "how fast," "velocity," "rate," "speed," "marginal" (in economics), "instantaneous."

**Examples:**

1.  **Temperature Change:** Let $T(t)$ be the temperature in degrees Fahrenheit at time $t$ hours. If $T'(2) = 3$, interpret this value.
    *   Interpretation: At $t = 2$ hours, the temperature is increasing at a rate of 3°F per hour.
2.  **Cost Function:** A company's cost to produce $x$ items is $C(x)$ dollars. What does $C'(100) = 2.50$ mean?
    *   Interpretation: When producing 100 items, the cost is increasing at a rate of $2.50 per additional item. This is the marginal cost at $x = 100$.
3.  **Population Growth:** A city's population $P(t)$ (in thousands) $t$ years after 2000 is given by $P(t)$. If $P'(10) = -1.5$, interpret this.
    *   Interpretation: In 2010 (10 years after 2000), the city's population is decreasing at a rate of 1,500 people per year.

---

### **8.2 Rectilinear Motion: Position, Velocity, and Acceleration**

**Definition:**
For an object moving along a straight line (rectilinear motion):

*   **Position** $s(t)$: location along the line at time $t$
*   **Velocity** $v(t) = s'(t)$: rate of change of position with respect to time
*   **Speed**: absolute value of velocity, $|v(t)|$
*   **Acceleration** $a(t) = v'(t) = s''(t)$: rate of change of velocity with respect to time

**Sign Conventions:**

*   The sign of velocity indicates direction: positive = moving in the positive direction; negative = moving in the negative direction.
*   Speed is always non-negative and tells how fast regardless of direction.
*   The sign of acceleration indicates whether velocity is increasing (positive acceleration) or decreasing (negative acceleration). Note: negative acceleration doesn't necessarily mean slowing down—it means velocity is decreasing (becoming more negative or less positive).

**Comments:**

*   **Object is at rest:** when $v(t) = 0$
*   **Object is speeding up:** when velocity and acceleration have the same sign ($v(t)$ and $a(t)$ both positive or both negative)
*   **Object is slowing down:** when velocity and acceleration have opposite signs

**Examples:**

1.  **Position to Velocity and Acceleration:** The position of a particle moving along a line is given by $s(t) = t^3 - 6t^2 + 9t$ meters, $t \geq 0$ seconds.
    *   Velocity: $v(t) = s'(t) = 3t^2 - 12t + 9$ m/s
    *   Acceleration: $a(t) = v'(t) = 6t - 12$ m/s²
    *   At $t = 1$: $v(1) = 3(1)^2 - 12(1) + 9 = 0$ m/s (at rest)
    *   At $t = 3$: $v(3) = 3(9) - 12(3) + 9 = 0$ m/s (at rest again)
    *   Determine when the particle is speeding up or slowing down.
2.  **Analyzing Motion:** Use the velocity function $v(t) = t^2 - 4t + 3$ m/s, $0 \leq t \leq 5$.
    *   Find when the particle is at rest: set $v(t) = 0$
        $t^2 - 4t + 3 = 0$ → $(t-1)(t-3) = 0$ → $t = 1$ and $t = 3$ seconds
    *   Acceleration: $a(t) = v'(t) = 2t - 4$
    *   At $t = 1$: $v(1) = 0$, $a(1) = -2$ m/s². Since acceleration is negative and velocity is 0, the particle is about to move in the negative direction (speeding up from rest in negative direction).
    *   At $t = 3$: $v(3) = 0$, $a(3) = 2$ m/s². The particle is about to move in the positive direction.

---

### **8.3 Other Rates of Change in Applied Contexts**

**Definition:**
Derivatives can model rates of change in various contexts beyond motion: economics (marginal cost, revenue, profit), biology (growth rates), physics (current, power), geometry (related rates—though those are covered in Lesson 9), etc.

**Common Contexts:**

*   **Economics:**
    *   Cost function $C(x)$: cost to produce $x$ items
    *   Marginal cost $C'(x)$: approximate cost to produce one more item
    *   Revenue $R(x)$: money from selling $x$ items
    *   Marginal revenue $R'(x)$: approximate revenue from selling one more item
    *   Profit $P(x) = R(x) - C(x)$
    *   Marginal profit $P'(x) = R'(x) - C'(x)$
*   **Biology/Chemistry:**
    *   Population growth: $P'(t)$ = growth rate
    *   Concentration of a substance: rate of change of concentration
*   **Geometry:**
    *   Area, volume, perimeter changing with respect to time or another dimension

**Comments:**

*   When solving applied rate problems, always:
    1.  Identify what each variable represents, including units.
    2.  Find the relationship between variables (the function).
    3.  Differentiate with respect to time (or the appropriate independent variable).
    4.  Substitute known values and solve for the unknown rate.
*   Interpret your answer in context with units.

**Examples:**

1.  **Economics:** The cost to produce $x$ items is $C(x) = 0.01x^3 - 0.6x^2 + 13x$. Find the marginal cost at $x = 10$ and interpret.
    *   $C'(x) = 0.03x^2 - 1.2x + 13$
    *   $C'(10) = 0.03(100) - 12 + 13 = 3 - 12 + 13 = 4$
    *   Interpretation: When producing 10 items, the cost is increasing at $4 per additional item. The approximate cost to produce the 11th item is $4.
2.  **Physics:** The electrical charge $Q$ (in coulombs) flowing through a wire at time $t$ (seconds) is given by $Q(t) = t^3 - 2t^2 + 6t + 2$. Find the current when $t = 2$ seconds. (Current is the rate of change of charge with respect to time.)
    *   Current: $I(t) = Q'(t) = 3t^2 - 4t + 6$
    *   $I(2) = 3(4) - 8 + 6 = 12 - 8 + 6 = 10$ amperes
    *   Interpretation: At $t = 2$ seconds, the current is 10 amps.
3.  **Geometry (Preview of Related Rates):** The area of a circle is increasing at a constant rate of 10 square inches per second. How fast is the radius increasing when the radius is 3 inches?
    *   Relationship: $A = \pi r^2$
    *   Differentiate with respect to time $t$: $\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$
    *   Given: $\frac{dA}{dt} = 10$ in²/s, $r = 3$ in
    *   $10 = 2\pi (3) \frac{dr}{dt}$
    *   $\frac{dr}{dt} = \frac{10}{6\pi} = \frac{5}{3\pi}$ in/s
    *   Interpretation: When the radius is 3 inches, it is increasing at $\frac{5}{3\pi}$ inches per second.

---

### **Lesson 8 Summary**

**Key Points:**

1.  **Derivative as Rate:** $f'(x)$ gives the instantaneous rate of change of $f$ with respect to $x$.
2.  **Units:** Always include units in interpretations. Units of $f'(x)$ = (units of $f$) / (units of $x$).
3.  **Motion:**
    *   Position $s(t)$, velocity $v(t) = s'(t)$, acceleration $a(t) = v'(t) = s''(t)$
    *   Speed = $|v(t)|$
    *   Object speeds up when $v(t)$ and $a(t)$ have the same sign; slows down when opposite signs.
4.  **Applied Contexts:** Identify variables, find relationships, differentiate, substitute, solve, and interpret.

**Interpreting Derivatives:** A complete interpretation should include:

*   The numerical value with units
*   The direction (increasing/decreasing)
*   The specific point or moment
*   What the rate measures in context

---

### **Additional Practice Problems**

1.  The volume of water in a tank is given by $V(t) = 100 - 3t^2$ gallons for $0 \leq t \leq 5$ minutes. Find $V'(2)$ and interpret.
2.  The number of bacteria in a culture is given by $N(t) = 500e^{0.1t}$, where $t$ is in hours. Find the growth rate when $t = 10$ hours.
3.  The position of a car on a straight road is $s(t) = 2t^3 - 21t^2 + 60t$ meters, $t \geq 0$ seconds.
    a) Find the velocity and acceleration functions.
    b) When is the car at rest?
    c) When is the car moving forward (positive direction)?
    d) When is it speeding up?
4.  The profit from selling $x$ items is $P(x) = -0.02x^3 + 100x - 800$. Find the marginal profit at $x = 50$ and interpret.
5.  The height of a projectile is $h(t) = -16t^2 + 64t + 80$ feet, $t \geq 0$.
    a) Find the velocity and acceleration.
    b) What is the maximum height?
    c) When does it hit the ground?
6.  The fuel consumption of a car (in miles per gallon) at speed $v$ (mph) is given by $C(v)$. If $C'(55) = -0.2$, interpret this.
7.  The temperature of a chemical reaction is $T(t) = 50 + 10t - 0.1t^2$ degrees Celsius, $0 \leq t \leq 100$ minutes. Find when the temperature is increasing fastest.
8.  The radius of a spherical balloon is increasing at 2 cm/min. How fast is the volume increasing when the radius is 5 cm? (Volume of sphere: $V = \frac{4}{3}\pi r^3$)
9.  A 10-foot ladder is leaning against a wall. The base is sliding away from the wall at 1 ft/s. How fast is the top sliding down when the base is 6 ft from the wall?
10. The cost to produce $x$ items is $C(x) = 200 + 5x + 0.1x^2$. Find the average cost per item $\bar{C}(x) = \frac{C(x)}{x}$ and the marginal average cost $\bar{C}'(x)$.

**Selected Solutions:**

1.  $V'(t) = -6t$, $V'(2) = -12$. Interpretation: At $t = 2$ minutes, the volume is decreasing at 12 gallons per minute.
2.  $N'(t) = 500(0.1)e^{0.1t} = 50e^{0.1t}$, $N'(10) = 50e^{1} \approx 135.9$ bacteria per hour.
3.  a) $v(t) = 6t^2 - 42t + 60$, $a(t) = 12t - 42$
    b) Set $v(t) = 0$: $6t^2 - 42t + 60 = 0$ → $t^2 - 7t + 10 = 0$ → $(t-2)(t-5)=0$ → $t=2, 5$ seconds
    c) Moving forward when $v(t) > 0$: test intervals: $(0,2)$: $v(1)=24>0$; $(2,5)$: $v(3)=-12<0$; $(5,\infty)$: $v(6)=24>0$. So forward on $[0,2)$ and $(5,\infty)$.
    d) Speeding up when $v$ and $a$ same sign. Find sign of $a(t)$: $a(t)=0$ at $t=3.5$. Test: For $t<3.5$, $a(t)<0$; $t>3.5$, $a(t)>0$. Compare with $v(t)$:
        *   On $(0,2)$: $v>0, a<0$ → opposite signs → slowing down
        *   On $(2,3.5)$: $v<0, a<0$ → same sign → speeding up
        *   On $(3.5,5)$: $v<0, a>0$ → opposite signs → slowing down
        *   On $(5,\infty)$: $v>0, a>0$ → same sign → speeding up
        So speeding up on $(2,3.5)$ and $(5,\infty)$.
4.  $P'(x) = -0.06x^2 + 100$, $P'(50) = -0.06(2500) + 100 = -150 + 100 = -50$. Interpretation: When selling 50 items, profit is decreasing at $50 per additional item sold. Selling the 51st item would decrease profit by about $50.
5.  a) $v(t) = -32t + 64$ ft/s, $a(t) = -32$ ft/s² (constant acceleration due to gravity)
    b) Max height when $v(t)=0$: $-32t+64=0$ → $t=2$ s. $h(2) = -16(4)+128+80 = -64+208=144$ ft.
    c) Hits ground when $h(t)=0$: $-16t^2+64t+80=0$ → divide by -16: $t^2-4t-5=0$ → $(t-5)(t+1)=0$ → $t=5$ s (positive time).
6.  Interpretation: At a speed of 55 mph, the fuel consumption is decreasing at 0.2 mpg per mph increase in speed. (Or: if you increase speed from 55 to 56 mph, fuel efficiency decreases by about 0.2 mpg.)
7.  Temperature increasing when $T'(t) > 0$. $T'(t) = 10 - 0.2t$. This is decreasing linearly. The temperature is increasing fastest at the beginning, $t=0$, where $T'(0)=10$ °C/min. (The rate of increase itself is decreasing over time.)
8.  $V = \frac{4}{3}\pi r^3$, $\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$. Given $\frac{dr}{dt}=2$, $r=5$: $\frac{dV}{dt} = 4\pi (25)(2) = 200\pi$ cm³/min.
9.  Let $x$ = distance from wall to base, $y$ = height on wall. $x^2 + y^2 = 100$. Differentiate: $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$. Given $\frac{dx}{dt}=1$, $x=6$, then $y=\sqrt{100-36}=8$. So $2(6)(1) + 2(8)\frac{dy}{dt}=0$ → $12 + 16\frac{dy}{dt}=0$ → $\frac{dy}{dt} = -0.75$ ft/s. The top is sliding down at 0.75 ft/s.
10. $\bar{C}(x) = \frac{200}{x} + 5 + 0.1x$. $\bar{C}'(x) = -\frac{200}{x^2} + 0.1$. Marginal average cost measures how the average cost per item changes as production increases.