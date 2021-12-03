function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

$(function() {
   $("img.lazy").lazyload({
       effect : "fadeIn"
       sleep(3000)
       document.getElementById("imgloader").style.display = "none";   
   });

}); 

  


