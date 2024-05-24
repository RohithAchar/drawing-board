import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Room from "./pages/Room";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:roomId" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
