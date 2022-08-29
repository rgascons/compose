const convertJStoCSS = (jsStyles) => {
  let cssString = "";
  for (let objectKey in jsStyles) {
    cssString += objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) + ": " + jsStyles[objectKey] + ";\n";
  }

  return cssString;
};

export const createElement = (tagName, attrs = {}, ...children) => {
  if (attrs?.["style"]) {
    attrs["style"] = convertJStoCSS(attrs["style"]);;
  }

  const elem = Object.assign(document.createElement(tagName), attrs);
  for (const child of children) {
    if (Array.isArray(child)) elem.append(...child);
    else elem.append(child);
  }
  return elem;
}