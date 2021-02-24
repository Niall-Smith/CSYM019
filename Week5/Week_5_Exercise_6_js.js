function myClickEvent()
{
    alert('The button was pressed');
    //Commented these out because they only do the paragrahpa and 0header background
    //var element = document.getElementById('para1');
    //element.style.backgroundColor = 'blue';
    //element = document.getElementById('header1');
    //element.style.backgroundColor = 'blue';
    // element.style.opacity = circleOpacity + 0.1; // This is used for increasing the the opacity.
    // setInterval(intervalFunction, 1000);
    setInterval(intervalFunction, 10);
}

function intervalFunction()
{
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    // element.style.opacity = circleOpacity - 0.1;
    element.style.opacity = circleOpacity - 0.01;
}

function myLoadFunction()
{
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
    element.style.opacity = '1';
    // I added this part about setting the opacity after seeing the solution, as i could not get it to work, so the opacity must be set in the javascript code to make it work.
}

document.addEventListener('DOMContentLoaded', myLoadFunction);