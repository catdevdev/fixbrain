import ListTraining from './components/Routes/Training/ListTraining/ListTraining';
import Settings from './components/Routes/Settings/Settings';

import Signup from './components/Routes/Auth/Signup';
import Signin from './components/Routes/Auth/Signin';

import MultiplicationTableSettings from './components/Routes/Training/ListTraining/MultiplicationTable/Settings/Settings';
import Start from './components/Routes/Training/Start/Start';
import MutliplicationTableTraining from './components/Routes/Training/ListTraining/MultiplicationTable/Training/Training';

import store from './store';

export const routes = [
  {
    path: '/',
    component: ListTraining,
    beforeEnter: (to, from, next) => {
      if (localStorage.token) {
        next();
      } else {
        next('/auth/signin');
      }
    }
  },

  {
    path: '/settings',
    component: Settings,
    beforeEnter: (to, from, next) => {
      if (localStorage.token) {
        next();
      } else {
        next('/auth/signin');
      }
    }
  },

  {
    path: '/training/start',
    component: Start,
    beforeEnter: (to, from, next) => {
      if (localStorage.token) {
        next();
      } else {
        next('/auth/signin');
      }
    }
  },
  {
    path: '/training/multiplicationtable',
    component: MutliplicationTableTraining,
    beforeEnter: (to, from, next) => {
      if (store.state.token ) {
        next();
      } else {
        next('/auth/signin');
      }
    }
  },
  {
    path: '/training/multiplicationtable/settings',
    component: MultiplicationTableSettings,
    beforeEnter: (to, from, next) => {
      if (store.state.token) {
        next();
      } else {
        next('/auth/signin');
      }

    }
  },

  {
    path: '/auth/signup',
    component: Signup,
    beforeEnter: (to, from, next) => {
      if (localStorage.token) {
        next('/');
      } else {
        next();
      }
    }
  },

  {
    path: '/auth/signin',
    component: Signin,
    beforeEnter: (to, from, next) => {
      if (localStorage.token) {
        next('/');
      } else {
        next();
      }
    }
  }
];

