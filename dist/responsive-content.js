/*! responsive-content.js | (c) 2014 Daniel Imms | github.com/Tyriar/responsive-content.js/blob/master/LICENSE */

var responsiveContent = (function () {
  function init() {
    var nodes = document.getElementsByClassName('responsive-content');
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var breakpoint = node.getAttribute('data-breakpoint');
      var altText = node.getAttribute('data-text');
      var accessibleText = node.getAttribute('data-accessible-text') || altText;
      node = setupElement(node, accessibleText);
      if (breakpoint && altText) {
        initBreakpoint(node, breakpoint, altText);
      }
    }
  }

  function initBreakpoint(node, breakpoint, altText) {
    var origText = node.innerText;
    var isLarge = true;
    var resize = function () {
      var newIsLarge = window.innerWidth >= breakpoint;
      if (isLarge != newIsLarge) {
        node.innerText = newIsLarge ? origText : altText;
      }
      isLarge = newIsLarge;
    };
    window.addEventListener('resize', resize);
    resize();
  }

  function setupElement(node, accessibleText) {
    // Hide the element from screen readers
    var text = node.innerText;
    node.innerHTML = '';
    var normalText = document.createElement('span');
    normalText.innerText = text;
    normalText.setAttribute('aria-hidden', 'true');
    var screenReader = document.createElement('span');
    screenReader.innerText = accessibleText;
    screenReader.style.position = 'absolute';
    screenReader.style.left = '-9999px';
    node.appendChild(normalText);
    node.appendChild(screenReader);
    return normalText;
  }

  return init;
})();
