$(document).ready(function() {
    $("#btn-login").click(function(evt) {
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/product.html';
    });
    $("#btnViewCart").click(function() {
        var t = x;
        alert('PRODUCT Clicked and Listened in Index.js');
    });
});