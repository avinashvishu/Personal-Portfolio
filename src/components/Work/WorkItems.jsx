import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card">
      <img className="work__img" src={item.image}></img>
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} target={"_blank"} className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button__icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
