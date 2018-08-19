const invalidDocumentFragmentError = new Error('Not a DocumentFragment');

export default (targetSelector, htmlFragment) => {
  if (!htmlFragment instanceof DocumentFragment) {
    throw invalidDocumentFragmentError;
  }

  document.querySelector(targetSelector).appendChild(htmlFragment)
};