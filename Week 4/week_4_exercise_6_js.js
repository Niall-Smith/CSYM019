function buttonPress()
{
    var textBoxVal = document.getElementById("textbox");
    alert(textBoxVal.value);
    var div = document.getElementById("result");
    div.firstChild.nodeValue = textBoxVal.value;
}

function keyUpLoadFunction()
{
    var element = document.getElementById('textbox');
    element.addEventListener("keyup", buttonPress);
}

function loadFunction()
{
    var element = document.getElementById('button');
    element.addEventListener('click', buttonPress);
}

document.addEventListener('DOMContentLoaded', loadFunction);