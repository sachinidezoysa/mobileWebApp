$(document).ready(function() {
    $("#btn-login").click(function(evt) {
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/product.html';
    });
    $("#btnViewCart").click(function() {
        var t = x;
        alert('PRODUCT Clicked and Listened in Index.js');
    });

    $('#pg-signup').click(() => {
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/signup.html';
    });
});

var app = {
    // Application Constructor
    initialize: function() {
        $('#btnViewCart').click(function() {
            alert('Clicked');
        });
        this.bindEvents();
    },
    // Bind Event Listeners
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        // window.location.href = window.location.href + 'login.html';
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
            // var parentElement = document.getElementById(id);

            // console.log('Received Event: ' + id);
        }
        // 
}