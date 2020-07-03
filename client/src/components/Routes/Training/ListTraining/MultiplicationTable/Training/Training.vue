<template>
  <div class="container">
    <Block class="block" width="1400px" height="800px" close-button>
      <div class="blocks">
        <div class="blur-examples"></div>
        <div class="current-example">
          <input
            @keyup.enter="answerHanlder"
            class="input-example"
            v-model="inputValue"
            type="text"
          />
          <button @click="answerHanlder"></button>
          <div
            v-if="currentEmojiUrl"
            :style="{'background-image': `url( ${require(currentEmojiUrl+'')})`}"
            style="background:  center; background-size: cover"
            class="main-emoji"
          ></div>
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
          :style="{height: `${example.size.heightBlock1}px`,display: example.display ? 'flex' : 'none' }"
          class="block-example"
        >
          <div
            class="center-block"
            :style="{width: `${example.size.widthBlock1}px` ,height: `${example.size.heightBlock2}px`, transform: `translate(${example.posX.block}px, 0px)`}"
          >
            <div class="wrapper-example" :style="{height: `${example.size.heightBlock2}px`}">
              <div
                class="first"
                :style="{width: `${example.size.widthElements.first}px`, fontSize: `${example.size.font}px`}"
              >{{ example.example[0] }}</div>
              <div
                class="multiplied"
                :style="{width: `${example.size.widthElements.multiplied}px`, fontSize: `${example.size.font}px`}"
              >*</div>
              <div
                class="second"
                :style="{width: `${example.size.widthElements.second}px`, fontSize: `${example.size.font}px`}"
              >{{ example.example[1] }}</div>
              <div
                class="equal"
                :style="{width: `${example.size.widthElements.equal}px`, fontSize: `${example.size.font}px`}"
              >=</div>
              <div class="answer-block" :style="{width: `${example.size.widthElements.answer}px`}">
                <div
                  class="answer"
                  :style="{fontSize: `${example.size.font}px`}"
                >{{ example.aswer }}</div>
              </div>
            </div>
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
      examples: [],
      inputValue: null,
      currentEmojiUrl: null,
      iterate: 0,
      emojiType: null
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
      return -((this.examples.length - 1 - 4 - this.iterate) * 70);
    }
  },
  methods: {
    answerHanlder() {
      document.querySelector(".input-example").focus();
      for (let i = 0; i < this.examples.length; i++) {
        if (this.examples[i].state === "current" && this.inputValue) {
          // change current
          this.examples[i].aswer = this.inputValue; // 50
          this.inputValue = "";
          this.examples[i].size.font = 50; // 50
          this.examples[i].state = "answered"; // answerer
          this.examples[i].posX.block = 100; // 100

          const typeEmoji =
            this.examples[this.examples.length - 1 - this.iterate].example[0] *
              this.examples[this.examples.length - 1 - this.iterate]
                .example[1] ==
            this.examples[this.examples.length - 1 - this.iterate].aswer
              ? "good"
              : "bad";

          this.currentEmojiUrl = `./emoji/${typeEmoji}/${Math.floor(
            Math.random() * Math.floor(12)
          )}.png`;

          this.examples[i].size.widthBlock1 = 235; // 235
          this.examples[i].size.widthBlock2 = 300; // 300
          this.examples[i].size.heightBlock1 = 70; // 70
          this.examples[i].size.heightBlock2 = 60; // 60

          this.examples[i].size.widthElements.first = 35; // 35
          this.examples[i].size.widthElements.second = 35; // 35
          this.examples[i].size.widthElements.multiplied = 50; // 50
          this.examples[i].size.widthElements.equal = 50; // 55
          this.examples[i].size.widthElements.answer = 70; // 70

          // change next
          this.examples[i - 1].size.font = 100; // 100
          this.examples[i - 1].state = "current"; // current
          this.examples[i - 1].posX.block = 0; // 0

          this.examples[i - 1].size.widthBlock1 = 560; // 560
          this.examples[i - 1].size.widthBlock2 = 300; // 300
          this.examples[i - 1].size.heightBlock1 = 160; // 160
          this.examples[i - 1].size.heightBlock2 = 120; // 120

          this.examples[i - 1].size.widthElements.first = 70; // 70
          this.examples[i - 1].size.widthElements.second = 70; // 70
          this.examples[i - 1].size.widthElements.multiplied = 100; // 100
          this.examples[i - 1].size.widthElements.equal = 100; // 100
          this.examples[i - 1].size.widthElements.answer = 200; // 200

          this.iterate++;
          if(this.iterate>=this.examples.length) {
            this.$router.push('/training/multiplicationtable/results') 
            
          }
        }
      }
    }
  },
  created() {
    for (let i = 0; i < this.dataTraining.length; i++) {
      const example = {
        id: i,
        example: [this.dataTraining[i][0], this.dataTraining[i][1]],
        aswer: null,
        posX: {
          block: 100
        },
        posY: {
          block: 0
        },
        size: {
          font: 50, // 30, 20 (px)
          widthBlock1: 235, // 235
          widthBlock2: 300, // 300
          heightBlock1: 70, // 70
          heightBlock2: 60, // 60
          widthElements: {
            first: 35, // 35
            second: 35, // 35
            multiplied: 50, // 50
            equal: 50, // 50
            answer: 70 // 55
          }
        },
        state: "toAnswer", // toAnswer, current, answered
        display: i < this.dataTraining.length ? true : false
      };
      const currentExample = {
        id: i,
        example: [this.dataTraining[i][0], this.dataTraining[i][1]],
        aswer: null,
        posX: {
          block: 0
        },
        posY: {
          block: 100
        },
        size: {
          font: 100, // 30, 20 (px)
          widthBlock1: 560, // 560
          widthBlock2: 300, // 300
          heightBlock1: 160, // 160
          heightBlock2: 120, // 120
          widthElements: {
            first: 70, // 70
            second: 70, // 70
            multiplied: 100, // 100
            equal: 100, // 100
            answer: 200 // 200
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
//   overflow: hidden;
// }
.block {
  position: relative;
  overflow: hidden;
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
  // border: 1px solid gray;
  width: 400px;
  height: 35%;
  margin-left: 0px;

  // backdrop-filter: blur(5px);
}
.current-example {
  background: transparent;
  // border: 1px solid gray;
  width: 100%;
  height: 20%;
  button {
    width: 75px;
    height: 75px;
    border: none;
    outline: none;
    border-radius: 50%;

    transform: translate(0, -100%);
    position: absolute;
    top: 50%;
    left: 570px;
    background: #5786e2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    // transition: all 0.1s ease;
    &:active {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }
  }
  input {
    transform: translate(0, -83.5%);
    position: absolute;
    top: 50%;
    left: 390px;

    width: 141px;
    height: 120px;

    font-size: 100px;
    font-weight: 600;

    border: none;
    outline: none;

    background: transparent;
  }
}

.main-emoji {
  width: 90px;
  height: 90px;
  position: absolute;
  transform: translate(0, -93%);
  top: 50%;
  left: 675px;

  // background-size: cover;
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
  // border: 1px solid gray;
  width: 300px;
  height: 45%;
  margin-left: 100px;
}
.examples-container {
  position: absolute;
  top: 0;
  // left: 50%;
  // transform: translate(-50%, 0);
  // background: rgba(133, 95, 160, 0.235);

  width: 900px;
  height: 100%;

  z-index: 100;
}
.example-container {
  // border: 1px solid black;
}

.first,
.second,
.multiplied,
.equal,
.answer,
.emoji {
  font-weight: 600;
  display: inline;

  // border: 1px solid blue;
  overflow: hidden;
}

.first,
.second {
  // width: 35px;
  // border: 1px solid blue;
}
.multiplied,
.equal {
  // width: 50px;
  text-align: center;
  // border: 1px solid blue;
}

.answer-block {
  // width: 55px;
  // border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
}

.answer {
  width: 140px;
}

.block-example {
  // border: 1px solid black;
  font-size: 50px;
  display: flex;
  align-items: center;
}

.center-block {
  width: auto;
  // border: 1px solid red;
  height: auto;
}

.wrapper-example {
  // border: 1.5px solid green;
  display: flex;
  justify-content: space-between;
}
</style>