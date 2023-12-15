"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9394,6312,8258],{26312:(X,P,y)=>{y.r(P),y.d(P,{C:()=>E,c:()=>k});var w=y(16424),N=Object.defineProperty,a=(M,d)=>N(M,"name",{value:d,configurable:!0});function _(M,d){for(var h=0;h<d.length;h++){const s=d[h];if(typeof s!="string"&&!Array.isArray(s)){for(const m in s)if(m!=="default"&&!(m in M)){const l=Object.getOwnPropertyDescriptor(s,m);l&&Object.defineProperty(M,m,l.get?l:{enumerable:!0,get:()=>s[m]})}}}return Object.freeze(Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}))}a(_,"_mergeNamespaces");var H=(0,w.r)();const E=(0,w.g)(H),k=_({__proto__:null,default:E},[H])},59394:(X,P,y)=>{y.r(P);var w=y(26312),N=y(8258),a=y(33321),_=y(16424);w.C.registerHelper("hint","graphql",(H,E)=>{const{schema:k,externalFragments:M}=E;if(!k)return;const d=H.getCursor(),h=H.getTokenAt(d),s=h.type!==null&&/"|\w/.test(h.string[0])?h.start:h.end,m=new a.Ly(d.line,s),l={list:(0,a.$1)(k,H.getValue(),m,h,M).map(b=>({text:b.label,type:b.type,description:b.documentation,isDeprecated:b.isDeprecated,deprecationReason:b.deprecationReason})),from:{line:d.line,ch:s},to:{line:d.line,ch:h.end}};return l!=null&&l.list&&l.list.length>0&&(l.from=w.C.Pos(l.from.line,l.from.ch),l.to=w.C.Pos(l.to.line,l.to.ch),w.C.signal(H,"hasCompletion",H,l,h)),l})},8258:(X,P,y)=>{y.r(P),y.d(P,{s:()=>M});var w=y(16424),N=Object.defineProperty,a=(d,h)=>N(d,"name",{value:h,configurable:!0});function _(d,h){for(var s=0;s<h.length;s++){const m=h[s];if(typeof m!="string"&&!Array.isArray(m)){for(const l in m)if(l!=="default"&&!(l in d)){const b=Object.getOwnPropertyDescriptor(m,l);b&&Object.defineProperty(d,l,b.get?b:{enumerable:!0,get:()=>m[l]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}a(_,"_mergeNamespaces");var H={exports:{}};(function(d,h){(function(s){s((0,w.r)())})(function(s){var m="CodeMirror-hint",l="CodeMirror-hint-active";s.showHint=function(t,e,i){if(!e)return t.showHint(i);i&&i.async&&(e.async=!0);var n={hint:e};if(i)for(var o in i)n[o]=i[o];return t.showHint(n)},s.defineExtension("showHint",function(t){t=Z(this,this.getCursor("start"),t);var e=this.listSelections();if(!(e.length>1)){if(this.somethingSelected()){if(!t.hint.supportsSelection)return;for(var i=0;i<e.length;i++)if(e[i].head.line!=e[i].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var n=this.state.completionActive=new b(this,t);n.options.hint&&(s.signal(this,"startCompletion",this),n.update(!0))}}),s.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function b(t,e){if(this.cm=t,this.options=e,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var i=this;t.on("cursorActivity",this.activityFunc=function(){i.cursorActivity()})}}a(b,"Completion");var ht=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},ut=window.cancelAnimationFrame||clearTimeout;b.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&s.signal(this.data,"close"),this.widget&&this.widget.close(),s.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(t,e){var i=t.list[e],n=this;this.cm.operation(function(){i.hint?i.hint(n.cm,t,i):n.cm.replaceRange(L(i),i.from||t.from,i.to||t.to,"complete"),s.signal(t,"pick",i),n.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(ut(this.debounce),this.debounce=0);var t=this.startPos;this.data&&(t=this.data.from);var e=this.cm.getCursor(),i=this.cm.getLine(e.line);if(e.line!=this.startPos.line||i.length-e.ch!=this.startLen-this.startPos.ch||e.ch<t.ch||this.cm.somethingSelected()||!e.ch||this.options.closeCharacters.test(i.charAt(e.ch-1)))this.close();else{var n=this;this.debounce=ht(function(){n.update()}),this.widget&&this.widget.disable()}},update:function(t){if(this.tick!=null){var e=this,i=++this.tick;V(this.options.hint,this.cm,this.options,function(n){e.tick==i&&e.finishUpdate(n,t)})}},finishUpdate:function(t,e){this.data&&s.signal(this.data,"update");var i=this.widget&&this.widget.picked||e&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=t,t&&t.list.length&&(i&&t.list.length==1?this.pick(t,0):(this.widget=new z(this,t),s.signal(t,"shown")))}};function Z(t,e,i){var n=t.options.hintOptions,o={};for(var c in et)o[c]=et[c];if(n)for(var c in n)n[c]!==void 0&&(o[c]=n[c]);if(i)for(var c in i)i[c]!==void 0&&(o[c]=i[c]);return o.hint.resolve&&(o.hint=o.hint.resolve(t,e)),o}a(Z,"parseOptions");function L(t){return typeof t=="string"?t:t.text}a(L,"getText");function Y(t,e){var i={Up:function(){e.moveFocus(-1)},Down:function(){e.moveFocus(1)},PageUp:function(){e.moveFocus(-e.menuSize()+1,!0)},PageDown:function(){e.moveFocus(e.menuSize()-1,!0)},Home:function(){e.setFocus(0)},End:function(){e.setFocus(e.length-1)},Enter:e.pick,Tab:e.pick,Esc:e.close},n=/Mac/.test(navigator.platform);n&&(i["Ctrl-P"]=function(){e.moveFocus(-1)},i["Ctrl-N"]=function(){e.moveFocus(1)});var o=t.options.customKeys,c=o?{}:i;function r(p,u){var g;typeof u!="string"?g=a(function(x){return u(x,e)},"bound"):i.hasOwnProperty(u)?g=i[u]:g=u,c[p]=g}if(a(r,"addBinding"),o)for(var v in o)o.hasOwnProperty(v)&&r(v,o[v]);var f=t.options.extraKeys;if(f)for(var v in f)f.hasOwnProperty(v)&&r(v,f[v]);return c}a(Y,"buildKeyMap");function U(t,e){for(;e&&e!=t;){if(e.nodeName.toUpperCase()==="LI"&&e.parentNode==t)return e;e=e.parentNode}}a(U,"getHintElement");function z(t,e){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=t,this.data=e,this.picked=!1;var i=this,n=t.cm,o=n.getInputField().ownerDocument,c=o.defaultView||o.parentWindow,r=this.hints=o.createElement("ul");r.setAttribute("role","listbox"),r.setAttribute("aria-expanded","true"),r.id=this.id;var v=t.cm.options.theme;r.className="CodeMirror-hints "+v,this.selectedHint=e.selectedHint||0;for(var f=e.list,p=0;p<f.length;++p){var u=r.appendChild(o.createElement("li")),g=f[p],x=m+(p!=this.selectedHint?"":" "+l);g.className!=null&&(x=g.className+" "+x),u.className=x,p==this.selectedHint&&u.setAttribute("aria-selected","true"),u.id=this.id+"-"+p,u.setAttribute("role","option"),g.render?g.render(u,e,g):u.appendChild(o.createTextNode(g.displayText||L(g))),u.hintId=p}var S=t.options.container||o.body,T=n.cursorCoords(t.options.alignWithWord?e.from:null),D=T.left,R=T.bottom,it=!0,I=0,B=0;if(S!==o.body){var dt=["absolute","relative","fixed"].indexOf(c.getComputedStyle(S).position)!==-1,$=dt?S:S.offsetParent,nt=$.getBoundingClientRect(),ot=o.body.getBoundingClientRect();I=nt.left-ot.left-$.scrollLeft,B=nt.top-ot.top-$.scrollTop}r.style.left=D-I+"px",r.style.top=R-B+"px";var W=c.innerWidth||Math.max(o.body.offsetWidth,o.documentElement.offsetWidth),G=c.innerHeight||Math.max(o.body.offsetHeight,o.documentElement.offsetHeight);S.appendChild(r),n.getInputField().setAttribute("aria-autocomplete","list"),n.getInputField().setAttribute("aria-owns",this.id),n.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var O=t.options.moveOnOverlap?r.getBoundingClientRect():new DOMRect,st=t.options.paddingForScrollbar?r.scrollHeight>r.clientHeight+1:!1,F;setTimeout(function(){F=n.getScrollInfo()});var ft=O.bottom-G;if(ft>0){var J=O.bottom-O.top,pt=T.top-(T.bottom-O.top);if(pt-J>0)r.style.top=(R=T.top-J-B)+"px",it=!1;else if(J>G){r.style.height=G-5+"px",r.style.top=(R=T.bottom-O.top-B)+"px";var rt=n.getCursor();e.from.ch!=rt.ch&&(T=n.cursorCoords(rt),r.style.left=(D=T.left-I)+"px",O=r.getBoundingClientRect())}}var j=O.right-W;if(st&&(j+=n.display.nativeBarWidth),j>0&&(O.right-O.left>W&&(r.style.width=W-5+"px",j-=O.right-O.left-W),r.style.left=(D=T.left-j-I)+"px"),st)for(var K=r.firstChild;K;K=K.nextSibling)K.style.paddingRight=n.display.nativeBarWidth+"px";if(n.addKeyMap(this.keyMap=Y(t,{moveFocus:function(A,C){i.changeActive(i.selectedHint+A,C)},setFocus:function(A){i.changeActive(A)},menuSize:function(){return i.screenAmount()},length:f.length,close:function(){t.close()},pick:function(){i.pick()},data:e})),t.options.closeOnUnfocus){var ct;n.on("blur",this.onBlur=function(){ct=setTimeout(function(){t.close()},100)}),n.on("focus",this.onFocus=function(){clearTimeout(ct)})}n.on("scroll",this.onScroll=function(){var A=n.getScrollInfo(),C=n.getWrapperElement().getBoundingClientRect();F||(F=n.getScrollInfo());var at=R+F.top-A.top,Q=at-(c.pageYOffset||(o.documentElement||o.body).scrollTop);if(it||(Q+=r.offsetHeight),Q<=C.top||Q>=C.bottom)return t.close();r.style.top=at+"px",r.style.left=D+F.left-A.left+"px"}),s.on(r,"dblclick",function(A){var C=U(r,A.target||A.srcElement);C&&C.hintId!=null&&(i.changeActive(C.hintId),i.pick())}),s.on(r,"click",function(A){var C=U(r,A.target||A.srcElement);C&&C.hintId!=null&&(i.changeActive(C.hintId),t.options.completeOnSingleClick&&i.pick())}),s.on(r,"mousedown",function(){setTimeout(function(){n.focus()},20)});var lt=this.getSelectedHintRange();return(lt.from!==0||lt.to!==0)&&this.scrollToActive(),s.signal(e,"select",f[this.selectedHint],r.childNodes[this.selectedHint]),!0}a(z,"Widget"),z.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var t=this.completion.cm.getInputField();t.removeAttribute("aria-activedescendant"),t.removeAttribute("aria-owns");var e=this.completion.cm;this.completion.options.closeOnUnfocus&&(e.off("blur",this.onBlur),e.off("focus",this.onFocus)),e.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var t=this;this.keyMap={Enter:function(){t.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(t,e){if(t>=this.data.list.length?t=e?this.data.list.length-1:0:t<0&&(t=e?0:this.data.list.length-1),this.selectedHint!=t){var i=this.hints.childNodes[this.selectedHint];i&&(i.className=i.className.replace(" "+l,""),i.removeAttribute("aria-selected")),i=this.hints.childNodes[this.selectedHint=t],i.className+=" "+l,i.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",i.id),this.scrollToActive(),s.signal(this.data,"select",this.data.list[this.selectedHint],i)}},scrollToActive:function(){var t=this.getSelectedHintRange(),e=this.hints.childNodes[t.from],i=this.hints.childNodes[t.to],n=this.hints.firstChild;e.offsetTop<this.hints.scrollTop?this.hints.scrollTop=e.offsetTop-n.offsetTop:i.offsetTop+i.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=i.offsetTop+i.offsetHeight-this.hints.clientHeight+n.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var t=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-t),to:Math.min(this.data.list.length-1,this.selectedHint+t)}}};function q(t,e){if(!t.somethingSelected())return e;for(var i=[],n=0;n<e.length;n++)e[n].supportsSelection&&i.push(e[n]);return i}a(q,"applicableHelpers");function V(t,e,i,n){if(t.async)t(e,n,i);else{var o=t(e,i);o&&o.then?o.then(n):n(o)}}a(V,"fetchHints");function tt(t,e){var i=t.getHelpers(e,"hint"),n;if(i.length){var o=a(function(c,r,v){var f=q(c,i);function p(u){if(u==f.length)return r(null);V(f[u],c,v,function(g){g&&g.list.length>0?r(g):p(u+1)})}a(p,"run"),p(0)},"resolved");return o.async=!0,o.supportsSelection=!0,o}else return(n=t.getHelper(t.getCursor(),"hintWords"))?function(c){return s.hint.fromList(c,{words:n})}:s.hint.anyword?function(c,r){return s.hint.anyword(c,r)}:function(){}}a(tt,"resolveAutoHints"),s.registerHelper("hint","auto",{resolve:tt}),s.registerHelper("hint","fromList",function(t,e){var i=t.getCursor(),n=t.getTokenAt(i),o,c=s.Pos(i.line,n.start),r=i;n.start<i.ch&&/\w/.test(n.string.charAt(i.ch-n.start-1))?o=n.string.substr(0,i.ch-n.start):(o="",c=i);for(var v=[],f=0;f<e.words.length;f++){var p=e.words[f];p.slice(0,o.length)==o&&v.push(p)}if(v.length)return{list:v,from:c,to:r}}),s.commands.autocomplete=s.showHint;var et={hint:s.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};s.defineOption("hintOptions",null)})})();var E=H.exports;const k=(0,w.g)(E),M=_({__proto__:null,default:k},[E])}}]);})();

//# sourceMappingURL=9394.c5c2ba00.chunk.js.map