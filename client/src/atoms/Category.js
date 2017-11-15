import React from "react";

import { NavLink } from "react-router-dom";

// STYLING_CSS ---------------------------------------------------

const styleHead = {
  fontFamily: "lato"
};

const styleLi = {
  padding: "5px",
  marginBottom: "15px"
};

const styleCol = {
  listStyleType: "none",
  fontFamily: "lato",
  padding: "0"
};

const IconCategory1 = {
  backgroundColor: "#C8E6C9",
  padding: "5px",
  color: "#ffffff",
  fontFamily: "lato",
  borderRadius: "10px",
  marginRight: "25px"
};

const IconCategory2 = {
  backgroundColor: "#FFCDD2",
  padding: "5px",
  color: "#ffffff",
  fontFamily: "lato",
  borderRadius: "10px",
  marginRight: "25px"
};

const IconCategory3 = {
  backgroundColor: "#E1BEE7",
  padding: "5px",
  color: "#ffffff",
  fontFamily: "lato",
  borderRadius: "10px",
  marginRight: "25px"
};

const IconCategory4 = {
  backgroundColor: "#CFD8DC",
  padding: "5px",
  color: "#ffffff",
  fontFamily: "lato",
  borderRadius: "10px",
  marginRight: "25px"
};

const IconCategory5 = {
  backgroundColor: "#BCAAA4",
  padding: "5px",
  color: "#ffffff",
  fontFamily: "lato",
  borderRadius: "10px",
  marginRight: "25px"
};

const IconCategory6 = {
  backgroundColor: "#B3E5FC",
  padding: "5px",
  color: "#ffffff",
  fontFamily: "lato",
  borderRadius: "10px",
  marginRight: "25px"
};

const IconCategory7 = {
  backgroundColor: "#84FFFF",
  padding: "5px",
  color: "#ffffff",
  fontFamily: "lato",
  borderRadius: "10px",
  marginRight: "25px"
};

const IconCategory8 = {
  backgroundColor: "#EA80FC",
  padding: "5px",
  color: "#ffffff",
  fontFamily: "lato",
  borderRadius: "10px",
  marginRight: "25px"
};

const IconCategory9 = {
  backgroundColor: "#CFD8DC",
  padding: "5px",
  color: "#ffffff",
  fontFamily: "lato",
  borderRadius: "10px",
  marginRight: "25px"
};

const IconCategory10 = {
  backgroundColor: "#E1BEE7",
  padding: "5px",
  color: "#ffffff",
  fontFamily: "lato",
  borderRadius: "10px",
  marginRight: "25px"
};

// Category

const Category = () => (
  <div>
    <h5 style={styleHead}> CATEGORIES </h5>
    <div style={styleCol}>
      <li style={styleLi}>
        <NavLink exact to="/">
          <span style={IconCategory1}> W </span>
          WORKSHOP
        </NavLink>
      </li>
      <li style={styleLi}>
        <NavLink exact to="/">
          <span style={IconCategory2}> S </span>
          SEMINAR & TRAINING
        </NavLink>
      </li>
      <li style={styleLi}>
        <NavLink exact to="/">
          <span style={IconCategory3}> D </span>
          DESIGN EVENT
        </NavLink>
      </li>
      <li style={styleLi}>
        <NavLink exact to="/">
          <span style={IconCategory4}> T</span>
          TECHTALK
        </NavLink>
      </li>
      <li style={styleLi}>
        <NavLink exact to="/">
          <span style={IconCategory5}> F </span>
          FUN GAME & SPORT
        </NavLink>
      </li>
      <li style={styleLi}>
        <NavLink exact to="/">
          <span style={IconCategory6}> P </span>
          PHOTOGRAPHY
        </NavLink>
      </li>
      <li style={styleLi}>
        <NavLink exact to="/">
          <span style={IconCategory7}> C </span>
          COMPETITION
        </NavLink>
      </li>
      <li style={styleLi}>
        <NavLink exact to="/">
          <span style={IconCategory8}> A </span>
          ART & CULTURE
        </NavLink>
      </li>
      <li style={styleLi}>
        <NavLink exact to="/">
          <span style={IconCategory9}> R </span>
          RELIGION
        </NavLink>
      </li>
      <li style={styleLi}>
        <NavLink exact to="/">
          <span style={IconCategory10}> T </span>
          TRAVELLING
        </NavLink>
      </li>
    </div>
  </div>
);

// POST

export default Category;
