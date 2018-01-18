<template>
	<div id="app">
		<h1>2048</h1>
		<Container/>
	</div>
</template>

<script>
import Container from "./components/Container.vue";

export default {
  components: {
    Container
  }
};
</script>

<style lang="scss">
h1 {
  text-align: center;
}
</style>