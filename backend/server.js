const express = require("express");
const app = express();

const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// routes
app.get("/", (req, res) => {
  res.send("Mern realtime whiteboard");
});

const users = [];

function addUser(userName, userID, roomId) {
  users.push({ userName, userID, roomId });
}
function removeUser(id) {
  const index = users.findIndex((user) => user.userID === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

io.on("connection", (socket) => {
  socket.on("userJoined", (data) => {
    const { userName, userID, roomId } = data;
    socket.join(roomId);
    addUser(userName, userID, roomId);
    io.in(roomId).emit("userIsJoined", { success: true, users });
    console.log("Server USers", users);
  });

  socket.on("drawing", (data) => {
    if (data.user)
      io.in(data.user.roomId).emit("drawing", {
        user: data.user,
        element: data.element,
      });
  });

  socket.on("text", (data) => {
    if (data.user)
      io.in(data.user.roomId).emit("textRes", {
        user: data.user,
        element: data.element,
      });
  });

  socket.on("clear", (data) => {
    if (data) io.in(data.roomId).emit("clearRes");
  });

  socket.on("undo", (data) => {
    if (data) io.in(data.user.roomId).emit("undoRes", data);
  });

  socket.on("redo", (data) => {
    if (data) socket.to(data.user.roomId).emit("redoRes", data);
  });

  socket.on("userLeft", (data) => {
    removeUser(data.userID);
    console.log("USers :", users);
  });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log("server is running on localhost:5000"));
