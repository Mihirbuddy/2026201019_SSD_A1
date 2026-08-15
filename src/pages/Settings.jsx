import { useState } from "react";

function Settings({ currentUser, onNameChange }) {

  const [name, setName] = useState(currentUser.name);
  function handleSubmit(event) {
  event.preventDefault();

  if (name.trim() === "") {
    alert("Name cannot be empty.");
    return;
  }

  onNameChange(name.trim());
}
  return (
    <div className="page">
      <h1>Settings</h1>

     <form className="settings-form" onSubmit={handleSubmit}>
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