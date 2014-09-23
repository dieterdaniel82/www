
var app = {
    // Application Constructor
initialize: function() {
    this.bindEvents();
},
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
},
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
onDeviceReady: function() {
    app.receivedEvent('deviceready');
    var map = new GoogleMap();
    map.initialize();
},
    // Update DOM on a Received Event
receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    console.log('Received Event: ' + id);
    
    /*navigator.geolocation.getCurrentPosition(function(position) {
                                             alert('Latitude: '          + position.coords.latitude          + '\n' +
                                                   'Longitude: '         + position.coords.longitude         + '\n' +
                                                   'Altitude: '          + position.coords.altitude          + '\n' +
                                                   'Accuracy: '          + position.coords.accuracy          + '\n' +
                                                   'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                                                   'Heading: '           + position.coords.heading           + '\n' +
                                                   'Speed: '             + position.coords.speed             + '\n' +
                                                   'Timestamp: '         + position.timestamp                + '\n');
                                             },
                                             function (error) {
                                             alert (error);
                                             },
                                             {
                                             maximumAge: 3000,
                                             timeout: 5000,
                                             enableHighAccuracy: true
                                             });*/
}
};
