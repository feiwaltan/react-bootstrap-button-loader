!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("react-loader"),require("lodash/omit"),require("react-bootstrap/lib/Button"));else if("function"==typeof define&&define.amd)define(["react","react-loader","lodash/omit","react-bootstrap/lib/Button"],t);else{var r="object"==typeof exports?t(require("react"),require("react-loader"),require("lodash/omit"),require("react-bootstrap/lib/Button")):t(e.react,e["react-loader"],e["lodash/omit"],e["react-bootstrap/lib/Button"]);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(this,function(e,t,r,o){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var o=r(4),n=t(o),i=r(2),l=t(i);e["export"]={Spinner:l["default"],ButtonLoader:n["default"]}}).call(t,r(7)(e))},function(e,t){e.exports=require("react")},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),c=r(1),p=o(c),s=r(3),f=o(s),d=function(e){function t(){return n(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.bsStyle,r=e.spinColorDark,o=e.spinColorLight,n={position:"relative",display:"inline-block",width:"16px",height:"11px"},i=t&&"default"!==t?o:r;return p["default"].createElement("div",{style:{display:"inline-block"}},p["default"].createElement("div",{style:n},p["default"].createElement(f["default"],a({},this.props.spinConfig,{color:i,loaded:!1}))))}}]),t}(c.Component);d.propTypes={bsStyle:c.PropTypes.string,spinColorDark:c.PropTypes.string,spinColorLight:c.PropTypes.string,spinConfig:c.PropTypes.object},d.defaultProps={spinConfig:{lines:15,length:4,width:2,radius:3},spinColorDark:"#444",spinColorLight:"#fff"},t["default"]=d},function(e,t){e.exports=require("react-loader")},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),c=r(1),p=o(c),s=r(6),f=o(s),d=r(2),b=o(d),y=r(5),h=o(y),v=function(e){function t(){return n(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),u(t,[{key:"renderIcon",value:function(){var e=this.props,t=e.loading,r=e.icon;return t?p["default"].createElement(b["default"],null):r}},{key:"render",value:function(){var e=this.props,t=e.disabled,r=e.loading,o=e.children,n=t||r,i=(0,h["default"])(this.props,["disabled","loading","children","icon"]);return p["default"].createElement(f["default"],a({disabled:n},i),this.renderIcon()," ",o)}}]),t}(c.Component);v.propTypes={icon:c.PropTypes.node,loading:c.PropTypes.bool,children:c.PropTypes.node,onClick:c.PropTypes.func,disabled:c.PropTypes.bool,bsStyle:c.PropTypes.string},v.defaultProps={icon:null,loading:!1,children:null,style:{}},t["default"]=v},function(e,t){e.exports=require("lodash/omit")},function(e,t){e.exports=require("react-bootstrap/lib/Button")},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}])});