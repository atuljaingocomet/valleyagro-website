/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BadgeWrapper } from "./styles";
import { ContentContainer } from "../Layout/styles";

const Badges = () => {
  const imageNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

  const renderedBadges = imageNames.map((imageName) => (
    <img
      key={imageName}
      src={`/badges/${imageName}`}
      alt="address"
      height={100}
      width={100}
      loading="lazy"
    />
  ));
  return (
    <BadgeWrapper id="badge-section">
      <ContentContainer>
        <div className="section-wrapper">{renderedBadges}</div>
      </ContentContainer>
    </BadgeWrapper>
  );
};

export default Badges;
