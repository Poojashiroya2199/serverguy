import React, { useState } from "react";
import { stories, popularity, time } from "./data";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import ShareIcon from "@material-ui/icons/Share";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 80,
    minHeight: 30,
    marginRight: "10px",
    marginTop: 0
  },
  selectEmpty: {
    height: 30,
    marginTop: theme.spacing(0)
  }
}));
export default function Sort({ length }) {
  const classes = useStyles();

  const [val1, setval1] = useState("");
  const [val2, setval2] = useState("");
  const [val3, setval3] = useState("");
  const handleChange = (property, event) => {
    if (property === "val1") {
      setval1(event.target.value);
    } else if (property === "val2") {
      setval2(event.target.value);
    } else if (property === "val3") {
      setval3(event.target.value);
    }
  };

  return (
    <>
      <div className="sort">
        <div className="titlesort">Search</div>
        <div className="sortby">
          <FormControl className={classes.formControl}>
            <Select
              value={val1}
              onChange={(event) => handleChange("val1", event)}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <p>Stories</p>
              </MenuItem>
              {stories.map((el, index) => (
                <MenuItem value={el} key={index}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="titlesort">By</div>
        <div className="sortby">
          <FormControl className={classes.formControl}>
            <Select
              value={val2}
              onChange={(event) => handleChange("val2", event)}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <p>Popularity</p>
              </MenuItem>
              {popularity.map((el, index) => (
                <MenuItem value={el} key={index}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="titlesort">for</div>
        <div className="sortby">
          <FormControl className={classes.formControl}>
            <Select
              value={val3}
              onChange={(event) => handleChange("val3", event)}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <p>All time</p>
              </MenuItem>
              {time.map((el, index) => (
                <MenuItem value={el} key={index}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="result">
          {length} Results <ShareIcon />
        </div>
      </div>
    </>
  );
}
