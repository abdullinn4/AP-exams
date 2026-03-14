# C-Only Differential Equations

Welcome back! You've already learned the basics of differential equations in Unit 7—separable equations, sketching slope fields, and finding particular solutions. Now it's time for the BC-only extensions that take differential equations to the next level. We'll cover two major topics:

- **Euler's Method** – a numerical technique for approximating solutions when finding an exact solution is difficult or impossible.
- **Logistic Growth Models** – a more realistic population model that accounts for limited resources and a carrying capacity.

These topics appear exclusively on the BC exam, so pay close attention!

---

## **Euler's Method**

### The Problem

Sometimes we have a differential equation that's impossible to solve analytically (or just very messy). But we still might want to know approximate values of the solution at specific points. Euler's Method gives us a way to "walk along" the solution curve using the slope information from the differential equation.

### The Idea

Remember that a differential equation $\frac{dy}{dx} = f(x, y)$ tells us the slope at any point $(x, y)$. If we know one point on the solution curve $(x_0, y_0)$, we can use that slope to step forward a small distance $h$ in the $x$-direction and estimate the next $y$-value.

Think of it like this: if you're hiking on a mountain and you know the slope at your current location, you can take a small step in the $x$-direction and estimate your new elevation by assuming the slope stays constant over that tiny step.

### The Formula

Given:
- Differential equation: $\frac{dy}{dx} = f(x, y)$
- Initial condition: $(x_0, y_0)$
- Step size: $h$ (also called $\Delta x$)

The next point $(x_1, y_1)$ is approximated by:
$$x_1 = x_0 + h$$
$$y_1 = y_0 + h \cdot f(x_0, y_0)$$

Then repeat:
$$x_2 = x_1 + h$$
$$y_2 = y_1 + h \cdot f(x_1, y_1)$$

And so on.

### Step-by-Step Process

1. **Start** at the given initial point $(x_0, y_0)$.
2. **Compute the slope** at that point using $f(x_0, y_0)$.
3. **Step forward** in $x$ by $h$ to get $x_1 = x_0 + h$.
4. **Estimate $y_1$** using: $y_1 = y_0 + h \cdot (\text{slope at } (x_0, y_0))$.
5. **Repeat** using $(x_1, y_1)$ as your new point.

### Important Notes

- Euler's method is a **linear approximation**—it assumes the slope is constant over each step.
- The smaller the step size $h$, the more accurate the approximation (but the more steps you need).
- Errors can accumulate as you take more steps.
- On the BC exam, you'll typically be asked to perform one or two steps of Euler's method, not a full approximation to a distant point.

### Example 1: Basic Euler's Method

Consider the differential equation $\frac{dy}{dx} = x + y$ with initial condition $y(0) = 1$. Use Euler's method with step size $h = 0.2$ to approximate $y(0.4)$.

We want $y(0.4)$, so we need two steps: from $x=0$ to $x=0.2$, then from $x=0.2$ to $x=0.4$.

**Step 1:** Start at $(x_0, y_0) = (0, 1)$.
- Slope at $(0, 1)$: $f(0, 1) = 0 + 1 = 1$.
- $x_1 = 0 + 0.2 = 0.2$.
- $y_1 = 1 + 0.2 \cdot 1 = 1.2$.

So after one step, $(x_1, y_1) = (0.2, 1.2)$.

**Step 2:** Now at $(0.2, 1.2)$.
- Slope at $(0.2, 1.2)$: $f(0.2, 1.2) = 0.2 + 1.2 = 1.4$.
- $x_2 = 0.2 + 0.2 = 0.4$.
- $y_2 = 1.2 + 0.2 \cdot 1.4 = 1.2 + 0.28 = 1.48$.

Therefore, $y(0.4) \approx 1.48$.

### Example 2: Euler's Method with a Table

Sometimes you'll be given a table of values and asked to use Euler's method. The process is the same—just read the values from the table.

Given $\frac{dy}{dx} = 2xy$ and $y(0) = 3$, use Euler's method with $h = 0.1$ to approximate $y(0.3)$.

**Step 1:** $(0, 3)$, slope = $2(0)(3) = 0$.
- $x_1 = 0.1$, $y_1 = 3 + 0.1 \cdot 0 = 3.0$.

**Step 2:** $(0.1, 3.0)$, slope = $2(0.1)(3.0) = 0.6$.
- $x_2 = 0.2$, $y_2 = 3.0 + 0.1 \cdot 0.6 = 3.06$.

**Step 3:** $(0.2, 3.06)$, slope = $2(0.2)(3.06) = 1.224$.
- $x_3 = 0.3$, $y_3 = 3.06 + 0.1 \cdot 1.224 = 3.1824$.

So $y(0.3) \approx 3.1824$.

### Example 3: Interpreting Euler's Method in Context

A cup of coffee cools according to Newton's Law of Cooling: $\frac{dT}{dt} = -0.1(T - 70)$, where $T$ is temperature in °F and $t$ is in minutes. Initially, $T(0) = 180°F$. Use Euler's method with $\Delta t = 2$ minutes to estimate the temperature after 4 minutes.

**Step 1:** $(t_0, T_0) = (0, 180)$.
- Slope = $-0.1(180 - 70) = -0.1(110) = -11$ °F/min.
- $t_1 = 2$, $T_1 = 180 + 2 \cdot (-11) = 180 - 22 = 158$.

**Step 2:** $(2, 158)$.
- Slope = $-0.1(158 - 70) = -0.1(88) = -8.8$ °F/min.
- $t_2 = 4$, $T_2 = 158 + 2 \cdot (-8.8) = 158 - 17.6 = 140.4$.

So after 4 minutes, the temperature is approximately $140.4°F$.

### Calculator Note

On the BC exam, you might be asked to set up Euler's method but not necessarily compute all the arithmetic by hand—especially if the step size is very small. You can use your calculator to perform the iterations, but you must show the setup (the formula and the first step or two) to earn credit.

---

## **Logistic Growth Models**

### Why Logistic Growth?

Remember exponential growth? It assumes unlimited resources—populations grow faster and faster without bound. That's not realistic. In reality, populations are limited by resources, space, competition, etc. The logistic growth model introduces a **carrying capacity**—the maximum population the environment can sustain.

### The Logistic Differential Equation

The logistic growth model arises from the statement:

> "The rate of change of a quantity is jointly proportional to the size of the quantity and the difference between the quantity and the carrying capacity."

In symbols:
$$\frac{dy}{dt} = -ky(a - y)$$

Where:
- $y$ is the quantity (often population) at time $t$.
- $a$ is the **carrying capacity** (the limiting value).
- $k > 0$ is a constant.

Sometimes it's written as $\frac{dy}{dt} = ky(a - y)$ with a positive $k$, depending on how the sign is handled. Be careful—check your textbook's convention. The College Board often uses $\frac{dy}{dt} = ky(1 - \frac{y}{L})$ or $\frac{dy}{dt} = ky\left(1 - \frac{y}{M}\right)$, where $L$ or $M$ is the carrying capacity. We'll use:
$$\frac{dy}{dt} = ky\left(1 - \frac{y}{M}\right)$$
where $M$ is the carrying capacity and $k > 0$.

### Key Features Without Solving

You don't always need the explicit solution to understand logistic growth. The differential equation itself tells you a lot:

**1. Equilibrium Solutions:** Set $\frac{dy}{dt} = 0$.
- $y = 0$ (extinction)
- $y = M$ (carrying capacity)

These are constant solutions. If the population starts at 0, it stays at 0. If it starts at $M$, it stays at $M$.

**2. Growth Behavior:**
- If $0 < y < M$, then $\frac{dy}{dt} > 0$ (population increases).
- If $y > M$, then $\frac{dy}{dt} < 0$ (population decreases toward $M$).
- If $y < 0$ (not usually meaningful in population models), but mathematically, if $y$ is between 0 and $M$, growth is positive.

**3. Maximum Growth Rate:** The population grows fastest when $\frac{dy}{dt}$ is maximized. Since $\frac{dy}{dt}$ is a quadratic in $y$ (opening downward), its maximum occurs at the vertex:
$$y = \frac{M}{2}$$

So the population increases most rapidly when it reaches **half the carrying capacity**.

**4. Long-Term Behavior:** As $t \to \infty$, $y \to M$ (assuming we start with $0 < y < M$). The carrying capacity is the limiting value.

### The Solution (For Reference)

The logistic differential equation can be solved using separation of parts (partial fractions!). The solution is:
$$y(t) = \frac{M}{1 + Ce^{-kt}}$$
where $C$ is determined by the initial condition. You don't need to memorize this for the BC exam, but it's helpful to recognize the shape—it's an S-shaped curve (sigmoid) that starts near 0, increases slowly at first, then rapidly through the middle, then levels off at $M$.

### Example 4: Interpreting a Logistic Model

A population of fish in a lake grows according to the logistic model $\frac{dP}{dt} = 0.02P\left(1 - \frac{P}{5000}\right)$, where $t$ is in years.

(a) What is the carrying capacity?
- From the equation, $M = 5000$ fish.

(b) What is the maximum growth rate of the population, and when does it occur?
- Maximum growth rate occurs at $P = M/2 = 2500$ fish.
- To find the actual maximum rate, plug $P = 2500$ into the differential equation:
  $$\frac{dP}{dt} = 0.02(2500)\left(1 - \frac{2500}{5000}\right) = 0.02(2500)(1 - 0.5) = 0.02(2500)(0.5) = 0.01(2500) = 25$$
  So the maximum growth rate is 25 fish per year.

(c) If initially there are 1000 fish, what happens to the population in the long run?
- As $t \to \infty$, $P \to 5000$. The population approaches the carrying capacity.

(d) Is the population increasing or decreasing when $P = 4000$?
- At $P = 4000$, $1 - \frac{4000}{5000} = 1 - 0.8 = 0.2 > 0$, so $\frac{dP}{dt} > 0$. The population is still increasing, but more slowly than at $P = 2500$.

### Example 5: Point of Fastest Growth

For a logistic differential equation $\frac{dy}{dt} = 0.3y(100 - y)$, find the value of $y$ at which $y$ is increasing most rapidly.

First, rewrite in standard form:
$$\frac{dy}{dt} = 0.3y(100 - y) = 30y\left(1 - \frac{y}{100}\right)$$
So carrying capacity $M = 100$.

The fastest growth occurs at $y = M/2 = 50$.

### Example 6: Interpreting Initial Conditions

A population $P(t)$ satisfies $\frac{dP}{dt} = 0.4P\left(1 - \frac{P}{200}\right)$ and $P(0) = 50$.

(a) Is the population growing faster at $t=0$ or when $P = 100$?
- At $t=0$, $P=50$: $\frac{dP}{dt} = 0.4(50)(1 - 50/200) = 20(1 - 0.25) = 20(0.75) = 15$.
- At $P=100$: $\frac{dP}{dt} = 0.4(100)(1 - 100/200) = 40(1 - 0.5) = 40(0.5) = 20$.
- So growth rate is higher at $P=100$ (20 > 15). Actually, the maximum is at $P=100$? Wait, $M/2 = 100$, so yes, that's the maximum rate. So it's growing faster at $P=100$ than at $P=50$.

(b) What is $\lim_{t \to \infty} P(t)$?
- Carrying capacity is 200, so $\lim_{t \to \infty} P(t) = 200$.

### Example 7: Logistic Model with Given Solution Form

Sometimes you're given the solution and asked to interpret. Suppose the size of a yeast culture is modeled by $P(t) = \frac{1000}{1 + 9e^{-0.5t}}$, where $t$ is in hours.

(a) What is the carrying capacity?
- As $t \to \infty$, $e^{-0.5t} \to 0$, so $P(t) \to \frac{1000}{1} = 1000$. Carrying capacity = 1000.

(b) What is the initial population?
- $P(0) = \frac{1000}{1 + 9e^0} = \frac{1000}{1 + 9} = \frac{1000}{10} = 100$.

(c) When is the population growing fastest?
- Fastest growth occurs at half the carrying capacity: $P = 500$.
- Solve $\frac{1000}{1 + 9e^{-0.5t}} = 500 \Rightarrow 1000 = 500(1 + 9e^{-0.5t}) \Rightarrow 2 = 1 + 9e^{-0.5t} \Rightarrow 1 = 9e^{-0.5t} \Rightarrow e^{-0.5t} = \frac{1}{9} \Rightarrow -0.5t = \ln(1/9) = -\ln 9 \Rightarrow t = 2\ln 9 \approx 4.39$ hours.

---

## Summary

### Euler's Method

- Used to approximate solutions to differential equations when exact solutions are hard to find.
- Formula: $x_{n+1} = x_n + h$, $y_{n+1} = y_n + h \cdot f(x_n, y_n)$.
- Start from the initial condition and step forward.
- Smaller step size $h$ gives better accuracy but more steps.
- On the BC exam, you'll typically do 1–2 steps.

### Logistic Growth Model

- Differential equation: $\frac{dy}{dt} = ky\left(1 - \frac{y}{M}\right)$, where $M$ is the carrying capacity.
- Equilibrium solutions: $y = 0$ and $y = M$.
- Population increases if $0 < y < M$, decreases if $y > M$.
- Maximum growth rate occurs at $y = M/2$ (half the carrying capacity).
- As $t \to \infty$, $y \to M$ (provided initial $y > 0$).
- Solution form: $y(t) = \frac{M}{1 + Ce^{-kt}}$ (for reference—you don't need to memorize, but it helps to recognize).

### Key Interpretations

| Feature | Meaning |
|---------|---------|
| Carrying capacity $M$ | Limiting value as $t \to \infty$ |
| $y = M/2$ | Population when growth rate is maximum |
| $\frac{dy}{dt} = 0$ at $y=0$ and $y=M$ | Equilibrium solutions |
| Sign of $\frac{dy}{dt}$ | Increasing or decreasing |

---

### Additional BC-Only Practice Problems

1. Given $\frac{dy}{dx} = 2x - y$ and $y(0) = 3$, use Euler's method with $h = 0.2$ to approximate $y(0.4)$.
2. A population $P(t)$ satisfies $\frac{dP}{dt} = 0.05P(2000 - P)$. Find the carrying capacity and the population at which growth is fastest.
3. For the differential equation $\frac{dy}{dt} = 0.02y(500 - y)$ with $y(0) = 100$, determine whether $y$ is increasing or decreasing at $t=0$, and find $\lim_{t \to \infty} y(t)$.
4. Use Euler's method with $h = 0.1$ to approximate $y(0.3)$ for $\frac{dy}{dx} = xy$, $y(0) = 1$.
5. A logistic growth model has carrying capacity 800 and maximum growth rate of 32 per year. Find the value of $k$ in the differential equation $\frac{dy}{dt} = ky\left(1 - \frac{y}{800}\right)$.
6. The number of students who have heard a rumor in a school of 2000 students is given by $S(t) = \frac{2000}{1 + 199e^{-0.3t}}$. Find the initial number who knew the rumor, the carrying capacity, and when the rumor is spreading fastest.
7. Given $\frac{dy}{dx} = \sqrt{x + y}$ and $y(0) = 1$, use one step of Euler's method with $h = 0.5$ to estimate $y(0.5)$.
8. For the logistic equation $\frac{dP}{dt} = 0.1P(10 - P)$, find the range of $P$ for which the population is increasing.

---

### Selected Solutions

1. **$\frac{dy}{dx} = 2x - y$, $y(0)=3$, $h=0.2$, approximate $y(0.4)$**
   - Step 1: $(0,3)$, slope = $2(0)-3 = -3$, $x_1=0.2$, $y_1=3 + 0.2(-3) = 3 - 0.6 = 2.4$.
   - Step 2: $(0.2, 2.4)$, slope = $2(0.2)-2.4 = 0.4 - 2.4 = -2.0$, $x_2=0.4$, $y_2=2.4 + 0.2(-2.0) = 2.4 - 0.4 = 2.0$.
   - So $y(0.4) \approx 2.0$.

2. **$\frac{dP}{dt} = 0.05P(2000 - P)$**
   - Carrying capacity: when $2000 - P = 0$, $M = 2000$.
   - Fastest growth at $P = M/2 = 1000$.

3. **$\frac{dy}{dt} = 0.02y(500 - y)$, $y(0)=100$**
   - At $t=0$, $y=100$, $500-y=400>0$, so $\frac{dy}{dt}>0$ → increasing.
   - As $t \to \infty$, $y \to 500$ (carrying capacity).

4. **$\frac{dy}{dx} = xy$, $y(0)=1$, $h=0.1$, approximate $y(0.3)$**
   - Step 1: $(0,1)$, slope = $0\cdot1 = 0$, $x_1=0.1$, $y_1=1$.
   - Step 2: $(0.1, 1)$, slope = $0.1\cdot1 = 0.1$, $x_2=0.2$, $y_2=1 + 0.1(0.1) = 1.01$.
   - Step 3: $(0.2, 1.01)$, slope = $0.2\cdot1.01 = 0.202$, $x_3=0.3$, $y_3=1.01 + 0.1(0.202) = 1.01 + 0.0202 = 1.0302$.
   - So $y(0.3) \approx 1.0302$.

5. **Logistic model: $M=800$, max growth rate = 32 at $P=400$**
   - Max rate: $\frac{dy}{dt}\big|_{P=400} = k\cdot400\left(1 - \frac{400}{800}\right) = k\cdot400(0.5) = 200k$.
   - Set $200k = 32$, so $k = 32/200 = 0.16$.

6. **$S(t) = \frac{2000}{1 + 199e^{-0.3t}}$**
   - Initial: $S(0) = \frac{2000}{1+199} = \frac{2000}{200} = 10$ students.
   - Carrying capacity: 2000 students.
   - Fastest spread at half capacity: $S = 1000$.
     Solve $\frac{2000}{1+199e^{-0.3t}} = 1000 \Rightarrow 2 = 1+199e^{-0.3t} \Rightarrow 1 = 199e^{-0.3t} \Rightarrow e^{-0.3t} = \frac{1}{199} \Rightarrow -0.3t = -\ln 199 \Rightarrow t = \frac{\ln 199}{0.3} \approx \frac{5.293}{0.3} \approx 17.64$ hours.

7. **$\frac{dy}{dx} = \sqrt{x + y}$, $y(0)=1$, one step $h=0.5$**
   - At $(0,1)$, slope = $\sqrt{0+1} = 1$.
   - $x_1 = 0.5$, $y_1 = 1 + 0.5(1) = 1.5$.
   - So $y(0.5) \approx 1.5$.

8. **$\frac{dP}{dt} = 0.1P(10 - P)$**
   - Population increases when $\frac{dP}{dt} > 0$.
   - $0.1P(10-P) > 0 \Rightarrow P(10-P) > 0$.
   - Solve: $0 < P < 10$.
   - So population increases for $0 < P < 10$.

---

You've now added two powerful BC-only tools to your differential equations toolkit. Euler's method lets you approximate solutions numerically, and logistic models give you a realistic way to model growth with limits. These concepts will appear on the BC exam, so practice interpreting them in context!