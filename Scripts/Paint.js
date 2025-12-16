const Canvas = document.getElementById('Paint');
const Ctx = Canvas.getContext('2d');
const ToolbarHeight = document.getElementById('toolbar').offsetHeight;

Canvas.width = window.innerWidth * 0.8;
Canvas.height = window.innerHeight * 0.8 - ToolbarHeight;

let Drawing = false;
let Tool = 'brush';
let Color = '#000000';

function changeTool(selectedTool) {
  Tool = selectedTool;
}

function changeColor(newColor) {
  Color = newColor;
}

function clearCanvas() {
  Ctx.clearRect(0, 0, Canvas.width, Canvas.height);
}

Canvas.addEventListener('mousedown', () => { Drawing = true; });
Canvas.addEventListener('mouseup', () => { Drawing = false; Ctx.beginPath(); });

Canvas.addEventListener('mousemove', (e) => {
  if (!Drawing) return;

  const x = e.clientX - Canvas.offsetLeft;
  const y = e.clientY - Canvas.offsetTop;

  if (Tool === 'brush') {
    Ctx.strokeStyle = Color;
    Ctx.lineWidth = 15;
    Ctx.lineCap = 'round';
    Ctx.lineTo(x, y);
    Ctx.stroke();
    Ctx.beginPath();
    Ctx.moveTo(x, y);
  }

});

  function ChangeLineSize(pixel) {
      Ctx.lineWidth = pixel;
      alert(`${pixel}`);
}

const ColorPalette = document.getElementById('colorPalette');
const Colors = [ 
  '#000000', '#828282', '#7e1111', '#ea0b0b', '#fa7d3f', '#FFFF00', '#2bbf53', '#1aa3c1',
  '#2e49cf', '#9c57b5', '#ffffff', '#c6c5c6', '#ba8b5d', '#FFAEC9', '#FFC90E', '#EFE4B0',
  '#B5E61D', '#99D9EA', '#7092BE', '#C8BFE7'
];
Colors.forEach(c => {
  const ColorSquare = document.createElement('div');
  ColorSquare.className = 'color-square';
  ColorSquare.style.backgroundColor = c;
  ColorSquare.onclick = () => changeColor(c);
  ColorPalette.appendChild(ColorSquare);
});