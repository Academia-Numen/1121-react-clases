import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ToggleTheme() {
    const { toggleTheme, themeStyles} = useContext(ThemeContext);

    return (
        <div className="toggle-btn" style={themeStyles}>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    )
};