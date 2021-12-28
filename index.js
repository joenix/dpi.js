// dom workflow
function dom(callback = () => {}) {
  // create node
  const node = document.createElement('div');

  // set css
  node.style.cssText = `width: 1in; height: 1in; position: absolute; left: 0; top: 0; z-index: 2147483647; visibility: hidden;`;

  // append to body
  document.body.appendChild(node);

  // running callback
  const result = callback(node);

  // remove node
  node.parentNode.removeChild(node);

  // exports
  return result;
}

// get screen dpi
function dpi() {
  // in deviceXDPI
  if (window.screen.deviceXDPI) {
    return {
      x: window.screen.deviceXDPI,
      y: window.screen.deviceYDPI,
    };
  }

  // use dom
  return dom(node => ({
    x: parseInt(node.offsetWidth),
    y: parseInt(node.offsetHeight),
  }));
}

// export
export default dpi;
