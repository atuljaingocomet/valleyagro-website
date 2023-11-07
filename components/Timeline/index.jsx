/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { TimelineWrapper } from "./styles";
import { ContentContainer } from "../Layout/styles";

const timelineData = [
  {
    imgLink: "/timeline/soil-disturbance.svg",
    heading: "minimum soil disturbance",
    description:
      "Soil supports a complex network of worm-holes and a labyrinth of microscopic air pockets surrounded by aggregates of soil particles.",
  },
  {
    imgLink: "/timeline/crop-diversity.svg",
    heading: "maximum crop diversity",
    description:
      "Monoculture do not happen in nature and our soil creatures thrive on variety.",
  },
  {
    imgLink: "/timeline/soil-covered.svg",
    heading: "keep the soil covered",
    description:
      "The impact of rain drops or burning rays of sun or frost can all harm the soil.",
  },
  {
    imgLink: "/timeline/rotation.svg",
    heading: "follow crop rotation",
    description:
      "Rotating between nitrogen-fixing crops like soybeans and nitrogen-hungry crops like corn can reduce the need for fertilizers.",
  },
];

const Timeline = () => {
  return (
    <TimelineWrapper id="products">
      <ContentContainer>
        <h2 className="section-heading">Regenerative Agriculture</h2>
        <div className="section-wrapper desktop">
          <hr />
          <div className="timeline-cards">
            {timelineData.map((cardData) => (
              <div className="card" key={cardData.heading}>
                <div className="top-line">
                  <div className="circle">
                    <span />
                  </div>
                  <div className="vertical-line" />
                </div>
                <img
                  src={cardData.imgLink}
                  height={50}
                  width={50}
                  alt={cardData.heading}
                />
                <h3 className="heading">{cardData.heading}</h3>
                <p className="description">{cardData.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mobile-section-wrapper mobile">
          <div className="vertical-main-line" />
          <div className="timeline-cards">
            {timelineData.map((cardData) => (
              <div className="card-mobile" key={cardData.heading}>
                <div className="left-line">
                  <div className="circle">
                    <span />
                  </div>
                  <div className="horizontal-line" />
                </div>
                <div className="card">
                  <img
                    src={cardData.imgLink}
                    height={50}
                    width={50}
                    alt={cardData.heading}
                  />
                  <h3 className="heading">{cardData.heading}</h3>
                  <p className="description">{cardData.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentContainer>
    </TimelineWrapper>
  );
};

export default Timeline;
