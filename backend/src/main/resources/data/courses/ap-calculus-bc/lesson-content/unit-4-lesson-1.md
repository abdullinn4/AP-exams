# Interpreting Derivatives in Context

So far, we've spent a lot of time learning how to compute derivatives. And that's important—you need the tools. 

But here's the thing: calculus wasn't invented just so we could take derivatives of functions for fun. It was invented to solve real problems. To describe how things actually change in the world.

So now instead of asking "how do I find the derivative?", we're going to ask "what does this derivative mean?" when you're given a function that models a real situation—population growth, cost of production, the position of a car—the derivative tells a story. Your job is to read that story and interpret it correctly.

This is where calculus comes alive.

---

## **The Meaning of the Derivative in Applied Contexts**

### **Definition:**

In any applied context, the derivative $f'(x)$ represents the **instantaneous rate of change** of the quantity $f$ with respect to the independent variable $x$.

If $f(t)$ represents a quantity that changes over time $t$, then $f'(t)$ tells us how fast $f$ is changing at the exact instant $t$.

**The Key to Interpretation:**

When you're asked to interpret a derivative in context, you need to answer three questions:

1. **What's the numerical value?** (including units)
2. **Is it increasing or decreasing?** (positive or negative rate)
3. **At what specific point or moment?** (what's happening right then)

**Units Matter:**

The units of the derivative are always the units of the dependent variable divided by the units of the independent variable.

- If $C(x)$ is cost in dollars and $x$ is number of items, then $C'(x)$ is in **dollars per item**.
- If $P(t)$ is population in people and $t$ is years, then $P'(t)$ is in **people per year**.
- If $T(h)$ is temperature in degrees and $h$ is hours, then $T'(h)$ is in **degrees per hour**.

**Language Clues:**

In problems, certain phrases tip you off that they're asking about a derivative:
- "Rate of change"
- "How fast"
- "Velocity" or "speed"
- "Marginal" (in economics—marginal cost, marginal revenue)
- "Instantaneous" (as opposed to average)

**Examples:**

1. **Temperature Change:** Let $T(t)$ be the temperature in degrees Fahrenheit at time $t$ hours. If $T'(2) = 3$, interpret this value.

   *Interpretation: At exactly $t = 2$ hours, the temperature is increasing at a rate of 3°F per hour.*

   *Notice we included: the time (2 hours), the direction (increasing), the value (3), and the units (°F per hour).*

2. **Cost Function:** A company's cost to produce $x$ items is $C(x)$ dollars. What does $C'(100) = 2.50$ mean?

   *Interpretation: When producing 100 items, the cost is increasing at a rate of $2.50 per additional item. This is the marginal cost at $x = 100$.*

   *In economics, "marginal" always means derivative. So marginal cost at 100 items is about $2.50—meaning the 101st item would cost approximately $2.50 to produce.*

3. **Population Growth:** A city's population $P(t)$ (in thousands) $t$ years after 2000 is given by $P(t)$. If $P'(10) = -1.5$, interpret this.

   *Interpretation: In 2010 (10 years after 2000), the city's population is decreasing at a rate of 1,500 people per year.*

   *The negative sign tells us it's decreasing. The units: since $P$ is in thousands, $P'(10) = -1.5$ means -1,500 people per year.*

---

## **Rectilinear Motion: Position, Velocity, and Acceleration**

If you've taken physics, this might sound familiar. When an object moves along a straight line—a car on a road, a ball thrown straight up—we can describe its motion using derivatives.

### **Definition:**

For an object moving along a straight line (rectilinear motion):

- **Position** $s(t)$: where the object is located at time $t$ (usually relative to some reference point, like the starting line)
- **Velocity** $v(t) = s'(t)$: the rate of change of position with respect to time—how fast and in what direction the object is moving
- **Speed**: the absolute value of velocity, $|v(t)|$—how fast regardless of direction
- **Acceleration** $a(t) = v'(t) = s''(t)$: the rate of change of velocity with respect to time—how quickly the velocity is changing

**Sign Conventions:**

- **Velocity sign:** Positive means moving in the positive direction (usually right or up). Negative means moving in the negative direction (left or down).
- **Speed:** Always non-negative. A car going -60 mph and a car going +60 mph have the same speed (60 mph), just different directions.
- **Acceleration sign:** Positive means velocity is increasing (becoming more positive or less negative). Negative means velocity is decreasing (becoming less positive or more negative).

**Important Distinction: Speeding Up vs. Slowing Down**

This trips up a lot of students. Here's the rule:

- **Object is speeding up** when velocity and acceleration have the **same sign** (both positive or both negative)
- **Object is slowing down** when velocity and acceleration have **opposite signs**

Why? Think about it:
- If velocity is positive (moving right) and acceleration is positive (speeding up in the positive direction), you're going faster to the right → speeding up.
- If velocity is positive (moving right) but acceleration is negative (slowing down), you're still moving right but your speed is decreasing → slowing down.
- If velocity is negative (moving left) and acceleration is negative (speeding up in the negative direction), you're going faster to the left → speeding up (even though velocity is negative).
- If velocity is negative (moving left) but acceleration is positive (slowing down in the negative direction), you're still moving left but your speed is decreasing → slowing down.

**Key Checkpoints:**

- **Object at rest:** when $v(t) = 0$
- **Change of direction:** when velocity changes sign (usually at a point where $v(t)=0$ and the sign changes)
- **Maximum/minimum position:** when velocity is zero (more on this later with optimization)

**Example 1: Position to Velocity and Acceleration**

The position of a particle moving along a line is given by $s(t) = t^3 - 6t^2 + 9t$ meters, $t \geq 0$ seconds.

First, let's find velocity and acceleration:

- Velocity: $v(t) = s'(t) = 3t^2 - 12t + 9$ m/s
- Acceleration: $a(t) = v'(t) = 6t - 12$ m/s²

Now let's analyze what's happening at specific times:

- At $t = 1$: $v(1) = 3(1)^2 - 12(1) + 9 = 3 - 12 + 9 = 0$ m/s (particle is at rest)
- At $t = 3$: $v(3) = 3(9) - 12(3) + 9 = 27 - 36 + 9 = 0$ m/s (particle is at rest again)

So the particle starts, comes to rest at $t=1$, starts moving again, and comes to rest again at $t=3$.

**Example 2: Analyzing Motion (Speeding Up vs. Slowing Down)**

Let's use the velocity function $v(t) = t^2 - 4t + 3$ m/s for $0 \leq t \leq 5$.

First, find when the particle is at rest by setting $v(t) = 0$:

$t^2 - 4t + 3 = 0$ → $(t-1)(t-3) = 0$ → $t = 1$ and $t = 3$ seconds

Now find acceleration: $a(t) = v'(t) = 2t - 4$

Let's analyze what's happening:

- At $t = 0$: $v(0) = 3$ m/s (positive, moving right), $a(0) = -4$ m/s² (negative)
  Different signs → particle is **slowing down**

- At $t = 1$: $v(1) = 0$ (at rest), $a(1) = -2$ (negative)
  Since velocity is 0 and acceleration is negative, the particle is about to move in the negative direction. It's at rest but "getting ready" to go left.

- At $t = 2$: $v(2) = 4 - 8 + 3 = -1$ m/s (negative, moving left), $a(2) = 0$
  Acceleration is 0, so velocity isn't changing at this instant.

- At $t = 3$: $v(3) = 0$ (at rest again), $a(3) = 2$ (positive)
  Now with positive acceleration, the particle will start moving right.

- At $t = 4$: $v(4) = 16 - 16 + 3 = 3$ m/s (positive, moving right), $a(4) = 4$ (positive)
  Same signs → particle is **speeding up**

To find intervals where it's speeding up or slowing down, we need to compare signs of $v(t)$ and $a(t)$:

- $a(t) = 2t - 4$ changes sign at $t = 2$: negative for $t < 2$, positive for $t > 2$
- $v(t) = t^2 - 4t + 3$ is positive on $[0,1)$ and $(3,5]$, negative on $(1,3)$

So:
- On $(0,1)$: $v > 0$, $a < 0$ → opposite signs → **slowing down**
- On $(1,2)$: $v < 0$, $a < 0$ → same signs → **speeding up** (moving left faster)
- On $(2,3)$: $v < 0$, $a > 0$ → opposite signs → **slowing down** (moving left slower)
- On $(3,5)$: $v > 0$, $a > 0$ → same signs → **speeding up** (moving right faster)

---

## **Other Rates of Change in Applied Contexts**

Derivatives show up everywhere, not just in motion. Let's look at a few common contexts where rates of change are important.

#### **Economics: Marginal Analysis**

In economics, "marginal" means derivative. It tells you the effect of producing or selling one more unit.

**Key Functions:**

- **Cost function** $C(x)$: total cost to produce $x$ items
- **Marginal cost** $C'(x)$: approximate cost to produce one more item
- **Revenue function** $R(x)$: total revenue from selling $x$ items
- **Marginal revenue** $R'(x)$: approximate revenue from selling one more item
- **Profit function** $P(x) = R(x) - C(x)$: total profit
- **Marginal profit** $P'(x) = R'(x) - C'(x)$: approximate profit from selling one more item

**Example: Economics**

The cost to produce $x$ items is $C(x) = 0.01x^3 - 0.6x^2 + 13x$ dollars. Find the marginal cost at $x = 10$ and interpret.

- $C'(x) = 0.03x^2 - 1.2x + 13$
- $C'(10) = 0.03(100) - 12 + 13 = 3 - 12 + 13 = 4$

Interpretation: When producing 10 items, the cost is increasing at a rate of $4 per additional item. The approximate cost to produce the 11th item is $4.

#### **Physics: Electric Current**

Current is the rate of flow of charge—literally the derivative of charge with respect to time.

**Example: Physics**

The electrical charge $Q$ (in coulombs) flowing through a wire at time $t$ (seconds) is given by $Q(t) = t^3 - 2t^2 + 6t + 2$. Find the current when $t = 2$ seconds.

- Current: $I(t) = Q'(t) = 3t^2 - 4t + 6$
- $I(2) = 3(4) - 8 + 6 = 12 - 8 + 6 = 10$ amperes

Interpretation: At $t = 2$ seconds, the current is 10 amps.

#### **Geometry: Rates of Change in Shapes**

Sometimes we need to know how quickly a geometric quantity changes as we vary a dimension. This is a preview of related rates (Lesson 9).

**Example: Geometry**

The area of a circle is increasing at a constant rate of 10 square inches per second. How fast is the radius increasing when the radius is 3 inches?

- Relationship: $A = \pi r^2$
- Differentiate with respect to time $t$: $\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$
- Given: $\frac{dA}{dt} = 10$ in²/s, $r = 3$ in
- $10 = 2\pi (3) \frac{dr}{dt}$
- $\frac{dr}{dt} = \frac{10}{6\pi} = \frac{5}{3\pi}$ in/s

Interpretation: When the radius is 3 inches, it is increasing at $\frac{5}{3\pi}$ inches per second.


