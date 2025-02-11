const colArray = ["red", "green", "yellow", "blue", "orange"]
const pbFillDropdown = document.querySelector(".pbFillDropdown")


function fillDropDown(item) {
    const el = document.createElement("option")
    el.textContent = item
    pbFill.appendChild(el)

}

function addColors(btn) {
    colArray.forEach(fillDropDown)
}


pbFillDropdown.addEventListener("click", addColors )