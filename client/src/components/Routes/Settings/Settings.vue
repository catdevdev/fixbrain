<template>
  <Button  @click='logoutHandler' type="default"  width="150px" height="40px">Logout</Button>
</template>

<script>
import Button from '../../../components/UI/Button/Button'
export default {
  components: {
    Button
  },
  methods: {
    logoutHandler() {
      storage.removeItem(token);
      storage.removeItem(_id);
    }
  },
};
</script>

<style lang='scss' scoped>

button {
  margin: 10px
}
</style>