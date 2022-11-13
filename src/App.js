import { useColorMode, ColorModeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import TopBar from "./components/global/TopBar/TopBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import SideBar from "./components/global/SideBar/SideBar";

function App() {
  const [theme, colorMode] = useColorMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <div className="app">
            <SideBar />
            <main className="content">
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
