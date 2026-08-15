function Profile({ currentUser }) {

  const description =
    currentUser.role === "student"
      ? "This is your student profile."
      : "This is your teacher profile.";

  const accountType =
    currentUser.role === "student" ? "Student Account" : "Teacher Account";
  return (
    <div className="page">
      <h1>Profile</h1>

      <div className="profile-card">
        <h2>{currentUser.name}</h2>

        <p>
          <strong>Role:</strong> {currentUser.role}
        </p>

        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>

        <p>
          <strong>Account Type:</strong> {accountType}
        </p>

        <p>{description}</p>

        <hr />

        <h3>Profile Summary</h3>

        <p>
          Welcome to the Student Teacher Portal. You are currently logged in
          as a {currentUser.role}.
        </p>

        <p>
          You can use the dashboard to view other users and the settings
          section to update your profile name.
        </p>
      </div>
    </div>
  );
}

export default Profile;
