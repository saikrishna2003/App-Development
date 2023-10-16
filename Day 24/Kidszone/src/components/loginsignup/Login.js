import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import './Login.css';

function LLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  async function login(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        // Login successful
        // Store the token in local storage
        localStorage.setItem("token", response.data.token);

        // Log the token to the console
        console.log("Token:", response.data.token);

        // Redirect the user to the home page
        history.push("/home");
      } else {
        // Login failed
        // Set the error message
        setError(response.data.message);
      }
    } catch (err) {
      // An error occurred
      // Set the error message
      setError("An error occurred while logging in.");
    }
  }

  return (
    <div>
      <div className="conta">
        <div className="ro">
          <h2>Login</h2>
          <hr />
        </div>
        <div className="ro">
          <div className="col-sm-6">
            <form>
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
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={login}>
                Login
              </button>
              <p>Not a User? <a href="/signup">Sign Up</a></p>
              <p>If you are an admin, <a href="/admin-login">login here</a>.</p>
              {error && <div className="alert alert-danger">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LLogin;
