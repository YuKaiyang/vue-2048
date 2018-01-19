<template>
  <div :class="classObject">
    {{ number }}
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    classObject() {
      return {
        l2: this.number === 2,
        l4: this.number === 4,
        l8: this.number === 8,
        l16: this.number === 16,
        l32: this.number === 32,
        l64: this.number === 64,
        l128: this.number === 128,
        l256: this.number === 256,
        l512: this.number === 512,
        l1024: this.number === 1024,
        l2048: this.number === 2048
      };
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
  background-color: rgba(238, 228, 218, 0.35);
  font: 3em sans-serif;
  text-align: center;
  line-height: 110px;
  margin-right: -3px;
  margin-bottom: -3px;
}
.l2 {
  background-color: #eee4da;
}
.l4 {
  background-color: #ede0c8;
}
.l8 {
  background-color: #f2b179;
}
.l16 {
  background-color: #f59563;
}
.l32 {
  background-color: #f67c5f;
}
.l64 {
  background-color: #24d390;
}
.l128 {
  background-color: #edcf72;
}
.l256 {
  background-color: #391eaf;
}
.l512 {
  background-color: #db2da1;
}
.l1024 {
  background-color: #dd3d15;
}
.l2048 {
  background-color: #d19018;
}
</style>
