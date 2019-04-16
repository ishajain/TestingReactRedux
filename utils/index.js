import checkProps from "check-prop-types";

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