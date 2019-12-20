var arrProducts = [{
        id: 1,
        name: 'Redmi Note 8',
        description: ['Model Number:	M1908C3JG', 'Processor:	Octa Core', 'RAM: 4 GB', 'Model:	Redmi Note 8', 'Operating System: Android', 'Condition:	New'],
        category: 'Electronics',
        image: ['img/products/electronics/1/img1.jpg', 'img/products/electronics/1/img2.jpg', 'img/products/electronics/1/img3.jpg'],
        price: 190.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black']
    },
    {
        id: 2,
        name: 'Smart Roku-TV',
        description: ['Display Technology:	LED', 'Brand: Toshiba', 'RAM: 4 GB', 'Model:	Toshiba 43In TV', 'Screen Size:	43 inches', 'MPN:	Does Not Apply', 'Condition:	New'],
        category: 'Electronics',
        image: ['img/products/electronics/2/img1.jpg', 'img/products/electronics/2/img2.jpg', 'img/products/electronics/2/img3.jpg'],
        price: 10000.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [{
                name: 'Shifan',
                comment: 'Good Product!',
                rating: 4,
                image: 'img/user.svg',
                date: '10/02/2019'
            },
            {
                name: 'Mushtharq Hajiyar',
                comment: 'Sexy Product!',
                rating: 5,
                image: 'img/user.svg',
                date: '15/02/2019'
            },
            {
                name: 'Banusundar',
                comment: 'Very Bad! I dont like this',
                rating: 0,
                image: 'img/user.svg',
                date: '28/02/2019'
            },
            {
                name: 'Theja',
                comment: 'Good Product!',
                rating: 2,
                image: 'img/user.svg',
                date: '10/02/2019'
            },
            {
                name: 'Sachini',
                comment: 'Sexy Product!',
                rating: 3,
                image: 'img/user.svg',
                date: '15/02/2019'
            },
            {
                name: 'Thejade Maapule',
                comment: 'Very Bad! I dont like this',
                rating: 5,
                image: 'img/user.svg',
                date: '28/02/2019'
            }
        ],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black']
    },
    {
        id: 3,
        name: 'JOVEES-AyuCream',
        description: ['Type:	Day Cream', 'Gender: Unisex', 'Concerns: Wrinkle Reduction', 'Country/Region of Manufacture:	India', 'Formulation:	Cream', 'Brand:	JOVEES', 'Size Type: Sample Size'],
        category: 'Health & Beauty',
        image: ['img/products/health_beauty/3/img1.jpg'],
        price: 60.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black']
    },
    {
        id: 4,
        name: 'Vaseline-Body Lotion',
        description: ['Type: Body Lotion', 'Gender: Unisex', 'Concerns: SPF', 'Country/Region of Manufacture:	India', 'Formulation: Lotion', 'Brand: Vaseline', 'Size Type: Medium'],
        category: 'Health & Beauty',
        image: ['img/products/health_beauty/4/img1.jpg', 'img/products/health_beauty/4/img2.jpg', 'img/products/health_beauty/4/img3.jpg'],
        price: 85.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black']
    },
    {
        id: 5,
        name: 'Ladies Choli',
        description: ['Material:Acetate', 'Gender: Female', 'Style: A-Line', 'MPN: 3MU2GY1MB6GG4MA1', 'Colour: Beige'],
        category: 'Ladies Wear',
        image: ['img/products/clothing/5/img1.jpg', 'img/products/clothing/5/img2.jpg'],
        price: 105.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black'],
        sizes: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]
    },
    {
        id: 6,
        name: 'Air Max Shoe',
        description: ['Material:Paraform', 'Gender: Unisex', 'Style: Sport', 'MPN: 3MU2GY1101010', 'Condition:New'],
        category: 'Fashion & Trend',
        image: ['img/products/clothing/6/img1.jpg', 'img/products/clothing/6/img2.jpg', 'img/products/clothing/6/img3.jpg'],
        price: 120.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black'],
        sizes: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]
    },
    {
        id: 7,
        name: 'Adidas shirt',
        description: ['Material:Silk', 'Gender: Men', 'Style: Casual', 'MPN: 3BUPP2GY1101010', 'Condition:New'],
        category: 'Mens Wear',
        image: ['img/products/clothing/7/img1.jpg', 'img/products/clothing/7/img2.jpg', 'img/products/clothing/7/img3.jpg'],
        price: 95.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black'],
        sizes: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]
    },
    {
        id: 8,
        name: 'Baby Party-Dress',
        description: ['Material:Silk', 'Style: Party', 'MPN: 3BUPP2GY11012210', 'Size: M-L-XL', 'Condition:New'],
        category: 'Fashion & Trend',
        image: ['img/products/clothing/8/img1.jpg', 'img/products/clothing/8/img2.jpg'],
        price: 79.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black'],
        sizes: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]
    },
    {
        id: 9,
        name: 'White Saree',
        description: ['Material: Cotton', 'Style: Festival', 'Gender: Woman', 'MPN: 3BUPP2GY11012210', 'Size: M-L-XL', 'Condition:New'],
        category: 'Ladies Wear',
        image: ['img/products/clothing/9/img1.jpg', 'img/products/clothing/9/img2.jpg'],
        price: 200.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black'],
        sizes: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]
    },
    {
        id: 10,
        name: 'Sanju-DVD',
        description: ['Langauage: Hindi', 'Release-Year-2019', 'MPN: 3BUPP2GY11012211', 'Country: India', 'Condition:New'],
        category: 'Gift & Soveniours',
        image: ['img/products/dvd_movies/10/img1.jpg'],
        price: 45.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: []
    },
    {
        id: 11,
        name: '96-DVD',
        description: ['Langauage: Tamil', 'Release-Year-2019', 'MPN: 3BUPP2GY11012212', 'Country: India', 'Condition:New'],
        category: 'Gift & Soveniours',
        image: ['img/products/dvd_movies/11/img1.jpg'],
        price: 50.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: []
    },
    {
        id: 12,
        name: 'Oru Adaar Love-DVD',
        description: ['Langauage: Malayalam', 'Release-Year-2019', 'MPN: 3BUPP2GY11012213', 'Country: India', 'Condition:New'],
        category: 'Gift & Soveniours',
        image: ['img/products/dvd_movies/12/img1.jpg'],
        price: 60.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: []
    },
    {
        id: 13,
        name: 'Lucifer-DVD',
        description: ['Langauage: Malayalam', 'Release-Year-2019', 'MPN: 3BUPP2GY11012214', 'Country: India', 'Condition:New'],
        category: 'Gift & Soveniours',
        image: ['img/products/dvd_movies/13/img1.jpg'],
        price: 60.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: []
    },
    {
        id: 14,
        name: 'Mens Sportwear',
        description: ['Theme: Sports', 'Style: Basic Tee', 'Pattern:	Solid', 'Neckline:	Hooded', 'Occasion:	Casual', 'Color:Green/Yellow'],
        category: 'Mens Wear',
        image: ['img/products/mens_wear/14/img1.jpg', 'img/products/mens_wear/14/img2.jpg'],
        price: 150.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black'],
        sizes: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]
    },
    {
        id: 15,
        name: 'Mens Trousers',
        description: ['Theme: Sports', 'Brand: Nike', 'Occasion:	Casual', 'Color:Black'],
        category: 'Mens Wear',
        image: ['img/products/mens_wear/15/img1.jpg', 'img/products/mens_wear/15/img2.jpg'],
        price: 139.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black'],
        sizes: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]
    },
    {
        id: 16,
        name: 'Calvin-Klein Watch',
        description: ['Gender: Men', 'Brand: Calvin Klein', 'Occasion:Casual', 'Color:Black'],
        category: 'Mens Wear',
        image: ['img/products/mens_wear/16/img1.jpg'],
        price: 250.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black'],
        sizes: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]
    },
    {
        id: 17,
        name: 'Rolex Mens Datejust ',
        description: ['Gender: Men', 'Brand: Rolex', 'Occasion:Casual', 'Color:Silver'],
        category: 'Mens Wear',
        image: ['img/products/mens_wear/17/img1.jpg', 'img/products/mens_wear/17/img2.jpg', 'img/products/mens_wear/17/img3.jpg'],
        price: 500.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black'],
        sizes: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]
    },
    {
        id: 18,
        name: 'Ladies Necklace',
        description: ['Gender: Woman', 'Material: Alloy', 'Occasion:Casual', 'Color:As  Shown'],
        category: 'Ladies Wear',
        image: ['img/products/ladies_wear/18/img1.jpg', 'img/products/ladies_wear/18/img2.jpg'],
        price: 145.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black'],
        sizes: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]
    },
    {
        id: 19,
        name: 'Winter Boots-Ladies',
        description: ['Gender: Woman', 'Material:Leather', 'Occasion: Winter-Season', 'Color:Purple'],
        category: 'Ladies Wear',
        image: ['img/products/ladies_wear/19/img1.jpg', 'img/products/ladies_wear/19/img2.jpg', 'img/products/ladies_wear/19/img3.jpg'],
        price: 350.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black'],
        sizes: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]
    },
    {
        id: 20,
        name: 'Office Wear-Ladies',
        description: ['Gender: Woman', 'Material:Cotton', 'Occasion: Office/Casual', 'Color:Black and Yellow'],
        category: 'Ladies Wear',
        image: ['img/products/ladies_wear/20/img1.jpg', 'img/products/ladies_wear/20/img2.jpg', 'img/products/ladies_wear/20/img3.jpg'],
        price: 350.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black'],
        sizes: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]
    },
    {
        id: 21,
        name: 'Wireless Sport-Earpods',
        description: ['Type:	Earbud (In Ear)', 'Wireless Technology:	Bluetooth', 'MPN:3EL2SR1WX0ZN4GC3', 'Color:Black'],
        category: 'Mobile Accesories',
        image: ['img/products/mobile/21/img1.jpg', 'img/products/mobile/21/img2.jpg', 'img/products/mobile/21/img3.jpg'],
        price: 75.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black']
    },
    {
        id: 22,
        name: 'iPhone 6s Plus',
        description: ['Camera Resolution:	12.0MP', 'Processor:	Dual Core', 'RAM:	2GB', 'Bundled Items:	Adapter, Cable', 'Brand:Apple'],
        category: 'Mobile Accesories',
        image: ['img/products/mobile/22/img1.jpg', 'img/products/mobile/22/img2.jpg', 'img/products/mobile/22/img3.jpg'],
        price: 165.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black']
    },
    {
        id: 23,
        name: 'Samsung S8',
        description: ['Camera Resolution:	12.0MP', 'Processor:	Dual Core', 'RAM:	2GB', 'Bundled Items:	Adapter, Cable', 'Brand:Apple'],
        category: 'Mobile Accesories',
        image: ['img/products/mobile/23/img1.jpg', 'img/products/mobile/23/img2.jpg', 'img/products/mobile/23/img3.jpg'],
        price: 129.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black']
    },
    {
        id: 24,
        name: 'S-Galaxy Tab',
        description: ['Camera Resolution:	15.0MP', 'Processor:	9 Core', 'RAM:	7GB', 'Bundled Items:	Adapter, Cable', 'Brand:Samsung'],
        category: 'Mobile Accesories',
        image: ['img/products/mobile/24/img1.jpg'],
        price: 178.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black']
    },
    {
        id: 25,
        name: 'Pringles-Spicy',
        description: ['Food-Type: Chips', 'Flavour:Hot Chilly', 'Country: India', 'MPU: Does not Apply'],
        category: 'Grocery',
        image: ['img/products/grocery/25/img1.jpg'],
        price: 40.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black']
    },
    {
        id: 26,
        name: 'Kit-Kat',
        description: ['Food-Type: Chocolate', 'Flavour:Banana', 'Country: Dubai', 'MPU: Does not Apply'],
        category: 'Grocery',
        image: ['img/products/grocery/26/img1.jpg'],
        price: 90.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black']
    },
    {
        id: 27,
        name: 'Strawberries',
        description: ['Food-Type: Fruit', 'Grams: 1250gs', 'Country: Sri-Lanka', 'MPU: Does not Apply'],
        category: 'Grocery',
        image: ['img/products/grocery/27/img1.jpg'],
        price: 240.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: []
    },
    {
        id: 28,
        name: 'Milo-Jumbo',
        description: ['Food-Type: Energy Drink', 'Grams: 1kg', 'Country: Sweden', 'MPU: Does not Apply'],
        category: 'Grocery',
        image: ['img/products/grocery/28/img1.jpg'],
        price: 200.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: []
    },
    {
        id: 29,
        name: 'Lanka Coffee',
        description: ['Food-Type: Coffee', 'Grams: 250g-500g-1kg', 'Country: Sri-Lanka', 'MPU: Does not Apply'],
        category: 'Grocery',
        image: ['img/products/grocery/29/img1.png'],
        price: 145.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: []
    },
    {
        id: 30,
        name: 'Tang-Drink',
        description: ['Food-Type:Drink', 'Flavour:Orange/Lemon/Mango', 'Country: Dubai', 'MPU: Does not Apply'],
        category: 'Grocery',
        image: ['img/products/grocery/30/img1.jpg'],
        price: 300.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: []
    },
    {
        id: 1,
        name: 'Adidas Tshirt',
        description: 'Adidas brand with certified material',
        category: 'mobileAccesories',
        image: ['img/creativetribe.png', 'img/creativetribe.png', 'img/creativetribe.png', 'img/creativetribe.png'],
        price: 178.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black'],
        sizes: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]
    },
    {
        id: 1,
        name: 'Light',
        description: ['Model Number:	M1908C3JG', 'Processor:	Octa Core', 'RAM: 4 GB', 'Model:	Redmi Note 8', 'Operating System: Android', 'Condition:	New'],
        category: 'Electronics',
        image: ['img/bell.svg'],
        price: 190.00,
        discount: 0,
        isFavourite: false,
        rank: '4.0',
        reviews: [],
        colors: ['#ff4f4f', 'white', '#43ff43', '#43fffb', 'black']
    }
];

var categories = {
    electronics: [
        { name: 'All in electronics', stock: 200, img: 'img/bell.svg' },
        { name: 'TV', stock: 20, img: 'img/bell.svg' },
        { name: 'TV', stock: 20, img: 'img/bell.svg' },
        { name: 'TV', stock: 20, img: 'img/bell.svg' },
        { name: 'TV', stock: 20, img: 'img/bell.svg' },
        { name: 'TV', stock: 20, img: 'img/bell.svg' },
        { name: 'TV', stock: 20, img: 'img/bell.svg' },
        { name: 'TV', stock: 20, img: 'img/bell.svg' }
    ],
    health: [
        { name: 'All in health & beauty', stock: 2151, img: 'img/bell.svg' },
        { name: 'Panadol', stock: 2151, img: 'img/bell.svg' },
        { name: 'Panadol', stock: 2151, img: 'img/bell.svg' }
    ]
};



$(document).ready(function() {

    // TOASTER CONIGS
    toastr.options = {
        'closeButton': true,
        'debug': false,
        'newestOnTop': false,
        'progressBar': false,
        'positionClass': 'toast-top-right',
        'preventDuplicates': false,
        'showDuration': '1000',
        'hideDuration': '1000',
        'timeOut': '5000',
        'extendedTimeOut': '1000',
        'showEasing': 'swing',
        'hideEasing': 'linear',
        'showMethod': 'fadeIn',
        'hideMethod': 'fadeOut',
    }

    // INITIAL LOADER
    setTimeout(function() {
        $('.loader').css('display', 'none');
    }, 1500);

    // CAMERA PROPERTIES
    var video = document.getElementById('video');

    // PROMOTION SLIDER IMAGES
    var images = ["offer1.jpg", "offer2.png", "offer3.jpg", "offer4.jpg", "offer5.jpg", "offer6.jpg"];

    // SCROLL RSTRICTIONS AND FUNCTIONALITIES
    var wrap = $("#cont");
    var el = $("#wrap");
    wrap.on("scroll", function(e) {
        if ($(".page").height() < 450) {
            return;
        }
        // if (this.scrollTop > 167) {
        //     el.addClass("scroll-enable");
        // } else {
        //     el.removeClass("scroll-enable");
        // }
    });

    // SEARCH FILTER
    $(".search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#general-product-table tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


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

    // TEMPLATE ROUTINGS
    $("#btnViewCart").click(function() {
        toastr.success('Products loaded successfully...');
    });
    $('#btn-about-us').click(event => {
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/about.html';
    });
    $('#btn-contact-us').click(() => {
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/contact.html';
    });

    $('#btn-Delivery-info').click(() => {
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/delivery-info.html';
    });

    $('#btn-db').click(() => {
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/dashboard.html';
    });

    // OPEN CAMERA
    $('.btn-mic').click(event => {
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        let finalTranscript = '';
        let recognition = new window.SpeechRecognition();
        recognition.interimResults = true;
        recognition.maxAlternatives = 10;
        recognition.continuous = true;
        recognition.onresult = (event) => {
            let interimTranscript = '';
            for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
                let transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                } else {
                    interimTranscript += transcript;
                    if (interimTranscript.toLowerCase() === "clear") {
                        window.location.reload();
                    }
                    $("#general-product-table tr").filter(function() {
                        $(this).toggle($(this).text().toLowerCase().indexOf(interimTranscript) > -1)
                    });
                }
            }
            // document.querySelector('body').innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>';
        }
        recognition.start();
        // $('#video').css('display', 'inline-block');
        // $('.camera-close').css('display', 'unset');
        // // Grab elements, create settings, etc.
        // var video = document.getElementById('video');

        // // Get access to the camera!
        // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        //     // Not adding `{ audio: true }` since we only want video now
        //     navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //         //video.src = window.URL.createObjectURL(stream);
        //         video.srcObject = stream;
        //         video.play();
        //     });
        // }
    });

    // CLOSE CAMERA
    $('#cam-close').click(event => {
        $('#video').css('display', 'none');
        $('.camera-close').css('display', 'none');
        var video = document.getElementById('video');

        // Get access to the camera!
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Not adding `{ audio: true }` since we only want video now
            navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
                //video.src = window.URL.createObjectURL(stream);
                stream.forEach(function(track) { //in case... :)
                    track.stop();
                });
                video.srcObject = null;
                stream.stop();
            });
        }
    });

    // CATEGORY CLICK
    $('.category').click(event => {
        switch (event.target.innerText.toLowerCase()) {
            case 'electronics':
                setCategoryData(categories.electronics);
                break;
            case 'health & beauty':
                setCategoryData(categories.health);
                break;
            case 'clear filter':
                window.location.reload();
                break;
        }
    });

    function setCategoryData(param) {
        var div = document.getElementById('modalbody');
        div.innerHTML = "";
        for (var x = 0; x < param.length; x++) {
            var textnode = "<div id='cat' class='sub-cat horizontal'>" +
                "<img src='" + param[x].img + "'>" +
                "<span style='flex:1;' class='vertical'>" + param[x].name + "</span>" +
                "<strong class='vertical'> (" + param[x].stock + ") </strong>" +
                "</div>";
            div.innerHTML += textnode;
        }
    }

    // SUB-CATEGORY CLICK
    $('#modalbody').click(event => {
        switch (event.currentTarget.children[0].children[1].innerText.toLowerCase()) {
            case 'all in electronics':
                categorizeProducts('electronics');
                break;
            case 'all in health & beauty':
                categorizeProducts('health & beauty');
                break;
        }
    });

    function categorizeProducts(param) {
        // $('#general-product-table').innerHTML = "<tr></tr>";
        // $("#general-product-table").empty();
        $("#general-product-table").find("tr:gt(0)").remove();
        arrProducts.forEach((item, key) => {
            if (item.category.toLowerCase() !== param) {
                return;
            }
            let genNode =
                "<tr class='seperate'><td class='gen-td'>" +
                "<div class='gen-item-card item-card vertical'>" +
                "<div class='card-content-1'>" +
                "<span class='add-to-fav' id='" + (key + 1) + "'>" + (item.isFavourite ? "<i class='fa fa-heart' aria-hidden='true'> </i>" : "<i class='fa fa-heart-o' aria-hidden='true'> </i>") + "</span>" +
                "<span> <i class='fa fa-share-alt' aria-hidden='true'></i> </span>" +
                "</div>" +
                "<div class='card-content-2 vertical'>" +
                "<img src=" + item.image[0] + ">" +
                "</div>" +
                "<div class='card-content-3 vertical'>" +
                "<span>" + item.name + "</span>" +
                "<span> <strong> Rs." + item.price + "</strong> </span>" +
                "</div>" +
                "</div>" +
                "</td></tr>";
            $('#general-product-table tr:last').after(genNode);
        });
        $("#clear-filter").css('display', 'flex');
        $("#close-mod").click();
    }

    // INITIAL ITEM CATEGORIZE AND INSERTION
    arrProducts.forEach((item, key) => {
        if (item.isFavourite) {
            let favNode =
                "<tr><td class='fav-td' id='" + item.id + "'>" +
                "<div class='item-card favourite vertical'>" +
                "<div class='card-content-1'>" +
                "<span> <i class='fa fa-heart' aria-hidden='true'></i> </span>" +
                "<span id='share-btn'> <i class='fa fa-share-alt' aria-hidden='true'></i> </span>" +
                "</div>" +
                "<div class='card-content-2 vertical'>" +
                "<img src=" + item.image[0] + ">" +
                "</div>" +
                "<div class='card-content-3 vertical'>" +
                "<span>" + item.name + "</span>" +
                "<span> <strong> Rs." + item.price + "</strong> </span>" +
                "</div>" +
                "</div>" +
                "</td></tr>";
            $('#fav-product-table tr:last').after(favNode);
        }
        let genNode =
            "<tr class='seperate'><td class='gen-td' id='" + item.id + "'>" +
            "<div class='gen-item-card item-card vertical'>" +
            "<div class='card-content-1'>" +
            "<span class='add-to-fav' id='" + (key + 1) + "'>" + (item.isFavourite ? "<i class='fa fa-heart' aria-hidden='true'> </i>" : "<i class='fa fa-heart-o' aria-hidden='true'> </i>") + "</span>" +
            "<span id='share-btn'> <i class='fa fa-share-alt' aria-hidden='true'></i> </span>" +
            "</div>" +
            "<div class='card-content-2 vertical'>" +
            "<img src=" + item.image[0] + ">" +
            "</div>" +
            "<div class='card-content-3 vertical'>" +
            "<span>" + item.name + "</span>" +
            "<span> <strong> Rs." + item.price + "</strong> </span>" +
            "</div>" +
            "</div>" +
            "</td></tr>";
        $('#general-product-table tr:last').after(genNode);
    });

    // ADD ITEM TO FAVOURITE
    $('.add-to-fav').click(event => {
        var item = arrProducts[event.currentTarget.id - 1];
        if (item.isFavourite) {
            toastr.warning("Already Exists in Favourites!");
            return;
        }
        $("#info").css('display', 'none');
        let favNode =
            "<tr><td>" +
            "<div class='item-card favourite vertical'>" +
            "<div class='card-content-1'>" +
            "<span> <i class='fa fa-heart' aria-hidden='true'></i> </span>" +
            "<span id='share-btn'> <i class='fa fa-share-alt' aria-hidden='true'></i> </span>" +
            "</div>" +
            "<div class='card-content-2 vertical'>" +
            "<img src=" + item.image[0] + ">" +
            "</div>" +
            "<div class='card-content-3 vertical'>" +
            "<span>" + item.name + "</span>" +
            "<span> <strong> Rs." + item.price + "</strong> </span>" +
            "</div>" +
            "</div>" +
            "</td></tr>";
        $('#fav-product-table tr:last').after(favNode);
        event.currentTarget.children[0].className = "fa fa-heart";
        arrProducts[event.currentTarget.id - 1].isFavourite = true;
        toastr.success("Successfully added to favourites");
    });


    $('#hide-share-wrapper').click(() => {
        $(".share-wrapper").css('transform', 'translateY(36vw)');
    });

    $(document).ready(function() {
        // SHARE VIEW
        $("#share-btn").click(() => {
            $(".share-wrapper").css('transform', 'translateY(0)');
        });
    });

    $(".card-content-2").click((ev) => {
        window.sessionStorage.setItem("selectedProduct", JSON.stringify(arrProducts[ev.currentTarget.parentNode.parentNode.id - 1]));
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/view-item.html';
    });

    // $(".fav-td").click((ev) => {
    //     window.sessionStorage.setItem("selectedProduct", JSON.stringify(arrProducts[ev.currentTarget.parentNode.parentNode.id - 1]));
    // });
});