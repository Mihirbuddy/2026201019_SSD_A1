function ProfileInfo({ currentUser }) {
  return (
    <div>
      <h2>{currentUser.name}</h2>

      <p>
        <strong>Role:</strong> {currentUser.role}
      </p>

      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
    </div>
  );
}

export default ProfileInfo;