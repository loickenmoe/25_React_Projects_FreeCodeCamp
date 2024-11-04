import React from "react";
import UseLocalStorage from "./useLocalStorage";
import "./theme.css";

function LightDarkMode() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <button onClick={handleToggleTheme}>Change theme</button>
        <p>Hello World !</p>
      </div>
    </div>
  );
}

export default LightDarkMode;
