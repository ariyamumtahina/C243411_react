
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-icon">👤</div>

        <h1>My Profile</h1>

        <p className="profile-subtitle">
          Welcome to your ArtArchive account!
        </p>

        <div className="profile-info">
          <p><strong>Email:</strong></p>
          <p>{user?.email}</p>
        </div>

        <div className="profile-info">
          <p><strong>User ID:</strong></p>
          <p className="user-id">{user?.uid}</p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
