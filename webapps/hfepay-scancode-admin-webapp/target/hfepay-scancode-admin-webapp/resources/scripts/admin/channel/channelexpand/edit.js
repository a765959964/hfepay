$(function(){Metronic.init();Layout.init();QuickSidebar.init();Demo.init();var n=UE.getEditor("editor");var a=UE.getEditor("helpInfoEditor");var l=UE.getEditor("agreementEditor");$("#cancle").click(function(){history.go(-1)});$("#bankCard").on("keyup afterpaste",function(){var j=$(this).val();$(this).val(j.replace(/\D/g,""));if(j.length<2){$("#bankName").val("");$("#bankCode").val("")}var i=$("#baseUrl").text().trim();if(j.length>=2){$.ajax({type:"POST",url:i+"/adminManage/merchantbankcard/getBankInfo",data:{bankCard:j},success:function(p){if(p&&p!=""&&p!=null){var o=JSON.parse(p);$("#bankName").val(o.bankName);if(o.clearBankChannelNo==null){$("#bankCode").removeAttr("readonly")}else{$("#bankCode").val(o.clearBankChannelNo);$("#bankCode").attr("readonly","readonly")}$("#accountType").val("0");$("#accountType").attr("disabled","disabled")}else{$("#bankName").val("");$("#bankCode").val("");$("#accountType").val("");$("#bankCode").removeAttr("readonly");$("#bankName").removeAttr("readonly");$("#accountType").removeAttr("disabled")}}})}});function g(j){var j=j;var i=false;var o=$("#baseUrl").text().trim();$.ajax({url:o+"/adminManage/channelexpand/list",data:{channelCode:j},type:"POST",async:false,success:function(q){var p=JSON.parse(q);if(p.objList.length>0){var r=$("#id").val();if(r!=""&&r!=p.objList[0].id){i=true}if(r==""){i=true}}}});return i}$("#channelCode").blur(function(){var o=$(this);var i=o.attr("id");var j="二级域名编号已存在";if($("#channelCode").val()!=""&&g($("#channelCode").val())){$("#"+i+"-error").remove();o.parent().parent().append('<label id="'+i+'-error" class="error" for="'+i+'">'+j+"，不可用！</label>")}});$(".ajaxCheck").blur(function(){var q=$(this);q.parent().parent().find("label:gt(0)").remove();var s=q.val();var o=q.attr("id");var r=q.attr("placeholder");var i=0;var p="";if(s==null||s==""){i++;p="为空"}var j=/\w$/;if(!j.test(s)){i++;p="需是数字、字母、下划线"}j=/[@#\$%\^&\*]+/g;if(j.test(s)){i++;p="不能包含特殊字符"}$.ajax({type:"POST",url:"list",data:o+"="+s,async:false,success:function(v){q.parent().parent().find("label:gt(0)").remove();v=$.parseJSON(v);if(v.objList.length>1){i++;p="已存在"}if(v.objList.length==1){var t=$("#id").val();if(t==null||t==""){i++;p="已存在"}else{var u=v.objList[0];if(t!=u.id){i++;p="已存在"}}}}});if(i==0){q.parent().parent().append('<label id="'+o+'-success" class="success" for="'+o+'">'+r+"可用！</label>")}else{q.parent().parent().append('<label id="'+o+'-error" class="error" for="'+o+'">'+r+p+"，不可用！</label>")}});$(".ajaxCheck2").blur(function(){var q=$(this);q.parent().parent().find("label:gt(0)").remove();var s=q.val();var o=q.attr("id");var r=q.attr("placeholder");var i=0;var p="";if(s==null||s==""){i++;p="为空"}var j=/^\w{4}$/;if(!j.test(s)){i++;p="需是数字、字母、下划线,且只能是四位数"}j=/[@#\$%\^&\*]+/g;if(j.test(s)){i++;p="不能包含特殊字符"}if(i==0){$.ajax({type:"POST",url:"list",data:o+"="+s,async:false,success:function(v){q.parent().parent().find("label:gt(0)").remove();v=$.parseJSON(v);if(v.objList.length>1){i++;p="已存在"}if(v.objList.length==1){var t=$("#id").val();if(t==null||t==""){i++;p="已存在"}else{var u=v.objList[0];if(t!=u.id){i++;p="已存在"}}}}})}if(i==0){q.parent().parent().append('<label id="'+o+'-success" class="success" for="'+o+'">'+r+"可用！</label>")}else{q.parent().parent().append('<label id="'+o+'-error" class="error" for="'+o+'">'+r+p+"，不可用！</label>")}});$(".ajaxCheck1").blur(function(){var q=$(this);q.parent().parent().find("label:gt(0)").remove();var s=q.val();var o=q.attr("id");var r=q.attr("placeholder");var i=0;var p="";if(s==null||s==""){i++;p="为空"}var j=/\w{0,32}$/;if(!j.test(s)){i++;p="需是数字、字母、下划线，且长度不可超过32"}j=/[@#\$%\^&\*]+/g;if(j.test(s)){i++;p="不能包含特殊字符"}if(i==0){$.ajax({type:"POST",url:"../sys/admin/list",data:o+"="+s,async:false,success:function(v){q.parent().parent().find("label:gt(0)").remove();v=$.parseJSON(v);if(v.objList.length>1){i++;p="已存在"}if(v.objList.length==1){var t=$("#id").val();if(t==null||t==""){i++;p="已存在"}else{var u=v.objList[0];if(t!=u.id){i++;p="已存在"}}}}})}if(i==0){q.parent().parent().append('<label id="'+o+'-success" class="success" for="'+o+'">'+r+"可用！</label>")}else{q.parent().parent().append('<label id="'+o+'-error" class="error" for="'+o+'">'+r+p+"，不可用！</label>")}});jQuery.validator.addMethod("ischina",function(o,j){var i=/^[^\u4e00-\u9fa5]{0,}$/;return this.optional(j)||(i.test(o))},"不允许输入中文字符，请重新填写");$.validator.addMethod("isNumTwo",function(o,j){var i=/^[0-9]+(\.[0-9]{1,2})?$/;return this.optional(j)||(i.test(o))},"请输入整数、小数，且最多两位小数!");$.validator.addMethod("isMobile",function(p,j){var o=p.length;var i=/(^\d{3,4}-?\d{3,4}-?\d{3,4}$)|(^1[34578]{1}[0-9]{9}$)/;return this.optional(j)||(i.test(p))},"请正确填写您的电话号码");$.validator.addMethod("isCard",function(o,j){var i=/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;return this.optional(j)||(i.test(o))},"身份证格式错误");$.validator.addMethod("isNumber",function(p,i){var o=p.length;var j=/^[0-9]*$/;return this.optional(i)||(j.test(p))},"只能输入数字");$.validator.addMethod("isnotSpace",function(o,i){var j=o.trim().length;return this.optional(i)||(j!=0)},"不能是空白字符");$("#form").validate({event:"blur",rules:{channelName:{required:true,isnotSpace:true,maxlength:50},channelCode:{required:true,isnotSpace:true,maxlength:30},channelPreCode:{required:true,isnotSpace:true,maxlength:4},nickName:{required:true,isnotSpace:true,maxlength:30},address:{maxlength:100},phone:{required:true,isnotSpace:true,maxlength:25,isMobile:true},technicalSupportEmail:{maxlength:30,email:true},qqGroup:{maxlength:100},customServiceQq:{maxlength:100},businessCooperationQq:{required:true,isnotSpace:true,maxlength:100},businessCooperationEmail:{maxlength:100,email:true},microblogUrl:{maxlength:200},companyName:{required:true,isnotSpace:true,maxlength:250},preCode:{required:true,isnotSpace:true,isChar:true},recordNumber:{maxlength:50},remark:{maxlength:500},userName:{required:true},roleId:{required:true},password:{required:true},bankCode:{required:true,isnotSpace:true,maxlength:20},bankName:{required:true,isnotSpace:true,maxlength:100},bankCard:{required:true,isnotSpace:true,maxlength:25,isNumber:true},idCard:{required:true,isnotSpace:true,maxlength:30,isCard:true},name:{required:true,isnotSpace:true,maxlength:10},mobile:{maxlength:20,isMobile:true},telephone:{maxlength:20,isMobile:true},accountType:{required:true},appid:{required:true,isnotSpace:true,maxlength:100},secret:{required:true,isnotSpace:true,maxlength:100},registerTemplateId:{required:true,isnotSpace:true,maxlength:100},payTemplateId:{required:true,isnotSpace:true,maxlength:100},withDrawsTemplateId:{required:true,isnotSpace:true,maxlength:100}},messages:{channelName:{required:"请输入【渠道名称】",maxlength:"长度不能超过50"},channelCode:{required:"请输入【二级域名编号】",maxlength:"长度不能超过30"},channelPreCode:{required:"请输入【编码抬头】",maxlength:"长度不能超过4"},number:{required:"请输入【渠道编号】",maxlength:"长度不能超过50"},nickName:{required:"请输入【昵称】",maxlength:"长度不能超过30"},address:{required:"请输入【地址】",maxlength:"长度不能超过100"},phone:{required:"请输入【电话】",maxlength:"长度不能超过30"},technicalSupportEmail:{maxlength:"长度不能超过100",email:"请输入正确的邮箱格式"},qqGroup:{maxlength:"长度不能超过100"},customServiceQq:{required:"请输入【客服QQ】",maxlength:"长度不能超过100"},businessCooperationQq:{required:"请输入【商务QQ】",maxlength:"长度不能超过100"},businessCooperationEmail:{maxlength:"长度不能超过100",email:"请输入正确的邮箱格式"},microblogUrl:{maxlength:"长度不能超过100"},companyName:{required:"请输入【公司名称】",maxlength:"长度不能超过250"},preCode:{required:"请输入【编码前缀】"},recordNumber:{maxlength:"长度不能超过50"},remark:{maxlength:"长度不能超过500"},userName:{required:"请输入【账号】"},roleId:{required:"请选择【角色】"},password:{required:"请输入【密码】"},bankCode:{required:"请输入【银行开户行代码】",maxlength:"长度不能超过20"},bankName:{required:"请输入【开户行银行名称】",maxlength:"长度不能超过100"},bankCard:{required:"请输入【银行卡号码】",maxlength:"长度不能超过25"},idCard:{required:"请输入【身份证号码】",maxlength:"长度不能超过30"},name:{required:"请输入【姓名】",maxlength:"长度不能超过10"},mobile:{maxlength:"长度不能超过20"},telephone:{maxlength:"长度不能超过20"},accountType:{required:"请选择【是否对公对私】"},appid:{required:"请选择【公众号ID】",maxlength:"长度不能超过100"},secret:{required:"请选择【公众号key】",maxlength:"长度不能超过100"},registerTemplateId:{required:"请选择【注册消息模板ID】",maxlength:"长度不能超过100"},payTemplateId:{required:"请选择【支付消息模板ID】",maxlength:"长度不能超过100"},withDrawsTemplateId:{required:"请选择【提现模版ID】",maxlength:"长度不能超过100"}},submitHandler:function(q){var i=0;var p="";if(g($("#channelCode").val())){i++;p="该二级域名编号已在渠道中使用！"}if(!UE.getEditor("editor").hasContents()){i++;p="请输入关于我们！"}else{$("#aboutUs").val(UE.getEditor("editor").getContent())}if(!UE.getEditor("helpInfoEditor").hasContents()){i++;p="请输入帮助中心！"}else{$("#helpInfo").val(UE.getEditor("helpInfoEditor").getContent())}if(!UE.getEditor("agreementEditor").hasContents()){i++;p="请输入电子协议内容！"}else{$("#agreement").val(UE.getEditor("agreementEditor").getContent())}if(i==0){$("#save").attr("disabled","disabled");var o=$("#baseUrl").text().trim();$("#accountType").removeAttr("disabled");var j=$("#form").serialize();$("#accountType").attr("disabled","disabled");$.ajax({url:o+"/adminManage/channelexpand/save",data:j,type:"POST",success:function(r){r=$.parseJSON(r);bootbox.alert(r.values,function(){if(r.executeStatus=="0"){location.href=o+r.url}})}})}else{bootbox.alert(p,function(){})}return false},errorPlacement:function(i,j){i.appendTo(j.parent().parent())}});var m=$("select.form-control");for(var h=0;h<m.size();h++){var k=$(m[h]);var b=k.attr("id");var d=$("."+b).val();var c=k.find("option");for(var f=0;f<c.size();f++){var e=$(c[f]).val();if(e==d){$(c[f]).attr("selected","selected")}else{$(c[f]).removeClass("selected")}}}$("#editor").html($("#aboutUs").val());$("#helpInfoEditor").html($("#helpInfo").val());$("#agreementEditor").html($("#agreement").val())});