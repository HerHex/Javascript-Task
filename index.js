function DomElementsReturn(selector) {
    const root = document.querySelector(selector);
    
    return [...root.querySelectorAll('*')];
  }
  
  console.log(DOMElementsReturn('#bottomMenu'));