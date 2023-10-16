import React, { useState } from "react";
import { useHistory , Link} from "react-router-dom";

function AdminLogin() {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");
  const history = useHistory();

  async function adminLogin(event) {
    event.preventDefault();

    // Replace this with your actual admin credentials stored in the frontend
    const adminCredentials = {
      email: "sri@gmail.com",
      password: "sri123",
    };

    if (
      adminEmail === adminCredentials.email &&
      adminPassword === adminCredentials.password
    ) {
      // Admin login successful
      // Set a flag or token for admin access
      localStorage.setItem("isAdminLoggedIn", "true");

      // Redirect the admin to the admin dashboard or page
      history.push("/admin");
    } else {
      // Admin login failed
      setAdminError("Invalid admin credentials");
    }
  }

  return (
    <div>
      <div className="conta">
        <div className="ro">
          <h2>Admin Login</h2>
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
                  id="adminEmail"
                  placeholder="Enter Admin Email"
                  value={adminEmail}
                  onChange={(event) => {
                    setAdminEmail(event.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="adminPassword"
                  placeholder="Enter Admin Password"
                  value={adminPassword}
                  onChange={(event) => {
                    setAdminPassword(event.target.value);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={adminLogin}>
                Admin Login
              </button>
              <p>Not a Admin? <a href="/">User Login</a></p>
              {adminError && <div className="alert alert-danger">{adminError}</div>}

         
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
