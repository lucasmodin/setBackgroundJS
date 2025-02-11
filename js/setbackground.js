let inp = document.querySelector(".inpColor");
console.log(inp);

let pbCol = document.querySelector(".pbSetColor")
console.log(pbCol)

pbCol.textContent = "Tryk mig for at ændre farve!";

const inpColorPicker =document.getElementById("inpColorPicker");

let bdy = document.querySelector("body");
console.log(bdy);

let inpColorValue = document.querySelector(".inpColorValue")
console.log(bdy)

const pTags = document.getElementsByTagName('p');
console.log(pTags)

let inpIncreaseSize = document.querySelector(".pbIncreaseSize");

let inpDecreaseSize = document.querySelector(".pbDecreaseSize")

const pArray = Array.from(pTags)

function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

function useColorPicker() {
    let col = inpColorPicker.value;
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

function increaseSize(element) {
    let fontSize = getComputedStyle(element).fontSize
    console.log(fontSize)
    let newSize = parseInt(fontSize) + 1;
    element.style.fontSize = newSize + 'px'
    console.log(newSize);

    //element.style.fontSize = 10 + 'px';
    //fontSize = element.style.fontSize;
    //console.log(fontSize);
}

function decreaseSize(element) {
    let fontSize = getComputedStyle(element).fontSize
    console.log(fontSize)
    let newSize = parseInt(fontSize) -1;
    element.style.fontSize = newSize + 'px'
    console.log(newSize)
}




pbCol.addEventListener("click", setBackgroundColor)


inpColorPicker.addEventListener("input", useColorPicker)

inpIncreaseSize.addEventListener("click", function () {
    pArray.forEach(increaseSize)
});

inpDecreaseSize.addEventListener("click", function (){
    pArray.forEach(decreaseSize)
})





