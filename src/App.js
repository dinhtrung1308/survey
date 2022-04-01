import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

function App() {
  const [feedbackForm, setFeedbackForm] = useState({
    email: "",
    overall: 0,
    staff: 0,
    cleanliness: 0,
    facilities: 0,
    valueForMoney: 0,
    appetite: 0,
    serviceTime: 0,
  });
  console.log(window.location.pathname);
  function submit(e) {
    e.preventDefault();
    Axios.post("https://cors-everywhere.herokuapp.com/http://103.116.105.48:3000/performance/feedback", {
      email: feedbackForm.email,
      overall: feedbackForm.overall,
      staff: feedbackForm.staff,
      cleanliness: feedbackForm.cleanliness,
      facilities: feedbackForm.facilities,
      valueForMoney: feedbackForm.valueForMoney,
      appetite: feedbackForm.appetite,
      serviceTime: feedbackForm.serviceTime,
      userId: "e95d141e-3415-420b-a565-9a7aaa232d73",
    });
  }
  function handleChange(e) {
    const newdata = { ...feedbackForm };
    if (e.target.name === "email") {
      newdata[e.target.name] = e.target.value;
    } else {
      newdata[e.target.name] = Number(e.target.value);
    }
    setFeedbackForm(newdata);
    console.log(newdata);
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => submit(e)}>
          <Container style={{ backgroundColor: "#fff" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography style={{ color: "#000" }} variant="h4">
                  Feedback
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                  Your feedback will help us to improve our service. Thanks 😁 !
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  style={{ width: "80%" }}
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={feedbackForm.email}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography style={{ color: "#000" }}>Overall</Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Rating
                  name="customized-10"
                  defaultValue={0}
                  max={10}
                  precision={0.5}
                  name="overall"
                  value={feedbackForm.overall}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography style={{ color: "#000" }}>Staff</Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Rating
                  name="customized-10"
                  defaultValue={0}
                  max={10}
                  precision={0.5}
                  name="staff"
                  value={feedbackForm.staff}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography style={{ color: "#000" }}>Cleanliness</Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Rating
                  name="customized-10"
                  defaultValue={0}
                  max={10}
                  name="cleanliness"
                  precision={0.5}
                  value={feedbackForm.cleanliness}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography style={{ color: "#000" }}>Facilities</Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Rating
                  name="customized-10"
                  defaultValue={0}
                  max={10}
                  precision={0.5}
                  name="facilities"
                  value={feedbackForm.facilities}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography style={{ color: "#000" }}>
                  Value For Money
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Rating
                  name="customized-10"
                  defaultValue={0}
                  max={10}
                  precision={0.5}
                  name="valueForMoney"
                  value={feedbackForm.valueForMoney}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography style={{ color: "#000" }}>Appetite</Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Rating
                  name="customized-10"
                  defaultValue={0}
                  max={10}
                  precision={0.5}
                  name="appetite"
                  value={feedbackForm.appetite}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography style={{ color: "#000" }}>Service Time</Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Rating
                  name="customized-10"
                  defaultValue={0}
                  max={10}
                  precision={0.5}
                  name="serviceTime"
                  value={feedbackForm.serviceTime}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Container>
        </form>
      </header>
    </div>
  );
}

export default App;
