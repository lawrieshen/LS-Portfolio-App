const coords = {x:0, y:0};
const circles = document.querySelectorAll(".circle");

const colors = [
  "#77c3ec", "#7dc6ec", "#83c9ed", "#89cced", "#8fcfee", "#95d1ee", "#9ad4ef", "#a0d7ef", "#a6daf0", "#acddf1", "#b2dff1", "#b8e2f2"];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
  
}

function animateCircles() {
  offset = 12;
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - offset + "px";
    circle.style.top = y - offset + "px";
    
    circle.style.scale = (circles.length - index)/ circles.length;
    
    circle.x = x;
    circle.y = y;
    
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
    
  });
  
  requestAnimationFrame(animateCircles);
}

animateCircles();