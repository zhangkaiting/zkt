<template>
    <div>
        <!-- 焦点图 -->
        <mt-swipe :auto="4000" :showIndicators="false">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <!-- 菜单列表 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">超市</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                        <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">海外购</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                  <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">服饰</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                  <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">生鲜</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">9.9包邮</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">领劵</div></a></li>
		        </ul> 
    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 300px;
    }
    .mint-swipe-item:nth-child(1){
        background-color: red;
    }
    .mint-swipe-item:nth-child(2){
        background-color: blue;
    }
    .mint-swipe-item:nth-child(3){
        background-color: green;
    }

    .mui-table-view-cell img{
        width: 60px;
        height: 60px;
    }
</style>
