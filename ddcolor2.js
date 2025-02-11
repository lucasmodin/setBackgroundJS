const colArray2 = [["red","#ff0000"], ["green","#00ff00"], ["yellow","#ffff00"], ["purple","#1f35a9"]]
const pbFillDropdown2 = document.getElementById("pbFillDropDown2")
const ddColor2 = document.getElementById("ddColor2")

function fillDropDown2(item) {
    const el2 = document.createElement("option")
    el2.textContent = item[0]
    el2.value = item[1]
    ddColor2.appendChild(el2)

}

function addColors2(btn) {
    ddColor2.innerHTML
    colArray2.forEach(fillDropDown2)
    console.log(document.all)
}

function setBackgroundColor2() {
    const selindex = ddColor2.selectedIndex;
    const selectedOption = ddColor2.options[selindex];
    const color = selectedOption.innerText
    bdy.style.backgroundColor = color;
}


function fillDropDownObj(item) {
    const el2 = document.createElement("option")
    el2.textContent = item.name
    el2.value = item.id
    ddColor2.appendChild(el2)

}


pbFillDropdown2.addEventListener("click", addColors2 )
ddColor2.addEventListener('change', setBackgroundColor2)