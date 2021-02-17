var stateCheck = new Boolean(true);

function loadFunction()
{
    var headerListener = document.getElementById("header1");
    var paraListener = document.getElementById("para1");

    headerListener.addEventListener('click', h1ClickFunction);
    paraListener.addEventListener('click', p1ClickFunction);
}

function h1ClickFunction()
{
    var headingElement = document.getElementById("header1");

    headingElement.firstChild.nodeValue = "Edited Heading";
}

function p1ClickFunction()
{
    var paraElement = document.getElementById("para1");

    paraElement.firstChild.nodeValue = "Edited Paragraph";
}

document.addEventListener("DOMContentLoaded", loadFunction);