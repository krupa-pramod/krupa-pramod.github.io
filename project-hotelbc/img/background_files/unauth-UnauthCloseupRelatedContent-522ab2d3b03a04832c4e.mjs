(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["unauth-UnauthCloseupRelatedContent"],{Pw4u:function(e,t,n){n.d(t,"a",(function(){return o}));var i=n("+ZRO"),s=n("yweb"),a=n("n6mq"),r=n("nKUr");function o({interests:e,titleSize:t}){const n=Object(s.c)();return Object(r.jsxs)(a.f,{display:"flex",direction:"column",padding:1,marginTop:4,marginBottom:4,children:[Object(r.jsx)(a.f,{marginBottom:2,children:Object(r.jsx)(a.cb,{size:t,weight:"bold",align:"center",children:n._("Similar ideas popular now","Title of suggesting related topics module in the pin feeds.","unauth.relatedPins.suggested_ideas")})}),e.map((e,t)=>Object(r.jsx)(i.a,{interest:e,shouldWrapText:!0},t))]})}},PyyJ:function(e,t,n){n.r(t),n.d(t,"getUnauthCloseupFeedResourceOptions",(function(){return b}));var i=n("q1tI"),s=n("7w6Q"),a=n("uJ3H"),r=n("g6r8"),o=n("pLLR"),l=n("0HhX"),d=n("yweb"),c=n("QAzJ"),u=n("EC67"),p=n("n6mq"),h=n("nKUr");const _=({type:e})=>{const t=Object(d.c)(),n=Object(u.h)(),i=Object(r.a)(),a=()=>{n.push("/login"),s.a.increment("unauth_end_of_related_pins_upsell.login.tap",.1,{deviceType:i})},o=()=>{n.push("/signup"),s.a.increment("unauth_end_of_related_pins_upsell.signup.tap",.1,{deviceType:i})};switch(e){case"login":return Object(h.jsx)(p.f,{minWidth:130,children:Object(h.jsx)(p.g,{fullWidth:!0,color:"red",size:"lg",text:t._("Log in","unauth.closeup.end_of_related_pins_upsell.cta","Button for the user to log in"),onClick:a})});case"signup":return Object(h.jsx)(p.f,{minWidth:130,children:Object(h.jsx)(p.g,{fullWidth:!0,color:"red",size:"lg",text:t._("Sign up","unauth.closeup.end_of_related_pins_upsell.cta","Button for the user to sign up"),onClick:o})});default:return Object(h.jsxs)(p.h,{children:[Object(h.jsx)(p.g,{size:"lg",text:t._("Log in","unauth.closeup.end_of_related_pins_upsell.cta","Button for the user to log in"),onClick:a}),Object(h.jsx)(p.g,{size:"lg",color:"red",text:t._("Sign up","unauth.closeup.end_of_related_pins_upsell.cta","Button for the user to sign up"),onClick:o})]})}};function j({type:e}){const t=Object(d.c)(),n=Object(r.a)();return Object(i.useEffect)(()=>{s.a.increment("unauth_end_of_related_pins_upsell.rendered",.1,{deviceType:n})},[n]),Object(h.jsxs)(p.f,{display:"flex",direction:"column",alignItems:"center",paddingY:8,children:[Object(h.jsx)(p.f,{maxWidth:270,marginBottom:4,children:Object(h.jsx)(p.v,{size:"sm",align:"center",children:"login"===e?t._("Explore unlimited ideas with your Pinterest account","unauth.closeup.end_of_related_pins_upsell.heading","Heading shown after user has scrolled through all related Pins and is shown a Login button"):t._("Explore unlimited ideas with a free account","unauth.closeup.end_of_related_pins_upsell.heading","Heading shown after user has scrolled through all related Pins and is shown Signup and Login buttons")})}),Object(h.jsx)(_,{type:e})]})}const b=({isBot:e,isDesktop:t,showSeoMetadata:n,trafficSource:i,topLevelTrafficSource:s,topLevelTrafficSourceDepth:a,pinId:r})=>({field_set_key:t?"grid_item_duplo_unauth_desktop":"unauth_react",page_size:e?25:12,pin:r,prepend:!1,add_vase:!0,search_query:void 0,show_seo_canonical_pins:n||void 0,source:i,top_level_source:s,top_level_source_depth:a});t.default=e=>{const{hideMainPin:t,mainPinImageIsExpanded:n,onRelatedPinsTitleEnter:d,onRelatedPinsTitleExit:u,pin:p,relatedPinsTitleRef:_,setShouldExpandCollapsablePin:f,showSeoMetadata:g,topLevelTrafficSource:O,topLevelTrafficSourceDepth:x,trafficSource:m}=e,{isBot:P}=Object(o.d)(),S=Object(r.a)(),w=Object(l.b)({name:"RelatedPinFeedResource",options:b({isBot:P,isDesktop:"desktop"===S,showSeoMetadata:g,trafficSource:m,topLevelTrafficSource:O,topLevelTrafficSourceDepth:x,pinId:p.id})}),{isAtEnd:v}=w;(e=>{const t=Object(i.useRef)(!1),n=Object(r.a)();Object(i.useEffect)(()=>{!t.current&&e&&(s.a.incrementNow("unauth_closeup_related_pins.resource_reached_end",1,{deviceType:n}),t.current=!0)},[e,n])})(v);const y=(({isEligible:e})=>{const t=Object(c.a)("mweb_unauth_end_of_related_pins_upsell");if(!e)return null;switch(t().group){case"enabled_login_and_signup":return"both";case"enabled_login_only":return"login";case"enabled_signup_only":return"signup";default:return null}})({isEligible:v&&"phone"===S});return Object(h.jsxs)("div",{children:[Object(h.jsx)(a.a,{hideMainPin:t,mainPinImageIsExpanded:n,onRelatedPinsTitleEnter:d,onRelatedPinsTitleExit:u,pin:p,relatedPinsTitleRef:_,setShouldExpandCollapsablePin:f,showSeoMetadata:g,resourceFetchState:w}),!!y&&Object(h.jsx)(j,{type:y})]})}},uJ3H:function(e,t,n){n.d(t,"b",(function(){return P})),n.d(t,"a",(function(){return y}));var i=n("q1tI"),s=n("/MKj"),a=n("ie/H"),r=n("Pw4u"),o=(n("juJw"),n("yweb")),l=n("n6mq"),d=n("nKUr");var c=n("qcoM"),u=n("/A17"),p=n("g6r8");var h=({header:e,feed:t,storyModules:n,mainPinImageIsExpanded:s,onRelatedPinsTitleEnter:a,onRelatedPinsTitleExit:r,relatedPinsTitleRef:o,setShouldExpandCollapsablePin:h})=>{const[_,j]=Object(i.useState)(!1),b=Object(i.useCallback)(()=>{j(!0),h(!0)},[h]),f=Object(p.b)(),g=f?2:void 0;return Object(d.jsxs)(i.Fragment,{children:[Object(d.jsx)(l.f,{height:f?32:0}),_||s?Object(d.jsxs)(l.f,{paddingX:g,"data-layout-shift-boundary-id":"UnauthRelatedPinsWithoutDrawer","data-test-id":"related-pins-without-drawer",children:[n,Object(d.jsx)(l.f,{ref:o,children:Object(d.jsx)(u.a,{onEnter:a,onExit:r,children:e})}),t]}):Object(d.jsx)(c.b,{hideDrawer:b,children:Object(d.jsxs)(l.f,{paddingX:g,children:[e,t]})})]})},_=n("hFTz"),j=n("SvRC"),b=n("EfoL"),f=n("zRck"),g=n("QAzJ"),O=n("HhTz"),x=n("pTLB");const m={id:"interestLinks",type:"interestLinks"},P=(e,t)=>({item:m,content:Object(d.jsx)(r.a,{interests:e,titleSize:t?"md":"sm"}),position:10}),S=({pin:e,showSeoMetadata:t,resourceFetchState:n})=>{var s,a;const r=Object(p.b)(),[o,l]=Object(i.useState)(0),c=Object(x.b)(),u=null==c?void 0:c.showSignupModal,h=(null===(s=e.pin_join)||void 0===s||null===(a=s.seo_related_interests)||void 0===a?void 0:a.slice(0,5))||[];return Object(d.jsx)(j.a,{breakIn:h&&h.length>0?P(h,r):void 0,feedKey:"related-pins:"+e.id,trafficSource:"pin",resourceFetchState:n,feedItemProps:{componentType:13007,objectIdStr:e.id,viewData:{pin_id:e.id},viewParameter:Object(b.f)(e),viewType:3,showSeoMetadata:t,onPinLinkClick:u?e=>{o>2?(e&&e.preventDefault(),u("signup",{source:"saveButton",container:f.e}),l(1)):l(o+1)}:void 0},serverRender:!0})},w=({hideMainPin:e})=>{const t=Object(o.c)();return e?t._("More ideas","mobilePinPage.relatedPins.title","On mobile web pin page, title for related pins"):t._("More like this","mobilePinPage.relatedPins.title","On mobile web pin page, title for related pins beneath pin closeup")},v=({storyId:e})=>{const t=Object(s.useSelector)(({stories:t})=>t[e]),{story_type:n,title:i}=t;return n.startsWith("SKIN_TONE_FILTER_QUERIES")?Object(d.jsx)(l.f,{marginBottom:8,children:Object(d.jsx)(a.a,{title:i})},"related-module-"+e):null};function y({hideMainPin:e,mainPinImageIsExpanded:t,onRelatedPinsTitleEnter:n,onRelatedPinsTitleExit:i,pin:a,relatedPinsTitleRef:r,setShouldExpandCollapsablePin:o,showSeoMetadata:c,resourceFetchState:u}){const{clientTrackingParams:p,viewParameter:j}=Object(O.b)(),b=Object(s.useSelector)(({feeds:e})=>e["related-pins:"+a.id]),{group:f=""}=Object(g.a)("ag_skin_tone_filter_search_queries_on_p2p_mweb_unauth")({dangerouslySkipActivation:!0});return Object(d.jsx)(h,{header:Object(d.jsx)(l.f,{justifyContent:"center",display:"flex",paddingY:4,id:"relatedPins","data-test-id":"related-pins-header",children:Object(d.jsx)(l.v,{size:"sm",accessibilityLevel:2,children:Object(d.jsx)(w,{hideMainPin:e})})}),storyModules:f.startsWith("enabled")?(Array.isArray(b)?b:[]).filter(({type:e})=>"story"===e).slice(0,1).map(({id:e})=>Object(d.jsx)(v,{storyId:e},"story-module-"+e)):null,feed:Object(d.jsx)(_.a,{viewParameter:j,component:86,clientTrackingParams:p,children:Object(d.jsx)(l.f,{"data-test-id":"relatedPins",children:Object(d.jsx)(S,{pin:a,showSeoMetadata:c,resourceFetchState:u})})}),mainPinImageIsExpanded:t,onRelatedPinsTitleEnter:n,onRelatedPinsTitleExit:i,relatedPinsTitleRef:r,setShouldExpandCollapsablePin:o})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/unauth-UnauthCloseupRelatedContent-522ab2d3b03a04832c4e.mjs.map