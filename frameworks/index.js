function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

exports.printMsg = function () {
    console.log("This is a message from the demo package");
}
document.body.appendChild(component());
