(this["webpackJsonpcocktail-search"]=this["webpackJsonpcocktail-search"]||[]).push([[0],{57:function(e,t,n){e.exports=n(74)},62:function(e,t,n){},64:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),l=(n(62),n(11)),o=n.n(l),s=n(14),m=n(34),d=n(55),u=(n(64),n(90)),g=n(83),p=n(91),h=n(93),w=n(89),E=n(82),b=n(94),k=n(95),x=n(96),f=n(92),v=n(85),y=n(86),j=n(87),I=n(88);function F(){return(F=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail",e.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.drinks);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(){return F.apply(this,arguments)},z=r.a.createContext(),O={button:{border:{radius:"4px"},padding:{vertical:"4px",horizontal:"8px"}}};function D(){var e=Object(a.useContext)(z),t=e.loading,n=e.searchTerm,c=e.mode,i=r.a.useContext(g.a);return r.a.createElement(p.a,null,r.a.createElement(p.a,{tag:"header",direction:"row",align:"center",justify:"between",pad:"medium"},r.a.createElement(h.a,{className:"cocktail",icon:r.a.createElement(v.a,null),plain:!1,color:"cocktail"===c?"#6FFFB0":"brand",onClick:function(){return e.set({mode:"cocktail"})}}),r.a.createElement(h.a,{className:"ingredient",plain:!1,icon:r.a.createElement(y.a,null),style:{marginLeft:"4px",marginRight:"10px"},color:"ingredient"===c?"#6FFFB0":"brand",onClick:function(){return e.set({mode:"ingredient"})}}),r.a.createElement(w.a,{className:"input",placeholder:"cocktail"===c?"Search Cocktails":"Search by Ingredient",value:n,disabled:t,style:{fontSize:"small"===i?"16px":"20px"},onChange:function(t){return e.set({searchTerm:t.target.value})},onKeyPress:function(t){"Enter"===t.key&&n&&N(e)}}),r.a.createElement(h.a,{className:"search",plain:!1,icon:r.a.createElement(j.a,null),primary:!0,color:"#FFCA58",style:{marginLeft:"4px"},onClick:function(){return N(e)},disabled:!n})),r.a.createElement(E.a.Extend,{value:{global:{colors:{text:"brand"}},text:{medium:{size:"16px"}}}},r.a.createElement(p.a,{pad:{horizontal:"medium",vertical:"small"},direction:"row",align:"start",background:"#F2F2F2",justify:"between"},r.a.createElement(h.a,{className:"random",primary:!0,icon:r.a.createElement(I.a,{size:"small",color:"brand"}),label:"Random",style:{marginTop:"0px"},color:"#E6E1F0",onClick:function(){return function(e){return M.apply(this,arguments)}(e)}}))))}function S(){var e=Object(a.useContext)(z),t=e.error,n=e.drinks;return n?r.a.createElement(p.a,{background:"#E8E8E8",wrap:!0,overflow:"scroll",pad:"medium",direction:"row",style:{minHeight:"84.7vh",justifyContent:"center"}},n.map((function(e,t){return r.a.createElement(B,Object.assign({key:t},e))}))):r.a.createElement(p.a,{align:"center",background:"#E8E8E8",height:"84.7vh",pad:"medium"},t&&r.a.createElement("div",{className:"error"},t),r.a.createElement(b.a,null,"Search for cocktails above!"))}function N(e){return T.apply(this,arguments)}function T(){return(T=Object(s.a)(o.a.mark((function e(t){var n,a,r,c,i,l,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.searchTerm,a=t.set,r=t.mode,e.prev=1,c=n,console.log(r),a({error:"",loading:!0,drinks:[]}),i="",i="cocktail"===r?"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(c):"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=".concat(c),e.next=9,fetch(i);case 9:return l=e.sent,e.next=12,l.json();case 12:if(s=e.sent,console.log(s.drinks),s.drinks[0]){e.next=16;break}return e.abrupt("return",a({error:"No drink matching that query"}));case 16:a({drinks:s.drinks,loading:!1,searchTerm:""}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),a({error:"No drink matching that query"});case 22:a({loading:!1});case 23:case"end":return e.stop()}}),e,null,[[1,19]])})))).apply(this,arguments)}function M(){return(M=Object(s.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.set,e.prev=1,n({error:"",loading:!0}),"https://www.thecocktaildb.com/api/json/v1/1/random.php",e.next=6,fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");case 6:return a=e.sent,e.next=9,a.json();case 9:r=e.sent,n({drinks:r.drinks,loading:!1,searchTerm:""}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),n({error:"No drink matching that query"});case 16:n({loading:!1});case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function B(e){var t=Object(a.useContext)(z);return r.a.createElement(p.a,{width:"medium",round:"4px",elevation:"medium",background:"white",direction:"row",height:"small",margin:"small",pad:"medium",onClick:function(){t.set({show:!0,curDrink:e})}},r.a.createElement("img",{alt:"drink",src:e.strDrinkThumb,style:{objectFit:"cover",width:"142px",borderRadius:"4px"}}),r.a.createElement(p.a,{overflow:"hidden",direction:"column",margin:{left:"medium"}},r.a.createElement(k.a,{size:"26px",margin:{top:"none",bottom:"small"}}," ",e.strDrink," "),r.a.createElement(p.a,{wrap:!0,direction:"row",margin:{bottom:"small"}},e.strIngredient1&&r.a.createElement(p.a,{responsive:!1,margin:{vertical:"xsmall",right:"xsmall"},background:"#3D138D",pad:{vertical:"4px",horizontal:"10px"},round:"100px"},r.a.createElement(b.a,{size:"xsmall",weight:"bold"}," ",e.strIngredient1," ")),e.strIngredient2&&r.a.createElement(p.a,{responsive:!1,margin:{vertical:"xsmall"},background:"#3D138D",pad:{vertical:"4px",horizontal:"10px"},round:"100px"},r.a.createElement(b.a,{size:"xsmall",weight:"bold"}," ",e.strIngredient2," "))),r.a.createElement(p.a,null,r.a.createElement(x.a,{size:"small"},e.strInstructions))))}function R(){var e=Object(a.useContext)(z),t=e.show,n=e.curDrink;return r.a.createElement(p.a,null,t&&r.a.createElement(f.a,{full:"horizontal",onEsc:function(){return e.set({show:!1})},onClickOutside:function(){return e.set({show:!1})}},r.a.createElement(p.a,{margin:"medium",style:{justifyContent:"center"}},r.a.createElement(p.a,{overflow:"scroll",wrap:!0,direction:"row",gap:"medium",margin:{bottom:"medium"},style:{justifyContent:"center"}},r.a.createElement(p.a,null,r.a.createElement(k.a,{size:"medium",margin:{top:"none",bottom:"small"}},n.strDrink),r.a.createElement("img",{alt:"drink",src:n.strDrinkThumb,style:{objectFit:"cover",width:"330px",borderRadius:"4px"}})),r.a.createElement(p.a,null,r.a.createElement(p.a,{direction:"row",wrap:!0,align:"center",margin:{top:"large"}},n.strIngredient1?r.a.createElement(p.a,{margin:"xsmall"},r.a.createElement("img",{src:"https://www.thecocktaildb.com/images/ingredients/"+n.strIngredient1+"-Small.png",alt:"ingredient",style:{objectFit:"cover",width:"100px"}}),r.a.createElement(p.a,{direction:"column",align:"center"},r.a.createElement(b.a,{weight:"bold"},n.strIngredient1),r.a.createElement(b.a,null,n.strMeasure1))):null,n.strIngredient2?r.a.createElement(p.a,{margin:"xsmall"},r.a.createElement("img",{src:"https://www.thecocktaildb.com/images/ingredients/"+n.strIngredient2+"-Small.png",alt:"ingredient",style:{objectFit:"cover",width:"100px"}}),r.a.createElement(p.a,{direction:"column",align:"center"},r.a.createElement(b.a,{weight:"bold"},n.strIngredient2),r.a.createElement(b.a,null,n.strMeasure2))):null,n.strIngredient3?r.a.createElement(p.a,{margin:"xsmall"},r.a.createElement("img",{src:"https://www.thecocktaildb.com/images/ingredients/"+n.strIngredient3+"-Small.png",alt:"ingredient",style:{objectFit:"cover",width:"100px"}}),r.a.createElement(p.a,{direction:"column",align:"center"},r.a.createElement(b.a,{weight:"bold"},n.strIngredient3),r.a.createElement(b.a,null,n.strMeasure3))):null,n.strIngredient4?r.a.createElement(p.a,{margin:"xsmall"},r.a.createElement("img",{src:"https://www.thecocktaildb.com/images/ingredients/"+n.strIngredient4+"-Small.png",alt:"ingredient",style:{objectFit:"cover",width:"100px"}}),r.a.createElement(p.a,{direction:"column",align:"center"},r.a.createElement(b.a,{weight:"bold"},n.strIngredient4),r.a.createElement(b.a,null,n.strMeasure4))):null,n.strIngredient5?r.a.createElement(p.a,{margin:"xsmall"},r.a.createElement("img",{src:"https://www.thecocktaildb.com/images/ingredients/"+n.strIngredient5+"-Small.png",alt:"ingredient",style:{objectFit:"cover",width:"100px"}}),r.a.createElement(p.a,{direction:"column",align:"center"},r.a.createElement(b.a,{weight:"bold"},n.strIngredient5),r.a.createElement(b.a,null,n.strMeasure5))):null,n.strIngredient6?r.a.createElement(p.a,{margin:"xsmall"},r.a.createElement("img",{src:"https://www.thecocktaildb.com/images/ingredients/"+n.strIngredient6+"-Small.png",alt:"ingredient",style:{objectFit:"cover",width:"100px"}}),r.a.createElement(p.a,{direction:"column",align:"center"},r.a.createElement(b.a,{weight:"bold"},n.strIngredient6),r.a.createElement(b.a,null,n.strMeasure6))):null),r.a.createElement(x.a,null,n.strInstructions))),r.a.createElement(h.a,{label:"Back",onClick:function(){return e.set({show:!1})},width:"50%"}))))}var q=function(){console.log(C);var e=Object(a.useState)({searchTerm:"",mode:"cocktail",show:!1,curDrink:[]}),t=Object(d.a)(e,2),n=t[0],c=t[1];return r.a.createElement(z.Provider,{value:Object(m.a)({},n,{set:function(e){return c((function(t){return Object(m.a)({},t,{},e)}))}})},r.a.createElement(u.a,{theme:O},r.a.createElement(R,null),r.a.createElement(D,null),r.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.da7b5036.chunk.js.map