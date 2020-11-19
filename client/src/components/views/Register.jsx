import { useState } from "react";
import { registerUser } from "../../actions/user_actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataToSubmit = {
      email: email,
      password: password,
      name: name,
      lastname: lastname,
    };
    dispatch(registerUser(dataToSubmit)).then((res) => {
      if (res.payload.success) {
        history.push("/login");
      } else {
        console.log(res.payload.err);
      }
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h3>
          Register <span className="under"></span>
        </h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Lastname"
        />
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

        <button type="submit" className="signup-btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
