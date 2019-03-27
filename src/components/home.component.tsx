import React from "react";
import Category from "./category-view.component";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Edmonton Businesses</h1>
      <div>
        <Button className={classes.root} href="/business">
          Test: Single Business View
        </Button>
      </div>
      <Category />
    </div>
  );
};

export default Home;
