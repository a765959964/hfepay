$(function(){Metronic.init();Layout.init();QuickSidebar.init();Demo.init();$(".date-picker").datepicker({rtl:Metronic.isRTL(),orientation:"left",autoclose:true});$("#query").click(function(){var a=$("#form").serialize();$.ajax({type:"POST",url:"organlimit/content",data:a,success:function(b){$("#tablec").html(b)}})});$("#cancle").click(function(){$(".form-horizontal input").val("");$(".form-horizontal select").val("");$("#organNo").selectpicker("refresh")});$("#organNo").selectpicker({noneSelectedText:"请选择！",noneResultsText:"查无数据！ {0}",style:"btn-select"}).init(function(){$("#organNo").next().find("input").on("input",function(c){$("#organNo").empty();$("#organNo").append("<option value=''>  --  请选择  --  </option>");var a=$("#organNo").next().find("input").val().trim();var b=$("#baseUrl").text().trim();if(a!=""){$.ajax({url:b+"/adminManage/adviertisementinfo/getorganlist",data:{organName:a},async:false,type:"POST",success:function(f){var f=JSON.parse(f);var g=f.objList;for(var d in g){var e="<option value='"+g[d].organNo+"'>"+g[d].organName+"</option>";$("#organNo").append(e)}}})}$("#organNo").selectpicker("refresh")})});toPage(1)});function updateStatus(b){var d=$(b);var c=d.attr("value");var a=d.attr("status");bootbox.setLocale("zh_CN");bootbox.confirm("确定执行该操作吗?",function(e){if(e){$.ajax({type:"POST",url:"organlimit/updateStatus",data:{id:c,status:a},success:function(f){f=$.parseJSON(f);bootbox.alert(f.message,function(){if(f.status==1){a=a==1?2:1;d.parent().prev().prev().html(d.text());var g=d.text().trim()=="启用"?'<span class="label label-danger">禁用</span>':'<span class="label label-success">启用</span>';d.attr("status",a);d.html(g)}})}})}})}function del(a){bootbox.setLocale("zh_CN");bootbox.confirm("确定执行该操作吗?",function(b){if(b){$.ajax({type:"POST",url:"organlimit/del",data:{id:a},success:function(c){c=$.parseJSON(c);bootbox.alert(c.message,function(){if(c.status==1){window.location.reload()}})}})}})}function toPage(a){$.ajax({type:"POST",url:"organlimit/content?pageNo="+a,success:function(b){$("#tablec").html(b)}})};