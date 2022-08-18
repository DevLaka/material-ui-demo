import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { red, green } from "@material-ui/core/colors";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FF5733, #334FFF)",
    border: 0,
    borderRadius: 8,
    color: "white",
    padding: "16px 32px",
    margin: "8px",
  },
});

const theme = createMuiTheme({
  typography: {
    h3: {
      fontSize: 48,
      marginBottom: 30,
    },
  },
  palette: {
    primary: {
      main: red[200],
    },
    secondary: {
      main: green[600],
    },
  },
});

function CustomButton() {
  const classes = useStyles();
  return <Button className={classes.root}>Custom Button</Button>;
}

function CheckBoxDemo() {
  const [checked, setChecked] = React.useState(true);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          color="primary"
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
          // disabled={true}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
        />
      }
      label="Checkbox Demo"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <ToolBar>
                <IconButton>
                  <MenuIcon></MenuIcon>
                </IconButton>
                <Typography variant="h6">MUI AppBar</Typography>
              </ToolBar>
            </AppBar>
            <Typography variant="h3">Welcome To MUI</Typography>
            <Typography variant="h4" component="div">
              This demo shows basics of MUI
            </Typography>
            <Typography variant="subtitle1">
              This demo shows basics of MUI
            </Typography>
            <Typography variant="body1">
              This demo shows basics of MUI
            </Typography>
            <CustomButton />
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={3}>
                <Paper style={{ height: 200, width: "100%" }} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper style={{ height: 200, width: "100%" }} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper style={{ height: 200, width: "100%" }} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper style={{ height: 200, width: 50 }} />
              </Grid>
            </Grid>
            <TextField
              variant="filled"
              color="secondary"
              type="email"
              // type="time"
              label="The time"
              // value="test@test.com"
              placeholder="test@test.com"
            />
            <CheckBoxDemo />
            <ButtonGroup size="large" variant="contained" color="primary">
              <Button
                startIcon={<SaveIcon />}
                // endIcon={<SaveIcon />}
                // size="large"
                // variant="contained"
                // color="primary"
                // href="#"
                // disabled
                // style={{
                //   fontSize: 28,
                // }}
                onClick={() => alert("Welcome to Material UI")}
              >
                Save
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                // endIcon={<SaveIcon />}
                // size="large"
                // variant="contained"
                // color="secondary"
                // href="#"
                // disabled
                // style={{
                //   fontSize: 28,
                // }}
                onClick={() => alert("Welcome to Material UI")}
              >
                Cancel
              </Button>
            </ButtonGroup>

            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
