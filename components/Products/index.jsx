import React from "react";
import { ProductWrapper } from "./styles";
import { ContentContainer } from "../Layout/styles";
import Image from "next/image";

const Products = () => {
  return (
    <ProductWrapper>
      <ContentContainer>
        <div className="section-wrapper">
          <div className="left">
            <h3 className="heading">Our Products</h3>
            <p className="sub-heading">
              Appetizing, luscious flavors that tantalize the senses.
              <br />
              Effervescently secure and uniquely special.
            </p>
          </div>
          <div className="right">
            <div className="product-card">
              <Image
                src="/products/irrigation.jpg"
                alt="address"
                layout="fill"
              />
            </div>
            <div className="product-card">
              <Image
                src="/products/farm.jpg"
                alt="address"
                layout="fill"
              />
            </div>
            <div className="product-card">
              <Image
                src="/products/fruits.jpg"
                alt="address"
                layout="fill"
              />
            </div>
            <div className="product-card">
              <Image
                src="/products/wheat.jpg"
                alt="address"
                layout="fill"
              />
            </div>
            <div className="product-card">
              <Image
                src="/products/veg.jpg"
                alt="address"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </ContentContainer>
    </ProductWrapper>
  );
};

export default Products;
