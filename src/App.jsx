import { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import Navbar from "./components/Navbar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("dashboard");

  function handleLogin(user) {
    setCurrentUser(user);
    setCurrentPage("dashboard");
  }

  function handleLogout() {
    setCurrentUser(null);
    setCurrentPage("dashboard");
  }

  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <Navbar
        currentUser={currentUser}
        onNavigate={setCurrentPage}
        onLogout={handleLogout}
      />

      {currentPage === "dashboard" && (
        <Dashboard currentUser={currentUser} />
      )}

      {currentPage === "profile" && (
        <Profile currentUser={currentUser} />
      )}

      {currentPage === "settings" && (
        <Settings currentUser={currentUser} />
      )}
    </>
  );
}

export default App;