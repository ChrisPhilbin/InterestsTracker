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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/components/interactions/CreateInteraction.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/interactions/CreateInteraction.js":
/*!*****************************************************************!*\
  !*** ./client/src/components/interactions/CreateInteraction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
// import Dialog from '@material-ui/core/Dialog'
// import DialogActions from '@material-ui/core/DialogActions'
// import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
// import DialogTitle from '@material-ui/core/DialogTitle'
// const CreateInteraction = (props) => {
//     console.log(props, "props from Create Interaction")
//     useEffect(() => {
//         let [open, setOpen] = useState(props.openDialog)
//     },[])
//     const handleSubmit = () => {
//         alert("Handling submit...")
//         props.setOpen(false)
//     }
//     return(
//         <>
//             <Dialog open={open} onClose={setOpen(false)} aria-labelledby="form-dialog-title">
//                 <DialogTitle id="form-dialog-title">Log an interaction</DialogTitle>
//                     <DialogContent>
//                         <DialogContentText>
//                             Fill out the form below to log a recent interaction you had with Employee
//                         </DialogContentText>
//                         <TextField
//                             autoFocus
//                             margin="dense"
//                             id="name"
//                             label="Notes/Detsils about interaction"
//                             type="text"
//                             fullWidth
//                         />
//                     </DialogContent>
//                     <DialogActions>
//                     <Button onClick={handleSubmit} color="primary">
//                         Save
//                     </Button>
//                     <Button onClick={(e) => setOpen(false)} color="primary">
//                         Cancel
//                     </Button>
//                     </DialogActions>
//             </Dialog>
//         </>
//     )
// }
// export default CreateInteraction

/***/ })

/******/ });
//# sourceMappingURL=CreateInteraction-978cc91a83b279228cf8.js.map