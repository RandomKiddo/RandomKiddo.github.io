function open(evt, name){
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsbyClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}
