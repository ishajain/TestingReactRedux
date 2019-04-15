import React from "react";

const Headline = ({ header, desc }) => {
  return !header ? null : (
    <div data-test="HeadlineComponent">
      <h1>{header}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Headline;
