"use strict";(self.webpackChunkcummins_design_system=self.webpackChunkcummins_design_system||[]).push([[794],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component"];var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const defaultTheme=(0,createTheme.Z)(),Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),_extendSxProp=(0,extendSxProp.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,objectWithoutPropertiesLoose.Z)(_extendSxProp,_excluded);return(0,jsx_runtime.jsx)(BoxRoot,(0,esm_extends.Z)({as:component,ref,className:(0,clsx_m.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme},other))}))}({themeId:identifier.Z,defaultTheme,defaultClassName:"MuiBox-root",generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"./node_modules/@mui/material/Paper/Paper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Paper_Paper});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js");const styles_getOverlayAlpha=elevation=>{let alphaValue;return alphaValue=elevation<1?5.11916*elevation**2:4.5*Math.log(elevation+1)+2,(alphaValue/100).toFixed(2)};var useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPaperUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiPaper",slot)}(0,generateUtilityClasses.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","elevation","square","variant"],PaperRoot=(0,styled.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],!ownerState.square&&styles.rounded,"elevation"===ownerState.variant&&styles[`elevation${ownerState.elevation}`]]}})((({theme,ownerState})=>{var _theme$vars$overlays;return(0,esm_extends.Z)({backgroundColor:(theme.vars||theme).palette.background.paper,color:(theme.vars||theme).palette.text.primary,transition:theme.transitions.create("box-shadow")},!ownerState.square&&{borderRadius:theme.shape.borderRadius},"outlined"===ownerState.variant&&{border:`1px solid ${(theme.vars||theme).palette.divider}`},"elevation"===ownerState.variant&&(0,esm_extends.Z)({boxShadow:(theme.vars||theme).shadows[ownerState.elevation]},!theme.vars&&"dark"===theme.palette.mode&&{backgroundImage:`linear-gradient(${(0,colorManipulator.Fq)("#fff",styles_getOverlayAlpha(ownerState.elevation))}, ${(0,colorManipulator.Fq)("#fff",styles_getOverlayAlpha(ownerState.elevation))})`},theme.vars&&{backgroundImage:null==(_theme$vars$overlays=theme.vars.overlays)?void 0:_theme$vars$overlays[ownerState.elevation]}))})),Paper_Paper=react.forwardRef((function Paper(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiPaper"}),{className,component="div",elevation=1,square=!1,variant="elevation"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{component,elevation,square,variant}),classes=(ownerState=>{const{square,elevation,variant,classes}=ownerState,slots={root:["root",variant,!square&&"rounded","elevation"===variant&&`elevation${elevation}`]};return(0,composeClasses.Z)(slots,getPaperUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(PaperRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx_m.Z)(classes.root,className),ref},other))}))},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js");const _excluded=["sx"],splitProps=props=>{var _props$theme$unstable,_props$theme;const result={systemProps:{},otherProps:{}},config=null!=(_props$theme$unstable=null==props||null==(_props$theme=props.theme)?void 0:_props$theme.unstable_sxConfig)?_props$theme$unstable:_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__.Z;return Object.keys(props).forEach((prop=>{config[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./node_modules/@mui/system/esm/styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/system/esm/createStyled.js").ZP)()},"./themes/activeTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>themes_activeTheme});const themes_activeTheme=(0,__webpack_require__("./node_modules/@mui/material/styles/createTheme.js").Z)({palette:{primary:{main:"#DA291C"},black:{main:"#000000"}},components:{MuiButton:{defaultProps:{disableRipple:!0},styleOverrides:{root:{fontSize:"1rem",borderRadius:"100px",padding:"10px 24px"}}},MuiButtonBase:{defaultProps:{disableRipple:!0}},OnboardingTemplate:{defaultProps:{backgroundColor:"#f2f2f2"}}}})},"./components/templates/gridTemplate/GridTemplate.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>GridTemplate_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_element_6a883da9_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js"),activeTheme=__webpack_require__("./themes/activeTheme.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),esm_styled=__webpack_require__("./node_modules/@mui/system/esm/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js"),useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),createTheme=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js");function appendLevel(level){return level?`Level${level}`:""}function isNestedContainer(ownerState){return ownerState.level>0&&ownerState.container}function createGetSelfSpacing(ownerState){return function getSelfSpacing(axis){return`var(--Grid-${axis}Spacing${appendLevel(ownerState.level)})`}}function createGetParentSpacing(ownerState){return function getParentSpacing(axis){return 0===ownerState.level?`var(--Grid-${axis}Spacing)`:`var(--Grid-${axis}Spacing${appendLevel(ownerState.level-1)})`}}function getParentColumns(ownerState){return 0===ownerState.level?"var(--Grid-columns)":`var(--Grid-columns${appendLevel(ownerState.level-1)})`}const traverseBreakpoints=(breakpoints,responsive,iterator)=>{const smallestBreakpoint=breakpoints.keys[0];if(Array.isArray(responsive))responsive.forEach(((breakpointValue,index)=>{iterator(((responsiveStyles,style)=>{index<=breakpoints.keys.length-1&&(0===index?Object.assign(responsiveStyles,style):responsiveStyles[breakpoints.up(breakpoints.keys[index])]=style)}),breakpointValue)}));else if(responsive&&"object"==typeof responsive){(Object.keys(responsive).length>breakpoints.keys.length?breakpoints.keys:(breakpointsKeys=breakpoints.keys,responsiveKeys=Object.keys(responsive),breakpointsKeys.filter((key=>responsiveKeys.includes(key))))).forEach((key=>{if(-1!==breakpoints.keys.indexOf(key)){const breakpointValue=responsive[key];void 0!==breakpointValue&&iterator(((responsiveStyles,style)=>{smallestBreakpoint===key?Object.assign(responsiveStyles,style):responsiveStyles[breakpoints.up(key)]=style}),breakpointValue)}}))}else"number"!=typeof responsive&&"string"!=typeof responsive||iterator(((responsiveStyles,style)=>{Object.assign(responsiveStyles,style)}),responsive);var breakpointsKeys,responsiveKeys},generateGridSizeStyles=({theme,ownerState})=>{const getSelfSpacing=createGetSelfSpacing(ownerState),styles={};return traverseBreakpoints(theme.breakpoints,ownerState.gridSize,((appendStyle,value)=>{let style={};!0===value&&(style={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===value&&(style={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof value&&(style={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${value} / ${getParentColumns(ownerState)}${isNestedContainer(ownerState)?` + ${getSelfSpacing("column")}`:""})`}),appendStyle(styles,style)})),styles},generateGridOffsetStyles=({theme,ownerState})=>{const styles={};return traverseBreakpoints(theme.breakpoints,ownerState.gridOffset,((appendStyle,value)=>{let style={};"auto"===value&&(style={marginLeft:"auto"}),"number"==typeof value&&(style={marginLeft:0===value?"0px":`calc(100% * ${value} / ${getParentColumns(ownerState)})`}),appendStyle(styles,style)})),styles},generateGridColumnsStyles=({theme,ownerState})=>{if(!ownerState.container)return{};const styles=isNestedContainer(ownerState)?{[`--Grid-columns${appendLevel(ownerState.level)}`]:getParentColumns(ownerState)}:{"--Grid-columns":12};return traverseBreakpoints(theme.breakpoints,ownerState.columns,((appendStyle,value)=>{appendStyle(styles,{[`--Grid-columns${appendLevel(ownerState.level)}`]:value})})),styles},generateGridRowSpacingStyles=({theme,ownerState})=>{if(!ownerState.container)return{};const getParentSpacing=createGetParentSpacing(ownerState),styles=isNestedContainer(ownerState)?{[`--Grid-rowSpacing${appendLevel(ownerState.level)}`]:getParentSpacing("row")}:{};return traverseBreakpoints(theme.breakpoints,ownerState.rowSpacing,((appendStyle,value)=>{var _theme$spacing;appendStyle(styles,{[`--Grid-rowSpacing${appendLevel(ownerState.level)}`]:"string"==typeof value?value:null==(_theme$spacing=theme.spacing)?void 0:_theme$spacing.call(theme,value)})})),styles},generateGridColumnSpacingStyles=({theme,ownerState})=>{if(!ownerState.container)return{};const getParentSpacing=createGetParentSpacing(ownerState),styles=isNestedContainer(ownerState)?{[`--Grid-columnSpacing${appendLevel(ownerState.level)}`]:getParentSpacing("column")}:{};return traverseBreakpoints(theme.breakpoints,ownerState.columnSpacing,((appendStyle,value)=>{var _theme$spacing2;appendStyle(styles,{[`--Grid-columnSpacing${appendLevel(ownerState.level)}`]:"string"==typeof value?value:null==(_theme$spacing2=theme.spacing)?void 0:_theme$spacing2.call(theme,value)})})),styles},generateGridDirectionStyles=({theme,ownerState})=>{if(!ownerState.container)return{};const styles={};return traverseBreakpoints(theme.breakpoints,ownerState.direction,((appendStyle,value)=>{appendStyle(styles,{flexDirection:value})})),styles},generateGridStyles=({ownerState})=>{const getSelfSpacing=createGetSelfSpacing(ownerState),getParentSpacing=createGetParentSpacing(ownerState);return(0,esm_extends.Z)({minWidth:0,boxSizing:"border-box"},ownerState.container&&(0,esm_extends.Z)({display:"flex",flexWrap:"wrap"},ownerState.wrap&&"wrap"!==ownerState.wrap&&{flexWrap:ownerState.wrap},{margin:`calc(${getSelfSpacing("row")} / -2) calc(${getSelfSpacing("column")} / -2)`},ownerState.disableEqualOverflow&&{margin:`calc(${getSelfSpacing("row")} * -1) 0px 0px calc(${getSelfSpacing("column")} * -1)`}),(!ownerState.container||isNestedContainer(ownerState))&&(0,esm_extends.Z)({padding:`calc(${getParentSpacing("row")} / 2) calc(${getParentSpacing("column")} / 2)`},(ownerState.disableEqualOverflow||ownerState.parentDisableEqualOverflow)&&{padding:`${getParentSpacing("row")} 0px 0px ${getParentSpacing("column")}`}))},generateSizeClassNames=gridSize=>{const classNames=[];return Object.entries(gridSize).forEach((([key,value])=>{!1!==value&&void 0!==value&&classNames.push(`grid-${key}-${String(value)}`)})),classNames},generateSpacingClassNames=(spacing,smallestBreakpoint="xs")=>{function isValidSpacing(val){return void 0!==val&&("string"==typeof val&&!Number.isNaN(Number(val))||"number"==typeof val&&val>0)}if(isValidSpacing(spacing))return[`spacing-${smallestBreakpoint}-${String(spacing)}`];if("object"==typeof spacing&&!Array.isArray(spacing)){const classNames=[];return Object.entries(spacing).forEach((([key,value])=>{isValidSpacing(value)&&classNames.push(`spacing-${key}-${String(value)}`)})),classNames}return[]},generateDirectionClasses=direction=>void 0===direction?[]:"object"==typeof direction?Object.entries(direction).map((([key,value])=>`direction-${key}-${value}`)):[`direction-xs-${String(direction)}`];var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow"],defaultTheme=(0,createTheme.Z)(),defaultCreateStyledComponent=(0,esm_styled.Z)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(props,styles)=>styles.root});function useThemePropsDefault(props){return(0,useThemeProps.Z)({props,name:"MuiGrid",defaultTheme})}var styles_useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const Grid2=function createGrid(options={}){const{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiGrid"}=options,NestedContext=react.createContext(0),OverflowContext=react.createContext(void 0),GridRoot=createStyledComponent(generateGridColumnsStyles,generateGridColumnSpacingStyles,generateGridRowSpacingStyles,generateGridSizeStyles,generateGridDirectionStyles,generateGridStyles,generateGridOffsetStyles);return react.forwardRef((function Grid(inProps,ref){var _inProps$columns,_inProps$spacing,_ref,_inProps$rowSpacing,_ref2,_inProps$columnSpacin,_ref3,_disableEqualOverflow;const theme=(0,useTheme.Z)(),themeProps=useThemeProps(inProps),props=(0,extendSxProp.Z)(themeProps),level=react.useContext(NestedContext),overflow=react.useContext(OverflowContext),{className,columns:columnsProp=12,container=!1,component="div",direction="row",wrap="wrap",spacing:spacingProp=0,rowSpacing:rowSpacingProp=spacingProp,columnSpacing:columnSpacingProp=spacingProp,disableEqualOverflow:themeDisableEqualOverflow}=props,rest=(0,objectWithoutPropertiesLoose.Z)(props,_excluded);let disableEqualOverflow=themeDisableEqualOverflow;level&&void 0!==themeDisableEqualOverflow&&(disableEqualOverflow=inProps.disableEqualOverflow);const gridSize={},gridOffset={},other={};Object.entries(rest).forEach((([key,val])=>{void 0!==theme.breakpoints.values[key]?gridSize[key]=val:void 0!==theme.breakpoints.values[key.replace("Offset","")]?gridOffset[key.replace("Offset","")]=val:other[key]=val}));const columns=null!=(_inProps$columns=inProps.columns)?_inProps$columns:level?void 0:columnsProp,spacing=null!=(_inProps$spacing=inProps.spacing)?_inProps$spacing:level?void 0:spacingProp,rowSpacing=null!=(_ref=null!=(_inProps$rowSpacing=inProps.rowSpacing)?_inProps$rowSpacing:inProps.spacing)?_ref:level?void 0:rowSpacingProp,columnSpacing=null!=(_ref2=null!=(_inProps$columnSpacin=inProps.columnSpacing)?_inProps$columnSpacin:inProps.spacing)?_ref2:level?void 0:columnSpacingProp,ownerState=(0,esm_extends.Z)({},props,{level,columns,container,direction,wrap,spacing,rowSpacing,columnSpacing,gridSize,gridOffset,disableEqualOverflow:null!=(_ref3=null!=(_disableEqualOverflow=disableEqualOverflow)?_disableEqualOverflow:overflow)&&_ref3,parentDisableEqualOverflow:overflow}),classes=((ownerState,theme)=>{const{container,direction,spacing,wrap,gridSize}=ownerState,slots={root:["root",container&&"container","wrap"!==wrap&&`wrap-xs-${String(wrap)}`,...generateDirectionClasses(direction),...generateSizeClassNames(gridSize),...container?generateSpacingClassNames(spacing,theme.breakpoints.keys[0]):[]]};return(0,composeClasses.Z)(slots,(slot=>(0,generateUtilityClass.Z)(componentName,slot)),{})})(ownerState,theme);let result=(0,jsx_runtime.jsx)(GridRoot,(0,esm_extends.Z)({ref,as:component,ownerState,className:(0,clsx_m.Z)(classes.root,className)},other));return container&&(result=(0,jsx_runtime.jsx)(NestedContext.Provider,{value:level+1,children:result})),void 0!==disableEqualOverflow&&disableEqualOverflow!==(null!=overflow&&overflow)&&(result=(0,jsx_runtime.jsx)(OverflowContext.Provider,{value:disableEqualOverflow,children:result})),result}))}({createStyledComponent:(0,styled.ZP)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(props,styles)=>styles.root}),componentName:"MuiGrid2",useThemeProps:inProps=>(0,styles_useThemeProps.Z)({props:inProps,name:"MuiGrid2"})}),Unstable_Grid2_Grid2=Grid2;var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Item=(0,styled.ZP)(Paper.Z)((function(_ref){var theme=_ref.theme;return _objectSpread(_objectSpread({backgroundColor:"dark"===theme.palette.mode?"#1A2027":"#fff"},theme.typography.body2),{},{padding:theme.spacing(1),textAlign:"center",color:theme.palette.text.secondary})}));function GridTemplate(){return __jsx(Box.Z,{sx:{flexGrow:1}},__jsx(Unstable_Grid2_Grid2,{container:!0,spacing:2},__jsx(Unstable_Grid2_Grid2,{xs:12},__jsx(Item,null,"xs=12")),__jsx(Unstable_Grid2_Grid2,{xs:8},__jsx(Item,null,"xs=8")),__jsx(Unstable_Grid2_Grid2,{xs:4},__jsx(Item,null,"xs=4")),__jsx(Unstable_Grid2_Grid2,{xs:4},__jsx(Item,null,"xs=4")),__jsx(Unstable_Grid2_Grid2,{xs:8},__jsx(Item,null,"xs=8"))),__jsx(Unstable_Grid2_Grid2,{container:!0,spacing:2},__jsx(Unstable_Grid2_Grid2,{xs:6,md:8},__jsx(Item,null,"xs=6 md=8")),__jsx(Unstable_Grid2_Grid2,{xs:6,md:4},__jsx(Item,null,"xs=6 md=4")),__jsx(Unstable_Grid2_Grid2,{xs:6,md:4},__jsx(Item,null,"xs=6 md=4")),__jsx(Unstable_Grid2_Grid2,{xs:6,md:8},__jsx(Item,null,"xs=6 md=8"))))}GridTemplate.displayName="GridTemplate",GridTemplate.__docgenInfo={description:"",methods:[],displayName:"GridTemplate"};var GridTemplate_stories_jsx=react.createElement;const GridTemplate_stories={title:"Templates/GridTemplate",component:GridTemplate,tags:["autodocs"],argTypes:{},decorators:[function(Story){return GridTemplate_stories_jsx(emotion_element_6a883da9_browser_esm.a,{theme:activeTheme.Z},GridTemplate_stories_jsx(Story,null))}]};var Basic={args:{}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Basic.parameters?.docs?.source}}}}}]);