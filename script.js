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

// **************************************** //
// BUTTONS ON THE ELECTRICAL SKILLS SECTION //
// **************************************** //

let status1=0, status2=0, status3=0, status4=0;

// Add a picture
// https://www.geeksforgeeks.org/how-to-create-an-image-element-dynamically-using-javascript/

//Power systems
function pic1(){
    document.getElementById("pic1").innerText="";
    document.getElementById("pic1").style.backgroundImage="url(\"./pics/simulation.jpg\")";
}

function text1(){
    document.getElementById("pic1").innerText="Why I am cool at power systems analisys ... ";
    document.getElementById("pic1").style.backgroundImage="";
}

//High voltage
function pic2(){
    document.getElementById("pic2").innerText="";
    document.getElementById("pic2").style.backgroundImage="url(\"./pics/high-voltage.jpg\")";
}

function text2(){
    document.getElementById("pic2").innerText="Why I am cool at high voltage ... ";
    document.getElementById("pic2").style.backgroundImage="";
}

//Electric machinery
function pic3(){
    document.getElementById("pic3").innerText="";
    document.getElementById("pic3").style.backgroundImage="url(\"./pics/electric-machinery.jpg\")";
}

function text3(){
    document.getElementById("pic3").innerText="Why I am cool at electric machinery  ... ";
    document.getElementById("pic3").style.backgroundImage="";
}

//Power electronics
function pic4(){
    document.getElementById("pic4").innerText="";
    document.getElementById("pic4").style.backgroundImage="url(\"./pics/power-electronics.jpg\")";
}

function text4(){
    document.getElementById("pic4").innerText="Why I am cool at power electronics systems ... ";
    document.getElementById("pic4").style.backgroundImage="";
}

pic1();
pic2();
pic3();
pic4();

document.getElementById("pic1").onclick=function(){
    status++;
    if(status%2==0){
        pic1();
    }else{
        text1();
    }
}

document.getElementById("pic2").onclick=function(){
    status++;
    if(status%2==0){
        pic2();
    }else{
        text2();
    }
}

document.getElementById("pic3").onclick=function(){
    status++;
    if(status%2==0){
        pic3();
    }else{
        text3();
    }
}

document.getElementById("pic4").onclick=function(){
    status++;
    if(status%2==0){
        pic4();
    }else{
        text4();
    }
}