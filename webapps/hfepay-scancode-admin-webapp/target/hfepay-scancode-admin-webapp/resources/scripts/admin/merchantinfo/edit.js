$(function(){Metronic.init();Layout.init();QuickSidebar.init();Demo.init();$(".date-picker").datepicker({rtl:Metronic.isRTL(),orientation:"left",autoclose:true});$("#cancle").click(function(){history.go(-1)});$("#channelNo").on("change",function(){var n=$(this).val();var j=$("#agentNo option");$("#agentNo").val("");for(var m=0;m<j.size();m++){var o=$(j[m]);o.css("display","block");var p=o.attr("val");if(p!=n&&n!=""&&p!="----"){o.css("display","none")}}});function a(j){var j=j;var n=$("#id").val();var i=false;var m=$("#baseUrl").text().trim();$.ajax({url:m+"/adminManage/merchantinfo/existMobile",data:{mobile:j,id:n},type:"POST",async:false,success:function(o){if(o=="true"){i=true}}});return i}$("#mobile").blur(function(){var m=$(this);var i=m.attr("id");var j="手机号码已存在";if(a($("#mobile").val())&&$("#mobile").val().trim()!=""){$("#"+i+"-error").remove();m.parent().parent().append('<label id="'+i+'-error" class="error" for="'+i+'">'+j+"，不可用！</label>")}});$.validator.addMethod("isMobile",function(n,j){var m=n.length;var i=/^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;return this.optional(j)||(m==11&&i.test(n))},"请正确填写您的手机号码");$.validator.addMethod("isPhone",function(m,j){var i=/(^\d{3,4}-?\d{3,4}-?\d{3,4}$)|(^1[34578]{1}[0-9]{9}$)/;return this.optional(j)||(i.test(m))},"请正确填写您的电话号码");$.validator.addMethod("isLegalCard",function(m,j){var i=/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;return this.optional(j)||(i.test(m))},"身份证格式错误");$("#form").validate({event:"blur",rules:{channelNo:{required:true,maxlength:50},agentNo:{required:true,maxlength:50},merchantName:{required:true,maxlength:50},shortName:{required:true,maxlength:50},platformMerchantNo:{maxlength:50},busType:{required:true,maxlength:50},name:{required:true,maxlength:30},idCard:{required:true,isLegalCard:true,maxlength:30},mobile:{required:true,isMobile:true,maxlength:20},phone:{required:true,isPhone:true,maxlength:20},email:{email:true,maxlength:50},address:{required:true,maxlength:50},merchantLicense:{maxlength:50},taxNo:{maxlength:50},orgNo:{maxlength:50},storeName:{required:true,maxlength:50},servicePhone:{required:true,maxlength:20},storeAddress:{required:false,maxlength:250},remark:{required:false,maxlength:500}},messages:{channelNo:{required:"请输入【渠道编号】",maxlength:"长度不能超过50"},agentNo:{required:"请输入【代理商编号】",maxlength:"长度不能超过50"},merchantName:{required:"请输入【商户名称】",maxlength:"长度不能超过50"},shortName:{required:"请输入【商户简称】",maxlength:"长度不能超过50"},platformMerchantNo:{required:"请输入【转接平台号】",maxlength:"长度不能超过50"},busType:{required:"请输入【经营类型】",maxlength:"长度不能超过50"},name:{required:"请输入【法人姓名】",maxlength:"长度不能超过30"},idCard:{required:"请输入【法人身份证】",maxlength:"长度不能超过30"},mobile:{required:"请输入【手机号码】",maxlength:"长度不能超过20"},phone:{required:"请输入【联系电话】",maxlength:"长度不能超过20"},email:{email:"请输入正确的邮箱格式",maxlength:"长度不能超过100"},address:{maxlength:"长度不能超过50",required:"请输入【地址】"},merchantLicense:{maxlength:"长度不能超过50"},taxNo:{maxlength:"长度不能超过50"},orgNo:{maxlength:"长度不能超过50"},storeName:{required:"请输入【门店名称】",maxlength:"长度不能超过50"},servicePhone:{required:"请输入【服务电话】",maxlength:"长度不能超过20"},storeAddress:{required:"请输入【门店地址】",maxlength:"长度不能超过250"},remark:{maxlength:"长度不能超过500"}},submitHandler:function(j){$("#save").attr("disabled","disabled");var r=0;var q="";if(a($("#mobile").val())){r++;q+="该手机号码在商户中已使用!"}var u=$(".form-horizontal input[val='hidden']");for(var o=0;o<u.size();o++){var t=$(u[o]);var m=t.val();if(m==null||m==""){r++;q+=t.attr("title")+"不可为空!"}}var n=$("#busType").val();if(n==""){r++;q="经营类型必须选择！<br/>"}if(r==0){var p=$("#baseUrl").text().trim();var s=$("#form").serialize();$.ajax({url:p+"/adminManage/merchantinfo/save",data:s,type:"POST",success:function(i){i=$.parseJSON(i);sweetRedirect(i,i.url)},error:function(i,w,v){$("#save").removeAttr("disabled")}})}else{$("#save").removeAttr("disabled");bootbox.alert(q,function(){})}return false},errorPlacement:function(i,j){i.appendTo(j.parent().parent())}});var l=$("select.form-control");for(var h=0;h<l.size();h++){var k=$(l[h]);var b=k.attr("id");var e=$("."+b).val();var c=k.find("option");for(var g=0;g<c.size();g++){var f=$(c[g]).val();if(f==e){$(c[g]).attr("selected","selected")}else{$(c[g]).removeClass("selected")}}}function d(n,q){var m=$("#baseUrl").text().trim();var j=$(n).find("option:selected").attr("categoryNo");var i=$(n).find("option:selected").text();var p=i+"("+j+")";if(j=="null"||j==""){var o=$(n).val();$.ajax({url:m+"/adminManage/hfepaycategory/list",data:{parentId:o,level:q},type:"POST",success:function(w){var t=JSON.parse(w);var r=t.objList;var v="<option  value='' selected = 'selected'>----请选择----</option>";for(var s in r){var u="<option value='"+r[s].id+"' categoryNo = '"+r[s].categoryNo+"'>"+r[s].name+"</option>";if(q==2){if(s==0){$("#categoryTwo").css("display","block");$("#categoryTwo").empty();$("#categoryTwo").append(v)}$("#categoryTwo").append(u)}else{if(q==3){if(s==0){$("#categoryThree").css("display","block");$("#categoryThree").empty();$("#categoryThree").append(v)}$("#categoryThree").append(u)}}}if(r.length==0){$("#categoryError").css("display","block");if(q==2){$("#categoryTwo").empty()}else{if(q==3){$("#categoryThree").empty()}}}else{$("#categoryError").css("display","none")}}})}else{$("#busType").val(j);$("#busTypeStr").text(p);if(q==2){$("#categoryTwo").css("display","none");$("#categoryThree").css("display","none")}else{if(q==3){$("#categoryThree").css("display","none")}}}}$("#categoryOne").change(function(){d(this,2)});$("#categoryTwo").change(function(){d(this,3)});$("#categoryThree").change(function(){var j=$(this).find("option:selected").attr("categoryNo");var i=$(this).find("option:selected").text();var m=i+"("+j+")";if(j==null||j==""){$("#categoryError").css("display","block")}else{$("#busType").val(j);$("#busTypeStr").text(m)}})});