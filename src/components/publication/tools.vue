<template>
	<div>
		<!-- Database -->
		<div class="title"><span>Database</span></div>
		<!--ISOdb  Database -->
		<el-card class="box-card">			
			<div slot="header" class="clearfix">
			  <span>ISOdb</span>
			</div>
			<el-row >
				<el-col :offset="1" :span="2">
					<div  class="text text-right">Description:</div>
				</el-col>
				<el-col  :offset="1":span="19">
					<div  class="text ">
					We have developed ISOdb, a comprehensive resource database for hosting and carrying out an in-depth analysis of Iso-Seq datasets, and visualising the full-length transcript isoforms. The current version of ISOdb has collected 93 publicly available Iso-Seq samples from 8 species, and presents the samples in two levels: 1) Sample level: including meta information, long reads distribution, isoform numbers, and alternative splicing (AS) events of each sample; 2) Gene level: including the total isoforms, novel isoform number, novel AS number, and isoform visualization of each gene.
				   </div>
			   </el-col>
			</el-row>
			<el-row >
				<el-col :offset="1" :span="2"><div  class="text text-right" >Url:</div></el-col>
				<el-col :offset="1" :span="19"><el-link type="primary"  href="http://isodb.xieslab.org/" target="_blank">http://isodb.xieslab.org/</el-link></el-col>
			</el-row>			
		</el-card>
		<!-- RPFdb Database -->
		  <el-card class="box-card">
			<div slot="header" class="clearfix">
			  <span>RPFdb</span>
			</div>
			<el-row >
				<el-col :offset="1" :span="2">
					<div  class="text text-right">Description:</div>
				</el-col>
				<el-col  :offset="1":span="19">
					<div  class="text ">
						RPFdb is a comprehensive resource for hosting, analyzing and visualizing RPF data, available at www.rpfdb.org or http://sysbio.gzzoc.com/rpfdb/index.html The current version of database contains 777 samples from 82 studies in 8 species, processed and reanalyzed by a unified pipeline. There are two ways to query the database: by keywords of studies or by genes.
				   </div>
			   </el-col>
			</el-row>
			<el-row >
				<el-col :offset="1" :span="2"><div  class="text text-right" >Url:</div></el-col>
				<el-col :offset="1" :span="19"><el-link type="primary"  href="http://sysbio.gzzoc.com/rpfdb/index.html" target="_blank">http://sysbio.gzzoc.com/rpfdb/index.html</el-link></el-col>
			</el-row>			
		  </el-card>
		  <!-- Software -->
		  <div class="title"><span>Software</span></div>
		  <!--MECAT  Software -->
		  <el-card class="box-card">
			<div slot="header" class="clearfix">
			  <span>MECAT</span>
			</div>
			<el-row >
				<el-col :offset="1" :span="2">
					<div  class="text text-right">Description:</div>
				</el-col>
				<el-col  :offset="1":span="19">
					<div  class="text ">
						We present a tool that combines fast mapping, error correction, and de novo assembly (mecat; accessible at https://github.com/xiaochuanle/MECAT) for processing single-molecule sequencing (sms) reads. mecat’s computing effciency is superior to that of current tools, while the results mecat produces are comparable or improved. mecat enables reference mapping or de novo assembly of large genomes using sms reads on a single computer.
					</div>
			   </el-col>
			</el-row>
			<el-row >
				<el-col :offset="1" :span="2"><div  class="text text-right" >Url:</div></el-col>
				<el-col :offset="1" :span="19"><el-link type="primary"  href="https://github.com/xiaochuanle/MECAT" target="_blank">https://github.com/xiaochuanle/MECAT</el-link></el-col>
			</el-row>
			<el-row >
				<el-col :offset="1" :span="2">
					<div  class="text text-right">Reference:
					</div>
				</el-col>
				<el-col  :offset="1":span="19">
					<div  class="text ">
						Chuan-Le Xiao, Ying Chen, Shang-Qian Xie, Kai-Ning Chen, Yan Wang, Yue Han, Feng Luo, Zhi Xie. MECAT: fast mapping, error correction, and de novo assembly for single-molecule sequencing reads. Nature Methods, 14(11):1702-1704, 2017
			        </div>
				</el-col>
			</el-row>			
		  </el-card>
		  <div class="title"><span>IPomics</span></div>
		  <el-card class="box-card">
			<div slot="header" class="clearfix">
			  <span>ISOdb</span>
			</div>
			<el-row >
				<el-col :offset="1" :span="2">
					<div  class="text text-right">Description:
					</div>
				</el-col>
				<el-col  :offset="1":span="19">
					<div  class="text ">
						In this study, we firstly propose a novel high-sensitivity peptides identification strategy, IPomics, that incorporated the abundance information of translation into the peptide matching score model of MS-based proteomics. IPomics provides more confident protein identification compared with Mascot, OMSSA, X!Tanden and pFind, and the average of improvement identification rate of peptides and protein groups were up to 20% and 15% in MS datasets respectively.
				   </div>
			   </el-col>
			</el-row>
			<el-row >
				<el-col :offset="1" :span="2"><div  class="text text-right" >Url:</div></el-col>
				<el-col :offset="1" :span="19"><el-link type="primary"  href="https://github.com/shang-qian/IPomics" target="_blank">https://github.com/shang-qian/IPomics</el-link></el-col>
			</el-row>			
		  </el-card>
		  <!-- DistortedMap Software-->
		  <el-card class="box-card">
			<div slot="header" class="clearfix">
			  <span>DistortedMap</span>
			</div>
			<el-row >
				<el-col :offset="1" :span="2">
					<div  class="text text-right">Description:
					</div>
				</el-col>
				<el-col  :offset="1":span="19">
					<div  class="text ">
						In this study, a new approach was proposed to correct the recombination fraction between epistatic distorted markers in backcross and F2 populations under the framework of fitness and liability models. The information for three or four markers flanking with an epistatic segregation distortion locus was used to estimate the recombination fraction by the maximum likelihood method, implemented via an expectation–maximisation algorithm.
			        </div>
				</el-col>
			</el-row>
			<el-row >
				<el-col :offset="1" :span="2"><div  class="text text-right" >Url:</div></el-col>
				<el-col :offset="1" :span="19"><el-link type="primary"  href="http://www.nature.com/hdy/journal/v112/n5/suppinfo/hdy2013127s1.html" target="_blank">http://www.nature.com/hdy/journal/v112/n5/suppinfo/hdy2013127s1.html</el-link></el-col>
			</el-row>
			<el-row >
				<el-col :offset="1" :span="2">
					<div  class="text text-right">Reference:
					</div>
				</el-col>
				<el-col  :offset="1":span="19">
					<div  class="text ">
						1:Shang-Qian Xie, Jian-Ying Feng, Yuan-Ming Zhang. Linkage group correction using epistatic distorted markers in F2 and backcross populations. Heredity, 2014, 112(5): 479-488<br /> 2.Shang-Qian Xie, Qing-Chun Geng, Yuan-Ming Zhang. DistortedMap: A software package for linkage group correction and quantitative trait locus mapping in distorted segregation populations. Journal Of Nanjing Agricultural University, 2014, 37(5): 13-18
					</div>
			   </el-col>
			</el-row>			
		  </el-card>
	</div>
</template>


<style>
    .title {
        font-size: 36px;
        color: #333;
        letter-spacing: 1px;
        text-indent: 4px;
        text-align: center;
        margin-bottom: 18px;
        /* font-weight: 600; */
    }
    
    .text {
        font-size: 14px;
        margin-bottom: 18px;
    }
    
    .text-right {
        text-align: right;
        font-size: 14px;
    }
    
    .clearfix {
        font-weight: 600;
    }
    
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
    
    .box-card {
        width: 100%;
    }
    
    .el-card {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
</style>