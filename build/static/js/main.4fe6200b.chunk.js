(window.webpackJsonpvizsort=window.webpackJsonpvizsort||[]).push([[0],{102:function(t,e,n){},103:function(t,e,n){},104:function(t,e,n){},146:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(14),o=n.n(i),s=(n(102),n(103),n(104),n(9)),d=n(23),c=n(24),l=n(28),u=n(25),h=n(27),p=n(10),f=n(26),g=n(151),v=function(t){return t.gridSize},m=function(t){return t.gridData},b=function(t){return{type:"CHANGE_GRID_SIZE",payload:t}},D=n(152),y=n(155),w=n(154),S=n(153),E=n(91),G=n(150),O=n(90),j=n(41);function x(){var t=Object(s.a)(["\n        cursor: grabbing;\n    "]);return x=function(){return t},t}function k(){var t=Object(s.a)(["\n    cursor: grab;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n    background-color: #d3d3d3;\n\n    ",";\n"]);return k=function(){return t},t}function M(){var t=Object(s.a)(["\n    position: absolute;\n    top: -50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 10px;\n"]);return M=function(){return t},t}function z(){var t=Object(s.a)(["\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 9.5rem;\n    height: 5px;\n    border-radius: 2px;\n    background-color: #007bff;\n"]);return z=function(){return t},t}function N(){var t=Object(s.a)(["\n    position: relative;\n    width: 10rem;\n    height: 2rem; \n"]);return N=function(){return t},t}var C=function(t){function e(t){var n;return Object(d.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={isDragging:!1,originalX:0,translateX:0,lastTranslateX:0,boundingWidth:0,maxGridSize:50,currGridSize:25},n.handleMouseDown=n.handleMouseDown.bind(Object(j.a)(n)),n.handleMouseMove=n.handleMouseMove.bind(Object(j.a)(n)),n.handleMouseUp=n.handleMouseUp.bind(Object(j.a)(n)),n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.xPosition,e=this.refs.barRef.clientWidth-16;this.setState({xPosition:t,boundingWidth:e,translateX:e/2,lastTranslateX:e/2})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp)}},{key:"handleMouseDown",value:function(t){var e=t.clientX;window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp),this.setState({originalX:e,isDragging:!0})}},{key:"handleMouseMove",value:function(t){var e=t.clientX,n=this.state,a=n.isDragging,r=n.boundingWidth,i=e-n.originalX+n.lastTranslateX;a&&(i>r&&(i=r),i<0&&(i=0),this.setState({translateX:i}))}},{key:"handleMouseUp",value:function(){this.setState({originalX:0,lastTranslateX:this.state.translateX,isDragging:!1}),this.handleGridSizeChange(),window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp)}},{key:"handleGridSizeChange",value:function(){var t=this.refs.barRef.clientWidth-16,e=this.state,n=e.lastTranslateX,a=e.maxGridSize,r=Math.round(n/t*a);this.props.changeGridSize(r>2?r:2),this.props.createNewGrid()}},{key:"handleLocalGridSizeChange",value:function(){var t=this.state,e=t.boundingWidth,n=t.lastTranslateX,a=t.maxGridSize,r=Math.round(n/e*a);return r>2?r:2}},{key:"render",value:function(){var t=this.state,e=t.translateX,n=t.isDragging,a=this.handleLocalGridSizeChange();return r.a.createElement(L,null,r.a.createElement(I,{ref:"barRef"},r.a.createElement(T,{ref:"ballRef",onMouseDown:this.handleMouseDown,x:e,isDragging:n},r.a.createElement(R,null,a))))}}]),e}(a.Component),L=p.b.div(N()),I=p.b.div(z()),R=p.b.div(M()),T=p.b.div.attrs({style:function(t){var e=t.x;return{transform:"translate(".concat(e,"px, -50%)")}}})(k(),function(t){return t.isDragging&&Object(p.a)(x())}),U=Object(f.b)(function(t){return{gridSize:v(t)}},{changeGridSize:b})(C);function W(){var t=Object(s.a)(["\n    color: #007bff;\n    margin-left: 5px;\n    border: 1px solid #007bff;\n\n    &:hover, &:active, &:focus {\n        background-color: #007bff !important;\n        border: 1px solid #007bff !important;\n        box-shadow: none !important;\n        outline: none;\n\n    }\n"]);return W=function(){return t},t}function X(){var t=Object(s.a)(["\n    width: calc(15px + 100%);\n    border-bottom: 2px solid #eee;\n"]);return X=function(){return t},t}function A(){var t=Object(s.a)(["\n    width: 100%;\n    max-width: 100%;\n    margin: 0;\n    padding-left: 0;\n    padding-right: 0;\n"]);return A=function(){return t},t}function _(){var t=Object(s.a)(["\n    font-family: cursive;\n    box-sizing: border-box;\n    :active {\n        outline: none;\n    }\n"]);return _=function(){return t},t}var J=function(t){return t.map(function(t){return{x:t.x,y:t.y,color:0}})},H=function(t){function e(t){var n;return Object(d.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleGridSizeChange=function(){n.props.changeGridSize(n.state.gridSize)},n.handleCreateNewGrid=function(){for(var t=n.props.gridSize,e=[],a=0;a<t;a++)e.push({x:a,y:Math.floor(25*Math.random())+1,color:0});n.resetAllEvents(),n.setState({gridDataLength:e.length,originalGridData:JSON.parse(JSON.stringify(e))}),n.props.setGridData(e)},n.handleResetGrid=function(){n.resetAllEvents(),n.setState({gridDataLength:n.state.originalGridData.length}),n.props.setGridData(JSON.parse(JSON.stringify(n.state.originalGridData)))},n.handleSelectionSort=function(){var t,e,a,r,i,o=n.state.gridDataLength;n.resetAllEvents();for(var s=function(s){setTimeout(function(){for(i=n.props.gridData,r=s+1;r<o;r++)(i=J(i))[s].color=4,t=i[s].y,e=s,i[r].y<t&&(t=i[r].y,i[e=r].color=2,n.props.setGridData(i)),a=i[s].y,i[s].y=t,i[e].y=a;n.props.setGridData(i),s===o-2&&(n.props.setGridData(J(i)),n.setState({gridDataLength:i.length}))},200*s)},d=0;d<o-1;++d)s(d)},n.handleStalinsort=function(){var t=n.props.gridData,e=n.state.gridDataLength,a=0;n.resetAllEvents();for(var r=function(r){setTimeout(function(){if(t[a].y>t[a+1].y){(t=J(t))[a].color=4,t.splice(a+1,1);for(var i=a+1;i<e-(r-a)-1;i++)t[i].x--;a--}n.props.setGridData(t),a++,r===e-2&&(n.props.setGridData(J(t)),n.setState({gridDataLength:t.length}))},200*r)},i=0;i<e-1;i++)r(i)},n.handleInsertionSort=function(){var t,e,a=n.props.gridData,r=n.state.gridDataLength;n.resetAllEvents();for(var i=function(i){setTimeout(function(){for(e=a[i].y,t=i-1;t>=0&&e<a[t].y;t--)a[t+1].y=a[t].y,t+1===i?a[i].color=4:a[t+1].color=2,a[t].color=2,n.props.setGridData(a);a[t+1].y=e,n.props.setGridData(a),a=J(a),i===r-1&&(a=J(a),n.props.setGridData(a))},200*i)},o=1;o<r;o++)i(o)},n.handleGnomeSort=function(){var t=n.props.gridData,e=JSON.parse(JSON.stringify(t)),a=n.state.gridDataLength,r=0,i=0;for(n.resetAllEvents();r<a;)if(i++,0===r&&r++,e[r].y>=e[r-1].y)r++;else{var o=e[r].y;e[r].y=e[r-1].y,e[r-1].y=o,r--}r=0;for(var s=function(e){setTimeout(function(){if(t=J(t),r>0){if(t[r].color=4,t[r-1].color=2,n.props.setGridData(t),t[r].y<t[r-1].y){var a=t[r].y;t[r].y=t[r-1].y,t[r-1].y=a,r-=2}n.props.setGridData(t)}r++,e===i-1&&(t=J(t),n.props.setGridData(t))},50*e)},d=0;d<i;d++)s(d)},n.submitNewExpression=function(t){"Enter"===t.key&&n.handleNewExpression()},n.handleNewExpression=function(){var t=n.props.gridData,e=n.refs.newGraphRef.value,a=n.refs.newGraphRef;try{Object(g.a)(e).evaluate({x:1})}catch(i){return console.log("Invalid expression: ".concat(e)),a.style.border="2px solid red",null}var r=Object(g.a)(e);n.resetAllEvents(),t=t.map(function(t){return{x:t.x,y:r.evaluate({x:t.x}),color:t.color}}),n.props.setGridData(t)},n.state={gridSize:12,originalGridData:[],gridDataLength:0},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=window.innerWidth,e=document.getElementById("basic-nav-dropdown");this.setState({gridDataLength:this.props.gridData.length,originalGridData:JSON.parse(JSON.stringify(this.props.gridData))}),t<992&&(e.style.paddingLeft=0)}},{key:"resetAllEvents",value:function(){for(var t=setTimeout(";"),e=0;e<t;e++)clearTimeout(e)}},{key:"render",value:function(){return r.a.createElement(B,{id:"navbar"},r.a.createElement(V,{bg:"light",expand:"lg"},r.a.createElement(D.a.Brand,{href:"#home"},"Viz-Sort"),r.a.createElement(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(D.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(y.a,{className:"mr-auto"},r.a.createElement(y.a.Link,{onClick:this.handleCreateNewGrid},"New"),r.a.createElement(y.a.Link,{onClick:this.handleResetGrid},"Reset")),r.a.createElement(U,{createNewGrid:this.handleCreateNewGrid}),r.a.createElement(w.a,{title:"Sorts",id:"basic-nav-dropdown"},r.a.createElement(w.a.Item,{onClick:this.handleStalinsort},"Stalin Sort"),r.a.createElement(w.a.Item,{onClick:this.handleSelectionSort},"Selection Sort"),r.a.createElement(w.a.Item,{onClick:this.handleInsertionSort},"Insertion Sort"),r.a.createElement(w.a.Item,{onClick:this.handleGnomeSort},"Gnome Sort")),r.a.createElement(S.a,{action:"javascript:void(-1)",onKeyDown:this.submitNewExpression,inline:!0},r.a.createElement(P,{type:"text",placeholder:"F(x)",ref:"newGraphRef",className:"size_ctrl"}),r.a.createElement(Y,{variant:"outline-success",onClick:this.handleNewExpression},"Generate Graph")))))}}]),e}(a.Component),P=Object(p.b)(E.a)(_()),B=Object(p.b)(G.a)(A()),V=Object(p.b)(D.a)(X()),Y=Object(p.b)(O.a)(W()),Z=Object(f.b)(function(t){return{gridData:m(t),gridSize:v(t)}},{changeGridSize:b,createNewGrid:function(t){return{type:"CREATE_NEW_GRID",payload:t}},setGridData:function(t){return{type:"SET_GRID_DATA",payload:t}}})(H),F=n(69);function K(){var t=Object(s.a)(["\n    width: 100%;\n"]);return K=function(){return t},t}var $=function(t){function e(t){var n;return Object(d.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={gridSize:12,innerWidth:200,innerHeight:200,gridHeight:0,gridData:[],dataSwapPoints:[]},n.gridWrap=r.a.createRef(),n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=window,e=t.innerWidth,n=t.innerHeight,a=document.getElementById("navbar").clientHeight,r=this.props,i=r.gridData,o=r.dataSwapPoints;this.setState({innerWidth:e,innerHeight:n,gridData:i,gridHeight:window.innerHeight-a,dataSwapPoints:o}),this.forceUpdate()}},{key:"shouldComponentUpdate",value:function(t,e){var n=t.gridData,a=t.dataSwapPoints,r=this.props.numGridDataUpdated;return t.numGridDataUpdated!==r&&(this.setState({gridData:n,dataSwapPoints:a}),this.forceUpdate(),!0)}},{key:"render",value:function(){var t=this.state,e=t.innerWidth,n=t.gridData,a=t.gridHeight;return r.a.createElement(q,{ref:this.gridWrap},r.a.createElement(F.b,{stackBy:"y",height:a,width:e,colorDomain:[0,1,2,3,4]},r.a.createElement(F.a,{data:n,animation:!0})))}}]),e}(a.Component),q=p.b.div(K()),Q=Object(f.b)(function(t){var e=m(t);return{numGridDataUpdated:t.numGridDataUpdated,gridData:e}})($);function tt(){var t=Object(s.a)(["\n  /* position: absolute;\n  width: 89.55%;\n  height: 80%;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: .5rem 1rem; */\n  background-color: white;\n"]);return tt=function(){return t},t}function et(){var t=Object(s.a)(["\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin: 0;\n  margin-left: -15px;\n"]);return et=function(){return t},t}function nt(){var t=Object(s.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background-color: white;\n"]);return nt=function(){return t},t}var at=function(t){function e(t){var n;return Object(d.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).store=n.props.store,n.state={canvasSize:12},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement(rt,null,r.a.createElement(Z,{defaultValue:this.state.canvasSize,store:this.store}),r.a.createElement(it,null,r.a.createElement(ot,null,r.a.createElement(Q,null))))}}]),e}(a.Component),rt=p.b.div(nt()),it=Object(p.b)(G.a)(et()),ot=p.b.div(tt());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));for(var st=n(46),dt=[],ct=0;ct<25;ct++)dt.push({x:ct,y:Math.floor(25*Math.random())+1,color:0});var lt={gridSize:dt.length,gridData:JSON.parse(JSON.stringify(dt)),numGridDataUpdated:0},ut=Object(st.b)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE_GRID_SIZE":return Object.assign({},t,{gridSize:e.payload||25});case"CREATE_NEW_GRID":return Object.assign({},t,{gridData:e.payload||[],numGridDataUpdated:Math.round(1e3*Math.random())});case"SET_GRID_DATA":return Object.assign({},t,{gridData:e.payload||[],numGridDataUpdated:++t.numGridDataUpdated});default:return t}});o.a.render(r.a.createElement(f.a,{store:ut},r.a.createElement(at,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},97:function(t,e,n){t.exports=n(146)}},[[97,1,2]]]);
//# sourceMappingURL=main.4fe6200b.chunk.js.map