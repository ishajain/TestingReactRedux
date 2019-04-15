import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  let component;

  describe("Have Props", () => {
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc"
      };
      component = setup(props);
    });

    it("Should render with no errors", () => {
      const wrapper = component.find(`[data-test="HeadlineComponent"]`);
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Have No Props", () => {
    beforeEach(() => {
      component = setup();
    });

    it("Should not render", () => {
      const wrapper = component.find(`[data-test="HeadlineComponent"]`);
      expect(wrapper.length).toBe(0);
    });
  });
});
