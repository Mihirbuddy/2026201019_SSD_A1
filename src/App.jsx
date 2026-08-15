import { useState } from "react";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function handleLogin(user) {
    setCurrentUser(user);
  }

  function handleLogout() {
    setCurrentUser(null);
  }

  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <Navbar
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      <h1>Welcome to the application</h1>
    </>
  );
}

export default App;