(this["webpackJsonpcocktail-search"]=this["webpackJsonpcocktail-search"]||[]).push([[0],{57:function(e,t,a){e.exports=a(74)},62:function(e,t,a){},64:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),l=(a(62),a(11)),o=a.n(l),s=a(14),m=a(34),d=a(55),u=(a(64),a(91)),g=a(83),p=a(92),h=a(94),E=a(90),w=a(82),b=a(95),k=a(96),x=a(97),f=a(93),v=a(85),y=a(86),j=a(87),I=a(88),F=a(89);function C(){return(C=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail",e.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a.drinks);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=function(){return C.apply(this,arguments)},O=r.a.createContext(),D={button:{border:{radius:"4px"},padding:{vertical:"4px",horizontal:"8px"}}};function S(){var e=Object(n.useContext)(O),t=e.loading,a=e.searchTerm,c=e.mode,i=r.a.useContext(g.a);return r.a.createElement(p.a,null,r.a.createElement(p.a,{tag:"header",direction:"row",align:"center",justify:"between",pad:"medium"},r.a.createElement(h.a,{className:"cocktail",icon:r.a.createElement(v.a,null),plain:!1,color:"cocktail"===c?"#6FFFB0":"brand",onClick:function(){return e.set({mode:"cocktail"})}}),r.a.createElement(h.a,{className:"ingredient",plain:!1,icon:r.a.createElement(y.a,null),style:{marginLeft:"4px",marginRight:"10px"},color:"ingredient"===c?"#6FFFB0":"brand",onClick:function(){return e.set({mode:"ingredient"})}}),r.a.createElement(E.a,{className:"input",placeholder:"cocktail"===c?"Search Cocktails":"Search by Ingredient",value:a,disabled:t,style:{fontSize:"small"===i?"16px":"20px"},onChange:function(t){return e.set({searchTerm:t.target.value})},onKeyPress:function(t){"Enter"===t.key&&a&&T(e)}}),r.a.createElement(h.a,{className:"search",plain:!1,icon:r.a.createElement(j.a,null),primary:!0,color:"#FFCA58",style:{marginLeft:"4px"},onClick:function(){return T(e)},disabled:!a})),r.a.createElement(w.a.Extend,{value:{global:{colors:{text:"brand"}},text:{medium:{size:"16px"}}}},r.a.createElement(p.a,{pad:{horizontal:"medium",vertical:"small"},direction:"row",align:"start",background:"#F2F2F2",justify:"between"},r.a.createElement(h.a,{className:"random",primary:!0,icon:r.a.createElement(I.a,{size:"small",color:"brand"}),label:"Random",style:{marginTop:"0px"},color:"#E6E1F0",onClick:function(){return function(e){return B.apply(this,arguments)}(e)}}),r.a.createElement(h.a,{className:"filter",primary:!0,icon:r.a.createElement(F.a,{size:"small",color:"brand"}),label:"Filter",style:{marginTop:"0px"},color:"#E6E1F0",onClick:function(){}}))))}function N(){var e=Object(n.useContext)(O),t=e.error,a=e.drinks;return a?r.a.createElement(p.a,{background:"#E8E8E8",wrap:!0,overflow:"scroll",pad:"medium",direction:"row",alignContent:"start",align:"center",style:{minHeight:"84.7vh"}},a.map((function(e,t){return r.a.createElement(R,Object.assign({key:t},e))}))):r.a.createElement(p.a,{align:"center",background:"#E8E8E8",height:"84.7vh",pad:"medium"},t&&r.a.createElement("div",{className:"error"},t),r.a.createElement(b.a,null,"Search for cocktails above!"))}function T(e){return M.apply(this,arguments)}function M(){return(M=Object(s.a)(o.a.mark((function e(t){var a,n,r,c,i,l,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchTerm,n=t.set,r=t.mode,e.prev=1,c=a,console.log(r),n({error:"",loading:!0,drinks:[]}),i="",i="cocktail"===r?"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(c):"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=".concat(c),e.next=9,fetch(i);case 9:return l=e.sent,e.next=12,l.json();case 12:if(s=e.sent,console.log(s.drinks),s.drinks[0]){e.next=16;break}return e.abrupt("return",n({error:"No drink matching that query"}));case 16:n({drinks:s.drinks,loading:!1,searchTerm:""}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),n({error:"No drink matching that query"});case 22:n({loading:!1});case 23:case"end":return e.stop()}}),e,null,[[1,19]])})))).apply(this,arguments)}function B(){return(B=Object(s.a)(o.a.mark((function e(t){var a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.set,e.prev=1,a({error:"",loading:!0}),"https://www.thecocktaildb.com/api/json/v1/1/random.php",e.next=6,fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");case 6:return n=e.sent,e.next=9,n.json();case 9:r=e.sent,a({drinks:r.drinks,loading:!1,searchTerm:""}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),a({error:"No drink matching that query"});case 16:a({loading:!1});case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function R(e){var t=Object(n.useContext)(O);return r.a.createElement(p.a,{width:"medium",round:"4px",elevation:"medium",background:"white",direction:"row",height:"small",margin:"small",pad:"medium",onClick:function(){t.set({show:!0,curDrink:e})}},r.a.createElement("img",{alt:"drink",src:e.strDrinkThumb,style:{objectFit:"cover",width:"142px",borderRadius:"4px"}}),r.a.createElement(p.a,{overflow:"hidden",direction:"column",margin:{left:"medium"}},r.a.createElement(k.a,{size:"26px",margin:{top:"none",bottom:"small"}}," ",e.strDrink," "),r.a.createElement(p.a,{wrap:!0,direction:"row",margin:{bottom:"small"}},e.strIngredient1&&r.a.createElement(p.a,{responsive:!1,margin:{vertical:"xsmall",right:"xsmall"},background:"#3D138D",pad:{vertical:"4px",horizontal:"10px"},round:"100px"},r.a.createElement(b.a,{size:"xsmall",weight:"bold"}," ",e.strIngredient1," ")),e.strIngredient2&&r.a.createElement(p.a,{responsive:!1,margin:{vertical:"xsmall"},background:"#3D138D",pad:{vertical:"4px",horizontal:"10px"},round:"100px"},r.a.createElement(b.a,{size:"xsmall",weight:"bold"}," ",e.strIngredient2," "))),r.a.createElement(p.a,null,r.a.createElement(x.a,{size:"small"},e.strInstructions))))}function q(){var e=Object(n.useContext)(O),t=e.show,a=e.curDrink;return r.a.createElement(p.a,null,t&&r.a.createElement(f.a,{full:"horizontal",onEsc:function(){return e.set({show:!1})},onClickOutside:function(){return e.set({show:!1})}},r.a.createElement(p.a,{margin:"medium"},r.a.createElement(k.a,{size:"medium",margin:{top:"none",bottom:"small"}},a.strDrink),r.a.createElement(p.a,{overflow:"scroll",wrap:!0,direction:"row",gap:"medium",margin:{bottom:"medium"}},r.a.createElement(p.a,null,r.a.createElement("img",{alt:"drink",src:a.strDrinkThumb,style:{objectFit:"cover",width:"330px",borderRadius:"4px"}})),r.a.createElement(p.a,null,r.a.createElement(p.a,{direction:"row",wrap:!0,align:"center",margin:{top:"small"}},a.strIngredient1?r.a.createElement(p.a,{margin:"xsmall"},r.a.createElement("img",{src:"https://www.thecocktaildb.com/images/ingredients/"+a.strIngredient1+"-Small.png",alt:"ingredient",style:{objectFit:"cover",width:"100px"}}),r.a.createElement(p.a,{direction:"column",align:"center"},r.a.createElement(b.a,{weight:"bold"},a.strIngredient1),r.a.createElement(b.a,null,a.strMeasure1))):null,a.strIngredient2?r.a.createElement(p.a,{margin:"xsmall"},r.a.createElement("img",{src:"https://www.thecocktaildb.com/images/ingredients/"+a.strIngredient2+"-Small.png",alt:"ingredient",style:{objectFit:"cover",width:"100px"}}),r.a.createElement(p.a,{direction:"column",align:"center"},r.a.createElement(b.a,{weight:"bold"},a.strIngredient2),r.a.createElement(b.a,null,a.strMeasure2))):null,a.strIngredient3?r.a.createElement(p.a,{margin:"xsmall"},r.a.createElement("img",{src:"https://www.thecocktaildb.com/images/ingredients/"+a.strIngredient3+"-Small.png",alt:"ingredient",style:{objectFit:"cover",width:"100px"}}),r.a.createElement(p.a,{direction:"column",align:"center"},r.a.createElement(b.a,{weight:"bold"},a.strIngredient3),r.a.createElement(b.a,null,a.strMeasure3))):null,a.strIngredient4?r.a.createElement(p.a,{margin:"xsmall"},r.a.createElement("img",{src:"https://www.thecocktaildb.com/images/ingredients/"+a.strIngredient4+"-Small.png",alt:"ingredient",style:{objectFit:"cover",width:"100px"}}),r.a.createElement(p.a,{direction:"column",align:"center"},r.a.createElement(b.a,{weight:"bold"},a.strIngredient4),r.a.createElement(b.a,null,a.strMeasure4))):null,a.strIngredient5?r.a.createElement(p.a,{margin:"xsmall"},r.a.createElement("img",{src:"https://www.thecocktaildb.com/images/ingredients/"+a.strIngredient5+"-Small.png",alt:"ingredient",style:{objectFit:"cover",width:"100px"}}),r.a.createElement(p.a,{direction:"column",align:"center"},r.a.createElement(b.a,{weight:"bold"},a.strIngredient5),r.a.createElement(b.a,null,a.strMeasure5))):null,a.strIngredient6?r.a.createElement(p.a,{margin:"xsmall"},r.a.createElement("img",{src:"https://www.thecocktaildb.com/images/ingredients/"+a.strIngredient6+"-Small.png",alt:"ingredient",style:{objectFit:"cover",width:"100px"}}),r.a.createElement(p.a,{direction:"column",align:"center"},r.a.createElement(b.a,{weight:"bold"},a.strIngredient6),r.a.createElement(b.a,null,a.strMeasure6))):null),r.a.createElement(x.a,null,a.strInstructions))),r.a.createElement(h.a,{label:"Back",onClick:function(){return e.set({show:!1})}}))))}var J=function(){console.log(z);var e=Object(n.useState)({searchTerm:"",mode:"cocktail",show:!1,curDrink:[]}),t=Object(d.a)(e,2),a=t[0],c=t[1];return r.a.createElement(O.Provider,{value:Object(m.a)({},a,{set:function(e){return c((function(t){return Object(m.a)({},t,{},e)}))}})},r.a.createElement(u.a,{theme:D},r.a.createElement(q,null),r.a.createElement(S,null),r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.5c284977.chunk.js.map