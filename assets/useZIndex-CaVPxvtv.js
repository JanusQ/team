import{x as i,H as d}from"./index-CcL0rtCo.js";const u=i.createContext(void 0),f=u,e=100,x=10,C=e*x,a={Modal:e,Drawer:e,Popover:e,Popconfirm:e,Tooltip:e,Tour:e},I={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function O(t){return t in a}function p(t,s){const[,r]=d(),o=i.useContext(f),c=O(t);if(s!==void 0)return[s,s];let n=o??0;return c?(n+=(o?0:r.zIndexPopupBase)+a[t],n=Math.min(n,r.zIndexPopupBase+C)):n+=I[t],[o===void 0?s:n,n]}export{p as u,f as z};