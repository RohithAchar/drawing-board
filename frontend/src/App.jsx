import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Room from "./pages/Room";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const server = "http://localhost:5000";
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

const socket = io(server, connectionOptions);

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    socket.on("userIsJoined", (data) => {
      if (data.success) console.log("User joined");
      else console.log("Something went wrong");
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login socket={socket} setUser={setUser} />} />
        <Route path="/:roomId" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
