<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>  
<%
    String path =  request.getContextPath();
	request.setAttribute("path", path);
%>
<table class="table table-striped table-bordered" id="sample_6">

	<tr>
		<td class="col-md-2 td0">渠道编号</td><td class="col-md-4 parent_id_parse" colspan="3">${item.channelNo}</td>
	</tr>
	<tr>
		<td class="col-md-2 td0">代理商级别</td><td class="col-md-4 parent_id_parse" title="temp1">${item.temp1}<c:if test="${empty item.temp1}">不限</c:if></td>
		<td class="col-md-2 td0">消息类型</td><td class="col-md-4 parent_id_parse" title="messageType">${item.messageType}</td>	
	</tr>
	<tr>
		<td class="col-md-2 td0">消息内容</td><td class="col-md-4">${item.messageContent}</td>
		<td class="col-md-2 td0">推送规则</td><td class="col-md-4 parent_id_parse">${item.pushRule}</td>		
	</tr>
	<tr>		
		<td class="col-md-2 td0">推送频率</td><td class="col-md-4 parent_id_parse" title="pushTime">${item.pushTime}</td>
		<td class="col-md-2 td0">推送方式</td><td class="col-md-4 parent_id_parse"  title="pushWay">${item.pushWay}</td>
	</tr>
	<tr>
		<td class="col-md-2 td0">首次推送日期</td><td class="col-md-4 date_time_parse">${item.firstPushDate}</td>
		<td class="col-md-2 td0">下次推送日期</td><td class="col-md-4 date_time_parse">${item.nextPushDate}</td>
	</tr>
	<tr>
		<td class="col-md-2 td0">状态</td><td class="col-md-4 parent_id_parse" title="status"> ${item.status} </td>
		<td class="col-md-2 td0">记录状态</td><td class="col-md-4 parent_id_parse" title="recordStatus"> ${item.recordStatus} </td>
	</tr>
	<tr>
		<td class="col-md-2 td0">创建时间</td><td class="col-md-4 date_time_parse">${item.createTime}</td>
		<td class="col-md-2 td0">修改时间</td><td class="col-md-4 date_time_parse">${item.updateTime}</td>
	</tr>
	<tr>
		<td class="col-md-2 td0">操作人账号</td><td class="col-md-4" >${item.operator}</td>
		<td class="col-md-2 td0">备注</td><td class="col-md-4 parent_id_parse" >${item.remark}</td>
	</tr>
</table>
<script type="text/javascript">
dataOpr();
</script>
