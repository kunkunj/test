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
.box_title{
    height: 50px;
    margin: 1px auto 0;
    .title_item{
        font-size: 13px;
        width: 25%;
        height: 100%;
        box-sizing:content-box;
        border-right: 1px solid #EDEDED;
        &:nth-child(4){
        border: 0
    }
    }
    
}
.no_item{
    width: 100%;
    height: 80vh;
}
</style>
<template>
    <div class="box">
        <div class="head both flex_l_center"><span>投递箱</span></div>
        <div class="box_title both flex_center">
            <div class="title_item flex_center" v-for="(item,index) in titleList" :key="index" :style="flag===index? 'border-bottom:1px solid blue;color:blue' :''" @click="flag=index">{{item}}</div>
        </div>
        <img class="no_item" src="../../assets/img/three/nobg.jpg" alt="">
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
            titleList:['投递成功','面试邀请','录用通知','被淘汰'],
            flag:0
        }
    }
}
</script>