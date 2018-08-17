<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html" charset="UTF-8">
    <title>onChange事件</title>
    <script language="javascript">
function showMsg(obj) {
var opt = obj.options[obj.selectedIndex]
alert("The option you select is:"+opt.text+"("+opt.value+")");
}
</script>
<SELECT name="mySelect" id="mySelect" onchange="showMsg(this)">
<OPTION value ="1">风</OPTION>
<OPTION value="2">雨</OPTION>
<OPTION value ="3">雷</OPTION>
<OPTION value="4">电</OPTION>
</SELECT>
</head>
<body>

</body>
</html>