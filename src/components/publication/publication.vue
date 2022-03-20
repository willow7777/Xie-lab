<template>
	<div >	

			<el-row  v-for="(item, index) in list" :key="index" style="margin-top: 80px;" >
				<el-col class="wrapCol" :span="3" :offset="4"><a :href="url(item.url)" target="_blank"><img :src="'data:image/png;base64,'+ item.picture" alt=""></a></el-col>
				<el-col class="wrapCol2" :span="10" :offset="3">
					<div class="colCont">{{item.journal}} | {{item.date | time }}</div>
					<div class="colCont2">{{item.nameEn}}</div>
					<div class="colCont2">{{item.introduce}}</div>
					<div class="colCont3">{{item.author}}</div>
				</el-col>
			</el-row>

		
	</div> 
</template>

<script>
    import {
        publication
    } from '@/api/api.js'
    export default {
        data() {  
            return {
                pageRequest: "1",
                list: []

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
                if (str.includes('http')) {
                    return str
                } else {
                    return 'http://' + str
                }

            },
            async getNews() {
                /*  const {
                     data: res
                 } = await publication({
                     params: this.pageRequest
                 }); */
                const res = await publication({
                    params: this.pageRequest
                });
                console.log("获取publication:", res);
                /* if (res.code !== 200) {
                    return this.$message.error('获取publication失败！')
                }
                this.list = res.data.content
 */
                // console.log("publication：", res)

            },

        }
    }
</script>


<style scoped>
    img {
        display: block;
        /* width: 100%;
        height: 177px; */
        width: auto;
        height: auto;
        width: 100%;
        height: 100%
    }
    
    .wrapCol {
        height: 177px;
    }
    
    .wrapCol2 {
        /* width: 554px; */
        /* height: 246px; */
        /* background-color: #43ad39; */
    }
    
    .colCont {
        font-family: proxima-nova;
        font-weight: 600;
        font-style: normal;
        font-size: 12px;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        line-height: 1.1em;
        background-color: rgba(255, 255, 255, 0);
        color: #bdbdbd;
        box-shadow: 0.5em 0 0 rgb(255 255 255 / 0%), -0.5em 0 0 rgb(255 255 255 / 0%);
        margin-bottom: 20px;
    }
    
    .colCont2 {
        color: #000;
        font-family: adobe-garamond-pro;
        font-weight: 400;
        font-style: normal;
        font-size: 13px;
        letter-spacing: 0em;
        text-transform: none;
        line-height: 1.5em;
        margin-bottom: 20px;
    }
    
    .colCont3 {
        font-family: adobe-garamond-pro;
        font-weight: 400;
        font-style: normal;
        font-size: 13px;
        letter-spacing: 0em;
        text-transform: none;
        line-height: 1.5em;
    }
    
    .page-bottom {
        display: flex;
        justify-content: flex-end;
    }
</style>