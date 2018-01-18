<template>
	<div id="app">
		<h1>2048</h1>
		<Container/>
	</div>
</template>

<script>
import Container from "./components/Container.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    Container
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.key === "a" || e.key === "ArrowLeft") {
        //this.moveLeft();
        this.newNumber();
      }
    });
  },
  methods: {
    ...mapMutations(["moveLeft", "newNumber"])
  }
};
</script>

<style lang="scss">
h1 {
  text-align: center;
}
</style>