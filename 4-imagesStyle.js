//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops

const image = document.querySelectorAll("img");

for (let i = 1; i <= image.length; i++) {
    if (i % 2 === 0) {
        image[i - 1].style.border = "5px dotted purple"; 
    } else if (i % 2 !== 0) {
        image[i - 1].style.border = "4px solid pink"; 
    }
}
