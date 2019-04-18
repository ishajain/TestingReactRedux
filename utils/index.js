import checkProps from "check-prop-types";
import { middlewares } from '../src/store'
import { createStore, applyMiddleware } from 'redux'
import reducer from "../src/reducers";

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test="${attr}"]`);
    return wrapper;
  };

export const checkPropTypes = (component,expectedProps) => {
  const propError =  checkProps(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );

  return propError;
}

export const testStore= (initialState) => {

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(reducer, initialState);

}

