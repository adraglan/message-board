/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/route";
exports.ids = ["app/api/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=C%3A%5CUsers%5Calex%5CDesktop%5Cmessage-board%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Calex%5CDesktop%5Cmessage-board&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=C%3A%5CUsers%5Calex%5CDesktop%5Cmessage-board%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Calex%5CDesktop%5Cmessage-board&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_alex_Desktop_message_board_app_api_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/route.ts */ \"(rsc)/./app/api/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/route\",\n        pathname: \"/api\",\n        filename: \"route\",\n        bundlePath: \"app/api/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\alex\\\\Desktop\\\\message-board\\\\app\\\\api\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_alex_Desktop_message_board_app_api_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNhbGV4JTVDRGVza3RvcCU1Q21lc3NhZ2UtYm9hcmQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2FsZXglNUNEZXNrdG9wJTVDbWVzc2FnZS1ib2FyZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDVztBQUN4RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcYWxleFxcXFxEZXNrdG9wXFxcXG1lc3NhZ2UtYm9hcmRcXFxcYXBwXFxcXGFwaVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxhbGV4XFxcXERlc2t0b3BcXFxcbWVzc2FnZS1ib2FyZFxcXFxhcHBcXFxcYXBpXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=C%3A%5CUsers%5Calex%5CDesktop%5Cmessage-board%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Calex%5CDesktop%5Cmessage-board&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/route.ts":
/*!**************************!*\
  !*** ./app/api/route.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _data_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/messages */ \"(rsc)/./app/data/messages.js\");\n\n// $ curl -X POST http://localhost:3000/api \n// -H \"Content-Type: application/json\" \n// -d '{\"test\": \"This is a test string\"}'\nasync function POST(request) {\n    const message = await request.json();\n    return new Response(JSON.stringify({\n        message\n    }), {\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        status: 201\n    });\n}\n// $ curl -X GET http://localhost:3000/api \n// -H \"Content-Type: application/json\" \nasync function GET(request) {\n    return Response.json(_data_messages__WEBPACK_IMPORTED_MODULE_0__.messages);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUd6Qyw0Q0FBNEM7QUFDNUMsdUNBQXVDO0FBQ3ZDLHlDQUF5QztBQUNsQyxlQUFlQyxLQUFLQyxPQUFnQjtJQUN2QyxNQUFNQyxVQUFVLE1BQU1ELFFBQVFFLElBQUk7SUFDbEMsT0FBTyxJQUFJQyxTQUFTQyxLQUFLQyxTQUFTLENBQUM7UUFBRUo7SUFBUSxJQUFJO1FBQzdDSyxTQUFTO1lBQ0wsZ0JBQWdCO1FBQ3BCO1FBQ0FDLFFBQVE7SUFDWjtBQUNKO0FBRUEsMkNBQTJDO0FBQzNDLHVDQUF1QztBQUNoQyxlQUFlQyxJQUFJUixPQUFnQjtJQUN0QyxPQUFPRyxTQUFTRCxJQUFJLENBQUNKLG9EQUFRQTtBQUNqQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxhbGV4XFxEZXNrdG9wXFxtZXNzYWdlLWJvYXJkXFxhcHBcXGFwaVxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi4vZGF0YS9tZXNzYWdlcydcclxuXHJcblxyXG4vLyAkIGN1cmwgLVggUE9TVCBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpIFxyXG4vLyAtSCBcIkNvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblwiIFxyXG4vLyAtZCAne1widGVzdFwiOiBcIlRoaXMgaXMgYSB0ZXN0IHN0cmluZ1wifSdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZSB9KSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXR1czogMjAxLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vICQgY3VybCAtWCBHRVQgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaSBcclxuLy8gLUggXCJDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cIiBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XHJcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbihtZXNzYWdlcylcclxufSJdLCJuYW1lcyI6WyJtZXNzYWdlcyIsIlBPU1QiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImpzb24iLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwic3RhdHVzIiwiR0VUIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/data/messages.js":
/*!******************************!*\
  !*** ./app/data/messages.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   messages: () => (/* binding */ messages)\n/* harmony export */ });\nconst messages = [\n    {\n        \"username\": \"granson0\",\n        \"message\": \"Enterprise-wide optimal emulation\"\n    },\n    {\n        \"username\": \"dmorad1\",\n        \"message\": \"Expanded impactful forecast\"\n    },\n    {\n        \"username\": \"bcrozier2\",\n        \"message\": \"Monitored fresh-thinking matrices\"\n    },\n    {\n        \"username\": \"jbrodest3\",\n        \"message\": \"Ameliorated needs-based standardization\"\n    },\n    {\n        \"username\": \"epackwood4\",\n        \"message\": \"Organized hybrid system engine\"\n    },\n    {\n        \"username\": \"pthon5\",\n        \"message\": \"Open-architected bi-directional monitoring\"\n    },\n    {\n        \"username\": \"pmallinar6\",\n        \"message\": \"Operative optimizing database\"\n    },\n    {\n        \"username\": \"avegas7\",\n        \"message\": \"Public-key zero administration adapter\"\n    },\n    {\n        \"username\": \"tmckellen8\",\n        \"message\": \"Quality-focused stable core\"\n    },\n    {\n        \"username\": \"ffehner9\",\n        \"message\": \"Fully-configurable explicit knowledge base\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvZGF0YS9tZXNzYWdlcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsV0FBVztJQUFDO1FBQUMsWUFBVztRQUFXLFdBQVU7SUFBbUM7SUFDN0Y7UUFBQyxZQUFXO1FBQVUsV0FBVTtJQUE2QjtJQUM3RDtRQUFDLFlBQVc7UUFBWSxXQUFVO0lBQW1DO0lBQ3JFO1FBQUMsWUFBVztRQUFZLFdBQVU7SUFBeUM7SUFDM0U7UUFBQyxZQUFXO1FBQWEsV0FBVTtJQUFnQztJQUNuRTtRQUFDLFlBQVc7UUFBUyxXQUFVO0lBQTRDO0lBQzNFO1FBQUMsWUFBVztRQUFhLFdBQVU7SUFBK0I7SUFDbEU7UUFBQyxZQUFXO1FBQVUsV0FBVTtJQUF3QztJQUN4RTtRQUFDLFlBQVc7UUFBYSxXQUFVO0lBQTZCO0lBQ2hFO1FBQUMsWUFBVztRQUFXLFdBQVU7SUFBNEM7Q0FBRSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxhbGV4XFxEZXNrdG9wXFxtZXNzYWdlLWJvYXJkXFxhcHBcXGRhdGFcXG1lc3NhZ2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBtZXNzYWdlcyA9IFt7XCJ1c2VybmFtZVwiOlwiZ3JhbnNvbjBcIixcIm1lc3NhZ2VcIjpcIkVudGVycHJpc2Utd2lkZSBvcHRpbWFsIGVtdWxhdGlvblwifSxcbntcInVzZXJuYW1lXCI6XCJkbW9yYWQxXCIsXCJtZXNzYWdlXCI6XCJFeHBhbmRlZCBpbXBhY3RmdWwgZm9yZWNhc3RcIn0sXG57XCJ1c2VybmFtZVwiOlwiYmNyb3ppZXIyXCIsXCJtZXNzYWdlXCI6XCJNb25pdG9yZWQgZnJlc2gtdGhpbmtpbmcgbWF0cmljZXNcIn0sXG57XCJ1c2VybmFtZVwiOlwiamJyb2Rlc3QzXCIsXCJtZXNzYWdlXCI6XCJBbWVsaW9yYXRlZCBuZWVkcy1iYXNlZCBzdGFuZGFyZGl6YXRpb25cIn0sXG57XCJ1c2VybmFtZVwiOlwiZXBhY2t3b29kNFwiLFwibWVzc2FnZVwiOlwiT3JnYW5pemVkIGh5YnJpZCBzeXN0ZW0gZW5naW5lXCJ9LFxue1widXNlcm5hbWVcIjpcInB0aG9uNVwiLFwibWVzc2FnZVwiOlwiT3Blbi1hcmNoaXRlY3RlZCBiaS1kaXJlY3Rpb25hbCBtb25pdG9yaW5nXCJ9LFxue1widXNlcm5hbWVcIjpcInBtYWxsaW5hcjZcIixcIm1lc3NhZ2VcIjpcIk9wZXJhdGl2ZSBvcHRpbWl6aW5nIGRhdGFiYXNlXCJ9LFxue1widXNlcm5hbWVcIjpcImF2ZWdhczdcIixcIm1lc3NhZ2VcIjpcIlB1YmxpYy1rZXkgemVybyBhZG1pbmlzdHJhdGlvbiBhZGFwdGVyXCJ9LFxue1widXNlcm5hbWVcIjpcInRtY2tlbGxlbjhcIixcIm1lc3NhZ2VcIjpcIlF1YWxpdHktZm9jdXNlZCBzdGFibGUgY29yZVwifSxcbntcInVzZXJuYW1lXCI6XCJmZmVobmVyOVwiLFwibWVzc2FnZVwiOlwiRnVsbHktY29uZmlndXJhYmxlIGV4cGxpY2l0IGtub3dsZWRnZSBiYXNlXCJ9XSJdLCJuYW1lcyI6WyJtZXNzYWdlcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/data/messages.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=C%3A%5CUsers%5Calex%5CDesktop%5Cmessage-board%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Calex%5CDesktop%5Cmessage-board&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();