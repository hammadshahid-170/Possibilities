define("fa21ca2a-83eb-4a98-ab0c-a0885cb7c221_0.0.1",["react","react-dom","@microsoft/sp-webpart-base","PossibilitiesWebPartStrings","@microsoft/sp-http","@microsoft/sp-loader"],function(e,t,n,i,o,r){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(t,n){t.exports=e},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=i(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";(function(e){function n(e){var t=P();e();var n=P();S.perf.duration+=n-t}function i(e,t){void 0===t&&(t=!1),n(function(){var n=Array.isArray(e)?e:m(e);void 0===x&&(x=y());var i=S.runState,o=i.mode,r=i.buffer,a=i.flushTimer;t||1===o?(r.push(n),a||(S.runState.flushTimer=s())):l(n)})}function o(e){S.loadStyles=e}function r(e){S.runState.mode=e}function a(){n(function(){var e=S.runState.buffer.slice();S.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&l(t)})}function s(){return setTimeout(function(){S.runState.flushTimer=0,a()},0)}function l(e,t){S.loadStyles?S.loadStyles(f(e).styleString,e):x?g(e,t):h(e)}function c(e){S.theme=e,b()}function p(e){void 0===e&&(e=3),3!==e&&2!==e||(u(S.registeredStyles),S.registeredStyles=[]),3!==e&&1!==e||(u(S.registeredThemableStyles),S.registeredThemableStyles=[])}function u(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function b(){if(S.theme){for(var e=[],t=0,n=S.registeredThemableStyles;t<n.length;t++){var i=n[t];e.push(i.themableStyle)}e.length>0&&(p(1),l([].concat.apply([],e)))}}function d(e){return e&&(e=f(m(e)).styleString),e}function f(e){var t=S.theme,n=!1;return{styleString:(e||[]).map(function(e){var i=e.theme;if(i){n=!0;var o=t?t[i]:void 0,r=e.defaultValue||"inherit";return t&&!o&&console,o||r}return e.rawString}).join(""),themable:n}}function m(e){var t=[];if(e){for(var n=0,i=void 0;i=w.exec(e);){var o=i.index;o>n&&t.push({rawString:e.substring(n,o)}),t.push({theme:i[1],defaultValue:i[2]}),n=w.lastIndex}t.push({rawString:e.substring(n)})}return t}function h(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),i=f(e),o=i.styleString,r=i.themable;n.type="text/css",n.appendChild(document.createTextNode(o)),S.perf.count++,t.appendChild(n);var a={styleElement:n,themableStyle:e};r?S.registeredThemableStyles.push(a):S.registeredStyles.push(a)}function g(e,t){var n=document.getElementsByTagName("head")[0],i=S.registeredStyles,o=S.lastStyleElement,r=o?o.styleSheet:void 0,a=r?r.cssText:"",s=i[i.length-1],l=f(e).styleString;(!o||a.length+l.length>E)&&(o=document.createElement("style"),o.type="text/css",t?(n.replaceChild(o,t.styleElement),t.styleElement=o):n.appendChild(o),t||(s={styleElement:o,themableStyle:e},i.push(s))),o.styleSheet.cssText+=d(l),Array.prototype.push.apply(s.themableStyle,e),S.lastStyleElement=o}function y(){var e=!1;if("undefined"!=typeof document){var t=document.createElement("style");t.type="text/css",e=!!t.styleSheet}return e}var _=this&&this.__assign||Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};Object.defineProperty(t,"__esModule",{value:!0});var x,v="undefined"==typeof window?e:window,S=function(){var e=v.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};return e.runState||(e=_({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}})),e.registeredThemableStyles||(e=_({},e,{registeredThemableStyles:[]})),v.__themeState__=e,e}(),w=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,E=1e4,P=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};t.loadStyles=i,t.configureLoadStyles=o,t.configureRunMode=r,t.flush=a,t.loadTheme=c,t.clearStyles=p,t.detokenize=d,t.splitStyles=m}).call(t,n(11))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=(n.n(i),n(4)),r=(n.n(o),n(5)),a=(n.n(r),n(6)),s=(n.n(a),n(7)),l=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=i.createElement(s.a,{description:this.properties.description,ListName:this.properties.ListName,SiteUrl:this.properties.SiteUrl,context:this.context});o.render(e,this.domElement)},t.prototype.onDispose=function(){o.unmountComponentAtNode(this.domElement)},t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:a.PropertyPaneDescription},groups:[{groupName:a.BasicGroupName,groupFields:[Object(r.PropertyPaneTextField)("description",{label:a.DescriptionFieldLabel}),Object(r.PropertyPaneTextField)("ListName",{label:"List Name"}),Object(r.PropertyPaneTextField)("SiteUrl",{label:"Root Site Url"})]}]}]}},t}(r.BaseClientSideWebPart);t.default=c},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=i},function(e,t,n){"use strict";var i=n(0),o=(n.n(i),n(8)),r=n(12),a=(n.n(r),n(13)),s=(n.n(a),n(15)),l=(n.n(s),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}()),c=function(e){function t(t){var n=e.call(this,t)||this;return s.SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"),n.state={PossibilitiesData:[]},n}return l(t,e),t.prototype.componentDidMount=function(){var e=this;this.getItems().then(function(t){console.log("response",t);var n=[];t.value.forEach(function(t){var i=t.AttachmentFiles.length>0?e.props.SiteUrl+t.AttachmentFiles[0].ServerRelativeUrl:"";n.push({Image:i,Id:t.ID,Heading:t.Title,DescriptionText:t.Description})}),console.log("Data in Data ",n),e.setState({PossibilitiesData:n})})},t.prototype.render=function(){return i.createElement("div",{className:o.a.possibilities},i.createElement("div",{className:o.a.container},i.createElement("div",{className:"row pb-5"},this.state.PossibilitiesData.map(function(e){return i.createElement("div",{className:"col-lg-4 text-center pb-4"},i.createElement("div",{className:"box-bg p-4 pt-5 pb-5"},i.createElement("img",{src:e.Image,width:"75"}),i.createElement("p",{className:"box-p1 fontRegular mt-3"},e.Heading),i.createElement("p",{className:"box-p1 fontRegular"},e.DescriptionText)))}))))},t.prototype.getItems=function(){try{var e=this.props.context.pageContext.web.absoluteUrl+"/_api/web/lists/getbytitle('"+this.props.ListName+"')/items?$select=*,AttachmentFiles&$expand=AttachmentFiles";return console.log("requestUrl",e),this.props.context.spHttpClient.get(e,r.SPHttpClient.configurations.v1).then(function(e){if(e.ok)return console.log(e),e.json()})}catch(e){console.log("Error while getting items",e)}},t}(i.Component);t.a=c},function(e,t,n){"use strict";n(9);var i={possibilities:"possibilities_b8adb93e",container:"container_b8adb93e",row:"row_b8adb93e",column:"column_b8adb93e","ms-Grid":"ms-Grid_b8adb93e",title:"title_b8adb93e",subTitle:"subTitle_b8adb93e",description:"description_b8adb93e",button:"button_b8adb93e",label:"label_b8adb93e"};t.a=i},function(e,t,n){var i=n(10),o=n(2);"string"==typeof i&&(i=[[e.i,i]]);for(var r=0;r<i.length;r++)o.loadStyles(i[r][1],!0);i.locals&&(e.exports=i.locals)},function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,'.possibilities_b8adb93e .container_b8adb93e{max-width:700px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.possibilities_b8adb93e .row_b8adb93e{margin:0 -8px;box-sizing:border-box;color:"[theme:white, default: #ffffff]";background-color:"[theme:themeDark, default: #005a9e]";padding:20px}.possibilities_b8adb93e .row_b8adb93e:after,.possibilities_b8adb93e .row_b8adb93e:before{display:table;content:"";line-height:0}.possibilities_b8adb93e .row_b8adb93e:after{clear:both}.possibilities_b8adb93e .column_b8adb93e{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box}[dir=ltr] .possibilities_b8adb93e .column_b8adb93e{float:left}[dir=rtl] .possibilities_b8adb93e .column_b8adb93e{float:right}.possibilities_b8adb93e .column_b8adb93e .ms-Grid_b8adb93e{padding:0}@media (min-width:640px){.possibilities_b8adb93e .column_b8adb93e{width:83.33333333333334%}}@media (min-width:1024px){.possibilities_b8adb93e .column_b8adb93e{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .possibilities_b8adb93e .column_b8adb93e{left:16.66667%}[dir=rtl] .possibilities_b8adb93e .column_b8adb93e{right:16.66667%}}@media (min-width:640px){[dir=ltr] .possibilities_b8adb93e .column_b8adb93e{left:8.33333%}[dir=rtl] .possibilities_b8adb93e .column_b8adb93e{right:8.33333%}}.possibilities_b8adb93e .title_b8adb93e{font-size:21px;font-weight:100;color:"[theme:white, default: #ffffff]"}.possibilities_b8adb93e .description_b8adb93e,.possibilities_b8adb93e .subTitle_b8adb93e{font-size:17px;font-weight:300;color:"[theme:white, default: #ffffff]"}.possibilities_b8adb93e .button_b8adb93e{text-decoration:none;height:32px;min-width:80px;background-color:"[theme:themePrimary, default: #0078d7]";border-color:"[theme:themePrimary, default: #0078d7]";color:"[theme:white, default: #ffffff]";outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.possibilities_b8adb93e .button_b8adb93e .label_b8adb93e{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}',""])},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=o},function(e,t,n){var i=n(14),o=n(2);"string"==typeof i&&(i=[[e.i,i]]);for(var r=0;r<i.length;r++)o.loadStyles(i[r][1],!0);i.locals&&(e.exports=i.locals)},function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,".box-p{font-size:16px}.box-p,.box-p1{margin-bottom:0}.box-p1{font-size:20px}.box-bg{background:#e6f3f2}.box-bg2{background:#fff}@media (max-width:1400px) and (min-width:1200px){.box-p-bottom{padding-bottom:31px!important}}",""])},function(e,t){e.exports=r}])});