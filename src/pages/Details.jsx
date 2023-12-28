import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return <div className="bodyy">This movie id is: {id}</div>;
};

export default Details;
