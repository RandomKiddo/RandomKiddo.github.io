---
layout: post
description: > 
  As a part of a two-semester undergraduate Order of Magnitude (OoM) astronomy course, the second semester culminated in a group project where we created our own OoM problems. Our group created a problem titled "A Positive Disaster", a problem about ripping electrons off the moon! <br />
  <sub>An LLM was used to create this cover image.</sub>
image: 
  path: /assets/img/blog/magnet.webp
  srcset: 
    1920w: /assets/img/blog/magnet.webp
    960w:  /assets/img/blog/magnet.webp
    480w:  /assets/img/blog/magnet.webp
accent_image:
  background: '#000000'
excerpt_separator: <!--more-->
sitemap: false
image_focal_point: top
---

# A Positive Disaster

Imagine an alien race has come to our solar system with an “electron capture” magnet. They position the magnet at the moon and start ripping away electrons from the moon, making it positively charged, and they
conveniently don’t repel each other or attract other positive charges when doing so. As the moon continues to get more positively charged, it will eventually “explode” (become unbound).

(a) Calculate the number of electrons you have to remove before the moon
explodes/becomes unbound. <br>
(b) Is this a sensible amount of electrons?

In this post I talk about the problem itself and the writing process. 

<!--more-->

<script src="https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js"></script>
<script>
addBackToTop({
  diameter: 56,
  backgroundColor: '#3d6f75',
  textColor: 'rgb(225, 221, 214)'
})
</script> 

The first part about writing an OoM problem is inspiration, which our group drew from xkcd's What If? video, titled ["What if the Moon were made entirely of electrons?"](https://www.youtube.com/watch?v=DiWFXv9N0Vs):

<br />

<div style="display: flex; justify-content: center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/DiWFXv9N0Vs?si=aeJiBzHfBoEUcOvH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

We had to come up with ideas to make a problem and then check it out mathematically. We also needed it to fit within a roughly 25-minute period for other students to get started solving the problem, and then help guide students to solve it as a group. 

We decided on a project where we rip out electrons from the moon, in a similar vein but different to the video, until the moon "explodes" (is no longer bound). We especially liked this problem because it involves many concepts we did not have at any point in the two-semester OoM sequence. This included modeling the electrostatic force or figuring out vacuum permittivity ($$\varepsilon_0$$) in (rough) CGS units. We say rough untis because we used cm, g, and s, but we kept charge in C instead of statC. After working out that first part, a sensible second part to the problem would be to check if this is a reasonable amount.

Our intuition tells us that: i) the total number of electrons we rip out should not be more than the total number of nucleons, and ii) that given how strong the electrostatic force is (or conversely, how weak gravity is), it shouldn't take many electrons (relatively speaking) to cause unbounding. We solve that in part two and find that our result follows our intuition. 

Below is the PDF of the problem, followed by the PDF of the solution. If you'd like, you can take a crack at the problem too before checking the solutions!

<iframe src="/assets/pdf/oom_problem.pdf" width="100%" height="700px"></iframe>

<br />

<iframe src="/assets/pdf/oom_solution.pdf" width="100%" height="700px"></iframe>
