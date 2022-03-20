<template>
	<div >
		<div id="left">TEAM</div>	
		<div id="right" v-for="(item, index) in list" :key="index" style="margin-bottom: 100px;">
			<el-row   style="margin-top: 50px;margin-bottom: 50px;" >
				<el-col class="wrapCol" :span="5" :offset="2"><img :src="'data:image/png;base64,'+ item.picture" alt=""></el-col>
				<el-col class="wrapCol2" :span="10" :offset="3">
					<h3 class="colCont">
						{{item.nameCh}} 
						<br>
						{{item.rank}}
					</h3>
					<p class="colCont2">
						{{item.email}}
						<br>
						{{item.phone}}
					</p>
					
					<p class="colCont2">{{item.introduction}}</p>
					<div class="colCont2">{{item.address}}</div>
				</el-col>
			</el-row>
			<el-divider></el-divider>
	    </div>
	</div> 
</template>

<script>
    import {
        getIndex,
        findAllMember
    } from '@/api/api.js';
    export default {
        data() {  
            return {
                page: "1",
                list: []

            }
        },

        created() {
            this.getInfo()
        },
        methods: {
            getInfo() {
                this.$store.commit("startLoading");
                var p1 = getIndex();
                var p2 = findAllMember({
                    params: this.page
                });
                Promise.all([p1, p2]).then(res => {
                    console.log("Promise.all", res);
                    this.$store.commit("closeLoading");
                }).catch((err) => {
                    console.log('error', error)
                    alert("数据未全部加载！请重试")
                    this.$store.commit("closeLoading");
                })
            },
            // async Index() {
            //     const res = await getIndex()
            // },
            // async getNews() {
            //     const {
            //         data: res
            //     } = await findAllMember({
            //         params: this.page
            //     })

            //     console.log("获取user:", res);
            // },
        }
    }
</script>


<style scoped>
    #left {
        /* 定宽 */
        width: 200px;
        /* background-color: #c9394a; */
        /* 当前元素脱离文档流 */
        float: left;
        font-family: adobe-garamond-pro;
        font-weight: 400;
        font-style: normal;
        font-size: 22px;
        letter-spacing: 0px;
        text-transform: none;
        text-decoration: none;
        line-height: 1.2em;
        color: #00746b;
        margin-bottom: .5em;
    }
    
    #right {
        /* background-color: #3714d1; */
        margin-left: 200px;
        /*与左定宽度保持一致*/
    }
    
    img {
        display: block;
        width: 100%;
        height: 177px;
        /* margin-bottom: 20px; */
    }
    
    .colCont {
        font-style: normal;
        font-size: 16px;
        letter-spacing: 2px;
        text-transform: uppercase;
        line-height: 1.2em;
        margin: 16px 0px;
    }
    
    .colCont2 {
        font-family: adobe-garamond-pro;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        letter-spacing: 0em;
        text-transform: none;
        line-height: 1.6em;
        color: rgba(26, 26, 26, .7);
        margin: 16px 0px;
    }
    
    .page-bottom {
        display: flex;
        justify-content: flex-end;
    }
</style>