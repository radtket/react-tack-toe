(this["webpackJsonpreact-tac-toe"]=this["webpackJsonpreact-tac-toe"]||[]).push([[0],{10:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t(3),r=t.n(a),l=(t(8),t(0));const n=e=>{let{onClick:s,value:t}=e;return Object(l.jsx)("button",{className:"square",onClick:s,type:"button",children:t})};n.defaultProps={value:null};var j=n;var u=e=>{const s=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let t=0;t<s.length;t+=1){const[c,a,r]=s[t];if(e[c]&&e[c]===e[a]&&e[c]===e[r])return e[c]}return null};var i=()=>{const[e,s]=Object(c.useState)({squares:Array(9).fill(null),xIsNext:!0}),t=t=>{s((s=>{const c={...s};c.squares[t]=c.xIsNext?"X":"O",c.xIsNext=!c.xIsNext;const a=u(c.squares),r=a?`Winner: ${a}`:"Next player: "+(e.xIsNext?"X":"O");return{...c,winner:a,status:r}}))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"status",children:e.status}),Object(l.jsxs)("div",{className:"board-row",children:[Object(l.jsx)(j,{onClick:()=>t(0),value:e.squares[0]}),Object(l.jsx)(j,{onClick:()=>t(1),value:e.squares[1]}),Object(l.jsx)(j,{onClick:()=>t(2),value:e.squares[2]})]}),Object(l.jsxs)("div",{className:"board-row",children:[Object(l.jsx)(j,{onClick:()=>t(3),value:e.squares[3]}),Object(l.jsx)(j,{onClick:()=>t(4),value:e.squares[4]}),Object(l.jsx)(j,{onClick:()=>t(5),value:e.squares[5]})]}),Object(l.jsxs)("div",{className:"board-row",children:[Object(l.jsx)(j,{onClick:()=>t(6),value:e.squares[6]}),Object(l.jsx)(j,{onClick:()=>t(7),value:e.squares[7]}),Object(l.jsx)(j,{onClick:()=>t(8),value:e.squares[8]})]})]})};var o=()=>Object(l.jsxs)("div",{className:"game",children:[Object(l.jsx)("div",{className:"game-board",children:Object(l.jsx)(i,{})}),Object(l.jsxs)("div",{className:"game-info",children:[Object(l.jsx)("div",{}),Object(l.jsx)("ol",{})]})]});r.a.render(Object(l.jsx)(o,{}),document.getElementById("root"))},8:function(e,s,t){}},[[10,1,2]]]);
//# sourceMappingURL=main.cbcb20b3.chunk.js.map