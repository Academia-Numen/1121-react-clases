import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Navbar() {
    const { themeStyles } = useContext(ThemeContext);

    return(
        <nav style={themeStyles}>
            <h1>Bookstore</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}