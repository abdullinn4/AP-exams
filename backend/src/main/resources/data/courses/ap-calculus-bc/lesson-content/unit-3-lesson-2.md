# Differentiating Inverse Functions. Higher Order Derivatives

So far, we've been focused on finding the first derivative—the slope, the rate of change. 

So usually we have some function $f(x)$. We take the derivative and get $f'(x)$ 

But why stop there?

Once we have a derivative, it's itself a function. And what can we do with functions? Differentiate them! 

That's where higher order derivatives come in. They might sound fancy, but they're just derivatives of derivatives. And they turn out to be incredibly useful—from describing motion (acceleration, jerk) to understanding the shape of a graph (concavity). Let's dive in.

But, let's derive inverse trigomometric functions formulas first. And to do so we need to talk about inverse fucntions in general. 

---

### **Derivatives of Inverse Functions**

Here's a cool connection: if a function and its inverse are both differentiable, their derivatives at corresponding points are reciprocals. Makes intuitive sense—if $f$ grows quickly, its inverse grows slowly, and vice versa.

**Definition:**

If $f$ is a one-to-one function differentiable at $x = a$, with $f'(a) \neq 0$, and $f^{-1}$ is its inverse function, then $f^{-1}$ is differentiable at $b = f(a)$ and:

$$
(f^{-1})'(b) = \frac{1}{f'(a)} \quad \text{or equivalently} \quad (f^{-1})'(b) = \frac{1}{f'(f^{-1}(b))}
$$

This formula can be derived using implicit differentiation on the relationship $f(f^{-1}(x)) = x$.

**Geometric Interpretation:**

The slopes of a function and its inverse at corresponding points are reciprocals. If $(a, b)$ is on the graph of $f$, then $(b, a)$ is on the graph of $f^{-1}$, and their tangent lines have slopes that multiply to 1 (provided neither is 0 or undefined).

**Procedure:**

To find the derivative of an inverse function at a point, you need to know the derivative of the original function at the corresponding point. So step one is always: find the $x$ that gives you the $y$ you're interested in.

**Examples:**

1. **Using the Formula:** Let $f(x) = x^3 + 2x + 1$. Find $(f^{-1})'(4)$.

   *First, find $a$ such that $f(a) = 4$:*
   $a^3 + 2a + 1 = 4 \Rightarrow a^3 + 2a - 3 = 0$
   
   *By inspection, $a = 1$ works: $1 + 2 - 3 = 0$.*
   
   *Now find $f'(x)$: $f'(x) = 3x^2 + 2$*
   
   *So $f'(1) = 3(1)^2 + 2 = 5$*
   
   *Therefore:*
   $\displaystyle (f^{-1})'(4) = \frac{1}{f'(1)} = \frac{1}{5}$

2. **Derivative of Natural Logarithm:** Derive $\frac{d}{dx}[\ln x]$ using the fact that $\ln x$ is the inverse of $e^x$.

   *Let $y = \ln x$, then $x = e^y$.*
   
   *Differentiate implicitly with respect to $x$:*
   $\displaystyle 1 = e^y \cdot \frac{dy}{dx}$
   
   *Solve for $\frac{dy}{dx}$:*
   $\displaystyle \frac{dy}{dx} = \frac{1}{e^y} = \frac{1}{x}$
   
   *Beautiful—the formula we already know, derived from inverse relationships.*


---
### **Derivatives of Inverse Trigonometric Functions**

Now let's add the inverse trig functions to our toolkit. These show up frequently in integration (as we'll see later), so getting comfortable with them now is a good investment.

**Definition:**

The derivatives of the inverse trigonometric functions are:

1. $\displaystyle \frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1 - x^2}}$, for $-1 < x < 1$

2. $\displaystyle \frac{d}{dx}[\arccos x] = -\frac{1}{\sqrt{1 - x^2}}$, for $-1 < x < 1$
3. $\displaystyle \frac{d}{dx}[\arctan x] = \frac{1}{1 + x^2}$
4. $\displaystyle \frac{d}{dx}[\operatorname{arccot} x] = -\frac{1}{1 + x^2}$
5. $\displaystyle \frac{d}{dx}[\operatorname{arcsec} x] = \frac{1}{|x|\sqrt{x^2 - 1}}$, for $|x| > 1$
6. $\displaystyle \frac{d}{dx}[\operatorname{arccsc} x] = -\frac{1}{|x|\sqrt{x^2 - 1}}$, for $|x| > 1$

These can be derived using implicit differentiation and trigonometric identities. For AP Calculus, you should memorize at least the first three: $\arcsin$, $\arccos$, and $\arctan$—they're the most commonly used.

**Notice the patterns:**

- $\arcsin$ and $\arccos$ are almost the same, but $\arccos$ has a negative sign.
- $\arctan$ and $\operatorname{arccot}$ follow the same pattern—$\operatorname{arccot}$ is negative.
- $\operatorname{arcsec}$ and $\operatorname{arccsc}$ have the absolute value and $\sqrt{x^2-1}$ in the denominator.

**Examples:**

1. **Basic Inverse Trig Derivatives:** Find $\displaystyle \frac{d}{dx}[2\arcsin x - 3\arctan x]$.

   $\displaystyle 2 \cdot \frac{1}{\sqrt{1-x^2}} - 3 \cdot \frac{1}{1+x^2} = \frac{2}{\sqrt{1-x^2}} - \frac{3}{1+x^2}$

2. **Chain Rule with Inverse Trig:** Find $\displaystyle \frac{d}{dx}[\arctan(3x)]$.

   *Outer: $\arctan(u)$, inner: $u=3x$.*
   *Derivative of outer: $\frac{1}{1+u^2}$.*
   *Derivative of inner: $3$.*
   
   $\displaystyle \frac{d}{dx}[\arctan(3x)] = \frac{1}{1+(3x)^2} \cdot 3 = \frac{3}{1+9x^2}$

3. **Implicit Derivation (Optional):** Derive the derivative of $y = \arcsin x$ using implicit differentiation.

   *$y = \arcsin x$ means $x = \sin y$, where $-\frac{\pi}{2} \le y \le \frac{\pi}{2}$.*
   
   *Differentiate implicitly with respect to $x$:*
   $\displaystyle 1 = \cos y \cdot \frac{dy}{dx}$
   
   *Solve for $\frac{dy}{dx}$:*
   $\displaystyle \frac{dy}{dx} = \frac{1}{\cos y}$
   
   *Now use the identity $\cos y = \sqrt{1 - \sin^2 y} = \sqrt{1 - x^2}$.*
   *Since $y$ is in $[-\frac{\pi}{2}, \frac{\pi}{2}]$, $\cos y \ge 0$, so we take the positive root.*
   
   *Thus:*
   $\displaystyle \frac{dy}{dx} = \frac{1}{\sqrt{1-x^2}}$
   
   *And there it is—the formula we memorized.*

---

### **7.1 Definition and Notation**

**Definition:**

If a function $f$ is differentiable, its derivative $f'$ is called the **first derivative**. If $f'$ is also differentiable, we can differentiate it to obtain the **second derivative**, denoted $f''$. This process can continue to obtain **higher-order derivatives**: the third derivative $f'''$, the fourth derivative $f^{(4)}$, and in general, the **n-th derivative** $f^{(n)}$.

For a function $y = f(x)$, common notations for higher-order derivatives include:

*   **Second derivative:**
    $$f''(x), \quad y'', \quad \frac{d^2y}{dx^2}, \quad \frac{d^2}{dx^2}[f(x)]$$
*   **Third derivative:**
    $$f'''(x), \quad y''', \quad \frac{d^3y}{dx^3}, \quad \frac{d^3}{dx^3}[f(x)]$$
*   **n-th derivative (for $n \geq 4$):**
    $$f^{(n)}(x), \quad y^{(n)}, \quad \frac{d^ny}{dx^n}, \quad \frac{d^n}{dx^n}[f(x)]$$

The notation $\frac{d^ny}{dx^n}$ is read as "the n-th derivative of y with respect to x."

**Key Points:**

*   **Process:** Higher-order derivatives are found by applying differentiation repeatedly. Each differentiation step must be valid—the function must be differentiable at that order.
*   **Interpretation:** While the first derivative $f'(x)$ represents the instantaneous rate of change of $f$ (slope, velocity), the second derivative $f''(x)$ represents the rate of change of the first derivative (acceleration, concavity). Third and higher derivatives have applications in physics (jerk), engineering, and series expansions.
*   **Notation Caution:** The superscript in $f^{(n)}$ is *not* an exponent but an indicator of the number of differentiations. In contrast, $f^n(x)$ usually means $[f(x)]^n$, so be careful to distinguish $f^{(n)}(x)$ (derivative) from $[f(x)]^n$ (power). For example, $\sin^2 x$ means $(\sin x)^2$, while $\sin^{(2)}x$ means the second derivative of $\sin x$, which is $-\sin x$.

**Examples:**

1. **Finding Higher Derivatives of a Polynomial:** For $f(x) = x^5 - 3x^3 + 2x$, find $f'(x)$, $f''(x)$, and $f'''(x)$.

   *We just differentiate step by step:*
   $$f'(x) = 5x^4 - 9x^2 + 2$$
   $$f''(x) = 20x^3 - 18x$$
   $$f'''(x) = 60x^2 - 18$$
   
   *See how the degree drops each time? Eventually, after enough derivatives, a polynomial will become zero. For a 5th degree polynomial, the 6th derivative is 0.*

2. **Using Leibniz Notation:** For $y = \sin x$, find $\frac{dy}{dx}$, $\frac{d^2y}{dx^2}$, and $\frac{d^3y}{dx^3}$.

   $$\frac{dy}{dx} = \cos x$$
   $$\frac{d^2y}{dx^2} = -\sin x$$
   $$\frac{d^3y}{dx^3} = -\cos x$$
   
   *Notice the pattern: derivatives of sine and cosine cycle every four derivatives. $\sin x \to \cos x \to -\sin x \to -\cos x \to \sin x$. Handy!*

3. **Higher Derivatives of Exponential:** Find the 4th derivative of $f(x) = e^{2x}$.

   $$f'(x) = 2e^{2x}$$
   $$f''(x) = 4e^{2x} = 2^2 e^{2x}$$
   $$f'''(x) = 8e^{2x} = 2^3 e^{2x}$$
   $$f^{(4)}(x) = 16e^{2x} = 2^4 e^{2x}$$
   
   *The pattern is clear: $f^{(n)}(x) = 2^n e^{2x}$. So if someone asks for the 100th derivative, you can say it's $2^{100}e^{2x}$ without breaking a sweat.*

---

### **7.2 Applications of Higher Derivatives**

Higher derivatives aren't just an abstract exercise—they show up in the real world. Let's look at a few key applications.

#### **7.2.1 Motion: Position, Velocity, Acceleration, and Jerk**

If you've taken physics, you know that velocity is the derivative of position, and acceleration is the derivative of velocity. That means acceleration is the *second* derivative of position. But why stop there? The rate of change of acceleration—the third derivative of position—is called **jerk**. It's the "jerkiness" of a ride, and engineers care about it a lot (especially for elevators and roller coasters).

**Definition:**

*   If $s(t)$ is the position function of an object moving along a line,
    - Velocity: $v(t) = s'(t)$
    - Acceleration: $a(t) = v'(t) = s''(t)$
    - Jerk: $j(t) = a'(t) = s'''(t)$

**Example: Motion Problem**

A particle moves along a line with position function $s(t) = t^3 - 6t^2 + 9t$ (in meters, $t$ in seconds). Find its velocity, acceleration, and jerk at time $t$.

*   Velocity: $v(t) = s'(t) = 3t^2 - 12t + 9$ m/s
*   Acceleration: $a(t) = v'(t) = 6t - 12$ m/s²
*   Jerk: $j(t) = a'(t) = 6$ m/s³

*Interpretation: The jerk is constant (6 m/s³), meaning the acceleration is increasing at a constant rate. If you're in a car, that's a smooth increase in acceleration—no sudden changes.*

#### **7.2.2 Concavity and the Second Derivative**

You've already seen that the first derivative tells you where a function is increasing or decreasing. The second derivative tells you about the *shape*—whether the graph is curving upward (concave up) or downward (concave down).

**Definition:**

*   If $f''(x) > 0$ on an interval, $f$ is **concave up** on that interval (like a cup that holds water).
*   If $f''(x) < 0$ on an interval, $f$ is **concave down** on that interval (like a frown).

*Points where concavity changes are called inflection points—where $f''(x) = 0$ or undefined, and the sign changes.*

**Example: Concavity from Second Derivative**

Determine where $f(x) = x^4 - 4x^3$ is concave up and concave down.

*   First, find the second derivative:
    $$f'(x) = 4x^3 - 12x^2$$
    $$f''(x) = 12x^2 - 24x = 12x(x - 2)$$
*   Set $f''(x) = 0$: $x = 0$ or $x = 2$.
*   Now test intervals around these points:
    - For $x < 0$, pick $x = -1$: $f''(-1) = 12(-1)(-3) = 36 > 0$ → concave up.
    - For $0 < x < 2$, pick $x = 1$: $f''(1) = 12(1)(-1) = -12 < 0$ → concave down.
    - For $x > 2$, pick $x = 3$: $f''(3) = 12(3)(1) = 36 > 0$ → concave up.
*   So $f$ is concave up on $(-\infty, 0)$ and $(2, \infty)$, concave down on $(0,2)$. The points $x=0$ and $x=2$ are inflection points.

#### **7.2.3 Patterns and Higher Derivatives**

Sometimes you need a higher derivative for something like a Taylor series (which you'll see later) or just to find a pattern. Recognizing patterns can save you a ton of time.

**Example: Higher Derivatives of Sine and Cosine**

Find the 99th derivative of $f(x) = \sin x$.

*   Instead of differentiating 99 times, look for the cycle:
    $$f(x) = \sin x$$
    $$f'(x) = \cos x$$
    $$f''(x) = -\sin x$$
    $$f'''(x) = -\cos x$$
    $$f^{(4)}(x) = \sin x$$
    The cycle repeats every 4 derivatives.
*   To find the 99th, divide 99 by 4: $99 = 4 \times 24 + 3$, remainder 3.
    - Remainder 0: $\sin x$
    - Remainder 1: $\cos x$
    - Remainder 2: $-\sin x$
    - Remainder 3: $-\cos x$
*   Since remainder is 3, $f^{(99)}(x) = -\cos x$.

**Example: Higher Derivatives of $e^{kx}$**

As we saw, $f(x) = e^{kx}$ has $f^{(n)}(x) = k^n e^{kx}$. So the 10th derivative of $e^{0.5x}$ is $(0.5)^{10} e^{0.5x} = \frac{1}{2^{10}} e^{0.5x}$.

---

### **Lesson 7 Summary**

*   Higher order derivatives are just successive derivatives: $f'$, $f''$, $f'''$, ..., $f^{(n)}$.
*   Notation: $f''(x)$, $\frac{d^2y}{dx^2}$, $y''$, and for $n\ge4$, $f^{(n)}(x)$.
*   Applications:
    - In motion: $s(t)$ → $v(t)=s'(t)$ → $a(t)=v'(t)=s''(t)$ → $j(t)=a'(t)=s'''(t)$.
    - Concavity: $f''(x) > 0$ means concave up, $f''(x) < 0$ means concave down.
    - Patterns: many functions (sin, cos, exponentials) have repeating or predictable higher derivatives.
*   Be careful with notation: $f^{(n)}(x)$ is not the same as $f^n(x)$.

Higher order derivatives might feel like more of the same, but they open the door to deeper understanding of functions and their behavior. Next up, we'll use these tools to tackle some classic calculus problems: related rates and optimization. But for now, practice taking those second, third, and n-th derivatives until they feel natural.