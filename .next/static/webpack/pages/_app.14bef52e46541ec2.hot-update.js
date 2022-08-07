"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./libs/model.js":
/*!***********************!*\
  !*** ./libs/model.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadGLTFModel\": function() { return /* binding */ loadGLTFModel; }\n/* harmony export */ });\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n\n\nfunction loadGLTFModel(scene, glbPath) {\n    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {\n        receiveShadow: true,\n        castShadow: true\n    };\n    var receiveShadow = options.receiveShadow, castShadow = options.castShadow;\n    return new Promise(function(resolve, reject) {\n        var loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader();\n        loader.load(glbPath, function(gltf) {\n            var obj = gltf.scene;\n            obj.name = \"dog\";\n            obj.position.y = 0;\n            obj.position.x = 0;\n            obj.receiveShadow = receiveShadow;\n            obj.castShadow = castShadow;\n            scene.add(obj);\n            obj.traverse(function(child) {\n                if (child.isMesh) {\n                    child.castShadow = castShadow;\n                    child.receiveShadow = receiveShadow;\n                }\n            });\n            resolve(obj);\n        }, undefined, function(err) {\n            reject(err);\n        });\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL21vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFDO0FBQzhCO0FBRTVELFNBQVNFLGFBQWEsQ0FDekJDLEtBQUssRUFDTEMsT0FBTyxFQUVUO1FBREVDLE9BQU8sR0FBUEEsK0NBQW1ELGtCQUF6QztRQUFFQyxhQUFhLEVBQUUsSUFBSTtRQUFFQyxVQUFVLEVBQUUsSUFBSTtLQUFFO0lBRW5ELElBQVFELGFBQWEsR0FBaUJELE9BQU8sQ0FBckNDLGFBQWEsRUFBRUMsVUFBVSxHQUFLRixPQUFPLENBQXRCRSxVQUFVO0lBQ2pDLE9BQU8sSUFBSUMsT0FBTyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsTUFBTSxFQUFLO1FBQ3BDLElBQU1DLE1BQU0sR0FBRyxJQUFJViw2RUFBVSxFQUFFO1FBRS9CVSxNQUFNLENBQUNDLElBQUksQ0FDUFIsT0FBTyxFQUNQUyxTQUFBQSxJQUFJLEVBQUk7WUFDSixJQUFNQyxHQUFHLEdBQUdELElBQUksQ0FBQ1YsS0FBSztZQUN0QlcsR0FBRyxDQUFDQyxJQUFJLEdBQUcsS0FBSztZQUNoQkQsR0FBRyxDQUFDRSxRQUFRLENBQUNDLENBQUMsR0FBRyxDQUFDO1lBQ2xCSCxHQUFHLENBQUNFLFFBQVEsQ0FBQ0UsQ0FBQyxHQUFHLENBQUM7WUFDbEJKLEdBQUcsQ0FBQ1IsYUFBYSxHQUFHQSxhQUFhO1lBQ2pDUSxHQUFHLENBQUNQLFVBQVUsR0FBR0EsVUFBVTtZQUMzQkosS0FBSyxDQUFDZ0IsR0FBRyxDQUFDTCxHQUFHLENBQUM7WUFFZEEsR0FBRyxDQUFDTSxRQUFRLENBQUMsU0FBVUMsS0FBSyxFQUFFO2dCQUMxQixJQUFJQSxLQUFLLENBQUNDLE1BQU0sRUFBRTtvQkFDZEQsS0FBSyxDQUFDZCxVQUFVLEdBQUdBLFVBQVU7b0JBQzdCYyxLQUFLLENBQUNmLGFBQWEsR0FBR0EsYUFBYTtpQkFDdEM7YUFDSixDQUFDO1lBRUZHLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDO1NBQ2YsRUFDRFMsU0FBUyxFQUNULFNBQVVDLEdBQUcsRUFBRTtZQUNYZCxNQUFNLENBQUNjLEdBQUcsQ0FBQztTQUNkLENBQ0o7S0FDSixDQUFDO0NBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy9tb2RlbC5qcz8yOTdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9iamVjdExvYWRlciB9IGZyb20gJ3RocmVlJztcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRHTFRGTW9kZWwoXHJcbiAgICBzY2VuZSxcclxuICAgIGdsYlBhdGgsXHJcbiAgICBvcHRpb25zID0geyByZWNlaXZlU2hhZG93OiB0cnVlLCBjYXN0U2hhZG93OiB0cnVlIH1cclxuKSB7XHJcbiAgICBjb25zdCB7IHJlY2VpdmVTaGFkb3csIGNhc3RTaGFkb3cgfSA9IG9wdGlvbnNcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKVxyXG5cclxuICAgICAgICBsb2FkZXIubG9hZChcclxuICAgICAgICAgICAgZ2xiUGF0aCxcclxuICAgICAgICAgICAgZ2x0ZiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBnbHRmLnNjZW5lXHJcbiAgICAgICAgICAgICAgICBvYmoubmFtZSA9ICdkb2cnXHJcbiAgICAgICAgICAgICAgICBvYmoucG9zaXRpb24ueSA9IDBcclxuICAgICAgICAgICAgICAgIG9iai5wb3NpdGlvbi54ID0gMFxyXG4gICAgICAgICAgICAgICAgb2JqLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93XHJcbiAgICAgICAgICAgICAgICBvYmouY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3dcclxuICAgICAgICAgICAgICAgIHNjZW5lLmFkZChvYmopXHJcblxyXG4gICAgICAgICAgICAgICAgb2JqLnRyYXZlcnNlKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5pc01lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3dcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUob2JqKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9KVxyXG59Il0sIm5hbWVzIjpbIk9iamVjdExvYWRlciIsIkdMVEZMb2FkZXIiLCJsb2FkR0xURk1vZGVsIiwic2NlbmUiLCJnbGJQYXRoIiwib3B0aW9ucyIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb2FkZXIiLCJsb2FkIiwiZ2x0ZiIsIm9iaiIsIm5hbWUiLCJwb3NpdGlvbiIsInkiLCJ4IiwiYWRkIiwidHJhdmVyc2UiLCJjaGlsZCIsImlzTWVzaCIsInVuZGVmaW5lZCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libs/model.js\n"));

/***/ })

});