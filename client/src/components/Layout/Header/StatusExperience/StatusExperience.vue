<template>
  <div class="container">
    <div class="container__lvl-count">{{ lvl }} lvl</div>
    <div class="container__status-bar--empty">
      <div class="container__status-bar--fill" :style="experienceFill"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lvl: Number,
    experience: Number,
    maxExperience: Number
  },
  computed: {
    experienceFill() {
      return { width: `${(this.experience * 100) / this.maxExperience}%` };
    }
  }
};
</script>

<style lang="scss" scoped>
$heightHeader: 65px;
.container {
  width: 140px;
  height: $heightHeader;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container__lvl-count {
  font-size: 15px;
  font-weight: medium;
}
.container__status-bar--empty {
  width: 100px;
  height: 7px;
  background: #c4c4c4;
  border-radius: 10px;
}
.container__status-bar--fill {
  width: 34%;
  height: 7px;
  background: #00b9e1;
  border-radius: 10px;
}
</style>