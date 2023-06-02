
function createChart(cssSelector, canvasObject){
    console.log(cssSelector, canvasObject.content)
    Highcharts.chart(cssSelector, canvasObject.content)
}

export default createChart;