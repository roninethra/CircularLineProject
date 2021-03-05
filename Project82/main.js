var color= "red";
var width= 3;
var radius= 50;

var last_x_position, last_y_position;
var current_x_position, current_y_position;
var mouseevent
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", mousedownfunction);
canvas.addEventListener("mouseup", mouseupfunction);
canvas.addEventListener("mouseleave", mouseleavefunction);
canvas.addEventListener("mousemove", mousemovefunction);
function mousedownfunction(e){
color= document.getElementById("ColorInput").value;
width= document.getElementById("WidthInput").value;
radius= document.getElementById("RadiusInput").value;

    mouseevent = "mousedown";
}

function mouseupfunction(e){
mouseevent = "mouseup";
}
function mouseleavefunction(e){
mouseevent = "mouseleave";
}

function mousemovefunction(e){
current_x_position = e.clientX - canvas.offsetLeft;
current_y_position = e.clientY - canvas.offsetTop;

if(mouseevent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth = width;

console.log("Last x and y coordinates = ");
console.log("x = "+ last_x_position + " y= " + last_y_position);
ctx.moveTo(last_x_position, last_y_position);
       
        console.log("Current x and y coordinates = ");
console.log("x = "+ current_x_position + " y= " + current_y_position);
ctx.arcTo(current_x_position, current_y_position, radius, 0, 2 * Math.PI);
ctx.stroke();
}
last_x_position = current_x_position;
last_y_position = current_y_position;


}
