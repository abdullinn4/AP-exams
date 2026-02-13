# Lesson 2: Calculating Limits Algebraically

Last time we learned to evaluate limits using graphical and numerical estimation. We were analyzing graphs and tables. That’s cool. 

However, is there any other way to do it, maybe faster?

Yes, it is. Here we’re gonna learn it.

Before that, let’s look at two basic limits.

- **Limit of a constant:**  $\lim_{x \to c} k = k$

![desmos-graph (22).svg](desmos-graph_(22).svg)

- **Limit of identity function:**  $\lim_{x \to c} x = c$

![desmos-graph (23).svg](desmos-graph_(23).svg)

It’s obvious, right? Constant is always the same. Limit of $f(x) = x$ as $x$  approaches $c$ is just $f(c) = c$.

We can see it from the graphs above.

Now, let’s introduce following properties of Limits that will be essential when it comes to calculating limits algerbraically.

### **Limit Theorems**

**Definition:**

Let $c$, $k$, $A$, and $B$ be real numbers, and let $f(x)$ and $g(x)$ be functions such that:

$\lim⁡_{x \to c}  f(x)=A$ and $\lim⁡_{x \to c}  g(x)=B$

*Pay attention in both limits x approaches c*

The following **limit theorems** (properties) hold:

1. **Sum/Difference Rule:** $\lim_{x \to c} [f(x) \pm g(x)] = \lim_{x \to c} f(x) \pm \lim_{x \to c} g(x)= A \pm B$
2. **Constant Multiple Rule:** $\lim_{x \to c} [k \cdot f(x)] =k \cdot\lim_{x \to c} f(x)= k \cdot A$
3. **Product Rule:** $\lim_{x \to c} [f(x) \cdot g(x)] = \lim_{x \to c} f(x) \cdot \lim_{x \to c} g(x)= A \cdot B$
4. **Quotient Rule:** $\lim_{x \to c} \frac{f(x)}{g(x)} =  \frac{\lim_{x \to c}f(x)}{\lim_{x \to c}g(x)} =\frac{A}{B}$, provided $B \neq 0$
5. **Power Rule:** $\lim_{x \to c} [f(x)]^n =(\lim_{x \to c} f(x))^n= A^n$, for $n > 0$
6. **Root Rule:** $\lim_{x \to c} \sqrt[n]{f(x)} = \sqrt[n]{A}$, provided $A > 0$ if $n$ is even. 

5th and 6th rules are actually the same, because $\sqrt[n]{f(x)} = f(x)^{\frac{1}{n}}$

- These theorems state that **limits can be distributed across arithmetic operations**, provided the individual limits exist and the denominator isn't zero (for quotients).
- When faced with a complex limit, break it down into simpler parts whose limits you know. Then reassemble using these rules.
- For any polynomial, rational, radical, or trigonometric function that is **continuous** at $x=c$ (meaning its graph has no holes, jumps, or breaks at $c$), the limit is simply $f(c)$. This is a direct application of these theorems.

*We will return to this theorem next time but I think it would be bad of me to make you calculate all this limits in such a long boring way when often you can just substitute the number into the equation.*

**Examples:**

1. **Using Multiple Rules:** Find $\lim_{x \to 3} (2x^2 - 5x + 1)$.
    - **Apply Theorems Step-by-Step:**
        
        $\lim_{x \to 3} (2x^2 - 5x + 1)$
        
        $= 2 \cdot \lim_{x \to 3} x^2 - 5 \cdot \lim_{x \to 3} x + \lim_{x \to 3} 1$ (Sum, Difference, Constant Multiple)
        
        $= 2 \cdot (3)^2 - 5 \cdot 3 + 1=$ (Power, Identity, Constant Rules)
        
        $= 18 - 15 + 1 = 4$
        
    - **Shortcut (Direct Substitution):** Since  $2x^2 - 5x + 1$  is a polynomial (continuous everywhere), simply substitute $x=3$:    $2(3)^2 - 5(3) + 1 = 4$.
2. **Quotient Rule Application:** Find $\lim_{x \to -1} \frac{x^2 + 2}{x - 5}$.
    
    First, check limits of numerator and denominator:
    
    $\lim_{x \to -1} (x^2 + 2) = (-1)^2 + 2 = 3$
    
    $\lim_{x \to -1} (x - 5) = -1 - 5 = -6 \neq 0$
    
    Then apply Quotient Rule: $\lim_{x \to -1} \frac{x^2 + 2}{x - 5} = \frac{3}{-6} = -\frac{1}{2}$.
    
    - **Shortcut (Direct Substitution): $\lim_{x \to -1} \frac{x^2 + 2}{x - 5} = \frac{(-1)^2 + 2}{(-1) - 5} = -\frac{1}{2}$**

---

### **Algebraic Manipulation for Indeterminate Forms**

You already might think that you’re a master of limits when you meet  $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$

You try to substitute a number and…. it sucks…. $\frac{0}{0}$…… undefined. I’m cooked.

Don’t worry, we just need a new tool for that.

An **indeterminate form** in a limit, such as $\frac{0}{0}$, $\frac{\infty}{\infty}$, or $0 \cdot \infty$, indicates that the limit theorems alone are insufficient. The expression must be algebraically manipulated into an equivalent form that allows evaluation.

Direct substitution in a limit like $\lim_{x \to c} \frac{f(x)}{g(x)}$ yields $\frac{0}{0}$. This doesn't mean the limit is $0$ or $1$; it means we need more work. There's a "hole" in the function at $x=c$, but the limit (the intended height) may still exist.

- **Key Techniques:**
    1. **Factoring:** Look for common factors in numerators and denominators. Cancel them.
    2. **Rationalizing:** For expressions with radicals, multiply numerator and denominator by the conjugate.
    3. **Simplifying Complex Fractions:** Combine fractions in the numerator/denominator.
    4. **Using Trigonometric Identities:** Apply identities like $\sin^2 x + \cos^2 x = 1$.
- **General Strategy:** After manipulation, try direct substitution again. If it yields a real number, that's your limit.

**Examples:**

1. **Factoring:** Find $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$.
    - Direct substitution gives $\frac{0}{0}$ (indeterminate).
    - Factor: $\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x+2$, for $x \neq 2$.
    - Now, $\lim_{x \to 2} (x+2) = 4$.
    - **Result:** $\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$.
2. **Rationalizing:** Find $\lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x}$.
    - Direct substitution gives $\frac{0}{0}$.
    - Multiply numerator and denominator by the conjugate, $\sqrt{x+4} + 2$:
        
        $$
        \frac{\sqrt{x+4} - 2}{x} \cdot \frac{\sqrt{x+4} + 2}{\sqrt{x+4} + 2} = \frac{(x+4) - 4}{x(\sqrt{x+4} + 2)} = \frac{x}{x(\sqrt{x+4} + 2)} = \frac{1}{\sqrt{x+4} + 2}
        $$
        
        for $x \neq 0$.
        
    - Now, $\lim_{x \to 0} \frac{1}{\sqrt{x+4} + 2} = \frac{1}{\sqrt{4} + 2} = \frac{1}{4}$.
    - **Result:** $\lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x} = \frac{1}{4}$.
3. **Complex Fractions:** Find $\lim_{x \to 4} \frac{\frac{1}{x} - \frac{1}{4}}{x - 4}$.
    - Direct substitution gives $\frac{0}{0}$.
    - Simplify the complex numerator: $\frac{\frac{1}{x} - \frac{1}{4}}{x - 4} = \frac{\frac{4 - x}{4x}}{x - 4} = \frac{4-x}{4x(x-4)}$.
    - Note that $4-x = -(x-4)$. Cancel $(x-4)$: $= \frac{-1}{4x}$, for $x \neq 4$.
    - Now, $\lim_{x \to 4} \frac{-1}{4x} = \frac{-1}{16}$.
    - **Result:** $\lim_{x \to 4} \frac{\frac{1}{x} - \frac{1}{4}}{x - 4} = -\frac{1}{16}$.
    

Okay, you already gained a bunch of powerful tools here. However, we should never stop evolving and make your arsenal bigger. Try to take this limit:

$$
\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right)
$$

---

Sheesh… again smth weird. 

$0 \cdot\sin\left(\frac{1}{0}\right)$ ????

Don’t worry, you will learn to do it in a few seconds

### **The Squeeze (Sandwich) Theorem**

**Definition:**

Let $f(x)$, $g(x)$, and $h(x)$ be functions such that for all $x$ in an interval around $c$ (except possibly at $c$ itself), the following inequality holds:

$g(x)≤f(x)≤h(x)$

If $\lim_{x \to c} g(x) = L$ and $\lim_{x \to c} h(x) = L$, then it follows that:

$\lim_{x \to c} f(x) = L$

![desmos-graph (26).svg](desmos-graph_(26).svg)

Imagine $f(x)$ is trapped between $g(x)$ (the "lower bread") and $h(x)$ (the "upper bread"). If both pieces of bread are being squeezed together toward the same point $L$ as $x \to c$, then the filling $f(x)$ has nowhere to go but $L$.

- This theorem is particularly useful for finding limits of functions that are difficult to handle directly, often involving **oscillations** (like $\sin(1/x)$) or when other algebraic methods fail.
- You'll often use known bounds like $-1 \leq \sin(\text{something}) \leq 1$ or $-1 \leq \cos(\text{something}) \leq 1$.

**Examples:**

1.  Prove that $\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right) = 0$.

![desmos-graph (24).svg](desmos-graph_(24).svg)

- We know $-1 \leq \sin\left(\frac{1}{x}\right) \leq 1$ for all $x \neq 0$.
- Multiply the inequality by $x^2$ (which is always $\geq 0$):

$$
-x^2 \leq x^2 \sin\left(\frac{1}{x}\right) \leq x^2
$$

- Now, identify: $g(x) = -x^2$,  $f(x) = x^2 \sin(1/x)$,  $h(x) = x^2$.
- Find the limits of the bounding functions:
    
    $\lim_{x \to 0} (-x^2) = 0$ and $\lim_{x \to 0} x^2 = 0$.
    
- Since $f(x)$ is squeezed between two functions both approaching 0, by the Squeeze Theorem, $\lim_{x \to 0} f(x) = 0$.

1. Find $\lim_{x \to 0} x^4 \cos\left(\frac{2}{x^2}\right)$.
    
    Bounds: $-1 \leq \cos\left(\frac{2}{x^2}\right) \leq 1$.
    
    Multiply by $x^4$ ($\geq 0$): $-x^4 \leq x^4 \cos\left(\frac{2}{x^2}\right) \leq x^4$.
    
    $\lim_{x \to 0} (-x^4) = 0$ and $\lim_{x \to 0} x^4 = 0$.
    
    Therefore, $\lim_{x \to 0} x^4 \cos\left(\frac{2}{x^2}\right) = 0$.
    

I guess you liked this theorem. Here’re two more unusual limits you just need to learn to take. Sorry, but you will have to remember them. Basic trigonometric limit actually can be derived via Squeeze theorem but I don’t ask you to know how to do it (check it out if you are willing to) neither CollegeBoard.

**Basic Trigonometric Limit:**

The fundamental limit for trigonometric functions is:

$$
\displaystyle \lim_{x\to0}  \frac{\sin x}{x} =1
$$

This limit is essential for finding derivatives of trigonometric functions and for evaluating many other limits involving sine and cosine.

**Example:** Find $\displaystyle \lim_{x \to 0} \frac{\sin(5x)}{x}$.

Multiply and divide by 5

 $\displaystyle 5 \cdot \frac{\sin(5x)}{5x}$.

As $x \to 0$, $5x \to 0$, so $\displaystyle \lim_{x \to 0} \frac{\sin(5x)}{5x} = 1$.

Thus, the limit is $5 \cdot 1 = 5$.

**Example:** Find $\displaystyle \lim_{x \to 0} \frac{1 -\cos x}{x}$.

Multiply numerator and denominator by $1 + \cos x$:

$$
\frac{1 - \cos x}{x} \cdot \frac{1 + \cos x}{1 + \cos x}
= \frac{1 - \cos^2 x}{x(1 + \cos x)}
= \frac{\sin^2 x}{x(1 + \cos x)}= \frac{\sin x}{x} \cdot \frac{\sin x}{1 + \cos x}
$$

Take limit as  $x \to 0$:

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1, \quad
$$

$$
\lim_{x \to 0} \frac{\sin x}{1 + \cos x} = \frac{0}{1+1} = 0
$$

Product: $1 \times 0 = 0$.

Thus:

$$
\lim_{x \to 0} \frac{1 - \cos x}{x} = 0
$$

**The Number** $e$**:**

The number $e$ can be defined as the following limit:

$$
\displaystyle \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e
$$

More generally, for any real number $x$, $\displaystyle \lim_{n \to \infty} \left(1 + \frac{x}{n}\right)^n = e^x$.

**Example:** Find $\displaystyle \lim_{n \to \infty} \left(1 + \frac{3}{n}\right)^n$.

Using the general form with $x=3$, we have: $\displaystyle \lim_{n \to \infty} \left(1 + \frac{3}{n}\right)^n = e^3$.

---

Let’s create some kind of strategy we should follow in order to succesfully evaluate the limit

### **Selecting a Limit-Finding Strategy**

**Decision Tree for Evaluating $\lim_{x \to c} f(x)$:**

1. **Try Direct Substitution.** If it yields a finite number $L$, then $\lim_{x \to c} f(x) = L$. (This works for continuous functions at $c$).
2. **If Direct Substitution gives $\frac{0}{0}$ (or another indeterminate form):**
    - **Factor** and cancel common terms (especially for rational functions).
    - **Rationalize** the numerator or denominator (if radicals are present).
    - **Simplify** complex fractions or use trigonometric identities.
    - After manipulation, return to Step 1.
3. **If Direct Substitution suggests unbounded growth ($\frac{k}{0}$, $k \neq 0$):**
    - Check one-sided limits to see if the limit is $\infty$, $-\infty$, or DNE. (This leads to vertical asymptotes, covered in Lesson 3).
4. **If the function involves oscillation (like $\sin(1/x)$) or is otherwise hard to pin down algebraically:**
    - Consider the **Squeeze Theorem**. Look for known bounds (like $-1 \leq \sin \theta \leq 1$) to trap the function between two simpler ones with the same limit.
5. Try to simplify to use Basic Trigonometric Limit or number $e$ definition.

**Final Note:** Always be mindful of **one-sided limits** if the function has an absolute value, a piecewise definition, or an even root with a negative input. The two-sided limit exists only if the left-hand and right-hand limits exist and are equal.

We already know concepts of finite limite and infinite limit. Let’s add “last type of limit” if you will.

### **Limits at Infinity**

**Definition (Limits at Infinity):**

We write $\displaystyle \lim_{x \to \infty} f(x) = L$ if the difference between $f(x)$ and $L$ can be made arbitrarily small by making $x$ sufficiently large positively. Similarly, $\displaystyle \lim_{x \to -\infty} f(x) = L$ if the same holds by making $x$ sufficiently large negatively.

In simple words, by looking at limits at infinity we wanto to know the function’s behaviour when it comes to really big $x$ values. Sometimes we can find out more interesting facts about our function this way.

**Example:** $\displaystyle \lim_{x \to \infty} \frac{1}{x} = 0$ 

We see that as $x$ gets larger, $\displaystyle\frac{1}{x}$ gets closer to 0.

![desmos-graph (1).svg](desmos-graph_(1).svg)

We can also see patterns when it comes to polynomials or rational functions. Actually, they’re pretty logical.

**Polynomials at Infinity:**

Every polynomial whose degree is at least 1 becomes infinite (positively or negatively) as $x \to \infty$ or $x \to -\infty$. The behavior depends on the sign of the leading coefficient and whether the degree is even or odd.

**Example:** For $f(x) = 2x^3 - 5x^2 + 3$, 

as $x \to \infty$, $f(x) \to \infty$ (positive leading coefficient, odd degree). 

As $x \to -\infty$, $f(x) \to -\infty$.

Now, imagine you have a limit $\displaystyle \lim_{x \to \infty} \frac{3x^2 + 2x}{5x^2 - 1}$. 

If you try to substitute number here. You will fail again $\displaystyle\frac{\infin}{\infin}$. That’s undefined.

The beauty is that when $x\to\infin$ we don’t even need to factor smth. Everything is much easier.

**Rational Functions at Infinity:**

To find $\displaystyle \lim_{x \to \infty} \frac{P(x)}{Q(x)}$, where $P(x)$ and $Q(x)$ are polynomials, divide both numerator and denominator by the highest power of $x$ that occurs in the denominator. Then use the fact that $\displaystyle \lim_{x \to \infty} \frac{1}{x^n} = 0$ for $n > 0$.

**Example:** Find $\displaystyle \lim_{x \to \infty} \frac{3x^2 + 2x}{5x^2 - 1}$.

Divide by $x^2$: $\displaystyle \lim_{x \to \infty} \frac{3 + \frac{2}{x}}{5 - \frac{1}{x^2}} = \frac{3}{5}$.

We can even state a kind of theorem here. However, I don’t even want you to think about it this way. That’s just an obvious fact.

**Rational Function Theorem:**

Let $P(x) = a_n x^n + \cdots$ and $Q(x) = b_m x^m + \cdots$. 

Then:

- If $n < m$, then $\displaystyle \lim_{x \to \infty} \frac{P(x)}{Q(x)} = 0$.
- If $n > m$, then $\displaystyle \lim_{x \to \infty} \frac{P(x)}{Q(x)} = \pm\infty$ (the limit does not exist as a finite number; the sign depends on the leading coefficients and the parity of the degrees).
- If $n = m$, then $\displaystyle \lim_{x \to \infty} \frac{P(x)}{Q(x)} = \frac{a_n}{b_m}$.

This theorem also holds when $x \to -\infty$.

Let’s take a polynomial $7x^3 + 5x^2 - 3$ and start substituting $x$ values:

$x=1$:       $7(1)^3 + 5(1)^2 - 3 = 7 + 5 - 3$

$x=10$:       $7(10)^3 + 5(10)^2 - 3 = 7000 + 500 - 3$

$x=100$:       $7(100)^3 + 5(100)^2 - 3 = 7000000 + 50000 - 3$

$x=1000$:       $7(1000)^3 + 5(1000)^2 - 3 = 7000000000 + 5000000 - 3$

I guess you see that here $x$ with highest exponent (in this case it’s $x^3$) makes the largest contribution to the sum. And the diffrerence between $x^3$ and $x^2$ increases rapidly as $x$ grows

Imagine now $x\to\infin$. 

Therefore, we can really ignore all the other components of our sum and look only on the $x^n$ when we take such limits, where $n$ is the degree of our polynomial. 

I think, you have no questions about the theorem anymore. 

**Example:** For $\displaystyle \lim_{x \to \infty} \frac{4x^3 - 2x + 1}{7x^3 + 5x^2 - 3}$, degrees are equal (both 3), so limit = $\frac{4}{7}$.

Think of it as: $\displaystyle \lim_{x \to \infty} \frac{4x^3 - 2x + 1}{7x^3 + 5x^2 - 3}\approx\displaystyle \lim_{x \to \infty} \frac{4x^3}{7x^3}=\frac{4}{7}$

**Example:** For ****$\displaystyle \lim_{x \to \infty} \frac{2x^2 - x + 1}{3x^4 + x^2 - 9}$, degree of polynomial in the denominator $4$ is higher than in the numerator $2$, so the answer is $0$

Think of it as: $\displaystyle \lim_{x \to \infty} \frac{2x^2 - x + 1}{3x^4 + x^2 - 9}\approx\displaystyle \lim_{x \to \infty} \frac{2x^2}{3x^4}=\displaystyle \lim_{x \to \infty} \frac{2}{3x^2}= 0$

We can apply similar logic in this example

**Comparing Growth:** $\displaystyle\lim_{x \to \infty} \frac{x^3}{e^x}$

$\displaystyle\lim_{x \to \infty} \frac{x^3}{e^x} = 0$ 

because exponential functions grow faster than any polynomial. (This is useful for comparing relative magnitudes.)

### **Additional Practice Problems**

Evaluate each limit, identifying which technique you use:

1. $\lim_{x \to 5} \frac{x^2 - 25}{x - 5}$
2. $\lim_{x \to 0} \frac{\sqrt{x+9} - 3}{x}$
3. $\lim_{x \to 2} \frac{x^3 - 8}{x - 2}$
4. $\lim_{x \to 1} \frac{x^2 + 3x - 4}{x^2 - 1}$
5. $\lim_{x \to 0} \frac{\sin(3x)}{x}$ *(Hint: Use $\lim_{\theta \to 0} \frac{\sin\theta}{\theta} = 1$)*
6. $\lim_{x \to 3} \frac{\frac{1}{x} - \frac{1}{3}}{x - 3}$
7. $\lim_{x \to 0} x \cos\left(\frac{1}{x^2}\right)$
8. $\lim_{x \to 4} \frac{|x - 4|}{x - 4}$ *(Careful with one-sided limits!)*
9. $\lim_{x \to \infty} \frac{3x^2 + 2x}{5x^2 - 1}$ *(Divide numerator and denominator by highest power)*
10. $\lim_{x \to 0} \frac{1 - \cos x}{x}$ *(Hint: Multiply numerator and denominator by $(1 + \cos x)$)*

**Selected Solutions:**

1. Factor: $\frac{(x-5)(x+5)}{x-5} = x+5$, limit = $10$
2. Rationalize: Multiply by $\frac{\sqrt{x+9}+3}{\sqrt{x+9}+3}$, get $\frac{1}{\sqrt{x+9}+3}$, limit = $\frac{1}{6}$
3. Factor difference of cubes: $\frac{(x-2)(x^2+2x+4)}{x-2} = x^2+2x+4$, limit = $12$
4. Factor: $\frac{(x-1)(x+4)}{(x-1)(x+1)} = \frac{x+4}{x+1}$, limit = $\frac{5}{2}$
5. Use known limit: $= 3 \cdot \lim_{x \to 0} \frac{\sin(3x)}{3x} = 3 \cdot 1 = 3$
6. Complex fraction: Simplify to $\frac{-1}{3x}$, limit = $-\frac{1}{9}$
7. Squeeze Theorem: $-|x| \leq x\cos(1/x^2) \leq |x|$, both bounds → $0$, so limit = $0$
8. One-sided limits: Left limit = $-1$, right limit = $1$, so DNE
9. Divide by $x^2$: $\frac{3 + 2/x}{5 - 1/x^2}$ → $\frac{3}{5}$ as $x \to \infty$
10. Multiply by conjugate: $\frac{1-\cos x}{x} \cdot \frac{1+\cos x}{1+\cos x} = \frac{\sin^2 x}{x(1+\cos x)} = \frac{\sin x}{x} \cdot \frac{\sin x}{1+\cos x}$ → $1 \cdot 0 = 0$