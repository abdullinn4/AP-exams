# Vector-Valued Functions

Parametric equations let us describe curves in the plane using a parameter $t$. Now we're going to package those two functions—$x(t)$ and $y(t)$—into a single object called a **vector-valued function**. This notation is incredibly convenient for describing motion: the position of a particle at time $t$ can be written as a vector $\mathbf{r}(t) = \langle x(t), y(t) \rangle$. Then velocity, acceleration, displacement, and distance all become natural vector operations.

In this lesson, we'll learn how to differentiate and integrate vector-valued functions, and we'll apply them to motion problems. These are BC-only topics, so if you're aiming for the BC exam, this is essential.

---

## Defining and Differentiating Vector-Valued Functions

### What Is a Vector-Valued Function?

A **vector-valued function** assigns a vector to each value of the parameter $t$. In the plane, we write:
$$\mathbf{r}(t) = \langle x(t), y(t) \rangle = x(t)\,\mathbf{i} + y(t)\,\mathbf{j}$$
where $x(t)$ and $y(t)$ are the **component functions**. As $t$ varies, the tip of $\mathbf{r}(t)$ traces a curve.

**Example:** $\mathbf{r}(t) = \langle \cos t, \sin t \rangle$ for $0 \le t \le 2\pi$ traces the unit circle.

### Derivatives of Vector-Valued Functions

The derivative of $\mathbf{r}(t)$ is defined component‑wise:
$$\mathbf{r}'(t) = \langle x'(t), y'(t) \rangle$$
provided both $x'(t)$ and $y'(t)$ exist. This vector points in the direction of the tangent line and its magnitude is the **speed** of a particle moving along the curve.

- **Velocity vector:** $\mathbf{v}(t) = \mathbf{r}'(t)$
- **Speed:** $v(t) = |\mathbf{v}(t)| = \sqrt{[x'(t)]^2 + [y'(t)]^2}$
- **Acceleration vector:** $\mathbf{a}(t) = \mathbf{v}'(t) = \mathbf{r}''(t) = \langle x''(t), y''(t) \rangle$

### Example 1: Finding Velocity, Speed, and Acceleration

A particle's position is given by $\mathbf{r}(t) = \langle t^2, e^t \rangle$. Find its velocity, speed, and acceleration at $t = 0$.

- $\mathbf{v}(t) = \mathbf{r}'(t) = \langle 2t, e^t \rangle$
- At $t=0$: $\mathbf{v}(0) = \langle 0, 1 \rangle$
- Speed: $|\mathbf{v}(0)| = \sqrt{0^2 + 1^2} = 1$
- $\mathbf{a}(t) = \mathbf{v}'(t) = \langle 2, e^t \rangle$
- At $t=0$: $\mathbf{a}(0) = \langle 2, 1 \rangle$

### Example 2: Tangent Line to a Curve

Find the parametric equations of the tangent line to the curve $\mathbf{r}(t) = \langle t\cos t, t\sin t \rangle$ at $t = \pi/2$.

- Point at $t = \pi/2$: $\mathbf{r}(\pi/2) = \left\langle \frac{\pi}{2}\cos\frac{\pi}{2}, \frac{\pi}{2}\sin\frac{\pi}{2} \right\rangle = \left\langle 0, \frac{\pi}{2} \right\rangle$.
- Velocity: $\mathbf{v}(t) = \langle \cos t - t\sin t, \sin t + t\cos t \rangle$.
- At $t = \pi/2$: $\mathbf{v}(\pi/2) = \left\langle 0 - \frac{\pi}{2}\cdot 1, 1 + \frac{\pi}{2}\cdot 0 \right\rangle = \left\langle -\frac{\pi}{2}, 1 \right\rangle$.
- The tangent line (in parametric form) is $\mathbf{L}(s) = \mathbf{r}(\pi/2) + s\,\mathbf{v}(\pi/2) = \left\langle 0, \frac{\pi}{2} \right\rangle + s\left\langle -\frac{\pi}{2}, 1 \right\rangle$, or
  $$x = -\frac{\pi}{2}s,\quad y = \frac{\pi}{2} + s.$$

---

## Integrating Vector-Valued Functions

Just as with differentiation, integration of vector-valued functions is done component‑wise.

### Indefinite Integral

The indefinite integral of $\mathbf{r}(t) = \langle x(t), y(t) \rangle$ is:
$$\int \mathbf{r}(t)\,dt = \left\langle \int x(t)\,dt,\; \int y(t)\,dt \right\rangle + \mathbf{C}$$
where $\mathbf{C} = \langle C_1, C_2 \rangle$ is a constant vector.

### Definite Integral

The definite integral from $t=a$ to $t=b$ is:
$$\int_a^b \mathbf{r}(t)\,dt = \left\langle \int_a^b x(t)\,dt,\; \int_a^b y(t)\,dt \right\rangle$$

**Interpretation:** If $\mathbf{r}(t)$ is the velocity vector $\mathbf{v}(t)$, then $\int_a^b \mathbf{v}(t)\,dt$ gives the **displacement** (net change in position) over the interval.

### Example 3: Finding Position from Velocity

A particle moves with velocity $\mathbf{v}(t) = \langle 3t^2, 2\cos t \rangle$. If its initial position is $\mathbf{r}(0) = \langle 1, -2 \rangle$, find its position at any time $t$.

- Integrate velocity to get position:
  $$\mathbf{r}(t) = \int \mathbf{v}(t)\,dt = \left\langle \int 3t^2\,dt,\; \int 2\cos t\,dt \right\rangle + \mathbf{C} = \left\langle t^3,\; 2\sin t \right\rangle + \mathbf{C}$$
- Use $\mathbf{r}(0) = \langle 1, -2 \rangle$ to find $\mathbf{C}$:
  $$\langle 0, 0 \rangle + \mathbf{C} = \langle 1, -2 \rangle \quad\Rightarrow\quad \mathbf{C} = \langle 1, -2 \rangle$$
- Therefore,
  $$\mathbf{r}(t) = \left\langle t^3 + 1,\; 2\sin t - 2 \right\rangle$$

### Example 4: From Acceleration to Position

A particle has acceleration $\mathbf{a}(t) = \langle 6t, 2 \rangle$. At $t=0$, its velocity is $\mathbf{v}(0) = \langle 1, 0 \rangle$ and its position is $\mathbf{r}(0) = \langle 0, 3 \rangle$. Find $\mathbf{r}(t)$.

- Integrate acceleration to get velocity:
  $$\mathbf{v}(t) = \int \mathbf{a}(t)\,dt = \left\langle \int 6t\,dt,\; \int 2\,dt \right\rangle + \mathbf{C}_1 = \left\langle 3t^2,\; 2t \right\rangle + \mathbf{C}_1$$
- Use $\mathbf{v}(0) = \langle 1, 0 \rangle$:
  $$\langle 0, 0 \rangle + \mathbf{C}_1 = \langle 1, 0 \rangle \quad\Rightarrow\quad \mathbf{C}_1 = \langle 1, 0 \rangle$$
  So $\mathbf{v}(t) = \langle 3t^2 + 1,\; 2t \rangle$.
- Integrate velocity to get position:
  $$\mathbf{r}(t) = \int \mathbf{v}(t)\,dt = \left\langle \int (3t^2+1)\,dt,\; \int 2t\,dt \right\rangle + \mathbf{C}_2 = \left\langle t^3 + t,\; t^2 \right\rangle + \mathbf{C}_2$$
- Use $\mathbf{r}(0) = \langle 0, 3 \rangle$:
  $$\langle 0, 0 \rangle + \mathbf{C}_2 = \langle 0, 3 \rangle \quad\Rightarrow\quad \mathbf{C}_2 = \langle 0, 3 \rangle$$
- Therefore,
  $$\mathbf{r}(t) = \left\langle t^3 + t,\; t^2 + 3 \right\rangle$$

---

## Solving Motion Problems

Now we can use vector-valued functions to fully describe motion in the plane. The key relationships are:

- **Velocity** $\mathbf{v}(t) = \mathbf{r}'(t)$
- **Acceleration** $\mathbf{a}(t) = \mathbf{v}'(t) = \mathbf{r}''(t)$
- **Speed** $|\mathbf{v}(t)| = \sqrt{[x'(t)]^2 + [y'(t)]^2}$
- **Displacement** from $t=a$ to $t=b$: $\displaystyle \int_a^b \mathbf{v}(t)\,dt = \mathbf{r}(b) - \mathbf{r}(a)$
- **Total distance traveled** from $t=a$ to $t=b$: $\displaystyle \int_a^b |\mathbf{v}(t)|\,dt$

### Example 5: Displacement vs. Total Distance

A particle moves with velocity $\mathbf{v}(t) = \langle 2t, 3 \rangle$ for $0 \le t \le 2$. Find (a) the displacement and (b) the total distance traveled.

- **(a) Displacement:**
  $$\int_0^2 \mathbf{v}(t)\,dt = \left\langle \int_0^2 2t\,dt,\; \int_0^2 3\,dt \right\rangle = \left\langle [t^2]_0^2,\; [3t]_0^2 \right\rangle = \langle 4, 6 \rangle$$
  So the particle's position changes by $(4,6)$ units.

- **(b) Total distance:**
  First, speed $|\mathbf{v}(t)| = \sqrt{(2t)^2 + 3^2} = \sqrt{4t^2 + 9}$.
  Then total distance $= \int_0^2 \sqrt{4t^2 + 9}\,dt$.
  This integral can be evaluated using a trigonometric substitution or a calculator. For practice, let's do it by hand with the substitution $t = \frac{3}{2}\tan\theta$? Actually, it's a standard form: $\int \sqrt{t^2 + a^2}\,dt$. Here $4t^2 + 9 = 4(t^2 + 9/4)$, so $\sqrt{4t^2+9} = 2\sqrt{t^2 + (3/2)^2}$. So:
  $$\int_0^2 \sqrt{4t^2+9}\,dt = 2\int_0^2 \sqrt{t^2 + (3/2)^2}\,dt$$
  Using formula $\int \sqrt{t^2 + a^2}\,dt = \frac{t}{2}\sqrt{t^2+a^2} + \frac{a^2}{2}\ln\left|t + \sqrt{t^2+a^2}\right| + C$ with $a = 3/2$, we get:
  $$= 2\left[ \frac{t}{2}\sqrt{t^2 + \frac{9}{4}} + \frac{9/4}{2}\ln\left(t + \sqrt{t^2 + \frac{9}{4}}\right) \right]_0^2$$
  $$= \left[ t\sqrt{t^2 + \frac{9}{4}} + \frac{9}{4}\ln\left(t + \sqrt{t^2 + \frac{9}{4}}\right) \right]_0^2$$
  At $t=2$: $2\sqrt{4 + 2.25} = 2\sqrt{6.25} = 2\cdot 2.5 = 5$, and $\ln(2 + \sqrt{6.25}) = \ln(2 + 2.5) = \ln 4.5$.
  At $t=0$: $0 + \frac{9}{4}\ln(0 + 1.5) = \frac{9}{4}\ln 1.5$.
  So total distance $= 5 + \frac{9}{4}\ln 4.5 - \frac{9}{4}\ln 1.5 = 5 + \frac{9}{4}\ln\left(\frac{4.5}{1.5}\right) = 5 + \frac{9}{4}\ln 3$.

### Example 6: Motion with Given Acceleration

A particle moves so that its acceleration is $\mathbf{a}(t) = \langle 0, -32 \rangle$ ft/s² (gravity). At $t=0$, its velocity is $\mathbf{v}(0) = \langle 50, 80 \rangle$ ft/s and its position is $\mathbf{r}(0) = \langle 0, 0 \rangle$. Find the position at time $t$, and determine when it hits the ground (i.e., when $y(t)=0$ again).

- Integrate acceleration to get velocity:
  $$\mathbf{v}(t) = \int \mathbf{a}(t)\,dt = \left\langle 0, -32t \right\rangle + \mathbf{C}_1$$
  Using $\mathbf{v}(0) = \langle 50, 80 \rangle$, we get $\mathbf{C}_1 = \langle 50, 80 \rangle$.
  So $\mathbf{v}(t) = \langle 50, 80 - 32t \rangle$.

- Integrate velocity to get position:
  $$\mathbf{r}(t) = \int \mathbf{v}(t)\,dt = \left\langle 50t, 80t - 16t^2 \right\rangle + \mathbf{C}_2$$
  Using $\mathbf{r}(0) = \langle 0, 0 \rangle$, we get $\mathbf{C}_2 = \langle 0, 0 \rangle$.
  So $\mathbf{r}(t) = \langle 50t, 80t - 16t^2 \rangle$.

- The particle hits the ground when $y(t)=0$ (other than $t=0$):
  $$80t - 16t^2 = 0 \Rightarrow 16t(5 - t) = 0 \Rightarrow t=0 \text{ or } t=5.$$
  So at $t=5$ seconds, it hits the ground. At that time, its position is $\mathbf{r}(5) = \langle 250, 0 \rangle$.

---

## Summary

### Key Formulas

| Concept | Formula |
|---------|---------|
| Position vector | $\mathbf{r}(t) = \langle x(t), y(t) \rangle$ |
| Velocity | $\mathbf{v}(t) = \mathbf{r}'(t) = \langle x'(t), y'(t) \rangle$ |
| Acceleration | $\mathbf{a}(t) = \mathbf{v}'(t) = \mathbf{r}''(t) = \langle x''(t), y''(t) \rangle$ |
| Speed | $|\mathbf{v}(t)| = \sqrt{[x'(t)]^2 + [y'(t)]^2}$ |
| Displacement (net change) | $\displaystyle \int_a^b \mathbf{v}(t)\,dt = \mathbf{r}(b) - \mathbf{r}(a)$ |
| Total distance traveled | $\displaystyle \int_a^b |\mathbf{v}(t)|\,dt$ |
| Position from velocity | $\displaystyle \mathbf{r}(t) = \int \mathbf{v}(t)\,dt + \mathbf{r}_0$ |
| Velocity from acceleration | $\displaystyle \mathbf{v}(t) = \int \mathbf{a}(t)\,dt + \mathbf{v}_0$ |

### Important Points

- Differentiation and integration of vector‑valued functions are done component‑wise.
- The velocity vector is always tangent to the path.
- Speed is a scalar; it's the magnitude of velocity.
- Displacement is a vector; total distance is a scalar.
- To find position from acceleration, integrate twice, using initial conditions to determine the constant vectors.

### Common Pitfalls

- Forgetting that the constant of integration for a vector‑valued function is a vector, not a scalar.
- Confusing displacement (net change) with total distance. Use the integral of $|\mathbf{v}(t)|$ for distance.
- Not checking component‑wise when integrating or differentiating—treat each component separately.

---

### Additional Practice Problems

1. For $\mathbf{r}(t) = \langle \ln t, t^2 \rangle$, find $\mathbf{v}(t)$, $\mathbf{a}(t)$, and the speed at $t=1$.
2. A particle has velocity $\mathbf{v}(t) = \langle e^t, \sin t \rangle$. If $\mathbf{r}(0) = \langle 2, 0 \rangle$, find $\mathbf{r}(t)$.
3. Given acceleration $\mathbf{a}(t) = \langle 12t, 2 \rangle$, initial velocity $\mathbf{v}(0) = \langle -1, 3 \rangle$, and initial position $\mathbf{r}(0) = \langle 4, 1 \rangle$, find $\mathbf{r}(t)$.
4. A particle moves with velocity $\mathbf{v}(t) = \langle 3t^2, 4t \rangle$ from $t=0$ to $t=2$. Find (a) displacement and (b) total distance traveled.
5. At $t=0$, a projectile is launched from ground level with initial velocity $\langle 40, 60 \rangle$ ft/s. Acceleration is $\langle 0, -32 \rangle$ ft/s². Find its position at $t=2$ seconds and its maximum height.
6. A particle's position is $\mathbf{r}(t) = \langle t^2 - 1, 3t \rangle$. Find its velocity, speed, and acceleration at $t=2$.
7. Find the total distance traveled by the particle in problem 6 from $t=0$ to $t=3$.
8. A particle moves so that its velocity is $\mathbf{v}(t) = \langle \cos t, 2\sin t \rangle$. Find its displacement from $t=0$ to $t=\pi$, and the total distance traveled over the same interval.

---

### Selected Solutions

1. **$\mathbf{r}(t) = \langle \ln t, t^2 \rangle$**
   - $\mathbf{v}(t) = \langle 1/t, 2t \rangle$
   - $\mathbf{a}(t) = \langle -1/t^2, 2 \rangle$
   - At $t=1$: $\mathbf{v}(1) = \langle 1, 2 \rangle$, speed $= \sqrt{1+4} = \sqrt{5}$.

2. **$\mathbf{v}(t) = \langle e^t, \sin t \rangle$, $\mathbf{r}(0) = \langle 2, 0 \rangle$**
   - $\mathbf{r}(t) = \left\langle \int e^t dt, \int \sin t dt \right\rangle + \mathbf{C} = \langle e^t, -\cos t \rangle + \mathbf{C}$.
   - At $t=0$: $\langle 1, -1 \rangle + \mathbf{C} = \langle 2, 0 \rangle$ ⇒ $\mathbf{C} = \langle 1, 1 \rangle$.
   - So $\mathbf{r}(t) = \langle e^t + 1, -\cos t + 1 \rangle$.

3. **$\mathbf{a}(t) = \langle 12t, 2 \rangle$, $\mathbf{v}(0) = \langle -1, 3 \rangle$, $\mathbf{r}(0) = \langle 4, 1 \rangle$**
   - $\mathbf{v}(t) = \int \mathbf{a}(t) dt = \langle 6t^2, 2t \rangle + \mathbf{C}_1$. Using $\mathbf{v}(0) = \langle -1, 3 \rangle$ gives $\mathbf{C}_1 = \langle -1, 3 \rangle$, so $\mathbf{v}(t) = \langle 6t^2 - 1, 2t + 3 \rangle$.
   - $\mathbf{r}(t) = \int \mathbf{v}(t) dt = \langle 2t^3 - t, t^2 + 3t \rangle + \mathbf{C}_2$. Using $\mathbf{r}(0) = \langle 4, 1 \rangle$ gives $\mathbf{C}_2 = \langle 4, 1 \rangle$.
   - Thus $\mathbf{r}(t) = \langle 2t^3 - t + 4, t^2 + 3t + 1 \rangle$.

4. **$\mathbf{v}(t) = \langle 3t^2, 4t \rangle$, $0 \le t \le 2$**
   - (a) Displacement: $\int_0^2 \mathbf{v}(t) dt = \left\langle \int_0^2 3t^2 dt, \int_0^2 4t dt \right\rangle = \langle [t^3]_0^2, [2t^2]_0^2 \rangle = \langle 8, 8 \rangle$.
   - (b) Speed $= \sqrt{(3t^2)^2 + (4t)^2} = \sqrt{9t^4 + 16t^2} = t\sqrt{9t^2 + 16}$.
     Total distance $= \int_0^2 t\sqrt{9t^2 + 16}\, dt$. Let $u = 9t^2 + 16$, $du = 18t\, dt$, so $t\,dt = du/18$.
     When $t=0$, $u=16$; $t=2$, $u=36+16=52$.
     Distance $= \int_{16}^{52} \sqrt{u} \cdot \frac{du}{18} = \frac{1}{18} \cdot \frac{2}{3} [u^{3/2}]_{16}^{52} = \frac{1}{27} (52^{3/2} - 16^{3/2})$.
     $52^{3/2} = (52\sqrt{52}) = 52 \cdot 2\sqrt{13} = 104\sqrt{13}$, $16^{3/2} = 64$.
     So distance $= \frac{1}{27}(104\sqrt{13} - 64)$.

5. **Projectile: $\mathbf{a}(t) = \langle 0, -32 \rangle$, $\mathbf{v}(0) = \langle 40, 60 \rangle$, $\mathbf{r}(0) = \langle 0, 0 \rangle$**
   - $\mathbf{v}(t) = \langle 40, 60 - 32t \rangle$
   - $\mathbf{r}(t) = \langle 40t, 60t - 16t^2 \rangle$
   - At $t=2$: $\mathbf{r}(2) = \langle 80, 120 - 64 \rangle = \langle 80, 56 \rangle$ ft.
   - Maximum height occurs when vertical velocity = 0: $60 - 32t = 0$ ⇒ $t = 60/32 = 1.875$ s.
     Height at that time: $y = 60(1.875) - 16(1.875)^2 = 112.5 - 16(3.515625) = 112.5 - 56.25 = 56.25$ ft.

6. **$\mathbf{r}(t) = \langle t^2 - 1, 3t \rangle$**
   - $\mathbf{v}(t) = \langle 2t, 3 \rangle$
   - Speed $= \sqrt{(2t)^2 + 3^2} = \sqrt{4t^2 + 9}$
   - $\mathbf{a}(t) = \langle 2, 0 \rangle$
   - At $t=2$: $\mathbf{v}(2) = \langle 4, 3 \rangle$, speed $= 5$, $\mathbf{a}(2) = \langle 2, 0 \rangle$.

7. **Distance traveled for $\mathbf{r}(t) = \langle t^2 - 1, 3t \rangle$, $t=0$ to $t=3$**
   - Speed $= \sqrt{4t^2 + 9}$. Distance $= \int_0^3 \sqrt{4t^2 + 9}\, dt$.
     Let $t = \frac{3}{2}\tan\theta$? Or use formula with $a = 3/2$ as before.
     $\int \sqrt{4t^2+9}\, dt = 2\int \sqrt{t^2 + (3/2)^2}\, dt$.
     Using formula: $= 2\left[ \frac{t}{2}\sqrt{t^2 + \frac{9}{4}} + \frac{9/4}{2}\ln\left(t + \sqrt{t^2 + \frac{9}{4}}\right) \right] = t\sqrt{t^2 + \frac{9}{4}} + \frac{9}{4}\ln\left(t + \sqrt{t^2 + \frac{9}{4}}\right)$.
     Evaluate from 0 to 3:
     At $t=3$: $3\sqrt{9 + 2.25} = 3\sqrt{11.25} = 3\cdot 3.3541 = 10.0623$, and $\ln(3 + 3.3541) = \ln 6.3541 \approx 1.849$.
       Term $= 10.0623 + (9/4)(1.849) = 10.0623 + 2.25\cdot 1.849 = 10.0623 + 4.160 = 14.2223$.
     At $t=0$: $0 + (9/4)\ln(1.5) = 2.25 \cdot 0.4055 = 0.9124$.
     Distance $\approx 14.2223 - 0.9124 = 13.3099$.
     (Exact expression: $= 3\sqrt{45/4} + \frac{9}{4}\ln\left(3 + \frac{3\sqrt{5}}{2}\right) - \frac{9}{4}\ln\left(\frac{3}{2}\right) = \frac{3\sqrt{45}}{2} + \frac{9}{4}\ln\frac{3 + 3\sqrt{5}/2}{3/2} = \frac{9\sqrt{5}}{2} + \frac{9}{4}\ln\frac{2 + \sqrt{5}}{1}$? Let's keep numerical.)

8. **$\mathbf{v}(t) = \langle \cos t, 2\sin t \rangle$, $0 \le t \le \pi$**
   - Displacement: $\int_0^\pi \cos t\,dt = [\sin t]_0^\pi = 0$, $\int_0^\pi 2\sin t\,dt = 2[-\cos t]_0^\pi = 2(1 - (-1)) = 4$.
     So displacement $= \langle 0, 4 \rangle$.
   - Speed $= \sqrt{\cos^2 t + 4\sin^2 t} = \sqrt{1 + 3\sin^2 t}$.
     Total distance $= \int_0^\pi \sqrt{1 + 3\sin^2 t}\, dt$. This integral is not elementary; it's an elliptic integral. On the exam, you'd set it up and perhaps use a calculator. For practice, we can note it's symmetric and maybe approximate: $\int_0^\pi \sqrt{1+3\sin^2 t}\, dt \approx 4.844$ (using calculator).

---

Vector-valued functions give us a compact and powerful way to handle motion in the plane. By differentiating and integrating component‑wise, we can easily switch between position, velocity, and acceleration. Remember the distinction between displacement (vector) and total distance (scalar), and always use initial conditions to pin down the constant vectors. Next, we'll explore polar coordinates—another way to describe curves and compute areas.