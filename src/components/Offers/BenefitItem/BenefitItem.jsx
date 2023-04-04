import React from "react";
import "./benefitItem.scss";
const BenefitItem = ({ header, description }) => {
  return (
    <>
      <div className="benefitItem">
        <div className="benefitItem__header">{header}</div>
        <div className="benefitItem__description">{description}</div>
      </div>
    </>
  );
};

export default BenefitItem;
