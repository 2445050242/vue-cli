/**
 * Created by OYSK on 2017/7/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import Test from '../pages/test/store/index'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Test
  }
});
export default store;
