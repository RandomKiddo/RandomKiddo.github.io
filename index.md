---
layout: default
title: Home
---


{% include search-lunr.html %} <br>

<div class="message">
  <b><i>
  CHANGE IS COMING! THIS WEBSITE WILL BE COMPLETELY REVISED AND OVERHAULED IN THE NEXT COMING MONTHS!
  </i></b>
</div>

<h1 class="page-title">Hello!</h1>

<p class="message">My name is Neil Ghugare! This website is dedicated to being a landing platform for all of my professional achievements. On this website, you can learn about me, find my CV, and get links to some of my portfolios! </p>

Recent Project Posts:

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<br>

{% include footer.md %}