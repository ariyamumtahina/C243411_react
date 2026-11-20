
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-welcome">
        <h1>My Dashboard 🎨</h1>
        <p>Welcome to ArtArchive!</p>
        <p>Your creative journey starts here.</p>
        <p>You have successfully logged in.</p>
      </div>

      <div className="dashboard-card">
        <h2>Welcome Back!</h2>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          Explore beautiful artworks and discover your creativity.
        </p>
      </div>

      <div className="dashboard-card">
        <h2>Explore Your ArtArchive Account</h2>
        <p>
          ArtArchive is your place to discover artworks
          and enjoy the beauty of creativity.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
