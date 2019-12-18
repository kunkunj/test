<style lang='less' scoped>
.foot_bar {
  display: flex;
  width: 100%;
  height: 60px;
  position: fixed;
  background: #fff;
  bottom: 0;
  .bar_item {
    width: 25%;
    height: 100%;
    border: 1px solid #ededed;
    img {
      width: 40%;
    }
  }
}
</style>
<template>
  <div class="foot_bar" >
    <div class="bar_item flex_center" @click="toindex('0')">
      <img :src="i==='0'?barIcon[0].iconSel:barIcon[0].icon" alt />
    </div>
    <div class="bar_item flex_center" @click="tokill(1)">
      <img :src="i===1?barIcon[1].iconSel:barIcon[1].icon" alt />
    </div>
    <div class="bar_item flex_center" @click="todelivery(2)">
      <img :src="i===2?barIcon[2].iconSel:barIcon[2].icon" alt />
    </div>
    <div class="bar_item flex_center" @click="toinfo(3)">
      <img :src="i===3?barIcon[3].iconSel:barIcon[3].icon" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: "footbar",
  data() {
    return {
      barIcon: [
        {
          icon: require("../assets/img/footbar/sy_a.png"),
          iconSel: require("../assets/img/footbar/sy.png")
        },
        {
          icon: require("../assets/img/footbar/sc_a.png"),
          iconSel: require("../assets/img/footbar/sc.png")
        },
        {
          icon: require("../assets/img/footbar/dpj.png"),
          iconSel: require("../assets/img/footbar/lt.png")
        },
        {
          icon: require("../assets/img/footbar/w_a.png"),
          iconSel: require("../assets/img/footbar/w.png")
        }
      ],
      i:0,
    };
  },
  methods:{
    toindex (index){
      this.i='0'
      this.$router.push({path:'/',query:{index:index}})
    },
    tokill(index){
      this.i=1
      this.$router.push({path:'/kill',query:{index:index}})
    },
    toinfo(index){
      this.i=3
      this.$router.push({path:'/info',query:{index:index}})
    },
    todelivery(index){
      this.i=2
      this.$router.push({path:'/delivery',query:{index:index}})
    }
  },
  created(){
    this.i=this.$route.query.index || '0'
    console.log(this.i)
  }
};
</script>