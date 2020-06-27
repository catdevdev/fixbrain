<template>
  <div class="header__greeting">Hello, <slot /></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header__greeting {
  width: 150px;

  font-size: 15px;
}
</style>