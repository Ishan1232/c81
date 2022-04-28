canvas = document.getElementById("my_canvas");
color = "red";

ctx.beginPath();
ctx.strokeStyle= "grey";
ctx.linewidth= 5;
ctx.rect(150, 143, 430, 200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.linewidth= 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.linewidth= 5;
ctx.arc(300, 260, 40, 0, 2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.linewidth= 5;
ctx.arc(330, 310, 40, 0, 2 * Math.PI)
ctx.stroke();




