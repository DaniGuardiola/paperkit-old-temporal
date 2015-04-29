/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/** @namespace Paperkit */
var Paperkit = (function(paperkit) {
  /**
   * Creates a MDList element
   * @class MDList
   * @param {string} vara - The variable a 
   */
  function MDList() {
    this.vara = null;
  }
  
  /**
   * Sets the variable a
   * 
   * @method MDList.setVara
   * @param {string} vara - The variable a
   */
  MDList.prototype.setVara=function(vara) {
    this.vara = vara;
    this.mdlostObject = new paperkit.MDLost("hello-goodbye");
  };
  
  /**
   * Gets the variable a
   * 
   * @method MDList.getVara
   * @returns {string} The variable a
   */
  MDList.prototype.getVara=function() {
    return this.vara;
  }
  
  /**
   * Returns the MDLostObject
   * 
   * @returns {paperkit.MDLost} The MDLostObject
   */
  MDList.prototype.getMDLostObject=function() {
    return this.mdlostObject;
  }
  
  /**
   * Writes the variable a into the HTML of this element
   * 
   * @method MDList.writeHTML
   */
  MDList.prototype.writeHTML=function() {
    this.innerHTML = this.getVara();
  }
  
  /**
   * Clones this object vars to an element
   * 
   * @method MDList.clone
   * @param {HTMLElement} element The element where this class variables will be copied
   */
  MDList.prototype.clone = function(element) {
    element.vara = null;
    element.mdlostObject = new paperkit.MDLost("hello-goodbye");
  }
    
  paperkit.MDList = MDList;
  return paperkit;
})(Paperkit || {});
