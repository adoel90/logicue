(this.webpackJsonplogicue=this.webpackJsonplogicue||[]).push([[0],{115:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),c=a.n(r),i=a(73),l=a(160),s=a(14),u=a(143),m=a(146),E=a(147),p=a(148),g=a(162),d=a(18),A=a(67),b=a(50),f=a.n(b),C=function(e){var t=Object(d.a)(),a=Object(n.useState)(!0),r=Object(s.a)(a,2),c=r[0],i=r[1];return Object(A.useScrollPosition)((function(e){var t=e.prevPos,a=e.currPos.y>t.y;a!==c&&i(a)}),[c],!1,!1,300),Object(n.useMemo)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null),o.a.createElement(m.a,{direction:"bottom",in:!0!==c},o.a.createElement(E.a,{position:"fixed",elevation:1,style:{backgroundColor:"".concat(t.palette.common.white),opacity:.7}},o.a.createElement(p.a,null,o.a.createElement(g.a,{flexGrow:1},o.a.createElement("img",{src:f.a,alt:"logo",width:124,height:16}))))))}))},I=a(150),h=a(164),O=a(149),S=a(72),T=a.n(S),P=a(71),v=a.n(P),R=Object(O.a)((function(e){return{icon:{boxShadow:"inset 0 0 4px white",color:"".concat(e.palette.common.white),border:"1px solid ".concat(e.palette.common.white),opacity:.8,marginLeft:16,"&::after":{content:"''",width:"16px",position:"absolute",left:44,top:"50%",zIndex:1,borderBottom:"1px solid ".concat(e.palette.common.white)},"&:hover":{border:"1px solid ".concat(e.palette.secondary.light),color:"".concat(e.palette.secondary.light),boxShadow:"inset 0 0 0 white"}}}})),k=function(e){var t=Object(d.a)(),a=R(),r=Object(n.useState)(!1),c=Object(s.a)(r,2),i=c[0],l=c[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{style:{backgroundImage:"url(".concat(v.a,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",background:"contain",filter:"blur(0.5px)"}},o.a.createElement(g.a,{display:"flex",flexDirection:"row",justifyContent:"center"},o.a.createElement(g.a,{mt:16,mb:16},o.a.createElement(I.a,{className:a.icon,onClick:function(){return l(!0)}},o.a.createElement(T.a,{style:{color:t.palette.primary.contrastText,fontSize:64},fontSize:"large"}))))),o.a.createElement(h.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:i,autoHideDuration:3e3,onClose:function(){return l(!1)},message:"I am sorry, still development \u2615",style:{backgroundColor:t.palette.warning}}))},_=a(76),x=a(163),j=a(158),y=a(17),M=a.n(y),w=a(152),D=a(153),J=a(154),L=a(155),B=a(156),H=a(157),K=(a(66),Object(O.a)((function(e){return{root:{maxWidth:270},media:{height:200}}}))),G=function(e){var t=e.tab,a=e.idGenre,r=K(),c=Object(n.useState)(U),i=Object(s.a)(c,2),l=i[0],u=i[1],m=Object(n.useState)(!1),E=Object(s.a)(m,2),p=E[0],d=E[1];return Object(n.useEffect)((function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_URL_API:"https://api.themoviedb.org/3",REACT_APP_API_KEY:"97899d23ed03416a5a1c2d1503496a9c",REACT_APP_LIST_GENRE_MOVIES:"/genre/movie/list",REACT_APP_LIST_MOVIES:"/discover/movie",REACT_APP_IMAGE_ORIGINAL_PATH:"https://image.tmdb.org/t/p/original"}),t=e.REACT_APP_URL_API,a=e.REACT_APP_LIST_MOVIES,n=e.REACT_APP_API_KEY;M.a.defaults.headers.common={Accept:"application/json","Content-Type":"application/json"},M.a.get("".concat(t).concat(a,"?api_key=").concat(n,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28")).then((function(e){console.log("Original response : ",e),void 0!==e&&null!==e&&u(e.data.results)})).catch((function(e){console.log("Error : ",e.response)}))}),[]),Object(n.useEffect)((function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_URL_API:"https://api.themoviedb.org/3",REACT_APP_API_KEY:"97899d23ed03416a5a1c2d1503496a9c",REACT_APP_LIST_GENRE_MOVIES:"/genre/movie/list",REACT_APP_LIST_MOVIES:"/discover/movie",REACT_APP_IMAGE_ORIGINAL_PATH:"https://image.tmdb.org/t/p/original"}),t=e.REACT_APP_URL_API,n=e.REACT_APP_LIST_MOVIES,o=e.REACT_APP_API_KEY;d(!0);M.a.defaults.headers.common={Accept:"application/json","Content-Type":"application/json"},M.a.get("".concat(t).concat(n,"?api_key=").concat(o,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=").concat(a)).then((function(e){console.log("Original response : ",e),d(!1),void 0!==e&&null!==e&&u(e.data.results)})).catch((function(e){d(!1),console.log("Error : ",e.response)}))}),[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{display:"flex",alignContent:"flex-start",justifyContent:"center",mt:2},!0===p&&o.a.createElement(w.a,{size:32,color:"primary"})),o.a.createElement(g.a,{display:"flex",flexWrap:"wrap",alignContent:"flex-start",justifyContent:"center"},l.length>0&&l.map((function(e,t){return o.a.createElement(g.a,{ml:2,mb:4,mr:2,mt:2,key:t},o.a.createElement(D.a,{className:r.root},o.a.createElement(J.a,null,o.a.createElement(L.a,{className:r.media,image:"".concat("https://image.tmdb.org/t/p/original").concat(e.poster_path),title:e.original_title}),o.a.createElement(B.a,null,o.a.createElement(H.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),o.a.createElement(H.a,{variant:"body2",color:"textSecondary",component:"p"},e.overview)))))}))))},U=[{popularity:278.89,vote_count:1084,video:!1,poster_path:"/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg",id:547016,adult:!1,backdrop_path:"/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg",original_language:"en",original_title:"The Old Guard",genre_ids:[28,14],title:"The Old Guard",vote_average:7.4,overview:"Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",release_date:"2020-07-10"}],F=a(66),Y=Object(O.a)((function(e){return{root:{flexGrow:1,marginTop:8}}})),N=function(e){Object(d.a)();var t=Y();Object(n.useEffect)((function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_URL_API:"https://api.themoviedb.org/3",REACT_APP_API_KEY:"97899d23ed03416a5a1c2d1503496a9c",REACT_APP_LIST_GENRE_MOVIES:"/genre/movie/list",REACT_APP_LIST_MOVIES:"/discover/movie",REACT_APP_IMAGE_ORIGINAL_PATH:"https://image.tmdb.org/t/p/original"}),t=e.REACT_APP_URL_API,a=e.REACT_APP_LIST_GENRE_MOVIES,n=e.REACT_APP_API_KEY;M.a.defaults.headers.common={Accept:"application/json","Content-Type":"application/json"},M.a.get("".concat(t).concat(a,"?api_key=").concat(n)).then((function(e){void 0!==e&&null!==e&&b(e.data.genres)})).catch((function(e){console.log("Error : ",e.response)}))}),[]);var a=Object(n.useState)(0),r=Object(s.a)(a,2),c=r[0],i=r[1],l=Object(n.useState)(28),u=Object(s.a)(l,2),m=u[0],E=u[1],p=Object(n.useState)([{id:28,name:"Action"}]),g=Object(s.a)(p,2),A=g[0],b=g[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(_.a,{className:t.root,elevation:0},o.a.createElement(x.a,{value:c,onChange:function(e,t){i(t);var a=F.filter(A,(function(e,a){return a==t?e:null}));E(a[0].id)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto"},A.length>0&&A.map((function(e,t){return o.a.createElement(j.a,{label:e.name,key:t})})))),o.a.createElement(G,{tab:c,idGenre:m}))},Z=a(161),V=a(159),z=function(e){var t=Object(d.a)(),a=Object(n.useState)(!1),r=Object(s.a)(a,2),c=r[0],i=r[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),m=u[0],E=u[1],p=Object(n.useState)(""),A=Object(s.a)(p,2),b=A[0],f=A[1],C=Object(n.useState)(!1),I=Object(s.a)(C,2),O=I[0],S=I[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{display:"flex",flexDirection:"row",justifyContent:"center",mb:8},o.a.createElement(_.a,{elevation:3,style:{padding:40,margin:32}},o.a.createElement(H.a,{variant:"h6"},"Form Login - For testing Only"),o.a.createElement(Z.a,{id:"email",label:"Email/Username",type:"text",onChange:function(e){return E(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(Z.a,{id:"password",label:"Password",type:"password",onChange:function(e){return f(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(V.a,{variant:"outlined",onClick:function(){S(!0);var e={username:m,password:b};console.log("Data : ",e);M.a.defaults.headers.common={Accept:"application/json","Content-Type":"application/json","x-api-key":"API_BANINDO_KEY",Authorization:"Basic amt0OmpvZ2ph"},M.a.post("http://banindo-api.l.logique.co.id/login",e).then((function(e){S(!1),console.log("Response : ",e)})).catch((function(e){S(!1),console.log(e),i(!0)}))}},!0!==O?"Masuk":o.a.createElement(w.a,{size:16})))),o.a.createElement(h.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:c,autoHideDuration:3e3,onClose:function(){return i(!1)},message:"Whoops, something wwnt wrong !",style:{backgroundColor:t.palette.warning}}))},W=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,null),o.a.createElement(k,null),o.a.createElement(z,null),o.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(115);a(116);var X=Object(i.a)({palette:{primary:{light:"#9b4dcb",main:"#6a1b9a",dark:"#37006a",contrastText:"#ffffff"},secondary:{light:"#ffe54c",main:"#ffb300",dark:"#c68400"},error:{light:"#bf334c",main:"#B00020",dark:"#7b0016",contrastText:"white"},warning:{light:"#ffee33",main:"#ffea00",dark:"#b2a300",contrastText:"white"},success:{light:"#91ff35",main:"#76ff03",dark:"#52b202",contrastText:"white"},common:{white:"#ffffff",black:"black",transparent:"transparent",grey:"grey"}},surface:{main:"#FFFFFF"},background:{main:"#FFFFFF"}});c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{theme:X},o.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t){e.exports="data:image/png;base64,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"},71:function(e,t,a){e.exports=a.p+"static/media/sonic.54939e00.jpg"},84:function(e,t,a){e.exports=a(117)}},[[84,1,2]]]);
//# sourceMappingURL=main.b3166b3a.chunk.js.map