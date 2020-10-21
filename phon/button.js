let butt = document.getElementById('fonger1');
var hideCheck = true;
let butt1 = document.getElementById('fonger2');
var hideCheck1 = true;

butt.onclick = function(){
    if (hideCheck == true){
    document.getElementById("hide").style.display = "none";
    hideCheck = false;
    }
    else{
        document.getElementById("hide").style.display = "block";
        hideCheck = true;
    }
} 
butt1.onclick = function(){
    if (hideCheck1 == true){
    document.getElementById("hide1").style.display = "none";
    hideCheck1 = false;
    }
    else{
        document.getElementById("hide1").style.display = "block";
        hideCheck1 = true;
    }
} 
