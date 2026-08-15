import { useState } from "react";

function Login({ onLogin }) {

  const [name, setName] = useState("");
const [role, setRole] = useState("student");
  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Student Teacher Portal</h1>

        <h2>Login</h2>

        <form>
          <label>Name</label>

          <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />

          <label>Role</label>

          <select
          value={role}
          onChange={(event) => setRole(event.target.value)}
        >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          <button type="submit">Login</button>
        </form>

        <div className="login-help">
          <p>Try these users:</p>

          <p>Student: Rahul Sharma</p>
          <p>Student: Priya Verma</p>
          <p>Teacher: Dr. Mehta</p>
          <p>Teacher: Dr. Sharma</p>
        </div>
      </div>
    </div>
  );
}

export default Login;