    <script>

        //指定多少毫秒无动作将跳转
        var timeout = 3600000;
        //记录当前时间
        var occurtime = new Date().getTime();
        //更新最新动作时间
        document.onmousemove = function () {
            occurtime = new Date().getTime();
        }
        //也可以用窗口失去焦点来更新时间
        //window.onblur=function(){
        //        occurtime=new Date().getTime() ;
        //}
        //判断无动作时间并跳转
           function goUrl() {
            var a = parseInt(new Date().getTime() - occurtime);
            document.getElementById("msg1").innerHTML = a;  //距离上次用户操作的时间
            document.getElementById("msg2").innerHTML = timeout - a;   //与指定时间的间隔
            //当前间隔时间大于指定时间
            if (a > timeout) {
                window.location.href = "index.html";
            }
        }
        window.setInterval("goUrl()", 100);
    </script>