const result = document.getElementById("para");
result.innerHTML = "my self";
result.title="myname";
const x = document.getElementsByClassName("p1");
console.log(x);
x[0].innerHTML="KAVYA";
x[1].innerHTML="JAIN";
const result3 = document.getElementsByTagName("p");
result3[2].innerHTML = "THIS IS A PET";
result3[1].style.color = "BLUE";
result3[2].innerText = "MY PARAGRAPH";
let test = document.querySelectorAll("ul li");
for (let item of test) {
    item.style.backgroundColor = "GREEN";
    item.style.margin = "10px";
    item.style.padding = "10px";
}