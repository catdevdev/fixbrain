<template>
  <div class="cross"></div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.cross {
  width: 25px;
  height: 25px;
  background: #fff url("cross.svg") no-repeat center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 50%;

  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
}
</style>