$(function(){Metronic.init();Layout.init();QuickSidebar.init();Demo.init();$(".date-picker").datepicker({rtl:Metronic.isRTL(),orientation:"left",autoclose:true});$("#cancle").click(function(){history.go(-1)});$("#form").validate({event:"blur",rules:{merchantNo:{required:true,maxlength:25},merchantName:{required:true,maxlength:25},channelNo:{required:true,maxlength:25},agentNo:{required:true,maxlength:25},qrName:{required:true,maxlength:25},qrDesc:{required:true,maxlength:25},image:{required:true,maxlength:25},storeId:{required:true,maxlength:25},storeName:{required:true,maxlength:25},qrStatus:{required:true,maxlength:25},remark:{maxlength:50}},messages:{merchantNo:{required:"请输入【商户编号】",maxlength:"长度不能超过25"},merchantName:{required:"请输入【商户名称】",maxlength:"长度不能超过25"},channelNo:{required:"请输入【渠道编号】",maxlength:"长度不能超过25"},agentNo:{required:"请输入【代理商编号】",maxlength:"长度不能超过25"},qrName:{required:"请输入【二维码名称】",maxlength:"长度不能超过25"},qrDesc:{required:"请输入【二维码描述】",maxlength:"长度不能超过25"},image:{required:"请输入【二维码图片路径】",maxlength:"长度不能超过25"},storeId:{required:"请输入【商户的门店编号】",maxlength:"长度不能超过25"},storeName:{required:"请输入【商户的门店名称】",maxlength:"长度不能超过25"},qrStatus:{required:"请输入【状态：1启用 2禁用】",maxlength:"长度不能超过25"},remark:{maxlength:"长度不能超过50"}},submitHandler:function(m){$("#save").attr("disabled","disabled");var i=0;var l="";if(i==0){var k=$("#baseUrl").text().trim();var j=$("#form").serialize();$.ajax({url:k+"/adminManage/merchantqrcode/save",data:j,type:"POST",success:function(n){n=$.parseJSON(n);sweetRedirect(n,n.url)},error:function(n,p,o){$("#save").removeAttr("disabled")}})}else{$("#save").removeAttr("disabled");bootbox.alert(l,function(){})}return false},errorPlacement:function(i,j){i.appendTo(j.parent().parent())}});var g=$("select.form-control");for(var b=0;b<g.size();b++){var d=$(g[b]);var h=d.attr("id");var f=$("."+h).val();var c=d.find("option");for(var a=0;a<c.size();a++){var e=$(c[a]).val();if(e==f){$(c[a]).attr("selected","selected")}else{$(c[a]).removeClass("selected")}}}});