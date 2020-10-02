import React, { useState } from "react";
import {
  Button,
  Paper,
  Box,
  Checkbox,
  makeStyles,
  Input,
  FormControlLabel,
} from "@material-ui/core";
import TableData from "./components/table/index";

import "./components/data";
import { strings } from "./components/data";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    paddingTop: "25px",
    maxWidth: "1500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonsWrap: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2),
  },
  button: {
    marginBottom: "5px",
  },
  input: {
    marginTop: "30px",
  },
}));

const App = () => {
  const [eventInput, setEventInput] = useState("");
  const [checkbox, setCheckbox] = useState(true);
  const [showResalut, setShowResalut] = useState([]);
  const classes = useStyles();

  const filterStringsSubstring = () => {
    const result = strings[0].data.filter((i) => {
      if (eventInput === "") {
        return null;
      }
      if (checkbox === true) {
        return i.toLowerCase().search(eventInput.toLowerCase()) !== -1;
      } else {
        return i.search(eventInput) !== -1;
      }
    });
    setShowResalut(result);
  };

  const filterStringsByLength = () => {
    const result = strings[0].data.filter((i) => {
      if (eventInput === "") {
        return null;
      }
      return Number(eventInput) < i.length;
    });
    setShowResalut(result);
  };

  const onChangeInput = (e) => {
    setEventInput(e.target.value);
  };

  return (
    <Box className={classes.root}>
      <Paper>
        <Box m={2} width="550px" display="flex" justifyContent="space-around">
          <Box className={classes.buttonsWrap}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={filterStringsByLength}
            >
              filter by word length
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={filterStringsSubstring}
            >
              substring filter
            </Button>
            <FormControlLabel
              control={
                <Checkbox
                  onClick={() => setCheckbox(!checkbox)}
                  name="Register"
                />
              }
              label="Register"
            />
          </Box>
          <Box>
            <Input
              className={classes.input}
              type="text"
              onChange={onChangeInput}
              placeholder="Lead the text"
            />
          </Box>
        </Box>
      </Paper>

      <Box mt={5}>
        <TableData data={showResalut} />
      </Box>
    </Box>
  );
};

export default App;
