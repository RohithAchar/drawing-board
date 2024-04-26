import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Room from "./pages/Room";

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
