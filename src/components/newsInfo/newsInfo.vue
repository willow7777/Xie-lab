<template>
	<div >
		<!-- 新闻列表时间轴展示 -->		
		<el-timeline>
			<el-timeline-item v-for="(item, index) in newlist" :key="index" :timestamp="item.date.substr(0,10)" placement="top" type="info">
				<el-card>
					<h4>{{item.title}}</h4>
					<p>{{item.content}}</p>
					<div v-if="item.picture!= null">
						<div v-for="picitem in item.pics" style="float: left;border:5px solid white;">
							<el-image  style="width: 100px; height: 100px" :src="'data:image/png;base64,'+picitem" :preview-src-list="dataURItoBlob(item.pics)"></el-image>
						</div>				
					</div>
				</el-card>
			</el-timeline-item>
		</el-timeline>
		<!-- 分页 -->
		<div class="page-bottom">			
			<el-pagination   
             @current-change="handleCurrentChange"
            :page-count="totalPages"
             :current-page="pageNum"
             layout="total, prev, pager, next, jumper"
             :total="total">
            </el-pagination>
		</div>
	</div>
</template>
<script>
    export default {
        data() {  
            return {
                pageNum: 1,
                totalPages: 0, //总页数
                total: 0, //总条数
                pageSize: '1', //每页展示数目默认为1
                newlist: [],
                list: [],
                li: []

            }
        },
        created() {
            this.getNews()
        },
        // computed: {
        //     dataURItoBlob() {
        //         return function(arr) {
        //             // return arr.map(item => `data:image/png;base64,${item}`)
        //             // this.li = []
        //             for (let item = 0; item < arr.length; item++) {
        //                 arr[item] = 'data:image/png;base64,' + arr[item]
        //             }
        //             alert(arr)
        //             return arr
        //         }

        //     },
        // },
        methods: {
            dataURItoBlob(val) {
                console.log("传参类型是不是数组", val instanceof Array)
                return val.map(item => `data:image/png;base64,${item}`)
            },
            async getNews() {
                const {
                    data: res
                } = await this.axios.post('/api/news/findAllNews', {
                    params: this.pageNum
                })
                if (res.code !== 200) {
                    return this.$message.error('获取新闻失败！')
                }
                this.newlist = res.data.content
                this.total = res.data.totalSize
                this.totalPages = res.data.totalPages
                this.pageNum = res.data.pageNum
                this.list = res.data.content[0].pics
                console.log("新闻列表：", this.newlist)
                    // console.log(this.list)


            },
            handleCurrentChange(val) {
                //console.log(`提到第 ${val} 条`);
                this.pageNum = val
                this.getNews()
            },
        }
    }
</script>


<style scoped>
    .page-bottom {
        display: flex;
        justify-content: flex-end;
    }
</style>