(this["webpackJsonpspoiler-five"]=this["webpackJsonpspoiler-five"]||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(16),s=a.n(n),i=(a(32),a(8)),r=a(9),o=a(11),l=a(10),j=(a(33),a(34),a(14)),u=a(1),d=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={play:!1,otherUrl:"http://streaming.tdiradio.com:8000/house.mp3"},c.url="https://p.scdn.co/mp3-preview/09a6fcd9ca6aac808bf9ab042a55ca9ea63d66d0?cid=d8a5ed958d274c2e8ee717e6a4b0971d",c.audio="",c.play=c.play.bind(Object(j.a)(c)),c.pause=c.pause.bind(Object(j.a)(c)),c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.audio=new Audio(this.url)}},{key:"play",value:function(){this.setState({play:!0}),this.audio.play()}},{key:"pause",value:function(){this.setState({play:!1}),this.audio.pause()}},{key:"render",value:function(){var e=this.state.play;return Object(u.jsx)("div",{className:"player",children:e?Object(u.jsx)("button",{onClick:this.pause,children:"Pause"}):Object(u.jsx)("button",{onClick:this.play,children:"Play"})})}}]),a}(c.Component),b=a(18),h=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={searchInSongs:!0,searchInPodcast:!0,searchInPlaylist:!0,searchInAlbum:!0},c.audio="",c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.searchInSongs,a=e.searchInPodcast,c=e.searchInPlaylist,n=e.searchInAlbum;return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("h1",{children:"Busquedas"}),Object(u.jsx)("div",{className:"separacion"}),Object(u.jsx)("div",{className:"information container",children:Object(u.jsx)("h2",{children:"Filtros"})}),t&&Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"separacion"})}),a&&Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"separacion"})}),c&&Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"separacion"})}),n&&Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"separacion"})}),Object(u.jsx)(b.b,{to:"/song",children:" Song "})]})}}]),a}(c.Component),p=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={searchInSongs:!0,searchInPodcast:!0,searchInPlaylist:!0,searchInAlbum:!0},c.audio="",c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.globalState;console.log(e)}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"page",children:Object(u.jsx)("h1",{children:"Best song ever"})})}}]),a}(c.Component),O=a(3),v=function(e){return Object(u.jsx)(b.a,{basename:"/spoiler-five",children:Object(u.jsxs)(O.c,{children:[Object(u.jsxs)(O.a,{exact:!0,path:"/",children:[" ",Object(u.jsx)(h,{globalState:e.globalState})," "]}),Object(u.jsxs)(O.a,{exact:!0,path:"/song",children:[" ",Object(u.jsx)(p,{globalState:e.globalState})," "]})]})})},x=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={jsonData:""},c.audio="",c}return Object(r.a)(a,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(v,{globalState:this.state.jsonData}),Object(u.jsx)(d,{})]})}}]),a}(c.Component),f=a(13),m=a(25),y={},g=Object(f.d)(Object(f.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION":default:return e}}}),Object(f.a)(m.a)),k=a(27);s.a.render(Object(u.jsx)(k.a,{store:g,children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.847d1538.chunk.js.map