<template>
  <div class="block__counter">
    <div class="arrow--left" @click="changeValueHandler('decrease')"></div>
    <div class="display">
      <p>{{ counter }} {{ dimension }}</p>
    </div>
    <div class="arrow--right" @click="changeValueHandler('increase')"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: this.initialValue
    };
  },
  props: {
    initialValue: {
      type: Number,
      default: 1
    },
    limits: {
      type: Array,
      required: true
    },
    dimension: {
      type: String
    }
  },
  methods: {
    changeValueHandler(operation) {
      if (operation === "increase" && this.counter < this.limits[1]) {
        this.counter++;
      } else if (operation === "decrease" && this.counter > this.limits[0]) {
        this.counter--;
      }
      this.$emit("input", this.counter);
    }
  }
};
</script>

<style lang="scss" scoped>
.block__counter {
  width: 100px;
  height: 30px;

  display: flex;
  justify-content: space-between;

  transition: transform 0.5s ease, opacity 0.3s ease;
}

.display {
  width: 45px;
  height: 95%;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow--left {
  width: 20px;
  height: 100%;
  background: url("./arrow.svg") no-repeat center;
  background-size: cover;
  transform: rotate(180deg);
  cursor: pointer;
}

.arrow--right {
  width: 20px;
  height: 100%;
  background: url("./arrow.svg") no-repeat center;
  background-size: cover;
  cursor: pointer;
}
</style>