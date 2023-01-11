import { React, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../App.css";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ff8a80",
      main: "#b71c1c",
      dark: "#e57373",
      contrastText: "#fff",
    }
  },
});

const Form = (props) => {
  const { handleAddItem } = props;
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);

    handleAddItem({
      id: (+new Date()).toString(),
      inputValue,
      done: false,
    });

    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ flexGrow: 2 }}>
        <Grid container alignItems="center" direction="row"
         spacing={2}>
          <Grid item xs={12}>
            <label className="label-input">Regalos</label>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="regalos-input"
              name="regalos"
              type="text"
              size="small"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                input: {
                  backgroundColor: "#DDD",
                  borderRadius: "5em",
                  display: "block",
                  marginRight: '10px'
                },
              }}
              InputProps={{ autoComplete: "off" }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="small"
               disabled={inputValue ? "" : "disabled"}
              >
                Agregar
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default Form;
