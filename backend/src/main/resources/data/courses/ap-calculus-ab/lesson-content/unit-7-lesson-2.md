# **Lesson 18: Solving Differential Equations**

### **18.1 Separation of Variables**

**Definition:**
A first-order differential equation is **separable** if it can be written in the form:
$$\frac{dy}{dx} = g(x) \, h(y)$$
or equivalently,
$$\frac{dy}{dx} = \frac{g(x)}{f(y)}$$
The method of **separation of variables** involves rearranging the equation so that all terms involving $y$ are on one side and all terms involving $x$ are on the other, and then integrating both sides:
$$\int f(y) \, dy = \int g(x) \, dx$$

**Comments:**

- **Why it works:** We treat $\frac{dy}{dx}$ as a fraction (though it's not, but it's justified by the chain rule). Multiply both sides by $dx$ and by $f(y)$ to separate.
- **Integration:** After separation, integrate each side with respect to its own variable. Remember to include a constant of integration on one side (usually denoted $C$).
- **Solving for $y$:** Sometimes we can solve explicitly for $y$ as a function of $x$. Other times, the solution is given implicitly.
- **Domain Considerations:** The solution may have restrictions based on the original differential equation (e.g., division by zero, square roots of negatives).

**Examples:**

1. **Basic Separation:** Solve $\frac{dy}{dx} = 3x^2 y$.
    - Separate: $\frac{1}{y} \, dy = 3x^2 \, dx$, assuming $y \neq 0$.
    - Integrate: $\int \frac{1}{y} \, dy = \int 3x^2 \, dx \Rightarrow \ln|y| = x^3 + C$.
    - Solve for $y$: $|y| = e^{x^3 + C} = e^C e^{x^3}$. Let $A = e^C$ (positive). Then $y = A e^{x^3}$. Note that $A > 0$, but we also lost the solution $y=0$ when we divided by $y$. Checking, $y=0$ is indeed a solution (since derivative 0 and right side 0). So the general solution is $y = A e^{x^3}$, where $A$ is any real constant (including 0, since $A=0$ gives $y=0$).
2. **Implicit Solution:** Solve $\frac{dy}{dx} = \frac{x}{y}$.
    - Separate: $y \, dy = x \, dx$.
    - Integrate: $\int y \, dy = \int x \, dx \Rightarrow \frac{y^2}{2} = \frac{x^2}{2} + C$.
    - Multiply by 2: $y^2 = x^2 + 2C$. Let $K = 2C$, then $y^2 = x^2 + K$, or $y = \pm \sqrt{x^2 + K}$. This is an implicit relation.
3. **With Initial Condition:** Solve $\frac{dy}{dx} = e^{x-y}$, $y(0) = \ln 2$.
    - Rewrite: $e^{-y} dy = e^x dx$.
    - Integrate: $-e^{-y} = e^x + C$.
    - Solve: $e^{-y} = -e^x - C$. Let $D = -C$: $e^{-y} = D - e^x$.
    - Use initial condition: when $x=0$, $y=\ln 2$, so $e^{-\ln 2} = \frac{1}{2} = D - e^0 = D - 1 \Rightarrow D = \frac{3}{2}$.
    - Thus, $e^{-y} = \frac{3}{2} - e^x$. Solve: $-y = \ln\left( \frac{3}{2} - e^x \right) \Rightarrow y = -\ln\left( \frac{3}{2} - e^x \right)$. Note the domain: $\frac{3}{2} - e^x > 0 \Rightarrow e^x < \frac{3}{2} \Rightarrow x < \ln(1.5)$.

---

### **18.2 General and Particular Solutions**

**Definition:**

- The **general solution** to a differential equation includes arbitrary constants and represents all possible solutions.
- A **particular solution** is obtained by specifying an **initial condition** (e.g., $y(x_0) = y_0$) to determine the constant(s).

For a first-order differential equation, the general solution contains one arbitrary constant. The particular solution is unique (under reasonable conditions) and passes through a given point in the plane.

**Comments:**

- **Existence and Uniqueness:** For a first-order differential equation $\frac{dy}{dx} = f(x, y)$ with $f$ continuous, there exists a solution passing through each point $(x_0, y_0)$. If $f$ and $\frac{\partial f}{\partial y}$ are continuous, the solution is unique.
- **Using Definite Integrals:** For a differential equation of the form $\frac{dy}{dx} = f(x)$ with initial condition $y(a) = y_0$, the particular solution can be written directly as:
$$y(x) = y_0 + \int_a^x f(t) \, dt$$
This is an application of the Fundamental Theorem of Calculus.

**Examples:**

1. **Particular Solution via Integration:** Solve $\frac{dy}{dx} = \cos x$, $y(\pi) = 3$.
    - General solution: $y = \int \cos x \, dx = \sin x + C$.
    - Use initial condition: $3 = \sin \pi + C = 0 + C \Rightarrow C = 3$.
    - Particular solution: $y = \sin x + 3$.
    - Alternatively, using definite integral: $y(x) = 3 + \int_{\pi}^x \cos t \, dt = 3 + (\sin x - \sin \pi) = 3 + \sin x$.
2. **Finding Constant:** Find the particular solution of $\frac{dy}{dx} = 2xy$ passing through $(0, 5)$.
    - Separate: $\frac{1}{y} dy = 2x dx$ (assuming $y \neq 0$).
    - Integrate: $\ln|y| = x^2 + C$.
    - Exponentiate: $|y| = e^{x^2 + C} = e^C e^{x^2}$. Let $A = e^C$ (positive). Then $y = A e^{x^2}$.
    - Use $y(0)=5$: $5 = A e^0 = A \Rightarrow A = 5$.
    - So particular solution: $y = 5 e^{x^2}$.
3. **Domain Restrictions:** Solve $\frac{dy}{dx} = \frac{1}{x}$ with $y(1) = 2$. What is the domain of the solution?
    - Integrate: $y = \ln|x| + C$.
    - With $y(1)=2$: $2 = \ln 1 + C = 0 + C \Rightarrow C = 2$.
    - So $y = \ln|x| + 2$. The original differential equation is undefined at $x=0$, so the solution is valid on intervals not containing 0. Since the initial condition is at $x=1 > 0$, the domain is $x > 0$. Thus, we can drop absolute value: $y = \ln x + 2$, $x > 0$.

---

### **18.3 Exponential Growth and Decay Models**

**Definition:**
The differential equation $\frac{dy}{dt} = ky$, where $k$ is a constant, models **exponential growth** (if $k > 0$) or **exponential decay** (if $k < 0$).

The general solution is:
$$y(t) = y_0 e^{kt}$$
where $y_0 = y(0)$ is the initial value at time $t = 0$.

**Comments:**

- **Derivation:** Separate variables: $\frac{1}{y} dy = k \, dt$, integrate to get $\ln|y| = kt + C$, then exponentiate.
- **Doubling/Half-Life:**
    - For growth, the **doubling time** $T$ satisfies $2y_0 = y_0 e^{kT} \Rightarrow e^{kT} = 2 \Rightarrow T = \frac{\ln 2}{k}$.
    - For decay, the **half-life** $T_{1/2}$ satisfies $\frac{1}{2} y_0 = y_0 e^{kT_{1/2}} \Rightarrow e^{kT_{1/2}} = \frac{1}{2} \Rightarrow T_{1/2} = \frac{\ln(1/2)}{k} = -\frac{\ln 2}{k}$. Since $k < 0$ for decay, $T_{1/2}$ is positive.
- **Common Applications:** Population growth (with unlimited resources), radioactive decay, compound interest (continuously compounded), Newton's Law of Cooling (which leads to a shifted exponential).

**Examples:**

1. **Population Growth:** A bacteria culture starts with 500 bacteria and grows at a rate proportional to its size. After 3 hours, there are 8000 bacteria. Find the number after 5 hours.
    - Model: $\frac{dP}{dt} = kP$, $P(0)=500$, $P(3)=8000$.
    - Solution: $P(t) = 500 e^{kt}$.
    - Use $P(3)=8000$: $8000 = 500 e^{3k} \Rightarrow e^{3k} = 16 \Rightarrow 3k = \ln 16 = 4\ln 2 \Rightarrow k = \frac{4}{3} \ln 2$.
    - Then $P(5) = 500 e^{5k} = 500 e^{5 \cdot \frac{4}{3} \ln 2} = 500 e^{\frac{20}{3} \ln 2} = 500 \cdot 2^{20/3}$. Approximate: $2^{20/3} = 2^{6.6667} \approx 101.6$, so $P(5) \approx 500 \times 101.6 = 50,800$ bacteria.
2. **Radioactive Decay:** Carbon-14 has a half-life of 5730 years. If a bone initially contains 100 mg of Carbon-14, how much remains after 2000 years?
    - Decay model: $\frac{dA}{dt} = kA$, with $k < 0$. Half-life: $T_{1/2} = 5730$. Since $A(t) = A_0 e^{kt}$, we have $\frac{1}{2} = e^{k \cdot 5730} \Rightarrow k = \frac{\ln(1/2)}{5730} = -\frac{\ln 2}{5730}$.
    - Then $A(2000) = 100 e^{2000k} = 100 e^{-2000 \ln 2 / 5730} = 100 e^{-(2000/5730) \ln 2} = 100 \cdot 2^{-2000/5730}$.
    - Approximate: exponent $\approx -0.3490$, so $2^{-0.3490} \approx 0.785$. Thus, about 78.5 mg remains.
3. **Newton's Law of Cooling:** The temperature of an object changes at a rate proportional to the difference between its temperature and the ambient temperature. If $T(t)$ is the object's temperature, $T_a$ is ambient temperature, then:
$$\frac{dT}{dt} = -k(T - T_a)$$
where $k > 0$. This is separable and leads to $T(t) = T_a + (T_0 - T_a)e^{-kt}$, where $T_0 = T(0)$.
    - Example: A cup of coffee at 90°C is placed in a room at 20°C. After 2 minutes, it cools to 60°C. When will it reach 30°C?
    - Model: $T(t) = 20 + (90-20)e^{-kt} = 20 + 70e^{-kt}$. Given $T(2)=60$: $60 = 20 + 70e^{-2k} \Rightarrow 40 = 70e^{-2k} \Rightarrow e^{-2k} = \frac{4}{7} \Rightarrow -2k = \ln(4/7) \Rightarrow k = -\frac{1}{2} \ln(4/7) = \frac{1}{2} \ln(7/4)$.
    - Find $t$ such that $T(t)=30$: $30 = 20 + 70e^{-kt} \Rightarrow 10 = 70e^{-kt} \Rightarrow e^{-kt} = 1/7 \Rightarrow -kt = \ln(1/7) \Rightarrow t = -\frac{1}{k} \ln(1/7) = \frac{\ln 7}{k}$. Substitute $k$: $t = \frac{\ln 7}{\frac{1}{2} \ln(7/4)} = \frac{2 \ln 7}{\ln(7/4)} \approx \frac{2(1.9459)}{0.5596} \approx 6.96$ minutes.

---

### **18.4 Motion Along a Line**

**Definition:**
If an object moves along a straight line with acceleration $a(t)$, velocity $v(t)$, and position $s(t)$, then:
$$a(t) = \frac{dv}{dt}, \quad v(t) = \frac{ds}{dt}$$
Given acceleration and initial conditions $v(t_0) = v_0$, $s(t_0) = s_0$, we can solve differential equations to find velocity and position.

**Comments:**

- **Integration Process:** Velocity is an antiderivative of acceleration, and position is an antiderivative of velocity.
- **Constant Acceleration:** If acceleration is constant $a$, then $v(t) = v_0 + at$ and $s(t) = s_0 + v_0 t + \frac{1}{2} a t^2$.
- **Variable Acceleration:** Use integration with initial conditions.

**Examples:**

1. **Given Acceleration:** A particle moves along the x-axis with acceleration $a(t) = 2t + 1$ (in m/s²). At $t=0$, its velocity is -4 m/s and its position is 10 m. Find $s(t)$.
    - Velocity: $v(t) = \int a(t) \, dt = \int (2t+1) \, dt = t^2 + t + C_1$.
    - Use $v(0) = -4$: $0+0+C_1 = -4 \Rightarrow C_1 = -4$. So $v(t) = t^2 + t - 4$.
    - Position: $s(t) = \int v(t) \, dt = \int (t^2 + t - 4) \, dt = \frac{t^3}{3} + \frac{t^2}{2} - 4t + C_2$.
    - Use $s(0)=10$: $C_2 = 10$. Thus, $s(t) = \frac{t^3}{3} + \frac{t^2}{2} - 4t + 10$.
2. **Velocity from Acceleration with Initial Condition:** An object is dropped from rest (so initial velocity 0). Acceleration due to gravity is approximately -9.8 m/s². Find velocity as a function of time.
    - $\frac{dv}{dt} = -9.8$, with $v(0)=0$.
    - Integrate: $v(t) = \int -9.8 \, dt = -9.8t + C$. Use $v(0)=0$: $C=0$, so $v(t) = -9.8t$.

---

### **Lesson 18 Summary**

**Key Solution Methods:**

- **Separation of Variables:** For equations of the form $\frac{dy}{dx} = g(x)h(y)$. Separate and integrate.
- **Direct Integration:** For $\frac{dy}{dx} = f(x)$, integrate: $y = \int f(x) \, dx + C$.

**Exponential Model:**

- $\frac{dy}{dt} = ky$ ⇒ $y(t) = y_0 e^{kt}$.
- Doubling time: $T = \frac{\ln 2}{k}$ (for $k>0$).
- Half-life: $T_{1/2} = -\frac{\ln 2}{k}$ (for $k<0$).

**Particular Solutions:**

- Use initial conditions to determine constants.
- Can be expressed as $y(x) = y_0 + \int_{x_0}^x f(t) \, dt$ for $\frac{dy}{dx} = f(x)$.

**Motion:**

- Integrate acceleration to get velocity, then integrate velocity to get position, using initial conditions.

---

### **Additional Practice Problems**

Solve each differential equation. If an initial condition is given, find the particular solution.

1. $\frac{dy}{dx} = \frac{x^2}{y}$, $y(0) = 2$
2. $\frac{dy}{dx} = e^{2x-y}$, $y(0) = \ln 3$
3. $\frac{dP}{dt} = 0.03P$, $P(0) = 500$
4. $\frac{dy}{dx} = \frac{\sin x}{y}$, $y(\pi) = 3$
5. A radioactive substance decays at a rate proportional to the amount present. If half of the original amount remains after 1000 years, find the percentage remaining after 300 years.
6. The velocity of a particle is given by $v(t) = 3t^2 - 2t + 1$. If the particle is at position $s=5$ at $t=1$, find $s(t)$.
7. Solve $\frac{dy}{dx} = 2x(1+y^2)$, $y(0) = 1$.
8. Newton's Law of Cooling: A pie is taken out of an oven at 200°F and placed in a room at 70°F. After 30 minutes, it cools to 150°F. How long will it take to cool to 100°F?
9. Find the particular solution of $\frac{dy}{dx} = \frac{y^2}{x}$ passing through (1, 1).
10. A population grows according to $\frac{dP}{dt} = 0.05P$. If the initial population is 1000, find the population after 10 years.

**Selected Solutions:**

1. Separate: $y \, dy = x^2 \, dx$. Integrate: $\frac{y^2}{2} = \frac{x^3}{3} + C$. With $y(0)=2$: $\frac{4}{2}=2 = 0 + C \Rightarrow C=2$. So $\frac{y^2}{2} = \frac{x^3}{3} + 2 \Rightarrow y^2 = \frac{2x^3}{3} + 4 \Rightarrow y = \sqrt{\frac{2x^3}{3}+4}$ (positive since y(0)=2>0).
2. Rewrite: $e^y dy = e^{2x} dx$. Integrate: $e^y = \frac{1}{2} e^{2x} + C$. With $y(0)=\ln 3$: $e^{\ln 3}=3 = \frac{1}{2} e^0 + C = \frac{1}{2} + C \Rightarrow C = \frac{5}{2}$. So $e^y = \frac{1}{2} e^{2x} + \frac{5}{2} = \frac{1}{2}(e^{2x}+5)$. Then $y = \ln\left( \frac{e^{2x}+5}{2} \right)$.
3. General solution: $P(t) = 500 e^{0.03t}$. (Particular: $P(0)=500$ gives $P_0=500$.)
4. Separate: $y \, dy = \sin x \, dx$. Integrate: $\frac{y^2}{2} = -\cos x + C$. With $y(\pi)=3$: $\frac{9}{2} = -\cos\pi + C = -(-1)+C = 1+C \Rightarrow C = \frac{9}{2}-1 = \frac{7}{2}$. So $\frac{y^2}{2} = -\cos x + \frac{7}{2} \Rightarrow y^2 = -2\cos x + 7 \Rightarrow y = \sqrt{7-2\cos x}$ (positive since y(π)=3>0).
5. Let A(t) be amount. $\frac{dA}{dt} = kA$, half-life 1000 years: $A(1000) = \frac{1}{2}A_0$. So $\frac{1}{2} = e^{1000k} \Rightarrow k = \frac{\ln(1/2)}{1000} = -\frac{\ln 2}{1000}$. Then $A(300) = A_0 e^{300k} = A_0 e^{-300 \ln 2 / 1000} = A_0 e^{-0.3 \ln 2} = A_0 \cdot 2^{-0.3}$. Compute: $2^{-0.3} \approx 0.812$. So about 81.2% remains.
6. Position: $s(t) = \int v(t) dt = \int (3t^2-2t+1) dt = t^3 - t^2 + t + C$. Use s(1)=5: $1-1+1+C=5 \Rightarrow 1+C=5 \Rightarrow C=4$. So $s(t)= t^3 - t^2 + t + 4$.
7. Separate: $\frac{dy}{1+y^2} = 2x \, dx$. Integrate: $\arctan y = x^2 + C$. With y(0)=1: $\arctan 1 = \frac{\pi}{4} = 0 + C \Rightarrow C=\frac{\pi}{4}$. So $\arctan y = x^2 + \frac{\pi}{4} \Rightarrow y = \tan\left( x^2 + \frac{\pi}{4} \right)$.
8. Newton's Law of Cooling: $T(t) = T_a + (T_0 - T_a)e^{-kt}$. Here $T_a=70$, $T_0=200$. So $T(t)=70+130e^{-kt}$. Given T(30)=150: $150=70+130e^{-30k} \Rightarrow 80=130e^{-30k} \Rightarrow e^{-30k}=80/130=8/13 \Rightarrow -30k=\ln(8/13) \Rightarrow k=-\frac{1}{30}\ln(8/13)=\frac{1}{30}\ln(13/8)$. Now find t when T=100: $100=70+130e^{-kt} \Rightarrow 30=130e^{-kt} \Rightarrow e^{-kt}=30/130=3/13 \Rightarrow -kt=\ln(3/13) \Rightarrow t=-\frac{1}{k}\ln(3/13)=\frac{\ln(13/3)}{k}$. Substitute k: $t=\frac{\ln(13/3)}{\frac{1}{30}\ln(13/8)} = 30 \frac{\ln(13/3)}{\ln(13/8)}$. Compute: ln(13/3)≈ln(4.333)≈1.466, ln(13/8)≈ln(1.625)≈0.485. So t≈30*(1.466/0.485)≈30*3.024≈90.7 minutes.
9. Separate: $\frac{dy}{y^2} = \frac{dx}{x}$. Integrate: $-\frac{1}{y} = \ln|x| + C$. With (1,1): $-1 = \ln 1 + C = 0+C \Rightarrow C=-1$. So $-\frac{1}{y} = \ln|x| - 1 \Rightarrow \frac{1}{y} = 1 - \ln|x| \Rightarrow y = \frac{1}{1-\ln|x|}$. Domain: x>0 (since ln|x|, but original equation has x in denominator, so x≠0. Also need 1-ln|x|≠0 ⇒ ln|x|≠1 ⇒ |x|≠e. Since initial point is at x=1, we take x>0 and x≠e. So for x in (0,e) ∪ (e,∞).
10. $P(t)=1000 e^{0.05t}$. At t=10: $P(10)=1000 e^{0.5} \approx 1000*1.6487=1648.7$. So about 1649.