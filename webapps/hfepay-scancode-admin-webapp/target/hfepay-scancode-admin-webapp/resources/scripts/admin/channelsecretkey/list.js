$(function(){$("#query").click(function(){toPage(1)});toPage(1)});function toPage(a){var b=$("#form").serialize();$.ajax({type:"POST",url:"channelsecretkey/content?pageNo="+a,data:b,success:function(c){$("#tablec").html(c)}})}function updateStatus(b){var d=$(b);var c=d.attr("value");var a=d.attr("status");bootbox.setLocale("zh_CN");bootbox.confirm("确定执行该操作吗?",function(e){if(e){$.ajax({type:"POST",url:"channelsecretkey/updateStatus",data:{id:c,status:a},success:function(f){f=$.parseJSON(f);bootbox.alert(f.values,function(){if(f.executeStatus==0){a=a==1?0:1;d.parent().prev().html(d.text());var g=d.text().trim()=="启用"?'<span class="label label-info">禁用</span>':'<span class="label label-info">启用</span>';d.attr("status",a);d.html(g)}})}})}})};