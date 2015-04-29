/**
 * 
 */
var Paperkit = (function(paperkit) {
  function MDLost(vara) {
    this.vara = vara;
  }
    
  MDLost.prototype.setVara=function(vara) {
    var vara = vara;
  };
  
  MDLost.prototype.getVara=function() {
    return this.vara;
  }
  
  paperkit.MDLost = MDLost;
  return paperkit;
})(Paperkit || {});