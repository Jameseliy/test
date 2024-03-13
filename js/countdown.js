timer('2024-06-07 0:00:00','day');
	
    /**
     * 入参第一个为时间字符串，第二个参数为模式选择，如果传入'day'，按天数倒计时到秒，不传值，按小时精确到秒
     * @param timeStr
     * @param item
     */
    function timer(timeStr,item){
        setInterval(function(){
            let nowTime = new Date(timeStr) - new Date;
            let minutes = parseInt(nowTime / 1000 / 60 % 60, 10);//计算剩余的分钟
            let seconds = parseInt(nowTime / 1000 % 60, 10);//计算剩余的秒数
 
 
            minutes = checkTime(minutes);
            seconds = checkTime(seconds);
            if(item==='day'){
                let days = parseInt(nowTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
                let hours = parseInt(nowTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
                days = checkTime(days);
                hours = checkTime(hours);
                document.getElementById('timer').innerHTML=days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
            }
            else{
                let hours = parseInt(nowTime / ( 1000 * 60 * 60), 10); //计算剩余的小时
                hours = checkTime(hours);
                document.getElementById("timer").innerHTML = hours + "小时" + minutes + "分" + seconds + "秒";
            }
        },1000);
    }
 
    function checkTime(i) { //将0-9的数字前面加上0，例1变为01
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }