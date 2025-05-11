import React, { useEffect, useState } from "react";
import { Typography , Box, CardContent, Card, CardMedia, Divider, List, ListItem, ListItemText} from "@mui/material";

import "./styles.css";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";
import fetchModel from "../../lib/fetchModelData";
const formatDate = (dateString) => new Date(dateString).toLocaleString();

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos(props) {
  const user = useParams();
  const [userPhotos, setUserPhotos] = useState([])
  const [userModel, setUserModel] = useState()
 
  useEffect(() => {
    fetchModel(`http://localhost:8081/api/user/${user.userId}`).then(res => {
      setUserModel(res.data)
    })
    fetchModel(`http://localhost:8081/api/photo/photosOfUser/${user.userId}`).then(res => {
      setUserPhotos(res.data)
    })
  }, [])
 
  useEffect(() => {
    if(userModel) {
      props.fn("Photos of " + userModel.first_name + " " + userModel.last_name)
    }
  }, [user.userId])

  return (
    <>
      {userPhotos.map((photo) => (
        <Card key={photo._id} sx={{ mb: 4 }}>
          <CardMedia
            component="img"
            height="300"
            image={`/images/${photo.file_name}`} // adjust path as needed
            alt="User photo"
          />
          <CardContent>
            <Typography variant="subtitle1" color="text.secondary">
              Posted at: {formatDate(photo.date_time)}
            </Typography>

            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">Comments:</Typography>
            {photo.comments && photo.comments.length > 0 ? (
              <List>
                {photo.comments.map((comment) => (
                  <ListItem key={comment._id} alignItems="flex-start">
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Link
                            to={`/users/${comment.user._id}`}
                          >
                            {comment.user.first_name} {comment.user.last_name}
                          </Link>{' '}
                          - {formatDate(comment.date_time)}
                        </React.Fragment>
                      }
                      secondary={comment.comment}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography>No comments yet.</Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default UserPhotos;
