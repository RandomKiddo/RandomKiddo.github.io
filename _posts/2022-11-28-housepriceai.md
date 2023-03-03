---
layout: post
title: Scikit-Learn House Price AI
---

<div class="message">
  <u>Goals:</u> Get accustomed to Jupyter Notebooks, Scikit-Learn, and simple regression AI modeling. Learn concepts such as normalization, imputation, enumeration, the foundations of CRISP-DM, and the basics of AI modeling. 
  <br> <br>
  <u>Results:</u> Model with an r<sup>2</sup> of 0.9999968, but is not general to any house due to location data being factored into the model.
</div>

**Process:**

Use Pandas to read a csv into a DataFrame. Enumerate the data to get a frame with only numbers. Check for unusable data and use imputation, if needed, to insert data. After inspecting graphs of the data, normalize the data and filter it accordingly. Split the data into training and test sets, and then model the data using KNeighborsRegressor model and train the data. Then, we predict on the test set and measure the error. Finally, we fiddle with the model a bit to find the most accurate one, and then we're done.

**Snippets:**

Information Gain on Parameters (VarianceThreshold Not Pictured):
![Information Gain](/screenshots/informationgain.png)

The r<sup>2</sup> Values:
![R-Squared Values](/screenshots/rsquared.png)

The Final Model:
![Final Model](/screenshots/model.png)

See the full project on [Github](https://github.com/RandomKiddo/HousePriceAI)