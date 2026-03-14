# Chain Rule and Implicit Differentiation

Alright, we've built up quite a toolkit. You've got your basic derivative rules, you can handle products and quotients, and you know your trig, exponential, and log derivatives. But here's the thing—most functions in the real world aren't nice and simple like $x^2$ or $\sin x$.

Imagine you need to evaluate the limit of function like $\sin(2x)$, $e^{x^2}$, or $\sqrt{\tan x}$. 

How do we handle those?

That's where the Chain Rule comes in. It's arguably the most important rule in all of differentiation—the one that unlocks everything else.

And once we master that, we'll tackle implicit differentiation, which lets us find derivatives even when we can't solve for $y$ explicitly.

Let's dive in.

---

## **The Chain Rule**

Here's the idea: when you have a function inside another function, you need to differentiate from the outside in. Like peeling an onion—layer by layer.

### **Definition:**

If $y = f(u)$ is differentiable at $u = g(x)$ and $g$ is differentiable at $x$, then the composite function $y = f(g(x))$ is differentiable at $x$ and:

$$
\frac{dy}{dx} = f'(g(x)) \cdot g'(x)
$$

or equivalently,

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$

The Chain Rule allows us to differentiate composite functions—functions within functions. It's the most important rule for differentiating a wide variety of functions encountered in calculus.



So every time you see functions like $\sin(x^2)$, $e^{3x}$, $(x^2+1)^5$, $\ln(\cos x)$—any function where one expression is *inside* another function. If you see parentheses, exponents, or arguments that aren't just a simple $x$, the Chain Rule is probably involved.

Here's what you should do:

1. Identify the "outer function" and the "inner function."
2. Differentiate the outer function, leaving the inner function unchanged.
3. Multiply by the derivative of the inner function.
4. If there are multiple layers, keep peeling—apply the Chain Rule again if needed.

**Common Mistake:**
*Forgetting to multiply by the derivative of the inner function. It's the most common error students make. Don't let it be you!*

**Examples:**

1. **Basic Chain Rule:** Find $\displaystyle \frac{d}{dx}[(3x^2 + 5)^4]$.

   *Outer function: $u^4$ where $u = 3x^2+5$.*
   *Derivative of outer: $4u^3$.*
   *Derivative of inner: $6x$.*
   
   $\displaystyle \frac{dy}{dx} = 4(3x^2+5)^3 \cdot (6x) = 24x(3x^2+5)^3$

2. **Trigonometric Composite:** Find $\displaystyle \frac{d}{dx}[\sin(5x)]$.

   *Outer: $\sin(u)$, inner: $u=5x$.*
   *Derivative of outer: $\cos(u)$.*
   *Derivative of inner: $5$.*
   
   $\displaystyle \frac{d}{dx}[\sin(5x)] = \cos(5x) \cdot 5 = 5\cos(5x)$

3. **Exponential Composite:** Find $\displaystyle \frac{d}{dx}[e^{x^2}]$.

   *Outer: $e^u$, inner: $u=x^2$.*
   *Derivative of outer: $e^u$.*
   *Derivative of inner: $2x$.*
   
   $\displaystyle \frac{d}{dx}[e^{x^2}] = e^{x^2} \cdot 2x = 2xe^{x^2}$

4. **Multiple Compositions:** Find $\displaystyle \frac{d}{dx}[\sqrt{\sin(3x)}]$.

   *First, rewrite: $(\sin(3x))^{1/2}$.*
   *Now we have layers: outer: $u^{1/2}$, middle: $\sin(v)$, inner: $v=3x$.*
   
   *Derivative of outer: $\frac{1}{2}u^{-1/2}$.*
   *Derivative of middle: $\cos(v)$.*
   *Derivative of inner: $3$.*
   
   $\displaystyle \frac{d}{dx}[\sqrt{\sin(3x)}] = \frac{1}{2}(\sin(3x))^{-1/2} \cdot \cos(3x) \cdot 3 = \frac{3\cos(3x)}{2\sqrt{\sin(3x)}}$

   *See how we just kept multiplying? That's the Chain Rule in action.*

---

### **Implicit Differentiation**

So far, all our functions have been given explicitly: $y = f(x)$. 

But what if we have an equation like $x^2 + y^2 = 25$? That's a circle—$y$ isn't a function of $x$ (it fails the vertical line test), but we can still find the slope at any point. How? Implicit differentiation.

### **Definition:**

**Implicit differentiation** is a technique used to find $\frac{dy}{dx}$ when a function is defined implicitly by an equation relating $x$ and $y$, rather than explicitly as $y = f(x)$.

The process involves differentiating both sides of the equation with respect to $x$, treating $y$ as a function of $x$ (using the Chain Rule for terms involving $y$), then solving algebraically for $\frac{dy}{dx}$.

When you cannot (or do not want to) solve an equation explicitly for $y$ in terms of $x$. Common in equations of curves like circles, ellipses, and more complex relations.

**Key Step to Remember:**

When you differentiate a term with $y$, you must multiply by $\frac{dy}{dx}$. For example:

$\displaystyle \frac{d}{dx}[y^n] = n y^{n-1} \cdot \frac{dy}{dx}$

Why? Because $y$ is a function of $x$, so by the Chain Rule, we differentiate the outer function ($y^n$) and multiply by the derivative of the inner function ($y$), which is $\frac{dy}{dx}$.

**Result:**

The derivative $\frac{dy}{dx}$ will typically be expressed in terms of both $x$ and $y$—which makes sense, because the slope on a curve like a circle depends on where you are, not just your $x$-coordinate.

**Examples:**

1. **Basic Implicit Differentiation:** Find $\frac{dy}{dx}$ if $x^2 + y^2 = 25$.

   *Differentiate both sides with respect to $x$:*
   $\displaystyle \frac{d}{dx}[x^2] + \frac{d}{dx}[y^2] = \frac{d}{dx}[25]$
   
   *$\frac{d}{dx}[x^2] = 2x$*
   *$\frac{d}{dx}[y^2] = 2y \cdot \frac{dy}{dx}$ (Chain Rule!)*
   *$\frac{d}{dx}[25] = 0$*
   
   So: $2x + 2y \frac{dy}{dx} = 0$
   
   *Solve for $\frac{dy}{dx}$:*
   $2y \frac{dy}{dx} = -2x$
   $\displaystyle \frac{dy}{dx} = -\frac{x}{y}$

   *Notice the derivative has both $x$ and $y$—makes sense for a circle.*

2. **Product and Chain Rule Combined:** Find $\frac{dy}{dx}$ if $x^3y + y^3 = x$.

   *Differentiate each term carefully:*
   $\displaystyle \frac{d}{dx}[x^3y] + \frac{d}{dx}[y^3] = \frac{d}{dx}[x]$
   
   *For $x^3y$, we need the product rule:*
   $\displaystyle \frac{d}{dx}[x^3y] = (3x^2)y + x^3 \cdot \frac{dy}{dx}$
   
   *For $y^3$, Chain Rule:*
   $\displaystyle \frac{d}{dx}[y^3] = 3y^2 \cdot \frac{dy}{dx}$
   
   *Right side: $\frac{d}{dx}[x] = 1$*
   
   So: $3x^2y + x^3\frac{dy}{dx} + 3y^2\frac{dy}{dx} = 1$
   
   *Group terms with $\frac{dy}{dx}$:*
   $(x^3 + 3y^2)\frac{dy}{dx} = 1 - 3x^2y$
   
   *Solve:*
   $\displaystyle \frac{dy}{dx} = \frac{1 - 3x^2y}{x^3 + 3y^2}$

3. **Finding Slope at a Point:** Find the slope of the tangent line to the curve $x^2 + 2xy - y^2 = 1$ at the point $(2, 3)$.

   *Differentiate implicitly:*
   $\displaystyle \frac{d}{dx}[x^2] + \frac{d}{dx}[2xy] - \frac{d}{dx}[y^2] = \frac{d}{dx}[1]$
   
   *$2x$ (first term)*
   *For $2xy$, product rule: $2(1 \cdot y + x \cdot \frac{dy}{dx}) = 2y + 2x\frac{dy}{dx}$*
   *For $y^2$, Chain Rule: $2y \cdot \frac{dy}{dx}$*
   
   So: $2x + 2y + 2x\frac{dy}{dx} - 2y\frac{dy}{dx} = 0$
   
   *Group $\frac{dy}{dx}$ terms:*
   $2x + 2y + (2x - 2y)\frac{dy}{dx} = 0$
   
   *Solve for $\frac{dy}{dx}$:*
   $(2x - 2y)\frac{dy}{dx} = -2x - 2y$
   $\displaystyle \frac{dy}{dx} = \frac{-2x - 2y}{2x - 2y} = \frac{-x - y}{x - y}$
   
   *Now plug in $(2, 3)$:*
   $\displaystyle \frac{dy}{dx}\bigg|_{(2,3)} = \frac{-2 - 3}{2 - 3} = \frac{-5}{-1} = 5$
   
   *So the slope at that point is 5.*

---

### **Selecting a Differentiation Procedure**

You've now got a full toolbox. But with so many rules, how do you know which one to use? Here's a decision tree to guide you:

1. **Is the function given explicitly as $y = f(x)$?** 
   - If yes, proceed.
   - If no, use **implicit differentiation** (treat $y$ as a function of $x$ and differentiate both sides).

2. **Is it a composite function (function inside another)?**
   - If yes, use the **Chain Rule** (outside derivative times inside derivative).

3. **Is it a product of two functions?**
   - Use the **Product Rule**: $(first)' \cdot second + first \cdot (second)'$.

4. **Is it a quotient of two functions?**
   - Use the **Quotient Rule**: $\frac{(top)' \cdot bottom - top \cdot (bottom)'}{bottom^2}$.

5. **Is it a basic function (polynomial, trig, exponential, log, inverse trig)?**
   - Apply the corresponding derivative formula from memory.

Remember, you'll often need multiple rules in combination—for example, a product where one factor requires the Chain Rule. Take it step by step, identify each layer, and apply the rules systematically.

**Key Formulas to Memorize:**

- Chain Rule: $\displaystyle \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$
- Inverse Function: $\displaystyle (f^{-1})'(b) = \frac{1}{f'(a)}$ where $b = f(a)$
- Inverse Trig Derivatives (especially the first three):
  - $\displaystyle \frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1-x^2}}$
  - $\displaystyle \frac{d}{dx}[\arccos x] = -\frac{1}{\sqrt{1-x^2}}$
  - $\displaystyle \frac{d}{dx}[\arctan x] = \frac{1}{1+x^2}$

You've now mastered the core differentiation techniques. Next up, we'll see how to apply these to solve real problems—finding equations of tangent lines, analyzing function behavior, and tackling related rates. But for now, practice these rules until they're automatic. They're the foundation for everything that follows.