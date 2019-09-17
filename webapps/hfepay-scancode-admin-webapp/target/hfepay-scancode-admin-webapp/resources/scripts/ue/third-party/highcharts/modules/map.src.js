(function(a){var s,i=a.Axis,m=a.Chart,q=a.Point,f=a.Pointer,d=a.each,n=a.extend,g=a.merge,e=a.pick,l=a.numberFormat,o=a.getOptions(),p=a.seriesTypes,k=o.plotOptions,j=a.wrap,r=a.Color,c=function(){};function b(x,w,v){var u=4,t=[];while(u--){t[u]=Math.round(w.rgba[u]+(x.rgba[u]-w.rgba[u])*(1-v))}return"rgba("+t.join(",")+")"}o.mapNavigation={buttonOptions:{align:"right",verticalAlign:"bottom",x:0,width:18,height:18,style:{fontSize:"15px",fontWeight:"bold",textAlign:"center"}},buttons:{zoomIn:{onclick:function(){this.mapZoom(0.5)},text:"+",y:-32},zoomOut:{onclick:function(){this.mapZoom(2)},text:"-",y:0}}};a.splitPath=function(u){var t;u=u.replace(/([A-Za-z])/g," $1 ");u=u.replace(/^\s*/,"").replace(/\s*$/,"");u=u.split(/[ ,]+/);for(t=0;t<u.length;t++){if(!/[a-zA-Z]/.test(u[t])){u[t]=parseFloat(u[t])}}return u};a.maps={};j(i.prototype,"getSeriesExtremes",function(u){var x=this.isXAxis,w,t,v=[];d(this.series,function(z,y){if(z.useMapGeometry){v[y]=z.xData;z.xData=[]}});u.call(this);w=e(this.dataMin,Number.MAX_VALUE);t=e(this.dataMax,Number.MIN_VALUE);d(this.series,function(z,y){if(z.useMapGeometry){w=Math.min(w,z[x?"minX":"minY"]);t=Math.max(t,z[x?"maxX":"maxY"]);z.xData=v[y]}});this.dataMin=w;this.dataMax=t});j(i.prototype,"setAxisTranslation",function(x){var w=this.chart,u,v=w.plotWidth/w.plotHeight,A=this.isXAxis,t,y=w.xAxis[0],z;x.call(this);if(w.options.chart.type==="map"&&!A&&y.transA!==s){this.transA=y.transA=Math.min(this.transA,y.transA);u=(y.max-y.min)/(this.max-this.min);z=u>v?this:y;t=(z.max-z.min)*z.transA;z.minPixelPadding=(z.len-t)/2}});j(m.prototype,"render",function(u){var t=this,v=t.options.mapNavigation;u.call(t);t.renderMapNavigation();if(v.zoomOnDoubleClick){a.addEvent(t.container,"dblclick",function(w){t.pointer.onContainerDblClick(w)})}if(v.zoomOnMouseWheel){a.addEvent(t.container,document.onmousewheel===undefined?"DOMMouseScroll":"mousewheel",function(w){t.pointer.onContainerMouseWheel(w)})}});n(f.prototype,{onContainerDblClick:function(u){var t=this.chart;u=this.normalize(u);if(t.isInsidePlot(u.chartX-t.plotLeft,u.chartY-t.plotTop)){t.mapZoom(0.5,t.xAxis[0].toValue(u.chartX),t.yAxis[0].toValue(u.chartY))}},onContainerMouseWheel:function(u){var t=this.chart,v;u=this.normalize(u);v=u.detail||-(u.wheelDelta/120);if(t.isInsidePlot(u.chartX-t.plotLeft,u.chartY-t.plotTop)){t.mapZoom(v>0?2:0.5,t.xAxis[0].toValue(u.chartX),t.yAxis[0].toValue(u.chartY))}}});j(f.prototype,"init",function(v,u,t){v.call(this,u,t);if(t.mapNavigation.enableTouchZoom){this.pinchX=this.pinchHor=this.pinchY=this.pinchVert=true}});n(m.prototype,{renderMapNavigation:function(){var v=this,t=this.options.mapNavigation,x=t.buttons,z,u,y,w=function(){this.handler.call(v)};if(t.enableButtons){for(z in x){if(x.hasOwnProperty(z)){y=g(t.buttonOptions,x[z]);u=v.renderer.button(y.text,0,0,w).attr({width:y.width,height:y.height}).css(y.style).add();u.handler=y.onclick;u.align(n(y,{width:u.width,height:u.height}),null,"spacingBox")}}}},fitToBox:function(t,u){d([["x","width"],["y","height"]],function(w){var x=w[0],v=w[1];if(t[x]+t[v]>u[x]+u[v]){if(t[v]>u[v]){t[v]=u[v];t[x]=u[x]}else{t[x]=u[x]+u[v]-t[v]}}if(t[v]>u[v]){t[v]=u[v]}if(t[x]<u[x]){t[x]=u[x]}});return t},mapZoom:function(G,H,C){if(this.isMapZooming){return}var I=this,w=I.xAxis[0],t=w.max-w.min,B=e(H,w.min+t/2),x=t*G,u=I.yAxis[0],A=u.max-u.min,z=e(C,u.min+A/2),F=A*G,J=B-x/2,E=z-F/2,y=e(I.options.chart.animation,true),D,v=I.fitToBox({x:J,y:E,width:x,height:F},{x:w.dataMin,y:u.dataMin,width:w.dataMax-w.dataMin,height:u.dataMax-u.dataMin});w.setExtremes(v.x,v.x+v.width,false);u.setExtremes(v.y,v.y+v.height,false);D=y?y.duration||500:0;if(D){I.isMapZooming=true;setTimeout(function(){I.isMapZooming=false},D)}I.redraw()}});k.map=g(k.scatter,{animation:false,nullColor:"#F8F8F8",borderColor:"silver",borderWidth:1,marker:null,stickyTracking:false,dataLabels:{verticalAlign:"middle"},turboThreshold:0,tooltip:{followPointer:true,pointFormat:"{point.name}: {point.y}<br/>"},states:{normal:{animation:true}}});var h=a.extendClass(q,{applyOptions:function(v,u){var t=q.prototype.applyOptions.call(this,v,u);if(t.path&&typeof t.path==="string"){t.path=t.options.path=a.splitPath(t.path)}return t},onMouseOver:function(){clearTimeout(this.colorInterval);q.prototype.onMouseOver.call(this)},onMouseOut:function(){var t=this,y=+new Date(),w=r(t.options.color),u=r(t.pointAttr.hover.fill),v=t.series.options.states.normal.animation,x=v&&(v.duration||500);if(x&&w.rgba.length===4&&u.rgba.length===4){delete t.pointAttr[""].fill;clearTimeout(t.colorInterval);t.colorInterval=setInterval(function(){var A=(new Date()-y)/x,z=t.graphic;if(A>1){A=1}if(z){z.attr("fill",b(u,w,A))}if(A>=1){clearTimeout(t.colorInterval)}},13)}q.prototype.onMouseOut.call(t)}});p.map=a.extendClass(p.scatter,{type:"map",pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},colorKey:"y",pointClass:h,trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:c,supportsDrilldown:true,getExtremesFromAll:true,useMapGeometry:true,init:function(A){var x=this,w=A.options.legend.valueDecimals,y=[],u,E,F,H,z,B,C,G,D,v,t=A.options.legend.layout==="horizontal";a.Series.prototype.init.apply(this,arguments);B=x.options.colorRange;C=x.options.valueRanges;if(C){d(C,function(I){E=I.from;F=I.to;u="";if(E===s){u="< "}else{if(F===s){u="> "}}if(E!==s){u+=l(E,w)}if(E!==s&&F!==s){u+=" - "}if(F!==s){u+=l(F,w)}y.push(a.extend({chart:x.chart,name:u,options:{},drawLegendSymbol:p.area.prototype.drawLegendSymbol,visible:true,setState:function(){},setVisible:function(){}},I))});x.legendItems=y}else{if(B){E=B.from;F=B.to;H=B.fromLabel;z=B.toLabel;D=t?[0,0,1,0]:[0,1,0,0];if(!t){v=H;H=z;z=v}G={linearGradient:{x1:D[0],y1:D[1],x2:D[2],y2:D[3]},stops:[[0,E],[1,F]]};y=[{chart:x.chart,options:{},fromLabel:H,toLabel:z,color:G,drawLegendSymbol:this.drawLegendSymbolGradient,visible:true,setState:function(){},setVisible:function(){}}];x.legendItems=y}}},drawLegendSymbol:p.area.prototype.drawLegendSymbol,drawLegendSymbolGradient:function(D,E){var B=D.options.symbolPadding,C=e(D.options.padding,8),w,y,v=this.chart.renderer.fontMetrics(D.options.itemStyle.fontSize).h,t=D.options.layout==="horizontal",A,z,x,u=e(D.options.rectangleLength,200);if(t){w=-(B/2);y=0}else{w=-u+D.baseline-(B/2);y=C+v}E.fromText=this.chart.renderer.text(E.fromLabel,y,w).attr({zIndex:2}).add(E.legendGroup);A=E.fromText.getBBox();E.legendSymbol=this.chart.renderer.rect(t?A.x+A.width+B:A.x-v-B,A.y,t?u:v,t?v:u,2).attr({zIndex:1}).add(E.legendGroup);z=E.legendSymbol.getBBox();E.toText=this.chart.renderer.text(E.toLabel,z.x+z.width+B,t?w:z.y+z.height-B).attr({zIndex:2}).add(E.legendGroup);x=E.toText.getBBox();if(t){D.offsetWidth=A.width+z.width+x.width+(B*2)+C;D.itemY=v+C}else{D.offsetWidth=Math.max(A.width,x.width)+(B)+z.width+C;D.itemY=z.height+C;D.itemX=B}},getBox:function(w){var v=Number.MIN_VALUE,t=Number.MAX_VALUE,u=Number.MIN_VALUE,x=Number.MAX_VALUE;d(w||this.options.data,function(z){var E=z.path,D=E.length,F=false,A=Number.MIN_VALUE,C=Number.MAX_VALUE,y=Number.MIN_VALUE,B=Number.MAX_VALUE;while(D--){if(typeof E[D]==="number"&&!isNaN(E[D])){if(F){A=Math.max(A,E[D]);C=Math.min(C,E[D])}else{y=Math.max(y,E[D]);B=Math.min(B,E[D])}F=!F}}z._maxX=A;z._minX=C;z._maxY=y;z._minY=B;v=Math.max(v,A);t=Math.min(t,C);u=Math.max(u,y);x=Math.min(x,B)});this.minY=x;this.maxY=u;this.minX=t;this.maxX=v},translatePath:function(x){var v=this,y=false,w=v.xAxis,t=v.yAxis,u;x=[].concat(x);u=x.length;while(u--){if(typeof x[u]==="number"){if(y){x[u]=Math.round(w.translate(x[u]))}else{x[u]=Math.round(t.len-t.translate(x[u]))}y=!y}}return x},setData:function(){a.Series.prototype.setData.apply(this,arguments);this.getBox()},translate:function(){var t=this,v=Number.MAX_VALUE,u=Number.MIN_VALUE;t.generatePoints();d(t.data,function(w){w.shapeType="path";w.shapeArgs={d:t.translatePath(w.path)};if(typeof w.y==="number"){if(w.y>u){u=w.y}else{if(w.y<v){v=w.y}}}});t.translateColors(v,u)},translateColors:function(x,v){var u=this.options,t=u.valueRanges,w=u.colorRange,A=this.colorKey,z,y;if(w){z=r(w.from);y=r(w.to)}d(this.data,function(B){var F=B[A],D,C,E,G;if(t){E=t.length;while(E--){D=t[E];z=D.from;y=D.to;if((z===s||F>=z)&&(y===s||F<=y)){C=D.color;break}}}else{if(w&&F!==undefined){G=1-((v-F)/(v-x));C=F===null?u.nullColor:b(z,y,G)}}if(C){B.color=null;B.options.color=C}})},drawGraph:c,drawDataLabels:c,drawPoints:function(){var u=this,v=u.xAxis,t=u.yAxis,w=u.colorKey;d(u.data,function(x){x.plotY=1;if(x[w]===null){x[w]=0;x.isNull=true}});p.column.prototype.drawPoints.apply(u);d(u.data,function(y){var z=y.dataLabels,x=v.toPixels(y._minX,true),B=v.toPixels(y._maxX,true),C=t.toPixels(y._minY,true),A=t.toPixels(y._maxY,true);y.plotX=Math.round(x+(B-x)*e(z&&z.anchorX,0.5));y.plotY=Math.round(C+(A-C)*e(z&&z.anchorY,0.5));if(y.isNull){y[w]=null}});a.Series.prototype.drawDataLabels.call(u)},animateDrilldown:function(x){var u=this.chart.plotBox,y=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1],t=y.bBox,v=this.chart.options.drilldown.animation,w;if(!x){w=Math.min(t.width/u.width,t.height/u.height);y.shapeArgs={scaleX:w,scaleY:w,translateX:t.x,translateY:t.y};d(this.points,function(z){z.graphic.attr(y.shapeArgs).animate({scaleX:1,scaleY:1,translateX:0,translateY:0},v)});delete this.animate}},animateDrillupFrom:function(t){p.column.prototype.animateDrillupFrom.call(this,t)},animateDrillupTo:function(t){p.column.prototype.animateDrillupTo.call(this,t)}});k.mapline=g(k.map,{lineWidth:1,backgroundColor:"none"});p.mapline=a.extendClass(p.map,{type:"mapline",pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth",fill:"backgroundColor"},drawLegendSymbol:p.line.prototype.drawLegendSymbol});k.mappoint=g(k.scatter,{dataLabels:{enabled:true,format:"{point.name}",color:"black",style:{textShadow:"0 0 5px white"}}});p.mappoint=a.extendClass(p.scatter,{type:"mappoint"});a.Map=function(u,w){var v={endOnTick:false,gridLineWidth:0,labels:{enabled:false},lineWidth:0,minPadding:0,maxPadding:0,startOnTick:false,tickWidth:0,title:null},t;t=u.series;u.series=null;u=g({chart:{type:"map",panning:"xy"},xAxis:v,yAxis:g(v,{reversed:true})},u,{chart:{inverted:false}});u.series=t;return new a.Chart(u,w)}}(Highcharts));