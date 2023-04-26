const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const { instrument } = require('@socket.io/admin-ui');

const app = express();
app.use(cors());
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: ['*', 'https://admin.socket.io'],
    methods: ['GET', 'POST', 'PUT'],
  },
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let users = [];
let results = [];
let placedShips = [];

const gameIo = io.of('/game');

gameIo.on('connection', (socket) => {
  console.log('user connected: ' + socket.id);
  gameIo.emit('created-users', [...users]);
  console.log('Users sent: ', users);
  gameIo.emit('result', results);

  socket.on('error', (err) => {
    console.log('Error: ', err);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
  });

  socket.on('create-user', (user) => {
    users.push(user);
    console.log('Users: ', users);
    // console.log("Users: ", users[1].user);
    gameIo.emit('create-user', users);
  });

  socket.on('chat', (message) => {
    console.log('Message: ', message);
    gameIo.emit('chat', message);
  });

  socket.on('color-change', (colorChangeInfo) => {
    console.log(colorChangeInfo);
    const foundShip = placedShips.find(
      (ship) => ship.y === colorChangeInfo.y && ship.x === colorChangeInfo.x
    );
    console.log(foundShip);
    gameIo.emit('color-change', colorChangeInfo);
    if (foundShip) {
      const hitter = { color: colorChangeInfo.user.color };
      const hittee = { color: foundShip.user.color };
      const result = { hitter, hittee };
      results.push(result);
      console.log(results);
      gameIo.emit('ship-hit', foundShip);
      socket.emit('hitter', { hit: true });
    }
  });

  socket.on('game-reset', () => {
    gameIo.emit('game-reset');
  });

  socket.on('result', (user) => {
    results.push(user);
    console.log('Result Users: ', results);
    gameIo.emit('result', results);
  });

  socket.on('ship-placement', (placementInfo) => {
    console.log(placementInfo);
    placedShips.push(placementInfo);
    if (placedShips.length === users.length) {
      //  && placedShips.length >= 4
      gameIo.emit('start-game', { gameStarted: true });
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
  });
});

instrument(io, { auth: false });

app.get('/test', (req, res) => {
  console.log('fetch gjord!');
  res.json('Det funkar');
});

var port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log('Server running...');
});

// module.exports = { app: app, server: server };
