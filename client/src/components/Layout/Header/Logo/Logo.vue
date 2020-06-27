<template>
  <div class="header__logo">
    <router-link to="/">FixBrain</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$fontSize: 24px;
.header__logo {
  font-weight: bold;
  font-size: $fontSize;
  a{
    color: black;
    text-decoration: none;
  }
}
</style>