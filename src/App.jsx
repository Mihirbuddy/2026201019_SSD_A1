import { useState } from "react";

import Login from "./pages/Login";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function handleLogin(user) {
    setCurrentUser(user);
  }

  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  return <h1>Welcome to the application</h1>;
}

export default App;