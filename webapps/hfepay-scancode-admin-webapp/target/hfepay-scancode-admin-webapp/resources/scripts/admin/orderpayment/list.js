$(function(){$("#query").click(function(){toPage(1)});toPage(1);var b=new Date();var a=b.getFullYear()+"-"+(b.getMonth()+1)+"-"+b.getDate();var c=b.getFullYear()+"-"+(b.getMonth()+1)+"-"+b.getDate();$(".date-picker").datepicker({format:"yyyy-mm-dd",weekStart:0,autoclose:true,todayHighlight:true,defaultDate:new Date(),keyboardNavigation:true,todayBtn:"linked",clearBtn:"linked",language:"zh-CN"})});function toPage(a){var b=$("#form").serialize();$.ajax({type:"POST",url:"orderpayment/content?pageNo="+a,data:b,success:function(c){$("#tablec").html(c)}})};