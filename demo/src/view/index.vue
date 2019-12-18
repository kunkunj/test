<style lang="less" scoped>

.box_swipe {
  height: 164px;
  img {
    width: 100%;
  }
}
.box_nav {
  height: 100px;
  display: flex;
  .nav_item {
    width: 25%;
    height: 100%;
    font-size: 9px;
    font-weight: 600;
    .nav_img {
      width: 55%;
      height: 50%;
      border-radius: 50%;
      background: rgba(230, 243, 255, 1);
      margin: 0 0 10px 0;
    }
  }
}
.box_con {
  margin: 5px auto 0;
  .con_title {
    width: 100%;
    height: 32px;
    display: flex;
    .title_item {
      width: 33%;
      font-size: 11px;
      font-weight: 600;
      .title_name{
        padding: 0 0 3px 0;
        box-sizing: content-box;
      }
    }
  }
  .con_type{
    width: 100%;
    .con_head{
      margin: 0 0 0 5px;
      .head_item{
        width: 50px;
        height: 24px;
        font-size: 10px;
        border-radius: 15px;
        margin: 5px 0 0 10px;
      }
    }
  }
  .con_con{
    width: 100%;
      margin: 25px 0 70px 0;
    .con_item{
      margin: 0 20px 0 10px;
      padding: 10px 0 10px 0;
      border-bottom: 1px solid #EDEDED;
      img{
        width: 20%;
        border: 1px solid #EDEDED;
        margin: 0 10px 0 0;
      }
      .item_info{
        width: 80%;
        .item_name{
          .name{
            font-size: 12px;
          font-weight: bolder
          }
          .price{
          font-size: 10px;
          font-weight: bolder;
          color: rgb(235, 190, 42);
          }
        }
        .item_boss{
          font-size: 12px;
          color: rgba(143, 140, 140, 0.979);
          margin: 8px 0 0 0 ;
        }
        .item_detail{
          font-size: 10px;
          color: rgba(143, 140, 140, 0.979);
          margin: 5px 0 0 0 ;
        }
      }
    }
  }
}
</style>
<template>
  <div class="box">
    <div class="box_swipe both">
      <van-swipe :autoplay="3000" indicator-color="#000" style="height:100%">
        <van-swipe-item>
          <img src="../assets/img/first/swipe.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/first/swipe.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/first/swipe.png" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="box_nav both">
      <div class="nav_item flex_v_center">
        <div class="nav_img flex_center">
          <img src="../assets/img/first/images/InvitationIcon.jpg" alt />
        </div>
        <div>面试邀请</div>
      </div>
      <div class="nav_item flex_v_center">
        <div class="nav_img flex_center">
          <img src="../assets/img/first/images/courseIcon.jpg" alt />
        </div>
        <div>我的课程</div>
      </div>
      <div class="nav_item flex_v_center">
        <div class="nav_img flex_center">
          <img src="../assets/img/first/images/recruitIcon.jpg" alt />
        </div>
        <div>招聘会</div>
      </div>
      <div class="nav_item flex_v_center">
        <div class="nav_img flex_center">
          <img src="../assets/img/first/images/resumeIcon.jpg" alt />
        </div>
        <div>我的简历</div>
      </div>
    </div>
    <div class="box_con both">
      <div class="con_title">
        <div class="title_item flex_center" v-for="(item,index) in title" :key="index" @click="flag=index">
          <span class="title_name"
            :style="flag===index ? 'color:#333;border-bottom:2px solid blue':'color:#ccc;border:0'"
          >{{item}}</span>
        </div>
      </div>
      <div class="con_type">
        <div class="con_head flex_l_center">
          <div class="head_item flex_center" :style="changeType===0?'background:rgba(0, 0, 255, 0.6);color:#fff':'background:#EDEDED'" @click="changeType=0">全职</div>
          <div class="head_item flex_center" :style="changeType===1?'background:rgba(0, 0, 255, 0.6);color:#fff':'background:#EDEDED'" @click="changeType=1">实习</div>
        </div>
      </div>
      <div class="con_con">
        <div class="con_item flex_center" v-for="(item,index) in conItem" :key="index" @click="$router.push('/positionDetail')"> 
          <img :src="item.imgUrl">
          <div class="item_info">
            <div class="item_name flex_between">
              <div class="name">{{item.name}}</div>
              <div class="price">{{item.price}}</div>
            </div>
            <div class="item_boss">{{item.boss}}</div>
            <div class="item_detail">{{item.detail}}</div>
          </div>
        </div>
      </div>
    </div>
    <footbar></footbar>
  </div>
</template>
<script>
import footbar from "../components/footer";
export default {
  components: {
    footbar
  },
  data() {
    return {
      title: ["最新职位", "推荐职位", "热门企业"],
      conItem:[
        {
          imgUrl:require('../assets/img/first/images/item.jpg'),
          name:'平面设计实习生',
          price:'1k-2k',
          boss:'Aexele',
          detail:'本科！上海上海'
        },
        {
          imgUrl:require('../assets/img/first/images/item.jpg'),
          name:'平面设计实习生',
          price:'1k-2k',
          boss:'Aexele',
          detail:'本科！上海上海'
        },
        {
          imgUrl:require('../assets/img/first/images/item.jpg'),
          name:'平面设计实习生',
          price:'1k-2k',
          boss:'Aexele',
          detail:'本科！上海上海'
        },
      ],
      flag: 0,
      changeType:0
    };
  },
  created() {},
  methods:{
  }
};
</script>