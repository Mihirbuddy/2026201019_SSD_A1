function Navbar({ currentUser, onNavigate, onLogout }) {
  return (
    <nav className="navbar">
      <h2>Student Teacher Portal</h2>

      <div className="nav-links">
        <button onClick={() => onNavigate("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => onNavigate("profile")}>
          Profile
        </button>

        <button onClick={() => onNavigate("settings")}>
          Settings
        </button>

        <button onClick={onLogout}>
          Logout
        </button>
      </div>

      <p>
        Logged in as: <strong>{currentUser.name}</strong>
      </p>
    </nav>
  );
}

export default Navbar;