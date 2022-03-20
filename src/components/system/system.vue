<template>  
<div>
	<!-- 顶部（包含图片和导航栏） -->
	<div id="sysytem">
		<!-- 导航栏 -->
		<head-tabbar  ref ="tabbar" class="tabbar" ></head-tabbar>
		<div class="grayCover"></div>
		<div class="lunbo">
			<!-- <img :src="'data:image/png;base64,'+ bg_img[currentTab]" class="lunbo_img" > -->
			<img :src=bg_img[currentTab] class="lunbo_img" >
		</div>
		<!-- 背景图中的文字 -->
		<div class="content">
			<div class="content-title">
				<span v-if="currentTab==0">
					HOME
				</span>
				<span v-if="currentTab==1">
					LAB NEWS  
				</span>
				<span v-if="currentTab==2">
					RESEARCH
				</span>
				<span v-if="currentTab==3">
					TEAM
				</span>
				<span v-if="currentTab==4">
					JOIN
				</span>
			</div>
		</div > 
		<!-- 背景图中的导航栏 -->
		<div  class="con-nav"  v-if="currentTab==2">
			<div class="nav" @click="toggleTab(0)" >
				<span >
					Publication
				</span>
				<i class="nav-i" :style="{ display: active1 }"></i>  
			</div>
			<div class="nav"  @click="toggleTab(1)">
				<span  >
					Tools
				</span>
				<i class="nav-i" :style="{ display: active2 }"></i>
			
			</div>
		</div>
	</div>	
	<!-- 内容页面 -->
	
		<transition :name="transitionName">
			<keep-alive  >
		  <router-view name="default" class="page" v-if="$route.meta.keepAlive"></router-view>
		   </keep-alive>
		</transition>
		<transition :name="transitionName">
			<keep-alive  >
		  <router-view name="default" class="page" v-if!="$route.meta.keepAlive"></router-view>
		   </keep-alive>
		</transition>
	
	<!-- 公共尾部 -->
	<div class="preFooter" ref ="tab">
         <div id="u31" class="ax_default"><img class="u31_img" src="../../assets/images/hn.png" alt=""></div>
		 <div id="u32" class="ax_default"><p>Xie Lab © 2021 Laboratory of Bioinformatics</p></div>
		 <div id="u33" class="ax_default"><p>Address：海南省海口市人民大道58号 Postcode：570228</p></div>
	</div>
</div>
</template>
<script>
    import headTabbar from './components/headTabbar.vue'
    import {
        mapState
    } from 'vuex'
    export default {
        data() {
            return {
                bg_img: [
                    "http://bioxse.com/api/pictures/homeScroll_0.jpg",
                    "http://bioxse.com/api/pictures/homeScroll_1.jpg",
                    "http://bioxse.com/api/pictures/homeScroll_2.jpg",
                    "http://bioxse.com/api/pictures/homeScroll_3.jpg",
                    "http://bioxse.com/api/pictures/homeScroll_4.jpg"
                ],
                transitionName: '',

            }
        },
        watch: {
            // 对路由变化作出响应.或者使用beforeRouteUpdate 导航守卫            
            $route(to, from) {
                if (to.meta.index !== undefined && from.meta.index !== undefined) {
                    if (to.meta.index > from.meta.index) {
                        this.transitionName = 'slide-right'
                    } else if (to.meta.index < from.meta.index) {
                        this.transitionName = 'slide-left'
                    } else {
                        this.transitionName = ''
                    }
                }
            }
        },

        computed: {
            ...mapState(['currentTab', 'active1', 'active2'])
        },


        mounted() {
            window.addEventListener("scroll", this.handleScroll);

        },
        destroyed() { //最后要销毁这个监听要不然会在其他的页面中 执行 报错
            document.removeEventListener("scroll", this.handleScroll);

        },
        components: {
            headTabbar
        },

        methods: {

            toggleTab(tab) {
                if (tab == 0) {
                    this.$store.commit('active1', '')
                    this.$store.commit('active2', 'none')
                    this.$router.push({
                        path: '/system/publication'
                    })
                }
                if (tab == 1) {
                    this.$store.commit('active1', 'none')
                    this.$store.commit('active2', '')
                    this.$router.push({
                        path: '/system/tools'
                    })
                }

            },
            // indexData(data) {
            //     this.item = data
            //     console.log("item导航栏传过来的值", this.item)
            // },
            handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // console.log("scrollTop", scrollTop);
                var tabbar = document.querySelector('.tabbar');
                // console.log("tabbar节点", tabbar);
                var menu = tabbar.firstChild
                    // console.log("tabbar.firstChild--menu节点 ", menu);
                    // for (let key in menu.style) {
                    //     if (menu.style[key] !== "") {
                    //         console.log("menu样式", key, menu.style[key]);
                    //     }
                    // }
                if (scrollTop >= 600) {
                    tabbar.style.position = "fixed";
                    menu.style.boxShadow = " 0 2px 4px 0 rgb(21 134 223 / 10%)";
                    menu.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                    // console.log(">= 600时候", tabbar.style.position, menu.style.backgroundColor, menu.style.boxShadow);
                } else if (scrollTop > 0) {
                    tabbar.style.position = "fixed";
                    menu.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
                    // console.log(">0&<600时候", tabbar.style.position, menu.style.backgroundColor, menu.style.boxShadow);
                } else {
                    tabbar.style.position = "absolute";
                    menu.style.backgroundColor = "transparent";
                    menu.style.boxShadow = "";
                    // console.log("=0时候", tabbar.style.position, menu.style.backgroundColor, menu.style.boxShadow);
                }
            },

        }

    }
</script>
<style lang="less" scoped>
    #sysytem {
        position: relative;
        width: 100%;
        height: 600px;
    }
    
    .tabbar {
        position: absolute;
        height: 80px;
        width: 94%;
        left: 50%;
        margin-left: -47%;
        /* left: 50%;
        margin-left: -47%；
		等价于 left: 3%; */
        /* width: 1425px;
        right: 100px; */
        z-index: 999;
        /* background-color: transparent; */
        /* background-color: brown; */
    }
    
    .lunbo {
        position: absolute;
        overflow: hidden;
        width: 94%;
        height: 600px;
        left: 50%;
        margin-left: -47%;
        /* width: 1425px;
        height: 600px;*/
        z-index: 1;
    }
    
    .lunbo_img {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        min-width: 100%;
        min-height: 100%;
        transform: translate(-50%, -50%);
    }
    
    .grayCover {
        position: absolute;
        overflow: hidden;
        width: 94%;
        height: 600px;
        left: 50%;
        margin-left: -47%;
        background-color: black;
        opacity: 0.5;
        z-index: 2;
    }
    
    .content {
        position: absolute;
        width: 94%;
        height: 80px;
        top: 50%;
        left: 50%;
        margin-left: -47%;
        z-index: 101;
    }
    
    .content-title {
        font-size: 54px;
        color: #FFF;
        text-align: center;
        font-weight: 300;
        letter-spacing: 18px;
        text-indent: 18px;
    }
    
    .con-nav {
        position: absolute;
        display: flex;
        justify-content: center;
        width: 94%;
        height: 45px;
        bottom: 0px;
        left: 50%;
        margin-left: -47%;
        z-index: 101;
        /* transition: all 0.5s ease-in-out; */
    }
    
    .nav {
        display: inline-block;
        height: 45px;
        line-height: 45px;
        cursor: pointer;
        font-size: 18px;
        color: #FFF;
        text-align: center;
        font-weight: 300;
        margin-left: 100px;
        margin-right: 100px;
        text-shadow: 0 0 18px rgb(0 0 0 / 35%);
    }
    
    .nav-i {
        display: block;
        width: 18px;
        height: 18px;
        background-color: #ffffff;
        margin: 0 auto;
        transform: rotate( 45deg);
        position: relative;
        bottom: 9px;
        transition: all 0.5s ease-in-out;
    }
    /* /deep/.el-carousel__container {
        position: relative;
        height: 600px;
    } */
    
    .page {
        /* 设置IE盒模型 */
        box-sizing: border-box;
        /* width: auto; */
        margin: 100px auto 100px auto;
        max-width: 1100px;
    }
    
    .preFooter {
        /* position: relative; */
        /* bottom: 0; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: RGB(241, 242, 242, 1);
        width: 95%;
        height: 100px;
        margin: 0 auto;
    }
    
    .ax_default {
        margin-right: 50px;
    }
    
    #u31 {
        float: left;
        width: 225px;
        height: 73px;
    }
    
    #u32 {
        float: left;
        height: 73px;
    }
    
    #u33 {
        float: left;
        height: 73px;
    }
    
    .u31_img {
        display: block;
        width: 225px;
        height: 73px;
    }
    
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all 600ms;
        /* height: 100%; */
        /* top: 0px; */
        /* position: absolute; */
        backface-visibility: hidden;
        perspective: 1000;
    }
    
    .slide-left-enter {
        transform: translate3d(-100%, 0, 0);
    }
    
    .slide-left-leave-active {
        transform: translate3d(100%, 0, 0);
    }
    
    .slide-right-enter {
        transform: translate3d(100%, 0, 0);
    }
    
    .slide-right-leave-active {
        transform: translate3d(-100%, 0, 0);
    }
</style>