(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{179:function(t,e,n){var content=n(182);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("03491c3e",content,!0,{sourceMap:!1})},180:function(t){t.exports=JSON.parse('[{"id":2,"title":"Article Abc","summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat","date":"2020-01-06","category":"blog"},{"id":1,"title":"Article XyZ","summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat","date":"2020-01-05","category":"blog"}]')},181:function(t,e,n){"use strict";var o=n(179);n.n(o).a},182:function(t,e,n){(e=n(47)(!1)).push([t.i,".logo[data-v-5093ab7f]{font-size:36pt;font-family:Amatic SC,cursive;color:#f0f;font-weight:40;align-self:center;align-items:center;align-content:center}",""]),t.exports=e},183:function(t,e,n){"use strict";var o=n(1),l=n(180),r=o.a.extend({name:"Menu",data:function(){return{posts:l}}}),c=n(20),m=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"menu"},[n("p",{staticClass:"menu-label"},[t._v("Articles")]),t._v(" "),n("ul",{staticClass:"menu-list"},t._l(t.posts,(function(e){return n("li",{key:e.id},[n("a",[t._v(" "+t._s(e.title))])])})),0),t._v(" "),n("p",{staticClass:"menu-label"},[t._v("Collections")]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"menu-list"},[e("li",[e("a",[this._v("Articles")])]),this._v(" "),e("li",[e("a",[this._v("Videos")])]),this._v(" "),e("li",[e("a",[this._v("Images")])])])}],!1,null,"ac971dd2",null).exports,d=o.a.extend({name:"Nav"}),v=(n(181),Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"level"},[n("p",{staticClass:"level-item"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("p",{staticClass:"level-item"},[n("nuxt-link",{attrs:{to:"about"}},[t._v("About")])],1),t._v(" "),t._m(0),t._v(" "),n("p",{staticClass:"level-item"},[n("nuxt-link",{attrs:{to:"blogs"}},[t._v("Blogs")])],1),t._v(" "),t._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"level-item"},[e("span",{staticClass:"logo"},[this._v("Notes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"level-item"},[e("a",[this._v("Lists")])])}],!1,null,"5093ab7f",null).exports),f=o.a.extend({components:{Menu:m,Nav:v}}),_=Object(c.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container is-fullhd"},[e("Nav",{style:{marginTop:"20px"}}),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=_.exports},184:function(t,e,n){var content=n(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("8b032ab0",content,!0,{sourceMap:!1})},185:function(t,e,n){var content=n(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("505a226a",content,!0,{sourceMap:!1})},189:function(t,e,n){"use strict";var o=n(184);n.n(o).a},190:function(t,e,n){(e=n(47)(!1)).push([t.i,".content-mergin[data-v-01df5867]{margin-bottom:12px;padding:8px}.content-mergin h3[data-v-01df5867]{color:#40e0d0}",""]),t.exports=e},191:function(t,e,n){"use strict";var o=n(185);n.n(o).a},192:function(t,e,n){(e=n(47)(!1)).push([t.i,".bodyc{margin-left:10rem;margin-right:10rem;margin-top:40px}",""]),t.exports=e},200:function(t,e,n){"use strict";n.r(e);var o=n(1),l=o.a.extend({name:"PostSummary",props:{post:{type:Object,required:!0}},data:function(){return{isHovering:!1}},computed:{fullName:function(){return"".concat(this.post.title)}}}),r=(n(189),n(20)),c=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{card:t.isHovering},on:{mouseover:function(e){t.isHovering=!0},mouseout:function(e){t.isHovering=!1}}},[n("div",{staticClass:"content content-mergin"},[n("nuxt-link",{attrs:{to:"post/"+t.post.id}},[n("h3",{staticClass:"is-medium lcas"},[t._v(t._s(t.fullName))])]),t._v(" "),n("p",[t._v(t._s(t.post.summary)+"...")]),t._v(" "),n("span",{staticClass:"is-small"},[t._v(t._s(t.post.date))])],1)])}),[],!1,null,"01df5867",null).exports,m=n(180),d=n(183),v=o.a.extend({components:{PageTemplate:d.a,PostSummary:c},data:function(){return{posts:m}}}),f=(n(191),Object(r.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("PageTemplate",this._l(this.posts,(function(t){return e("PostSummary",{key:t.id,attrs:{post:t}})})),1)}),[],!1,null,null,null));e.default=f.exports}}]);