/**
 * @namespace Paperkit
 */
var Paperkit = (function(paperkit) {
  /**
   * Transforms a element tag into a Paperkit element name
   * 
   * @function Paperkit.tagToElementName
   * @param {string} tag Element tag
   * @return {string} The corresponding element name
   */
  paperkit.tagToElementName = function(tag) {
    var elementName = "";
    
    switch(tag) {
      case 'MD-LIST': elementName = "MDList"; break; 
    }
    
    return elementName;
  }
  
  /**
   * Initializes all Paperkit elements inside a parent
   * 
   * @param {HTMLELement} parentElement The parent element
   */
  paperkit.initElements = function(parentElement) {
    var elements = parentElement.getElementsByTagName('*');
    var length = elements.length;
    for(var i=0; i<elements.length; i++) {
      var element = elements[i];
      if(element.tagName.indexOf('MD') === 0) {
        this.inject(element, paperkit[this.tagToElementName(element.tagName)])
      }    
    }
  }
  
  /**
   * Injects a Paperkit element into a HTMLElement
   * Copies all functions from the Paperkit Element into a HTMLElement
   * 
   * @param {HTMLElement} Element The HTMLElement to inject into
   * @param {Class} paperkitClass The paperkit class to inject from
   */
  paperkit.inject = function(element, paperkitClass) {
    for(var method in paperkitClass.prototype) {
      element[method] = paperkitClass.prototype[method];
    }
    paperkitClass.prototype.clone(element);
  }
  return paperkit;
})(Paperkit || {});
