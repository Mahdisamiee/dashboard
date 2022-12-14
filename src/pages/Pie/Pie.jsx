import { Box, useTheme } from "@mui/material";
import PieChart from "../../components/PieChart/PieChart";
import Header from "../../components/Header/Header";
// import { tokens } from "../../theme";

function Geo() {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Geo Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}

export default Geo;
