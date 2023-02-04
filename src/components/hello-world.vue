<template>
	<div class="hello-world-container">
		<h2>welcome to use the vue3-vite2-template</h2>
		<br>
		count: <span>{{count}}</span>
		<br>
		<p><el-button type="primary" @click="onClick">点击count加1</el-button></p>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTestPinia } from '@/store';

const useTestStore = useTestPinia();
const count = computed(() => {
	return useTestStore.count
})
const onClick = () => {
	useTestStore.onAddCount()
}
</script>

<style lang="scss" scoped>
.hello-world-container {
	width: 500px;
	height: 300px;
	margin: 100px auto;
	text-align: center;
}
</style>
