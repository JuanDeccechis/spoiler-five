(this["webpackJsonpspoiler-five"]=this["webpackJsonpspoiler-five"]||[]).push([[0],{32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(16),n=s.n(a),i=(s(32),s(7)),o=s(8),l=s(10),j=s(9),u=(s(33),s(34),s(35),s(36),s(14)),b=s(0),r=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={play:!1,otherUrl:"http://streaming.tdiradio.com:8000/house.mp3"},c.url="https://p.scdn.co/mp3-preview/09a6fcd9ca6aac808bf9ab042a55ca9ea63d66d0?cid=d8a5ed958d274c2e8ee717e6a4b0971d",c.audio="",c.play=c.play.bind(Object(u.a)(c)),c.pause=c.pause.bind(Object(u.a)(c)),c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.audio=new Audio(this.url)}},{key:"play",value:function(){this.setState({play:!0}),this.audio.play()}},{key:"pause",value:function(){this.setState({play:!1}),this.audio.pause()}},{key:"render",value:function(){var e=this.state.play;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"player",children:[Object(b.jsxs)("div",{className:"player-left",children:[Object(b.jsx)("div",{className:"player-song-name",children:Object(b.jsx)("marquee",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis perspiciatis similique, neque explicabo porro accusantium nisi, quaerat fuga quos dolor officia, possimus quis quas voluptate quia odio autem doloribus aliquid?"})}),Object(b.jsx)("button",{onClick:this.pause,className:"icon refresh"})]}),Object(b.jsxs)("div",{className:"player-principal-controls",children:[Object(b.jsx)("button",{onClick:this.pause,className:"icon previous"}),e?Object(b.jsx)("button",{onClick:this.pause,className:"icon primary pause"}):Object(b.jsx)("button",{onClick:this.play,className:"icon primary play"}),Object(b.jsx)("button",{onClick:this.pause,className:"icon next"})]}),Object(b.jsx)("button",{onClick:this.pause,className:"icon volume"})]})})}}]),s}(c.Component),m=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={isMobile:!1,notifications:0,user:""},c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.isMobile,s=e.notifications,c=e.user;return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("span",{children:"logo"}),t&&Object(b.jsx)("button",{onClick:this.pause,className:"icon menu-icon"}),Object(b.jsx)("button",{onClick:this.pause,className:"icon search"}),s?Object(b.jsx)("button",{onClick:this.pause,className:"icon notification-yes"}):Object(b.jsx)("button",{onClick:this.pause,className:"icon notification"}),c?Object(b.jsx)("button",{onClick:this.pause,className:"icon user-loged"}):Object(b.jsx)("button",{onClick:this.pause,className:"icon user"})]})}}]),s}(c.Component),O=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={},c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"menu",children:Object(b.jsxs)("ul",{className:"menu-list",children:[Object(b.jsxs)("li",{className:"menu-item",children:[Object(b.jsx)("button",{onClick:this.pause,className:"icon question"}),Object(b.jsx)("p",{children:"Consultanos"})]}),Object(b.jsxs)("li",{className:"menu-item",children:[Object(b.jsx)("button",{onClick:this.pause,className:"icon setting"}),Object(b.jsx)("p",{children:"Configuracion"})]}),Object(b.jsxs)("li",{className:"menu-item",children:[Object(b.jsx)("button",{onClick:this.pause,className:"icon menu-playlist"}),Object(b.jsx)("p",{children:"Playlist"})]}),Object(b.jsxs)("li",{className:"menu-item",children:[Object(b.jsx)("button",{onClick:this.pause,className:"icon menu-playlist2"}),Object(b.jsx)("p",{children:"Playlist"})]}),Object(b.jsxs)("li",{className:"menu-item",children:[Object(b.jsx)("button",{onClick:this.pause,className:"icon menu-album"}),Object(b.jsx)("p",{children:"Album"})]}),Object(b.jsxs)("li",{className:"menu-item",children:[Object(b.jsx)("button",{onClick:this.pause,className:"icon menu-podcast"}),Object(b.jsx)("p",{children:"Podcast"})]}),Object(b.jsxs)("li",{className:"menu-item",children:[Object(b.jsx)("button",{onClick:this.pause,className:"icon menu-song"}),Object(b.jsx)("p",{children:"Cancion"})]}),Object(b.jsxs)("li",{className:"menu-item",children:[Object(b.jsx)("button",{onClick:this.pause,className:"icon menu-favorites"}),Object(b.jsx)("p",{children:"Mis Favs"})]})]})})}}]),s}(c.Component),d=s(18),h=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={searchInSongs:!0,searchInPodcast:!0,searchInPlaylist:!0,searchInAlbum:!0},c.audio="",c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.searchInSongs,s=e.searchInPodcast,c=e.searchInPlaylist,a=e.searchInAlbum;return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("h1",{children:"Busquedas"}),Object(b.jsx)("div",{className:"separacion"}),Object(b.jsx)("div",{className:"information container",children:Object(b.jsx)("h2",{children:"Filtros"})}),t&&Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"separacion"})}),s&&Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"separacion"})}),c&&Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"separacion"})}),a&&Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"separacion"})}),Object(b.jsx)(d.b,{to:"/song",children:" Song "}),Object(b.jsxs)("div",{className:"player2",children:[Object(b.jsx)("button",{className:"icon star"}),Object(b.jsx)("button",{className:"icon like"}),Object(b.jsx)("button",{className:"icon like-complete"}),Object(b.jsx)("button",{className:"icon heart"}),Object(b.jsx)("button",{className:"icon heart-complete"}),Object(b.jsx)("button",{className:"icon dislike"}),Object(b.jsx)("button",{className:"icon dislike-complete"}),Object(b.jsx)("button",{className:"icon share"}),Object(b.jsx)("button",{className:"icon add"}),Object(b.jsx)("button",{className:"icon delete"}),Object(b.jsx)("button",{className:"icon show-more"})]}),Object(b.jsxs)("div",{className:"player2",children:[Object(b.jsx)("button",{className:"icon question"}),Object(b.jsx)("button",{className:"icon setting"}),Object(b.jsx)("button",{className:"icon menu-playlist"}),Object(b.jsx)("button",{className:"icon menu-playlist2"}),Object(b.jsx)("button",{className:"icon menu-album"}),Object(b.jsx)("button",{className:"icon menu-podcast"}),Object(b.jsx)("button",{className:"icon menu-song"}),Object(b.jsx)("button",{className:"icon menu-favorites"})]}),Object(b.jsxs)("div",{className:"player2",children:[Object(b.jsx)("button",{className:"icon menu-icon"}),Object(b.jsx)("button",{className:"icon previous"}),Object(b.jsx)("button",{className:"icon primary pause"}),Object(b.jsx)("button",{className:"icon primary play"}),Object(b.jsx)("button",{className:"icon next"}),Object(b.jsx)("button",{className:"icon notification-yes"}),Object(b.jsx)("button",{className:"icon notification"}),Object(b.jsx)("button",{className:"icon refresh"}),Object(b.jsx)("button",{className:"icon loading"}),Object(b.jsx)("button",{className:"icon search"}),Object(b.jsx)("button",{className:"icon search-black"}),Object(b.jsx)("button",{className:"icon user"})]})]})}}]),s}(c.Component),p=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={searchInSongs:!0,searchInPodcast:!0,searchInPlaylist:!0,searchInAlbum:!0},c.audio="",c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.globalState;console.log(e)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"page",children:Object(b.jsx)("h1",{children:"Best song ever"})})}}]),s}(c.Component),x=s(3),N=function(e){return Object(b.jsx)(d.a,{basename:"/spoiler-five",children:Object(b.jsxs)(x.c,{children:[Object(b.jsxs)(x.a,{exact:!0,path:"/",children:[" ",Object(b.jsx)(h,{globalState:e.globalState})," "]}),Object(b.jsxs)(x.a,{exact:!0,path:"/song",children:[" ",Object(b.jsx)(p,{globalState:e.globalState})," "]})]})})},v=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={jsonData:""},c.audio="",c}return Object(o.a)(s,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{}),Object(b.jsxs)("div",{className:"page-content",children:[Object(b.jsx)(O,{}),Object(b.jsx)(N,{globalState:this.state.jsonData})]}),Object(b.jsx)(r,{})]})}}]),s}(c.Component),f=s(13),y=s(25),k={},g=Object(f.d)(Object(f.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION":default:return e}}}),Object(f.a)(y.a)),C=s(27);n.a.render(Object(b.jsx)(C.a,{store:g,children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.935b559e.chunk.js.map