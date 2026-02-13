# Lesson 12: Function Behavior and Graphing

### **12.1 Concavity and the Second Derivative**

**Definition:**

*   A function $f$ is **concave up** on an interval if its graph lies above its tangent lines on that interval. Equivalently, the derivative $f'$ is increasing on that interval.
*   A function $f$ is **concave down** on an interval if its graph lies below its tangent lines on that interval. Equivalently, the derivative $f'$ is decreasing on that interval.
*   The **second derivative test for concavity**:
    *   If $f''(x) > 0$ for all $x$ in an interval, then $f$ is concave up on that interval.
    *   If $f''(x) < 0$ for all $x$ in an interval, then $f$ is concave down on that interval.

**Comments:**

*   **Visualizing Concavity:** Concave up curves "hold water" (like a cup opening upward), concave down curves "spill water" (like an arch).
*   **Connection to First Derivative:** When $f'$ is increasing (i.e., $f'' > 0$), the slopes of tangent lines are getting steeper from left to right, creating an upward curve.
*   **Inflection Points:** A point where the graph of $f$ changes concavity (from up to down or down to up) is called an **inflection point**. At an inflection point, $f''(x) = 0$ or $f''(x)$ does not exist. However, not every point where $f''(x)=0$ is an inflection point (must check sign change of $f''$).

**Examples:**

1.  **Determining Concavity:** Find where $f(x) = x^3 - 3x^2 + 4$ is concave up and concave down.
    *   First derivative: $f'(x) = 3x^2 - 6x$.
    *   Second derivative: $f''(x) = 6x - 6 = 6(x-1)$.
    *   Set $f''(x) = 0$ → $x = 1$.
    *   Test intervals:
        *   For $x < 1$, $f''(x) < 0$ → concave down on $(-\infty, 1)$.
        *   For $x > 1$, $f''(x) > 0$ → concave up on $(1, \infty)$.
    *   Since concavity changes at $x=1$, there is an inflection point at $(1, f(1)) = (1, 2)$.
2.  **Finding Inflection Points:** Find inflection points of $f(x) = \sin x$ on $[0, 2\pi]$.
    *   $f'(x) = \cos x$, $f''(x) = -\sin x$.
    *   Set $f''(x) = 0$: $-\sin x = 0$ → $x = 0, \pi, 2\pi$ in $[0, 2\pi]$.
    *   Check sign changes:
        *   For $0 < x < \pi$, $\sin x > 0$ so $f''(x) < 0$ (concave down).
        *   For $\pi < x < 2\pi$, $\sin x < 0$ so $f''(x) > 0$ (concave up).
    *   Concavity changes at $x = \pi$, so $(\pi, 0)$ is an inflection point. At $x=0$ and $x=2\pi$, endpoints, but note concavity does not change at $x=0$ because left of 0 not in domain? Actually on $[0, 2\pi]$, at $x=0$, to the right it's concave down, to left not considered, so not inflection. Similarly at $x=2\pi$. So only inflection at $x=\pi$.

---

### **12.2 The Second Derivative Test for Local Extrema**

**Definition:**
Suppose $f'(c) = 0$ (so $c$ is a critical point) and $f''(x)$ is continuous near $c$.

*   If $f''(c) > 0$, then $f$ has a **local minimum** at $x = c$.
*   If $f''(c) < 0$, then $f$ has a **local maximum** at $x = c$.
*   If $f''(c) = 0$, the test is **inconclusive**; $f$ may have a local maximum, local minimum, or neither at $x = c$. Use the First Derivative Test.

**Comments:**

*   **Why it works:** If $f''(c) > 0$, the function is concave up at $c$, so the graph lies above its tangent line, making $c$ a local minimum.
*   **Advantage:** Often quicker than First Derivative Test when second derivative is easy to compute.
*   **Limitation:** Fails when $f''(c) = 0$ or when $f''(c)$ does not exist. Always check that $c$ is a critical point first.

**Examples:**

1.  **Applying the Test:** For $f(x) = x^3 - 3x^2 + 4$, we found critical points at $x=0$ and $x=2$. Use the second derivative test.
    *   $f''(x) = 6x - 6$.
    *   At $x=0$: $f''(0) = -6 < 0$ → local maximum.
    *   At $x=2$: $f''(2) = 6(2)-6=6 > 0$ → local minimum.
    *   This matches our First Derivative Test result.
2.  **When the Test Fails:** Consider $f(x) = x^4$. Critical point at $x=0$ (since $f'(x)=4x^3=0$).
    *   $f''(x)=12x^2$, so $f''(0)=0$. Second derivative test inconclusive.
    *   Use First Derivative Test: $f'(x)=4x^3$ changes from negative to positive at $x=0$ → local minimum.
    *   Or note that $x^4 \ge 0$ and equals 0 only at 0, so absolute minimum.
3.  **Combining Tests:** For $f(x) = x^3$, critical point at $x=0$. $f''(x)=6x$, so $f''(0)=0$. First Derivative Test: $f'(x)=3x^2$ does not change sign (positive on both sides) → no extremum, inflection point.

---

### **12.3 Curve Sketching Strategy**

**Definition:**
Curve sketching involves using derivatives to determine key features of a graph: intercepts, asymptotes, intervals of increase/decrease, local extrema, concavity, and inflection points.

**Step-by-Step Strategy:**

1.  **Domain:** Determine the domain of $f$.
2.  **Intercepts:** Find $x$-intercepts (solve $f(x)=0$) and $y$-intercept ($f(0)$, if in domain).
3.  **Symmetry:** Check for even/odd symmetry (optional but helpful).
4.  **Asymptotes:**
    *   **Vertical asymptotes:** Where denominator is zero (if rational) and function approaches ±∞.
    *   **Horizontal asymptotes:** $\lim_{x \to \pm\infty} f(x)$.
5.  **First Derivative:** Find $f'(x)$. Critical points, intervals of increase/decrease, local extrema.
6.  **Second Derivative:** Find $f''(x)$. Points of inflection, intervals of concavity.
7.  **Sketch:** Plot intercepts, critical points, inflection points, asymptotes. Use information from steps 5-6 to draw curve.

**Comments:**

*   You don't need to plot many points; the derivative analysis gives shape.
*   Connect the features smoothly, respecting increasing/decreasing and concavity.

**Examples:**

1.  **Sketch $f(x) = x^3 - 3x^2 + 4$.**
    *   Domain: all real numbers.
    *   Intercepts: $y$-intercept: $f(0)=4$. $x$-intercepts: solve $x^3-3x^2+4=0$. Note $x=-1$ is a root: $(-1)^3-3(1)+4=-1-3+4=0$. Factor: $(x+1)(x^2-4x+4)= (x+1)(x-2)^2=0$. So $x$-intercepts at $x=-1$ and $x=2$ (double root).
    *   Asymptotes: None (polynomial).
    *   First derivative: $f'(x)=3x^2-6x=3x(x-2)$. Critical points: $x=0, 2$. Increasing on $(-\infty,0)$ and $(2,\infty)$, decreasing on $(0,2)$. Local max at $(0,4)$, local min at $(2,0)$.
    *   Second derivative: $f''(x)=6x-6=6(x-1)$. Concave down on $(-\infty,1)$, concave up on $(1,\infty)$. Inflection point at $(1,2)$.
    *   Sketch: Plot points: $(-1,0)$, $(0,4)$, $(1,2)$, $(2,0)$. Curve increases to (0,4) (concave down), decreases to (2,0) (concave down until (1,2), then concave up), then increases.
2.  **Sketch $f(x) = \frac{x}{x^2+1}$.**
    *   Domain: all reals.
    *   Intercepts: $f(0)=0$ (so origin is both intercept).
    *   Symmetry: $f(-x) = -x/(x^2+1) = -f(x)$, odd function → symmetric about origin.
    *   Asymptotes: Horizontal: $\lim_{x \to \pm\infty} f(x) = 0$, so $y=0$. No vertical asymptotes (denominator never 0).
    *   First derivative: $f'(x) = \frac{1-x^2}{(x^2+1)^2}$. Critical points: $x=\pm1$. Increasing on $(-1,1)$, decreasing on $(-\infty,-1)$ and $(1,\infty)$. Local min at $x=-1$ (value $f(-1)=-1/2$), local max at $x=1$ (value $1/2$).
    *   Second derivative:
        $f''(x) = \frac{(-2x)(x^2+1)^2 - (1-x^2)\cdot 2(x^2+1)\cdot 2x}{(x^2+1)^4} = \frac{(x^2+1)[-2x(x^2+1) - 4x(1-x^2)]}{(x^2+1)^4} = \frac{-2x(x^2+1) - 4x(1-x^2)}{(x^2+1)^3} = \frac{-2x^3-2x-4x+4x^3}{(x^2+1)^3} = \frac{2x^3-6x}{(x^2+1)^3} = \frac{2x(x^2-3)}{(x^2+1)^3}$.
        Set $f''(x)=0$: $x=0, \pm\sqrt{3}$. Concavity changes at these points, so inflection points at $(0,0)$, $(\sqrt{3}, \sqrt{3}/4)$, $(-\sqrt{3}, -\sqrt{3}/4)$.
    *   Sketch: Plot critical points and inflection points. As $x \to \infty$, $f(x) \to 0^+$; as $x \to -\infty$, $f(x) \to 0^-$. Curve comes from 0 below, decreases to min at $(-1,-0.5)$, then increases through origin to max at $(1,0.5)$, then decreases toward 0.

---

### **12.4 Relationship Between $f$, $f'$, and $f''$**

**Definition:**

*   The graph of $f'$ tells us where $f$ is increasing ($f' > 0$) or decreasing ($f' < 0$).
*   The graph of $f''$ tells us where $f$ is concave up ($f'' > 0$) or concave down ($f'' < 0$), and also where $f'$ is increasing or decreasing.
*   Given the graph of one of these functions, we can deduce properties of the others.

**Comments:**

*   **From $f'$ to $f$:**
    *   $f' > 0$ → $f$ increasing.
    *   $f' < 0$ → $f$ decreasing.
    *   Critical points of $f$ are where $f' = 0$ or undefined.
    *   Local extrema of $f$ occur where $f'$ changes sign.
*   **From $f''$ to $f$:**
    *   $f'' > 0$ → $f$ concave up, $f'$ increasing.
    *   $f'' < 0$ → $f$ concave down, $f'$ decreasing.
    *   Inflection points of $f$ occur where $f''$ changes sign.
*   **From $f''$ to $f'$:**
    *   $f'' > 0$ → $f'$ increasing.
    *   $f'' < 0$ → $f'$ decreasing.
    *   Local extrema of $f'$ occur where $f'' = 0$ and changes sign (these correspond to inflection points of $f$).

**Examples:**

1.  **Given $f'$, sketch $f$:** Suppose $f'(x) = (x-1)(x-2)$. Determine where $f$ is increasing/decreasing and local extrema.
    *   Critical points at $x=1, 2$.
    *   Sign chart: $f'(x) > 0$ on $(-\infty,1)$ and $(2,\infty)$; $f'(x) < 0$ on $(1,2)$.
    *   So $f$ increasing on $(-\infty,1)$ and $(2,\infty)$, decreasing on $(1,2)$.
    *   Local max at $x=1$, local min at $x=2$.
2.  **Given $f''$, determine concavity:** Suppose $f''(x) = x(x-3)$. Find intervals of concavity and inflection points.
    *   $f''(x)=0$ at $x=0, 3$.
    *   Sign of $f''$: positive on $(-\infty,0)$ and $(3,\infty)$ (concave up), negative on $(0,3)$ (concave down).
    *   Inflection points at $x=0$ and $x=3$.
3.  **Matching graphs:** Given graphs of $f$, $f'$, $f''$, identify which is which.
    *   Where $f$ has a horizontal tangent (critical point), $f'$ crosses zero.
    *   Where $f$ is increasing, $f'$ is above x-axis.
    *   Where $f$ has inflection point, $f'$ has local extremum and $f''$ crosses zero.

---

### **Lesson 12 Summary**

**Key Concepts:**

*   **Concavity:** Determined by sign of $f''$. Concave up: $f'' > 0$; concave down: $f'' < 0$.
*   **Inflection Points:** Where concavity changes. Find where $f'' = 0$ or undefined and check sign change.
*   **Second Derivative Test:** For critical point $c$ with $f'(c)=0$: if $f''(c) > 0$ → local min; if $f''(c) < 0$ → local max; if $f''(c)=0$ → test inconclusive.
*   **Curve Sketching Steps:** Domain, intercepts, asymptotes, first derivative (inc/dec, local extrema), second derivative (concavity, inflection points), sketch.

**Relationships:**

*   $f'$ gives slope/slope sign (inc/dec) of $f$.
*   $f''$ gives slope/slope sign of $f'$, and concavity of $f$.
*   Critical points of $f$ (where $f'=0$ or undefined) are candidates for extrema.
*   Critical points of $f'$ (where $f''=0$ or undefined) are candidates for inflection points of $f$.

---

### **Additional Practice Problems**

1.  Determine intervals of concavity and inflection points for $f(x) = x^4 - 4x^3$.
2.  Use the second derivative test to classify critical points of $f(x) = 3x^5 - 5x^3$.
3.  Sketch the graph of $f(x) = x^4 - 4x^2$. Include intercepts, local extrema, inflection points, and concavity.
4.  Given $f'(x) = (x+2)^2(x-1)$, find intervals where $f$ is increasing/decreasing and local extrema.
5.  Find where $f(x) = \ln(x^2+1)$ is concave up.
6.  The graph of $f'$ is shown. Describe the behavior of $f$ (increase/decrease, local extrema) and sketch a possible graph of $f$. (Assume a specific shape for $f'$, e.g., parabola opening upward crossing x-axis at -1 and 2.)
7.  For $f(x) = \frac{x^2}{x-1}$, find vertical and horizontal asymptotes, critical points, and inflection points.
8.  Show that $f(x) = e^{-x^2}$ has inflection points at $x = \pm \frac{1}{\sqrt{2}}$.
9.  Given that $f''(x) = \cos x$ for $0 \le x \le 2\pi$, determine intervals of concavity and inflection points of $f$.
10. Sketch a function that satisfies: $f(0)=0$, $f'(x) > 0$ for $x < -1$ and $x > 1$, $f'(x) < 0$ for $-1 < x < 1$, $f''(x) > 0$ for $x < 0$, $f''(x) < 0$ for $x > 0$.

**Selected Solutions:**

1.  $f'(x)=4x^3-12x^2=4x^2(x-3)$. $f''(x)=12x^2-24x=12x(x-2)$. Set $f''=0$: $x=0, 2$. Test intervals: $(-\infty,0)$: $f''>0$ (concave up); $(0,2)$: $f''<0$ (concave down); $(2,\infty)$: $f''>0$ (concave up). Inflection points at $x=0$ and $x=2$. Points: $(0,0)$ and $(2,-16)$.
2.  $f'(x)=15x^4-15x^2=15x^2(x^2-1)=15x^2(x-1)(x+1)$. Critical points: $x=0, \pm1$. $f''(x)=60x^3-30x=30x(2x^2-1)$. At $x=-1$: $f''(-1)=30(-1)(2-1)=-30<0$ → local max. At $x=1$: $f''(1)=30(1)(2-1)=30>0$ → local min. At $x=0$: $f''(0)=0$ → test inconclusive. Use First Derivative Test: $f'$ does not change sign at $x=0$ (since $15x^2 \ge 0$ and $(x^2-1)$ changes sign but overall? Check: For $x$ near 0, $f'(x)=15x^2(x^2-1) \approx 15x^2(-1) < 0$ for $x \neq 0$, so $f'$ negative on both sides → no extremum, inflection point).
3.  Domain: all reals. Intercepts: $f(0)=0$; $x^4-4x^2=x^2(x^2-4)=0$ → $x=0, \pm2$. Symmetry: even function (symmetric about y-axis). First derivative: $f'(x)=4x^3-8x=4x(x^2-2)=4x(x-\sqrt{2})(x+\sqrt{2})$. Critical points: $x=0, \pm\sqrt{2}$. Increasing on $(-\sqrt{2},0)$ and $(\sqrt{2},\infty)$? Wait: sign chart: For $x<-\sqrt{2}$, test $x=-2$: $4(-2)(4-2)=(-8)(2)<0$ → decreasing. For $-\sqrt{2}<x<0$, test $x=-1$: $4(-1)(1-2)=(-4)(-1)=4>0$ → increasing. For $0<x<\sqrt{2}$, test $x=1$: $4(1)(1-2)=4(-1)=-4<0$ → decreasing. For $x>\sqrt{2}$, test $x=2$: $4(2)(4-2)=8(2)=16>0$ → increasing. So local min at $x=\pm\sqrt{2}$ (value $f(\pm\sqrt{2})=4-8=-4$), local max at $x=0$ (value 0). Second derivative: $f''(x)=12x^2-8=4(3x^2-2)$. Set $=0$: $x=\pm\sqrt{\frac{2}{3}}$. Concave up on $(-\infty,-\sqrt{2/3})$ and $(\sqrt{2/3},\infty)$, concave down on $(-\sqrt{2/3},\sqrt{2/3})$. Inflection points at $x=\pm\sqrt{2/3}$. Sketch symmetric graph.
4.  Critical points: $x=-2$ (double root) and $x=1$. Sign of $f'$: For $x<-2$, test $x=-3$: $(-1)^2(-4)=1(-4)<0$ → decreasing. For $-2<x<1$, test $x=0$: $(2)^2(-1)=4(-1)<0$ → decreasing. For $x>1$, test $x=2$: $(4)^2(1)=16(1)>0$ → increasing. So $f$ decreasing on $(-\infty,1)$ except possibly at $x=-2$, and increasing on $(1,\infty)$. At $x=-2$, $f'$ does not change sign (remains negative), so no extremum. At $x=1$, $f'$ changes from negative to positive → local minimum.
5.  $f'(x)=\frac{2x}{x^2+1}$. $f''(x)=\frac{2(x^2+1)-2x(2x)}{(x^2+1)^2}=\frac{2x^2+2-4x^2}{(x^2+1)^2}=\frac{2-2x^2}{(x^2+1)^2}=\frac{2(1-x^2)}{(x^2+1)^2}$. Concave up when $f''>0$: $1-x^2>0$ → $x^2<1$ → $-1<x<1$.
6.  (Graphical exercise.) Suppose $f'$ is a parabola opening upward with zeros at -1 and 2. Then $f'<0$ between -1 and 2, and $f'>0$ elsewhere. So $f$ decreasing on (-1,2), increasing on $(-\infty,-1)$ and $(2,\infty)$. Local max at $x=-1$, local min at $x=2$.
7.  Domain: $x\neq 1$. Vertical asymptote: $x=1$. Horizontal asymptote: degree numerator = degree denominator +1? Actually degree numerator=2, denominator=1, so no horizontal asymptote; there is an oblique asymptote. Divide: $\frac{x^2}{x-1}=x+1+\frac{1}{x-1}$, so oblique asymptote $y=x+1$. Critical points: $f'(x)=\frac{2x(x-1)-x^2(1)}{(x-1)^2}=\frac{x^2-2x}{(x-1)^2}=\frac{x(x-2)}{(x-1)^2}$. Critical points at $x=0,2$. Second derivative for inflection points: $f''(x) = \frac{(2x-2)(x-1)^2 - (x^2-2x)\cdot 2(x-1)}{(x-1)^4} = \frac{(2x-2)(x-1) - 2(x^2-2x)}{(x-1)^3} = \frac{2x^2-4x+2 - 2x^2+4x}{(x-1)^3} = \frac{2}{(x-1)^3}$. Never zero, but undefined at $x=1$. Sign change at $x=1$, but $x=1$ not in domain, so no inflection points? Actually concavity changes at $x=1$, but since it's a vertical asymptote, not typically called inflection point. So no inflection points.
8.  $f'(x)=-2xe^{-x^2}$, $f''(x)=-2e^{-x^2} + (-2x)(-2xe^{-x^2}) = -2e^{-x^2}+4x^2e^{-x^2}=e^{-x^2}(4x^2-2)$. Set $f''=0$: $4x^2-2=0$ → $x^2=\frac{1}{2}$ → $x=\pm\frac{1}{\sqrt{2}}$. Check sign changes: For $x<\frac{-1}{\sqrt{2}}$, $4x^2-2>0$; between, negative; above, positive. So inflection points.
9.  $f''(x)=\cos x$. On $[0,2\pi]$, $\cos x=0$ at $x=\frac{\pi}{2}, \frac{3\pi}{2}$. Concave up where $\cos x>0$: $[0,\frac{\pi}{2})$ and $(\frac{3\pi}{2},2\pi]$. Concave down where $\cos x<0$: $(\frac{\pi}{2},\frac{3\pi}{2})$. Inflection points at $x=\frac{\pi}{2}$ and $\frac{3\pi}{2}$.
10. Sketch: Local max at $x=-1$, local min at $x=1$. Concave up for $x<0$, concave down for $x>0$, so inflection at $x=0$. Function increasing on $(-\infty,-1)$, decreasing on $(-1,1)$, increasing on $(1,\infty)$. Graph passes through origin with inflection.