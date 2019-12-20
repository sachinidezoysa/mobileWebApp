$(document).ready(() => {
    var item = JSON.parse(sessionStorage.getItem('selectedProduct'));
    var loggedUser = { name: 'Shifan', image: 'img/user.svg' };
    var wrapper = $(".section-1-A");
    wrapper[0].innerHTML =
        "<div class='img-header'>" +
        "<span> <li id='back-button' class='f-icon fa fa-angle-left' aria-hidden='true'></li> </span>" +
        "<span></span>" +
        "<span class='vertical'>" + item.name + "</span>" +
        "<span> <li class='f-icon fa fa-heart' aria-hidden='true'></li> </span>" +
        "<span> <li class='f-icon fa fa-share' aria-hidden='true'></li> </span>" +
        "</div>" +
        "<div class='img-wrapper zoom ex2'>" +
        "<img id='main-img' src='" + item.image[0] + "' alt='view-item-img'>" +
        "<div class='vertical'>" +
        "<span class='price'> Rs." + item.price + "</span>" +
        "<span class='rank'> <i class='fa fa-star' aria-hidden='true'></i>" + (item.reviews.length ? getReviews(item.reviews) : 'No Ratings') + "</span>" +
        "</div>" +
        "</div>";

    var arrImage = "<div class='img-array horizontal'>";
    item.image.forEach(el => {
        var node =
            "<div>" +
            "<img class='img-tile' src='" + el + "' alt='img-element'>" +
            "</div>";
        arrImage += node;
    });
    wrapper[0].innerHTML += arrImage + "</div>";

    var currentSelection = {
        quantity: 1
    };

    activateTab(1);
    // loadInnerHTMLForTab1();

    $('.ex2').zoom({ on: 'grab' });

    // TAB SWITCH LISTENER
    $('.tab').click((ev) => {
        var index = ev.currentTarget.id;
        index = parseInt(index.charAt(index.length - 1));
        activateTab(index);
    });

    $('.img-tile').click((ev) => {
        $('#main-img')[0].src = ev.currentTarget.src;
    });

    function activateTab(param) {
        deactivateTabs();
        switch (param) {
            case 1:
                $("#tab-1").css('color', '#ff4903');
                $("#tab-1").css('font-weight', 'bold');
                $(".tab-content-1").css('display', 'flex');
                // loadInnerHTMLForTab1();
                break;
            case 2:
                $("#tab-2").css('color', '#ff4903');
                $("#tab-2").css('font-weight', 'bold');
                $(".tab-content-2").css('display', 'flex');
                // loadInnerHTMLForTab2();
                break;
            case 3:
                $("#tab-3").css('color', '#ff4903');
                $("#tab-3").css('font-weight', 'bold');
                $(".tab-content-3").css('display', 'flex');
                // loadInnerHTMLForTab3();
                break;
        }
    }

    loadInnerHTMLForTab1();
    loadInnerHTMLForTab2();
    loadInnerHTMLForTab3();
    $(".tab-content-2").css('display', 'none');
    $(".tab-content-3").css('display', 'none');

    function getReviews(param) {
        return '5';
    }

    function deactivateTabs() {
        $(".tab-content-1").css('display', 'none');
        $(".tab-content-2").css('display', 'none');
        $(".tab-content-3").css('display', 'none');
        $("#tab-1").css('color', '#0e0e0e');
        $("#tab-1").css('font-weight', 'none');
        $("#tab-2").css('color', '#0e0e0e');
        $("#tab-2").css('font-weight', 'none');
        $("#tab-3").css('color', '#0e0e0e');
        $("#tab-3").css('font-weight', 'none');
    }

    function loadInnerHTMLForTab1() {
        let node = "<div class='tab-content-1 vertical'>";
        if (item.colors) {
            node +=
                "<div> <span class='light-title'> Select Color </span>" +
                "<div class='clr-selector-wrapper horizontal'>";
            item.colors.forEach(color => {
                node +=
                    "<span class='clr-selector' style='background-color: " + color + "'>  </span>";
            });
            node += "</div> </div>";
        }

        if (item.sizes) {
            node +=
                "<div> <span class='light-title'> Select size </span>" +
                "<div class='size-wrapper horizontal'>";
            item.sizes.forEach(size => {
                node +=
                    "<span class='size-selector'>" + size + "</span>";
            });
            node += "</div> </div>";
        }

        node +=
            "<div> <span class='light-title'> Select Quantity </span>" +
            "<div class='count-wrapper horizontal'>" +
            "<span class='counter-level'> - </span>" +
            "<span class='quantity-counter'> 1 </span>" +
            "<span class='counter-level'> + </span>" +
            "</div></div>";
        // FINAL CLOSE
        node += "</div>";
        var wrapper = $(".tab-content");
        wrapper[0].innerHTML += node;
    }

    function loadInnerHTMLForTab2() {
        let node = "<div class='tab-content-2 vertical'>";

        if (item.description) {
            item.description.forEach((desc, key) => {
                node +=
                    "" + ((key % 2 === 1) ? "<div style='text-align: right'>" : "<div>") +
                    "<strong>" + desc.split(':')[0] + "</strong>" +
                    "<span>" + desc.split(':')[1] + "</span>" +
                    "</div>";
            });
            node += "</div>";
        }

        // FINAL CLOSE
        node += "</div>";
        var wrapper = $(".tab-content");
        wrapper[0].innerHTML += node;

        var wrapper2 = $("#view-2");
        wrapper2[0].innerHTML = node;
    }

    function loadInnerHTMLForTab3() {
        let node =
            "<div class='tab-content-3 vertical'>" +
            "<div class='post-review-wrapper horizontal'>" +
            "<span class='post'> Post </span>" +
            "<div class='vertical'>" +
            "<img class='rater-image' src='" + loggedUser.image + "' alt='user-profile'>" +
            "</div>" +
            "<div class='vertical rater-input-wrapper'>" +
            "<span class='horizontal str-wrapper'>" +
            "<li class='fa fa-star-o str-1' aria-hidden='true'></li>" +
            "<li class='fa fa-star-o str-2' aria-hidden='true'></li>" +
            "<li class='fa fa-star-o str-3' aria-hidden='true'></li>" +
            "<li class='fa fa-star-o str-4' aria-hidden='true'></li>" +
            "<li class='fa fa-star-o str-5' aria-hidden='true'></li>" +
            "</span>" +
            "<span>" +
            "<textarea class='rating-field' type='text'></textarea>" +
            "</span>" +
            "</div>" +
            "</div>";

        if (item.reviews.length) {
            item.reviews.forEach((item, key) => {
                node +=
                    "<div class='horizontal'>" +
                    "<div class='vertical'>" +
                    "<img class='user-profile' src='" + item.image + "' alt='user-profile'>" +
                    "</div>" +
                    "<div class='mid-content vertical'>" +
                    "<span>" + getStars(item.rating) + "</span>" +
                    "<span>" + item.name + "</span>" +
                    "<span>" + item.comment + "</span>" +
                    "</div>" +
                    "<div>" + item.date + "</div>" +
                    "</div>";
            });
            node += "</div>";
        }

        // FINAL CLOSE
        node += "</div>";
        var wrapper = $(".tab-content");
        wrapper[0].innerHTML += node;

        var wrapper2 = $("#view-3");
        wrapper2[0].innerHTML = node;
    }

    function getStars(param) {
        var result = "";
        switch (param) {
            case 0:
                result =
                    "<li class='fa fa-star-o' aria-hidden='true'></li>" +
                    "<li class='fa fa-star-o' aria-hidden='true'></li>" +
                    "<li class='fa fa-star-o' aria-hidden='true'></li>" +
                    "<li class='fa fa-star-o' aria-hidden='true'></li>" +
                    "<li class='fa fa-star-o' aria-hidden='true'></li>";
                break;
            case 1:
                result =
                    "<li class='fa fa-star' aria-hidden='true'></li>" +
                    "<li class='fa fa-star-o' aria-hidden='true'></li>" +
                    "<li class='fa fa-star-o' aria-hidden='true'></li>" +
                    "<li class='fa fa-star-o' aria-hidden='true'></li>" +
                    "<li class='fa fa-star-o' aria-hidden='true'></li>";
                break;
            case 2:
                result =
                    "<li class='fa fa-star' aria-hidden='true'></li>" +
                    "<li class='fa fa-star' aria-hidden='true'></li>" +
                    "<li class='fa fa-star-o' aria-hidden='true'></li>" +
                    "<li class='fa fa-star-o' aria-hidden='true'></li>" +
                    "<li class='fa fa-star-o' aria-hidden='true'></li>";
                break;
            case 3:
                result =
                    "<li class='fa fa-star' aria-hidden='true'></li>" +
                    "<li class='fa fa-star' aria-hidden='true'></li>" +
                    "<li class='fa fa-star' aria-hidden='true'></li>" +
                    "<li class='fa fa-star-o' aria-hidden='true'></li>" +
                    "<li class='fa fa-star-o' aria-hidden='true'></li>";
                break;
            case 4:
                result =
                    "<li class='fa fa-star' aria-hidden='true'></li>" +
                    "<li class='fa fa-star' aria-hidden='true'></li>" +
                    "<li class='fa fa-star' aria-hidden='true'></li>" +
                    "<li class='fa fa-star' aria-hidden='true'></li>" +
                    "<li class='fa fa-star-o' aria-hidden='true'></li>";
                break;
            case 5:
                result =
                    "<li class='fa fa-star' aria-hidden='true'></li>" +
                    "<li class='fa fa-star' aria-hidden='true'></li>" +
                    "<li class='fa fa-star' aria-hidden='true'></li>" +
                    "<li class='fa fa-star' aria-hidden='true'></li>" +
                    "<li class='fa fa-star' aria-hidden='true'></li>";
                break;
        }
        return result;
    }

    // NAVIGATE TO PRODUCTS PAGE
    $('#back-button').click(() => {
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/product.html';
    });

    $(".clr-selector").click((ev) => {
        currentSelection.color = ev.currentTarget.style.backgroundColor;
    });

    $(".size-selector").click((ev) => {
        currentSelection.size = ev.currentTarget.innerHTML;
    });

    $(".counter-level").click((ev) => {
        if (ev.currentTarget.innerText === "-") {
            if (currentSelection.quantity === 1) {
                toastr.warning("Quantity cannot be 0!");
                return;
            }
            currentSelection.quantity--;
        } else {
            currentSelection.quantity++;
        }
        $(".quantity-counter")[0].innerText = currentSelection.quantity;
    });
});