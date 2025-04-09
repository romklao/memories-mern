import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import bay from "./images/bay.png";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={bay} alt="icon" height={60} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            direction={{ xs: "column-reverse", sm: "row" }}
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid size={{ xs: 12, sm: 7 }}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
