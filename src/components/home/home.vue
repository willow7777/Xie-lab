<template>
	<div >
		<!-- 研究内容块 -->
		<el-row class ="researrow":gutter="100">
			<el-col :span="12">
				<!-- <el-image :src="'data:image/png;base64,'+ pic"></el-image> -->
				<el-image src=http://bioxse.com/api/pictures/homeGroup.jpg></el-image>
			</el-col>
			<el-col :span="12">
				<div class=" bg-purple">
					<span class="title" >ABOUT US</span>
					<div class="content">{{home}}</div>
				</div>
			</el-col>
		</el-row>
		<el-row class ="researrow" :gutter="100">
			<el-col :span="12">
				<div class=" bg-purple">
					<span class="title" >研究内容1</span>
					<div class="content">{{research1}}</div>
				</div>
			</el-col>
			<el-col :span="12">
				<div class=" bg-purple">
					<span class="title" >研究内容2</span>
					<div class="content">{{research2}}</div>
				</div>
			</el-col>
		</el-row>
		<!-- 出版块 -->
		<div class='pubTitle'> FEATURED PUBLICATIONS</div>
		<el-row  class="wrap researrow">
			<el-col class="wrapCol"  v-for="item in pubList" :key="item.id">
				<!-- :href="'http://'+ item.url" -->
				<a :href="url(item.url)" target="_blank"><img :src="'data:image/png;base64,'+ item.picture" alt=""></a>
				<div class="colCont">{{item.journal}} | {{item.date | time }}</div>
				<div class="colCont2">{{item.introduce}}</div>
			</el-col>			
		</el-row>
		<!-- 最近新闻模块 -->
		<div class="pubTitle">RECENT NEWS</div>
		<el-row v-for="(item, index) in newsList" :key="index" type="flex" align="center">
			<el-col :span=15>
				<p>
					<span>{{item.date.substring(0,7)}}:</span>
					<span>{{item.title}}</span>
				</p>
			</el-col>			
		</el-row>
	</div>

</template>

<script>
    import {
        getIndex
    } from '@/api/api.js'
    export default {
        data() {  
            return {
                home: '',
                research1: '',
                research2: '',
                // pic: '',
                pubList: [],
                newsList: [],
                homelist: []

            }
        },
        filters: {
            time: function(value) {
                switch (value.substring(5, 7)) {
                    case '01':
                        return 'Jan' + ' ' + value.substring(0, 4)
                    case '02':
                        return 'Feb' + ' ' + value.substring(0, 4)
                    case '03':
                        return 'Mar' + ' ' + value.substring(0, 4)
                    case '04':
                        return 'Apr' + ' ' + value.substring(0, 4)
                    case '05':
                        return 'May' + ' ' + value.substring(0, 4)
                    case '06':
                        return 'Jun' + ' ' + value.substring(0, 4)
                    case '07':
                        return 'Jul' + ' ' + value.substring(0, 4)
                    case '08':
                        return 'Aug' + ' ' + value.substring(0, 4)
                    case '09':
                        return 'Sep' + ' ' + value.substring(0, 4)
                    case '10':
                        return 'Oct' + ' ' + value.substring(0, 4)
                    case '11':
                        return 'Nov' + ' ' + value.substring(0, 4)
                    case '12':
                        return 'Dec' + ' ' + value.substring(0, 4)
                    default:
                        return '无'
                }
            }
        },

        created() {
            this.getNews()
        },
        methods: {
            url(str) {
                console.log("url", str)
                if (str.includes('http')) {
                    return str
                } else {
                    return 'http://' + str
                }

            },
            async getNews() {
                const res = await getIndex()
                console.log("主页getIndex:", res);
                if (res.code !== 200) {
                    return this.$message.error('获取主页失败！')
                }
                this.home = res.data.home
                this.research1 = res.data.research1
                this.research2 = res.data.research2
                this.pubList = res.data.publications
                this.newsList = res.data.news
            },
        }
    }
</script>


<style scoped>
    /* .el-row {
         margin-bottom: 80px; 
     &:last-child {
            margin-bottom: 0;
        } 
    } */
    
    .researrow {
        margin-bottom: 80px;
    }
    
    .wrap {
        display: flex;
        justify-content: space-between;
    }
    
    .wrapCol {
        width: 216px;
        height: 250px;
    }
    
    img {
        display: block;
        width: 100%;
        height: 120px;
        margin-bottom: 20px;
    }
    
    .colCont {
        font-family: 'Constantia', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #333333;
        text-align: center;
        margin-bottom: 15px;
    }
    
    .colCont2 {
        font-family: 'Bookman Old Style Normal', 'Bookman Old Style', sans-serif;
        font-weight: 300;
        font-size: 13px;
        color: #333333;
    }
    
    .title {
        display: block;
        font-family: 'Arial Normal', 'Arial', sans-serif;
        margin-bottom: 20px;
        text-align: center;
    }
    
    .pubTitle {
        font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 20px;
        color: #000000;
        margin-bottom: 20px;
    }
    
    .content {
        font-family: 'Montserrat', sans-serif;
        color: #7F7F7F;
    }
    /* .bg-purple {
        background: #2865ac;
    } */
</style>