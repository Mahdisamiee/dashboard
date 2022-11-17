import { Box, useTheme } from "@mui/material";
import BarChart from "../../components/BarChart/BarChart";
import Header from "../../components/Header/Header";
// import { tokens } from "../../theme";

function Bar() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}

export default Bar;
