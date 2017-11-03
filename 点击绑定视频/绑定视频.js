<script type="text/javascript">
                window.onload = function () {
                    var arr = document.getElementsByClassName('divercss');
                    for (var i = 0; i < arr.length; i++) {
                        arr[i].onclick = function () {
                            var a = this.id;
                            document.getElementById("videoid").src = "mp4/" + a + ".mp4";
                            document.getElementById("videoid").load();
                            document.getElementById("videoid").volume = 0.8;
                        }
                    }
                }
            </script>