
document.addEventListener('DOMContentLoaded', function(event) {
    draw(10);
})

function draw(newSizePixel){
  var canvas = document.getElementById('pixelart');
  if(canvas.getContext){
    var ctx = canvas.getContext('2d');
    var sizePixelArt = 600;
    var sizePixel = newSizePixel;
    var sizeArea = sizePixelArt/sizePixel;
    canvas.height = sizePixelArt;
    canvas.width = sizePixelArt;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < sizeArea; i++){
      for(var j = 0; j < sizeArea; j++){
        ctx.strokeStyle = 'rgb(180, 180, 180)';
        ctx.strokeRect(i*sizePixel,j*sizePixel,sizePixel,sizePixel);
      }
    }
  }
}  

function slider(e){
  sizePixel = e.value;
  draw(sizePixel);
}