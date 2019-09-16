(function(d){var a=d.getOptions(),b=a.plotOptions,c=d.seriesTypes,g=d.merge,e=function(){},f=d.each;b.funnel=g(b.pie,{center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",dataLabels:{connectorWidth:1,connectorColor:"#606060"},size:true,states:{select:{color:"#C0C0C0",borderColor:"#000000",shadow:false}}});c.funnel=d.extendClass(c.pie,{type:"funnel",animate:e,translate:function(){var j=function(L,K){return(/%$/).test(L)?K*parseInt(L,10)/100:parseInt(L,10)},k=0,t=this,w=t.chart,q=w.plotWidth,E=w.plotHeight,z=0,n=t.options,I=n.center,s=j(I[0],q),r=j(I[0],E),A=j(n.width,q),H,v,x=j(n.height,E),u=j(n.neckWidth,q),m=j(n.neckHeight,E),o=x-m,J=t.data,y,p,C=n.dataLabels.position==="left"?1:0,G,l,F,D,i,B,h;t.getWidthAt=v=function(K){return K>x-m||x===m?u:u+(A-u)*((x-m-K)/(x-m))};t.getX=function(L,K){return s+(K?-1:1)*((v(L)/2)+n.dataLabels.distance)};t.center=[s,r,x];t.centerX=s;f(J,function(K){k+=K.y});f(J,function(K){h=null;p=k?K.y/k:0;l=r-x/2+z*x;i=l+p*x;H=v(l);G=s-H/2;F=G+H;H=v(i);D=s-H/2;B=D+H;if(l>o){G=D=s-u/2;F=B=s+u/2}else{if(i>o){h=i;H=v(o);D=s-H/2;B=D+H;i=o}}y=["M",G,l,"L",F,l,B,i];if(h){y.push(B,h,D,h)}y.push(D,i,"Z");K.shapeType="path";K.shapeArgs={d:y};K.percentage=p*100;K.plotX=s;K.plotY=(l+(h||i))/2;K.tooltipPos=[s,K.plotY];K.slice=e;K.half=C;z+=p});t.setTooltipPoints()},drawPoints:function(){var i=this,h=i.options,j=i.chart,k=j.renderer;f(i.data,function(l){var n=l.graphic,m=l.shapeArgs;if(!n){l.graphic=k.path(m).attr({fill:l.color,stroke:h.borderColor,"stroke-width":h.borderWidth}).add(i.group)}else{n.animate(m)}})},sortByAngle:e,drawDataLabels:function(){var n=this.data,o=this.options.dataLabels.distance,m,k,j,l=n.length,h,p;this.center[2]-=2*o;while(l--){j=n[l];m=j.half;k=m?1:-1;p=j.plotY;h=this.getX(p,m);j.labelPos=[0,p,h+(o-5)*k,p,h+o*k,p,m?"right":"left",0]}c.pie.prototype.drawDataLabels.call(this)}})}(Highcharts));