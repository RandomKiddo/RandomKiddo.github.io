---
layout: project
title: 'Kármán Vortex Street LBM'
caption: CUDA GPU CFD implementation of the Lattice Boltzmann Method for the Kármán Vortex Street.
description: >
    A C++/CUDA/NVCC implementation of the Lattice Boltzmann Method for computational fluid dynamics (CFD), utilizing an NVIDIA H100 GPU on a high-performance computing (HPC) resource, with provided Makefiles and executables. Specifically, we investigate the Kármán Vortex Street and compare to known results via the Reynolds number ($$Re$$) and the Strouhal number ($$St$$).
date: 24 Apr 2026
image: 
  path: /assets/img/projects/vortex_street_zoomed.gif
  srcset: 
    1920w: /assets/img/projects/vortex_street_zoomed.gif
    960w:  /assets/img/projects/vortex_street_zoomed.gif
    480w:  /assets/img/projects/vortex_street_zoomed.gif
links:
  - title: Link
    url: https://github.com/RandomKiddo/LatticeBoltzmannMethod/tree/master
accent_color: '#4fb1ba'
accent_image:
  background: '#fd801d'
theme_color: '#fd801d'
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


The objective of this project is to simulate the Kármán Vortex Street, a classic fluid dynamics phenomenon characterized by periodic vortex shedding behind a blunt body. This occurs when the flow instabilities lead to unsteady separation around an obstacle, such as a cylinder. Capturing this behavior requires high spatial resolution and extensive temporal iteration, making it an ideal candidate for high-performance computing. We utilized the Lattice Boltzmann Method (LBM) due to its locality and inherent parallelism, which allows for efficient execution on a GPU.

We provide a brief overview of the project below, followed by the project document file (which explains the project in much greater detail).

___

### Brief Overview

Using the D2Q9 (2 dimensions, 9 velocities) method for LBM, we can model a lattice with a cylinder to simulate the vortex street. We utilize BGK relaxiation to reach equilibrium:

$$
f_i(\mathbf{x}+\mathbf{e}_i,t+1)=f_i(\mathbf{x},t) - \frac{1}{\tau}\left[f_i(\mathbf{x},t)-f^{\rm eq}_i(\mathbf{x},t)\right]
$$

We control the relaxation time $$\tau$$ (which controls viscosity $$\nu$$) and the inlet velocity $$u_{\rm inlet}$$. Utilizing the known relationship between $$\nu$$ and $$\tau$$:

$$
\nu = \frac{1}{3}(\tau-0.5)
$$
we can then calculate experimental results for our simulations for varying $$\tau$$ and $$u_{\rm inlet}$$, keeping the domain ($$n_x$$ and $$n_y$$) fixed. The Reynolds number can be calculated as

$$
Re = \frac{u_{\rm inlet}\cdot (2r)}{\nu}
$$

The Strouhal number is 

$$
St = \frac{f\cdot (2r)}{u_{\rm max}} = \frac{f\cdot (2r)}{u_{\rm inlet}} \frac{n_y -2r}{n_y}
$$

Using a Fast Fourier Transform (FFT) to calculate the shedding frequency $$f$$, we can then make a plot of $$St$$ vs. $$Re$$ and compare to known results from C. H. K. Williamson. This yields the following result:

![Strouhal vs. Reynolds plot](/assets/img/projects/strouhal_values.webp)

Comparison of simulated $$St$$ against experimental data from Williamson (1989) for the 2D regime of $$50\leq Re\leq 150$$, keeping $$n_x=4000$$ and $$n_y=1000$$ fixed. 
{:.figcaption}

The simulation results demonstrate excellent agreement with the experimental trend, capturing the characteristic increase in shedding frequency as the Reynolds number rises. The slight, consistent over-prediction of the Strouhal number (approximately 3–5%) is a hallmark of high-quality 2D numerical simulations. This discrepancy is primarily attributed to the “2D vs. 3D” effect: while physical experiments encounter three-dimensional spanwise instabilities that slightly dissipate energy and slow the shedding rate, 2D models constrain the flow to a single plane, resulting in a slightly higher, idealized frequency. Numerical diffusion could also be a factor, as the simulation resolution may not be high enough to properly resolve the frequencies from the FFT for the experimental $$St$$ number. The consistency of this offset across the entire range validates the solver’s ability to resolve the underlying transport phenomena and confirms that the chosen lattice resolution and domain boundaries are sufficient for accurate Kármán Vortex Street modeling.

___


### Project Document File

<iframe src="/assets/pdf/Physics_5810_Final_Project.pdf" width="100%" height="1000px"></iframe>

___

### References

Blevins, R. D. (1990). Flow-induced vibration (2nd ed.). Van Nostrand Reinhold.

Li, W., Fan, Z., Wei, X., & Kaufman, A. (2005). Flow simulation with complex boundaries. In M. Pharr (Ed.), GPU Gems 2: Programming techniques for high-performance graphics and general-purpose computation (pp. 747–764). Addison-Wesley.

Williamson, C. H. K. (1989). Oblique and parallel modes of vortex shedding in the wake of a circular cylinder at low Reynolds numbers. Journal of Fluid Mechanics, 206, 579–627. https://doi.org/10.1017/S0022112089002429.