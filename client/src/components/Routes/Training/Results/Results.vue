<template>
  <Block width="500px" height="467px" close-button>
    <div class="status-bar__container"></div>
    <p class="message">Very good</p>
    <div class="results-block">
      <div v-for="result in resultsData" :key="result.title" class="answer">
        <p class="value">{{result.title}}:{{result.value}}</p>
      </div>
    </div>
  </Block>
</template>

<script>
import Block from "../../../../components/UI/Block/Block";
export default {
  components: {
    Block
  },
  props: {
    resultsData: Array
  }
};
</script>

<style lang='scss' scoped>
.status-bar__container {
  margin-top: 65px;
  width: 100%;
  height: 115px;
}

.message {
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 37px;
}

.results-block {
  width: 100%;
}

.value {
  background: #fff;
  height: 42px;
  font-size: 18px;
  font-weight: 500;
  &:nth-child(even) {
    background: #e7e7e7;
    height: 42px;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>