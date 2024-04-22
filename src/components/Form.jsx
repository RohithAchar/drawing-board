const Form = ({ createRoom }) => {
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
      <div className="flex mt-7 gap-2">
        <input
          type="text"
          placeholder={createRoom ? "Generate Key" : "Enter room key"}
          className="input input-bordered w-full max-w-xs"
          disabled={createRoom}
        />
        {createRoom && <button className="btn">Generate</button>}
      </div>
      <button className="btn btn-primary mt-7 w-full">
        {createRoom ? "Create Room" : "Join Room"}
      </button>
    </div>
  );
};

export default Form;
