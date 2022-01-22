function getComponentName(url, length = 2) {
  const fragments = url.split("/");
  let name = fragments[fragments.length - length];
  const regex = /([a-z0-9])([A-Z]+)/g;

  const dashcase = name.replace(regex, "$1-$2").toLowerCase();

  name = {
    class: `component--${dashcase}`,
    dashcase,
    default: name,
    lowercase: name.toLowerCase(),
    titlecase: name.replace(regex, "$1 $2"),
  };

  return name;
}

export default getComponentName;
