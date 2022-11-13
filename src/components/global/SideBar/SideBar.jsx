import { useState } from "react";
import { Sidebar as SideBarPro, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import USER_IMAGE from "../../../assets/user.png";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutline";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimeLineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography variant="h6">{title}</Typography>
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, setSelected] = useState("Dahboard");
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        "& .sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .sidebar": {
          backgroundColor: "transparent !important",
          borderRight: "none",
        },
        "& .inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .menu-anchor:hover": {
          color: "#868dfb !important",
          background: `${colors.primary[400]} !important`,
        },
        "& .menu-anchor:active": {
          color: "#868dfb !important",
          background: `${colors.primary[400]} !important`,
        },
        "& .menu-label:active": {
          color: "#6870fa !important",
          background: `${colors.primary[400]} !important`,
        },
        ".active > .menu-anchor": {
          color: "#6870fa !important",
          background: `none !important`,
        },
      }}
    >
      <SideBarPro>
        <Menu>
          <MenuItem
            onClick={() => collapseSidebar()}
            icon={collapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" margin="15px">
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!collapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="User-profile"
                  width="100px"
                  height="100px"
                  src={USER_IMAGE}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                ></img>
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ mt: "10px" }}
                >
                  Mahdi CVO
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  CVO NanoOne
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Items */}
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!collapsed && (
              <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
                Data
              </Typography>
            )}
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoice"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!collapsed && (
              <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
                Pages
              </Typography>
            )}
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!collapsed && (
              <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
                Charts
              </Typography>
            )}
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimeLineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </SideBarPro>
    </Box>
  );
};

export default SideBar;

// my code create before
{
  /*<Sidebar >
 <Menu>
<MenuItem
  onClick={() => collapseSidebar()}
  icon={collapsed ? <MenuOutlined /> : undefined}
  style={{
    margin: "10px 0 20px 0",
    color: colors.grey[100],
  }}
>
  {!collapsed && (
    <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
      <Typography variant="h3" color={colors.grey[100]}>
        ADMINS
      </Typography>
      <IconButton onClick={() => collapseSidebar()}>
        <MenuOutlined />
      </IconButton>
    </Box>
  )}
</MenuItem>
</Menu>
</Sidebar> */
}
