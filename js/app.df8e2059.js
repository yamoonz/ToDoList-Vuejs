(function(t){function e(e){for(var r,c,d=e[0],s=e[1],i=e[2],l=0,b=[];l<d.length;l++)c=d[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,d=1;d<n.length;d++){var s=n[d];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/TaskAdder-Vuejs/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=e,d=d.slice();for(var i=0;i<d.length;i++)e(d[i]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1414:function(t,e,n){},"19c8":function(t,e,n){},"1f25":function(t,e,n){"use strict";n("1414")},4047:function(t,e,n){"use strict";n("19c8")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"};function o(t,e,n,o,c,d){var s=Object(r["l"])("Header"),i=Object(r["l"])("AddTask"),u=Object(r["l"])("Tasks");return Object(r["h"])(),Object(r["c"])("div",a,[Object(r["e"])(s,{onToggleAddTask:d.toggleAddTask},null,8,["onToggleAddTask"]),Object(r["q"])(Object(r["d"])("div",null,[Object(r["e"])(i,{onAddTask:d.addTask},null,8,["onAddTask"])],512),[[r["p"],c.showAddTask]]),Object(r["e"])(u,{onToggleReminder:d.toggleReminder,onDeleteTask:d.deleteTask,tasks:c.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])])}var c=n("5530"),d=n("2909"),s=(n("99af"),n("4de4"),n("d81d"),function(t){return Object(r["j"])("data-v-525ab63e"),t=t(),Object(r["i"])(),t}),i=s((function(){return Object(r["d"])("h1",null,"Task Adder",-1)}));function u(t,e,n,a,o,c){var d=Object(r["l"])("Button");return Object(r["h"])(),Object(r["c"])("header",null,[i,Object(r["e"])(d,{onToggleAddTask:e[0]||(e[0]=function(e){return t.$emit("toggle-add-task")}),text:"Add Task",color:"green"})])}function l(t,e,n,a,o,c){return Object(r["h"])(),Object(r["c"])("button",{onClick:e[0]||(e[0]=function(t){return c.onClick()}),style:Object(r["g"])({background:n.color}),class:"btn"},Object(r["m"])(n.text),5)}var b={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("toggle-add-task")}}},f=n("6b0d"),p=n.n(f);const m=p()(b,[["render",l]]);var k=m,j={name:"Header",props:{title:String},components:{Button:k}};n("4047");const O=p()(j,[["render",u],["__scopeId","data-v-525ab63e"]]);var h=O;function g(t,e,n,a,o,c){var d=Object(r["l"])("Task");return Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["k"])(n.tasks,(function(e){return Object(r["h"])(),Object(r["c"])("div",{key:e.id},[Object(r["e"])(d,{onToggleReminder:function(n){return t.$emit("toggle-reminder",e.id)},onDeleteTask:function(n){return t.$emit("delete-task",e.id)},task:e},null,8,["onToggleReminder","onDeleteTask","task"])])})),128)}function v(t,e,n,a,o,c){return Object(r["h"])(),Object(r["c"])("div",{onDblclick:e[1]||(e[1]=function(e){return t.$emit("toggle-reminder",n.task.id)}),class:Object(r["f"])([n.task.reminder?"reminder":"","task"])},[Object(r["d"])("h3",null,Object(r["m"])(n.task.text),1),Object(r["d"])("i",{onClick:e[0]||(e[0]=function(e){return t.$emit("delete-task",n.task.id)}),class:"fas fa-times"}),Object(r["d"])("p",null,Object(r["m"])(n.task.day),1)],34)}var T={name:"Task",props:{task:Object}};n("6516");const y=p()(T,[["render",v],["__scopeId","data-v-09991121"]]);var x=y,A={name:"Tasks",props:{tasks:Array},components:{Task:x},emits:["delete-task","toggle-reminder"]};const w=p()(A,[["render",g]]);var S=w,_=function(t){return Object(r["j"])("data-v-21836312"),t=t(),Object(r["i"])(),t},M={class:"form-control"},D=_((function(){return Object(r["d"])("label",null,"Task",-1)})),P={class:"form-control"},R=_((function(){return Object(r["d"])("label",null,"Day & Time",-1)})),$={class:"form-control form-control-check"},q=_((function(){return Object(r["d"])("label",null,"Set Reminder",-1)})),C=_((function(){return Object(r["d"])("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1)}));function V(t,e,n,a,o,c){return Object(r["h"])(),Object(r["c"])("form",{onSubmit:e[3]||(e[3]=function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),class:"add-form"},[Object(r["d"])("div",M,[D,Object(r["q"])(Object(r["d"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.text=t}),name:"text",placeholder:"Add Task"},null,512),[[r["o"],o.text]])]),Object(r["d"])("div",P,[R,Object(r["q"])(Object(r["d"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.day=t}),name:"day",placeholder:"Add Day & Time"},null,512),[[r["o"],o.day]])]),Object(r["d"])("div",$,[q,Object(r["q"])(Object(r["d"])("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=function(t){return o.reminder=t}),name:"reminder"},null,512),[[r["n"],o.reminder]])]),C],32)}var B={name:"AddTask",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(t){if(t.preventDefault(),this.text){var e={id:Math.floor(1e5*Math.random()),text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",e),this.text="",this.day="",this.reminder=!1}else alert("Please add a task")}}};n("8eed");const H=p()(B,[["render",V],["__scopeId","data-v-21836312"]]);var I=H,U={name:"App",components:{Header:h,Tasks:S,AddTask:I},data:function(){return{tasks:[],showAddTask:!1}},methods:{toggleAddTask:function(){this.showAddTask=!this.showAddTask},addTask:function(t){this.tasks=[].concat(Object(d["a"])(this.tasks),[t])},deleteTask:function(t){this.tasks=this.tasks.filter((function(e){return e.id!==t}))},toggleReminder:function(t){this.tasks=this.tasks.map((function(e){return e.id===t?Object(c["a"])(Object(c["a"])({},e),{},{reminder:!e.reminder}):e}))}},created:function(){this.tasks=[{id:"1",text:"Doctors Appointment",day:"March 5th at 2:30pm",reminder:!0},{id:"2",text:"Meeting with boss",day:"March 6th at 1:30pm",reminder:!1},{id:"3",text:"Food shopping",day:"March 7th at 2:00pm",reminder:!0}]}};n("1f25");const J=p()(U,[["render",o]]);var F=J;Object(r["b"])(F).mount("#app")},6516:function(t,e,n){"use strict";n("c48d")},"8eed":function(t,e,n){"use strict";n("ad84")},ad84:function(t,e,n){},c48d:function(t,e,n){}});
//# sourceMappingURL=app.df8e2059.js.map