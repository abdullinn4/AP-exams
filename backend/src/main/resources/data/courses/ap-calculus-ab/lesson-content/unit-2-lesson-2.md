# Lesson 5: Derivative Rules Mastery

### **5.1 Basic Derivative Rules**

**Definition:**

For any constant $c$ and any real number $r$, the following rules apply:

1. **Constant Rule:** $\frac{d}{dx}[c] = 0$
2. **Power Rule:** $\frac{d}{dx}[x^r] = r \cdot x^{r-1}$
3. **Constant Multiple Rule:** $\frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)$
4. **Sum Rule:** $\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$
5. **Difference Rule:** $\frac{d}{dx}[f(x) - g(x)] = f'(x) - g'(x)$

The Power Rule combined with the sum, difference, and constant multiple rules allows us to differentiate any polynomial function. These rules eliminate the need for the limit definition for most basic functions.

**Examples:**

1. **Basic Power Rule:** Find $\frac{d}{dx}[x^5]$.
    - $5x^{5-1} = 5x^4$
2. **Combining Rules:** Find $\frac{d}{dx}[3x^4 - 2x^3 + 5x - 7]$.
    - $\frac{d}{dx}[3x^4] - \frac{d}{dx}[2x^3] + \frac{d}{dx}[5x] - \frac{d}{dx}[7]$
    - $= 3 \cdot 4x^3 - 2 \cdot 3x^2 + 5 \cdot 1 - 0$
    - $= 12x^3 - 6x^2 + 5$
3. **Fractional and Negative Exponents:** Find $\frac{d}{dx}[\sqrt{x} + \frac{1}{x^2}]$.
    - Rewrite: $\sqrt{x} = x^{1/2}$ and $\frac{1}{x^2} = x^{-2}$
    - $\frac{d}{dx}[x^{1/2} + x^{-2}] = \frac{1}{2}x^{-1/2} - 2x^{-3}$
    - $= \frac{1}{2\sqrt{x}} - \frac{2}{x^3}$

---

### **5.2 Derivatives of Trigonometric Functions**

**Definition:**

The derivatives of the six basic trigonometric functions are:

1. $\frac{d}{dx}[\sin x] = \cos x$
2. $\frac{d}{dx}[\cos x] = -\sin x$
3. $\frac{d}{dx}[\tan x] = \sec^2 x$
4. $\frac{d}{dx}[\cot x] = -\csc^2 x$
5. $\frac{d}{dx}[\sec x] = \sec x \tan x$
6. $\frac{d}{dx}[\csc x] = -\csc x \cot x$

These derivatives should be memorized. The derivatives of tangent, cotangent, secant, and cosecant can be derived using the quotient rule with sine and cosine, but it's more efficient to commit them to memory.

**Examples:**

1. **Basic Trig Derivatives:** Find $f'(x)$ if $f(x) = 3\sin x - 2\cos x$.
    - $f'(x) = 3\cos x - 2(-\sin x) = 3\cos x + 2\sin x$
2. **Tangent Function:** Find $\frac{d}{dx}[5\tan x]$.
    - $5 \cdot \sec^2 x = 5\sec^2 x$
3. **Combination with Power Rule:** Find $\frac{d}{dx}[x^2 \sin x]$.
    - This requires the product rule (see section 5.4), but for now, note we'll need both the power rule and the sine derivative.

---

### **5.3 Derivatives of Exponential and Logarithmic Functions**

**Definition:**

The derivatives of the natural exponential and logarithmic functions are:

1. $\frac{d}{dx}[e^x] = e^x$
2. $\frac{d}{dx}[\ln x] = \frac{1}{x}$, for $x > 0$

The exponential function $e^x$ is unique in that it is its own derivative. For logarithms with other bases: $\frac{d}{dx}[\log_b x] = \frac{1}{x \ln b}$.

**Examples:**

1. **Exponential Derivative:** Find $\frac{d}{dx}[4e^x]$.
    - $4 \cdot e^x = 4e^x$
2. **Logarithmic Derivative:** Find $\frac{d}{dx}[2\ln x - 5]$.
    - $2 \cdot \frac{1}{x} - 0 = \frac{2}{x}$
3. **Combination:** Find $\frac{d}{dx}[e^x + \ln x - \sin x]$.
    - $e^x + \frac{1}{x} - \cos x$

---

### **5.4 Product and Quotient Rules**

**Definition:**

For differentiable functions $f(x)$ and $g(x)$:

1. **Product Rule:** $\frac{d}{dx}[f(x) \cdot g(x)] = f'(x)g(x) + f(x)g'(x)$
    - Mnemonic: "Derivative of first times second, plus first times derivative of second"
2. **Quotient Rule:** $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$, provided $g(x) \neq 0$
    - Mnemonic: "Derivative of top times bottom, minus top times derivative of bottom, all over bottom squared"

These rules allow us to differentiate products and quotients without expanding or simplifying algebraically first. For trigonometric functions like $\tan x = \frac{\sin x}{\cos x}$, we can use the quotient rule to verify its derivative is $\sec^2 x$.

**Examples:**

1. **Product Rule:** Find $\frac{d}{dx}[x^3 \sin x]$.
    - Let $f(x) = x^3$, $g(x) = \sin x$
    - $f'(x) = 3x^2$, $g'(x) = \cos x$
    - $\frac{d}{dx}[x^3 \sin x] = (3x^2)(\sin x) + (x^3)(\cos x) = 3x^2 \sin x + x^3 \cos x$
2. **Quotient Rule:** Find $\frac{d}{dx}\left[\frac{x^2 + 1}{x - 3}\right]$.
    - Let $f(x) = x^2 + 1$, $g(x) = x - 3$
    - $f'(x) = 2x$, $g'(x) = 1$
    - $\frac{d}{dx}\left[\frac{x^2+1}{x-3}\right] = \frac{(2x)(x-3) - (x^2+1)(1)}{(x-3)^2} = \frac{2x^2 - 6x - x^2 - 1}{(x-3)^2} = \frac{x^2 - 6x - 1}{(x-3)^2}$
3. **Trigonometric Quotient:** Use the quotient rule to verify $\frac{d}{dx}[\tan x] = \sec^2 x$.
    - $\tan x = \frac{\sin x}{\cos x}$, so $f(x) = \sin x$, $g(x) = \cos x$
    - $f'(x) = \cos x$, $g'(x) = -\sin x$
    - $\frac{d}{dx}[\tan x] = \frac{(\cos x)(\cos x) - (\sin x)(-\sin x)}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} = \sec^2 x$

---

### **5.5 Recognizing Limits as Derivatives**

**Definition:**

Some limits can be evaluated by recognizing they match the form of the difference quotient in the definition of the derivative:

$\displaystyle\lim⁡_{h→0}\frac{f(a+h)−f(a)}{h}=f′(a)$

or

$\displaystyle\lim⁡_{x→a}\frac{f(x)−f(a)}{x-a}=f′(a)$

If a limit has this structure, we can evaluate it by finding $f'(a)$ using derivative rules, rather than through algebraic manipulation.

**Examples:**

1. **Evaluate:** $\lim_{h \to 0} \frac{(2+h)^3 - 8}{h}$.
    - Recognize this as $f'(2)$ for $f(x) = x^3$
    - $f'(x) = 3x^2$, so $f'(2) = 3 \cdot 4 = 12$
    - Therefore, $\lim_{h \to 0} \frac{(2+h)^3 - 8}{h} = 12$
2. **Evaluate:** $\lim_{x \to 0} \frac{\sin(3x)}{x}$.
    - Rewrite as: $\lim_{x \to 0} \frac{\sin(3x) - 0}{x - 0}$. This resembles $f'(0)$ for $f(x) = \sin(3x)$.
    - Alternatively, use the known limit $\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$:
        
        $\lim_{x \to 0} \frac{\sin(3x)}{x} = \lim_{x \to 0} \frac{3\sin(3x)}{3x} = 3 \cdot \lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 3 \cdot 1 = 3$
        
3. **Evaluate:** $\lim_{h \to 0} \frac{e^{2+h} - e^2}{h}$.
    - This is $f'(2)$ for $f(x) = e^x$
    - $f'(x) = e^x$, so $f'(2) = e^2$
    - Therefore, the limit equals $e^2$

Here it’s: the differentiation formulas at one place we’ve covered today

$$
\frac{d}{dx}[c] = 0
$$

$$
\frac{d}{dx}[x^r] = r \cdot x^{r-1}
$$

$$
\frac{d}{dx}[e^x] = e^x
$$

$$
\frac{d}{dx}[\ln x] = \frac{1}{x}
$$

$$
\frac{d}{dx}[\sin x] = \cos x
$$

$$
\frac{d}{dx}[\cos x] = -\sin x
$$

$$
\frac{d}{dx}[\tan x] = \sec^2 x
$$

$$
\frac{d}{dx}[\cot x] = -\csc^2 x
$$

$$
\frac{d}{dx}[\sec x] = \sec x \tan x
$$

$$
\frac{d}{dx}[\csc x] = -\csc x \cot x
$$

$$
\frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)
$$

Differentiate each function:

1. $f(x) = 4x^5 - 3x^2 + 2x - 7$
2. $g(x) = \sqrt{x} - \frac{1}{\sqrt{x}}$
3. $h(x) = 3\sin x - 2\cos x + 5\tan x$
4. $y = x^2 \ln x$
5. $f(x) = \frac{x^2 + 1}{x - 1}$
6. $y = e^x \cos x$
7. $g(x) = \frac{\sin x}{x^2}$
8. $h(x) = (x^3 + 2x)(x^2 - 4)$
9. $y = 4\sec x + 3\csc x$
10. $f(x) = \frac{e^x}{x^2 + 1}$

Evaluate each limit by recognizing it as a derivative:

1. $\lim_{h \to 0} \frac{(1+h)^4 - 1}{h}$
2. $\lim_{x \to \pi} \frac{\sin x - \sin \pi}{x - \pi}$
3. $\lim_{h \to 0} \frac{\ln(1+h) - 0}{h}$
4. $\lim_{x \to 1} \frac{x^{10} - 1}{x - 1}$

Find the derivative using the appropriate rules:

1. $y = x^3 e^x \sin x$ (requires product rule applied twice)
2. $f(x) = \frac{x \cos x}{1 + \sin x}$

**Selected Solutions:**

1. $f'(x) = 20x^4 - 6x + 2$
2. $g(x) = x^{1/2} - x^{-1/2}$, so $g'(x) = \frac{1}{2}x^{-1/2} + \frac{1}{2}x^{-3/2} = \frac{1}{2\sqrt{x}} + \frac{1}{2x^{3/2}}$
3. $h'(x) = 3\cos x + 2\sin x + 5\sec^2 x$
4. $y' = 2x \ln x + x^2 \cdot \frac{1}{x} = 2x \ln x + x$
5. $f'(x) = \frac{(2x)(x-1) - (x^2+1)(1)}{(x-1)^2} = \frac{2x^2-2x-x^2-1}{(x-1)^2} = \frac{x^2-2x-1}{(x-1)^2}$
6. $y' = e^x \cos x + e^x(-\sin x) = e^x(\cos x - \sin x)$
7. $g'(x) = \frac{(\cos x)(x^2) - (\sin x)(2x)}{x^4} = \frac{x^2\cos x - 2x\sin x}{x^4} = \frac{x\cos x - 2\sin x}{x^3}$
8. Either expand or use product rule: $h'(x) = (3x^2+2)(x^2-4) + (x^3+2x)(2x) = 3x^4-12x^2+2x^2-8+2x^4+4x^2 = 5x^4-6x^2-8$
9. $y' = 4\sec x \tan x - 3\csc x \cot x$
10. $f'(x) = \frac{e^x(x^2+1) - e^x(2x)}{(x^2+1)^2} = \frac{e^x(x^2-2x+1)}{(x^2+1)^2} = \frac{e^x(x-1)^2}{(x^2+1)^2}$
11. This is $f'(1)$ for $f(x)=x^4$, so $4(1)^3=4$
12. This is $f'(\pi)$ for $f(x)=\sin x$, so $\cos \pi = -1$
13. This is $f'(1)$ for $f(x)=\ln x$, so $\frac{1}{1}=1$
14. This is $f'(1)$ for $f(x)=x^{10}$, so $10(1)^9=10$
15. Apply product rule to $x^3$ and $e^x\sin x$: $y' = 3x^2(e^x\sin x) + x^3(e^x\sin x + e^x\cos x) = e^x\sin x(3x^2+x^3) + x^3e^x\cos x$
16. Use quotient rule: $f'(x) = \frac{(\cos x - x\sin x)(1+\sin x) - (x\cos x)(\cos x)}{(1+\sin x)^2}$