import { useState } from "react";

const Form = ({
  createRoom,
  hostName,
  setHostName,
  joinName,
  setJoinName,
  getRoomId,
  handleGenerate,
  getJoinInput,
  setJoinInput,
  handleCreateRoom,
  handleJoinRoom,
}) => {
  return (
    <div className="mx-auto w-[400px] h-[400px] text-center p-10 border-2">
      <h2 className="text-5xl font-bold mb-14">
        {createRoom ? "Create Room" : "Join Room"}
      </h2>
      <input
        type="text"
        placeholder="Enter username"
        className="input input-bordered w-full max-w-xs"
        value={createRoom ? hostName : joinName}
        onChange={createRoom ? setHostName : setJoinName}
      />
      <div className="mt-7 flex gap-2">
        <input
          type="text"
          value={createRoom ? getRoomId : getJoinInput}
          placeholder={createRoom ? "Generate Key" : "Enter room key"}
          className="input input-bordered w-full max-w-xs"
          disabled={createRoom}
          onChange={(e) => setJoinInput(e.target.value)}
        />
        {createRoom && (
          <>
            <button className="btn" onClick={handleGenerate}>
              Generate
            </button>
            <button className="btn btn-outline">Copy</button>
          </>
        )}
      </div>
      <button
        className="btn btn-primary mt-7 w-full"
        onClick={createRoom ? handleCreateRoom : handleJoinRoom}
      >
        {createRoom ? "Create Room" : "Join Room"}
      </button>
    </div>
  );
};

export default Form;
