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
    var p = document.getElementsByTagName("p");
    
    //unhighlight all regions
    for (var i = 0; i < p.length; i++){
        var inner = p[i].innerHTML;
        
        while (inner.indexOf('<mark>') > -1){
            var indexStart = inner.indexOf('<mark>');
            var indexEnd = inner.indexOf('</mark>');
            
            inner = inner.substring(0, indexStart) + inner.substring(indexStart + 6, indexEnd) + inner.substring(indexEnd + 7);
        }
        
        p[i].innerHTML = inner;
    }
    
    //highlight key words
    for (var i = 0; i < p.length; i++){
        var content = p[i].value.toLowerCase();
        
        while (content.indexOf(input) > -1){
            var inner = p[i].innerHTML;
            var index = inner.indexOf(input);
            
            content = content.substring(index + input.length);
            
            inner = inner.substring(0, index) + '<mark>' + inner.substring(index, index + input.length) + '</mark>' + inner.substring(index + input.length);
            
            p[i].innerHTML = inner;
        }
    }
}