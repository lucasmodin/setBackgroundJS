const colArray = ["red", "green", "yellow", "blue", "orange"]
const pbFillDropdown = document.querySelector("#pbFillDropDown")
const ddColor = document.querySelector("#ddColor")
const bdy = document.querySelector("body")



function fillDropDown(item) {
    const el = document.createElement("option")
    el.textContent = item
    ddColor.appendChild(el)

}

function addColors(btn) {
    ddColor.innerHTML
    colArray.forEach(fillDropDown)
    console.log(document.all)
}

function setBackgroundColor() {
    const selindex = ddColor.selectedIndex;
    const selectedOption = ddColor.options[selindex];
    const color = selectedOption.innerText
    bdy.style.backgroundColor = color;
}



pbFillDropdown.addEventListener("click", addColors )
ddColor.addEventListener('change', setBackgroundColor)
