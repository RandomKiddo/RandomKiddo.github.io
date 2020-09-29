# Home File

HTML
```html
<!DOCTYPE html>
<html>
<link rel="stylesheet" type="text/css" href="index.css">
<head>
  <title>Neil G's Programming Website - Home</title>
    <script src="index.js"></script>
</head>
<body>
  <img src="LOGO.jpg" alt="SC" style="height:48px; width:48px; float:left;">
  <div class="topnav">
    <a class="active" href="index.html">Home</a>
    <a href="projects.html">Projects & Repos</a>
    <a href="about.html">About</a>
    <a href="bot.html">Discord Bot</a>
    <a href="rawcode.html">Raw Code</a>
  </div>
    <br />
    <div id="left" class="left">
        <h3 style="color: #1ac42d">Projects & Repos</h3>
        <p>Here is where all my projects and repositories are stored and linked</p>
        <center><input type="button" value="Go To Projects & Repos" onclick="window='randomkiddo.github.io/projects.html';"></center>
    </div>
    <br /><br /><br /><br /><br /><br />
    <div id="right" class="right">
        <h3 style="color: #1ac42d">About</h3>
        <p>Ever wonder who is even writing this? Learn about me, and see some of my connections as well!</p>
        <center><input type="button" value="Go To About" onclick="window='randomkiddo.github.io/about.html';"></center>
    </div>
</body>
</html>
```

CSS

```css
.topnav{
  background-color: darkblue;
  overflow: hidden;
}
.topnav a{
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover{
  background-color: #ddd;
  color: black;
}
.topnav a:active{
  background-color: #1ac42d;
  color: white;
}
.left{
    float: left;
    margin-left: 30px;
    border: 2px dashed red;
    padding: 1em 1em;
    border-radius: 25px
}
.right{
    float: right;
    margin-right: 30px;
    border: 2px dashed red;
    padding: 1em 1em;
    border-radius: 25px;
}
input[type="button"]{
  background-color: #1ac42d;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px
  cursor: pointer;
}
p{
    color: white;
}
body{
  background-color: #1d1f1d;
}
```
JS

```javascript
function openSame(link) {
    window.location.href = link;
}
```

# Projects File

HTML
```html
<!DOCTYPE html>
<html>
<link rel="stylesheet" type="text/css" href="projects.css">
<head>
  <title>Neil G's Programming Website - Projects</title>
    <script src="jquery-3.5.1.min.js"></script>
    <script src="projects.js"></script>
</head>
<body>
  <img src="LOGO.jpg" alt="SC" style="height:48px; width:48px; float:left;">
  <div class="topnav">
    <a href="index.html">Home</a>
    <a class="active" href="projects.html">Projects & Repos</a>
    <a href="about.html">About</a>
    <a href="bot.html">Discord Bot</a>
    <a href="rawcode.html">Raw Code</a>
      <input type="submit" value="Submit" onclick="new Highlight().run();" >
      <input type="text" placeholder="Search... [WIP]" id="searchbar">
  </div>
    <br />
    <button class="accordion" onclick="expAcc('java')">Java</button>
    <div class="panel" id="java">
        <h3><b><u>Java Projects: </u></b></h3>
        <br />
        <p>Most of my java projects are hosted on github, but I'll give a brief recap of them  here! You can visit them here: </p>
        <form>
            <input type="button" onclick="window.open('www.github.com/RandomKiddo/java');" value="Github-Java">
        </form>
        <br />
        <h5>Calculator: </h5>
        <br />
        <p>This project consists of a calculator and graphing calculator. There are many supporting classes to this, and the jar file is NOT executable. You can read documentations and write your own main method to test the files!</p>
        <br />
        <h5>Fractions: </h5>
        <br />
        <p>This project consists of two files that represent fractions and mixed numbers, and can be used to create instances of each other! Just like all other jar files in this repository, the jar file is NOT executable!</p>
        <br />
        <h5>Stats: </h5>
        <br />
        <p>Consisting of classes for statistics with arrays, lists, and combinatorics (permutations and combinations). The jar file is NOT executable!</p>
        <br />
        <h5>StringX (String Extender): </h5>
        <br />
        <p>Classes that turn strings into lists, remove whitespace from strings, do data with strings, and subtract strings (more like replace than subtract). The jar file, like the rest, is NOT executable.</p>
        <br />
    </div>
    <button class="accordion" onclick="expAcc('py')">Python</button>
    <div class="panel" id="py">
        <h3><b><u>Python Projects: </u></b></h3>
        <br />
        <p>As for python projects, I really only have two. However, these projects are big, so there is much more depth to them, even though I don't have many projects.</p>
        <br />
        <h5>SourceCode Bot: </h5>
        <br />
        <p>I think you knew this was coming! SourceCode is my utility discord bot, and I am proud of it! As of writing, we have surpassed 2600 lines of code, plus multiple supporting files and systems that go along with it! It does a lot, and if you wish to learn about it more, visit the Discord Bot page of this website, or join SourceCode Support on discord (link in About Connections)</p>
        <h5>Influence: </h5>
        <br />
        <p>Now this I have not talked about. Influence is a package uploaded to PyPI that adds things to python that it doesn't already have. It is named influence because it is "influenced by java" but "coded in python". There is a lot that I have added to it, and I struggled and learned a lot along the way! To learn more, visit the PyPI page or Github Repository here: </p>
        <form>
            <input type="button" onclick="window.open('www.github.com/RandomKiddo/influence');" value="Github-Influence">
            <input type="button" onclick="window.open('https://pypi.org/project/influence/');" value="PyPI Documentation">
        </form>
    </div>
    <button class="accordion" onclick="expAcc('cpp')">C++</button>
    <div class="panel" id="cpp">
        <h3><b><u>C / C++ Projects: </u></b></h3>
        <br />
        <h1>Nothing To See Here :/</h1>
        <br />
        <p>As of right now, I do not have any C / C++ projects, nor do I have a Github repository for said projects. I will update this part once I have a repository with my C / C++ projects</p>
    </div>
    <button class="accordion" onclick="expAcc('misc')">Miscellaneous</button>
    <div class="panel" id="misc">
        <h3><b><u>Miscellaneous Projects: </u></b></h3>
        <br />
        <h1>Nothing To See Here :/</h1>
        <br />
        <p>As of right now, I do not have any miscellaneous projects.</p>
    </div>
</body>
</html>
```

CSS

```css
*{
  box-sizing: border-box;
}
.topnav{
  background-color: darkblue;
  overflow: hidden;
}
.topnav a{
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover{
  background-color: #ddd;
  color: black;
}
.topnav a:active{
  background-color: #1ac42d;
  color: white;
}
.topnav input[type=text]{
    float: right;
    padding: 6px;
    border: none;
    margin-top: 8px;
    font-size: 17px;
}
.sub{
    float: right;
    background-color: #ccc;
    text-decoration: none;
    color: white;
    border: none;
    height: 32px;
    margin-top: 8px;
    margin-right: 10px;
}
.accordion{
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}
.active, .accordion:hover{
  background-color: #ccc;
}
.panel{
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}
input[type="button"]{
  background-color: #1ac42d;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
input[type="text"]{
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  font-size: 17px;
}
input[type="submit"]{
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}
body{
  background-color: #1d1f1d;
  overflow-y: scroll;
}
```

JS

~~~javascript
function expAcc(id){
    var panel = document.getElementById(id);
            
    if (panel.style.display === "block"){
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}
class Highlight{
    constructor(){
        this._input = document.getElementById("searchbar").textContent.toLowerCase();
        this._p = document.getElementsByTagName("p");
        this._flooredP = floorAll(this._p);
    }
    get input(){
        return this._input;
    }
    get p(){
        return this._p;
    }
    run(){
        revertHighlighting();
        highlight();
    }
    floorAll(p){
    	var floored = [];
        
    	for (var i = 0; i < p.length; i++){
        	floored.append(p[i].toString().toLowerCase());
        }
        
        return floored;
    }
    revertHighlighting(){
        for (var i = 0; i < this._p.length; i++){
            var inner = this._p[i].innerHTML;
            
            inner = inner.replaceAll('<mark>', '');
            inner = inner.replaceAll('</mark>', '');
            
            this._p[i].innerHTML = inner;
        }
    }
    contains(){
        var array = [];
        
        for (var i = 0; i < this._flooredP.length; i++){
            if (this._flooredP[i].indexOf(this._input) > -1){
                array.append(this._p[i]);
            }
        }
        
        return array;
    }
    instances(){
        var array = contains();
        var map = new Map();
        
        for (var i = 0; i < array.length; i++){
            map.set(array[i], amountFound(array[i]));
        }
        
        return map;
    }
    amountFound(string){
        var amount = 0;
        var copy = string.toLowerCase();
        
        while (copy.indexOf(this._input) > -1){
            var index = copy.indexOf(this._input);
            copy = copy.substring(index + this._input.length);
            amount++;
        }
        
        return amount;
    }
    highlight(){
        var instances = instances();
        
        instances.forEach((key, value) => {
            var indices = findIndices(key, value);
            addMarkTag(key, indices);
        });
    }
    findIndices(key, value){
    	var found = 0;
        var indices = [];
        var copy = key.toLowerCase();
        
        while (found < value){
        	var index = copy.indexOf(this._input);
            
            indices.append(index);
            found++;
            
            copy = copy.substring(index + this._input.length);
        }
        
        return indices;
    }
    addMarkTag(key, indices){
    	var added = 0;
        var inner = key.innerHTML;
        
        while (added < indices.length){
            var index = indices[added];
            
            inner = inner.substring(0, index) + '<mark>' + inner.substring(index, index + this._input.length) + '</mark>' + inner.substring(index + this._input.length);
            
            key.innerHTML = inner;
            
            added++;
        }
    }
}
~~~

# About File

HTML
```html
<!DOCTYPE html>
<html>
<link rel="stylesheet" type="text/css" href="about.css">
<head>
  <title>Neil G's Programming Website - About</title>
</head>
<body>
  <img src="LOGO.jpg" alt="SC" style="height:48px; width:48px; float:left;">
  <div class="topnav">
    <a href="index.html">Home</a>
    <a href="projects.html">Projects & Repos</a>
    <a class="active" href="about.html">About</a>
    <a href="bot.html">Discord Bot</a>
    <a href="rawcode.html">Raw Code</a>
  </div>
  <br />
  <button class="accordion" onclick="expAcc('abt')">About</button>
  <div class="panel" id="abt">
    <h4><b><u>About Me:</u></b></h4>
    <br />
    <p>
      Hi! My name is Neil! I am an avid programmer, but I do other things!
      I play tennis, as I have been since 9 years old!
      I love photography, and I mainly take pictures of the night sky, landscapes, and animals!
      I also enjoy hiking, bicycling, and social interaction with friends through gaming and more!
    </p>
    <br />
    <p>In terms of coding, here is my history:</p>
    <br />
    <div class="timeline">
      <div class="container left">
        <div class="content">
          <h2>Starting Off</h2>
          <p>First, I started learning Python when I was eight but had to stop due to school, so I never really learned it</p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>Middle School</h2>
          <p>Then, in middle school, I learned Scratch coding (if that counts)</p>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <h2>Around There</h2>
          <p>Also around that time I learned HTML & CSS (I know they are markup not programming languages) for web design, but quickly learned that I wasn't a huge fan. I did build this website using HTML & CSS though!</p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>Starting High School</h2>
          <p>In 9th grade I took an Intro to Computer Science class and learned the basics of Java. Also, I was the master of that class :)</p>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <h2>In Between</h2>
          <p>In between 9th and 10th grade I finished learning Python, and found it extremely useful!</p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>College Level</h2>
          <p>In 10th grade, I took AP Computer Science A, and was the master of that class too! It was also my favorite class! I got a 5 on that AP test!</p>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <h2>Discord Time</h2>
          <p>In the middle of 10th grade, I started coding SourceCode, my discord bot!</p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>Language Cram</h2>
          <p>During the summer leading to my 11th grade year, I learned C and C++, both of which I enjoy. I also learned JavaScript, but didn't like it too much. I only use it today for things like this website.</p>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <h2>A Project With Friends</h2>
          <p>Around that time, a group of friends and I learned Swift (and some learned Python) to create a game. Unfortunately, we ended up ditching Swift and focusing on Python. So even though I know Swift, I have most likely forgotten it at this point</p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>Current Day</h2>
          <p>Currently, I am learning and finishing the FORTRAN programming language. Also I have done a bit of competitive programming on HackerRank, and have gotten a few certificates from them!</p>
        </div>
      </div>
    </div>
  </div>
  <button class="accordion" onclick="expAcc('cs')">Connections</button>
  <div class="panel" id="cs">
    <h4><b><u>My Connections:</u></b></h4>
    <br />
    <!-- https://github.com/RandomKiddo https://www.hackerrank.com/nghugare2 -->
    <div class="tab">
      <button class="tablinks" onmouseover="expTab('git')">Github</button>
      <button class="tablinks" onmouseover="expTab('hr')">HackerRank</button>
      <button class="tablinks" onmouseover="expTab('dis')">Discord</button>
        <button class="tablinks" onmouseover="expTab('py')">PyPI</button>
    </div>
    <div id="git" class="tabcontent">
      <h3><b><u>Github:</u></b></h3>
      <br />
      <p>Github is where I host repositories for things like my Java projects, my PyPI project influence, and more!</p>
      <br />
      <input type="button" onclick="window.open('https://github.com/RandomKiddo');" value="Go To Github">
    </div>
    <div id="hr" class="tabcontent">
      <h3><b><u>HackerRank:</u></b></h3>
      <br />
      <p>HackerRank is where I earn programming certifications, and practive competitive programming. It also teaches me how to make efficient code with RAM and time!</p>
      <br />
      <input type="button" onclick="window.open('https://www.hackerrank.com/nghugare2');" value="Go To HackerRank">
    </div>
    <div id="dis" class="tabcontent">
      <h3><b><u>Discord:</u></b></h3>
      <br />
      <p>I use discord for things like hosting my bot (SourceCode) and chatting with friends</p>
      <br />
      <p>My Username: firsttry#1574</p>
      <br />
      <input type="button" onclick="window.open('https://discord.com/api/oauth2/authorize?client_id=715705992821735534&permissions=2147482871&scope=bot');" value="Preferred SourceCode Invite Link">
      <input type="button" onclick="window.open('https://discord.com/api/oauth2/authorize?client_id=715705992821735534&permissions=8&scope=bot');" value="Administrative SourceCode Invite Link">
      <input type="button" onclick="window.open('https://discord.gg/rHApaMm');" value="SourceCode Support Server">
      <p>Note That Admin Permissions For SourceCode Mess With Some Features, Like Channel Disabling</p>
    </div>
      <div id="py" class="tabcontent">
          <h3><b><u>PyPI: </u></b></h3>
          <br />
          <p>PyPI, for me, is only used for one thing, storing my influence package documentation. To learn more about it, see the Projects tab under Python projects.</p>
          <br />
          <input type="button" onclick="window.open('https://pypi.org/project/influence/')" value="Go To PyPI Influence">
      </div>
  </div>
  <script>
  function expAcc(id){
    var panel = document.getElementById(id);
    if (panel.style.display === "block"){ panel.style.display = "none"; }
    else { panel.style.display = "block"; }
  }
  function expTab(id){
    var content = document.getElementById(id);
    var contents = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < contents.length; i++){
      contents[i].style.display = "none";
    }
    content.style.display = "block";
  }
  </script>
</body>
</html>
```

CSS

```css
*{
  box-sizing: border-box;
}
.topnav{
  background-color: darkblue;
  overflow: hidden;
}
.topnav a{
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover{
  background-color: #ddd;
  color: black;
}
.topnav a:active{
  background-color: #1ac42d;
  color: white;
}
.accordion{
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}
.active, .accordion:hover{
  background-color: #ccc;
}
.panel{
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}
.nav{
  margin-bottom: 1.5rem;
}
.timeline{
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
.timeline::after{
  content: '';
  position: absolute;
  width: 6px;
  background-color: #1d1f1d;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px
}
.container{
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%
}
.container::after{
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid black;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}
.left{
  left: 0;
}
.right{
  left: 50%;
}
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid #1d1f1d;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #1d1f1d;
}
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid #1d1f1d;
  border-width: 10px 10px 10px 0;
  border-color: transparent #1d1f1d transparent transparent;
}
.right::after {
  left: -16px;
}
.content {
  padding: 20px 30px;
  background-color: #1ac42d;
  position: relative;
  border-radius: 6px;
}
@media screen and (max-width: 600px) {
  .timeline::after {
    left: 31px;
  }
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }
  .left::after, .right::after {
    left: 15px;
  }
  .right {
    left: 0%;
  }
}
.tab {
  float: left;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  width: 30%;
  height: 300px;
}
.tab button {
  display: block;
  background-color: inherit;
  color: black;
  padding: 22px 16px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
}
.tab button:hover {
  background-color: #ddd;
}
.tab button.active {
  background-color: #ccc;
}
.tabcontent {
  float: left;
  padding: 0px 12px;
  border: 1px solid #ccc;
  width: 70%;
  border-left: none;
  height: 300px;
  display: none;
}
input[type="button"]{
  background-color: #1ac42d;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px
  cursor: pointer;
}
body{
  background-color: #1d1f1d;
  overflow-y: scroll;
}
```

# Discord Bot File

HTML
```html
<!DOCTYPE html>
<html>
<link rel="stylesheet" type="text/css" href="bot.css">
<head>
  <title>Neil G's Programming Website - SourceCode Bot</title>
    <script src="bot.js"></script>
</head>
<body>
  <img src="LOGO.jpg" alt="SC" style="height:48px; width:48px; float:left;">
  <div class="topnav">
    <a href="index.html">Home</a>
    <a href="projects.html">Projects & Repos</a>
    <a href="about.html">About</a>
    <a class="active" href="bot.html">Discord Bot</a>
    <a href="rawcode.html">Raw Code</a>
      <input type="submit" value="Submit" onclick="highlight();">
      <input type="text" placeholder="Search..." id="searchbar">
  </div>
  <center><h1 style="color: #1ac42d;"><u><b>SourceCode - A Utility Discord Bot</b></u></h1></center>
  <center><h3 style="color: #1ac42d;">Currently Playing On 5 Servers!</h3></center>
    <br />
    <center><img src="LOGO.jpg" height="150px" width="150px"></center>
    <br />
    <div>
    <h4 style="color: #1ac42d; padding-left: 28px">Links:</h4>
    <br />
    <center>
    <input type="button" onclick="window.open('https://discord.com/api/oauth2/authorize?client_id=715705992821735534&permissions=2147482871&scope=bot');" value="Preferred SourceCode Invite Link">
    <input type="button" onclick="window.open('https://discord.com/api/oauth2/authorize?client_id=715705992821735534&permissions=8&scope=bot');" value="Administrative SourceCode Invite Link">
    <input type="button" onclick="window.open('https://discord.gg/rHApaMm');" value="SourceCode Support Server">
    </center>
    <center>
        <p style="color: white;"><i>(Note That The Administrative Invite Link Gives SourceCode Admin Permissions. This Messes With Some Functions Like Channel Disabling)</i></p>
    </center>
    </div>
  <div>
      <br />
    <h4 style="color: #1ac42d; padding-left: 28px">Commands:</h4>
      <br />
    <center>
        <h5 style="color: #1ac42d;"><u>Information Commands</u></h5>
        <table>
            <tr>
                <th>Command Name</th>
                <th>Information</th>
                <th>Aliases</th>
            </tr>
            <tr>
                <td>serverinfo</td>
                <td>gets info about this server</td>
                <td>none</td>
            </tr>
            <tr>
                <td>roleinfo @role</td>
                <td>gets info on a role</td>
                <td>none</td>
            </tr>
            <tr>
                <td>botinfo</td>
                <td>gets info on SourceCode over all of its servers</td>
                <td>none</td>
            </tr>
            <tr>
                <td>statusinfo</td>
                <td>gets and explains the status of the bot found in botinfo</td>
                <td>none</td>
            </tr>
            <tr>
                <td>changelog</td>
                <td>gets an abridged version of a changelog in SourceCode Support server</td>
                <td>clog</td>
            </tr>
            <tr>
                <td>profile @person</td>
                <td>gets profile info on person</td>
                <td>none</td>
            </tr>
            <tr>
                <td>invite</td>
                <td>sends invite links for SourceCode and SourceCode Support</td>
                <td>none</td>
            </tr>
        </table>
    </center>
      <br />
      <center>
          <h5 style="color: #1ac42d;"><u>Gaming Commands</u></h5>
          <table>
              <tr>
                  <th>Command Name</th>
                  <th>Information</th>
                  <th>Aliases</th>
              </tr>
              <tr>
                  <td>rockpaperscissors</td>
                  <td>plays a game of rock paper scissors</td>
                  <td>rps</td>
              </tr>
              <tr>
                  <td>typingtest</td>
                  <td>sends a typing test and calculates your speed and accuracy</td>
                  <td>none</td>
              </tr>
          </table>
      </center>
      <br />
      <center>
          <h5 style="color: #1ac42d;"><u>Bot Work Commands</u></h5>
          <table>
              <tr>
                  <th>Command Name</th>
                  <th>Information</th>
                  <th>Aliases</th>
              </tr>
              <tr>
                  <td>suggest</td>
                  <td>sends a suggestion to SourceCode</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>report reportinfo</td>
                  <td>reports suspicious behavior with info reportinfo</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>config configs</td>
                  <td>configures SourceCode, use "config help" to see a help page</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>ping</td>
                  <td>gets the bot and api latency</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>help</td>
                  <td>sends a help page</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>bug</td>
                  <td>sends a bug report to SourceCode</td>
                  <td>none</td>
              </tr>
          </table>
      </center>
      <br />
      <center>
          <h5 style="color: #1ac42d;"><u>Web Scraping Commands</u></h5>
          <table>
              <tr>
                  <th>Command Name</th>
                  <th>Information</th>
                  <th>Aliases</th>
              </tr>
              <tr>
                  <td>wiki query</td>
                  <td>gets wiki results on query, quotations needed around query</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>translate lang text</td>
                  <td>translates text into language lang, use "translate help" for help</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>spellcheck check [WIP]</td>
                  <td>spellchecks check, quotations needed for multiple words</td>
                  <td>none</td>
              </tr>
          </table>
      </center>
      <br />
      <center>
          <h5 style="color: #1ac42d;"><u>Utility Commands</u></h5>
          <table>
              <tr>
                  <th>Command Name</th>
                  <th>Information</th>
                  <th>Aliases</th>
              </tr>
              <tr>
                  <td>evaluate eval</td>
                  <td>evaluates math expression eval, numbers only!</td>
                  <td>e</td>
              </tr>
              <tr>
                  <td>notes</td>
                  <td>gets your saved notes</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>addnote note</td>
                  <td>adds note note to your notes</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>removenote index</td>
                  <td>removes note and index, first note is index of 1</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>clearnotes</td>
                  <td>clears all of your notes</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>createlist title</td>
                  <td>creates a server-wide list with title title, quotations needed around title</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>addtolist item</td>
                  <td>adds item to list, does not check for duplicates, quotations needed around item</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>removefromlist item</td>
                  <td>removes item if found in list, quotations needed around item</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>starboard</td>
                  <td>shows this server's star leaderboard</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>convo</td>
                  <td>allows you to have a chat with SourceCode</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>poll question options</td>
                  <td>creates a poll for question with the given options, 10 option max, quotations needed around question and options</td>
                  <td>none</td>
              </tr>
              <tr>
                  <td>clear amount</td>
                  <td>clears message of amount, defaults to 10</td>
                  <td>none</td>
              </tr>
          </table>
      </center>
  </div>
    <br />
    <h4 style="color: #1ac42d; padding-left: 28px">History:</h4>
    <br />
    <div>
        <p style="color: white; margin-left: 50px; margin-right: 50px">Discord was a revolutionary platform for me! When I learned about bots and how they are these really cool applications that users design, I was blown away! Immediately I started work on SourceCode, with help from Dustie Bot co-founder ProNanigans! I designed and wrote all of the (currently) 2600 lines of code to what I think would be useful for Discord users! Now SourceCode is a multi-shard, multi-file system that helps people with their needs. The bot is still in production and running as of today!</p>
        <br />
        <center><input type="button" value="Dustie's Website" onclick="window.open('https://dustie.xyz')"></center>
    </div>
    <br />
    <center><p style="font-size: 3; color: white;">randomkiddo.github.io/bot.html was last updated on 08.21.2020 @ 11:25AM</p></center>
</body>
</html>
```

CSS

```css
.topnav{
  background-color: darkblue;
  overflow: hidden;
}
.topnav a{
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover{
  background-color: #ddd;
  color: black;
}
.topnav a:active{
  background-color: #1ac42d;
  color: white;
}
td{
    text-align: center;
}
a{
    color: #1ac42d;
    text-decoration: none;
}
table{
    width: 1000px;
    color: red;
    background-color: darkblue;
    border: 2px dashed red
}
input[type="button"]{
  background-color: #1ac42d;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px
  cursor: pointer;
}
input[type="text"]{
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  font-size: 17px;
}
input[type="submit"]{
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}
body{
  background-color: #1d1f1d;
}
```

JS

```javascript
function highlight(){
    var input = document.getElementById("searchbar").value;
    
}
```

# Raw Code File (A Little Inception Here XD)

HTML
```html
<!DOCTYPE html>
<html>
<link rel="stylesheet" type="text/css" href="rawcode.css">
<head>
  <title>Neil G's Programming Website - Raw Code</title>
    <script src="rawcode.js"></script>
</head>
<body>
  <img src="LOGO.jpg" alt="SC" style="height:48px; width:48px; float:left;">
  <div class="topnav">
    <a href="index.html">Home</a>
    <a class="active" href="projects.html">Projects & Repos</a>
    <a href="about.html">About</a>
    <a href="bot.html">Discord Bot</a>
    <a href="rawcode.html">Raw Code</a>
  </div>
    <br />
    <center><h1 style="color: #1ac42d;"><u><b>This Website's Raw Code!</b></u></h1></center>
    <p style="color: white;padding: 1em;">This is the full code for everything pertaining to this website! No syntax highlighting unfortunately, but you can still look through it if you wish. Note that this may not have been updated in a while, and things are bound to change in the future.</p>
    <br />
    <div style="background-color: white;">
    <object data="mdtohtml.html" type="text/html" height="18500" width="1415"></object>
    </div>
    <br />
    <div style="backgronud-color: #1d1f1d;">
        <br />
    <center><p style="font-size: 3; color: white;">randomkiddo.github.io/rawcode.html was last updated on 09.28.2020 @ 8:06PM</p></center>
        <br />
    </div>
</body>
</html>
```

CSS

```css
.topnav{
  background-color: darkblue;
  overflow: hidden;
}
.topnav a{
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover{
  background-color: #ddd;
  color: black;
}
.topnav a:active{
  background-color: #1ac42d;
  color: white;
}
td{
    text-align: center;
}
a{
    color: #1ac42d;
    text-decoration: none;
}
table{
    width: 1000px;
    color: red;
    background-color: darkblue;
    border: 2px dashed red
}
input[type="button"]{
  background-color: #1ac42d;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px
  cursor: pointer;
}
input[type="text"]{
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  font-size: 17px;
}
input[type="submit"]{
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}
body{
  background-color: #1d1f1d;
}
object{
    overflow: hidden;
    border: none;
}
```

JS

```javascript
var marked = require('marked');
var fs = require('fs');

var markdownFile = fs.readFileSync('rawcode.md', 'utf-8');
var markdown = marked(markdownFile);

fs.writeFileSync('/Users/firsttry/Documents/GitHub/RandomKiddo.github.io/mdtohtml.html', markdown);
```

No, I will not be putting this MD File or its corresponding HTML file here XD