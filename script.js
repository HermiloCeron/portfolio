// Used the example here to create the grid
// https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
// For rounding 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/round

const gridContainer=document.getElementById("numbersGrid");
let rows=6;
let cols=20;
gridContainer.style.setProperty('--grid-rows',rows);
gridContainer.style.setProperty('--grid-cols',cols);

for(let i=1;i<=rows*cols;i++){
    let gridElement=document.createElement("div");
    gridElement.innerText=Math.round(Math.random());
    gridElement.style.opacity=0.05+0.95*Math.random();
    gridElement.id='gridEle'+i;
    gridElement.className="gridElement";
    gridContainer.appendChild(gridElement);
}