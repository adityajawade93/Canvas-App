    var c = document.getElementById("canvas");
            var ctx = c.getContext("2d");
            var draggable = false;
            var color = "black";
            c.width = window.innerWidth;
            c.height = window.innerHeight;
            radius = 10;
            ctx.lineWidth = radius*2;
            ctx.strokeStyle = "black";
            var putPoint = function(e) {
                
                if(draggable){
                    ctx.lineTo(e.clientX,e.clientY);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(e.clientX,e.clientY,radius, 0, 2 * Math.PI);
                    ctx.closePath();
                    ctx.fillStyle = color;
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(e.clientX,e.clientY);
                }
            }//end putPoint

            var buttonDown = function(e) {
                draggable = true;
                putPoint(e);
            }//end buttonDown

            var buttonUp = function(){
                draggable = false;
                ctx.beginPath();
            }//end buttonUp

            var changeColor = function(clr){
                //var colors = document.getElementById("color");
                //color = colors.options[colors.selectedIndex].value;
                //color = colors.nodeValue;
                color = clr;
                ctx.strokeStyle = color;
            }

            var clearCanvas = function(){
                ctx.clearRect(0, 0, c.width, c.height);
            }

            document.addEventListener('mousedown',buttonDown);
            document.addEventListener("mousemove",putPoint);
            document.addEventListener('mouseup',buttonUp);
            clrbtn.addEventListener("click",clearCanvas);
