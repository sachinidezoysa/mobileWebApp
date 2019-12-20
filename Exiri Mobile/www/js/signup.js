$(document).ready(function() {
    $('#back-button').click(event => {
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + '/index.html';
    });
});