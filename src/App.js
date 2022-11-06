import { useColorMode, ColorModeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./components/global/TopBar/TopBar";

function App() {
  const [theme, colorMode] = useColorMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <TopBar />
            {/* min 55 from video */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
