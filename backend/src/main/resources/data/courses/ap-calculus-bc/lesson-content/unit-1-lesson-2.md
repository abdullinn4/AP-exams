# Calculating Limits Algebraically

Last time we learned to evaluate limits using graphical and numerical estimation. We were analyzing graphs and tables. That’s cool. 

But is there a faster way?

Yep. Here it is. Before we dive in, let's look at two basic limits.

- **Limit of a constant:**  $\displaystyle \lim_{x \to c} k = k$

![desmos-graph (22).svg](unit-1/lesson-2/desmos-graph_(22).svg)

- **Limit of the identity function:**  $\displaystyle \lim_{x \to c} x = c$

![desmos-graph (23).svg](unit-1/lesson-2/desmos-graph_(23).svg)

Makes sense, right? A constant stays the same no matter what. And for $\displaystyle f(x) = x$, as $\displaystyle x$  gets close to $\displaystyle c$, the output is just $\displaystyle c$.

You can see it in the graphs above.

Alright, now let's talk about the properties of limits that'll save us when we're doing algebra.

## **Limit Theorems**

### **Definition:**

Let $\displaystyle c$, $\displaystyle k$, $\displaystyle A$, and $\displaystyle B$ be real numbers, and let $\displaystyle f(x)$ and $\displaystyle g(x)$ be functions such that:

$\displaystyle \lim_{x \to c} f(x)=A$ and $\displaystyle \lim_{x \to c} g(x)=B$

*Heads-up: in both limits, x is approaching c.*

Here are the **limit laws** you can always count on:

1. **Sum/Difference Rule:** $\displaystyle \lim_{x \to c} [f(x) \pm g(x)] = \lim_{x \to c} f(x) \pm \lim_{x \to c} g(x)= A \pm B$

2. **Constant Multiple Rule:** $\displaystyle \lim_{x \to c} [k \cdot f(x)] =k \cdot\lim_{x \to c} f(x)= k \cdot A$
3. **Product Rule:** $\displaystyle \lim_{x \to c} [f(x) \cdot g(x)] = \lim_{x \to c} f(x) \cdot \lim_{x \to c} g(x)= A \cdot B$
4. **Quotient Rule:** $\displaystyle \lim_{x \to c} \frac{f(x)}{g(x)} =  \frac{\displaystyle\lim_{x \to c}f(x)}{\displaystyle\lim_{x \to c}g(x)} =\frac{A}{B}$, provided $\displaystyle B \neq 0$
5. **Power Rule:** $\displaystyle \lim_{x \to c} [f(x)]^n =(\lim_{x \to c} f(x))^n= A^n$, for $\displaystyle n > 0$
6. **Root Rule:** $\displaystyle \lim_{x \to c} \sqrt[n]{f(x)} = \sqrt[n]{A}$, provided $\displaystyle A > 0$ if $\displaystyle n$ is even. 

Rules 5 and 6 are basically the same thing, since $\displaystyle \sqrt[n]{f(x)} = f(x)^{\frac{1}{n}}$.

These rules basically say you can **break limits apart** across addition, subtraction, multiplication, etc., as long as each piece actually has a limit and you're not dividing by zero.

Got a messy limit? Break it into smaller, friendlier pieces. Find their limits. Then put it all back together.

For polynomials, rational functions, radicals, or trig functions that are **continuous** at $\displaystyle x=c$ (smooth, no jumps or holes), the limit is just $\displaystyle f(c)$. That's these rules in action.

*We'll dig into continuity next time, but honestly, it'd be cruel to make you grind through all these steps every time when most of the time you can just plug in the number and call it a day.*

**Examples:**

1. Find $\displaystyle \lim_{x \to 3} (2x^2 - 5x + 1)$.

**Step-by-Step Using the Rules:**
    
$\displaystyle \lim_{x \to 3} (2x^2 - 5x + 1)$

$\displaystyle = 2 \cdot \lim_{x \to 3} x^2 - 5 \cdot \lim_{x \to 3} x + \lim_{x \to 3} 1$

The rules we applied here: Sum, Difference, Constant Multiple

$\displaystyle = 2 \cdot (3)^2 - 5 \cdot 3 + 1=$

(Power, Identity, Constant)

$\displaystyle = 18 - 15 + 1 = 4$
        
**Shortcut (Direct Substitution):** Since $\displaystyle 2x^2 - 5x + 1$  is a polynomial (smooth everywhere), just plug in $\displaystyle x=3$:    $\displaystyle 2(3)^2 - 5(3) + 1 = 4$.

2. Find $\displaystyle \lim_{x \to -1} \frac{x^2 + 2}{x - 5}$.
    
First, check the top and bottom:

$\displaystyle \lim_{x \to -1} (x^2 + 2) = (-1)^2 + 2 = 3$

$\displaystyle \lim_{x \to -1} (x - 5) = -1 - 5 = -6 \neq 0$

Now use the Quotient Rule: $\displaystyle \lim_{x \to -1} \frac{x^2 + 2}{x - 5} = \frac{3}{-6} = -\frac{1}{2}$.

**Shortcut (Direct Substitution):** $\displaystyle \lim_{x \to -1} \frac{x^2 + 2}{x - 5} = \frac{(-1)^2 + 2}{(-1) - 5} = -\frac{1}{2}$

---

## **Algebraic Tricks for When Plugging In Fails**

So you're feeling pretty good about limits, and then you hit $\displaystyle \lim_{x \to 2} \frac{x^2 - 4}{x - 2}$.

You try plugging in and… ugh… $\displaystyle \frac{0}{0}$…… undefined. Great. Now what?

Don't stress—we just need another tool.

That $\displaystyle \frac{0}{0}$ thing? That's called an **indeterminate form**. Others include $\displaystyle \frac{\infty}{\infty}$ or $\displaystyle 0 \cdot \infty$. They're like a red flag saying "hey, the usual rules won't cut it here—you need to do some algebra first."

Getting $\displaystyle \frac{0}{0}$ doesn't mean the limit is $0$ or $1$. It just means there's a hole at $\displaystyle x=c$, but the limit—the y-value the function is heading toward—might still exist.

**Go-To Moves:**

1. **Factoring:** Look for something to cancel.
2. **Rationalizing:** If you see radicals, multiply by the conjugate.
3. **Cleaning Up Complex Fractions:** Simplify the big fraction mess.
4. **Trig Identities:** Things like $\displaystyle \sin^2 x + \cos^2 x = 1$ can save you.

**Game Plan:** Do your algebra magic, then try plugging in again. If you get a real number, that's your answer.

**Examples:**

1. **Factoring:** Find $\displaystyle \lim_{x \to 2} \frac{x^2 - 4}{x - 2}$.
    - Plugging in gives $\displaystyle \frac{0}{0}$ — time to factor.
    - Factor the top: $\displaystyle \frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x+2$, for $\displaystyle x \neq 2$.
    - Now take the limit: $\displaystyle \lim_{x \to 2} (x+2) = 4$.
    - **Answer:** $\displaystyle \lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$.
2. **Rationalizing:** Find $\displaystyle \lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x}$.
    - Plug in: $\displaystyle \frac{0}{0}$.
    - Multiply top and bottom by the conjugate, $\displaystyle \sqrt{x+4} + 2$:
        
        $$
        \displaystyle \frac{\sqrt{x+4} - 2}{x} \cdot \frac{\sqrt{x+4} + 2}{\sqrt{x+4} + 2} = \frac{(x+4) - 4}{x(\sqrt{x+4} + 2)} = \frac{x}{x(\sqrt{x+4} + 2)} = \frac{1}{\sqrt{x+4} + 2}
        $$
        
        (This works for $\displaystyle x \neq 0$.)
        
    - Now plug in: $\displaystyle \lim_{x \to 0} \frac{1}{\sqrt{x+4} + 2} = \frac{1}{\sqrt{4} + 2} = \frac{1}{4}$.
    - **Answer:** $\displaystyle \lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x} = \frac{1}{4}$.
3. **Cleaning Up a Complex Fraction:** Find $\displaystyle \lim_{x \to 4} \frac{\frac{1}{x} - \frac{1}{4}}{x - 4}$.
    - Plug in: $\displaystyle \frac{0}{0}$.
    - Simplify the top: $\displaystyle \frac{\frac{1}{x} - \frac{1}{4}}{x - 4} = \frac{\frac{4 - x}{4x}}{x - 4} = \frac{4-x}{4x(x-4)}$.
    - Notice $\displaystyle 4-x = -(x-4)$. Cancel $\displaystyle (x-4)$: $\displaystyle = \frac{-1}{4x}$, for $\displaystyle x \neq 4$.
    - Now plug in: $\displaystyle \lim_{x \to 4} \frac{-1}{4x} = \frac{-1}{16}$.
    - **Answer:** $\displaystyle \lim_{x \to 4} \frac{\frac{1}{x} - \frac{1}{4}}{x - 4} = -\frac{1}{16}$.
    

---
Okay, so you've leveled up your limit skills. But let's keep going—there's always more to learn. Try this one:

$$
\displaystyle \lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right)
$$

Yeah… this looks weird. 

$\displaystyle 0 \cdot\sin\left(\frac{1}{0}\right)$ ???? That's undefined.

Don't sweat it—you'll be able to handle this in like two minutes.

## **The Squeeze (Sandwich) Theorem**

**Here's the idea:**

Suppose you have three functions $\displaystyle f(x)$, $\displaystyle g(x)$, and $\displaystyle h(x)$, and for all $\displaystyle x$ near $\displaystyle c$ (except maybe at $\displaystyle c$ itself), this is true:

$\displaystyle g(x) \leq f(x) \leq h(x)$

If both $\displaystyle g(x)$ and $\displaystyle h(x)$ are closing in on the same number $\displaystyle L$ as $\displaystyle x \to c$, then $\displaystyle f(x)$ is stuck between them—it has no choice but to also approach $\displaystyle L$.

So:

$\displaystyle \lim_{x \to c} f(x) = L$

![desmos-graph (26).svg](unit-1/lesson-2/desmos-graph_(26).svg)

Think of it like a sandwich: $\displaystyle f(x)$ is the filling, squeezed between $\displaystyle g(x)$ (the bottom bread) and $\displaystyle h(x)$ (the top bread). If both slices of bread meet at $\displaystyle L$, the filling has nowhere else to go.

- This trick is clutch for limits involving **oscillation**, like $\displaystyle \sin(1/x)$, or when algebra just won't cut it.
- You'll often use the fact that $\displaystyle -1 \leq \sin(\text{something}) \leq 1$ or $\displaystyle -1 \leq \cos(\text{something}) \leq 1$.

**Examples:**

1. Show that $\displaystyle \lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right) = 0$.

![desmos-graph (24).svg](unit-1/lesson-2/desmos-graph_(24).svg)

- We know $\displaystyle -1 \leq \sin\left(\frac{1}{x}\right) \leq 1$ for any $\displaystyle x \neq 0$.
- Multiply through by $\displaystyle x^2$ (which is always $\displaystyle \geq 0$):

$$
\displaystyle -x^2 \leq x^2 \sin\left(\frac{1}{x}\right) \leq x^2
$$

- So here, $\displaystyle g(x) = -x^2$,  $\displaystyle f(x) = x^2 \sin(1/x)$,  $\displaystyle h(x) = x^2$.
- Check the bounds:
    
    $\displaystyle \lim_{x \to 0} (-x^2) = 0$ and $\displaystyle \lim_{x \to 0} x^2 = 0$.
    
- Since $\displaystyle f(x)$ is sandwiched between two functions that both go to 0, by the Squeeze Theorem, $\displaystyle \lim_{x \to 0} f(x) = 0$.

2. Find $\displaystyle \lim_{x \to 0} x^4 \cos\left(\frac{2}{x^2}\right)$.
    
    Bounds: $\displaystyle -1 \leq \cos\left(\frac{2}{x^2}\right) \leq 1$.
    
    Multiply by $\displaystyle x^4$ (non-negative): $\displaystyle -x^4 \leq x^4 \cos\left(\frac{2}{x^2}\right) \leq x^4$.
    
    $\displaystyle \lim_{x \to 0} (-x^4) = 0$ and $\displaystyle \lim_{x \to 0} x^4 = 0$.
    
    So by Squeeze Theorem, $\displaystyle \lim_{x \to 0} x^4 \cos\left(\frac{2}{x^2}\right) = 0$.
    

Pretty cool, right? Now there are two more limits you just gotta memorize. Sorry, but that's the deal. The first one actually comes from the Squeeze Theorem, but you don't need to prove it—just know it.

## **Basic Trigonometric Limit:**

When you work with limits involving trig functions, the limit below proved to be very useful.

$$
\displaystyle \lim_{x\to0}  \frac{\sin x}{x} =1
$$

Let's prove it. 

*This derivation is provided for context and deeper understanding. **You are not required to know this proof** for the AP exam—just memorize the result! If you're lazy, just skip it*

Consider a unit circle (radius $= 1$) with central angle $\theta$ (measured in radians, where $0 < \theta < \frac{\pi}{2}$). Look at three areas:

![unit-circle.png](unit-1/lesson-2/unit-circle.png)

1. **Area of triangle $OAP$** (smallest region)
2. **Area of sector $OAP$** (the "pizza slice")
3. **Area of triangle $OAQ$** (largest region)

From the diagram (imagine point $P$ on the circle, $A = (1,0)$, and $Q$ directly above $A$ such that $AQ$ is tangent to the circle), we can compare these areas:

$$\text{Area of } \triangle OAP \leq \text{Area of sector } OAP \leq \text{Area of } \triangle OAQ$$

Let's express each area in terms of $\theta$:

- $\triangle OAP$: base $= 1$, height $= \sin \theta$, so area $= \frac{1}{2} \cdot 1 \cdot \sin \theta = \frac{1}{2}\sin \theta$
- Sector $OAP$: area of whole circle is $\pi r^2 = \pi$, fraction of circle is $\frac{\theta}{2\pi}$, so area $= \frac{\theta}{2\pi} \cdot \pi = \frac{1}{2}\theta$
- $\triangle OAQ$: base $= 1$, height $= \tan \theta$, so area $= \frac{1}{2} \cdot 1 \cdot \tan \theta = \frac{1}{2}\tan \theta$

So our inequality becomes:
$$\frac{1}{2}\sin \theta \leq \frac{1}{2}\theta \leq \frac{1}{2}\tan \theta$$

Multiply everything by $2$:
$$\sin \theta \leq \theta \leq \tan \theta$$

Since $\displaystyle \tan \theta = \frac{\sin \theta}{\cos \theta}$, we can rewrite the right inequality:
$$\theta \leq \frac{\sin \theta}{\cos \theta}$$

Now divide the entire inequality by $\sin \theta$ (which is positive for $0 < \theta < \frac{\pi}{2}$):
$$1 \leq \frac{\theta}{\sin \theta} \leq \frac{1}{\cos \theta}$$

Take reciprocals (which reverses the inequalities):
$$\cos \theta \leq \frac{\sin \theta}{\theta} \leq 1$$

As $\theta \to 0^+$, $\cos \theta \to 1$. By the Squeeze Theorem (which we'll cover later), since $\frac{\sin \theta}{\theta}$ is "squeezed" between two expressions that both approach $1$, we get:
$$\lim_{\theta \to 0^+} \frac{\sin \theta}{\theta} = 1$$

A similar argument works for $\theta \to 0^-$, so the two-sided limit also equals $1$:
$$\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$$



**Example:** Find $\displaystyle \lim_{x \to 0} \frac{\sin(5x)}{x}$.

Multiply and divide by 5:

 $\displaystyle 5 \cdot \frac{\sin(5x)}{5x}$.

As $\displaystyle x \to 0$, $\displaystyle 5x \to 0$, so $\displaystyle \lim_{x \to 0} \frac{\sin(5x)}{5x} = 1$.

So the limit is $\displaystyle 5 \cdot 1 = 5$.

**Example:** Find $\displaystyle \lim_{x \to 0} \frac{1 -\cos x}{x}$.

Multiply top and bottom by $\displaystyle 1 + \cos x$:

$$
\displaystyle \frac{1 - \cos x}{x} \cdot \frac{1 + \cos x}{1 + \cos x}
= \frac{1 - \cos^2 x}{x(1 + \cos x)}
= \frac{\sin^2 x}{x(1 + \cos x)}= \frac{\sin x}{x} \cdot \frac{\sin x}{1 + \cos x}
$$

Now take the limit as $\displaystyle x \to 0$:

$$
\displaystyle \lim_{x \to 0} \frac{\sin x}{x} = 1, \quad
$$

$$
\displaystyle \lim_{x \to 0} \frac{\sin x}{1 + \cos x} = \frac{0}{1+1} = 0
$$

Multiply: $\displaystyle 1 \times 0 = 0$.

So:

$$
\displaystyle \lim_{x \to 0} \frac{1 - \cos x}{x} = 0
$$


### **Exponential Limit**

One more essential limit to memorize:
$$ \displaystyle \lim_{x \to 0} \frac{e^x - 1}{x} = 1$$

**Example**: Find $\displaystyle \lim_{x \to 0} \frac{e^{2x} - 1}{x}$.

As $x \to 0$, the numerator $e^{2x} - 1 \to 0$ and the denominator $x \to 0$, so we have a $\frac{0}{0}$ indeterminate form. This matches the pattern of $\frac{e^u - 1}{u}$ with $u = 2x$.

Let $u = 2x$. Then as $x \to 0$, $u \to 0$. Also $x = \frac{u}{2}$. Rewrite the limit:
   $$\lim_{x \to 0} \frac{e^{2x} - 1}{x} = \lim_{u \to 0} \frac{e^{u} - 1}{u/2} = \lim_{u \to 0} 2 \cdot \frac{e^{u} - 1}{u}.$$

We know $\displaystyle \lim_{u \to 0} \frac{e^{u} - 1}{u} = 1$. Therefore:
   $$\lim_{x \to 0} \frac{e^{2x} - 1}{x} = 2 \cdot 1 = 2.$$

*And here's what's actually funny—once you reach **Unit 4** and learn **L'Hôpital's Rule**, almost all of these limits become trivial.*

So don't stress too much about memorizing every single one perfectly right now. Learn them, use them, but know that a much more powerful tool is coming soon that will make you wonder why you ever struggled with these.

---

Alright, let's map out a game plan for attacking limits.

### **Your Limit-Finding Cheat Sheet**

**How to tackle $\displaystyle \lim_{x \to c} f(x)$:**

1. **First, just plug it in.** If you get a real number $\displaystyle L$, done—$\displaystyle \lim_{x \to c} f(x) = L$. (This works if the function's continuous at $\displaystyle c$.)
2. **If you get $\displaystyle \frac{0}{0}$ (or another indeterminate form):**
    - **Factor** and cancel.
    - **Rationalize** if you see square roots.
    - **Simplify** any fraction mess.
    - **Use trig identities** if needed.
    - Then go back to Step 1.
3. **If you get something like $\displaystyle \frac{k}{0}$ with $\displaystyle k \neq 0$:**  
    That means the function's blowing up. Check the left and right sides to see if it's $\displaystyle \infty$, $\displaystyle -\infty$, or just doesn't exist. (We'll talk more about vertical asymptotes in Lesson 3.)
4. **If the function's doing something wild like $\displaystyle \sin(1/x)$:**  
    Think about the **Squeeze Theorem**. Find something to trap it between.
5. **Look for chances to use the special trig limit or the $\displaystyle e$ limit.**

**One last thing:** Always watch out for **one-sided limits** when you see absolute values, piecewise functions, or even roots with negative inputs. The two-sided limit only exists if both sides agree.

We've talked about finite limits and infinite limits. Now let's round things out with one more type.

## **Limits at Infinity**

**What it means:**

$\displaystyle \lim_{x \to \infty} f(x) = L$ means as $\displaystyle x$ gets huge (positive), $\displaystyle f(x)$ gets closer and closer to $\displaystyle L$. Same idea for $\displaystyle x \to -\infty$.

Basically, we're asking: what does the function do when $\displaystyle x$ is really, really big? Sometimes the answer tells us something interesting.

**Example:** $\displaystyle \lim_{x \to \infty} \frac{1}{x} = 0$ 

As $\displaystyle x$ grows, $\displaystyle \frac{1}{x}$ shrinks toward 0.

![desmos-graph (1).svg](unit-1/lesson-2/desmos-graph_(1).svg)

Polynomials and rational functions have pretty predictable patterns here.

### **Polynomials at Infinity:**

Any polynomial with degree at least 1 heads to $\displaystyle \infty$ or $\displaystyle -\infty$ as $\displaystyle x \to \pm\infty$. Which one depends on the leading coefficient and whether the degree is even or odd.

**Example:** For $\displaystyle f(x) = 2x^3 - 5x^2 + 3$, 

as $\displaystyle x \to \infty$, $\displaystyle f(x) \to \infty$ (leading term positive, odd degree). 

As $\displaystyle x \to -\infty$, $\displaystyle f(x) \to -\infty$.

Now try $\displaystyle \lim_{x \to \infty} \frac{3x^2 + 2x}{5x^2 - 1}$. 

Plug in infinity? You get $\displaystyle \frac{\infty}{\infty}$. Useless.

But here's the trick: when $\displaystyle x$ is huge, the highest power of $\displaystyle x$ dominates everything. So we can simplify.

### **Rational Functions at Infinity:**

For $\displaystyle \lim_{x \to \infty} \frac{P(x)}{Q(x)}$, divide top and bottom by the highest power of $\displaystyle x$ in the denominator. Then use the fact that $\displaystyle \lim_{x \to \infty} \frac{1}{x^n} = 0$ for $\displaystyle n > 0$.

**Example:** Find $\displaystyle \lim_{x \to \infty} \frac{3x^2 + 2x}{5x^2 - 1}$.

Divide by $\displaystyle x^2$: $\displaystyle \lim_{x \to \infty} \frac{3 + \frac{2}{x}}{5 - \frac{1}{x^2}} = \frac{3}{5}$.

There's a rule of thumb here, but honestly, you don't need to memorize it—it's just common sense.

**The Quick Rule:**

For $\displaystyle \lim_{x \to \infty} \frac{a_n x^n + \dots}{b_m x^m + \dots}$:

- If $\displaystyle n < m$, the limit is $\displaystyle 0$.
- If $\displaystyle n > m$, the limit is $\displaystyle \pm\infty$ (depends on signs).
- If $\displaystyle n = m$, the limit is $\displaystyle \frac{a_n}{b_m}$.

Same deal for $\displaystyle x \to -\infty$.

Think about $\displaystyle 7x^3 + 5x^2 - 3$:

$\displaystyle x=1$:       $\displaystyle 7(1)^3 + 5(1)^2 - 3 = 7 + 5 - 3$

$\displaystyle x=10$:       $\displaystyle 7(10)^3 + 5(10)^2 - 3 = 7000 + 500 - 3$

$\displaystyle x=100$:       $\displaystyle 7(100)^3 + 5(100)^2 - 3 = 7,000,000 + 50,000 - 3$

$\displaystyle x=1000$:       $\displaystyle 7(1000)^3 + 5(1000)^2 - 3 = 7,000,000,000 + 5,000,000 - 3$

See how the $\displaystyle x^3$ term just dwarfs everything else as $\displaystyle x$ gets big? That's why we can ignore the lower powers when $\displaystyle x$ is huge.

**Example:** For $\displaystyle \lim_{x \to \infty} \frac{4x^3 - 2x + 1}{7x^3 + 5x^2 - 3}$, the degrees match, so limit = $\displaystyle \frac{4}{7}$.

Roughly: $\displaystyle \lim_{x \to \infty} \frac{4x^3 - 2x + 1}{7x^3 + 5x^2 - 3}\approx\displaystyle \lim_{x \to \infty} \frac{4x^3}{7x^3}=\frac{4}{7}$.

**Example:** For $\displaystyle \lim_{x \to \infty} \frac{2x^2 - x + 1}{3x^4 + x^2 - 9}$, bottom degree (4) > top degree (2), so answer is $\displaystyle 0$.

Think: $\displaystyle \lim_{x \to \infty} \frac{2x^2 - x + 1}{3x^4 + x^2 - 9}\approx\displaystyle \lim_{x \to \infty} \frac{2x^2}{3x^4}=\displaystyle \lim_{x \to \infty} \frac{2}{3x^2}= 0$.

Same logic works here:

**Comparing Growth Rates:** $\displaystyle \lim_{x \to \infty} \frac{x^3}{e^x} = 0$ 

Why? Exponential functions eventually outrun any polynomial, no matter how big the exponent. Good to keep in mind.

Now, when you now about limits at infinity we can introduce one more specific limit to memorize. That's gonna be last thing for today.
## **The Number** $\displaystyle e$

Here's how $\displaystyle e$ can be defined:

$$
\displaystyle \lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e
$$

And in general, for any real number $\displaystyle a$:

$$
\displaystyle \lim_{x \to \infty} \left(1 + \frac{a}{x}\right)^x = e^a
$$

Yes, it's exactly that constant e you're thinking about $e = 2.718281828459...$



**Example:** Find $\displaystyle \lim_{x \to \infty} \left(1 + \frac{3}{x}\right)^x$.

That's just $\displaystyle e^3$ from the formula with $\displaystyle a=3$.