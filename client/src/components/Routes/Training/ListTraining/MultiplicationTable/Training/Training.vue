<template>
  <div class="container">
    <Block class="block" width="1400px" height="800px" close-button>
      <div class="blocks">
        <div class="blur-examples"></div>
        <div class="current-example">
          <button></button>
        </div>
        <div class="answered-examples"></div>
      </div>

      <div class="input-block"></div>

      <div
        :style="{transform: `translate(250px, ${posYBlock}px)`, height: `${heightBlock}px`}"
        class="examples-container"
      >
        <div
          v-for="example in examples"
          :key="example.id"
          :style="{height: `${example.size.heightBlock1}px`,display: example.display ? 'flex' : 'none',fontSize: `${example.size.font}px` }"
          class="block-example"
        >
          <div
            class="center-block"
            :style="{width: `${example.size.widthBlock1}px` ,height: `${example.size.heightBlock2}px`, transform: `translate(${example.posX.block}px, 0px)`}"
          >
            <div class="wrapper-example" :style="{height: `${example.size.heightBlock2}px`}">
              <div
                class="first"
                :style="{width: `${example.size.widthElements.first}px`}"
              >{{ example.example[0] }}</div>
              <div
                class="multiplied"
                :style="{width: `${example.size.widthElements.multiplied}px`}"
              >*</div>
              <div
                class="second"
                :style="{width: `${example.size.widthElements.second}px`}"
              >{{ example.example[1] }}</div>
              <div class="equal" :style="{width: `${example.size.widthElements.equal}px`}">=</div>
              <div class="answer-block" :style="{width: `${example.size.widthElements.answer}px`}">
                <div class="answer">{{ example.example[0] * example.example[1] }}</div>
              </div>
            </div>
            <div class="emoji"></div>
          </div>
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
    },
    heightBlock() {
      return (this.examples.length - 1) * 70 + 160;
    },
    posYBlock() {
      return -((this.examples.length - 1 - 4) * 70);
    }
  },
  created() {
    for (let i = 0; i < this.dataTraining.length; i++) {
      const example = {
        id: i,
        example: [this.dataTraining[i][0], this.dataTraining[i][1]],
        posX: {
          block: 100
        },
        posY: {
          block: 100
        },
        size: {
          font: 50, // 30, 20 (px)
          widthBlock1: 235,
          widthBlock2: 300,
          heightBlock1: 70,
          heightBlock2: 60,
          widthElements: {
            first: 35,
            second: 35,
            multiplied: 50,
            equal: 50,
            answer: 55
          }
        },
        state: "toAnswer", // toAnswer, current, answered
        display: i < this.dataTraining.length ? true : false
      };
      const currentExample = {
        id: i,
        example: [this.dataTraining[i][0], this.dataTraining[i][1]],
        posX: {
          block: 0
        },
        posY: {
          block: 100
        },
        size: {
          font: 100, // 30, 20 (px)
          widthBlock1: 560,
          widthBlock2: 300,
          heightBlock1: 160,
          heightBlock2: 120,
          widthElements: {
            first: 70,
            second: 70,
            multiplied: 100,
            equal: 100,
            answer: 200
          }
        },
        state: "current", // toAnswer, current, answered
        display: i < this.dataTraining.length ? true : false
      };
      if (i === this.dataTraining.length - 1) {
        this.examples.push(currentExample);
      } else this.examples.push(example);
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
  button {
    width: 75px;
    height: 75px;
    border: none;
    outline: none;
    background: red;
    border-radius: 50%;

    transform: translate(0, -100%);
    position: absolute;
    top: 50%;
    left: 570px;
    background: #5786E2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:active {
      
    }
  }
}

.input-block {
  width: 185px;
  height: 115px;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

  position: absolute;
  top: 305px;
  left: 616px;
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
  // left: 50%;
  // transform: translate(-50%, 0);
  background: rgba(133, 95, 160, 0.235);

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
  border: 1px solid blue;
}

.first,
.second {
  width: 35px;
  border: 1px solid blue;
}
.multiplied,
.equal {
  width: 50px;
  text-align: center;
  border: 1px solid blue;
}

.answer-block {
  // width: 55px;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
}

.answer {
}

.block-example {
  border: 1px solid black;
  font-size: 50px;
  display: flex;
  align-items: center;
}

.center-block {
  width: auto;
  border: 1px solid red;
  height: auto;
}

.wrapper-example {
  border: 1.5px solid green;
  display: flex;
  justify-content: space-between;
}
</style>