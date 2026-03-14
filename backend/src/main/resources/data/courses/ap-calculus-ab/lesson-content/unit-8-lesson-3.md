# Accumulation and Average Value

We've spent a lot of time learning how to compute definite integrals—finding areas under curves, volumes of solids, and so on. But integrals are more than just geometric tools. They're fundamentally about **accumulation**. 

If you have a rate of change—like the speed of a car, the rate water flows into a tank, or the rate at which a population grows—the integral tells you how much total change happens over time.

This lesson brings together three big ideas:
- **Average value:** What's the typical value of a function over an interval?
- **Net change:** How much does a quantity actually change from start to finish?
- **Rectilinear motion:** Using integrals to go from acceleration to velocity to position, and distinguishing between displacement and total distance traveled.

Let's tie it all together.

---

## **Average Value of a Function**

You know how to find the average of a list of numbers: add them up and divide by how many there are. But what about the average value of a continuous function over an interval? There are infinitely many points—we can't add them up individually. But we can integrate.

### **Definition:**

The **average value** of a continuous function $f(x)$ over the interval $[a, b]$ is given by:

$$f_{\text{avg}} = \frac{1}{b-a} \int_{a}^{b} f(x) \, dx$$

**Why does this formula make sense?**

Think of the definite integral $\int_a^b f(x) \, dx$ as the total "accumulated" value of $f$ over the interval. If you wanted to replace $f$ with a constant function that has the same total accumulation over $[a, b]$, that constant would have to be $f_{\text{avg}}$. In other words:

$$\int_a^b f_{\text{avg}} \, dx = f_{\text{avg}} \cdot (b-a) = \int_a^b f(x) \, dx$$

So the average value is the height of a rectangle whose base is $[a, b]$ and whose area equals the area under the curve.

**Interpretations:**

- **Geometric:** The average value is the height of a rectangle with the same area as the region under the curve.
- **Physical:** If $f(t)$ represents a rate (like velocity in m/s), then the average value is the **average rate** over the time interval.
- **Statistical:** If $f(x)$ represents a quantity (like temperature), the average value is the **mean value** of that quantity over the interval.

**Mean Value Theorem for Integrals:**

If $f$ is continuous on $[a, b]$, then there exists at least one number $c$ in $[a, b]$ such that:

$$f(c) = f_{\text{avg}} = \frac{1}{b-a} \int_{a}^{b} f(x) \, dx$$

In other words, the function actually attains its average value at some point in the interval. This makes intuitive sense—if you're driving at an average speed of 50 mph over a trip, at some moment your speedometer must have read exactly 50 mph.

**Step-by-Step:**

1. Compute the definite integral $\int_a^b f(x) \, dx$.
2. Divide by the length of the interval, $b-a$.
3. The result is a single number—the average height of the function.

**Example 1: Basic Average Value**

Find the average value of $f(x) = x^2$ on $[0, 3]$.

- Compute the integral: $\int_0^3 x^2 \, dx = \left[ \frac{x^3}{3} \right]_0^3 = \frac{27}{3} = 9$.
- Length of interval: $3 - 0 = 3$.
- Average value: $f_{\text{avg}} = \frac{1}{3} \cdot 9 = 3$.

Interpretation: A rectangle of width 3 and height 3 has the same area (9) as the region under $y=x^2$ from 0 to 3.

**Example 2: Trigonometric Function**

Find the average value of $f(x) = \sin x$ on $[0, \pi]$.

- $\int_0^\pi \sin x \, dx = \left[ -\cos x \right]_0^\pi = (-\cos\pi) - (-\cos 0) = (-(-1)) - (-1) = 1 + 1 = 2$.
- Length: $\pi - 0 = \pi$.
- Average: $f_{\text{avg}} = \frac{2}{\pi} \approx 0.6366$.

**Example 3: Applied Context (Temperature)**

The temperature (in °F) in a room is modeled by $T(t) = 68 + 4\sin\left(\frac{\pi t}{12}\right)$ for $0 \le t \le 24$ hours. Find the average temperature over the first 6 hours.

- We need $\frac{1}{6-0} \int_0^6 \left[ 68 + 4\sin\left(\frac{\pi t}{12}\right) \right] dt$.
- First, $\int_0^6 68 \, dt = 68 \cdot 6 = 408$.
- For the sine part, do a substitution: let $u = \frac{\pi t}{12}$, so $du = \frac{\pi}{12} dt$, and $dt = \frac{12}{\pi} du$. When $t=0$, $u=0$; when $t=6$, $u = \frac{\pi}{2}$.
  $$\int_0^6 4\sin\left(\frac{\pi t}{12}\right) dt = 4 \int_0^{\pi/2} \sin u \cdot \frac{12}{\pi} du = \frac{48}{\pi} \int_0^{\pi/2} \sin u \, du = \frac{48}{\pi} \left[ -\cos u \right]_0^{\pi/2} = \frac{48}{\pi} (0 - (-1)) = \frac{48}{\pi}.$$
- Total integral: $408 + \frac{48}{\pi}$.
- Average: $\frac{1}{6} \left( 408 + \frac{48}{\pi} \right) = 68 + \frac{8}{\pi} \approx 68 + 2.546 = 70.546^\circ\text{F}$.

So the average temperature during the first 6 hours is about 70.5°F.

---

## **Net Change and Accumulation**

This is the heart of what integrals do: they accumulate change. If you know how fast something is changing, integrating that rate tells you how much total change occurred.

### **Definition:**

If a quantity changes at a rate given by $f(t)$ (with respect to time $t$), then the **net change** in the quantity from time $t = a$ to $t = b$ is:

$$\text{Net Change} = \int_{a}^{b} f(t) \, dt$$

This is a direct consequence of the Fundamental Theorem of Calculus: if $F$ is an antiderivative of $f$, then $F(b) - F(a) = \int_a^b f(t) \, dt$.

**Accumulation Functions:**

A function defined by an integral represents the accumulation of a rate. If we define

$$F(x) = \int_{a}^{x} f(t) \, dt$$

then:
- $F(x)$ gives the net accumulation of $f$ from $a$ to $x$.
- By the Fundamental Theorem, $F'(x) = f(x)$—the derivative of an accumulation function is the original rate.

**Important:** The net change can be positive, negative, or zero. It represents the overall change from start to finish, not the total amount added (if some is removed along the way). For total accumulation where everything adds up, we'd need to integrate the absolute value or handle sign carefully.

**Example 4: Water Flow**

Water is pumped into a tank at a rate of $R(t) = 50 - 2t$ gallons per minute for $0 \le t \le 25$ minutes. Find the net change in the volume of water from $t=0$ to $t=10$.

- Net change = $\int_0^{10} (50 - 2t) \, dt = \left[ 50t - t^2 \right]_0^{10} = (500 - 100) - 0 = 400$ gallons.
- Interpretation: The tank gains 400 gallons of water during the first 10 minutes.

**Example 5: Population Growth**

A population of bacteria grows at a rate of $P'(t) = 200 e^{0.1t}$ bacteria per hour. If the initial population is 500, find the population after 5 hours.

- Net change in population from $t=0$ to $t=5$: $\int_0^5 200 e^{0.1t} \, dt$.
- Compute: $\int 200 e^{0.1t} dt = 200 \cdot \frac{e^{0.1t}}{0.1} + C = 2000 e^{0.1t} + C$.
- So $\int_0^5 200 e^{0.1t} dt = \left[ 2000 e^{0.1t} \right]_0^5 = 2000 e^{0.5} - 2000 e^0 = 2000(e^{0.5} - 1)$.
- Population at $t=5$: Initial + Net change = $500 + 2000(e^{0.5} - 1) = 500 + 2000e^{0.5} - 2000 = 2000e^{0.5} - 1500$.
- Using $e^{0.5} \approx 1.6487$, this is $2000(1.6487) - 1500 = 3297.4 - 1500 = 1797.4$ bacteria.

**Example 6: Amusement Park Entry**

The rate at which people enter an amusement park on a given day is modeled by $E(t) = 4000 - 100t$ people per hour for $0 \le t \le 10$. At $t=0$, there are 500 people in the park. How many people are in the park at $t=6$?

- Net change in number of people from $t=0$ to $t=6$: $\int_0^6 (4000 - 100t) \, dt = \left[ 4000t - 50t^2 \right]_0^6 = 24000 - 1800 = 22200$.
- Starting with 500, the total at $t=6$ is $500 + 22200 = 22700$ people.

---

## **Rectilinear Motion (Position, Velocity, Acceleration)**

We've seen derivatives connect position, velocity, and acceleration. Integrals reverse that process. This is where accumulation really comes to life.

**Key Relationships:**

- **Velocity** $v(t)$ is the derivative of **position** $s(t)$: $v(t) = s'(t)$.
- **Acceleration** $a(t)$ is the derivative of velocity: $a(t) = v'(t)$.
- Going backward:
    - **Displacement** (net change in position) from $t=a$ to $t=b$:
      $$\int_a^b v(t) \, dt = s(b) - s(a)$$
    - **Total distance traveled** from $t=a$ to $t=b$:
      $$\int_a^b |v(t)| \, dt$$
    - **Net change in velocity** from $t=a$ to $t=b$:
      $$\int_a^b a(t) \, dt = v(b) - v(a)$$

**Displacement vs. Total Distance:**

- **Displacement** is the net change in position. If you go forward 10 meters and then back 10 meters, your displacement is 0. It's the integral of velocity.
- **Total distance** is how much ground you actually covered—always non-negative. It's the integral of **speed**, which is $|v(t)|$.

**How to find total distance:**

1. Find where $v(t) = 0$ on the interval $[a, b]$. These are the times when the particle changes direction.
2. Split the interval at these points.
3. On each subinterval, determine the sign of $v(t)$.
4. Integrate $v(t)$ where it's positive, and integrate $-v(t)$ where it's negative.
5. Add up the absolute values.

**Example 7: Displacement and Total Distance**

A particle moves along a line with velocity $v(t) = t^2 - 4$ for $0 \le t \le 5$. Find (a) the displacement and (b) the total distance traveled.

- **(a) Displacement:** 
  $$\int_0^5 (t^2 - 4) \, dt = \left[ \frac{t^3}{3} - 4t \right]_0^5 = \left( \frac{125}{3} - 20 \right) - 0 = \frac{125}{3} - \frac{60}{3} = \frac{65}{3} \approx 21.67.$$
  So the particle ends up about 21.67 units to the right of where it started.

- **(b) Total Distance:** First find when $v(t)=0$:
  $$t^2 - 4 = 0 \Rightarrow t = 2 \quad (\text{only } t=2 \text{ in } [0,5]).$$
  Now split the interval at $t=2$:
    - On $[0,2]$: test $t=1$, $v(1) = 1-4 = -3$, so $v(t) \le 0$. Distance = $\int_0^2 |v(t)| \, dt = \int_0^2 (4 - t^2) \, dt = \left[ 4t - \frac{t^3}{3} \right]_0^2 = 8 - \frac{8}{3} = \frac{16}{3}$.
    - On $[2,5]$: test $t=3$, $v(3) = 9-4 = 5$, so $v(t) \ge 0$. Distance = $\int_2^5 (t^2 - 4) \, dt = \left[ \frac{t^3}{3} - 4t \right]_2^5$.
      At $t=5$: $\frac{125}{3} - 20 = \frac{125}{3} - \frac{60}{3} = \frac{65}{3}$.
      At $t=2$: $\frac{8}{3} - 8 = \frac{8}{3} - \frac{24}{3} = -\frac{16}{3}$.
      So the integral = $\frac{65}{3} - \left(-\frac{16}{3}\right) = \frac{81}{3} = 27$.
  Total distance = $\frac{16}{3} + 27 = \frac{16}{3} + \frac{81}{3} = \frac{97}{3} \approx 32.33$.

Notice the displacement was about 21.67, but the particle actually traveled about 32.33 units—it went backward for a while, then forward past its starting point.

**Example 8: From Acceleration to Position**

A particle moves along the x-axis with acceleration $a(t) = 2t + 1$ (in m/s²). At $t=0$, its velocity is $-4$ m/s and its position is 10 m. Find the position function $s(t)$.

- First, find velocity by integrating acceleration:
  $$v(t) = \int a(t) \, dt = \int (2t+1) \, dt = t^2 + t + C.$$
  Use $v(0) = -4$: $0 + 0 + C = -4 \Rightarrow C = -4$.
  So $v(t) = t^2 + t - 4$.

- Next, find position by integrating velocity:
  $$s(t) = \int v(t) \, dt = \int (t^2 + t - 4) \, dt = \frac{t^3}{3} + \frac{t^2}{2} - 4t + D.$$
  Use $s(0) = 10$: $0 + 0 - 0 + D = 10 \Rightarrow D = 10$.

- Therefore,
  $$s(t) = \frac{t^3}{3} + \frac{t^2}{2} - 4t + 10.$$

**Example 9: Total Distance with Trigonometric Velocity**

A particle moves along a line with velocity $v(t) = \sin t$ (in m/s). Find the total distance traveled from $t=0$ to $t=2\pi$.

- Find where $v(t)=0$ on $[0, 2\pi]$: $\sin t = 0$ at $t = 0, \pi, 2\pi$.
- Split into intervals: $[0, \pi]$ and $[\pi, 2\pi]$.
    - On $[0, \pi]$, $\sin t \ge 0$. Distance = $\int_0^\pi \sin t \, dt = \left[ -\cos t \right]_0^\pi = (-\cos\pi) - (-\cos 0) = (-(-1)) - (-1) = 1 + 1 = 2$.
    - On $[\pi, 2\pi]$, $\sin t \le 0$. Distance = $\int_\pi^{2\pi} (-\sin t) \, dt = \left[ \cos t \right]_\pi^{2\pi} = \cos 2\pi - \cos \pi = 1 - (-1) = 2$.
- Total distance = $2 + 2 = 4$ meters.

---

### Summary

**Key Formulas:**

| Concept | Formula |
|---------|---------|
| **Average Value** | $\displaystyle f_{\text{avg}} = \frac{1}{b-a} \int_a^b f(x) \, dx$ |
| **Net Change** | $\displaystyle \int_a^b f'(t) \, dt = f(b) - f(a)$ |
| **Displacement** | $\displaystyle \int_a^b v(t) \, dt = s(b) - s(a)$ |
| **Total Distance** | $\displaystyle \int_a^b |v(t)| \, dt$ |
| **Velocity from Acceleration** | $\displaystyle v(t) = \int a(t) \, dt + v_0$ |
| **Position from Velocity** | $\displaystyle s(t) = \int v(t) \, dt + s_0$ |

**Interpretations:**

- The definite integral of a **rate** gives the **net accumulation** of the quantity.
- The **average value** is the constant that would give the same total accumulation over the interval.
- **Displacement** is net change in position; **total distance** is the integral of speed.

**Common Pitfalls:**

- Confusing displacement with total distance—remember to use $|v(t)|$ for distance.
- Forgetting to divide by $b-a$ when computing average value.
- For accumulation problems, forgetting to add the initial value when finding the final amount.
- When finding total distance, not identifying all places where $v(t)=0$ in the interval.

---

### Additional Practice Problems

1. Find the average value of $f(x) = 3x^2 - 2x + 5$ on $[1, 4]$.
2. Find the average value of $f(x) = \cos x$ on $[0, \frac{\pi}{2}]$.
3. The rate of consumption of oil in a country (in billions of barrels per year) is given by $C'(t) = 1.2e^{0.04t}$, where $t=0$ corresponds to the year 2020. Find the total oil consumption from 2020 to 2025.
4. A particle moves with velocity $v(t) = 3t^2 - 12t + 9$ for $0 \le t \le 4$. Find (a) the displacement and (b) the total distance traveled.
5. The number of gallons of water in a tank $t$ minutes after a valve is opened is given by $W(t) = 100(1 - e^{-0.1t})$. Find the average number of gallons in the tank during the first 10 minutes.
6. The acceleration of a car is $a(t) = 6t$ ft/s². If the initial velocity is 10 ft/s and the initial position is 0 ft, find the position function $s(t)$.
7. The rate of change of the population of a city is modeled by $P'(t) = 5000 + 300t$ people per year, where $t$ is years after 2000. If the population in 2000 was 100,000, what is the population in 2010?
8. Find the average value of $f(x) = \frac{1}{x}$ on $[1, e]$.
9. A particle moves along a line so that its velocity at time $t$ is $v(t) = \sin t$ (in m/s). Find the total distance traveled from $t=0$ to $t=2\pi$.
10. The temperature in a room is given by $T(x) = 70 + 10\cos\left(\frac{\pi x}{12}\right)$ for $0 \le x \le 24$ (hours after midnight). Find the average temperature between 6 AM and 6 PM.

---

### Selected Solutions

1. **Average value:** $\int_1^4 (3x^2 - 2x + 5) dx = \left[ x^3 - x^2 + 5x \right]_1^4 = (64-16+20) - (1-1+5) = 68 - 5 = 63$. Length: $4-1=3$. Average: $\frac{63}{3}=21$.

2. **Average value:** $\int_0^{\pi/2} \cos x dx = \left[ \sin x \right]_0^{\pi/2} = 1 - 0 = 1$. Length: $\frac{\pi}{2}$. Average: $\frac{1}{\pi/2} = \frac{2}{\pi} \approx 0.6366$.

3. **Total oil consumption:** $\int_0^5 1.2 e^{0.04t} dt = 1.2 \left[ \frac{e^{0.04t}}{0.04} \right]_0^5 = 30 \left( e^{0.2} - 1 \right) \approx 30(1.2214 - 1) = 30(0.2214) = 6.642$ billion barrels.

4. **Velocity:** $v(t)=3t^2-12t+9 = 3(t^2-4t+3) = 3(t-1)(t-3)$.
    - **(a) Displacement:** $\int_0^4 v(t) dt = \left[ t^3 - 6t^2 + 9t \right]_0^4 = (64 - 96 + 36) - 0 = 4$.
    - **(b) Total Distance:** $v(t)=0$ at $t=1, 3$.
        On $[0,1]$: $v(t) \ge 0$ (test $t=0.5$: positive). Distance = $\int_0^1 v(t) dt = \left[ t^3 - 6t^2 + 9t \right]_0^1 = 1-6+9=4$.
        On $[1,3]$: $v(t) \le 0$ (test $t=2$: negative). Distance = $\int_1^3 -v(t) dt = -\int_1^3 v(t) dt = -\left[ t^3 - 6t^2 + 9t \right]_1^3 = -[ (27-54+27) - (1-6+9) ] = -[0 - 4] = 4$.
        On $[3,4]$: $v(t) \ge 0$ (test $t=3.5$: positive). Distance = $\int_3^4 v(t) dt = \left[ t^3 - 6t^2 + 9t \right]_3^4 = (64-96+36) - (27-54+27) = 4 - 6 = -2$, but we take absolute value: 2.
        Total distance = $4 + 4 + 2 = 10$.

5. **Average gallons:** Average = $\frac{1}{10-0} \int_0^{10} 100(1 - e^{-0.1t}) dt = 10 \int_0^{10} (1 - e^{-0.1t}) dt$.
    $\int_0^{10} 1 dt = 10$. For the other part: $\int_0^{10} e^{-0.1t} dt = \left[ \frac{e^{-0.1t}}{-0.1} \right]_0^{10} = -10 (e^{-1} - 1) = 10(1 - e^{-1})$.
    So $\int_0^{10} (1 - e^{-0.1t}) dt = 10 - 10(1 - e^{-1}) = 10e^{-1}$.
    Average = $10 \cdot 10e^{-1} = 100e^{-1} \approx 36.79$ gallons.

6. **Position from acceleration:**
    - $v(t) = \int a(t) dt = \int 6t dt = 3t^2 + C$. $v(0)=10 \Rightarrow C=10$, so $v(t)=3t^2+10$.
    - $s(t) = \int v(t) dt = \int (3t^2+10) dt = t^3 + 10t + D$. $s(0)=0 \Rightarrow D=0$, so $s(t)=t^3+10t$.

7. **Population in 2010:** Net change from $t=0$ (2000) to $t=10$ (2010): $\int_0^{10} (5000+300t) dt = \left[ 5000t + 150t^2 \right]_0^{10} = 50000 + 15000 = 65000$.
    Population in 2010 = 100,000 + 65,000 = 165,000.

8. **Average value of $1/x$ on $[1,e]$:** $\int_1^e \frac{1}{x} dx = \left[ \ln x \right]_1^e = 1 - 0 = 1$. Length: $e-1$. Average: $\frac{1}{e-1}$.

9. **Total distance with $\sin t$:** $v(t)=\sin t$. On $[0,2\pi]$, zeros at $t=0, \pi, 2\pi$.
    - On $[0,\pi]$: $\sin t \ge 0$. Distance = $\int_0^\pi \sin t dt = \left[ -\cos t \right]_0^\pi = (1) - (-1) = 2$.
    - On $[\pi,2\pi]$: $\sin t \le 0$. Distance = $\int_\pi^{2\pi} (-\sin t) dt = \left[ \cos t \right]_\pi^{2\pi} = (1) - (-1) = 2$.
    Total distance = 4.

10. **Average temperature from 6 AM to 6 PM:** 6 AM corresponds to $x=6$, 6 PM to $x=18$.
    Average = $\frac{1}{18-6} \int_6^{18} \left[ 70 + 10\cos\left(\frac{\pi x}{12}\right) \right] dx$.
    $\int_6^{18} 70 dx = 70 \cdot 12 = 840$.
    For the cosine part: $\int_6^{18} 10\cos\left(\frac{\pi x}{12}\right) dx$. Let $u = \frac{\pi x}{12}$, $du = \frac{\pi}{12} dx$, $dx = \frac{12}{\pi} du$. When $x=6$, $u=\pi/2$; when $x=18$, $u=3\pi/2$.
    $\int 10\cos u \cdot \frac{12}{\pi} du = \frac{120}{\pi} \int \cos u du = \frac{120}{\pi} \sin u + C$.
    So from $\pi/2$ to $3\pi/2$: $\frac{120}{\pi} (\sin(3\pi/2) - \sin(\pi/2)) = \frac{120}{\pi} (-1 - 1) = -\frac{240}{\pi}$.
    Total integral = $840 - \frac{240}{\pi}$.
    Average = $\frac{1}{12} \left( 840 - \frac{240}{\pi} \right) = 70 - \frac{20}{\pi} \approx 70 - 6.366 = 63.634^\circ$.


This lesson ties together the big ideas of integration: accumulation, average value, and motion.These concepts appear throughout the AP exam, often in context-based problems.

The key is to remember that **integrals accumulate rates**—whether that rate is velocity, population growth, or water flow. And when you need the average, just divide by the interval length. Practice these until the connections feel natural.

You've now covered all the major topics in AP Calculus AB — congratulations!