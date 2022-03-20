import Vue from 'vue'
import Vuex from 'vuex'

import { Loading } from "element-ui";
Vue.use(Vuex)

// 全局状态管理
const store = new Vuex.Store({
    state: {
        // currentTab: sessionStorage.getItem('item') ? JSON.parse(sessionStorage.getItem('item')) : '0',
        currentTab: '0',
        active1: '',
        active2: 'none',
        //请求计数
        // apiCount: 0,
        //loading实例
        loadingInstance: null
    },

    mutations: {
        updateTab(state, index) {
            state.currentTab = index
        },
        active1(state, index) {
            state.active1 = index
        },
        active2(state, index) {
            state.active2 = index
        },
        /* 打开Loading */
        startLoading(state, msg) {
            state.loadingInstance = Loading.service({
                lock: true,
                text: msg ? msg : "加载中...",
                background: "rgba(0, 0, 0, 0.7)"
            });
        },
        /* 关闭loading */
        closeLoading(state) {
            state.loadingInstance.close();
        },
        /* 更新请求线程池 */
        // updateApiCount(state, handle) {
        //     if (handle == "add") {
        //         state.apiCount++;
        //         this.commit("startLoading");
        //     } else {
        //         state.apiCount--;
        //         if (state.apiCount <= 0) {
        //             this.commit("closeLoading");
        //         }
        //     }
        // }

    }

});

export default store