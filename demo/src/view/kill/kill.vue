<style lang="less" scoped>
.item_title{
    width: 100%;
    height: 35px;
    font-weight: 500;
    font-size: 13px;
    padding: 2% 0 0 0;
    span{
        border-left: 2px solid rgba(0, 0, 255, 0.6);
        padding: 0 0 0 5px;
        margin: 0 0 0 5%;
    }
}
.box_item{
    width: 100%;
    display: flex;
       margin: 0 0 70px 0; 
    flex-wrap: wrap;
    .item{
        width: 42%;
        margin: 10px 0 2% 5%;
        border: 1px solid #EDEDED;
        img{
            width: 100%;
            border: 1px solid #EDEDED;
        }
        div{
            width: 100%;
            height: 33px;
            font-size: 10px;
            font-weight: 700;
            box-sizing: content-box;
            padding: 0 0 0 10px;
        }
    }
    .box_foot{
       width: 100%;
       height: 50px;
       span{
            font-size: 12px;
          color:  rgba(0, 0, 255, 0.6);
          border-right:1px solid rgba(0, 0, 255, 0.6);
          box-sizing: content-box;
          padding: 0 5px 0 0;
       }
    }

}

</style>
<template>
    <div class="box">
    <div class="both">
        <div class="item_title flex_l_center"><span>必备求职技能</span></div>
        <div class="box_item">
            <div class="item" v-for="(item,index) in itemSrc" :key="index">
                <img :src="item.imgSrc" alt="">
                <div class="flex_l_center">{{item.name}}</div>
            </div>
            <div class="box_foot flex_center" @click="addItem()"><span>查看更多</span></div>
        </div>
    </div>
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
            itemSrc:[
                {
                    imgSrc:require('../../assets/img/two/images/one.jpg'),
                    name:'简历制作'
                },
                {
                    imgSrc:require('../../assets/img/two/images/two.jpg'),
                    name:'POA面试法则'
                },
                {
                    imgSrc:require('../../assets/img/two/images/three.jpg'),
                    name:'春招集训营'
                },
                {
                    imgSrc:require('../../assets/img/two/images/four.jpg'),
                    name:'群面大解析'
                }
            ]
        }
    },
    methods:{
        addItem(){
            this.itemSrc=this.itemSrc.concat(this.itemSrc)
        }
    }
}
</script>