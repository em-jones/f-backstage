"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1296],{1296:(S,i,t)=>{t.r(i),t.d(i,{EntityLabelsCard:()=>p,hasLabels:()=>f});var u=t(78373),a=t(2784),r=t(49558),d=t(79692),c=t(90436),y=t(77277);const b=`metadata:
  name: example
  labels:
    javaVersion: 1.2.3`,g=(0,d.Z)(e=>({code:{borderRadius:6,margin:e.spacing(2,0),background:e.palette.type==="dark"?"#444":e.palette.common.white}}),{name:"PluginCatalogEntityLabelsEmptyState"});function h(){const e=g();return a.createElement(a.Fragment,null,a.createElement(c.Z,{variant:"body1"},"No labels defined for this entity. You can add labels to your entity YAML as shown in the highlighted example below:"),a.createElement("div",{className:e.code},a.createElement(r.Oi,{text:b,language:"yaml",showLineNumbers:!0,highlightedNumbers:[3,4,5,6],customStyle:{background:"inherit",fontSize:"115%"}})),a.createElement(y.Z,{variant:"contained",color:"primary",target:"_blank",href:"https://backstage.io/docs/features/software-catalog/descriptor-format#labels-optional"},"Read more"))}const v=(0,d.Z)(e=>({key:{fontWeight:"bold"}})),p=e=>{var l;const{variant:s,title:E}=e,{entity:m}=(0,u.u)(),k=v(),L=[{render:o=>a.createElement(c.Z,{className:k.key,variant:"body2"},o.key)},{field:"value"}],n=(l=m==null?void 0:m.metadata)==null?void 0:l.labels;return a.createElement(r.rJ,{title:E||"Labels",variant:s},!n||Object.keys(n).length===0?a.createElement(h,null):a.createElement(r.iA,{columns:L,data:Object.keys(n).map(o=>({key:o,value:n[o]})),options:{search:!1,showTitle:!0,loadingType:"linear",header:!1,padding:"dense",pageSize:5,toolbar:!1,paging:Object.keys(n).length>5}}))};function f(e){var l,s;return(l=e==null?void 0:e.metadata)!=null&&l.labels?Object.keys((s=e==null?void 0:e.metadata)==null?void 0:s.labels).some(Boolean):!1}}}]);})();

//# sourceMappingURL=1296.b092bcec.chunk.js.map