//todo1. Create an index.html file and put four p elements

//todo2. Get the first paragraph by using document.querySelector(tagname)
let firstPara = document.querySelector("p");
console.log(firstPara);

//todo3. Get each of the paragraph using document.querySelector(#id)
let first = document.querySelector("#first");
console.log(first);
let second = document.querySelector("#second");
console.log(second);
let third = document.querySelector("#third");
console.log(third);
let fourth = document.querySelector("#fourth");
console.log(fourth);

//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
let paras = document.querySelectorAll("p");
console.log(paras);

//todo5. Loop through the nodeList and get the text content of each paragraph
for (let i = 0; i < paras.length; i++) {
  console.log(paras[i].textContent);
}

//todo6. Set a text content to the fourth paragraph
fourth.textContent = "Hello, I'm the fourth paragraph";

//todo7. Set id and class attribute for all the paragraphs using different methods
paras[0].id = "firstP";
paras[0].className = "new1";

paras[1].id = "secondP";
paras[1].classList.add("new2");

paras[2].setAttribute("id", "thirdP");
paras[2].setAttribute("class", "new3");

paras[3].setAttribute("id", "fourthP");
paras[3].classList.toggle("new4");

//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
for (let i = 0; i < paras.length; i++) {
  paras[i].style.backgroundColor = "pink";
  paras[i].style.color = "purple";
  paras[i].style.border = "2px solid red";
  paras[i].style.fontSize = "30px";
  paras[i].style.fontFamily = "Arial";
}

//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
for (let i = 0; i < paras.length; i++) {
    if (i % 2 === 0) {
        paras[i].style.color = "green";  
    } else {
        paras[i].style.color = "red";  
    }
}
