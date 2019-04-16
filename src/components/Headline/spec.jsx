import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByTestAttr, checkPropTypes } from "../../../utils";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  let component;

  describe("Checking PropTypes", () => {
    it("Should not throw warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Description"
      };
      const propErros = checkPropTypes(Headline, expectedProps);
      expect(propErros).toBeUndefined();
    });
  });

  describe("Have Props", () => {
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc"
      };
      component = setup(props);
    });

    it("Should render with no errors", () => {
      const wrapper = findByTestAttr(component, "HeadlineComponent");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Have No Props", () => {
    beforeEach(() => {
      component = setup();
    });

    it("Should not render", () => {
      const wrapper = findByTestAttr(component, "HeadlineComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
