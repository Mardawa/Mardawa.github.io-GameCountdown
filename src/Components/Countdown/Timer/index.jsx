import React from "react";
import TimerItem from "./TimerItem";
import Grid from "@material-ui/core/Grid";

const Timer = ({ duration }) => (
  <>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={40}
    >
      <Grid item xs>
        <TimerItem duration={Math.floor(duration.asDays())} label="Days" />
      </Grid>
      <Grid item xs>
        <TimerItem
          duration={duration
            .hours()
            .toString()
            .padStart(2, "0")}
          label="Hours"
        />
      </Grid>
      <Grid item xs>
        <TimerItem
          duration={duration
            .minutes()
            .toString()
            .padStart(2, "0")}
          label="Minutes"
        />
      </Grid>
      {/* <Grid item xs={3}>
        <TimerItem
          duration={duration
            .seconds()
            .toString()
            .padStart(2, "0")}
          label="Seconds"
        />
      </Grid> */}
    </Grid>
  </>
);

export default Timer;
