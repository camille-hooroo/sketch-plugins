var that=this;function __skpm_run(key,context){that.context=context;var exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=r(1),o=r(2),a=r(3),s="undefined"!=typeof MSJSONDataArchiver,i="undefined"!=typeof NSBundle?NSBundle.mainBundle().infoDictionary().CFBundleShortVersionString:0,c=function(e){for(var t=e.writers(),r=0;r<t.length;r++){var n=t[r];if(0===o.toString(n.class()).indexOf(p))return!0}return!1},l=function(e,t){COScript.currentCOScript().shouldKeepAround=!0;var r=S(t).getClassInstance();e.registerWriter(r)},u=function(e,t,r){var n=t.immutableModelObject();return f(e,t,r),MSJSONDataArchiver.archiveStringWithRootObject_error(n,null)},f=function e(t,r,n){var s=t.api(),i=NSApplication.sharedApplication(),c=o.toArray(i.orderedDocuments())[0],l=a.fromNative(c);if(r.isKindOfClass(MSSymbolInstance))try{var f=r.symbolMaster(),d=o.toString(f.objectID());n.symbolInstances=n.symbolInstances||[],n.symbolInstances.push(r),n.symbolMasters=n.symbolMasters||{},n.symbolMasters[d]=f;var p=a.fromNative(r).overrides,S=!0,v=!1,y=void 0;try{for(var h,m=p[Symbol.iterator]();!(S=(h=m.next()).done);S=!0){var g=h.value;if("symbolID"===g.property){var b=o.toString(g.value);if(!b){n.symbolMasters[b]="unresolved";continue}if(!n.symbolMasters[b]){var x=l.getSymbolMasterWithID(b);x?n.symbolMasters[b]=x.sketchObject:log("no master symbol found with id "+String(b))}}}}catch(e){v=!0,y=e}finally{try{!S&&m.return&&m.return()}finally{if(v)throw y}}}catch(e){log("Error extracting symbol instance: "+String(e))}else if(!r.isKindOfClass(MSSymbolMaster))if(r.isKindOfClass(MSShapeGroup)){var _=o.toString(r.objectID());if(r.canFlatten){var O=n.flattenedShapes=n.flattenedShapes||{};if(void 0===O[_]){O[_]="";var D=r.copyWithOptions(1);D.flatten();var M=u(t,D,n);O[_]=JSON.parse(o.toString(M))}}else log("Failed to flatten shape with id "+String(_))}else{var j=s.wrapObject(r,s.selectedDocument);if(j.isText){n.texts=n.texts||{};var C=r.CSSAttributes(),N=o.toSafeString(o.toString(j.text)),I=o.toArray(C).filter(function(e){return 0!==e.indexOf("/*")}).map(o.toSafeString);n.texts[j.id]={text:N,css:I}}else j.isGroup&&j.iterate(function(r){return e(t,r.sketchObject,n)})}},d="com.framer.sketch.pasteboard",p="Framer_Pasteboard_DynamicClass_",S=function(e){return new n.default({"writeData:toPasteboard:":function(){return function(t,r){r.addTypes_owner_([d],new n.default({"pasteboard:provideDataForType:":function(r){return function(e,t,r){for(var n={},s=t.layers().layers(),c=o.mapSketchCollection(s,function(t){return u(e,t,n)}),l=n.symbolInstances,p=n.symbolMasters,S=l?l.concat():[],v=MSDocumentData.new().currentPage(),y={},h=n.detachedSymbols=n.detachedSymbols||{};l&&l.length;){var m=l.pop(),g=m.objectID(),b=-1!==S.indexOf(m);for(var x in p)if(!y[x]){var _=p[x];if("unresolved"!==_){var O=_.copyWithOptions(1);y[x]=O,v.addLayers([O])}delete p[x]}var D=void 0;if(b){var M=m.copyWithOptions(1);v.addLayers([M]),(D=a.fromNative(M).detach())&&(h[g]=D)}else D=a.fromNative(m).detach();D&&f(e,D.sketchObject,n)}for(var j in h){var C=h[j],N=C.sketchObject.immutableModelObject(),I=MSJSONDataArchiver.archiveStringWithRootObject_error(N,null);h[j]=JSON.parse(o.toString(I))}delete n.symbolMasters,delete n.symbolInstances;var k=JSON.stringify(n),A='{\n"version":"'+String(i)+'",\n"layers":['+String(c.join(","))+'],\n"metadata":'+String(k)+"}";r.setString_forType_(A,d)}(e,t,r)}}).getClassInstance())}}(),supportedPasteboardTypes:function(){return function(e,t){return NSArray.arrayWithArray([d,NSPasteboardTypeString])}}(),canWriteDataToPasteboard:function(){return function(e){return!0}}()},p)};e.exports={onOpenDocument:function(e){if(s){var t=MSPasteboardManager.applicationPasteboardManager();c(t)||l(t,e)}else log("This version of Sketch is not supported.")}}},function(module,exports,__webpack_require__){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function default_1(selectorHandlerDict,prefix,superclass){prefix=prefix||"MochaJSDelegate_DynamicClass_";var uniqueClassName=prefix+NSUUID.UUID().UUIDString(),delegateClassDesc=MOClassDescription.allocateDescriptionForClassWithName_superclass_(uniqueClassName,superclass||NSObject);delegateClassDesc.registerClass();var handlers={};if(this.setHandlerForSelector=function(selectorString,func){var handlerHasBeenSet=selectorString in handlers,selector=NSSelectorFromString(selectorString);if(handlers[selectorString]=func,!handlerHasBeenSet){for(var args=[],regex=/:/g;regex.exec(selectorString);)args.push("arg"+args.length);var dynamicFunction=eval("(function ("+args.join(", ")+") { return handlers[selectorString].apply(this, arguments); })");delegateClassDesc.addInstanceMethodWithSelector_function_(selector,dynamicFunction)}},this.removeHandlerForSelector=function(e){delete handlers[e]},this.getHandlerForSelector=function(e){return handlers[e]},this.getAllHandlers=function(){return handlers},this.getClass=function(){return NSClassFromString(uniqueClassName)},this.getClassInstance=function(){return NSClassFromString(uniqueClassName).new()},"object"===(void 0===selectorHandlerDict?"undefined":_typeof(selectorHandlerDict)))for(var selectorString in selectorHandlerDict)this.setHandlerForSelector(selectorString,selectorHandlerDict[selectorString])}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=default_1},function(e,t,r){"use strict";function n(e){return e+""}Object.defineProperty(t,"__esModule",{value:!0}),t.toBool=function(e){return!!e},t.toArray=function(e){for(var t=e.count(),r=[],n=0;n<t;n++)r.push(e.objectAtIndex(n));return r},t.toObject=function(e){var t={};for(var r in e)t[r]=e[r];return t},t.toString=n,t.toSafeString=function(e){return n(e).replace(/[\n\r\u2028\u2029]/g,"\n")},t.map=function(e,t){var r=void 0,n=[];r=e.count?e.count():e.length;for(var o=0;o<r;o++){var a=void 0;a=e.objectAtIndex?e.objectAtIndex(o):e[o],n.push(t(a,o))}return n},t.filter=function(e,t){var r=void 0,n=[];r=e.className&&"__NSArrayM"===e.className()?e.count():e.length;for(var o=0;o<r;o++)t(e[o],o)&&n.push(t(e[o],o));return n},t.mapSketchCollection=function(e,t){for(var r=[],n=void 0,o=e.objectEnumerator();n=o.nextObject();)r.push(t(n));return r.reverse()},t.iterateSketchCollection=function(e,t){for(var r=void 0,n=e.objectEnumerator();r=n.nextObject();)t(r)}},function(e,t){e.exports=require("sketch/dom")}]);"default"===key&&"function"==typeof exports?exports(context):exports[key](context)}that.onOpenDocument=__skpm_run.bind(this,"onOpenDocument"),that.onRun=__skpm_run.bind(this,"default");