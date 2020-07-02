<template>
  <div>
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";

export default {
  components: { Header, Main },
  created() {
    this.$store.dispatch("tryAutoSingin");
    
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  transition:  all 1s;
  
}
</style>