---
layout: project
title: 'Hemoglobin Cooperativity'
caption: Parameter fitting and Monte Carlo simulations of varying hemoglobin cooperativity models.
description: >
  Using MATLAB, I did data analysis on experimental hemoglobin binding data. I curve-fit different models to the data, including non-cooperative, Pauling, and Adair models for hemoglobin cooperativity. Fitting the non-cooperative and Pauling models involved exploring minimal errors in a parameter space via contour plots, utilizing a brute force method, and picking the approximate minimum error value. For the Adair model, I ran a Monte Carlo simulation to fit the necessary model parameters, since there were four of them. I derived these models from scratch from thermodynamical laws and statistical mechanics, including the Grand Partition function. 
date: 17 Apr 2023
image: 
  path: /assets/img/projects/hemoglobin.png
  srcset: 
    1920w: /assets/img/projects/hemoglobin.png
    960w:  /assets/img/projects/hemoglobin.png
    480w:  /assets/img/projects/hemoglobin.png
links:
  - title: Link
    url: https://github.com/RandomKiddo/PolarisResearchProject
accent_color: '#4fb1ba'
accent_image:
  background: '#40739e'
theme_color: '#40739e'
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

<iframe src="/assets/pdf/PolarisPosterTrue.pdf" width="100%" height="700px"></iframe>

<br />

**About**

Hemoglobin proteins are found in the blood and are known for transporting oxygen. Each individual hemoglobin protein has four binding sites for oxygen. At any one time, a hemoglobin protein can have any permutation of oxygen molecules bound to it, including being empty (no oxygen
molecules bound).

<img src="/assets/img/projects/biology.webp" style="width: 80%; display: block; margin: 0 auto;" alt="Oxygen binding in hemoglobin." />

Oxygen binding sites and options in hemoglobin molecules (Phillips et. al.).
{:.figcaption}

In the above image, we have regions $$J$$, $$K$$, and $$L$$, which represent the cooperativity between oxygen molecules. From this we can assume $$J=K=L=0$$ for non-cooperativity and $$K=L=0$$ for the Pauling model.


**Derivation**

There are a few main equations that go into solving this system, which are noted in the poster. The derivation/statement of those equations are given in the following PDF:

<iframe src="/assets/pdf/HemoglobinDerivations.pdf" width="100%" height="900px"></iframe>

