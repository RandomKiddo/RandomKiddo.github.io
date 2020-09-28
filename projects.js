function expAcc(id){
    var panel = document.getElementById(id);
            
    if (panel.style.display === "block"){
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}
class Highlight{
    constructor(){
        this._input = document.getElementById("searchbar").textContent.toLowerCase();
        this._p = document.getElementsByTagName("p");
        this._flooredP = floorAll(this._p);
    }
    get input(){
        return this._input;
    }
    get p(){
        return this._p;
    }
    run(){
        revertHighlighting();
        highlight();
    }
    floorAll(p){
    	var floored = [];
        
    	for (var i = 0; i < p.length; i++){
        	floored.append(p[i].toString().toLowerCase());
        }
        
        return floored;
    }
    revertHighlighting(){
        for (var i = 0; i < this._p.length; i++){
            var inner = this._p[i].innerHTML;
            
            inner = inner.replaceAll('<mark>', '');
            inner = inner.replaceAll('</mark>', '');
            
            this._p[i].innerHTML = inner;
        }
    }
    contains(){
        var array = [];
        
        for (var i = 0; i < this._flooredP.length; i++){
            if (this._flooredP[i].indexOf(this._input) > -1){
                array.append(this._p[i]);
            }
        }
        
        return array;
    }
    instances(){
        var array = contains();
        var map = new Map();
        
        for (var i = 0; i < array.length; i++){
            map.set(array[i], amountFound(array[i]));
        }
        
        return map;
    }
    amountFound(string){
        var amount = 0;
        var copy = string.toLowerCase();
        
        while (copy.indexOf(this._input) > -1){
            var index = copy.indexOf(this._input);
            copy = copy.substring(index + this._input.length);
            amount++;
        }
        
        return amount;
    }
    highlight(){
        var instances = instances();
        
        instances.forEach((key, value) => {
            var indices = findIndices(key, value);
            addMarkTag(key, indices);
        });
    }
    findIndices(key, value){
    	var found = 0;
        var indices = [];
        var copy = key.toLowerCase();
        
        while (found < value){
        	var index = copy.indexOf(this._input);
            
            indices.append(index);
            found++;
            
            copy = copy.substring(index + this._input.length);
        }
        
        return indices;
    }
    addMarkTag(key, indices){
    	var added = 0;
        var inner = key.innerHTML;
        
        while (added < indices.length){
            var index = indices[added];
            
            inner = inner.substring(0, index) + '<mark>' + inner.substring(index, index + this._input.length) + '</mark>' + inner.substring(index + this._input.length);
            
            key.innerHTML = inner;
            
            added++;
        }
    }
}