$(function(){Metronic.init();Layout.init();QuickSidebar.init();Demo.init();$("#cancle").click(function(){history.go(-1)});$(".ajaxCheck").blur(function(){var o=$(this);o.parent().parent().find("label:gt(0)").remove();var q=o.val();var m=o.attr("id");var p=o.attr("placeholder");var i=0;var n="";if(q==null||q==""){i++;n="为空"}var j=/^[A-Za-z0-9_]{1,32}$/g;if(!j.test(q)){i++;n="需是数字、字母、下划线且长度不可超过32的组合"}if(i==0){$.ajax({type:"POST",url:"../../channel/sys/admin/list",data:m+"="+q,async:false,success:function(t){o.parent().parent().find("label:gt(0)").remove();t=$.parseJSON(t);if(t.objList.length>1){i++;n="已存在"}if(t.objList.length==1){var r=$("#id").val();if(r==null||r==""){i++;n="已存在"}else{var s=t.objList[0];if(r!=s.id){i++;n="已存在"}}}}})}if(i==0){o.parent().parent().append('<label id="'+m+'-success" class="success" for="'+m+'">'+p+"可用！</label>")}else{o.parent().parent().append('<label id="'+m+'-error" class="error" for="'+m+'">'+p+n+"，不可用！</label>")}});$.validator.addMethod("isNumChar",function(m,j){var i=/^[A-Za-z0-9_]{1,32}$/g;return this.optional(j)||(i.test(m))},"请输入字母、数字、下划线组合且长度不超过32的字符!");$.validator.addMethod("isIllegalString",function(m,j){var i=/[@#\$%\^&\*]+/g;return this.optional(j)||(!i.test(m))},"不能使用非法字符");$("#form").validate({event:"blur",rules:{userName:{required:true,isNumChar:true},shortName:{required:true,isIllegalString:true,maxlength:25},email:{email:true,maxlength:50},phone:{digits:true,isIllegalString:true,maxlength:32},password:{maxlength:25},passwordstr:{maxlength:25,}},messages:{userName:{required:"请输入【账户】"},shortName:{required:"请输入【账户简称】",maxlength:"长度不能超过25"},email:{email:"请输入正确的邮箱格式",maxlength:"长度不能超过50"},phone:{digits:"请输入正整数",maxlength:"长度不能超过32"},password:{maxlength:"长度不能超过25"},passwordstr:{maxlength:"长度不能超过25"}},submitHandler:function(j){$("#save").attr("disabled","disabled");var p=0;var n="";var i=$("#id").val();var r=$("#password").val();if((i==""||i==null)&&(r==""||r==null)){p++;n="请输入密码！"}if(r!=""&&r!=null){var m=/\w$/;if(!m.test(r)){p++;n="密码请输入字母、数字、下划线!"}else{var s=$("#passwordstr").val();if(r.trim()!=s.trim()){p++;n="两次输入的密码需要一样!"}}}else{p++;n="请输入密码！"}$.ajax({type:"POST",url:"../../channel/sys/admin/list",data:"userName="+$("#userName").val(),async:false,success:function(v){h.parent().parent().find("label:gt(0)").remove();v=$.parseJSON(v);if(v.objList.length>1){p++;n="账号已存在"}if(v.objList.length==1){var t=$("#id").val();if(t==null||t==""){p++;n="账号已存在"}else{var u=v.objList[0];if(t!=u.id){p++;n="账号已存在"}}}}});if(p==0){var o=$("#baseUrl").text().trim();var q=$("#form").serialize();$.ajax({url:o+"/adminManage/channelbase/savechanneladmin",data:q,type:"POST",success:function(t){t=$.parseJSON(t);bootbox.alert(t.values,function(){if(t.executeStatus=="0"){location.href=o+t.url}})}})}else{bootbox.alert(n,function(){})}return false},errorPlacement:function(i,j){i.appendTo(j.parent().parent())}});var l=$("select.form-control");for(var f=0;f<l.size();f++){var h=$(l[f]);var a=h.attr("id");var c=$("."+a).val();var b=h.find("option");var g=0;for(var e=0;e<b.size();e++){var d=$(b[e]).val();var k=$(b[e]).attr("val");if(d==c||k==c){$(b[e]).attr("selected","selected");g++}else{$(b[e]).removeClass("selected")}}if(g==0&&c!=""){h.parent().parent().parent().parent().hide();h.attr("name","xxx")}}});