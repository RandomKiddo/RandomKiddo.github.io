function openConnect(connection, element, color){
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++){
        tablinks[i].style.backgroundColor = "";
    }
    
    document.getElementById(connection).style.display = "block";
    element.style.backgroundColor = color;
}
function buffer(){
    var timeout = setTimeout(showPage, 3000); 
}
function showPage(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("buffer").style.display = "block";
}