import { users } from "../data/users";
import UserCard from "../components/UserCard";

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
        <div className="user-list">
          {students.map((student) => (
            <UserCard key={student.id} user={student} />
          ))}
        </div>
      </section>

      <section>
        <h2>Teachers</h2>
        <div className="user-list">
          {teachers.map((teacher) => (
            <UserCard key={teacher.id} user={teacher} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;