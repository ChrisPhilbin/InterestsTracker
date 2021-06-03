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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/reducers/NotesReducer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/actions/NoteActions.js":
/*!*******************************************!*\
  !*** ./client/src/actions/NoteActions.js ***!
  \*******************************************/
/*! exports provided: GET_NOTES, GET_NOTES_SUCCESS, GET_NOTES_FAILURE, NOTE_CREATED_SUCCESS, NOTE_CREATED_FAILURE, NOTE_DELETED_SUCCESS, NOTE_DELETED_FAILURE, getNotes, GetNotesSuccess, getNotesFailure, fetchEmployeeNotes, noteCreatedSuccess, notecreatedFailure, fetchPostNewNote, noteDeletedSuccess, noteDeletedFailure, fetchDeleteNote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NOTES", function() { return GET_NOTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NOTES_SUCCESS", function() { return GET_NOTES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NOTES_FAILURE", function() { return GET_NOTES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTE_CREATED_SUCCESS", function() { return NOTE_CREATED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTE_CREATED_FAILURE", function() { return NOTE_CREATED_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTE_DELETED_SUCCESS", function() { return NOTE_DELETED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTE_DELETED_FAILURE", function() { return NOTE_DELETED_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotes", function() { return getNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNotesSuccess", function() { return GetNotesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotesFailure", function() { return getNotesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchEmployeeNotes", function() { return fetchEmployeeNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noteCreatedSuccess", function() { return noteCreatedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notecreatedFailure", function() { return notecreatedFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostNewNote", function() { return fetchPostNewNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noteDeletedSuccess", function() { return noteDeletedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noteDeletedFailure", function() { return noteDeletedFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeleteNote", function() { return fetchDeleteNote; });
var GET_NOTES = "GET_NOTES";
var GET_NOTES_SUCCESS = "GET_NOTES_SUCCESS";
var GET_NOTES_FAILURE = "GET_NOTES_FAILURE";
var NOTE_CREATED_SUCCESS = "NOTE_CREATED_SUCCESS";
var NOTE_CREATED_FAILURE = "NOTE_CREATED_FAILURE";
var NOTE_DELETED_SUCCESS = "NOTE_DELETED_SUCCESS";
var NOTE_DELETED_FAILURE = "NOTE_DELETED_FAILURE";
var getNotes = function getNotes() {
  return {
    type: GET_NOTES
  };
};
var GetNotesSuccess = function GetNotesSuccess(notes) {
  return {
    type: GET_NOTES_SUCCESS,
    payload: notes
  };
};
var getNotesFailure = function getNotesFailure(error) {
  return {
    type: GET_NOTES_FAILURE,
    payload: error
  };
};
var fetchEmployeeNotes = function fetchEmployeeNotes(employee_id) {
  return function (dispatch) {
    dispatch(getNotes);
    fetch("http://localhost:3001/employees/".concat(employee_id, "/notes")).then(function (response) {
      return response.json();
    }).then(function (data) {
      dispatch(GetNotesSuccess(data));
    })["catch"](function (error) {
      dispatch(getNotesFailure(error));
    });
  };
};
var noteCreatedSuccess = function noteCreatedSuccess(note) {
  return {
    type: NOTE_CREATED_SUCCESS,
    payload: note
  };
};
var notecreatedFailure = function notecreatedFailure(error) {
  return {
    type: NOTE_CREATED_FAILURE,
    payload: error
  };
};
var fetchPostNewNote = function fetchPostNewNote(note) {
  return function (dispatch) {
    fetch("http://localhost:3001/employees/".concat(note.employee_id, "/notes"), {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      dispatch(noteCreatedSuccess(data));
    })["catch"](function (error) {
      dispatch(notecreatedFailure(error));
    });
  };
};
var noteDeletedSuccess = function noteDeletedSuccess(note) {
  return {
    type: NOTE_DELETED_SUCCESS,
    payload: note
  };
};
var noteDeletedFailure = function noteDeletedFailure(error) {
  return {
    type: NOTE_DELETED_FAILURE,
    payload: error
  };
};
var fetchDeleteNote = function fetchDeleteNote(employee_id, note_id) {
  return function (dispatch) {
    fetch("http://localhost:3001/employees/".concat(employee_id, "/notes/").concat(note_id), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      dispatch(noteDeletedSuccess(data));
    })["catch"](function (error) {
      dispatch(noteDeletedFailure(error));
    });
  };
};

/***/ }),

/***/ "./client/src/reducers/NotesReducer.js":
/*!*********************************************!*\
  !*** ./client/src/reducers/NotesReducer.js ***!
  \*********************************************/
/*! exports provided: initialNotesState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialNotesState", function() { return initialNotesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return notesReducer; });
/* harmony import */ var _actions_NoteActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/NoteActions */ "./client/src/actions/NoteActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialNotesState = {
  notes: [],
  note: {},
  loading: false,
  hasErrors: false
};
function notesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialNotesState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_NoteActions__WEBPACK_IMPORTED_MODULE_0__["GET_NOTES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions_NoteActions__WEBPACK_IMPORTED_MODULE_0__["GET_NOTES_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        notes: action.payload
      });

    case _actions_NoteActions__WEBPACK_IMPORTED_MODULE_0__["GET_NOTES_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        hasErrors: true
      });

    case _actions_NoteActions__WEBPACK_IMPORTED_MODULE_0__["NOTE_CREATED_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        notes: state.notes.concat(action.payload),
        hasErrors: false
      });

    case _actions_NoteActions__WEBPACK_IMPORTED_MODULE_0__["NOTE_CREATED_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        hasErrors: true
      });

    case _actions_NoteActions__WEBPACK_IMPORTED_MODULE_0__["NOTE_DELETED_SUCCESS"]:
      return {
        notes: state.notes.filter(function (note) {
          return note.id !== action.payload.id;
        })
      };

    default:
      return state;
  }
}

/***/ })

/******/ });
//# sourceMappingURL=NotesReducer-eb5b556d936f1dd9c9bc.js.map