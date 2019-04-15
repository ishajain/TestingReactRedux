import React from "react";
import { shallow } from "enzyme";
import App from "./index";

describe("App Component", () => {
  const setup = (props = {}) => {
    const component = shallow(<App {...props} />);
    return component;
  };

  it("Should render with no errors", () => {
    const component = setup();
    const wrapper = component.find(`[data-test="appComponent"]`);
    expect(wrapper.length).toBe(1);
  });
});
