/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AboutUsWrapper } from "./styles";
import { ContentContainer } from "../Layout/styles";

const AboutUs = () => {
  return (
    <AboutUsWrapper id="about-us">
      <ContentContainer>
        <div className="section-wrapper">
          <div className="left">
            <h3 className="heading">
              <span className="desktop">
                AgriCom <br /> Farm Ecology <br /> Products
              </span>
              <span className="mobile">AgriCom Farm Ecology Products</span>
            </h3>
            <div className="large-text">
              <div className="content">
                <div className="grey">Awesome</div>
                <div className="green">Harvest of</div>
                <div className="yellow">Products</div>
              </div>
              <div className="mobile">
                <img
                  src="/aboutus/star.jpg"
                  alt="star icon"
                  loading="lazy"
                  height={70}
                  width={50}
                />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="star-icon desktop">
              <img
                src="/aboutus/star.jpg"
                alt="star icon"
                loading="lazy"
                height={100}
                width={70}
              />
            </div>
            <div className="aboutus-text">
              <p className="description">
                At ValleyAgro, we rely on Agricom technology to maintain the
                highest quality in our agro-based products, ensuring freshness,
                nutrition, and sustainability. Explore our site to experience
                the difference technology makes in your favorite flours, fruits,
                and vegetables.
              </p>
              <div className="showcase">
                <div className="feature-card">
                  <p>
                    Agriculture <br />
                    Products
                  </p>
                  <img
                    src="/aboutus/agri.svg"
                    alt="agriculture"
                    loading="lazy"
                  />
                </div>
                <div className="feature-card">
                  <p>
                    Fresh <br />
                    Vegetables
                  </p>
                  <img
                    src="/aboutus/fresh.svg"
                    alt="agriculture"
                    loading="lazy"
                  />
                </div>
                <div className="feature-card">
                  <p>
                    Farm <br />
                    Factory
                  </p>
                  <img
                    src="/aboutus/factory.svg"
                    alt="agriculture"
                    loading="lazy"
                  />
                </div>
                <div className="feature-card">
                  <p>
                    Modern <br />
                    Technique
                  </p>
                  <img
                    src="/aboutus/tech.svg"
                    alt="agriculture"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="fixed-bg-text">agricom</div>
        </div>
      </ContentContainer>
    </AboutUsWrapper>
  );
};

export default AboutUs;
