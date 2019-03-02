<template>
    <div class="app">
        <!-- 头部 header -->
        <mt-header fixed title="天泰教育-17软5"></mt-header>
        <h1>这是通过.vue文件渲染出来的组件</h1>
        <!-- 中间内容部分 -->
        <!-- tabbar 底部导航 -->
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
    .app{
        padding-top: 40px
    }
</style>
