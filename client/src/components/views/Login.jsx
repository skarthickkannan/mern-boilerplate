import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/user_actions";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      email: email,
      password: password,
    };
    dispatch(loginUser(dataToSubmit)).then((res) => {
      if (res.payload.loginSuccess) {
        localStorage.setItem("token", res.payload.user.token);
        history.push("/");
      } else {
        setFormErrorMessage("Check out your Account or Password again");
      }
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h3>
          Login <span className="under"></span>
        </h3>
        <h3>{formErrorMessage && formErrorMessage}</h3>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
