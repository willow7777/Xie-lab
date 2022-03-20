<template>
  <div id="app">
    

	
	
		  <router-view ></router-view>
	
	
    
  </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {

            }
        },
        mounted() {
            console.log('pub:', sessionStorage.getItem('active1'))
            console.log('tool:', sessionStorage.getItem('active2'))
            console.log('currentTab:', sessionStorage.getItem('item'))
                // 在页面加载时读取sessionStorage
            if (sessionStorage.getItem('active1') !== null) {
                this.$store.commit('active1', sessionStorage.active1)
                console.log('session中的active1长度和值情况:', sessionStorage.active1.length, sessionStorage.active1)
            }
            if (sessionStorage.getItem('active2') !== null) {
                this.$store.commit('active2', sessionStorage.active2)
                console.log('store中的active2 长度和值情况:', this.$store.state.active2.length, this.$store.state.active2)
            }
            if (sessionStorage.getItem('item') !== null) {
                this.$store.commit('updateTab', sessionStorage.getItem('item'))
                console.log('currentTab长度和值情况', this.$store.state.currentTab.length, this.$store.state.currentTab)
            }
            // 在页面刷新时将store保存到sessionStorage里
            window.addEventListener('beforeunload', this.saveState);


        },
        destroyed() { //最后要销毁这个监听要不然会在其他的页面中 执行 报错
            document.removeEventListener('beforeunload', this.saveState)

        },
        methods: {
            saveState() {
                sessionStorage.setItem('item', this.$store.state.currentTab)
                sessionStorage.setItem('active1', this.$store.state.active1)
                sessionStorage.setItem('active2', this.$store.state.active2)
                    // console.log('saveState', sessionStorage.getItem('active1'), sessionStorage.getItem('active2'))
            }
        }


    }
</script>

<style>
    html,
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    
    #app {
        width: 100%;
        height: 100%;
    }
</style>