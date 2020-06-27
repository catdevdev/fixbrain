<template>
  <div class="block__table">
    <div v-for="example in value" :key="example.table" class="examples">
      <div
        v-for="num in example.examples"
        :key="num.num"
        :class="{example__block: true, backlight__block: !num.disable}"
        @click="enableExpression(example.table, num.num-1 )"
      >
        <div class="example">{{ example.table }} * {{ num.num }}</div>
        <div class="equal">=</div>
        <div class="answer">{{ (example.table) * (num.num) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],

  methods: {
    enableExpression: function(table, id) {
      this.value[table - 2].examples[id].disable = !this
        .value[table - 2].examples[id].disable;
      this.$emit("input", this.value);
    }
  },
  created() {
    console.log(this.value);
  },
};
</script>

<style lang="scss" scoped>
$borderRadius: 20px;
$widthBlock: 600px;
.block__table {
  width: $widthBlock;
  height: 420px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: $borderRadius;
  background: #fafafa;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;

  position: absolute;
  transform: translate(-50%, -100%);
  left: 50%;
}

.examples {
  width: 95px;

  //   border: 1px solid #6e6e6e;

  font-size: 18px;
  font-weight: 500;
}

.example__block {
  height: 17px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
}

.backlight__block {
  background: rgba(0, 170, 243, 0.4);

  &:nth-child(even) {
    background: rgba(0, 170, 243, 0.2);
  }
}

.equal {
  position: absolute;
  left: 53px;
}
</style>