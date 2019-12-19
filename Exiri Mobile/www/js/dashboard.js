$(document).ready(function() {
    // PROMOTION SLIDER IMAGES
    var images = ["offer1.jpg", "offer2.png", "offer3.jpg", "offer4.jpg", "offer5.jpg", "offer6.jpg"];


    var options = {
        animationEnabled: true,
        theme: "dark1",
        backgroundColor: "#291e40",
        data: [{
            type: "doughnut",
            innerRadius: "83%",
            showInLegend: false,
            legendText: "{label}",
            indexLabel: "#percent%",
            dataPoints: [
                { label: "Department Stores", y: 6492917 },
                { label: "Discount Stores", y: 7380554 },
                { label: "Stores for Men / Women", y: 1610846 },
                { label: "Teenage Specialty Stores", y: 950875 },
                { label: "All other outlets", y: 900000 }
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);

    var options = {
        animationEnabled: true,
        dataPointWidth: 12,
        backgroundColor: "black",
        theme: "dark2",
        axisX: {
            title: "axisX Title",
            gridThickness: 0
        },
        axisY: {
            title: "axisX Title",
            gridThickness: 0
        },
        colorSet: "customColorSet1",
        data: [{
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { label: "apple", y: 10 },
                { label: "orange", y: 15 },
                { label: "banana", y: 25 },
                { label: "mango", y: 30 },
                { label: "grape", y: 28 }
            ]
        }]
    };

    CanvasJS.addColorSet('customColorSet1', ['#291e40']);
    $("#barChartContainer").CanvasJSChart(options);

    // IMAGE SLIDESHOW HANDLER
    $(function() {
        var i = 0;
        $("#slider").css("background-image", "url(img/" + images[i] + ")");
        setInterval(function() {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#slider").fadeOut("0.5s", function() {
                $(this).css("background-image", "url(img/" + images[i] + ")");
                $(this).fadeIn("0.5s");
            });
        }, 5000);
    });

});