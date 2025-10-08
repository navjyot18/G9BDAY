const getElementInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect()
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
}

const findElementInViewport = (elements: Element[]): Element | undefined => {
  return elements.find(getElementInViewport)
}

const getAllElementsInViewport = (elements: Element[]): Element[] => {
  return elements.filter(getElementInViewport)
}

const checkForValidElements = (elements: (Element | null | undefined)[]): Element[] => {
  return elements.filter((element): element is Element => element !== null && element !== undefined)
}

export { getElementInViewport, findElementInViewport, getAllElementsInViewport, checkForValidElements }