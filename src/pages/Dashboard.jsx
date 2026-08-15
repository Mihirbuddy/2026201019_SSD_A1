import { users } from "../data/users";

function Dashboard({ currentUser }) {

  const students = users.filter((user) => user.role === "student");
  const teachers = users.filter((user) => user.role === "teacher");
  return (
    <div className="page">
      <h1>Dashboard</h1>

      <p>
        Welcome, <strong>{currentUser.name}</strong>!
      </p>

      <section>
        <h2>Students</h2>
      </section>

      <section>
        <h2>Teachers</h2>
      </section>
    </div>
  );
}

export default Dashboard;