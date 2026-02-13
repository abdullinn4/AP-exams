# Lesson 7: Higher Order Derivatives

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

**Comments:**

*   **Process:** Higher-order derivatives are found by applying differentiation repeatedly. Each differentiation step must be valid (the function must be differentiable at that order).
*   **Interpretation:** While the first derivative $f'(x)$ represents the instantaneous rate of change of $f$ (slope, velocity), the second derivative $f''(x)$ represents the rate of change of the first derivative (acceleration, concavity). Third and higher derivatives have applications in physics (jerk), engineering, and series expansions.
*   **Notation Caution:** The superscript in $f^{(n)}$ is *not* an exponent but an indicator of the number of differentiations. In contrast, $f^n(x)$ usually means $[f(x)]^n$, so be careful to distinguish $f^{(n)}(x)$ (derivative) from $[f(x)]^n$ (power).

**Examples:**

1.  **Finding Higher Derivatives:** For $f(x) = x^5 - 3x^3 + 2x$, find $f'(x)$, $f''(x)$, and $f'''(x)$.
    *   $f'(x) = 5x^4 - 9x^2 + 2$
    *   $f''(x) = 20x^3 - 18x$
    *   $f'''(x) = 60x^2 - 18$
2.  **Using Leibniz Notation:** For $y = \sin x$, find $\frac{dy}{dx}$, $\frac{d^2y}{dx^2}$, and $\frac{d^3y}{dx^3}$.
    *   $\frac{dy}{dx} = \cos x$
    *   $\frac{d^2y}{dx^2} = -\sin x$
    *   $\frac{d^3y}{dx^3} = -\cos x$

---

### **7.2 Applications of Higher Derivatives**

**Definition:**

*   **Acceleration:** In motion along a line, if $s(t)$ represents position, then $v(t) = s'(t)$ is velocity, and $a(t) = v'(t) = s''(t)$ is acceleration.
*   **Concavity:** The second derivative determines concavity: if $f''(x) > 0$ on an interval, $f$ is concave up; if $f''(x) < 0$, $f$ is concave down.
*   **Jerk:** The third derivative of position with respect to time, $j(t) = s'''(t) = a'(t)$, is called jerk, representing the rate of change of acceleration.

**Comments:**

*   **Physics Connection:** Higher derivatives appear naturally in kinematics. Acceleration is the derivative of velocity, so jerk is the derivative of acceleration. In many real-world systems, controlling jerk is important for smooth operation (elevators, roller coasters).
*   **Mathematical Applications:** Higher derivatives are used in Taylor polynomials and series approximations, error estimates, and optimization problems involving curvature.

**Examples:**

1.  **Motion Problem:** A particle moves along a line with position function $s(t) = t^3 - 6t^2 + 9t$ (in meters, $t$ in seconds). Find its velocity, acceleration, and jerk at time $t$.
    *   Velocity: $v(t) = s'(t) = 3t^2 - 12t + 9$ m/s
    *   Acceleration: $a(t) = v'(t) = 6t - 12$ m/s²
    *   Jerk: $j(t) = a'(t) = 6$ m/s³
2.  **Concavity from Second Derivative:** Determine where $f(x) = x^4 - 4x^3$ is concave up and concave down.
    *   $f'(x) = 4x^3 - 12x^2$
    *   $f''(x) = 12x^2 - 24x = 12x(x - 2)$
    *   Set $f''(x) = 0$: $x = 0$ or $x = 2$.
    *   Test intervals:
        *   For $x < 0$, $f''(x) > 0$ → concave up.
        *   For $0 < x < 2$, $f''(x) < 0$ → concave down.
        *   For $x > 2$, $f''(x) > 0$ → concave up.
3.  **Higher Derivatives of Exponential:** Find the 100th derivative of $f(x) = e^{2x}$.
    *   Notice: $f'(x) = 2e^{2x}$, $f''(x) = 4e^{2x} = 2^2 e^{2x}$, $f'''(x) = 8e^{2x} = 2^3 e^{2x}$.
    *   Pattern: $f^{(n)}(x) = 2^n e^{2x}$.
    *   So, $f^{(100)}(x) = 2^{100} e^{2x}$.

---

### **Lesson 7 Summary**

**Key Points:**

1.  **Notation:** Be fluent with multiple notations: prime notation ($f', f'', f''', f^{(n)}$) and Leibniz notation ($\frac{dy}{dx}, \frac{d^2y}{dx^2}, \frac{d^ny}{dx^n}$).
2.  **Process:** To find higher-order derivatives, differentiate repeatedly. Ensure the function is differentiable at each step.
3.  **Applications:**
    *   Second derivative: acceleration, concavity.
    *   Third derivative: jerk.
    *   Higher derivatives: used in series expansions and advanced calculus.
4.  **Patterns:** For some functions (like polynomials, exponentials, sine, cosine), patterns emerge that allow you to write a general formula for the n-th derivative.

**Common Patterns:**

*   Polynomials: Eventually differentiate to zero.
*   $e^{kx}$: $\frac{d^n}{dx^n}[e^{kx}] = k^n e^{kx}$.
*   $\sin(ax)$ and $\cos(ax)$: Cycle every four derivatives.
*   $\ln x$: $\frac{d^n}{dx^n}[\ln x] = (-1)^{n-1} \frac{(n-1)!}{x^n}$ for $n \geq 1$.

---

### **Additional Practice Problems**

Find the indicated higher-order derivatives for each function.

1.  For $f(x) = 4x^3 - 2x^2 + x - 7$, find $f''(x)$ and $f^{(4)}(x)$.
2.  For $y = \cos(3x)$, find $\frac{d^2y}{dx^2}$ and $\frac{d^4y}{dx^4}$.
3.  For $g(x) = \frac{1}{x}$, find $g''(x)$ and $g'''(x)$.
4.  For $h(x) = \ln(2x)$, find $h''(x)$ and $h'''(x)$.
5.  A particle's position is given by $s(t) = \sqrt{t}$. Find its acceleration function $a(t)$.
6.  Find the second derivative of $y = x e^x$.
7.  Find $\frac{d^2}{dx^2}[\arctan x]$.
8.  If $f(x) = \sin(x^2)$, find $f''(x)$.
9.  Determine the value of $f''(0)$ for $f(x) = e^{-x^2}$.
10. Show that for $y = A\sin(\omega t) + B\cos(\omega t)$, $\frac{d^2y}{dt^2} = -\omega^2 y$. (This is the differential equation for simple harmonic motion.)

**Selected Solutions:**

1.  $f'(x) = 12x^2 - 4x + 1$, $f''(x) = 24x - 4$, $f'''(x) = 24$, $f^{(4)}(x) = 0$.
2.  $\frac{dy}{dx} = -3\sin(3x)$, $\frac{d^2y}{dx^2} = -9\cos(3x)$, $\frac{d^3y}{dx^3} = 27\sin(3x)$, $\frac{d^4y}{dx^4} = 81\cos(3x)$.
3.  $g(x) = x^{-1}$, $g'(x) = -x^{-2}$, $g''(x) = 2x^{-3} = \frac{2}{x^3}$, $g'''(x) = -6x^{-4} = -\frac{6}{x^4}$.
4.  $h(x) = \ln 2 + \ln x$, so $h'(x) = \frac{1}{x}$, $h''(x) = -\frac{1}{x^2}$, $h'''(x) = \frac{2}{x^3}$.
5.  $v(t) = s'(t) = \frac{1}{2\sqrt{t}} = \frac{1}{2} t^{-1/2}$, $a(t) = v'(t) = -\frac{1}{4} t^{-3/2} = -\frac{1}{4t\sqrt{t}}$.
6.  $y' = e^x + x e^x = e^x(1+x)$, $y'' = e^x(1+x) + e^x(1) = e^x(2+x)$.
7.  $\frac{d}{dx}[\arctan x] = \frac{1}{1+x^2}$, so $\frac{d^2}{dx^2}[\arctan x] = \frac{d}{dx}\left[\frac{1}{1+x^2}\right] = -\frac{2x}{(1+x^2)^2}$.
8.  $f'(x) = 2x\cos(x^2)$, $f''(x) = 2\cos(x^2) + 2x \cdot (-\sin(x^2) \cdot 2x) = 2\cos(x^2) - 4x^2\sin(x^2)$.
9.  $f'(x) = -2x e^{-x^2}$, $f''(x) = -2e^{-x^2} + (-2x)(-2x e^{-x^2}) = -2e^{-x^2} + 4x^2 e^{-x^2} = e^{-x^2}(4x^2 - 2)$. Then $f''(0) = e^0(0 - 2) = -2$.
10. $\frac{dy}{dt} = A\omega\cos(\omega t) - B\omega\sin(\omega t)$, $\frac{d^2y}{dt^2} = -A\omega^2\sin(\omega t) - B\omega^2\cos(\omega t) = -\omega^2 [A\sin(\omega t) + B\cos(\omega t)] = -\omega^2 y$.