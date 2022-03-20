<template>
	<div class="headerNav">
	<el-menu  mode="horizontal" router  @select="handleSelect">	
		<el-menu-item :index="menu.to" v-for="(menu, key) in menus" :key="key">
			<span >{{menu.name}}</span>
		</el-menu-item>
	</el-menu>
    </div>        
</template>

<script>
    export default {

        data() {
            return {
                menus: [{
                        id: '1',
                        name: 'HOME',
                        urlName: 'home',
                        to: '/'
                    }, {
                        id: '2',
                        name: 'LAB NEWS',
                        urlName: 'newsInfo',
                        to: "/system/newsInfo"
                    }, {
                        id: '3',
                        name: 'RESEARCH',
                        urlName: 'publication',
                        to: '/system/publication'
                    },

                    {
                        id: '4',
                        name: 'TEAM',
                        urlName: 'team',
                        to: "/system/team"
                    }, {
                        id: '5',
                        name: 'JOIN',
                        urlName: 'join',
                        to: "/system/join"
                    },
                ]
            }
        },
        methods: {
            handleSelect(index) {
                // console.log("index", index);
                let data = 0
                switch (index) {
                    case "/":
                        data = 0;
                        break;
                    case "/system/newsInfo":
                        data = 1;
                        break;
                    case "/system/publication":
                        data = 2;
                        this.$store.commit('active1', '');
                        this.$store.commit('active2', 'none')
                        break;
                    case "/system/team":
                        data = 3;
                        break;
                    case "/system/join":
                        data = 4;
                        break;
                }
                this.$store.commit('updateTab', data);
                // console.log(' 点击页面后更新的currentTab', this.$store.state.currentTab);
                // this.$emit('getData', data)

            }
        }
    }
</script>

<style>
    .el-menu {
        background-color: transparent;
        border: none!important;
        padding-right: 0px;
        display: flex;
        justify-content: flex-end;
    }
    
    .el-menu-item {
        font-weight: 600;
        font-style: normal;
        font-size: 17px;
        letter-spacing: 2px;
        color: #EDEDED;
        /* color: rgba(255, 255, 255); */
    }
    
    .el-menu-item:hover {
        background-color: transparent!important;
    }
    
    .el-menu-item.is-active {
        background-color: transparent!important;
    }
</style>