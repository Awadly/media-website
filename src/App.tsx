import "./App.css";
import Navbar from "./components/Navbar";
import MediaList from "./components/MediaList";
import UploadButton from "./components/UploadButton";
import { useMedia } from "./hooks/useMedia";
import { useTheme } from "./hooks/useTheme";

const App: React.FC = () => {
  const { media, handleLike, handleUpload } = useMedia();
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div className="container">
      <Navbar isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      <MediaList media={media} onLike={handleLike} />
      <UploadButton
        onUpload={(event) => handleUpload(event.target.files?.[0] as File)}
      />
    </div>
  );
};

export default App;
