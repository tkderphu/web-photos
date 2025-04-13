import './App.css';

import React, { useState } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";

const App = () => {
  const [context, setContext] = useState()
  return (
    <Router>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TopBar context={context} />
          </Grid>
          <div className="main-topbar-buffer" />
          <Grid item sm={3}>
            <Paper className="main-grid-item">
              <UserList />
            </Paper>
          </Grid>
          <Grid item sm={9}>
            <Paper className="main-grid-item">
              <Routes>
                <Route
                  path="/users/:userId"
                  element={<UserDetail fn={(context) => {
                    setContext(context)
                  }} />}
                />
                <Route
                  path="/photos/:userId"
                  element={<UserPhotos fn={(context) => {
                    setContext(context)
                  }} />}
                />
                <Route path="/users" element={<UserList fn={(context) => {
                  setContext(context)
                }} />} />
              </Routes>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
