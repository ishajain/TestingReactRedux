import { findByTestAttr, checkPropTypes } from "../../../utils/index";
import SharedButton from "./index";
import { shallow } from "enzyme";
import React from "react";

const setup = (props = {}) => {
  return shallow(<SharedButton {...props} />);
};

describe("SharedButton Component", () => {
  let component, node;
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        buttonText: "Sample Test",
        clickEvent: () => {}
      };

      const propError = checkPropTypes(SharedButton, expectedProps);

      expect(propError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    beforeEach(() => {
      const props = {
        buttonText: "Sample Test",
        clickEvent: () => {}
      };
      component = setup(props);
    });
    it("Should render with no error", () => {
      node = findByTestAttr(component, "ButtonComponent");
      expect(node.length).toBe(1);
    });
  });
});
