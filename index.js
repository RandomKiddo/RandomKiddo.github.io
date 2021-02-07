function buffer(){
    var timeout = setTimeout(showPage, 3000); 
}
function showPage(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("buffer").style.display = "block";
}