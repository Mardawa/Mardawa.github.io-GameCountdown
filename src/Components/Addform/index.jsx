import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AddCountdownForm from "./Form/Addnewcountdown";
import Countdown from "../Countdown";

import { countdown } from "../../store";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginTop: 40,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  gridList: {
    width: 500,
    height: 450
  }
});

export default withStyles(styles)(
  class AddCountdown extends Component {
    state = {
      countdown,
      nextDate: "",
      nextName: "",
      nextUrl: ""
    };

    handleNameChange = e => {
      this.setState({
        nextName: e.target.value
      });
    };

    handleUrlChange = e => {
      this.setState({
        nextUrl: e.target.value
      });
    };

    handleDateChange = e => {
      this.setState({
        nextDate: e.target.value
      });
    };

    handleDateSubmit = e => {
      e.preventDefault();
      if (!this.state.nextName.length || !this.state.nextDate.length) {
        console.log("Please fill the form correctly");
      } else {
        const newCountdown = {
          //   key: Symbol(),
          name: this.state.nextName,
          date: this.state.nextDate,
          url: this.state.nextUrl
        };
        this.setState(prev => ({
          countdown: prev.countdown.concat(newCountdown)
        }));
      }
    };

    handleDelete = id => {
      const newCountdown = this.state.countdown.filter((value, index) => {
        return index !== id;
      });
      this.setState({
        countdown: newCountdown
      });
    };

    render() {
      const { classes } = this.props;
      const { nextDate, nextName, nextUrl, countdown } = this.state;

      return (
        <>
          <div className={classes.root}>
            <Grid
              container
              spacing={16}
              direction="row"
              justify="center"
              alignItems="center"
            >
              {countdown.map((item, index) => (
                <Grid item xl={2}>
                  <Countdown
                    key={index}
                    id={index}
                    nextDate={item.date}
                    label={item.name}
                    url={item.url}
                    onDelete={this.handleDelete}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
          <div className={classes.root}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={16}
            >
              <Grid item xl />
              <Grid item xl>
                <Paper className={classes.paper} elevation={5}>
                  <AddCountdownForm
                    value={nextDate}
                    nameValue={nextName}
                    urlValue={nextUrl}
                    onDateChange={this.handleDateChange}
                    onNameChange={this.handleNameChange}
                    onUrlChange={this.handleUrlChange}
                    onDateSubmit={this.handleDateSubmit}
                  />
                </Paper>
              </Grid>
              <Grid item xl />
            </Grid>
          </div>
        </>
      );
    }
  }
);
