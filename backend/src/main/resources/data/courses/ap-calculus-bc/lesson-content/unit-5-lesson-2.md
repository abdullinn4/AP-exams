# Function Behavior and Graphing

We've spent a lot of time learning how to compute derivatives and use them to find rates of change, critical points, and extrema. Now we're going to put it all together to do something really powerful: sketch the graph of a function without plotting dozens of points.

Think about it—with just a few calculations, we can determine:
- Where the function is increasing or decreasing
- Where it has peaks and valleys (local extrema)
- Where it curves upward or downward (concavity)
- Where that curvature changes (inflection points)
- What happens as x goes to infinity (asymptotes)

This is curve sketching. It's like being a detective: the function gives us clues, and the derivatives help us piece together the full picture. By the end of this lesson, you'll be able to look at any function and sketch its essential features with confidence.

---

## **Concavity and the Second Derivative**

We already know that the first derivative tells us where a function is increasing or decreasing. But that's only half the story. A function can be increasing in two very different ways: it could be increasing at an increasing rate (curving upward) or increasing at a decreasing rate (curving downward). That's where concavity comes in.

### **Definition:**

- A function $f$ is **concave up** on an interval if its graph lies above its tangent lines on that interval. Equivalently, the derivative $f'$ is increasing on that interval.
- A function $f$ is **concave down** on an interval if its graph lies below its tangent lines on that interval. Equivalently, the derivative $f'$ is decreasing on that interval.
- The **second derivative test for concavity**:
    - If $f''(x) > 0$ for all $x$ in an interval, then $f$ is concave up on that interval.
    - If $f''(x) < 0$ for all $x$ in an interval, then $f$ is concave down on that interval.

**Visualizing Concavity:**

Think of it this way:
- **Concave up** curves "hold water" (like a cup opening upward). Think $y = x^2$.
- **Concave down** curves "spill water" (like an arch). Think $y = -x^2$.

**Connection to First Derivative:**

When $f'$ is increasing (i.e., $f'' > 0$), the slopes of tangent lines are getting steeper from left to right. That means the curve is bending upward. When $f'$ is decreasing ($f'' < 0$), the slopes are getting less steep, so the curve is bending downward.

**Inflection Points:**

A point where the graph of $f$ changes concavity (from up to down or down to up) is called an **inflection point**. At an inflection point, $f''(x) = 0$ or $f''(x)$ does not exist. But—and this is important—not every point where $f''(x)=0$ is an inflection point. You need the concavity to actually change sign. So always check the sign of $f''$ on either side.

**Example 1: Determining Concavity**

Find where $f(x) = x^3 - 3x^2 + 4$ is concave up and concave down.

- First derivative: $f'(x) = 3x^2 - 6x$.
- Second derivative: $f''(x) = 6x - 6 = 6(x-1)$.
- Set $f''(x) = 0$ → $x = 1$.
- Now test intervals around $x=1$:
    - For $x < 1$ (say $x=0$): $f''(0) = -6 < 0$ → concave down on $(-\infty, 1)$.
    - For $x > 1$ (say $x=2$): $f''(2) = 6(2-1) = 6 > 0$ → concave up on $(1, \infty)$.
- Since concavity changes at $x=1$, there is an inflection point at $(1, f(1)) = (1, 2)$.

**Example 2: Finding Inflection Points for a Trigonometric Function**

Find inflection points of $f(x) = \sin x$ on $[0, 2\pi]$.

- $f'(x) = \cos x$, $f''(x) = -\sin x$.
- Set $f''(x) = 0$: $-\sin x = 0$ → $\sin x = 0$ → $x = 0, \pi, 2\pi$ on $[0, 2\pi]$.
- Check sign changes:
    - For $0 < x < \pi$, $\sin x > 0$ so $f''(x) = -\sin x < 0$ (concave down).
    - For $\pi < x < 2\pi$, $\sin x < 0$ so $f''(x) = -\sin x > 0$ (concave up).
- Concavity changes at $x = \pi$, so $(\pi, 0)$ is an inflection point.
- At $x=0$ and $x=2\pi$, we're at endpoints. Since we don't have information on both sides, they're not considered inflection points in the usual sense (though sometimes endpoints can be inflection-like, the definition typically requires points interior to the domain).

---

## **The Second Derivative Test for Local Extrema**

We already have the First Derivative Test for classifying critical points. But the second derivative gives us another tool—often faster, when it works.

### **Definition:**

Suppose $f'(c) = 0$ (so $c$ is a critical point) and $f''(x)$ is continuous near $c$.

- If $f''(c) > 0$, then $f$ has a **local minimum** at $x = c$.
- If $f''(c) < 0$, then $f$ has a **local maximum** at $x = c$.
- If $f''(c) = 0$, the test is **inconclusive**; $f$ may have a local maximum, local minimum, or neither at $x = c$. In this case, you need to use the First Derivative Test.

**Why It Works:**

If $f''(c) > 0$, the function is concave up at $c$. That means the graph lies above its tangent line near $c$. Since the tangent line at a critical point is horizontal (derivative zero), the graph must be above that horizontal line on both sides—so it's a local minimum.

If $f''(c) < 0$, the function is concave down, so the graph lies below its horizontal tangent—local maximum.

**Advantage:**

Often quicker than the First Derivative Test, especially when the second derivative is easy to compute. You don't need to check signs on intervals; just evaluate $f''$ at the critical point.

**Limitation:**

Fails when $f''(c) = 0$ or when $f''(c)$ doesn't exist. Also, you must already know that $c$ is a critical point—this test doesn't find critical points, it classifies them.

**Example 1: Applying the Test**

For $f(x) = x^3 - 3x^2 + 4$, we found critical points at $x=0$ and $x=2$. Let's use the second derivative test.

- $f''(x) = 6x - 6$.
- At $x=0$: $f''(0) = -6 < 0$ → local maximum.
- At $x=2$: $f''(2) = 6(2)-6 = 6 > 0$ → local minimum.

This matches our First Derivative Test result from Lesson 11.

**Example 2: When the Test Fails**

Consider $f(x) = x^4$. Critical point at $x=0$ (since $f'(x)=4x^3=0$).

- $f''(x) = 12x^2$, so $f''(0) = 0$. The second derivative test is inconclusive.
- We need another method. Using the First Derivative Test: $f'(x)=4x^3$ changes from negative (for $x<0$) to positive (for $x>0$) at $x=0$, so it's a local minimum.
- Or we could just note that $x^4 \ge 0$ and equals 0 only at $x=0$, so it's an absolute minimum.

**Example 3: Another Inconclusive Case**

For $f(x) = x^3$, critical point at $x=0$. $f''(x)=6x$, so $f''(0)=0$.

- First Derivative Test: $f'(x)=3x^2$ is positive on both sides of 0 (since $x^2$ is always non-negative, and positive for $x \neq 0$). No sign change → no extremum, just an inflection point.

So remember: when $f''(c)=0$, you can't jump to conclusions. You must investigate further.

---

## **Curve Sketching Strategy**

Now we're ready to put everything together. Here's a systematic approach to sketching the graph of any function.

**Step-by-Step Strategy:**

1. **Domain:** Determine the domain of $f$. Look for values that make denominators zero, square roots negative, logs non-positive, etc.

2. **Intercepts:**
   - $y$-intercept: $f(0)$, if 0 is in the domain.
   - $x$-intercepts: Solve $f(x) = 0$. (Sometimes this is hard; you can skip if too complicated.)

3. **Symmetry (optional but helpful):**
   - Even function: $f(-x) = f(x)$ → symmetric about y-axis.
   - Odd function: $f(-x) = -f(x)$ → symmetric about origin.
   - Periodic: check if relevant.

4. **Asymptotes:**
   - **Vertical asymptotes:** Where denominator is zero and function approaches ±∞. Usually for rational functions.
   - **Horizontal asymptotes:** $\lim_{x \to \infty} f(x)$ and $\lim_{x \to -\infty} f(x)$. If these limits are finite numbers, those are horizontal asymptotes.
   - **Slant asymptotes:** If degree of numerator is exactly one more than denominator, there's a slant asymptote (beyond AB scope but good to know).

5. **First Derivative Analysis:**
   - Find $f'(x)$.
   - Find critical points (where $f'(x)=0$ or undefined, and in domain).
   - Use sign chart of $f'$ to determine intervals of increase ($f'>0$) and decrease ($f'<0$).
   - Identify local extrema using First Derivative Test.

6. **Second Derivative Analysis:**
   - Find $f''(x)$.
   - Find points where $f''(x)=0$ or undefined.
   - Use sign chart of $f''$ to determine intervals of concavity (up if $f''>0$, down if $f''<0$).
   - Identify inflection points where concavity changes.

7. **Sketch:**
   - Plot intercepts, critical points, inflection points, and asymptotes.
   - Draw the curve through these points, respecting increasing/decreasing behavior and concavity.
   - Make sure the shape matches all the information.

**Example 1: Sketching a Polynomial**

Sketch $f(x) = x^3 - 3x^2 + 4$.

- **Domain:** All real numbers.
- **Intercepts:** $y$-intercept: $f(0)=4$. $x$-intercepts: Solve $x^3-3x^2+4=0$. Notice $x=-1$ works: $(-1)^3-3(1)+4 = -1-3+4=0$. Factor: $(x+1)(x^2-4x+4) = (x+1)(x-2)^2 = 0$. So $x$-intercepts at $x=-1$ and $x=2$ (double root, so tangent at $x=2$).
- **Asymptotes:** None (polynomial).
- **First derivative:** $f'(x)=3x^2-6x = 3x(x-2)$. Critical points: $x=0,2$.
    - Sign chart: $f' > 0$ on $(-\infty,0)$ and $(2,\infty)$; $f' < 0$ on $(0,2)$.
    - Increasing on $(-\infty,0)$ and $(2,\infty)$, decreasing on $(0,2)$.
    - Local max at $(0,4)$, local min at $(2,0)$.
- **Second derivative:** $f''(x)=6x-6=6(x-1)$. $f''=0$ at $x=1$.
    - Sign chart: $f'' < 0$ on $(-\infty,1)$ (concave down), $f'' > 0$ on $(1,\infty)$ (concave up).
    - Inflection point at $(1, f(1)) = (1, 2)$.
- **Sketch:** Plot points: $(-1,0)$, $(0,4)$, $(1,2)$, $(2,0)$. 
    - From left, curve comes from $-\infty$ (since leading term $x^3$), increases to $(0,4)$ while concave down.
    - Then decreases to $(2,0)$, passing through inflection at $(1,2)$ where concavity changes from down to up.
    - After $(2,0)$, increases to $\infty$, concave up.
    - The double root at $x=2$ means the graph touches the x-axis and turns around (local minimum).

**Example 2: Sketching a Rational Function**

Sketch $f(x) = \frac{x}{x^2+1}$.

- **Domain:** All real numbers (denominator never zero).
- **Intercepts:** $f(0)=0$, so origin is both x and y intercept.
- **Symmetry:** $f(-x) = \frac{-x}{x^2+1} = -f(x)$, so odd function → symmetric about origin.
- **Asymptotes:** 
    - Horizontal: $\lim_{x \to \pm\infty} \frac{x}{x^2+1} = 0$, so $y=0$ is horizontal asymptote.
    - No vertical asymptotes.
- **First derivative:** 
    $f'(x) = \frac{(1)(x^2+1) - (x)(2x)}{(x^2+1)^2} = \frac{x^2+1 - 2x^2}{(x^2+1)^2} = \frac{1-x^2}{(x^2+1)^2}$.
    - Critical points: $1-x^2=0$ → $x=\pm 1$.
    - Sign chart: $f'(x) > 0$ on $(-1,1)$, $f'(x) < 0$ on $(-\infty,-1)$ and $(1,\infty)$.
    - Increasing on $(-1,1)$, decreasing elsewhere.
    - Local min at $x=-1$: $f(-1) = -\frac{1}{2}$.
    - Local max at $x=1$: $f(1) = \frac{1}{2}$.
- **Second derivative:** (This one's a bit messy but let's do it carefully)
    $f''(x) = \frac{(-2x)(x^2+1)^2 - (1-x^2)\cdot 2(x^2+1)\cdot 2x}{(x^2+1)^4}$.
    Factor $(x^2+1)$ from numerator:
    $f''(x) = \frac{(x^2+1)[-2x(x^2+1) - 4x(1-x^2)]}{(x^2+1)^4} = \frac{-2x(x^2+1) - 4x(1-x^2)}{(x^2+1)^3}$.
    Simplify numerator: $-2x^3 - 2x - 4x + 4x^3 = 2x^3 - 6x = 2x(x^2-3)$.
    So $f''(x) = \frac{2x(x^2-3)}{(x^2+1)^3}$.
    - Set $f''(x)=0$: $x=0$, $x=\pm\sqrt{3}$.
    - Sign chart of $f''$:
        - For $x < -\sqrt{3}$, say $x=-2$: $f''(-2) = \frac{2(-2)(4-3)}{(4+1)^3} = \frac{-4(1)}{125} < 0$ → concave down.
        - For $-\sqrt{3} < x < 0$, say $x=-1$: $f''(-1) = \frac{2(-1)(1-3)}{(1+1)^3} = \frac{-2(-2)}{8} = \frac{4}{8} > 0$ → concave up.
        - For $0 < x < \sqrt{3}$, say $x=1$: $f''(1) = \frac{2(1)(1-3)}{(1+1)^3} = \frac{2(-2)}{8} = -\frac{4}{8} < 0$ → concave down.
        - For $x > \sqrt{3}$, say $x=2$: $f''(2) = \frac{2(2)(4-3)}{(4+1)^3} = \frac{4(1)}{125} > 0$ → concave up.
    - Inflection points where concavity changes: at $x=-\sqrt{3}$, $x=0$, $x=\sqrt{3}$.
        $f(-\sqrt{3}) = \frac{-\sqrt{3}}{3+1} = -\frac{\sqrt{3}}{4}$, so $(-\sqrt{3}, -\sqrt{3}/4)$.
        $f(0)=0$, so $(0,0)$.
        $f(\sqrt{3}) = \frac{\sqrt{3}}{3+1} = \frac{\sqrt{3}}{4}$, so $(\sqrt{3}, \sqrt{3}/4)$.
- **Sketch:**
    - The function is odd, so symmetric about origin.
    - Horizontal asymptote $y=0$ as $x \to \pm\infty$.
    - From left, as $x \to -\infty$, $f(x) \to 0^-$ (slightly below x-axis).
    - It decreases to local min at $(-1, -0.5)$ (concave down until $x=-\sqrt{3}$, then concave up to $x=0$).
    - Then increases through origin to local max at $(1, 0.5)$ (concave down from $0$ to $\sqrt{3}$, then concave up after).
    - After $x=1$, decreases toward $0^+$ as $x \to \infty$.
    - Plot inflection points at $x=-\sqrt{3}$ and $x=\sqrt{3}$ to guide the curvature.

---

## **Relationship Between $f$, $f'$, and $f''$**

One of the most common questions on the AP exam gives you the graph of one of these functions and asks you to deduce information about the others. Let's clarify the relationships.

### **Definition:**

- The graph of $f'$ tells us where $f$ is increasing ($f' > 0$) or decreasing ($f' < 0$).
- The graph of $f''$ tells us where $f$ is concave up ($f'' > 0$) or concave down ($f'' < 0$), and also where $f'$ is increasing or decreasing.
- Given the graph of one of these functions, we can deduce properties of the others.

**Key Relationships:**

| Feature of $f$ | Corresponding feature in $f'$ | Corresponding feature in $f''$ |
|----------------|-------------------------------|---------------------------------|
| Increasing | $f' > 0$ | - |
| Decreasing | $f' < 0$ | - |
| Local max/min | $f'$ changes sign (zero crossing) | - |
| Critical point | $f'=0$ or undefined | - |
| Concave up | $f'$ increasing | $f'' > 0$ |
| Concave down | $f'$ decreasing | $f'' < 0$ |
| Inflection point | $f'$ has local extremum | $f''$ changes sign |

**From $f'$ to $f$:**

- Where $f'$ is above the x-axis, $f$ is increasing.
- Where $f'$ is below the x-axis, $f$ is decreasing.
- Where $f'$ crosses zero from above to below, $f$ has a local maximum.
- Where $f'$ crosses zero from below to above, $f$ has a local minimum.

**From $f''$ to $f$:**

- Where $f''$ is above the x-axis, $f$ is concave up.
- Where $f''$ is below the x-axis, $f$ is concave down.
- Where $f''$ crosses zero (and changes sign), $f$ has an inflection point.

**From $f''$ to $f'$:**

- Where $f''$ is above the x-axis, $f'$ is increasing.
- Where $f''$ is below the x-axis, $f'$ is decreasing.
- Where $f''$ crosses zero, $f'$ has a local extremum (which corresponds to an inflection point of $f$).

**Example 1: Given $f'$, sketch $f$**

Suppose $f'(x) = (x-1)(x-2)$. Determine where $f$ is increasing/decreasing and local extrema.

- Critical points at $x=1$ and $x=2$ (where $f'=0$).
- Sign chart:
    - For $x<1$, say $x=0$: $( -1)(-2) = 2 > 0$ → $f'>0$ → $f$ increasing.
    - For $1<x<2$, say $x=1.5$: $(0.5)(-0.5) = -0.25 < 0$ → $f'<0$ → $f$ decreasing.
    - For $x>2$, say $x=3$: $(2)(1)=2 >0$ → $f'>0$ → $f$ increasing.
- So $f$ increasing on $(-\infty,1)$ and $(2,\infty)$, decreasing on $(1,2)$.
- Local max at $x=1$ (since $f'$ changes + to -), local min at $x=2$ (since $f'$ changes - to +).

**Example 2: Given $f''$, determine concavity and inflection points**

Suppose $f''(x) = x(x-3)$. Find intervals of concavity and inflection points.

- $f''(x)=0$ at $x=0$ and $x=3$.
- Sign chart:
    - For $x<0$, say $x=-1$: $(-1)(-4)=4 >0$ → $f''>0$ → concave up.
    - For $0<x<3$, say $x=1$: $(1)(-2) = -2 <0$ → $f''<0$ → concave down.
    - For $x>3$, say $x=4$: $(4)(1)=4 >0$ → $f''>0$ → concave up.
- Concavity changes at $x=0$ and $x=3$, so both are inflection points.

**Example 3: Matching graphs**

On the AP exam, you might be shown three graphs—one of $f$, one of $f'$, one of $f''$—and asked to identify which is which. Here's how to tell:

- Look for where the graph crosses zero. The derivative graph crosses zero where the original has horizontal tangents (critical points). The second derivative graph crosses zero where the first derivative has horizontal tangents (inflection points of original).
- Look at increasing/decreasing. Where $f$ is increasing, $f'$ should be positive. Where $f$ is concave up, $f''$ should be positive.
- Look at extrema. Where $f$ has a local max, $f'$ should be zero and change from positive to negative. Where $f'$ has a local max, $f''$ should be zero and change from positive to negative.

---

### **Summary**

**Key Concepts:**

| Concept | Definition | Test |
|---------|------------|------|
| **Concave up** | Graph lies above tangents, $f'$ increasing | $f'' > 0$ |
| **Concave down** | Graph lies below tangents, $f'$ decreasing | $f'' < 0$ |
| **Inflection point** | Point where concavity changes | $f'' = 0$ or undefined, and sign changes |
| **Second Derivative Test** | Classify critical points | If $f'(c)=0$ and $f''(c) > 0$ → local min; $f''(c) < 0$ → local max; $f''(c)=0$ → inconclusive |

**Curve Sketching Checklist:**

- [ ] Domain
- [ ] Intercepts
- [ ] Symmetry
- [ ] Asymptotes
- [ ] First derivative: inc/dec intervals, critical points, local extrema
- [ ] Second derivative: concavity intervals, inflection points
- [ ] Sketch

**Relationships Between $f$, $f'$, and $f''$:**

- $f' > 0$ → $f$ increasing
- $f' < 0$ → $f$ decreasing
- $f'$ changes sign → $f$ has local extremum
- $f'' > 0$ → $f$ concave up, $f'$ increasing
- $f'' < 0$ → $f$ concave down, $f'$ decreasing
- $f''$ changes sign → $f$ has inflection point, $f'$ has local extremum

---

**Final Thought:**

Curve sketching is the ultimate application of everything we've learned about derivatives. It's where calculus becomes visual. You no longer need to plot hundreds of points—just a handful of calculations and you can see the entire shape of the function. Practice this skill; it will serve you well on the AP exam and in future math courses.

Next up, we'll take these ideas and apply them to real-world optimization problems—finding the best possible outcome in various situations. But for now, make sure you're comfortable with concavity, the second derivative test, and the relationships between $f$, $f'$, and $f''$. These are essential tools.