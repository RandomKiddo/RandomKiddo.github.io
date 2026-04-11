---
layout: project
title: 'Modeling the Stellar "Dead Zone"'
caption: Numerical MHD `Athena++` simulations and analytical comparisons of the Y-point radius of isothermal winds.
description: >
    This study investigates the magnetospheric structure of stellar winds through
    numerical simulations using the `Athena++` magnetohydrodynamics framework.
    By adapting existing code to incorporate an isothermal equation of state, we
    modeled the interaction between a rotating star’s magnetic field and its plasma
    outflow to determine the resulting magnetic topology. We specifically calculated the dimensionless radius of the last closed field line $$\bar{r}/R$$ across a range
    of stellar spin periods through numerical interpolation methods. Our results
    demonstrate close alignment with the classical analytical predictions of Mestel
    & Spruit, with a maximum deviation of less than 7%. These minor variations are
    attributed to numerical diffusion and boundary instabilities, validating the modified code’s reliability in capturing the “dead zone” of closed magnetic loops. This
    work establishes a robust baseline for future study, including the refinement of
    divergence-free interpolation, expansion to three-dimensional geometries, and
    the integration of Paczynski-Wiita potentials to simulate relativistic effects in
    compact objects.
date: 07 Apr 2026
image: 
  path: /assets/img/projects/star2.gif
  srcset: 
    1920w: /assets/img/projects/star2.gif
    960w:  /assets/img/projects/star2.gif
    480w:  /assets/img/projects/star2.gif
accent_color: '#4fb1ba'
accent_image:
  background: '#b93779'
theme_color: '#b93779'
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

Below is the poster presentation given on this project:

<iframe src="/assets/pdf/URAP_Poster.pdf" width="100%" height="700px"></iframe>

<br />

**High-Level Overview**

In this project, we analyzed the evolution of stellar rotation through the interaction between a star's magnetic field and its outflow. We specifcally modeled magnetars (neutron stars with large magnetic field strengths) and their "dead zones", a region of closed magnetic field liens that keeps plasmas trapped. We specifically examine the Y-point radius ($$\bar{r}$$), or the equatorial distance to the last closed field line, marking the transition from the dead zone to the wind zone. Understanding this $$\bar{r}$$ value is critical for predicting quantities of interest in stellar astrophysics, like spin-down, angular momentum and mass loss, and more. 

Specifically, we examined analytical work by Mestel & Spruit (1987), which models this $$\bar{r}$$ value assuming an isothermal equation of state ($$P=\rho c^2_T$$). Mestel & Spruit found that the $$\bar{r}$$ value can be found from the following transcendental result:

$$
\left( \frac{R}{\bar{r}} \right)^6 = \frac{8\pi(\varrho_0)_{\rm d}c^2_T}{B_0} \exp{\left[ - \frac{GM}{Rc^2_T} \left( 1 - \frac{R}{\bar{r}} \right) \right]} \exp{\left[ \frac{1}{2} \frac{\Omega^2 R^2}{c^2_T} \left( \frac{\bar{r}^2}{R^2} - \frac{R}{\bar{r}} \right) \right]}
$$

In this equation:
* $$R$$: Radius of the magnetar.
* $$\bar{r}$$: Y-point radius.
* $$(\varrho_0)_{\rm d}$$: Initial density inside the dead zone.
* $$c_T$$: Isothermal sound speed.
* $$G$$: Gravitational constant.
* $$M$$: Mass of the magnetar.
* $$\Omega$$: Spin period. 

To compare to this analytical result, we use the MHD codebase `Athena++` with an isothermal equation of state, using its ability to handle curvilinear coordinate systems. We choose this framework since it can enforce the divergence-free constraint on the magnetic field ($$\nabla \cdot \mathbf{B}=0$$). For this study, and to keep close alignment with Mestel & Spruit, we configure our simulations in 2D axisymmetry, thus modeling the stellar magnetosphere efficiently while preserving the essential physics of the rotating outflow. 

For this specific study, we keep a constant polar magnetic field strength $$B_0 = 3\times 10^{15}\ {\rm G}$$ and isothermal sound speed $$c_T = 3\times 10^9\ {\rm cm/s}$$. We then vary the spin period, quantifying it with the dimensionless parameter $$\xi_\Omega$$:

$$
\xi_\Omega = \frac{v_\phi}{v_{\rm esc}} \bigg|_R = \left( \frac{\Omega^2 R^3}{2GM} \right)^{1/2}
$$

Below is an example of profile plots from our `Athena++` simulations:

<img src="/assets/img/projects/combined_2x2_plot.webp" style="width: 80%; display: block; margin: 0 auto;" alt="Combined plot of magnetosphere Athena++ results." />

Magnetohydrodynamic solutions from `Athena++` for four rotation rates characterized by $$\xi_\Omega$$. The left hemisphere of each plot shows the radial velocity $$v_r$$ of the outflow, while the right hemisphere shows the azimuthal velocity $$v_\phi$$. White streamlines track the magnetic field topology. Critical MHD surfaces are highlighted: the Mach surface (red), Alfvén surface (blue), and Fast Magnetosonic surface (orange), relating the poloidal wind speed to different physical characteristics (sound speed, magnetic field strength, and information travel speed). We note the higher azimuthal speeds at higher rotation periods and the distortion of the Alfvén surface as rotation increases.
{:.figcaption}

From these simulations, we numerically extract the experimental $$\bar{r}$$ value. Because the equation from Mestel & Spruit is transcendental, the analytical prediction found for comparison must be found through numerical methods, which we found Newton-Raphson inversion to be sufficient. An example field line extraction is shown below:

<img src="/assets/img/projects/extraction.webp" style="width: 80%; display: block; margin: 0 auto;" alt="Field line extraction image." />

Example numerical extraction of the last closed field line $$\bar{r}$$. The blue dashed lines indicate closed loops within the magnetospheric dead zone, while orange dashed liens represent open field lines integrated into the stellar wind. The solid gray line denotes the extracted $$\bar{r}$$ with its equatorial crossing defining the Y-point radius. The vertical gray dotted line indicates the prediction for this specific rotation rate and simulation, demonstrating the accuracy of the numerical analysis.
{:.figcaption}

We then make a plot of the analytical $$\bar{r}/R$$ plots and compare to our experimental results:

<img src="/assets/img/projects/ryr_for_poster.webp" style="width: 80%; display: block; margin: 0 auto;" alt="rbar/R comparison plot." />

Comparison of the dimensionless Y-point radius $$\bar{r}/R$$ as a function of stellar angular velocity $$\Omega$$ (with the corresponding $$\xi_\Omega$$ on the top axis). Blue circles represent data extracted from the simulations, while orange squares denot theoretical values. Close agreement across three orders of magnitude in rotation validates the framework's ability to module angular momentum loss in diverse stellar environments.
{:.figcaption}

From these results, we can discuss the following:
* Regime Recovery: We sucessfully recover two main regimes. At low rotation rates, magnetic pressure maintains a stable dead zone (plateau on plot). At rapid regimes, centrigual stretching snaps field liens open, driving the observed theoretical and experimental $$\bar{r}/R$$ collapse.
* Model Deviations: A systematic $$<7\%$$ overestimation of $$\bar{r}$$ vs. theory highlights the impact of the toroidal magnetic field $$B_\phi$$ and numerical diffusion. We expect improvement with increased angular resolution of the simulation. Unlike 1D models, 2D `Athena++` captures the closed zone, allowing us to resolve the competition between magnetic field strength, mass loss, and torgue. Higher magnetic fields expand the closed zone, suppressing mass loss while increasing the Alfvén radius to enhance spin-down.
* Magnetar Implications: This validates isothermal `Athena++` as a reliable litmus test for relativistic models. Because braking torque depends non-linearly on $$\bar{r}$$, even relatively small shifts in $$\bar{r}/R$$ significantly alter the fraction of open field liens, driving the rapid spin-down observed in young magnetars.

Future work for this project includes: breaking axisymmetry with 3D geometries, explore relativistic effects via Special Relativity or the Paczynski-Wiita potential, or refining Y-point extracting with higher-order, divergence-free interpolation methods.

___

**Acknowledgements**

This project acknowledges the support of Dr. Tejas Prasanna, Dr. Matt Coleman, and Dr. Todd Thompson. We also acknowledge Ashley Ostroot and the Ohio State Office of Undergraduate Research & Creative Inquiry (UR&CI) for financial and professional support of this project through the Undergraduate Research Apprenticeship Program 2025

___

**References**

M. J. Raives, M. S. B. Coleman, and T. A. Thompson, “Magnetized rotating isothermal winds,” Monthly Notices of
the Royal Astronomical Society, vol. 526, pp. 4418–4434, 10 2023.

L. Mestel and H. C. Spruit, “On magnetic braking of late-type stars,” Monthly Notices of the Royal Astronomical
Society, vol. 226, pp. 57–66, may 1987.

T. Prasanna, M. S. B. Coleman, M. J. Raives, and T. A. Thompson, “The early evolution of magnetar rotation – i.
slowly rotating ‘normal’ magnetars,” Monthly Notices of the Royal Astronomical Society, vol. 517, pp. 3008–3023,
09 2022.

J. M. Stone, K. Tomida, C. J. White, and K. G. Felker, “The athena++ adaptive mesh refinement framework:
Design and magnetohydrodynamic solvers,” The Astrophysical Journal Supplement Series, vol. 249, p. 4, June 2020

___

**Presenting the Work**

This project was presented at the Spring Undergraduate Research Festival on April 7th, 2026. Below are photos of me presenting:

<img src="/assets/img/projects/present.webp" style="width: 80%; display: block; margin: 0 auto;" alt="Me presenting!" />

<img src="/assets/img/projects/present2.webp" style="width: 80%; display: block; margin: 0 auto;" alt="Me presenting (pt 2)!" />