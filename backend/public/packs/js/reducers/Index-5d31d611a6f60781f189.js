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
    (__webpack_require__.s = "./client/src/reducers/Index.js")
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

    /******/
  }
);
//# sourceMappingURL=Index-5d31d611a6f60781f189.js.map
