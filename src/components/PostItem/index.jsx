import React from "react";
import PropTypes from "prop-types";
const PostItem = props => {
  const { title, desc } = props;

  return !title ? null : (
    <div data-test="PostItemComponent">
      <h2 data-test="PostItemTitle">{title}</h2>
      <div data-test="PostItemDesc">{desc}</div>
    </div>
  );
};

PostItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};

export default PostItem;
