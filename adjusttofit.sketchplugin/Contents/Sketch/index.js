var that=this;function __skpm_run(e,t){that.context=t;var r=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/index.js")}({"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(e,t,r){var n=r(/*! sketch */"sketch"),a=r(/*! ./util */"./src/util.js"),u={useCustomFunction:!1,adjustSelected:function(){u.runPlugin(!1,!1)},adjustNested:function(){u.runPlugin(!1,!0)},adjustSelectedInvisible:function(){u.runPlugin(!0,!1)},adjustNestedInvisible:function(){u.runPlugin(!0,!0)},runPlugin:function(e,t){var r=n.getSelectedDocument().selectedLayers;u.useCustomFunction=e;var a=u.adjustLayers(r,t);n.UI.message(u.resultsString(a))},adjustLayers:function(e,t){var r={};return e.forEach(function(e){var n={};if(t&&e.layers){var a=u.adjustLayers(e.layers,t);for(var s in a)a.hasOwnProperty(s)&&(n=a);delete n.failed}var i=e.sketchObject.frame().height(),o=u.adjustToFit(e),c=e.sketchObject.frame().height(),d="failed";for(var f in o&&(d=c!==i?e.type.toLowerCase():"unaffected"),n[d]=n[d]+1||1,n)n.hasOwnProperty(f)&&(r[f]=r[f]+n[f]||n[f])}),r},adjustToFit:function(e){switch(e.type){case"Group":case"Artboard":case"SymbolMaster":u.adjustLayerToFit(e);break;case"Text":u.adjustTextToFit(e);break;default:return!1}return!0},adjustLayerToFit:function(e){if(u.useCustomFunction){var t={x:1/0,y:1/0,width:0,height:0};e.layers.forEach(function(e){t.x=Math.min(t.x,e.frame.x),t.y=Math.min(t.y,e.frame.y),t.width=Math.max(t.width,e.frame.x+e.frame.width),t.height=Math.max(t.height,e.frame.y+e.frame.height)}),t.width-=t.x,t.height-=t.y,e.layers.forEach(function(e){e.frame.x-=t.x,e.frame.y-=t.y}),e.frame.offset(t.x,t.y),e.frame.width=t.width,e.frame.height=t.height}else e.adjustToFit()},adjustTextToFit:function(e){var t=e.fragments[0],r=e.fragments[e.fragments.length-1],n=e.frame.y+t.rect.y,a=e.frame.height,u=r.rect.y+r.rect.height-t.rect.y;u!==a&&(e.frame.y=n,e.frame.height=u)},resultsString:function(e){var t=e.failed;delete e.failed;var r=e.unaffected;delete e.unaffected;var n=[];for(var u in e)if(e.hasOwnProperty(u)){var s=e[u];"text"===u&&(u="text layer"),"symbolmaster"===u&&(u="symbol"),n.push(a.pluralize(s,u))}var i=[];return n.length>0&&i.push("".concat(a.commify(n)," adjusted successfully")),r>0&&i.push("".concat(a.pluralize(r,"layer")," unaffected")),t>0&&i.push("".concat(t," failed")),i.join(", ")}};e.exports.adjustSelected=u.adjustSelected,e.exports.adjustNested=u.adjustNested,e.exports.adjustSelectedInvisible=u.adjustSelectedInvisible,e.exports.adjustNestedInvisible=u.adjustNestedInvisible},"./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */function(e,t){var r=e.exports={};r.pluralize=function(e,t){return e>1&&(t+="s"),"".concat(e," ").concat(t)},r.commify=function(e){switch(e.length){case 0:return;case 1:return e[0];case 2:return"".concat(e[0]," and ").concat(e[1]);default:var t=e.pop();return e.join(", ")+" and ".concat(t)}}},sketch:
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=require("sketch")}});"default"===e&&"function"==typeof r?r(t):r[e](t)}that.adjustSelected=__skpm_run.bind(this,"adjustSelected"),that.onRun=__skpm_run.bind(this,"default"),that.adjustNested=__skpm_run.bind(this,"adjustNested"),that.adjustSelectedInvisible=__skpm_run.bind(this,"adjustSelectedInvisible"),that.adjustNestedInvisible=__skpm_run.bind(this,"adjustNestedInvisible");