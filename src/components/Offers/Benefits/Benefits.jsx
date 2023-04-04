import React from "react";
import BenefitItem from "../BenefitItem/BenefitItem";
import OfferBtn from "../../ui/OfferBtn/OfferBtn";
import "./benefits.scss";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits__title">
        Вместе с
        <span className="benefits__title--highlighted">
          {" "}
          бесплатной
          <br />
          консультацией{" "}
        </span>
        мы дарим:
      </div>

      <div className="benefits__grid">
        <BenefitItem header="Виджеты" description="30 готовых решений" />
        <BenefitItem
          header="Dashboard"
          description="с показателями вашего бизнеса"
        />
        <BenefitItem
          header="Skype Аудит"
          description="отдела продаж и CRM системы"
        />
        <BenefitItem header="35 дней" description="использования CRM" />
      </div>

      <OfferBtn text="Получить консультацию" />
    </section>
  );
};

export default Benefits;
