<style lang="less" scoped>
.box_nav{
    height: 50px;
    img{
        width: 5%;
        margin: 0 12px 0 15px;
    }
    span{
        font-size: 15px;
        font-weight: 600
    }
}
.box_info{
    background: #fff;
    padding: 30px 0 0 0;
    margin: 1px auto 0;
    .info_title{
        .info_name{
            font-size: 15px;
            font-weight: 600;
            margin: 0 10px 5px 18px;
        }
        .info_price{
            font-size: 16px;
            font-weight: 600;
            color: rgb(236, 176, 9);
        }
    }
    .box_region{
        height: 25px;
        margin: 0 0 0 10px;
        span{
            font-size: 12px;
            border-right: 1px solid #ccc;
            padding:  0 10px 0 0 ;
            color: rgba(145, 131, 131, 0.87);
            margin: 0 0 0 10px;
            &:last-child{
                border: 0
            }
        }
    }
    
}
.box_label{
    display: flex;
    flex-wrap: wrap;
    margin: 0 10px 0 15px;
    padding: 0 0 20px 0;
    border-bottom: 1px solid #EDEDED;
    .label_item{
        border: 1px solid blue;
        color: blue;
        padding:7px 12px;
        font-size: 12px;
        border-radius: 20px;
        margin: 10px 0 0 5px;
    }
}
.box_company{
    height: 100px;
    width: 100%;
    margin: 0 0 0 15px;
    .company_img{
        width: 20%;
        border: 1px solid #EDEDED;
        img{
        width: 100%;
        }
    }
    .company_info{
        margin: 0 0 0 20px;
        .company_infoname{
            font-size: 17px;
            font-weight: 600;
            margin: 0 0 25px 0;
        }
        .company_infotype{
            font-size: 14px;
            color: rgb(83, 80, 80);
        }
    }
}

.box_con{
    margin: 10px auto 1px;
    padding: 20px 0 0 0;
    .con_title{
        font-size: 15px;
        font-weight: 600;
        margin: 0 0 0 20px;
    }
    .con_summary{
        .summary_title{
            font-size: 12px;
            color: rgb(83, 80, 80);
            margin:20px 0 10px 22px;
        }
        p{
            font-size: 12px;
            color: rgb(83, 80, 80);
            margin:0 20px 0 20px;
            padding: 0 0 10px 0;
            line-height: 20px;
        }
    }
    &:last-child{
         margin: 1px auto 0;
     }
}
</style>
<template>
    <div class="box">
        <div class="box_nav flex_l_center both">
            <img src="../../assets/img/five/images/left.jpg" alt="" @click="$router.go(-1)">
            <span>职位详情</span>
        </div>
        <div class="box_info both">
            <div class="info_title flex_l_center">
                <div class="info_name">总经理助理</div>
                <div class="info_price">3k-5k</div>
            </div>
            <div class="box_region flex_l_center">
                <span>全职</span>
                <span>学历不限</span>
                <span>福建福州</span>
            </div>
            <div class="box_region flex_l_center">
                <span>截止日期:2025-06-30</span>
            </div>
            <div class="box_label">
                <div class="label_item" v-for="(item,index) in labelList" :key="index">{{item}}</div>
            </div>
            <div class="box_company flex_l_center">
                <div style="width:20%" class="company_img">
                    <img src="../../assets/img/first/images/item.jpg" alt="">
                </div>
                <div class="company_info">
                    <div class="company_infoname">福大自动化</div>
                    <div class="company_infotype">批发/零售 | 其它 | 200人以上
                    </div>
                </div>
            </div>
        </div>
        <div class="box_con both">
            <div class="con_title">职位描述</div>
            <div class="con_summary">
                <div class="summary_title">[工作概述]:</div>
                <p>处理总经理的日常事务，负责公司的项目管理，做好市场部工作何行政部管理工作</p>
            </div>
        </div>
        <div class="box_con both">
            <div class="con_title">任职要求</div>
            <div class="con_summary">
                <div class="summary_title">[岗位要求]:</div>
                <p>1. 应届生何实习生在校内担任过学生会主席，协会主席，党支部书记，团支部书记，班长职务的学生。</p>
                <p>2. 性格开朗活泼，做事认真负责；身高：男170cm，女：160cm</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            labelList:['技能培训','岗位晋升','带薪年假','500强','行业前景好','专业对口']
        }
    }
}
</script>