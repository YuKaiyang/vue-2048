<template>
  <div class="index">
    {{ number }}
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  height: 110px;
  width: 110px;
  box-sizing: border-box;
  border: 3px solid black;
  background-color: aqua;
  font: 3em sans-serif;
  text-align: center;
  line-height: 110px;
  margin-right: -3px;
  margin-bottom: -3px;
}
</style>
