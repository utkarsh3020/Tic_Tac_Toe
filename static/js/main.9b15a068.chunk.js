(this.webpackJsonptictac=this.webpackJsonptictac||[]).push([[0],[,,,,,,,,,,,,,function(n,e,t){},function(n,e,t){},,function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var i=t(1),c=t.n(i),a=t(7),r=t.n(a),o=(t(13),t(8)),s=t(2),l={0:[[1,2],[3,6],[4,8]],1:[[0,2],[4,7]],2:[[0,1],[5,8],[4,6]],3:[[0,6],[4,5]],4:[[2,6],[3,5],[1,7],[0,8]],5:[[3,4],[2,8]],6:[[7,8],[0,3],[2,4]],7:[[6,8],[1,4]],8:[[6,7],[2,5],[0,4]]},u=t(4),j=t.n(u),d=(t(14),t(0)),b=function(n){var e=j()({cell:!0,winner:n.canHighlight}),t=j()({"cell-content":!0,populated:n.value});return Object(d.jsx)("button",{className:e,onClick:n.onClick,children:Object(d.jsx)("span",{className:t,children:n.value})})},O=(t(16),function(n){var e=n.cellValues.map((function(e,t){var i=n.winningCombination&&n.winningCombination.indexOf(t)>=0;return Object(d.jsx)(b,{value:e,canHighlight:i,onClick:function(){return n.cellClicked(t)}},t)}));return Object(d.jsx)("div",{id:"board",children:e})}),h=(t(17),function(n){var e=j()({"modal-open":n.isGameOver}),t=n.winner?"Winner is ".concat(n.winner):"It is a tie.";return Object(d.jsx)("div",{id:"modal-overlay",className:e,children:Object(d.jsxs)("div",{id:"game-result-modal",children:[Object(d.jsx)("div",{id:"result-container",children:Object(d.jsx)("div",{id:"winner-container",children:Object(d.jsx)("span",{children:t})})}),Object(d.jsx)("div",{id:"new-game-container",children:Object(d.jsx)("button",{id:"new-game-button",onClick:n.onNewGameClicked,children:"Start New Game"})})]})})}),v=(t(18),function(){var n=Object(i.useState)(["","","","","","","","",""]),e=Object(s.a)(n,2),t=e[0],c=e[1],a=Object(i.useState)(!0),r=Object(s.a)(a,2),u=r[0],j=r[1],b=Object(i.useState)(!1),v=Object(s.a)(b,2),m=v[0],f=v[1],w=Object(i.useState)(9),g=Object(s.a)(w,2),x=g[0],C=g[1],p=Object(i.useState)(),k=Object(s.a)(p,2),S=k[0],N=k[1],G=Object(i.useState)([]),T=Object(s.a)(G,2),F=T[0],R=T[1];return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{id:"game",children:[Object(d.jsx)("h1",{children:"Tic Tac Toe"}),Object(d.jsx)(O,{cellValues:t,winningCombination:F,cellClicked:function(n){if(function(n){return""===t[n]}(n)){var e=Object(o.a)(t);e[n]=u?"X":"O";var i=x-1,a=function(n,e,t){for(var i=l[t],c=0;c<i.length;c++){var a=n[t],r=n[i[c][0]],o=n[i[c][1]];if(a===r&&r===o)return{hasResult:!0,winner:a,winningCombination:[t,i[c][0],i[c][1]]}}return 0===e?{hasResult:!0,winner:void 0,winningCombination:[]}:{hasResult:!1,winner:void 0,winningCombination:[]}}(e,i,n);c(e),j(!u),f(a.hasResult),C(i),N(a.winner),R(a.winningCombination)}}})]}),Object(d.jsx)(h,{isGameOver:m,winner:S,onNewGameClicked:function(){c(["","","","","","","","",""]),j(!0),f(!1),C(9),N(void 0),R([])}})]})});var m=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(v,{})})},f=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),c(n),a(n),r(n)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),f()}],[[19,1,2]]]);
//# sourceMappingURL=main.9b15a068.chunk.js.map