import {React, useState, useEffect} from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton} from "@mui/material";
import fetchModel from "../../lib/fetchModelData";

import "./styles.css";
import { Link } from "react-router-dom";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
  const [users, setUsers] = useState()
  useEffect(() => {
    fetchModel("http://localhost:8081/api/user/list").then(data => {
      console.log("user: ", data.data)
      setUsers(data.data)
    }).catch(err => {
        console.log("err: ", err)
    })
  }, [])
  return (
    <div>
      <h3 > List user</h3>
      <nav aria-label="main mailbox folders">
        <List>
          {users && users.map(item => {
            return (
              <Link to={`/users/${item._id}`} style={{textDecoration: 'none'}}>
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
