$(function(){$("#query").click(function(){toPage(1)});toPage(1);$(".date-picker").datepicker({format:"yyyy-mm-dd",weekStart:0,autoclose:true,todayHighlight:true,defaultDate:new Date(),keyboardNavigation:true,todayBtn:"linked",clearBtn:"linked",language:"zh-CN"})});function del(a){bootbox.setLocale("zh_CN");bootbox.confirm("确定执行该操作吗?",function(b){if(b){$.ajax({type:"POST",url:"merchantauthdetail/del",data:{id:a},success:function(c){c=$.parseJSON(c);bootbox.alert(c.values,function(){if(c.executeStatus==0){window.location.reload()}})}})}})}function toPage(a){var b=$("#form").serialize();$.ajax({type:"POST",url:"merchantauthdetail/content?pageNo="+a,data:b,success:function(c){$("#tablec").html(c)}})};