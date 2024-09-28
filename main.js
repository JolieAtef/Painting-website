const canvas = document.querySelector("#canvas");
const btn_start = document.querySelector(".start");
const section_start = document.querySelector(".start-sec")
const btn_download = document.querySelector(".Download")
const btn_bg_color=document.querySelector(".bg-color")
const btn_erase = document.querySelector(".erase")
const btn_restart= document.querySelector(".restart")
const btn_inc_size=document.querySelector(".size-inc")
const btn_dec_size=document.querySelector(".size-dec")
const size_count =document.querySelector(".size-count")
const colorPicker = document.getElementById('colorPicker');
const ctx = canvas.getContext("2d");
const [b_red , b_orange, b_yellow,b_green , b_blue , b_purple , b_pink , b_brown ,b_black ,b_white]= document.querySelector(".colors .container").children;


let isDrawing = false;
let x = 0;
let y = 0;
let color ="black";
let size = 5 ;
size_count.textContent=size;
ctxSet();
console.log(ctx)


//start painting
btn_start.addEventListener("click",async()=>{
  section_start.classList.add("go-up");
})


/////////////////tools////////////////////

// Fill the entire canvas with the fill color
btn_bg_color.addEventListener("click", ()=>{
   ctx.fillStyle = color;
   ctx.fillRect(0, 0, canvas.width, canvas.height);
})

btn_erase.addEventListener("click",()=>{
  color="white";
  ctxSet();
})

btn_restart.addEventListener("click", ()=>{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})


colorPicker.addEventListener('input', function() {
  color = colorPicker.value;
  ctxSet();
});

//line size 
btn_inc_size.addEventListener("click", ()=>{
  size+=4;
  size_count.textContent=size;
  ctxSet();

})

btn_dec_size.addEventListener("click", ()=>{
  size-=4;
  if (size < 1){
    size=1;
  }
  size_count.textContent=size;
  ctxSet();
})



//colors
b_red.addEventListener("click",()=>{
    color="red";
    ctxSet();
})
b_orange.addEventListener("click",()=>{
    color="orange";
    ctxSet();
})
b_yellow.addEventListener("click",()=>{
    color="yellow";
    ctxSet();
})
b_green.addEventListener("click",()=>{
    color="green";
    ctxSet();
})
b_blue.addEventListener("click",()=>{
    color="blue";
    ctxSet();
})
b_purple.addEventListener("click",()=>{
    color="purple";
    ctxSet();
})
b_pink.addEventListener("click",()=>{
    color="pink";
    ctxSet();
})
b_brown.addEventListener("click",()=>{
    color="brown";
    ctxSet();
})
b_black.addEventListener("click",()=>{
    color="black";
    ctxSet();
})
b_white.addEventListener("click",()=>{
    color="white";
    ctxSet();
})


//drawing in canvas
canvas.addEventListener("mousedown", (e) => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
  });

  canvas.addEventListener("mouseup", (e) => {
    isDrawing = false;
  });
  
  canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    ctx.moveTo(x, y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    x = e.offsetX;
    y = e.offsetY; 
  });


  //window resize
  window.addEventListener("DOMContentLoaded", () => {
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
    ctxSet();
  });
  
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
    ctxSet();
  });


  // Downloading
   btn_download.addEventListener("click", (e) => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "canvas-img.png";
    a.click();
  });
 
// canvas set color & size for each line
  function ctxSet() {
    ctx.beginPath();
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
  }

  

  

