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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/actions/PetActions.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/actions/PetActions.js":
/*!******************************************!*\
  !*** ./client/src/actions/PetActions.js ***!
  \******************************************/
/*! exports provided: GET_PETS, GET_PETS_SUCCESS, GET_PETS_FAILURE, PET_CREATED_SUCCESS, PET_CREATED_FAILURE, PET_DELETED_SUCCESS, PET_DELETED_FAILURE, getPets, getPetsSuccess, getPetsFailure, fetchEmployeePets, petCreatedSuccess, petCreatedFailure, fetchPostNewPet, petDeletedSuccess, petDeletedFailure, fetchDeletePet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PETS", function() { return GET_PETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PETS_SUCCESS", function() { return GET_PETS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PETS_FAILURE", function() { return GET_PETS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PET_CREATED_SUCCESS", function() { return PET_CREATED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PET_CREATED_FAILURE", function() { return PET_CREATED_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PET_DELETED_SUCCESS", function() { return PET_DELETED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PET_DELETED_FAILURE", function() { return PET_DELETED_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPets", function() { return getPets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPetsSuccess", function() { return getPetsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPetsFailure", function() { return getPetsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchEmployeePets", function() { return fetchEmployeePets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "petCreatedSuccess", function() { return petCreatedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "petCreatedFailure", function() { return petCreatedFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostNewPet", function() { return fetchPostNewPet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "petDeletedSuccess", function() { return petDeletedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "petDeletedFailure", function() { return petDeletedFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeletePet", function() { return fetchDeletePet; });
var GET_PETS = "GET_PETS";
var GET_PETS_SUCCESS = "GET_PETS_SUCCESS";
var GET_PETS_FAILURE = "GET_PETS_FAILURE";
var PET_CREATED_SUCCESS = "PET_CREATED_SUCCESS";
var PET_CREATED_FAILURE = "PET_CREATED_FAILURE";
var PET_DELETED_SUCCESS = "PET_DELETED_SUCCESS";
var PET_DELETED_FAILURE = "PET_DELETED_FAILURE";
var getPets = function getPets() {
  return {
    type: GET_PETS
  };
};
var getPetsSuccess = function getPetsSuccess(pets) {
  return {
    type: GET_PETS_SUCCESS,
    payload: pets
  };
};
var getPetsFailure = function getPetsFailure(error) {
  return {
    type: GET_PETS_FAILURE,
    payload: error
  };
};
var fetchEmployeePets = function fetchEmployeePets(employee_id) {
  return function (dispatch) {
    dispatch(getPets);
    fetch("http://localhost:3001/employees/".concat(employee_id, "/pets")).then(function (response) {
      return response.json();
    }).then(function (data) {
      dispatch(getPetsSuccess(data));
    })["catch"](function (error) {
      dispatch(getPetsFailure(error));
    });
  };
};
var petCreatedSuccess = function petCreatedSuccess(pet) {
  return {
    type: PET_CREATED_SUCCESS,
    payload: pet
  };
};
var petCreatedFailure = function petCreatedFailure(error) {
  return {
    type: PET_CREATED_FAILURE,
    payload: error
  };
};
var fetchPostNewPet = function fetchPostNewPet(pet) {
  return function (dispatch) {
    fetch("http://localhost:3001/employees/".concat(pet.employee_id, "/pets"), {
      method: 'POST',
      body: JSON.stringify(pet),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      dispatch(petCreatedSuccess(data));
    })["catch"](function (error) {
      dispatch(petCreatedFailure(error));
    });
  };
};
var petDeletedSuccess = function petDeletedSuccess(pet) {
  return {
    type: PET_DELETED_SUCCESS,
    payload: pet
  };
};
var petDeletedFailure = function petDeletedFailure(error) {
  return {
    type: PET_DELETED_FAILURE,
    payload: error
  };
};
var fetchDeletePet = function fetchDeletePet(employee_id, pet_id) {
  return function (dispatch) {
    fetch("http://localhost:3001/employees/".concat(employee_id, "/pets/").concat(pet_id), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      dispatch(petDeletedSuccess(data));
    })["catch"](function (error) {
      dispatch(petDeletedFailure(error));
    });
  };
};

/***/ })

/******/ });
//# sourceMappingURL=PetActions-9a2b98063d8921599767.js.map