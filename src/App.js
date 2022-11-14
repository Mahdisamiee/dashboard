import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Route, Routes } from "react-router-dom";
import { useColorMode, ColorModeContext } from "./theme";
import TopBar from "./components/global/TopBar/TopBar";
import SideBar from "./components/global/SideBar/SideBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Team from "./pages/Team/Team";
import Contacts from "./pages/Contacts/Contacts";
import Invoices from "./pages/Invoices/Invoices";

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
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoice" element={<Invoices />} />
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
