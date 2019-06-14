import React, { Component } from "react";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

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
    position: "relative"
  },
  media: {
    height: 100
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  txt: {
    fontWeight: "bold",
    color: "white"
  },
  closeButton: {
    position: "absolute",
    right: -10,
    top: -10,
    color: theme.palette.grey[500]
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

    getUrl(img) {
      return "url(" + img + ")";
    }

    render() {
      const { paused, nextDate } = this.state,
        duration = this.getRemainingTime(),
        { classes, label, url } = this.props;

      return (
        <>
          <div className={classes.root}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Card
                className={classes.card}
                style={{
                  backgroundImage: this.getUrl(url),
                  backgroundSize: "cover"
                }}
              >
                <CardActionArea>
                  <CardContent className={classes.content}>
                    <Grid
                      container
                      className={classes.root}
                      direction="row"
                      justify="space-around"
                      alignItems="flex-start"
                      spacing={0}
                    >
                      <Grid item xs={1} />
                      <Grid item xs>
                        <Typography
                          className={classes.txt}
                          align="center"
                          variant="h6"
                          gutterBottom
                        >
                          {label}
                        </Typography>
                      </Grid>

                      <Grid item xs={1}>
                        <IconButton
                          variant="contained"
                          color="primary"
                          className={classes.closeButton}
                          onClick={this.onDelete}
                        >
                          <ClearIcon fontSize="small"> </ClearIcon>
                        </IconButton>
                      </Grid>

                      <Grid item xs={12}>
                        <Typography
                          className={classes.txt}
                          align="center"
                          variant="h6"
                          gutterBottom
                        >
                          {nextDate.format("DD MMMM YYYY")}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Typography
                      className={classes.txt}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <Timer duration={duration} paused={paused} />
                    </Typography>
                  </CardContent>
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
