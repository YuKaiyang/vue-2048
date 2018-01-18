<template>
  <div class="container">
    <Node 
    v-for="(number, index) in numbers" 
    :key="index"
    :number="number===0?'':number"
    />
  </div>
</template>

<script>
import Node from "./Node.vue";
import { mapState } from "vuex";

const numbers = [];

for (let i = 0; i < 16; i++) {
  numbers.push(i);
}

export default {
  components: {
    Node
  },
  computed: mapState({
    numbers: "numbers"
  }),
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  width: 440px;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
