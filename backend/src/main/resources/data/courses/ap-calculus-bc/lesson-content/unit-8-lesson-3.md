# **Lesson 21: Accumulation and Average Value**

### **21.1 Average Value of a Function**

**Definition:**
The **average value** of a continuous function $f(x)$ over the interval $[a, b]$ is given by:
$$f_{\text{avg}} = \frac{1}{b-a} \int_{a}^{b} f(x) \, dx$$

**Interpretation:**

- Geometrically, the average value is the height of a rectangle whose base is $[a, b]$ and whose area equals the area under the curve $y = f(x)$ from $a$ to $b$.
- If $f(x)$ represents a rate (e.g., velocity, gallons per minute), then the average value is the **average rate** over the interval.
- If $f(x)$ represents a quantity (e.g., temperature, concentration), then the average value is the **mean value** of that quantity over the interval.

**Mean Value Theorem for Integrals:**
If $f$ is continuous on $[a, b]$, then there exists at least one number $c$ in $[a, b]$ such that:
$$f(c) = f_{\text{avg}} = \frac{1}{b-a} \int_{a}^{b} f(x) \, dx$$
This means that the function attains its average value at some point in the interval.

**Comments & Instructions:**

1. Compute the definite integral $\int_{a}^{b} f(x) \, dx$.
2. Divide by the length of the interval, $b-a$.
3. The result is a single number (the average height of the function).

**Examples:**

1. **Find the average value** of $f(x) = x^2$ on $[0, 3]$.
    - Compute: $\int_{0}^{3} x^2 \, dx = \left[ \frac{x^3}{3} \right]_{0}^{3} = 9$.
    - Length of interval: $3 - 0 = 3$.
    - Average value: $f_{\text{avg}} = \frac{1}{3} \cdot 9 = 3$.
    - Interpretation: The area under $y=x^2$ from 0 to 3 is 9. A rectangle with width 3 and height 3 has the same area.
2. **Find the average value** of $f(x) = \sin x$ on $[0, \pi]$.
    - Compute: $\int_{0}^{\pi} \sin x \, dx = \left[ -\cos x \right]_{0}^{\pi} = (-\cos\pi) - (-\cos 0) = (1) - (-1) = 2$.
    - Length: $\pi - 0 = \pi$.
    - Average: $f_{\text{avg}} = \frac{2}{\pi} \approx 0.6366$.
3. **Applied context:** The temperature (in °F) in a room is modeled by $T(t) = 68 + 4\sin\left(\frac{\pi t}{12}\right)$ for $0 \le t \le 24$ hours. Find the average temperature over the first 6 hours.
    - Compute: $\int_{0}^{6} \left[ 68 + 4\sin\left(\frac{\pi t}{12}\right) \right] dt$.
    - $\int_{0}^{6} 68 \, dt = 68 \cdot 6 = 408$.
    - For the sine part: Let $u = \frac{\pi t}{12}$, $du = \frac{\pi}{12} dt$, so $dt = \frac{12}{\pi} du$. When $t=0$, $u=0$; when $t=6$, $u = \frac{\pi}{2}$.
    $\int_{0}^{6} 4\sin\left(\frac{\pi t}{12}\right) dt = 4 \int_{0}^{\pi/2} \sin u \cdot \frac{12}{\pi} du = \frac{48}{\pi} \int_{0}^{\pi/2} \sin u \, du = \frac{48}{\pi} \left[ -\cos u \right]_{0}^{\pi/2} = \frac{48}{\pi} (0 - (-1)) = \frac{48}{\pi}$.
    - Total integral: $408 + \frac{48}{\pi}$.
    - Average: $\frac{1}{6} \left( 408 + \frac{48}{\pi} \right) = 68 + \frac{8}{\pi} \approx 68 + 2.546 = 70.546^\circ\text{F}$.

---

### **21.2 Net Change and Accumulation**

**Definition:**
If a quantity changes at a rate given by $f(t)$ (with respect to time $t$), then the **net change** in the quantity from time $t = a$ to $t = b$ is:
$$\text{Net Change} = \int_{a}^{b} f(t) \, dt$$

**Accumulation Functions:**
A function defined by an integral represents the accumulation of a rate of change. If $F(x) = \int_{a}^{x} f(t) \, dt$, then:

- $F(x)$ gives the net accumulation of $f(t)$ from $a$ to $x$.
- By the Fundamental Theorem of Calculus, $F'(x) = f(x)$.

**Comments & Instructions:**

1. Identify the rate function $f(t)$ and the time interval.
2. The definite integral of the rate gives the net change (accumulation) over that interval.
3. **Net change** can be positive, negative, or zero. It represents the overall change from start to finish.

**Examples:**

1. **Water Flow:** Water is pumped into a tank at a rate of $R(t) = 50 - 2t$ gallons per minute for $0 \le t \le 25$ minutes. Find the net change in the volume of water from $t=0$ to $t=10$.
    - Net change = $\int_{0}^{10} (50 - 2t) \, dt = \left[ 50t - t^2 \right]_{0}^{10} = (500 - 100) - 0 = 400$ gallons.
    - Interpretation: The tank gains 400 gallons of water during the first 10 minutes.
2. **Population Change:** A population of bacteria grows at a rate of $P'(t) = 200 e^{0.1t}$ bacteria per hour. If the initial population is 500, find the population after 5 hours.
    - Net change in population from $t=0$ to $t=5$: $\int_{0}^{5} 200 e^{0.1t} \, dt$.
    - Let $u=0.1t$, $du=0.1 dt$, so $dt = 10 du$.
    $\int 200 e^{0.1t} dt = 200 \int e^u \cdot 10 du = 2000 \int e^u du = 2000 e^u + C = 2000 e^{0.1t} + C$.
    - So $\int_{0}^{5} 200 e^{0.1t} dt = \left[ 2000 e^{0.1t} \right]_{0}^{5} = 2000 e^{0.5} - 2000 e^{0} = 2000(e^{0.5} - 1)$.
    - Population at $t=5$: Initial + Net change = $500 + 2000(e^{0.5} - 1) = 500 + 2000e^{0.5} - 2000 = 2000e^{0.5} - 1500 \approx 2000(1.6487) - 1500 = 3297.4 - 1500 = 1797.4$ bacteria.

---

### **21.3 Rectilinear Motion (Position, Velocity, Acceleration)**

**Key Relationships:**

- **Velocity** $v(t)$ is the derivative of **position** $s(t)$: $v(t) = s'(t)$.
- **Acceleration** $a(t)$ is the derivative of velocity: $a(t) = v'(t)$.
- Conversely:
    - Displacement (net change in position) from $t=a$ to $t=b$: $\int_{a}^{b} v(t) \, dt = s(b) - s(a)$.
    - Total distance traveled from $t=a$ to $t=b$: $\int_{a}^{b} |v(t)| \, dt$.
    - Net change in velocity: $\int_{a}^{b} a(t) \, dt = v(b) - v(a)$.

**Displacement vs. Total Distance:**

- **Displacement** is the net change in position (can be positive, negative, or zero). It is the integral of velocity.
- **Total distance traveled** is always non-negative. It is the integral of **speed** $|v(t)|$.

**Comments & Instructions:**

1. For displacement: Integrate the velocity function over the time interval.
2. For total distance: Find where $v(t) = 0$ on the interval, split the integral at those points, and integrate the absolute value (i.e., integrate $v(t)$ over intervals where it's positive and integrate $-v(t)$ over intervals where it's negative, then sum).
3. Given acceleration and initial conditions, integrate to find velocity and position.

**Examples:**

1. **Displacement and Total Distance:** A particle moves along a line with velocity $v(t) = t^2 - 4$ for $0 \le t \le 5$. Find (a) the displacement and (b) the total distance traveled.
    - **(a) Displacement:** $\int_{0}^{5} (t^2 - 4) \, dt = \left[ \frac{t^3}{3} - 4t \right]_{0}^{5} = \left( \frac{125}{3} - 20 \right) - 0 = \frac{125}{3} - \frac{60}{3} = \frac{65}{3} \approx 21.67$.
    - **(b) Total Distance:** First find when $v(t)=0$: $t^2 - 4 = 0 \Rightarrow t = 2$ (only $t=2$ in [0,5] since $t \ge 0$).
        - On [0,2]: $v(t) \le 0$ (test $t=1$: -3). Distance = $\int_{0}^{2} |v(t)| \, dt = \int_{0}^{2} (4 - t^2) \, dt = \left[ 4t - \frac{t^3}{3} \right]_{0}^{2} = 8 - \frac{8}{3} = \frac{16}{3}$.
        - On [2,5]: $v(t) \ge 0$ (test $t=3$: 5). Distance = $\int_{2}^{5} (t^2 - 4) \, dt = \left[ \frac{t^3}{3} - 4t \right]_{2}^{5} = \left( \frac{125}{3} - 20 \right) - \left( \frac{8}{3} - 8 \right) = \frac{125}{3} - 20 - \frac{8}{3} + 8 = \frac{117}{3} - 12 = 39 - 12 = 27$.
        - Total distance = $\frac{16}{3} + 27 = \frac{16}{3} + \frac{81}{3} = \frac{97}{3} \approx 32.33$.
2. **Given Acceleration:** A particle moves along the x-axis with acceleration $a(t) = 2t + 1$ (in m/s²). At $t=0$, its velocity is -4 m/s and its position is 10 m. Find the position function $s(t)$.
    - Velocity: $v(t) = \int a(t) \, dt = \int (2t+1) \, dt = t^2 + t + C$.
    Use $v(0) = -4$: $0 + 0 + C = -4 \Rightarrow C = -4$. So $v(t) = t^2 + t - 4$.
    - Position: $s(t) = \int v(t) \, dt = \int (t^2 + t - 4) \, dt = \frac{t^3}{3} + \frac{t^2}{2} - 4t + D$.
    Use $s(0)=10$: $0+0-0+D=10 \Rightarrow D=10$.
    - So $s(t) = \frac{t^3}{3} + \frac{t^2}{2} - 4t + 10$.
3. **Applied Accumulation:** The rate at which people enter an amusement park on a given day is modeled by $E(t) = 4000 - 100t$ people per hour for $0 \le t \le 10$. At $t=0$, there are 500 people in the park. How many people are in the park at $t=6$?
    - Net change in number of people from $t=0$ to $t=6$: $\int_{0}^{6} E(t) \, dt = \int_{0}^{6} (4000 - 100t) \, dt = \left[ 4000t - 50t^2 \right]_{0}^{6} = 24000 - 1800 = 22200$.
    - Starting with 500, the total at $t=6$ is $500 + 22200 = 22700$ people.

---

### **Lesson 21 Summary**

**Key Formulas:**

- **Average Value:** $\displaystyle f_{\text{avg}} = \frac{1}{b-a} \int_{a}^{b} f(x) \, dx$
- **Net Change:** $\displaystyle \int_{a}^{b} f'(t) \, dt = f(b) - f(a)$
- **Displacement:** $\displaystyle \int_{a}^{b} v(t) \, dt$
- **Total Distance:** $\displaystyle \int_{a}^{b} |v(t)| \, dt$

**Interpretations:**

- The definite integral of a rate gives the net accumulation of that quantity.
- The average value is the constant value that would produce the same total over the interval.

**Common Pitfalls:**

- Confusing **displacement** (net change) with **total distance**. Remember: total distance requires integrating the absolute value of velocity.
- Forgetting to divide by $b-a$ when computing average value.
- Misinterpreting accumulation: The integral of a rate gives the net change, not necessarily the final amount unless the initial value is known and added.

---

### **Additional Practice Problems**

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

**Selected Solutions:**

1. **Average value:** $\int_{1}^{4} (3x^2 - 2x + 5) dx = \left[ x^3 - x^2 + 5x \right]_{1}^{4} = (64-16+20) - (1-1+5) = 68 - 5 = 63$. Length: $4-1=3$. Average: $\frac{63}{3}=21$.
2. **Average value:** $\int_{0}^{\pi/2} \cos x dx = \left[ \sin x \right]_{0}^{\pi/2} = 1 - 0 = 1$. Length: $\frac{\pi}{2}$. Average: $\frac{1}{\pi/2} = \frac{2}{\pi} \approx 0.6366$.
3. **Total oil consumption:** $\int_{0}^{5} 1.2 e^{0.04t} dt = 1.2 \left[ \frac{e^{0.04t}}{0.04} \right]_{0}^{5} = 30 \left( e^{0.2} - 1 \right) \approx 30(1.2214 - 1) = 30(0.2214) = 6.642$ billion barrels.
4. **Velocity:** $v(t)=3t^2-12t+9=3(t^2-4t+3)=3(t-1)(t-3)$.
    - **(a) Displacement:** $\int_{0}^{4} v(t) dt = \left[ t^3 - 6t^2 + 9t \right]_{0}^{4} = (64 - 96 + 36) - 0 = 4$.
    - **(b) Total Distance:** $v(t)=0$ at $t=1, 3$.
    On [0,1]: $v(t) \ge 0$ (test t=0.5: positive). Distance = $\int_{0}^{1} v(t) dt = \left[ t^3 - 6t^2 + 9t \right]_{0}^{1} = 1-6+9=4$.
    On [1,3]: $v(t) \le 0$ (test t=2: negative). Distance = $\int_{1}^{3} -v(t) dt = -\int_{1}^{3} v(t) dt = -\left[ t^3 - 6t^2 + 9t \right]_{1}^{3} = -[ (27-54+27) - (1-6+9) ] = -[0 - 4] = 4$.
    On [3,4]: $v(t) \ge 0$ (test t=3.5: positive). Distance = $\int_{3}^{4} v(t) dt = \left[ t^3 - 6t^2 + 9t \right]_{3}^{4} = (64-96+36) - (27-54+27) = 4 - 6 = -2$ (but we take absolute value: 2).
    Total distance = $4 + 4 + 2 = 10$.
5. **Average gallons:** Average = $\frac{1}{10-0} \int_{0}^{10} 100(1 - e^{-0.1t}) dt = 10 \int_{0}^{10} (1 - e^{-0.1t}) dt$.
$\int_{0}^{10} 1 dt = 10$. For the other part: $\int_{0}^{10} e^{-0.1t} dt = \left[ \frac{e^{-0.1t}}{-0.1} \right]_{0}^{10} = -10 (e^{-1} - 1) = 10(1 - e^{-1})$.
So $\int_{0}^{10} (1 - e^{-0.1t}) dt = 10 - 10(1 - e^{-1}) = 10e^{-1}$.
Average = $10 \cdot 10e^{-1} = 100e^{-1} \approx 36.79$ gallons.
6. **Position from acceleration:**
    - $v(t) = \int a(t) dt = \int 6t dt = 3t^2 + C$. $v(0)=10 \Rightarrow C=10$, so $v(t)=3t^2+10$.
    - $s(t) = \int v(t) dt = \int (3t^2+10) dt = t^3 + 10t + D$. $s(0)=0 \Rightarrow D=0$, so $s(t)=t^3+10t$.
7. **Population in 2010:** Net change from t=0 (2000) to t=10 (2010): $\int_{0}^{10} (5000+300t) dt = \left[ 5000t + 150t^2 \right]_{0}^{10} = 50000 + 15000 = 65000$.
Population in 2010 = 100,000 + 65,000 = 165,000.
8. **Average value of 1/x on [1,e]:** $\int_{1}^{e} \frac{1}{x} dx = \left[ \ln x \right]_{1}^{e} = 1 - 0 = 1$. Length: $e-1$. Average: $\frac{1}{e-1}$.
9. **Total distance with sin t:** $v(t)=\sin t$. On [0,2π], zeros at t=0, π, 2π.
    - On [0,π]: sin t ≥ 0. Distance = $\int_{0}^{\pi} \sin t dt = \left[ -\cos t \right]_{0}^{\pi} = (1) - (-1) = 2$.
    - On [π,2π]: sin t ≤ 0. Distance = $\int_{\pi}^{2\pi} (-\sin t) dt = \left[ \cos t \right]_{\pi}^{2\pi} = (1) - (-1) = 2$.
    Total distance = 4.
10. **Average temperature from 6 AM to 6 PM:** 6 AM corresponds to x=6, 6 PM corresponds to x=18.
Average = $\frac{1}{18-6} \int_{6}^{18} \left[ 70 + 10\cos\left(\frac{\pi x}{12}\right) \right] dx$.
$\int_{6}^{18} 70 dx = 70 \cdot 12 = 840$.
For the cosine part: $\int_{6}^{18} 10\cos\left(\frac{\pi x}{12}\right) dx$. Let $u = \frac{\pi x}{12}$, $du = \frac{\pi}{12} dx$, so $dx = \frac{12}{\pi} du$. When x=6, u=π/2; when x=18, u=3π/2.
$\int 10\cos u \cdot \frac{12}{\pi} du = \frac{120}{\pi} \int \cos u du = \frac{120}{\pi} \sin u + C$.
So from π/2 to 3π/2: $\frac{120}{\pi} (\sin(3π/2) - \sin(π/2)) = \frac{120}{\pi} (-1 - 1) = -\frac{240}{\pi}$.
Total integral = $840 - \frac{240}{\pi}$.
Average = $\frac{1}{12} \left( 840 - \frac{240}{\pi} \right) = 70 - \frac{20}{\pi} \approx 70 - 6.366 = 63.634^\circ$.