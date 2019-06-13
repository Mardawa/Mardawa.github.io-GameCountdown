import React from "react";
import Typography from "@material-ui/core/Typography";

const styles = {
  txt: {
    fontWeight: "bold",
    color: "white"
  }
};

export default ({ duration, label }) => (
  <div className="level-item has-text-centered">
    <div>
      <p className="title">
        <Typography variant="subtitle1" style={styles.txt} gutterBottom>
          {duration}
        </Typography>
      </p>
      <p className="heading">{label}</p>
    </div>
  </div>
);
