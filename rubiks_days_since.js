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
      return "Yikes";
    } else {
      return "Oh boy...";
    }
  }

  let datesInOrder = [
    '2025-06-29', // 2x2
    '2025-06-28', // 3x3
    '2025-06-30', // 3x3 OH
    '2025-06-30', // 4x4
    '2025-06-24', // Skewb
    '2025-07-17', // Clock
    '2025-07-17' // Square-1
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