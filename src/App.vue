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
        this.moveLeft();
        this.newNumbers();
      } else if (e.key === "d" || e.key === "ArrowRight") {
        this.moveRight();
        this.newNumbers();
      } else if (e.key === "w" || e.key === "ArrowUp") {
        this.moveUp();
        this.newNumbers();
      } else if (e.key === "s" || e.key === "ArrowDown") {
        this.moveDown();
        this.newNumbers();
      }
    });
  },
  methods: {
    ...mapMutations([
      "moveLeft",
      "moveRight",
      "moveUp",
      "moveDown",
      "newNumbers"
    ])
  }
};
</script>

<style lang="scss">
h1 {
  text-align: center;
}
</style>