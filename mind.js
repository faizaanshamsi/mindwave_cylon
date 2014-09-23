var Cylon = require('cylon');
var io = require('socket.io').listen(3000);


Cylon.robot({
  connection: {
    name: 'neurosky',
    adaptor: 'neurosky',
    port: '/dev/tty.MindWaveMobile-DevA'
  },

  device: { name: 'headset', driver: 'neurosky' },

  work: function(my) {
    my.headset.on('attention', function(data) {
      console.log("attention:" + data);
      io.emit("attention", data)
    });
    my.headset.on('meditation', function(data) {
      console.log("meditation:" + data);
      io.emit("meditation", data)
    });
  }
}).start();

//
// io.sockets.on('connection', function (socket) {
//
//     socket.on('message', function (message) {
//         console.log("Got message: " + message);
//         io.sockets.emit('pageview', { 'url': message });
//     });
//
// });
