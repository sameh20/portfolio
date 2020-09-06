import React from "react";
import {
  AboutSection,
  AboutTitle,
  AbouDir,
  AboutDesc,
  Anchor,
  AboutInfo,
  Span,
} from "./style.js";

const About = () => {
  return (
    <AboutSection>
      <div class="container">
        <AboutInfo>
          <AboutTitle>
            <Span>This is</Span> Me
          </AboutTitle>
          <AbouDir>Creative Director</AbouDir>
          <AboutDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil
            aliquid aperiam deleniti, repellendus dolorum. Possimus nisi
            cupiditate ad veritatis?
          </AboutDesc>
          <AboutDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </AboutDesc>
        </AboutInfo>
      </div>
    </AboutSection>
  );
};
export default About;
