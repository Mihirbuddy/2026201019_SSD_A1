function Settings({ currentUser, onNameChange }) {
  return (
    <div className="page">
      <h1>Settings</h1>

      <form className="settings-form">
        <label>Change your name</label>

        <input type="text" />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default Settings;