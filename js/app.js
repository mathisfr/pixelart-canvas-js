
document.addEventListener('DOMContentLoaded', function(event) {
  // fonction draw qui dessine tout
    draw(10);

})

// fonction draw qui dessine tout
function draw(newSizePixel){
  // configuration du canvas
  var canvas = document.getElementById('pixelart');
  if(canvas.getContext){
    var ctx = canvas.getContext('2d');
    var arrayPixels = []
    // Configuration de la logique du quadrillage du canvas
    var sizePixelArt = 600;
    var sizePixel = newSizePixel;
    var sizeArea = sizePixelArt/sizePixel;
    canvas.height = sizePixelArt;
    canvas.width = sizePixelArt;
    // Dessine le quadrillage
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < sizeArea; i++){
      arrayPixels[i] = new Array();
      for(var j = 0; j < sizeArea; j++){
        // Dessine les pixels
        arrayPixels[i][j] = new Pixel(sizePixel, i*sizePixel, j*sizePixel, ctx);
        arrayPixels[i][j].makePixel();
      }
    }
    console.table(arrayPixels.length);

    canvas.addEventListener('mousedown', function(evt){
      var mousePos = getMousePos(canvas, evt);
      arrayPixels.forEach(element =>{
        element.forEach(pix=>{
          if(pix.posY > (mousePos.y-(sizePixel)) && pix.posY < mousePos.y){
            if(pix.posX > (mousePos.x-(sizePixel)) && pix.posX < mousePos.x){
              pix.drawPixel()
              console.log("Hit :"+pix.posX+"x ;"+pix.posY+"y");
              console.log("Mouse :"+mousePos.y+"x ;"+mousePos.x+"y");
            }
          }
        })
      })
      //console.log(mousePos.x+ "," + mousePos.y);
    })
  }
}  

//Get Mouse Position
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
  };
}

// Permet de definier la taille des pixels
function slider(e){
  sizePixel = e.value;
  draw(sizePixel);
}

// La class pixel
class Pixel{
  #size = 0;
  #color = 'rgb(255, 255, 255)';
  posX = 0;
  posY = 0;
  #ctx = null;

  constructor(size, posX, posY, ctx){
    this.size = size;
    this.posX = posX,
    this.posY = posY
    this.ctx = ctx
  }

  makePixel(){
    this.ctx.strokeStyle = this.color;
    this.ctx.strokeRect(this.posX,this.posY,this.size,this.size);
  }

  drawPixel(){
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.posX,this.posY,this.size,this.size);
  }
}