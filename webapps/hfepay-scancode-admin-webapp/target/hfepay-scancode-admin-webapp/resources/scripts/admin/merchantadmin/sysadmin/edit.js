$(function(){Metronic.init();Layout.init();QuickSidebar.init();Demo.init();$("#cancle").click(function(){history.go(-1)});$("#merchantNo").change(function(){var b=$(this);b.parent().parent().find("label:gt(0)").remove();var a=b.val();if(a!=""){$.ajax({url:"/adminManage/merchantadmin/list",data:{merchantNo:a},type:"POST",success:function(e){var d=JSON.parse(e);var c=0;if(d.objs>0){c++;errMsg="商户账号已存在"}if(c>0){b.parent().parent().append('<label class="error">'+errMsg+"，请重新选择！</label>")}else{$("#channelCode").val($("#"+a).attr("channelCode"));$("#agentNo").val($("#"+a).attr("agentNo"))}}})}});$(".ajaxCheck").blur(function(){var e=$(this);var c=e.attr("id");if($("#"+c+"-error").text()==""){e.parent().parent().find("label:gt(0)").remove();var g=e.val();var f=e.attr("placeholder");var a=0;var d="";if(g==null||g==""){a++;d="为空"}var b=/^[A-Za-z0-9_]{1,32}$/g;if(!b.test(g)){a++;d="需是数字、字母、下划线且长度不可超过32的组合"}if(a==0){$.ajax({type:"POST",url:"list",data:c+"="+g,async:false,success:function(h){e.parent().parent().find("label:gt(0)").remove();h=$.parseJSON(h);if(h.objs>0){a++;d="已存在"}}})}if(a==0){e.parent().parent().append('<label id="'+c+'-success" class="success" for="'+c+'">'+f+"可用！</label>")}else{e.parent().parent().append('<label id="'+c+'-error" class="error" for="'+c+'">'+f+d+"，不可用！</label>")}}else{$("#"+c+"-success").remove()}});$.validator.addMethod("isNumChar",function(c,b){var a=/^[A-Za-z0-9_]{1,32}$/g;return this.optional(b)||(a.test(c))},"请输入字母、数字、下划线组合且长度不超过32的字符!");$.validator.addMethod("isIllegalString",function(c,b){var a=/[@#\$%\^&\*]+/g;return this.optional(b)||(!a.test(c))},"不能使用非法字符");$.validator.addMethod("isnotSpace",function(c,a){var b=c.trim().length;return this.optional(a)||(b!=0)},"不能是空白字符");$.validator.addMethod("isMobile",function(d,b){var c=d.length;var a=/(^\d{3,4}-?\d{3,4}-?\d{3,4}$)|(^1[34578]{1}[0-9]{9}$)/;return this.optional(b)||(a.test(d))},"请正确填写您的电话号码");$("#form").validate({event:"blur",rules:{merchantNo:{required:true},channelCode:{required:true},agentNo:{required:true},userName:{required:true,maxlength:25,isNumChar:true},shortName:{required:true,isIllegalString:true,isnotSpace:true,maxlength:25},email:{email:true,maxlength:50},phone:{required:false,isMobile:true,isIllegalString:true,maxlength:32},password:{maxlength:25},passwordstr:{maxlength:25}},messages:{merchantNo:{required:"请选择【商户】"},channelNo:{required:"选择的商户信息异常"},agentNo:{required:"选择的商户信息异常"},userName:{required:"请输入【账户】",maxlength:"长度不能超过25"},shortName:{required:"请输入【账户简称】",maxlength:"长度不能超过25"},email:{email:"请输入正确的邮箱格式",maxlength:"长度不能超过50"},phone:{required:"请输入【联系电话】",maxlength:"长度不能超过32"},password:{maxlength:"长度不能超过25"},passwordstr:{maxlength:"长度不能超过25"}},submitHandler:function(b){var f=0;var d="";var a=$("#id").val();var h=$("#password").val();if((a==""||a==null)&&(h==""||h==null)){f++;d="请输入密码！"}if(h!=""&&h!=null){var c=/\w$/;if(!c.test(h)){f++;d="密码请输入字母、数字、下划线!"}else{var i=$("#passwordstr").val();if(h.trim()!=i.trim()){f++;d="两次输入的密码需要一样!"}}}if($("#id").val()==""){$.ajax({type:"POST",url:"list",data:"userName="+$("#userName").val(),async:false,success:function(j){j=$.parseJSON(j);if(j.objs>0){f++;d="账号已存在"}}})}if(f==0){$("#save").attr("disable","disable");var e=$("#baseUrl").text().trim();var g=$("#form").serialize();$.ajax({url:e+"/adminManage/merchantadmin/save",data:g,type:"POST",success:function(j){j=$.parseJSON(j);sweetRedirect(j,j.url)}})}else{$("#save").removeAttr("disabled");bootbox.alert(d,function(){})}return false},errorPlacement:function(a,b){a.appendTo(b.parent().parent())}})});