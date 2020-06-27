<template>
  <div class="block">
    <div class="image" v-bind:style="{ 'background-image': 'url(' + imgUrl + ')' }"></div>
    <div class="header">{{ header }}</div>
    <p class="description">{{ description }}</p>
    <div class="group__button-progressbar">
      <router-link :to="urlRoute">
        <button class="button"></button>
      </router-link>

      <div class="progressbar--empty">
        <div class="progressbar--fill">
          <div class="percent">80%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    header: String,
    description: String,
    urlRoute: String
  }
};
</script>

<style lang="scss" scoped>
$borderRadius: 20px;
.block {
  width: 350px;
  height: 375px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: $borderRadius;
  background: #ededed;
}

.image {
  width: 100%;
  border-radius: $borderRadius $borderRadius 0 0;
  height: 45%;
  background: url("https://cs6.pikabu.ru/post_img/2017/09/30/8/1506776361134727188.jpg")
    no-repeat center;
  background-size: cover;
}
.header {
  margin: 15px 0 0 20px;

  font-size: 25px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.9);
}
.description {
  width: 300px;
  height: 60px;
  margin: 15px 0 0 20px;

  font-size: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
}

.group__button-progressbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 310px;
  height: 35px;

  margin: 25px auto 0;
}

.button {
  border: none;
  outline: 0px solid transparent;

  display: block;

  width: 135px;
  height: 35px;
  background: #c4c4c4;

  border-radius: 8px;

  transition: background-color 0.1s ease;
  &:hover {
    background: #3dcded;
  }
}

.progressbar--empty {
  width: 115px;
  height: 8px;
  border-radius: 8px;
  background: #c4c4c4;
}

.progressbar--fill {
  width: 80%;
  height: 8px;
  border-radius: 8px;
  background: #f10000;

  position: relative;
}
.percent {
  font-size: 15px;
  font-weight: 500;

  transform: translate(50%, -50%);
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>