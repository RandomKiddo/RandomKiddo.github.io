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

var evt = document.createEvent('MouseEvents')
evt.initMouseEvent('mousedown', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
document.getElementById("defaultOpen").dispatchEvent(evt)