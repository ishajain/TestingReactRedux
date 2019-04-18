import React from "react";
import PropTypes from "prop-types";

class SharedButton extends React.Component {
  submitEvent = () => {
    if (this.props.clickEvent) {
      this.props.clickEvent();
    }
  };
  render() {
    return (
      <button data-test="ButtonComponent" onClick={this.submitEvent}>
        {this.props.buttonText}
      </button>
    );
  }
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  clickEvent: PropTypes.func
};

export default SharedButton;
