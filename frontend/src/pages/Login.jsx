import { useState } from "react";
import Form from "../components/Form";
import { v4 as uuidv4 } from "uuid";

const Login = () => {
  const [hostName, setHostName] = useState("");
  const [joinName, setJoinName] = useState("");
  const [joinInput, setJoinInput] = useState("");
  const [roomId, setRoomId] = useState(uuidv4());

  const handleHostName = (e) => {
    setHostName(e.target.value);
  };
  const handleJoinName = (e) => {
    setJoinName(e.target.value);
  };
  const handleGenerate = () => {
    setRoomId(uuidv4());
  };
  const handleCreateRoom = () => {
    const roomData = {
      host: true,
      hostName,
      userID: uuidv4(),
      roomId,
    };
    console.log(roomData);
  };
  const handleJoinRoom = () => {
    console.log("Hi to join");
  };

  return (
    <div
      className="flex h-screen items-center justify-center gap-16"
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
  );
};

export default Login;
