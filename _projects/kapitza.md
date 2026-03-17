---
layout: project
title: 'Kapitza Pendulum Analysis'
caption: Analytical and numerical analysis of a Kapitza pendulum system in Python and Manim.
description: >
  The following project involves the numerical analysis and manim animation of a Kapitza pendulum system as a part of a theoretical mechanics course final project. Specifically, we use Manim animations and Hopf bifurcation analysis to inspect the stability of the inverted position of the pendulum in the high-driving, low-amplitude regime. This is done with a mix of analytical and numerical methods.
date: 09 Dec 2025
image: 
  path: /assets/img/projects/two.gif
  srcset: 
    1920w: /assets/img/projects/two.gif
    960w:  /assets/img/projects/two.gif
    480w:  /assets/img/projects/two.gif
links:
  - title: Link
    url: https://github.com/RandomKiddo/KapitzaPendulumAnalysis/tree/master
accent_color: '#4fb1ba'
accent_image:
  background: '#41ACC4'
theme_color: '#41ACC4'
sitemap: false
---

<script src="https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js"></script>
<script>
addBackToTop({
  diameter: 56,
  backgroundColor: '#3d6f75',
  textColor: 'rgb(225, 221, 214)'
})
</script> 

**Overview**

It would be a great disservice to restate everything this project completes in this project post. Not only would the post be too long and dense to have a pleasurable reading experience, the [Project notebook file](https://github.com/RandomKiddo/KapitzaPendulumAnalysis/blob/master/src/Project.ipynb) already provides a comprehensive step-by-step breakdown of the project, written to be a self-contained lesson. Inspecting the various `.py` files shows the different numerical solving methods used to solve this system.

Briefly, this project does the following:
* Derives the Lagrangian, equations of motion, and effective potential for the Kapitza pendulum system, while inspecting the high-driving, low-amplitude regime.
* Implements numerical methods to solve the system and check that turning off the driving components recovers the simple pendulum.
* Dynamic widget analysis of the system with varying parameters.
* $$U(\phi,t)$$ and $$U_{\rm eff}(\phi)$$ comparisons for high-driving, low-amplitude regime, with separate PDF derivation.
* Manim animations of the system, with normalized state space axis as well.
* Chaos and bifurcation analysis: using Liapunov exponent to judge chaos. Manim animations of two pendula for chaos, with animated Liapunov exponent graph. Hopf bifurcation discrete analysis with checks on stability vs. instability of the vertical position using the bifurcation plot. Further analysis on the low-amplitude area, showing periodic motion but no chaos.

Included in the Github repository:
* All project files: the project Jupyter notebook, the PDF derivation file, any `.py` numerical files, and the outputted images.
* The Conda environment used for the project, built for M-architecture OS. 
* The presentation file given as a part of this project. 

> Manim animations are hosted in the releases, as they are big, hosted in the `videos.zip` file in each release description. Two examples are shown below, but in order to get it to display, it has been converted to a gif, which greatly reduces its overall quality. It is recommended to download the zip for higher-fidelity animations. The zip file is [here](https://github.com/RandomKiddo/KapitzaPendulumAnalysis/releases/tag/beta1.1).

<br />

![Example Animation as Low-Quality Gif](/assets/img/projects/eight.gif)

An example (low-quality) animation of a stable vertical-position oscillation of the Kapitza system.
{:.figcaption}

![Example Chaos Animation as Low-Quality Gif](/assets/img/projects/two.gif)

An example (low-quality) chaos animation of a Kapitza system with two superimposed oscillators and the Lyapunov exponent.
{:.figcaption}

___

**The System**

This is the Kapitza system we wish to solve:

<img src="/assets/img/projects/kpdiagram.png" style="width: 80%; display: block; margin: 0 auto;" alt="Kapitza diagram." />

The Kapitza pendulum with driving frequency $$\nu$$ and driving amplitude $$a$$.
{:.figcaption}

From this, we solve the Lagrangian:

$$
\mathcal{L} = \frac{1}{2}ml^2\dot{\phi}^2+mal\nu\dot{\phi}\sin{(\phi)}\sin{(\nu t)}+mgl\cos{(\phi)}
$$

and attain the equation of motion

$$
\ddot{\phi} = -(g+a\nu^2 \cos{(\nu t)}) \frac{\sin{(\phi)}}{l}
$$

Using a mix of analytical and numerical methods, we analyze when the vertical position of the pendulum is stable and when we have chaos through Hopf bifurcations. Specifically, we look at one specific functioning regime: the high-driving, low-amplitude regime. From analytical analysis, we can find the effective potential of this system,

$$
U_{\rm eff}(\phi) \approx -mgl\cos{(\phi)} + \frac{ma^2\nu^2}{4}\sin^2{(\phi)}
$$

<img src="/assets/img/projects/UeffPlot.png" style="width: 80%; display: block; margin: 0 auto;" alt="Plot of Ueff example." />

An example plot of $$U_{\rm eff}(\phi)$$ for a natural frequency $$\omega_0=1$$, $$a=1$$ and $$\nu=30$$.
{:.figcaption}

We can see for this high-driving, low-amplitude regime, we can actually get a stable vertical position $$\phi=\pi$$. Then, by doing bifurcation analysis on the system, we can fix the driving frequency and change the driving amplitude to identify when the vertical position is stable:

<img src="/assets/img/projects/BifurcationDiagram.png" style="width: 80%; display: block; margin: 0 auto;" alt="Hopf bifurcation diagram." />

The Hopf bifurcation of the vertical position for $$\nu=30$$.
{:.figcaption}

<img src="/assets/img/projects/BifurcationDiagram_2.png" style="width: 80%; display: block; margin: 0 auto;" alt="Hopf bifurcation diagram." />

Same bifurcation for $$\nu=30$$, investigating the right-hand area of the earlier plot.
{:.figcaption}

From these analyses, we can find "windows" where the vertical position is stable, and locations where we expect chaotic motion.

___

**More**

This is a very high-level overview of this project. To get all the details, check the [project file](https://github.com/RandomKiddo/KapitzaPendulumAnalysis/blob/master/src/Project.ipynb). If you'd like to learn more about the analytical results about the effective potentials and even the conditions for stability, check the [derivation file](https://github.com/RandomKiddo/KapitzaPendulumAnalysis/blob/master/src/SlowFastDecomposition.pdf) on the slow-fast decomposition of motion. For a succinct overview that gives more background details, check the [PDF of the presentation](https://github.com/RandomKiddo/KapitzaPendulumAnalysis/blob/master/src/KapitzaPendulumPresentation.pdf) given for this project.