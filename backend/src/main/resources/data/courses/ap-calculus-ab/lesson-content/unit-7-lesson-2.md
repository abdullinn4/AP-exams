# Solving Differential Equations

In the last lesson, you learned what differential equations are and how to verify solutions. Now, let's actually **solve** them! Our first and most important method is **separation of variables**.

Some differential equations can be rearranged so that all the $\displaystyle y$ stuff is on one side and all the $\displaystyle x$ stuff is on the other. Once separated, we can integrate both sides.

### **Definition:**

A first-order differential equation is **separable** if it can be written in the form:

$$
\displaystyle \frac{dy}{dx} = g(x) \cdot h(y)
$$

or equivalently,

$$
\displaystyle \frac{dy}{dx} = \frac{g(x)}{f(y)}
$$

**Why "Separable"?** Because we can separate the variables—get all $\displaystyle x$'s with $\displaystyle dx$ and all $\displaystyle y$'s with $\displaystyle dy$.

#### **The Method: Four Clear Steps**

1. **Separate:** Rearrange to get $\displaystyle f(y) \, dy = g(x) \, dx$
2. **Integrate:** $\displaystyle \int f(y) \, dy = \int g(x) \, dx$
3. **Solve:** If possible, solve for $\displaystyle y$ in terms of $\displaystyle x$
4. **Include the constant:** Don't forget $\displaystyle +C$ (on one side only!)

**The Intuition (Why This Works):**
We treat $\displaystyle \frac{dy}{dx}$ as a fraction (informally) and "multiply" both sides by $\displaystyle dx$. While not mathematically rigorous at this level, it's justified by the chain rule and it works. Think of it as:

$$
\displaystyle \frac{dy}{dx} = g(x)h(y) \quad \Rightarrow \quad \frac{1}{h(y)} \, dy = g(x) \, dx
$$

Now both sides are ready to integrate.

---

**Example 1: Basic Separation – The Classic Pattern**
Solve $\displaystyle \frac{dy}{dx} = 3x^2 y$.

*Let's walk through this step-by-step:*

**Step 1: Separate**
We want all $\displaystyle y$'s with $\displaystyle dy$ and all $\displaystyle x$'s with $\displaystyle dx$.

$$
\displaystyle \frac{1}{y} \, dy = 3x^2 \, dx \quad \text{(assuming } y \neq 0\text{)}
$$

**Step 2: Integrate**
Now integrate both sides:

$$
\displaystyle \int \frac{1}{y} \, dy = \int 3x^2 \, dx
$$

This gives us:

$$
\displaystyle \ln|y| = x^3 + C
$$

**Step 3: Solve for $\displaystyle y$**
We need to "undo" the natural log:

$$
\displaystyle |y| = e^{x^3 + C} = e^C \cdot e^{x^3}
$$

Let $\displaystyle A = e^C$. Since $\displaystyle e^C > 0$, we have:

$$
\displaystyle |y| = A e^{x^3} \quad (A > 0)
$$

So either $\displaystyle y = A e^{x^3}$ or $\displaystyle y = -A e^{x^3}$.

**Step 4: The Special Case**
Wait! We divided by $\displaystyle y$ initially. What if $\displaystyle y = 0$?
- Original equation: $\displaystyle \frac{d}{dx}(0) = 0$
- Right side: $\displaystyle 3x^2 \cdot 0 = 0$

So $\displaystyle y = 0$ is also a solution!

**Putting It All Together:**
We can include $\displaystyle y = 0$ by letting $\displaystyle A$ be any real number:

$$
\boxed{y = A e^{x^3}} \quad \text{where } A \text{ is any constant}
$$

**Visual Check:** This is a family of exponential curves. When $\displaystyle A=0$, we get the horizontal line $\displaystyle y=0$.

---

**Example 2: Implicit Solution – When It's Okay to Leave It**
Solve $\displaystyle \frac{dy}{dx} = \frac{x}{y}$.

*Step-by-step:*

**Step 1: Separate**

$$
\displaystyle y \, dy = x \, dx
$$

**Step 2: Integrate**

$$
\displaystyle \int y \, dy = \int x \, dx
$$

$$
\displaystyle \frac{y^2}{2} = \frac{x^2}{2} + C
$$

**Step 3: Simplify**
Multiply by 2: $\displaystyle y^2 = x^2 + 2C$
Let $\displaystyle K = 2C$: $\displaystyle \boxed{y^2 = x^2 + K}$

**Note:** We could solve for $\displaystyle y$: $\displaystyle y = \pm \sqrt{x^2 + K}$, but sometimes leaving it as $\displaystyle y^2 = x^2 + K$ is cleaner, especially if we need to use an initial condition later.

---

**Example 3: With an Initial Condition – Finding One Specific Curve**
Solve $\displaystyle \frac{dy}{dx} = e^{x-y}$ with $\displaystyle y(0) = \ln 2$.

*Step-by-step:*

**Step 1: Rewrite and Separate**
First, note $\displaystyle e^{x-y} = e^x \cdot e^{-y}$. So:

$$
\displaystyle \frac{dy}{dx} = e^x e^{-y}
$$

Separate: $\displaystyle e^{-y} \, dy = e^x \, dx$

**Step 2: Integrate**

$$
\displaystyle \int e^{-y} \, dy = \int e^x \, dx
$$

$$
\displaystyle -e^{-y} = e^x + C
$$

**Step 3: Solve for $\displaystyle y$**
Multiply by -1: $\displaystyle e^{-y} = -e^x - C$
Let $\displaystyle D = -C$: $\displaystyle e^{-y} = D - e^x$
Take natural log: $\displaystyle -y = \ln(D - e^x)$
So: $\displaystyle y = -\ln(D - e^x)$

**Step 4: Apply Initial Condition**
$\displaystyle y(0) = \ln 2$ means when $\displaystyle x=0$, $\displaystyle y=\ln 2$:

$$
\displaystyle \ln 2 = -\ln(D - e^0) = -\ln(D - 1)
$$

Multiply by -1: $\displaystyle -\ln 2 = \ln(D - 1)$
Exponentiate: $\displaystyle e^{-\ln 2} = D - 1$
$\displaystyle \frac{1}{2} = D - 1 \Rightarrow D = \frac{3}{2}$

**Final Answer:**

$$
\boxed{y = -\ln\left(\frac{3}{2} - e^x\right)}
$$

**Domain Check:** We need $\displaystyle \frac{3}{2} - e^x > 0$ (can't take log of a non-positive number).
So $\displaystyle e^x < \frac{3}{2} \Rightarrow x < \ln(1.5)$.

---

## **From General to Particular: Finding Specific Solutions**

Remember in Lesson 1 how we looked at limits from both sides? Here we have a similar duality:

**General Solution:** Contains an arbitrary constant $\displaystyle C$. Represents a **family** of curves. Like having all possible paths.

**Particular Solution:** Obtained by applying an **initial condition**. Gives one specific curve from the family. Like choosing your exact path.

#### **The Process:**
1. Find the general solution (usually via separation or direct integration)
2. Plug the initial condition into the general solution
3. Solve for $\displaystyle C$
4. Write the particular solution with the determined $\displaystyle C$

---

**Example 1: Direct Integration – The Simplest Case**
Solve $\displaystyle \frac{dy}{dx} = \cos x$ with $\displaystyle y(\pi) = 3$.

*Step-by-step:*
1. **General solution:** $\displaystyle y = \int \cos x \, dx = \sin x + C$
2. **Use initial condition:** $\displaystyle 3 = \sin \pi + C = 0 + C \Rightarrow C = 3$
3. **Particular solution:** $\displaystyle \boxed{y = \sin x + 3}$

**Alternative using definite integrals:**
We can write directly using the Fundamental Theorem of Calculus:

$$
\displaystyle y(x) = 3 + \int_{\pi}^x \cos t \, dt = 3 + (\sin x - \sin \pi) = \sin x + 3
$$

This method automatically handles the constant!

---

**Example 2: With Separation – The Full Process**
Find the particular solution of $\displaystyle \frac{dy}{dx} = 2xy$ passing through $\displaystyle (0, 5)$.

*Step-by-step:*
1. **Separate and integrate:** 
   $\displaystyle \frac{1}{y} \, dy = 2x \, dx \Rightarrow \ln|y| = x^2 + C$
2. **Solve for $\displaystyle y$:** 
   $\displaystyle |y| = e^{x^2 + C} = e^C e^{x^2}$
   Let $\displaystyle A = e^C > 0$: $\displaystyle y = A e^{x^2}$
   (Check $\displaystyle y=0$: not possible with initial condition $\displaystyle y=5$, so okay)
3. **Use initial condition:** 
   $\displaystyle 5 = A e^{0} = A \Rightarrow A = 5$
4. **Particular solution:** $\displaystyle \boxed{y = 5e^{x^2}}$

**Visual:** This is a steeper version of the basic exponential curve, passing through $\displaystyle (0,5)$.

---

**Example 3: Mind the Domain! – Where the Solution Lives**
Solve $\displaystyle \frac{dy}{dx} = \frac{1}{x}$ with $\displaystyle y(1) = 2$. What's the domain?

*Step-by-step:*
1. **Integrate:** $\displaystyle y = \ln|x| + C$
2. **Use initial condition:** $\displaystyle 2 = \ln 1 + C = 0 + C \Rightarrow C = 2$
3. **So $\displaystyle y = \ln|x| + 2$**

**But wait!** The original equation $\displaystyle \frac{dy}{dx} = \frac{1}{x}$ is undefined at $\displaystyle x=0$. Our initial point is at $\displaystyle x=1 > 0$. So we take the right branch:

$$
\boxed{y = \ln x + 2, \quad x > 0}
$$

**Why not both branches?** Because our solution must be continuous and differentiable on an interval containing our initial point. The function $\displaystyle \ln|x|$ has a break at $\displaystyle x=0$, so we can only take one side.

---

## **Exponential Growth and Decay: Nature's Favorite Pattern**

This is one of the most important applications of differential equations. The pattern appears everywhere: populations, investments, radioactive decay, cooling, and more.

#### **The Model:**

$$
\displaystyle \frac{dy}{dt} = ky
$$

- If $\displaystyle k > 0$: **Exponential growth** (population, investments)
- If $\displaystyle k < 0$: **Exponential decay** (radioactive decay, cooling)

#### **The Solution (Derivation):**
Let's derive it step by step:

1. **Separate:** $\displaystyle \frac{1}{y} \, dy = k \, dt$
2. **Integrate:** $\displaystyle \int \frac{1}{y} \, dy = \int k \, dt$
   $\displaystyle \Rightarrow \ln|y| = kt + C$
3. **Solve:** $\displaystyle |y| = e^{kt + C} = e^C e^{kt}$
   Let $\displaystyle y_0 = \pm e^C$ (the initial value at $\displaystyle t=0$):

   $$
   \boxed{y(t) = y_0 e^{kt}}
   $$

**Key Features:**
- **Doubling time** (for growth): Time it takes for $\displaystyle y$ to double.
  $\displaystyle 2y_0 = y_0 e^{kT} \Rightarrow e^{kT} = 2 \Rightarrow T = \frac{\ln 2}{k}$
- **Half-life** (for decay): Time it takes for $\displaystyle y$ to halve.
  $\displaystyle \frac{1}{2}y_0 = y_0 e^{kT_{1/2}} \Rightarrow e^{kT_{1/2}} = \frac{1}{2} \Rightarrow T_{1/2} = \frac{\ln(1/2)}{k} = -\frac{\ln 2}{k}$
  (Since $\displaystyle k < 0$, $\displaystyle T_{1/2}$ is positive.)

---

**Example 1: Bacteria Growth – Watching Numbers Explode**
A bacteria culture starts with 500 bacteria and grows at a rate proportional to its size. After 3 hours, there are 8000 bacteria. Find the number after 5 hours.

*Step-by-step:*

**Step 1: Set Up the Model**

$$
\displaystyle \frac{dP}{dt} = kP, \quad P(0) = 500, \quad P(3) = 8000
$$

**Step 2: General Solution**
$\displaystyle P(t) = 500 e^{kt}$ (using $\displaystyle P(0)=500$)

**Step 3: Find $\displaystyle k$ using $\displaystyle P(3)=8000$**
$\displaystyle 8000 = 500 e^{3k} \Rightarrow e^{3k} = 16$
Take ln: $\displaystyle 3k = \ln 16 = 4\ln 2$
So: $\displaystyle k = \frac{4}{3} \ln 2 \approx 0.9242$

**Step 4: Find $\displaystyle P(5)$**
$\displaystyle P(5) = 500 e^{5k} = 500 e^{5 \cdot \frac{4}{3} \ln 2} = 500 e^{\frac{20}{3} \ln 2}$
Simplify: $\displaystyle = 500 \cdot 2^{20/3}$

**Calculate:**
$\displaystyle 2^{20/3} = 2^{6.6667} \approx 101.6$
$\displaystyle \boxed{P(5) \approx 500 \times 101.6 \approx 50{,}800 \text{ bacteria}}$

**Insight:** Notice how $\displaystyle 2^{20/3} = (2^{4})^{5/3} = 16^{5/3}$. Since we had 16× growth in 3 hours, in 5 hours we get $\displaystyle 16^{5/3}$× growth.

---

**Example 2: Radioactive Decay – The Relentless Clock**
Carbon-14 has a half-life of 5730 years. If a bone initially contains 100 mg of Carbon-14, how much remains after 2000 years?

*Step-by-step:*

**Step 1: Model**
$\displaystyle \frac{dA}{dt} = kA$, with $\displaystyle k < 0$, $\displaystyle A(0) = 100$

**Step 2: Find $\displaystyle k$ from half-life**
Half-life means: $\displaystyle \frac{1}{2} = e^{k \cdot 5730}$
So: $\displaystyle k = \frac{\ln(1/2)}{5730} = -\frac{\ln 2}{5730} \approx -0.00012097$

**Step 3: Find $\displaystyle A(2000)$**
$\displaystyle A(2000) = 100 e^{2000k} = 100 e^{-2000 \ln 2 / 5730}$
Simplify: $\displaystyle = 100 \cdot 2^{-2000/5730}$

**Calculate:**
Exponent: $\displaystyle -2000/5730 \approx -0.3490$
$\displaystyle 2^{-0.3490} \approx 0.785$
$\displaystyle \boxed{A(2000) \approx 78.5 \text{ mg}}$

**Real-world connection:** This is how carbon dating works! By measuring remaining Carbon-14, we can estimate age.

---

**Example 3: Newton's Law of Cooling – Your Coffee's Journey**
A cup of coffee at 90°C is placed in a room at 20°C. After 2 minutes, it cools to 60°C. When will it reach 30°C?

*Step-by-step:*

**Step 1: The Model**
Newton's Law: $\displaystyle \frac{dT}{dt} = -k(T - T_a)$ where $\displaystyle T_a = 20$ (ambient temperature).
This is separable! The solution is:

$\displaystyle T(t) = T_a + (T_0 - T_a)e^{-kt} = 20 + (90-20)e^{-kt} = 20 + 70e^{-kt}$

**Step 2: Find $\displaystyle k$ using $\displaystyle T(2)=60$**
$\displaystyle 60 = 20 + 70e^{-2k} \Rightarrow 40 = 70e^{-2k}$
$\displaystyle e^{-2k} = \frac{4}{7}$
Take ln: $\displaystyle -2k = \ln(4/7)$
$\displaystyle k = -\frac{1}{2}\ln(4/7) = \frac{1}{2}\ln(7/4) \approx 0.280$

**Step 3: Find $\displaystyle t$ when $\displaystyle T=30$**
$\displaystyle 30 = 20 + 70e^{-kt} \Rightarrow 10 = 70e^{-kt}$
$\displaystyle e^{-kt} = \frac{1}{7}$
Take ln: $\displaystyle -kt = \ln(1/7)$
$\displaystyle t = -\frac{1}{k}\ln(1/7) = \frac{\ln 7}{k}$

**Substitute $\displaystyle k$:**
$\displaystyle t = \frac{\ln 7}{\frac{1}{2}\ln(7/4)} = \frac{2\ln 7}{\ln(7/4)}$

**Calculate:**
$\displaystyle \ln 7 \approx 1.9459$, $\displaystyle \ln(7/4) \approx \ln(1.75) \approx 0.5596$
$\displaystyle \boxed{t \approx \frac{2 \times 1.9459}{0.5596} \approx 6.96 \text{ minutes}}$

**Observation:** Notice it took 2 minutes to drop from 90°C to 60°C (a 30° drop), but about 7 minutes to drop from 90°C to 30°C (a 60° drop). Cooling slows down as it gets closer to room temperature!

---

### **Motion Along a Line: Putting It All Together**

We've seen motion problems before in Lesson 8. Now we can handle them more elegantly with differential equations!

#### **The Relationships (The Derivative Chain):**
- Acceleration: $\displaystyle a(t) = \frac{dv}{dt}$ (rate of change of velocity)
- Velocity: $\displaystyle v(t) = \frac{ds}{dt}$ (rate of change of position)
- Position: $\displaystyle s(t)$

Given acceleration and initial conditions, we integrate to find velocity, then integrate again to find position. It's like working backwards from how things change to what they actually are.

---

**Example 1: Variable Acceleration – A Changing Force**
A particle moves along the x-axis with acceleration $\displaystyle a(t) = 2t + 1$ (in m/s²). At $\displaystyle t=0$, its velocity is -4 m/s and its position is 10 m. Find $\displaystyle s(t)$.

*Step-by-step:*

**Step 1: Find velocity from acceleration**
$\displaystyle v(t) = \int a(t) \, dt = \int (2t+1) \, dt = t^2 + t + C_1$

**Use initial condition $\displaystyle v(0) = -4$:**
$\displaystyle -4 = 0^2 + 0 + C_1 \Rightarrow C_1 = -4$
So: $\displaystyle v(t) = t^2 + t - 4$

**Step 2: Find position from velocity**
$\displaystyle s(t) = \int v(t) \, dt = \int (t^2 + t - 4) \, dt = \frac{t^3}{3} + \frac{t^2}{2} - 4t + C_2$

**Use initial condition $\displaystyle s(0) = 10$:**
$\displaystyle 10 = 0 + 0 - 0 + C_2 \Rightarrow C_2 = 10$

**Final Answer:**

$$
\boxed{s(t) = \frac{t^3}{3} + \frac{t^2}{2} - 4t + 10}
$$

**Interpretation:** The particle starts at position 10, moving left (negative velocity). The acceleration is positive and increasing, so eventually it slows down, stops, and starts moving right.

---

**Example 2: Free Fall – Gravity's Constant Pull**
An object is dropped from rest (initial velocity 0). Acceleration due to gravity is approximately -9.8 m/s². Find velocity as a function of time.

*Step-by-step:*
1. $\displaystyle \frac{dv}{dt} = -9.8$, $\displaystyle v(0) = 0$
2. Integrate: $\displaystyle v(t) = \int -9.8 \, dt = -9.8t + C$
3. Use initial condition: $\displaystyle 0 = -9.8(0) + C \Rightarrow C = 0$
4. So $\displaystyle \boxed{v(t) = -9.8t}$ (negative indicates downward direction)

**Follow-up:** What about position?
$\displaystyle s(t) = \int v(t) \, dt = \int -9.8t \, dt = -4.9t^2 + C_2$
If dropped from height $\displaystyle h$: $\displaystyle s(0) = h$, so $\displaystyle C_2 = h$
Thus: $\displaystyle s(t) = h - 4.9t^2$

The famous free-fall equation!

---

### **Your Differential Equation Toolkit**

#### **Separation of Variables:**
- **When to use:** When you can write $\displaystyle \frac{dy}{dx} = g(x)h(y)$
- **Steps:** Separate → Integrate → Solve → Apply initial condition
- **Watch out:** Domain restrictions, lost solutions when dividing

#### **Exponential Models:**
- **General form:** $\displaystyle \frac{dy}{dt} = ky \Rightarrow y(t) = y_0 e^{kt}$
- **Growth ($\displaystyle k>0$):** Doubling time $\displaystyle T = \frac{\ln 2}{k}$
- **Decay ($\displaystyle k<0$):** Half-life $\displaystyle T_{1/2} = -\frac{\ln 2}{k}$
- **Newton's Law of Cooling:** $\displaystyle \frac{dT}{dt} = -k(T - T_a) \Rightarrow T(t) = T_a + (T_0 - T_a)e^{-kt}$

#### **Motion Problems:**
- **Process:** Integrate acceleration → velocity (+ constant)
  Integrate velocity → position (+ constant)
- **Always need:** Two initial conditions (velocity and position usually)

#### **Key Tips for Success:**
1. **Check first:** Is the equation separable?
2. **Constants matter:** Don't forget $\displaystyle +C$, but only on one side
3. **Initial conditions:** Use them to find particular solutions
4. **Domain awareness:** Watch for division by zero, logs of negatives
5. **Verify:** Plug your solution back into the original equation

#### **Connections to Previous Lessons:**
- **From Lesson 1:** Limits helped us understand instantaneous rates
- **From Lesson 4:** Derivatives gave us rates of change
- **Now:** We're reversing derivatives (integration) to find functions from their rates

---

**Looking Ahead:** In the next unit, we'll use integration to find areas between curves and volumes of solids. The separation of variables technique you mastered today will reappear when we solve more complex applied problems. Keep practicing—fluency with these techniques is key to AP Calculus success!