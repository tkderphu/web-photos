import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import "./styles.css";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail(props) {
  const {userId} = useParams();
  const [userModel, setUserModel] = useState()
  const [err, setErr] = useState()
  const [loading, setLoading] = useState(true)
  console.log(userModel)


  useEffect(() => {
    setLoading(true)
    fetchModel(`http://localhost:8081/api/user/${userId}`).then(data => {
      console.log('data: ', data)
      setUserModel(data.data)
      setLoading(false)
    }).catch(err => {
      console.log("err: ", err)
      setErr(err)
      setLoading(false)
    })
  }, [userId])

  useEffect(() => {
   if(userModel) {
    props.fn("User: " + userModel.first_name + " " + userModel.last_name)
   }
  }, [userModel])




  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  if(err) {
    return <h1>{err.response.data}</h1>
  }

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
