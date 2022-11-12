import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      Icon: clock,
      description: "Open 9.00AM to 5.00PM everyday",
      bgClass : 'bg-gradient-to-r from-primary to-secondary'
    },
    {
      id: 2,
      name: "Our Locations",
      Icon: marker,
      description: "Brooklyn, NY 10036, United States",
      bgClass : 'bg-accent'
    },
    {
      id: 3,
      name: "Contact Us",
      Icon: phone,
      description: "01751-311310",
      bgClass : 'bg-gradient-to-r from-primary to-secondary'
    },
  ];

  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

    {
        cardData.map(info => <InfoCard
          key={info.id}
          info={info}
        ></InfoCard>)
    }
  </div>;
};

export default InfoCards;
