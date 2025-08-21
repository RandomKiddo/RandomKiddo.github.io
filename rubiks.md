---
layout: default
title: "Speedcubing"
---

<script src="https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js"></script>
<script>addBackToTop({
  diameter: 56,
  backgroundColor: 'rgb(106, 159, 181)',
  textColor: '#fff'
})</script>

<script
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
  type="text/javascript">
</script>

<script>
window.addEventListener("DOMContentLoaded", () => {
  // Date Different (In Days) Function
  function daysDiff(startDate) {
    let start = new Date(startDate);
    let end = new Date();
    let timeDiff = end - start;
    return Math.floor(timeDiff / (1000*3600*24));
  }

  // Addendum Date Function
  function addendumText(date) {
    let days = daysDiff(date);
    if (days < 7) {
      return "Recent break!";
    } else if (days >= 7 && days < 30) {
      return "A little stale.";
    } else if (days >= 30 && days < 100) {
      return "Yikes.";
    } else {
      return "Oh boy...";
    }
  }

  let datesInOrder = [
    '2025-08-21', // 2x2
    '2025-06-28', // 3x3
    '2025-07-29', // 3x3 OH
    '2025-07-25', // 4x4
    '2025-06-24', // Skewb
    '2025-07-17', // Clock
    '2025-07-29' // Square-1
  ];

  // Update Days Since Break
  document.getElementById("2").textContent = "" + daysDiff(datesInOrder[0]) + " Days";
  document.getElementById("3").textContent = "" + daysDiff(datesInOrder[1]) + " Days";
  document.getElementById("oh").textContent = "" + daysDiff(datesInOrder[2]) + "  Days";
  document.getElementById("4").textContent = "" + daysDiff(datesInOrder[3]) + " Days";
  document.getElementById("skewb").textContent = "" + daysDiff(datesInOrder[4]) + " Days";
  document.getElementById("clock").textContent = "" + daysDiff(datesInOrder[5]) + " Days";
  document.getElementById("sq1").textContent = "" + daysDiff(datesInOrder[6]) + " Days";

  // Update Addendums
  document.getElementById("2a").textContent = addendumText(datesInOrder[0]);
  document.getElementById("3a").textContent = addendumText(datesInOrder[1]);
  document.getElementById("oha").textContent = addendumText(datesInOrder[2]);
  document.getElementById("4a").textContent = addendumText(datesInOrder[3]);
  document.getElementById("skewba").textContent = addendumText(datesInOrder[4]);
  document.getElementById("clocka").textContent = addendumText(datesInOrder[5]);
  document.getElementById("sq1a").textContent = addendumText(datesInOrder[6]);

  // Updated Date Of Break
  document.getElementById("2d").textContent = datesInOrder[0];
  document.getElementById("3d").textContent = datesInOrder[1];
  document.getElementById("ohd").textContent = datesInOrder[2];
  document.getElementById("4d").textContent = datesInOrder[3];
  document.getElementById("skewbd").textContent = datesInOrder[4];
  document.getElementById("clockd").textContent = datesInOrder[5];
  document.getElementById("sq1d").textContent = datesInOrder[6];
});
</script>


<h1 class="page-title">Speedcubing</h1>

The (slightly hidden) landing page about my speedcubing! 

<u><i>Times:</i></u>

While I solve multiple different kinds of Rubik's cubes, I only speedsolve a few specific events. More digits of precision are known, but for formatting reasons, the results shown are rounded to two decimal places. Some results are shown here that are *not* frequently speedsolved, but still have recorded times. Dashes indicate no extended solving session has occurred to record an average, or that an average has yet to be reached. I also compete in weekly online competitions [Speedsolving.com](https://www.speedsolving.com/competition/showPersonalRecords.php?showRecords=11738#resultsHead), but some PBs are done casually outside of these competitions. I lost my old account for these competitions, so that is a newer one. Last updated on 07/29/2025.

| Cube | PB (s) | AO5 (s) | AO5 Times (s)<sup>&dagger;</sup> | AO12 (s) |
| ---- | ---- | ------ | ---------- | ------------- | ------- |
| 2x2 | 2.46 | 4.12 | (5.63) 3.73 4.80 3.83 (3.33) | 4.53 |
| 3x3 | 10.27 | 12.53 | 14.80 11.70 11.09 (17.25) (10.83) | <abbr title="11.43 13.66 15.77 14.80 11.70 11.09 (17.25) (10.83) 15.61 14.36 13.14 10.90">13.24</abbr> |
| 3x3 OH | 27.34 | 32.46 | 31.96 (31.52) (33.94) 31.60 33.82 | <center>-</center> |
| 4x4 | 1:02.72 | 1:12.69 | 1:18 (1:22) 1:09 (1:09) 1:11 | 1:17.12 |
| Skewb |  8.06 | 11.46 | (10.15) (18.06) 11.46 12.11 10.82 | 14.14 |
| Clock | 13.27 | 16.65 | 16.44 (13.27) (18.35) 15.46 18.05 |18.22 | 
| Square-1 | 43.72 | 54.33 | (1:02) 59.53 48.60 (43.72) 54.85 | <center>-</center> |


<sup>&dagger;</sup> For calculation of averages, such as the average-of-5 (AO5) or average-of-12 (AO12), the standard World Cube Association (WCA) guidelines are used. As such, the average is calculated by excluding the fastest and slowest times, and then averaging the remaining solve times. The parenthetical terms are the ones excluded. For more information, see item 9f8 of the [WCA regulations](https://www.worldcubeassociation.org/regulations/). For a generic $$N$$ average, the formula is:

$$\langle t_N\rangle = \frac{\sum_{j=1}^{N} t_j - \min{(t_j)} - \max{(t_j)}}{N-2}$$

<u><i>Mains:</i></u> <br />

| Cube | Main | Release Yr. | Status |
| ---- | ---- | ----------- | ------ |
| 2x2 | QiYi MS | 2020 | *Discontinued* |
| 3x3 | Angstrom MoYu Weilong WR M Ferrocore | 2025 | [Available](https://www.thecubicle.com/products/angstrom-weilong-ferrocore-3x3-special-edition-wrm-v10?_pos=1&_psq=angstrom+ferroco&_ss=e&_v=1.0) |
| 3x3 OH | Gan 354 M | 2018 | *Discontinued* |
| 4x4 | MoYu AoSu v7 Double-Track UV | 2025 | [Available](https://www.thecubicle.com/products/moyu-aosu-v7-4x4-double-track-uv-special-edition?f=versions) |
| Skewb | X-Man Wingy Magnetic Concave | 2018 | *Discontinued* |
| Clock | QiYi Magnetic Clock Green | 2025 | [Available](https://www.thecubicle.com/products/qiyi-magnetic-clock-green-limited-edition?_pos=5&_psq=cloc&_ss=e&_v=1.0) |
| Square-1 | YJ MGC Sq-1 Black | 2021 | [Available](https://www.thecubicle.com/products/yj-mgc-sq-1-fully-magnetic?_pos=1&_psq=yj+mgc+sq&_ss=e&_v=1.0) |

<u><i>Methods:</i></u>

| Cube | Solve Method |
| ---- | -------------- |
| 2x2 | Ortega. |
| 3x3 | CFOP with Intuitive F2L, 2-Look OLL, Full PLL. Learning Full OLL. |
| 3x3 OH | CFOP with Intuitive F2L, 2-Look OLL, Simplified PLL. |
| 4x4 | Yau. |
| Skewb | Sarah's Method -- Beginner's Variation. |
| Clock | Beginner's Method. Learning 7-Simul Flip. |
| Square-1 | DG's Beginner's Method. |

<u><i>Other Cubes:</i><u>

I don't necessarily try to speedsolve these cubes (or at least I don't as much anymore), but I can solve these cubes. These are my mains and more info:

| Cube | Main | Release Yr. | Status | Solve Method |
| ---- | ---- | ----------- | ------ | ----------- |
| 5x5 | QiYi WuShuang | 2018 | *Discontinued* | Reduction |
| 6x6 | MFJS MeiLong | 2019 | [Available](https://www.thecubicle.com/collections/6x6-speed-cubes/products/mfjs-meilong-6x6) | Reduction |
| Pyraminx | MoYu Magnetic Pyraminx | 2018 | *Discontinued* | Beginner's |

<details closed>
  <summary><u><i>A Note on Jargon</i></u> (Click to Expand)</summary>
  <br />
  Much like other hobbies or technical skills, speedcubing has a lot of jargon. Below is a list of jargon terms and their explanations used on this page, for those interested: <br /> <br />
  <ul>
    <li>AOX: "Average-of-X", i.e. AO5 is "average-of-5". The average over how many solves.</li>
    <li>OH: "One-handed", i.e. 3x3 OH is "3x3 one-handed".</li>
    <li>Mains: The main speedcubes, or the go-to speedcubes, one uses for speedsolving.</li>
    <li>Angstrom: A specific lubing and setup of a cube provided by <a href="https://thecubicle.com" target="_blank">thecubicle.com</a>, aimed at control and stability.</li>
    <li>M: "Magnetic", i.e. the Gan 354 M is the magnetic version of a Gan 354 (nowadays the M-version is the only version of a cube). Magnets in a magnetic cube are used for cube alignment, typically being drilled into the pieces themselves. </li>
    <li>Ferrocore: Refers to a special core of a cube being made out of metal (typically iron or an iron alloy), adding weight and stability.</li>
    <li>Mag-Lev: "Magnetic levitation". Unlike the magnets in a M-version cube, which are used for alignment and are on pieces, mag-lev systems replace the traditional springs in the <i>core</i> with repelling magnets, reducing friction and increasing smoothness. Thus, mag-lev systems and magnetic versions are not mutually exclusive; A cube can be magnetic only, mag-lev only (rare), or both.</li>
    <li>Ortega, Reduction, Yau, Sarah's Method, Beginner's Method, 7-Simul Flip, etc.: These are all methods for solving different puzzles. These are typically named after their creator (Ortega, Yau, or Sarah's Method), or they indicate how a cube is solved (Reduction, Beginner's Method, or 7-Simul Flip).</li>
    <li>CFOP, F2L, OLL, PLL: These are also methods for solving, specifically for n-by-n cubes, although most commonly used for 3x3 solving. CFOP stands for "Cross-F2L-OLL-PLL", with F2L standing for the first 2 layers, OLL for orientation of the last layer, and PLL for permutation of the last layer. Intuitive F2L indicates little or no algorithms are used when solving the first 2 layers, and thus done intuitively.</li> 
    <li>QiYi, MoYu, Gan, X-Man, LingAo, MFJS, YJ, etc.: All cube companies outside of the well-known "Rubik's".</li>
    <li>UV: UV coating, a glossy, clear layer cured using UV light applied to the surface of a cube typically to improve grip and scratch resistance.</li>
    <li>Single-, Double-, Triple-Track: Refers to the internal magnet system for larger cubes (4x4 and up), where the internal alignment magnets have multiple "tracks". Basically the number of tracks represents the number of magnets aligning each layer (single is one set of magnets, double is two, etc.).</li>
  </ul>
</details>
<details closed>
  <summary><u><i>Days Since PB Breaks</i></u> (Click to Expand)</summary>
  <br />
  Below is a table laying out events and the amount of days since the PB was last broken. See the "Times" section to see the current records. I actually do not track time since breaking averages, as averages are actually broken more often (practice and consistency yields more stable, faster times than a singular fast solve). <br /> <br />

   <table>
  <tr>
    <th>Cube</th>
    <th>Time Since Break</th>
    <th>Broken On</th>
    <th>Addendum<sup>&dagger;</sup></th>
  </tr>
  <tr>
    <td>2x2</td>
    <td id="2">2</td>
    <td id="2d">2d</td>
    <td id="2a">2a</td>
  </tr>
  <tr>
    <td>3x3</td>
    <td id="3">3</td>
    <td id="3d">3d</td>
    <td id="3a">3a</td>
  </tr>
  <tr>
    <td>3x3 OH</td>
    <td id="oh">oh</td>
    <td id="ohd">ohd</td>
    <td id="oha">oha</td>
  </tr>
  <tr>
    <td>4x4</td>
    <td id="4">4</td>
    <td id="4d">4d</td>
    <td id="4a">4a</td>
  </tr>
  <tr>
    <td>Skewb</td>
    <td id="skewb">skewb</td>
    <td id="skewbd">skewbd</td>
    <td id="skewba">skewba</td>
  </tr>
  <tr>
    <td>Clock</td>
    <td id="clock">clock</td>
    <td id="clockd">clockd</td>
    <td id="clocka">clocka</td>
  </tr>
  <tr>
    <td>Square-1</td>
    <td id="sq1">sq1</td>
    <td id="sq1d">sq1d</td>
    <td id="sq1a">sq1a</td>
  </tr>
</table> 

<sup>&dagger;</sup> This addendum is auto-generated using JavaScript (in fact, the entire table is populated using JavaScript). The addendum is just a short statement about the status of the time since breaking, usually displaying if a break is recent, a little stale, or if it's really been a long time since a break.

</details>
<br />
Return to the <a href="/about/index.html">About page</a>.

{% include footer.md %}