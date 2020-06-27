<template>
  <button
    :class="{buttonStyleRound:type==='round', buttonStyleDefault:type==='default', active:active}"
    :style="dinamicStyle"
  >
    <slot />
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    type: String, // round, default
    width: String, // some value with dimension // 75px | 30%
    height: String, // some value with dimension // 75px | 30%
    center: Boolean,
    active: Boolean
  },
  computed: {
    dinamicStyle: function() {
      const styleObj = { width: this.width, height: this.height };
      if (this.center) {
        styleObj.margin = "0 auto";
      }
      return styleObj;
    }
  }
};
</script>

<style lang="scss" scoped>
.buttonStyleRound {
  background: #c4c4c4;
  border-radius: 50px;
  display: block;
  border: none;
  outline: 0px;

  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
}

.buttonStyleDefault {
  background: #dedede;
  border-radius: 5px;
  display: block;

  font-size: 15px;
  font-weight: 500;
  border: none;
  outline: 0px;
  cursor: pointer;

  &:hover {
    background: #89d9eb;
  }
}
.active {
  background: #3dcded;
  transition: background 0.1s ease;
}
</style> 