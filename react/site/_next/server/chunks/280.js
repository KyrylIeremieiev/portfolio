"use strict";
exports.id = 280;
exports.ids = [280];
exports.modules = {

/***/ 3280:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_2__]);
three__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SpinningPlanet = ()=>{
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
        const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);
        const planetGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.SphereGeometry(1, 32, 32);
        // Change the planet's color to #4E31AA
        const planetMaterial = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({
            color: 0x4E31AA
        });
        const planet = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(planetGeometry, planetMaterial);
        scene.add(planet);
        const createRandomDots = ()=>{
            const dotGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.SphereGeometry(0.02, 16, 16);
            const dotMaterial = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({
                color: 0xffffff
            }); // Set dot color to white
            const dotCount = 100;
            for(let i = 0; i < dotCount; i++){
                const dot = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(dotGeometry, dotMaterial);
                const phi = Math.random() * Math.PI * 2;
                const theta = Math.random() * Math.PI;
                const radius = 1.1;
                dot.position.set(radius * Math.sin(theta) * Math.cos(phi), radius * Math.sin(theta) * Math.sin(phi), radius * Math.cos(theta));
                planet.add(dot);
            }
        };
        createRandomDots();
        const animate = ()=>{
            planet.rotation.x += 0.005;
            planet.rotation.y += 0.005;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
        return ()=>{
        // Clean up any resources if needed
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: containerRef
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpinningPlanet);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;