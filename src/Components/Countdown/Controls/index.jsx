import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PauseIcon from "@material-ui/icons/Pause";
import SendIcon from "@material-ui/icons/Send";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

function Controls(props) {
  const { classes, paused, onPausedToggle } = props;
  return (
    <>
      <div className="field is-grouped is-grouped-centered">
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          disabled={paused}
          onClick={onPausedToggle}
        >
          Pause
          <PauseIcon className={classes.rightIcon} />
        </Button>

        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          disabled={!paused}
          onClick={onPausedToggle}
        >
          Resume
          <SendIcon className={classes.rightIcon} />
        </Button>
      </div>
    </>
  );
}

export default withStyles(styles)(Controls);
