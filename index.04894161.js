class t{constructor(t,e){this.parent=t,this.model=e,this.regions={},this.bindModel()}regionsMap(){return{}}eventsMap(){return{}}bindModel(){this.model.on("change",(()=>{this.render()}))}mapRegions(t){const e=this.regionsMap();for(let s in e){const n=e[s],i=t.querySelector(n);i&&(this.regions[s]=i)}}bindEvents(t){const e=this.eventsMap();for(let s in e){const[n,i]=s.split(":");t.querySelectorAll(i).forEach((t=>{t.addEventListener(n,e[s])}))}}onRender(){}render(){this.parent.innerHTML="";const t=document.createElement("template");t.innerHTML=this.template(),this.bindEvents(t.content),this.mapRegions(t.content),this.onRender(),this.parent.appendChild(t.content)}}class e extends t{template(){return"\n      <span>Groceries List</span>\n    "}}let s=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"");class n extends t{eventsMap(){return{"submit:.list-form":this.onFormSubmit}}onFormSubmit=t=>{if(t.preventDefault(),!t.target)return;if(""===t.target.listItem.value)return;const e={id:s(),data:t.target.listItem.value,editing:!1};this.model.save(e),t.target.listItem.value=""};template(){return"\n      <form class='list-form'>\n        <input class='form-input' type='text' name='listItem' />\n        <button class='btn add'>\n          <i class='fa-solid fa-plus'></i>\n        </button>\n      </form>\n    "}}class i{constructor(t,e){this.parent=t,this.model=e}render(){this.parent.innerHTML="";const t=document.createElement("template"),e=this.model.get();for(let s of e){const e=document.createElement("div");this.renderItem(e,s),t.content.appendChild(e)}this.parent.appendChild(t.content)}}class r extends t{constructor(t,e,s){super(t,e),this.parent=t,this.model=e,this.item=s,this.onClickDelete=()=>{this.model.delete(this.item)},this.showEditOnClick=()=>{this.item.editing=!this.item.editing,this.model.trigger("change")},this.onClickSetUpdate=()=>{const t=this.parent.querySelector("input");if(t){const e={id:this.item.id,data:t.value,editing:!1};this.model.set(e)}}}eventsMap(){return{"click:.del":this.onClickDelete,"click:.edit":this.showEditOnClick,"click:.save":this.onClickSetUpdate}}renderEdit(){return this.item.editing?`\n      <div class='list-item'>\n        <div class='list-item-data'>\n          <input value='${this.item.data}' />\n        </div>\n        <div class='list-item-btns'>\n          <button class='btn save'>\n            <i class='fa-solid fa-file'></i>\n          </button>\n        </div>\n      </div>\n    `:`\n        <div class='list-item'>\n          <div class='list-item-data'>\n            <span>${this.item.data}</span>\n          </div>\n          <div class='list-item-btns'>\n            <button class='btn edit'>\n              <i class='fa-solid fa-pen-to-square'></i>\n            </button>\n            <button class='btn del'>\n              <i class='fa-solid fa-trash'></i>\n            </button>\n          </div>\n        </div>\n      `}template(){return this.renderEdit()}}class a extends i{constructor(t,e){super(t,e),this.parent=t,this.model=e}renderItem(t,e){new r(t,this.model,e).render()}}class d extends t{regionsMap(){return{listForm:".list-form-wrapper",list:".list"}}onRender(){new n(this.regions.listForm,this.model).render(),new a(this.regions.list,this.model).render()}template(){return"\n      <div class='container'>\n        <div class='list-form-wrapper'></div>\n        <div class='list'></div>\n      </div>\n    "}}class l{constructor(t,e){this.attrs=t,this.events=e}get on(){return this.events.on}get trigger(){return this.events.trigger}set(t){this.attrs.set(t),this.events.trigger("change")}get(){return this.attrs.get()}save(t){this.attrs.save(t),this.events.trigger("change")}delete(t){this.attrs.delete(t),this.events.trigger("change")}}class o{constructor(t){this.data=t}get(){return this.data}set(t){const e=this.data.findIndex((e=>e.id===t.id));this.data[e]={...this.data[e],...t}}save(t){this.data.push(t)}delete(t){const e=this.data.filter((e=>e.id!==t.id));this.data=e}}class c{events={};on=(t,e)=>{const s=this.events[t]||[];s.push(e),this.events[t]=s};trigger=t=>{const e=this.events[t];e&&e.length&&e.forEach((t=>t()))}}class h extends l{static build(t){return new h(new o(t),new c)}}const m=h.build([]),p=document.querySelector("#root");p&&new class extends t{regionsMap(){return{header:".header",container:".container-wrapper"}}onRender(){new e(this.regions.header,this.model).render(),new d(this.regions.container,this.model).render()}template(){return"\n      <div class='app'>\n        <header class='header'></header>\n        <div class='container-wrapper'></div>\n      </div>\n    "}}(p,m).render();
//# sourceMappingURL=index.04894161.js.map
