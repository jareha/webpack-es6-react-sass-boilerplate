import React from "react";
import { a, an } from "utilities/propTypesShorthand";
import getComponentName from "utilities/componentName";

import "./styles";

// Get component name from path
const componentName = getComponentName(import.meta.url);

const HelloWorld = (props) => {
  const {
    content,
    options,
  } = props;

  return (
    <div className={options.className}>
      <h2>{content.header}</h2>
      <p>Placeholder, for use as a (working) boilerplate component.</p>
    </div>
  );
};

HelloWorld.defaultProps = {
  content: {
    header: "Webpack + ES6 + React + Sass boilerplate",
  },
  options: {
    className: componentName.class,
  },
};

HelloWorld.propTypes = {
  content: a.shape({
    header: a.string,
  }),
  options: a.shape({
    className: a.string,
  }),
};

export default HelloWorld;
