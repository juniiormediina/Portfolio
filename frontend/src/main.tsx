import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Entry point of the React application.
 * This file is responsible for rendering the root React component (`App`)
 * into the DOM element with the ID `root`.
 */

// Create a root container for the React application and render the App component
createRoot(document.getElementById("root")!) // The `!` asserts that the element with ID `root` exists
  .render(<App />); // Render the App component into the root container
