const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

let users = [];

io.on("connection", (socket) => {
  console.log("user connected: " + socket.id);
  io.emit('create-user', users)

  socket.on("create-user", (user) => {
    users.push(user);
    console.log("Users: ", users);
    // console.log("Users: ", users[1].user);
    io.emit("create-user", users);
  });

  socket.on("chat", (message) => {
    console.log("Message: ", message);
    io.emit("chat", message);
  });

  socket.on('color-change', (colorChangeInfo) => {
    console.log(colorChangeInfo);
    io.emit('color-change', colorChangeInfo)
  })

  socket.on('game-reset', () => {
    io.emit('game-reset');
  })
});

module.exports = { app: app, server: server };
