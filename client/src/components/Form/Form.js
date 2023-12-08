import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createPost, updatePost } from "../..//actions/posts";

const Form = ({   }) => {

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6"></Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, creator: e.target.value})} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({})} />
        <TextField name="message" variant="outlined" label="message" fullWidth value={} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={} />
        <div></div>
        <Button></Button>
        <Button></Button>
      </form>
    </Paper>      
  );
};

export default Form;