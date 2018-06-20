<!-- 公共方法 -->
<script type="text/javascript">
const util = {
	setDate:function(date){
		let d1 = date.split("/")
    for (var i = 1; i < d1.length; i++) {
      if (d1[i]<10) {
        d1[i]= '0'+d1[i];
      }
    };
    let d2 = d1.join("-");
    return d2;
	}
}

export default util;
</script>
