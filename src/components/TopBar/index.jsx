import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar(props) {
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          Phú
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
    
        {props.context && (
          <Typography variant="h5" color="inherit">
            {props.context}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
