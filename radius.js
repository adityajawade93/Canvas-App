
var minRadius = 0.5,
    maxRadius = 100,
    interval = 5,
    defaultRadius = 20;


var setRadius = function(newRadius){
    if(newRadius < minRadius)
        newRadius = minRadius;
    else if(newRadius > maxRadius)
        newRadius = maxRadius;
    radius = newRadius;
    ctx.lineWidth = radius*2; 
    radval.innerHTML = newRadius;       
}

incrad.addEventListener("click",function(){
    var newRadius = radius;
    if(newRadius == minRadius)
        newRadius = 0;
    newRadius += interval;
    setRadius(newRadius);
});

decrad.addEventListener("click",function(){
    var newRadius = radius;
    newRadius -= interval;
    setRadius(newRadius);
});