<template>
  <div class="block" :style="dinamicStyle">
    <CloseButton v-if="closeButton"></CloseButton>
    <slot />
  </div>
</template>

<script>
import CloseButton from "./CloseButton/CloseButton";
export default {
  components: {
    CloseButton
  },
  props: {
    closeButton: Boolean,
    darker: Boolean,
    width: {
      type: String,
      default: "300px"
    },
    height: {
      type: String,
      default: "300px"
    }
  },
  computed: {
    dinamicStyle: function() {
      const styleObj = { width: this.width, height: this.height };
      return styleObj;
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  width: 500px;
  height: 500px;
  min-width: 100px;
  min-height: 100px;
  background: #fafafa;
  // background: #ededed;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-top: 40px;
  position: relative;
}
</style>