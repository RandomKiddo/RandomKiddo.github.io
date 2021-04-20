function buffer(){
  var timeout = setTimeout(showPage, 3000);
}
function showPage(){
  document.getElementById("loader").style.display = "none";
  document.getElementById("buffer").style.display = "block";
}
function getSubscribers(link) {
  $.ajax({
    type: "POST",
    url: "subs_backend.py",
    data: { param: link },
    dataType: "text",
    success: function(response){
      var subs = document.getElementById("subs");
      subs.textContent = response.toString();
      console.log(response.toString());
    }
  });
}
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function scroll() {
  var button = document.getElementById("tpbtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
function loadDependencies() {
  window.onscroll = function() { scrollFunction(); };
}

$(window).on('beforeunload', function() {
  var c = confirm();
  if (c) {
    return true;
  } else {
    return false;
  }
});
