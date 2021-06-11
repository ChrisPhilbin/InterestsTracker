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
    (__webpack_require__.s = "./client/src/actions/InterestActions.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./client/src/actions/InterestActions.js":
      /*!***********************************************!*\
  !*** ./client/src/actions/InterestActions.js ***!
  \***********************************************/
      /*! exports provided: GET_INTERESTS, GET_INTERESTS_SUCCESS, GET_INTERESTS_FAILURE, CREATE_INTEREST_FAILURE, CREATE_INTEREST_SUCCESS, INTEREST_DELETED_SUCCESS, INTEREST_DELETED_FAILURE, getInterests, getInterestsSuccess, getInterestsFailure, fetchEmployeeInterests, interestCreatedSuccess, interestCreatedFailure, fetchPostNewInterest, interestDeletedSuccess, interestDeletedFailure, fetchDeleteInterest */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_INTERESTS",
          function () {
            return GET_INTERESTS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_INTERESTS_SUCCESS",
          function () {
            return GET_INTERESTS_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_INTERESTS_FAILURE",
          function () {
            return GET_INTERESTS_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CREATE_INTEREST_FAILURE",
          function () {
            return CREATE_INTEREST_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CREATE_INTEREST_SUCCESS",
          function () {
            return CREATE_INTEREST_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "INTEREST_DELETED_SUCCESS",
          function () {
            return INTEREST_DELETED_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "INTEREST_DELETED_FAILURE",
          function () {
            return INTEREST_DELETED_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getInterests",
          function () {
            return getInterests;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getInterestsSuccess",
          function () {
            return getInterestsSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getInterestsFailure",
          function () {
            return getInterestsFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchEmployeeInterests",
          function () {
            return fetchEmployeeInterests;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "interestCreatedSuccess",
          function () {
            return interestCreatedSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "interestCreatedFailure",
          function () {
            return interestCreatedFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchPostNewInterest",
          function () {
            return fetchPostNewInterest;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "interestDeletedSuccess",
          function () {
            return interestDeletedSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "interestDeletedFailure",
          function () {
            return interestDeletedFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchDeleteInterest",
          function () {
            return fetchDeleteInterest;
          }
        );
        var GET_INTERESTS = "GET_INTERESTS";
        var GET_INTERESTS_SUCCESS = "GET_INTERESTS_SUCCESS";
        var GET_INTERESTS_FAILURE = "GET_INTERESTS_FAILURE";
        var CREATE_INTEREST_FAILURE = "CREATE_INTEREST_FAILURE";
        var CREATE_INTEREST_SUCCESS = "CREATE_INTEREST_SUCCESS";
        var INTEREST_DELETED_SUCCESS = "INTEREST_DELETED_SUCCESS";
        var INTEREST_DELETED_FAILURE = "INTEREST_DELETED_FAILURE";
        var getInterests = function getInterests() {
          return {
            type: GET_INTERESTS,
          };
        };
        var getInterestsSuccess = function getInterestsSuccess(interests) {
          return {
            type: GET_INTERESTS_SUCCESS,
            payload: interests,
          };
        };
        var getInterestsFailure = function getInterestsFailure(error) {
          return {
            type: GET_INTERESTS_FAILURE,
            payload: error,
          };
        };
        var fetchEmployeeInterests = function fetchEmployeeInterests(
          employee_id
        ) {
          return function (dispatch) {
            dispatch(getInterests);
            fetch(
              "http://localhost:3001/employees/".concat(
                employee_id,
                "/interests"
              )
            )
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                dispatch(getInterestsSuccess(data));
              })
              ["catch"](function (error) {
                dispatch(getInterestsFailure(error));
              });
          };
        };
        var interestCreatedSuccess = function interestCreatedSuccess(interest) {
          return {
            type: CREATE_INTEREST_SUCCESS,
            payload: interest,
          };
        };
        var interestCreatedFailure = function interestCreatedFailure(error) {
          return {
            type: CREATE_INTEREST_FAILURE,
            payload: error,
          };
        };
        var fetchPostNewInterest = function fetchPostNewInterest(interest) {
          return function (dispatch) {
            fetch(
              "http://localhost:3001/employees/".concat(
                interest.employee_id,
                "/interests"
              ),
              {
                method: "POST",
                body: JSON.stringify(interest),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                dispatch(interestCreatedSuccess(data));
              })
              ["catch"](function (error) {
                dispatch(interestCreatedFailure(error));
              });
          };
        };
        var interestDeletedSuccess = function interestDeletedSuccess(interest) {
          return {
            type: INTEREST_DELETED_SUCCESS,
            payload: interest,
          };
        };
        var interestDeletedFailure = function interestDeletedFailure(error) {
          return {
            type: INTEREST_DELETED_FAILURE,
            payload: error,
          };
        };
        var fetchDeleteInterest = function fetchDeleteInterest(
          employee_id,
          interest_id
        ) {
          return function (dispatch) {
            fetch(
              "http://localhost:3001/employees/"
                .concat(employee_id, "/interests/")
                .concat(interest_id),
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                dispatch(interestDeletedSuccess(data));
              })
              ["catch"](function (error) {
                dispatch(interestDeletedFailure(error));
              });
          };
        };

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=InterestActions-31ab9ad072b7b834e0e3.js.map
