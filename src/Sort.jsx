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
    marginRight: "10px"
  },
  selectEmpty: {
    marginTop: theme.spacing(0)
  }
}));
export default function Sort({ length }) {
  const classes = useStyles();

  const [val1, setval1] = useState("");
  const [val, setval] = useState("");
  const handleChange = (event) => {
    setval1(event.target.value);
  };

  return (
    <>
      <div className="sort">
        <div className="titlesort">Search</div>
        <div className="sortby">
          <FormControl className={classes.formControl}>
            <Select
              value={val1}
              onChange={handleChange}
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
              value={val}
              onChange={handleChange}
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
              value={val}
              onChange={handleChange}
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
