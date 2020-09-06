import React from "react";
import { Link } from "react-router-dom";
import {
  Navbarsection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor,
} from "./style.js";

const Navbar = () => {
  return (
    <Navbarsection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>

        <UlList>
          <ListItem>
            <Anchor href="./">Home</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">About</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="./Contact">Contact</Anchor>
          </ListItem>
        </UlList>
      </div>
    </Navbarsection>
  );
};
export default Navbar;
