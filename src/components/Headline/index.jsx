import React from "react";
import PropTypes from "prop-types";
const Headline = ({ header, desc }) => {
  return !header ? null : (
    <div data-test="HeadlineComponent">
      <h1>{header}</h1>
      <p>{desc}</p>
    </div>
  );
};

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string
};

Headline.defaultProps = {
  header: null
};

export default Headline;
