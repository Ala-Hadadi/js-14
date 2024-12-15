//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red

function changeColorOfYear() {
  const yearText = document.querySelector("h1");
  const colors = [
    "red",
    "aqua",
    "orange",
    "purple",
    "lightgreen",
    "blue",
    "yellow",
    "pink",
    "green",
  ];

  let colorIndex = 0;
  setInterval(() => {
    yearText.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 1000);
}

function changeBackgroundColor() {
  const listItems = document.querySelectorAll("ul li");

  listItems.forEach((item) => {
    if (item.textContent.includes("Done")) {
      item.style.backgroundColor = "green";
    } else if (item.textContent.includes("Ongoing")) {
      item.style.backgroundColor = "yellow";
    } else if (item.textContent.includes("Coming")) {
      item.style.backgroundColor = "red";
    }
  });
}

changeColorOfYear();
changeBackgroundColor();
