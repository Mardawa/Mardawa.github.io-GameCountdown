import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    marginBottom: 1
  },
  button: {
    margin: theme.spacing.unit
  }
});

function DatePickers(props) {
  const { classes, value, onDateChange, onDateSubmit } = props;

  return (
    <Grid container direction="row" justify="center">
      <form noValidate>
        <TextField
          id="date"
          label="Pick a date"
          type="date"
          value={value}
          className={classes.textField}
          onChange={onDateChange}
          InputLabelProps={{
            shrink: true
          }}
        />
        <IconButton
          color="secondary"
          className={classes.button}
          aria-label="Add a game"
          onClick={onDateSubmit}
        >
          <AddIcon />
        </IconButton>
      </form>
    </Grid>
  );
}

export default withStyles(styles)(DatePickers);
