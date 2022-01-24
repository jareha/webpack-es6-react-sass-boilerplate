import React from "react";
import { a, an } from "utilities/propTypesShorthand";
import getComponentName from "utilities/componentName";

import "styles";
import HelloWorld from "components/HelloWorld";

// Get component name from path
const componentName = getComponentName(import.meta.url);

const App = (props) => {
  const {
    content,
    options,
  } = props;

  return (
    <div className={options.className}>
      <HelloWorld />
    </div>
  );
};

App.defaultProps = {
  content: {
    header: componentName.titlecase,
  },
  options: {
    className: componentName.class,
  },
};

App.propTypes = {
  content: a.shape({
    header: a.string,
  }),
  options: a.shape({
    className: a.string,
  }),
};

export default App;
