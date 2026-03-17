/*const result = document.getElementById("para");
result.innerHTML = "Hello, World!";
 
//const paragraphs = document.getElementsByClassName("intro");
//paragraphs[0].innerHTML = "This is the first paragraph.";
//paragraphs[1].innerHTML = "This is the second paragraph.";
//paragraphs[2].innerHTML = "This is the third paragraph.";


/*const abc = document.getElementsByTagName("p");
abc[0].innerHTML = "This is the not first paragraph.";
abc[2].style.color = "red";
abc[1].style.fontSize = "20px";
abc[1].style.fontFamily = " Arial, sans-serif";
abc[0].style.backgroundColor = "yellow";*/

/*const test = document.querySelectorAll(".intro");
for(element in test)  {
  element.style.color = "blue";
  element.style.fontSize = "18px";
  element.style.fontFamily = "Arial, sans-serif";
  element.style.backgroundColor = "lightgray";
};*/
/*const result2 = document.getElementById("para");
result2.innerHTML = "This is the new content of the div element.";*/

/*const newElement = document.querySelectorAll("ul li");
for(x in newElement) {
  newElement[x].style.color = "green";
  newElement[x].style.fontSize = "16px";
  newElement[x].style.fontFamily = "Arial, sans-serif";
}*/
function changeContent() {
  document.getElementById("heading").setAttribute("class", "new-heading");
  alert("Content changed!");
}
function onMouseOver() {
  document.getElementById("heading").style.color = "red";
}
function onMouseOut() {
  document.getElementById("heading").style.color = "orange";
}
function onMouseUp() {
  document.getElementById("heading").style.color = "blue";
}
function doubleClick() {
  alert("calm down!!")
}
function onLoad() {
  alert("Page loaded!");
}