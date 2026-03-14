# Volume of Solids

Welcome back!

We've just learned how to find the area between curves—basically, the size of a flat, two‑dimensional region. Now we're going to add a third dimension. Imagine taking that flat region and giving it height, or spinning it around an axis to create a solid. How do we find the volume of such objects? Integration, of course! Just as we added up thin rectangles to find area, we'll add up thin slices—cross sections—to find volume.

 This lesson covers three main techniques: volumes by known cross sections, the disc method, and the washer method. Let's dive in.

---

## **Volumes by Cross Sections**

### **Definition:**  
The volume of a solid with known cross sections can be found by integrating the area of those cross sections along an axis perpendicular to the cross sections.

If a solid extends from $x = a$ to $x = b$, and the area of a cross section perpendicular to the x‑axis at a given $x$ is $A(x)$, then the volume is
  
$V = \int_{a}^{b} A(x) \, dx$  
Similarly, if the cross sections are perpendicular to the y‑axis with area $A(y)$ from $y = c$ to $y = d$:  
$$V = \int_{c}^{d} A(y) \, dy$$

**Instructions & Key Comments:**

1. **Visualize/Diagram:** Draw the base region in the plane. The solid extends perpendicular to this base.  
2. **Determine the Area Function $A(x)$ or $A(y)$:** At a sample point $x$, the cross section has a certain shape (square, rectangle, triangle, semicircle). The **side length or dimensions** of this shape are determined by the distance between curves that bound the base region at that $x$. Express the area in terms of $x$ (or $y$).  
3. **Find Limits of Integration:** These are the boundaries of the base region along the axis of integration.

**Common Cross Sections and Their Area Formulas:**

- **Square:** Side length $s$ → $A = s^2$  
- **Rectangle:** Height $h$, width $w$ → $A = h \times w$  
- **Equilateral Triangle:** Side length $s$ → $A = \frac{\sqrt{3}}{4} s^2$  
- **Isosceles Right Triangle:** Leg length $s$ → $A = \frac{1}{2} s^2$  
- **Semicircle:** Diameter $d$ → $A = \frac{1}{2} \pi \left(\frac{d}{2}\right)^2 = \frac{\pi}{8} d^2$  
- **Circle (Disc):** Radius $r$ → $A = \pi r^2$

**Examples:**

1. **Square Cross Sections:**  
   The base of a solid is the region bounded by $y = \sqrt{x}$, $y = 0$, and $x = 4$. Cross sections perpendicular to the x‑axis are squares. Find the volume.  
   - **Base:** In the xy‑plane, from $x=0$ to $x=4$, bounded above by $y=\sqrt{x}$, below by $y=0$.  
   - **Side Length:** At a given $x$, the distance from $y=0$ to $y=\sqrt{x}$ is $\sqrt{x}$. Since cross sections are squares, the side length is $s = \sqrt{x}$.  
   - **Area Function:** $A(x) = (\sqrt{x})^2 = x$.  
   - **Volume:** $V = \int_{0}^{4} x \, dx = \left[ \frac{x^2}{2} \right]_{0}^{4} = 8$.

2. **Semicircular Cross Sections:**  
   The base is the same region as above. Cross sections perpendicular to the x‑axis are semicircles with their diameters lying in the base. Find the volume.  
   - **Diameter:** At a given $x$, the diameter of the semicircle is the distance across the base: $d = \sqrt{x}$.  
   - **Radius:** $r = \frac{d}{2} = \frac{\sqrt{x}}{2}$.  
   - **Area Function:** $A(x) = \frac{1}{2} \pi r^2 = \frac{1}{2} \pi \left( \frac{\sqrt{x}}{2} \right)^2 = \frac{1}{2} \pi \cdot \frac{x}{4} = \frac{\pi}{8} x$.  
   - **Volume:** $V = \int_{0}^{4} \frac{\pi}{8} x \, dx = \frac{\pi}{8} \left[ \frac{x^2}{2} \right]_{0}^{4} = \frac{\pi}{8} \cdot 8 = \pi$.

3. **Triangular Cross Sections (Isosceles Right):**  
   The base is the region in the first quadrant bounded by $y = 4 - x^2$, $x=0$, and $y=0$. Cross sections perpendicular to the y‑axis are isosceles right triangles with hypotenuse in the base. Find the volume.  
   - Since cross sections are perpendicular to the y‑axis, we integrate with respect to $y$.  
   - **Base Region:** For $y$ from 0 to 4, the right boundary is $x = \sqrt{4-y}$ (from $y=4-x^2$) and the left is $x=0$.  
   - **Hypotenuse Length:** At a given $y$, the hypotenuse lies along the horizontal segment from $x=0$ to $x=\sqrt{4-y}$, so its length is $\sqrt{4-y}$.  
   - **Leg Length:** In an isosceles right triangle with hypotenuse $h$, the legs have length $s = h/\sqrt{2}$.  
   - **Area Function:** $A(y) = \frac{1}{2} s^2 = \frac{1}{2} \left( \frac{\sqrt{4-y}}{\sqrt{2}} \right)^2 = \frac{1}{2} \cdot \frac{4-y}{2} = \frac{4-y}{4}$.  
   - **Volume:** $V = \int_{0}^{4} \frac{4-y}{4} \, dy = \frac{1}{4} \left[ 4y - \frac{y^2}{2} \right]_{0}^{4} = \frac{1}{4} \left( 16 - 8 \right) = 2$.

---

## **Disc Method (Solids of Revolution)**

### **Definition:**  
When a region in the plane is revolved around a line (the axis of revolution), it generates a solid of revolution. The **disc method** is used when the cross sections perpendicular to the axis of revolution are solid discs (circles).

If the region is bounded by $y = f(x)$, $y=0$, $x=a$, and $x=b$, and is revolved around the x‑axis, the volume is  
$V = \pi \int_{a}^{b} [f(x)]^2 \, dx$  
Here, at each $x$, the radius of the disc is $R = f(x)$, and the cross‑sectional area is $A(x) = \pi R^2$.

**General Formula (Disc Method):**  
$$V = \pi \int (\text{radius})^2 \, d(\text{axis variable})$$

**Comments & Instructions:**

1. **Identify the Radius:** The radius is the distance from the curve to the axis of revolution.  
2. **Determine the Variable of Integration:** The slices (discs) must be **perpendicular** to the axis of revolution. If revolving around a **horizontal** axis (e.g., x‑axis, $y=k$), integrate with respect to $x$. If revolving around a **vertical** axis (e.g., y‑axis, $x=h$), integrate with respect to $y$.  
3. **Limits of Integration:** The limits are the bounds of the region along the axis of integration.

**Examples:**

1. **Revolving around the x‑axis:**  
   Find the volume of the solid generated by revolving the region bounded by $y = x^2$, $y=0$, and $x=2$ about the x‑axis.  
   - **Radius:** $R = x^2$.  
   - **Volume:** $V = \pi \int_{0}^{2} (x^2)^2 \, dx = \pi \int_{0}^{2} x^4 \, dx = \pi \left[ \frac{x^5}{5} \right]_{0}^{2} = \pi \cdot \frac{32}{5} = \frac{32\pi}{5}$.

2. **Revolving around a horizontal line $y = k$:**  
   The region bounded by $y = \sqrt{x}$, $y=0$, and $x=4$ is revolved about the line $y = -1$. Find the volume.  
   - **Axis:** Horizontal line $y = -1$. Use slices perpendicular to this axis → integrate with respect to $x$.  
   - **Radius:** Distance from curve $y=\sqrt{x}$ to axis $y=-1$: $R = \sqrt{x} - (-1) = \sqrt{x} + 1$.  
   - **Volume:** $V = \pi \int_{0}^{4} (\sqrt{x} + 1)^2 \, dx = \pi \int_{0}^{4} (x + 2\sqrt{x} + 1) \, dx$.  
   - Compute: $\int_{0}^{4} x \, dx = 8$, $\int_{0}^{4} 2\sqrt{x} \, dx = 2 \cdot \frac{2}{3} x^{3/2} \big|_{0}^{4} = \frac{4}{3} (8) = \frac{32}{3}$, $\int_{0}^{4} 1 \, dx = 4$.  
   - So $V = \pi \left( 8 + \frac{32}{3} + 4 \right) = \pi \left( 12 + \frac{32}{3} \right) = \pi \left( \frac{36}{3} + \frac{32}{3} \right) = \frac{68\pi}{3}$.

---

## **Washer Method**

### **Definition:**  
The **washer method** is used when the solid of revolution has a hole in the middle. This occurs when the region being revolved is bounded by two curves, and the axis of revolution is not part of the region's boundary. Cross sections perpendicular to the axis of revolution are washers (annuli/rings).

**General Formula (Washer Method):**  
$$V = \pi \int \left[ (\text{outer radius})^2 - (\text{inner radius})^2 \right] \, d(\text{axis variable})$$

**Comments & Instructions:**

1. **Identify Outer and Inner Radii:** The **outer radius** ($R$) is the distance from the **outer curve** (farther from the axis) to the axis. The **inner radius** ($r$) is the distance from the **inner curve** (closer to the axis) to the axis.  
2. **Variable of Integration:** Same rule as the disc method: slices are perpendicular to the axis of revolution.  
3. **Washer Area:** The area of a washer is $\pi R^2 - \pi r^2 = \pi (R^2 - r^2)$.

**Examples:**

1. **Basic Washer:**  
   Find the volume of the solid generated by revolving the region bounded by $y = x^2$ and $y = \sqrt{x}$ about the x‑axis.  
   - **Intersections:** $x^2 = \sqrt{x}$ → $x^4 = x$ → $x^4 - x = 0$ → $x(x^3 - 1)=0$ → $x=0$ and $x=1$.  
   - **On $[0,1]$:** $\sqrt{x} \ge x^2$. So outer curve: $y=\sqrt{x}$, inner curve: $y=x^2$.  
   - **Radii:** $R = \sqrt{x}$, $r = x^2$.  
   - **Volume:** $V = \pi \int_{0}^{1} \left[ (\sqrt{x})^2 - (x^2)^2 \right] \, dx = \pi \int_{0}^{1} (x - x^4) \, dx$.  
   - Compute: $\pi \left[ \frac{x^2}{2} - \frac{x^5}{5} \right]_{0}^{1} = \pi \left( \frac{1}{2} - \frac{1}{5} \right) = \pi \left( \frac{5}{10} - \frac{2}{10} \right) = \frac{3\pi}{10}$.

2. **Revolving around a vertical line:**  
   The region bounded by $y = x^3$, $y=0$, and $x=1$ is revolved about the line $x=2$. Find the volume.  
   - **Axis:** Vertical line $x=2$. Slices perpendicular to a vertical axis are horizontal → integrate with respect to $y$.  
   - **Rewrite curves:** $y=x^3$ → $x = \sqrt[3]{y}$. Boundaries: $y$ from 0 to 1.  
   - **Radii:** The region is to the left of $x=2$. The outer radius is the distance from the left boundary ($x=0$) to $x=2$: $R = 2 - 0 = 2$. The inner radius is the distance from the curve $x=\sqrt[3]{y}$ to $x=2$: $r = 2 - \sqrt[3]{y}$.  
   - **Volume:** $V = \pi \int_{0}^{1} \left[ (2)^2 - (2 - \sqrt[3]{y})^2 \right] \, dy$.  
   - Simplify: $(2)^2 = 4$. $(2 - \sqrt[3]{y})^2 = 4 - 4\sqrt[3]{y} + y^{2/3}$.  
     So integrand: $4 - [4 - 4\sqrt[3]{y} + y^{2/3}] = 4\sqrt[3]{y} - y^{2/3}$.  
   - $V = \pi \int_{0}^{1} (4y^{1/3} - y^{2/3}) \, dy = \pi \left[ 4 \cdot \frac{3}{4} y^{4/3} - \frac{3}{5} y^{5/3} \right]_{0}^{1} = \pi \left[ 3 - \frac{3}{5} \right] = \pi \cdot \frac{12}{5} = \frac{12\pi}{5}$.

---

## **Choosing a Method & Calculator Techniques**

### **Summary:**

- **Cross Sections:** Use when the solid is described with a specific cross‑sectional shape (square, triangle, etc.).  
- **Disc Method:** Use when the region touches the axis of revolution (no hole in the middle).  
- **Washer Method:** Use when there is a gap between the region and the axis of revolution, creating a hole.

**Calculator Techniques (Topic 8.12):**

1. **Graphing:** Visualize the region and the solid.  
2. **Finding Intersections:** Use `calc:intersect` to find limits.  
3. **Evaluating Integrals:** Use `fnInt` or the integral function to compute volumes, especially when integrands are complex. **You must write the integral setup first!**

---

### **Summary**

**Key Formulas:**

- **Cross Sections:** $V = \int A(x) \, dx$ or $V = \int A(y) \, dy$.  
- **Disc Method:** $V = \pi \int (\text{radius})^2 \, d(\text{variable})$.  
- **Washer Method:** $V = \pi \int (R^2 - r^2) \, d(\text{variable})$.

**Decision Process:**

1. Is the solid described by cross sections? If yes, find $A(x)$ or $A(y)$.  
2. Is it a solid of revolution? If yes:  
   - Does the region touch the axis? → **Disc**.  
   - Is there a gap? → **Washer**.

**Common Errors:**

- Using the wrong variable of integration.  
- Incorrectly identifying radii (especially with washers and shifted axes).  
- Forgetting to square the radii in disc/washer methods.  
- Not using parentheses when squaring expressions like $(\sqrt{x} + 1)^2$.

---

### **Additional Practice Problems**

Find the volume of the described solid.

1. The base is the region bounded by $y = 1-x^2$ and $y=0$. Cross sections perpendicular to the x‑axis are squares.  
2. The base is the same as #1. Cross sections perpendicular to the x‑axis are equilateral triangles.  
3. The region bounded by $y = x^2$ and $y=4$ is revolved about the x‑axis.  
4. The region bounded by $y = x^2$, $y=0$, and $x=2$ is revolved about the y‑axis.  
5. The region bounded by $y = x^2$ and $y=2x$ is revolved about the x‑axis.  
6. The region in the first quadrant bounded by $y = x^3$, $y=0$, and $x=1$ is revolved about the line $y=-1$.  
7. The region bounded by $y = \sqrt{x}$, $y=0$, and $x=4$ is revolved about the line $x=4$.  
8. The base is the region enclosed by $y = x^2$ and $y=3$. Cross sections perpendicular to the y‑axis are semicircles.

**Selected Solutions:**

1. **Square cross sections:** Base from $x=-1$ to $1$. Side length = $1-x^2$. $A(x) = (1-x^2)^2$.  
   $V = \int_{-1}^{1} (1 - 2x^2 + x^4) \, dx = \left[ x - \frac{2x^3}{3} + \frac{x^5}{5} \right]_{-1}^{1} = 2\left(1 - \frac{2}{3} + \frac{1}{5}\right) = 2\left(\frac{15}{15} - \frac{10}{15} + \frac{3}{15}\right) = 2 \cdot \frac{8}{15} = \frac{16}{15}$.

2. **Equilateral triangles:** Side length $s = 1-x^2$. $A(x) = \frac{\sqrt{3}}{4} s^2 = \frac{\sqrt{3}}{4} (1-x^2)^2$.  
   $V = \frac{\sqrt{3}}{4} \int_{-1}^{1} (1-x^2)^2 \, dx = \frac{\sqrt{3}}{4} \cdot \frac{16}{15} = \frac{4\sqrt{3}}{15}$ (using result from #1).

3. **Revolve about x‑axis:** Intersections $x = \pm 2$. Washer: outer radius $R=4$, inner radius $r=x^2$.  
   $V = \pi \int_{-2}^{2} (16 - x^4) \, dx = \pi \left[ 16x - \frac{x^5}{5} \right]_{-2}^{2} = \pi \left( (32 - \frac{32}{5}) - (-32 + \frac{32}{5}) \right) = \pi \left( 64 - \frac{64}{5} \right) = \pi \cdot \frac{256}{5} = \frac{256\pi}{5}$.

4. **Revolve about y‑axis:** Region from $y=0$ to $4$, outer radius $2$, inner radius $\sqrt{y}$.  
   $V = \pi \int_{0}^{4} (4 - y) \, dy = \pi \left[ 4y - \frac{y^2}{2} \right]_{0}^{4} = \pi (16 - 8) = 8\pi$.

5. **Revolve about x‑axis:** Intersections $x=0,2$. On $[0,2]$, $2x \ge x^2$. Washer: $R=2x$, $r=x^2$.  
   $V = \pi \int_{0}^{2} (4x^2 - x^4) \, dx = \pi \left[ \frac{4x^3}{3} - \frac{x^5}{5} \right]_{0}^{2} = \pi \left( \frac{32}{3} - \frac{32}{5} \right) = \pi \left( \frac{160}{15} - \frac{96}{15} \right) = \frac{64\pi}{15}$.

6. **Revolve about $y=-1$:** Disc method w.r.t. $x$, radius $x^3+1$.  
   $V = \pi \int_{0}^{1} (x^3+1)^2 \, dx = \pi \int_{0}^{1} (x^6 + 2x^3 + 1) \, dx = \pi \left[ \frac{x^7}{7} + \frac{x^4}{2} + x \right]_{0}^{1} = \pi \left( \frac{1}{7} + \frac{1}{2} + 1 \right) = \pi \left( \frac{2}{14} + \frac{7}{14} + \frac{14}{14} \right) = \frac{23\pi}{14}$.

7. **Revolve about $x=4$:** Washer w.r.t. $y$, from $y=0$ to $2$, outer radius $4$, inner radius $4-y^2$.  
   $V = \pi \int_{0}^{2} [16 - (4-y^2)^2] \, dy = \pi \int_{0}^{2} (16 - (16 - 8y^2 + y^4)) \, dy = \pi \int_{0}^{2} (8y^2 - y^4) \, dy = \pi \left[ \frac{8y^3}{3} - \frac{y^5}{5} \right]_{0}^{2} = \pi \left( \frac{64}{3} - \frac{32}{5} \right) = \pi \left( \frac{320}{15} - \frac{96}{15} \right) = \frac{224\pi}{15}$.

8. **Semicircular cross sections perpendicular to y‑axis:** Base enclosed by $y=x^2$ and $y=3$. For $y$ from 0 to 3, horizontal width = $2\sqrt{y}$ = diameter.  
   $A(y) = \frac{1}{2}\pi \left(\frac{d}{2}\right)^2 = \frac{1}{2}\pi (\sqrt{y})^2 = \frac{\pi}{2} y$.  
   $V = \int_{0}^{3} \frac{\pi}{2} y \, dy = \frac{\pi}{2} \left[ \frac{y^2}{2} \right]_{0}^{3} = \frac{\pi}{2} \cdot \frac{9}{2} = \frac{9\pi}{4}$.



Volumes might seem like a big leap from areas, but the core idea is the same: slice, approximate, integrate. Whether you're stacking known cross sections or spinning a region around an axis, the integral does the heavy lifting. Practice setting up these integrals—the hardest part is always visualizing the slice and getting the radii or side lengths right.

Next, we'll explore even more ways to find volumes, like the shell method. But for now, master these three techniques; they'll be your go‑to tools for the AP exam.