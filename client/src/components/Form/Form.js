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
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={} />
        <TextField name="message" variant="outlined" label="Title" fullWidth value={} />
        <TextField name="tags" variant="outlined" label="Title" fullWidth value={} />
        <div></div>
        <Button></Button>
        <Button></Button>
      </form>
    </Paper>      
  );
};

export default Form;