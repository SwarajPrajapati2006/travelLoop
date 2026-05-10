import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
      <Link to="/" className="text-xl font-bold text-blue-600">Voyage</Link>
      <div className="flex gap-4">
        {user ? (
          <>
            <Link to="/my-trips">My Trips</Link>
            <Link to="/community">Community</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={logout} className="text-red-500">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
