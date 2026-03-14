# Integration Techniques

## **Reversing Differentiation**

All the stuff we've talked about so far is important—no doubt. That was all about the *why* behind the formulas and equations. But now it's time to learn integration at a really high level, because this is a key skill you need to develop—both for the AP exam and for life. Trust me, it'll be useful.

Alright, first, let's make it clear:

If we have a definite integral

$$
\displaystyle \int_a^b f(x) \, dx = F(b) - F(a)
$$

To evaluate it and get the answer, we need to find the antiderivative first. Then, basically, the job is done. Last step is just plugging in the upper and lower limits, and that's it.

So let's agree—the hardest part is finding antiderivatives of $\displaystyle f(x)$. Once you've got that, you're golden. So we need to master finding antiderivatives of any function—simple, complex, doesn't matter. Get good at that, and definite integrals won't be a problem.

So let's talk about indefinite integration—or antidifferentiation—in more detail.

Let's recall:

An **antiderivative** of a function $\displaystyle f(x)$ is a function $\displaystyle F(x)$ such that $\displaystyle F'(x) = f(x)$ for all $\displaystyle x$ in the domain of $\displaystyle f$.

We wanna get good at this:

$$\displaystyle \int f(x) \, dx = F(x) + C$$

*Please, I'm begging you, don't forget the constant $\displaystyle C$ here*—otherwise you'll mess up big time on the exam.

Suppose we need the antiderivative of $\displaystyle f(x) = \cos x$. We try to find a function $\displaystyle F(x)$ whose derivative is $\displaystyle F'(x) = f(x)$.

From our differentiation rules, we know that's $\displaystyle \sin x$.

So an antiderivative is $\displaystyle F(x) = \sin x$, and

$\displaystyle \int \cos x \, dx = \sin x + C$

Think about that for a second.

It all comes back to the differentiation rules again. Integration and differentiation are inverse operations. And because of that, there are a bunch of integrals we can do right away—no extra steps needed.

## Basic Integration Rules

| Differentiation Rule | Integration Rule |
|----------------------|------------------|
| $\displaystyle \frac{d}{dx}[k f(x)] = k f'(x)$ | $\displaystyle \int k f(x) \, dx = k \int f(x) \, dx \quad (k \neq 0)$ |
| $\displaystyle \frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$ | $\displaystyle \int [f(x) + g(x)] \, dx = \int f(x) \, dx + \int g(x) \, dx$ |
| $\displaystyle \frac{d}{dx}\left[\frac{x^{n+1}}{n+1}\right] = x^n$ | $\displaystyle \int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$ |
| $\displaystyle \frac{d}{dx}[\ln \lvert x \rvert] = \frac{1}{x}$ | $\displaystyle \int \frac{1}{x} \, dx = \ln \lvert x \rvert + C$ |
| $\displaystyle \frac{d}{dx}[\sin x] = \cos x$ | $\displaystyle \int \cos x \, dx = \sin x + C$ |
| $\displaystyle \frac{d}{dx}[\cos x] = -\sin x$ | $\displaystyle \int \sin x \, dx = -\cos x + C$ |
| $\displaystyle \frac{d}{dx}[\tan x] = \sec^2 x$ | $\displaystyle \int \sec^2 x \, dx = \tan x + C$ |
| $\displaystyle \frac{d}{dx}[\cot x] = -\csc^2 x$ | $\displaystyle \int \csc^2 x \, dx = -\cot x + C$ |
| $\displaystyle \frac{d}{dx}[\sec x] = \sec x \tan x$ | $\displaystyle \int \sec x \tan x \, dx = \sec x + C$ |
| $\displaystyle \frac{d}{dx}[\csc x] = -\csc x \cot x$ | $\displaystyle \int \csc x \cot x \, dx = -\csc x + C$ |
| $\displaystyle \frac{d}{dx}[\ln \lvert \sec x \rvert] = \tan x$ | $\displaystyle \int \tan x \, dx = \ln \lvert \sec x \rvert + C$ (or $\displaystyle -\ln \lvert \cos x \rvert + C$) |
| $\displaystyle \frac{d}{dx}[\ln \lvert \sin x \rvert] = \cot x$ | $\displaystyle \int \cot x \, dx = \ln \lvert \sin x \rvert + C$ (or $\displaystyle -\ln \lvert \csc x \rvert + C$) |
| $\displaystyle \frac{d}{dx}[e^x] = e^x$ | $\displaystyle \int e^x \, dx = e^x + C$ |
| $\displaystyle \frac{d}{dx}\left[\frac{a^x}{\ln a}\right] = a^x$ | $\displaystyle \int a^x \, dx = \frac{a^x}{\ln a} + C \quad (a > 0, a \neq 1)$ |
| $\displaystyle \frac{d}{dx}[\sin^{-1} x] = \frac{1}{\sqrt{1-x^2}}$ | $\displaystyle \int \frac{dx}{\sqrt{1-x^2}} = \sin^{-1} x + C$ (or $\displaystyle \arcsin x + C$) |
| $\displaystyle \frac{d}{dx}[\tan^{-1} x] = \frac{1}{1+x^2}$ | $\displaystyle \int \frac{dx}{1+x^2} = \tan^{-1} x + C$ (or $\displaystyle \arctan x + C$) |
| $\displaystyle \frac{d}{dx}[\sec^{-1} \lvert x \rvert] = \frac{1}{x\sqrt{x^2-1}}$ | $\displaystyle \int \frac{dx}{x\sqrt{x^2-1}} = \sec^{-1} \lvert x \rvert + C$ (or $\displaystyle \operatorname{arcsec} \lvert x \rvert + C$) |

- These rules are the foundation for finding indefinite integrals. Remember that every antiderivative includes an arbitrary constant $\displaystyle C$ because differentiation wipes out constant terms.
- The absolute values in $\displaystyle \ln|x|$ and $\displaystyle \sec^{-1}|x|$ make sure the argument stays positive where needed.
- For the inverse trig forms, $\displaystyle \sin^{-1}x$ means arcsine, etc.

**Let's See It In Action:**

**Example 1: Basic Power Rule**
Find $\displaystyle \int x^4 \, dx$.

*   Reverse the power rule: add 1 to the exponent (4+1=5) and divide by the new exponent.
*   $\displaystyle \int x^4 \, dx = \boxed{\frac{x^5}{5} + C}$.

**Example 2: Fractional Exponent**
Find $\displaystyle \int \sqrt{x} \, dx$.

*   First, rewrite: $\displaystyle \sqrt{x} = x^{1/2}$.
*   Apply the power rule: $\displaystyle \int x^{1/2} \, dx = \frac{x^{3/2}}{3/2} + C = \boxed{\frac{2}{3} x^{3/2} + C}$.

**Example 3: Combining Rules**
Find $\displaystyle \int (3x^2 - 2x + 5) \, dx$.

*   Integrate term-by-term:
    
    $\displaystyle \int 3x^2 \, dx = 3 \cdot \frac{x^3}{3} = x^3$

    $\displaystyle \int -2x \, dx = -2 \cdot \frac{x^2}{2} = -x^2$
    
    $\displaystyle \int 5 \, dx = 5x$
*   Combine and add $\displaystyle C$: $\displaystyle \boxed{x^3 - x^2 + 5x + C}$.

**Example 4: Trigonometric Integral**
Find $\displaystyle \int (2\sin x + 3\sec^2 x) \, dx$.

*   $\displaystyle \int 2\sin x \, dx = -2\cos x$
*   $\displaystyle \int 3\sec^2 x \, dx = 3\tan x$
*   Answer: $\displaystyle \boxed{-2\cos x + 3\tan x + C}$.

---

## **Integration by Substitution (u-Substitution)**

Alright, can you integrate this?

$$\displaystyle \int (x^2 + 1)^2 \, dx$$

You might think: *Can't we just expand it?*

For that one, yeah, we can. 

$\displaystyle (x^2 + 1)^2$ becomes $\displaystyle x^4 + 2x^2 + 1$, and then we integrate term by term. Easy.

But what about this?

$$\displaystyle \int (x^2 + 1)^{50} \, dx$$

You could expand it, but do you really want to multiply $\displaystyle (x^2+1)$ by itself 50 times? That would take forever. And what about this one?

$$\displaystyle \int 2x \cdot \cos(x^2) \, dx$$

There's no expansion trick here. We need a new tool. That tool is called **u-substitution**, and it's our way of "undoing" the chain rule.

### The Connection to the Chain Rule

Remember how we take derivatives of something like $\displaystyle \sin(x^2)$? We use the chain rule: derivative of the outside times the derivative of the inside. So the derivative of $\displaystyle \sin(x^2)$ is $\displaystyle \cos(x^2) \cdot 2x$:

$$\displaystyle \frac{d}{dx} \left[ \sin(x^2) \right] = \cos(x^2) \cdot 2x$$

Now look at that last integral I wrote: $\displaystyle \int 2x \cdot \cos(x^2) \, dx$. 

That looks exactly like the result of a chain rule, doesn't it? It's a composition of functions multiplied by the derivative of the inside piece.

So, the antiderivative of $\displaystyle 2x \cos(x^2)$ must be $\displaystyle \sin(x^2) + C$.

U-substitution is just a formal method for recognizing this pattern.

Remember the chain rule: if you have $\displaystyle y = F(u)$ and $\displaystyle u = g(x)$, then

$$\displaystyle \frac{d}{dx}[F(g(x))] = F'(g(x)) \cdot g'(x).$$

Since integration "undoes" differentiation, this means:

$$\displaystyle \int F'(g(x)) \cdot g'(x) \, dx = F(g(x)) + C.$$

## **Theorem: Antidifferentiation of a Composite Function**

Let $\displaystyle g$ be a differentiable function, and let $\displaystyle f$ be continuous on the range of $\displaystyle g$. If $\displaystyle F$ is an antiderivative of $\displaystyle f$, then

$$\displaystyle \int f(g(x)) \, g'(x) \, dx = F(g(x)) + C.$$

If we let $\displaystyle u = g(x)$, then $\displaystyle du = g'(x) \, dx$, and we get the cleaner form:

$$\displaystyle \int f(u) \, du = F(u) + C.$$

---

### Pattern Recognition: Spotting $\displaystyle f(g(x)) \cdot g'(x)$

When you look at an integral, check if you can identify:
- An **outside function** $\displaystyle f$
- An **inside function** $\displaystyle g(x)$
- The **derivative of the inside function** $\displaystyle g'(x)$ as a factor

$$\displaystyle \int \underbrace{f(g(x))}_{\text{outside}} \cdot \underbrace{g'(x)}_{\text{derivative of inside}} \, dx$$

---

#### Example 1: Direct Pattern Recognition

Find $\displaystyle \int (x^2 + 1)^2 (2x) \, dx$.

Here:
- Inside function: $\displaystyle g(x) = x^2 + 1$
- Its derivative: $\displaystyle g'(x) = 2x$
- Outside function: $\displaystyle f(u) = u^2$

This fits the pattern perfectly! Using the power rule for integration:

$$\displaystyle \int (x^2 + 1)^2 (2x) \, dx = \frac{1}{3}(x^2 + 1)^3 + C.$$

Check: differentiate $\displaystyle \frac{1}{3}(x^2 + 1)^3 + C$ using the chain rule, and you'll get back $\displaystyle (x^2 + 1)^2(2x)$.

---

#### Example 2: Another Direct Pattern

Find $\displaystyle \int 5 \cos 5x \, dx$.

Here:
- Inside function: $\displaystyle g(x) = 5x$
- Its derivative: $\displaystyle g'(x) = 5$
- Outside function: $\displaystyle f(u) = \cos u$

The integrand is $\displaystyle \cos(5x) \cdot 5$, which matches $\displaystyle f(g(x)) \cdot g'(x)$. Using the cosine integration rule:

$$\displaystyle \int 5 \cos 5x \, dx = \sin 5x + C.$$

Check: $\displaystyle \frac{d}{dx}[\sin 5x] = 5 \cos 5x$, so it works.

---

### When the Derivative is "Almost" There

Sometimes the integrand contains $\displaystyle g'(x)$ but is missing a constant factor. You can adjust by multiplying and dividing by the missing constant.

#### Example 3: Multiplying and Dividing by a Constant

Find $\displaystyle \int x(x^2 + 1)^2 \, dx$.

This is similar to Example 1, but here the integrand has $\displaystyle x$, not $\displaystyle 2x$. Notice that $\displaystyle g(x) = x^2 + 1$ has derivative $\displaystyle 2x$. We're missing a factor of $\displaystyle 2$. Here's the trick:

$$\displaystyle \int x(x^2 + 1)^2 \, dx = \int (x^2 + 1)^2 \cdot \frac{1}{2} \cdot (2x) \, dx$$

Factor out the constant $\displaystyle \frac{1}{2}$:

$$\displaystyle = \frac{1}{2} \int (x^2 + 1)^2 (2x) \, dx$$

Now the inside matches the pattern from Example 1:

$$\displaystyle = \frac{1}{2} \left[ \frac{(x^2 + 1)^3}{3} \right] + C = \frac{1}{6}(x^2 + 1)^3 + C.$$

In practice, you might write this more compactly:

$$\displaystyle \int x(x^2 + 1)^2 \, dx = \frac{1}{2} \int (x^2 + 1)^2 \cdot 2x \, dx = \frac{1}{2} \cdot \frac{(x^2 + 1)^3}{3} + C = \frac{1}{6}(x^2 + 1)^3 + C.$$

---

### Change of Variables (Formal u-Substitution)

For more complicated integrals, it helps to do a formal substitution. You set $\displaystyle u$ equal to the inside function, find $\displaystyle du$, and rewrite the whole integral in terms of $\displaystyle u$.

#### Example 4: Change of Variables

Find $\displaystyle \int \sqrt{2x - 1} \, dx$.

**Step 1:** Choose $\displaystyle u$ as the inside function.  
Let $\displaystyle u = 2x - 1$.

**Step 2:** Find $\displaystyle du$.  
Differentiate: $\displaystyle du = 2 \, dx$, so $\displaystyle dx = \frac{du}{2}$.

**Step 3:** Rewrite the integral in terms of $\displaystyle u$.  

$$\displaystyle \int \sqrt{2x - 1} \, dx = \int \sqrt{u} \cdot \frac{du}{2} = \frac{1}{2} \int u^{1/2} \, du.$$

**Step 4:** Integrate with respect to $\displaystyle u$.  

$$\displaystyle \frac{1}{2} \cdot \frac{u^{3/2}}{3/2} + C = \frac{1}{2} \cdot \frac{2}{3} u^{3/2} + C = \frac{1}{3} u^{3/2} + C.$$

**Step 5:** Substitute back in terms of $\displaystyle x$.  

$$\displaystyle \frac{1}{3} (2x - 1)^{3/2} + C.$$

That's the final answer. You can check by differentiating $\displaystyle \frac{1}{3}(2x - 1)^{3/2}$ using the chain rule—you should get $\displaystyle \sqrt{2x - 1}$.

---

### Summary

- **Pattern recognition** is quick when you can mentally identify $\displaystyle f(g(x))$ and $\displaystyle g'(x)$.
- If $\displaystyle g'(x)$ is missing a constant factor, **multiply and divide** by that constant.
- For more complicated cases, use **formal change of variables** (u-substitution) to rewrite the integral completely before integrating.
- Always check your answer by differentiating—it should give you back the original integrand.

## Change of Variables for Definite Integrals

When you use $\displaystyle u$-substitution on a *definite* integral (one with limits of integration), you have two choices:

1. Do the substitution, find the antiderivative in terms of $\displaystyle u$, switch back to $\displaystyle x$, and then plug in the original $\displaystyle x$-limits.
2. **Better idea:** Change the limits of integration to match the new variable $\displaystyle u$. This saves you from having to convert back to $\displaystyle x$ at the end.

The second approach is usually cleaner, and it's justified by the following theorem.

### Theorem: Change of Variables for Definite Integrals

If $\displaystyle u = g(x)$ has a continuous derivative on $\displaystyle [a, b]$, and $\displaystyle f$ is continuous on the range of $\displaystyle g$, then

$$\displaystyle \int_a^b f(g(x)) \, g'(x) \, dx = \int_{g(a)}^{g(b)} f(u) \, du.$$

**In words:** When you substitute $\displaystyle u = g(x)$, the new limits of integration are $\displaystyle g(a)$ (the value of $\displaystyle u$ at $\displaystyle x = a$) and $\displaystyle g(b)$ (the value of $\displaystyle u$ at $\displaystyle x = b$). You then integrate $\displaystyle f(u)$ with respect to $\displaystyle u$ between these new limits.

---

### Why This Works

This theorem follows directly from combining:
- The substitution method for indefinite integrals ($\displaystyle \int f(g(x))g'(x) \, dx = \int f(u) \, du$)
- The Fundamental Theorem of Calculus (which lets us evaluate definite integrals using antiderivatives)

The key advantage: you never have to rewrite the final answer in terms of $\displaystyle x$—you just evaluate at the $\displaystyle u$-limits.

---

### Example: 

Evaluate $$\displaystyle \int_0^2 2x(x^2 + 1)^2 \, dx$$ using $\displaystyle u$-substitution with limit changes.

**Step 1: Choose $\displaystyle u$**  
Let $\displaystyle u = x^2 + 1$ (the inside function).

**Step 2: Find $\displaystyle du$**  
$\displaystyle du = 2x \, dx.$  
Look at that—the integrand already has $\displaystyle 2x \, dx$, so this substitution fits perfectly.

**Step 3: Change the limits**  
When $\displaystyle x = 0$: $\displaystyle u = 0^2 + 1 = 1$  
When $\displaystyle x = 2$: $\displaystyle u = 2^2 + 1 = 5$

So the new limits are from $\displaystyle u = 1$ to $\displaystyle u = 5$.

**Step 4: Rewrite the integral in terms of $\displaystyle u$**  

$$\displaystyle \int_{x=0}^{x=2} \underbrace{(x^2 + 1)^2}_{u^2} \underbrace{2x \, dx}_{du} = \int_{u=1}^{u=5} u^2 \, du.$$

**Step 5: Integrate with respect to $\displaystyle u$**  

$$\displaystyle \int_1^5 u^2 \, du = \left[ \frac{u^3}{3} \right]_1^5 = \frac{125}{3} - \frac{1}{3} = \frac{124}{3}.$$

**Step 6: Done!**  
No need to convert back to $\displaystyle x$—the answer is simply $\displaystyle \frac{124}{3}$.

---

### Why This Is So Useful

If we had done this the long way (without changing limits), we would have:
1. Found $\displaystyle \int 2x(x^2 + 1)^2 \, dx = \frac{(x^2 + 1)^3}{3} + C$
2. Then evaluated $\displaystyle \left[ \frac{(x^2 + 1)^3}{3} \right]_0^2 = \frac{(4+1)^3}{3} - \frac{(0+1)^3}{3} = \frac{125}{3} - \frac{1}{3} = \frac{124}{3}$

Same result, but more steps. Changing limits streamlines the process and reduces algebra mistakes.

---

### Quick Tip

Always remember: **when the limits change, they change with the substitution.**  
New lower limit = $\displaystyle g(\text{old lower limit})$  
New upper limit = $\displaystyle g(\text{old upper limit})$

Then integrate normally in $\displaystyle u$-land, and you're done!

**Example 1: Basic Substitution**
Find $\displaystyle \int 2x (x^2+1)^4 \, dx$.

*   **Step 1:** Let $\displaystyle u = x^2+1$ (the inner function of the power).
*   **Step 2:** Then $\displaystyle du = 2x \, dx$. Perfect! The $\displaystyle 2x \, dx$ is already there.
*   **Step 3:** Substitute: $\displaystyle \int (x^2+1)^4 \cdot (2x dx) = \int u^4 \, du$.
*   **Step 4:** Integrate: $\displaystyle \frac{u^5}{5} + C$.
*   **Step 5:** Back-substitute: $\displaystyle \boxed{\frac{(x^2+1)^5}{5} + C}$.

**Example 2: Trig Substitution with a Constant Factor**
Find $\displaystyle \int \sin(3x) \, dx$.

*   **Step 1:** Let $\displaystyle u = 3x$.
*   **Step 2:** Then $\displaystyle du = 3 dx$. We have $\displaystyle dx$, not $\displaystyle 3 dx$. Solve for $\displaystyle dx$: $\displaystyle dx = \frac{1}{3} du$.
*   **Step 3:** Substitute: $\displaystyle \int \sin(u) \cdot \frac{1}{3} du = \frac{1}{3} \int \sin u \, du$.
*   **Step 4:** Integrate: $\displaystyle \frac{1}{3} (-\cos u) + C = -\frac{1}{3} \cos u + C$.
*   **Step 5:** Back-substitute: $\displaystyle \boxed{-\frac{1}{3} \cos(3x) + C}$.

**Example 3: Definite Integral with Changed Limits**
Evaluate $\displaystyle \int_0^1 x e^{x^2} \, dx$.

*   **Step 1:** Let $\displaystyle u = x^2$.
*   **Step 2:** $\displaystyle du = 2x dx \Rightarrow x dx = \frac{1}{2} du$.
*   **Step 3:** **Change the limits.** When $\displaystyle x=0$, $\displaystyle u=0^2=0$. When $\displaystyle x=1$, $\displaystyle u=1^2=1$.
*   **Step 4:** Substitute everything: $\displaystyle \int_{x=0}^{x=1} e^{x^2} (x dx) = \int_{u=0}^{u=1} e^u \cdot \frac{1}{2} du$.
*   **Step 5:** Evaluate: $\displaystyle \frac{1}{2} \int_0^1 e^u \, du = \frac{1}{2} \left[ e^u \right]_0^1 = \frac{1}{2}(e - 1)$.
*   Final answer: $\displaystyle \boxed{\frac{1}{2}(e - 1)}$.

**Example 4: Integral of Tangent (A Classic Result)**
Find $\displaystyle \int \tan x \, dx$.

*   **Step 1:** Rewrite using sine and cosine: $\displaystyle \int \frac{\sin x}{\cos x} dx$.
*   **Step 2:** Let $\displaystyle u = \cos x$. Then $\displaystyle du = -\sin x \, dx$, so $\displaystyle \sin x \, dx = -du$.
*   **Step 3:** Substitute: $\displaystyle \int \frac{1}{u} \cdot (-du) = -\int \frac{1}{u} du = -\ln|u| + C$.
*   **Step 4:** Back-substitute: $\displaystyle -\ln|\cos x| + C = \ln|\cos x|^{-1} + C = \boxed{\ln|\sec x| + C}$.
    *This is a very important antiderivative to memorize.*

---

### **Putting It All Together: An Integration Strategy**

### **Simplifying the Integrand**

Often, the hardest part of integration is the algebra that comes *before* you can apply an integration rule.

**Key Algebraic Techniques:**

1.  **Expanding/Factoring:** Multiply out products or factor to cancel common terms.
2.  **Splitting Fractions:** If the numerator is a sum, you can split a single fraction into multiple, simpler fractions: $\displaystyle \frac{a+b}{c} = \frac{a}{c} + \frac{b}{c}$.
3.  **Long Division:** For rational functions (polynomial divided by polynomial) where the degree of the numerator is greater than or equal to the degree of the denominator.
4.  **Completing the Square:** Essential for integrals that lead to inverse trig functions (like $\displaystyle \arctan$) or certain logarithmic forms.
5.  **Multiplying by a Conjugate:** Useful for integrals with radicals in the denominator.

**Example 1: Long Division**
Evaluate $\displaystyle \int \frac{x^2 + 3x - 5}{x-1} \, dx$.

*   **Step 1: Perform long division.**
    $\displaystyle \frac{x^2 + 3x - 5}{x-1} = x + 4 + \frac{-1}{x-1}$.
*   **Step 2: Integrate the simplified result.**
    $\displaystyle \int \left( x + 4 - \frac{1}{x-1} \right) dx = \frac{x^2}{2} + 4x - \ln|x-1| + C$.
*   Final answer: $\displaystyle \boxed{\frac{x^2}{2} + 4x - \ln|x-1| + C}$.

**Example 2: Splitting a Fraction**
Evaluate $\displaystyle \int \frac{x^3 + 2x + 1}{x} \, dx$.

*   **Step 1: Split the fraction for each term in the numerator.**
    $\displaystyle \frac{x^3 + 2x + 1}{x} = \frac{x^3}{x} + \frac{2x}{x} + \frac{1}{x} = x^2 + 2 + \frac{1}{x}$.
*   **Step 2: Integrate.**
    $\displaystyle \int \left( x^2 + 2 + \frac{1}{x} \right) dx = \boxed{\frac{x^3}{3} + 2x + \ln|x| + C}$.

**Example 3: Completing the Square**
Evaluate $\displaystyle \int \frac{1}{x^2 + 4x + 13} \, dx$.

*   **Step 1: Complete the square in the denominator.**
    $\displaystyle x^2 + 4x + 13 = (x^2 + 4x + 4) + 9 = (x+2)^2 + 3^2$.
*   **Step 2: Recognize the arctangent form.**
    The integral is now $\displaystyle \int \frac{1}{(x+2)^2 + 3^2} \, dx$. This matches the formula: $\displaystyle \int \frac{du}{u^2 + a^2} = \frac{1}{a} \arctan\left( \frac{u}{a} \right) + C$.
*   **Step 3: Identify $\displaystyle u$ and $\displaystyle a$ and integrate.**
    Here, $\displaystyle u = x+2$ and $\displaystyle a=3$. So the integral equals $\displaystyle \boxed{\frac{1}{3} \arctan\left( \frac{x+2}{3} \right) + C}$.

**Example 4: Multiplying by a Conjugate**
Evaluate $\displaystyle \int \frac{1}{\sqrt{x+1} - \sqrt{x}} \, dx$.

*   **Step 1: Multiply numerator and denominator by the conjugate.** The conjugate of $\displaystyle \sqrt{x+1} - \sqrt{x}$ is $\displaystyle \sqrt{x+1} + \sqrt{x}$.

    $\displaystyle \frac{1}{\sqrt{x+1} - \sqrt{x}} \cdot \frac{\sqrt{x+1} + \sqrt{x}}{\sqrt{x+1} + \sqrt{x}} = \frac{\sqrt{x+1} + \sqrt{x}}{(x+1) - x} = \sqrt{x+1} + \sqrt{x}$.

*   **Step 2: Integrate the simplified expression.**
    $\displaystyle \int (\sqrt{x+1} + \sqrt{x}) \, dx = \int \left( (x+1)^{1/2} + x^{1/2} \right) dx = \boxed{\frac{2}{3}(x+1)^{3/2} + \frac{2}{3}x^{3/2} + C}$.

---

With multiple techniques available, having a game plan is essential. Follow this decision tree when faced with an integral.



**Your Integration Toolkit Checklist:**

1.  **SIMPLIFY:** Can you expand, factor, or split the integrand?
2.  **KNOW YOUR BASICS:** Does it match a common antiderivative (like $\displaystyle \int \sec^2 x \, dx = \tan x + C$)?
3.  **TRY $\displaystyle u$-SUBSTITUTION:** Look for a function and its derivative (up to a constant).
4.  **SPECIAL ALGEBRA:**
    *   **Rational function?** If the numerator's degree ≥ denominator's degree, use **long division**.
    *   **Quadratic in denominator?** Consider **completing the square** to get an arctangent or arcsine form.
    *   **Radical in denominator?** Try **multiplying by the conjugate**.

**Example 1: Rational Function Strategy**
Evaluate $\displaystyle \int \frac{x^2}{x^2+1} \, dx$.

*   **Step 1: Check degrees.** Numerator degree (2) equals denominator degree (2). Use **long division**.
    $\displaystyle \frac{x^2}{x^2+1} = 1 - \frac{1}{x^2+1}$.
*   **Step 2: Integrate.**
    $\displaystyle \int \left( 1 - \frac{1}{x^2+1} \right) dx = x - \arctan x + C$.
*   Final answer: $\displaystyle \boxed{x - \arctan x + C}$.

**Example 2: $\displaystyle u$-Substitution with Algebra**
Evaluate $\displaystyle \int \frac{e^{2x}}{1+e^x} \, dx$.

*   **Step 1: Notice $\displaystyle e^{2x} = (e^x)^2$. This suggests $\displaystyle u = e^x$, and $\displaystyle du = e^x dx$.** We have $\displaystyle e^{2x} dx = e^x \cdot e^x dx$. So let $\displaystyle u = e^x$, then $\displaystyle du = e^x dx$, and $\displaystyle e^x = u$. Thus, $\displaystyle e^{2x} dx = u \, du$.
*   **Step 2: Substitute.** The integral becomes $\displaystyle \int \frac{u}{1+u} \, du$.
*   **Step 3: Simplify the new integrand.** Use **long division** or simple algebra: $\displaystyle \frac{u}{1+u} = 1 - \frac{1}{1+u}$.
*   **Step 4: Integrate.** $\displaystyle \int \left( 1 - \frac{1}{1+u} \right) du = u - \ln|1+u| + C$.
*   **Step 5: Back-substitute ($\displaystyle u = e^x$).** $\displaystyle \boxed{e^x - \ln(1+e^x) + C}$.

**Example 3: Completing the Square Strategy**
Evaluate $\displaystyle \int \frac{1}{\sqrt{-x^2+6x-5}} \, dx$.

*   **Step 1: The square root of a quadratic suggests arcsine form. Complete the square inside.**
    $\displaystyle -x^2+6x-5 = -(x^2 - 6x + 5) = -(x^2 - 6x + 9 - 4) = -[(x-3)^2 - 4] = 4 - (x-3)^2$.
*   **Step 2: Rewrite the integral.** $\displaystyle \int \frac{1}{\sqrt{4 - (x-3)^2}} \, dx$.
*   **Step 3: Recognize the arcsine form.** $\displaystyle \int \frac{du}{\sqrt{a^2 - u^2}} = \arcsin\left( \frac{u}{a} \right) + C$.
*   **Step 4: Identify $\displaystyle u$ and $\displaystyle a$.** Here, $\displaystyle u = x-3$ and $\displaystyle a = 2$.
*   **Step 5: Integrate directly.** $\displaystyle \boxed{\arcsin\left( \frac{x-3}{2} \right) + C}$.
