import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
    user: null,
    typeTraining: null,
    dataTraining: null
  },
  mutations: {
    authUser(state, { token, _id, user }) {
      state.token = token;
      state.userId = _id;
      state.user = user;
      localStorage.setItem('token', token);
      localStorage.setItem('_id', _id);
    },
    storeUser(state, user) {
      state.user = user;
    },
    startTraining(state, { dataFromServer, typeTraining }) {
      state.typeTraining = typeTraining;
      state.dataTraining = dataFromServer.data.examplesMultiplied;
      console.log(dataFromServer.data.examplesMultiplied);
    }
  },
  actions: {
    async signup({ commit }, authData) {
      const getToken_id = await axios.post('/api/v1/auth/register', {
        login: authData.login,
        email: authData.email,
        password: authData.password
      });
      axios.defaults.headers.common = {
        Authorization: `Bearer ${getToken_id.data.token}`
      };
      const getUser = await axios.get('/api/v1/auth/me');

      const sumData = {
        token: getToken_id.data.token,
        _id: getToken_id.data._id,
        user: getUser.data.data
      };

      commit('authUser', sumData);
      console.log(`Signup:`);
      console.log(`getToken_id:`);
      console.log(getToken_id);
      console.log(`getUser:`);
      console.log(getUser);
    },
    async signin({ commit }, authData) {
      const getToken_id = await axios.post('/api/v1/auth/login', {
        email: authData.email,
        password: authData.password
      });
      axios.defaults.headers.common = {
        Authorization: `Bearer ${getToken_id.data.token}`
      };
      const getUser = await axios.get('/api/v1/auth/me');

      const sumData = {
        token: getToken_id.data.token,
        _id: getToken_id.data._id,
        user: getUser.data.data
      };

      commit('authUser', sumData);
      console.log(`Signin:`);
      console.log(`getToken_id:`);
      console.log(getToken_id);
      console.log(`getUser:`);
      console.log(getUser);
    },
    async tryAutoSingin({ commit }) {
      const token = localStorage.token;
      const _id = localStorage._id;

      if (!token || !_id) {
        return;
      }
      axios.defaults.headers.common = {
        Authorization: `Bearer ${token}`
      };
      const getUser = await axios.get('/api/v1/auth/me');

      const sumData = {
        token,
        _id,
        user: getUser.data.data
      };

      commit('authUser', sumData);
    },

    // fetchUser({ commit }) {
    //   axios
    //     .get('/api/v1/auth/me')
    //     .then(res => {
    //       console.log(res.data.data);
    //       commit('storeUser', res.data.data);
    //       localStorage.setItem('user', res.data.data);
    //     })
    //     .catch(err => console.log(err));
    // }
    async startTraining({ commit }, trainingData) {
      const dataFromServer = await axios.post(
        '/api/v1/training/multiplicationtable/test',
        trainingData
      );
      const data = {
        dataFromServer,
        typeTraining: 'multiplicationtable'
      };
      console.log('commiting data');
      commit('startTraining', data);
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.token !== null;
    },
    token(state) {
      return state.token;
    },
    dataTraining(state) {
      return state.dataTraining;
    }
  }
});
