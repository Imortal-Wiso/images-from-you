function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
        
if (sleep(1000) {
    document.getElementById("lazy").style.display = "visable"
    sleep(500)
    document.getElementById("imgloader").style.display = "none";      
}

