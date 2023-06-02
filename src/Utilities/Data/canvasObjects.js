const canvasObjects = [
    {
        id: 1,
        type: "text",
        size: {width: "50%", height: "10%"},
        position: {top: "20%", left: "10%"},
        element: "p",
        content: "The quick brown fox jumps over the lazy white dog",
        contentStyle: {
            fontSize: "1rem"
        }
    },
    {
        id: 2,
        type: "text",
        size: {width: "50%", height: "10%"},
        position: {top: "50%", left: "40%"},
        element: "p",
        content: "The quick brown fox jumps over the lazy white dog",
        contentStyle: {
            fontSize: "1rem"
        }
    },
    {
        id: 3,
        type: 'chart',
        contentStyle: {

        },
        content: {

            title: {
                text: 'U.S Solar Employment Growth by Job Category, 2010-2020',
                align: 'left'
            },
        
            subtitle: {
                text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
                align: 'left'
            },
        
            yAxis: {
                title: {
                    text: 'Number of Employees'
                }
            },
        
            xAxis: {
                accessibility: {
                    rangeDescription: 'Range: 2010 to 2020'
                }
            },
        
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
        
            series: [{
                name: 'Installation & Developers',
                data: [43934, 48656, 65165, 81827, 112143, 142383,
                    171533, 165174, 155157, 161454, 154610]
            }, {
                name: 'Manufacturing',
                data: [24916, 37941, 29742, 29851, 32490, 30282,
                    38121, 36885, 33726, 34243, 31050]
            }, {
                name: 'Sales & Distribution',
                data: [11744, 30000, 16005, 19771, 20185, 24377,
                    32147, 30912, 29243, 29213, 25663]
            }, {
                name: 'Operations & Maintenance',
                data: [null, null, null, null, null, null, null,
                    null, 11164, 11218, 10077]
            }, {
                name: 'Other',
                data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
                    17300, 13053, 11906, 10073]
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        }
    }
]

export default canvasObjects;