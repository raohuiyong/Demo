    <script>

        //ָ�����ٺ����޶�������ת
        var timeout = 3600000;
        //��¼��ǰʱ��
        var occurtime = new Date().getTime();
        //�������¶���ʱ��
        document.onmousemove = function () {
            occurtime = new Date().getTime();
        }
        //Ҳ�����ô���ʧȥ����������ʱ��
        //window.onblur=function(){
        //        occurtime=new Date().getTime() ;
        //}
        //�ж��޶���ʱ�䲢��ת
           function goUrl() {
            var a = parseInt(new Date().getTime() - occurtime);
            document.getElementById("msg1").innerHTML = a;  //�����ϴ��û�������ʱ��
            document.getElementById("msg2").innerHTML = timeout - a;   //��ָ��ʱ��ļ��
            //��ǰ���ʱ�����ָ��ʱ��
            if (a > timeout) {
                window.location.href = "index.html";
            }
        }
        window.setInterval("goUrl()", 100);
    </script>