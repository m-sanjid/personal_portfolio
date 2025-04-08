import { useTheme } from "@/ThemeProvider";
import { useState } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const { theme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);

  const isDark = theme === "dark";

  const handleImageError = () => {
    setImageLoaded(false);
  };

  return (
    <Link to="/">
      <img
        src={!isDark ? "/logoDark.png" : "/logo.png"}
        className="w-10 h-10 object-contain"
        alt="LOGO"
        onLoad={() => setImageLoaded(true)}
        onError={handleImageError}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
      {!imageLoaded && (
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold">
          MS
        </div>
      )}
    </Link>
  );
};

export default Logo;
