import { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory
import "./Register.css"
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const history = useHistory(); // Get the history object

  async function save(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/register", {
        name,
        email,
        password,
        role,
      });

      alert("User Registration Successfully");
      history.push("/"); // Redirect to the login page
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div className="conta mt-4">
        <div className="cardss">
          <h1>Registration</h1>

          <form>
            <div className="form-group">
              <label>User name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter Name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <input
                type="text"
                className="form-control"
                id="role"
                placeholder="Enter Role"
                value={role}
                onChange={(event) => {
                  setRole(event.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-4"
              onClick={save}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
