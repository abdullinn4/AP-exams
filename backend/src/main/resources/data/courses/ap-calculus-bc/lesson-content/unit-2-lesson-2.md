# Derivative Rules Mastery

Alright, so far we've been doing derivatives the hard way—using the limit definition. You've earned your stripes. But now it's time for some serious shortcuts. These rules are going to make your life so much easier. Once you master them, you'll be able to find derivatives in seconds that used to take minutes.

By the end of this lesson you’ll have a full toolkit for differentiating all kinds of functions—polynomials, trig functions, exponentials, logs, and combinations like products and quotients.

*All the formulas below can be derived using limits. I will leave those derivations in the end of the lesson.*

## **Basic Derivative Rules**

Let’s start with the foundation. These rules are so simple you’ll wonder why we ever bothered with limits.

For any constant $c$ and any real number $r$, the following rules apply:

1. **Constant Rule:** $\displaystyle \frac{d}{dx}[c] = 0$  
   *A constant never changes, so its rate of change is zero. Makes sense, right?*

2. **Power Rule:** $\displaystyle \frac{d}{dx}[x^r] = r \cdot x^{r-1}$  
   *This works for any real exponent—positive, negative, fractional. Just bring the exponent down and subtract one.*

3. **Constant Multiple Rule:** $\displaystyle \frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)$  
   *Constants just tag along for the ride. They don’t affect the derivative except as a multiplier.*

4. **Sum Rule:** $\displaystyle \frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$  
   *The derivative of a sum is the sum of the derivatives. Nice and linear.*

5. **Difference Rule:** $\displaystyle \frac{d}{dx}[f(x) - g(x)] = f'(x) - g'(x)$  
   *Same idea as the sum rule, just with a minus sign.*

The Power Rule combined with the sum, difference, and constant multiple rules allows us to differentiate any polynomial function. These rules eliminate the need for the limit definition for most basic functions.

**Examples:**

1. **Basic Power Rule:** Find $\displaystyle \frac{d}{dx}[x^5]$.  
   *Just apply the power rule: bring down the 5, reduce the exponent by 1.*  
   $\displaystyle \frac{d}{dx}[x^5] = 5x^{4}$

2. **Combining Rules:** Find $\displaystyle \frac{d}{dx}[3x^4 - 2x^3 + 5x - 7]$.  
   *We’ll handle each term separately using the rules.*  
   $\displaystyle \frac{d}{dx}[3x^4] - \frac{d}{dx}[2x^3] + \frac{d}{dx}[5x] - \frac{d}{dx}[7]$  
   $\displaystyle = 3 \cdot 4x^3 - 2 \cdot 3x^2 + 5 \cdot 1 - 0$  
   $\displaystyle = 12x^3 - 6x^2 + 5$

3. **Fractional and Negative Exponents:** Find $\displaystyle \frac{d}{dx}\left[\sqrt{x} + \frac{1}{x^2}\right]$.  
   *First, rewrite so we can use the power rule: $\sqrt{x} = x^{1/2}$ and $\frac{1}{x^2} = x^{-2}$.*  
   $\displaystyle \frac{d}{dx}[x^{1/2} + x^{-2}] = \frac{1}{2}x^{-1/2} - 2x^{-3}$  
   *Now rewrite in a nicer form:*  
   $\displaystyle = \frac{1}{2\sqrt{x}} - \frac{2}{x^3}$

---

## **Derivatives of Trigonometric Functions**

Now let’s add the trig functions. You’ll need these memorized—they show up everywhere.

### **Definition:**

The derivatives of the six basic trigonometric functions are:

1. $\displaystyle \frac{d}{dx}[\sin x] = \cos x$

2. $\displaystyle \frac{d}{dx}[\cos x] = -\sin x$
3. $\displaystyle \frac{d}{dx}[\tan x] = \sec^2 x$
4. $\displaystyle \frac{d}{dx}[\cot x] = -\csc^2 x$
5. $\displaystyle \frac{d}{dx}[\sec x] = \sec x \tan x$
6. $\displaystyle \frac{d}{dx}[\csc x] = -\csc x \cot x$

These derivatives should be memorized. The derivatives of tangent, cotangent, secant, and cosecant can be derived using the quotient rule with sine and cosine, but it's more efficient to commit them to memory.

**Examples:**

1. **Basic Trig Derivatives:** Find $f'(x)$ if $f(x) = 3\sin x - 2\cos x$.  
   $\displaystyle f'(x) = 3\cos x - 2(-\sin x) = 3\cos x + 2\sin x$

2. **Tangent Function:** Find $\displaystyle \frac{d}{dx}[5\tan x]$.  
   $\displaystyle 5 \cdot \sec^2 x = 5\sec^2 x$

3. **Combination with Power Rule:** Find $\displaystyle \frac{d}{dx}[x^2 \sin x]$.  
   *This requires the product rule (coming up in section 5.4), but for now, note we'll need both the power rule and the sine derivative.*

---

## **Derivatives of Exponential and Logarithmic Functions**

Exponential and log functions have their own special derivatives. The natural exponential is particularly beautiful—it’s its own derivative!

### **Definition:**

The derivatives of the natural exponential and logarithmic functions are:

1. $\displaystyle \frac{d}{dx}[e^x] = e^x$  
   *How cool is that? The function doesn’t change when you differentiate it.*

2. $\displaystyle \frac{d}{dx}[a^x] = a^x \ln a$

   *For any positive base a.*

3. $\displaystyle \frac{d}{dx}[\ln x] = \frac{1}{x}$, for $x > 0$

4. $\displaystyle \frac{d}{dx}[\log_a x] = \frac{1}{x \ln a}$.

      *For logarithms with other bases.*

The exponential function $e^x$ is unique in that it is its own derivative.

**Examples:**

1. **Exponential Derivative:** Find $\displaystyle \frac{d}{dx}[4e^x]$.  
   $\displaystyle 4 \cdot e^x = 4e^x$

2. **Logarithmic Derivative:** Find $\displaystyle \frac{d}{dx}[2\ln x - 5]$.  
   $\displaystyle 2 \cdot \frac{1}{x} - 0 = \frac{2}{x}$

3. **Combination:** Find $\displaystyle \frac{d}{dx}[e^x + \ln x - \sin x]$.  
   $\displaystyle e^x + \frac{1}{x} - \cos x$

---

## **Product and Quotient Rules**

Now things get interesting. What if you have a product of two functions, like $x^2 \sin x$? You might be tempted to just multiply the derivatives, but that’s wrong! Let’s see why.

### **Definition:**

For differentiable functions $f(x)$ and $g(x)$:

1. **Product Rule:** $\displaystyle \frac{d}{dx}[f(x) \cdot g(x)] = f'(x)g(x) + f(x)g'(x)$  
   *Mnemonic: "Derivative of first times second, plus first times derivative of second"*

2. **Quotient Rule:** $\displaystyle \frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$, provided $g(x) \neq 0$  
   *Mnemonic: "Derivative of top times bottom, minus top times derivative of bottom, all over bottom squared"*  
   *Some people like "low d-high minus high d-low over low squared" — whatever works for you.*

These rules allow us to differentiate products and quotients without expanding or simplifying algebraically first. For trigonometric functions like $\tan x = \frac{\sin x}{\cos x}$, we can use the quotient rule to verify its derivative is $\sec^2 x$.

**Examples:**

1. **Product Rule:** Find $\displaystyle \frac{d}{dx}[x^3 \sin x]$.  
   *Let $f(x) = x^3$, $g(x) = \sin x$.*  

   *Then $f'(x) = 3x^2$, $g'(x) = \cos x$.*  

   $\displaystyle \frac{d}{dx}[x^3 \sin x] = (3x^2)(\sin x) + (x^3)(\cos x) = 3x^2 \sin x + x^3 \cos x$

2. **Quotient Rule:** Find $\displaystyle \frac{d}{dx}\left[\frac{x^2 + 1}{x - 3}\right]$.  
   
   *Let $f(x) = x^2 + 1$, $g(x) = x - 3$.*  
   
   *Then $f'(x) = 2x$, $g'(x) = 1$.*  
   
   $\displaystyle \frac{d}{dx}\left[\frac{x^2+1}{x-3}\right] = \frac{(2x)(x-3) - (x^2+1)(1)}{(x-3)^2}$  
   
   $\displaystyle = \frac{2x^2 - 6x - x^2 - 1}{(x-3)^2} = \frac{x^2 - 6x - 1}{(x-3)^2}$

3. **Trigonometric Quotient:** Use the quotient rule to verify $\displaystyle \frac{d}{dx}[\tan x] = \sec^2 x$.  
   
   *Write $\tan x = \frac{\sin x}{\cos x}$, so $f(x) = \sin x$, $g(x) = \cos x$.*  
   
   *Then $f'(x) = \cos x$, $g'(x) = -\sin x$.*  
   
   $\displaystyle \frac{d}{dx}[\tan x] = \frac{(\cos x)(\cos x) - (\sin x)(-\sin x)}{\cos^2 x}$  
   
   $\displaystyle = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} = \sec^2 x$  
   
   *Boom! It works.*

---

## **Recognizing Limits as Derivatives**

Sometimes you’ll see a limit that looks suspiciously like the definition of a derivative. If you can spot that, you can avoid a lot of messy algebra.

### **Definition:**

Some limits can be evaluated by recognizing they match the form of the difference quotient in the definition of the derivative at a point:

$\displaystyle \lim_{h \to 0}\frac{f(a+h)-f(a)}{h}=f'(a)$

or

$\displaystyle \lim_{x \to a}\frac{f(x)-f(a)}{x-a}=f'(a)$

If a limit has this structure, we can evaluate it by finding $f'(a)$ using derivative rules, rather than through algebraic manipulation.

**Examples:**

1. $\displaystyle \lim_{h \to 0} \frac{(2+h)^3 - 8}{h}$ is  

   *This matches $\displaystyle \frac{f(2+h)-f(2)}{h}$ with $f(x)=x^3$.*  

   *So the limit is $f'(2)$. Since $f'(x)=3x^2$, $f'(2)=3\cdot4=12$.*  

   *Therefore, $\displaystyle \lim_{h \to 0} \frac{(2+h)^3 - 8}{h} = 12$.*

2. $\displaystyle \lim_{x \to 0} \frac{\sin(3x)}{x}=$  

   *At first glance, it doesn't look exactly like the definition, but we can tweak it.*  

   *Write it as $\displaystyle \lim_{x \to 0} \frac{\sin(3x) - 0}{x - 0}$. That’s $f'(0)$ for $f(x)=\sin(3x)$.*

   *But maybe easier: use the known limit $\displaystyle \lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$.*  

   $\displaystyle \lim_{x \to 0} \frac{\sin(3x)}{x} = \lim_{x \to 0} \frac{3\sin(3x)}{3x} = 3 \cdot \lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 3 \cdot 1 = 3$

3. $\displaystyle \lim_{h \to 0} \frac{e^{2+h} - e^2}{h}=$  

   *This is exactly $f'(2)$ for $f(x)=e^x$.*  

   *Since $f'(x)=e^x$, $f'(2)=e^2$.*  

   *So the limit equals $e^2$.*

---

### **Summary of Derivative Rules**

Here’s your cheat sheet. Keep it handy!

| Function | Derivative |
|----------|------------|
| $c$ (constant) | $0$ |
| $x^r$ (any real $r$) | $r x^{r-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $\displaystyle \frac{1}{x}$ |
| $\log_a x$ | $\displaystyle \frac{1}{x \ln a}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x \tan x$ |
| $\csc x$ | $-\csc x \cot x$ |
| $c \cdot f(x)$ | $c \cdot f'(x)$ |
| $f(x) + g(x)$ | $f'(x) + g'(x)$ |
| $f(x) - g(x)$ | $f'(x) - g'(x)$ |
| $f(x)g(x)$ | $f'(x)g(x) + f(x)g'(x)$ |
| $\displaystyle \frac{f(x)}{g(x)}$ | $\displaystyle \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$ |

Practice them until they become second nature. Next up, we’ll see how to combine them with the chain rule for even more complicated functions. But for now, make sure you’re solid on these—they’re the building blocks of everything else.

---
All derivative formulas come from the same fundamental idea—the limit definition of the derivative:

$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$

Let's derive each formula step by step. **You don't need to memorize these derivations**, but understanding where the rules come from will deepen your intuition.



### Constant Function: $f(x) = c$

$$f'(x) = \lim_{h \to 0} \frac{c - c}{h} = \lim_{h \to 0} \frac{0}{h} = \lim_{h \to 0} 0 = 0$$

The derivative of any constant is $0$.

---

### Power Rule: $f(x) = x^n$ (for positive integers $n$)

Using the binomial expansion:
$$(x + h)^n = x^n + nx^{n-1}h + \frac{n(n-1)}{2}x^{n-2}h^2 + \dots + nxh^{n-1} + h^n$$

$$f'(x) = \lim_{h \to 0} \frac{(x + h)^n - x^n}{h}$$
$$= \lim_{h \to 0} \frac{x^n + nx^{n-1}h + \frac{n(n-1)}{2}x^{n-2}h^2 + \dots + h^n - x^n}{h}$$
$$= \lim_{h \to 0} \frac{nx^{n-1}h + \frac{n(n-1)}{2}x^{n-2}h^2 + \dots + h^n}{h}$$
$$= \lim_{h \to 0} \left(nx^{n-1} + \frac{n(n-1)}{2}x^{n-2}h + \dots + h^{n-1}\right)$$

As $h \to 0$, every term containing $h$ disappears, leaving:
$$f'(x) = nx^{n-1}$$

*For real exponents $r$, the same rule holds, but the derivation uses logarithms or the exponential function.*

---

### Exponential Functions

#### $f(x) = e^x$

$$f'(x) = \lim_{h \to 0} \frac{e^{x + h} - e^x}{h} = \lim_{h \to 0} \frac{e^x e^h - e^x}{h} = e^x \cdot \lim_{h \to 0} \frac{e^h - 1}{h}$$

The limit $\displaystyle \lim_{h \to 0} \frac{e^h - 1}{h} = 1$ (this is actually one definition of the number $e$). Therefore:
$$f'(x) = e^x \cdot 1 = e^x$$

#### $f(x) = a^x$ (where $a > 0$)

$$f'(x) = \lim_{h \to 0} \frac{a^{x + h} - a^x}{h} = \lim_{h \to 0} \frac{a^x a^h - a^x}{h} = a^x \cdot \lim_{h \to 0} \frac{a^h - 1}{h}$$

The limit $\displaystyle \lim_{h \to 0} \frac{a^h - 1}{h} = \ln a$ (this is a standard result that comes from rewriting $a^h = e^{h \ln a}$). Therefore:
$$f'(x) = a^x \ln a$$

---

### Logarithmic Functions

#### $f(x) = \ln x$

$$f'(x) = \lim_{h \to 0} \frac{\ln(x + h) - \ln x}{h} = \lim_{h \to 0} \frac{\ln\left(\frac{x + h}{x}\right)}{h} = \lim_{h \to 0} \frac{\ln\left(1 + \frac{h}{x}\right)}{h}$$

Let $u = \frac{h}{x}$. Then as $h \to 0$, $u \to 0$, and $h = xu$. Substitute:
$$f'(x) = \lim_{u \to 0} \frac{\ln(1 + u)}{xu} = \frac{1}{x} \cdot \lim_{u \to 0} \frac{\ln(1 + u)}{u}$$

The limit $\displaystyle \lim_{u \to 0} \frac{\ln(1 + u)}{u} = 1$ (this is another fundamental limit, which we didn't touch but can be easily evaluated using L'Hopital's rule, which you will learn in Unit 4.). Therefore:
$$f'(x) = \frac{1}{x} \cdot 1 = \frac{1}{x}$$

#### $f(x) = \log_a x$

Recall $\log_a x = \frac{\ln x}{\ln a}$. Using the constant multiple rule (which we'll derive next):
$$f'(x) = \frac{1}{\ln a} \cdot \frac{d}{dx}[\ln x] = \frac{1}{\ln a} \cdot \frac{1}{x} = \frac{1}{x \ln a}$$

---

### Trigonometric Functions

#### $f(x) = \sin x$

$$f'(x) = \lim_{h \to 0} \frac{\sin(x + h) - \sin x}{h}$$

Use the sine addition formula: $\sin(x + h) = \sin x \cos h + \cos x \sin h$

$$f'(x) = \lim_{h \to 0} \frac{\sin x \cos h + \cos x \sin h - \sin x}{h}$$
$$= \lim_{h \to 0} \frac{\sin x (\cos h - 1) + \cos x \sin h}{h}$$
$$= \sin x \cdot \lim_{h \to 0} \frac{\cos h - 1}{h} + \cos x \cdot \lim_{h \to 0} \frac{\sin h}{h}$$

We know:
- $\displaystyle \lim_{h \to 0} \frac{\sin h}{h} = 1$ (the special trig limit)
- $\displaystyle \lim_{h \to 0} \frac{\cos h - 1}{h} = 0$ (we derived this earlier)

Therefore:
$$f'(x) = \sin x \cdot 0 + \cos x \cdot 1 = \cos x$$

#### $f(x) = \cos x$

$$f'(x) = \lim_{h \to 0} \frac{\cos(x + h) - \cos x}{h}$$

Use the cosine addition formula: $\cos(x + h) = \cos x \cos h - \sin x \sin h$

$$f'(x) = \lim_{h \to 0} \frac{\cos x \cos h - \sin x \sin h - \cos x}{h}$$
$$= \lim_{h \to 0} \frac{\cos x (\cos h - 1) - \sin x \sin h}{h}$$
$$= \cos x \cdot \lim_{h \to 0} \frac{\cos h - 1}{h} - \sin x \cdot \lim_{h \to 0} \frac{\sin h}{h}$$
$$= \cos x \cdot 0 - \sin x \cdot 1 = -\sin x$$

#### $f(x) = \tan x$

Since $\tan x = \frac{\sin x}{\cos x}$, we can use the quotient rule (derived below). For now, accepting the quotient rule:
$$\frac{d}{dx}[\tan x] = \frac{(\cos x)(\cos x) - (\sin x)(-\sin x)}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} = \sec^2 x$$

#### $f(x) = \sec x$

Since $\sec x = \frac{1}{\cos x}$, use the quotient rule (or rewrite as $(\cos x)^{-1}$ and use chain rule—later):
$$\frac{d}{dx}[\sec x] = \frac{(0)(\cos x) - (1)(-\sin x)}{\cos^2 x} = \frac{\sin x}{\cos^2 x} = \frac{1}{\cos x} \cdot \frac{\sin x}{\cos x} = \sec x \tan x$$

*Similarly, $\cot x$ and $\csc x$ can be derived from their definitions.*

---

### Derivative Rules (Properties)

#### Constant Multiple Rule: $\frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)$

$$\frac{d}{dx}[c f(x)] = \lim_{h \to 0} \frac{c f(x + h) - c f(x)}{h} = c \cdot \lim_{h \to 0} \frac{f(x + h) - f(x)}{h} = c \cdot f'(x)$$

#### Sum Rule: $\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$

$$\frac{d}{dx}[f(x) + g(x)] = \lim_{h \to 0} \frac{[f(x + h) + g(x + h)] - [f(x) + g(x)]}{h}$$
$$= \lim_{h \to 0} \frac{f(x + h) - f(x)}{h} + \lim_{h \to 0} \frac{g(x + h) - g(x)}{h} = f'(x) + g'(x)$$

*(The difference rule works the same way.)*

#### Product Rule: $\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$

Add and subtract $f(x + h)g(x)$ in the numerator (a clever trick):

$$\frac{d}{dx}[f(x)g(x)] = \lim_{h \to 0} \frac{f(x + h)g(x + h) - f(x)g(x)}{h}$$
$$= \lim_{h \to 0} \frac{f(x + h)g(x + h) - f(x + h)g(x) + f(x + h)g(x) - f(x)g(x)}{h}$$
$$= \lim_{h \to 0} \left[ f(x + h) \cdot \frac{g(x + h) - g(x)}{h} + g(x) \cdot \frac{f(x + h) - f(x)}{h} \right]$$

As $h \to 0$, $f(x + h) \to f(x)$ (assuming continuity), and the two difference quotients approach $g'(x)$ and $f'(x)$ respectively. Therefore:
$$= f(x)g'(x) + g(x)f'(x)$$

#### Quotient Rule: $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$

We can derive this using the product rule by rewriting $\frac{f}{g} = f \cdot g^{-1}$, but a direct limit derivation is messy. Instead, let's use the product rule approach:

Let $h(x) = \frac{f(x)}{g(x)}$. Then $f(x) = h(x) g(x)$. Apply the product rule:
$$f'(x) = h'(x) g(x) + h(x) g'(x)$$

Solve for $h'(x)$:
$$h'(x) = \frac{f'(x) - h(x) g'(x)}{g(x)} = \frac{f'(x) - \frac{f(x)}{g(x)} g'(x)}{g(x)} = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$$
