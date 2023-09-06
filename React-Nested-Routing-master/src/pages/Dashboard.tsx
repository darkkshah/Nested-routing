import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Routes, Route, useNavigate } from "react-router-dom";
import OrderList from "./dashboardPages/OrderList";
import OrderDetail from "./dashboardPages/OrderDetail";
import Customer from "./dashboardPages/Customer";
import Analytics from "./dashboardPages/Analytics";
import Reviews from "./dashboardPages/Reviews";
import Foods from "./dashboardPages/Foods";
import FoodDetail from "./dashboardPages/FoodDetail";
import CustomerDetail from "./dashboardPages/CustomerDetail";
import Calender from "./dashboardPages/Calender";
import Chat from "./dashboardPages/Chat";
import Wallet from "./dashboardPages/Wallet";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function DashboardPages(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [pagesArr, setPagesArr] = React.useState([
    {
      name: "Dashboard",
      route: "dashboard",
      icon: <HomeOutlinedIcon />,
    },
    {
      name: "OrderList",
      route: "orderList",
      icon: <SortOutlinedIcon />,
    },
    {
      name: "OrderDetail",
      route: "orderDetail",
      icon: <TaskOutlinedIcon />,
    },
    {
      name: "Customer",
      route: "customer",
      icon: <SupervisorAccountOutlinedIcon />,
    },
    {
      name: "Analytics",
      route: "analytics",
      icon: <BarChartOutlinedIcon />,
    },
    {
      name: "Reviews",
      route: "reviews",
      icon: <CreateOutlinedIcon />,
    },
    {
      name: "Foods",
      route: "foods",
      icon: <LocalCafeOutlinedIcon />,
    },
    {
      name: "FoodDetail",
      route: "foodDetail",
      icon: <StickyNote2OutlinedIcon />,
    },
    {
      name: "CustomerDetail",
      route: "customerDetail",
      icon: <PermIdentityOutlinedIcon />,
    },
    {
      name: "Calender",
      route: "calender",
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      name: "Chat",
      route: "chat",
      icon: <ChatOutlinedIcon />,
    },
    {
      name: "Wallet",
      route: "wallet",
      icon: <AccountBalanceWalletOutlinedIcon />,
    },
  ]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const openPage = (route: any) => {
    console.log(route);
    if (route == "dashboard") {
      navigate(`/dashboard`);
    } else {
      navigate(`/dashboard/${route}`);
    }
  };

  const drawer = (
    <div>
      <div className=" p-4">
        <h1 className="fw-bold fs-1">
          Sedap
          <span className="text-success circle-icon fs-5">
            <FiberManualRecordIcon />
          </span>
        </h1>
        <p className="text-muted">Modern Admin Dashboard</p>
      </div>
      <List>
        {pagesArr.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => openPage(x.route)}>
              <ListItemIcon>{x.icon ? x.icon : <MailIcon />}</ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f3f2f7", height: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="bg-dark">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="orderlist" element={<OrderList />} />
          <Route path="orderDetail" element={<OrderDetail />} />
          <Route path="customer" element={<Customer />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="foods" element={<Foods />} />
          <Route path="foodDetail" element={<FoodDetail />} />
          <Route path="customerDetail" element={<CustomerDetail />} />
          <Route path="calender" element={<Calender />} />
          <Route path="chat" element={<Chat />} />
          <Route path="wallet" element={<Wallet />} />
        </Routes>
      </Box>
    </Box>
  );
}
