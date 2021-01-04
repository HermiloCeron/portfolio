// ********************************************* //
// GRID RANDOM BINARY IMAGE FOR THE MAIN SECTION //
// ********************************************* //

// Used the example here to create the grid
// https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
// For rounding 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/round

const gridContainer=document.getElementById("numbersGrid");
let rows=6;
let cols=30;
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

// ************************************** //
// BUTTONS ON THE SOFTWARE SKILLS SECTION //
// ************************************** //

// Create an image reference
//https://www.geeksforgeeks.org/how-to-create-an-image-element-dynamically-using-javascript/
function frontEnd(){
    document.getElementById("but1").style.opacity=0.5;
    document.getElementById("but2").style.opacity=1;
    document.getElementById("but3").style.opacity=1;
    document.getElementById("but4").style.opacity=1;
    document.getElementById("text").innerText="A summary of my experience at front end web development";
    document.getElementById("img").src="./pics/front-end-web.jpg";
    document.getElementById("img").alt="My front end web development projects";
}

frontEnd();

// Onclick reference:
// https://www.w3schools.com/jsref/event_onclick.asp
document.getElementById("but1").onclick=function(){
    frontEnd();
}

document.getElementById("but2").onclick=function(){
    document.getElementById("but1").style.opacity=1;
    document.getElementById("but2").style.opacity=0.5;
    document.getElementById("but3").style.opacity=1;
    document.getElementById("but4").style.opacity=1;
    document.getElementById("text").innerText="A summary of my experience at full stack development";
    document.getElementById("img").src="./pics/full-stack.jpg";
    document.getElementById("img").alt="My full stack development projects";
}

document.getElementById("but3").onclick=function(){
    document.getElementById("but1").style.opacity=1;
    document.getElementById("but2").style.opacity=1;
    document.getElementById("but3").style.opacity=0.5;
    document.getElementById("but4").style.opacity=1;
    document.getElementById("text").innerText="A summary of my experience at front end framework";
    document.getElementById("img").src="./pics/front-end-framework.jpg";
    document.getElementById("img").alt="My front end framework projects";
}

document.getElementById("but4").onclick=function(){
    document.getElementById("but1").style.opacity=1;
    document.getElementById("but2").style.opacity=1;
    document.getElementById("but3").style.opacity=1;
    document.getElementById("but4").style.opacity=0.5;
    document.getElementById("text").innerText="A summary of my experience at native python";
    document.getElementById("img").src="./pics/native-python.jpg";
    document.getElementById("img").alt="My native python projects";
}