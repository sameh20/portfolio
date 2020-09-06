import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  PortfolioSection,
  PortfolioTitle,
  PortfolioList,
  PortfolioItem,
  Image,
  Span,
  ImageApper,
  Overlay,
  OverLaySpan,
} from "./style.js";

const Portifilio = () => {
  const [images, setimages] = useState([]);
  useEffect(() => {
    axios.get("js/Data.json").then((res) => {
      setimages(res.data.portfolio);
    });
  }, []);

  const PortifilioImages = images.map((imageItem) => {
    return (
      <ImageApper item={imageItem.id} key={imageItem.id}>
        <Image src={imageItem.iamge} alt="" />
        <Overlay>
          <OverLaySpan>Show Image</OverLaySpan>
        </Overlay>
      </ImageApper>
    );
  });

  return (
    <PortfolioSection>
      <PortfolioTitle>
        <Span>My</Span> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div className="box">{PortifilioImages}</div>
    </PortfolioSection>
  );
};
export default Portifilio;
