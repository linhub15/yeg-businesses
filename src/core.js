function el(tag, attrs, ...children) {
  let element = tag ? document.createElement(tag) : null;
  let keys = attrs && element ? Object.keys(attrs) : null;
  let childNodes = children && element ? children : null;
  for (let i in keys) {
    element.setAttribute(keys[i], attrs[keys[i]]);
  }
  for (let node of childNodes) {
    element.appendChild(
      node instanceof HTMLElement ? node : document.createTextNode(node));
  }
  return element;
}
function makeRoute(controller, param,value) {
  return `/${controller}?${param}=${value}`;
}

export {el, makeRoute};