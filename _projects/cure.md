---
layout: project
title: 'CURE: Traceback of IC4665 Cluster'
caption: Crude traceback of the IC4665 cluster with in-notebook HTML animations in Python.
description: >
  *CURE: Class-based Undergraduate Research Experience*.
  
  Throughout this project, the traceback of the IC4665 star cluster was investigated to see the characteristics of the cluster millions of years ago. This was done primarily by leveraging Gaia SQL queries on proper motion and “rewinding” these proper motions in the opposite direction to find the right ascension and declination of where all the stars were previously located. We also make use of [Simbad](https://simbad.u-strasbg.fr/simbad/sim-basic?Ident=IC4665) data to do this traceback analysis. Our initial prediction would be that the cluster members would be closer together in the past then they are today. We do not precisely see this, as we see that the cluster throughout time tends to stay together, but some members spread out slightly in the past. This, however, can be understood due to the constraints on our traceback calculations and the fact that we are not considering any gravitational forces. We also make an animation of the cluster traceback utilizing prior knowledge and open-source code from Drs. Furnstahl and Brandenburg for [Physics 5300](https://github.com/jdbrice/5300-JB/tree/main).
date: 12 Dec 2025
image: 
  path: /assets/img/projects/animation.gif
  srcset: 
    1920w: /assets/img/projects/animation.gif
    960w:  /assets/img/projects/animation.gif
    480w:  /assets/img/projects/animation.gif
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

**Description**

As a part of the Astronomy 3350 course (Methods of Astronomical Observation and Data Analysis), our last *computational essay* involved doing an actual research project (of our choosing) on the IC4665 cluster. Our group chose the “Traceback” project, which involved identifying cluster members by tracing back the motion of the cluster using Right Ascension and Declination values. Since this project was intended to be a small undergraduate research experience, the results and information was unknown.

___

**Theory**

The traceback of the cluster elements was done very crudely. We used public Simbad data to bound data from Gaia to the rough area of the cluster using parallax, R.A., and Dec. We used an SQL query via

```py
top_n = 10000  # how many values we want to fetch from the data

query = """SELECT TOP %d
source_id, ra, ra_error, dec, dec_error, parallax, parallax_error, pmra, pmra_error, pmdec, pmdec_error 
FROM gaiadr3.gaia_source
where parallax >= %.2f and parallax <= %.2f and ra >= %.2f
and ra <= %.2f and dec >= %.2f and dec <= %.2f
""" % (top_n, parallax_min, parallax_max, ra_min, ra_max, dec_min, dec_max)
query  # Let's see what the query looks like
```

Using Pandas, we manipulated the data, and defined how we were going to do the traceback. If $q$ is the given R.A. or Dec. in degrees, and $\mu_q$ is the *proper motion* R.A. or Dec. in mas/yr, and $T$ is the time period in years, we can trace our result back for that coordinate value (R.A. or Dec. respectively) via the formula

$$
{\rm Traced\ Result} = \frac{(3.6\times 10^6\ {\rm mas})q - \mu_q T}{3.6\times 10^6\ {\rm mas}/1^{\circ}}.
$$

We created a Python function for this, where we can insert n-million years to trace the result. We then used Pandas Series analysis to create new columns of the traced motion, and also simultaneously traced the location of the cluster by using Simbad data and using the traceback function. We noted based on [Wikipedia](https://en.wikipedia.org/wiki/IC_4665) data that IC4665 is expected to be roughly 55 million years old, so we recognize that we shouldn’t go past that amount, and that 1 million year timesteps are adequate time steps. After tracing back 10 million years, we used Pandas analysis to identify members close to the cluster center, and label those as being members of the cluster. This allowed us to create the animations in the next section, separating cluster members from non-members.

___

**Animations**

We made animations of the system using the adapted code from [Physics 5300](https://github.com/jdbrice/5300-JB/tree/main) (Theoretical Mechanics). In doing so we can create two styles of animations of the cluster. One keeps the axes fixed, and one dynamically updates the axes to follow the cluster. The cyan elements are the cluster elements, while the rest are background elements. 

<img src="/assets/img/projects/animation.gif" style="width: 80%; display: block; margin: 0 auto;" alt="Fixed axes animation." />

Animation with fixed axes of the cluster motion.
{:.figcaption}

<img src="/assets/img/projects/animation2.gif" style="width: 80%; display: block; margin: 0 auto;" alt="Dynamic axes animation." />

Animation with dynamic axes of the cluster motion.
{:.figcaption}

___

**Limitations**

From looking at the above animations, we can do some more official analysis. We see that the cluster, in general, moves together throughout time which *is* good and what we expect. From the first animation, we can see that the cluster is a bit more clustered, but it’s not as clustered as we would generally expect. Especially, with the second animation, some cluster elements appear to get much further apart as you go back in time. This, however, is due to the crude way we traced the cluster members back, and we also consider no gravitational impacts, which would help attract the objects together. Also, due to lack of Gaia data, did not consider measurements like radial velocity, as most Gaia data points did not have this value readily available. Despite that, by seeing that we do get the general cluster moves together, that is a good result for this loose analysis.

___

**Data Notice**

Because this cluster and its data and properties are still actively being investigated, this project is not publicly hosted on Github or other hosting platforms. However, the project `.ipynb` file used for submission for the course may be distributed upon reasonable request.