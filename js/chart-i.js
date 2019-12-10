window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light1",
        title: {
            text: "Let's check the details"
        },
        axisY: {
            includeZero: false
        },
        zoomEnabled: true,
        zoomType: "xy",
        data: [{
            type: "bar",
            dataPoints: [{ y: 143 },
                { y: 234 },
                { y: 355 },
                { y: 137 },
                { y: 457, indexLabel: "highest", markerColor: "blue", markerType: "square" },
                { y: 342 },
                { y: 187 },
                { y: 213 },
                { y: 99, indexLabel: "lowest", markerColor: "red", markerType: "circle" },
                { y: 431 },
                { y: 310},
                { y: 226},
                { y: 321 }
            ]
        }]
    });
    chart.render();

}