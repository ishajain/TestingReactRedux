import React from "react";
import { shallow } from "enzyme";
import App from "./index";
import Headline from "../Headline";
import { findByTestAttr } from "../../../utils";

describe("App Component", () => {
  let component, wrapper;
  const setup = (props = {}) => {
    component = shallow(<App {...props} />);
    return component;
  };

  beforeEach(() => {
    component = setup();
    wrapper = findByTestAttr(component, "AppComponent");
  });

  it("Should render with no errors", () => {
    expect(wrapper.length).toBe(1);
  });

  it("Should render the Headline as child component", () => {
    expect(
      wrapper
        .find(Headline)
        .dive()
        .find(`[data-test="HeadlineComponent"]`).length
    ).toBe(1);
  });
});
