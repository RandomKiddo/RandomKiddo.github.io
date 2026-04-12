---
layout: project
title: 'MHN Regression for the ISS 🥉'
caption: Multi-headed network built on MobileNetV3Small to regress ISS docking port location, with STL visualization.
description: >
  Utilizing the data, a multi-headed network (MHN) was built on the top layer of the MobileNetV3Small architecture. The MHN had three heads, each head regressing one of three values: the distance to the ISS, the x-coordinate of the docking port, or the y-coordinate of the docking port. After training, the best model was saved and then used to create a three-dimensional visualization showing the line the SpaceX Dragon capsule would need to take to dock with the ISS. An animation was made of this visualization. This visualization utilized public-access STL files of the ISS and Dragon capsule. 
  
  **This project won 3rd place in the competition out of 26 teams 🥉.**
date: 23 Feb 2025
image: 
  path: /assets/img/projects/test.gif
  srcset: 
    1920w: /assets/img/projects/test.gif
    960w:  /assets/img/projects/test.gif
    480w:  /assets/img/projects/test.gif
links:
  - title: Link
    url: https://github.com/RandomKiddo/HackAI2025
accent_color: '#4fb1ba'
accent_image:
  background: '#000000'
theme_color: '#000000'
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

**Motivation**

We wanted to create an open-source docking system that can be generalized for different spacecraft. This would aid in the flight process of docking capsules to space stations and would allow for astronauts to direct their attention to other aspects outside of docking. This project also allows for the generalization of docking, showing that it would be possible to do other similar docking tasks with the right data (i.e., automated parking, ship docking, airplane-to-gate travel, etc.).

___

**Data**

The data is a set of 10,000 images of the ISS with labeled distance values and the location of docking port (albeit in a less-usable format). The data came from [Kaggle](https://www.kaggle.com/datasets/msafi04/iss-docking-dataset/data). It was originally part of an AICrowd challenge.

___


**The Model**

After tuning the model, we arrived on the following MHN top layer on the MobileNetV3Small architecture:

<img src="/assets/img/projects/model.webp" style="width: 80%; display: block; margin: 0 auto;" alt="Graphviz image of the model." />

The graphviz top layer of the mode that we attached to MobileNetV3Small.
{:.figcaption}

We trained the model for 50 epochs implementing early stopping and model checkpoint callbacks to stop the training early if the validation loss stopped decreasing (started to overfit), and to only save the best model based on validation loss. Since this was an MHN, we had three loss functions to minimize, one for each head. We chose MAE for all three heads because we are working with distances. The total loss of the model was a weighted sum of these three individual losses, the weights being tuned through trial-and-error. The result was the following loss graph:

<img src="/assets/img/projects/loss5.webp" style="width: 80%; display: block; margin: 0 auto;" alt="Loss graph for this model." />

The loss graph of the MHN.
{:.figcaption}

___

**Visualization**

Training the model yielded the best model to use for visualization and prediction. Utilizing public-access STL files of the ISS and SpaceX Dragon capsule, we were able to create a 3D visualization in python of the capsule and ISS in 3D-space, and the line the capsule needs to take to dock, using the predictions from the model. Using this visualization, we made an animation showcasing the results of the model. The animation is shown at the top of the page.
