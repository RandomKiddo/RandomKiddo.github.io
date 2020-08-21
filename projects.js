function expAcc(id){
    var panel = document.getElementById(id);
            
    if (panel.style.display === "block"){
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}
function highlight(){
    var input = document.getElementById("searchbar").value.toLowerCase();
    var elems = document.getElementsByTagName("p");
    var h3 = document.getElementsByTagName("h3");
    var h5 = document.getElementsByTagName("h5");
    var h1 = document.getElementsByTagName("h1");
    
    for (var i = 0; i < elems.length; i++){
        var content = elems[i].textContent.toLowerCase();
        
        if (content.indexOf(input) > -1){
            var inner = elems[i].innerHTML;
            
            elems[i].innerHTML = '<mark>' + inner + '</mark>'
        } else if (elems[i].innerHTML.indexOf('mark') > -1){
            var postmark = elems[i].innerHTML.substring(6);
            var dualmark = postmark.substring(0, postmark.length - 7);
            
            elems[i].innerHTML = dualmark;
        }
    }
    
    for (var i = 0; i < h3.length; i++){
        var content = h3[i].textContent.toLowerCase();
        
        if (content.indexOf(input) > -1){
            var inner = h3[i].innerHTML;
            
            h3[i].innerHTML = '<mark>' + inner + '</mark>'
        } else if (h3[i].innerHTML.indexOf('mark') > -1){
            var postmark = h3[i].innerHTML.substring(6);
            var dualmark = postmark.substring(0, postmark.length - 7);
            
            h3[i].innerHTML = dualmark;
        }
    }
    
    for (var i = 0; i < h5.length; i++){
        var content = h5[i].textContent.toLowerCase();
        
        if (content.indexOf(input) > -1){
            var inner = h5[i].innerHTML;
            
            h5[i].innerHTML = '<mark>' + inner + '</mark>'
        } else if (h5[i].innerHTML.indexOf('mark') > -1){
            var postmark = h5[i].innerHTML.substring(6);
            var dualmark = postmark.substring(0, postmark.length - 7);
            
            h5[i].innerHTML = dualmark;
        }
    }
    
    for (var i = 0; i < h1.length; i++){
        var content = h1[i].textContent.toLowerCase();
        
        if (content.indexOf(input) > -1){
            var inner = h1[i].innerHTML;
            
            h1[i].innerHTML = '<mark>' + inner + '</mark>'
        } else if (h1[i].innerHTML.indexOf('mark') > -1){
            var postmark = h1[i].innerHTML.substring(6);
            var dualmark = postmark.substring(0, postmark.length - 7);
            
            h1[i].innerHTML = dualmark;
        }
    }
}