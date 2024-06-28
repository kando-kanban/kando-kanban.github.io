import{r as m,u as D,j as e,B as b,I as N,M as z,c as B,A as K,T as k,v,S as E,a as P,C as H,D as V,Z as q,b as G,d as L,P as R,e as Z,f as J,g as T,h as Q,i as U,p as W,k as X}from"./vendor-B1bt1eLH.js";import"@bem-react/classname";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function p(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=p(t);fetch(t.href,o)}})();const Y=()=>{const[a,n]=m.useState(!1),[p,i]=m.useState(""),[t,o]=D("drop-and-drag",{}),[s,r]=m.useState(""),l=c=>r(c),g=Object.values(t).map(c=>({label:c.title,value:c.title})),h=()=>{const c=Object.keys(t).find(C=>t[C].title===p),f={id:v(),name:s,color:"red",description:""};if(c){const C={...t[c],items:[...t[c].items,f]};o({...t,[c]:C})}else{const C=v(),x={title:p,items:[f]};o({...t,[C]:x})}i(""),r(""),n(!1)};return e.jsxs("div",{className:"modal-add-task",children:[e.jsx(b,{size:"m",view:"primary",label:"Добавить задачу",width:"default",iconLeft:N,onClick:()=>n(!0)}),e.jsx(z,{className:B({p:"m"}),isOpen:a,hasOverlay:!0,onClickOutside:()=>n(!1),onEsc:()=>n(!1),children:e.jsxs("div",{className:"modal-add-task__container",children:[e.jsx(K,{type:"text",placeholder:"Название колонки",value:p,items:g,onChange:c=>i(c),getItemKey:c=>c.value}),e.jsx(k,{onChange:c=>l(c),value:s,type:"text",placeholder:"Название карточки"}),e.jsx(b,{size:"m",view:"primary",label:"Добавить",width:"default",onClick:h})]})})]})},$=()=>e.jsxs("div",{className:"navbar",children:[e.jsx("h1",{children:"КанДО"}),e.jsx(Y,{})]}),ee=({item:a,columnId:n,isSidebarOpen:p,onClickOutside:i})=>{const[t,o]=m.useState(a.isClosed),[s,r]=m.useState(new Date(a.date??new Date)),[l,g]=m.useState(a.name),[h,c]=m.useState(a.description),[f,C]=m.useState(a.color),[x,w]=D("drop-and-drag",{}),[y,A]=m.useState({name:!1,description:!1});m.useEffect(()=>{a.date?o(new Date(a.date)<new Date):o(a.isClosed)},[a.date,a.isClosed]);const S=m.useCallback(d=>{const u={...x,[n]:{...x[n],items:x[n].items.map(_=>_.id===d.id?d:_)}};w(u)},[x,n,w]),j=m.useCallback((d,u)=>{d==="color"&&(!u||u==="")&&(u="green");const _={...a,[d]:u};switch(d){case"name":g(u);break;case"description":c(u);break;case"isClosed":o(u);break;case"date":r(u);break;case"color":C(u);break}S(_)},[a,S]),F=()=>{const d={...x,[n]:{...x[n],items:x[n].items.filter(u=>u.id!==a.id)}};w(d),i()},M=m.useCallback(d=>()=>{A(u=>({...u,[d]:!u[d]}))},[]),O=d=>e.jsx(b,{label:y[d]?"Сохранить":"Редактировать",view:"clear",iconRight:y[d]?G:L,onlyIcon:!0,onClick:M(d)});return e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{textDecoration:t?"line-through":"none"},children:l}),e.jsx(E,{hasOverlay:!1,size:"1/3",isOpen:p,onClickOutside:i,onEsc:i,children:e.jsxs(E.Content,{className:"card-sidebar__content",children:[e.jsx(b,{label:"Удалить карточку",view:"ghost",iconLeft:P,onClick:F}),e.jsxs("div",{className:"card-sidebar__input",children:[e.jsx(k,{onChange:d=>j("name",d),value:l,type:"text",placeholder:"Одна строчка",disabled:!y.name}),O("name")]}),e.jsx(H,{label:"Чекбокс",size:"m",view:"primary",checked:t,align:"center",disabled:!1,onChange:d=>j("isClosed",d.target.checked)}),e.jsxs("div",{className:"card-sidebar__input",children:[e.jsx(k,{onChange:d=>j("description",d),value:h,type:"textarea",cols:200,rows:5,placeholder:"Описание",disabled:!y.description}),O("description")]}),e.jsx(V,{label:"Дата завершения",value:s,onChange:d=>j("date",d)}),e.jsxs("div",{className:"card-sidebar__color",children:[e.jsx(b,{label:"Зеленый",style:{backgroundColor:"#55C776"},onClick:()=>j("color","#55C776")}),e.jsx(b,{label:"Желтый",style:{backgroundColor:"#F9D229"},onClick:()=>j("color","#F9D229")}),e.jsx(b,{label:"Красный",style:{backgroundColor:"#E62520"},onClick:()=>j("color","#E62520")}),e.jsx(q,{color:f,onChange:d=>j("color",d)})]})]})})]})},se=({item:a,index:n,columnId:p})=>{const[i,t]=m.useState(!1),o=()=>{t(!1)};return e.jsx(R,{draggableId:a.id.toString(),index:n,children:s=>e.jsx("div",{ref:s.innerRef,...s.draggableProps,...s.dragHandleProps,className:"drop-and-drag__item",style:{...s.draggableProps.style},children:e.jsxs("div",{className:"drop-and-drag__item-content",onClick:()=>t(!0),children:[e.jsxs("div",{className:"drop-and-drag__item-main",children:[e.jsx(ee,{isSidebarOpen:i,onClickOutside:o,columnId:p,item:a}),e.jsxs("div",{className:"drop-and-drag__item-info",children:[a.description&&e.jsx(Z,{size:"s"}),a.date&&e.jsx("div",{className:"drop-and-drag__item-date",style:{backgroundColor:a.color},children:new Date(a.date).toLocaleDateString()})]})]}),e.jsx(J,{})]})})})},te=({columnId:a,column:n,updateColumnTitle:p,deleteColumn:i,addCard:t})=>{const[o,s]=m.useState(n.title),[r,l]=m.useState(!1),g=c=>s(c),h=()=>{r&&o!==n.title&&p(a,o),l(c=>!c)};return e.jsxs("div",{className:"drop-and-drag__column",children:[e.jsxs("div",{className:"drop-and-drag__column-header",children:[e.jsx("h2",{className:"drop-and-drag__column-title",children:r?e.jsx(k,{onChange:g,value:o,type:"text",placeholder:"Одна строчка"}):o}),e.jsxs("div",{className:"drop-and-drag__column-actions",children:[e.jsx(b,{label:"Редактировать",view:"clear",iconRight:L,onlyIcon:!0,onClick:h}),e.jsx(b,{label:"Удалить",view:"clear",iconRight:P,onlyIcon:!0,onClick:()=>i(a)}),e.jsx(b,{label:"Добавить карточку",view:"clear",iconRight:N,onlyIcon:!0,onClick:()=>t(a)})]})]}),e.jsx(T,{droppableId:a,children:(c,f)=>e.jsxs("div",{...c.droppableProps,ref:c.innerRef,className:"drop-and-drag__column-content",style:{background:f.isDraggingOver?"lightblue":""},children:[n.items.map((C,x)=>e.jsx(se,{columnId:a,item:C,index:x},C.id)),c.placeholder]})},a)]})},ae=(a,n,p)=>{if(!a.destination)return;const{source:i,destination:t,type:o}=a;if(o==="column"){const s=Array.from(Object.keys(n)),[r]=s.splice(i.index,1);s.splice(t.index,0,r);const l={};s.forEach((g,h)=>{l[g]=n[g]}),p(l);return}if(i.droppableId!==t.droppableId){const s=n[i.droppableId],r=n[t.droppableId],l=[...s.items],g=[...r.items],[h]=l.splice(i.index,1);g.splice(t.index,0,h),p({...n,[i.droppableId]:{...s,items:l},[t.droppableId]:{...r,items:g}})}else{const s=n[i.droppableId],r=[...s.items],[l]=r.splice(i.index,1);r.splice(t.index,0,l),p({...n,[i.droppableId]:{...s,items:r}})}},ne=()=>{const[a,n]=D("drop-and-drag",{}),p=(s,r)=>{n(l=>({...l,[s]:{...l[s],title:r}}))},i=s=>{n(r=>{const l={...r};return delete l[s],l})},t=s=>{const r={id:Date.now().toString(),name:"Новая карточка",color:"red",description:"",isClosed:!1};n(l=>({...l,[s]:{...l[s],items:[...l[s].items,r]}}))},o=()=>{const s=v(),r={title:"Новая колонка",items:[]};n(l=>({...l,[s]:r}))};return e.jsxs("div",{className:"drop-and-drag",children:[e.jsx(Q,{onDragEnd:s=>ae(s,a,n),children:e.jsx(T,{droppableId:"all-columns",direction:"horizontal",type:"column",children:s=>e.jsxs("div",{...s.droppableProps,ref:s.innerRef,className:"drop-and-drag__column-container",children:[Object.entries(a).map(([r,l],g)=>e.jsx(R,{draggableId:r,index:g,children:h=>e.jsx("div",{className:"drop-and-drag__column-wrapper",ref:h.innerRef,...h.draggableProps,...h.dragHandleProps,children:e.jsx(te,{columnId:r,column:l,updateColumnTitle:p,deleteColumn:i,addCard:t})})},r)),s.placeholder]})})}),e.jsx(b,{label:"Добавить новую колонку",view:"clear",onClick:o,iconLeft:N})]})},oe=()=>e.jsx(ne,{});function re(){return e.jsxs(U,{preset:W,children:[e.jsx($,{}),e.jsx(oe,{})]})}const I=document.getElementById("root");I&&X.createRoot(I).render(e.jsx(re,{}));
