(window.webpackJsonpvizsort=window.webpackJsonpvizsort||[]).push([[0],{101:function(t,e,n){t.exports=n(159)},106:function(t,e,n){},107:function(t,e,n){},108:function(t,e,n){},159:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(19),o=n.n(i),s=(n(106),n(107),n(108),n(13)),d=n(30),c=n(31),l=n(34),u=n(32),h=n(35),f=n(14),g=n(33),p=function(t){return t.gridSize},m=function(t){return t.gridData},b=function(t){return{type:"CHANGE_GRID_SIZE",payload:t}},v=n(163),S=n(165),D=n(166),y=n(164),G=n(96),w=n(162),O=n(95),E=n(44);function j(){var t=Object(s.a)(["\n        cursor: grabbing;\n    "]);return j=function(){return t},t}function z(){var t=Object(s.a)(["\n    cursor: grab;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n    background-color: #d3d3d3;\n\n    ::before {\n        content: '","';\n        position: absolute;\n        top: -50%;\n        transform: translateY(-50%);\n        font-size: 10px;\n    }\n\n    ",";\n"]);return z=function(){return t},t}function M(){var t=Object(s.a)(["\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 9.5rem;\n    height: 5px;\n    border-radius: 2px;\n    background-color: #007bff;\n"]);return M=function(){return t},t}function k(){var t=Object(s.a)(["\n    position: relative;\n    width: 10rem;\n    height: 2rem; \n"]);return k=function(){return t},t}var x=function(t){function e(t){var n;return Object(d.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={isDragging:!1,originalX:0,translateX:0,lastTranslateX:0,boundingWidth:0,maxGridSize:50,currGridSize:25},n.handleMouseDown=n.handleMouseDown.bind(Object(E.a)(n)),n.handleMouseMove=n.handleMouseMove.bind(Object(E.a)(n)),n.handleMouseUp=n.handleMouseUp.bind(Object(E.a)(n)),n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.xPosition,e=this.refs.barRef.clientWidth-16;this.setState({xPosition:t,boundingWidth:e,translateX:e/2,lastTranslateX:e/2})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp)}},{key:"handleMouseDown",value:function(t){var e=t.clientX;window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp),this.setState({originalX:e,isDragging:!0})}},{key:"handleMouseMove",value:function(t){var e=t.clientX,n=this.state,a=n.isDragging,r=n.boundingWidth,i=n.originalX,o=n.lastTranslateX,s=e-i+o;if(a){s>r&&(s=r),s<0&&(s=0),this.setState({translateX:s});var d=this.refs.barRef.clientWidth-16,c=this.state.maxGridSize,l=Math.round(o/d*c);l=l>2?l:2,this.setState({currGridSize:l})}}},{key:"handleMouseUp",value:function(){this.setState({originalX:0,lastTranslateX:this.state.translateX,isDragging:!1}),this.handleGridSizeChange(),window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp)}},{key:"handleGridSizeChange",value:function(){var t=this.refs.barRef.clientWidth-16,e=this.state,n=e.lastTranslateX,a=e.maxGridSize,r=Math.round(n/t*a);this.props.changeGridSize(r>2?r:2),this.props.createNewGrid()}},{key:"handleLocalGridSizeChange",value:function(){var t=this.refs.barRef.clientWidth-16,e=this.state,n=e.lastTranslateX,a=e.maxGridSize,r=Math.round(n/t*a);r=r>2?r:2,this.setState({currGridSize:r})}},{key:"render",value:function(){var t=this.state,e=t.translateX,n=t.currGridSize,a=t.isDragging;return r.a.createElement(C,null,r.a.createElement(N,{ref:"barRef"},r.a.createElement(L,{ref:"ballRef",onMouseDown:this.handleMouseDown,x:e,currGridSize:n,isDragging:a})))}}]),e}(a.Component),C=f.b.div(k()),N=f.b.div(M()),L=f.b.div.attrs({style:function(t){var e=t.x;return{transform:"translate(".concat(e,"px, -50%)")}}})(z(),function(t){return t.currGridSize},function(t){return t.isDragging&&Object(f.a)(j())}),T=Object(g.b)(function(t){return{gridSize:p(t)}},{changeGridSize:b})(x);function W(){var t=Object(s.a)(["\n    color: #007bff;\n    margin-left: 5px;\n    border: 1px solid #007bff;\n\n    &:hover, &:active, &:focus {\n        background-color: #007bff !important;\n        border: 1px solid #007bff !important;\n        box-shadow: none !important;\n        outline: none;\n\n    }\n"]);return W=function(){return t},t}function I(){var t=Object(s.a)(["\n    width: calc(15px + 100%);\n    border-bottom: 2px solid #eee;\n"]);return I=function(){return t},t}function R(){var t=Object(s.a)(["\n    width: 100%;\n    max-width: 100%;\n    margin: 0;\n    padding-left: 0;\n    padding-right: 0;\n"]);return R=function(){return t},t}function U(){var t=Object(s.a)(["\n    font-family: cursive;\n"]);return U=function(){return t},t}var X=function(t){return t.map(function(t){return{x:t.x,y:t.y,color:0}})},_=function(t){function e(t){var n;return Object(d.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleGridSizeChange=function(){n.props.changeGridSize(n.state.gridSize)},n.handleCreateNewGrid=function(){for(var t=n.props.gridSize,e=[],a=0;a<t;a++)e.push({x:a,y:Math.floor(25*Math.random())+1,color:0});n.resetAllEvents(),n.setState({gridDataLength:e.length,originalGridData:JSON.parse(JSON.stringify(e))}),n.props.setGridData(e)},n.handleResetGrid=function(){n.resetAllEvents(),n.setState({gridDataLength:n.state.originalGridData.length}),n.props.setGridData(JSON.parse(JSON.stringify(n.state.originalGridData)))},n.handleSelectionSort=function(){for(var t,e,a,r,i,o=n.state.gridDataLength,s=function(s){setTimeout(function(){for(i=n.props.gridData,r=s+1;r<o;r++)(i=X(i))[s].color=4,t=i[s].y,e=s,i[r].y<t&&(t=i[r].y,i[e=r].color=2,n.props.setGridData(i)),a=i[s].y,i[s].y=t,i[e].y=a;n.props.setGridData(i),s===o-2&&(n.props.setGridData(X(i)),n.setState({gridDataLength:i.length}))},200*s)},d=0;d<o-1;++d)s(d)},n.handleStalinsort=function(){for(var t=n.props.gridData,e=n.state.gridDataLength,a=0,r=function(r){setTimeout(function(){if(t[a].y>t[a+1].y){(t=X(t))[a].color=4,t.splice(a+1,1);for(var i=a+1;i<e-(r-a)-1;i++)t[i].x--;a--}n.props.setGridData(t),a++,r===e-2&&(n.props.setGridData(X(t)),n.setState({gridDataLength:t.length}))},200*r)},i=0;i<e-1;i++)r(i)},n.handleInsertionSort=function(){for(var t,e,a=n.props.gridData,r=n.state.gridDataLength,i=function(i){setTimeout(function(){for(e=a[i].y,t=i-1;t>=0&&e<a[t].y;t--)a[t+1].y=a[t].y,t+1===i?a[i].color=4:a[t+1].color=2,a[t].color=2,n.props.setGridData(a);a[t+1].y=e,n.props.setGridData(a),a=X(a),i===r-1&&(a=X(a),n.props.setGridData(a))},200*i)},o=1;o<r;o++)i(o)},n.handleGnomeSort=function(){for(var t=n.props.gridData,e=JSON.parse(JSON.stringify(t)),a=n.state.gridDataLength,r=0,i=0;r<a;)if(i++,0==r&&r++,e[r].y>=e[r-1].y)r++;else{var o=e[r].y;e[r].y=e[r-1].y,e[r-1].y=o,r--}r=0;for(var s=function(e){setTimeout(function(){if(t=X(t),r>0){if(t[r].color=4,t[r-1].color=2,n.props.setGridData(t),t[r].y<t[r-1].y){var a=t[r].y;t[r].y=t[r-1].y,t[r-1].y=a,r-=2}n.props.setGridData(t)}r++,e===i-1&&(t=X(t),n.props.setGridData(t))},50*e)},d=0;d<i;d++)s(d)},n.state={gridSize:12,originalGridData:[],gridDataLength:0},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=window.innerWidth,e=document.getElementById("basic-nav-dropdown");this.setState({gridDataLength:this.props.gridData.length,originalGridData:JSON.parse(JSON.stringify(this.props.gridData))}),t<992&&(e.style.paddingLeft=0)}},{key:"resetAllEvents",value:function(){for(var t=setTimeout(";"),e=0;e<t;e++)clearTimeout(e)}},{key:"render",value:function(){this.state.gridSize;return r.a.createElement(A,{id:"navbar"},r.a.createElement(H,{bg:"light",expand:"lg"},r.a.createElement(v.a.Brand,{href:"#home"},"Viz-Sort"),r.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(S.a,{className:"mr-auto"},r.a.createElement(S.a.Link,{onClick:this.handleCreateNewGrid},"New"),r.a.createElement(S.a.Link,{onClick:this.handleResetGrid},"Reset")),r.a.createElement(T,{createNewGrid:this.handleCreateNewGrid}),r.a.createElement(D.a,{title:"Sorts",id:"basic-nav-dropdown"},r.a.createElement(D.a.Item,{onClick:this.handleStalinsort},"Stalin Sort"),r.a.createElement(D.a.Item,{onClick:this.handleSelectionSort},"Selection Sort"),r.a.createElement(D.a.Item,{onClick:this.handleInsertionSort},"Insertion Sort"),r.a.createElement(D.a.Item,{onClick:this.handleGnomeSort},"Gnome Sort")),r.a.createElement(y.a,{inline:!0},r.a.createElement(J,{type:"text",placeholder:"F(x)=",className:"size_ctrl"}),r.a.createElement(P,{variant:"outline-success",onClick:this.handleGridSizeChange},"Generate Graph")))))}}]),e}(a.Component),J=Object(f.b)(G.a)(U()),A=Object(f.b)(w.a)(R()),H=Object(f.b)(v.a)(I()),P=Object(f.b)(O.a)(W()),B=Object(g.b)(function(t){return{gridData:m(t),gridSize:p(t)}},{changeGridSize:b,createNewGrid:function(t){return{type:"CREATE_NEW_GRID",payload:t}},setGridData:function(t){return{type:"SET_GRID_DATA",payload:t}}})(_),Y=(n(133),n(74));n(152);function V(){var t=Object(s.a)(["\n    width: 100%;\n"]);return V=function(){return t},t}var Z=function(t){function e(t){var n;return Object(d.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={gridSize:12,innerWidth:200,innerHeight:200,gridHeight:0,gridData:[],dataSwapPoints:[]},n.gridWrap=r.a.createRef(),n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=window,e=t.innerWidth,n=t.innerHeight,a=document.getElementById("navbar").clientHeight,r=this.props,i=r.gridData,o=r.dataSwapPoints;this.setState({innerWidth:e,innerHeight:n,gridData:i,gridHeight:window.innerHeight-a,dataSwapPoints:o}),this.forceUpdate()}},{key:"shouldComponentUpdate",value:function(t,e){var n=t.gridData,a=t.dataSwapPoints,r=this.props.numGridDataUpdated;return t.numGridDataUpdated!==r&&(this.setState({gridData:n,dataSwapPoints:a}),this.forceUpdate(),!0)}},{key:"render",value:function(){var t=this.state,e=t.innerWidth,n=(t.innerHeight,t.gridData),a=t.gridHeight;return r.a.createElement(F,{ref:this.gridWrap},r.a.createElement(Y.b,{stackBy:"y",height:a,width:e,colorDomain:[0,1,2,3,4]},r.a.createElement(Y.a,{data:n,animation:!0})))}}]),e}(a.Component),F=f.b.div(V()),$=Object(g.b)(function(t){var e=m(t);return{numGridDataUpdated:t.numGridDataUpdated,gridData:e}})(Z);function q(){var t=Object(s.a)(["\n  /* position: absolute;\n  width: 89.55%;\n  height: 80%;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: .5rem 1rem; */\n  background-color: white;\n"]);return q=function(){return t},t}function K(){var t=Object(s.a)(["\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin: 0;\n  margin-left: -15px;\n"]);return K=function(){return t},t}function Q(){var t=Object(s.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background-color: white;\n"]);return Q=function(){return t},t}var tt=function(t){function e(t){var n;return Object(d.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).store=n.props.store,n.state={canvasSize:12},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement(et,null,r.a.createElement(B,{defaultValue:this.state.canvasSize,store:this.store}),r.a.createElement(nt,null,r.a.createElement(at,null,r.a.createElement($,null))))}}]),e}(a.Component),et=f.b.div(Q()),nt=Object(f.b)(w.a)(K()),at=f.b.div(q());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));for(var rt=n(52),it=[],ot=0;ot<25;ot++)it.push({x:ot,y:Math.floor(25*Math.random())+1,color:0});var st={gridSize:it.length,gridData:JSON.parse(JSON.stringify(it)),numGridDataUpdated:0},dt=Object(rt.b)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE_GRID_SIZE":return Object.assign({},t,{gridSize:e.payload||25});case"CREATE_NEW_GRID":return Object.assign({},t,{gridData:e.payload||[],numGridDataUpdated:Math.round(1e3*Math.random())});case"SET_GRID_DATA":return Object.assign({},t,{gridData:e.payload||[],numGridDataUpdated:++t.numGridDataUpdated});default:return t}});o.a.render(r.a.createElement(g.a,{store:dt},r.a.createElement(tt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[101,1,2]]]);
//# sourceMappingURL=main.258a3ae7.chunk.js.map