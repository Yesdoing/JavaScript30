export default {
  createDocumentFragment(htmlTagName, attr = null) {
    const $fragment = document.createDocumentFragment();
    const $element = document.createElement(htmlTagName);
    if (attr) {
      Object.entries(attr).map(([attrName, attrValue]) => {
        $element.setAttribute(attrName, attrValue)
      });
    }

    return $fragment.appendChild($element);
  }
}