import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "10px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Link to="/">
        <Button variant="contained" style={{ backgroundColor: "black" }}>
          Home
        </Button>
      </Link>
      <Link to="/about">
        <Button variant="contained" style={{ backgroundColor: "black" }}>
          About
        </Button>
      </Link>
      <Link to="/contact">
        <Button variant="contained" style={{ backgroundColor: "black" }}>
          Contacts
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;
