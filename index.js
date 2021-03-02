function buffer(){
    var timeout = setTimeout(showPage, 3000); 
}
function showPage(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("buffer").style.display = "block";
}
function countdown(date){
    var countdownDate = new Date(date).getTime();
    var x = setInterval(function(){
        var now = new Date().getTime();
        var distance = countdownDate - now;
        var days = Math.floor(distance / (1000*60*60*24));
        var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60))
        var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
        var seconds = Math.floor((distance % (1000*60)) / 1000);
        document.getElementById("counter").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0){
            clearInterval(x);
            document.getElementById("counter").innerHTML = "EXPIRED";
        }
    }, 1000);
}
function getLatestVideo() {
    $.ajax({
        type: "POST",
        url: "subs_backend.py",
        data { URL: 'https://www.youtube.com/channel/UCqORid7DP0chFER0SkjCb1A' }
    }).done(function(callback) { 
        var subs = document.getElementById("subs");
        subs.textContent = callback.toString();
        console.log(callback.toString());
    });
}