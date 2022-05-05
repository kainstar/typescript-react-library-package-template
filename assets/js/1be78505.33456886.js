"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[514,543],{6448:function(e,n,t){t.r(n),t.d(n,{default:function(){return ee}});var a=t(9496),i=t(1782),o=t(684),r=t(9351),l=t(1626),s=t(5466),c=t(4637);function d(e){return(0,c.jsx)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,c.jsxs)("g",{fill:"#7a7a7a",children:[(0,c.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,c.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}var u=t(2335),m="collapseSidebarButton_ysWK",b="collapseSidebarButtonIcon_TfNc";function h(e){var n=e.onClick;return(0,c.jsx)("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",m),onClick:n,children:(0,c.jsx)(d,{className:b})})}var p=t(9213),f=t(4860),v=t(2874),x=t(8413),j="menuHtmlItem_dlez",g="menuExternalLink_e4oK",_=t(8412),k=["item"],C=["item","onItemClick","activePath","level","index"],S=["item","onItemClick","activePath","level","index"];function N(e){var n=e.item,t=(0,p.Z)(e,k);switch(n.type){case"category":return(0,c.jsx)(I,Object.assign({item:n},t));case"html":return(0,c.jsx)(T,Object.assign({item:n},t));default:return(0,c.jsx)(M,Object.assign({item:n},t))}}function I(e){var n=e.item,t=e.onItemClick,i=e.activePath,o=e.level,s=e.index,d=(0,p.Z)(e,C),m=n.items,b=n.label,h=n.collapsible,v=n.className,x=n.href,j=function(e){var n=(0,_.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!n&&e.collapsible?(0,r.Wl)(e):void 0}),[e,n])}(n),g=(0,r._F)(n,i),k=(0,r.Mg)(x,i),S=(0,r.uR)({initialState:function(){return!!h&&(!g&&n.collapsed)}}),N=S.collapsed,I=S.setCollapsed;!function(e){var n=e.isActive,t=e.collapsed,i=e.setCollapsed,o=(0,r.D9)(n);(0,a.useEffect)((function(){n&&!o&&t&&i(!1)}),[n,o,t,i])}({isActive:g,collapsed:N,setCollapsed:I});var T=(0,r.fP)(),M=T.expandedItem,Z=T.setExpandedItem;function L(e){void 0===e&&(e=!N),Z(e?null:s),I(e)}var A=(0,r.LU)().autoCollapseSidebarCategories;return(0,a.useEffect)((function(){h&&M&&M!==s&&A&&I(!0)}),[h,M,s,I,A]),(0,c.jsxs)("li",{className:(0,l.Z)(r.kM.docs.docSidebarItemCategory,r.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":N},v),children:[(0,c.jsxs)("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k}),children:[(0,c.jsx)(f.Z,Object.assign({className:(0,l.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x,"menu__link--active":g}),onClick:h?function(e){null==t||t(n),x?L(!1):(e.preventDefault(),L())}:function(){null==t||t(n)},"aria-current":k?"page":void 0,"aria-expanded":h?!N:void 0,href:h?null!=j?j:"#":j},d,{children:b})),x&&h&&(0,c.jsx)("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:b}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),L()}})]}),(0,c.jsx)(r.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:N,children:(0,c.jsx)(y,{items:m,tabIndex:N?-1:0,onItemClick:t,activePath:i,level:o+1})})]})}function T(e){var n=e.item,t=e.level,a=e.index,i=n.value,o=n.defaultStyle,s=n.className;return(0,c.jsx)("li",{className:(0,l.Z)(r.kM.docs.docSidebarItemLink,r.kM.docs.docSidebarItemLinkLevel(t),o&&j+" menu__list-item",s),dangerouslySetInnerHTML:{__html:i}},a)}function M(e){var n=e.item,t=e.onItemClick,a=e.activePath,i=e.level,o=(e.index,(0,p.Z)(e,S)),s=n.href,d=n.label,u=n.className,m=(0,r._F)(n,a),b=(0,v.Z)(s);return(0,c.jsx)("li",{className:(0,l.Z)(r.kM.docs.docSidebarItemLink,r.kM.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),children:(0,c.jsxs)(f.Z,Object.assign({className:(0,l.Z)("menu__link",!b&&g,{"menu__link--active":m}),"aria-current":m?"page":void 0,to:s},b&&{onClick:t?function(){return t(n)}:void 0},o,{children:[d,!b&&(0,c.jsx)(x.Z,{})]}))},d)}var Z=["items"];function L(e){var n=e.items,t=(0,p.Z)(e,Z);return(0,c.jsx)(r.D_,{children:n.map((function(e,n){return(0,c.jsx)(N,Object.assign({item:e,index:n},t),n)}))})}var y=(0,a.memo)(L),A="menu_b2Lp",w="menuWithAnnouncementBar_LOnK";function E(e){var n=e.path,t=e.sidebar,i=e.className,o=function(){var e=(0,r.nT)().isActive,n=(0,a.useState)(e),t=n[0],i=n[1];return(0,r.RF)((function(n){var t=n.scrollY;e&&i(0===t)}),[e]),e&&t}();return(0,c.jsx)("nav",{className:(0,l.Z)("menu thin-scrollbar",A,o&&w,i),children:(0,c.jsx)("ul",{className:(0,l.Z)(r.kM.docs.docSidebarMenu,"menu__list"),children:(0,c.jsx)(y,{items:t,activePath:n,level:1})})})}var P="sidebar_TmRi",B="sidebarWithHideableNavbar_hwWQ",F="sidebarHidden_ikHi",D="sidebarLogo_ITE9";function H(e){var n=e.path,t=e.sidebar,a=e.onCollapse,i=e.isHidden,o=(0,r.LU)(),d=o.navbar.hideOnScroll,u=o.hideableSidebar;return(0,c.jsxs)("div",{className:(0,l.Z)(P,d&&B,i&&F),children:[d&&(0,c.jsx)(s.Z,{tabIndex:-1,className:D}),(0,c.jsx)(E,{path:n,sidebar:t}),u&&(0,c.jsx)(h,{onClick:a})]})}var R=a.memo(H),O=function(e){var n=e.sidebar,t=e.path,a=(0,r.el)();return(0,c.jsx)("ul",{className:(0,l.Z)(r.kM.docs.docSidebarMenu,"menu__list"),children:(0,c.jsx)(y,{items:n,activePath:t,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function W(e){return(0,c.jsx)(r.Zo,{component:O,props:e})}var z=a.memo(W);function q(e){var n=(0,r.iP)(),t="desktop"===n||"ssr"===n,a="mobile"===n;return(0,c.jsxs)(c.Fragment,{children:[t&&(0,c.jsx)(R,Object.assign({},e)),a&&(0,c.jsx)(z,Object.assign({},e))]})}var K=t(6543),U="backToTopButton_BxqD",Y="backToTopButtonShow_UpGb";function X(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var n;e.current=(n=null,function e(){var t=document.documentElement.scrollTop;t>0&&(n=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*t)))}(),function(){return n&&cancelAnimationFrame(n)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function G(){var e=(0,a.useState)(!1),n=e[0],t=e[1],i=(0,a.useRef)(!1),o=X(),s=o.smoothScrollTop,d=o.cancelScrollToTop;return(0,r.RF)((function(e,n){var a=e.scrollY,o=null==n?void 0:n.scrollY;if(o)if(i.current)i.current=!1;else{var r=a<o;if(r||d(),a<300)t(!1);else if(r){var l=document.documentElement.scrollHeight;a+window.innerHeight<l&&t(!0)}else t(!1)}})),(0,r.SL)((function(e){e.location.hash&&(i.current=!0,t(!1))})),(0,c.jsx)("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",r.kM.common.backToTopButton,U,n&&Y),type:"button",onClick:function(){return s()}})}var Q=t(7590),V={docPage:"docPage_CMAW",docMainContainer:"docMainContainer_MvPt",docSidebarContainer:"docSidebarContainer_uTrj",docMainContainerEnhanced:"docMainContainerEnhanced_EDl1",docSidebarContainerHidden:"docSidebarContainerHidden_BgSw",collapsedDocSidebar:"collapsedDocSidebar_X_6Y",expandSidebarButtonIcon:"expandSidebarButtonIcon_zEo7",docItemWrapperEnhanced:"docItemWrapperEnhanced_hMX6"},J=t(2054);function $(e){var n=e.currentDocRoute,t=e.versionMetadata,i=e.children,s=e.sidebarName,m=(0,r.Vq)(),b=t.pluginId,h=t.version,p=(0,a.useState)(!1),f=p[0],v=p[1],x=(0,a.useState)(!1),j=x[0],g=x[1],_=(0,a.useCallback)((function(){j&&g(!1),v((function(e){return!e}))}),[j]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(J.Z,{version:h,tag:(0,r.os)(b,h)}),(0,c.jsx)(o.Z,{children:(0,c.jsxs)("div",{className:V.docPage,children:[(0,c.jsx)(G,{}),m&&(0,c.jsxs)("aside",{className:(0,l.Z)(r.kM.docs.docSidebarContainer,V.docSidebarContainer,f&&V.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(V.docSidebarContainer)&&f&&g(!0)},children:[(0,c.jsx)(q,{sidebar:m,path:n.path,onCollapse:_,isHidden:j},s),j&&(0,c.jsx)("div",{className:V.collapsedDocSidebar,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_,children:(0,c.jsx)(d,{className:V.expandSidebarButtonIcon})})]}),(0,c.jsx)("main",{className:(0,l.Z)(V.docMainContainer,(f||!m)&&V.docMainContainerEnhanced),children:(0,c.jsx)("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",V.docItemWrapper,f&&V.docItemWrapperEnhanced),children:i})})]})})]})}function ee(e){var n=e.route.routes,t=e.versionMetadata,a=e.location,o=n.find((function(e){return(0,Q.LX)(a.pathname,e)}));if(!o)return(0,c.jsx)(K.default,{});var s=o.sidebar,d=s?t.docsSidebars[s]:null;return(0,c.jsx)(r.FG,{className:(0,l.Z)(r.kM.wrapper.docsPages,r.kM.page.docsDocPage,t.className),children:(0,c.jsx)(r.qu,{version:t,children:(0,c.jsx)(r.bT,{sidebar:null!=d?d:null,children:(0,c.jsx)($,{currentDocRoute:o,versionMetadata:t,sidebarName:s,children:(0,i.H)(n,{versionMetadata:t})})})})})}},6543:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});t(9496);var a=t(684),i=t(2335),o=t(9351),r=t(4637);function l(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.d,{title:(0,i.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),(0,r.jsx)(a.Z,{children:(0,r.jsx)("main",{className:"container margin-vert--xl",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,r.jsx)("h1",{className:"hero__title",children:(0,r.jsx)(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})})]})}}}]);