import { findByTestAttr, checkPropTypes } from "../../../utils/index";
import SharedButton from "./index";
import { shallow } from "enzyme";
import React from "react";

const setup = (props = {}) => {
  return shallow(<SharedButton {...props} />);
};

describe("SharedButton Component", () => {
  let component, mockFunc, button;
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
    mockFunc = jest.fn();
    beforeEach(() => {
      const props = {
        buttonText: "Sample Test",
        clickEvent: mockFunc
      };
      component = setup(props);
    });
    it("Should render with no error", () => {
      button = findByTestAttr(component, "ButtonComponent");
      expect(button.length).toBe(1);
    });
    it("Should emit the callback on click event", () => {
      button = findByTestAttr(component, "ButtonComponent");
      button.simulate("click");
      //button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
