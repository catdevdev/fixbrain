<template>
  <div class="container">
    <div class="cross"></div>
    <form @submit.prevent>
      <label for="email">Email</label>
      <input v-model="email" type="text" id="email" name="email" />
      <label for="login">Login</label>
      <input v-model="login" type="text" id="login" name="login" />
      <label for="password">Password</label>
      <input v-model="password" type="text" id="password" name="password" />
      <Button @click.native="onSubmit" type="default" center width="225px" height="35px">SignUp</Button>
    </form>
  </div>
</template>

<script>
import Button from "../../../components/UI/Button/Button";
export default {
  components: {
    Button
  },
  data() {
    return {
      email: null,
      login: null,
      password: null
    };
  },
  methods: {
    onSubmit() {
      const data = {
        email: this.email,
        login: this.login,
        password: this.password
      };
      this.$store.dispatch("signup", data);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 350px;
  height: 360px;
  background: #fafafa;
  border-radius: 18px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.25);

  margin: 50px auto;

  position: relative;
}
.cross {
  width: 25px;
  height: 25px;
  background: #fff url("cross.svg") no-repeat center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 50%;

  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
}

form {
  width: 230px;
  margin: 0px auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
}
label {
  font-size: 15px;
  font-weight: 500;
}
input {
  height: 26px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
}
</style>