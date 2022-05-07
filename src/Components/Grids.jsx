import { Grid, Button } from "@mui/material";
import React from "react";
import MyCustomCom from "react"


const Grids = () => {
  return (
    <div>
      <MyCustomCom title="Hello" type="p" color="red"  />
      <MyCustomCom title="Rizwan" type="h1" color="#ccc" /> 
      {/* Row  */} 
      <Grid container>
        {/* Col */}
        <Grid item xs={3}>
          <Button variant="outlined">Extended</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained">Extended</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained">Extended</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Grids;
