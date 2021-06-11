/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = "/packs/";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__(
    (__webpack_require__.s = "./client/src/reducers/AlertsReducer.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./client/src/actions/AlertActions.js":
      /*!********************************************!*\
  !*** ./client/src/actions/AlertActions.js ***!
  \********************************************/
      /*! exports provided: GET_ALERTS, GET_ALERTS_SUCCESS, GET_ALERTS_FAILURE, getAlerts, getAlertsSuccess, getAlertsFailure, fetchEmployeeAlerts */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_ALERTS",
          function () {
            return GET_ALERTS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_ALERTS_SUCCESS",
          function () {
            return GET_ALERTS_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_ALERTS_FAILURE",
          function () {
            return GET_ALERTS_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getAlerts",
          function () {
            return getAlerts;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getAlertsSuccess",
          function () {
            return getAlertsSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getAlertsFailure",
          function () {
            return getAlertsFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchEmployeeAlerts",
          function () {
            return fetchEmployeeAlerts;
          }
        );
        var GET_ALERTS = "GET_ALERTS";
        var GET_ALERTS_SUCCESS = "GET_ALERTS_SUCCESS";
        var GET_ALERTS_FAILURE = "GET_ALERTS_FAILURE";
        var getAlerts = function getAlerts() {
          return {
            type: GET_ALERTS,
          };
        };
        var getAlertsSuccess = function getAlertsSuccess(alerts) {
          return {
            type: GET_ALERTS_SUCCESS,
            payload: alerts,
          };
        };
        var getAlertsFailure = function getAlertsFailure(error) {
          return {
            type: GET_ALERTS_FAILURE,
            payload: error,
          };
        };
        var fetchEmployeeAlerts = function fetchEmployeeAlerts() {
          return function (dispatch) {
            dispatch(getAlerts);
            fetch("http://localhost:3000/v1/employees/dashboard")
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                dispatch(getAlertsSuccess(data));
              })
              ["catch"](function (error) {
                dispatch(getAlertsFailure(error));
              });
          };
        };

        /***/
      },

    /***/ "./client/src/reducers/AlertsReducer.js":
      /*!**********************************************!*\
  !*** ./client/src/reducers/AlertsReducer.js ***!
  \**********************************************/
      /*! exports provided: initialAlertsState, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initialAlertsState",
          function () {
            return initialAlertsState;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return alertsReducer;
          }
        );
        /* harmony import */ var _actions_AlertActions__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../actions/AlertActions */ "./client/src/actions/AlertActions.js"
          );
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        var initialAlertsState = {
          alerts: {},
          loading: false,
          hasErrors: false,
        };
        function alertsReducer() {
          var state =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : initialAlertsState;
          var action = arguments.length > 1 ? arguments[1] : undefined;

          switch (action.type) {
            case _actions_AlertActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_ALERTS"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: true,
                }
              );

            case _actions_AlertActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_ALERTS_SUCCESS"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  alerts: action.payload,
                }
              );

            case _actions_AlertActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_ALERTS_FAILURE"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  hasErrors: true,
                }
              );

            default:
              return state;
          }
        }

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=AlertsReducer-f0526100d437d3532943.js.map
