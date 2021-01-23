<template>
  <div class="list-training__wrapper">
    <TrainingBlock
      imgUrl="https://thumbs.dreamstime.com/b/multiplication-table-24519072.jpg"
      header="Multiplication table"
      description="Improve your knowledge and memory speed with your workout multiplication table!"
      urlRoute="training/multiplicationtable/settings"
    ></TrainingBlock>
    <TrainingBlock
      imgUrl="https://cs11.pikabu.ru/post_img/big/2020/07/24/6/1595579673153852321.jpg"
      header="Speed reaction"
      description="Impore your speed react with different tests"
      urlRoute="training/speedreaction/settings"
    ></TrainingBlock>
    <TrainingBlock
      imgUrl="https://i.pinimg.com/originals/25/80/81/2580817a6f4eb7f1be3e35f7fc8db97b.jpg"
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