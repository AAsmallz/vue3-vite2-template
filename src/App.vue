<script setup lang="ts">
import { ref } from 'vue';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
// 引入测试组件
import helloWorld from './components/hello-world.vue';

const locale = ref(zhCn);

</script>

<template>
  <div id="app">
		<hello-world></hello-world>
		<el-config-provider :locale="locale">
			<router-view></router-view>
		</el-config-provider>
  </div>
</template>

<style lang="scss">
@import '@/styles/variables.scss';
</style>
