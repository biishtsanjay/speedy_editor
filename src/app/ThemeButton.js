import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { SiDarkreader } from "react-icons/si";
import { MdLight } from "react-icons/md";

const ThemeButton = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2 transition-colors hover:backdrop-brightness-75"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <MdLight className="h-5 w-5" />
      ) : (
        <SiDarkreader className="h-5 w-5" />
      )}
    </button>
  );
};
export default ThemeButton;
