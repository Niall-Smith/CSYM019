var ctx = document.getElementById('myChart').getContext('2d');

var trueFalseCheck = false;

var currentChart;

function chart2019()
{
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: ['UK', 'US', 'France', 'Germany', 'Italy'],
            datasets: [{
                label: 'Population by Millions (2019)',
                backgroundColor: 'rgb(255, 0, 0)',
                borderColor: 'rgb(255, 0, 0)',
                data: [66.65, 328.2, 67.06, 83.02, 60.36]
            }]
        },
    
        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 350,
                        stepSize: 10
                    }
                }]
            }
        }
    
    });

    currentChart = chart;
}

function chart1999()
{
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: ['UK', 'US', 'France', 'Germany', 'Italy'],
            datasets: [{
                label: 'Population by Millions (1999))',
                backgroundColor: 'rgb(0, 0, 255)',
                borderColor: 'rgb(0, 0, 255)',
                data: [58.58, 279.3, 60.5, 82.04, 56.91]
            }]
        },
    
        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 350,
                        stepSize: 10
                    }
                }]
            }
        }
    });
    
    currentChart = chart;
}

function loadChart(chart)
{
    chart();
}

function myClickEvent()
{
    console.log(trueFalseCheck)

    currentChart.destroy();

    if (trueFalseCheck)
    {
        loadChart(chart2019)
        trueFalseCheck = false;
        return;
    }
    if (!trueFalseCheck)
    {
        loadChart(chart1999);
        trueFalseCheck = true;
        return;
    }
}

function myLoadFunction()
{
    var element = document.getElementById('Button');
    element.addEventListener('click', myClickEvent);
    loadChart(chart2019);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);