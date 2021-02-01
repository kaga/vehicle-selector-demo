(this["webpackJsonpreact-vehicle-selector"]=this["webpackJsonpreact-vehicle-selector"]||[]).push([[0],{114:function(e,n,t){},115:function(e,n,t){},125:function(e,n,t){"use strict";t.r(n);var i=t(12),r=t(0),a=t.n(r),c=t(15),d=t.n(c),u=(t(114),t(115),t(28)),o=t(157),l=t(29),s=t(72),b=t(101),v=t(160),f=t(161),O=t(23),p=t.n(O),m=t(17);function j(e){var n=Object(r.useState)(function(e){var n=Object(m.reduce)(e,(function(e,n,t){return e[t]=n.createInitialState(),e}),new Array);return e.forEach((function(e,t){var i=n[t],r=e.updateFilterItemState(n,i);n[t]=r})),n}(e.filters)),t=Object(b.a)(n,2),a=t[0],c=t[1];Object(r.useEffect)((function(){e.filters.forEach((function(e,n){var t=a[n],i=e.updateFilterItemState(a,t);if(i&&!Object(m.isEqual)(t,i)){var r=Object(s.a)(a);r[n]=i,c(r)}}))}),[e.filters,a]);var d=e.filters.map((function(n,t){var r=a[t];return Object(i.jsx)(o.a,{item:!0,xs:!0,children:n.createElement(Object(l.a)(Object(l.a)({},r),{},{onSearchQueryUpdated:function(e){return function(e,n,t){e((function(e){var i=Object(s.a)(e),r=e[t],a=p()(r,{searchQuery:{$set:n}});return i[t]=a,i}))}(c,e,t)},onSelectedOptionUpdated:function(n){return function(e,n,t,i){n((function(n){var r=Object(s.a)(n),a=n[i],c=p()(a,{selectedOption:{$set:t}});return r[i]=c,e.filters.forEach((function(e,t){var i=n[t],a=e.onOptionSelected(r,c,i);a&&(r[t]=a)})),r}))}(e,c,n,t)}}))},"filter-bar-item-grid-".concat(t))}));return Object(i.jsx)(v.a,{maxWidth:"lg",children:Object(i.jsx)(f.a,{children:Object(i.jsx)(o.a,{container:!0,direction:"row",justify:"center",spacing:0,children:d})})})}var _=t(45),y="\nfragment legacyPaginationCursor on LegacyPaginationCursor {\n    currentPage\n    perPage\n    total\n}\n",g="\nfragment uvdbI18n on UvdbI18n {\n    pl {\n        name\n    }\n    pt {\n        name\n    }\n    ro {\n        name\n    }\n}\n";function h(){var e=Object(_.a)(["\n  query VehicleSelectorYearOptions($uvdb_make_id: Int, $uvdb_model_id: Int, $limit: Int, $page: Int) {\n    uvdb {\n      vehicle_selector {\n        uvdb_years(uvdb_make_id: $uvdb_make_id, uvdb_model_id: $uvdb_model_id, limit: $limit, page: $page) {\n          items {\n            id\n          }\n          cursor {\n            ...legacyPaginationCursor\n          }\n        }\n      }\n    }\n  }\n  ","\n"]);return h=function(){return e},e}var $=Object(u.gql)(h(),y),x=t(162),I=t(169),S=t(168),k=t(170),q=t(167),E=t(166),M=t(163),L=Object(x.a)((function(e){return Object(I.a)({root:{padding:e.spacing(1)},list:{width:"100%",backgroundColor:e.palette.background.paper,overflow:"auto",maxHeight:300,minHeight:300}})}));function Q(e){var n=e.disabled,t=void 0!==n&&n,a=e.title,c=e.searchQuery,d=e.selectedOption,u=e.options,o=e.getOptionLabel,l=e.onSearchQueryUpdated,s=e.onSelectedOptionUpdated,b=L(),v=null===u||void 0===u?void 0:u.map((function(e,n){return Object(i.jsx)(S.a,{selected:e.id===(null===d||void 0===d?void 0:d.id),button:!0,disabled:t,onClick:function(n){return null===s||void 0===s?void 0:s(e)},children:Object(i.jsx)(k.a,{primary:null===o||void 0===o?void 0:o(e)})},"".concat(a,"-").concat(n,"-").concat(e.id))})),f=Object(m.first)(u),O=Object(m.isUndefined)(d)&&1===Object(m.size)(u)&&f;return Object(r.useEffect)((function(){O&&f&&(null===s||void 0===s||s(f))})),Object(i.jsxs)(q.a,{className:b.root,children:[Object(i.jsx)(E.a,{disabled:t,value:c,label:a,margin:"dense",onChange:function(e){return null===l||void 0===l?void 0:l(e.target.value)}}),Object(i.jsx)(M.a,{className:b.list,children:v})]})}function C(e){var n=e.title,t=e.graphql,r=e.getOptionLabel;return function(e){var a=t.getQueryVariables(e),c=e.disabled||Object(m.isUndefined)(a),d=Object(u.useQuery)(t.query,{variables:a,skip:c}).data,o=d?t.parseResponseBodies(d):[];return Object(i.jsx)(Q,Object(l.a)(Object(l.a)({},e),{},{title:n,options:o,getOptionLabel:r}))}}var w={createInitialState:function(){return{searchQuery:"",selectedOption:void 0,disabled:!1}},createElement:function(e){return a.a.createElement(U,e)},onOptionSelected:function(e,n,t){var i=Object(m.indexOf)(e,n),r=Object(m.indexOf)(e,t),a=n.selectedOption;if(a&&i<r)switch(a.type){case"MAKE":return p()(t,{selectedMake:{$set:a},selectedOption:{$set:void 0}});case"MODEL":return p()(t,{selectedModel:{$set:a},selectedOption:{$set:void 0}})}},updateFilterItemState:function(e,n){var t=!1,i=Object(m.indexOf)(e,n);if(i>0){var r=e[i-1];t=t||Object(m.isUndefined)(r.selectedOption)}return p()(n,{disabled:{$set:t}})}},U=C({title:"Year",graphql:{query:$,getQueryVariables:function(e){var n,t;return{uvdb_make_id:null===(n=e.selectedMake)||void 0===n?void 0:n.id,uvdb_model_id:null===(t=e.selectedModel)||void 0===t?void 0:t.id,limit:1e3}},parseResponseBodies:function(e){return function(e){return e.uvdb.vehicle_selector.uvdb_years.items}(e).map((function(e){return Object(l.a)({type:"YEAR"},e)}))}},getOptionLabel:function(e){return"".concat(e.id)}});function A(){var e=Object(_.a)(["\n  query VehicleSelectorMakeOptions(\n    $includeLocalization: Boolean = false\n    $uvdb_year_id: Int\n    $uvdb_year_min: Int\n    $uvdb_year_max: Int\n    $query: String\n    $limit: Int\n    $page: Int\n  ) {\n    uvdb {\n      vehicle_selector {\n        uvdb_makes(\n          uvdb_year_id: $uvdb_year_id\n          uvdb_year_min: $uvdb_year_min\n          uvdb_year_max: $uvdb_year_max\n          q: $query\n          limit: $limit\n          page: $page\n        ) {\n          items {\n            id\n            name\n            i18n @include(if: $includeLocalization) {\n              ...uvdbI18n\n            }\n          }\n          cursor {\n            ...legacyPaginationCursor\n          }\n        }\n      }\n    }\n  }\n  ","\n  ","\n"]);return A=function(){return e},e}var F=Object(u.gql)(A(),y,g),P={createInitialState:function(){return{searchQuery:"",selectedOption:void 0,disabled:!1}},createElement:function(e){return a.a.createElement(Y,e)},onOptionSelected:function(e,n,t){var i=Object(m.indexOf)(e,n),r=Object(m.indexOf)(e,t),a=n.selectedOption;if(a&&i<r)switch(a.type){case"YEAR":return p()(t,{selectedYear:{$set:a},selectedOption:{$set:void 0}})}},updateFilterItemState:function(e,n){var t=!1,i=Object(m.indexOf)(e,n);if(i>0){var r=e[i-1];t=t||Object(m.isUndefined)(r.selectedOption)}return p()(n,{disabled:{$set:t}})}},Y=C({title:"Make",graphql:{query:F,getQueryVariables:function(e){var n;return{uvdb_year_id:null===(n=e.selectedYear)||void 0===n?void 0:n.id,query:e.searchQuery}},parseResponseBodies:function(e){return function(e){return e.uvdb.vehicle_selector.uvdb_makes.items}(e).map((function(e){return Object(l.a)({type:"MAKE"},e)}))}},getOptionLabel:function(e){return e.name}});function B(){var e=Object(_.a)(["\n  query VehicleSelectorModelOptions(\n    $includeLocalization: Boolean = false\n    $uvdb_make_id: Int!\n    $uvdb_year_id: Int\n    $uvdb_year_min: Int\n    $uvdb_year_max: Int\n    $query: String\n    $limit: Int\n    $page: Int\n  ) {\n    uvdb {\n      vehicle_selector {\n        uvdb_models(\n          uvdb_make_id: $uvdb_make_id\n          uvdb_year_id: $uvdb_year_id\n          uvdb_year_min: $uvdb_year_min\n          uvdb_year_max: $uvdb_year_max\n          q: $query\n          limit: $limit\n          page: $page\n        ) {\n          items {\n            id\n            name\n            i18n @include(if: $includeLocalization) {\n              ...uvdbI18n\n            }\n          }\n          cursor {\n            ...legacyPaginationCursor\n          }\n        }\n      }\n    }\n  }\n  ","\n  ","\n"]);return B=function(){return e},e}var R=Object(u.gql)(B(),y,g),V={createInitialState:function(){return{searchQuery:"",selectedOption:void 0,disabled:!1}},createElement:function(e){return a.a.createElement(z,e)},onOptionSelected:function(e,n,t){var i=Object(m.indexOf)(e,n),r=Object(m.indexOf)(e,t),a=n.selectedOption;if(a&&i<r)switch(a.type){case"MAKE":return p()(t,{selectedMake:{$set:a},selectedOption:{$set:void 0}});case"YEAR":return p()(t,{selectedYear:{$set:a},selectedOption:{$set:void 0}})}},updateFilterItemState:function(e,n){var t=Object(m.isUndefined)(n.selectedMake),i=Object(m.indexOf)(e,n);if(i>0){var r=e[i-1];t=t||Object(m.isUndefined)(r.selectedOption)}return p()(n,{disabled:{$set:t}})}},z=C({title:"Model",graphql:{query:R,getQueryVariables:function(e){var n=e.selectedMake,t=e.selectedYear,i=e.searchQuery;if(n)return{uvdb_year_id:null===t||void 0===t?void 0:t.id,uvdb_make_id:n.id,query:i}},parseResponseBodies:function(e){return function(e){return e.uvdb.vehicle_selector.uvdb_models.items}(e).map((function(e){return Object(l.a)({type:"MODEL"},e)}))}},getOptionLabel:function(e){return e.name}});var D=function(){var e=new u.ApolloClient({uri:"https://api.parts-pal.com/node-api/graphql",cache:new u.InMemoryCache});return Object(i.jsx)(a.a.Fragment,{children:Object(i.jsx)(u.ApolloProvider,{client:e,children:Object(i.jsxs)(o.a,{container:!0,spacing:1,direction:"column",justify:"center",children:[Object(i.jsx)(o.a,{item:!0,children:Object(i.jsx)(j,{filters:[w,P,V]})}),Object(i.jsx)(o.a,{item:!0,children:Object(i.jsx)(j,{filters:[P,V,w]})})]})})})},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,172)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),a(e),c(e)}))},H=t(164),J=t(71),N=t(100),T=Object(N.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:J.a.A400},background:{default:"#fff"}}}),W=t(165);d.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsxs)(H.a,{theme:T,children:[Object(i.jsx)(W.a,{}),Object(i.jsx)(D,{})]})}),document.getElementById("root")),K()}},[[125,1,2]]]);
//# sourceMappingURL=main.87ca0ac3.chunk.js.map