import React, { Fragment } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "../App.css";
import {
  DeleteForever,
  DeleteOutline,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";

const Checkboxs = (props) => {
  const {
    onChange,
    data: { id, inputValue, done },
  } = props;

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value={ id }
          control={
            <Checkbox
              
              onChange={onChange}
              icon={<DeleteOutline />}
              checkedIcon={<DeleteForever />}
              defaultChecked={done}
            />
          }
          label={ inputValue }
          labelPlacement="init"
        />
      </FormGroup>
    </FormControl>
  );
};

export default Checkboxs;
