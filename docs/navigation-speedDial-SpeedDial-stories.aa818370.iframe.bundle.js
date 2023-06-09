"use strict";(self.webpackChunkcummins_design_system=self.webpackChunkcummins_design_system||[]).push([[697],{"./themes/activeTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>themes_activeTheme});const themes_activeTheme=(0,__webpack_require__("./node_modules/@mui/material/styles/createTheme.js").Z)({palette:{primary:{main:"#DA291C"},black:{main:"#000000"}},components:{MuiButton:{defaultProps:{disableRipple:!0},styleOverrides:{root:{fontSize:"1rem",borderRadius:"100px",padding:"10px 24px"}}},MuiButtonBase:{defaultProps:{disableRipple:!0}},OnboardingTemplate:{defaultProps:{backgroundColor:"#f2f2f2"}}}})},"./components/navigation/speedDial/SpeedDial.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_SpeedDial__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/SpeedDial/SpeedDial.js"),_mui_material_SpeedDialIcon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/SpeedDialIcon/SpeedDialIcon.js"),_mui_material_SpeedDialAction__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/SpeedDialAction/SpeedDialAction.js"),_mui_icons_material_FileCopyOutlined__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/icons-material/FileCopyOutlined.js"),_mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/icons-material/Save.js"),_mui_icons_material_Print__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/icons-material/Print.js"),_mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/icons-material/Share.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js"),_themes_activeTheme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./themes/activeTheme.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/SpeedDial",component:_mui_material_SpeedDial__WEBPACK_IMPORTED_MODULE_2__.Z,tags:["autodocs"],argTypes:{},decorators:[function(Story){return __jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.a,{theme:_themes_activeTheme__WEBPACK_IMPORTED_MODULE_1__.Z},__jsx(Story,null))}]};var Basic={args:{},render:function render(){var actions=[{icon:__jsx(_mui_icons_material_FileCopyOutlined__WEBPACK_IMPORTED_MODULE_4__.Z,null),name:"Copy"},{icon:__jsx(_mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_5__.Z,null),name:"Save"},{icon:__jsx(_mui_icons_material_Print__WEBPACK_IMPORTED_MODULE_6__.Z,null),name:"Print"},{icon:__jsx(_mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_7__.Z,null),name:"Share"}];return __jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__.Z,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1}},__jsx(_mui_material_SpeedDial__WEBPACK_IMPORTED_MODULE_2__.Z,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:16,right:16},icon:__jsx(_mui_material_SpeedDialIcon__WEBPACK_IMPORTED_MODULE_9__.Z,null)},actions.map((function(action){return __jsx(_mui_material_SpeedDialAction__WEBPACK_IMPORTED_MODULE_10__.Z,{key:action.name,icon:action.icon,tooltipTitle:action.name})}))))}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: function render() {\n    var actions = [{\n      icon: __jsx(FileCopyIcon, null),\n      name: "Copy"\n    }, {\n      icon: __jsx(SaveIcon, null),\n      name: "Save"\n    }, {\n      icon: __jsx(PrintIcon, null),\n      name: "Print"\n    }, {\n      icon: __jsx(ShareIcon, null),\n      name: "Share"\n    }];\n    return __jsx(Box, {\n      sx: {\n        height: 320,\n        transform: "translateZ(0px)",\n        flexGrow: 1\n      }\n    }, __jsx(SpeedDial, {\n      ariaLabel: "SpeedDial basic example",\n      sx: {\n        position: "absolute",\n        bottom: 16,\n        right: 16\n      },\n      icon: __jsx(SpeedDialIcon, null)\n    }, actions.map(function (action) {\n      return __jsx(SpeedDialAction, {\n        key: action.name,\n        icon: action.icon,\n        tooltipTitle: action.name\n      });\n    })));\n  }\n}',...Basic.parameters?.docs?.source}}}}}]);