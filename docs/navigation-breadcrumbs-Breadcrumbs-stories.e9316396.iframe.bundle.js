/*! For license information please see navigation-breadcrumbs-Breadcrumbs-stories.e9316396.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkcummins_design_system=self.webpackChunkcummins_design_system||[]).push([[9815],{"./node_modules/@mui/base/utils/appendOwnerState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>appendOwnerState});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_isHostComponent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/base/utils/isHostComponent.js");function appendOwnerState(elementType,otherProps,ownerState){return void 0===elementType||(0,_isHostComponent__WEBPACK_IMPORTED_MODULE_0__.Z)(elementType)?otherProps:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)({},otherProps,{ownerState:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)({},otherProps.ownerState,ownerState)})}},"./node_modules/@mui/base/utils/extractEventHandlers.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function extractEventHandlers(object,excludeKeys=[]){if(void 0===object)return{};const result={};return Object.keys(object).filter((prop=>prop.match(/^on[A-Z]/)&&"function"==typeof object[prop]&&!excludeKeys.includes(prop))).forEach((prop=>{result[prop]=object[prop]})),result}__webpack_require__.d(__webpack_exports__,{Z:()=>extractEventHandlers})},"./node_modules/@mui/base/utils/isHostComponent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isHostComponent(element){return"string"==typeof element}__webpack_require__.d(__webpack_exports__,{Z:()=>isHostComponent})},"./node_modules/@mui/base/utils/resolveComponentProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function resolveComponentProps(componentProps,ownerState){return"function"==typeof componentProps?componentProps(ownerState):componentProps}__webpack_require__.d(__webpack_exports__,{Z:()=>resolveComponentProps})},"./node_modules/@mui/base/utils/useSlotProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useSlotProps});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),useForkRef=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef.js"),appendOwnerState=__webpack_require__("./node_modules/@mui/base/utils/appendOwnerState.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),extractEventHandlers=__webpack_require__("./node_modules/@mui/base/utils/extractEventHandlers.js");function omitEventHandlers(object){if(void 0===object)return{};const result={};return Object.keys(object).filter((prop=>!(prop.match(/^on[A-Z]/)&&"function"==typeof object[prop]))).forEach((prop=>{result[prop]=object[prop]})),result}var resolveComponentProps=__webpack_require__("./node_modules/@mui/base/utils/resolveComponentProps.js");const _excluded=["elementType","externalSlotProps","ownerState"];function useSlotProps(parameters){var _parameters$additiona;const{elementType,externalSlotProps,ownerState}=parameters,rest=(0,objectWithoutPropertiesLoose.Z)(parameters,_excluded),resolvedComponentsProps=(0,resolveComponentProps.Z)(externalSlotProps,ownerState),{props:mergedProps,internalRef}=function mergeSlotProps(parameters){const{getSlotProps,additionalProps,externalSlotProps,externalForwardedProps,className}=parameters;if(!getSlotProps){const joinedClasses=(0,clsx_m.Z)(null==externalForwardedProps?void 0:externalForwardedProps.className,null==externalSlotProps?void 0:externalSlotProps.className,className,null==additionalProps?void 0:additionalProps.className),mergedStyle=(0,esm_extends.Z)({},null==additionalProps?void 0:additionalProps.style,null==externalForwardedProps?void 0:externalForwardedProps.style,null==externalSlotProps?void 0:externalSlotProps.style),props=(0,esm_extends.Z)({},additionalProps,externalForwardedProps,externalSlotProps);return joinedClasses.length>0&&(props.className=joinedClasses),Object.keys(mergedStyle).length>0&&(props.style=mergedStyle),{props,internalRef:void 0}}const eventHandlers=(0,extractEventHandlers.Z)((0,esm_extends.Z)({},externalForwardedProps,externalSlotProps)),componentsPropsWithoutEventHandlers=omitEventHandlers(externalSlotProps),otherPropsWithoutEventHandlers=omitEventHandlers(externalForwardedProps),internalSlotProps=getSlotProps(eventHandlers),joinedClasses=(0,clsx_m.Z)(null==internalSlotProps?void 0:internalSlotProps.className,null==additionalProps?void 0:additionalProps.className,className,null==externalForwardedProps?void 0:externalForwardedProps.className,null==externalSlotProps?void 0:externalSlotProps.className),mergedStyle=(0,esm_extends.Z)({},null==internalSlotProps?void 0:internalSlotProps.style,null==additionalProps?void 0:additionalProps.style,null==externalForwardedProps?void 0:externalForwardedProps.style,null==externalSlotProps?void 0:externalSlotProps.style),props=(0,esm_extends.Z)({},internalSlotProps,additionalProps,otherPropsWithoutEventHandlers,componentsPropsWithoutEventHandlers);return joinedClasses.length>0&&(props.className=joinedClasses),Object.keys(mergedStyle).length>0&&(props.style=mergedStyle),{props,internalRef:internalSlotProps.ref}}((0,esm_extends.Z)({},rest,{externalSlotProps:resolvedComponentsProps})),ref=(0,useForkRef.Z)(internalRef,null==resolvedComponentsProps?void 0:resolvedComponentsProps.ref,null==(_parameters$additiona=parameters.additionalProps)?void 0:_parameters$additiona.ref);return(0,appendOwnerState.Z)(elementType,(0,esm_extends.Z)({},mergedProps,{ref}),ownerState)}},"./node_modules/@mui/material/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Link_Link});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),useIsFocusVisible=__webpack_require__("./node_modules/@mui/material/utils/useIsFocusVisible.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getLinkUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiLink",slot)}const Link_linkClasses=(0,generateUtilityClasses.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var style=__webpack_require__("./node_modules/@mui/system/esm/style.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js");const colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Link_getTextDecoration=({theme,ownerState})=>{const transformedColor=(color=>colorTransformations[color]||color)(ownerState.color),color=(0,style.DW)(theme,`palette.${transformedColor}`,!1)||ownerState.color,channelColor=(0,style.DW)(theme,`palette.${transformedColor}Channel`);return"vars"in theme&&channelColor?`rgba(${channelColor} / 0.4)`:(0,colorManipulator.Fq)(color,.4)};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],LinkRoot=(0,styled.ZP)(Typography.Z,{name:"MuiLink",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`underline${(0,capitalize.Z)(ownerState.underline)}`],"button"===ownerState.component&&styles.button]}})((({theme,ownerState})=>(0,esm_extends.Z)({},"none"===ownerState.underline&&{textDecoration:"none"},"hover"===ownerState.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===ownerState.underline&&(0,esm_extends.Z)({textDecoration:"underline"},"inherit"!==ownerState.color&&{textDecorationColor:Link_getTextDecoration({theme,ownerState})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===ownerState.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Link_linkClasses.focusVisible}`]:{outline:"auto"}}))),Link_Link=react.forwardRef((function Link(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiLink"}),{className,color="primary",component="a",onBlur,onFocus,TypographyClasses,underline="always",variant="inherit",sx}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{isFocusVisibleRef,onBlur:handleBlurVisible,onFocus:handleFocusVisible,ref:focusVisibleRef}=(0,useIsFocusVisible.Z)(),[focusVisible,setFocusVisible]=react.useState(!1),handlerRef=(0,useForkRef.Z)(ref,focusVisibleRef),ownerState=(0,esm_extends.Z)({},props,{color,component,focusVisible,underline,variant}),classes=(ownerState=>{const{classes,component,focusVisible,underline}=ownerState,slots={root:["root",`underline${(0,capitalize.Z)(underline)}`,"button"===component&&"button",focusVisible&&"focusVisible"]};return(0,composeClasses.Z)(slots,getLinkUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(LinkRoot,(0,esm_extends.Z)({color,className:(0,clsx_m.Z)(classes.root,className),classes:TypographyClasses,component,onBlur:event=>{handleBlurVisible(event),!1===isFocusVisibleRef.current&&setFocusVisible(!1),onBlur&&onBlur(event)},onFocus:event=>{handleFocusVisible(event),!0===isFocusVisibleRef.current&&setFocusVisible(!0),onFocus&&onFocus(event)},ref:handlerRef,ownerState,variant,sx:[...Object.keys(colorTransformations).includes(color)?[]:[{color}],...Array.isArray(sx)?sx:[sx]]},other))}))},"./node_modules/@mui/material/SvgIcon/SvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SvgIcon_SvgIcon});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSvgIconUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSvgIcon",slot)}(0,generateUtilityClasses.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],SvgIconRoot=(0,styled.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"inherit"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`],styles[`fontSize${(0,capitalize.Z)(ownerState.fontSize)}`]]}})((({theme,ownerState})=>{var _theme$transitions,_theme$transitions$cr,_theme$transitions2,_theme$transitions2$d,_theme$typography,_theme$typography$pxT,_theme$typography2,_theme$typography2$px,_theme$typography3,_theme$typography3$px,_palette$ownerState$c,_palette,_palette$ownerState$c2,_palette2,_palette2$action,_palette3,_palette3$action;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(_theme$transitions=theme.transitions)||null==(_theme$transitions$cr=_theme$transitions.create)?void 0:_theme$transitions$cr.call(_theme$transitions,"fill",{duration:null==(_theme$transitions2=theme.transitions)||null==(_theme$transitions2$d=_theme$transitions2.duration)?void 0:_theme$transitions2$d.shorter}),fontSize:{inherit:"inherit",small:(null==(_theme$typography=theme.typography)||null==(_theme$typography$pxT=_theme$typography.pxToRem)?void 0:_theme$typography$pxT.call(_theme$typography,20))||"1.25rem",medium:(null==(_theme$typography2=theme.typography)||null==(_theme$typography2$px=_theme$typography2.pxToRem)?void 0:_theme$typography2$px.call(_theme$typography2,24))||"1.5rem",large:(null==(_theme$typography3=theme.typography)||null==(_theme$typography3$px=_theme$typography3.pxToRem)?void 0:_theme$typography3$px.call(_theme$typography3,35))||"2.1875rem"}[ownerState.fontSize],color:null!=(_palette$ownerState$c=null==(_palette=(theme.vars||theme).palette)||null==(_palette$ownerState$c2=_palette[ownerState.color])?void 0:_palette$ownerState$c2.main)?_palette$ownerState$c:{action:null==(_palette2=(theme.vars||theme).palette)||null==(_palette2$action=_palette2.action)?void 0:_palette2$action.active,disabled:null==(_palette3=(theme.vars||theme).palette)||null==(_palette3$action=_palette3.action)?void 0:_palette3$action.disabled,inherit:void 0}[ownerState.color]}})),SvgIcon=react.forwardRef((function SvgIcon(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSvgIcon"}),{children,className,color="inherit",component="svg",fontSize="medium",htmlColor,inheritViewBox=!1,titleAccess,viewBox="0 0 24 24"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{color,component,fontSize,instanceFontSize:inProps.fontSize,inheritViewBox,viewBox}),more={};inheritViewBox||(more.viewBox=viewBox);const classes=(ownerState=>{const{color,fontSize,classes}=ownerState,slots={root:["root","inherit"!==color&&`color${(0,capitalize.Z)(color)}`,`fontSize${(0,capitalize.Z)(fontSize)}`]};return(0,composeClasses.Z)(slots,getSvgIconUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SvgIconRoot,(0,esm_extends.Z)({as:component,className:(0,clsx_m.Z)(classes.root,className),focusable:"false",color:htmlColor,"aria-hidden":!titleAccess||void 0,role:titleAccess?"img":void 0,ref},more,other,{ownerState,children:[children,titleAccess?(0,jsx_runtime.jsx)("title",{children:titleAccess}):null]}))}));SvgIcon.muiName="SvgIcon";const SvgIcon_SvgIcon=SvgIcon},"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiTypography",slot)}(0,generateUtilityClasses.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.Z)({margin:0},ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.Z)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.Z)((0,esm_extends.Z)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.Z)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.Z)({as:Component,ref,ownerState,className:(0,clsx_m.Z)(classes.root,className)},other))}))},"./node_modules/@mui/material/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var u,b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen");function v(a){if("object"==typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}u=Symbol.for("react.module.reference")},"./node_modules/@mui/material/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/@mui/material/node_modules/react-is/cjs/react-is.production.min.js")},"./node_modules/@mui/material/utils/createSvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createSvgIcon});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function createSvgIcon(path,displayName){function Component(props,ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({"data-testid":`${displayName}Icon`,ref},props,{children:path}))}return Component.muiName=_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.Z.muiName,react__WEBPACK_IMPORTED_MODULE_0__.memo(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Component))}},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js");const _excluded=["sx"],splitProps=props=>{var _props$theme$unstable,_props$theme;const result={systemProps:{},otherProps:{}},config=null!=(_props$theme$unstable=null==props||null==(_props$theme=props.theme)?void 0:_props$theme.unstable_sxConfig)?_props$theme$unstable:_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__.Z;return Object.keys(props).forEach((prop=>{config[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./themes/activeTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>themes_activeTheme});const themes_activeTheme=(0,__webpack_require__("./node_modules/@mui/material/styles/createTheme.js").Z)({palette:{primary:{main:"#DA291C"},black:{main:"#000000"}},components:{MuiButton:{defaultProps:{disableRipple:!0},styleOverrides:{root:{fontSize:"1rem",borderRadius:"100px",padding:"10px 24px"}}},MuiButtonBase:{defaultProps:{disableRipple:!0}},OnboardingTemplate:{defaultProps:{backgroundColor:"#f2f2f2"}}}})},"./components/navigation/breadcrumbs/Breadcrumbs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>Breadcrumbs_stories});var react=__webpack_require__("./node_modules/react/index.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),clsx_m=(__webpack_require__("./node_modules/@mui/material/node_modules/react-is/index.js"),__webpack_require__("./node_modules/clsx/dist/clsx.m.js")),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useSlotProps=__webpack_require__("./node_modules/@mui/base/utils/useSlotProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MoreHoriz=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js");const _excluded=["slots","slotProps"],BreadcrumbCollapsedButton=(0,styled.ZP)(ButtonBase.Z)((({theme})=>(0,esm_extends.Z)({display:"flex",marginLeft:`calc(${theme.spacing(1)} * 0.5)`,marginRight:`calc(${theme.spacing(1)} * 0.5)`},"light"===theme.palette.mode?{backgroundColor:theme.palette.grey[100],color:theme.palette.grey[700]}:{backgroundColor:theme.palette.grey[700],color:theme.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,esm_extends.Z)({},"light"===theme.palette.mode?{backgroundColor:theme.palette.grey[200]}:{backgroundColor:theme.palette.grey[600]}),"&:active":(0,esm_extends.Z)({boxShadow:theme.shadows[0]},"light"===theme.palette.mode?{backgroundColor:(0,colorManipulator._4)(theme.palette.grey[200],.12)}:{backgroundColor:(0,colorManipulator._4)(theme.palette.grey[600],.12)})}))),BreadcrumbCollapsedIcon=(0,styled.ZP)(MoreHoriz)({width:24,height:16});const Breadcrumbs_BreadcrumbCollapsed=function BreadcrumbCollapsed(props){const{slots={},slotProps={}}=props,otherProps=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=props;return(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(BreadcrumbCollapsedButton,(0,esm_extends.Z)({focusRipple:!0},otherProps,{ownerState,children:(0,jsx_runtime.jsx)(BreadcrumbCollapsedIcon,(0,esm_extends.Z)({as:slots.CollapsedIcon,ownerState},slotProps.collapsedIcon))}))})};var generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getBreadcrumbsUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiBreadcrumbs",slot)}const Breadcrumbs_breadcrumbsClasses=(0,generateUtilityClasses.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),Breadcrumbs_excluded=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],BreadcrumbsRoot=(0,styled.ZP)(Typography.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(props,styles)=>[{[`& .${Breadcrumbs_breadcrumbsClasses.li}`]:styles.li},styles.root]})({}),BreadcrumbsOl=(0,styled.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(props,styles)=>styles.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),BreadcrumbsSeparator=(0,styled.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(props,styles)=>styles.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function insertSeparators(items,className,separator,ownerState){return items.reduce(((acc,current,index)=>(index<items.length-1?acc=acc.concat(current,(0,jsx_runtime.jsx)(BreadcrumbsSeparator,{"aria-hidden":!0,className,ownerState,children:separator},`separator-${index}`)):acc.push(current),acc)),[])}const Breadcrumbs_Breadcrumbs=react.forwardRef((function Breadcrumbs(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiBreadcrumbs"}),{children,className,component="nav",slots={},slotProps={},expandText="Show path",itemsAfterCollapse=1,itemsBeforeCollapse=1,maxItems=8,separator="/"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,Breadcrumbs_excluded),[expanded,setExpanded]=react.useState(!1),ownerState=(0,esm_extends.Z)({},props,{component,expanded,expandText,itemsAfterCollapse,itemsBeforeCollapse,maxItems,separator}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},getBreadcrumbsUtilityClass,classes)})(ownerState),collapsedIconSlotProps=(0,useSlotProps.Z)({elementType:slots.CollapsedIcon,externalSlotProps:slotProps.collapsedIcon,ownerState}),listRef=react.useRef(null),allItems=react.Children.toArray(children).filter((child=>react.isValidElement(child))).map(((child,index)=>(0,jsx_runtime.jsx)("li",{className:classes.li,children:child},`child-${index}`)));return(0,jsx_runtime.jsx)(BreadcrumbsRoot,(0,esm_extends.Z)({ref,component,color:"text.secondary",className:(0,clsx_m.Z)(classes.root,className),ownerState},other,{children:(0,jsx_runtime.jsx)(BreadcrumbsOl,{className:classes.ol,ref:listRef,ownerState,children:insertSeparators(expanded||maxItems&&allItems.length<=maxItems?allItems:(allItems=>itemsBeforeCollapse+itemsAfterCollapse>=allItems.length?allItems:[...allItems.slice(0,itemsBeforeCollapse),(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbCollapsed,{"aria-label":expandText,slots:{CollapsedIcon:slots.CollapsedIcon},slotProps:{collapsedIcon:collapsedIconSlotProps},onClick:()=>{setExpanded(!0);const focusable=listRef.current.querySelector("a[href],button,[tabindex]");focusable&&focusable.focus()}},"ellipsis"),...allItems.slice(allItems.length-itemsAfterCollapse,allItems.length)])(allItems),classes.separator,separator,ownerState)})}))}));var Link=__webpack_require__("./node_modules/@mui/material/Link/Link.js"),emotion_element_6a883da9_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js"),activeTheme=__webpack_require__("./themes/activeTheme.js"),__jsx=react.createElement;const Breadcrumbs_stories={title:"Navigation/Breadcrumbs",component:Breadcrumbs_Breadcrumbs,tags:["autodocs"],argTypes:{},decorators:[function(Story){return __jsx(emotion_element_6a883da9_browser_esm.a,{theme:activeTheme.Z},__jsx(Story,null))}]};var Basic={args:{},render:function render(){return __jsx(Breadcrumbs_Breadcrumbs,{"aria-label":"breadcrumb"},__jsx(Link.Z,{underline:"hover",color:"inherit",href:"/"},"MUI"),__jsx(Link.Z,{underline:"hover",color:"inherit",href:"/material-ui/getting-started/installation/"},"Core"),__jsx(Typography.Z,{color:"text.primary"},"Breadcrumbs"))}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: function render() {\n    return __jsx(Breadcrumbs, {\n      "aria-label": "breadcrumb"\n    }, __jsx(Link, {\n      underline: "hover",\n      color: "inherit",\n      href: "/"\n    }, "MUI"), __jsx(Link, {\n      underline: "hover",\n      color: "inherit",\n      href: "/material-ui/getting-started/installation/"\n    }, "Core"), __jsx(Typography, {\n      color: "text.primary"\n    }, "Breadcrumbs"));\n  }\n}',...Basic.parameters?.docs?.source}}}}}]);