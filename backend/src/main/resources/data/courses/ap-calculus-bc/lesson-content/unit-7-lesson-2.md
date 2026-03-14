# Lesson 18 (BC Extended): Solving Differential Equations

### **18.0 The Big Idea: From Description to Solution**

Remember the **Tangent Line Problem** from Lesson 1? We had a function and wanted its instantaneous rate of change at a point. That led us to derivatives. Now we're reversing the process.

**Here's the new problem:** What if someone tells you *how* a quantity changes (its derivative) and asks you to find the quantity itself?

That's exactly what differential equations do. They describe patterns of change in our world. Population growth, cooling coffee, radioactive decay, motion of planets - they all follow rules that differential equations capture perfectly.

**The BC Journey Ahead:**
1. **Learn to spot** when we can "separate" the variables
2. **Master the technique** of separation of variables
3. **Apply initial conditions** to get specific solutions
4. **Solve real-world problems** that follow exponential patterns
5. **Revisit motion problems** with our new tools
6. **Approximate solutions** when we can't find exact ones (Euler's Method)
7. **Model realistic growth** with limits (Logistic Models)

---

### **18.1 The Power of Separation: When You Can Split Things Up**

*(Same as AB version, keeping the style but concise)*

**The Big Idea:** Get all $y$'s with $dy$ and all $x$'s with $dx$.

**Definition:** $\frac{dy}{dx} = g(x) \cdot h(y)$

**The Method:**
1. **Separate:** $f(y) \, dy = g(x) \, dx$
2. **Integrate:** $\int f(y) \, dy = \int g(x) \, dx$
3. **Solve:** If possible, solve for $y$
4. **Include $+C$:** One constant is enough

**Example:** Solve $\frac{dy}{dx} = 3x^2 y$
- Separate: $\frac{1}{y} dy = 3x^2 dx$
- Integrate: $\ln|y| = x^3 + C$
- Solve: $y = A e^{x^3}$ where $A = e^C$

---

### **18.2 From General to Particular: Finding Specific Solutions**

*(Same as AB version, concise)*

**General Solution:** Family of curves with constant $C$

**Particular Solution:** One specific curve using initial condition

**Example:** Solve $\frac{dy}{dx} = \cos x$ with $y(\pi) = 3$
- General: $y = \sin x + C$
- Particular: $3 = \sin \pi + C \Rightarrow C = 3$
- Solution: $y = \sin x + 3$

---

### **18.3 Exponential Growth and Decay: Nature's Favorite Pattern**

*(Same as AB version, concise)*

**Model:** $\frac{dy}{dt} = ky$

**Solution:** $y(t) = y_0 e^{kt}$

**Growth ($k>0$):** Doubling time $T = \frac{\ln 2}{k}$

**Decay ($k<0$):** Half-life $T_{1/2} = -\frac{\ln 2}{k}$

**Newton's Law of Cooling:** 
$\frac{dT}{dt} = -k(T - T_a) \Rightarrow T(t) = T_a + (T_0-T_a)e^{-kt}$

---

### **18.4 Motion Along a Line: Putting It All Together**

*(Same as AB version, concise)*

**The Chain:**
- $a(t) = \frac{dv}{dt}$
- $v(t) = \frac{ds}{dt}$

**Given $a(t)$:** Integrate twice, use two initial conditions

**Example:** $a(t) = 2t + 1$, $v(0) = -4$, $s(0) = 10$
- $v(t) = t^2 + t - 4$
- $s(t) = \frac{t^3}{3} + \frac{t^2}{2} - 4t + 10$

---

### **18.5 Euler's Method: When Exact is Hard, Approximate is Smart**

Sometimes we can't separate variables or integrate nicely. But we still want to know: **What does the solution look like?** Euler's Method gives us a way to approximate it step by step.

#### **The Big Idea: Follow the Slope**

Imagine you're hiking and only have a compass telling you the direction (slope) at each point. If you take small steps, following the compass each time, you'll approximate the actual trail.

**Euler's Method does exactly this:**
1. Start at a known point $(x_0, y_0)$
2. Use the slope at that point ($\frac{dy}{dx}$ from the DE)
3. Take a small step in that direction
4. Repeat

#### **The Formula (The Marching Orders)**

Given: $\frac{dy}{dx} = f(x, y)$, initial point $(x_0, y_0)$, step size $h$

**Next point:** 
$$
\begin{aligned}
x_1 &= x_0 + h \\
y_1 &= y_0 + f(x_0, y_0) \cdot h
\end{aligned}
$$

**General step:**
$$
\begin{aligned}
x_{n+1} &= x_n + h \\
y_{n+1} &= y_n + f(x_n, y_n) \cdot h
\end{aligned}
$$

**What $h$ means:** Step size. Smaller $h$ = more accurate but more steps.

---

#### **Example 1: Basic Euler - Step by Step**
Use Euler's method with step size $h = 0.5$ to approximate $y(2)$ if $\frac{dy}{dx} = x + y$ and $y(1) = 2$.

**Step 1: Set up**
- $f(x, y) = x + y$
- $(x_0, y_0) = (1, 2)$
- $h = 0.5$
- Want $y(2)$, so need $x = 2$

**Step 2: First step ($x_0 = 1$ to $x_1 = 1.5$)**
- Slope at $(1, 2)$: $f(1, 2) = 1 + 2 = 3$
- $y_1 = y_0 + f(x_0, y_0) \cdot h = 2 + 3 \times 0.5 = 3.5$
- So: $(x_1, y_1) = (1.5, 3.5)$

**Step 3: Second step ($x_1 = 1.5$ to $x_2 = 2$)**
- Slope at $(1.5, 3.5)$: $f(1.5, 3.5) = 1.5 + 3.5 = 5$
- $y_2 = y_1 + f(x_1, y_1) \cdot h = 3.5 + 5 \times 0.5 = 6.0$
- So: $(x_2, y_2) = (2.0, 6.0)$

**Final Answer:** $\boxed{y(2) \approx 6.0}$

**Check:** The exact solution is $y = 3e^{x-1} - x - 1$, so $y(2) = 3e^{1} - 2 - 1 \approx 3(2.718) - 3 = 5.154$. Our approximation (6.0) is off because $h=0.5$ is large.

---

#### **Example 2: Smaller Step, Better Accuracy**
Use Euler's method with $h = 0.25$ to approximate $y(1.5)$ for $\frac{dy}{dx} = 2xy$, $y(1) = 1$.

**Step 1: Set up**
- $f(x, y) = 2xy$
- $(x_0, y_0) = (1, 1)$
- $h = 0.25$
- Want $y(1.5)$, so need 2 steps ($1 \to 1.25 \to 1.5$)

**Step 2: First step ($1 \to 1.25$)**
- $f(1, 1) = 2(1)(1) = 2$
- $y_1 = 1 + 2 \times 0.25 = 1.5$
- $(x_1, y_1) = (1.25, 1.5)$

**Step 3: Second step ($1.25 \to 1.5$)**
- $f(1.25, 1.5) = 2(1.25)(1.5) = 3.75$
- $y_2 = 1.5 + 3.75 \times 0.25 = 2.4375$
- $(x_2, y_2) = (1.5, 2.4375)$

**Final Answer:** $\boxed{y(1.5) \approx 2.4375}$

**Exact Solution:** $y = e^{x^2-1}$, so $y(1.5) = e^{1.25} \approx 3.490$. Still off, but better than with $h=0.5$.

---

#### **Why Euler's Method Matters**
1. **Computers love it:** Easy to program, basis for more sophisticated methods
2. **Reality check:** Even when we can't solve exactly, we can see approximate behavior
3. **Slope fields connection:** Euler's method follows the slope field arrows

#### **Accuracy Tips:**
- **Smaller $h$** = more accurate but more computation
- **Error accumulates:** Each step has error, and it builds up
- **Rule of thumb:** Halving $h$ roughly halves the error (linear convergence)

---

### **18.6 Logistic Growth: When Unlimited Growth is Unrealistic**

Exponential growth assumes unlimited resources. But in reality: food runs out, space fills up, competition increases. Enter **logistic growth**.

#### **The Big Idea: Growth Slows as Limits Approach**

Think of bacteria in a petri dish:
- At first: lots of food, space → rapid growth (exponential)
- Later: food runs out, waste builds up → growth slows
- Eventually: reaches maximum sustainable population

#### **The Logistic Differential Equation**

**Model:** $\frac{dP}{dt} = kP \left(1 - \frac{P}{M}\right)$

Where:
- $P$ = population
- $k$ = growth rate constant ($k > 0$)
- $M$ = carrying capacity (maximum sustainable population)
- $\left(1 - \frac{P}{M}\right)$ = "room to grow" factor

**Alternative form:** $\frac{dP}{dt} = kP \left(\frac{M - P}{M}\right)$

**AP Exam form:** Sometimes written as $\frac{dy}{dt} = ky(a - y)$ where $a = M$

---

#### **Key Features (Without Solving!)**

**1. Carrying Capacity (Limiting Value)**
As $t \to \infty$, $P \to M$. The horizontal line $P = M$ is a **horizontal asymptote**.

**Why?** When $P = M$, $\frac{dP}{dt} = kM(1 - \frac{M}{M}) = 0$ → no growth!

**2. Point of Maximum Growth**
The growth rate $\frac{dP}{dt}$ is maximized when $P = \frac{M}{2}$.

**Why calculus?** $\frac{dP}{dt} = kP - \frac{k}{M}P^2$
Derivative with respect to $P$: $\frac{d}{dP}\left(\frac{dP}{dt}\right) = k - \frac{2k}{M}P$
Set to 0: $k - \frac{2k}{M}P = 0 \Rightarrow P = \frac{M}{2}$

**3. Inflection Point**
The logistic curve has an inflection point at $P = \frac{M}{2}$ where it changes from concave up to concave down.

---

#### **Example 1: Interpretation Without Solving**
A population grows according to $\frac{dP}{dt} = 0.04P\left(1 - \frac{P}{1200}\right)$, $P(0) = 200$.

**Questions:**
1. What's the carrying capacity?
2. When is growth maximized?
3. What's the maximum growth rate?

**Answers:**
1. **Carrying capacity:** $M = 1200$
2. **Growth maximized when:** $P = \frac{M}{2} = 600$
3. **Maximum growth rate:** At $P = 600$,
   $\frac{dP}{dt} = 0.04(600)\left(1 - \frac{600}{1200}\right) = 24(0.5) = 12$

So growth peaks at 12 individuals per time unit when population reaches 600.

---

#### **Example 2: Solving the Logistic Equation**
Solve $\frac{dP}{dt} = 0.02P(1000 - P)$, $P(0) = 100$.

**Step 1: Identify parameters**
Comparing with $\frac{dP}{dt} = kP(M - P)$:
- $k = 0.02$
- $M = 1000$

**Step 2: Separate variables**
$\frac{dP}{P(1000 - P)} = 0.02 \, dt$

**Step 3: Partial fractions**
$\frac{1}{P(1000 - P)} = \frac{A}{P} + \frac{B}{1000 - P}$
$1 = A(1000 - P) + BP$
Let $P = 0$: $1 = 1000A \Rightarrow A = 0.001$
Let $P = 1000$: $1 = 1000B \Rightarrow B = 0.001$

So: $\frac{0.001}{P} + \frac{0.001}{1000 - P} = 0.001\left(\frac{1}{P} + \frac{1}{1000 - P}\right)$

**Step 4: Integrate**
$\int \left(\frac{0.001}{P} + \frac{0.001}{1000 - P}\right) dP = \int 0.02 \, dt$
$0.001(\ln|P| - \ln|1000 - P|) = 0.02t + C$
$\ln\left|\frac{P}{1000 - P}\right| = 20t + 1000C$

**Step 5: Solve for $P$**
Let $D = e^{1000C}$:
$\frac{P}{1000 - P} = De^{20t}$
$P = (1000 - P)De^{20t}$
$P = 1000De^{20t} - PDe^{20t}$
$P(1 + De^{20t}) = 1000De^{20t}$
$P = \frac{1000De^{20t}}{1 + De^{20t}} = \frac{1000}{1 + \frac{1}{D}e^{-20t}}$

**Step 6: Use initial condition $P(0) = 100$**
$100 = \frac{1000D}{1 + D}$
$100(1 + D) = 1000D$
$100 + 100D = 1000D$
$100 = 900D \Rightarrow D = \frac{1}{9}$

**Step 7: Final solution**
$P(t) = \frac{1000}{1 + 9e^{-20t}}$

---

#### **The General Logistic Solution**
For $\frac{dP}{dt} = kP(M - P)$ with $P(0) = P_0$:
$$
P(t) = \frac{M}{1 + \left(\frac{M - P_0}{P_0}\right)e^{-kMt}}
$$

Check: Our example had $M=1000$, $k=0.02$, $P_0=100$:
$\frac{M - P_0}{P_0} = \frac{1000-100}{100} = 9$
So: $P(t) = \frac{1000}{1 + 9e^{-0.02 \cdot 1000 t}} = \frac{1000}{1 + 9e^{-20t}}$ ✓

---

#### **Logistic vs. Exponential: The Showdown**

| **Aspect** | **Exponential** | **Logistic** |
|------------|-----------------|--------------|
| **Model** | $\frac{dP}{dt} = kP$ | $\frac{dP}{dt} = kP\left(1-\frac{P}{M}\right)$ |
| **Solution** | $P(t) = P_0 e^{kt}$ | $P(t) = \frac{M}{1+Ae^{-kMt}}$ |
| **Long-term** | $P \to \infty$ (unrealistic) | $P \to M$ (carrying capacity) |
| **Shape** | Always concave up | S-shaped: concave up then down |
| **Max growth** | Always increasing | At $P = M/2$ |

**When to use which:**
- **Exponential:** Early stages, unlimited resources
- **Logistic:** Long-term, limited resources

---

### **Lesson 18 (BC) Summary: Your Extended Toolkit**

#### **Separation of Variables:**
- **When:** $\frac{dy}{dx} = g(x)h(y)$
- **Steps:** Separate → Integrate → Solve → Apply IC

#### **Exponential Models:**
- $\frac{dy}{dt} = ky \Rightarrow y = y_0 e^{kt}$
- Doubling/half-life formulas

#### **Motion Problems:**
- Integrate $a(t) \to v(t) \to s(t)$
- Two initial conditions needed

#### **Euler's Method (BC):**
- **When:** Can't solve exactly
- **Formula:** $y_{n+1} = y_n + f(x_n, y_n) \cdot h$
- **Accuracy:** Smaller $h$ = better but more work

#### **Logistic Growth (BC):**
- **Model:** $\frac{dP}{dt} = kP\left(1-\frac{P}{M}\right)$
- **Carrying capacity:** $M$ (horizontal asymptote)
- **Max growth:** At $P = M/2$ (inflection point)
- **Solution:** $P(t) = \frac{M}{1+Ae^{-kMt}}$ where $A = \frac{M-P_0}{P_0}$

#### **Key BC Insights:**
1. **Euler's Method** connects slope fields to numerical computation
2. **Logistic Model** fixes the "unlimited growth" problem of exponential models
3. **Interpretation matters:** Often you can answer questions without solving

---

### **BC Extended Practice Problems**

1. Use Euler's method with $h=0.5$ to approximate $y(2)$ for $\frac{dy}{dx} = y - x$, $y(0)=1$.
2. Use Euler's method with $h=0.25$ to approximate $y(1)$ for $\frac{dy}{dx} = x^2 + y^2$, $y(0)=0$.
3. A population follows $\frac{dP}{dt} = 0.03P(500-P)$. If $P(0)=50$, find:
   a) Carrying capacity
   b) When growth rate is maximized
   c) The maximum growth rate
4. Solve the logistic equation $\frac{dP}{dt} = 0.01P(200-P)$ with $P(0)=20$.
5. For $\frac{dP}{dt} = 0.02P(300-P)$:
   a) What is $\lim_{t\to\infty} P(t)$?
   b) For what $P$ is $\frac{dP}{dt}$ maximized?
   c) If $P(0)=50$, find $P$ when growth is fastest.
6. Compare exponential and logistic models for a bacteria culture with initial population 100 and growth rate 0.1 per hour. For logistic, use carrying capacity 10,000. Find populations after 10 hours for both models.
7. Use Euler's method with $h=0.2$ to approximate $y(1)$ for $\frac{dy}{dx} = e^{x+y}$, $y(0)=0$.
8. A rumor spreads logistically in a school of 2000 students. Initially 10 students know. The growth constant is 0.002. How many know after 2 days? When is the rumor spreading fastest?
9. The logistic equation $\frac{dP}{dt} = 0.04P - 0.0001P^2$ models a population.
   a) Rewrite in standard form
   b) Find carrying capacity
   c) Find $P$ when growth is maximum
10. Use two steps of Euler's method with $h=0.5$ for $\frac{dy}{dx} = \ln(1+x+y)$, $y(0)=1$ to estimate $y(1)$.

---

### **Selected Solutions (BC Problems)**

1. **Euler with $h=0.5$, 4 steps to $x=2$:**
   $(0,1) \to (0.5, 1.5) \to (1.0, 2.25) \to (1.5, 3.375) \to (2.0, 5.0625)$
   $\boxed{y(2) \approx 5.0625}$

2. **Euler with $h=0.25$, 4 steps:**
   Step 1: $(0,0) \to f(0,0)=0 \to (0.25, 0)$
   Step 2: $f(0.25,0)=0.0625 \to (0.5, 0.015625)$
   Step 3: $f(0.5,0.015625)=0.250244 \to (0.75, 0.078186)$
   Step 4: $f(0.75,0.078186)=0.566116 \to (1.0, 0.219716)$
   $\boxed{y(1) \approx 0.2197}$

3. **Logistic interpretation:**
   a) $M = 500$
   b) Growth maximized when $P = M/2 = 250$
   c) Max growth rate: $\frac{dP}{dt}_{max} = 0.03(250)(500-250)/500 = 3.75$
   Actually: $\frac{dP}{dt} = 0.03P(1-P/500)$, at $P=250$: $0.03(250)(0.5)=3.75$ ✓

4. **Logistic solution:**
   $M=200$, $k=0.01$, $P_0=20$
   $A = \frac{M-P_0}{P_0} = \frac{180}{20} = 9$
   $P(t) = \frac{200}{1+9e^{-0.01\cdot200\cdot t}} = \boxed{\frac{200}{1+9e^{-2t}}}$

5. **Logistic properties:**
   a) $\lim_{t\to\infty} P(t) = 300$
   b) $\frac{dP}{dt}$ max at $P = 300/2 = 150$
   c) With $P(0)=50$, growth fastest when $P=150$

6. **Exponential vs. Logistic:**
   Exponential: $P(10) = 100e^{0.1\cdot10} = 100e^1 \approx 271.8$
   Logistic: $P(t) = \frac{10000}{1+99e^{-0.1\cdot10000\cdot t/10000}} = \frac{10000}{1+99e^{-t}}$
   $P(10) = \frac{10000}{1+99e^{-10}} \approx \frac{10000}{1+99(0.000045)} \approx \frac{10000}{1.004455} \approx 9956$
   Big difference! Logistic approaches carrying capacity.

7. **Euler $h=0.2$:**
   Step 1: $(0,0) \to f(0,0)=e^0=1 \to (0.2, 0.2)$
   Step 2: $f(0.2,0.2)=e^{0.4}=1.4918 \to (0.4, 0.49836)$
   Step 3: $f(0.4,0.49836)=e^{0.89836}=2.456 \to (0.6, 0.98956)$
   Step 4: $f(0.6,0.98956)=e^{1.58956}=4.902 \to (0.8, 1.9700)$
   Step 5: $f(0.8,1.9700)=e^{2.7700}=15.96 \to (1.0, 5.1620)$
   $\boxed{y(1) \approx 5.162}$

8. **Rumor spread:**
   $M=2000$, $k=0.002$, $P_0=10$
   $A = \frac{2000-10}{10} = 199$
   $P(t) = \frac{2000}{1+199e^{-0.002\cdot2000\cdot t}} = \frac{2000}{1+199e^{-4t}}$
   $P(2) = \frac{2000}{1+199e^{-8}} \approx \frac{2000}{1+199(0.000335)} \approx \frac{2000}{1.0667} \approx 1875$
   Fastest spread when $P = 1000$

9. **Rewrite logistic:**
   $\frac{dP}{dt} = 0.04P - 0.0001P^2 = 0.04P(1 - \frac{0.0001}{0.04}P) = 0.04P(1-\frac{P}{400})$
   So: $k=0.04$, $M=400$
   Max growth at $P=200$

10. **Euler $h=0.5$:**
    Step 1: $(0,1) \to f(0,1)=\ln(2)=0.6931 \to (0.5, 1.3466)$
    Step 2: $f(0.5,1.8466)=\ln(3.3466)=1.208 \to (1.0, 1.9506)$
    $\boxed{y(1) \approx 1.951}$

---

**Looking Ahead to BC Exam:** These topics frequently appear in FRQs. Practice both the computation (Euler's steps, solving logistic) and the interpretation (what does carrying capacity mean? when is growth fastest?). The combination of exact solutions and approximations makes differential equations a rich and practical area of calculus!