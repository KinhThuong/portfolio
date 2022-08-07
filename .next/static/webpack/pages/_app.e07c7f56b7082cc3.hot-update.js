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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadGLTFModel\": function() { return /* binding */ loadGLTFModel; }\n/* harmony export */ });\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n\n\nfunction loadGLTFModel(scene, glbPath) {\n    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {\n        receiveShadow: true,\n        castShadow: true\n    };\n    var receiveShadow = options.receiveShadow, castShadow = options.castShadow;\n    return new Promise(function(resolve, reject) {\n        var loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader();\n        loader.load(gltfPath, function(gltf) {\n            var obj = gltf.scene;\n            obj.name = \"dog\";\n            obj.position.y = 0;\n            obj.position.x = 0;\n            obj.receiveShadow = receiveShadow;\n            obj.castShadow = castShadow;\n            scene.add(obj);\n            obj.traverse(function(child) {\n                if (child.isMesh) {\n                    child.castShadow = castShadow;\n                    child.receiveShadow = receiveShadow;\n                }\n            });\n            resolve(obj);\n        }, undefined, function(err) {\n            reject(err);\n        });\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL21vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFDO0FBQzhCO0FBRTVELFNBQVNFLGFBQWEsQ0FDekJDLEtBQUssRUFDTEMsT0FBTyxFQUVUO1FBREVDLE9BQU8sR0FBUEEsK0NBQW1ELGtCQUF6QztRQUFFQyxhQUFhLEVBQUUsSUFBSTtRQUFFQyxVQUFVLEVBQUUsSUFBSTtLQUFFO0lBRW5ELElBQVFELGFBQWEsR0FBaUJELE9BQU8sQ0FBckNDLGFBQWEsRUFBRUMsVUFBVSxHQUFLRixPQUFPLENBQXRCRSxVQUFVO0lBQ2pDLE9BQU8sSUFBSUMsT0FBTyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsTUFBTSxFQUFLO1FBQ3BDLElBQU1DLE1BQU0sR0FBRyxJQUFJViw2RUFBVSxFQUFFO1FBRS9CVSxNQUFNLENBQUNDLElBQUksQ0FDUEMsUUFBUSxFQUNSQyxTQUFBQSxJQUFJLEVBQUk7WUFDSixJQUFNQyxHQUFHLEdBQUdELElBQUksQ0FBQ1gsS0FBSztZQUN0QlksR0FBRyxDQUFDQyxJQUFJLEdBQUcsS0FBSztZQUNoQkQsR0FBRyxDQUFDRSxRQUFRLENBQUNDLENBQUMsR0FBRyxDQUFDO1lBQ2xCSCxHQUFHLENBQUNFLFFBQVEsQ0FBQ0UsQ0FBQyxHQUFHLENBQUM7WUFDbEJKLEdBQUcsQ0FBQ1QsYUFBYSxHQUFHQSxhQUFhO1lBQ2pDUyxHQUFHLENBQUNSLFVBQVUsR0FBR0EsVUFBVTtZQUMzQkosS0FBSyxDQUFDaUIsR0FBRyxDQUFDTCxHQUFHLENBQUM7WUFFZEEsR0FBRyxDQUFDTSxRQUFRLENBQUMsU0FBVUMsS0FBSyxFQUFFO2dCQUMxQixJQUFJQSxLQUFLLENBQUNDLE1BQU0sRUFBRTtvQkFDZEQsS0FBSyxDQUFDZixVQUFVLEdBQUdBLFVBQVU7b0JBQzdCZSxLQUFLLENBQUNoQixhQUFhLEdBQUdBLGFBQWE7aUJBQ3RDO2FBQ0osQ0FBQztZQUVGRyxPQUFPLENBQUNNLEdBQUcsQ0FBQztTQUNmLEVBQ0RTLFNBQVMsRUFDVCxTQUFVQyxHQUFHLEVBQUU7WUFDWGYsTUFBTSxDQUFDZSxHQUFHLENBQUM7U0FDZCxDQUNKO0tBQ0osQ0FBQztDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYnMvbW9kZWwuanM/Mjk3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RMb2FkZXIgfSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkR0xURk1vZGVsKFxyXG4gICAgc2NlbmUsXHJcbiAgICBnbGJQYXRoLFxyXG4gICAgb3B0aW9ucyA9IHsgcmVjZWl2ZVNoYWRvdzogdHJ1ZSwgY2FzdFNoYWRvdzogdHJ1ZSB9XHJcbikge1xyXG4gICAgY29uc3QgeyByZWNlaXZlU2hhZG93LCBjYXN0U2hhZG93IH0gPSBvcHRpb25zXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKClcclxuXHJcbiAgICAgICAgbG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIGdsdGZQYXRoLFxyXG4gICAgICAgICAgICBnbHRmID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IGdsdGYuc2NlbmVcclxuICAgICAgICAgICAgICAgIG9iai5uYW1lID0gJ2RvZydcclxuICAgICAgICAgICAgICAgIG9iai5wb3NpdGlvbi55ID0gMFxyXG4gICAgICAgICAgICAgICAgb2JqLnBvc2l0aW9uLnggPSAwXHJcbiAgICAgICAgICAgICAgICBvYmoucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3dcclxuICAgICAgICAgICAgICAgIG9iai5jYXN0U2hhZG93ID0gY2FzdFNoYWRvd1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuYWRkKG9iailcclxuXHJcbiAgICAgICAgICAgICAgICBvYmoudHJhdmVyc2UoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmlzTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvd1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShvYmopXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH0pXHJcbn0iXSwibmFtZXMiOlsiT2JqZWN0TG9hZGVyIiwiR0xURkxvYWRlciIsImxvYWRHTFRGTW9kZWwiLCJzY2VuZSIsImdsYlBhdGgiLCJvcHRpb25zIiwicmVjZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvYWRlciIsImxvYWQiLCJnbHRmUGF0aCIsImdsdGYiLCJvYmoiLCJuYW1lIiwicG9zaXRpb24iLCJ5IiwieCIsImFkZCIsInRyYXZlcnNlIiwiY2hpbGQiLCJpc01lc2giLCJ1bmRlZmluZWQiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/model.js\n"));

/***/ })

});