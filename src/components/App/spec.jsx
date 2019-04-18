import React from "react";
import { shallow } from "enzyme";
import App from "./index";
import Headline from "../Headline";
import { findByTestAttr, testStore } from "../../../utils";
import { middlewares } from "../../store";
import reducer from "../../reducers";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore(middlewares);

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  //const store = mockStore({ posts: [] });
  const component = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  //console.log(component.debug());
  return component;
};

describe("App Component", () => {
  let component, wrapper;

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
