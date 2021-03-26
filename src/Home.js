import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h3>It's lorem ipzza all the way down</h3>
      <h2>
        <Link to="/pizza">Order Pizza</Link>
      </h2>
    </>
  );
};

export default Home;
