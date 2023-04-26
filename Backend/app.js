const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();
app.use(cors());
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT"],
  }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let users = [];
let results = [];
let placedShips = [];

io.on('connection', (socket) => {
  io.socketsJoin('game1');
  console.log('user connected: ' + socket.id);
  // io.emit('create-user', users);
  setTimeout(() => {
    socket.emit('create-user', users);
    console.log('Users sent: ', users);
  }, 100);
  io.emit('result', results);

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
  })

  socket.on('create-user', (user) => {
    users.push(user);
    console.log('Users: ', users);
    // console.log("Users: ", users[1].user);
    io.emit('create-user', users);
  });

  socket.on('chat', (message) => {
    console.log('Message: ', message);
    io.emit('chat', message);
  });

  socket.on('color-change', (colorChangeInfo) => {
    console.log(colorChangeInfo);
    const foundShip = placedShips.find(
      (ship) => ship.y === colorChangeInfo.y && ship.x === colorChangeInfo.x
    );
    console.log(foundShip);
    io.emit('color-change', colorChangeInfo);
    if (foundShip) {
      const hitter = { color: colorChangeInfo.user.color };
      const hittee = { color: foundShip.user.color };
      const result = { hitter, hittee };
      results.push(result);
      console.log(results);
      io.emit('ship-hit', foundShip);
      socket.emit('hitter', {hit: true})
    }
  });

  socket.on('game-reset', () => {
    io.emit('game-reset');
  });

  socket.on('result', (user) => {
    results.push(user);
    console.log('Result Users: ', results);
    io.emit('result', results);
  });

  socket.on('ship-placement', (placementInfo) => {
    console.log(placementInfo);
    placedShips.push(placementInfo);
    if (placedShips.length === users.length) {
      //  && placedShips.length >= 4
      io.emit('start-game', { gameStarted: true });
    }
  });
  
  socket.on('clear-everything', () => {
    users = [];
    results = [];
    placedShips = [];
    console.log('Reset');
    console.log('users: ', users);
    console.log('placedShips: ', placedShips);
    console.log('results: ', results);
  })
});

app.get('/test', (req, res) => {
  console.log('fetch gjord!');
  res.json('Det funkar');
})

var port = process.env.PORT || "8080";
server.listen(port, () => {
  console.log('Server running...');
});

// module.exports = { app: app, server: server };
