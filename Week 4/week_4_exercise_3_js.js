function loadFunction()
{
    console.log("loadFunction has been called");

    var element = document.getElementById("header1");
    element.firstChild.nodeValue = "Edited Heading";

    var para = document.getElementById("para1");
    para.firstChild.nodeValue = "Edited Paragraph";
}

document.addEventListener("DOMContentLoaded", loadFunction);