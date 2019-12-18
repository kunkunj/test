<style lang="less" scoped>
.head{
    height: 50px;
    background: #fff;
    font-size: 14px;
    font-weight: 600;
    box-sizing: content-box;
    span{
        margin: 0 0 0 15px;
    }
}
.both_info{
    width: 95%;
    margin: 0 auto;
    background: #fff
}
.box_myinfo{
    height: 140px;
    margin: 3px auto 0;
    img{
        width: 25%;
        border-radius: 50%;
        margin: 0 10px 0 20px;
    }
    .name{
        font-size: 15px;
        font-weight: 600;
        margin: 0 0 10px 0;
        width: 94%;
        .info_btn{
            width: 65px;
            height: 22px;
            font-size: 10px;
            font-weight: 500;
            background: rgba(190, 189, 189, 0.2)
        }
    }
    .detail{
        font-size: 13px;
        font-weight: 500;
        color: rgb(138, 136, 136);
    }
}
.box_menu{
    margin: 15px auto 0;
    .menu_item{
        height: 40px;
        font-size: 12px;
        border-bottom: 1px solid #EDEDED;
        margin: 0 20px 0 15px;
        .menu_left{
            width: 50%;
        img{
            width: 6%;
            margin: 0 10px 0 0;
        }
        }
    }
    
}
</style>
<template>
    <div class="box">
        <div class="head both_info flex_l_center"><span>我的</span></div>
        <div class="box_myinfo both_info flex_l_center">
            <img src="../../assets/img/four/photo.png" alt="">
            <div style="width:100%">
                <div class="name flex_between">
                    <div>未命名</div>
                    <div class="info_btn flex_center">个人信息</div>
                </div>
                <div class="detail">
                    <span>未选择学校 |</span>
                    <span>未选择专业</span>
                </div>
            </div>
        </div>
        <div class="box_menu both_info">
            <div class="menu_item flex_between" v-for="(item,index) in menuList" :key="index">
                <div class="menu_left flex_l_center">
                    <img :src="item.imgSrc" alt="">
                    <div>{{item.name}}</div>
                </div>
                <div>></div>
            </div>
        </div>
        <div class="box_menu both_info">
            <div class="menu_item flex_between" v-for="(item,index) in menuListt" :key="index">
                <div class="menu_left flex_l_center">
                    <img :src="item.imgSrc" alt="">
                    <div>{{item.name}}</div>
                </div>
                <div>></div>
            </div>
        </div>
        <div style="height:50px;width:100%"></div>
        <footbar></footbar>
    </div>
</template>
<script>
import footbar from "../../components/footer";
export default {
    components:{
        footbar
    },
    data () {
        return {
            menuList:[
                {
                    imgSrc:require('../../assets/img/four/images/resumeIcon.jpg'),
                    name:'我的简历'
                },
                {
                    imgSrc:require('../../assets/img/four/images/expectIcon.jpg'),
                    name:'求职期望'
                },
                {
                    imgSrc:require('../../assets/img/four/images/favoritesIcon.jpg'),
                    name:'收藏夹'
                },
                {
                    imgSrc:require('../../assets/img/four/images/courseIcon.jpg'),
                    name:'我的课程'
                },
            ],
            menuListt:[
                {
                    imgSrc:require('../../assets/img/four/images/passwordIcon.jpg'),
                    name:'修改密码'
                },
                {
                    imgSrc:require('../../assets/img/four/images/feedbackIcon.jpg'),
                    name:'建议反馈'
                },
                {
                    imgSrc:require('../../assets/img/four/images/outIcon.jpg'),
                    name:'退出登录'
                },
            ]
        }
    }
}
</script>