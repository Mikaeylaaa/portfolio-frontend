import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState, logoutRequest } from "../../../../store";
import PersonIcon from "@mui/icons-material/Person";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SavingsIcon from "@mui/icons-material/Savings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Box, Popover } from "@mui/material";
import { Logout } from "@mui/icons-material";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();

  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await dispatch(logoutRequest());

    setAnchorEl(null);

    router.push(`/home`);
  };

  const routerToCreateDepositPage = async () => {
    await router.push(`/deposit`);
  };

  const balanceAmount = `100`; // Replace this with the actual balance amount fetched from the backend or state

  const routeToCreateBiddingItemPage = async () => {
    await router.push("/bidding/bidding-item-form");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Bidding Home
        </Typography>
        <Box sx={{ mr: 4 }}>
          <Typography variant="body1">Balance: {balanceAmount}$</Typography>
        </Box>
        <IconButton
          size="small"
          edge="end"
          aria-label="user-profile-menu"
          aria-controls="user-profile-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          color="inherit"
          aria-expanded={open ? "true" : undefined}
        >
          <PersonIcon />
          {open ? (
            <ExpandLessIcon fontSize="small" />
          ) : (
            <ExpandMoreIcon fontSize="small" />
          )}
        </IconButton>
        <Popover
          id="account-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          onClick={handleMenuClose}
          sx={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={routeToCreateBiddingItemPage}>
            <PostAddIcon fontSize="small" />
            <Typography variant="body2" sx={{ ml: 1 }}>
              Create New Item
            </Typography>
          </MenuItem>
          <MenuItem onClick={routerToCreateDepositPage}>
            <SavingsIcon fontSize="small" />
            <Typography variant="body2" sx={{ ml: 1 }}>
              Deposit
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <Logout fontSize="small" />
            <Typography variant="body2" sx={{ ml: 1 }}>
              Logout
            </Typography>
          </MenuItem>
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
