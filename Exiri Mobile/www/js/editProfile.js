var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }
};

$(document).ready(function() {
    $('#back-btn').click(event => {
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/product.html';
    });
});

