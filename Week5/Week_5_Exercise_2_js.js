function myClickEvent()
{
    alert('The button was pressed');
    //Commented these out because they only do the paragrahpa and 0header background
    //var element = document.getElementById('para1');
    //element.style.backgroundColor = 'blue';
    //element = document.getElementById('header1');
    //element.style.backgroundColor = 'blue';
    document.body.style.backgroundColor = 'blue';
}

function myLoadFunction()
{
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);
