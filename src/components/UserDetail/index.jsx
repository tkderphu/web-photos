import React, { useEffect } from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";

import "./styles.css";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail(props) {
  const user = useParams();
  const userModel = models.userModel(user.userId)
  console.log(userModel)


  useEffect(() => {
    props.fn("User: " + userModel.first_name + " " + userModel.last_name)
  }, [user.userId])

  return (
    <>
      <Card sx={{ maxWidth: 400, margin: 'auto', mt: 4, p: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {userModel.first_name} {userModel.last_name}
          </Typography>
          <Typography color="text.secondary">ID: {userModel._id}</Typography>
          <Typography variant="body2">Occupation: {userModel.occupation}</Typography>
          <Typography variant="body2">Location: {userModel.location}</Typography>

          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`/photos/${userModel._id}`}
            sx={{ mt: 2 }}
          >
            View Photos
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default UserDetail;
