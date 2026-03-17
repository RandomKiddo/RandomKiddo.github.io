---
layout: post
description: > 
  Loading data for AI models can be RAM and time-intensive. For a larger project (HackAI 2025) with a big dataset, I ran an optimization test on a manual loader and a Tensorflow pipeline to see the variations in time and RAM. As expected, Tensorflow's model is much more efficient.
image: 
  path: /assets/img/blog/initial_title.webp
  srcset: 
    1920w: /assets/img/blog/initial_title.webp
    960w:  /assets/img/blog/initial_title.webp
    480w:  /assets/img/blog/initial_title.webp
accent_image:
  background: '#D49726'
excerpt_separator: <!--more-->
sitemap: false
image_focal_point: top
---

# A Comparison of `tf.data.Dataset` with Manual Image Loading

While working on our [HackAI 2025 project](https://github.com/RandomKiddo/HackAI2025/tree/master), we found that our original way of loading the image data for our multi-headed regression was incredibly slow, and was crashing some of our computers due to RAM usage. Eventually, we converted our pipeline over to one that utilizes the more-optimized tf.data.Dataset pipeline. For our own entertainment, we made plots comparing the old method with the new method. 

<!--more-->


We split up the data loading process into ten steps, which each print the current memory usage using `psutil`:

1. The start of the process
2. Reading the Kaggle CSV into a `DataFrame`
3. Fetching the images and their values
4. Shuffling and unzipping the values
5. Creating the train/test/validation splits
6. Normalizing the data
7. Read in the train data
8. Read in the validation data
9. Read in the test data
10. All images read and stored, process completed

We do this twice: once with our old method and once using `tf.data.Dataset.from_tensor_slices`. The first is with our old, direct method:

<img src="/assets/img/blog/initial.webp" style="width: 80%; display: block; margin: 0 auto;" alt="Initial memory usage of the data." />

Loading our data with 32 GB of RAM on an Intel i7. We see we use over 16 GB.
{:.figcaption}

We also track the time this process takes:

<img src="/assets/img/blog/initial_t.webp" style="width: 80%; display: block; margin: 0 auto;" alt="Initial time of loading the data." />

Time over a few iterations of loading the data with the old model (~2min 40s).
{:.figcaption}

Utilizing the Tensorflow optimizations, we get:

<img src="/assets/img/blog/initial_optv1.webp" style="width: 80%; display: block; margin: 0 auto;" alt="Initial memory usage of the data." />

With the new process, shown above, we don't even use 0.5 GB loading the data.
{:.figcaption}

<img src="/assets/img/blog/initial_t_optv1.webp" style="width: 80%; display: block; margin: 0 auto;" alt="Initial time of loading the data." />

On top of that, with the new process, this process takes less than a second.
{:.figcaption}

With this, we acn calculate the reduction precentage and efficiency factors using the following formulae:

$$
{\rm Reduction\ \%} = \frac{r_{\rm i}-r_{\rm f}}{r_{\rm i}}\times 100
$$

where $$r_{\rm i}$$ is the initial RAM usage and $$r_{\rm f}$$ is the final RAM usage. For the efficiency factor,

$$
{\rm Efficiency\ Factor} = \frac{r_{\rm i}}{r_{\rm f}}
$$

We can use the same formulae for the time. Plugging in our initial values of about 16GB and 160s to 0.4GB and 0.65s (roughly speaking) we see a reduction in the RAM usage by 97.5%, and an efficiency factor of 40, meaning our process is now 40x more memory efficient. Likewise, with the time (speed), we see a 99.59% reduction in process completion, now being 246.15x faster.

This goes to show the interal optimizations and efficiency involved when loading large data (like our ISS images) through Tensorflow Datasets. Without Tensorflow Datasets, the data loading is bottlenecked by having to load and store all the image data at one time before finally freeing the RAM. 

While we did this change to load our data better and faster, this analysis was more for our own enjoyment, but despite that, I find it pretty insightful. For more information on Tensorflow Datasets, see [Tensorflow's website](https://www.tensorflow.org/datasets).

