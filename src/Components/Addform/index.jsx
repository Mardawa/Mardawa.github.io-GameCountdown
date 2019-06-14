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
          url:
            "https://static.fnac-static.com/multimedia/Images/FD/Comete/117569/CCP_IMG_ORIGINAL/1526953.jpg"
        },
        {
          name: "Spyro",
          date: "2019-09-03",
          url:
            "https://steamcdn-a.akamaihd.net/steam/apps/996580/header.jpg?t=1560272976"
        },
        {
          name: "Borderlands 3",
          date: "2019-09-13",
          url:
            "http://image.jeuxvideo.com/medias-md/155430/1554296862-6539-card.jpg"
        },
        {
          name: "Link's awakening",
          date: "2019-09-20",
          url:
            "http://image.jeuxvideo.com/medias-md/156027/1560274502-6067-card.jpg"
        },
        {
          name: "Ghost recon",
          date: "2019-10-04",
          url:
            "https://images.idgesg.net/images/article/2019/06/ghost-recon-breakpoint-cole-walker-100799252-large.jpg"
        },
        {
          name: "Modern warfare",
          date: "2019-10-25",
          url:
            "http://image.jeuxvideo.com/medias-md/156042/1560418602-5374-card.jpg"
        },
        {
          name: "Star war",
          date: "2019-11-15",
          url:
            "https://news.xbox.com/en-us/wp-content/uploads/SWFJO_XB1_PROMO_Wire_Hero_940x528-hero-1.jpg"
        },
        {
          name: "Pokemon",
          date: "2019-11-15",
          url: "https://data.junkee.com/wp-content/uploads/2019/06/Wooloo.jpg"
        },
        {
          name: "Gods and monster",
          date: "2020-02-25",
          url:
            "https://dontfeedthegamers.com/wp-content/uploads/2019/06/gods-and-monsters-ubisoft-e3-2019-1.jpg"
        },
        {
          name: "Watch dogs legion",
          date: "2020-03-06",
          url:
            "https://ksassets.timeincuk.net/wp/uploads/sites/54/2019/06/watch-dogs-legion-gameplay-trailer-920x518.jpg"
        },
        {
          name: "Animal crossing",
          date: "2020-03-20",
          url:
            "https://static.mmzstatic.com/wp-content/uploads/2019/06/animal-crossing-new-horizons.jpg"
        },
        {
          name: "Cyberpunk 2077",
          date: "2020-04-16",
          url:
            "https://www.destructoid.com/ul/557252-cyberpunk-2077-e3-keanu.jpg"
        }
      ],
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
            <Grid container spacing={16}>
              <Grid item xs={4} />
              <Grid item xs={4}>
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
                <Grid item xs={4} />
              </Grid>
            </Grid>
          </div>
        </>
      );
    }
  }
);
