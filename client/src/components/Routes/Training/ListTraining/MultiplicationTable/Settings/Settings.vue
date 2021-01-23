<template>
  <div class="block">
    <div class="image__container">
      <div class="image"></div>
    </div>
    <h1 class="header">Multiplication table</h1>
    <div class="button__container">
      <Button type="round" width="230px">Show multiplication table</Button>
    </div>
    <div class="buttons__group">
      <Button
        @click.native="type = 'practice'"
        :class="{active: type === 'practice'}"
        type="default"
        width="135px"
      >Practice</Button>
      <Button
        @click.native="type = 'exam'"
        :class="{active: type === 'exam'}"
        type="default"
        width="135px"
      >Exam</Button>
    </div>
    <div class="block__edit-table">
      <p>Edit multiplication table</p>
    </div>
    <div class="space_table"></div>
    <MultiplicationTable v-model="multiplicationExamples"></MultiplicationTable>
    <div class="block__time-limit">
      <div class="common-group">
        <div
          class="group"
          :class="{animation__group__in: !timeLimit, animation__group__out: timeLimit}"
        >
          <p>The limit</p>
          <Switcher v-model="timeLimit"></Switcher>
        </div>

        <Counter
          v-model="timeLimitSecond"
          :class="{animation__counter__in: !timeLimit, animation__counter__out: timeLimit}"
          :initialValue="10"
          :limits="[3,60]"
          :dimension="'s.'"
        ></Counter>
      </div>
    </div>
    <div class="block__repetitions">
      <div class="group">
        <p>Number of repetitions</p>
        <Counter v-model="numberofrepetitions" :initialValue="3" :limits="[1,10]"></Counter>
      </div>
    </div>
    <div class="container__button">
      <Button @click.native="getTest" type="default" width="225px" height='45px' :spinner='spinner'>Start</Button>
    </div>
  </div>
</template>

<script>
import Button from "../../../../../UI/Button/Button";
import MultiplicationTable from "./MultiplicationTable/MultiplicationTable";
import Switcher from "../../../../../UI/Switcher/Switcher";
import Counter from "../../../../../UI/Counter/Counter";



export default {
  components: {
    Button,
    MultiplicationTable,
    Switcher,
    Counter
  },
  methods: {
    async getTest() {
      const dataToServer = {
        type: this.type,
        multiplicationExamples: this.multiplicationExamples,
        timeLimit: this.timeLimit,
        timeLimitSecond: this.timeLimitSecond,
        numberofrepetitions: this.numberofrepetitions
      };

      console.log(dataToServer);
      this.spinner = true;
      await this.$store.dispatch("startTraining", dataToServer);
      this.spinner = false;
      this.$router.push("/training/start");
      
    }
  },
  data() {
    return {
      type: "practice", //practice, exam
      spinner: false,
      multiplicationExamples: [
        {
          table: 2,
          examples: [
            { num: 1, disable: true },
            { num: 2, disable: false },
            { num: 3, disable: false },
            { num: 4, disable: false },
            { num: 5, disable: false },
            { num: 6, disable: false },
            { num: 7, disable: false },
            { num: 8, disable: false },
            { num: 9, disable: false },
            { num: 10, disable: true }
          ]
        },
        {
          table: 3,
          examples: [
            { num: 1, disable: true },
            { num: 2, disable: false },
            { num: 3, disable: false },
            { num: 4, disable: false },
            { num: 5, disable: false },
            { num: 6, disable: false },
            { num: 7, disable: false },
            { num: 8, disable: false },
            { num: 9, disable: false },
            { num: 10, disable: true }
          ]
        },
        {
          table: 4,
          examples: [
            { num: 1, disable: true },
            { num: 2, disable: false },
            { num: 3, disable: false },
            { num: 4, disable: false },
            { num: 5, disable: false },
            { num: 6, disable: false },
            { num: 7, disable: false },
            { num: 8, disable: false },
            { num: 9, disable: false },
            { num: 10, disable: true }
          ]
        },
        {
          table: 5,
          examples: [
            { num: 1, disable: true },
            { num: 2, disable: false },
            { num: 3, disable: false },
            { num: 4, disable: false },
            { num: 5, disable: false },
            { num: 6, disable: false },
            { num: 7, disable: false },
            { num: 8, disable: false },
            { num: 9, disable: false },
            { num: 10, disable: true }
          ]
        },
        {
          table: 6,
          examples: [
            { num: 1, disable: true },
            { num: 2, disable: false },
            { num: 3, disable: false },
            { num: 4, disable: false },
            { num: 5, disable: false },
            { num: 6, disable: false },
            { num: 7, disable: false },
            { num: 8, disable: false },
            { num: 9, disable: false },
            { num: 10, disable: true }
          ]
        },
        {
          table: 7,
          examples: [
            { num: 1, disable: true },
            { num: 2, disable: false },
            { num: 3, disable: false },
            { num: 4, disable: false },
            { num: 5, disable: false },
            { num: 6, disable: false },
            { num: 7, disable: false },
            { num: 8, disable: false },
            { num: 9, disable: false },
            { num: 10, disable: true }
          ]
        },
        {
          table: 8,
          examples: [
            { num: 1, disable: true },
            { num: 2, disable: false },
            { num: 3, disable: false },
            { num: 4, disable: false },
            { num: 5, disable: false },
            { num: 6, disable: false },
            { num: 7, disable: false },
            { num: 8, disable: false },
            { num: 9, disable: false },
            { num: 10, disable: true }
          ]
        },
        {
          table: 9,
          examples: [
            { num: 1, disable: true },
            { num: 2, disable: false },
            { num: 3, disable: false },
            { num: 4, disable: false },
            { num: 5, disable: false },
            { num: 6, disable: false },
            { num: 7, disable: false },
            { num: 8, disable: false },
            { num: 9, disable: false },
            { num: 10, disable: true }
          ]
        }
      ],
      timeLimit: false,
      timeLimitSecond: 10,
      numberofrepetitions: 2
    };
  }
};
</script>

<style lang='scss' scoped>
$borderRadius: 20px;
$widthBlock: 520px;
.block {
  width: $widthBlock;
  height: 1205px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: $borderRadius;
  background: #fafafa;
  margin: 60px auto 60px;
  position: relative;
}

.image__container {
  width: 100%;
  height: 360px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.button__container {
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons__group {
  width: $widthBlock - 180px;
  height: 80px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.image {
  width: 300px;
  height: 300px;
  border-radius: 0 30px 0 30px;
  background: url("https://www.mathsisfun.com/numbers/images/times-table.svg")
    no-repeat center;
  background-size: cover;
}
.header {
  font-size: 35px;
  font-weight: 500;

  text-align: center;
}

.block__edit-table {
  width: 100%;
  height: 45px;
  background: #c4c4c4;
  margin-top: 15px;

  display: flex;

  justify-content: center;

  align-items: center;
  font-size: 15px;
  font-weight: 500;
  p {
    text-align: center;
  }
}

.space_table {
  width: $widthBlock;
  height: 420px;
}

.block__time-limit {
  width: 100%;
  height: 45px;
  background: #e4e4e4;
  .common-group {
    margin: 0 auto;
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }

  .group {
    width: 130px;
    display: flex;
    justify-content: space-between;

    align-items: center;
    position: relative;

    transition: transform 0.5s ease;

    p {
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.animation__group__out {
  transform: translateX(60px);
  z-index: 100;
}

.animation__group__in {
  transform: translateX(0);
  z-index: 100;
}

.animation__counter__out {
  transform: translateX(-70px);
  opacity: 0;
}

.animation__counter__in {
  transform: translateX(0);

  opacity: 1;
}

.block__repetitions {
  width: 100%;
  height: 45px;
  background: #c4c4c4;
  .group {
    width: 300px;
    height: 100%;
    margin: 0 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.container__button {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>