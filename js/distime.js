/* get时间
var myDate = new Date();
myDate.getYear();  //获取当前年份(2位)
myDate.getFullYear(); //获取完整的年份(4位,1970-????)
myDate.getMonth();  //获取当前月份(0-11,0代表1月)
myDate.getDate();  //获取当前日(1-31)
myDate.getDay();   //获取当前星期X(0-6,0代表星期天)
myDate.getTime();  //获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours();  //获取当前小时数(0-23)
myDate.getMinutes();  //获取当前分钟数(0-59)
myDate.getSeconds();  //获取当前秒数(0-59)
myDate.getMilliseconds(); //获取当前毫秒数(0-999)
myDate.toLocaleDateString();  //获取当前日期
var mytime=myDate.toLocaleTimeString();  //获取当前时间
myDate.toLocaleString( );  //获取日期与时间
*/
function dis(){
var distime = new Date();
var year = distime.getFullYear();
var month = distime.getMonth();
var date = distime.getDate();
var h = distime.getHours();
var min = distime.getMinutes();
var s = distime.getSeconds();
var dat = distime.getDay();

var xq=""

if (dat===1){xq="一"}
else if (dat===2){xq="二"}
else if (dat===3){xq="三"}
else if (dat===4){xq="四"}
else if (dat===5){xq="五"}
else if (dat===6){xq="六"}
else if (dat===0){xq="日"}

document.getElementById("dis").innerHTML = year+"年"+month+"月"+date+"日"+h+"时"+min+"分"+s+"秒"+" "+"周"+xq

}

setTimeout("dis()",1);//执行
setInterval("dis()",1000)//切换