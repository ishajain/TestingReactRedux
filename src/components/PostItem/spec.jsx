import React from "react";
import { shallow } from "enzyme";
import PostItem from "./index";
import { findByTestAttr, checkPropTypes } from "../../../utils/index";

const setup = (props = {}) => {
  return shallow(<PostItem {...props} />);
};
describe("PostItem Component", () => {
  let component, node;
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Sample Title",
        desc: "Sample Description"
      };
      const propsError = checkPropTypes(PostItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    beforeEach(() => {
      const props = {
        title: "Sample Title",
        desc: "Sample Description"
      };
      component = setup(props);
    });

    it("should render with no errors", () => {
      node = findByTestAttr(component, "PostItemComponent");
      expect(node.length).toBe(1);
    });

    it("should render a title", () => {
      node = findByTestAttr(component, "PostItemTitle");
      expect(node.length).toBe(1);
    });
    it("should render a desc", () => {
      node = findByTestAttr(component, "PostItemDesc");
      expect(node.length).toBe(1);
    });
  });

  describe("NOT Renders", () => {
    beforeEach(() => {
      const props = {
        desc: "Sample Description"
      };
      component = setup(props);
    });

    it("should not render", () => {
      node = findByTestAttr(component, "PostItemComponent");
      expect(node.length).toBe(0);
    });
  });
});
