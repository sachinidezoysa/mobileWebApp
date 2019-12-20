$(document).ready(function() {
    $('#btn-back-to-product').click(event => {
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/product.html';
    });

    $('#btn-edit-user').click(() => {
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/editProfile.html';
    });
});


    