
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to ArtArchive</h1>

      <p>
        Discover beautiful artworks and explore your creativity.
      </p>

      <p>
        ArtArchive is an online platform for art lovers.
      </p>

      <div className="home-buttons">
        <Link to="/register">
          <button>Get Started</button>
        </Link>

        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
