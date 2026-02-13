# Lesson 6: Chain Rule and Implicit Differentiation

### **6.1 The Chain Rule**

**Definition:**

If $y = f(u)$ is differentiable at $u = g(x)$ and $g$ is differentiable at $x$, then the composite function $y = f(g(x))$ is differentiable at $x$ and:

$$
\frac{dy}{dx}=f'(g(x)) \cdot g'(x)
$$

or equivalently,

$$
\frac{dy}{dx}=\frac{dy}{du} \cdot \frac{du}{dx}
$$

The Chain Rule allows us to differentiate composite functions—functions within functions. It's the most important rule for differentiating a wide variety of functions encountered in calculus.

**Comments:**

*   **When to Use:** Look for functions like $\sin(x^2)$, $e^{3x}$, $(x^2+1)^5$, $\ln(\cos x)$—any function where one expression is *inside* another function.
*   **Strategy:** Identify the "outer function" and the "inner function." Differentiate the outer function, leaving the inner function unchanged, then multiply by the derivative of the inner function.
*   **Common Mistake:** Forgetting to multiply by the derivative of the inner function.

**Examples:**

1.  **Basic Chain Rule:** Find $\frac{d}{dx}[(3x^2 + 5)^4]$.
    *   Outer function: $u^4$ where $u = 3x^2+5$.
    *   $\frac{dy}{du} = 4u^3$, $\frac{du}{dx} = 6x$.
    *   $\frac{dy}{dx} = 4(3x^2+5)^3 \cdot (6x) = 24x(3x^2+5)^3$.
2.  **Trigonometric Composite:** Find $\frac{d}{dx}[\sin(5x)]$.
    *   Outer: $\sin(u)$, inner: $u=5x$.
    *   $\frac{d}{dx}[\sin(5x)] = \cos(5x) \cdot 5 = 5\cos(5x)$.
3.  **Exponential Composite:** Find $\frac{d}{dx}[e^{x^2}]$.
    *   Outer: $e^u$, inner: $u=x^2$.
    *   $\frac{d}{dx}[e^{x^2}] = e^{x^2} \cdot 2x = 2xe^{x^2}$.
4.  **Multiple Compositions:** Find $\frac{d}{dx}[\sqrt{\sin(3x)}]$.
    *   Rewrite: $(\sin(3x))^{1/2}$.
    *   Outer: $u^{1/2}$, next: $\sin(v)$, inner: $v=3x$.
    *   Apply chain rule twice: $\frac{1}{2}(\sin(3x))^{-1/2} \cdot \cos(3x) \cdot 3 = \frac{3\cos(3x)}{2\sqrt{\sin(3x)}}$.

---

### **6.2 Implicit Differentiation**

**Definition:**

**Implicit differentiation** is a technique used to find $\frac{dy}{dx}$ when a function is defined implicitly by an equation relating $x$ and $y$, rather than explicitly as $y = f(x)$.

The process involves differentiating both sides of the equation with respect to $x$, treating $y$ as a function of $x$ (using the Chain Rule for terms involving $y$), then solving algebraically for $\frac{dy}{dx}$.

**Comments:**

*   **When to Use:** When you cannot (or do not want to) solve an equation explicitly for $y$ in terms of $x$. Common in equations of curves like circles, ellipses, and more complex relations.
*   **Key Step:** Remember that $\frac{d}{dx}[y^n] = n y^{n-1} \cdot \frac{dy}{dx}$ by the Chain Rule.
*   **Result:** The derivative $\frac{dy}{dx}$ will typically be expressed in terms of both $x$ and $y$.

**Examples:**

1.  **Basic Implicit Differentiation:** Find $\frac{dy}{dx}$ if $x^2 + y^2 = 25$.
    *   Differentiate both sides with respect to $x$: $\frac{d}{dx}[x^2] + \frac{d}{dx}[y^2] = \frac{d}{dx}[25]$.
    *   $2x + 2y \frac{dy}{dx} = 0$.
    *   Solve for $\frac{dy}{dx}$: $2y \frac{dy}{dx} = -2x$, so $\frac{dy}{dx} = -\frac{x}{y}$.
2.  **Product and Chain Rule Combined:** Find $\frac{dy}{dx}$ if $x^3y + y^3 = x$.
    *   Differentiate: $\frac{d}{dx}[x^3y] + \frac{d}{dx}[y^3] = \frac{d}{dx}[x]$.
    *   For $x^3y$, use the product rule: $(3x^2)y + x^3\frac{dy}{dx}$.
    *   For $y^3$: $3y^2 \frac{dy}{dx}$.
    *   Equation becomes: $3x^2y + x^3\frac{dy}{dx} + 3y^2\frac{dy}{dx} = 1$.
    *   Group terms with $\frac{dy}{dx}$: $(x^3 + 3y^2)\frac{dy}{dx} = 1 - 3x^2y$.
    *   Solve: $\frac{dy}{dx} = \frac{1 - 3x^2y}{x^3 + 3y^2}$.
3.  **Finding Slope at a Point:** Find the slope of the tangent line to the curve $x^2 + 2xy - y^2 = 1$ at the point $(2, 3)$.
    *   Differentiate implicitly: $2x + 2(1 \cdot y + x \cdot \frac{dy}{dx}) - 2y\frac{dy}{dx} = 0$.
    *   Simplify: $2x + 2y + 2x\frac{dy}{dx} - 2y\frac{dy}{dx} = 0$.
    *   Group terms: $(2x - 2y)\frac{dy}{dx} = -2x - 2y$.
    *   $\frac{dy}{dx} = \frac{-2x - 2y}{2x - 2y} = \frac{-x - y}{x - y}$.
    *   At $(2, 3)$: $\frac{dy}{dx} = \frac{-2 - 3}{2 - 3} = \frac{-5}{-1} = 5$.

---

### **6.3 Derivatives of Inverse Functions**

**Definition:**

If $f$ is a one-to-one function differentiable at $x = a$, with $f'(a) \neq 0$, and $f^{-1}$ is its inverse function, then $f^{-1}$ is differentiable at $b = f(a)$ and:

$$
(f^{-1})'(b)=\frac{1}{f'(a)} \quad \text{or equivalently} \quad (f^{-1})'(b)=\frac{1}{f'(f^{-1}(b))}
$$

This formula can be derived using implicit differentiation on the relationship $f(f^{-1}(x)) = x$.

**Comments:**

*   **Geometric Interpretation:** The slopes of a function and its inverse at corresponding points are reciprocals. If $(a, b)$ is on the graph of $f$, then $(b, a)$ is on the graph of $f^{-1}$, and their tangent lines have slopes that multiply to 1 (provided neither is 0 or undefined).
*   **Procedure:** To find the derivative of an inverse function at a point, you need to know the derivative of the original function at the corresponding point.

**Examples:**

1.  **Using the Formula:** Let $f(x) = x^3 + 2x + 1$. Find $(f^{-1})'(4)$.
    *   First, find $a$ such that $f(a) = 4$: $a^3 + 2a + 1 = 4 \Rightarrow a^3 + 2a - 3 = 0$.
    *   By inspection, $a = 1$ works: $1 + 2 - 3 = 0$.
    *   $f'(x) = 3x^2 + 2$, so $f'(1) = 3(1)^2 + 2 = 5$.
    *   Therefore, $(f^{-1})'(4) = \frac{1}{f'(1)} = \frac{1}{5}$.
2.  **Derivative of Natural Logarithm:** Derive $\frac{d}{dx}[\ln x]$ using the fact that $\ln x$ is the inverse of $e^x$.
    *   Let $y = \ln x$, then $x = e^y$.
    *   Differentiate implicitly with respect to $x$: $1 = e^y \cdot \frac{dy}{dx}$.
    *   Solve for $\frac{dy}{dx}$: $\frac{dy}{dx} = \frac{1}{e^y} = \frac{1}{x}$.

---

### **6.4 Derivatives of Inverse Trigonometric Functions**

**Definition:**

The derivatives of the inverse trigonometric functions are:

1.  $\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1 - x^2}}$, for $-1 < x < 1$
2.  $\frac{d}{dx}[\arccos x] = -\frac{1}{\sqrt{1 - x^2}}$, for $-1 < x < 1$
3.  $\frac{d}{dx}[\arctan x] = \frac{1}{1 + x^2}$
4.  $\frac{d}{dx}[\operatorname{arccot x}] = -\frac{1}{1 + x^2}$
5.  $\frac{d}{dx}[\operatorname{arcsec x}] = \frac{1}{|x|\sqrt{x^2 - 1}}$, for $|x| > 1$
6.  $\frac{d}{dx}[\operatorname{arccsc x}] = -\frac{1}{|x|\sqrt{x^2 - 1}}$, for $|x| > 1$

These can be derived using implicit differentiation and trigonometric identities. They should be memorized for AP Calculus.

**Examples:**

1.  **Basic Inverse Trig Derivatives:** Find $\frac{d}{dx}[2\arcsin x - 3\arctan x]$.
    *   $2 \cdot \frac{1}{\sqrt{1-x^2}} - 3 \cdot \frac{1}{1+x^2} = \frac{2}{\sqrt{1-x^2}} - \frac{3}{1+x^2}$.
2.  **Chain Rule with Inverse Trig:** Find $\frac{d}{dx}[\arctan(3x)]$.
    *   Outer: $\arctan(u)$, inner: $u=3x$.
    *   $\frac{1}{1+(3x)^2} \cdot 3 = \frac{3}{1+9x^2}$.
3.  **Implicit Derivation (Optional):** Derive the derivative of $y = \arcsin x$ using implicit differentiation.
    *   $y = \arcsin x$ means $x = \sin y$, where $-\frac{\pi}{2} \le y \le \frac{\pi}{2}$.
    *   Differentiate: $1 = \cos y \cdot \frac{dy}{dx}$.
    *   Solve: $\frac{dy}{dx} = \frac{1}{\cos y}$.
    *   Use identity: $\cos y = \sqrt{1 - \sin^2 y} = \sqrt{1 - x^2}$. Since $\cos y \ge 0$ on the given interval, we take the positive root.
    *   Thus, $\frac{dy}{dx} = \frac{1}{\sqrt{1-x^2}}$.

---

### **Lesson 6 Summary: Selecting a Differentiation Procedure**

When faced with a differentiation problem, follow this decision tree:

1.  **Is the function given explicitly as y = f(x)?** If yes, proceed. If not, use **implicit differentiation**.
2.  **Is it a composite function (function inside another)?** If yes, use the **Chain Rule**.
3.  **Is it a product of two functions?** Use the **Product Rule**.
4.  **Is it a quotient of two functions?** Use the **Quotient Rule**.
5.  **Is it a basic function (polynomial, trig, exponential, log, inverse trig)?** Apply the corresponding derivative formula.
6.  **Is it an inverse function?** Use the inverse function derivative formula or implicit differentiation.

Often, multiple rules are needed in combination (e.g., Chain Rule within Product Rule).

**Key Formulas to Memorize:**

*   Chain Rule: $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$
*   Inverse Function: $(f^{-1})'(b) = \frac{1}{f'(a)}$ where $b = f(a)$
*   Inverse Trig Derivatives (especially $\arcsin$, $\arccos$, $\arctan$)

### **Additional Practice Problems**

Differentiate each function:

1.  $y = (x^3 + 2x)^{10}$
2.  $f(x) = \sin(\ln x)$
3.  $g(x) = e^{\arctan x}$
4.  $x^2 + xy + y^2 = 7$ (find $\frac{dy}{dx}$ implicitly)
5.  $y = \arcsin(2x)$
6.  $x \cos y = y$ (find $\frac{dy}{dx}$ implicitly)
7.  $h(x) = \ln(\sec x + \tan x)$
8.  $y = (\ln x)^{\cos x}$ (Hint: Use logarithmic differentiation—take ln of both sides first)
9.  Let $f(x) = x^5 + 2x^3 + x$. Find $(f^{-1})'(4)$.
10. Find the equation of the tangent line to the curve $y^3 + xy - 2 = 0$ at the point $(1, 1)$.

Evaluate:

1.  $\frac{d}{dx}[\sqrt{\arcsin x}]$
2.  $\frac{d}{dx}\left[\frac{\arctan x}{1+x^2}\right]$
3.  Use implicit differentiation to show that $\frac{d}{dx}[\arccos x] = -\frac{1}{\sqrt{1-x^2}}$.
4.  Find $\frac{dy}{dx}$ if $e^{xy} = x + y$.

**Selected Solutions:**

1.  $10(x^3+2x)^9 \cdot (3x^2+2) = (30x^2+20)(x^3+2x)^9$
2.  $\cos(\ln x) \cdot \frac{1}{x} = \frac{\cos(\ln x)}{x}$
3.  $e^{\arctan x} \cdot \frac{1}{1+x^2} = \frac{e^{\arctan x}}{1+x^2}$
4.  $2x + (1 \cdot y + x \cdot \frac{dy}{dx}) + 2y\frac{dy}{dx} = 0 \Rightarrow 2x+y + (x+2y)\frac{dy}{dx}=0 \Rightarrow \frac{dy}{dx} = -\frac{2x+y}{x+2y}$
5.  $\frac{1}{\sqrt{1-(2x)^2}} \cdot 2 = \frac{2}{\sqrt{1-4x^2}}$
6.  $\cos y + x(-\sin y)\frac{dy}{dx} = \frac{dy}{dx} \Rightarrow \cos y = \frac{dy}{dx} + x\sin y \frac{dy}{dx} = \frac{dy}{dx}(1+x\sin y) \Rightarrow \frac{dy}{dx} = \frac{\cos y}{1+x\sin y}$
7.  Note: $\sec x + \tan x$ is a known form. $\frac{d}{dx}[\ln(\sec x+\tan x)] = \frac{\sec x\tan x+\sec^2 x}{\sec x+\tan x} = \sec x$ (after simplification).
8.  Let $y = (\ln x)^{\cos x}$. Take $\ln$: $\ln y = \cos x \ln(\ln x)$. Differentiate implicitly: $\frac{1}{y} \frac{dy}{dx} = -\sin x \ln(\ln x) + \cos x \cdot \frac{1}{\ln x} \cdot \frac{1}{x}$. Then $\frac{dy}{dx} = y \left[ -\sin x \ln(\ln x) + \frac{\cos x}{x\ln x} \right] = (\ln x)^{\cos x} \left( \frac{\cos x}{x\ln x} - \sin x \ln(\ln x) \right)$.
9.  $f'(x)=5x^4+6x^2+1$. We need $a$ such that $f(a)=4$. $a=1$ works: $1+2+1=4$. $f'(1)=5+6+1=12$, so $(f^{-1})'(4)=\frac{1}{12}$.
10. Differentiate: $3y^2\frac{dy}{dx} + (1\cdot y + x\cdot \frac{dy}{dx}) = 0$. At $(1,1)$: $3(1)\frac{dy}{dx} + (1 + 1\cdot \frac{dy}{dx}) = 0 \Rightarrow 3\frac{dy}{dx} + 1 + \frac{dy}{dx} = 0 \Rightarrow 4\frac{dy}{dx} = -1 \Rightarrow \frac{dy}{dx} = -\frac{1}{4}$. Tangent line: $y-1=-\frac{1}{4}(x-1)$.
11. $\frac{1}{2\sqrt{\arcsin x}} \cdot \frac{1}{\sqrt{1-x^2}} = \frac{1}{2\sqrt{\arcsin x}\sqrt{1-x^2}}$
12. Use quotient rule: $\frac{\frac{1}{1+x^2}(1+x^2) - \arctan x(2x)}{(1+x^2)^2} = \frac{1 - 2x\arctan x}{(1+x^2)^2}$.
13. Let $y=\arccos x$, so $x=\cos y$, $0\le y\le\pi$. Differentiate: $1=-\sin y \frac{dy}{dx}$. So $\frac{dy}{dx}=-\frac{1}{\sin y}=-\frac{1}{\sqrt{1-\cos^2 y}}=-\frac{1}{\sqrt{1-x^2}}$ (since $\sin y\ge0$ on $[0,\pi]$, so positive root).
14. $e^{xy}(y + x\frac{dy}{dx}) = 1 + \frac{dy}{dx}$. Then $ye^{xy} + xe^{xy}\frac{dy}{dx} = 1 + \frac{dy}{dx}$. Group: $xe^{xy}\frac{dy}{dx} - \frac{dy}{dx} = 1 - ye^{xy}$. So $\frac{dy}{dx}(xe^{xy}-1) = 1 - ye^{xy}$, thus $\frac{dy}{dx} = \frac{1 - ye^{xy}}{xe^{xy}-1}$.