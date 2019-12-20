$(document).ready(function() {
    var users = [{
            name: 'Shifan',
            password: '4584',
            email: 'abc@gmail.com',
            purchases: [{
                    category: 'Electronics',
                    price: 150.00,
                },
                {
                    category: 'Fashion & Trend',
                    price: 160.00,
                }, {
                    category: 'Mens Wear',
                    price: 1650.00,
                }, {
                    category: 'Ladies Wear',
                    price: 180.00,
                }, {
                    category: 'Gift & Soveniours',
                    price: 190.00,
                },
                {
                    category: 'Gift & Soveniours',
                    price: 190.00,
                }
            ],
            profileImage: 'img/user1.jpg'
        },
        {
            name: 'sachini',
            password: '4584',
            email: 'abc@gmail.com',
            purchases: [{
                    category: 'Electronics',
                    price: 150.00,
                },
                {
                    category: 'Fashion & Trend',
                    price: 160.00,
                }, {
                    category: 'Mens Wear',
                    price: 170.00,
                }, {
                    category: 'Ladies Wear',
                    price: 180.00,
                }, {
                    category: 'Gift & Soveniours',
                    price: 190.00,
                }
            ],
            profileImage: 'img/user2.jpg'
        },
        {
            name: 'banu',
            password: '4584',
            email: 'abc@gmail.com',
            purchases: [{
                    category: 'Electronics',
                    price: 150.00,
                },
                {
                    category: 'Fashion & Trend',
                    price: 160.00,
                }, {
                    category: 'Mens Wear',
                    price: 170.00,
                }, {
                    category: 'Ladies Wear',
                    price: 180.00,
                }, {
                    category: 'Gift & Soveniours',
                    price: 190.00,
                }
            ],
            profileImage: 'img/user3.jpg'
        },
        {
            name: 'mushtharq',
            password: '4584',
            email: 'abc@gmail.com',
            purchases: [{
                    category: 'Electronics',
                    price: 150.00,
                },
                {
                    category: 'Fashion & Trend',
                    price: 160.00,
                }, {
                    category: 'Mens Wear',
                    price: 170.00,
                }, {
                    category: 'Ladies Wear',
                    price: 180.00,
                }, {
                    category: 'Gift & Soveniours',
                    price: 190.00,
                }
            ],
            profileImage: 'img/user4.jpg'
        }

    ];


    // CREATING LEADERBOARD
    var mem = $('.members');
    users.forEach((item) => {
        var leader =
            "<div class='horizontal'>" +
            "<img src='" + item.profileImage + "'>" +
            "<div class='vertical'>" +
            "<a>" + item.name + "</a>" +
            // "<div style='width:50%' class='progress-bar'> <span id=" + item.name + "> </span> </div>" +
            "<div class='progress-bar'> <span style='width:" + (100 / item.purchases.length) * users.length + "%' id=" + item.name + "> </span> </div>" +
            // "<div class='progress-bar'> <span style='width:80%' id=" + item.name + "> </span> </div>" +
            "</div> </div>";
        mem[0].innerHTML += leader;
    });





    // PROMOTION SLIDER IMAGES
    var images = ["offer1.jpg", "offer2.png", "offer3.jpg", "offer4.jpg", "offer5.jpg", "offer6.jpg"];
    // var leaderBoard = {
    //     shifan: 5,
    //     banu: 7,
    //     mushtharq: 8,
    //     sachini: 9
    // };

    // $("#shifan").css('width', (((100 / leaderBoard.shifan) * Object.keys(leaderBoard).length) + "%"));
    // $("#sachini").css('width', (((100 / leaderBoard.sachini) * Object.keys(leaderBoard).length) + "%"));
    // $("#banu").css('width', (((100 / leaderBoard.banu) * Object.keys(leaderBoard).length) + "%"));
    // $("#mushtharq").css('width', (((100 / leaderBoard.mushtharq) * Object.keys(leaderBoard).length) + "%"));

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
    $("#chartContainer2").CanvasJSChart(options);
    $(".show-for-L").css('visibility', 'hidden');
    // $(".show-for-L").css('height', 'max-content');
    $(".show-for-L").css('position', 'absolute');
    $(".show-for-L").css('left', '5000vh');


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