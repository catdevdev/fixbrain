<template>
  <div @click="addHandler" class="container">
    <p>{{ сountdown }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      сountdown: 3
    };
  },
  methods: {
    addHandler() {
      this.сountdown++;
    }
  },
  mounted() {
    var countDown = () => {
      this.сountdown--;
      
      if (this.сountdown <= -1) {
        clearInterval(interval);
        this.$router.push("/training/multiplicationtable");
      }
      //   console.log(123);
    };
    var interval = setInterval(countDown, 1);
  }
};
</script>

<style lang='scss' scoped>
$borderRadius: 20px;
.container {
  margin-top: 40px;
  width: 100%;
  height: 800px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: $borderRadius;
  background: #fafafa;

  position: relative;

  p {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 40%;
    left: 50%;

    font-size: 200px;
    font-weight: 500;
  }
}
</style>