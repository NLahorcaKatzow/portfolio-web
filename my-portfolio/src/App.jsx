import Portfolio from "./portfolio.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Portfolio />
    </ThemeProvider>
  );
}