(()=>{"use strict";var t,e=new Uint8Array(16);function o(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(e)}const r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,i=function(t){return"string"==typeof t&&r.test(t)};for(var n=[],d=0;d<256;++d)n.push((d+256).toString(16).substr(1));const s=function(t,e,r){var d=(t=t||{}).random||(t.rng||o)();if(d[6]=15&d[6]|64,d[8]=63&d[8]|128,e){r=r||0;for(var s=0;s<16;++s)e[r+s]=d[s];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(n[t[e+0]]+n[t[e+1]]+n[t[e+2]]+n[t[e+3]]+"-"+n[t[e+4]]+n[t[e+5]]+"-"+n[t[e+6]]+n[t[e+7]]+"-"+n[t[e+8]]+n[t[e+9]]+"-"+n[t[e+10]]+n[t[e+11]]+n[t[e+12]]+n[t[e+13]]+n[t[e+14]]+n[t[e+15]]).toLowerCase();if(!i(o))throw TypeError("Stringified UUID is invalid");return o}(d)},a={init(){document.querySelector(".add-todo__btn").addEventListener("click",(()=>{const t=document.querySelector("#title"),e=t.value,o=document.querySelector('input[name="priority"]:checked'),r=o?parseInt(o.value):4;e&&(this.eventAggregator.publish("todoAdded",{title:e,priority:r}),t.value="",document.getElementsByName("priority").forEach((t=>{t.checked=!1})))}))},addItem(t){const e=document.querySelector(".todo-list"),o=document.createElement("li");o.id=t.id,o.classList.add("todo"),o.classList.add(`priority-${t.priority}`);const r=document.createElement("span");r.classList.add("todo__title"),r.textContent=t.title;const i=document.createElement("button");i.classList.add("btn-remove"),i.textContent="X",i.addEventListener("click",(()=>{this.eventAggregator.publish("todoRemoved",t)})),o.appendChild(i),o.appendChild(r),e.appendChild(o)},removeItem(t){const e=t.id;document.getElementById(`${e}`).remove()}};class c{constructor(t){this.name=t,this._handlers=[]}addHandler(t){this._handlers.push(t)}fire(t){this._handlers.forEach((e=>{e(t)}))}}const u=function(){const t=[];function e(e){return t.filter((t=>t.name===e))[0]}return{publish(o,r){let i=e(o);i||(i=new c(o),t.push(i)),i.fire(r)},subscribe(o,r){let i=e(o);i||(i=new c(o),t.push(i)),i.addHandler(r)}}}();a.eventAggregator=u,a.init();const l=new class{constructor(){this._list=[]}addTodo(t){const e=new class{constructor({title:t,priority:e=4}){this.id=s(),this.title=t,this.priority=e}}(t);return this._list.push(e),e}deleteTodo(t){const e=t.id,o=this._list.filter((t=>t.id!==e));return this._list=o,t}updateTodo(t,e){const o=t.title,r=this._list.map((t=>t.title===o?e:t));return this._list=r,this}};u.subscribe("todoAdded",(t=>{const e=l.addTodo(t);a.addItem(e)})),u.subscribe("todoRemoved",(t=>{l.deleteTodo(t),a.removeItem(t)})),u.publish("todoAdded",{title:"Test",priority:1}),u.publish("todoAdded",{title:"Test",priority:2}),u.publish("todoAdded",{title:"Test"})})();