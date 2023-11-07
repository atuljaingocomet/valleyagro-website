import React from "react";
import { HeroWrapper } from "./styles";

const HeroSection = () => {
  return (
    <HeroWrapper id="banner">
      <div className="text-wrapper">
        <h1 className="heading">field to feast</h1>
        <p className="sub-heading">experience nature&apos;s best</p>
      </div>
    </HeroWrapper>
  );
};

export default HeroSection;
