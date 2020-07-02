<template>
  <div class="container">
    <div class="cross"></div>
    <form @submit.prevent>
      <label for="email">Email</label>
      <input v-model="email" type="text" id="email" name="email" />
      <label for="password">Password</label>
      <!-- <input
        :value="emojiPassword"
        @input="changeHandler($event)"
        type="text"
        id="password"
        name="password"
      />-->
      <input v-model="password" type="text" />
      <Button @click.native="onSubmit" type="default" center width="225px" height="35px">SignIn</Button>
      <router-link to="/auth/signup" tab="li">Don't have an account?</router-link>
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
      password: null,
      emojiPassword: ""
    };
  },
  methods: {
    changeHandler(event) {
      this.password = event.target.value;
      const emoji = [
        "😀",
        "😁",
        "😂",
        "🤣",
        "😇",
        "😋",
        "😆",
        "😅",
        "🤑",
        "🙃"
      ];

      const randomNum = (min, max) => {
        return min + Math.floor((max - min) * Math.random());
      };

      let passwordToConvert = event.target.value;

      const emojiPassword = [...passwordToConvert].map(character => {
        character;
        return emoji[randomNum(0, 9)];
      });

      this.emojiPassword = emojiPassword.join("");
    },
    async onSubmit() {
      const data = {
        email: this.email,
        password: this.password
      };
      await this.$store.dispatch("signin", data);
      
      this.$router.push('/') 

    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 350px;
  height: 300px;
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

a {
  margin-top: 20px;

  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;

  cursor: pointer;

  text-decoration: none;

  transition: 0.1s color;
  &:hover {
    color: rgb(44, 44, 186)
  }
}
</style>