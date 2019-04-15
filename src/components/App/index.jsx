import React from "react";
import Headline from "../Headline";
const App = () => {
  return (
    <div data-test="appComponent">
      <Headline
        header="First React Testing Project"
        desc="I am loving it!!!!"
      />
    </div>
  );
};

export default App;
