---
layout: default
title: "Speedcubing"
---

<script src="https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js"></script>
<script>
addBackToTop({
  diameter: 56,
  backgroundColor: '#3d6f75',
  textColor: 'rgb(225, 221, 214)'
})
</script> 

<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">

<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/plug-ins/2.3.7/sorting/any-number.js"></script>

<script>
function loadCubeTable() {
  // Check if the table exists on the current page
  if ($('#cube-table').length) {
    $('#cube-table').DataTable({
      paging: false,
      searching: false,
      info: false,
      columnDefs: [
        { type: "any-number", targets: [1, 2] }, 
        { orderable: false, targets: [3, 4] }
      ]
    });
  }
}

// Handle Hydejack's page transitions
document.addEventListener('hydejack:mount', loadCubeTable);

// Initial load
$(document).ready(loadCubeTable);
</script>

<style>
/* Center the entire DataTable container */
.dataTables_wrapper {
  margin-left: auto;
  margin-right: auto;
  width: 90%; /* Adjust this percentage as needed */
  max-width: 1000px; /* Prevents it from getting too wide on desktop */
}

/* Ensure the table itself takes up the full width of that centered container */
table#cube-table {
  width: 100% !important;
  margin: 0 auto;
}

/* Style the header row */
#cube-table thead th {
  background-color: #3d6f75; /* Change this to your preferred hex color */
  color: 'rgb(225, 221, 214)';            /* Text color (white) */
  border-bottom: 2px solid #1a252f;
  text-align: center;        /* Centers the text inside the header cells */
}

/* Optional: Change the color when you hover over a sortable header */
#cube-table thead th:hover {
  background-color: #34495e;
}

table.dataTable.no-footer {
  border-bottom: none !important;
}

table.dataTable thead th, 
table.dataTable thead td {
  border-bottom: none !important;
}
</style>

The (slightly hidden) landing page about my speedcubing! 

**Times**

While I solve multiple different kinds of Rubik's cubes, I only speedsolve a few specific events. More digits of precision are known, but for formatting reasons, the results shown are rounded to two decimal places. Some results are shown here that are *not* frequently speedsolved, but still have recorded times. Dashes indicate no extended solving session has occurred to record an average, or that an average has yet to be reached. I also compete in weekly online competitions [Speedsolving.com](https://www.speedsolving.com/competition/showPersonalRecords.php?showRecords=11738#resultsHead), but some PBs are done casually outside of these competitions. I lost my old account for these competitions, so that is a newer one. Last updated on 07/29/2025.

| Cube | PB (s) | AO5 (s) | AO5 Times (s)<sup>&dagger;</sup> | AO12 (s) |
| ---- | ---- | ------ | ---------- | ------------- | ------- |
| 2x2 | 2.46 | 4.12 | (5.63) 3.73 4.80 3.83 (3.33) | 4.53 |
| 3x3 | 10.27 | 12.53 | 14.80 11.70 11.09 (17.25) (10.83) | <abbr title="11.43 13.66 15.77 14.80 11.70 11.09 (17.25) (10.83) 15.61 14.36 13.14 10.90">13.24</abbr> |
| 3x3 OH | 27.34 | 32.46 | 31.96 (31.52) (33.94) 31.60 33.82 | <center>-</center> |
| 4x4 | 62.72 | 72.69| 1:18 (1:22) 1:09 (1:09) 1:11 | 1:17.12 |
| Skewb |  8.06 | 11.46 | (10.15) (18.06) 11.46 12.11 10.82 | 14.14 |
| Clock | 13.27 | 16.65 | 16.44 (13.27) (18.35) 15.46 18.05 |18.22 | 
| Square-1 | 43.72 | 54.33 | (1:02) 59.53 48.60 (43.72) 54.85 | <center>-</center> |
{: #cube-table }

<br />

<sup>&dagger;</sup> For calculation of averages, such as the average-of-5 (AO5) or average-of-12 (AO12), the standard World Cube Association (WCA) guidelines are used. As such, the average is calculated by excluding the fastest and slowest times, and then averaging the remaining solve times. The parenthetical terms are the ones excluded. For more information, see item 9f8 of the [WCA regulations](https://www.worldcubeassociation.org/regulations/). For a generic $$N$$ average, the formula is:

$$\langle t_N\rangle = \frac{\sum_{j=1}^{N} t_j - \min{(t_j)} - \max{(t_j)}}{N-2}$$
