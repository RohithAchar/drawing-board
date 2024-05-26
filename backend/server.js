const express = require("express");
const app = express();

const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// routes
app.get("/", (req, res) => {
  res.send("Mern realtime whiteboard");
});

io.on("connection", (socket) => {
  socket.on("userJoined", (data) => {
    const { hostName, userID, roomId } = data;
    socket.join(roomId);
    socket.emit("userIsJoined", { success: true });
  });

  socket.on("drawing", (data) => {
    console.log("SERVER DRAWING: ", data.element);
    if (data.user)
      io.in(data.user.roomId).emit("drawing", {
        user: data.user,
        element: data.element,
      });
  });

  socket.on("text", (data) => {
    if (data.user) io.in(data.user.roomId).emit("text", data.element);
  });

  socket.on("clear", (data) => {
    if (data) io.in(data.roomId).emit("clearRes");
  });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log("server is running on localhost:5000"));
