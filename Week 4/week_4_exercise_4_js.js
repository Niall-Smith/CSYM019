var stateCheck = new Boolean(true);

function loadFunction()
{
    var element = document.getElementById("header1");
    element.firstChild.nodeValue = "Edited Heading";

    var para = document.getElementById("para1");
    para.firstChild.nodeValue = "Edited Paragraph";
}

function loadFunction2()
{
    var checker = stateCheck;

    console.log("loadFunction called");

    console.log(checker);

    if (stateCheck)
    {
        console.log("stateCheck is true");

        var element = document.getElementById("header1");
        element.firstChild.nodeValue = "Edited Heading";

        var para = document.getElementById("para1");
        para.firstChild.nodeValue = "Edited Paragraph";
        stateCheck = false;
        return;
    }

    if (!stateCheck)
    {
        var element = document.getElementById("header1");
        element.firstChild.nodeValue = "Heading";

        var para = document.getElementById("para1");
        para.firstChild.nodeValue = "Content";
        stateCheck = true;
        return;
    }
}

document.addEventListener("click", loadFunction2);