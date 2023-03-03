---
layout: post
title: PG Stock Price Prediction RNN w/Tensorflow
---

<div class="message">
  <u>Goals:</u> Learn about Neural Networks and RNNs. Get comfortable with Tensorflow. Predict Proctor & Gamble Stock (closing) price.
  <br> <br>
  <u>Results:</u> A model that is pretty close to the true values of the stock price range predicted (matches shape well, exact values not attained).
</div>

**Process:**

Collect csv data into a Pandas DataFrame. Enumerate the data to make it all numbers and then visualize the data to see what we're working with. We then reshape and compile the closing price data and do the same to the high and low price values. We concatenate that usiny NumPy into one array and scale the data. We split the data into training and testing sets, and then using TensorFlow and Keras to generate a Sequential model with a LSTM and Dense layer. After compiling it and training it on the training set, we then predict the stock price closing value of the test set, and then graph the results to inspect the accuracy.

**Snippets:**

PG Stock Price Graph:
![PG Price](/screenshots/original.png)

The RNN Summary:
![PG Price](/screenshots/rnnsummary.png)

The Prediction:
![PG Price](/screenshots/prediction.png)

The Prediction w/ More Data:
![PG Price](/screenshots/predictionplus.png)

Full Scope of Prediction (Vertical Line Where Prediction Starts):
![PG Price](/screenshots/fullscope.png)


See the full project on [Github](https://github.com/RandomKiddo/StockPriceRNN)