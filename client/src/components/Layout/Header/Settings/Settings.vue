<template>
  <router-link to="/settings">
    <div class="container__settings"></div>
  </router-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container__settings {
  width: 25px;
  height: 25px;
  background: url("./settingIco.svg") no-repeat center;
  background-size: cover;
}
</style>