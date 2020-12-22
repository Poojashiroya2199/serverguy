import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(2)
      }
    }
  })
);

export default function Pagination1(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={props.length} variant="outlined" shape="rounded" />
    </div>
  );
}
