// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuex from 'vuex'


Vue.use(Vuetify)
Vue.use(vuex);

Vue.config.productionTip = false

const store = new vuex.Store({//store对象
  state:{
    specialArchiveClientWidth1: document.documentElement.clientWidth,
    specialArchiveClientHeight1: document.documentElement.clientHeight,
    specialArchiveScrollTop1:0,
    specialArchiveInfoShowIndex:-1,
    specialArchiveShow1:1,
    specialArchiveShow2:0,
    specialArchiveShow3:0,
    specialArchiveFileInfo:[],
  },
  mutations: {
    changeSpecialArchiveShow: function (state,a) {
      if(a==1) {
        //alert(a);
        state.specialArchiveShow1 = 0;
        state.specialArchiveShow2 = 1;
        state.specialArchiveShow3 = 0;
      }
      if(a==2) {
        //alert(a);
        state.specialArchiveShow1 = 0;
        state.specialArchiveShow2 = 0;
        state.specialArchiveShow3 = 1;
      }
    },
    specialArchiveFileInfoChange: function (state,a) {

        //alert(a);
      state.specialArchiveFileInfo=a;

    },
    specialInfoShowChange: function (state,a) {

      //alert(a);
      state.specialArchiveInfoShowIndex=a;

    },
    setspecialArchiveScrollTop1 (state, a) {
      state.specialArchiveScrollTop1 = a;
    },
    setspecialArchiveClientHeight1 (state, n) {
      state.specialArchiveClientHeight1 = n
    },
    setspecialArchiveClientWidth1 (state, n) {
      state.specialArchiveClientWidth1 = n
    },
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
