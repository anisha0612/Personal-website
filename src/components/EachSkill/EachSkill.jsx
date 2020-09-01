import React from "react";
import ReactStars from "react-stars";
import "./EachSkill.css";

const EachSkill = (skill) => {
  console.log(skill);
  return (
    <div className="EachSkill">
      <h4>{skill.name}</h4>
      <ReactStars count={5} value={skill.value} size={15} color2={"#ffd700"} />
    </div>
  );
};

export default EachSkill;
