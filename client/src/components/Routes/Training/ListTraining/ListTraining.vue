<template>
  <div class="list-training__wrapper">
    <TrainingBlock
      imgUrl="https://1.bp.blogspot.com/-2XgyjrX7P8w/XZ_5mH7ofwI/AAAAAAAAdFY/TwI9ehur6jUoHzfPJKoLtX3s6suhN5rMwCLcBGAsYHQ/s2560/genji-overwatch-girl-v9-2560x1440.jpg"
      header="Multiplication table"
      description="Improve your knowledge and memory speed with your workout multiplication table!"
      urlRoute="training/multiplicationtable/settings"
    ></TrainingBlock>
    <TrainingBlock
      imgUrl="https://bestofcomicbooks.com/wp-content/uploads/2018/06/D.Va-Beautiful.jpg"
      header="Speed reaction"
      description="Impore your speed react with different tests"
      urlRoute="training/speedreaction/settings"
    ></TrainingBlock>
    <TrainingBlock
      imgUrl="https://cdnb.artstation.com/p/assets/images/images/005/846/321/large/sakimi-chan-widowmaker.jpg?1494202819"
      header="Calculation speed"
      description="Improve your calculation speed with difference settings!"
      urlRoute="training/calculationspeed/settings"
    ></TrainingBlock>
  </div>
</template>

<script>
import TrainingBlock from "./TrainingBlock/TrainingBlock";
export default {
  data() {
    return {};
  },
  components: {
    TrainingBlock
  }
};
</script>

<style scoped>
.list-training__wrapper {
  width: 95%;
  margin: 60px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>