<template>
  <div
    @click="switchHanlder(!value)"
    class="switcher__container"
    :class="{switcher__container__off: value, switcher__container__on: !value}"
  >
    <div class="circle" :class="{circle__off: value, circle__on: !value}"></div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    switchHanlder(isOn) {
      this.$emit("input", isOn);
    }
  }
};
</script>

<style lang='scss' scoped>
.switcher__container {
  width: 48px;
  height: 24px;
  background: #088ad3;
  border-radius: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: background-color 0.3s ease;
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ebebeb;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  transition: transform 0.25s ease;
}

.switcher__container__off {
  background: #bababa;
}

.switcher__container__on {
  background: #088ad3;
}

.circle__off {
  transform: translateX(2px);
}
.circle__on {
  transform: translateX(26px);
}
</style>