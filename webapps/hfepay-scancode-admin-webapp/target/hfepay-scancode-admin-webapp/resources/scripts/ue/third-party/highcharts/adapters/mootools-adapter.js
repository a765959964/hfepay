(function(){var l=window,c=document,k=l.MooTools.version.substring(0,3),b=k==="1.2"||k==="1.1",a=b||k==="1.3",d=l.$extend||function(){return Object.append.apply(Object,arguments)};l.HighchartsAdapter={init:function(g){var f=Fx.prototype,j=f.start,i=Fx.Morph.prototype,h=i.compute;f.start=function(m,o){var n=this.element;if(m.d){this.paths=g.init(n,n.d,this.toD)}j.apply(this,arguments);return this};i.compute=function(e,o,n){var m=this.paths;if(m){this.element.attr("d",g.step(m[0],m[1],n,this.toD))}else{return h.apply(this,arguments)}}},adapterRun:function(f,e){if(e==="width"||e==="height"){return parseInt($(f).getStyle(e),10)}},getScript:function(f,e){var h=c.getElementsByTagName("head")[0],g=c.createElement("script");g.type="text/javascript";g.src=f;g.onload=e;h.appendChild(g)},animate:function(g,e,j){var i=g.attr,h=j&&j.complete;if(i&&!g.setStyle){g.getStyle=g.attr,g.setStyle=function(){var f=arguments;this.attr.call(this,f[0],f[1][0])},g.$family=function(){return !0}}l.HighchartsAdapter.stop(g);j=new Fx.Morph(i?g:$(g),d({transition:Fx.Transitions.Quad.easeInOut},j));if(i){j.element=g}if(e.d){j.toD=e.d}h&&j.addEvent("complete",h);j.start(e);g.fx=j},each:function(f,e){return b?$each(f,e):Array.each(f,e)},map:function(f,e){return f.map(e)},grep:function(f,e){return f.filter(e)},inArray:function(f,e,g){return e?e.indexOf(f,g):-1},offset:function(e){e=e.getPosition();return{left:e.x,top:e.y}},extendWithEvents:function(e){e.addEvent||(e.nodeName?$(e):d(e,new Events))},addEvent:function(f,e,g){typeof e==="string"&&(e==="unload"&&(e="beforeunload"),l.HighchartsAdapter.extendWithEvents(f),f.addEvent(e,g))},removeEvent:function(f,e,g){typeof f!=="string"&&f.addEvent&&(e?(e==="unload"&&(e="beforeunload"),g?f.removeEvent(e,g):f.removeEvents&&f.removeEvents(e)):f.removeEvents())},fireEvent:function(f,e,h,g){e={type:e,target:f};e=a?new Event(e):new DOMEvent(e);e=d(e,h);if(!e.target&&e.event){e.target=e.event.target}e.preventDefault=function(){g=null};f.fireEvent&&f.fireEvent(e.type,e);g&&g(e)},washMouseEvent:function(e){if(e.page){e.pageX=e.page.x,e.pageY=e.page.y}return e},stop:function(e){e.fx&&e.fx.cancel()}}})();