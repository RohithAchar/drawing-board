import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ createRoom }) => {
  const [roomId, setRoomId] = useState(uuidv4());
  const [joinInput, setJoinInput] = useState("");

  return (
    <div className="mx-auto w-[400px] h-[400px] text-center p-10 border-2">
      <h2 className="text-5xl font-bold mb-14">
        {createRoom ? "Create Room" : "Join Room"}
      </h2>
      <input
        type="text"
        placeholder="Enter username"
        className="input input-bordered w-full max-w-xs"
      />
      <div className="mt-7 flex gap-2">
        <input
          type="text"
          value={createRoom ? roomId : joinInput}
          placeholder={createRoom ? "Generate Key" : "Enter room key"}
          className="input input-bordered w-full max-w-xs"
          disabled={createRoom}
          onChange={(e) => setJoinInput(e.target.value)}
        />
        {createRoom && (
          <>
            <button className="btn" onClick={() => setRoomId(uuidv4())}>
              Generate
            </button>
            <button className="btn btn-outline">Copy</button>
          </>
        )}
      </div>
      <button className="btn btn-primary mt-7 w-full">
        {createRoom ? "Create Room" : "Join Room"}
      </button>
    </div>
  );
};

export default Form;
