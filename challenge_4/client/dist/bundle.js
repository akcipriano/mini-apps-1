/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/column.jsx":
/*!******************************************!*\
  !*** ./client/src/components/column.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _square_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square.jsx */ \"./client/src/components/square.jsx\");\n\n\nvar Column = function Column(props) {\n  return React.createElement(\"div\", {\n    id: props.columnId,\n    className: \"column\"\n  }, props.rows.map(function (i) {\n    return React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      x: props.columnId,\n      y: i,\n      key: i,\n      handleCircleClick: props.handleCircleClick\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvY29sdW1uLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9jb2x1bW4uanN4PzJlODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNxdWFyZSBmcm9tICcuL3NxdWFyZS5qc3gnO1xuXG52YXIgQ29sdW1uID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgaWQ9e3Byb3BzLmNvbHVtbklkfSBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICB7cHJvcHMucm93cy5tYXAoXG4gICAgICBpID0+IDxTcXVhcmUgeD17cHJvcHMuY29sdW1uSWR9IHk9e2l9IGtleT17aX0gaGFuZGxlQ2lyY2xlQ2xpY2s9e3Byb3BzLmhhbmRsZUNpcmNsZUNsaWNrfS8+XG4gICAgKX1cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtbjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQU9BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/column.jsx\n");

/***/ }),

/***/ "./client/src/components/square.jsx":
/*!******************************************!*\
  !*** ./client/src/components/square.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Square = function Square(props) {\n  return React.createElement(\"div\", {\n    className: \"square\"\n  }, React.createElement(\"span\", {\n    className: \"circle\",\n    id: \"\".concat(props.x, \",\").concat(props.y),\n    x: props.x,\n    y: props.y,\n    onClick: props.handleCircleClick\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc3F1YXJlLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9zcXVhcmUuanN4P2RkOTQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFNxdWFyZSA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNxdWFyZVwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpcmNsZVwiIGlkPXtgJHtwcm9wcy54fSwke3Byb3BzLnl9YH0geD17cHJvcHMueH0geT17cHJvcHMueX0gb25DbGljaz17cHJvcHMuaGFuZGxlQ2lyY2xlQ2xpY2t9Lz5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUNBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/square.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_column_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/column.jsx */ \"./client/src/components/column.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.handleCircleClick = _this.handleCircleClick.bind(_assertThisInitialized(_this));\n    _this.columns = [1, 2, 3, 4, 5, 6, 7];\n    _this.rows = [6, 5, 4, 3, 2, 1];\n    _this.board = [['1,6', '2,6', '3,6', '4,6', '5,6', '6,6', '7,6'], ['1,5', '2,5', '3,5', '4,5', '5,5', '6,5', '7,5'], ['1,4', '2,4', '3,4', '4,4', '5,4', '6,4', '7,4'], ['1,3', '2,3', '3,3', '4,3', '5,3', '6,3', '7,3'], ['1,2', '2,2', '3,2', '4,2', '5,2', '6,2', '7,2'], ['1,1', '2,1', '3,1', '4,1', '5,1', '6,1', '7,1']];\n    _this.state = {\n      color: 'red'\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"updateBoard\",\n    value: function updateBoard(id, color) {\n      for (var i = 0; i < this.board.length; i++) {\n        for (var k = 0; k < this.board[i].length; k++) {\n          if (this.board[i][k] === id) {\n            this.board[i][k] = color;\n            return;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkForWinner\",\n    value: function checkForWinner(color) {\n      //scans for a winner horizontally\n      for (var i = 0; i < this.board.length; i++) {\n        var count = 0;\n\n        for (var k = 0; k < this.board[i].length; k++) {\n          if (this.board[i][k] === color) {\n            count++;\n\n            if (count === 4) {\n              setTimeout(function () {\n                return alert(\"\".concat(color, \", you win!\"));\n              }, 25);\n            }\n          } else {\n            count = 0;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"handleCircleClick\",\n    value: function handleCircleClick(event) {\n      var targetId = document.getElementById(event.target.id).id;\n\n      if (event.target.style.backgroundColor === 'red' || event.target.style.backgroundColor === 'yellow') {\n        alert('Space occupied, choose another circle');\n      } else {\n        if (this.state.color === 'red') {\n          event.target.style.backgroundColor = 'red';\n          console.log('Red ID', targetId.id);\n          this.updateBoard(targetId, 'red');\n          this.checkForWinner('red');\n          this.setState({\n            color: 'yellow'\n          });\n          console.log('Board', this.board);\n        }\n\n        if (this.state.color === 'yellow') {\n          event.target.style.backgroundColor = 'yellow';\n          console.log('Yellow ID', targetId);\n          this.updateBoard(targetId, 'yellow');\n          this.checkForWinner('yellow');\n          this.setState({\n            color: 'red'\n          });\n          console.log('Board', this.board);\n        }\n      }\n\n      console.log('getElementById', document.getElementById(event.target.id)); // console.log('target', event.target.class)\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\"div\", null, this.columns.map(function (i) {\n        return React.createElement(_components_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          columnId: i,\n          rows: _this2.rows,\n          key: \"Column\".concat(i),\n          handleCircleClick: _this2.handleCircleClick\n        });\n      }));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('main'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbXBvbmVudHMvY29sdW1uLmpzeCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2lyY2xlQ2xpY2sgPSB0aGlzLmhhbmRsZUNpcmNsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb2x1bW5zID0gWzEsIDIsIDMsIDQsIDUsIDYsIDddO1xuICAgIHRoaXMucm93cyA9IFs2LCA1LCA0LCAzLCAyLCAxXTtcbiAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgWycxLDYnLCcyLDYnLCczLDYnLCc0LDYnLCc1LDYnLCc2LDYnLCc3LDYnXSxcbiAgICAgIFsnMSw1JywnMiw1JywnMyw1JywnNCw1JywnNSw1JywnNiw1JywnNyw1J10sXG4gICAgICBbJzEsNCcsJzIsNCcsJzMsNCcsJzQsNCcsJzUsNCcsJzYsNCcsJzcsNCddLFxuICAgICAgWycxLDMnLCcyLDMnLCczLDMnLCc0LDMnLCc1LDMnLCc2LDMnLCc3LDMnXSxcbiAgICAgIFsnMSwyJywnMiwyJywnMywyJywnNCwyJywnNSwyJywnNiwyJywnNywyJ10sXG4gICAgICBbJzEsMScsJzIsMScsJzMsMScsJzQsMScsJzUsMScsJzYsMScsJzcsMSddLFxuICAgIF07XG4gICAgdGhpcy5zdGF0ZSA9e1xuICAgICAgY29sb3I6ICdyZWQnLFxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUJvYXJkKGlkLCBjb2xvcikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmJvYXJkW2ldLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2tdID09PSBpZCkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbaV1ba10gPSBjb2xvcjtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0Zvcldpbm5lcihjb2xvcikge1xuICAgIC8vc2NhbnMgZm9yIGEgd2lubmVyIGhvcml6b250YWxseVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5ib2FyZFtpXS5sZW5ndGg7IGsrKykge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtrXSA9PT0gY29sb3IpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgIGlmIChjb3VudCA9PT0gNCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhbGVydChgJHtjb2xvcn0sIHlvdSB3aW4hYCksIDI1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2lyY2xlQ2xpY2soZXZlbnQpIHtcbiAgICB2YXIgdGFyZ2V0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQuaWQpLmlkO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICdyZWQnIHx8IGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd5ZWxsb3cnKSB7XG4gICAgICBhbGVydCgnU3BhY2Ugb2NjdXBpZWQsIGNob29zZSBhbm90aGVyIGNpcmNsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jb2xvciA9PT0gJ3JlZCcpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICBjb25zb2xlLmxvZygnUmVkIElEJywgdGFyZ2V0SWQuaWQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJvYXJkKHRhcmdldElkLCAncmVkJyk7XG4gICAgICAgIHRoaXMuY2hlY2tGb3JXaW5uZXIoJ3JlZCcpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb2xvcjogJ3llbGxvdyd9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ0JvYXJkJywgdGhpcy5ib2FyZCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jb2xvciA9PT0gJ3llbGxvdycpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnO1xuICAgICAgICBjb25zb2xlLmxvZygnWWVsbG93IElEJywgdGFyZ2V0SWQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJvYXJkKHRhcmdldElkLCAneWVsbG93Jyk7XG4gICAgICAgIHRoaXMuY2hlY2tGb3JXaW5uZXIoJ3llbGxvdycpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb2xvcjogJ3JlZCd9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ0JvYXJkJywgdGhpcy5ib2FyZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdnZXRFbGVtZW50QnlJZCcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5pZCkpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0YXJnZXQnLCBldmVudC50YXJnZXQuY2xhc3MpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuY29sdW1ucy5tYXAoXG4gICAgICAgICAgaSA9PiA8Q29sdW1uIGNvbHVtbklkPXtpfSByb3dzPXt0aGlzLnJvd3N9IGtleT17YENvbHVtbiR7aX1gfSBoYW5kbGVDaXJjbGVDbGljaz17dGhpcy5oYW5kbGVDaXJjbGVDbGlja30vPlxuICAgICAgICApfVxuICAgICAgICB7LyogPFJvdyByb3dJZD0nMScgY29sdW1ucz17dGhpcy5jb2x1bW5zfSBrZXk9e2BSb3cgMWB9IGhhbmRsZUNpcmNsZUNsaWNrPXt0aGlzLmhhbmRsZUNpcmNsZUNsaWNrfS8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFiQTtBQWdCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7OztBQW5GQTtBQUNBO0FBcUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });