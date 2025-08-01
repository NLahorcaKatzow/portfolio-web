import Portfolio from "./portfolio.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}