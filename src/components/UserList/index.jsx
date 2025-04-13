import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemIcon,
  ListItemButton,
  InboxIcon,

} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";
import { Link } from "react-router-dom";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
  const users = models.userListModel();
  return (
    <div>
      <h3 > List user</h3>
      <nav aria-label="main mailbox folders">
        <List>

          {users.map(item => {
            return (
              <Link to={`/users/${item._id}`}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={item.first_name + " " + item.last_name} onClick={() => {

                    }} />
                  </ListItemButton>

                </ListItem>
              </Link>
            )
          })}
        </List>
      </nav>
    </div>
  );
}

export default UserList;
