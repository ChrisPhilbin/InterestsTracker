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
    (__webpack_require__.s = "./client/src/App.test.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "../node_modules/@babel/runtime/regenerator/index.js":
      /*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! regenerator-runtime */ "../node_modules/regenerator-runtime/runtime.js"
        );

        /***/
      },

    /***/ "../node_modules/object-assign/index.js":
      /*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/

        /* eslint-disable no-unused-vars */

        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;

        function toObject(val) {
          if (val === null || val === undefined) {
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          }

          return Object(val);
        }

        function shouldUseNative() {
          try {
            if (!Object.assign) {
              return false;
            } // Detect buggy property enumeration order in older V8 versions.
            // https://bugs.chromium.org/p/v8/issues/detail?id=4118

            var test1 = new String("abc"); // eslint-disable-line no-new-wrappers

            test1[5] = "de";

            if (Object.getOwnPropertyNames(test1)[0] === "5") {
              return false;
            } // https://bugs.chromium.org/p/v8/issues/detail?id=3056

            var test2 = {};

            for (var i = 0; i < 10; i++) {
              test2["_" + String.fromCharCode(i)] = i;
            }

            var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
              return test2[n];
            });

            if (order2.join("") !== "0123456789") {
              return false;
            } // https://bugs.chromium.org/p/v8/issues/detail?id=3056

            var test3 = {};
            "abcdefghijklmnopqrst".split("").forEach(function (letter) {
              test3[letter] = letter;
            });

            if (
              Object.keys(Object.assign({}, test3)).join("") !==
              "abcdefghijklmnopqrst"
            ) {
              return false;
            }

            return true;
          } catch (err) {
            // We don't expect any of the above to throw, but better to be safe.
            return false;
          }
        }

        module.exports = shouldUseNative()
          ? Object.assign
          : function (target, source) {
              var from;
              var to = toObject(target);
              var symbols;

              for (var s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);

                for (var key in from) {
                  if (hasOwnProperty.call(from, key)) {
                    to[key] = from[key];
                  }
                }

                if (getOwnPropertySymbols) {
                  symbols = getOwnPropertySymbols(from);

                  for (var i = 0; i < symbols.length; i++) {
                    if (propIsEnumerable.call(from, symbols[i])) {
                      to[symbols[i]] = from[symbols[i]];
                    }
                  }
                }
              }

              return to;
            };

        /***/
      },

    /***/ "../node_modules/react/cjs/react.development.js":
      /*!******************************************************!*\
  !*** ../node_modules/react/cjs/react.development.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /** @license React v17.0.2
         * react.development.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        if (true) {
          (function () {
            "use strict";

            var _assign = __webpack_require__(
              /*! object-assign */ "../node_modules/object-assign/index.js"
            ); // TODO: this is special because it gets imported during build.

            var ReactVersion = "17.0.2"; // ATTENTION
            // When adding new symbols to this file,
            // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
            // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
            // nor polyfill, then a plain number is used for performance.

            var REACT_ELEMENT_TYPE = 0xeac7;
            var REACT_PORTAL_TYPE = 0xeaca;
            exports.Fragment = 0xeacb;
            exports.StrictMode = 0xeacc;
            exports.Profiler = 0xead2;
            var REACT_PROVIDER_TYPE = 0xeacd;
            var REACT_CONTEXT_TYPE = 0xeace;
            var REACT_FORWARD_REF_TYPE = 0xead0;
            exports.Suspense = 0xead1;
            var REACT_SUSPENSE_LIST_TYPE = 0xead8;
            var REACT_MEMO_TYPE = 0xead3;
            var REACT_LAZY_TYPE = 0xead4;
            var REACT_BLOCK_TYPE = 0xead9;
            var REACT_SERVER_BLOCK_TYPE = 0xeada;
            var REACT_FUNDAMENTAL_TYPE = 0xead5;
            var REACT_SCOPE_TYPE = 0xead7;
            var REACT_OPAQUE_ID_TYPE = 0xeae0;
            var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
            var REACT_OFFSCREEN_TYPE = 0xeae2;
            var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

            if (typeof Symbol === "function" && Symbol.for) {
              var symbolFor = Symbol.for;
              REACT_ELEMENT_TYPE = symbolFor("react.element");
              REACT_PORTAL_TYPE = symbolFor("react.portal");
              exports.Fragment = symbolFor("react.fragment");
              exports.StrictMode = symbolFor("react.strict_mode");
              exports.Profiler = symbolFor("react.profiler");
              REACT_PROVIDER_TYPE = symbolFor("react.provider");
              REACT_CONTEXT_TYPE = symbolFor("react.context");
              REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
              exports.Suspense = symbolFor("react.suspense");
              REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
              REACT_MEMO_TYPE = symbolFor("react.memo");
              REACT_LAZY_TYPE = symbolFor("react.lazy");
              REACT_BLOCK_TYPE = symbolFor("react.block");
              REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
              REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
              REACT_SCOPE_TYPE = symbolFor("react.scope");
              REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
              REACT_DEBUG_TRACING_MODE_TYPE = symbolFor(
                "react.debug_trace_mode"
              );
              REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
              REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
            }

            var MAYBE_ITERATOR_SYMBOL =
              typeof Symbol === "function" && Symbol.iterator;
            var FAUX_ITERATOR_SYMBOL = "@@iterator";

            function getIteratorFn(maybeIterable) {
              if (
                maybeIterable === null ||
                _typeof(maybeIterable) !== "object"
              ) {
                return null;
              }

              var maybeIterator =
                (MAYBE_ITERATOR_SYMBOL &&
                  maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
                maybeIterable[FAUX_ITERATOR_SYMBOL];

              if (typeof maybeIterator === "function") {
                return maybeIterator;
              }

              return null;
            }
            /**
             * Keeps track of the current dispatcher.
             */

            var ReactCurrentDispatcher = {
              /**
               * @internal
               * @type {ReactComponent}
               */
              current: null,
            };
            /**
             * Keeps track of the current batch's configuration such as how long an update
             * should suspend for if it needs to.
             */

            var ReactCurrentBatchConfig = {
              transition: 0,
            };
            /**
             * Keeps track of the current owner.
             *
             * The current owner is the component who should own any components that are
             * currently being constructed.
             */

            var ReactCurrentOwner = {
              /**
               * @internal
               * @type {ReactComponent}
               */
              current: null,
            };
            var ReactDebugCurrentFrame = {};
            var currentExtraStackFrame = null;

            function setExtraStackFrame(stack) {
              {
                currentExtraStackFrame = stack;
              }
            }

            {
              ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
                {
                  currentExtraStackFrame = stack;
                }
              }; // Stack implementation injected by the current renderer.

              ReactDebugCurrentFrame.getCurrentStack = null;

              ReactDebugCurrentFrame.getStackAddendum = function () {
                var stack = ""; // Add an extra top frame while an element is being validated

                if (currentExtraStackFrame) {
                  stack += currentExtraStackFrame;
                } // Delegate to the injected renderer-specific implementation

                var impl = ReactDebugCurrentFrame.getCurrentStack;

                if (impl) {
                  stack += impl() || "";
                }

                return stack;
              };
            }
            /**
             * Used by act() to track whether you're inside an act() scope.
             */

            var IsSomeRendererActing = {
              current: false,
            };
            var ReactSharedInternals = {
              ReactCurrentDispatcher: ReactCurrentDispatcher,
              ReactCurrentBatchConfig: ReactCurrentBatchConfig,
              ReactCurrentOwner: ReactCurrentOwner,
              IsSomeRendererActing: IsSomeRendererActing,
              // Used by renderers to avoid bundling object-assign twice in UMD bundles:
              assign: _assign,
            };
            {
              ReactSharedInternals.ReactDebugCurrentFrame =
                ReactDebugCurrentFrame;
            } // by calls to these methods by a Babel plugin.
            //
            // In PROD (or in packages without access to React internals),
            // they are left as they are instead.

            function warn(format) {
              {
                for (
                  var _len = arguments.length,
                    args = new Array(_len > 1 ? _len - 1 : 0),
                    _key = 1;
                  _key < _len;
                  _key++
                ) {
                  args[_key - 1] = arguments[_key];
                }

                printWarning("warn", format, args);
              }
            }

            function error(format) {
              {
                for (
                  var _len2 = arguments.length,
                    args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                    _key2 = 1;
                  _key2 < _len2;
                  _key2++
                ) {
                  args[_key2 - 1] = arguments[_key2];
                }

                printWarning("error", format, args);
              }
            }

            function printWarning(level, format, args) {
              // When changing this logic, you might want to also
              // update consoleWithStackDev.www.js as well.
              {
                var ReactDebugCurrentFrame =
                  ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();

                if (stack !== "") {
                  format += "%s";
                  args = args.concat([stack]);
                }

                var argsWithFormat = args.map(function (item) {
                  return "" + item;
                }); // Careful: RN currently depends on this prefix

                argsWithFormat.unshift("Warning: " + format); // We intentionally don't use spread (or .apply) directly because it
                // breaks IE9: https://github.com/facebook/react/issues/13610
                // eslint-disable-next-line react-internal/no-production-logging

                Function.prototype.apply.call(
                  console[level],
                  console,
                  argsWithFormat
                );
              }
            }

            var didWarnStateUpdateForUnmountedComponent = {};

            function warnNoop(publicInstance, callerName) {
              {
                var _constructor = publicInstance.constructor;
                var componentName =
                  (_constructor &&
                    (_constructor.displayName || _constructor.name)) ||
                  "ReactClass";
                var warningKey = componentName + "." + callerName;

                if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                  return;
                }

                error(
                  "Can't call %s on a component that is not yet mounted. " +
                    "This is a no-op, but it might indicate a bug in your application. " +
                    "Instead, assign to `this.state` directly or define a `state = {};` " +
                    "class property with the desired state in the %s component.",
                  callerName,
                  componentName
                );
                didWarnStateUpdateForUnmountedComponent[warningKey] = true;
              }
            }
            /**
             * This is the abstract API for an update queue.
             */

            var ReactNoopUpdateQueue = {
              /**
               * Checks whether or not this composite component is mounted.
               * @param {ReactClass} publicInstance The instance we want to test.
               * @return {boolean} True if mounted, false otherwise.
               * @protected
               * @final
               */
              isMounted: function isMounted(publicInstance) {
                return false;
              },

              /**
               * Forces an update. This should only be invoked when it is known with
               * certainty that we are **not** in a DOM transaction.
               *
               * You may want to call this when you know that some deeper aspect of the
               * component's state has changed but `setState` was not called.
               *
               * This will not invoke `shouldComponentUpdate`, but it will invoke
               * `componentWillUpdate` and `componentDidUpdate`.
               *
               * @param {ReactClass} publicInstance The instance that should rerender.
               * @param {?function} callback Called after component is updated.
               * @param {?string} callerName name of the calling function in the public API.
               * @internal
               */
              enqueueForceUpdate: function enqueueForceUpdate(
                publicInstance,
                callback,
                callerName
              ) {
                warnNoop(publicInstance, "forceUpdate");
              },

              /**
               * Replaces all of the state. Always use this or `setState` to mutate state.
               * You should treat `this.state` as immutable.
               *
               * There is no guarantee that `this.state` will be immediately updated, so
               * accessing `this.state` after calling this method may return the old value.
               *
               * @param {ReactClass} publicInstance The instance that should rerender.
               * @param {object} completeState Next state.
               * @param {?function} callback Called after component is updated.
               * @param {?string} callerName name of the calling function in the public API.
               * @internal
               */
              enqueueReplaceState: function enqueueReplaceState(
                publicInstance,
                completeState,
                callback,
                callerName
              ) {
                warnNoop(publicInstance, "replaceState");
              },

              /**
               * Sets a subset of the state. This only exists because _pendingState is
               * internal. This provides a merging strategy that is not available to deep
               * properties which is confusing. TODO: Expose pendingState or don't use it
               * during the merge.
               *
               * @param {ReactClass} publicInstance The instance that should rerender.
               * @param {object} partialState Next partial state to be merged with state.
               * @param {?function} callback Called after component is updated.
               * @param {?string} Name of the calling function in the public API.
               * @internal
               */
              enqueueSetState: function enqueueSetState(
                publicInstance,
                partialState,
                callback,
                callerName
              ) {
                warnNoop(publicInstance, "setState");
              },
            };
            var emptyObject = {};
            {
              Object.freeze(emptyObject);
            }
            /**
             * Base class helpers for the updating state of a component.
             */

            function Component(props, context, updater) {
              this.props = props;
              this.context = context; // If a component has string refs, we will assign a different object later.

              this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
              // renderer.

              this.updater = updater || ReactNoopUpdateQueue;
            }

            Component.prototype.isReactComponent = {};
            /**
             * Sets a subset of the state. Always use this to mutate
             * state. You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * There is no guarantee that calls to `setState` will run synchronously,
             * as they may eventually be batched together.  You can provide an optional
             * callback that will be executed when the call to setState is actually
             * completed.
             *
             * When a function is provided to setState, it will be called at some point in
             * the future (not synchronously). It will be called with the up to date
             * component arguments (state, props, context). These values can be different
             * from this.* because your function may be called after receiveProps but before
             * shouldComponentUpdate, and this new state, props, and context will not yet be
             * assigned to this.
             *
             * @param {object|function} partialState Next partial state or function to
             *        produce next partial state to be merged with current state.
             * @param {?function} callback Called after state is updated.
             * @final
             * @protected
             */

            Component.prototype.setState = function (partialState, callback) {
              if (
                !(
                  _typeof(partialState) === "object" ||
                  typeof partialState === "function" ||
                  partialState == null
                )
              ) {
                {
                  throw Error(
                    "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                  );
                }
              }

              this.updater.enqueueSetState(
                this,
                partialState,
                callback,
                "setState"
              );
            };
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {?function} callback Called after update is complete.
             * @final
             * @protected
             */

            Component.prototype.forceUpdate = function (callback) {
              this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
            };
            /**
             * Deprecated APIs. These APIs used to exist on classic React classes but since
             * we would like to deprecate them, we're not going to move them over to this
             * modern base class. Instead, we define a getter that warns if it's accessed.
             */

            {
              var deprecatedAPIs = {
                isMounted: [
                  "isMounted",
                  "Instead, make sure to clean up subscriptions and pending requests in " +
                    "componentWillUnmount to prevent memory leaks.",
                ],
                replaceState: [
                  "replaceState",
                  "Refactor your code to use setState instead (see " +
                    "https://github.com/facebook/react/issues/3236).",
                ],
              };

              var defineDeprecationWarning = function defineDeprecationWarning(
                methodName,
                info
              ) {
                Object.defineProperty(Component.prototype, methodName, {
                  get: function get() {
                    warn(
                      "%s(...) is deprecated in plain JavaScript React classes. %s",
                      info[0],
                      info[1]
                    );
                    return undefined;
                  },
                });
              };

              for (var fnName in deprecatedAPIs) {
                if (deprecatedAPIs.hasOwnProperty(fnName)) {
                  defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                }
              }
            }

            function ComponentDummy() {}

            ComponentDummy.prototype = Component.prototype;
            /**
             * Convenience component with default shallow equality check for sCU.
             */

            function PureComponent(props, context, updater) {
              this.props = props;
              this.context = context; // If a component has string refs, we will assign a different object later.

              this.refs = emptyObject;
              this.updater = updater || ReactNoopUpdateQueue;
            }

            var pureComponentPrototype = (PureComponent.prototype =
              new ComponentDummy());
            pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

            _assign(pureComponentPrototype, Component.prototype);

            pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

            function createRef() {
              var refObject = {
                current: null,
              };
              {
                Object.seal(refObject);
              }
              return refObject;
            }

            function getWrappedName(outerType, innerType, wrapperName) {
              var functionName = innerType.displayName || innerType.name || "";
              return (
                outerType.displayName ||
                (functionName !== ""
                  ? wrapperName + "(" + functionName + ")"
                  : wrapperName)
              );
            }

            function getContextName(type) {
              return type.displayName || "Context";
            }

            function getComponentName(type) {
              if (type == null) {
                // Host root, text node or just invalid type.
                return null;
              }

              {
                if (typeof type.tag === "number") {
                  error(
                    "Received an unexpected object in getComponentName(). " +
                      "This is likely a bug in React. Please file an issue."
                  );
                }
              }

              if (typeof type === "function") {
                return type.displayName || type.name || null;
              }

              if (typeof type === "string") {
                return type;
              }

              switch (type) {
                case exports.Fragment:
                  return "Fragment";

                case REACT_PORTAL_TYPE:
                  return "Portal";

                case exports.Profiler:
                  return "Profiler";

                case exports.StrictMode:
                  return "StrictMode";

                case exports.Suspense:
                  return "Suspense";

                case REACT_SUSPENSE_LIST_TYPE:
                  return "SuspenseList";
              }

              if (_typeof(type) === "object") {
                switch (type.$$typeof) {
                  case REACT_CONTEXT_TYPE:
                    var context = type;
                    return getContextName(context) + ".Consumer";

                  case REACT_PROVIDER_TYPE:
                    var provider = type;
                    return getContextName(provider._context) + ".Provider";

                  case REACT_FORWARD_REF_TYPE:
                    return getWrappedName(type, type.render, "ForwardRef");

                  case REACT_MEMO_TYPE:
                    return getComponentName(type.type);

                  case REACT_BLOCK_TYPE:
                    return getComponentName(type._render);

                  case REACT_LAZY_TYPE: {
                    var lazyComponent = type;
                    var payload = lazyComponent._payload;
                    var init = lazyComponent._init;

                    try {
                      return getComponentName(init(payload));
                    } catch (x) {
                      return null;
                    }
                  }
                }
              }

              return null;
            }

            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var RESERVED_PROPS = {
              key: true,
              ref: true,
              __self: true,
              __source: true,
            };
            var specialPropKeyWarningShown,
              specialPropRefWarningShown,
              didWarnAboutStringRefs;
            {
              didWarnAboutStringRefs = {};
            }

            function hasValidRef(config) {
              {
                if (hasOwnProperty.call(config, "ref")) {
                  var getter = Object.getOwnPropertyDescriptor(
                    config,
                    "ref"
                  ).get;

                  if (getter && getter.isReactWarning) {
                    return false;
                  }
                }
              }
              return config.ref !== undefined;
            }

            function hasValidKey(config) {
              {
                if (hasOwnProperty.call(config, "key")) {
                  var getter = Object.getOwnPropertyDescriptor(
                    config,
                    "key"
                  ).get;

                  if (getter && getter.isReactWarning) {
                    return false;
                  }
                }
              }
              return config.key !== undefined;
            }

            function defineKeyPropWarningGetter(props, displayName) {
              var warnAboutAccessingKey = function warnAboutAccessingKey() {
                {
                  if (!specialPropKeyWarningShown) {
                    specialPropKeyWarningShown = true;
                    error(
                      "%s: `key` is not a prop. Trying to access it will result " +
                        "in `undefined` being returned. If you need to access the same " +
                        "value within the child component, you should pass it as a different " +
                        "prop. (https://reactjs.org/link/special-props)",
                      displayName
                    );
                  }
                }
              };

              warnAboutAccessingKey.isReactWarning = true;
              Object.defineProperty(props, "key", {
                get: warnAboutAccessingKey,
                configurable: true,
              });
            }

            function defineRefPropWarningGetter(props, displayName) {
              var warnAboutAccessingRef = function warnAboutAccessingRef() {
                {
                  if (!specialPropRefWarningShown) {
                    specialPropRefWarningShown = true;
                    error(
                      "%s: `ref` is not a prop. Trying to access it will result " +
                        "in `undefined` being returned. If you need to access the same " +
                        "value within the child component, you should pass it as a different " +
                        "prop. (https://reactjs.org/link/special-props)",
                      displayName
                    );
                  }
                }
              };

              warnAboutAccessingRef.isReactWarning = true;
              Object.defineProperty(props, "ref", {
                get: warnAboutAccessingRef,
                configurable: true,
              });
            }

            function warnIfStringRefCannotBeAutoConverted(config) {
              {
                if (
                  typeof config.ref === "string" &&
                  ReactCurrentOwner.current &&
                  config.__self &&
                  ReactCurrentOwner.current.stateNode !== config.__self
                ) {
                  var componentName = getComponentName(
                    ReactCurrentOwner.current.type
                  );

                  if (!didWarnAboutStringRefs[componentName]) {
                    error(
                      'Component "%s" contains the string ref "%s". ' +
                        "Support for string refs will be removed in a future major release. " +
                        "This case cannot be automatically converted to an arrow function. " +
                        "We ask you to manually fix this case by using useRef() or createRef() instead. " +
                        "Learn more about using refs safely here: " +
                        "https://reactjs.org/link/strict-mode-string-ref",
                      componentName,
                      config.ref
                    );
                    didWarnAboutStringRefs[componentName] = true;
                  }
                }
              }
            }
            /**
             * Factory method to create a new React element. This no longer adheres to
             * the class pattern, so do not use new to call it. Also, instanceof check
             * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
             * if something is a React Element.
             *
             * @param {*} type
             * @param {*} props
             * @param {*} key
             * @param {string|object} ref
             * @param {*} owner
             * @param {*} self A *temporary* helper to detect places where `this` is
             * different from the `owner` when React.createElement is called, so that we
             * can warn. We want to get rid of owner and replace string `ref`s with arrow
             * functions, and as long as `this` and owner are the same, there will be no
             * change in behavior.
             * @param {*} source An annotation object (added by a transpiler or otherwise)
             * indicating filename, line number, and/or other information.
             * @internal
             */

            var ReactElement = function ReactElement(
              type,
              key,
              ref,
              self,
              source,
              owner,
              props
            ) {
              var element = {
                // This tag allows us to uniquely identify this as a React Element
                $$typeof: REACT_ELEMENT_TYPE,
                // Built-in properties that belong on the element
                type: type,
                key: key,
                ref: ref,
                props: props,
                // Record the component responsible for creating this element.
                _owner: owner,
              };
              {
                // The validation flag is currently mutative. We put it on
                // an external backing store so that we can freeze the whole object.
                // This can be replaced with a WeakMap once they are implemented in
                // commonly used development environments.
                element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
                // the validation flag non-enumerable (where possible, which should
                // include every environment we run tests in), so the test framework
                // ignores it.

                Object.defineProperty(element._store, "validated", {
                  configurable: false,
                  enumerable: false,
                  writable: true,
                  value: false,
                }); // self and source are DEV only properties.

                Object.defineProperty(element, "_self", {
                  configurable: false,
                  enumerable: false,
                  writable: false,
                  value: self,
                }); // Two elements created in two different places should be considered
                // equal for testing purposes and therefore we hide it from enumeration.

                Object.defineProperty(element, "_source", {
                  configurable: false,
                  enumerable: false,
                  writable: false,
                  value: source,
                });

                if (Object.freeze) {
                  Object.freeze(element.props);
                  Object.freeze(element);
                }
              }
              return element;
            };
            /**
             * Create and return a new ReactElement of the given type.
             * See https://reactjs.org/docs/react-api.html#createelement
             */

            function createElement(type, config, children) {
              var propName; // Reserved names are extracted

              var props = {};
              var key = null;
              var ref = null;
              var self = null;
              var source = null;

              if (config != null) {
                if (hasValidRef(config)) {
                  ref = config.ref;
                  {
                    warnIfStringRefCannotBeAutoConverted(config);
                  }
                }

                if (hasValidKey(config)) {
                  key = "" + config.key;
                }

                self = config.__self === undefined ? null : config.__self;
                source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

                for (propName in config) {
                  if (
                    hasOwnProperty.call(config, propName) &&
                    !RESERVED_PROPS.hasOwnProperty(propName)
                  ) {
                    props[propName] = config[propName];
                  }
                }
              } // Children can be more than one argument, and those are transferred onto
              // the newly allocated props object.

              var childrenLength = arguments.length - 2;

              if (childrenLength === 1) {
                props.children = children;
              } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);

                for (var i = 0; i < childrenLength; i++) {
                  childArray[i] = arguments[i + 2];
                }

                {
                  if (Object.freeze) {
                    Object.freeze(childArray);
                  }
                }
                props.children = childArray;
              } // Resolve default props

              if (type && type.defaultProps) {
                var defaultProps = type.defaultProps;

                for (propName in defaultProps) {
                  if (props[propName] === undefined) {
                    props[propName] = defaultProps[propName];
                  }
                }
              }

              {
                if (key || ref) {
                  var displayName =
                    typeof type === "function"
                      ? type.displayName || type.name || "Unknown"
                      : type;

                  if (key) {
                    defineKeyPropWarningGetter(props, displayName);
                  }

                  if (ref) {
                    defineRefPropWarningGetter(props, displayName);
                  }
                }
              }
              return ReactElement(
                type,
                key,
                ref,
                self,
                source,
                ReactCurrentOwner.current,
                props
              );
            }

            function cloneAndReplaceKey(oldElement, newKey) {
              var newElement = ReactElement(
                oldElement.type,
                newKey,
                oldElement.ref,
                oldElement._self,
                oldElement._source,
                oldElement._owner,
                oldElement.props
              );
              return newElement;
            }
            /**
             * Clone and return a new ReactElement using element as the starting point.
             * See https://reactjs.org/docs/react-api.html#cloneelement
             */

            function cloneElement(element, config, children) {
              if (!!(element === null || element === undefined)) {
                {
                  throw Error(
                    "React.cloneElement(...): The argument must be a React element, but you passed " +
                      element +
                      "."
                  );
                }
              }

              var propName; // Original props are copied

              var props = _assign({}, element.props); // Reserved names are extracted

              var key = element.key;
              var ref = element.ref; // Self is preserved since the owner is preserved.

              var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
              // transpiler, and the original source is probably a better indicator of the
              // true owner.

              var source = element._source; // Owner will be preserved, unless ref is overridden

              var owner = element._owner;

              if (config != null) {
                if (hasValidRef(config)) {
                  // Silently steal the ref from the parent.
                  ref = config.ref;
                  owner = ReactCurrentOwner.current;
                }

                if (hasValidKey(config)) {
                  key = "" + config.key;
                } // Remaining properties override existing props

                var defaultProps;

                if (element.type && element.type.defaultProps) {
                  defaultProps = element.type.defaultProps;
                }

                for (propName in config) {
                  if (
                    hasOwnProperty.call(config, propName) &&
                    !RESERVED_PROPS.hasOwnProperty(propName)
                  ) {
                    if (
                      config[propName] === undefined &&
                      defaultProps !== undefined
                    ) {
                      // Resolve default props
                      props[propName] = defaultProps[propName];
                    } else {
                      props[propName] = config[propName];
                    }
                  }
                }
              } // Children can be more than one argument, and those are transferred onto
              // the newly allocated props object.

              var childrenLength = arguments.length - 2;

              if (childrenLength === 1) {
                props.children = children;
              } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);

                for (var i = 0; i < childrenLength; i++) {
                  childArray[i] = arguments[i + 2];
                }

                props.children = childArray;
              }

              return ReactElement(
                element.type,
                key,
                ref,
                self,
                source,
                owner,
                props
              );
            }
            /**
             * Verifies the object is a ReactElement.
             * See https://reactjs.org/docs/react-api.html#isvalidelement
             * @param {?object} object
             * @return {boolean} True if `object` is a ReactElement.
             * @final
             */

            function isValidElement(object) {
              return (
                _typeof(object) === "object" &&
                object !== null &&
                object.$$typeof === REACT_ELEMENT_TYPE
              );
            }

            var SEPARATOR = ".";
            var SUBSEPARATOR = ":";
            /**
             * Escape and wrap key so it is safe to use as a reactid
             *
             * @param {string} key to be escaped.
             * @return {string} the escaped key.
             */

            function escape(key) {
              var escapeRegex = /[=:]/g;
              var escaperLookup = {
                "=": "=0",
                ":": "=2",
              };
              var escapedString = key.replace(escapeRegex, function (match) {
                return escaperLookup[match];
              });
              return "$" + escapedString;
            }
            /**
             * TODO: Test that a single child and an array with one item have the same key
             * pattern.
             */

            var didWarnAboutMaps = false;
            var userProvidedKeyEscapeRegex = /\/+/g;

            function escapeUserProvidedKey(text) {
              return text.replace(userProvidedKeyEscapeRegex, "$&/");
            }
            /**
             * Generate a key string that identifies a element within a set.
             *
             * @param {*} element A element that could contain a manual key.
             * @param {number} index Index that is used if a manual key is not provided.
             * @return {string}
             */

            function getElementKey(element, index) {
              // Do some typechecking here since we call this blindly. We want to ensure
              // that we don't block potential future ES APIs.
              if (
                _typeof(element) === "object" &&
                element !== null &&
                element.key != null
              ) {
                // Explicit key
                return escape("" + element.key);
              } // Implicit key determined by the index in the set

              return index.toString(36);
            }

            function mapIntoArray(
              children,
              array,
              escapedPrefix,
              nameSoFar,
              callback
            ) {
              var type = _typeof(children);

              if (type === "undefined" || type === "boolean") {
                // All of the above are perceived as null.
                children = null;
              }

              var invokeCallback = false;

              if (children === null) {
                invokeCallback = true;
              } else {
                switch (type) {
                  case "string":
                  case "number":
                    invokeCallback = true;
                    break;

                  case "object":
                    switch (children.$$typeof) {
                      case REACT_ELEMENT_TYPE:
                      case REACT_PORTAL_TYPE:
                        invokeCallback = true;
                    }
                }
              }

              if (invokeCallback) {
                var _child = children;
                var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
                // so that it's consistent if the number of children grows:

                var childKey =
                  nameSoFar === ""
                    ? SEPARATOR + getElementKey(_child, 0)
                    : nameSoFar;

                if (Array.isArray(mappedChild)) {
                  var escapedChildKey = "";

                  if (childKey != null) {
                    escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                  }

                  mapIntoArray(
                    mappedChild,
                    array,
                    escapedChildKey,
                    "",
                    function (c) {
                      return c;
                    }
                  );
                } else if (mappedChild != null) {
                  if (isValidElement(mappedChild)) {
                    mappedChild = cloneAndReplaceKey(
                      mappedChild, // Keep both the (mapped) and old keys if they differ, just as
                      // traverseAllChildren used to do for objects as children
                      escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                        (mappedChild.key &&
                        (!_child || _child.key !== mappedChild.key) // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                          ? escapeUserProvidedKey("" + mappedChild.key) + "/"
                          : "") +
                        childKey
                    );
                  }

                  array.push(mappedChild);
                }

                return 1;
              }

              var child;
              var nextName;
              var subtreeCount = 0; // Count of children found in the current subtree.

              var nextNamePrefix =
                nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;

              if (Array.isArray(children)) {
                for (var i = 0; i < children.length; i++) {
                  child = children[i];
                  nextName = nextNamePrefix + getElementKey(child, i);
                  subtreeCount += mapIntoArray(
                    child,
                    array,
                    escapedPrefix,
                    nextName,
                    callback
                  );
                }
              } else {
                var iteratorFn = getIteratorFn(children);

                if (typeof iteratorFn === "function") {
                  var iterableChildren = children;
                  {
                    // Warn about using Maps as children
                    if (iteratorFn === iterableChildren.entries) {
                      if (!didWarnAboutMaps) {
                        warn(
                          "Using Maps as children is not supported. " +
                            "Use an array of keyed ReactElements instead."
                        );
                      }

                      didWarnAboutMaps = true;
                    }
                  }
                  var iterator = iteratorFn.call(iterableChildren);
                  var step;
                  var ii = 0;

                  while (!(step = iterator.next()).done) {
                    child = step.value;
                    nextName = nextNamePrefix + getElementKey(child, ii++);
                    subtreeCount += mapIntoArray(
                      child,
                      array,
                      escapedPrefix,
                      nextName,
                      callback
                    );
                  }
                } else if (type === "object") {
                  var childrenString = "" + children;
                  {
                    {
                      throw Error(
                        "Objects are not valid as a React child (found: " +
                          (childrenString === "[object Object]"
                            ? "object with keys {" +
                              Object.keys(children).join(", ") +
                              "}"
                            : childrenString) +
                          "). If you meant to render a collection of children, use an array instead."
                      );
                    }
                  }
                }
              }

              return subtreeCount;
            }
            /**
             * Maps children that are typically specified as `props.children`.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrenmap
             *
             * The provided mapFunction(child, index) will be called for each
             * leaf child.
             *
             * @param {?*} children Children tree container.
             * @param {function(*, int)} func The map function.
             * @param {*} context Context for mapFunction.
             * @return {object} Object containing the ordered map of results.
             */

            function mapChildren(children, func, context) {
              if (children == null) {
                return children;
              }

              var result = [];
              var count = 0;
              mapIntoArray(children, result, "", "", function (child) {
                return func.call(context, child, count++);
              });
              return result;
            }
            /**
             * Count the number of children that are typically specified as
             * `props.children`.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrencount
             *
             * @param {?*} children Children tree container.
             * @return {number} The number of children.
             */

            function countChildren(children) {
              var n = 0;
              mapChildren(children, function () {
                n++; // Don't return anything
              });
              return n;
            }
            /**
             * Iterates through children that are typically specified as `props.children`.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
             *
             * The provided forEachFunc(child, index) will be called for each
             * leaf child.
             *
             * @param {?*} children Children tree container.
             * @param {function(*, int)} forEachFunc
             * @param {*} forEachContext Context for forEachContext.
             */

            function forEachChildren(children, forEachFunc, forEachContext) {
              mapChildren(
                children,
                function () {
                  forEachFunc.apply(this, arguments); // Don't return anything.
                },
                forEachContext
              );
            }
            /**
             * Flatten a children object (typically specified as `props.children`) and
             * return an array with appropriately re-keyed children.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
             */

            function toArray(children) {
              return (
                mapChildren(children, function (child) {
                  return child;
                }) || []
              );
            }
            /**
             * Returns the first child in a collection of children and verifies that there
             * is only one child in the collection.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrenonly
             *
             * The current implementation of this function assumes that a single child gets
             * passed without a wrapper, but the purpose of this helper function is to
             * abstract away the particular structure of children.
             *
             * @param {?object} children Child collection structure.
             * @return {ReactElement} The first and only `ReactElement` contained in the
             * structure.
             */

            function onlyChild(children) {
              if (!isValidElement(children)) {
                {
                  throw Error(
                    "React.Children.only expected to receive a single React element child."
                  );
                }
              }

              return children;
            }

            function createContext(defaultValue, calculateChangedBits) {
              if (calculateChangedBits === undefined) {
                calculateChangedBits = null;
              } else {
                {
                  if (
                    calculateChangedBits !== null &&
                    typeof calculateChangedBits !== "function"
                  ) {
                    error(
                      "createContext: Expected the optional second argument to be a " +
                        "function. Instead received: %s",
                      calculateChangedBits
                    );
                  }
                }
              }

              var context = {
                $$typeof: REACT_CONTEXT_TYPE,
                _calculateChangedBits: calculateChangedBits,
                // As a workaround to support multiple concurrent renderers, we categorize
                // some renderers as primary and others as secondary. We only expect
                // there to be two concurrent renderers at most: React Native (primary) and
                // Fabric (secondary); React DOM (primary) and React ART (secondary).
                // Secondary renderers store their context values on separate fields.
                _currentValue: defaultValue,
                _currentValue2: defaultValue,
                // Used to track how many concurrent renderers this context currently
                // supports within in a single renderer. Such as parallel server rendering.
                _threadCount: 0,
                // These are circular
                Provider: null,
                Consumer: null,
              };
              context.Provider = {
                $$typeof: REACT_PROVIDER_TYPE,
                _context: context,
              };
              var hasWarnedAboutUsingNestedContextConsumers = false;
              var hasWarnedAboutUsingConsumerProvider = false;
              var hasWarnedAboutDisplayNameOnConsumer = false;
              {
                // A separate object, but proxies back to the original context object for
                // backwards compatibility. It has a different $$typeof, so we can properly
                // warn for the incorrect usage of Context as a Consumer.
                var Consumer = {
                  $$typeof: REACT_CONTEXT_TYPE,
                  _context: context,
                  _calculateChangedBits: context._calculateChangedBits,
                }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

                Object.defineProperties(Consumer, {
                  Provider: {
                    get: function get() {
                      if (!hasWarnedAboutUsingConsumerProvider) {
                        hasWarnedAboutUsingConsumerProvider = true;
                        error(
                          "Rendering <Context.Consumer.Provider> is not supported and will be removed in " +
                            "a future major release. Did you mean to render <Context.Provider> instead?"
                        );
                      }

                      return context.Provider;
                    },
                    set: function set(_Provider) {
                      context.Provider = _Provider;
                    },
                  },
                  _currentValue: {
                    get: function get() {
                      return context._currentValue;
                    },
                    set: function set(_currentValue) {
                      context._currentValue = _currentValue;
                    },
                  },
                  _currentValue2: {
                    get: function get() {
                      return context._currentValue2;
                    },
                    set: function set(_currentValue2) {
                      context._currentValue2 = _currentValue2;
                    },
                  },
                  _threadCount: {
                    get: function get() {
                      return context._threadCount;
                    },
                    set: function set(_threadCount) {
                      context._threadCount = _threadCount;
                    },
                  },
                  Consumer: {
                    get: function get() {
                      if (!hasWarnedAboutUsingNestedContextConsumers) {
                        hasWarnedAboutUsingNestedContextConsumers = true;
                        error(
                          "Rendering <Context.Consumer.Consumer> is not supported and will be removed in " +
                            "a future major release. Did you mean to render <Context.Consumer> instead?"
                        );
                      }

                      return context.Consumer;
                    },
                  },
                  displayName: {
                    get: function get() {
                      return context.displayName;
                    },
                    set: function set(displayName) {
                      if (!hasWarnedAboutDisplayNameOnConsumer) {
                        warn(
                          "Setting `displayName` on Context.Consumer has no effect. " +
                            "You should set it directly on the context with Context.displayName = '%s'.",
                          displayName
                        );
                        hasWarnedAboutDisplayNameOnConsumer = true;
                      }
                    },
                  },
                }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

                context.Consumer = Consumer;
              }
              {
                context._currentRenderer = null;
                context._currentRenderer2 = null;
              }
              return context;
            }

            var Uninitialized = -1;
            var Pending = 0;
            var Resolved = 1;
            var Rejected = 2;

            function lazyInitializer(payload) {
              if (payload._status === Uninitialized) {
                var ctor = payload._result;
                var thenable = ctor(); // Transition to the next state.

                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
                thenable.then(
                  function (moduleObject) {
                    if (payload._status === Pending) {
                      var defaultExport = moduleObject.default;
                      {
                        if (defaultExport === undefined) {
                          error(
                            "lazy: Expected the result of a dynamic import() call. " +
                              "Instead received: %s\n\nYour code should look like: \n  " + // Break up imports to avoid accidentally parsing them as dependencies.
                              "const MyComponent = lazy(() => imp" +
                              "ort('./MyComponent'))",
                            moduleObject
                          );
                        }
                      } // Transition to the next state.

                      var resolved = payload;
                      resolved._status = Resolved;
                      resolved._result = defaultExport;
                    }
                  },
                  function (error) {
                    if (payload._status === Pending) {
                      // Transition to the next state.
                      var rejected = payload;
                      rejected._status = Rejected;
                      rejected._result = error;
                    }
                  }
                );
              }

              if (payload._status === Resolved) {
                return payload._result;
              } else {
                throw payload._result;
              }
            }

            function lazy(ctor) {
              var payload = {
                // We use these fields to store the result.
                _status: -1,
                _result: ctor,
              };
              var lazyType = {
                $$typeof: REACT_LAZY_TYPE,
                _payload: payload,
                _init: lazyInitializer,
              };
              {
                // In production, this would just set it on the object.
                var defaultProps;
                var propTypes; // $FlowFixMe

                Object.defineProperties(lazyType, {
                  defaultProps: {
                    configurable: true,
                    get: function get() {
                      return defaultProps;
                    },
                    set: function set(newDefaultProps) {
                      error(
                        "React.lazy(...): It is not supported to assign `defaultProps` to " +
                          "a lazy component import. Either specify them where the component " +
                          "is defined, or create a wrapping component around it."
                      );
                      defaultProps = newDefaultProps; // Match production behavior more closely:
                      // $FlowFixMe

                      Object.defineProperty(lazyType, "defaultProps", {
                        enumerable: true,
                      });
                    },
                  },
                  propTypes: {
                    configurable: true,
                    get: function get() {
                      return propTypes;
                    },
                    set: function set(newPropTypes) {
                      error(
                        "React.lazy(...): It is not supported to assign `propTypes` to " +
                          "a lazy component import. Either specify them where the component " +
                          "is defined, or create a wrapping component around it."
                      );
                      propTypes = newPropTypes; // Match production behavior more closely:
                      // $FlowFixMe

                      Object.defineProperty(lazyType, "propTypes", {
                        enumerable: true,
                      });
                    },
                  },
                });
              }
              return lazyType;
            }

            function forwardRef(render) {
              {
                if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                  error(
                    "forwardRef requires a render function but received a `memo` " +
                      "component. Instead of forwardRef(memo(...)), use " +
                      "memo(forwardRef(...))."
                  );
                } else if (typeof render !== "function") {
                  error(
                    "forwardRef requires a render function but was given %s.",
                    render === null ? "null" : _typeof(render)
                  );
                } else {
                  if (render.length !== 0 && render.length !== 2) {
                    error(
                      "forwardRef render functions accept exactly two parameters: props and ref. %s",
                      render.length === 1
                        ? "Did you forget to use the ref parameter?"
                        : "Any additional parameter will be undefined."
                    );
                  }
                }

                if (render != null) {
                  if (render.defaultProps != null || render.propTypes != null) {
                    error(
                      "forwardRef render functions do not support propTypes or defaultProps. " +
                        "Did you accidentally pass a React component?"
                    );
                  }
                }
              }
              var elementType = {
                $$typeof: REACT_FORWARD_REF_TYPE,
                render: render,
              };
              {
                var ownName;
                Object.defineProperty(elementType, "displayName", {
                  enumerable: false,
                  configurable: true,
                  get: function get() {
                    return ownName;
                  },
                  set: function set(name) {
                    ownName = name;

                    if (render.displayName == null) {
                      render.displayName = name;
                    }
                  },
                });
              }
              return elementType;
            } // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

            var enableScopeAPI = false; // Experimental Create Event Handle API.

            function isValidElementType(type) {
              if (typeof type === "string" || typeof type === "function") {
                return true;
              } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

              if (
                type === exports.Fragment ||
                type === exports.Profiler ||
                type === REACT_DEBUG_TRACING_MODE_TYPE ||
                type === exports.StrictMode ||
                type === exports.Suspense ||
                type === REACT_SUSPENSE_LIST_TYPE ||
                type === REACT_LEGACY_HIDDEN_TYPE ||
                enableScopeAPI
              ) {
                return true;
              }

              if (_typeof(type) === "object" && type !== null) {
                if (
                  type.$$typeof === REACT_LAZY_TYPE ||
                  type.$$typeof === REACT_MEMO_TYPE ||
                  type.$$typeof === REACT_PROVIDER_TYPE ||
                  type.$$typeof === REACT_CONTEXT_TYPE ||
                  type.$$typeof === REACT_FORWARD_REF_TYPE ||
                  type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                  type.$$typeof === REACT_BLOCK_TYPE ||
                  type[0] === REACT_SERVER_BLOCK_TYPE
                ) {
                  return true;
                }
              }

              return false;
            }

            function memo(type, compare) {
              {
                if (!isValidElementType(type)) {
                  error(
                    "memo: The first argument must be a component. Instead " +
                      "received: %s",
                    type === null ? "null" : _typeof(type)
                  );
                }
              }
              var elementType = {
                $$typeof: REACT_MEMO_TYPE,
                type: type,
                compare: compare === undefined ? null : compare,
              };
              {
                var ownName;
                Object.defineProperty(elementType, "displayName", {
                  enumerable: false,
                  configurable: true,
                  get: function get() {
                    return ownName;
                  },
                  set: function set(name) {
                    ownName = name;

                    if (type.displayName == null) {
                      type.displayName = name;
                    }
                  },
                });
              }
              return elementType;
            }

            function resolveDispatcher() {
              var dispatcher = ReactCurrentDispatcher.current;

              if (!(dispatcher !== null)) {
                {
                  throw Error(
                    "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."
                  );
                }
              }

              return dispatcher;
            }

            function useContext(Context, unstable_observedBits) {
              var dispatcher = resolveDispatcher();
              {
                if (unstable_observedBits !== undefined) {
                  error(
                    "useContext() second argument is reserved for future " +
                      "use in React. Passing it is not supported. " +
                      "You passed: %s.%s",
                    unstable_observedBits,
                    typeof unstable_observedBits === "number" &&
                      Array.isArray(arguments[2])
                      ? "\n\nDid you call array.map(useContext)? " +
                          "Calling Hooks inside a loop is not supported. " +
                          "Learn more at https://reactjs.org/link/rules-of-hooks"
                      : ""
                  );
                } // TODO: add a more generic warning for invalid values.

                if (Context._context !== undefined) {
                  var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
                  // and nobody should be using this in existing code.

                  if (realContext.Consumer === Context) {
                    error(
                      "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be " +
                        "removed in a future major release. Did you mean to call useContext(Context) instead?"
                    );
                  } else if (realContext.Provider === Context) {
                    error(
                      "Calling useContext(Context.Provider) is not supported. " +
                        "Did you mean to call useContext(Context) instead?"
                    );
                  }
                }
              }
              return dispatcher.useContext(Context, unstable_observedBits);
            }

            function useState(initialState) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useState(initialState);
            }

            function useReducer(reducer, initialArg, init) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useReducer(reducer, initialArg, init);
            }

            function useRef(initialValue) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useRef(initialValue);
            }

            function useEffect(create, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useEffect(create, deps);
            }

            function useLayoutEffect(create, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useLayoutEffect(create, deps);
            }

            function useCallback(callback, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useCallback(callback, deps);
            }

            function useMemo(create, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useMemo(create, deps);
            }

            function useImperativeHandle(ref, create, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useImperativeHandle(ref, create, deps);
            }

            function useDebugValue(value, formatterFn) {
              {
                var dispatcher = resolveDispatcher();
                return dispatcher.useDebugValue(value, formatterFn);
              }
            } // Helpers to patch console.logs to avoid logging during side-effect free
            // replaying on render function. This currently only patches the object
            // lazily which won't cover if the log function was extracted eagerly.
            // We could also eagerly patch the method.

            var disabledDepth = 0;
            var prevLog;
            var prevInfo;
            var prevWarn;
            var prevError;
            var prevGroup;
            var prevGroupCollapsed;
            var prevGroupEnd;

            function disabledLog() {}

            disabledLog.__reactDisabledLog = true;

            function disableLogs() {
              {
                if (disabledDepth === 0) {
                  /* eslint-disable react-internal/no-production-logging */
                  prevLog = console.log;
                  prevInfo = console.info;
                  prevWarn = console.warn;
                  prevError = console.error;
                  prevGroup = console.group;
                  prevGroupCollapsed = console.groupCollapsed;
                  prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

                  var props = {
                    configurable: true,
                    enumerable: true,
                    value: disabledLog,
                    writable: true,
                  }; // $FlowFixMe Flow thinks console is immutable.

                  Object.defineProperties(console, {
                    info: props,
                    log: props,
                    warn: props,
                    error: props,
                    group: props,
                    groupCollapsed: props,
                    groupEnd: props,
                  });
                  /* eslint-enable react-internal/no-production-logging */
                }

                disabledDepth++;
              }
            }

            function reenableLogs() {
              {
                disabledDepth--;

                if (disabledDepth === 0) {
                  /* eslint-disable react-internal/no-production-logging */
                  var props = {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                  }; // $FlowFixMe Flow thinks console is immutable.

                  Object.defineProperties(console, {
                    log: _assign({}, props, {
                      value: prevLog,
                    }),
                    info: _assign({}, props, {
                      value: prevInfo,
                    }),
                    warn: _assign({}, props, {
                      value: prevWarn,
                    }),
                    error: _assign({}, props, {
                      value: prevError,
                    }),
                    group: _assign({}, props, {
                      value: prevGroup,
                    }),
                    groupCollapsed: _assign({}, props, {
                      value: prevGroupCollapsed,
                    }),
                    groupEnd: _assign({}, props, {
                      value: prevGroupEnd,
                    }),
                  });
                  /* eslint-enable react-internal/no-production-logging */
                }

                if (disabledDepth < 0) {
                  error(
                    "disabledDepth fell below zero. " +
                      "This is a bug in React. Please file an issue."
                  );
                }
              }
            }

            var ReactCurrentDispatcher$1 =
              ReactSharedInternals.ReactCurrentDispatcher;
            var prefix;

            function describeBuiltInComponentFrame(name, source, ownerFn) {
              {
                if (prefix === undefined) {
                  // Extract the VM specific prefix used by each line.
                  try {
                    throw Error();
                  } catch (x) {
                    var match = x.stack.trim().match(/\n( *(at )?)/);
                    prefix = (match && match[1]) || "";
                  }
                } // We use the prefix to ensure our stacks line up with native stack frames.

                return "\n" + prefix + name;
              }
            }

            var reentry = false;
            var componentFrameCache;
            {
              var PossiblyWeakMap =
                typeof WeakMap === "function" ? WeakMap : Map;
              componentFrameCache = new PossiblyWeakMap();
            }

            function describeNativeComponentFrame(fn, construct) {
              // If something asked for a stack inside a fake render, it should get ignored.
              if (!fn || reentry) {
                return "";
              }

              {
                var frame = componentFrameCache.get(fn);

                if (frame !== undefined) {
                  return frame;
                }
              }
              var control;
              reentry = true;
              var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

              Error.prepareStackTrace = undefined;
              var previousDispatcher;
              {
                previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
                // for warnings.

                ReactCurrentDispatcher$1.current = null;
                disableLogs();
              }

              try {
                // This should throw.
                if (construct) {
                  // Something should be setting the props in the constructor.
                  var Fake = function Fake() {
                    throw Error();
                  }; // $FlowFixMe

                  Object.defineProperty(Fake.prototype, "props", {
                    set: function set() {
                      // We use a throwing setter instead of frozen or non-writable props
                      // because that won't throw in a non-strict mode function.
                      throw Error();
                    },
                  });

                  if (
                    (typeof Reflect === "undefined"
                      ? "undefined"
                      : _typeof(Reflect)) === "object" &&
                    Reflect.construct
                  ) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                      Reflect.construct(Fake, []);
                    } catch (x) {
                      control = x;
                    }

                    Reflect.construct(fn, [], Fake);
                  } else {
                    try {
                      Fake.call();
                    } catch (x) {
                      control = x;
                    }

                    fn.call(Fake.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (x) {
                    control = x;
                  }

                  fn();
                }
              } catch (sample) {
                // This is inlined manually because closure doesn't do it for us.
                if (sample && control && typeof sample.stack === "string") {
                  // This extracts the first frame from the sample that isn't also in the control.
                  // Skipping one frame that we assume is the frame that calls the two.
                  var sampleLines = sample.stack.split("\n");
                  var controlLines = control.stack.split("\n");
                  var s = sampleLines.length - 1;
                  var c = controlLines.length - 1;

                  while (
                    s >= 1 &&
                    c >= 0 &&
                    sampleLines[s] !== controlLines[c]
                  ) {
                    // We expect at least one stack frame to be shared.
                    // Typically this will be the root most one. However, stack frames may be
                    // cut off due to maximum stack limits. In this case, one maybe cut off
                    // earlier than the other. We assume that the sample is longer or the same
                    // and there for cut off earlier. So we should find the root most frame in
                    // the sample somewhere in the control.
                    c--;
                  }

                  for (; s >= 1 && c >= 0; s--, c--) {
                    // Next we find the first one that isn't the same which should be the
                    // frame that called our sample function and the control.
                    if (sampleLines[s] !== controlLines[c]) {
                      // In V8, the first line is describing the message but other VMs don't.
                      // If we're about to return the first line, and the control is also on the same
                      // line, that's a pretty good indicator that our sample threw at same line as
                      // the control. I.e. before we entered the sample frame. So we ignore this result.
                      // This can happen if you passed a class to function component, or non-function.
                      if (s !== 1 || c !== 1) {
                        do {
                          s--;
                          c--; // We may still have similar intermediate frames from the construct call.
                          // The next one that isn't the same should be our match though.

                          if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame =
                              "\n" + sampleLines[s].replace(" at new ", " at ");

                            {
                              if (typeof fn === "function") {
                                componentFrameCache.set(fn, _frame);
                              }
                            } // Return the line we found.

                            return _frame;
                          }
                        } while (s >= 1 && c >= 0);
                      }

                      break;
                    }
                  }
                }
              } finally {
                reentry = false;
                {
                  ReactCurrentDispatcher$1.current = previousDispatcher;
                  reenableLogs();
                }
                Error.prepareStackTrace = previousPrepareStackTrace;
              } // Fallback to just using the name if we couldn't make it throw.

              var name = fn ? fn.displayName || fn.name : "";
              var syntheticFrame = name
                ? describeBuiltInComponentFrame(name)
                : "";
              {
                if (typeof fn === "function") {
                  componentFrameCache.set(fn, syntheticFrame);
                }
              }
              return syntheticFrame;
            }

            function describeFunctionComponentFrame(fn, source, ownerFn) {
              {
                return describeNativeComponentFrame(fn, false);
              }
            }

            function shouldConstruct(Component) {
              var prototype = Component.prototype;
              return !!(prototype && prototype.isReactComponent);
            }

            function describeUnknownElementTypeFrameInDEV(
              type,
              source,
              ownerFn
            ) {
              if (type == null) {
                return "";
              }

              if (typeof type === "function") {
                {
                  return describeNativeComponentFrame(
                    type,
                    shouldConstruct(type)
                  );
                }
              }

              if (typeof type === "string") {
                return describeBuiltInComponentFrame(type);
              }

              switch (type) {
                case exports.Suspense:
                  return describeBuiltInComponentFrame("Suspense");

                case REACT_SUSPENSE_LIST_TYPE:
                  return describeBuiltInComponentFrame("SuspenseList");
              }

              if (_typeof(type) === "object") {
                switch (type.$$typeof) {
                  case REACT_FORWARD_REF_TYPE:
                    return describeFunctionComponentFrame(type.render);

                  case REACT_MEMO_TYPE:
                    // Memo may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(
                      type.type,
                      source,
                      ownerFn
                    );

                  case REACT_BLOCK_TYPE:
                    return describeFunctionComponentFrame(type._render);

                  case REACT_LAZY_TYPE: {
                    var lazyComponent = type;
                    var payload = lazyComponent._payload;
                    var init = lazyComponent._init;

                    try {
                      // Lazy may contain any component type so we recursively resolve it.
                      return describeUnknownElementTypeFrameInDEV(
                        init(payload),
                        source,
                        ownerFn
                      );
                    } catch (x) {}
                  }
                }
              }

              return "";
            }

            var loggedTypeFailures = {};
            var ReactDebugCurrentFrame$1 =
              ReactSharedInternals.ReactDebugCurrentFrame;

            function setCurrentlyValidatingElement(element) {
              {
                if (element) {
                  var owner = element._owner;
                  var stack = describeUnknownElementTypeFrameInDEV(
                    element.type,
                    element._source,
                    owner ? owner.type : null
                  );
                  ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                } else {
                  ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                }
              }
            }

            function checkPropTypes(
              typeSpecs,
              values,
              location,
              componentName,
              element
            ) {
              {
                // $FlowFixMe This is okay but Flow doesn't know it.
                var has = Function.call.bind(Object.prototype.hasOwnProperty);

                for (var typeSpecName in typeSpecs) {
                  if (has(typeSpecs, typeSpecName)) {
                    var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
                    // fail the render phase where it didn't fail before. So we log it.
                    // After these have been cleaned up, we'll let them throw.

                    try {
                      // This is intentionally an invariant that gets caught. It's the same
                      // behavior as without this statement except with a better message.
                      if (typeof typeSpecs[typeSpecName] !== "function") {
                        var err = Error(
                          (componentName || "React class") +
                            ": " +
                            location +
                            " type `" +
                            typeSpecName +
                            "` is invalid; " +
                            "it must be a function, usually from the `prop-types` package, but received `" +
                            _typeof(typeSpecs[typeSpecName]) +
                            "`." +
                            "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                        );
                        err.name = "Invariant Violation";
                        throw err;
                      }

                      error$1 = typeSpecs[typeSpecName](
                        values,
                        typeSpecName,
                        componentName,
                        location,
                        null,
                        "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                      );
                    } catch (ex) {
                      error$1 = ex;
                    }

                    if (error$1 && !(error$1 instanceof Error)) {
                      setCurrentlyValidatingElement(element);
                      error(
                        "%s: type specification of %s" +
                          " `%s` is invalid; the type checker " +
                          "function must return `null` or an `Error` but returned a %s. " +
                          "You may have forgotten to pass an argument to the type checker " +
                          "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
                          "shape all require an argument).",
                        componentName || "React class",
                        location,
                        typeSpecName,
                        _typeof(error$1)
                      );
                      setCurrentlyValidatingElement(null);
                    }

                    if (
                      error$1 instanceof Error &&
                      !(error$1.message in loggedTypeFailures)
                    ) {
                      // Only monitor this failure once because there tends to be a lot of the
                      // same error.
                      loggedTypeFailures[error$1.message] = true;
                      setCurrentlyValidatingElement(element);
                      error("Failed %s type: %s", location, error$1.message);
                      setCurrentlyValidatingElement(null);
                    }
                  }
                }
              }
            }

            function setCurrentlyValidatingElement$1(element) {
              {
                if (element) {
                  var owner = element._owner;
                  var stack = describeUnknownElementTypeFrameInDEV(
                    element.type,
                    element._source,
                    owner ? owner.type : null
                  );
                  setExtraStackFrame(stack);
                } else {
                  setExtraStackFrame(null);
                }
              }
            }

            var propTypesMisspellWarningShown;
            {
              propTypesMisspellWarningShown = false;
            }

            function getDeclarationErrorAddendum() {
              if (ReactCurrentOwner.current) {
                var name = getComponentName(ReactCurrentOwner.current.type);

                if (name) {
                  return "\n\nCheck the render method of `" + name + "`.";
                }
              }

              return "";
            }

            function getSourceInfoErrorAddendum(source) {
              if (source !== undefined) {
                var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                var lineNumber = source.lineNumber;
                return (
                  "\n\nCheck your code at " + fileName + ":" + lineNumber + "."
                );
              }

              return "";
            }

            function getSourceInfoErrorAddendumForProps(elementProps) {
              if (elementProps !== null && elementProps !== undefined) {
                return getSourceInfoErrorAddendum(elementProps.__source);
              }

              return "";
            }
            /**
             * Warn if there's no key explicitly set on dynamic arrays of children or
             * object keys are not valid. This allows us to keep track of children between
             * updates.
             */

            var ownerHasKeyUseWarning = {};

            function getCurrentComponentErrorInfo(parentType) {
              var info = getDeclarationErrorAddendum();

              if (!info) {
                var parentName =
                  typeof parentType === "string"
                    ? parentType
                    : parentType.displayName || parentType.name;

                if (parentName) {
                  info =
                    "\n\nCheck the top-level render call using <" +
                    parentName +
                    ">.";
                }
              }

              return info;
            }
            /**
             * Warn if the element doesn't have an explicit key assigned to it.
             * This element is in an array. The array could grow and shrink or be
             * reordered. All children that haven't already been validated are required to
             * have a "key" property assigned to it. Error statuses are cached so a warning
             * will only be shown once.
             *
             * @internal
             * @param {ReactElement} element Element that requires a key.
             * @param {*} parentType element's parent's type.
             */

            function validateExplicitKey(element, parentType) {
              if (
                !element._store ||
                element._store.validated ||
                element.key != null
              ) {
                return;
              }

              element._store.validated = true;
              var currentComponentErrorInfo =
                getCurrentComponentErrorInfo(parentType);

              if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
              }

              ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
              // property, it may be the creator of the child that's responsible for
              // assigning it a key.

              var childOwner = "";

              if (
                element &&
                element._owner &&
                element._owner !== ReactCurrentOwner.current
              ) {
                // Give the component that originally created this child.
                childOwner =
                  " It was passed a child from " +
                  getComponentName(element._owner.type) +
                  ".";
              }

              {
                setCurrentlyValidatingElement$1(element);
                error(
                  'Each child in a list should have a unique "key" prop.' +
                    "%s%s See https://reactjs.org/link/warning-keys for more information.",
                  currentComponentErrorInfo,
                  childOwner
                );
                setCurrentlyValidatingElement$1(null);
              }
            }
            /**
             * Ensure that every element either is passed in a static location, in an
             * array with an explicit keys property defined, or in an object literal
             * with valid key property.
             *
             * @internal
             * @param {ReactNode} node Statically passed child of any type.
             * @param {*} parentType node's parent's type.
             */

            function validateChildKeys(node, parentType) {
              if (_typeof(node) !== "object") {
                return;
              }

              if (Array.isArray(node)) {
                for (var i = 0; i < node.length; i++) {
                  var child = node[i];

                  if (isValidElement(child)) {
                    validateExplicitKey(child, parentType);
                  }
                }
              } else if (isValidElement(node)) {
                // This element was passed in a valid location.
                if (node._store) {
                  node._store.validated = true;
                }
              } else if (node) {
                var iteratorFn = getIteratorFn(node);

                if (typeof iteratorFn === "function") {
                  // Entry iterators used to provide implicit keys,
                  // but now we print a separate warning for them later.
                  if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;

                    while (!(step = iterator.next()).done) {
                      if (isValidElement(step.value)) {
                        validateExplicitKey(step.value, parentType);
                      }
                    }
                  }
                }
              }
            }
            /**
             * Given an element, validate that its props follow the propTypes definition,
             * provided by the type.
             *
             * @param {ReactElement} element
             */

            function validatePropTypes(element) {
              {
                var type = element.type;

                if (
                  type === null ||
                  type === undefined ||
                  typeof type === "string"
                ) {
                  return;
                }

                var propTypes;

                if (typeof type === "function") {
                  propTypes = type.propTypes;
                } else if (
                  _typeof(type) === "object" &&
                  (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                    // Inner props are checked in the reconciler.
                    type.$$typeof === REACT_MEMO_TYPE)
                ) {
                  propTypes = type.propTypes;
                } else {
                  return;
                }

                if (propTypes) {
                  // Intentionally inside to avoid triggering lazy initializers:
                  var name = getComponentName(type);
                  checkPropTypes(
                    propTypes,
                    element.props,
                    "prop",
                    name,
                    element
                  );
                } else if (
                  type.PropTypes !== undefined &&
                  !propTypesMisspellWarningShown
                ) {
                  propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

                  var _name = getComponentName(type);

                  error(
                    "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
                    _name || "Unknown"
                  );
                }

                if (
                  typeof type.getDefaultProps === "function" &&
                  !type.getDefaultProps.isReactClassApproved
                ) {
                  error(
                    "getDefaultProps is only used on classic React.createClass " +
                      "definitions. Use a static property named `defaultProps` instead."
                  );
                }
              }
            }
            /**
             * Given a fragment, validate that it can only be provided with fragment props
             * @param {ReactElement} fragment
             */

            function validateFragmentProps(fragment) {
              {
                var keys = Object.keys(fragment.props);

                for (var i = 0; i < keys.length; i++) {
                  var key = keys[i];

                  if (key !== "children" && key !== "key") {
                    setCurrentlyValidatingElement$1(fragment);
                    error(
                      "Invalid prop `%s` supplied to `React.Fragment`. " +
                        "React.Fragment can only have `key` and `children` props.",
                      key
                    );
                    setCurrentlyValidatingElement$1(null);
                    break;
                  }
                }

                if (fragment.ref !== null) {
                  setCurrentlyValidatingElement$1(fragment);
                  error(
                    "Invalid attribute `ref` supplied to `React.Fragment`."
                  );
                  setCurrentlyValidatingElement$1(null);
                }
              }
            }

            function createElementWithValidation(type, props, children) {
              var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
              // succeed and there will likely be errors in render.

              if (!validType) {
                var info = "";

                if (
                  type === undefined ||
                  (_typeof(type) === "object" &&
                    type !== null &&
                    Object.keys(type).length === 0)
                ) {
                  info +=
                    " You likely forgot to export your component from the file " +
                    "it's defined in, or you might have mixed up default and named imports.";
                }

                var sourceInfo = getSourceInfoErrorAddendumForProps(props);

                if (sourceInfo) {
                  info += sourceInfo;
                } else {
                  info += getDeclarationErrorAddendum();
                }

                var typeString;

                if (type === null) {
                  typeString = "null";
                } else if (Array.isArray(type)) {
                  typeString = "array";
                } else if (
                  type !== undefined &&
                  type.$$typeof === REACT_ELEMENT_TYPE
                ) {
                  typeString =
                    "<" + (getComponentName(type.type) || "Unknown") + " />";
                  info =
                    " Did you accidentally export a JSX literal instead of a component?";
                } else {
                  typeString = _typeof(type);
                }

                {
                  error(
                    "React.createElement: type is invalid -- expected a string (for " +
                      "built-in components) or a class/function (for composite " +
                      "components) but got: %s.%s",
                    typeString,
                    info
                  );
                }
              }

              var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
              // TODO: Drop this when these are no longer allowed as the type argument.

              if (element == null) {
                return element;
              } // Skip key warning if the type isn't valid since our key validation logic
              // doesn't expect a non-string/function type and can throw confusing errors.
              // We don't want exception behavior to differ between dev and prod.
              // (Rendering will throw with a helpful message and as soon as the type is
              // fixed, the key warnings will appear.)

              if (validType) {
                for (var i = 2; i < arguments.length; i++) {
                  validateChildKeys(arguments[i], type);
                }
              }

              if (type === exports.Fragment) {
                validateFragmentProps(element);
              } else {
                validatePropTypes(element);
              }

              return element;
            }

            var didWarnAboutDeprecatedCreateFactory = false;

            function createFactoryWithValidation(type) {
              var validatedFactory = createElementWithValidation.bind(
                null,
                type
              );
              validatedFactory.type = type;
              {
                if (!didWarnAboutDeprecatedCreateFactory) {
                  didWarnAboutDeprecatedCreateFactory = true;
                  warn(
                    "React.createFactory() is deprecated and will be removed in " +
                      "a future major release. Consider using JSX " +
                      "or use React.createElement() directly instead."
                  );
                } // Legacy hook: remove it

                Object.defineProperty(validatedFactory, "type", {
                  enumerable: false,
                  get: function get() {
                    warn(
                      "Factory.type is deprecated. Access the class directly " +
                        "before passing it to createFactory."
                    );
                    Object.defineProperty(this, "type", {
                      value: type,
                    });
                    return type;
                  },
                });
              }
              return validatedFactory;
            }

            function cloneElementWithValidation(element, props, children) {
              var newElement = cloneElement.apply(this, arguments);

              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], newElement.type);
              }

              validatePropTypes(newElement);
              return newElement;
            }

            {
              try {
                var frozenObject = Object.freeze({});
                /* eslint-disable no-new */

                new Map([[frozenObject, null]]);
                new Set([frozenObject]);
                /* eslint-enable no-new */
              } catch (e) {}
            }
            var createElement$1 = createElementWithValidation;
            var cloneElement$1 = cloneElementWithValidation;
            var createFactory = createFactoryWithValidation;
            var Children = {
              map: mapChildren,
              forEach: forEachChildren,
              count: countChildren,
              toArray: toArray,
              only: onlyChild,
            };
            exports.Children = Children;
            exports.Component = Component;
            exports.PureComponent = PureComponent;
            exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
              ReactSharedInternals;
            exports.cloneElement = cloneElement$1;
            exports.createContext = createContext;
            exports.createElement = createElement$1;
            exports.createFactory = createFactory;
            exports.createRef = createRef;
            exports.forwardRef = forwardRef;
            exports.isValidElement = isValidElement;
            exports.lazy = lazy;
            exports.memo = memo;
            exports.useCallback = useCallback;
            exports.useContext = useContext;
            exports.useDebugValue = useDebugValue;
            exports.useEffect = useEffect;
            exports.useImperativeHandle = useImperativeHandle;
            exports.useLayoutEffect = useLayoutEffect;
            exports.useMemo = useMemo;
            exports.useReducer = useReducer;
            exports.useRef = useRef;
            exports.useState = useState;
            exports.version = ReactVersion;
          })();
        }

        /***/
      },

    /***/ "../node_modules/react/index.js":
      /*!**************************************!*\
  !*** ../node_modules/react/index.js ***!
  \**************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        if (false) {
        } else {
          module.exports = __webpack_require__(
            /*! ./cjs/react.development.js */ "../node_modules/react/cjs/react.development.js"
          );
        }

        /***/
      },

    /***/ "../node_modules/regenerator-runtime/runtime.js":
      /*!******************************************************!*\
  !*** ../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var runtime = (function (exports) {
          "use strict";

          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined; // More compressible than void 0.
          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

          function define(obj, key, value) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
            return obj[key];
          }
          try {
            // IE 8 has a broken Object.defineProperty that only works on DOM objects.
            define({}, "");
          } catch (err) {
            define = function (obj, key, value) {
              return (obj[key] = value);
            };
          }

          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);

            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
            generator._invoke = makeInvokeMethod(innerFn, self, context);

            return generator;
          }
          exports.wrap = wrap;

          // Try/catch helper to minimize deoptimizations. Returns a completion
          // record like context.tryEntries[i].completion. This interface could
          // have been (and was previously) designed to take a closure to be
          // invoked without arguments, but in all the cases we care about we
          // already have an existing method we want to call, so there's no need
          // to create a new function object. We can even get away with assuming
          // the method takes exactly one argument, since that happens to be true
          // in every case, so we don't have to touch the arguments object. The
          // only additional allocation required is the completion record, which
          // has a stable shape and so hopefully should be cheap to allocate.
          function tryCatch(fn, obj, arg) {
            try {
              return { type: "normal", arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: "throw", arg: err };
            }
          }

          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed";

          // Returning this object from the innerFn has the same effect as
          // breaking out of the dispatch switch statement.
          var ContinueSentinel = {};

          // Dummy constructor functions that we use as the .constructor and
          // .constructor.prototype properties for functions that return Generator
          // objects. For full spec compliance, you may wish to configure your
          // minifier not to mangle the names of these two functions.
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}

          // This is a polyfill for %IteratorPrototype% for environments that
          // don't natively support it.
          var IteratorPrototype = {};
          IteratorPrototype[iteratorSymbol] = function () {
            return this;
          };

          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype =
            getProto && getProto(getProto(values([])));
          if (
            NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
          ) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          }

          var Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          GeneratorFunction.prototype = Gp.constructor =
            GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            toStringTagSymbol,
            "GeneratorFunction"
          );

          // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }

          exports.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor
              ? ctor === GeneratorFunction ||
                  // For the native GeneratorFunction constructor, the best we can
                  // do is to check its .name property.
                  (ctor.displayName || ctor.name) === "GeneratorFunction"
              : false;
          };

          exports.mark = function (genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              define(genFun, toStringTagSymbol, "GeneratorFunction");
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
          };

          // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.
          exports.awrap = function (arg) {
            return { __await: arg };
          };

          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;
                if (
                  value &&
                  typeof value === "object" &&
                  hasOwn.call(value, "__await")
                ) {
                  return PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke("next", value, resolve, reject);
                    },
                    function (err) {
                      invoke("throw", err, resolve, reject);
                    }
                  );
                }

                return PromiseImpl.resolve(value).then(
                  function (unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                  },
                  function (error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                  }
                );
              }
            }

            var previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return (previousPromise =
                // If enqueue has been called before, then we want to wait until
                // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      // Avoid propagating failures to Promises returned by later
                      // invocations of the iterator.
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
            }

            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
            this._invoke = enqueue;
          }

          defineIteratorMethods(AsyncIterator.prototype);
          AsyncIterator.prototype[asyncIteratorSymbol] = function () {
            return this;
          };
          exports.AsyncIterator = AsyncIterator;

          // Note that simple async functions are implemented on top of
          // AsyncIterator objects; they just return a Promise for the value of
          // the final result produced by the iterator.
          exports.async = function (
            innerFn,
            outerFn,
            self,
            tryLocsList,
            PromiseImpl
          ) {
            if (PromiseImpl === void 0) PromiseImpl = Promise;

            var iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList),
              PromiseImpl
            );

            return exports.isGeneratorFunction(outerFn)
              ? iter // If outerFn is a generator, return the full iterator.
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next();
                });
          };

          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;

            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }

              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                }

                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
              }

              context.method = method;
              context.arg = arg;

              while (true) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }

                if (context.method === "next") {
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = context.arg;
                } else if (context.method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }

                  context.dispatchException(context.arg);
                } else if (context.method === "return") {
                  context.abrupt("return", context.arg);
                }

                state = GenStateExecuting;

                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                  // If an exception is thrown from innerFn, we leave state ===
                  // GenStateExecuting and loop back for another invocation.
                  state = context.done
                    ? GenStateCompleted
                    : GenStateSuspendedYield;

                  if (record.arg === ContinueSentinel) {
                    continue;
                  }

                  return {
                    value: record.arg,
                    done: context.done,
                  };
                } else if (record.type === "throw") {
                  state = GenStateCompleted;
                  // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.
                  context.method = "throw";
                  context.arg = record.arg;
                }
              }
            };
          }

          // Call delegate.iterator[context.method](context.arg) and handle the
          // result, either by returning a { value, done } result from the
          // delegate iterator, or by modifying context.method and context.arg,
          // setting context.delegate to null, and returning the ContinueSentinel.
          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined) {
              // A .throw or .return when the delegate iterator has no .throw
              // method always terminates the yield* loop.
              context.delegate = null;

              if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  context.method = "return";
                  context.arg = undefined;
                  maybeInvokeDelegate(delegate, context);

                  if (context.method === "throw") {
                    // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                  }
                }

                context.method = "throw";
                context.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                );
              }

              return ContinueSentinel;
            }

            var record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === "throw") {
              context.method = "throw";
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }

            var info = record.arg;

            if (!info) {
              context.method = "throw";
              context.arg = new TypeError("iterator result is not an object");
              context.delegate = null;
              return ContinueSentinel;
            }

            if (info.done) {
              // Assign the result of the finished delegate to the temporary
              // variable specified by delegate.resultName (see delegateYield).
              context[delegate.resultName] = info.value;

              // Resume execution at the desired location (see delegateYield).
              context.next = delegate.nextLoc;

              // If context.method was "throw" but the delegate handled the
              // exception, let the outer generator proceed normally. If
              // context.method was "next", forget context.arg since it has been
              // "consumed" by the delegate iterator. If context.method was
              // "return", allow the original .return call to continue in the
              // outer generator.
              if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
              }
            } else {
              // Re-yield the result returned by the delegate method.
              return info;
            }

            // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
            context.delegate = null;
            return ContinueSentinel;
          }

          // Define Generator.prototype.{next,throw,return} in terms of the
          // unified ._invoke helper method.
          defineIteratorMethods(Gp);

          define(Gp, toStringTagSymbol, "Generator");

          // A Generator should always return itself as the iterator object when the
          // @@iterator function is called on it. Some browsers' implementations of the
          // iterator prototype chain incorrectly implement this, causing the Generator
          // object to not be returned from this call. This ensures that doesn't happen.
          // See https://github.com/facebook/regenerator/issues/274 for more details.
          Gp[iteratorSymbol] = function () {
            return this;
          };

          Gp.toString = function () {
            return "[object Generator]";
          };

          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };

            if (1 in locs) {
              entry.catchLoc = locs[1];
            }

            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
          }

          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [{ tryLoc: "root" }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          exports.keys = function (object) {
            var keys = [];
            for (var key in object) {
              keys.push(key);
            }
            keys.reverse();

            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
            return function next() {
              while (keys.length) {
                var key = keys.pop();
                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              }

              // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.
              next.done = true;
              return next;
            };
          };

          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }

              if (typeof iterable.next === "function") {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    while (++i < iterable.length) {
                      if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                      }
                    }

                    next.value = undefined;
                    next.done = true;

                    return next;
                  };

                return (next.next = next);
              }
            }

            // Return an iterator with no values.
            return { next: doneResult };
          }
          exports.values = values;

          function doneResult() {
            return { value: undefined, done: true };
          }

          Context.prototype = {
            constructor: Context,

            reset: function (skipTempReset) {
              this.prev = 0;
              this.next = 0;
              // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.
              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;

              this.method = "next";
              this.arg = undefined;

              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (var name in this) {
                  // Not sure about the optimal order of these conditions:
                  if (
                    name.charAt(0) === "t" &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1))
                  ) {
                    this[name] = undefined;
                  }
                }
              }
            },

            stop: function () {
              this.done = true;

              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }

              return this.rval;
            },

            dispatchException: function (exception) {
              if (this.done) {
                throw exception;
              }

              var context = this;
              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;

                if (caught) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  context.method = "next";
                  context.arg = undefined;
                }

                return !!caught;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === "root") {
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle("end");
                }

                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");

                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },

            abrupt: function (type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (
                  entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, "finallyLoc") &&
                  this.prev < entry.finallyLoc
                ) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (
                finallyEntry &&
                (type === "break" || type === "continue") &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc
              ) {
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              }

              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }

              return this.complete(record);
            },

            complete: function (record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }

              if (record.type === "break" || record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }

              return ContinueSentinel;
            },

            finish: function (finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },

            catch: function (tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }

              // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.
              throw new Error("illegal catch attempt");
            },

            delegateYield: function (iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc,
              };

              if (this.method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined;
              }

              return ContinueSentinel;
            },
          };

          // Regardless of whether this script is executing as a CommonJS module
          // or not, return the runtime object so that we can declare the variable
          // regeneratorRuntime in the outer scope, which allows this module to be
          // injected easily by `bin/regenerator --include-runtime script.js`.
          return exports;
        })(
          // If this script is executing as a CommonJS module, use module.exports
          // as the regeneratorRuntime namespace. Otherwise create a new empty
          // object. Either way, the resulting object will be used to initialize
          // the regeneratorRuntime variable at the top of this file.
          true ? module.exports : undefined
        );

        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          // This module should not be running in strict mode, so the above
          // assignment should always work unless something is misconfigured. Just
          // in case runtime.js accidentally runs in strict mode, we can escape
          // strict mode using a global Function call. This could conceivably fail
          // if a Content Security Policy forbids using Function, but in that case
          // the proper solution is to fix the accidental strict mode problem. If
          // you've misconfigured your bundler to force strict mode and applied a
          // CSP to forbid Function, and you're not willing to fix either of those
          // problems, please detail your unique predicament in a GitHub issue.
          Function("r", "regeneratorRuntime = r")(runtime);
        }

        /***/
      },

    /***/ "./client/src/App.js":
      /*!***************************!*\
  !*** ./client/src/App.js ***!
  \***************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _reducers_Index__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./reducers/Index */ "./client/src/reducers/Index.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'redux-thunk'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'redux-devtools-extension'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _routes_Index__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./routes/Index */ "./client/src/routes/Index.js"
          );
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/App.js",
          _this = undefined;

        var store = !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })()(
          _reducers_Index__WEBPACK_IMPORTED_MODULE_1__["default"],
          !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'redux-devtools-extension'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(
            !(function webpackMissingModule() {
              var e = new Error("Cannot find module 'redux'");
              e.code = "MODULE_NOT_FOUND";
              throw e;
            })()(
              !(function webpackMissingModule() {
                var e = new Error("Cannot find module 'redux-thunk'");
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })()
            )
          )
        );

        var App = function App() {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              !(function webpackMissingModule() {
                var e = new Error("Cannot find module 'react-redux'");
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })(),
              {
                store: store,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _routes_Index__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 9,
                  },
                }
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = App;

        /***/
      },

    /***/ "./client/src/App.test.js":
      /*!********************************!*\
  !*** ./client/src/App.test.js ***!
  \********************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@testing-library/react'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./App */ "./client/src/App.js");
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/App.test.js",
          _this = undefined;

        test("renders learn react link", function () {
          !(function webpackMissingModule() {
            var e = new Error("Cannot find module '@testing-library/react'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(
            /*#__PURE__*/ React.createElement(
              _App__WEBPACK_IMPORTED_MODULE_1__["default"],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 5,
                  columnNumber: 10,
                },
              }
            )
          );
          var linkElement = !(function webpackMissingModule() {
            var e = new Error("Cannot find module '@testing-library/react'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })().getByText(/learn react/i);
          expect(linkElement).toBeInTheDocument();
        });

        /***/
      },

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

    /***/ "./client/src/actions/EmployeeActions.js":
      /*!***********************************************!*\
  !*** ./client/src/actions/EmployeeActions.js ***!
  \***********************************************/
      /*! exports provided: GET_EMPLOYEES, GET_EMPLOYEES_SUCCESS, GET_EMPLOYEES_FAILURE, GET_ONE_EMPLOYEE, GET_ONE_EMPLOYEE_SUCCESS, GET_ONE_EMPLOYEE_FAILURE, EMPLOYEE_CREATED_SUCCESS, EMPLOYEE_CREATED_FAILURE, EMPLOYEE_DELETED_SUCCESS, EMPLOYEE_DELETED_FAILURE, UPDATE_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_FAILURE, getEmployees, getEmployeesSuccess, getEmployeesFailure, fetchAllEmployees, getOneEmployee, getOneEmployeeSuccess, getOneEmployeeFailure, fetchOneEmployee, employeeCreatedSuccess, employeeCreatedFailure, fetchPostNewEmployee, employeeDeletedSuccess, employeeDeletedFailure, deleteOneEmployee, updateEmployeeSuccess, updateEmployeeFailure, updateEmployee, updateEmployeeLastInteraction */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_EMPLOYEES",
          function () {
            return GET_EMPLOYEES;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_EMPLOYEES_SUCCESS",
          function () {
            return GET_EMPLOYEES_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_EMPLOYEES_FAILURE",
          function () {
            return GET_EMPLOYEES_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_ONE_EMPLOYEE",
          function () {
            return GET_ONE_EMPLOYEE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_ONE_EMPLOYEE_SUCCESS",
          function () {
            return GET_ONE_EMPLOYEE_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_ONE_EMPLOYEE_FAILURE",
          function () {
            return GET_ONE_EMPLOYEE_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EMPLOYEE_CREATED_SUCCESS",
          function () {
            return EMPLOYEE_CREATED_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EMPLOYEE_CREATED_FAILURE",
          function () {
            return EMPLOYEE_CREATED_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EMPLOYEE_DELETED_SUCCESS",
          function () {
            return EMPLOYEE_DELETED_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EMPLOYEE_DELETED_FAILURE",
          function () {
            return EMPLOYEE_DELETED_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "UPDATE_EMPLOYEE_SUCCESS",
          function () {
            return UPDATE_EMPLOYEE_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "UPDATE_EMPLOYEE_FAILURE",
          function () {
            return UPDATE_EMPLOYEE_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getEmployees",
          function () {
            return getEmployees;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getEmployeesSuccess",
          function () {
            return getEmployeesSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getEmployeesFailure",
          function () {
            return getEmployeesFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchAllEmployees",
          function () {
            return fetchAllEmployees;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getOneEmployee",
          function () {
            return getOneEmployee;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getOneEmployeeSuccess",
          function () {
            return getOneEmployeeSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getOneEmployeeFailure",
          function () {
            return getOneEmployeeFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchOneEmployee",
          function () {
            return fetchOneEmployee;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "employeeCreatedSuccess",
          function () {
            return employeeCreatedSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "employeeCreatedFailure",
          function () {
            return employeeCreatedFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchPostNewEmployee",
          function () {
            return fetchPostNewEmployee;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "employeeDeletedSuccess",
          function () {
            return employeeDeletedSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "employeeDeletedFailure",
          function () {
            return employeeDeletedFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteOneEmployee",
          function () {
            return deleteOneEmployee;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateEmployeeSuccess",
          function () {
            return updateEmployeeSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateEmployeeFailure",
          function () {
            return updateEmployeeFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateEmployee",
          function () {
            return updateEmployee;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateEmployeeLastInteraction",
          function () {
            return updateEmployeeLastInteraction;
          }
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"
          );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
          );

        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        var GET_EMPLOYEES = "GET_EMPLOYEES";
        var GET_EMPLOYEES_SUCCESS = "GET_EMPLOYEES_SUCCESS";
        var GET_EMPLOYEES_FAILURE = "GET_EMPLOYEES_FAILURE";
        var GET_ONE_EMPLOYEE = "GET_ONE_EMPLOYEE";
        var GET_ONE_EMPLOYEE_SUCCESS = "GET_ONE_EMPLOYEE_SUCCESS";
        var GET_ONE_EMPLOYEE_FAILURE = "GET_ONE_EMPLOYEE_FAILURE";
        var EMPLOYEE_CREATED_SUCCESS = "EMPLOYEE_CREATED_SUCCESS";
        var EMPLOYEE_CREATED_FAILURE = "EMPLOYEE_CREATED_FAILURE";
        var EMPLOYEE_DELETED_SUCCESS = "EMPLOYEE_DELETED_SUCCESS";
        var EMPLOYEE_DELETED_FAILURE = "EMPLOYEE_DELETED_FAILURE";
        var UPDATE_EMPLOYEE_SUCCESS = "UPDATE_EMPLOYEE_SUCCESS";
        var UPDATE_EMPLOYEE_FAILURE = "UPDATE_EMPLOYEE_FAILURE";
        var getEmployees = function getEmployees() {
          return {
            type: GET_EMPLOYEES,
          };
        };
        var getEmployeesSuccess = function getEmployeesSuccess(employees) {
          return {
            type: GET_EMPLOYEES_SUCCESS,
            payload: employees,
          };
        };
        var getEmployeesFailure = function getEmployeesFailure(error) {
          return {
            type: GET_EMPLOYEES_FAILURE,
            payload: error,
          };
        };
        var fetchAllEmployees = function fetchAllEmployees() {
          return /*#__PURE__*/ (function () {
            var _ref = _asyncToGenerator(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee(dispatch) {
                  var response, employees;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return fetch("http://localhost:3000/v1/employees");

                          case 3:
                            response = _context.sent;
                            _context.next = 6;
                            return response.json();

                          case 6:
                            employees = _context.sent;
                            dispatch(getEmployeesSuccess(employees));
                            _context.next = 13;
                            break;

                          case 10:
                            _context.prev = 10;
                            _context.t0 = _context["catch"](0);
                            dispatch(getEmployeesFailure(_context.t0));

                          case 13:
                          case "end":
                            return _context.stop();
                        }
                      }
                    },
                    _callee,
                    null,
                    [[0, 10]]
                  );
                }
              )
            );

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          })();
        };
        var getOneEmployee = function getOneEmployee() {
          return {
            type: GET_ONE_EMPLOYEE,
          };
        };
        var getOneEmployeeSuccess = function getOneEmployeeSuccess(employee) {
          return {
            type: GET_ONE_EMPLOYEE_SUCCESS,
            payload: employee,
          };
        };
        var getOneEmployeeFailure = function getOneEmployeeFailure(error) {
          return {
            type: GET_ONE_EMPLOYEE_FAILURE,
            payload: error,
          };
        };
        var fetchOneEmployee = function fetchOneEmployee(employee_id) {
          return /*#__PURE__*/ (function () {
            var _ref2 = _asyncToGenerator(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee2(dispatch) {
                  var success, employee;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee2$(_context2) {
                      while (1) {
                        switch ((_context2.prev = _context2.next)) {
                          case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return fetch(
                              "http://localhost:3000/v1/employees/".concat(
                                employee_id
                              )
                            );

                          case 3:
                            success = _context2.sent;
                            _context2.next = 6;
                            return success.json();

                          case 6:
                            employee = _context2.sent;
                            dispatch(getOneEmployeeSuccess(employee));
                            _context2.next = 13;
                            break;

                          case 10:
                            _context2.prev = 10;
                            _context2.t0 = _context2["catch"](0);
                            dispatch(getOneEmployeeFailure(_context2.t0));

                          case 13:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    },
                    _callee2,
                    null,
                    [[0, 10]]
                  );
                }
              )
            );

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          })();
        };
        var employeeCreatedSuccess = function employeeCreatedSuccess(employee) {
          return {
            type: EMPLOYEE_CREATED_SUCCESS,
            payload: employee,
          };
        };
        var employeeCreatedFailure = function employeeCreatedFailure(error) {
          return {
            type: EMPLOYEE_CREATED_FAILURE,
            payload: error,
          };
        };
        var fetchPostNewEmployee = function fetchPostNewEmployee(new_employee) {
          return /*#__PURE__*/ (function () {
            var _ref3 = _asyncToGenerator(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee3(dispatch) {
                  var success, employee;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee3$(_context3) {
                      while (1) {
                        switch ((_context3.prev = _context3.next)) {
                          case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return fetch("http://localhost:3000/v1/employees", {
                              method: "POST",
                              body: JSON.stringify(new_employee),
                              headers: {
                                "Content-Type": "application/json",
                              },
                            });

                          case 3:
                            success = _context3.sent;
                            _context3.next = 6;
                            return success.json();

                          case 6:
                            employee = _context3.sent;
                            dispatch(employeeCreatedSuccess(employee));
                            _context3.next = 13;
                            break;

                          case 10:
                            _context3.prev = 10;
                            _context3.t0 = _context3["catch"](0);
                            dispatch(employeeCreatedFailure(_context3.t0));

                          case 13:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    },
                    _callee3,
                    null,
                    [[0, 10]]
                  );
                }
              )
            );

            return function (_x3) {
              return _ref3.apply(this, arguments);
            };
          })();
        };
        var employeeDeletedSuccess = function employeeDeletedSuccess(employee) {
          return {
            type: EMPLOYEE_DELETED_SUCCESS,
            payload: employee,
          };
        };
        var employeeDeletedFailure = function employeeDeletedFailure(error) {
          return {
            type: EMPLOYEE_DELETED_FAILURE,
            payload: error,
          };
        };
        var deleteOneEmployee = function deleteOneEmployee(employee_id) {
          return /*#__PURE__*/ (function () {
            var _ref4 = _asyncToGenerator(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee4(dispatch) {
                  var success, employee;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee4$(_context4) {
                      while (1) {
                        switch ((_context4.prev = _context4.next)) {
                          case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return fetch(
                              "http://localhost:3000/v1/employees/".concat(
                                employee_id
                              ),
                              {
                                method: "DELETE",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                              }
                            );

                          case 3:
                            success = _context4.sent;
                            _context4.next = 6;
                            return success.json();

                          case 6:
                            employee = _context4.sent;
                            dispatch(employeeDeletedSuccess(employee));
                            _context4.next = 13;
                            break;

                          case 10:
                            _context4.prev = 10;
                            _context4.t0 = _context4["catch"](0);
                            dispatch(employeeDeletedFailure(_context4.t0));

                          case 13:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    },
                    _callee4,
                    null,
                    [[0, 10]]
                  );
                }
              )
            );

            return function (_x4) {
              return _ref4.apply(this, arguments);
            };
          })();
        };
        var updateEmployeeSuccess = function updateEmployeeSuccess(employee) {
          return {
            type: UPDATE_EMPLOYEE_SUCCESS,
            payload: employee,
          };
        };
        var updateEmployeeFailure = function updateEmployeeFailure(error) {
          return {
            type: UPDATE_EMPLOYEE_FAILURE,
            payload: error,
          };
        };
        var updateEmployee = function updateEmployee(employee) {
          return /*#__PURE__*/ (function () {
            var _ref5 = _asyncToGenerator(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee5(dispatch) {
                  var success, _employee;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee5$(_context5) {
                      while (1) {
                        switch ((_context5.prev = _context5.next)) {
                          case 0:
                            _context5.prev = 0;
                            _context5.next = 3;
                            return fetch(
                              "http://localhost:3000/v1/employees/".concat(
                                _employee.id
                              ),
                              {
                                method: "PATCH",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify(_employee),
                              }
                            );

                          case 3:
                            success = _context5.sent;
                            _context5.next = 6;
                            return success.json();

                          case 6:
                            _employee = _context5.sent;
                            dispatch(updateEmployeeSuccess(_employee));
                            _context5.next = 13;
                            break;

                          case 10:
                            _context5.prev = 10;
                            _context5.t0 = _context5["catch"](0);
                            dispatch(updateEmployeeFailure(_context5.t0));

                          case 13:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    },
                    _callee5,
                    null,
                    [[0, 10]]
                  );
                }
              )
            );

            return function (_x5) {
              return _ref5.apply(this, arguments);
            };
          })();
        };
        var updateEmployeeLastInteraction =
          function updateEmployeeLastInteraction(employee_id) {
            return /*#__PURE__*/ (function () {
              var _ref6 = _asyncToGenerator(
                /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                  function _callee6(dispatch) {
                    var success, employee;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                      function _callee6$(_context6) {
                        while (1) {
                          switch ((_context6.prev = _context6.next)) {
                            case 0:
                              _context6.prev = 0;
                              _context6.next = 3;
                              return fetch(
                                "http://localhost:3000/v1/employees/".concat(
                                  employee_id
                                ),
                                {
                                  method: "PATCH",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    last_interaction: new Date(),
                                  }),
                                }
                              );

                            case 3:
                              success = _context6.sent;
                              _context6.next = 6;
                              return success.json();

                            case 6:
                              employee = _context6.sent;
                              dispatch(updateEmployeeSuccess(employee));
                              _context6.next = 13;
                              break;

                            case 10:
                              _context6.prev = 10;
                              _context6.t0 = _context6["catch"](0);
                              dispatch(updateEmployeeFailure(_context6.t0));

                            case 13:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      },
                      _callee6,
                      null,
                      [[0, 10]]
                    );
                  }
                )
              );

              return function (_x6) {
                return _ref6.apply(this, arguments);
              };
            })();
          };

        /***/
      },

    /***/ "./client/src/actions/InteractionActions.js":
      /*!**************************************************!*\
  !*** ./client/src/actions/InteractionActions.js ***!
  \**************************************************/
      /*! exports provided: GET_INTERACTIONS, GET_INTERACTIONS_SUCCESS, GET_INTERACTIONS_FAILURE, INTERACTION_CREATED_SUCCESS, INTERACTION_CREATED_FAILURE, INTERACTION_DELETED_SUCCESS, INTERACTION_DELETED_FAILURE, getInteractions, getInteractionsSucess, getInteractionsFailure, fetchEmployeeInteractions, interactionCreatedSuccess, interactionCreatedFailure, fetchPostNewInteraction, deleteInteractionSuccess, deleteInteractionFailure, fetchDeleteInteraction */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_INTERACTIONS",
          function () {
            return GET_INTERACTIONS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_INTERACTIONS_SUCCESS",
          function () {
            return GET_INTERACTIONS_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_INTERACTIONS_FAILURE",
          function () {
            return GET_INTERACTIONS_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "INTERACTION_CREATED_SUCCESS",
          function () {
            return INTERACTION_CREATED_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "INTERACTION_CREATED_FAILURE",
          function () {
            return INTERACTION_CREATED_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "INTERACTION_DELETED_SUCCESS",
          function () {
            return INTERACTION_DELETED_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "INTERACTION_DELETED_FAILURE",
          function () {
            return INTERACTION_DELETED_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getInteractions",
          function () {
            return getInteractions;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getInteractionsSucess",
          function () {
            return getInteractionsSucess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getInteractionsFailure",
          function () {
            return getInteractionsFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchEmployeeInteractions",
          function () {
            return fetchEmployeeInteractions;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "interactionCreatedSuccess",
          function () {
            return interactionCreatedSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "interactionCreatedFailure",
          function () {
            return interactionCreatedFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchPostNewInteraction",
          function () {
            return fetchPostNewInteraction;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteInteractionSuccess",
          function () {
            return deleteInteractionSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteInteractionFailure",
          function () {
            return deleteInteractionFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchDeleteInteraction",
          function () {
            return fetchDeleteInteraction;
          }
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"
          );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
          );

        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        var GET_INTERACTIONS = "GET_INTERACTIONS";
        var GET_INTERACTIONS_SUCCESS = "GET_INTERACTIONS_SUCCESS";
        var GET_INTERACTIONS_FAILURE = "GET_INTERACTIONS_FAILURE";
        var INTERACTION_CREATED_SUCCESS = "INTERACTION_CREATED_SUCCESS";
        var INTERACTION_CREATED_FAILURE = "INTERACTION_CREATED_FAILURE";
        var INTERACTION_DELETED_SUCCESS = "INTERACTION_DELETED_SUCCESS";
        var INTERACTION_DELETED_FAILURE = "INTERACTION_DELETED_FAILURE";
        var getInteractions = function getInteractions() {
          return {
            type: GET_INTERACTIONS,
          };
        };
        var getInteractionsSucess = function getInteractionsSucess(
          interactions
        ) {
          return {
            type: GET_INTERACTIONS_SUCCESS,
            payload: interactions,
          };
        };
        var getInteractionsFailure = function getInteractionsFailure(error) {
          return {
            type: GET_INTERACTIONS_FAILURE,
            payload: error,
          };
        };
        var fetchEmployeeInteractions = function fetchEmployeeInteractions(
          employee_id
        ) {
          return /*#__PURE__*/ (function () {
            var _ref = _asyncToGenerator(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee(dispatch) {
                  var response, interactions;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return fetch(
                              "http://localhost:3001/employees/".concat(
                                employee_id,
                                "/interactions"
                              )
                            );

                          case 3:
                            response = _context.sent;
                            _context.next = 6;
                            return response.json();

                          case 6:
                            interactions = _context.sent;
                            dispatch(getInteractionsSucess(interactions));
                            _context.next = 13;
                            break;

                          case 10:
                            _context.prev = 10;
                            _context.t0 = _context["catch"](0);
                            dispatch(getInteractionsFailure(_context.t0));

                          case 13:
                          case "end":
                            return _context.stop();
                        }
                      }
                    },
                    _callee,
                    null,
                    [[0, 10]]
                  );
                }
              )
            );

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          })();
        };
        var interactionCreatedSuccess = function interactionCreatedSuccess(
          interaction
        ) {
          return {
            type: INTERACTION_CREATED_SUCCESS,
            payload: interaction,
          };
        };
        var interactionCreatedFailure = function interactionCreatedFailure(
          error
        ) {
          return {
            type: INTERACTION_CREATED_FAILURE,
            payload: error,
          };
        };
        var fetchPostNewInteraction = function fetchPostNewInteraction(
          interaction
        ) {
          return /*#__PURE__*/ (function () {
            var _ref2 = _asyncToGenerator(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee2(dispatch) {
                  var response, newInteraction;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee2$(_context2) {
                      while (1) {
                        switch ((_context2.prev = _context2.next)) {
                          case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return fetch(
                              "http://localhost:3001/employees/".concat(
                                interaction.employee_id,
                                "/interactions"
                              ),
                              {
                                method: "POST",
                                body: JSON.stringify(interaction),
                                headers: {
                                  "Content-Type": "application/json",
                                },
                              }
                            );

                          case 3:
                            response = _context2.sent;
                            _context2.next = 6;
                            return response.json();

                          case 6:
                            newInteraction = _context2.sent;
                            dispatch(interactionCreatedSuccess(newInteraction));
                            _context2.next = 13;
                            break;

                          case 10:
                            _context2.prev = 10;
                            _context2.t0 = _context2["catch"](0);
                            dispatch(interactionCreatedFailure(_context2.t0));

                          case 13:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    },
                    _callee2,
                    null,
                    [[0, 10]]
                  );
                }
              )
            );

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          })();
        };
        var deleteInteractionSuccess = function deleteInteractionSuccess(
          interaction
        ) {
          return {
            type: INTERACTION_DELETED_SUCCESS,
            payload: interaction,
          };
        };
        var deleteInteractionFailure = function deleteInteractionFailure(
          error
        ) {
          return {
            type: INTERACTION_DELETED_FAILURE,
            payload: error,
          };
        };
        var fetchDeleteInteraction = function fetchDeleteInteraction(
          employee_id,
          interaction_id
        ) {
          return /*#__PURE__*/ (function () {
            var _ref3 = _asyncToGenerator(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee3(dispatch) {
                  var response, data;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee3$(_context3) {
                      while (1) {
                        switch ((_context3.prev = _context3.next)) {
                          case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return fetch(
                              "http://localhost:3001/employees/"
                                .concat(employee_id, "/interactions/")
                                .concat(interaction_id),
                              {
                                method: "DELETE",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                              }
                            );

                          case 3:
                            response = _context3.sent;
                            _context3.next = 6;
                            return response.json();

                          case 6:
                            data = _context3.sent;
                            dispatch(deleteInteractionSuccess(data));
                            _context3.next = 13;
                            break;

                          case 10:
                            _context3.prev = 10;
                            _context3.t0 = _context3["catch"](0);
                            dispatch(deleteInteractionFailure(_context3.t0));

                          case 13:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    },
                    _callee3,
                    null,
                    [[0, 10]]
                  );
                }
              )
            );

            return function (_x3) {
              return _ref3.apply(this, arguments);
            };
          })();
        };

        /***/
      },

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

    /***/ "./client/src/actions/NewsfeedActions.js":
      /*!***********************************************!*\
  !*** ./client/src/actions/NewsfeedActions.js ***!
  \***********************************************/
      /*! exports provided: GET_NEWSFEED, GET_NEWSFEED_SUCCESS, GET_NEWSFEED_FAILURE, getNewsfeed, getNewsfeedSuccess, getNewsfeedFailure, fetchEmployeeNewsfeed */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_NEWSFEED",
          function () {
            return GET_NEWSFEED;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_NEWSFEED_SUCCESS",
          function () {
            return GET_NEWSFEED_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_NEWSFEED_FAILURE",
          function () {
            return GET_NEWSFEED_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getNewsfeed",
          function () {
            return getNewsfeed;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getNewsfeedSuccess",
          function () {
            return getNewsfeedSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getNewsfeedFailure",
          function () {
            return getNewsfeedFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchEmployeeNewsfeed",
          function () {
            return fetchEmployeeNewsfeed;
          }
        );
        var GET_NEWSFEED = "GET_NEWSFEED";
        var GET_NEWSFEED_SUCCESS = "GET_NEWSFEED_SUCCESS";
        var GET_NEWSFEED_FAILURE = "GET_NEWSFEED_FAILURE";
        var getNewsfeed = function getNewsfeed() {
          return {
            type: GET_NEWSFEED,
          };
        };
        var getNewsfeedSuccess = function getNewsfeedSuccess(news) {
          return {
            type: GET_NEWSFEED_SUCCESS,
            payload: news,
          };
        };
        var getNewsfeedFailure = function getNewsfeedFailure(error) {
          return {
            type: GET_NEWSFEED_FAILURE,
            payload: error,
          };
        };
        var fetchEmployeeNewsfeed = function fetchEmployeeNewsfeed(
          employee_id
        ) {
          return function (dispatch) {
            fetch(
              "http://localhost:3001/employees/".concat(
                employee_id,
                "/newsfeed"
              )
            )
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                dispatch(getNewsfeedSuccess(data));
              })
              ["catch"](function (error) {
                dispatch(getNewsfeedFailure(error));
              });
          };
        };

        /***/
      },

    /***/ "./client/src/actions/NoteActions.js":
      /*!*******************************************!*\
  !*** ./client/src/actions/NoteActions.js ***!
  \*******************************************/
      /*! exports provided: GET_NOTES, GET_NOTES_SUCCESS, GET_NOTES_FAILURE, NOTE_CREATED_SUCCESS, NOTE_CREATED_FAILURE, NOTE_DELETED_SUCCESS, NOTE_DELETED_FAILURE, getNotes, GetNotesSuccess, getNotesFailure, fetchEmployeeNotes, noteCreatedSuccess, notecreatedFailure, fetchPostNewNote, noteDeletedSuccess, noteDeletedFailure, fetchDeleteNote */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_NOTES",
          function () {
            return GET_NOTES;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_NOTES_SUCCESS",
          function () {
            return GET_NOTES_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_NOTES_FAILURE",
          function () {
            return GET_NOTES_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "NOTE_CREATED_SUCCESS",
          function () {
            return NOTE_CREATED_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "NOTE_CREATED_FAILURE",
          function () {
            return NOTE_CREATED_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "NOTE_DELETED_SUCCESS",
          function () {
            return NOTE_DELETED_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "NOTE_DELETED_FAILURE",
          function () {
            return NOTE_DELETED_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getNotes",
          function () {
            return getNotes;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GetNotesSuccess",
          function () {
            return GetNotesSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getNotesFailure",
          function () {
            return getNotesFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchEmployeeNotes",
          function () {
            return fetchEmployeeNotes;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "noteCreatedSuccess",
          function () {
            return noteCreatedSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "notecreatedFailure",
          function () {
            return notecreatedFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchPostNewNote",
          function () {
            return fetchPostNewNote;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "noteDeletedSuccess",
          function () {
            return noteDeletedSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "noteDeletedFailure",
          function () {
            return noteDeletedFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchDeleteNote",
          function () {
            return fetchDeleteNote;
          }
        );
        var GET_NOTES = "GET_NOTES";
        var GET_NOTES_SUCCESS = "GET_NOTES_SUCCESS";
        var GET_NOTES_FAILURE = "GET_NOTES_FAILURE";
        var NOTE_CREATED_SUCCESS = "NOTE_CREATED_SUCCESS";
        var NOTE_CREATED_FAILURE = "NOTE_CREATED_FAILURE";
        var NOTE_DELETED_SUCCESS = "NOTE_DELETED_SUCCESS";
        var NOTE_DELETED_FAILURE = "NOTE_DELETED_FAILURE";
        var getNotes = function getNotes() {
          return {
            type: GET_NOTES,
          };
        };
        var GetNotesSuccess = function GetNotesSuccess(notes) {
          return {
            type: GET_NOTES_SUCCESS,
            payload: notes,
          };
        };
        var getNotesFailure = function getNotesFailure(error) {
          return {
            type: GET_NOTES_FAILURE,
            payload: error,
          };
        };
        var fetchEmployeeNotes = function fetchEmployeeNotes(employee_id) {
          return function (dispatch) {
            dispatch(getNotes);
            fetch(
              "http://localhost:3001/employees/".concat(employee_id, "/notes")
            )
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                dispatch(GetNotesSuccess(data));
              })
              ["catch"](function (error) {
                dispatch(getNotesFailure(error));
              });
          };
        };
        var noteCreatedSuccess = function noteCreatedSuccess(note) {
          return {
            type: NOTE_CREATED_SUCCESS,
            payload: note,
          };
        };
        var notecreatedFailure = function notecreatedFailure(error) {
          return {
            type: NOTE_CREATED_FAILURE,
            payload: error,
          };
        };
        var fetchPostNewNote = function fetchPostNewNote(note) {
          return function (dispatch) {
            fetch(
              "http://localhost:3001/employees/".concat(
                note.employee_id,
                "/notes"
              ),
              {
                method: "POST",
                body: JSON.stringify(note),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                dispatch(noteCreatedSuccess(data));
              })
              ["catch"](function (error) {
                dispatch(notecreatedFailure(error));
              });
          };
        };
        var noteDeletedSuccess = function noteDeletedSuccess(note) {
          return {
            type: NOTE_DELETED_SUCCESS,
            payload: note,
          };
        };
        var noteDeletedFailure = function noteDeletedFailure(error) {
          return {
            type: NOTE_DELETED_FAILURE,
            payload: error,
          };
        };
        var fetchDeleteNote = function fetchDeleteNote(employee_id, note_id) {
          return function (dispatch) {
            fetch(
              "http://localhost:3001/employees/"
                .concat(employee_id, "/notes/")
                .concat(note_id),
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
                dispatch(noteDeletedSuccess(data));
              })
              ["catch"](function (error) {
                dispatch(noteDeletedFailure(error));
              });
          };
        };

        /***/
      },

    /***/ "./client/src/actions/PetActions.js":
      /*!******************************************!*\
  !*** ./client/src/actions/PetActions.js ***!
  \******************************************/
      /*! exports provided: GET_PETS, GET_PETS_SUCCESS, GET_PETS_FAILURE, PET_CREATED_SUCCESS, PET_CREATED_FAILURE, PET_DELETED_SUCCESS, PET_DELETED_FAILURE, getPets, getPetsSuccess, getPetsFailure, fetchEmployeePets, petCreatedSuccess, petCreatedFailure, fetchPostNewPet, petDeletedSuccess, petDeletedFailure, fetchDeletePet */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_PETS",
          function () {
            return GET_PETS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_PETS_SUCCESS",
          function () {
            return GET_PETS_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_PETS_FAILURE",
          function () {
            return GET_PETS_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PET_CREATED_SUCCESS",
          function () {
            return PET_CREATED_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PET_CREATED_FAILURE",
          function () {
            return PET_CREATED_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PET_DELETED_SUCCESS",
          function () {
            return PET_DELETED_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PET_DELETED_FAILURE",
          function () {
            return PET_DELETED_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getPets",
          function () {
            return getPets;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getPetsSuccess",
          function () {
            return getPetsSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getPetsFailure",
          function () {
            return getPetsFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchEmployeePets",
          function () {
            return fetchEmployeePets;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "petCreatedSuccess",
          function () {
            return petCreatedSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "petCreatedFailure",
          function () {
            return petCreatedFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchPostNewPet",
          function () {
            return fetchPostNewPet;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "petDeletedSuccess",
          function () {
            return petDeletedSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "petDeletedFailure",
          function () {
            return petDeletedFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchDeletePet",
          function () {
            return fetchDeletePet;
          }
        );
        var GET_PETS = "GET_PETS";
        var GET_PETS_SUCCESS = "GET_PETS_SUCCESS";
        var GET_PETS_FAILURE = "GET_PETS_FAILURE";
        var PET_CREATED_SUCCESS = "PET_CREATED_SUCCESS";
        var PET_CREATED_FAILURE = "PET_CREATED_FAILURE";
        var PET_DELETED_SUCCESS = "PET_DELETED_SUCCESS";
        var PET_DELETED_FAILURE = "PET_DELETED_FAILURE";
        var getPets = function getPets() {
          return {
            type: GET_PETS,
          };
        };
        var getPetsSuccess = function getPetsSuccess(pets) {
          return {
            type: GET_PETS_SUCCESS,
            payload: pets,
          };
        };
        var getPetsFailure = function getPetsFailure(error) {
          return {
            type: GET_PETS_FAILURE,
            payload: error,
          };
        };
        var fetchEmployeePets = function fetchEmployeePets(employee_id) {
          return function (dispatch) {
            dispatch(getPets);
            fetch(
              "http://localhost:3001/employees/".concat(employee_id, "/pets")
            )
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                dispatch(getPetsSuccess(data));
              })
              ["catch"](function (error) {
                dispatch(getPetsFailure(error));
              });
          };
        };
        var petCreatedSuccess = function petCreatedSuccess(pet) {
          return {
            type: PET_CREATED_SUCCESS,
            payload: pet,
          };
        };
        var petCreatedFailure = function petCreatedFailure(error) {
          return {
            type: PET_CREATED_FAILURE,
            payload: error,
          };
        };
        var fetchPostNewPet = function fetchPostNewPet(pet) {
          return function (dispatch) {
            fetch(
              "http://localhost:3001/employees/".concat(
                pet.employee_id,
                "/pets"
              ),
              {
                method: "POST",
                body: JSON.stringify(pet),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                dispatch(petCreatedSuccess(data));
              })
              ["catch"](function (error) {
                dispatch(petCreatedFailure(error));
              });
          };
        };
        var petDeletedSuccess = function petDeletedSuccess(pet) {
          return {
            type: PET_DELETED_SUCCESS,
            payload: pet,
          };
        };
        var petDeletedFailure = function petDeletedFailure(error) {
          return {
            type: PET_DELETED_FAILURE,
            payload: error,
          };
        };
        var fetchDeletePet = function fetchDeletePet(employee_id, pet_id) {
          return function (dispatch) {
            fetch(
              "http://localhost:3001/employees/"
                .concat(employee_id, "/pets/")
                .concat(pet_id),
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
                dispatch(petDeletedSuccess(data));
              })
              ["catch"](function (error) {
                dispatch(petDeletedFailure(error));
              });
          };
        };

        /***/
      },

    /***/ "./client/src/actions/SportActions.js":
      /*!********************************************!*\
  !*** ./client/src/actions/SportActions.js ***!
  \********************************************/
      /*! exports provided: GET_SPORTS, GET_SPORTS_SUCCESS, GET_SPORTS_FAILURE, SPORT_CREATED_SUCCESS, SPORT_CREATED_FAILURE, SPORT_DELETED_SUCCESS, SPORT_DELETED_FAILURE, getSports, getSportsSuccess, getSportsFailure, fetchEmployeeSports, sportCreatedSuccess, sportCreatedFailure, fetchPostNewSport, sportDeletedSucess, sportDeletedFailure, fetchDeleteSport */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_SPORTS",
          function () {
            return GET_SPORTS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_SPORTS_SUCCESS",
          function () {
            return GET_SPORTS_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GET_SPORTS_FAILURE",
          function () {
            return GET_SPORTS_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SPORT_CREATED_SUCCESS",
          function () {
            return SPORT_CREATED_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SPORT_CREATED_FAILURE",
          function () {
            return SPORT_CREATED_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SPORT_DELETED_SUCCESS",
          function () {
            return SPORT_DELETED_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SPORT_DELETED_FAILURE",
          function () {
            return SPORT_DELETED_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getSports",
          function () {
            return getSports;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getSportsSuccess",
          function () {
            return getSportsSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getSportsFailure",
          function () {
            return getSportsFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchEmployeeSports",
          function () {
            return fetchEmployeeSports;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sportCreatedSuccess",
          function () {
            return sportCreatedSuccess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sportCreatedFailure",
          function () {
            return sportCreatedFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchPostNewSport",
          function () {
            return fetchPostNewSport;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sportDeletedSucess",
          function () {
            return sportDeletedSucess;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sportDeletedFailure",
          function () {
            return sportDeletedFailure;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchDeleteSport",
          function () {
            return fetchDeleteSport;
          }
        );
        /* harmony import */ var _PetActions__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./PetActions */ "./client/src/actions/PetActions.js"
          );

        var GET_SPORTS = "GET_SPORTS";
        var GET_SPORTS_SUCCESS = "GET_SPORTS_SUCCESS";
        var GET_SPORTS_FAILURE = "GET_SPORTS_FAILURE";
        var SPORT_CREATED_SUCCESS = "SPORT_CREATED_SUCCESS";
        var SPORT_CREATED_FAILURE = "SPORT_CREATED_FAILURE";
        var SPORT_DELETED_SUCCESS = "SPORT_DELETED_SUCCESS";
        var SPORT_DELETED_FAILURE = "SPORT_DELETED_FAILURE";
        var getSports = function getSports() {
          return {
            type: _PetActions__WEBPACK_IMPORTED_MODULE_0__["GET_PETS"],
          };
        };
        var getSportsSuccess = function getSportsSuccess(sports) {
          return {
            type: GET_SPORTS_SUCCESS,
            payload: sports,
          };
        };
        var getSportsFailure = function getSportsFailure(error) {
          return {
            type: GET_SPORTS_FAILURE,
            payload: error,
          };
        };
        var fetchEmployeeSports = function fetchEmployeeSports(employee_id) {
          return function (dispatch) {
            fetch(
              "http://localhost:3001/employees/".concat(employee_id, "/sports")
            )
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                dispatch(getSportsSuccess(data));
              })
              ["catch"](function (error) {
                dispatch(getSportsFailure(error));
              });
          };
        };
        var sportCreatedSuccess = function sportCreatedSuccess(sport) {
          return {
            type: SPORT_CREATED_SUCCESS,
            payload: sport,
          };
        };
        var sportCreatedFailure = function sportCreatedFailure(error) {
          return {
            type: SPORT_CREATED_FAILURE,
            payload: error,
          };
        };
        var fetchPostNewSport = function fetchPostNewSport(sport) {
          return function (dispatch) {
            fetch(
              "http://localhost:3001/employees/".concat(
                sport.employee_id,
                "/sports"
              ),
              {
                method: "POST",
                body: JSON.stringify(sport),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                dispatch(sportCreatedSuccess(data));
              })
              ["catch"](function (error) {
                dispatch(sportCreatedFailure(error));
              });
          };
        };
        var sportDeletedSucess = function sportDeletedSucess(sport) {
          return {
            type: SPORT_DELETED_SUCCESS,
            payload: sport,
          };
        };
        var sportDeletedFailure = function sportDeletedFailure(error) {
          return {
            type: SPORT_DELETED_FAILURE,
            payload: error,
          };
        };
        var fetchDeleteSport = function fetchDeleteSport(
          employee_id,
          sport_id
        ) {
          return function (dispatch) {
            fetch(
              "http://localhost:3001/employees/"
                .concat(employee_id, "/sports/")
                .concat(sport_id),
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
                dispatch(sportDeletedSucess(data));
              })
              ["catch"](function (error) {
                dispatch(sportDeletedFailure(error));
              });
          };
        };

        /***/
      },

    /***/ "./client/src/components/dashboard/EmployeeDashboard.js":
      /*!**************************************************************!*\
  !*** ./client/src/components/dashboard/EmployeeDashboard.js ***!
  \**************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _actions_AlertActions__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../actions/AlertActions */ "./client/src/actions/AlertActions.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Grid'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Paper'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../util/ShowLoading */ "./client/src/util/ShowLoading.js"
          );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/Typography'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/components/dashboard/EmployeeDashboard.js",
          _this = undefined;

        var EmployeeDashboard = function EmployeeDashboard() {
          var dispatch = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()();
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
            function () {
              dispatch(
                Object(
                  _actions_AlertActions__WEBPACK_IMPORTED_MODULE_2__[
                    "fetchEmployeeAlerts"
                  ]
                )()
              );
            },
            [dispatch]
          );
          var alerts = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.alerts.alerts;
          });
          var loading = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.alerts.loading;
          });

          var formatDate = function formatDate(date) {
            var d = new Date(date),
              month = d.getMonth() + 1,
              day = d.getDate();

            if (month.length < 2) {
              month = "0" + month;
            }

            if (day.length < 2) {
              day = "0" + day;
            }

            return [month, day].join("-");
          };

          if (loading) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 17,
                  },
                }
              )
            );
          }

          if (Object.keys(alerts).length > 0) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Typography'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  variant: "h3",
                  gutterBottom: true,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 17,
                  },
                },
                "Your team: At-A-Glance"
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Grid'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  container: true,
                  spacing: 3,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Grid'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    item: true,
                    xs: 12,
                    md: 3,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Paper'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      elevation: 3,
                      style: {
                        padding: 20,
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51,
                        columnNumber: 25,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/Typography'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        variant: "h5",
                        gutterBottom: true,
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 52,
                          columnNumber: 29,
                        },
                      },
                      "Overdue alerts"
                    ),
                    " ",
                    alerts.overdue_alerts.length
                      ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 53,
                              columnNumber: 33,
                            },
                          },
                          alerts.overdue_alerts.map(function (employee) {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "span",
                              {
                                key: employee.id,
                                __self: _this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 55,
                                  columnNumber: 41,
                                },
                              },
                              employee.name
                            );
                          })
                        )
                      : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 59,
                              columnNumber: 33,
                            },
                          },
                          "There are no overdue alerts"
                        )
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Grid'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    item: true,
                    xs: 12,
                    md: 3,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Paper'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      elevation: 3,
                      style: {
                        padding: 20,
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 25,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/Typography'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        variant: "h5",
                        gutterBottom: true,
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 68,
                          columnNumber: 29,
                        },
                      },
                      "Today's birthdays"
                    ),
                    " ",
                    alerts.todays_birthdays.length
                      ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 69,
                              columnNumber: 33,
                            },
                          },
                          alerts.todays_birthdays.map(function (employee) {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "span",
                              {
                                key: employee.id,
                                __self: _this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 71,
                                  columnNumber: 41,
                                },
                              },
                              employee.name
                            );
                          })
                        )
                      : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 75,
                              columnNumber: 33,
                            },
                          },
                          "There are no birthdays today"
                        )
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Grid'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    item: true,
                    xs: 12,
                    md: 3,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Paper'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      elevation: 3,
                      style: {
                        padding: 20,
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 25,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/Typography'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        variant: "h5",
                        gutterBottom: true,
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 84,
                          columnNumber: 29,
                        },
                      },
                      "Upcoming birthdays"
                    ),
                    " ",
                    alerts.upcoming_birthdays.length
                      ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 85,
                              columnNumber: 33,
                            },
                          },
                          alerts.upcoming_birthdays.map(function (employee) {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "span",
                              {
                                key: employee.id,
                                __self: _this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 87,
                                  columnNumber: 41,
                                },
                              },
                              employee.name,
                              " on ",
                              formatDate(employee.birthday)
                            );
                          })
                        )
                      : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 91,
                              columnNumber: 33,
                            },
                          },
                          "No upcoming birthdays"
                        )
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Grid'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    item: true,
                    xs: 12,
                    md: 3,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Paper'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      elevation: 3,
                      style: {
                        padding: 10,
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 25,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/Typography'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        variant: "h5",
                        gutterBottom: true,
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 100,
                          columnNumber: 29,
                        },
                      },
                      "Upcoming anniversaries"
                    ),
                    " ",
                    alerts.upcoming_work_anniversaries.length
                      ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 101,
                              columnNumber: 33,
                            },
                          },
                          alerts.upcoming_work_anniversaries.map(function (
                            employee
                          ) {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "span",
                              {
                                key: employee.id,
                                __self: _this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 103,
                                  columnNumber: 41,
                                },
                              },
                              employee.name,
                              " on ",
                              formatDate(employee.birthday),
                              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "br",
                                {
                                  __self: _this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 103,
                                    columnNumber: 115,
                                  },
                                }
                              )
                            );
                          })
                        )
                      : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 107,
                              columnNumber: 33,
                            },
                          },
                          "No upcoming birthdays"
                        )
                  )
                )
              )
            );
          } else {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 17,
                  },
                }
              )
            );
          }
        };

        /* harmony default export */ __webpack_exports__["default"] =
          EmployeeDashboard;

        /***/
      },

    /***/ "./client/src/components/employees/CreateEmployee.js":
      /*!***********************************************************!*\
  !*** ./client/src/components/employees/CreateEmployee.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'date-fns'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@date-io/date-fns'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/pickers'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Input'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Grid'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/TextField'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Button'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/Typography'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../actions/EmployeeActions */ "./client/src/actions/EmployeeActions.js"
          );
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/components/employees/CreateEmployee.js",
          _this = undefined;

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          var _i =
            arr &&
            ((typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
              arr["@@iterator"]);
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        var CreateEmployee = function CreateEmployee(props) {
          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(""),
            _useState2 = _slicedToArray(_useState, 2),
            name = _useState2[0],
            setName = _useState2[1];

          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(null),
            _useState4 = _slicedToArray(_useState3, 2),
            headshot = _useState4[0],
            setHeadshot = _useState4[1];

          var _React$useState =
              react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(new Date()),
            _React$useState2 = _slicedToArray(_React$useState, 2),
            selectedDate = _React$useState2[0],
            setSelectedDate = _React$useState2[1];

          var dispatch = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()();

          var handleCreateNewEmployee = function handleCreateNewEmployee() {
            var employee = {
              name: name,
              headshot: headshot,
              hire_date: selectedDate,
              last_interaction: new Date(),
            };
            dispatch(
              Object(
                _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_2__[
                  "fetchPostNewEmployee"
                ]
              )(employee)
            );
            props.history.push("/employees");
          };

          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            !(function webpackMissingModule() {
              var e = new Error("Cannot find module '@material-ui/core/Grid'");
              e.code = "MODULE_NOT_FOUND";
              throw e;
            })(),
            {
              style: {
                padding: 40,
              },
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 9,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@material-ui/core/Typography'"
                );
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })(),
              {
                variant: "h4",
                gutterBottom: true,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 13,
                },
              },
              "Add a new employee"
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@material-ui/core/Grid'"
                );
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })(),
              {
                item: true,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 13,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/TextField'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  required: true,
                  id: "fullname",
                  label: "Full name",
                  defaultValue: "Michael Smith",
                  variant: "outlined",
                  onChange: function onChange(e) {
                    return setName(e.target.value);
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 17,
                  },
                }
              )
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@material-ui/core/Grid'"
                );
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })(),
              {
                item: true,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 13,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Input'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  accept: "*",
                  id: "upload-button",
                  style: {
                    display: "none",
                  },
                  onChange: function onChange(e) {
                    return setHeadshot(e.target.files[0]);
                  },
                  type: "file",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 17,
                  },
                }
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "label",
                {
                  htmlFor: "upload-button",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Button'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    variant: "contained",
                    color: "primary",
                    component: "span",
                    style: {
                      marginTop: 20,
                    },
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 21,
                    },
                  },
                  "Upload headshot photo"
                )
              )
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@material-ui/core/Grid'"
                );
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })(),
              {
                item: true,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 13,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/pickers'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  utils: !(function webpackMissingModule() {
                    var e = new Error("Cannot find module '@date-io/date-fns'");
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/pickers'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    disableToolbar: true,
                    variant: "inline",
                    format: "MM/dd/yyyy",
                    margin: "normal",
                    id: "date-picker-inline",
                    label: "Hire date",
                    value: selectedDate,
                    onChange: function onChange(date) {
                      return setSelectedDate(date);
                    },
                    KeyboardButtonProps: {
                      "aria-label": "change date",
                    },
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 21,
                    },
                  }
                )
              )
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@material-ui/core/Grid'"
                );
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })(),
              {
                item: true,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 13,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Button'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  variant: "contained",
                  color: "primary",
                  style: {
                    marginTop: 15,
                  },
                  onClick: function onClick() {
                    return handleCreateNewEmployee();
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 17,
                  },
                },
                "Create"
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] =
          CreateEmployee;

        /***/
      },

    /***/ "./client/src/components/employees/EditEmployee.js":
      /*!*********************************************************!*\
  !*** ./client/src/components/employees/EditEmployee.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../actions/EmployeeActions */ "./client/src/actions/EmployeeActions.js"
          );
        /* harmony import */ var _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../util/ShowLoading */ "./client/src/util/ShowLoading.js"
          );
        /* harmony import */ var _hooks_useFormatDate__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../hooks/useFormatDate */ "./client/src/hooks/useFormatDate.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Grid'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/Typography'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/TextField'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Button'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'date-fns'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@date-io/date-fns'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/pickers'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/components/employees/EditEmployee.js",
          _this = undefined;

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

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          var _i =
            arr &&
            ((typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
              arr["@@iterator"]);
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        var EditEmployee = function EditEmployee(props) {
          var employee_id = props.match.params.employee_id;
          var dispatch = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()();
          var loading = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.employees.loading;
          });
          var employee = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.employees.employee;
          });
          var hasErrors = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.employees.hasErrors;
          });

          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(employee),
            _useState2 = _slicedToArray(_useState, 2),
            newEmployee = _useState2[0],
            setNewEmployee = _useState2[1];

          console.log(employee, "employee object");
          console.log(newEmployee, "newEmployee object");
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
            function () {
              dispatch(
                Object(
                  _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_2__[
                    "fetchOneEmployee"
                  ]
                )(employee_id)
              );
            },
            [dispatch, employee_id]
          );

          var handleSubmit = function handleSubmit() {
            alert("Editing!");
          };

          if (loading) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__["default"],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 13,
                },
              }
            );
          }

          if (Object.keys(employee).length > 0) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Grid'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  style: {
                    padding: 40,
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Typography'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    variant: "h4",
                    gutterBottom: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 21,
                    },
                  },
                  "Editing details for ",
                  employee.name
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Grid'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    item: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/TextField'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      id: "fullname",
                      label: "Full name",
                      defaultValue: employee.name,
                      onChange: function onChange(e) {
                        return setNewEmployee(
                          _objectSpread(
                            _objectSpread({}, newEmployee),
                            {},
                            {
                              name: e.target.value,
                            }
                          )
                        );
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53,
                        columnNumber: 25,
                      },
                    }
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Grid'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    item: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/pickers'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      utils: !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@date-io/date-fns'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65,
                        columnNumber: 25,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/pickers'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        disableToolbar: true,
                        variant: "inline",
                        format: "MM/dd/yyyy",
                        margin: "normal",
                        id: "date-picker-inline",
                        value: newEmployee.hire_date,
                        onChange: function onChange(date) {
                          return setNewEmployee(
                            _objectSpread(
                              _objectSpread({}, newEmployee),
                              {},
                              {
                                hire_date: date,
                              }
                            )
                          );
                        },
                        label: "Hire date",
                        KeyboardButtonProps: {
                          "aria-label": "change date",
                        },
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 66,
                          columnNumber: 29,
                        },
                      }
                    )
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Grid'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    item: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Button'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      variant: "contained",
                      color: "primary",
                      style: {
                        marginTop: 15,
                      },
                      onClick: function onClick() {
                        return handleSubmit();
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 25,
                      },
                    },
                    "Save changes"
                  )
                )
              )
            );
          } else {
            return null;
          }
        };

        /* harmony default export */ __webpack_exports__["default"] =
          EditEmployee;

        /***/
      },

    /***/ "./client/src/components/employees/EmployeeCard.js":
      /*!*********************************************************!*\
  !*** ./client/src/components/employees/EmployeeCard.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Button'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Card'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/CardActions'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/CardContent'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/icons/CheckCircleOutline'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'dayjs'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-router-dom'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/Typography'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'dayjs/plugin/relativeTime'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/icons/Warning'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _hooks_useCheckDate__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../hooks/useCheckDate */ "./client/src/hooks/useCheckDate.js"
          );
        /* harmony import */ var _interactions_CreateInteraction__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../interactions/CreateInteraction */ "./client/src/components/interactions/CreateInteraction.js"
          );
        /* harmony import */ var _interactions_CreateInteraction__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _interactions_CreateInteraction__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../actions/EmployeeActions */ "./client/src/actions/EmployeeActions.js"
          );
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/components/employees/EmployeeCard.js",
          _this = undefined;

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          var _i =
            arr &&
            ((typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
              arr["@@iterator"]);
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        var useStyles = !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })()(function (theme) {
          return {
            checkDate: {
              float: "right",
              top: "10px",
              right: "15px",
            },
            root: {
              minWidth: 470,
            },
          };
        });

        var EmployeeCard = function EmployeeCard(props) {
          var classes = useStyles();
          var dispatch = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()();
          !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'dayjs'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })().extend(
            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module 'dayjs/plugin/relativeTime'"
              );
              e.code = "MODULE_NOT_FOUND";
              throw e;
            })()
          );
          var employee = props.employee;
          var lastInteraction = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'dayjs'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(props.employee.last_interaction).fromNow();

          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(false),
            _useState2 = _slicedToArray(_useState, 2),
            openDialog = _useState2[0],
            setOpenDialog = _useState2[1];

          var handleDelete = function handleDelete(employee_id) {
            if (window.confirm("Are you sure?")) {
              dispatch(
                Object(
                  _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_4__[
                    "deleteOneEmployee"
                  ]
                )(employee_id)
              );
            }
          };

          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            openDialog &&
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _interactions_CreateInteraction__WEBPACK_IMPORTED_MODULE_3___default.a,
                {
                  openDialog: openDialog,
                  setOpenDialog: setOpenDialog,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 28,
                  },
                }
              ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@material-ui/core/Card'"
                );
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })(),
              {
                variant: "outlined",
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 13,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/CardContent'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "span",
                  {
                    className: classes.checkDate,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 21,
                    },
                  },
                  Object(
                    _hooks_useCheckDate__WEBPACK_IMPORTED_MODULE_2__["default"]
                  )(props.employee.last_interaction)
                    ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        !(function webpackMissingModule() {
                          var e = new Error(
                            "Cannot find module '@material-ui/icons/Warning'"
                          );
                          e.code = "MODULE_NOT_FOUND";
                          throw e;
                        })(),
                        {
                          style: {
                            color: "red",
                            fontSize: 45,
                          },
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55,
                            columnNumber: 75,
                          },
                        }
                      )
                    : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        !(function webpackMissingModule() {
                          var e = new Error(
                            "Cannot find module '@material-ui/icons/CheckCircleOutline'"
                          );
                          e.code = "MODULE_NOT_FOUND";
                          throw e;
                        })(),
                        {
                          style: {
                            color: "green",
                            fontSize: 45,
                          },
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55,
                            columnNumber: 129,
                          },
                        }
                      )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Typography'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    variant: "h5",
                    component: "h2",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 21,
                    },
                  },
                  employee.name
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Typography'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    color: "textSecondary",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 21,
                    },
                  },
                  "Last interaction: ",
                  lastInteraction
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/CardActions'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error("Cannot find module 'react-router-dom'");
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    to: "/employees/".concat(employee.id),
                    style: {
                      textDecoration: "none",
                    },
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Button'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      size: "small",
                      style: {
                        color: "#005151",
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65,
                        columnNumber: 94,
                      },
                    },
                    "View/Edit Details"
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Button'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    size: "small",
                    onClick: function onClick() {
                      return setOpenDialog(true);
                    },
                    style: {
                      color: "#005151",
                    },
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 21,
                    },
                  },
                  "Log interaction"
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Button'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    size: "small",
                    onClick: function onClick() {
                      return handleDelete(employee.id);
                    },
                    style: {
                      color: "#005151",
                    },
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 21,
                    },
                  },
                  "Delete"
                )
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] =
          EmployeeCard;

        /***/
      },

    /***/ "./client/src/components/employees/EmployeeDetails.js":
      /*!************************************************************!*\
  !*** ./client/src/components/employees/EmployeeDetails.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-router-dom'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Button'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Container'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../actions/EmployeeActions */ "./client/src/actions/EmployeeActions.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Grid'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Card'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/CardContent'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/CardActions'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/Typography'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/TextField'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Dialog'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogActions'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogContent'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogContentText'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogTitle'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/InputLabel'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Select'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/MenuItem'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/FormHelperText'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'dayjs'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'dayjs/plugin/relativeTime'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _hooks_useFormatDate__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../hooks/useFormatDate */ "./client/src/hooks/useFormatDate.js"
          );
        /* harmony import */ var _hooks_useCheckDate__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../hooks/useCheckDate */ "./client/src/hooks/useCheckDate.js"
          );
        /* harmony import */ var _util_ShowLoading__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../util/ShowLoading */ "./client/src/util/ShowLoading.js"
          );
        /* harmony import */ var _util_ShowErrors__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../util/ShowErrors */ "./client/src/util/ShowErrors.js"
          );
        /* harmony import */ var _interests_DisplayAllEmployeeInterests__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../interests/DisplayAllEmployeeInterests */ "./client/src/components/interests/DisplayAllEmployeeInterests.js"
          );
        /* harmony import */ var _sports_DisplayAllEmployeeSports__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../sports/DisplayAllEmployeeSports */ "./client/src/components/sports/DisplayAllEmployeeSports.js"
          );
        /* harmony import */ var _notes_DisplayAllEmployeeNotes__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../notes/DisplayAllEmployeeNotes */ "./client/src/components/notes/DisplayAllEmployeeNotes.js"
          );
        /* harmony import */ var _pets_DisplayAllEmployeePets__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../pets/DisplayAllEmployeePets */ "./client/src/components/pets/DisplayAllEmployeePets.js"
          );
        /* harmony import */ var _newsfeed_DisplayAllEmployeeNews__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../newsfeed/DisplayAllEmployeeNews */ "./client/src/components/newsfeed/DisplayAllEmployeeNews.js"
          );
        /* harmony import */ var _interactions_DisplayAllEmployeeInteractions__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../interactions/DisplayAllEmployeeInteractions */ "./client/src/components/interactions/DisplayAllEmployeeInteractions.js"
          );
        /* harmony import */ var _actions_InteractionActions__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! ../../actions/InteractionActions */ "./client/src/actions/InteractionActions.js"
          );
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/components/employees/EmployeeDetails.js",
          _this = undefined;

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          var _i =
            arr &&
            ((typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
              arr["@@iterator"]);
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        var EmployeeDetails = function EmployeeDetails(props) {
          var dispatch = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()();
          var employee_id = props.match.params.employee_id;
          !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'dayjs'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })().extend(
            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module 'dayjs/plugin/relativeTime'"
              );
              e.code = "MODULE_NOT_FOUND";
              throw e;
            })()
          );
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
            function () {
              dispatch(
                Object(
                  _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_2__[
                    "fetchOneEmployee"
                  ]
                )(employee_id)
              );
            },
            [dispatch, employee_id]
          );
          var employee = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.employees.employee;
          });
          var loading = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.employees.loading;
          });
          var hasErrors = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.employees.hasErrors;
          });

          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(false),
            _useState2 = _slicedToArray(_useState, 2),
            dialogOpen = _useState2[0],
            setDialogOpen = _useState2[1];

          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(""),
            _useState4 = _slicedToArray(_useState3, 2),
            kind = _useState4[0],
            setKind = _useState4[1];

          var _useState5 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(""),
            _useState6 = _slicedToArray(_useState5, 2),
            notes = _useState6[0],
            setNotes = _useState6[1];

          var handleSubmit = function handleSubmit() {
            var interactionSubmit = {
              kind: kind,
              notes: notes,
              employee_id: employee_id,
            };
            dispatch(
              Object(
                _actions_InteractionActions__WEBPACK_IMPORTED_MODULE_13__[
                  "fetchPostNewInteraction"
                ]
              )(interactionSubmit)
            );
            dispatch(
              Object(
                _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_2__[
                  "updateEmployeeLastInteraction"
                ]
              )(employee_id)
            );
            setDialogOpen(false);
          };

          var handleDelete = function handleDelete() {
            if (window.confirm("Are you sure?")) {
              dispatch(
                Object(
                  _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_2__[
                    "deleteOneEmployee"
                  ]
                )(employee_id)
              );
              props.history.push("/employees");
            }
          };

          var lastInteraction = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'dayjs'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(employee.last_interaction).fromNow();
          var hireDate = Object(
            _hooks_useFormatDate__WEBPACK_IMPORTED_MODULE_3__["default"]
          )(employee.hire_date);
          var isRecent = Object(
            _hooks_useCheckDate__WEBPACK_IMPORTED_MODULE_4__["default"]
          )(employee.last_interaction);
          var birthday = Object(
            _hooks_useFormatDate__WEBPACK_IMPORTED_MODULE_3__["default"]
          )(employee.birthday);

          if (loading) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _util_ShowLoading__WEBPACK_IMPORTED_MODULE_5__["default"],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 17,
                  },
                }
              )
            );
          } else if (hasErrors) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _util_ShowErrors__WEBPACK_IMPORTED_MODULE_6__["default"],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 17,
                  },
                }
              )
            );
          } else if (employee) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Dialog'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  open: dialogOpen,
                  onClose: function onClose() {
                    return setDialogOpen(false);
                  },
                  "aria-labelledby": "form-dialog-title",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogTitle'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    id: "form-dialog-title",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 21,
                    },
                  },
                  "Log an interaction"
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogContent'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/DialogContentText'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 25,
                      },
                    },
                    "Fill out the form below to log a recent interaction you had with Employee"
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/InputLabel'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      id: "interaction-kind-select",
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 25,
                      },
                    },
                    "Type of interaction"
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Select'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      labelId: "interaction-kind-select",
                      id: "interaction-kind",
                      style: {
                        minWidth: 180,
                      },
                      value: kind,
                      variant: "outlined",
                      onChange: function onChange(e) {
                        return setKind(e.target.value);
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                        columnNumber: 25,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/MenuItem'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        value: "News item",
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 113,
                          columnNumber: 25,
                        },
                      },
                      "News item"
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/MenuItem'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        value: "Sports",
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 114,
                          columnNumber: 25,
                        },
                      },
                      "Sports"
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/MenuItem'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        value: "Pets",
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 115,
                          columnNumber: 25,
                        },
                      },
                      "Pets"
                    )
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/FormHelperText'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 25,
                      },
                    },
                    "Select what type of interaction you're logging"
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/TextField'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      margin: "dense",
                      id: "name",
                      label: "Notes/Details about interaction",
                      type: "text",
                      onChange: function onChange(e) {
                        return setNotes(e.target.value);
                      },
                      fullWidth: true,
                      variant: "outlined",
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 119,
                        columnNumber: 25,
                      },
                    }
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogActions'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 129,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Button'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      onClick: function onClick() {
                        return handleSubmit();
                      },
                      style: {
                        color: "#005151",
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 130,
                        columnNumber: 21,
                      },
                    },
                    "Save"
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Button'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      onClick: function onClick() {
                        return setDialogOpen(false);
                      },
                      style: {
                        color: "#005151",
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 133,
                        columnNumber: 21,
                      },
                    },
                    "Cancel"
                  )
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Container'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  maxWidth: "lg",
                  style: {
                    paddingTop: 45,
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Card'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    variant: "outlined",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 139,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/CardContent'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 140,
                        columnNumber: 25,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/Typography'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        variant: "h4",
                        gutterBottom: true,
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 141,
                          columnNumber: 29,
                        },
                      },
                      employee.name
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/Typography'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        variant: "subtitle1",
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 143,
                          columnNumber: 29,
                        },
                      },
                      "Hire date: ",
                      hireDate
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/Typography'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        variant: "subtitle1",
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 145,
                          columnNumber: 29,
                        },
                      },
                      "Birthday: ",
                      birthday
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/Typography'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        variant: "subtitle1",
                        gutterBottom: true,
                        style: isRecent
                          ? {
                              color: "red",
                            }
                          : {
                              color: "green",
                            },
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 147,
                          columnNumber: 29,
                        },
                      },
                      "Last interaction: ",
                      lastInteraction
                    )
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/CardActions'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 149,
                        columnNumber: 25,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/Button'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        variant: "outlined",
                        onClick: function onClick() {
                          return setDialogOpen(true);
                        },
                        style: {
                          color: "#005151",
                        },
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 150,
                          columnNumber: 29,
                        },
                      },
                      "Log interaction"
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/Button'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        variant: "outlined",
                        style: {
                          color: "#005151",
                        },
                        component: !(function webpackMissingModule() {
                          var e = new Error(
                            "Cannot find module 'react-router-dom'"
                          );
                          e.code = "MODULE_NOT_FOUND";
                          throw e;
                        })(),
                        to: "/employees/".concat(employee_id, "/edit"),
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 151,
                          columnNumber: 29,
                        },
                      },
                      "Edit details"
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/Button'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        color: "secondary",
                        variant: "outlined",
                        onClick: function onClick() {
                          return handleDelete();
                        },
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 152,
                          columnNumber: 29,
                        },
                      },
                      "Remove employee"
                    )
                  )
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Container'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  maxWidth: "lg",
                  style: {
                    paddingTop: 45,
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Grid'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    container: true,
                    spacing: 3,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 158,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Grid'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      item: true,
                      xs: 12,
                      md: 3,
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 25,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _interests_DisplayAllEmployeeInterests__WEBPACK_IMPORTED_MODULE_7__[
                        "default"
                      ],
                      {
                        employee_id: employee_id,
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 160,
                          columnNumber: 29,
                        },
                      }
                    )
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Grid'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      item: true,
                      xs: 12,
                      md: 3,
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 163,
                        columnNumber: 25,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _pets_DisplayAllEmployeePets__WEBPACK_IMPORTED_MODULE_10__[
                        "default"
                      ],
                      {
                        employee_id: employee_id,
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 164,
                          columnNumber: 29,
                        },
                      }
                    )
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Grid'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      item: true,
                      xs: 12,
                      md: 3,
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 167,
                        columnNumber: 25,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _sports_DisplayAllEmployeeSports__WEBPACK_IMPORTED_MODULE_8__[
                        "default"
                      ],
                      {
                        employee_id: employee_id,
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 168,
                          columnNumber: 29,
                        },
                      }
                    )
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Grid'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      item: true,
                      xs: 12,
                      md: 3,
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 171,
                        columnNumber: 25,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _notes_DisplayAllEmployeeNotes__WEBPACK_IMPORTED_MODULE_9__[
                        "default"
                      ],
                      {
                        employee_id: employee_id,
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 172,
                          columnNumber: 29,
                        },
                      }
                    )
                  )
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Container'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  maxWidth: "lg",
                  style: {
                    paddingTop: 45,
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _newsfeed_DisplayAllEmployeeNews__WEBPACK_IMPORTED_MODULE_11__[
                    "default"
                  ],
                  {
                    employee_id: employee_id,
                    employee_name: employee.name,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 178,
                      columnNumber: 21,
                    },
                  }
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Container'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  maxWidth: "lg",
                  style: {
                    paddingTop: 45,
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _interactions_DisplayAllEmployeeInteractions__WEBPACK_IMPORTED_MODULE_12__[
                    "default"
                  ],
                  {
                    employee_id: employee_id,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 21,
                    },
                  }
                )
              )
            );
          }
        };

        /* harmony default export */ __webpack_exports__["default"] =
          EmployeeDetails;

        /***/
      },

    /***/ "./client/src/components/interactions/CreateInteraction.js":
      /*!*****************************************************************!*\
  !*** ./client/src/components/interactions/CreateInteraction.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
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
        /***/
      },

    /***/ "./client/src/components/interactions/DisplayAllEmployeeInteractions.js":
      /*!******************************************************************************!*\
  !*** ./client/src/components/interactions/DisplayAllEmployeeInteractions.js ***!
  \******************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _actions_InteractionActions__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../actions/InteractionActions */ "./client/src/actions/InteractionActions.js"
          );
        /* harmony import */ var _util_ShowErrors__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../util/ShowErrors */ "./client/src/util/ShowErrors.js"
          );
        /* harmony import */ var _util_ShowLoading__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../util/ShowLoading */ "./client/src/util/ShowLoading.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Paper'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/Typography'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Table'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/TableBody'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/TableCell'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/TableHead'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/TableRow'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'dayjs'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'dayjs/plugin/relativeTime'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/icons/HighlightOff'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/components/interactions/DisplayAllEmployeeInteractions.js",
          _this = undefined;

        var useStyles = !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })()(function (theme) {
          return {
            widget: {
              padding: 15,
              borderRadius: 15,
            },
          };
        });

        var DisplayAllEmployeeInteractions =
          function DisplayAllEmployeeInteractions(props) {
            var classes = useStyles();
            var dispatch = !(function webpackMissingModule() {
              var e = new Error("Cannot find module 'react-redux'");
              e.code = "MODULE_NOT_FOUND";
              throw e;
            })()();
            var employee_id = props.employee_id;
            !(function webpackMissingModule() {
              var e = new Error("Cannot find module 'dayjs'");
              e.code = "MODULE_NOT_FOUND";
              throw e;
            })().extend(
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module 'dayjs/plugin/relativeTime'"
                );
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })()
            );
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
              function () {
                dispatch(
                  Object(
                    _actions_InteractionActions__WEBPACK_IMPORTED_MODULE_2__[
                      "fetchEmployeeInteractions"
                    ]
                  )(employee_id)
                );
              },
              [dispatch, employee_id]
            );
            var interactions = !(function webpackMissingModule() {
              var e = new Error("Cannot find module 'react-redux'");
              e.code = "MODULE_NOT_FOUND";
              throw e;
            })()(function (state) {
              return state.interactions.interactions;
            });
            var loading = !(function webpackMissingModule() {
              var e = new Error("Cannot find module 'react-redux'");
              e.code = "MODULE_NOT_FOUND";
              throw e;
            })()(function (state) {
              return state.interactions.loading;
            });
            var hasErrors = !(function webpackMissingModule() {
              var e = new Error("Cannot find module 'react-redux'");
              e.code = "MODULE_NOT_FOUND";
              throw e;
            })()(function (state) {
              return state.interactions.hasErrors;
            });

            var handleDelete = function handleDelete(interaction_id) {
              console.log(interaction_id, "interaction id from handle delete");

              if (window.confirm("Are you sure?")) {
                dispatch(
                  Object(
                    _actions_InteractionActions__WEBPACK_IMPORTED_MODULE_2__[
                      "fetchDeleteInteraction"
                    ]
                  )(employee_id, interaction_id)
                );
              }
            };

            if (hasErrors) {
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _util_ShowErrors__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 13,
                  },
                }
              );
            }

            if (loading) {
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _util_ShowLoading__WEBPACK_IMPORTED_MODULE_4__["default"],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 13,
                  },
                }
              );
            }

            if (interactions) {
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Paper'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  className: classes.widget,
                  elevation: 3,
                  square: false,
                  style: {
                    padding: 15,
                    marginBottom: 25,
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 13,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Typography'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    variant: "h4",
                    gutterBottom: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 17,
                    },
                  },
                  "Recent interactions"
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Table'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    "aria-label": "simple table",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 17,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/TableHead'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 21,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/TableRow'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 67,
                          columnNumber: 25,
                        },
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        !(function webpackMissingModule() {
                          var e = new Error(
                            "Cannot find module '@material-ui/core/TableCell'"
                          );
                          e.code = "MODULE_NOT_FOUND";
                          throw e;
                        })(),
                        {
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68,
                            columnNumber: 29,
                          },
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "strong",
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 68,
                              columnNumber: 40,
                            },
                          },
                          "Date of interaction"
                        )
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        !(function webpackMissingModule() {
                          var e = new Error(
                            "Cannot find module '@material-ui/core/TableCell'"
                          );
                          e.code = "MODULE_NOT_FOUND";
                          throw e;
                        })(),
                        {
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69,
                            columnNumber: 29,
                          },
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "strong",
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 69,
                              columnNumber: 40,
                            },
                          },
                          "Type of interaction"
                        )
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        !(function webpackMissingModule() {
                          var e = new Error(
                            "Cannot find module '@material-ui/core/TableCell'"
                          );
                          e.code = "MODULE_NOT_FOUND";
                          throw e;
                        })(),
                        {
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70,
                            columnNumber: 29,
                          },
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "strong",
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 70,
                              columnNumber: 40,
                            },
                          },
                          "Interaction notes"
                        )
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        !(function webpackMissingModule() {
                          var e = new Error(
                            "Cannot find module '@material-ui/core/TableCell'"
                          );
                          e.code = "MODULE_NOT_FOUND";
                          throw e;
                        })(),
                        {
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71,
                            columnNumber: 29,
                          },
                        }
                      )
                    )
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/TableBody'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 21,
                      },
                    },
                    interactions.map(function (interaction) {
                      return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        !(function webpackMissingModule() {
                          var e = new Error(
                            "Cannot find module '@material-ui/core/TableRow'"
                          );
                          e.code = "MODULE_NOT_FOUND";
                          throw e;
                        })(),
                        {
                          key: interaction.id,
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76,
                            columnNumber: 25,
                          },
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          !(function webpackMissingModule() {
                            var e = new Error(
                              "Cannot find module '@material-ui/core/TableCell'"
                            );
                            e.code = "MODULE_NOT_FOUND";
                            throw e;
                          })(),
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 77,
                              columnNumber: 29,
                            },
                          },
                          !(function webpackMissingModule() {
                            var e = new Error("Cannot find module 'dayjs'");
                            e.code = "MODULE_NOT_FOUND";
                            throw e;
                          })()(interaction.created_at).fromNow()
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          !(function webpackMissingModule() {
                            var e = new Error(
                              "Cannot find module '@material-ui/core/TableCell'"
                            );
                            e.code = "MODULE_NOT_FOUND";
                            throw e;
                          })(),
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 78,
                              columnNumber: 29,
                            },
                          },
                          interaction.kind
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          !(function webpackMissingModule() {
                            var e = new Error(
                              "Cannot find module '@material-ui/core/TableCell'"
                            );
                            e.code = "MODULE_NOT_FOUND";
                            throw e;
                          })(),
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 79,
                              columnNumber: 29,
                            },
                          },
                          interaction.notes
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          !(function webpackMissingModule() {
                            var e = new Error(
                              "Cannot find module '@material-ui/core/TableCell'"
                            );
                            e.code = "MODULE_NOT_FOUND";
                            throw e;
                          })(),
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 80,
                              columnNumber: 29,
                            },
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            !(function webpackMissingModule() {
                              var e = new Error(
                                "Cannot find module '@material-ui/icons/HighlightOff'"
                              );
                              e.code = "MODULE_NOT_FOUND";
                              throw e;
                            })(),
                            {
                              style: {
                                size: 10,
                                color: "red",
                              },
                              onClick: function onClick() {
                                return handleDelete(interaction.id);
                              },
                              __self: _this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 80,
                                columnNumber: 40,
                              },
                            }
                          )
                        )
                      );
                    })
                  )
                )
              );
            }
          };

        /* harmony default export */ __webpack_exports__["default"] =
          DisplayAllEmployeeInteractions;

        /***/
      },

    /***/ "./client/src/components/interests/DisplayAllEmployeeInterests.js":
      /*!************************************************************************!*\
  !*** ./client/src/components/interests/DisplayAllEmployeeInterests.js ***!
  \************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _actions_InterestActions__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../actions/InterestActions */ "./client/src/actions/InterestActions.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/List'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/ListItem'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/ListItemText'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Paper'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/IconButton'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/icons/AddCircle'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/Typography'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../util/ShowLoading */ "./client/src/util/ShowLoading.js"
          );
        /* harmony import */ var _util_ShowErrors__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../util/ShowErrors */ "./client/src/util/ShowErrors.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Dialog'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogActions'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogContent'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogContentText'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogTitle'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/TextField'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Button'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/icons/HighlightOff'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/components/interests/DisplayAllEmployeeInterests.js",
          _this = undefined;

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          var _i =
            arr &&
            ((typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
              arr["@@iterator"]);
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        var useStyles = !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })()(function (theme) {
          return {
            addItemIcon: {
              float: "right",
              bottom: "0px",
              left: 0,
            },
            widget: {
              padding: 15,
              borderRadius: 15,
            },
          };
        });

        var DisplayAllEmployeeInterests = function DisplayAllEmployeeInterests(
          props
        ) {
          var dispatch = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()();
          var classes = useStyles();
          var employee_id = props.employee_id;
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
            function () {
              dispatch(
                Object(
                  _actions_InterestActions__WEBPACK_IMPORTED_MODULE_2__[
                    "fetchEmployeeInterests"
                  ]
                )(employee_id)
              );
            },
            [dispatch, employee_id]
          );

          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(false),
            _useState2 = _slicedToArray(_useState, 2),
            open = _useState2[0],
            setOpen = _useState2[1];

          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(""),
            _useState4 = _slicedToArray(_useState3, 2),
            newInterest = _useState4[0],
            setNewInterest = _useState4[1];

          var interests = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.interests.interests;
          });
          var loading = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.interests.loading;
          });
          var hasErrors = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.interests.hasErrors;
          });

          var handleSubmit = function handleSubmit() {
            var interestSubmit = {
              name: newInterest,
              employee_id: employee_id,
            };
            dispatch(
              Object(
                _actions_InterestActions__WEBPACK_IMPORTED_MODULE_2__[
                  "fetchPostNewInterest"
                ]
              )(interestSubmit)
            );
            setOpen(false);
          };

          var handleDelete = function handleDelete(interest_id) {
            if (window.confirm("Are you sure?")) {
              dispatch(
                Object(
                  _actions_InterestActions__WEBPACK_IMPORTED_MODULE_2__[
                    "fetchDeleteInterest"
                  ]
                )(employee_id, interest_id)
              );
            }
          };

          if (loading) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__["default"],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 13,
                },
              }
            );
          } else if (hasErrors) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _util_ShowErrors__WEBPACK_IMPORTED_MODULE_4__["default"],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 13,
                },
              }
            );
          } else if (interests) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Dialog'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  open: open,
                  onClose: function onClose() {
                    return setOpen(false);
                  },
                  "aria-labelledby": "form-dialog-title",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogTitle'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    id: "form-dialog-title",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 21,
                    },
                  },
                  "Add a new interest or hobby"
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogContent'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/DialogContentText'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 25,
                      },
                    },
                    "Add a new interest or hobby below"
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/TextField'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      autoFocus: true,
                      margin: "dense",
                      id: "name",
                      label: "Interest name",
                      fullWidth: true,
                      variant: "outlined",
                      onChange: function onChange(e) {
                        return setNewInterest(e.target.value);
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 25,
                      },
                    }
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogActions'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Button'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      onClick: function onClick() {
                        return setOpen(false);
                      },
                      color: "primary",
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 21,
                      },
                    },
                    "Cancel"
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Button'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      onClick: function onClick() {
                        return handleSubmit();
                      },
                      color: "primary",
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 21,
                      },
                    },
                    "Save"
                  )
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/IconButton'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  className: classes.addItemIcon,
                  color: "primary",
                  "aria-label": "Add new interest",
                  onClick: function onClick() {
                    return setOpen(true);
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/icons/AddCircle'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    style: {
                      color: "#005151",
                      fontSize: 30,
                    },
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 21,
                    },
                  }
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Paper'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  elevation: 3,
                  className: classes.widget,
                  square: false,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Typography'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    variant: "h5",
                    style: {
                      textAlign: "center",
                    },
                    gutterBottom: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 21,
                    },
                  },
                  "Interests/Hobbies"
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/List'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    dense: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 117,
                      columnNumber: 21,
                    },
                  },
                  interests.map(function (interest) {
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/ListItem'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        key: interest.id,
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 119,
                          columnNumber: 29,
                        },
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 120,
                            columnNumber: 33,
                          },
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          !(function webpackMissingModule() {
                            var e = new Error(
                              "Cannot find module '@material-ui/icons/HighlightOff'"
                            );
                            e.code = "MODULE_NOT_FOUND";
                            throw e;
                          })(),
                          {
                            style: {
                              size: 10,
                              color: "red",
                            },
                            onClick: function onClick() {
                              return handleDelete(interest.id);
                            },
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 120,
                              columnNumber: 39,
                            },
                          }
                        )
                      ),
                      "\xA0",
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        !(function webpackMissingModule() {
                          var e = new Error(
                            "Cannot find module '@material-ui/core/ListItemText'"
                          );
                          e.code = "MODULE_NOT_FOUND";
                          throw e;
                        })(),
                        {
                          primary: interest.name,
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 120,
                            columnNumber: 149,
                          },
                        }
                      )
                    );
                  })
                )
              )
            );
          }
        };

        /* harmony default export */ __webpack_exports__["default"] =
          DisplayAllEmployeeInterests;

        /***/
      },

    /***/ "./client/src/components/newsfeed/DisplayAllEmployeeNews.js":
      /*!******************************************************************!*\
  !*** ./client/src/components/newsfeed/DisplayAllEmployeeNews.js ***!
  \******************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _actions_NewsfeedActions__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../actions/NewsfeedActions */ "./client/src/actions/NewsfeedActions.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../util/ShowLoading */ "./client/src/util/ShowLoading.js"
          );
        /* harmony import */ var _util_ShowErrors__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../util/ShowErrors */ "./client/src/util/ShowErrors.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Paper'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/Typography'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/components/newsfeed/DisplayAllEmployeeNews.js",
          _this = undefined;

        var useStyles = !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })()(function (theme) {
          return {
            widget: {
              padding: 15,
              borderRadius: 15,
            },
          };
        });

        var DisplayAllEmployeeNews = function DisplayAllEmployeeNews(props) {
          var dispatch = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()();
          var classes = useStyles();
          var employee_id = props.employee_id;
          var employee_name = props.employee_name;
          var newsfeed = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.newsfeeds.news;
          });
          var loading = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.newsfeeds.loading;
          });
          var hasErrors = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.newsfeeds.hasErrors;
          });
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
            function () {
              dispatch(
                Object(
                  _actions_NewsfeedActions__WEBPACK_IMPORTED_MODULE_2__[
                    "fetchEmployeeNewsfeed"
                  ]
                )(employee_id)
              );
            },
            [dispatch, employee_id]
          );

          if (loading) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__["default"],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 13,
                },
              }
            );
          }

          if (hasErrors) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _util_ShowErrors__WEBPACK_IMPORTED_MODULE_4__["default"],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 13,
                },
              }
            );
          }

          if (newsfeed.length > 0) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Paper'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  className: classes.widget,
                  elevation: 3,
                  square: false,
                  style: {
                    padding: 15,
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Typography'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    variant: "h4",
                    gutterBottom: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 21,
                    },
                  },
                  employee_name,
                  "'s Newsfeed"
                ),
                newsfeed.map(function (article) {
                  return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      key: article.author,
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 25,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/Typography'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        variant: "h6",
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 55,
                          columnNumber: 29,
                        },
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                          href: article.url,
                          target: "new",
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55,
                            columnNumber: 55,
                          },
                        },
                        article.title
                      )
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/Typography'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        variant: "subtitle2",
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 56,
                          columnNumber: 29,
                        },
                      },
                      article.description
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "br",
                      {
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 56,
                          columnNumber: 97,
                        },
                      }
                    )
                  );
                })
              )
            );
          } else {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              "Hmm... It looks like ",
              employee_name,
              " doesn't have any interests yet..."
            );
          }
        };

        /* harmony default export */ __webpack_exports__["default"] =
          DisplayAllEmployeeNews;

        /***/
      },

    /***/ "./client/src/components/notes/DisplayAllEmployeeNotes.js":
      /*!****************************************************************!*\
  !*** ./client/src/components/notes/DisplayAllEmployeeNotes.js ***!
  \****************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _actions_NoteActions__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../actions/NoteActions */ "./client/src/actions/NoteActions.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/List'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/ListItem'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/ListItemText'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Paper'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/IconButton'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/icons/AddCircle'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/Typography'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../util/ShowLoading */ "./client/src/util/ShowLoading.js"
          );
        /* harmony import */ var _util_ShowErrors__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../util/ShowErrors */ "./client/src/util/ShowErrors.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Dialog'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogActions'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogContent'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogContentText'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogTitle'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/TextField'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Button'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/icons/HighlightOff'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/components/notes/DisplayAllEmployeeNotes.js",
          _this = undefined;

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          var _i =
            arr &&
            ((typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
              arr["@@iterator"]);
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        var useStyles = !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })()(function (theme) {
          return {
            addItemIcon: {
              float: "right",
              bottom: "0px",
              left: 0,
            },
            widget: {
              padding: 15,
              borderRadius: 15,
            },
          };
        });

        var DisplayAllEmployeeNotes = function DisplayAllEmployeeNotes(props) {
          var dispatch = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()();
          var classes = useStyles();
          var employee_id = props.employee_id;
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
            function () {
              dispatch(
                Object(
                  _actions_NoteActions__WEBPACK_IMPORTED_MODULE_2__[
                    "fetchEmployeeNotes"
                  ]
                )(employee_id)
              );
            },
            [dispatch, employee_id]
          );

          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(false),
            _useState2 = _slicedToArray(_useState, 2),
            open = _useState2[0],
            setOpen = _useState2[1];

          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(""),
            _useState4 = _slicedToArray(_useState3, 2),
            newNote = _useState4[0],
            setNewNote = _useState4[1];

          var notes = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.notes.notes;
          });
          var loading = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.notes.loading;
          });
          var hasErrors = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.notes.hasErrors;
          });

          var handleSubmit = function handleSubmit() {
            var noteSubmit = {
              contents: newNote,
              employee_id: employee_id,
            };
            dispatch(
              Object(
                _actions_NoteActions__WEBPACK_IMPORTED_MODULE_2__[
                  "fetchPostNewNote"
                ]
              )(noteSubmit)
            );
            setOpen(false);
          };

          var handleDelete = function handleDelete(note_id) {
            if (window.confirm("Are you sure?")) {
              dispatch(
                Object(
                  _actions_NoteActions__WEBPACK_IMPORTED_MODULE_2__[
                    "fetchDeleteNote"
                  ]
                )(employee_id, note_id)
              );
            }
          };

          if (loading) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__["default"],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 13,
                },
              }
            );
          } else if (hasErrors) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _util_ShowErrors__WEBPACK_IMPORTED_MODULE_4__["default"],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 13,
                },
              }
            );
          } else if (notes) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Dialog'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  open: open,
                  onClose: function onClose() {
                    return setOpen(false);
                  },
                  "aria-labelledby": "form-dialog-title",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogTitle'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    id: "form-dialog-title",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 21,
                    },
                  },
                  "Add a new note below"
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogContent'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/DialogContentText'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 25,
                      },
                    },
                    "Add a note/reminder below"
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/TextField'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      autoFocus: true,
                      margin: "dense",
                      id: "content",
                      label: "Notes/Thoughts/Ideas...",
                      multiline: true,
                      rows: 6,
                      fullWidth: true,
                      variant: "outlined",
                      onChange: function onChange(e) {
                        return setNewNote(e.target.value);
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 25,
                      },
                    }
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogActions'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Button'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      onClick: function onClick() {
                        return setOpen(false);
                      },
                      color: "primary",
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 21,
                      },
                    },
                    "Cancel"
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Button'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      onClick: function onClick() {
                        return handleSubmit();
                      },
                      color: "primary",
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 21,
                      },
                    },
                    "Save"
                  )
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/IconButton'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  className: classes.addItemIcon,
                  color: "primary",
                  "aria-label": "Add new note",
                  onClick: function onClick() {
                    return setOpen(true);
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/icons/AddCircle'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    style: {
                      color: "#005151",
                      fontSize: 30,
                    },
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 21,
                    },
                  }
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Paper'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  elevation: 3,
                  className: classes.widget,
                  square: false,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Typography'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    variant: "h5",
                    style: {
                      textAlign: "center",
                    },
                    gutterBottom: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 21,
                    },
                  },
                  "Notes"
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/List'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    dense: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 21,
                    },
                  },
                  notes.map(function (note) {
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/ListItem'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        key: note.id,
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 121,
                          columnNumber: 29,
                        },
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 122,
                            columnNumber: 33,
                          },
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          !(function webpackMissingModule() {
                            var e = new Error(
                              "Cannot find module '@material-ui/icons/HighlightOff'"
                            );
                            e.code = "MODULE_NOT_FOUND";
                            throw e;
                          })(),
                          {
                            style: {
                              size: 10,
                              color: "red",
                            },
                            onClick: function onClick() {
                              return handleDelete(note.id);
                            },
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 122,
                              columnNumber: 39,
                            },
                          }
                        )
                      ),
                      "\xA0",
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        !(function webpackMissingModule() {
                          var e = new Error(
                            "Cannot find module '@material-ui/core/ListItemText'"
                          );
                          e.code = "MODULE_NOT_FOUND";
                          throw e;
                        })(),
                        {
                          primary: "".concat(note.contents),
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 122,
                            columnNumber: 145,
                          },
                        }
                      )
                    );
                  })
                )
              )
            );
          }
        };

        /* harmony default export */ __webpack_exports__["default"] =
          DisplayAllEmployeeNotes;

        /***/
      },

    /***/ "./client/src/components/pets/DisplayAllEmployeePets.js":
      /*!**************************************************************!*\
  !*** ./client/src/components/pets/DisplayAllEmployeePets.js ***!
  \**************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _actions_PetActions__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../actions/PetActions */ "./client/src/actions/PetActions.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/List'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/ListItem'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/ListItemText'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Paper'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/IconButton'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/icons/AddCircle'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/Typography'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../util/ShowLoading */ "./client/src/util/ShowLoading.js"
          );
        /* harmony import */ var _util_ShowErrors__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../util/ShowErrors */ "./client/src/util/ShowErrors.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Dialog'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogActions'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogContent'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogContentText'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogTitle'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/TextField'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Button'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/icons/HighlightOff'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/components/pets/DisplayAllEmployeePets.js",
          _this = undefined;

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          var _i =
            arr &&
            ((typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
              arr["@@iterator"]);
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        var useStyles = !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })()(function (theme) {
          return {
            addItemIcon: {
              float: "right",
              bottom: "0px",
              left: 0,
            },
            widget: {
              padding: 15,
              borderRadius: 15,
            },
          };
        });

        var DisplayAllEmployeePets = function DisplayAllEmployeePets(props) {
          var dispatch = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()();
          var classes = useStyles();
          var employee_id = props.employee_id;
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
            function () {
              dispatch(
                Object(
                  _actions_PetActions__WEBPACK_IMPORTED_MODULE_2__[
                    "fetchEmployeePets"
                  ]
                )(employee_id)
              );
            },
            [dispatch, employee_id]
          );

          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(false),
            _useState2 = _slicedToArray(_useState, 2),
            open = _useState2[0],
            setOpen = _useState2[1];

          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(""),
            _useState4 = _slicedToArray(_useState3, 2),
            newPet = _useState4[0],
            setNewPet = _useState4[1];

          var _useState5 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(""),
            _useState6 = _slicedToArray(_useState5, 2),
            newPetType = _useState6[0],
            setNewPetType = _useState6[1];

          var pets = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.pets.pets;
          });
          var loading = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.pets.loading;
          });
          var hasErrors = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.pets.hasErrors;
          });

          var handleSubmit = function handleSubmit() {
            var petSubmit = {
              name: newPet,
              kind: newPetType,
              employee_id: employee_id,
            };
            dispatch(
              Object(
                _actions_PetActions__WEBPACK_IMPORTED_MODULE_2__[
                  "fetchPostNewPet"
                ]
              )(petSubmit)
            );
            setOpen(false);
          };

          var handleDelete = function handleDelete(pet_id) {
            if (window.confirm("Are you sure?")) {
              dispatch(
                Object(
                  _actions_PetActions__WEBPACK_IMPORTED_MODULE_2__[
                    "fetchDeletePet"
                  ]
                )(employee_id, pet_id)
              );
            }
          };

          if (loading) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__["default"],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 13,
                },
              }
            );
          } else if (hasErrors) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _util_ShowErrors__WEBPACK_IMPORTED_MODULE_4__["default"],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 13,
                },
              }
            );
          } else if (pets) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Dialog'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  open: open,
                  onClose: function onClose() {
                    return setOpen(false);
                  },
                  "aria-labelledby": "form-dialog-title",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogTitle'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    id: "form-dialog-title",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 21,
                    },
                  },
                  "Add a new pet and the pet type"
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogContent'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/DialogContentText'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85,
                        columnNumber: 25,
                      },
                    },
                    "Add a new pet and their type below"
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/TextField'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      autoFocus: true,
                      margin: "dense",
                      id: "name",
                      label: "Pet name",
                      fullWidth: true,
                      variant: "outlined",
                      onChange: function onChange(e) {
                        return setNewPet(e.target.value);
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 25,
                      },
                    }
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/TextField'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      margin: "dense",
                      id: "name",
                      label: "Pet Type",
                      fullWidth: true,
                      variant: "outlined",
                      onChange: function onChange(e) {
                        return setNewPetType(e.target.value);
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 25,
                      },
                    }
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogActions'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Button'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      onClick: function onClick() {
                        return setOpen(false);
                      },
                      color: "primary",
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                        columnNumber: 21,
                      },
                    },
                    "Cancel"
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Button'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      onClick: function onClick() {
                        return handleSubmit();
                      },
                      color: "primary",
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 21,
                      },
                    },
                    "Save"
                  )
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/IconButton'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  className: classes.addItemIcon,
                  color: "primary",
                  "aria-label": "Add new pet",
                  onClick: function onClick() {
                    return setOpen(true);
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/icons/AddCircle'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    style: {
                      color: "#005151",
                      fontSize: 30,
                    },
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 21,
                    },
                  }
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Paper'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  elevation: 3,
                  className: classes.widget,
                  square: false,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Typography'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    variant: "h5",
                    style: {
                      textAlign: "center",
                    },
                    gutterBottom: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 21,
                    },
                  },
                  "Pets"
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/List'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    dense: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 21,
                    },
                  },
                  pets.map(function (pet) {
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/ListItem'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        key: pet.id,
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 129,
                          columnNumber: 29,
                        },
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 130,
                            columnNumber: 33,
                          },
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          !(function webpackMissingModule() {
                            var e = new Error(
                              "Cannot find module '@material-ui/icons/HighlightOff'"
                            );
                            e.code = "MODULE_NOT_FOUND";
                            throw e;
                          })(),
                          {
                            style: {
                              size: 10,
                              color: "red",
                            },
                            onClick: function onClick() {
                              return handleDelete(pet.id);
                            },
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 130,
                              columnNumber: 39,
                            },
                          }
                        )
                      ),
                      "\xA0",
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        !(function webpackMissingModule() {
                          var e = new Error(
                            "Cannot find module '@material-ui/core/ListItemText'"
                          );
                          e.code = "MODULE_NOT_FOUND";
                          throw e;
                        })(),
                        {
                          primary: pet.name,
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 130,
                            columnNumber: 144,
                          },
                        }
                      )
                    );
                  })
                )
              )
            );
          }
        };

        /* harmony default export */ __webpack_exports__["default"] =
          DisplayAllEmployeePets;

        /***/
      },

    /***/ "./client/src/components/sports/DisplayAllEmployeeSports.js":
      /*!******************************************************************!*\
  !*** ./client/src/components/sports/DisplayAllEmployeeSports.js ***!
  \******************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _actions_SportActions__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../actions/SportActions */ "./client/src/actions/SportActions.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/List'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/ListItem'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/ListItemText'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Paper'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/IconButton'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/icons/AddCircle'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/Typography'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../util/ShowLoading */ "./client/src/util/ShowLoading.js"
          );
        /* harmony import */ var _util_ShowErrors__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../util/ShowErrors */ "./client/src/util/ShowErrors.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Dialog'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogActions'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogContent'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogContentText'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/DialogTitle'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/TextField'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Button'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/icons/HighlightOff'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/components/sports/DisplayAllEmployeeSports.js",
          _this = undefined;

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          var _i =
            arr &&
            ((typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
              arr["@@iterator"]);
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        var useStyles = !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })()(function (theme) {
          return {
            addItemIcon: {
              float: "right",
              bottom: "0px",
              left: 0,
            },
            widget: {
              padding: 15,
              borderRadius: 15,
            },
          };
        });

        var DisplayAllEmployeeSports = function DisplayAllEmployeeSports(
          props
        ) {
          var dispatch = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()();
          var classes = useStyles();
          var employee_id = props.employee_id;
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
            function () {
              dispatch(
                Object(
                  _actions_SportActions__WEBPACK_IMPORTED_MODULE_2__[
                    "fetchEmployeeSports"
                  ]
                )(employee_id)
              );
            },
            [dispatch, employee_id]
          );

          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(false),
            _useState2 = _slicedToArray(_useState, 2),
            open = _useState2[0],
            setOpen = _useState2[1];

          var _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(""),
            _useState4 = _slicedToArray(_useState3, 2),
            newSport = _useState4[0],
            setNewSport = _useState4[1];

          var _useState5 = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(""),
            _useState6 = _slicedToArray(_useState5, 2),
            newSportCity = _useState6[0],
            setNewSportCity = _useState6[1];

          var sports = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.sports.sports;
          });
          var loading = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.sports.loading;
          });
          var hasErrors = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.sports.hasErrors;
          });

          var handleSubmit = function handleSubmit() {
            var sportSubmit = {
              teamname: newSport,
              city: newSportCity,
              employee_id: employee_id,
            };
            dispatch(
              Object(
                _actions_SportActions__WEBPACK_IMPORTED_MODULE_2__[
                  "fetchPostNewSport"
                ]
              )(sportSubmit)
            );
            setOpen(false);
          };

          var handleDelete = function handleDelete(sport_id) {
            if (window.confirm("Are you sure?")) {
              dispatch(
                Object(
                  _actions_SportActions__WEBPACK_IMPORTED_MODULE_2__[
                    "fetchDeleteSport"
                  ]
                )(employee_id, sport_id)
              );
            }
          };

          if (loading) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _util_ShowLoading__WEBPACK_IMPORTED_MODULE_3__["default"],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 13,
                },
              }
            );
          } else if (hasErrors) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _util_ShowErrors__WEBPACK_IMPORTED_MODULE_4__["default"],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 13,
                },
              }
            );
          } else if (sports) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Dialog'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  open: open,
                  onClose: function onClose() {
                    return setOpen(false);
                  },
                  "aria-labelledby": "form-dialog-title",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogTitle'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    id: "form-dialog-title",
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 21,
                    },
                  },
                  "Add a new sports team and their city"
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogContent'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/DialogContentText'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85,
                        columnNumber: 25,
                      },
                    },
                    'Add a new city name and sports team below (Example: "New York Rangers")'
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/TextField'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      autoFocus: true,
                      margin: "dense",
                      id: "name",
                      label: "Sports team name",
                      fullWidth: true,
                      variant: "outlined",
                      onChange: function onChange(e) {
                        return setNewSport(e.target.value);
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 25,
                      },
                    }
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/TextField'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      margin: "dense",
                      id: "name",
                      label: "City",
                      fullWidth: true,
                      variant: "outlined",
                      onChange: function onChange(e) {
                        return setNewSportCity(e.target.value);
                      },
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 25,
                      },
                    }
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/DialogActions'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 21,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Button'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      onClick: function onClick() {
                        return setOpen(false);
                      },
                      color: "primary",
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                        columnNumber: 21,
                      },
                    },
                    "Cancel"
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Button'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      onClick: function onClick() {
                        return handleSubmit();
                      },
                      color: "primary",
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 21,
                      },
                    },
                    "Save"
                  )
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/IconButton'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  className: classes.addItemIcon,
                  color: "primary",
                  "aria-label": "Add new pet",
                  onClick: function onClick() {
                    return setOpen(true);
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/icons/AddCircle'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    style: {
                      color: "#005151",
                      fontSize: 30,
                    },
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 21,
                    },
                  }
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Paper'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  elevation: 3,
                  className: classes.widget,
                  square: false,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Typography'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    variant: "h5",
                    style: {
                      textAlign: "center",
                    },
                    gutterBottom: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 21,
                    },
                  },
                  "Favorite Teams"
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/List'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    dense: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 21,
                    },
                  },
                  sports.map(function (sport) {
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@material-ui/core/ListItem'"
                        );
                        e.code = "MODULE_NOT_FOUND";
                        throw e;
                      })(),
                      {
                        key: sport.id,
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 129,
                          columnNumber: 29,
                        },
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 130,
                            columnNumber: 33,
                          },
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          !(function webpackMissingModule() {
                            var e = new Error(
                              "Cannot find module '@material-ui/icons/HighlightOff'"
                            );
                            e.code = "MODULE_NOT_FOUND";
                            throw e;
                          })(),
                          {
                            style: {
                              size: 10,
                              color: "red",
                            },
                            onClick: function onClick() {
                              return handleDelete(sport.id);
                            },
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 130,
                              columnNumber: 39,
                            },
                          }
                        )
                      ),
                      "\xA0",
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        !(function webpackMissingModule() {
                          var e = new Error(
                            "Cannot find module '@material-ui/core/ListItemText'"
                          );
                          e.code = "MODULE_NOT_FOUND";
                          throw e;
                        })(),
                        {
                          primary: ""
                            .concat(sport.city, " ")
                            .concat(sport.teamname),
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 130,
                            columnNumber: 146,
                          },
                        }
                      )
                    );
                  })
                )
              )
            );
          }
        };

        /* harmony default export */ __webpack_exports__["default"] =
          DisplayAllEmployeeSports;

        /***/
      },

    /***/ "./client/src/hooks/useCheckDate.js":
      /*!******************************************!*\
  !*** ./client/src/hooks/useCheckDate.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        //custom hook that takes in a date and determines how many minutes have gone by and returns t/f if it's more than 4 days
        var useCheckDate = function useCheckDate(date) {
          var currentDate = new Date();
          var previousDate = new Date(date);
          var minutesSinceLastInteraction = Math.round(
            (currentDate - previousDate) / 1000 / 60
          );
          return minutesSinceLastInteraction > 5760 ? true : false;
        };

        /* harmony default export */ __webpack_exports__["default"] =
          useCheckDate;

        /***/
      },

    /***/ "./client/src/hooks/useFormatDate.js":
      /*!*******************************************!*\
  !*** ./client/src/hooks/useFormatDate.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var useFormatDate = function useFormatDate(date) {
          var rawDate = new Date(date);
          var month = rawDate.getMonth() + 1;
          var day = rawDate.getDate();
          var year = rawDate.getFullYear();
          return "".concat(month, "/").concat(day, "/").concat(year);
        };

        /* harmony default export */ __webpack_exports__["default"] =
          useFormatDate;

        /***/
      },

    /***/ "./client/src/navigation/TopNav.js":
      /*!*****************************************!*\
  !*** ./client/src/navigation/TopNav.js ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return TopNav;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/AppBar'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Badge'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/icons/Notifications'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Toolbar'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/Typography'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Button'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/IconButton'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/icons/Menu'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Modal'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Backdrop'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Fade'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-router-dom'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _actions_AlertActions__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../actions/AlertActions */ "./client/src/actions/AlertActions.js"
          );
        var _jsxFileName =
          "/home/user/development/react/interests/backend/client/src/navigation/TopNav.js";

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          var _i =
            arr &&
            ((typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
              arr["@@iterator"]);
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        var useStyles = !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })()(function (theme) {
          return {
            root: {
              flexGrow: 1,
            },
            modal: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            menuButton: {
              marginRight: theme.spacing(2),
            },
            paper: {
              backgroundColor: theme.palette.background.paper,
              border: "2px solid #000",
              boxShadow: theme.shadows[5],
              padding: theme.spacing(2, 4, 3),
            },
            title: {
              flexGrow: 1,
            },
          };
        });
        function TopNav() {
          var _this = this;

          var classes = useStyles();
          var dispatch = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()();
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
            function () {
              dispatch(
                _actions_AlertActions__WEBPACK_IMPORTED_MODULE_2__[
                  "fetchEmployeeAlerts"
                ]
              );
            },
            [dispatch]
          );
          var alerts = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.alerts.alerts;
          });

          var _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(false),
            _useState2 = _slicedToArray(_useState, 2),
            open = _useState2[0],
            setOpen = _useState2[1];

          var alertIcon;

          if (Object.keys(alerts).length) {
            alertIcon =
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Badge'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  badgeContent: alerts.overdue_alerts.length,
                  color: "secondary",
                  onClick: function onClick() {
                    return setOpen(true);
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 7,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/icons/Notifications'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 9,
                    },
                  }
                )
              );
          }

          var modal;

          if (Object.keys(alerts).length) {
            modal =
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Modal'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  "aria-labelledby": "transition-modal-title",
                  "aria-describedby": "transition-modal-description",
                  className: classes.modal,
                  open: open,
                  onClose: function onClose() {
                    return setOpen(false);
                  },
                  closeAfterTransition: true,
                  BackdropComponent: !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Backdrop'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  BackdropProps: {
                    timeout: 500,
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 7,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Fade'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    in: open,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 9,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      className: classes.paper,
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81,
                        columnNumber: 11,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "h2",
                      {
                        id: "transition-modal-title",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 82,
                          columnNumber: 13,
                        },
                      },
                      "Active alerts"
                    ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "p",
                      {
                        id: "transition-modal-description",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 83,
                          columnNumber: 13,
                        },
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "strong",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83,
                            columnNumber: 50,
                          },
                        },
                        "Try to interact with the following employees:"
                      )
                    ),
                    alerts.overdue_alerts.map(function (employee) {
                      return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                          key: employee.id,
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85,
                            columnNumber: 15,
                          },
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          !(function webpackMissingModule() {
                            var e = new Error(
                              "Cannot find module 'react-router-dom'"
                            );
                            e.code = "MODULE_NOT_FOUND";
                            throw e;
                          })(),
                          {
                            to: "/employees/".concat(employee.id),
                            onClick: function onClick() {
                              return setOpen(false);
                            },
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 85,
                              columnNumber: 39,
                            },
                          },
                          employee.name
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "br",
                          {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 85,
                              columnNumber: 131,
                            },
                          }
                        )
                      );
                    }),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "p",
                      {
                        id: "transition-modal-description",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 87,
                          columnNumber: 13,
                        },
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "strong",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 87,
                            columnNumber: 50,
                          },
                        },
                        "Today's birthdays:"
                      )
                    ),
                    alerts.todays_birthdays.length
                      ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                          null,
                          alerts.todays_birthdays.map(function (employee) {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "span",
                              {
                                __self: _this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 91,
                                  columnNumber: 19,
                                },
                              },
                              employee.name
                            );
                          })
                        )
                      : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "span",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 95,
                              columnNumber: 15,
                            },
                          },
                          "No birthdays today"
                        ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "p",
                      {
                        id: "transition-modal-description",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 97,
                          columnNumber: 13,
                        },
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "strong",
                        {
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 97,
                            columnNumber: 50,
                          },
                        },
                        "Upcoming birthdays:"
                      )
                    ),
                    alerts.upcoming_birthdays.length
                      ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                          null,
                          alerts.upcoming_birthdays.map(function (employee) {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "span",
                              {
                                key: employee.id,
                                __self: _this,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 101,
                                  columnNumber: 19,
                                },
                              },
                              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                !(function webpackMissingModule() {
                                  var e = new Error(
                                    "Cannot find module 'react-router-dom'"
                                  );
                                  e.code = "MODULE_NOT_FOUND";
                                  throw e;
                                })(),
                                {
                                  to: "/employees/".concat(employee.id),
                                  onClick: function onClick() {
                                    return setOpen(false);
                                  },
                                  __self: _this,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 101,
                                    columnNumber: 43,
                                  },
                                },
                                employee.name
                              )
                            );
                          })
                        )
                      : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "span",
                          {
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 105,
                              columnNumber: 15,
                            },
                          },
                          "No upcoming birthdays"
                        )
                  )
                )
              );
          }

          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              className: classes.root,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 5,
              },
            },
            modal,
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@material-ui/core/AppBar'"
                );
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })(),
              {
                position: "static",
                style: {
                  background: "#005151",
                },
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 7,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Toolbar'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 9,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/IconButton'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    edge: "start",
                    className: classes.menuButton,
                    color: "inherit",
                    "aria-label": "menu",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 11,
                    },
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/icons/Menu'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121,
                        columnNumber: 13,
                      },
                    }
                  )
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Typography'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    variant: "h6",
                    className: classes.title,
                    component: !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module 'react-router-dom'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    to: "/employees",
                    style: {
                      color: "white",
                      textDecoration: "none",
                    },
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 11,
                    },
                  },
                  "Realationships"
                ),
                alertIcon,
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/core/Button'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    color: "inherit",
                    style: {
                      paddingLeft: 20,
                    },
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 11,
                    },
                  },
                  "Login"
                )
              )
            )
          );
        }

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

    /***/ "./client/src/reducers/EmployeesReducer.js":
      /*!*************************************************!*\
  !*** ./client/src/reducers/EmployeesReducer.js ***!
  \*************************************************/
      /*! exports provided: initialEmployeesState, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initialEmployeesState",
          function () {
            return initialEmployeesState;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return employeesReducer;
          }
        );
        /* harmony import */ var _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../actions/EmployeeActions */ "./client/src/actions/EmployeeActions.js"
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

        var initialEmployeesState = {
          employees: [],
          employee: {},
          loading: false,
          hasErrors: false,
        };
        function employeesReducer() {
          var state =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : initialEmployeesState;
          var action = arguments.length > 1 ? arguments[1] : undefined;

          switch (action.type) {
            case _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_EMPLOYEES"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: true,
                }
              );

            case _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_EMPLOYEES_SUCCESS"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  employees: action.payload,
                }
              );

            case _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_EMPLOYEES_FAILURE"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  hasErrors: true,
                }
              );

            case _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_ONE_EMPLOYEE"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: true,
                }
              );

            case _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_ONE_EMPLOYEE_SUCCESS"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  employee: action.payload,
                }
              );

            case _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_ONE_EMPLOYEE_FAILURE"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  hasErrors: true,
                }
              );

            case _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_0__[
              "EMPLOYEE_CREATED_SUCCESS"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  employee: action.payload,
                }
              );

            case _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_0__[
              "EMPLOYEE_CREATED_FAILURE"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  hasErrors: true,
                }
              );

            case _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_0__[
              "UPDATE_EMPLOYEE_SUCCESS"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  employee: action.payload,
                }
              );

            case _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_0__[
              "UPDATE_EMPLOYEE_FAILURE"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  hasErrors: true,
                }
              );

            case _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_0__[
              "EMPLOYEE_DELETED_SUCCESS"
            ]:
              return {
                employees: state.employees.filter(function (employee) {
                  return employee.name !== action.payload.name;
                }),
              };

            default:
              return state;
          }
        }

        /***/
      },

    /***/ "./client/src/reducers/Index.js":
      /*!**************************************!*\
  !*** ./client/src/reducers/Index.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _AlertsReducer__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./AlertsReducer */ "./client/src/reducers/AlertsReducer.js"
          );
        /* harmony import */ var _EmployeesReducer__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./EmployeesReducer */ "./client/src/reducers/EmployeesReducer.js"
          );
        /* harmony import */ var _InteractionsReducer__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./InteractionsReducer */ "./client/src/reducers/InteractionsReducer.js"
          );
        /* harmony import */ var _InterestsReducer__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./InterestsReducer */ "./client/src/reducers/InterestsReducer.js"
          );
        /* harmony import */ var _NewsfeedsReducer__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./NewsfeedsReducer */ "./client/src/reducers/NewsfeedsReducer.js"
          );
        /* harmony import */ var _PetsReducer__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./PetsReducer */ "./client/src/reducers/PetsReducer.js"
          );
        /* harmony import */ var _SportsReducer__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./SportsReducer */ "./client/src/reducers/SportsReducer.js"
          );
        /* harmony import */ var _NotesReducer__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./NotesReducer */ "./client/src/reducers/NotesReducer.js"
          );

        var rootReducer = !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })()({
          alerts: _AlertsReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
          employees: _EmployeesReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
          interactions:
            _InteractionsReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
          interests: _InterestsReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
          newsfeeds: _NewsfeedsReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
          pets: _PetsReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
          sports: _SportsReducer__WEBPACK_IMPORTED_MODULE_7__["default"],
          notes: _NotesReducer__WEBPACK_IMPORTED_MODULE_8__["default"],
        });
        /* harmony default export */ __webpack_exports__["default"] =
          rootReducer;

        /***/
      },

    /***/ "./client/src/reducers/InteractionsReducer.js":
      /*!****************************************************!*\
  !*** ./client/src/reducers/InteractionsReducer.js ***!
  \****************************************************/
      /*! exports provided: initialInteractionsState, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initialInteractionsState",
          function () {
            return initialInteractionsState;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return interactionsReducer;
          }
        );
        /* harmony import */ var _actions_InteractionActions__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../actions/InteractionActions */ "./client/src/actions/InteractionActions.js"
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

        var initialInteractionsState = {
          interactions: [],
          loading: false,
          hasErrors: false,
        };
        function interactionsReducer() {
          var state =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : initialInteractionsState;
          var action = arguments.length > 1 ? arguments[1] : undefined;

          switch (action.type) {
            case _actions_InteractionActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_INTERACTIONS"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: true,
                }
              );

            case _actions_InteractionActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_INTERACTIONS_SUCCESS"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  interactions: action.payload,
                }
              );

            case _actions_InteractionActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_INTERACTIONS_FAILURE"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  hasErrors: true,
                }
              );

            case _actions_InteractionActions__WEBPACK_IMPORTED_MODULE_0__[
              "INTERACTION_DELETED_SUCCESS"
            ]:
              return {
                interactions: state.interactions.filter(function (interaction) {
                  return interaction.id !== action.payload.id;
                }),
              };

            default:
              return state;
          }
        }

        /***/
      },

    /***/ "./client/src/reducers/InterestsReducer.js":
      /*!*************************************************!*\
  !*** ./client/src/reducers/InterestsReducer.js ***!
  \*************************************************/
      /*! exports provided: initialInterestsState, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initialInterestsState",
          function () {
            return initialInterestsState;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return interestsReducer;
          }
        );
        /* harmony import */ var _actions_InterestActions__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../actions/InterestActions */ "./client/src/actions/InterestActions.js"
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

        var initialInterestsState = {
          interests: [],
          loading: false,
          hasErrors: false,
        };
        function interestsReducer() {
          var state =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : initialInterestsState;
          var action = arguments.length > 1 ? arguments[1] : undefined;

          switch (action.type) {
            case _actions_InterestActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_INTERESTS"
            ]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: true,
                }
              );
            }

            case _actions_InterestActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_INTERESTS_SUCCESS"
            ]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  interests: action.payload,
                }
              );
            }

            case _actions_InterestActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_INTERESTS_FAILURE"
            ]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  hasErrors: true,
                }
              );
            }

            case _actions_InterestActions__WEBPACK_IMPORTED_MODULE_0__[
              "CREATE_INTEREST_SUCCESS"
            ]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  interests: state.interests.concat(action.payload),
                }
              );
            }

            case _actions_InterestActions__WEBPACK_IMPORTED_MODULE_0__[
              "CREATE_INTEREST_FAILURE"
            ]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  hasErrors: true,
                }
              );
            }

            case _actions_InterestActions__WEBPACK_IMPORTED_MODULE_0__[
              "INTEREST_DELETED_SUCCESS"
            ]: {
              return {
                interests: state.interests.filter(function (interest) {
                  return interest.name !== action.payload.name;
                }),
              };
            }

            default:
              return state;
          }
        }

        /***/
      },

    /***/ "./client/src/reducers/NewsfeedsReducer.js":
      /*!*************************************************!*\
  !*** ./client/src/reducers/NewsfeedsReducer.js ***!
  \*************************************************/
      /*! exports provided: initialNewsfeedState, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initialNewsfeedState",
          function () {
            return initialNewsfeedState;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return newsfeedReducer;
          }
        );
        /* harmony import */ var _actions_NewsfeedActions__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../actions/NewsfeedActions */ "./client/src/actions/NewsfeedActions.js"
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

        var initialNewsfeedState = {
          news: [],
          loading: false,
          hasErrors: false,
        };
        function newsfeedReducer() {
          var state =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : initialNewsfeedState;
          var action = arguments.length > 1 ? arguments[1] : undefined;

          switch (action.type) {
            case _actions_NewsfeedActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_NEWSFEED"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: true,
                }
              );

            case _actions_NewsfeedActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_NEWSFEED_SUCCESS"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  news: action.payload,
                }
              );

            case _actions_NewsfeedActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_NEWSFEED_FAILURE"
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

    /***/ "./client/src/reducers/NotesReducer.js":
      /*!*********************************************!*\
  !*** ./client/src/reducers/NotesReducer.js ***!
  \*********************************************/
      /*! exports provided: initialNotesState, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initialNotesState",
          function () {
            return initialNotesState;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return notesReducer;
          }
        );
        /* harmony import */ var _actions_NoteActions__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../actions/NoteActions */ "./client/src/actions/NoteActions.js"
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

        var initialNotesState = {
          notes: [],
          note: {},
          loading: false,
          hasErrors: false,
        };
        function notesReducer() {
          var state =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : initialNotesState;
          var action = arguments.length > 1 ? arguments[1] : undefined;

          switch (action.type) {
            case _actions_NoteActions__WEBPACK_IMPORTED_MODULE_0__["GET_NOTES"]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: true,
                }
              );

            case _actions_NoteActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_NOTES_SUCCESS"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  notes: action.payload,
                }
              );

            case _actions_NoteActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_NOTES_FAILURE"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  hasErrors: true,
                }
              );

            case _actions_NoteActions__WEBPACK_IMPORTED_MODULE_0__[
              "NOTE_CREATED_SUCCESS"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  notes: state.notes.concat(action.payload),
                  hasErrors: false,
                }
              );

            case _actions_NoteActions__WEBPACK_IMPORTED_MODULE_0__[
              "NOTE_CREATED_FAILURE"
            ]:
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  hasErrors: true,
                }
              );

            case _actions_NoteActions__WEBPACK_IMPORTED_MODULE_0__[
              "NOTE_DELETED_SUCCESS"
            ]:
              return {
                notes: state.notes.filter(function (note) {
                  return note.id !== action.payload.id;
                }),
              };

            default:
              return state;
          }
        }

        /***/
      },

    /***/ "./client/src/reducers/PetsReducer.js":
      /*!********************************************!*\
  !*** ./client/src/reducers/PetsReducer.js ***!
  \********************************************/
      /*! exports provided: initialInterestsState, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initialInterestsState",
          function () {
            return initialInterestsState;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return petssReducer;
          }
        );
        /* harmony import */ var _actions_PetActions__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../actions/PetActions */ "./client/src/actions/PetActions.js"
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

        var initialInterestsState = {
          pets: [],
          loading: false,
          hasErrors: false,
        };
        function petssReducer() {
          var state =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : initialInterestsState;
          var action = arguments.length > 1 ? arguments[1] : undefined;

          switch (action.type) {
            case _actions_PetActions__WEBPACK_IMPORTED_MODULE_0__["GET_PETS"]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: true,
                }
              );
            }

            case _actions_PetActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_PETS_SUCCESS"
            ]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  pets: action.payload,
                }
              );
            }

            case _actions_PetActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_PETS_FAILURE"
            ]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  hasErrors: true,
                }
              );
            }

            case _actions_PetActions__WEBPACK_IMPORTED_MODULE_0__[
              "PET_CREATED_SUCCESS"
            ]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  pets: state.pets.concat(action.payload),
                }
              );
            }

            case _actions_PetActions__WEBPACK_IMPORTED_MODULE_0__[
              "PET_CREATED_FAILURE"
            ]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  hasErrors: true,
                }
              );
            }

            case _actions_PetActions__WEBPACK_IMPORTED_MODULE_0__[
              "PET_DELETED_SUCCESS"
            ]: {
              return {
                pets: state.pets.filter(function (pet) {
                  return pet.name !== action.payload.name;
                }),
              };
            }

            default:
              return state;
          }
        }

        /***/
      },

    /***/ "./client/src/reducers/SportsReducer.js":
      /*!**********************************************!*\
  !*** ./client/src/reducers/SportsReducer.js ***!
  \**********************************************/
      /*! exports provided: initialInterestsState, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initialInterestsState",
          function () {
            return initialInterestsState;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return sportsReducer;
          }
        );
        /* harmony import */ var _actions_SportActions__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../actions/SportActions */ "./client/src/actions/SportActions.js"
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

        var initialInterestsState = {
          sports: [],
          loading: false,
          hasErrors: false,
        };
        function sportsReducer() {
          var state =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : initialInterestsState;
          var action = arguments.length > 1 ? arguments[1] : undefined;

          switch (action.type) {
            case _actions_SportActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_SPORTS"
            ]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: true,
                }
              );
            }

            case _actions_SportActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_SPORTS_SUCCESS"
            ]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  sports: action.payload,
                }
              );
            }

            case _actions_SportActions__WEBPACK_IMPORTED_MODULE_0__[
              "GET_SPORTS_FAILURE"
            ]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  hasErrors: true,
                }
              );
            }

            case _actions_SportActions__WEBPACK_IMPORTED_MODULE_0__[
              "SPORT_CREATED_SUCCESS"
            ]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  sports: state.sports.concat(action.payload),
                }
              );
            }

            case _actions_SportActions__WEBPACK_IMPORTED_MODULE_0__[
              "SPORT_CREATED_FAILURE"
            ]: {
              return _objectSpread(
                _objectSpread({}, state),
                {},
                {
                  loading: false,
                  hasErrors: true,
                }
              );
            }

            case _actions_SportActions__WEBPACK_IMPORTED_MODULE_0__[
              "SPORT_DELETED_SUCCESS"
            ]: {
              return {
                sports: state.sports.filter(function (sport) {
                  return sport.teamname !== action.payload.teamname;
                }),
              };
            }

            default:
              return state;
          }
        }

        /***/
      },

    /***/ "./client/src/routes/Index.js":
      /*!************************************!*\
  !*** ./client/src/routes/Index.js ***!
  \************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-router-dom'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _static_Home__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../static/Home */ "./client/src/static/Home.js"
          );
        /* harmony import */ var _static_EmployeeList__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../static/EmployeeList */ "./client/src/static/EmployeeList.js"
          );
        /* harmony import */ var _components_employees_EmployeeDetails__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../components/employees/EmployeeDetails */ "./client/src/components/employees/EmployeeDetails.js"
          );
        /* harmony import */ var _navigation_TopNav__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../navigation/TopNav */ "./client/src/navigation/TopNav.js"
          );
        /* harmony import */ var _components_employees_CreateEmployee__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../components/employees/CreateEmployee */ "./client/src/components/employees/CreateEmployee.js"
          );
        /* harmony import */ var _components_employees_EditEmployee__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../components/employees/EditEmployee */ "./client/src/components/employees/EditEmployee.js"
          );
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/routes/Index.js",
          _this = undefined;

        var Routes = function Routes() {
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            !(function webpackMissingModule() {
              var e = new Error("Cannot find module 'react-router-dom'");
              e.code = "MODULE_NOT_FOUND";
              throw e;
            })(),
            {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 9,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _navigation_TopNav__WEBPACK_IMPORTED_MODULE_5__["default"],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 13,
                },
              }
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              !(function webpackMissingModule() {
                var e = new Error("Cannot find module 'react-router-dom'");
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })(),
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 13,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error("Cannot find module 'react-router-dom'");
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  exact: true,
                  path: "/",
                  component:
                    _static_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16,
                    columnNumber: 17,
                  },
                }
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error("Cannot find module 'react-router-dom'");
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  exact: true,
                  path: "/employees",
                  component:
                    _static_EmployeeList__WEBPACK_IMPORTED_MODULE_3__[
                      "default"
                    ],
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17,
                    columnNumber: 17,
                  },
                }
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error("Cannot find module 'react-router-dom'");
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  exact: true,
                  path: "/employees/new",
                  component:
                    _components_employees_CreateEmployee__WEBPACK_IMPORTED_MODULE_6__[
                      "default"
                    ],
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 17,
                  },
                }
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error("Cannot find module 'react-router-dom'");
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  exact: true,
                  path: "/employees/:employee_id",
                  component:
                    _components_employees_EmployeeDetails__WEBPACK_IMPORTED_MODULE_4__[
                      "default"
                    ],
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 17,
                  },
                }
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error("Cannot find module 'react-router-dom'");
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  exact: true,
                  path: "/employees/:employee_id/edit",
                  component:
                    _components_employees_EditEmployee__WEBPACK_IMPORTED_MODULE_7__[
                      "default"
                    ],
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 17,
                  },
                }
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Routes;

        /***/
      },

    /***/ "./client/src/static/EmployeeList.js":
      /*!*******************************************!*\
  !*** ./client/src/static/EmployeeList.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-redux'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../actions/EmployeeActions */ "./client/src/actions/EmployeeActions.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Grid'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _components_employees_EmployeeCard__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../components/employees/EmployeeCard */ "./client/src/components/employees/EmployeeCard.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/IconButton'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/icons/AddCircle'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-router-dom'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _util_ShowLoading__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../util/ShowLoading */ "./client/src/util/ShowLoading.js"
          );
        /* harmony import */ var _util_ShowErrors__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../util/ShowErrors */ "./client/src/util/ShowErrors.js"
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Container'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        /* harmony import */ var _components_dashboard_EmployeeDashboard__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../components/dashboard/EmployeeDashboard */ "./client/src/components/dashboard/EmployeeDashboard.js"
          );
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/static/EmployeeList.js",
          _this = undefined;

        var useStyles = !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })()(function (theme) {
          return {
            floatingButton: {
              position: "fixed",
              bottom: 0,
              right: 0,
            },
          };
        });

        var EmployeeList = function EmployeeList() {
          var dispatch = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()();
          var classes = useStyles();
          var loading = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.employees.loading;
          });
          var hasErrors = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.employees.hasErrors;
          });
          var employees = !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'react-redux'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })()(function (state) {
            return state.employees.employees;
          });
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
            function () {
              dispatch(
                Object(
                  _actions_EmployeeActions__WEBPACK_IMPORTED_MODULE_2__[
                    "fetchAllEmployees"
                  ]
                )()
              );
            },
            [dispatch]
          );

          if (loading) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _util_ShowLoading__WEBPACK_IMPORTED_MODULE_4__["default"],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 17,
                  },
                }
              )
            );
          } else if (hasErrors) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _util_ShowErrors__WEBPACK_IMPORTED_MODULE_5__["default"],
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 17,
                  },
                }
              )
            );
          } else if (employees) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@material-ui/core/Container'"
                );
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })(),
              {
                maxWidth: "lg",
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 13,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/IconButton'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  className: classes.floatingButton,
                  color: "primary",
                  "aria-label": "Add Employuee",
                  component: !(function webpackMissingModule() {
                    var e = new Error("Cannot find module 'react-router-dom'");
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  to: "/employees/new",
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@material-ui/icons/AddCircle'"
                    );
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                  })(),
                  {
                    style: {
                      color: "#005151",
                      fontSize: 60,
                    },
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 21,
                    },
                  }
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Grid'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  container: true,
                  spacing: 3,
                  style: {
                    marginTop: 30,
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 17,
                  },
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_dashboard_EmployeeDashboard__WEBPACK_IMPORTED_MODULE_6__[
                    "default"
                  ],
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 21,
                    },
                  }
                )
              ),
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@material-ui/core/Grid'"
                  );
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                {
                  container: true,
                  spacing: 3,
                  style: {
                    marginTop: 30,
                  },
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 17,
                  },
                },
                employees.map(function (employee) {
                  return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    !(function webpackMissingModule() {
                      var e = new Error(
                        "Cannot find module '@material-ui/core/Grid'"
                      );
                      e.code = "MODULE_NOT_FOUND";
                      throw e;
                    })(),
                    {
                      item: true,
                      xs: 12,
                      sm: 6,
                      key: employee.id,
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68,
                        columnNumber: 25,
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_employees_EmployeeCard__WEBPACK_IMPORTED_MODULE_3__[
                        "default"
                      ],
                      {
                        employee: employee,
                        key: employee.id,
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 69,
                          columnNumber: 29,
                        },
                      }
                    )
                  );
                })
              )
            );
          }
        };

        /* harmony default export */ __webpack_exports__["default"] =
          EmployeeList;

        /***/
      },

    /***/ "./client/src/static/Home.js":
      /*!***********************************!*\
  !*** ./client/src/static/Home.js ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Button'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/Container'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/Typography'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module 'react-router-dom'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/static/Home.js",
          _this = undefined;

        var useStyles = !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })()(function (theme) {
          return {
            introContainer: {
              top: "50%",
              left: "50%",
              marginTop: 150,
              textAlign: "center",
            },
          };
        });

        var Home = function Home() {
          var classes = useStyles();
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@material-ui/core/Container'"
              );
              e.code = "MODULE_NOT_FOUND";
              throw e;
            })(),
            {
              className: classes.introContainer,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 9,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@material-ui/core/Typography'"
                );
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })(),
              {
                variant: "h2",
                gutterBottom: true,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 13,
                },
              },
              "We help managers build real relationships with their employees."
            ),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@material-ui/core/Button'"
                );
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })(),
              {
                component: !(function webpackMissingModule() {
                  var e = new Error("Cannot find module 'react-router-dom'");
                  e.code = "MODULE_NOT_FOUND";
                  throw e;
                })(),
                to: "/employees",
                variant: "contained",
                style: {
                  background: "#005151",
                  color: "#FFFFFF",
                },
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 13,
                },
              },
              "Start building relationships"
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Home;

        /***/
      },

    /***/ "./client/src/util/ShowErrors.js":
      /*!***************************************!*\
  !*** ./client/src/util/ShowErrors.js ***!
  \***************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/icons/ReportProblem'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/util/ShowErrors.js",
          _this = undefined;

        var useStyles = !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })()({
          uiErrors: {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            padding: 10,
            margin: 10,
          },
        });

        var ShowErrors = function ShowErrors(errors) {
          var classes = useStyles();
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              className: classes.root,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 9,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@material-ui/icons/ReportProblem'"
                );
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })(),
              {
                size: 150,
                className: classes.uiErrors,
                style: {
                  color: "red",
                },
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 13,
                },
              }
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] =
          ShowErrors;

        /***/
      },

    /***/ "./client/src/util/ShowLoading.js":
      /*!****************************************!*\
  !*** ./client/src/util/ShowLoading.js ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "../node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@material-ui/core/CircularProgress'"
          );
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })();
        var _jsxFileName =
            "/home/user/development/react/interests/backend/client/src/util/ShowLoading.js",
          _this = undefined;

        var useStyles = !(function webpackMissingModule() {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        })()({
          uiProgess: {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            padding: 10,
            margin: 10,
          },
        });

        var ShowLoading = function ShowLoading() {
          var classes = useStyles();
          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              className: classes.root,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 9,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@material-ui/core/CircularProgress'"
                );
                e.code = "MODULE_NOT_FOUND";
                throw e;
              })(),
              {
                size: 150,
                className: classes.uiProgess,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 13,
                },
              }
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] =
          ShowLoading;

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=App-a15b64a7644650bede70.js.map
