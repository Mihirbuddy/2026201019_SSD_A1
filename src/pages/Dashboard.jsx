function Dashboard({ currentUser }) {
  return (
    <div className="page">
      <h1>Dashboard</h1>

      <p>
        Welcome, <strong>{currentUser.name}</strong>!
      </p>
    </div>
  );
}

export default Dashboard;