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
        // toastr.success('Products loaded successfully...');
    $('#back-button').click(() => {
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/product.html';
    });

    $('#btn-submit').click(() => {
        toastr.success('Products loaded successfully...');
    });

    $('#btn-edit-user').click(() => {
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/editProfile.html';
    });

});

