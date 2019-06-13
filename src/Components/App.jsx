import React, { Component } from "react";
import AddCountdown from "./Addform";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default class App extends Component {
  render() {
    return (
      <>
        <Grid container justify="center" spacing={16}>
          <Typography variant="h2" gutterBottom style={{marginTop: 40}}>
            Games are coming
          </Typography>
        </Grid>

        <AddCountdown />
      </>
    );
  }
}
