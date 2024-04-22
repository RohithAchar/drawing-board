import Form from "../components/Form";

const Login = () => {
  return (
    <div
      className="flex h-screen items-center justify-center gap-16"
      data-theme="light"
    >
      <div>
        <Form createRoom={true} />
      </div>
      <div>
        <Form createRoom={false} />
      </div>
    </div>
  );
};

export default Login;
