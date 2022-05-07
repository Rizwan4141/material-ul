import React from "react";
import Button from "@mui/material/Button";
// import { DeleteIcon } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";

// import * as React from 'react';

const About = () => {
  return (
    <div>
      <h1>Text Button</h1>
      <Button>Click me</Button>
      <Button color="secondary">secondary</Button>
      <Button color="primary" href="https://www.google.co.in/">
        {" "}
        Link
      </Button>
      <Button disabled>Disabled</Button>

      <h1>Contained Button</h1>
      <Button variant="contained">Click me</Button>
      <Button variant="contained" color="secondary">
        Click me
      </Button>
      <Button
        variant="contained"
        color="primary"
        href="https://www.google.co.in/"
      >
        Link
      </Button>
      <Button variant="contained" disabled>
        Disable
      </Button>

      <h1>Outline Button</h1>
      <Button variant="outlined">Click me</Button>
      <Button variant="outlined" color="secondary">
        Click me
      </Button>
      <Button
        variant="outlined"
        color="primary"
        href="https://www.google.co.in/"
      >
        Link
      </Button>
      <Button variant="outlined" disabled>
        Disable
      </Button>

      <h1>Button Size</h1>
      <Button variant="contained" size="small" color="secondary">
        Small
      </Button>
      <Button variant="contained" size="medium" color="secondary">
        medium
      </Button>
      <Button variant="contained" size="large" color="secondary">
        large
      </Button>

      <h1>Button with Icon</h1>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="warning" endIcon={<DeleteIcon />}>
        Delete
      </Button>

      <h1>Icon Button</h1>
      <IconButton color="info">
        {" "}
        <DeleteIcon />
      </IconButton>

      <h1>Custom Button</h1>
      <Button variant="contained" style={{ backgroundColor: "green" }}>
        Custom1
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "pink" }}>
        Custom2
      </Button>

      <h1>Button with click Event</h1>
      <Button variant="contained" onClick={() => console.log("Button Clicked")}>
        Click Event Me
      </Button>

      <h1>Button Group</h1>
      <ButtonGroup variant="contained" color="secondary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h1>vartical Button Group</h1>
      <ButtonGroup variant="contained" color="secondary" orientation="vartical">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <h1>Icon</h1>

      <Grid container sx={{ color: "text.primary" }}>
        <Grid item xs={4} />
        {/* <Typography>Filled</Typography> */}
      </Grid>
      <Grid item xs={8} />
      <Grid>
        <DeleteIcon />
        <DeleteForeverIcon />
      </Grid>
      <h1>Icon 2</h1>
      <Grid item xs={4}>
        <Typography>Two Tone</Typography>
      </Grid>
      <Grid item xs={8}>
        <DeleteTwoToneIcon />
        <DeleteForeverTwoToneIcon />
      </Grid>
      <h1>Budge</h1>
      <Badge color="secondary" badgeContent={99}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={100}>
        <MailIcon />
      </Badge>

      <h1>Grid</h1>
      <Grid container spacing={2}/>
        <Grid About xs={8}>
          <About>xs=8</About>
        </Grid>
    </div>
  );
};

export default About;
