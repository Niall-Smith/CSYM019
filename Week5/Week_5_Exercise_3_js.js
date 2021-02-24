function myClickEvent()
{
    alert('The button was pressed');
    //Commented these out because they only do the paragrahpa and 0header background
    //var element = document.getElementById('para1');
    //element.style.backgroundColor = 'blue';
    //element = document.getElementById('header1');
    //element.style.backgroundColor = 'blue';
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    // element.style.opacity = circleOpacity + 0.1; // This is used for increasing the the opacity.
    element.style.opacity = circleOpacity - 0.1;
}

function myLoadFunction()
{
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
    element.style.opacity = '0.5';
    // I added this part about setting the opacity after seeing the solution, as i could not get it to work, so the opacity must be set in the javascript code to make it work.
}

document.addEventListener('DOMContentLoaded', myLoadFunction);