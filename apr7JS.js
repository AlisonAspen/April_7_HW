//calculate all elements on page and pring to holder1
function calculateElements(){
     let numElements = document.querySelectorAll("p").length;

     document.getElementById("holder1").innerText = `There are ${numElements} p tags on this page`;
     //add thsi to first statements
     //document.getElementById("holder1").innerText = `There are ${numPTags} p tags on this page`;

}
//calculate elements inside of first div
function firstIdChildren(){
     let inspectedDiv = document.getElementById("contentDiv1");
     inspectedDiv.style.backgroundColor = "blue";
     let numChildren = inspectedDiv.childNodes.length;
     document.getElementById("holder2").innerText = `This first div (blue) has ${numChildren} child elements.`;

}
//calculate elements inside of second div
function secondIdChildren(){
     let inspectedDiv = document.getElementById("contentDiv2");
     inspectedDiv.style.backgroundColor = "red";
     let numChildren = inspectedDiv.childNodes.length;
     document.getElementById("holder3").innerText = `This first div (red) has ${numChildren} child elements.`;
}
