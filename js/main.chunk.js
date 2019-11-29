(this["webpackJsonpnew"] = this["webpackJsonpnew"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @appbaseio/reactivesearch */ "./node_modules/@appbaseio/reactivesearch/lib/index.es.js");
/* harmony import */ var _CON__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CON */ "./src/CON.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Results */ "./src/components/Results.js");
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Filters */ "./src/components/Filters.js");

var _jsxFileName = "/home/west/git/ReactiveSearch/src/App.js";

function _templateObject2() {
  var data = Object(_home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: 0.3fr 1fr;\n  padding: 20px;\n  grid-gap: 20px;\n  @media (max-width: 1240px) {\n    grid-template-columns: 0.5fr 1fr;\n  }\n  @media (max-width: 960px) {\n    grid-template-columns: 1fr 1fr;\n  }\n  @media (max-width: 576px) {\n    padding: 0;\n    grid-template-columns: auto;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body{\n    margin: 0;\n    background: rgba(225, 219, 233, .3);\n    font-family: \"Open Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\",\"Noto Sans\",\"Ubuntu\",\"Droid Sans\",\"Helvetica Neue\",sans-serif\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // CRED,




 // eslint-disable-next-line

Object(emotion__WEBPACK_IMPORTED_MODULE_2__["injectGlobal"])(_templateObject());
var wrapper = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_3__["ReactiveBase"] // credentials={CRED}
  , {
    app: _CON__WEBPACK_IMPORTED_MODULE_4__["APP"],
    url: _CON__WEBPACK_IMPORTED_MODULE_4__["ES_URL"],
    theme: {
      colors: {
        textColor: "#424242",
        primaryColor: "#08c"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Filters__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Results__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/CON.js":
/*!********************!*\
  !*** ./src/CON.js ***!
  \********************/
/*! exports provided: ES_URL, APP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ES_URL", function() { return ES_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP", function() { return APP; });
//export const URL = "https://scalr.api.appbase.io";
//export const ES_URL = "http://127.0.0.1:9200/";
var ES_URL = "https://mail.blky.eu/ze7eN/es/?csrf=${xsrftoken}";
var APP = "new_book_search"; //export const ES_URL = "http://e530c:9200/";
//export const APP = "new-book-search";
//export const CRED = "vrTi58e8o:04540063-5d81-4fb1-9969-a52d29892995";
//

/***/ }),

/***/ "./src/components/Filters.js":
/*!***********************************!*\
  !*** ./src/components/Filters.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @appbaseio/reactivesearch */ "./node_modules/@appbaseio/reactivesearch/lib/index.es.js");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");






var _jsxFileName = "/home/west/git/ReactiveSearch/src/components/Filters.js";

function _templateObject2() {
  var data = Object(_home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  position: sticky;\n  top: 80px;\n  border: 1px solid #e8e8e8;\n  background: white;\n  overflow-y: scroll;\n  height: calc(100vh - 80px);\n  > div {\n    margin: 30px auto;\n    width: 90%;\n  }\n  @media (max-width: 576px) {\n    display: ", ";\n    position: fixed;\n    width: 100%;\n    top: 70px;\n    height: calc(100vh - 70px);\n  }\n  .col {\n  flex: 1;\n  padding: 1px;\n  .slider-tooltip-visible {\n     background: url(\"https://www.blky.eu/aka/avatar.ico\") ;\n  }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  padding: 15px;\n  border: 0;\n  outline: 0;\n  display: block;\n  position: fixed;\n  border-radius: 2px;\n  background: #08c;\n  bottom: 10px;\n  left: 50%;\n  z-index: 20;\n  transform: translateX(-50%);\n  @media (max-width: 576px) {\n    display: block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var buttonStyles = Object(emotion__WEBPACK_IMPORTED_MODULE_8__["css"])(_templateObject());

var filterWrapper = function filterWrapper(isVisible) {
  return Object(emotion__WEBPACK_IMPORTED_MODULE_8__["css"])(_templateObject2(), isVisible ? "block" : "flex");
};

var AllFilters = function AllFilters() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_7__["RangeSlider"], {
    stepValue: 2,
    showHistogram: true,
    showFilter: true,
    interval: 5,
    componentId: "publicationYear",
    title: "Publication Year",
    dataField: "original_publication_year",
    rangeLabels: {
      "start": 1880,
      "end": 2019
    },
    range: {
      start: 1880,
      end: 2029
    },
    innerClass: {
      title: 'search-title',
      input: 'search-input'
    },
    tooltipTrigger: "always",
    renderTooltipData: function renderTooltipData(data) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        style: {
          color: 'yellow',
          textDecoration: 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, data);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_7__["MultiList"], {
    dataField: "authors.keyword",
    showSearch: false,
    title: "Authors",
    componentId: "authors",
    queryFormat: "or",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_7__["SingleRange"], {
    componentId: "bookCount",
    dataField: "books_count",
    data: [{
      start: 0,
      end: 50,
      label: "Up to 50"
    }, {
      start: 51,
      end: 100,
      label: "50 to 100"
    }, {
      start: 100,
      end: 10000,
      label: "100 or more"
    }],
    title: "Book Counts",
    showRadio: false,
    placeholder: "Filter meetups",
    showFilter: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }));
};

var Filters =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Filters, _React$Component);

  function Filters() {
    var _this;

    Object(_home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Filters);

    _this = Object(_home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Filters).call(this));

    _this.handleMobileView = function () {
      _this.setState(function (prevState) {
        return {
          isVisible: !prevState.isVisible
        };
      });
    };

    _this.state = {
      isVisible: false
    };
    return _this;
  }

  Object(_home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Filters, [{
    key: "render",
    value: function render() {
      var isVisible = this.state.isVisible;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "button",
        onClick: this.handleMobileView,
        className: buttonStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Show ".concat(isVisible ? "Results" : "Filters")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: filterWrapper(isVisible),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(AllFilters, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      })));
    }
  }]);

  return Filters;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @appbaseio/reactivesearch */ "./node_modules/@appbaseio/reactivesearch/lib/index.es.js");

var _jsxFileName = "/home/west/git/ReactiveSearch/src/components/Navbar.js";

function _templateObject() {
  var data = Object(_home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 0 25px;\n  background: #08c;\n  height: 70px;\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  position: sticky;\n  top: 0px;\n  z-index: 20;\n  grid-gap: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  .logo {\n    color: white;\n    font-size: 3em;\n    font-weight: bold;\n    cursor: pointer;\n    background: url(\"https://www.blky.eu/aka/avatar.ico\") no-repeat;\n\n  }\n  input {\n    font-size: 0.8em;\n    padding: 10px 20px 10px 40px;\n    width: 100%;\n    outline: none;\n    border: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var navbarStyles = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject());

var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: navbarStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Logo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_3__["DataSearch"], {
    dataField: ["title", //            "title.autosuggest",
    //            "title.keyword",
    "authors", //          "authors.keyword",
    //          "authors.autosuggest",
    "authors"],
    categoryField: "authors",
    fieldWeights: [2, 1, 2, 2, 1, 2],
    componentId: "search",
    placeholder: "Search for book title & Authors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Results.js":
/*!***********************************!*\
  !*** ./src/components/Results.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @appbaseio/reactivesearch */ "./node_modules/@appbaseio/reactivesearch/lib/index.es.js");

var _jsxFileName = "/home/west/git/ReactiveSearch/src/components/Results.js";

function _templateObject() {
  var data = Object(_home_west_git_ReactiveSearch_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: white;\n  border: 1px solid #e8e8e8;\n  padding: 20px;\n  @media (max-width: 576px) {\n    padding: 10px;\n  }\n  a {\n    height: auto;\n    box-shadow: none;\n    border-radius: 0;\n    border: 1px solid #e8e8e8;\n    &:hover {\n      box-shadow: none;\n    }\n    @media (max-width: 420px) {\n      width: 100%;\n      margin-bottom: 20px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var container = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject());

var Results = function Results() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_3__["SelectedFilters"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_3__["ReactiveList"], {
    pagination: true,
    componentId: "results",
    react: {
      and: ["search", "publicationYear", "bookCount", "authors"]
    },
    dataField: "title.keyword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        data = _ref.data,
        error = _ref.error;

    if (loading) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Loading...");
    }

    if (error) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Something Went Wrong!");
    }

    if (data.length) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_3__["ReactiveList"].ResultCardsWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, data.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_3__["ResultCard"], {
          key: item._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_3__["ResultCard"].Image, {
          src: item.image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_3__["ResultCard"].Title, {
          dangerouslySetInnerHTML: {
            __html: item.original_title
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }));
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "No Results Found");
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Results);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/home/west/git/ReactiveSearch/src/index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), document.getElementById("root"));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/west/git/ReactiveSearch/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/west/git/ReactiveSearch/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map