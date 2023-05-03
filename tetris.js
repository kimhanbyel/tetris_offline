const $div = document.querySelector('#tetris');
const $cvs = document.createElement("canvas");
$cvs.width = 1000;
$cvs.height = 800;
const ctx = $cvs.getContext('2d');
$div.appendChild($cvs);
const CELL_SIZE = 25

const cell = (i, j, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(10+CELL_SIZE*i,10+CELL_SIZE*j,CELL_SIZE,CELL_SIZE);
  ctx.strokeStyle = '#fff';
  ctx.strokeRect(10+CELL_SIZE*i,10+CELL_SIZE*j,CELL_SIZE,CELL_SIZE);
}

for(let j=0; j<20; j++){
  for(let i=0; i<10; i++){
    cell(i, j, '#444');
  }
}

class Cell {
  constructor(color){
    this.color = color;
  }

  draw(){
    console.log(this.color);
  }
}

const c = new Cell("Red");

c.draw();