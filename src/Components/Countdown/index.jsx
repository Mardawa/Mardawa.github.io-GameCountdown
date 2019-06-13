import React, { Component } from "react";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

// import Controls from "./Controls";
import Timer from "./Timer";
// import Datepicker from "../Datepicker";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginTop: 4,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  card: {
    maxWidth: 250,
    position: "relative",
    backgroundImage: "url(http://placekitten.com/250/305)"
  },
  media: {
    height: 100
  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  },
  txt: {
    fontWeight: "bold",
    color: "white"
  }
});

export default withStyles(styles)(
  class Countdown extends Component {
    state = {
      currentDate: moment(),
      nextDate: moment(this.props.nextDate),
      paused: false,
      dateValue: this.props.nextDate
    };

    componentDidMount() {
      this.resume();
    }

    componentWillUnmount() {
      this.pause();
    }

    getRemainingTime() {
      let { currentDate, nextDate } = this.state,
        diff = nextDate.diff(currentDate);

      return moment.duration(diff);
    }

    // Arrow fx to bind this
    handlePausedToogle = () => {
      this.setState(prevState => {
        const pause = !prevState.paused;
        if (pause) {
          this.pause();
        } else {
          this.resume();
        }
        return {
          paused: pause
        };
      });
    };

    pause() {
      clearInterval(this.interval);
    }

    resume() {
      this.interval = setInterval(() => {
        this.setState({
          currentDate: moment()
        });
      }, 250);
    }

    // Arrow fx to bind this
    handleDateChange = e => {
      this.setState({
        dateValue: e.target.value
      });
    };

    handleDateSubmit = () => {
      this.setState({
        nextDate: moment(this.state.dateValue)
      });
    };

    onDelete = () => {
      this.props.onDelete(this.props.id);
    };

    render() {
      const { paused, nextDate } = this.state,
        duration = this.getRemainingTime(),
        { classes, label } = this.props;

      return (
        <>
          <div className={classes.root}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.txt}
                      align="center"
                      variant="h6"
                      gutterBottom
                    >
                      {label} <br /> {nextDate.format("DD MMMM YYYY")}
                    </Typography>
                    <Typography
                      className={classes.txt}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <Timer duration={duration} paused={paused} />
                    </Typography>
                  </CardContent>
                  {/* <IconButton
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={this.onDelete}
                  >
                    <DeleteIcon />
                  </IconButton> */}
                </CardActionArea>
              </Card>
            </Grid>

            {/* <Controls
                  paused={paused}
                  onPausedToggle={this.handlePausedToogle}
                />
                <Datepicker
                  value={dateValue}
                  onDateChange={this.handleDateChange}
                  onDateSubmit={this.handleDateSubmit}
                /> */}
          </div>
        </>
      );
    }
  }
);
