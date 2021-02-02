import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";
import { getPosts } from "../../actions/posts";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [currentLikes, setCurrentLikes] = useState(0);

  const setData = (id, likes) => {
    setCurrentId(id);
    setCurrentLikes(likes);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.cont}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} setData={setData} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form
              currentId={currentId}
              setCurrentId={setCurrentId}
              currentLikes={currentLikes}
            />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
