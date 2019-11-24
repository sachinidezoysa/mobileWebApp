var click = 1;
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    }
};
function myFunction() {
    if (click == 1){
        document.body.style.backgroundColor = "#00C853";
        document.getElementById("calendarImage").src='img/loyalty.svg';
        document.getElementById("change-content").innerHTML = "USER FRIENDLY";
        click++;
    } else {
        document.body.style.backgroundColor = "#FFCC80";
        document.getElementById("calendarImage").src='img/world-globe.svg';
        document.getElementById("change-content").innerHTML = "ALL-IN-ONE";
        click = 1;
    }
}