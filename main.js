canvas = document.getElementById("myCanvas");
color = "blue";
width = 2;
ctx = canvas.getContext("2d");
mouse_event = " ";
var lastX,lastY,current_X,current_Y;
var width2 = screen.width;
var new_height = screen.height -300;
var new_width = screen.width -70;
if(width2<992){
    canvas.width=new_width;
    canvas.height=new_height;
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    console.log("touchstart");
    lastX=e.touches[0].clientX - canvas.offsetLeft;
    lastY=e.touches[0].clientY - canvas.offsetTop;
}



canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_X = e.touches[0].clientX - canvas.offsetLeft;
    current_Y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        ctx.moveTo(lastX,lastY);

        ctx.lineTo(current_X,current_Y);
    
    lastX = current_X;
    lastY = current_Y;
}