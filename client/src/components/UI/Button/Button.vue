<template>
  <button
    :class="{buttonStyleRound:type==='round', buttonStyleDefault:type==='default', active:active}"
    :style="dinamicStyle"
  >
  
    <div v-if="spinner" class="spinner">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <div class="bar4"></div>
      <div class="bar5"></div>
      <div class="bar6"></div>
      <div class="bar7"></div>
      <div class="bar8"></div>
      <div class="bar9"></div>
      <div class="bar10"></div>
      <div class="bar11"></div>
      <div class="bar12"></div>
    </div>
    <slot v-else />
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
    active: Boolean,
    spinner: {
      type: Boolean,
      default: false
    }
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

.buttonStyleRound,
.buttonStyleDefault {
  display: flex;
  justify-content: center;
  align-items: center;
}

//

div.spinner {
  position: relative;
  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
}

div.spinner div {
  width: 2px;
  height: 6px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 40%;
  opacity: 0;
  border-radius: 50px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.071);
  animation: fade 1s linear infinite;
}

@-webkit-keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.25;
  }
}

div.spinner div.bar1 {
  transform: rotate(0deg) translate(0, -130%);
  animation-delay: 0s;
}

div.spinner div.bar2 {
  transform: rotate(30deg) translate(0, -130%);
  animation-delay: -0.9167s;
}

div.spinner div.bar3 {
  transform: rotate(60deg) translate(0, -130%);
  animation-delay: -0.833s;
}
div.spinner div.bar4 {
  transform: rotate(90deg) translate(0, -130%);
  animation-delay: -0.7497s;
}
div.spinner div.bar5 {
  transform: rotate(120deg) translate(0, -130%);
  animation-delay: -0.667s;
}
div.spinner div.bar6 {
  transform: rotate(150deg) translate(0, -130%);
  animation-delay: -0.5837s;
}
div.spinner div.bar7 {
  transform: rotate(180deg) translate(0, -130%);
  animation-delay: -0.5s;
}
div.spinner div.bar8 {
  transform: rotate(210deg) translate(0, -130%);
  animation-delay: -0.4167s;
}
div.spinner div.bar9 {
  transform: rotate(240deg) translate(0, -130%);
  animation-delay: -0.333s;
}
div.spinner div.bar10 {
  transform: rotate(270deg) translate(0, -130%);
  animation-delay: -0.2497s;
}
div.spinner div.bar11 {
  transform: rotate(300deg) translate(0, -130%);
  animation-delay: -0.167s;
}
div.spinner div.bar12 {
  transform: rotate(330deg) translate(0, -130%);
  animation-delay: -0.0833s;
}
</style> 