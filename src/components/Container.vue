<template>
  <div class="container">
    <Node 
    v-for="node in nodes" 
    :key="node" 
    :index="node"
    :number="node"
    />
  </div>
</template>

<script>
import Node from "./Node.vue";

const nodes = [];

for (let i = 1; i < 17; i++) {
  nodes.push(i);
}

export default {
  components: {
    Node
  },
  data() {
    return {
      nodes
    };
  },
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
