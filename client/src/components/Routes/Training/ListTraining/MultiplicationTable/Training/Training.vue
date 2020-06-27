<template>
  <div class="container">
    <Block class="block" width="1400px" height="800px" close-button>
      <div class="blocks">
        <div class="blur-examples"></div>
        <div class="current-example"></div>
        <div class="answered-examples"></div>
      </div>

      <div class="examples-container">
        <div class="example-container" v-for="example in examples" :key="example.id">
          <div
            :style="{ transform: `translate(${example.posX.first}px, ${example.posY.first}px)`,fontSize: `50px`}"
            class="first"
          >{{ example.example[0] }}</div>
          <div
            :style="{ transform: `translate(${example.posX.multiplied}px, ${example.posY.multiplied}px)`,fontSize: `50px`}"
            class="multiplied"
          >*</div>
          <div
            :style="{ transform: `translate(${example.posX.second}px, ${example.posY.second}px)`,fontSize: `50px`}"
            class="second"
          >{{ example.example[1] }}</div>
          <div
            :style="{ transform: `translate(${example.posX.equal}px, ${example.posY.equal}px)`,fontSize: `50px`}"
            class="equal"
          >=</div>
          <div
            :style="{ transform: `translate(${example.posX.answer}px, ${example.posY.answer}px)`,fontSize: `50px`}"
            class="answer"
          >{{90}}</div>
          <div
            :style="{ transform: `translate(${example.posX.emoji.pos}px, ${example.posY.emoji.pos}px)`,fontSize: `50px`}"
            class="emoji"
          >{{123}}</div>
        </div>
      </div>
    </Block>
  </div>
</template>
<script>
import Block from "../../../../../../components/UI/Block/Block";
export default {
  components: {
    Block
  },
  data() {
    return {
      examples: [
        // {
        //   example: [1, 3],
        //   posX: {
        //     first: 100,
        //     second: 200,
        //     answer: null,
        //     emoji: { display: null, pos: null }
        //   },
        //   posY: {
        //     first: 100,
        //     second: 200,
        //     answer: null,
        //     emoji: { display: null, pos: null }
        //   },
        //   state: "toAnswer", // toAnswer, current, answered
        //   display: true
        // }
      ]
    };
  },
  computed: {
    dataTraining() {
      return this.$store.getters.dataTraining;
    }
  },
  created() {
    for (let i = 0; i < this.dataTraining.length; i++) {
      const example = {
        id: i,
        example: [this.dataTraining[i][0], this.dataTraining[i][1]],
        posX: {
          first: 100,
          multiplied: 200,
          second: 250,
          equal: 300,
          answer: 350,
          emoji: { display: null, pos: 400 }
        },
        posY: {
          first: 100 + i * 200,
          multiplied: 100 + i * 200,
          second: 100 + i * 200,
          equal: 100 + i * 200,
          answer: 100 + i * 200,
          emoji: { display: null, pos: 100 + i * 200 }
        },
        state: "toAnswer", // toAnswer, current, answered
        display: i < 4 ? true : false
      };
      // examples = [];
      // example;
      this.examples.push(example);
    }
  }
};
</script>

<style lang='scss' scoped>
// .container {
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
.block {
  position: relative;
}

.blocks {
  background: transparent;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 200;

  width: 900px;
  height: 100%;
}

.blur-examples {
  background: transparent;
  border: 1px solid gray;
  width: 300px;
  height: 35%;
  margin-left: 100px;
}
.current-example {
  background: transparent;
  border: 1px solid gray;
  width: 100%;
  height: 20%;
}
.answered-examples {
  background: transparent;
  border: 1px solid gray;
  width: 300px;
  height: 45%;
  margin-left: 100px;
}
.examples-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background: rgb(133, 95, 160);

  width: 900px;
  height: 100%;

  z-index: 100;
}
.example-container {
  border: 1px solid black;
}

.first,
.second,
.multiplied,
.equal,
.answer,
.emoji {
  font-weight: 600;
  display: inline-block;
  width: auto;
  
}
</style>