import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AddCountdownForm from "./Form/Addnewcountdown";
import Countdown from "../Countdown";

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
      countdown: [
        {
          name: "Mario Maker",
          date: "2019-06-28",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIW6YE7b0NNk0xlQh-LIKnDgCeUx0y4Xo6BYZuVp9tJBEQLBG1-jQvcc"
        },
        {
          name: "Spyro",
          date: "2019-09-03",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSi29HlA3NVkOk3PcLS9h-UaHLbNikP6fLhivnXkoZ_PVAqwrGZ-xAip2-"
        },
        {
          name: "Borderlands 3",
          date: "2019-09-13",
          url: "http://image.jeuxvideo.com/medias-md/155430/1554296862-6539-card.jpg"
        },
        {
          name: "Link's awakening",
          date: "2019-09-20",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6S1KmyOMG1Vb0RU_ZxlXUy6xRoS92uVqYNcjbLUF_PltZ3ZZJjvknPwf_"
        },
        {
          name: "Ghost recon",
          date: "2019-10-04",
          url: "http://placekitten.com/250/305"
        },
        {
          name: "Modern warfare",
          date: "2019-10-25",
          url: "http://placekitten.com/250/305"
        },
        {
          name: "Star war",
          date: "2019-11-15",
          url: "http://placekitten.com/250/305"
        },
        {
          name: "Pokemon",
          date: "2019-11-15",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOoL_qDR_NyNkQBCt3B_O_kvSEi-roU_51Nu1XKcdtL5MOyPtKI3oxXu7"
        },
        {
          name: "Gods and monster",
          date: "2020-02-25",
          url: "http://placekitten.com/250/305"
        },
        {
          name: "Watch dogs legion",
          date: "2020-03-06",
          url: "http://placekitten.com/250/305"
        },
        {
          name: "Animal crossing",
          date: "2020-03-20",
          url: "http://placekitten.com/250/305"
        },
        {
          name: "Cyberpunk 2077",
          date: "2020-04-16",
          url: "http://placekitten.com/250/305"
        }
      ],
      nextDate: "",
      nextName: ""
    };

    handleNameChange = e => {
      this.setState({
        nextName: e.target.value
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
          date: this.state.nextDate
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
      const { nextDate, nextName, countdown } = this.state;

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
            <Grid container spacing={16}>
              <Grid item xs={4} />
              <Grid item xs={4}>
                <Paper className={classes.paper} elevation={5}>
                  <AddCountdownForm
                    value={nextDate}
                    nameValue={nextName}
                    onDateChange={this.handleDateChange}
                    onNameChange={this.handleNameChange}
                    onDateSubmit={this.handleDateSubmit}
                  />
                </Paper>
                <Grid item xs={4} />
              </Grid>
            </Grid>
          </div>
        </>
      );
    }
  }
);
