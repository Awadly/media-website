type Props = {
  isDarkMode: boolean;
  onToggle: () => void;
};

const Navbar: React.FC<Props> = ({ isDarkMode, onToggle }) => (
  <nav className="navbar">
    <h1 className="navbar-title">Media App</h1>
    <button onClick={onToggle} className="theme-toggle-button">
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  </nav>
);

export default Navbar;
