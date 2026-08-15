import { useState } from "react";

function Settings({ currentUser, onNameChange }) {

  const [name, setName] = useState(currentUser.name);
  return (
    <div className="page">
      <h1>Settings</h1>

      <form className="settings-form">
        <label>Change your name</label>

        <input
  type="text"
  value={name}
  onChange={(event) => setName(event.target.value)}
/>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default Settings;