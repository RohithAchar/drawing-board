import { useState } from "react";
import Form from "../components/Form";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import LoginHeading from "../components/LoginHeading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ socket, setUser }) => {
  const [hostName, setHostName] = useState("");
  const [joinName, setJoinName] = useState("");
  const [joinInput, setJoinInput] = useState("");
  const [roomId, setRoomId] = useState(uuidv4());
  const navigate = useNavigate();

  const handleHostName = (e) => {
    setHostName(e.target.value);
  };
  const handleJoinName = (e) => {
    setJoinName(e.target.value);
  };
  const handleGenerate = () => {
    setRoomId(uuidv4());
  };

  const handleCreateRoom = (e) => {
    e.preventDefault();
    if (hostName === "") {
      toast("Username is empty", {
        type: "warning",
      });
      return;
    }
    const roomData = {
      host: true,
      userName: hostName,
      userID: uuidv4(),
      roomId,
    };
    setUser(roomData);
    navigate(`/${roomId}`);
    socket.emit("userJoined", roomData);
  };

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (joinName === "") {
      toast("Empty username", {
        type: "warning",
      });
      return;
    }
    if (joinInput === "") {
      toast("Empty room id", {
        type: "warning",
      });
      return;
    }
    const roomData = {
      host: false,
      userName: joinName,
      userID: uuidv4(),
      roomId: joinInput,
    };
    setUser(roomData);
    navigate(`/${joinInput}`);
    socket.emit("userJoined", roomData);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(roomId)
      .then(() => {
        toast("Text copied to clipboard", {
          type: "success",
        });
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="relative">
      <LoginHeading />
      <ToastContainer />
      <div
        className="flex h-screen items-center justify-center gap-16 bg-[#161616]"
        data-theme="light"
      >
        <div>
          <Form
            createRoom={true}
            hostName={hostName}
            setHostName={handleHostName}
            getRoomId={roomId}
            handleGenerate={handleGenerate}
            handleCreateRoom={handleCreateRoom}
            handleCopy={handleCopy}
          />
        </div>
        <div>
          <Form
            createRoom={false}
            joinName={joinName}
            setJoinName={handleJoinName}
            getJoinInput={joinInput}
            setJoinInput={setJoinInput}
            handleJoinRoom={handleJoinRoom}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
