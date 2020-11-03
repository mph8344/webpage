
window.onload = function() {

    var color1 = document.getElementById("color1");
    var color2 = document.getElementById("color2");
    var color3 = document.getElementById("color3");
    var color4 = document.getElementById("color4");
    var color5 = document.getElementById("color5");

    color1.onclick = changeColor
    color2.onclick = changeColor
    color3.onclick = changeColor
    color4.onclick = changeColor
    color5.onclick = changeColor


}


function editBox() {

    var thisButton = document.getElementById("textbutton");
    var value = thisButton.getAttribute("value");
    if (value==="more") {
        thisButton.innerText = "Less";
        thisButton.value = "less";
        createBox();
    } else {
        thisButton.innerText = "More...";
        thisButton.value = "more";
        deleteBox();
    }
}
function createBox() {

    var element = document.getElementById("hiddentext");
    /*element.innerText="Ah, distinctly I remember it was in the bleak December" +
    " And each separate dying ember wrought its ghost upon the floor." +
    " Eagerly I wished the morrow;—vainly I had sought to borrow" + 
    " From my books surcease of sorrow—sorrow for the lost Lenore —" +
    " For the rare and radiant maiden whom the angels name Lenore —" +
    " Nameless here for evermore.";*/
    element.style.display= "block"
    

}

function deleteBox() {
    var element = document.getElementById("hiddentext");
    //element.innerText=""
    element.style.display= "none"
}

function changeFont(font) {
    console.log(font.value);
    document.getElementById('textbox').style.fontFamily = font.value;
    document.getElementById('hiddentext').style.fontFamily = font.value;
    
}

function changeColor() {
    console.log(this.value);
    document.getElementById('textbox').style.color = this.value;
    document.getElementById('hiddentext').style.color = this.value;
}
