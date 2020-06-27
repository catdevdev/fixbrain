<template>
  <header class="header">
    <div class="header__container">
      <Logo></Logo>
      <div v-if="auth" class="header__group-user-info">
        <StatusExperience
          :lvl="user.level"
          :experience="user.experience"
          :maxExperience="user.experienceToUpdate"
        ></StatusExperience>
        <Greeting>{{ user.login }}</Greeting>
        <Avatar></Avatar>
        <Settings></Settings>
      </div>
      <div v-else class="header__auth">
        <Button @click.native="onSubmit" type="default" center width="150px" height="30px">Sign</Button>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo/Logo";
import StatusExperience from "./StatusExperience/StatusExperience";
import Greeting from "./Greeting/Greeting";
import Avatar from "./Avatar/Avatar";
import Settings from "./Settings/Settings";
import Button from "../../../components/UI/Button/Button";

export default {
  components: {
    Logo,
    StatusExperience,
    Greeting,
    Avatar,
    Settings,
    Button
  },
  data() {
    return {};
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
$colorHeader: #fafafa;
$heightHeader: 65px;
$widthHeaderContainer: 1280px;

.header {
  width: 100%;
  height: $heightHeader;
  background: $colorHeader;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}

.header__container {
  width: 1280px;
  height: $heightHeader;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__group-user-info {
  width: 380px;
  height: $heightHeader;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>